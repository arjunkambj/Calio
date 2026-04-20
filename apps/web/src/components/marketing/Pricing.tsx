"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    icon: "ph:phone",
    name: "Starter",
    price: {
      monthly: 5,
      yearly: 3,
    },
    features: [
      "1 virtual number",
      "Call and text from any device",
      "Call recordings",
      "Basic conversation history",
      "Email support",
    ],
  },
  {
    icon: "ph:lightning",
    name: "Growth",
    featured: true,
    price: {
      monthly: 19,
      yearly: 15,
    },
    features: [
      "3 virtual numbers",
      "Shared team inbox",
      "Searchable call recordings",
      "Team roles and permissions",
      "Priority support",
    ],
  },
  {
    icon: "ph:users",
    name: "Team",
    price: {
      monthly: 29,
      yearly: 25,
    },
    features: [
      "Unlimited numbers",
      "Call routing and escalations",
      "Advanced recording controls",
      "Custom onboarding",
      "Dedicated support",
    ],
  },
];

function getSavePercent(monthly: number, yearly: number) {
  return Math.round(((monthly - yearly) / monthly) * 100);
}

function TickerDigit({ digit }: { digit: string }) {
  const map: Record<string, number> = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
  };
  const value = map[digit] ?? 0;

  return (
    <span className="relative inline-block h-[1em] overflow-hidden leading-[1.1]">
      <span
        className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateY(-${value * 10}%)` }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="block h-[1em]">
            {i}
          </span>
        ))}
      </span>
    </span>
  );
}

function TickerPrice({ value }: { value: number }) {
  const formatted = value % 1 === 0 ? value.toString() : value.toFixed(2);
  const chars = formatted.split("");

  return (
    <span className="inline-flex items-baseline">
      {chars.map((char, i) =>
        char >= "0" && char <= "9" ? (
          <TickerDigit key={i} digit={char} />
        ) : (
          <span key={i}>{char}</span>
        ),
      )}
    </span>
  );
}

interface PricingProps {
  className?: string;
}

const Pricing = ({ className }: PricingProps) => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className={cn(className)}>
      {/* Header */}
      <div>
        <div className="max-w-7xl mx-auto border-b border-x bg-background">
          <div className="flex flex-col gap-4 px-5 py-8 lg:px-8 lg:py-12">
            <p className="marketing-section-kicker">Pricing</p>
            <h2 className="marketing-section-heading">
              Simple Pricing, No Surprises
            </h2>
            <p className="marketing-section-desc">
              Start with one number. Add more as your team grows. Cancel
              anytime.
            </p>
          </div>

          {/* Billing toggle — placed in header area */}
          <div className="flex items-center gap-3 px-5 pb-8 lg:px-8">
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              size="sm"
            />
            <span className="text-[0.82rem] text-foreground/50">
              Billed yearly
            </span>
            {isYearly && (
              <span className="border border-primary/30 bg-primary/8 px-2 py-0.5 text-[0.65rem] font-semibold tracking-[0.08em] uppercase text-primary rounded-sm">
                Save up to 37%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Plans grid */}
      <div>
        <div className="max-w-7xl mx-auto border-b border-x bg-background">
          <section className="grid border-t divide-y lg:grid-cols-3 lg:divide-y-0 lg:divide-x divide-border">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex flex-col justify-between bg-card",
                  plan.featured && "bg-primary/[0.04]",
                )}
              >
                {/* Featured top border */}
                {plan.featured && (
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
                )}

                {/* Plan header */}
                <div className="border-b px-6 pt-7 pb-8">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="p-1.5 bg-primary/10 rounded-sm text-primary">
                      <Icon icon={plan.icon} className="size-4" />
                    </div>
                    <h3 className="text-[0.95rem] font-semibold tracking-[-0.01em]">
                      {plan.name}
                    </h3>
                    {plan.featured && (
                      <span className="ml-auto border border-primary/30 bg-primary/8 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-primary rounded-sm">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline">
                    <span className="text-[0.95rem] font-medium text-foreground/50 mr-0.5">$</span>
                    <span className="text-[3.2rem] leading-none font-bold tracking-[-0.05em]">
                      <TickerPrice
                        value={isYearly ? plan.price.yearly : plan.price.monthly}
                      />
                    </span>
                    <span className="ml-1.5 text-[0.85rem] text-foreground/40">
                      /mo
                    </span>
                  </div>

                  {isYearly && (
                    <p className="mt-1.5 text-[0.75rem] text-foreground/35">
                      Billed ${plan.price.yearly * 12}/yr · Save {getSavePercent(plan.price.monthly, plan.price.yearly)}%
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="px-6 pb-5 pt-5 flex-1">
                  <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-foreground/35 mb-4">
                    What you get
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon
                          icon="ph:check"
                          width={16}
                          className={cn(
                            "mt-0.5 shrink-0",
                            plan.featured
                              ? "text-primary"
                              : "text-foreground/50",
                          )}
                        />
                        <span className="text-[0.875rem] leading-snug text-foreground/60">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-6 pb-7">
                  <Button
                    asChild
                    variant={plan.featured ? "default" : "outline"}
                    className="w-full"
                  >
                    <a href="/get-started">Get started</a>
                  </Button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <div className="h-8 w-full md:h-12 lg:h-28">
        <div className="max-w-7xl mx-auto h-full w-full border-b border-x bg-background"></div>
      </div>
    </section>
  );
};

export { Pricing };
