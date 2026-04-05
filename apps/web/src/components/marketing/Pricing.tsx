"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    icon: "lucide:rocket",
    name: "Starter",
    price: {
      monthly: 19,
      yearly: 190,
    },
    features: [
      "1 virtual business number",
      "Call and text from any device",
      "Conversation history in one inbox",
      "Call recordings and playback",
      "Email support",
    ],
  },
  {
    icon: "lucide:briefcase",
    name: "Growth",
    price: {
      monthly: 39,
      yearly: 390,
    },
    features: [
      "Up to 3 business numbers",
      "Shared team inbox and handoffs",
      "Searchable recordings and notes",
      "Role-based access for teammates",
      "Priority support",
    ],
  },
  {
    icon: "lucide:building",
    name: "Team",
    price: {
      monthly: 79,
      yearly: 790,
    },
    features: [
      "Unlimited shared conversation history",
      "Advanced call recording controls",
      "Custom onboarding for larger teams",
      "Priority routing and escalations",
      "Dedicated success support",
    ],
  },
];

interface PricingProps {
  className?: string;
}

const Pricing = ({ className }: PricingProps) => {
  const [isMonthly] = useState(true);

  return (
    <section id="pricing" className={cn(className)}>
      <div className="border-y">
        <div className="container max-w-7xl flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Icon icon="lucide:badge-dollar-sign" className="size-4" />
            <span>Pricing</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Plans that grow with your business
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            Start with one business line, then expand into a shared customer
            communication workspace as your team grows.
          </p>
        </div>
      </div>

      <div className="container max-w-7xl mt-10 lg:mt-14">
        <section className="grid border max-lg:divide-y lg:grid-cols-3 lg:divide-x">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="flex flex-col justify-between p-6">
              <div className="space-y-2 border-b pb-6">
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <Icon icon={plan.icon} className="size-4" />
                  <h3 className="text-xl tracking-[-0.8px]">{plan.name}</h3>
                </div>

                <>
                  <div className="flex items-baseline font-medium">
                    <span className="text-[3.5rem] leading-[120%] tracking-[-3.92px]">
                      ${isMonthly ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-muted-foreground-subtle text-2xl tracking-[-0.96px]">
                      {isMonthly ? "/mo" : "/yr"}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {isMonthly
                      ? `or $${plan.price.yearly} yearly`
                      : `or $${plan.price.monthly}/mo monthly`}
                  </p>
                </>
              </div>

              <div className="pt-6">
                <h4 className="text-muted-foreground-subtle">
                  Features Included
                </h4>
                <ul className="mt-4 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <Icon
                        icon="lucide:badge-check"
                        className="size-6 shrink-0 text-muted-foreground"
                      />
                      <span className="tracking-[-0.32px] text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                variant={index === 1 ? "default" : "secondary"}
                className="mt-12"
              >
                <a href="/get-started">Get started</a>
              </Button>
            </div>
          ))}
        </section>
      </div>

      <div className="mt-12 h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container max-w-7xl h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Pricing };
