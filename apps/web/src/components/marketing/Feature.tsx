"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Virtual number, ready fast",
    description:
      "Claim a dedicated business line without the usual telecom setup delays, then start taking customer calls right away.",
    icon: "solar:zap-bold",
  },
  {
    title: "Calls, texts, and context together",
    description:
      "Keep voice, SMS, notes, and recordings connected so every conversation stays in one timeline instead of scattered across tools.",
    icon: "solar:chat-circle-bold",
  },
  {
    title: "Built for distributed teams",
    description:
      "Use Calio from desktop or mobile so your team can answer customers from the office, from home, or while traveling.",
    icon: "solar:global-bold",
  },
  {
    title: "Recording and playback",
    description:
      "Capture important calls automatically so you can review conversations, train new team members, and never miss a detail.",
    icon: "solar:microphone-bold",
  },
];

interface FeatureProps {
  className?: string;
}

const Feature = ({ className }: FeatureProps) => {
  return (
    <section id="features" className={cn("w-full", className)}>
      <div className="border-b">
        <div className="container max-w-7xl w-full border-x lg:px-0!">
          <div className="grid bg-border max-lg:divide-y lg:grid-cols-2 lg:gap-px">
            {features.map((item, index) => (
              <div
                key={index}
                className="relative isolate flex flex-col bg-background p-8 text-start transition-colors duration-200 hover:bg-foreground/15 lg:p-10 lg:py-14"
              >
                <div className="flex-1">
                  <div className="mb-5">
                    <Icon icon={item.icon} />
                  </div>
                  <h3 className="text-[1.08rem] font-semibold tracking-[-0.02em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 max-w-md text-[0.95rem] leading-relaxed text-foreground/55">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-8 w-full border-b md:h-12 lg:h-28">
        <div className="container max-w-7xl h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Feature };
