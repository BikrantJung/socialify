import { IconTrash } from "@tabler/icons-react";
import image from "next/image";
import Image from "next/image";
import React from "react";

interface ImageDisplayProps {
  altText: string;
  imageURL: string;
  imageName: string;
  imageSize: number;
  removeImage?: () => void;
}

function ImageDisplay({
  altText,
  imageName,
  imageSize,
  imageURL,
  removeImage,
}: ImageDisplayProps) {
  return (
    <div className="relative flex w-full items-center rounded pr-2 shadow after:absolute after:top-0 after:left-0 after:h-full after:w-[3px] after:bg-purple-500 ">
      <div className="relative mr-4 h-[80px] w-[80px]">
        <Image alt={altText} src={imageURL} fill className="object-contain" />
      </div>
      <p className="mr-auto w-[100px] truncate text-xs  ">{imageName}</p>
      <p className="mx-4 rounded border-0 bg-purple-300 p-1 text-xs text-slate-800">
        {(imageSize / (1024 * 1024)).toFixed(2)} MB
      </p>
      <button
        type="button"
        onClick={() => removeImage?.()}
        className="rounded-none text-red-500"
      >
        <IconTrash className="icon" />
      </button>
    </div>
  );
}

export default ImageDisplay;
