import { Icon } from "@iconify/react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const DATA = [
  {
    title: "Record every important call",
    description:
      "Capture conversations for training, quality review, and follow-ups so your team never relies on memory alone.",
    icon: "CircleHelp",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  },
  {
    title: "See the full customer timeline",
    description:
      "Track calls, texts, and notes in one place so anyone stepping in has the context they need before replying.",
    icon: "Volume2",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
  },
  {
    title: "Keep your team aligned anywhere",
    description:
      "Route business conversations through one shared number and history, even when your team is remote or on the move.",
    icon: "Lightbulb",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
  },
];
interface BenefitsProps {
  className?: string;
}

const Benefits = ({ className }: BenefitsProps) => {
  return (
    <section className={cn(className)}>
      <div className="border-y">
        <div className="container max-w-7xl flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Icon icon="lucide:pen-tool" className="size-4" />
            <span>Core workflows</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Built for real customer conversations
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            From first ring to follow-up, Calio helps your team stay responsive
            and accountable.
          </p>
        </div>
      </div>
      <div className="container max-w-7xl border-x lg:px-0!">
        <div className="items-center">
          <div className="grid flex-1 bg-border max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:gap-px">
            {DATA.map((item, index) => (
              <div
                key={index}
                className="relative isolate flex flex-col bg-background pt-5 text-start lg:pt-20"
              >
                <div className="flex-1 border-b border-border">
                  <h3 className="mt-2 px-4 text-lg font-semibold tracking-tight lg:px-8">
                    {item.title}
                  </h3>
                  <p className="px-4 pt-2 pb-6 text-muted-foreground lg:px-8">
                    {item.description}
                  </p>
                </div>
                <div className="bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={480}
                    height={320}
                    className="h-auto w-full p-12 dark:invert"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container max-w-7xl h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Benefits };
