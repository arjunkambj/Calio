"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/constants/landing-page";
import { motion } from "motion/react";

export default function FAQ() {
  return (
    <section id="faq" className="w-full py-24 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-4 lg:col-span-4"
          >
            <span className="marketing-kicker">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              FAQ
            </span>
            <h2 className="marketing-title">FAQ</h2>
            <p className="marketing-copy">
              Everything you need to know about prop firms, evaluations, and how
              Calio helps you find the best fit.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>
                Need more help?{" "}
                <a href="/sign-in" className="text-primary underline">
                  Create your account
                </a>
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-8">
            <Accordion
              type="single"
              collapsible
              className="w-full rounded-none border-0 bg-transparent"
            >
              {FAQ_ITEMS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    delay: index * 0.05,
                  }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-b border-border/55 bg-transparent data-[state=open]:bg-transparent"
                  >
                    <AccordionTrigger className="px-0 py-6 text-left text-lg font-medium text-foreground hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-0 pb-6 text-base leading-7 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
