import { RootState } from "@/app/rootReducer";
import { useAppDispatch } from "@/app/store";
import ErrorMessage from "@/components/common/ErrorMessage";
import Carousel from "@/components/containers/slider/Slider";
import { Button } from "@/components/ui/button";
import CommonCard from "@/features/cards/commonCard/CommonCard";
import CategoriesLayout from "@/features/categories/CategoriesLayout";
import { fetchAmountOfProducts } from "@/hooks/fetchAmountOfProducts";
import { fetchCategories } from "@/hooks/fetchCategories";
import { fetchProducts } from "@/hooks/fetchProducts";
import { mOpacity } from "@/utils/motionSettings";
import { nanoid } from "@reduxjs/toolkit";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeLoading from "./HomeLoading";
import { delAmountOfProducts } from "@/features/products/amountProdSlice";
import MobileSlider from "@/components/containers/mobileSlider/MobileSlider";

const Home = () => {
  const dispatch = useAppDispatch();
  const { products: allProducts } = useSelector(
    (state: RootState) => state.products,
  );

  const {
    products: amountOfProducts,
    loading,
    error,
  } = useSelector((state: RootState) => state.amountOfProducts);

  const { categories } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());

    dispatch(fetchAmountOfProducts(0));
    dispatch(fetchAmountOfProducts(10));

    return () => {
      dispatch(delAmountOfProducts());
    };
  }, [dispatch]);

  const [open, setOpen] = useState(false);

  const firstPrs = amountOfProducts?.filter((_, i) => i < 10);
  const secondPrs = amountOfProducts?.filter((_, i) => i > 10);

  return (
    <>
      {loading && <HomeLoading />}

      {error && <ErrorMessage error={error} />}

      {!loading && !error && allProducts && <Carousel products={allProducts} />}

      <section>
        <div className="container">
          {!loading && !error && categories && (
            <div className="lg:hidden">
              <CategoriesLayout />
            </div>
          )}

          <div className="border-neutral space-y-10 py-10 max-lg:container">
            {!loading && (
              <h2 className="text-start text-xl md:text-2xl md:font-semibold">
                Best selling products:
              </h2>
            )}

            <div className="grid grid-cols-home gap-4 max-sm:hidden">
              {!loading &&
                !error &&
                firstPrs?.map((product) => (
                  <CommonCard key={nanoid()} {...product} isHome />
                ))}

              {open &&
                secondPrs?.map((product) => (
                  <m.div {...mOpacity} key={nanoid()}>
                    <CommonCard {...product} isHome />
                  </m.div>
                ))}
            </div>

            <div className="mx-auto w-fit max-sm:hidden">
              {!loading && !open && (
                <Button onClick={() => setOpen(true)}>Show more</Button>
              )}
            </div>

            <MobileSlider products={amountOfProducts!} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
