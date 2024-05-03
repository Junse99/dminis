import { ImageProps } from "@/utils/types/image.types";
import { LinkProps } from "@/utils/types/link.types";

export type HomeCarouselProps = {
  code:  string;
  listCollection: {
    items: SlideContentProps[];
  };
}

export type SlideContentProps = {
  code: string;
  image: ImageProps;
  link: LinkProps;
}