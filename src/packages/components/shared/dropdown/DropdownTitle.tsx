import React from "react";
interface DropdownTitleProps {
  title: string;
  children: React.ReactNode;
}
function DropdownTitle({ title, children }: DropdownTitleProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-2">
      {children}
      <h5 className="text-sm font-medium text-gray-500 ">{title}</h5>
    </div>
  );
}
export default DropdownTitle;
