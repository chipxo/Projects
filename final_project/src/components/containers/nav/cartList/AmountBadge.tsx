import { RootState } from "@/app/rootReducer";
import { cartIcon } from "@/components/common/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mOpacity } from "@/utils/motionSettings";
import { motion as m, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const AmountBadge = () => {
  const { amount } = useSelector((state: RootState) => state.amount);

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
