import { ImageProps } from "@/utils/types/image.types";

export type HeaderProps = {
  code:  string;
  name:  string;
  title: null;
  image: ImageProps;
  link:  Link;
  listCollection: ListCollection;
}

export type Link = {
  code:       string;
  texto:      null | string;
  isExternal: boolean;
  url:        string;
}

export type ListCollection = {
  items: Link[];
}