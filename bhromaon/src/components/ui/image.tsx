import { cn } from "@/lib/utils";

type ImageProps = Record<string, string>;

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={cn("h-full w-full object-cover", className)}
  />
);

export default Image;
