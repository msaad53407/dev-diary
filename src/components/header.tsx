"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import ThemeToggleButton from "./theme-toggle-button";
import MobileMenu from "./mobile-menu";
import SearchBox from "./search-box";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full h-20 flex items-center justify-between max-w-screen-xl mx-auto px-6">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="Dev Diary logo"
          width={70}
          height={70}
          quality={100}
          color="black"
          className="w-10 h-10 object-cover"
        />
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
