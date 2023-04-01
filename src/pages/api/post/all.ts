// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabaseServerClient } from "@/supabase/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabase = supabaseServerClient(req, res);
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  try {
    // const d = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // const json = await d.json();
    // console.log("JSON PLaceholder", json);
    const { data, error } = await supabase
      .from("posts")
      .select("*,profiles(*)")
      .order("created_at", { ascending: false });
    // console.log("DATA from supabase", data);
    return res.status(200).json(data);
    // console.log("==================SERVER DATA=====================");
    // console.log(data);
    // console.log("==================SERVER DATA=====================");
    // if (error) throw new Error(error.message);
    // return res.status(200).json(data);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}
