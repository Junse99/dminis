import { ImageProps } from "@/utils/types/image.types";

export type ProductsSectionProps = {
  code: string;
  title: string;
  listCollection: {
    items: {
      code: string;
      title: string;
      image: ImageProps;
    }[]
  }
}