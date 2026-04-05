"use client";

import { Icon } from "@iconify/react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "Virtual number, ready fast",
    description:
      "Claim a dedicated business line without the usual telecom setup delays, then start taking customer calls right away.",
    icon: "lucide:zap",
  },
  {
    title: "Calls, texts, and context together",
    description:
      "Keep voice, SMS, notes, and recordings connected so every conversation stays in one timeline instead of scattered across tools.",
    icon: "lucide:messages-square",
  },
  {
    title: "Built for distributed teams",
    description:
      "Use Calio from desktop or mobile so your team can answer customers from the office, from home, or while traveling.",
    icon: "lucide:globe",
  },
];

interface FeatureProps {
  className?: string;
}

const Feature = ({ className }: FeatureProps) => {
  return (
    <section id="features" className={cn("w-full py-32", className)}>
      <div className="border-y">
        <div className="container flex w-full flex-col gap-6 border-x py-4 lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Icon icon="lucide:star" className="size-4" />
            <span>Why Calio</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Business communication that stays organized
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            Calio gives you the tools to stay reachable, keep clean records,
            and respond faster without being tied to a single device.
          </p>
        </div>
      </div>
      <div className="container w-full border-x lg:px-0!">
        <div className="items-center">
          <div className="grid flex-1 bg-border max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:gap-px">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="relative isolate flex flex-col bg-background p-10 text-start lg:pt-20"
              >
                <div className="flex-1">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-muted">
                    <Icon
                      icon={item.icon}
                      className="size-6 text-muted-foreground"
                    />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="pt-2 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Feature };
