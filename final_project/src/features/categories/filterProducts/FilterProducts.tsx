import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RootState } from "@/app/rootReducer";
import { useAppDispatch } from "@/app/store";
import { fetchFilterCategoryPrice } from "@/hooks/fetchFilterCategoryPrice";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ByPrice from "./ByPrice";
import ByName from "./ByName";

const FilterProducts = () => {
  const dispatch = useAppDispatch();

  const { lowestPr, highestPr } = useSelector(
    (state: RootState) => state.categoryFilteredProducts,
  );

  const byPrice = useRef<HTMLButtonElement | null>(null);
  const [sortByPrice, setSortByPrice] = useState(false);

  const byName = useRef<HTMLButtonElement | null>(null);
  const [sortByName, setSortByName] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(fetchFilterCategoryPrice({ lowestPr, highestPr, categoryId }));
  }, [dispatch]);

  const handleByPrice = () => {
    setSortByPrice(!sortByPrice);
    sortByName && byName.current?.click();
  };

  const handleByName = () => {
    setSortByName(!sortByName);
    sortByPrice && byPrice.current?.click();
  };

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h2>Filter</h2>
        </AccordionTrigger>
        <AccordionContent className="px-2">
          <ByPrice ref={byPrice} onClick={handleByPrice} />
          <ByName ref={byName} onClick={handleByName} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterProducts;
