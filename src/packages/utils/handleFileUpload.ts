import { supabaseServerClient } from "@/supabase/client";
import formidable from "formidable";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

interface IHandleFileUpload {
  file: formidable.File;
  req: NextApiRequest;
  res: NextApiResponse;
  bucketName: string;
  uploadPathPrefix: string;
}

async function handleFileUpload({
  file,
  req,
  res,
  uploadPathPrefix,
  bucketName,
}: IHandleFileUpload) {
  const supabase = supabaseServerClient(req, res);
  const { filepath, mimetype, newFilename } = file;
  const fileContent = await fs.promises.readFile(filepath);

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from(bucketName)
    .upload(`${uploadPathPrefix}/${newFilename}`, fileContent, {
      contentType: mimetype!,
      cacheControl: "3600",
    });

  return {
    uploadData,
    uploadError,
  };
}
export { handleFileUpload };
