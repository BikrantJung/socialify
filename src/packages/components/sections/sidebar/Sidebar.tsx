import Image from "next/image";
import React from "react";
import SidebarMenu from "./SidebarMenu";
import SidebarPages from "./SidebarPages";
import SidebarUser from "./SidebarUser";

function Sidebar() {
  return (
    <div className="hideScrollbar fixed flex h-[85vh] w-52 flex-col py-2 ">
      <SidebarUser />
      <div className="mt-4">
        <SidebarMenu />
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <h4 className="text-sm font-medium text-gray-500">Pages you liked</h4>
        <SidebarPages />
      </div>
    </div>
  );
}

export default Sidebar;
