-- Create the action_commitments table for storing form responses
CREATE TABLE action_commitments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  energy_usage TEXT NOT NULL,
  commitment TEXT NOT NULL,
  ideas TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);