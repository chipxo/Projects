import CategoriesSkeleton from "../CategoriesSkeleton";
import CardSkeleton from "@/features/cards/commonCard/CardSkeleton";
import { nanoid } from "@reduxjs/toolkit";

const CategoryProductsLoading = () => (
  <div className="container my-8">
    <CategoriesSkeleton />

    <div className="lg:hidden">
      <CategoriesSkeleton />
    </div>

    <div className="grid grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] gap-4">
      {"qwert".split("").map((_) => (
        <CardSkeleton key={nanoid()} />
      ))}
    </div>
  </div>
);
export default CategoryProductsLoading;
