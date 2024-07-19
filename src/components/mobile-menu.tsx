"use client";

import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { LucideMenu } from "lucide-react";
import ThemeToggleButton from "./theme-toggle-button";
import { navLinks } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex sm:hidden">
        <LucideMenu className="size-6" />
      </SheetTrigger>
      <SheetContent className="pt-5 w-full flex flex-col gap-5 items-center">
        <h3 className="text-xl font-bold text-text-primary">Novo Blog</h3>
        <nav className="w-fit flex sm:hidden">
          <ul className="flex flex-col gap-4 items-center justify-center">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "text-text-primary font-normal hover:border-b-2 hover:border-theme-primary transition-colors",
                    pathname === "/" ? "border-b-2 border-theme-primary" : "",
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggleButton />
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
