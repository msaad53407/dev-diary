"use client";

import React, { Suspense, useState } from "react";
import { ExternalLink, LucideMenu } from "lucide-react";
import ThemeToggleButton from "./theme-toggle-button";
import { navLinks } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
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
        <SheetTitle className="text-xl font-bold text-text-primary">Dev Diary</SheetTitle>
        <SheetDescription className="sr-only">
          A Dialog that contains navigation links and search box for mobile view
        </SheetDescription>
        <Suspense>
          <SearchBox setOpen={setOpen} />
        </Suspense>
        <nav className="w-fit flex sm:hidden">
          <ul className="flex flex-col gap-4 items-center justify-center">
            {navLinks.map(({ href, label, isExternal }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={cn(
                    "text-text-primary font-normal hover:border-b-2 hover:border-theme-primary transition-colors flex items-center gap-1",
                    pathname === href ? "border-b-2 border-theme-primary" : "",
                  )}
                >
                  {label}
                  {isExternal && <ExternalLink className="size-4" />}
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
