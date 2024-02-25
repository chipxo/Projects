import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { twJoin } from "tailwind-merge";

type GalleryPaginationProps = {
  nums: number[];
  current: number;
};

const GalleryPagination: React.FC<GalleryPaginationProps> = ({
  nums,
  current,
}) => (
  <div className="absolute -bottom-6 left-1/2 grid w-fit -translate-x-1/2 grid-cols-3 gap-3">
    {nums.map((num) => (
      <span
        key={nanoid()}
        className={twJoin(
          "h-2 w-2 rounded-full border md:h-3 md:w-3",
          current === num && "border-ring bg-primary",
        )}
      />
    ))}
  </div>
);

export default GalleryPagination;
