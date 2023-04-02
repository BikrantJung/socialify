import React from "react";
import ProfileIcon from "../sidebar/ProfileIcon";
import { IconDots } from "@tabler/icons-react";

function Friends() {
  return (
    <div className="flex items-center gap-3">
      <ProfileIcon profileType="user" active />
      <p className="text-xs font-semibold text-gray-600">Amanda Miles</p>
      <button className="ml-auto">
        <IconDots className="icon text-gray-700" />
      </button>
    </div>
  );
}

export default Friends;
