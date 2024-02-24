import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type SkeletopProps = {
  isHome?: boolean;
};

const CategoriesSkeleton: React.FC<SkeletopProps> = () => {
  return (
    <div className="mb-4 space-y-4 py-4">
      <Skeleton className="h-4 w-14 bg-accent" />
      <Skeleton className="h-0.5 w-full bg-accent" />
    </div>
  );
};

export default CategoriesSkeleton;
