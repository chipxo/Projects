import { cn } from "@/lib/utils";
import React from "react";

type FilterItemProps = {
  item: Gender | Status;
  onClick: () => void;
  searchParam: string | null;
};

const FilterItem = ({ item, searchParam, onClick }: FilterItemProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-md px-3 py-1.5 transition-colors hover:bg-accent/70",
        searchParam === item ? "bg-accent" : "",
      )}
    >
      {item}
    </div>
  );
};

export default FilterItem;
