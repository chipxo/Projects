import { closeIcon } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import React from "react";
import { GalleryProps } from "./Gallery";

type GalleryCloseProps = Pick<GalleryProps, "handleCloseGallery">;

const GalleryClose: React.FC<GalleryCloseProps> = ({ handleCloseGallery }) => (
  <Button
    variant="ghost"
    className="absolute -top-14 right-4 z-[9999] cursor-pointer text-white sm:-right-14 sm:-top-10"
    onClick={handleCloseGallery}
  >
    {closeIcon}
  </Button>
);

export default GalleryClose;
