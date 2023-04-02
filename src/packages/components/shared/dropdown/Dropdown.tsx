import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface DropdownProps {
  dropdownBtn: React.ReactNode;
  dropdownContent: React.ReactNode;
}

function Dropdown({ dropdownBtn, dropdownContent }: DropdownProps) {
  return (
    <Popover className={"relative"}>
      {({ open }) => (
        <>
          {dropdownBtn}

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
              {dropdownContent}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default Dropdown;
