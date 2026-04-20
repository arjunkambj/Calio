"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section
      id="home"
      className={cn("relative w-full overflow-hidden", className)}
    >
      {/* Main hero content */}
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex w-full flex-col items-center justify-center border-x border-b bg-background px-5 pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-36 lg:pb-28 relative">

            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 border border-primary/30 bg-primary/6 px-3.5 py-1 rounded-sm">
              <span className="size-1.5 rounded-full bg-primary block" />
              <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-primary">
                Ready in under 5 minutes
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up delay-100 mt-8 max-w-3xl text-center text-[3rem] font-bold tracking-[-0.04em] leading-[0.97] md:text-[3.8rem] lg:text-[5rem]">
              A Business Phone Number That Works{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Everywhere</span>
                <span
                  className="absolute bottom-1 left-0 right-0 h-[3px] bg-primary"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Subtext */}
            <p className="animate-fade-in-up delay-200 mt-6 max-w-lg text-center text-[1rem] leading-[1.7] text-foreground/50">
              Get a virtual number in 90+ countries. Make calls, send texts,
              record conversations. Your team answers from any device, anywhere.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-300 mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-3">
              <Button
                asChild
                className="px-8 h-12 text-[0.9rem] font-semibold rounded-sm"
              >
                <Link href="#pricing">Get started free</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-8 h-12 text-[0.9rem] rounded-sm border-foreground/20 hover:border-foreground/40"
              >
                <Link href="#features" className="flex items-center gap-2">
                  See how it works
                  <Icon icon="ph:arrow-down" className="size-4" />
                </Link>
              </Button>
            </div>

            {/* Trust signal */}
            <p className="animate-fade-in-up delay-400 mt-6 text-[0.78rem] text-foreground/35 tracking-wide">
              No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto">
          <ul className="grid w-full grid-cols-1 border-x border-b bg-background md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <li className="animate-fade-in-up delay-400 group flex flex-col gap-1.5 bg-card px-8 py-8 md:py-10">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-primary/10 rounded-sm text-primary">
                  <Icon icon="ph:phone" className="size-4" />
                </div>
                <p className="text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-foreground/40">
                  Call and text
                </p>
              </div>
              <p className="text-[1.5rem] font-bold tracking-[-0.03em] text-foreground">
                One number
              </p>
              <p className="text-[0.83rem] text-foreground/40 leading-snug">
                Calls and texts from a single business number
              </p>
            </li>
            <li className="animate-fade-in-up delay-500 group flex flex-col gap-1.5 bg-card px-8 py-8 md:py-10">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-primary/10 rounded-sm text-primary">
                  <Icon icon="ph:users" className="size-4" />
                </div>
                <p className="text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-foreground/40">
                  Shared team
                </p>
              </div>
              <p className="text-[1.5rem] font-bold tracking-[-0.03em] text-foreground">
                90+ countries
              </p>
              <p className="text-[0.83rem] text-foreground/40 leading-snug">
                Virtual numbers available worldwide
              </p>
            </li>
            <li className="animate-fade-in-up delay-600 group flex flex-col gap-1.5 bg-card px-8 py-8 md:py-10">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-primary/10 rounded-sm text-primary">
                  <Icon icon="ph:devices" className="size-4" />
                </div>
                <p className="text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-foreground/40">
                  Cross-platform
                </p>
              </div>
              <p className="text-[1.5rem] font-bold tracking-[-0.03em] text-foreground">
                Any device
              </p>
              <p className="text-[0.83rem] text-foreground/40 leading-snug">
                Phone, laptop, desktop — take calls anywhere
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Hero };
