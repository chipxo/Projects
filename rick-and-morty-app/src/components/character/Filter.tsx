import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

type FilterProps = {
  title: string;
  children: React.ReactNode;
};

const Filter = ({ title, children }: FilterProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent className="space-y-2">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Filter;
