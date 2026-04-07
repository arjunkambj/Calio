"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section
      id="home"
      className={cn("relative w-full overflow-hidden", className)}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[500px] rounded-full bg-primary/4 blur-3xl" />
      </div>

      <div className="relative w-full border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex w-full flex-col items-center justify-center border-x px-5 py-20 md:py-28 lg:py-32">
            <div className="animate-fade-in-up inline-flex items-center gap-2.5 rounded-full bg-primary/8 px-4 py-1.5">
              <span className="inline-block size-1.5 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary">
                Ready in under 5 minutes
              </span>
            </div>

            <h1 className="animate-fade-in-up delay-100 mt-7 max-w-2xl text-center text-[2.75rem] font-semibold tracking-tight leading-[1.07] md:text-5xl lg:text-[4.2rem]">
              A business phone number{" "}
              <span className="text-primary">that works everywhere</span>
            </h1>

            <p className="animate-fade-in-up delay-200 mt-5 max-w-xl text-center text-[1.05rem] leading-relaxed text-foreground/55 md:text-base">
              Get a virtual number in 50+ countries. Make calls, send texts,
              record conversations. Your team answers from any device, anywhere.
            </p>

            <div className="animate-fade-in-up delay-300 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-3">
              <Button
                asChild
                className="h-12 rounded-xl px-8 text-[0.9rem] font-semibold shadow-md shadow-primary/10"
              >
                <a href="#pricing">Try it free</a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="h-12 rounded-xl px-6 text-[0.9rem] font-medium"
              >
                <a href="#features" className="flex items-center gap-2">
                  See how it works
                  <Icon icon="solar:arrow-down-linear" className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full border-b">
        <div className="max-w-6xl mx-auto">
          <ul className="grid w-full grid-cols-1 border-x md:grid-cols-3">
            <li className="animate-fade-in-up delay-400 group flex flex-col items-center justify-center gap-3 px-6 py-7 md:py-8">
              <div className="marketing-icon-box transition-transform duration-300 group-hover:scale-110">
                <Icon icon="solar:phone-calling-linear" />
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
            <li className="animate-fade-in-up delay-500 group flex flex-col items-center justify-center gap-3 border-t border-l px-6 py-7 md:border-t-0 md:py-8">
              <div className="marketing-icon-box transition-transform duration-300 group-hover:scale-110">
                <Icon icon="solar:users-group-two-rounded-linear" />
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
            <li className="animate-fade-in-up delay-600 group flex flex-col items-center justify-center gap-3 border-t border-l px-6 py-7 md:border-t-0 md:py-8">
              <div className="marketing-icon-box transition-transform duration-300 group-hover:scale-110">
                <Icon icon="solar:monitor-smartphone-linear" />
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
