import { Popover } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import Dropdown from "../dropdown/Dropdown";
import DropdownItem from "../dropdown/DropdownItem";
import { IconEye, IconUserCircle } from "@tabler/icons-react";
import DropdownTitle from "../dropdown/DropdownTitle";

function NavbarDropdown() {
  return (
    <Dropdown
      dropdownBtn={<NavbarDropdownButton />}
      dropdownContent={<NavbarDropdownContent />}
    />
  );
}

function NavbarDropdownButton() {
  return (
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
  );
}

function NavbarDropdownContent() {
  return (
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
  );
}

export default NavbarDropdown;
