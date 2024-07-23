"use client";

import React, { Suspense, useState } from "react";
import { LucideMenu } from "lucide-react";
import ThemeToggleButton from "./theme-toggle-button";
import { navLinks } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SearchBox from "./search-box";

const MobileMenu = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex sm:hidden">
        <LucideMenu className="size-6" />
      </SheetTrigger>
      <SheetContent className="pt-5 w-full flex flex-col gap-5 items-center">
        <h3 className="text-xl font-bold text-text-primary">Novo Blog</h3>
        <Suspense>
          <SearchBox setOpen={setOpen} />
        </Suspense>
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
