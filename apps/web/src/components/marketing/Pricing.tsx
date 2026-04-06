"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    icon: "solar:rocket-bold",
    name: "Starter",
    price: {
      monthly: 5,
      yearly: 50,
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
    icon: "solar:briefcase-bold",
    name: "Growth",
    featured: true,
    price: {
      monthly: 15,
      yearly: 150,
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
    icon: "solar:buildings-bold",
    name: "Team",
    price: {
      monthly: 25,
      yearly: 250,
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
      <div className="border-b">
        <div className="container max-w-7xl border-x">
          <div className="flex flex-col gap-5 px-5 py-5 lg:px-8 lg:py-8">
            <p className="marketing-section-kicker">Pricing</p>
            <h2 className="marketing-section-heading">
              Pricing for growing teams
            </h2>
            <p className="marketing-section-desc">
              Start with one business line, then expand into a shared customer
              communication workspace as your team grows.
            </p>
          </div>
          <section className="grid border-t max-lg:divide-y lg:grid-cols-3 lg:divide-x">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col justify-between transition-colors duration-200",
                  plan.featured && "bg-foreground/2",
                )}
              >
                <div className="space-y-2.5 border-b px-6 pt-5 pb-12">
                  <div className="flex items-center gap-2.5">
                    <div className="marketing-icon-box size-8">
                      <Icon icon={plan.icon} className="size-4" />
                    </div>
                    <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em]">
                      {plan.name}
                    </h3>
                    {plan.featured && (
                      <span className="ml-auto rounded-full border border-foreground/12 bg-foreground/5 px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-foreground/55">
                        Popular
                      </span>
                    )}
                  </div>

                  <>
                    <div className="flex items-baseline font-medium">
                      <span className="text-[3rem] leading-[1.1] font-semibold tracking-[-0.04em]">
                        ${isMonthly ? plan.price.monthly : plan.price.yearly}
                      </span>
                      <span className="ml-1 text-[1rem] text-foreground/40">
                        {isMonthly ? "/mo" : "/yr"}
                      </span>
                    </div>
                    <p className="text-[0.85rem] text-foreground/45">
                      {isMonthly
                        ? `or $${plan.price.yearly} yearly`
                        : `or $${plan.price.monthly}/mo monthly`}
                    </p>
                  </>
                </div>

                <div className="px-6 pb-6 pt-4">
                  <h4 className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-foreground/40">
                    Features Included
                  </h4>
                  <ul className="mt-4 space-y-3.5">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon icon="solar:check-circle-bold" width={24} />
                        <span className="text-[0.9rem] leading-snug text-foreground/55">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  variant={plan.featured ? "default" : "secondary"}
                  className="mt-auto mb-6 mx-6 h-11 rounded-xl text-[0.88rem]"
                >
                  <a href="/get-started">Get started</a>
                </Button>
              </div>
            ))}
          </section>
        </div>
      </div>

      <div className="h-8 w-full border-b md:h-12 lg:h-28">
        <div className="container max-w-7xl h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Pricing };
