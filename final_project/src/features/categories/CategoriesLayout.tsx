import { RootState } from "@/app/rootReducer.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import CategoriesItem from "./CategoriesItem";

const CategoriesLayout = () => {
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categories,
  );

  return (
    <div className="lg:hidden">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2>Categories</h2>
          </AccordionTrigger>
          <AccordionContent className="grid items-center gap-6 px-4 sm:grid-cols-2">
            {!loading &&
              !error &&
              categories?.map((category) => (
                <CategoriesItem key={nanoid()} {...category} />
              ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CategoriesLayout;
