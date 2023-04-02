import { IPost } from "@/packages/types/posts/post.types";
import CardBodyImage from "./CardBodyImage";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import { hr } from "date-fns/locale";
function PostCard({
  created_at,
  id,
  post_images,
  post_title,
  user_id,
  profiles: { profile_picture, id: userId, username },
}: IPost) {
  return (
    <div className="relative border bg-white py-4">
      {/* Post Header */}
      <CardHeader
        created_at={created_at}
        profile_picture={profile_picture}
        username={username}
      />

      {/* Post Text */}
      <p className="my-4 ml-9 px-4 text-sm text-gray-700  line-clamp-2  hover:underline">
        {post_title}
      </p>
      <hr />
      <div className="relative mt-4">
        <CardBodyImage post_images={post_images} />
      </div>
      <hr />
      <div className="my-2 px-4">
        <CardFooter />
      </div>
    </div>
  );
}

export default PostCard;
