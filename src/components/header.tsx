"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import ThemeToggleButton from "./theme-toggle-button";
import MobileMenu from "./mobile-menu";
import SearchBox from "./search-box";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full h-20 flex items-center justify-between max-w-screen-xl mx-auto px-6">
      <Link href={"/"}>
        <h3 className="text-xl font-bold text-text-primary">Novo Blog</h3>
      </Link>
      <nav className="w-fit hidden sm:flex">
        <ul className="flex gap-4 items-center justify-center">
          <li>
            <Link
              href="/"
              className={cn(
                "text-text-primary font-normal hover:border-b-2 hover:border-theme-primary transition-colors",
                pathname === "/" ? "border-b-2 border-theme-primary" : "",
              )}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className={cn(
                "text-text-primary font-normal hover:border-b-2 hover:border-theme-primary transition-colors",
                pathname === "/posts" ? "border-b-2 border-theme-primary" : "",
              )}
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={cn(
                "text-text-primary font-normal hover:border-b-2 hover:border-theme-primary transition-colors",
                pathname === "/about" ? "border-b-2 border-theme-primary" : "",
              )}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={cn(
                "text-text-primary font-normal hover:border-b-2 hover:border-theme-primary transition-colors",
                pathname === "/contact" ? "border-b-2 border-theme-primary" : "",
              )}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hidden sm:flex gap-5 items-center">
        <Suspense>
          <SearchBox />
        </Suspense>
        <ThemeToggleButton className="hidden sm:flex" />
      </div>
      <MobileMenu />
    </header>
  );
};

export default Header;
