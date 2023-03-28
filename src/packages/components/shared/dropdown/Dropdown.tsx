import React, { Fragment, HTMLAttributes } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import clsx from "clsx";
import { IconUserCircle, IconEye } from "@tabler/icons-react";
import SearchBox from "../search/Search";
import Link from "next/link";

function Dropdown() {
  return (
    <Popover className={"relative"}>
      {({ open }) => (
        <>
          <Popover.Button
            className={clsx([
              "relative h-8 w-8 rounded-full transition",
              {
                "shadow-ring": open,
              },
            ])}
          >
            <Image
              priority
              fill
              className="rounded-full object-cover object-center"
              src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="profile picture"
            />
            <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="apply-bg absolute right-2 mt-3 w-screen origin-top-right overflow-hidden rounded-md py-1 px-[1px] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none focus-visible:border-none  sm:w-56">
              <div className="sm:hidden">
                <DropdownItem className="pl-11">
                  <SearchBox
                    placeholder="Search Reddit..."
                    placement="navbar"
                  />
                </DropdownItem>
              </div>
              <div className="flex flex-col gap-1 bg-white">
                <DropdownTitle title="My Stuff">
                  <IconUserCircle className="icon h-6 w-6 text-gray-500" />
                </DropdownTitle>
                <DropdownItem className="focusable">
                  <h4 className="text-sm font-medium">Online Status</h4>
                </DropdownItem>
                <DropdownItem className="focusable">
                  <h4 className="text-sm font-medium">Profile</h4>
                </DropdownItem>
                <DropdownItem className="focusable">
                  <h4 className="text-sm font-medium">Notifications</h4>
                  <div className="w-fit rounded-full bg-blue-500 p-1 text-xs text-white">
                    3
                  </div>
                </DropdownItem>
                <DropdownItem className="focusable">
                  <h4 className="text-sm font-medium">User Settings</h4>
                </DropdownItem>
                <hr className="" />
                <DropdownTitle title="View Options">
                  <IconEye className="icon h-6 w-6 text-gray-400" />
                </DropdownTitle>
                <DropdownItem
                  className="focusable"
                  // onClick={() => changeTheme()}
                >
                  <h4 className="text-sm font-medium">Dark Mode</h4>
                </DropdownItem>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
interface DropdownItemProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  children: React.ReactNode;
  // className?: string;
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function DropdownItem({
  isActive = false,
  children,
  className,
  ...rest
}: DropdownItemProps) {
  return (
    <button
      className={`flex w-full cursor-pointer items-center gap-3 py-3 pl-12 pr-2 text-start hover:bg-gray-100   ${
        isActive ? "bg-gray-200 " : "bg-white "
      } ${className || ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
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
export default Dropdown;
