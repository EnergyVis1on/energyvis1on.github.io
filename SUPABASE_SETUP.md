# Supabase Environment Variables

To connect the application to Supabase, you need to set up the following environment variables:

## Required Environment Variables

Add these to your `.env` file or your deployment environment:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## How to Get These Values

1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy the Project URL and paste it as `VITE_SUPABASE_URL`
4. Copy the Anon (public) key and paste it as `VITE_SUPABASE_ANON_KEY`

## Database Setup

Run the SQL commands in `supabase-schema.sql` in your Supabase SQL Editor to create the required table:

```sql
CREATE TABLE action_commitments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  energy_usage TEXT NOT NULL,
  commitment TEXT NOT NULL,
  ideas TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Netlify Configuration

For deployment on Netlify, add these environment variables in your site settings:
- Go to Site settings > Environment variables
- Add both `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` with your values