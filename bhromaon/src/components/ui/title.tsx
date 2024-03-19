import { cn } from "@/lib/utils";
import React from "react";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: TitleProps) => (
  <h2 className={cn("text-[48px] font-bold text-white", className)}>
    {children}
  </h2>
);

export default Title;
