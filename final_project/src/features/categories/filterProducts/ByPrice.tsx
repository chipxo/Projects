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
import {
  resetPrices,
  setHighestPr,
  setLowestPr,
} from "../categoryProducts/categoryFilteredProducts/filteredProductsSlice";
import { Button } from "@/components/ui/button";
import { forwardRef, useEffect, useState } from "react";
import { makeAlert } from "@/features/alert/alertSlice";
import { fetchFilterCategoryPrice } from "@/hooks/fetchFilterCategoryPrice";
import { useParams } from "react-router-dom";
import { checkBoxesPrice } from "./checkBoxesList";

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

  const [checkedBoxes, setChekedBoxes] = useState(checkBoxesPrice);

  const filterByPrice = (isReverse: boolean, id: string) => {
    setChekedBoxes((pr) =>
      pr.map((checkBox) =>
        checkBox.id === id
          ? { ...checkBox, checked: !checkBox.checked }
          : { ...checkBox, checked: false },
      ),
    );

    if (products) {
      const sortedProducts = [...products].sort((a, b) =>
        isReverse ? a.price - b.price : b.price - a.price,
      );

      dispatch(setCategoryProducts(sortedProducts as ProductType[]));
    }
  };

  const handlePriceRangeFilter = () => {
    setChekedBoxes((pr) =>
      pr.map((checkBox) => ({ ...checkBox, checked: false })),
    );

    if (highestPr > lowestPr) {
      if (!!filteredProducts.length) {
        dispatch(setCategoryProducts(filteredProducts));
      } else {
        dispatch(makeAlert("No products in this range :("));
        dispatch(resetPrices());
      }
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
          <RadioGroup>
            {checkedBoxes.map(({ id, value, filter, text, checked }) => (
              <div key={id} className="flex items-center space-x-2">
                <RadioGroupItem
                  id={id}
                  value={value}
                  checked={checked}
                  onClick={() => filterByPrice(filter, id)}
                />
                <Label htmlFor={id} className="cursor-pointer ">
                  {text}
                </Label>
              </div>
            ))}
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
            onClick={handlePriceRangeFilter}
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
