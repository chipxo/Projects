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
import { Label } from "@/components/ui/label.tsx";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx";
import { ProductType } from "@/types/types";
import { forwardRef } from "react";
import { checkBoxesName } from "./checkBoxesList";

type ClickType = {
  onClick: () => void;
};

const ByName = forwardRef<HTMLButtonElement, ClickType>(({ onClick }, ref) => {
  const dispatch = useAppDispatch();

  const { products } = useSelector(
    (state: RootState) => state.categoryProducts,
  );

  const filterByName = (isReverse: boolean) => {
    if (products) {
      const sortedProducts = [...products].sort((a, b) =>
        isReverse
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title),
      );

      dispatch(setCategoryProducts(sortedProducts as ProductType[]));
    }
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-3">
        <AccordionTrigger ref={ref} onClick={onClick}>
          By name
        </AccordionTrigger>

        <AccordionContent className="px-2 py-2">
          <RadioGroup>
            {checkBoxesName.map(({ id, value, filter, text }) => (
              <div key={id} className="flex items-center space-x-2">
                <RadioGroupItem
                  id={id}
                  value={value}
                  onClick={() => filterByName(filter)}
                />
                <Label htmlFor="r3" className="cursor-pointer">
                  {text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
});

export default ByName;
