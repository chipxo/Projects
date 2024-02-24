import { RootState } from "@/app/rootReducer";
import { useAppDispatch } from "@/app/store";
import ErrorMessage from "@/components/common/ErrorMessage";
import NoProducts from "@/components/common/NoProducts";
import { Skeleton } from "@/components/ui/skeleton";
import BuyCard from "@/features/cards/shopCart/BuyCard";
import SingleCardSkeleton from "@/features/cards/singleCard/SingleCardSkeleton";
import { fetchProducts } from "@/hooks/fetchProducts";
import { ProductType } from "@/types/types";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/indexedDB/db";

const ShoppingCart = () => {
  const dispatch = useAppDispatch();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  const [cards, setCards] = useState<ProductType[] | undefined>([]);

  const { totalPrice } = useLiveQuery(() => db.totalPrice.get(1)) || {};

  const addedProducts = useLiveQuery(() => db.addedProducts.toArray());

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const addedIdArr = addedProducts?.map(({ id }) => id);

    const filterItems = products?.filter(({ id }) => addedIdArr?.includes(id));

    setCards(filterItems);
  }, [products, addedProducts]);

  return (
    <section className="min-h-[70vh]">
      <div className="container py-4">
        {!loading && !!totalPrice && (
          <h2 className="pb-4">Total: {totalPrice}$</h2>
        )}

        {loading && (
          <>
            <Skeleton className="mb-6 h-6 w-24 bg-accent" />
            <SingleCardSkeleton />
          </>
        )}
        {error && <ErrorMessage error={error} />}

        <div className="grid place-items-center gap-4">
          {!loading && !error && !!cards?.length
            ? cards?.map((card) => <BuyCard {...card} key={nanoid()} />)
            : !loading && <NoProducts />}
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
