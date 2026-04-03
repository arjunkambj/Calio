"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";

const FEATURES = [
  {
    icon: "solar:phone-calling-rounded-bold-duotone",
    title: "Dedicated Business Calling",
    description:
      "Get a virtual number for your business and keep work conversations separate from your personal line.",
  },
  {
    icon: "solar:chat-round-line-bold-duotone",
    title: "Calls and Texts in One Place",
    description:
      "Handle voice and SMS from a single workspace so every customer conversation stays connected.",
  },
  {
    icon: "solar:microphone-3-bold-duotone",
    title: "Automatic Call Recording",
    description:
      "Record important conversations so your team can review context, quality, and next steps when needed.",
  },
  {
    icon: "solar:notes-bold-duotone",
    title: "Customer Interaction History",
    description:
      "Track calls, texts, and recordings in one timeline so follow-ups are informed instead of guesswork.",
  },
  {
    icon: "solar:laptop-smartphone-bold-duotone",
    title: "Work From Any Device",
    description:
      "Stay reachable from desktop, laptop, or mobile without tying customer communication to one phone.",
  },
  {
    icon: "solar:users-group-rounded-bold-duotone",
    title: "Built for Teams",
    description:
      "Give your team a shared system for business calls so handoffs, follow-ups, and accountability stay clear.",
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
              <span className="text-primary/70">To Run Calls Smoothly</span>
            </h2>
            <p className="marketing-copy max-w-md">
              Calio gives you one place to talk, text, review recordings, and
              keep customer context attached to every conversation.
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
