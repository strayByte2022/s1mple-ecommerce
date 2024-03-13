import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ldefoeigpzhxyouworax.supabase.co';
const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZWZvZWlncHpoeHlvdXdvcmF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTkxMjY3MiwiZXhwIjoyMDI1NDg4NjcyfQ.HakafMgXa5i2ciIpdHa5QGhnu4-X8Hn8jI4fJCWnYKI'

//
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
