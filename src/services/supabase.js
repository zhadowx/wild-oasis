import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://eawezbmqrkojwfwewlly.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhd2V6Ym1xcmtvandmd2V3bGx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3ODI4MTEsImV4cCI6MjAyNjM1ODgxMX0.mJ35KaXd8sDeoN0F55LFxdIW33EEyfTMNvU9WuWC9Mk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
