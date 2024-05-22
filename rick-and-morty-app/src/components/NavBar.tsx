"use client";

import { navLinks } from "@/constances";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import BG from "@public/nav-bg.jpg";
import Image from "next/image";

const NavBar = () => {
  const activeLink = usePathname();

  return (
    <nav className="sticky top-0 z-10 overflow-hidden ">
      <ul className="container grid grid-cols-3 bg-black/40 py-2.5 text-center text-lg font-semibold">
        <Image
          src={BG}
          alt={""}
          className="absolute inset-0 -z-10 h-full object-cover"
        />

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
