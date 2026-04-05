import { Icon } from "@iconify/react";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
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
      <div className="w-full border-y">
        <div className="container max-w-7xl">
          <div className="relative flex w-full flex-col justify-start border-x border-dashed px-5 py-12 md:items-center md:justify-center">
            <p className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-block size-2 rounded bg-green-500" />
              LIVE IN MINUTES
            </p>
            <div className="mt-3 mb-7 w-full max-w-xl text-5xl font-medium font-semibold tracking-tighter md:mb-10 md:text-center md:text-6xl lg:relative lg:mb-0 lg:text-left lg:text-7xl">
              <h1 className="relative z-10 inline md:mr-3">
                The Smarter Way to <br className="block md:hidden" /> Handle
                Business <br className="block md:hidden" />
              </h1>
              <ContainerTextFlip
                className="absolute text-4xl font-medium font-semibold tracking-tighter md:bottom-4 md:left-1/2 md:-translate-x-1/2 md:text-5xl lg:-bottom-4 lg:left-auto lg:translate-x-0 lg:text-7xl"
                words={["Calls", "Texts", "Follow-Ups", "Teams"]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b">
        <div className="container max-w-7xl">
          <div className="flex w-full flex-col items-center justify-center border-x border-dashed py-20">
            <div className="w-full max-w-2xl space-y-5 md:text-center">
              <p className="px-5 text-muted-foreground lg:text-lg">
                Get a virtual business number in minutes. Make calls, send
                texts, record conversations, and track every customer
                interaction from any device, anywhere in the world.
              </p>
              <Button asChild className="mx-5 h-12 rounded-lg">
                <a href="#pricing">Get your business number</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b">
        <div className="container max-w-7xl">
          <ul className="grid h-44 w-full grid-cols-1 border-x border-dashed md:h-34 md:grid-cols-2 lg:h-24 lg:grid-cols-3">
            <li className="flex h-full items-center justify-between gap-10 px-5 md:gap-3 lg:justify-center">
              <div className="flex size-12 items-center justify-center rounded-lg bg-muted">
                <Icon
                  icon="lucide:zap"
                  className="size-6 text-muted-foreground"
                />
              </div>
              <p className="text-lg text-muted-foreground">Setup in Minutes</p>
            </li>
            <li className="flex h-full items-center justify-between gap-10 border-t border-l border-dashed px-5 md:gap-3 lg:justify-center lg:border-t-0">
              <div className="flex size-12 items-center justify-center rounded-lg bg-muted">
                <Icon
                  icon="lucide:message-square-text"
                  className="size-6 text-muted-foreground"
                />
              </div>
              <p className="text-lg text-muted-foreground">
                Calls and Texts in One Place
              </p>
            </li>
            <li className="col-span-1 flex h-full items-center justify-between gap-10 border-t border-l border-dashed px-5 md:col-span-2 md:justify-center md:gap-3 lg:col-span-1 lg:border-t-0">
              <div className="flex size-12 items-center justify-center rounded-lg bg-muted">
                <Icon
                  icon="lucide:monitor-smartphone"
                  className="size-6 text-muted-foreground"
                />
              </div>
              <p className="text-lg text-muted-foreground">
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
