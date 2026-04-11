"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    icon: "solar:phone-calling-bold-duotone",
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
    icon: "solar:bolt-bold-duotone",
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
    icon: "solar:users-group-two-rounded-bold-duotone",
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
      <div>
        <div className="max-w-7xl mx-auto border-b border-x">
          <div className="flex flex-col gap-3 px-5 py-6 lg:px-8 lg:py-10">
            <p className="marketing-section-kicker">Pricing</p>
            <h2 className="marketing-section-heading">
              Simple Pricing, No Surprises
            </h2>
            <p className="marketing-section-desc">
              Start with one number. Add more as your team grows. Cancel
              anytime.
            </p>
          </div>

          <section className="grid border-t max-lg:divide-y lg:grid-cols-3 lg:divide-x">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col justify-between bg-card transition-colors duration-200",
                  plan.featured && "bg-primary/5",
                )}
              >
                <div className="space-y-2.5 border-b px-6 pt-5 pb-12">
                  <div className="flex items-center gap-2.5">
                    <Icon icon={plan.icon} className="size-6 text-primary" />
                    <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em]">
                      {plan.name}
                    </h3>
                    {plan.featured && (
                      <span className="ml-auto rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline font-medium">
                    <span className="text-[3rem] leading-[1.1] font-semibold tracking-[-0.04em]">
                      $
                      <TickerPrice
                        value={
                          isYearly ? plan.price.yearly : plan.price.monthly
                        }
                      />
                    </span>
                    <span className="ml-1 text-[1rem] text-foreground/40">
                      /mo
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 pt-1">
                    <Switch
                      checked={isYearly}
                      onCheckedChange={setIsYearly}
                      size="sm"
                    />
                    <span className="text-[0.78rem] text-foreground/45">
                      Billed yearly
                    </span>
                    {isYearly && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-semibold text-primary">
                        Save{" "}
                        {getSavePercent(plan.price.monthly, plan.price.yearly)}%
                      </span>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4">
                  <h4 className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-foreground/40">
                    What you get
                  </h4>
                  <ul className="mt-4 space-y-3.5">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon
                          icon="lucide:check"
                          width={18}
                          className={cn(
                            "mt-0.5",
                            plan.featured
                              ? "text-primary"
                              : "text-foreground/60",
                          )}
                        />
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

      <div className="h-8 w-full md:h-12 lg:h-28">
        <div className="max-w-7xl mx-auto h-full w-full border-b border-x"></div>
      </div>
    </section>
  );
};

export { Pricing };
