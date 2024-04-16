export interface LinkPageTypes {
  code:               string;
  name:               string;
  title:              string;
  subtittle:          string;
  image:              Image;
  backgroundImage:    Image;
  linklistCollection: LinklistCollection;
}

export interface Image {
  code:        string;
  title:       string;
  description: string;
  mobile:      Mobile;
}

export interface Mobile {
  url:    string;
  height: number;
  width:  number;
}

export interface LinklistCollection {
  items: LinklistCollectionItem[];
}

export interface LinklistCollectionItem {
  code:  string;
  link:  Link;
  image: Image;
}

export interface Link {
  code:       string;
  texto:      string;
  isExternal: boolean;
  url:        string;
}