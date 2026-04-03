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
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className={cn("h-8 w-8 shrink-0 text-primary", iconClassName)}
      >
        <defs>
          <linearGradient id="pg-logo-gradient" x1="4" y1="4" x2="36" y2="36">
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
          fill="url(#pg-logo-gradient)"
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
          d="M14 10H23.2C27.6 10 31 13.34 31 17.6C31 21.85 27.6 25.2 23.2 25.2H18.2V30H14V10ZM18.2 14V21.2H22.6C24.8 21.2 26.4 19.72 26.4 17.6C26.4 15.48 24.8 14 22.6 14H18.2Z"
          fill="#F7FBFF"
        />
        <circle
          cx="29.15"
          cy="10.85"
          r="1.3"
          fill="#FFFFFF"
          fillOpacity="0.78"
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
