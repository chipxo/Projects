"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignedIn } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group cursor-pointer ${isActive ? "bg-purple-gradient text-white" : "text-gray-700"}`}
                  >
                    <Link>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          </SignedIn>
        </nav>
      </div>
    </aside>
  );
};
