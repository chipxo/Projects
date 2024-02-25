import { RootState } from "@/app/rootReducer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import { useSelector } from "react-redux";
import { setCategoryProducts } from "../categoryProducts/categoryProductsSlice";
import { useAppDispatch } from "@/app/store";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx";
import { ProductType } from "@/types/types";
import {
  setHighestPr,
  setLowestPr,
} from "../categoryProducts/categoryFilteredProducts/filteredProductsSlice";
import { Button } from "@/components/ui/button";
import { forwardRef, useEffect } from "react";
import { makeAlert } from "@/features/alert/alertSlice";
import { fetchFilterCategoryPrice } from "@/hooks/fetchFilterCategoryPrice";
import { useParams } from "react-router-dom";

type ClickType = {
  onClick: () => void;
};

const ByPrice = forwardRef<HTMLButtonElement, ClickType>(({ onClick }, ref) => {
  const dispatch = useAppDispatch();

  const { products } = useSelector(
    (state: RootState) => state.categoryProducts,
  );

  const { categoryId } = useParams();

  const {
    products: filteredProducts,
    lowestPr,
    highestPr,
  } = useSelector((state: RootState) => state.categoryFilteredProducts);

  const filterByPrice = (isReverse: boolean) => {
    if (products) {
      const sortedProducts = [...products].sort((a, b) =>
        isReverse ? a.price - b.price : b.price - a.price,
      );

      dispatch(setCategoryProducts(sortedProducts as ProductType[]));
    }
  };

  const handleFilterPrice = async () => {
    if (highestPr > lowestPr) {
      // await dispatch(
      //   fetchFilterCategoryPrice({ lowestPr, highestPr, categoryId }),
      // );

      dispatch(setCategoryProducts(filteredProducts));
    } else if (highestPr && lowestPr) {
      dispatch(makeAlert("Highest price has to be more than lowest"));
    }
  };

  const handleLowPr = (value: string) => {
    dispatch(setLowestPr(Number(value)));
  };

  const handleHighPr = (value: string) => {
    dispatch(setHighestPr(Number(value)));
  };

  useEffect(() => {
    dispatch(fetchFilterCategoryPrice({ lowestPr, highestPr, categoryId }));
  }, [lowestPr, highestPr, categoryId]);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-2">
        <AccordionTrigger ref={ref} onClick={onClick}>
          By price
        </AccordionTrigger>
        <AccordionContent className="px-2 py-2">
          <RadioGroup defaultValue="">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="default"
                id="r1"
                onClick={() => filterByPrice(false)}
              />
              <Label htmlFor="r1">Highest to lowest</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="comfortable"
                id="r2"
                onClick={() => filterByPrice(true)}
              />
              <Label htmlFor="r2">Lowest to highest</Label>
            </div>
          </RadioGroup>
          <p className="my-4  text-center text-lg">or</p>
          <div className="mb-2 grid gap-x-5 gap-y-2 sm:grid-cols-2">
            <Input
              name="lowestPr"
              placeholder="Enter lowest price"
              value={lowestPr || ""}
              onChange={(e) => handleLowPr(e.target.value)}
            />
            <Input
              name="highestPr"
              placeholder="Enter highest price"
              value={highestPr || ""}
              onChange={(e) => handleHighPr(e.target.value)}
            />
          </div>
          <Button
            onClick={handleFilterPrice}
            variant="secondary"
            className="w-full"
          >
            Filter
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
});

export default ByPrice;
