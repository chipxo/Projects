import { cn } from "@/lib/utils";
import React, { Suspense } from "react";
import Spinner from "../Spinner";

type FilterItemProps = {
  item: Gender | Status;
  onClick: () => void;
  searchParam: string | null;
};

const FilterItem = ({ item, searchParam, onClick }: FilterItemProps) => {
  return (
    <Suspense fallback={<Spinner />}>
      <div
        onClick={onClick}
        className={cn(
          "cursor-pointer rounded-md px-3 py-1.5 transition-colors hover:bg-primary/40",
          searchParam === item ? "bg-primary" : "",
        )}
      >
        {item}
      </div>
    </Suspense>
  );
};

export default FilterItem;
