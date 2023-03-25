import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import imageSVG from "@/assets/imageSVG.svg";
import Button from "../button/Button";
interface DropzoneProps {
  setAcceptedImages: React.Dispatch<React.SetStateAction<never[]>>;
}
function Dropzone({ setAcceptedImages }: DropzoneProps) {
  const onDrop = useCallback((acceptedFiles: any) => {
    setAcceptedImages(acceptedFiles);
  }, []);
  const {
    getRootProps,
    getInputProps,
    fileRejections,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg", ".jfif"],
    },
  });
  return (
    <div className="h-52  p-2">
      <div
        {...getRootProps()}
        className={`h-full w-full border-spacing-4 rounded-3xl border-4 border-dotted  p-3 transition ${
          isDragReject && "border-red-500"
        }  ${isDragAccept && "border-blue-500"}`}
      >
        <input {...getInputProps()} />

        <div className="flex h-full flex-col items-center justify-center">
          <div className="relative h-16 w-16 border-b">
            <Image
              alt="Profile svg"
              src={imageSVG}
              fill
              className="drop-shadow-md filter"
            />
          </div>
          <h1 className=" text-center text-lg font-bold">
            Upload a profile picture
          </h1>
          {fileRejections.map(({ file, errors }, i) => {
            return (
              <div className="my-4 flex flex-col" key={i}>
                {errors.map((error) => (
                  <p
                    key={error.message}
                    className=" text-xs leading-4  text-red-600"
                  >
                    {error.message}
                  </p>
                ))}
              </div>
            );
          })}
          <div className="mt-auto">
            <Button className="bg-purple-500  hover:bg-purple-600 active:bg-purple-700 ">
              Browse
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropzone;
