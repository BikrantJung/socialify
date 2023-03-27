import { IUserRegister } from "@/packages/types/auth/register.types";
import { supabaseServerClient } from "@/supabase/client";
import formidable from "formidable";
import uuid from "uuid4";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

// Handler Function
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const supabase = supabaseServerClient(req, res);
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const form = formidable({ multiples: false });
  form.parse(req, async (err, fields: any, files: any) => {
    if (err) throw new Error(err);
    try {
      const { email, password, username } = fields as IUserRegister;

      // First Signsup the user
      const {
        data: { user },
        error: signupError,
      } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signupError) {
        throw new Error(signupError.message);
      }

      if (user) {
        let profile_picture_path: string = "";
        // Upload the profile picture if user is sending it.
        if (files.profile_picture) {
          const { filepath, originalFilename, mimetype } =
            files.profile_picture;
          const fileContent = await fs.promises.readFile(filepath);

          // Upload image to supabase bucket
          const { data: uploadData, error: uploadError } =
            await supabase.storage
              .from("avatars")
              .upload(`${username}/${uuid()}`, fileContent, {
                contentType: mimetype,
                cacheControl: "3600",
              });

          if (uploadError) {
            throw new Error(uploadError.message);
          }
          profile_picture_path = uploadData.path;
        }

        // Create a profile for the user
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .insert({
            id: user.id,
            username,
            profile_picture: profile_picture_path,
          });
        if (profileError) throw new Error(profileError.message);
        return res.status(200).json({ profileData, ...user });
      }

      return res.status(200).json({ message: "OK" });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  });
};
export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler;
