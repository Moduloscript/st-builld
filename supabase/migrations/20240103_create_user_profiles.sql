-- Create user_profiles table
CREATE TABLE IF NOT EXISTS public.user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT,
    avatar_url TEXT,
    phone_number TEXT,
    preferences JSONB DEFAULT '{"newsletter": true, "notifications": true}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to read their own profile
CREATE POLICY "Users can view own profile"
    ON public.user_profiles
    FOR SELECT
    TO authenticated
    USING ((select auth.uid()) = id);

-- Create policy to allow users to update their own profile
CREATE POLICY "Users can update own profile"
    ON public.user_profiles
    FOR UPDATE
    TO authenticated
    USING ((select auth.uid()) = id)
    WITH CHECK ((select auth.uid()) = id);

-- Create policy to allow insert during signup
CREATE POLICY "Users can insert own profile"
    ON public.user_profiles
    FOR INSERT
    TO authenticated
    WITH CHECK ((select auth.uid()) = id);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_user_profiles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

-- Create trigger to call the function before update
CREATE TRIGGER update_user_profiles_updated_at
    BEFORE UPDATE ON public.user_profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_user_profiles_updated_at();

-- Create indexes
CREATE INDEX IF NOT EXISTS user_profiles_email_idx ON public.user_profiles (email);
CREATE INDEX IF NOT EXISTS user_profiles_full_name_idx ON public.user_profiles (full_name);
CREATE INDEX IF NOT EXISTS user_profiles_id_idx ON public.user_profiles (id); -- Added index for id

-- Grant necessary permissions
GRANT ALL ON public.user_profiles TO authenticated;
GRANT SELECT ON public.user_profiles TO anon;