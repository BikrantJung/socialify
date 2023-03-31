import React, { ChangeEvent, useState } from "react";
import { toast } from "react-hot-toast";
interface IFileUpload {
  /**
   * Will only select these file type and filters others. <br/>
   * E.g. Pass image/ , other file types than images are filtered out
   */
  fileType: string;
}
interface UploadImage {
  id: number;
  file: File;
  fileBlob: string;
}
export const useFileUpload = ({ fileType }: IFileUpload) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadImage[]>([]);
  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    setUploadedFiles([]);
    const files = e.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const singleFile = files[i];
        if (!singleFile.type.startsWith(fileType)) {
          toast.error(`Filtered invalid file types.`);
          continue;
        }
        setUploadedFiles((prev) => [
          ...prev,
          {
            id: i,
            file: singleFile,
            fileBlob: URL.createObjectURL(singleFile),
          },
        ]);
      }
    }
  }
  function resetUploadedFiles() {
    setUploadedFiles([]);
  }
  return {
    uploadedFiles,
    setUploadedFiles,
    resetUploadedFiles,
    handleFileChange,
  };
};
