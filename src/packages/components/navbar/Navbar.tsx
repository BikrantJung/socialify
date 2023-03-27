import { IconBell } from "@tabler/icons-react";
import React from "react";
import Button from "../button/Button";
import Dropdown from "../dropdown/Dropdown";
import Logo from "../logo/Logo";
import SearchBox from "../search/Search";

function Navbar() {
  return (
    <div className="flex items-center border-b p-4">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex flex-[4_4_0%] items-center">
        <SearchBox placeholder="Search..." />
        <div className="ml-auto flex items-center gap-2 ">
          <Dropdown></Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
