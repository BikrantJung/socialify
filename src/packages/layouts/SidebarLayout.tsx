import React from "react";
import Main from "../components/sections/main/Main";
import Sidebar from "../components/sections/sidebar/Sidebar";
interface SidebarLayoutProps {
  children: React.ReactNode;
}
function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="grid grid-cols-12 items-start">
      <div className="col-span-2 h-screen">
        <Sidebar />
      </div>
      <div className="col-span-8 flex flex-col gap-4 px-32 pt-2">
        <Main />
      </div>
      <div className="col-span-2 bg-blue-400">Right</div>
    </div>
  );
}

export default SidebarLayout;
