"use client";

import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <Icon icon="solar:check-circle-linear" className="size-4" />,
        info: <Icon icon="solar:info-circle-linear" className="size-4" />,
        warning: <Icon icon="solar:danger-triangle-linear" className="size-4" />,
        error: <Icon icon="solar:x-circle-linear" className="size-4" />,
        loading: <Icon icon="solar:loader-linear" className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
