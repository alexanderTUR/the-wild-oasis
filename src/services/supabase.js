import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://qemssvkftcyfysymfjhj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlbXNzdmtmdGN5ZnlzeW1mamhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMzM2MTUsImV4cCI6MjAyMjkwOTYxNX0.RZFz_sCnn1-enSRzC_w0-ph4lX2F9Nl52TQ3pwH1inw';
export const supabase = createClient(supabaseUrl, supabaseKey);
