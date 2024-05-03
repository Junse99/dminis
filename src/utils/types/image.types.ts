export type ImageProps = {
  code:        string;
  title:       string;
  description: string;
  mobile:      Media;
  tablet:      Media;
  desktop:     Media;
}

export type Media = {
  url:    string;
  height: number;
  width:  number;
}