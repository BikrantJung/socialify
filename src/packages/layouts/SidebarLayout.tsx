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
      <>{children}</>
    </div>
  );
}

export default SidebarLayout;
