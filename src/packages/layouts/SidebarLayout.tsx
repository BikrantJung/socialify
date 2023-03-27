import React from "react";
import Sidebar from "../sections/sidebar/Sidebar";
interface SidebarLayoutProps {
  children: React.ReactNode;
}
function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="grid grid-cols-12 items-start">
      <div className="col-span-2 h-screen">
        <Sidebar />
      </div>
      <div className="col-span-8 flex flex-col gap-4 px-8">
        <div className="h-40 w-40 bg-red-500"></div>
        <div className="h-40 w-40 bg-red-500"></div>
        <div className="h-40 w-40 bg-red-500"></div>
        <div className="h-40 w-40 bg-red-500"></div>
        <div className="h-40 w-40 bg-red-500"></div>
        <div className="h-40 w-40 bg-red-500"></div>
        <div className="h-40 w-40 bg-red-500"></div>
        <div className="h-40 w-40 bg-red-500"></div>
        <div className="h-40 w-40 bg-red-500"></div>
        <div className="h-40 w-40 bg-red-500"></div>
        <div className="h-40 w-40 bg-red-500"></div>
        <div className="h-40 w-40 bg-red-500"></div>
        <div className="h-40 w-40 bg-red-500"></div>
        <div className="h-40 w-40 bg-red-500"></div>
        <div className="h-40 w-40 bg-red-500"></div>
      </div>
      <div className="col-span-2 bg-blue-400">Right</div>
    </div>
  );
}

export default SidebarLayout;
