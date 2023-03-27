import React from "react";
import ProfileIcon from "./ProfileIcon";

function SidebarUser() {
  return (
    <div className="flex items-center gap-2 rounded border bg-white p-2">
      <ProfileIcon src="" profileType="user" />
      <div className=" flex flex-col">
        <h3 className="w-32 truncate text-sm font-medium">
          Bikrant J. Budhathoki Xettri
        </h3>
        <p className="text-xs leading-4 text-gray-500">@bikrantjung</p>
      </div>
    </div>
  );
}

export default SidebarUser;
