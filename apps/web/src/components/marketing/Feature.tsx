"use client";

import { Icon } from "@iconify/react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "10x Faster Development",
    description:
      "Build and deploy your products in a fraction of the time with our streamlined workflow tools.",
    icon: "lucide:zap",
  },
  {
    title: "10,000+ Developers",
    description:
      "Join a thriving community of developers already building the future.",
    icon: "lucide:users",
  },
  {
    title: "25% Conversion Boost",
    description:
      "Watch your conversion rates soar with our optimized user experience patterns.",
    icon: "lucide:trending-up",
  },
];

interface FeatureProps {
  className?: string;
}

const Feature = ({ className }: FeatureProps) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="border-y">
        <div className="container flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Icon icon="lucide:star" className="size-4" />
            <span>Benefits</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Everything you need to succeed
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            Powerful features designed to help you build faster, scale better,
            and ship with confidence.
          </p>
        </div>
      </div>
      <div className="container border-x lg:px-0!">
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
