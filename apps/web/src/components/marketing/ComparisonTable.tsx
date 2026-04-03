"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: "solar:sim-card-bold-duotone",
    title: "Get a number fast",
    description:
      "Set up a virtual business number in minutes instead of waiting through a traditional phone rollout.",
  },
  {
    icon: "solar:phone-calling-rounded-bold-duotone",
    title: "Handle every call professionally",
    description:
      "Make and receive business calls from a dedicated line so work stays separate and consistent.",
  },
  {
    icon: "solar:chat-round-line-bold-duotone",
    title: "Keep texting in the same workflow",
    description:
      "Send and receive SMS from your business number without splitting customer conversations across tools.",
  },
  {
    icon: "solar:microphone-3-bold-duotone",
    title: "Record important conversations",
    description:
      "Review call recordings for coaching, follow-up details, and cleaner customer handoffs.",
  },
] as const;

const operatingBenefits = [
  {
    title: "Track every interaction",
    description:
      "Calls, texts, and recordings stay attached to the customer history, so context is never buried.",
  },
  {
    title: "Work from anywhere",
    description:
      "Use Calio from desktop, laptop, or mobile and stay reachable whether you are in the office or on the move.",
  },
  {
    title: "Keep teams aligned",
    description:
      "Shared conversation history makes it easier to hand off leads, support issues, and follow-ups without repetition.",
  },
] as const;

const useCases = [
  {
    title: "Sales",
    points: [
      "Respond to new leads from a real business number.",
      "Review recordings before the next touchpoint.",
    ],
  },
  {
    title: "Support",
    points: [
      "See previous conversations before replying.",
      "Keep follow-ups tied to the same customer record.",
    ],
  },
  {
    title: "Remote teams",
    points: [
      "Stay connected across devices and time zones.",
      "Give the whole team access to the same conversation context.",
    ],
  },
] as const;

export default function ComparisonTable() {
  return (
    <section id="capabilities" className="w-full bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-3xl"
        >
          <span className="marketing-kicker">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Business Phone System
          </span>
          <h2 className="marketing-title mt-5">
            One Number For Every Customer Conversation
          </h2>
          <p className="marketing-copy mt-4">
            Launch a virtual business line, keep voice and SMS in one place,
            and make customer context available wherever your team is working.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="marketing-soft-surface p-6 md:p-8"
          >
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Calls + SMS
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Recording
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Shared history
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="rounded-3xl border border-border/60 bg-background/80 p-5"
                >
                  <Icon
                    icon={capability.icon}
                    className="mb-4 h-5 w-5 text-primary"
                  />
                  <h3 className="text-lg font-semibold tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="space-y-4"
          >
            {operatingBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-border/60 bg-background p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
                  {benefit.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}

            <div className="rounded-3xl border border-primary/20 bg-primary/8 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
                Ready to launch
              </p>
              <p className="mt-3 text-sm leading-7 text-foreground/85">
                Start with a dedicated business number and give your team one
                place to handle calls, texts, recordings, and follow-up context.
              </p>
              <Button asChild className="mt-5 rounded-full px-6">
                <Link href="/sign-in">
                  Get Your Number
                  <Icon
                    icon="solar:arrow-right-linear"
                    className="ml-2 h-4 w-4"
                  />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-3xl border border-border/60 bg-background p-5"
            >
              <h3 className="text-lg font-semibold tracking-tight">
                {useCase.title}
              </h3>
              <div className="mt-4 space-y-3">
                {useCase.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <Icon
                      icon="solar:check-circle-bold"
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    />
                    <p className="text-sm leading-6 text-muted-foreground">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
