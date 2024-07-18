"use client";

import React from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { categories, navLinks } from "@/constants";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="w-full bg-secondary-50 flex items-center justify-center p-6">
      <section className="max-w-screen-xl mx-auto w-full flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
          <div className="flex-1 flex flex-col gap-3">
            <h4 className="text-base font-medium text-text-primary">About</h4>
            <p className="text-sm font-normal text-secondary-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum voluptates, nisi earum optio animi
              accusantium!
            </p>
          </div>
          <div className="flex-1 flex flex-row gap-3">
            <div className="space-y-3 text-center">
              <h4 className="text-base font-medium text-text-primary">Quick Links</h4>
              <ul className="flex gap-4 flex-col items-center justify-center">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        "text-secondary-400 font-normal hover:border-b-2 hover:border-theme-primary transition-colors",
                        pathname === href ? "border-b-2 border-theme-primary" : "",
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 text-center">
              <h4 className="text-base font-medium text-text-primary">Category</h4>
              <ul className="flex flex-col gap-4 items-center justify-center">
                {categories.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        "text-secondary-400 font-normal hover:border-b-2 hover:border-theme-primary transition-colors",
                        pathname === href ? "border-b-2 border-theme-primary" : "",
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-text-primary">Novo Blog</h3>
          <p className="text-sm font-normal text-secondary-400">Copyright © {new Date().getFullYear()}</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
