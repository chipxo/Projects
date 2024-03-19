import { navLinks } from "@/constances";
import { cn } from "@/lib/utils";

const DesctopLinks = () => (
  <>
    {navLinks.map(({ id, text, link }) => (
      <li
        key={id + text}
        className={cn(
          "first:col-span-2 max-md:text-center first:max-md:col-span-4 first:max-md:text-center first:lg:col-span-3 max-sm:[&:not(:first-child)]:hidden [&:not(:first-child)]:md:text-end",
        )}
      >
        <a href={link} className="uppercase">
          {text}
        </a>
      </li>
    ))}
  </>
);

export default DesctopLinks;
