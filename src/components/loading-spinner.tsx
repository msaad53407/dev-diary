"use client";

import { cn } from "@/lib/utils";
import React from "react";

const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("animate-spin rounded-full h-10 w-10 border-2 border-t-theme-primary", className)}
    ></div>
  );
};

export default LoadingSpinner;
