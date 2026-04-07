"use client";

import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle theme"
      className="flex size-8 items-center justify-center rounded-lg text-foreground/40 transition-colors duration-200 hover:text-foreground"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Icon
        className="size-[1.15rem]"
        icon={theme === "dark" ? "solar:sun-linear" : "solar:moon-linear"}
      />
    </button>
  );
}
