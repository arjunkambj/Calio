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
      className={cn("h-full w-full overflow-hidden ", className)}
    >
      <div className="w-full border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex w-full flex-col items-center justify-center border-x px-5 py-20 md:py-28">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-foreground/[0.025] px-4 py-1.5">
              <span className="inline-block size-1.5 rounded-full bg-primary" />
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground/55">
                Live in minutes
              </span>
            </div>
            <h1 className="mt-6 max-w-2xl text-center text-[2.75rem] font-semibold tracking-tight leading-[1.07] md:text-5xl lg:text-[4rem]">
              The Smarter Way to Handle Business Calls
            </h1>
            <p className="mt-5 max-w-xl text-center text-[1.05rem] leading-relaxed text-foreground/50 md:text-base">
              Get a virtual business number in minutes. Make calls, send texts,
              record conversations, and track every customer interaction from
              any device, anywhere in the world.
            </p>
            <Button
              asChild
              className="mt-8 h-11 rounded-xl px-8 text-[0.9rem] font-semibold shadow-sm"
            >
              <a href="#pricing">Get your business number</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full border-b">
        <div className="max-w-6xl mx-auto">
          <ul className="grid h-44 w-full grid-cols-1 border-x md:h-36 lg:h-24 lg:grid-cols-3">
            <li className="flex h-full items-center justify-between gap-4 px-6 md:gap-3 lg:justify-center">
              <Icon
                icon="solar:clock-circle-linear"
                className="size-5 text-foreground/60"
              />
              <p className="text-[0.9rem] font-medium text-foreground/65">
                Setup in Minutes
              </p>
            </li>
            <li className="flex h-full items-center justify-between gap-4 border-t border-l px-6 md:gap-3 lg:justify-center lg:border-t-0">
              <Icon
                icon="solar:chat-round-linear"
                className="size-5 text-foreground/60"
              />
              <p className="text-[0.9rem] font-medium text-foreground/65">
                Calls and Texts in One Place
              </p>
            </li>
            <li className="col-span-1 flex h-full items-center justify-between gap-4 border-t border-l border-dashed px-6 md:col-span-2 md:justify-center md:gap-3 lg:col-span-1 lg:border-t-0">
              <Icon
                icon="solar:devices-linear"
                className="size-5 text-foreground/60"
              />
              <p className="text-[0.9rem] font-medium text-foreground/65">
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
