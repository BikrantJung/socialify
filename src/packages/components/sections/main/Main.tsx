import CreatePost from "@/packages/features/user/create-post/CreatePost";
import { IPost } from "@/packages/types/posts/post.types";
import React from "react";
import PostCard from "../../shared/card/PostCard";
import Modal from "../../shared/modal/BaseModal";

interface MainProps {
  posts: IPost[];
}
function Main({ posts }: MainProps) {
  return (
    <div>
      <CreatePost />
      <div className="mt-4 flex flex-col gap-4">
        {posts.map((post) => {
          return <PostCard key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
}

export default Main;
