import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
  PreviewData,
} from "next";

import { createClient } from "@supabase/supabase-js";
import { ParsedUrlQuery } from "querystring";

// Create a single supabase client for interacting with your database
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_HOST ?? "";
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON ?? "";
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

export function supabaseServerClient(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return createServerSupabaseClient(
    {
      req,
      res,
    },
    {
      supabaseKey: SUPABASE_ANON,
      supabaseUrl: SUPABASE_URL,
    }
  );
}

export function supabaseAuthClient(ctx: any) {
  return createServerSupabaseClient(ctx, {
    supabaseKey: SUPABASE_ANON,
    supabaseUrl: SUPABASE_URL,
  });
}
