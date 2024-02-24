import { RootState } from "@/app/rootReducer";
import { useAppDispatch } from "@/app/store";
import ErrorMessage from "@/components/common/ErrorMessage";
import { setAmount } from "@/features/amount/amountSlice";
import { ProductType } from "@/types/types";
import { mFLoatMenu } from "@/utils/motionSettings";
import { AnimatePresence, motion as m } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartListItem from "./CartListItem";
import CartListSkeleton from "./CartListSkeleton";
import ToShoppingCart from "./ToShoppingCart";
import NoItemsAdded from "./NoItemsAdded";
import AmountBadge from "./AmountBadge";
import { nanoid } from "@reduxjs/toolkit";
import { db } from "@/indexedDB/db";
import { useLiveQuery } from "dexie-react-hooks";

type ShoppingCartItemProps = {
  isBurger?: boolean;
};

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
  isBurger = false,
}) => {
  const dispatch = useAppDispatch();

  const { amount } = useSelector((state: RootState) => state.amount);

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  const [open, setOpen] = useState(false);

  const [cards, setCards] = useState<ProductType[] | null>(null);

  const addedProducts = useLiveQuery(() => db.addedProducts.toArray());

  useEffect(() => {
    dispatch(setAmount(addedProducts?.length as number));
  }, [dispatch, addedProducts]);

  useEffect(() => {
    const addedId = addedProducts?.map(({ id }) => id);
    const filterItems = products?.filter(({ id }) => addedId?.includes(id));

    setCards(filterItems as ProductType[]);
  }, [products, addedProducts?.length]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(!open)}
    >
      <AmountBadge />
      <AnimatePresence>
        {open && !isBurger && amount ? (
          <m.div
            {...mFLoatMenu}
            style={{ x: "-65%" }}
            className="absolute -left-1/2 top-12"
          >
            <div className="absolute -top-5 h-8 w-full bg-transparent" />
            <div className="grid max-h-[44vh] w-max cursor-pointer gap-y-4 overflow-auto rounded-md border bg-background p-4 max-sm:max-w-[80vw]">
              <ToShoppingCart onClick={() => setOpen(false)} />

              {loading &&
                "qw".split("").map((char) => <CartListSkeleton key={char} />)}
              {error && <ErrorMessage error={error} />}

              {!loading &&
                !error &&
                cards?.map(
                  (item) => !!item && <CartListItem key={nanoid()} {...item} />,
                )}
            </div>
          </m.div>
        ) : (
          open && !isBurger && <NoItemsAdded />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShoppingCartItem;
