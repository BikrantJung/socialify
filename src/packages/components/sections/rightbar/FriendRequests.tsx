import React from "react";
import ProfileIcon from "../sidebar/ProfileIcon";
import Button from "../../shared/button/Button";

function FriendRequests() {
  return (
    <div className="rounded-lg bg-white p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <ProfileIcon profileType="user" active={false} />
          </div>
          <p className="text-xs text-gray-700">
            <span className="font-semibold">Bikrant J. </span>wants to be friend
            with you
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Button style={{ width: "100%" }}>Accept</Button>
          </div>
          <div className="flex-1">
            <Button style={{ width: "100%" }} variant="outlined">
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendRequests;
