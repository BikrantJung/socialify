import { IUserRegister } from "@/packages/types/auth/register.types";
import { supabaseServerClient } from "@/supabase/client";
import formidable from "formidable";
import uuid from "uuid4";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { ICreatePost } from "@/packages/features/user/create-post/create-post.types";
import { handleFileUpload } from "@/packages/utils/handleFileUpload";

// Handler Function
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const supabase = supabaseServerClient(req, res);
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields: unknown, files) => {
    const { postTitle } = fields as ICreatePost;
    if (err) throw new Error(err);
    try {
      // Get current session user
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) throw new Error(error.message);

      if (session) {
        let files_paths = [];

        // Check if user posted any images and upload images to buckets
        if (Array.isArray(files["postImages[]"])) {
          for (let index = 0; index < files["postImages[]"].length; index++) {
            const file = files["postImages[]"][index];

            const { uploadData, uploadError } = await handleFileUpload({
              bucketName: "postimages",
              file,
              req,
              res,
              uploadPathPrefix: session.user.id,
            });

            // Upload files to buckets
            if (uploadError) throw new Error(uploadError.message);
            files_paths.push(uploadData?.path);
          }
        } else {
          const { uploadData, uploadError } = await handleFileUpload({
            bucketName: "postimages",
            file: files["postImages[]"],
            req,
            res,
            uploadPathPrefix: session.user.id,
          });
          if (uploadError) throw new Error(uploadError.message);
          files_paths.push(uploadData?.path);
        }

        // Now actually create a post
        const { data: createPostData, error: createPostError } = await supabase
          .from("posts")
          .insert({
            post_title: postTitle,
            post_images: files_paths,
            user_id: session?.user.id,
          })
          .select()
          .single();
        if (createPostError) throw new Error(createPostError.message);

        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select()
          .eq("id", session?.user.id)
          .single();

        if (profileError) throw new Error(profileError.message);
        createPostData.profiles = profileData;
        console.log("Create POST DAATA==========", createPostData);
        res.status(200).json(createPostData);
      } else {
        res.status(400).json({ msg: "Session Not Found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });
};
export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler;
