import Button from "@/packages/components/shared/button/Button";
import LabelButton from "@/packages/components/shared/button/LabelButton";
import ImageDisplay from "@/packages/components/shared/image-display/ImageDisplay";
import BaseModal from "@/packages/components/shared/modal/BaseModal";
import { IconPhoto, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { ChangeEvent, useRef, useState } from "react";
import TextArea from "react-textarea-autosize";
import { useFileUpload } from "@/packages/hooks/useFileUpload";
import { useForm } from "@/packages/hooks/useForm";

interface CreatePostModal {
  isOpen: boolean;
  onClose: () => void;
}
function CreatePostModal({ onClose, isOpen }: CreatePostModal) {
  const createPostInput = useRef<HTMLTextAreaElement>(null);
  const { handleFileChange, setUploadedFiles, uploadedFiles } = useFileUpload({
    fileType: "image/",
  });
  const {
    formValues: createPostValues,
    handleChange,
    handleSubmit,
  } = useForm(() => {}, {
    postTitle: "",
  });
  const handleRemoveImage = (id: number) => {
    setUploadedFiles((prevImages) =>
      prevImages.filter((image) => image.id !== id)
    );
  };

  return (
    <BaseModal onClose={onClose} isOpen={isOpen} title="Create new Post">
      <form>
        <div className="mt-2">
          <div
            className="h-28 cursor-text"
            onClick={() => createPostInput.current?.focus()}
          >
            <TextArea
              name="post-title"
              onChange={handleChange}
              ref={createPostInput}
              maxRows={4}
              className="h-full w-full resize-none border-none p-0 text-lg text-gray-800 outline-none focus-visible:shadow-none focus-visible:ring-0 "
              placeholder="What's new, Bikrant?"
            />
          </div>
          {uploadedFiles.length ? (
            <div className="flex max-h-64 flex-wrap items-center gap-2 overflow-hidden hover:overflow-y-auto">
              {uploadedFiles.map((image) => {
                return (
                  <div key={image.id} className="flex w-full flex-col">
                    <ImageDisplay
                      altText="Upload Image"
                      imageName={image.file.name}
                      imageSize={image.file.size}
                      imageURL={image.fileBlob}
                      removeImage={() => handleRemoveImage(image.id)}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-4 flex items-center">
          <LabelButton
            variant="neutral"
            htmlFor="post-image"
            className="focus-within:shadow-ring"
          >
            <IconPhoto className="icon h-4 w-4" />
            <span>Upload</span>
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              id="post-image"
              className="sr-only"
              multiple
            />
          </LabelButton>

          <div className="ml-auto flex items-center gap-2">
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>

            <Button type="submit">Create</Button>
          </div>
        </div>
      </form>
    </BaseModal>
  );
}

export default CreatePostModal;
