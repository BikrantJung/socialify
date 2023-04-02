import React from "react";
import FriendRequests from "./FriendRequests";
import Friends from "./Friends";

function RightBar() {
  return (
    <div className="hideScrollbar fixed mr-8 h-[85vh] overflow-hidden py-2">
      <div className="flex flex-col">
        <div className="mb-2 flex w-full items-center justify-between">
          <p className="text-sm font-semibold uppercase text-gray-500">
            Requests
          </p>
          <div className=" flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
            <span>2</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <FriendRequests />
          <FriendRequests />
          <div className="ml-auto">
            <button className="cursor-pointer text-sm font-semibold text-blue-400">
              5 more...
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4" />
      <div className="flex flex-col">
        <div className="mb-2 flex w-full items-center justify-between">
          <p className="text-sm font-semibold uppercase text-gray-500">
            Friends
          </p>
          <div className="flex items-center justify-center rounded-full bg-red-400 py-1 px-3 text-xs text-white">
            <span>23</span>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6">
          <div className="flex flex-col gap-2">
            <Friends />
            <Friends />
            <Friends />
            <Friends />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
