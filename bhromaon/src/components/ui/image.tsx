import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const ImageVariants = cva("", {
  variants: {
    variant: {
      default: "h-full w-full object-cover",
      bg: "absolute inset-0 -z-10",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> &
  VariantProps<typeof ImageVariants>;

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  variant,
  ...props
}) => {
  return (
    <img
      className={cn(ImageVariants({ variant, className }))}
      src={src}
      alt={alt}
      {...props}
    />
  );
};

export default Image;
