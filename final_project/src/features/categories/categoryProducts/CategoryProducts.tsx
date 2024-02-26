import { RootState } from "@/app/rootReducer";
import { useAppDispatch } from "@/app/store";
import ErrorMessage from "@/components/common/ErrorMessage";
import NoProducts from "@/components/common/NoProducts";
import CommonCard from "@/features/cards/commonCard/CommonCard";
import CategoriesLayout from "@/features/categories/CategoriesLayout";
import FilterProducts from "@/features/categories/filterProducts/FilterProducts";
import { fetchCategoryProducts } from "@/hooks/fetchCategoryProducts";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CategoryProductsLoading from "./CategoryProductsLoading";
import { twJoin } from "tailwind-merge";

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
    <section className={twJoin(!!products?.length ? null : "grid")}>
      {loading && <CategoryProductsLoading />}

      <div className="container py-10">
        {error && <ErrorMessage error={error} />}

        {!loading && !error && !!products?.length && (
          <>
            <CategoriesLayout />
            <FilterProducts />
          </>
        )}

        <div className="grid h-full grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] gap-4">
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
