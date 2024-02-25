import { Skeleton } from "@/components/ui/skeleton";

const SearchItemsSkeleton = () => (
  <div className="flex gap-4">
    <Skeleton className="h-10 w-10 rounded-full bg-accent" />

    <div className="w-full space-y-2">
      <Skeleton className="h-6 w-52  bg-accent" />
      <Skeleton className="h-4 w-24 bg-accent" />
    </div>
  </div>
);

export default SearchItemsSkeleton;
