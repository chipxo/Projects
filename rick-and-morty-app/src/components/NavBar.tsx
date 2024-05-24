"use client";

import { navLinks } from "@/constances";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const activeLink = usePathname();

  return (
    <nav className="w-full bg-background/50 backdrop-blur-md">
      <ul className="container grid grid-cols-3 py-1.5 text-center font-semibold sm:py-2.5 sm:text-lg">
        {navLinks.map(({ id, href, name }) => (
          <Link
            key={id}
            href={href}
            className={cn(href === activeLink ? "text-primary" : "")}
          >
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
