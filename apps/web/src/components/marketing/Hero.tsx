import { Icon } from "@iconify/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section
      id="home"
      className={cn("h-full w-full overflow-hidden ", className)}
    >
      <div className="w-full border-b">
        <div className="container max-w-7xl">
          <div className="flex w-full flex-col items-center justify-center border-x px-5 py-20 md:py-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] px-4 py-1.5">
              <span className="inline-block size-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-foreground/60">
                Live in minutes
              </span>
            </div>
            <h1 className="mt-5 max-w-2xl text-center text-5xl font-semibold tracking-tighter leading-[1.08] md:text-6xl lg:text-[4.5rem]">
              The Smarter Way to Handle Business Calls
            </h1>
            <p className="mt-6 max-w-xl text-center text-[1.08rem] leading-relaxed text-foreground/55 md:text-lg">
              Get a virtual business number in minutes. Make calls, send texts,
              record conversations, and track every customer interaction from
              any device, anywhere in the world.
            </p>
            <Button
              asChild
              className="mt-8 h-12 rounded-lg px-8 text-[0.92rem] font-semibold"
            >
              <a href="#pricing">Get your business number</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full border-b">
        <div className="container max-w-7xl">
          <ul className="grid h-44 w-full grid-cols-1 border-x md:h-36 lg:h-24 lg:grid-cols-3">
            <li className="flex h-full items-center justify-between gap-10 px-6 md:gap-3 lg:justify-center">
              <div className="marketing-icon-box">
                <Icon icon="lucide:zap" />
              </div>
              <p className="text-[0.95rem] font-medium text-foreground/70">
                Setup in Minutes
              </p>
            </li>
            <li className="flex h-full items-center justify-between gap-10 border-t border-l px-6 md:gap-3 lg:justify-center lg:border-t-0">
              <div className="marketing-icon-box">
                <Icon icon="lucide:message-square-text" />
              </div>
              <p className="text-[0.95rem] font-medium text-foreground/70">
                Calls and Texts in One Place
              </p>
            </li>
            <li className="col-span-1 flex h-full items-center justify-between gap-10 border-t border-l border-dashed px-6 md:col-span-2 md:justify-center md:gap-3 lg:col-span-1 lg:border-t-0">
              <div className="marketing-icon-box">
                <Icon icon="lucide:monitor-smartphone" />
              </div>
              <p className="text-[0.95rem] font-medium text-foreground/70">
                Works Across Every Device
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Hero };
