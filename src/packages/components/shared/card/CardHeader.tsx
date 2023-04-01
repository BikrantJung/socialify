import React from "react";
import ProfileIcon from "../../sections/sidebar/ProfileIcon";
import { IconDots } from "@tabler/icons-react";
import { formatDistanceToNow } from "date-fns";
interface CardHeaderProps {
  profile_picture: string;
  username: string;
  created_at: string;
}
function CardHeader({
  created_at,
  profile_picture,
  username,
}: CardHeaderProps) {
  const timeAgo = formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
  });

  return (
    <div className="flex items-center justify-between  px-4">
      {/* Card Profile Area */}
      <div className="flex items-center gap-2">
        <ProfileIcon profileType="user" active src={profile_picture} />
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold leading-3 text-gray-700 ">
            {username}
          </h4>
          <p className="text-xs text-gray-500">{timeAgo}</p>
        </div>
      </div>
      <button>
        <IconDots className="icon text-gray-500" />
      </button>
    </div>
  );
}

export default CardHeader;
