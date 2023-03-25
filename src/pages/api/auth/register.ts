import { supabase } from "@/supabase/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });
  const { username, email, password } = req.body;

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    if (user) {
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .insert({
          id: user.id,
          username,
        });
      if (profileError) throw new Error(profileError.message);
      return res.status(200).json({ profileData, ...user });
    }

    return res.status(200).json({ message: "OK" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
export default handler;
