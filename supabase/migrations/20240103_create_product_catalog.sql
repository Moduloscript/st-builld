-- Create product_catalog table
CREATE TABLE IF NOT EXISTS public.product_catalog (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image TEXT NOT NULL,
    category TEXT NOT NULL,
    rating DECIMAL(2,1) NOT NULL,
    highlights TEXT[] NOT NULL DEFAULT '{}',
    details TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.product_catalog ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read products
CREATE POLICY "Allow public read access"
    ON public.product_catalog
    FOR SELECT
    TO public
    USING (true);

-- Create policy to allow only authenticated users to modify products
CREATE POLICY "Allow authenticated users to modify products"
    ON public.product_catalog
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to call the function before update
CREATE TRIGGER update_product_catalog_updated_at
    BEFORE UPDATE ON public.product_catalog
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create function to get distinct categories
CREATE OR REPLACE FUNCTION get_distinct_categories()
RETURNS TABLE (category text)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT DISTINCT category FROM product_catalog ORDER BY category;
$$;

-- Grant access to the function for public
GRANT EXECUTE ON FUNCTION get_distinct_categories() TO public;

-- Create index for text search on name and description
CREATE INDEX IF NOT EXISTS product_catalog_name_search_idx
    ON public.product_catalog
    USING GIN (to_tsvector('english', name));

-- Create index for category filtering
CREATE INDEX IF NOT EXISTS product_catalog_category_idx
    ON public.product_catalog (category);

-- Create index for price range filtering
CREATE INDEX IF NOT EXISTS product_catalog_price_idx
    ON public.product_catalog (price);

-- Insert some sample data
INSERT INTO public.product_catalog (name, description, price, image, category, rating, highlights, details)
VALUES
    (
        'Pain Relief Tablets',
        'Fast-acting pain relief for headaches and minor aches',
        9.99,
        '/products/pain-relief.jpg',
        'Over-the-Counter Medications',
        4.5,
        ARRAY['Fast-acting formula', 'Suitable for adults and children over 12', 'Easy to swallow tablets'],
        'Contains paracetamol 500mg. Always read the label before use.'
    ),
    (
        'Vitamin C Complex',
        'High-strength vitamin C with zinc for immune support',
        14.99,
        '/products/vitamin-c.jpg',
        'Vitamins & Supplements',
        4.8,
        ARRAY['High strength formula', 'With added zinc', 'Supports immune system'],
        'Contains 1000mg Vitamin C and 15mg Zinc per tablet.'
    ),
    (
        'First Aid Kit',
        'Complete first aid kit for home and travel',
        24.99,
        '/products/first-aid.jpg',
        'First Aid',
        4.7,
        ARRAY['Comprehensive kit', 'Travel-friendly size', 'Includes guide book'],
        'Contains bandages, antiseptic wipes, scissors, and more.'
    );
