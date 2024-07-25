"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Switch } from "./ui/switch";
import { LucideMoon, LucideSun } from "lucide-react";
import { cn } from "@/lib/utils";
import LoadingSpinner from "./loading-spinner";

const ThemeToggleButton = ({ className }: { className?: string }) => {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setTheme(resolvedTheme || "light");
    }
  }, [mounted, resolvedTheme, setTheme]);

  if (!mounted) {
    return <LoadingSpinner />;
  }

  return (
    <div className={cn("flex gap-2 w-fit items-center", className)}>
      <Switch onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")} checked={theme === "dark"}>
        {theme === "dark" ? <LucideMoon className="w-6 h-6" /> : <LucideSun className="w-6 h-6" />}
      </Switch>
    </div>
  );
};

export default ThemeToggleButton;
