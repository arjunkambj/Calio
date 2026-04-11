"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "3-minute setup",
    description:
      "Sign up, pick a number, start calling. No hardware to ship, no IT to schedule, no waiting.",
    icon: "solar:stopwatch-bold-duotone",
  },
  {
    title: "Smart call routing",
    description:
      "Route calls by time zone, team, or availability. Every call reaches the right person.",
    icon: "solar:routing-2-bold-duotone",
  },
  {
    title: "Works everywhere",
    description:
      "Browser, desktop, iOS, Android. Take calls from anywhere on any device.",
    icon: "solar:monitor-smartphone-bold-duotone",
  },
  {
    title: "Call recording",
    description:
      "Every call recorded automatically. Replay, search, or use it to train your team.",
    icon: "solar:record-circle-bold-duotone",
  },
  {
    title: "SMS from your number",
    description:
      "Send and receive texts from the same business number. Calls and texts, one place.",
    icon: "solar:chat-round-dots-bold-duotone",
  },
  {
    title: "Shared inbox",
    description:
      "Your whole team sees the same calls, texts, and notes. Handoffs stop being painful.",
    icon: "solar:inbox-bold-duotone",
  },
];

interface FeatureProps {
  className?: string;
}

const Feature = ({ className }: FeatureProps) => {
  return (
    <section id="features" className={cn("w-full", className)}>
      <div className="border-b">
        <div className="max-w-7xl mx-auto flex flex-col gap-3 border-x px-5 py-6 lg:px-8 lg:py-10">
          <p className="marketing-section-kicker">Features</p>
          <h2 className="marketing-section-heading">Powerful At Every Scale</h2>
          <p className="marketing-section-desc">
            From your first call to your ten-thousandth -- everything you need
            is included.
          </p>
        </div>
      </div>

      <div className="border-b">
        <div className="max-w-7xl mx-auto w-full border-x lg:px-0!">
          <div className="grid bg-border max-lg:divide-y lg:grid-cols-3 lg:gap-px">
            {features.map((item, index) => (
              <div
                key={index}
                className="group relative isolate flex flex-col bg-card p-8 text-start transition-all duration-300 lg:p-8"
              >
                <div className="flex-1">
                  <div className="mb-5 text-primary">
                    <Icon
                      icon={item.icon}
                      className="size-9 transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 max-w-xs text-[0.92rem] leading-relaxed text-foreground/50">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-8 w-full border-b md:h-12 lg:h-28">
        <div className="max-w-7xl mx-auto h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Feature };
