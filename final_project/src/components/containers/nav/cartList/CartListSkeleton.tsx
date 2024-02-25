import { Skeleton } from "@/components/ui/skeleton";

const CartListSkeleton = () => (
  <div className="flex">
    <Skeleton className="mr-6 w-16 rounded-full bg-accent" />
    <div className="w-full max-w-64 space-y-2">
      <Skeleton className="h-6 bg-accent" />
      <Skeleton className="h-4 w-5 bg-accent" />
    </div>
  </div>
);

export default CartListSkeleton;
