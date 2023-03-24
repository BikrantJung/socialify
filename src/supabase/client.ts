import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_HOST ?? "";
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON ?? "";
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
