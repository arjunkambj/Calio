"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";

const FEATURES = [
  {
    icon: "solar:verified-check-bold-duotone",
    title: "Verified Reviews",
    description:
      "Every firm is vetted with real trader reviews, payout proof, and Trustpilot scores so you can trust the data.",
  },
  {
    icon: "solar:chart-2-bold-duotone",
    title: "Side-by-Side Comparison",
    description:
      "Compare drawdown types, payout methods, platforms, and fees across 50+ prop firms in one table.",
  },
  {
    icon: "solar:tag-price-bold-duotone",
    title: "Exclusive Discounts",
    description:
      "Access partner discount codes sourced directly from firms — updated regularly so they always work.",
  },
  {
    icon: "solar:shield-check-bold-duotone",
    title: "Transparent Rankings",
    description:
      "Rankings are based on objective criteria — payout speed, platform reliability, and trader satisfaction.",
  },
  {
    icon: "solar:bolt-circle-bold-duotone",
    title: "Real-Time Updates",
    description:
      "Firm data, discount codes, and reviews are updated continuously so you always have the latest information.",
  },
  {
    icon: "solar:users-group-rounded-bold-duotone",
    title: "Community Driven",
    description:
      "Built by traders, for traders. Our rankings and reviews are shaped by real community feedback and experiences.",
  },
] as const;

export default function Features() {
  return (
    <section id="features" className="w-full py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-4"
          >
            <span className="marketing-kicker">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Why Calio
            </span>
            <h2 className="marketing-title">
              Everything You Need{" "}
              <span className="text-primary/70">To Choose Wisely</span>
            </h2>
            <p className="marketing-copy max-w-md">
              Trusted tools and verified data to help you compare prop firms and
              find the perfect fit.
            </p>
          </motion.div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="border-t border-border/60 pt-5"
              >
                <Icon
                  icon={feature.icon}
                  className="mb-4 h-5 w-5 text-primary"
                />
                <h3 className="text-lg font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
