"use client";

import { LucideX } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const TagLine = ({ children, dismissible }: { children: React.ReactNode; dismissible?: boolean }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const removeTagFromUrl = () => {
    router.push(`/search?${searchParams.toString().includes("query") ? `query=${query}` : ""}`);
  };

  if (dismissible) {
    return (
      <div className="relative w-fit min-w-8">
        <Link href={`/search?tag=${children}`}>
          <span className="p-2 rounded-xl text-center bg-theme-primary-light w-full text-theme-primary text-sm capitalize">
            {children}
          </span>
        </Link>
        <LucideX
          className="absolute -top-2 -right-1 cursor-pointer rounded-full border border-theme-primary"
          size={16}
          onClick={() => removeTagFromUrl()}
        />
      </div>
    );
  }

  return (
    <Link href={`/search?tag=${children}`}>
      <span className="px-2 py-1 rounded-xl bg-theme-primary-light w-fit min-w-8 text-center text-theme-primary text-xs capitalize">
        {children}
      </span>
    </Link>
  );
};

export default TagLine;
