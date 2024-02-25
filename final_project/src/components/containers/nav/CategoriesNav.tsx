import { Button } from "@/components/ui/button";
import { CategoriesType } from "@/types/types";
import { mFLoatMenu } from "@/utils/motionSettings";
import { nanoid } from "@reduxjs/toolkit";
import { AnimatePresence, motion as m } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type CategoriesProps = {
  categories: CategoriesType[] | null;
};

const CategoriesNav: React.FC<CategoriesProps> = ({ categories }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative hidden lg:block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Button variant="ghost">
        <h2 className="flex cursor-pointer items-center gap-x-3 text-lg">
          Categories
        </h2>
      </Button>

      <AnimatePresence>
        {open && (
          <m.div
            {...mFLoatMenu}
            style={{ x: "-50%" }}
            className="absolute left-1/2 top-10 rounded-md border bg-background"
          >
            <div className="absolute -top-3 z-[9999] h-4 w-full bg-transparent" />

            <div className="grid max-h-[60vh] cursor-pointer gap-y-4 overflow-auto rounded-md p-4">
              <div className="text-md grid gap-y-4 font-Merriweather">
                {categories?.map(({ id, name }) => (
                  <Link to={`/products/categories/${id}`} key={nanoid()}>
                    <Button variant="ghost" className="w-full justify-start">
                      {name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoriesNav;
