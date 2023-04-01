import { supabaseServerClient } from "@/supabase/client";
import { NextApiRequest, NextApiResponse } from "next";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const supabaseServer = supabaseServerClient(req, res);
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });
  const { email, password } = req.body;

  try {
    const {
      data: { session, user },
      error,
    } = await supabaseServer.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw new Error(error.message);
    }

    if (user) {
      const { data: profile, error } = await supabaseServer
        .from("profiles")
        .select()
        .eq("id", "b8ceb110-81e0-4921-a860-593fc035b5b0");
      if (error) throw new Error(error.message);
      return res.status(200).json({ profile, ...user });
    }

    return res.status(200).json({ message: "OK" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
export default handler;
