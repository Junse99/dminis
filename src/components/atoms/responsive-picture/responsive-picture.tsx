import Image from 'next/image';

type AssetImage = {
  url: string;
  width: number;
  height: number;
};

export type ResponsiveImageProps = React.ComponentPropsWithoutRef<
  typeof Image
> & {
  desktop?: AssetImage;
  tablet?: AssetImage;
  src: string;
  alt: string;
  height: number;
  width: number;
  title?: string;
};

export const ResponsivePicture = (props: ResponsiveImageProps) =>  {
  const { desktop, tablet, src, alt, height, width, title, ...imgProps } =
    props;
  return (
    <picture>
      {desktop && (
        <source
          srcSet={desktop.url}
          width={desktop.width}
          height={desktop.height}
          media={`(min-width: 1100px)`}
        />
      )}
      {tablet && (
        <source
          srcSet={tablet.url}
          width={tablet.width}
          height={tablet.height}
          media={`(min-width: 768px)`}
        />
      )}
      <Image
        src={src}
        title={title}
        alt={alt}
        height={height}
        width={width}
        {...imgProps}
      />
    </picture>
  );
}

export default ResponsivePicture