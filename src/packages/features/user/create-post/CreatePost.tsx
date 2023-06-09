import ProfileIcon from "@/packages/components/sections/sidebar/ProfileIcon";
import { useForm } from "@/packages/hooks/useForm";
import { IconPhoto } from "@tabler/icons-react";
import { useState } from "react";
import CreatePostModal from "./CreatePostModal";

function CreatePost() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CreatePostModal isOpen={open} onClose={() => setOpen(false)} />
      <div
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        aria-label="Click me"
        className="flex cursor-pointer items-center gap-2 rounded border bg-white p-3 transition hover:border-gray-700"
      >
        <ProfileIcon profileType="user" active={true} />
        <p className="ml-2 text-sm font-medium text-gray-400">
          What&apos;s new, Bikrant?{" "}
        </p>
        <div className="ml-auto">
          <IconPhoto className="icon text-gray-400" />
        </div>
      </div>
    </>
  );
}

export default CreatePost;
