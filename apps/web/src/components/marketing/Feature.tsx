"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "3-minute setup",
    description:
      "Sign up, pick a number, start calling. No hardware to ship, no IT to schedule, no waiting.",
    icon: "ph:timer",
  },
  {
    title: "Smart call routing",
    description:
      "Route calls by time zone, team, or availability. Every call reaches the right person.",
    icon: "ph:signpost",
  },
  {
    title: "Works everywhere",
    description:
      "Browser, desktop, iOS, Android. Take calls from anywhere on any device.",
    icon: "ph:devices",
  },
  {
    title: "Call recording",
    description:
      "Every call recorded automatically. Replay, search, or use it to train your team.",
    icon: "ph:microphone",
  },
  {
    title: "SMS from your number",
    description:
      "Send and receive texts from the same business number. Calls and texts, one place.",
    icon: "ph:chat-circle",
  },
  {
    title: "Shared inbox",
    description:
      "Your whole team sees the same calls, texts, and notes. Handoffs stop being painful.",
    icon: "ph:chats",
  },
];

interface FeatureProps {
  className?: string;
}

const Feature = ({ className }: FeatureProps) => {
  return (
    <section id="features" className={cn("w-full", className)}>
      {/* Section header */}
      <div>
        <div className="max-w-7xl mx-auto border-b border-x bg-background flex flex-col gap-4 px-5 py-8 lg:px-8 lg:py-12">
          <p className="marketing-section-kicker">Features</p>
          <h2 className="marketing-section-heading">Powerful At Every Scale</h2>
          <p className="marketing-section-desc">
            From your first call to your ten-thousandth — everything you need
            is included.
          </p>
        </div>
      </div>

      {/* Feature grid */}
      <div>
        <div className="max-w-7xl mx-auto w-full border-b border-x bg-background">
          <div className="grid divide-y lg:grid-cols-3 lg:divide-y-0 lg:divide-x divide-border">
            {features.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "group relative isolate flex flex-col bg-card p-8 text-start transition-colors duration-200 hover:bg-primary/[0.03] lg:p-8",
                  index < 3 && "lg:border-b lg:border-border"
                )}
              >
                {/* Index number */}
                <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-foreground/20 mb-5 block">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mb-4 text-primary">
                  <Icon
                    icon={item.icon}
                    className="size-7 transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[0.98rem] font-semibold tracking-[-0.02em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xs text-[0.875rem] leading-relaxed text-foreground/50">
                  {item.description}
                </p>

                {/* Bottom accent line that appears on hover */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-8 w-full md:h-12 lg:h-28">
        <div className="max-w-7xl mx-auto h-full w-full border-b border-x bg-background"></div>
      </div>
    </section>
  );
};

export { Feature };
