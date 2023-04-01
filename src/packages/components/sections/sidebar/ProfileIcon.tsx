import src from "@tailwindcss/forms";
import Image from "next/image";
import React from "react";

interface ProfileIconProps {
  src?: string; // User may not have profile picture
  active?: boolean;
  profileType: "user" | "page";
}

function ProfileIcon({
  src,
  active = true,
  profileType = "user",
}: ProfileIconProps) {
  const defaultProfilePic =
    "https://images.pexels.com/photos/7485787/pexels-photo-7485787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const userProfilePic =
    "https://iaklhqbxgftzqbrditoh.supabase.co/storage/v1/object/public/avatars/" +
    src;
  return (
    <div className="relative h-8 w-8 rounded-full">
      <Image
        alt="Profile Picture"
        src={src ? userProfilePic : defaultProfilePic}
        fill
        className="h-8  w-8 rounded-full object-cover"
      />
      {profileType === "user" && (
        <div
          className={`absolute bottom-0 right-0 h-2 w-2 rounded-full outline outline-2 outline-white ${
            active ? " bg-green-500" : "bg-gray-500"
          }`}
        ></div>
      )}
    </div>
  );
}
export default ProfileIcon;
