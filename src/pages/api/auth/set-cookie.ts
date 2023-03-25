import { supabase } from "@/supabase/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .select();
  console.log(profileData);
  return res.status(200).json({ profileData });
};

export default handler;
