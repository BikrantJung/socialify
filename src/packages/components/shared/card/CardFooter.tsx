import {
  IconBookmark,
  IconHeart,
  IconMessage2,
  IconShare,
} from "@tabler/icons-react";
import React from "react";

function CardFooter() {
  return (
    <div className="flex w-full gap-3">
      <CardFooterButtons title="234 Likes">
        <IconHeart className="icon" />
      </CardFooterButtons>
      <CardFooterButtons title="56 Comments">
        <IconMessage2 className="icon" />
      </CardFooterButtons>
      <CardFooterButtons title="Share">
        <IconShare className="icon" />
      </CardFooterButtons>
      <div className="ml-auto">
        <CardFooterButtons title="Save">
          <IconBookmark className="icon" />
        </CardFooterButtons>
      </div>
    </div>
  );
}
interface CardFooterButtons {
  children: React.ReactNode;
  title: string;
}
function CardFooterButtons({ children, title }: CardFooterButtons) {
  return (
    <button className="flex items-center justify-center gap-1 rounded border  px-2 py-1 text-gray-500 hover:bg-neutral-200/70">
      {children}

      <span className="heading-text text-xs font-semibold text-inherit">
        {title}
      </span>
    </button>
  );
}

export default CardFooter;
