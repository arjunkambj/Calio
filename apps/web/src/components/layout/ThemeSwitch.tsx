"use client";

import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      className="text-muted-foreground hover:text-foreground transition-colors rounded-xl bg-muted dark:bg-foreground/8"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Icon
        className="w-5 h-5"
        icon={theme === "dark" ? "solar:sun-linear" : "solar:moon-linear"}
      />
    </Button>
  );
}
