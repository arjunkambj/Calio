"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  "Firms You Can Trust",
  "Real Trader Reviews",
  "Exclusive Discounts",
];

const communityBenefits = [
  "Regular Exclusive giveaways for community members",
  "Rewards on every purchase",
];

export default function Hero() {
  return (
    <section className="relative isolate flex  w-full items-center overflow-hidden py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <span className="marketing-kicker mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Your Edge in the Prop Firm World.
              </span>

              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                Compare the{" "}
                <span className="font-serif italic font-medium text-primary">
                  Best Prop Trading
                </span>{" "}
                Firms
              </h1>

              <p className="marketing-copy mt-6 max-w-2xl">
                Built for Traders: Compare Firms, Access Discounts, Earn
                Rewards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full px-8 text-base"
              >
                <a href="#comparison-table">
                  View Best Firms
                  <Icon
                    icon="solar:arrow-right-linear"
                    className="ml-2 h-4 w-4"
                  />
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="h-12 rounded-full border-border bg-background/80 px-8 text-base"
              >
                <Link href="/sign-in">Create Free Account</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <div className="space-y-6 lg:pl-8">
              <div className="rounded-3xl border border-primary/15 bg-primary/6 p-5">
                <div className="space-y-3">
                  {communityBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm leading-6 text-foreground/90">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-3 border-b border-border/55 py-3 last:border-none last:pb-0"
                >
                  <Icon
                    icon="solar:verified-check-bold"
                    className="h-4 w-4 shrink-0 text-primary"
                  />
                  <span className="text-sm text-muted-foreground">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
