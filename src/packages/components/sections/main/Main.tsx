import CreatePost from "@/packages/features/user/create-post/CreatePost";
import { IPost } from "@/packages/types/posts/post.types";
import React from "react";
import PostCard from "../../shared/card/PostCard";
import Modal from "../../shared/modal/BaseModal";
import CardSkeleton from "../../shared/skeleton/CardSkeleton";

interface MainProps {
  posts: IPost[] | undefined;
}
function Main({ posts }: MainProps) {
  return (
    <div>
      <CreatePost />
      <div className="mt-4 flex flex-col gap-4">
        {posts?.length ? (
          posts?.map((post) => {
            return <PostCard key={post.id} {...post} />;
          })
        ) : (
          <CardSkeleton />
        )}
      </div>
    </div>
  );
}

export default Main;
