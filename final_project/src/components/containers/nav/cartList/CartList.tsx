import { RootState } from "@/app/rootReducer";
import { mFLoatMenu } from "@/utils/motionSettings";
import { AnimatePresence, motion as m } from "framer-motion";
import React, { useState } from "react";
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
  const { amount } = useSelector((state: RootState) => state.amount);

  const [open, setOpen] = useState(false);

  const addedProducts = useLiveQuery(() => db.addedProducts.toArray());

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

              {!addedProducts &&
                "qw".split("").map((char) => <CartListSkeleton key={char} />)}

              {addedProducts?.map((item) => (
                <CartListItem key={nanoid()} {...item} />
              ))}
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
