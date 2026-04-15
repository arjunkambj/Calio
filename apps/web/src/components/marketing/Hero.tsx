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
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex w-full flex-col items-center justify-center border-x border-b bg-background px-5 pt-20 pb-14 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 relative">
            <div className="animate-fade-in-up inline-flex items-center gap-2.5 rounded-full bg-foreground/8 px-4 py-1.5">
              <span className="text-[0.75rem] font-medium tracking-wide text-foreground">
                Ready in under 5 minutes
              </span>
            </div>

            <h1 className="animate-fade-in-up delay-100 mt-7 max-w-2xl text-center text-[2.75rem] font-semibold tracking-tight leading-[1.07] md:text-5xl lg:text-[4.2rem]">
              A Business Phone Number{" "}
              <span className="text-foreground">That Works Everywhere</span>
            </h1>

            <p className="animate-fade-in-up delay-200 mt-5 max-w-xl text-center text-[1.05rem] leading-relaxed text-foreground/55">
              Get a virtual number in 90+ countries. Make calls, send texts,
              record conversations. Your team answers from any device, anywhere.
            </p>

            <div className="animate-fade-in-up delay-300 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-3">
              <Button asChild className="px-5">
                <Link href="#pricing">Get started</Link>
              </Button>
              <Button asChild variant="secondary" className="px-5">
                <Link href="#features" className="flex items-center gap-2">
                  See how it works
                  <Icon icon="solar:arrow-down-linear" className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div className="max-w-7xl mx-auto">
          <ul className="grid w-full grid-cols-1 border-x border-b bg-background md:grid-cols-3">
            <li className="animate-fade-in-up delay-400 group flex flex-col items-center justify-center gap-3 bg-card px-6 py-7 md:py-8">
              <div className="text-primary">
                <Icon
                  icon="solar:phone-calling-bold-duotone"
                  className="size-9 transition-transform duration-300 ease-out group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <p className="text-[0.9rem] font-semibold text-foreground/80">
                  Call and text
                </p>
                <p className="mt-0.5 text-[0.8rem] text-foreground/40">
                  From one business number
                </p>
              </div>
            </li>
            <li className="animate-fade-in-up delay-500 group flex flex-col items-center justify-center gap-3 border-t border-l bg-card px-6 py-7 md:border-t-0 md:py-8">
              <div className="text-primary">
                <Icon
                  icon="solar:users-group-two-rounded-bold-duotone"
                  className="size-9 transition-transform duration-300 ease-out group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <p className="text-[0.9rem] font-semibold text-foreground/80">
                  Shared with your team
                </p>
                <p className="mt-0.5 text-[0.8rem] text-foreground/40">
                  Everyone sees the same history
                </p>
              </div>
            </li>
            <li className="animate-fade-in-up delay-600 group flex flex-col items-center justify-center gap-3 border-t border-l bg-card px-6 py-7 md:border-t-0 md:py-8">
              <div className="text-primary">
                <Icon
                  icon="solar:monitor-smartphone-bold-duotone"
                  className="size-9 transition-transform duration-300 ease-out group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <p className="text-[0.9rem] font-semibold text-foreground/80">
                  Works on any device
                </p>
                <p className="mt-0.5 text-[0.8rem] text-foreground/40">
                  Phone, laptop, desktop
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Hero };
