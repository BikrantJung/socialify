import { IPost } from "@/packages/types/posts/post.types";
import React from "react";

function PostCard({
  created_at,
  id,
  post_images,
  post_title,
  user_id,
  profiles: { profile_picture, id: userId, usrename },
}: IPost) {
  return (
    <div className="border bg-white p-4">
      {/* Post Header */}
      <div className="flex items-center justify-between">
        {/* Card Profile Area */}
        <div className="flex"></div>
      </div>
    </div>
  );
}

export default PostCard;
