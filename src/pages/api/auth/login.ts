import { supabase } from "@/supabase/client";
import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });
  const { email, password } = req.body;

  try {
    const {
      data: { session, user },
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw new Error(error.message);
    }

    await supabase.auth.setSession({
      access_token: session?.access_token!,
      refresh_token: session?.refresh_token!,
    });
    console.log(session);
    // if (user) {
    //   console.log("USER ID", user.id);
    //   const { data: profileData, error: profileError } = await supabase
    //     .from("profiles")
    //     .select()
    //     .eq("id", user.id)
    //     .single();
    //   console.log("PROFILE DATA", profileData);
    //   if (profileError) throw new Error(profileError.message);
    //   return res.status(200).json({ profileData, ...user });
    // }

    return res.status(200).json({ message: "OK" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
export default handler;
