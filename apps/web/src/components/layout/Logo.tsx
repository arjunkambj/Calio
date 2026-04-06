import { useId } from "react";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
  withWordmark?: boolean;
}

export default function Logo({
  className,
  iconClassName,
  wordmarkClassName,
  withWordmark = true,
}: LogoProps) {
  const gradientId = useId();

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className={cn("h-8 w-8 shrink-0 text-primary", iconClassName)}
      >
        <defs>
          <linearGradient id={gradientId} x1="4" y1="4" x2="36" y2="36">
            <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.78" />
          </linearGradient>
        </defs>

        <rect
          x="1.25"
          y="1.25"
          width="37.5"
          height="37.5"
          rx="11"
          fill={`url(#${gradientId})`}
        />
        <rect
          x="1.25"
          y="1.25"
          width="37.5"
          height="37.5"
          rx="11"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeWidth="1.2"
        />

        <path
          d="M26.4 13.6C24.86 12.06 22.77 11.2 20.46 11.2C15.54 11.2 11.66 15.14 11.66 20C11.66 24.86 15.54 28.8 20.46 28.8C22.77 28.8 24.86 27.94 26.4 26.4"
          fill="none"
          stroke="var(--primary-foreground)"
          strokeWidth="4.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.55 15.15H28.2"
          fill="none"
          stroke="var(--primary-foreground)"
          strokeOpacity="0.92"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>

      {withWordmark ? (
        <span
          className={cn(
            "text-lg font-bold tracking-[0.01em] text-foreground",
            wordmarkClassName,
          )}
        >
          Ca<span className="text-primary">lio</span>
        </span>
      ) : null}
    </span>
  );
}
