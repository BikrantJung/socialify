import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
function CardBodyImage({ post_images }: { post_images: string[] }) {
  const imageSrcPrefix =
    "https://iaklhqbxgftzqbrditoh.supabase.co/storage/v1/object/public/postimages/";

  return (
    <Carousel
      showArrows={true}
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            className="absolute top-1/2 right-1 z-10 -translate-y-1/2 rounded-full bg-white  p-2 shadow-lg"
            onClick={onClickHandler}
            title={label}
          >
            <IconChevronRight className="icon" />
          </button>
        )
      }
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            className="absolute top-1/2 left-1 z-10 -translate-y-1/2 rounded-full bg-white  p-2 shadow-lg"
            onClick={onClickHandler}
            title={label}
          >
            <IconChevronLeft className="icon" />
          </button>
        )
      }
      swipeable={true}
      showStatus={false}
      showIndicators={false}
    >
      {post_images?.map((item) => {
        return (
          <div className="relative h-[28rem] w-full" key={item}>
            <Image
              alt="Image"
              fill
              className="object-contain"
              src={imageSrcPrefix + item}
            />
          </div>
        );
      })}
    </Carousel>
  );
}
export default CardBodyImage;
