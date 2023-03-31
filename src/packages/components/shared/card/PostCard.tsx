import { IPost } from "@/packages/types/posts/post.types";
import React from "react";

function PostCard({ created_at, id, post_images, post_title, user_id }: IPost) {
  return <div className="border bg-white p-4">PostCard</div>;
}

export default PostCard;
