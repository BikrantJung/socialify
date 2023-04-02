import {
  IconBookmark,
  IconHeart,
  IconMessage2,
  IconShare,
} from "@tabler/icons-react";
import React from "react";
import Button from "../button/Button";

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
    <Button variant="ghost">
      {children}

      <span className="heading-text text-xs font-semibold text-inherit">
        {title}
      </span>
    </Button>
  );
}

export default CardFooter;
