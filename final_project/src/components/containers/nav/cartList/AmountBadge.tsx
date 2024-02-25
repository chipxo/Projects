import { RootState } from "@/app/rootReducer";
import { useAppDispatch } from "@/app/store";
import { cartIcon } from "@/components/common/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { setAmount } from "@/features/amount/amountSlice";
import { db } from "@/indexedDB/db";
import { mOpacity } from "@/utils/motionSettings";
import { useLiveQuery } from "dexie-react-hooks";
import { motion as m, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const AmountBadge = () => {
  const dispatch = useAppDispatch();

  const { amount } = useSelector((state: RootState) => state.amount);

  const addedProducts = useLiveQuery(() => db.addedProducts.toArray());

  const addedProductsLength = addedProducts?.length;

  useEffect(() => {
    dispatch(setAmount(addedProductsLength as number));
  }, [dispatch, addedProductsLength]);

  return (
    <Button className="relative" size="icon" variant="ghost">
      <span className="text-xl">{cartIcon}</span>

      <AnimatePresence>
        {amount && (
          <m.div {...mOpacity}>
            <Badge className="absolute -right-2 -top-1" variant="default">
              {amount}
            </Badge>
          </m.div>
        )}
      </AnimatePresence>
    </Button>
  );
};

export default AmountBadge;
