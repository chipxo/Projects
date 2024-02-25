import SliderSkeleton from "@/components/containers/slider/SliderSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import CardSkeleton from "@/features/cards/commonCard/CardSkeleton";
import CategoriesSkeleton from "@/features/categories/CategoriesSkeleton";

const HomeLoading = () => {
  return (
    <section className="space-y-12 border-none">
      <SliderSkeleton />

      <div className="container border-t pt-4">
        <div className="lg:hidden">
          <CategoriesSkeleton />
        </div>

        <Skeleton className="ml-4 h-6 w-40 bg-accent" />
      </div>

      <div className="container grid grid-cols-home gap-2">
        {"qwertyuiop".split("").map((char) => (
          <CardSkeleton key={char} isHome />
        ))}
      </div>
    </section>
  );
};

export default HomeLoading;
