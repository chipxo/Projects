import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navLinks } from "@/constances";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const MobileLinks = forwardRef<HTMLButtonElement, {}>((_, ref) => (
  <Accordion
    type="single"
    collapsible
    className={cn("w-full bg-primary text-center sm:hidden")}
  >
    <AccordionItem value="item-1">
      <AccordionTrigger ref={ref}></AccordionTrigger>
      <AccordionContent className="mt-8 space-y-2">
        {navLinks.map(
          ({ id, text, link }) =>
            id > 1 && (
              <li key={id + text}>
                <a href={link}>{text}</a>
              </li>
            ),
        )}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
));

export default MobileLinks;
