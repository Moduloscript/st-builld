# St Peter's Pharmacy Platform

A modern pharmaceutical marketing, educational, and prescription management platform built with Next.js and Supabase.

## Features

- **Product Catalog** - Browse and search pharmaceutical products
- **Prescription Management**
  - Online prescription refill requests
  - Status tracking
  - Consultation booking
- **Health Education**
  - Health tips and resources
  - Blog articles
  - Medication guides
- **Location Services** - Find nearby pharmacy locations
- **Admin Dashboard** - Secure admin interface for managing:
  - Product inventory
  - Prescription requests
  - Content management
  - Analytics

## Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **Backend:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **Hosting:** Vercel (recommended)
- **Content:** MDX for blog posts and health resources

## Prerequisites

- Node.js 18.x or later
- npm/yarn/pnpm
- Supabase account and project
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/st-peters-pharmacy.git
cd st-peters-pharmacy
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Then edit `.env.local` with your Supabase credentials and other required variables.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                  # Next.js app router pages
├── components/           # Reusable UI components
│   ├── ui/              # Basic UI components
│   ├── features/        # Feature-specific components
│   └── layouts/         # Layout components
├── lib/                 # Utility functions and API
└── types/              # TypeScript type definitions
```

## Environment Variables

Required environment variables:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please contact [support@stpeterspharmacy.com](mailto:support@stpeterspharmacy.com)
