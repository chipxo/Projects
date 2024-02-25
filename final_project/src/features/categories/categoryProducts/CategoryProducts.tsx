import { RootState } from "@/app/rootReducer";
import { useAppDispatch } from "@/app/store";
import ErrorMessage from "@/components/common/ErrorMessage";
import NoProducts from "@/components/common/NoProducts";
import CardSkeleton from "@/features/cards/commonCard/CardSkeleton";
import CommonCard from "@/features/cards/commonCard/CommonCard";
import CategoriesLayout from "@/features/categories/CategoriesLayout";
import FilterProducts from "@/features/categories/filterProducts/FilterProducts";
import { fetchCategoryProducts } from "@/hooks/fetchCategoryProducts";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CategoriesSkeleton from "../CategoriesSkeleton";
import { fetchFilterCategoryPrice } from "@/hooks/fetchFilterCategoryPrice";

const CategoryProducts = () => {
  const dispatch = useAppDispatch();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.categoryProducts,
  );
  const { categoryId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(fetchCategoryProducts(`${categoryId}`));
  }, [dispatch, categoryId]);

  return (
    <section>
      {loading && (
        <div className="container my-8">
          <CategoriesSkeleton />
          <div className="lg:hidden">
            <CategoriesSkeleton />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-home">
            {"qwer".split("").map((_) => (
              <CardSkeleton key={nanoid()} />
            ))}
          </div>
        </div>
      )}

      <div className="container min-h-[70vh] py-10">
        {error && <ErrorMessage error={error} />}

        {!loading && !error && !!products?.length && (
          <>
            <CategoriesLayout />
            <FilterProducts />
          </>
        )}

        <div className="grid grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] gap-4 md:grid-cols-home">
          {!loading && !error && !!products?.length
            ? products.map((product) => (
                <CommonCard key={nanoid()} {...product} />
              ))
            : !loading && !error && <NoProducts />}
        </div>
      </div>
    </section>
  );
};

export default CategoryProducts;
