import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSidebarMenu } from "./hooks/useSidebarMenu";

interface SidebarMenuProps {
  active: boolean;
}
function SidebarMenu() {
  const router = useRouter();
  const { sidebarMenuData } = useSidebarMenu({ username: "bikrant" });
  return (
    <div className="flex flex-col rounded bg-white">
      {sidebarMenuData.map((data) => {
        return (
          <Link href={data.link} key={data.title}>
            <div
              className={clsx([
                "relative  flex items-center gap-4 border-b px-2 py-4 transition before:absolute before:left-0 before:h-full  before:w-[2px] hover:bg-neutral-50",
                {
                  "text-blue-500 before:bg-blue-500": data.active,
                  "text-gray-700": !data.active,
                },
              ])}
            >
              <div className="">{data.icon}</div>
              <p className="text-sm">{data.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SidebarMenu;
