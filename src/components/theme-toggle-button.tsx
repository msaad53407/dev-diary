"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Switch } from "./ui/switch";
import { LucideMoon, LucideSun } from "lucide-react";

const ThemeToggleButton = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex gap-2 w-fit items-center">
      <Switch onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")} checked={theme === "dark"}>
        {theme === "dark" ? <LucideMoon className="w-6 h-6" /> : <LucideSun className="w-6 h-6" />}
      </Switch>
    </div>
  );
};

export default ThemeToggleButton;
