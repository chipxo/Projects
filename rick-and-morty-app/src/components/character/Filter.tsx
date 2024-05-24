import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { Suspense } from "react";
import Spinner from "../Spinner";

type FilterProps = {
  title: string;
  children: React.ReactNode;
};

const Filter = ({ title, children }: FilterProps) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent className="space-y-2">{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </Suspense>
  );
};

export default Filter;
