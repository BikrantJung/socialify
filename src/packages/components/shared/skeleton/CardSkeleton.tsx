import React from "react";
import AvatarSkeleton from "./AvatarSkeleton";
import TextSkeleton from "./TextSkeleton";
function CardSkeleton() {
  return (
    <div className="h-[28rem] animate-pulse bg-white p-2">
      <div className="flex items-start gap-1">
        <AvatarSkeleton />
        <div className="mt-1 flex flex-col gap-1">
          <TextSkeleton width="7rem" />
          <TextSkeleton width="4rem" height="0.5rem" />
        </div>
      </div>
      <div className="mt-4 ml-9 flex flex-col gap-1">
        <TextSkeleton width="100%" />
        <TextSkeleton width="100%" />
        <TextSkeleton width="100%" />
        <TextSkeleton width="100%" />
      </div>
    </div>
  );
}

export default CardSkeleton;
