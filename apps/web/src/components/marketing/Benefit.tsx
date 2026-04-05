import Image from "next/image";

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
      <div className="border-b">
        <div className="container max-w-7xl flex flex-col gap-5 border-x px-5 py-5 max-lg:border-x lg:px-8 lg:py-8">
          <p className="marketing-section-kicker">Core workflows</p>
          <h2 className="marketing-section-heading">
            Built for customer conversations
          </h2>
          <p className="marketing-section-desc">
            From first ring to follow-up, Calio helps your team stay responsive
            and accountable.
          </p>
        </div>
      </div>
      <div className="container max-w-7xl border-x lg:px-0!">
        <div className="items-center">
          <div className="grid flex-1 lg:grid-cols-3 lg:gap-px">
            {DATA.map((item, index) => (
              <div
                key={index}
                className="relative isolate flex flex-col bg-background pb-5 text-start lg:pb-14"
              >
                <div className="flex-1 border-b pt-8 border-border">
                  <h3 className="mt-2 px-5 text-[1.1rem] font-semibold tracking-[-0.02em] text-foreground lg:px-8">
                    {item.title}
                  </h3>
                  <p className="px-5 pt-2 pb-6 text-[0.95rem] leading-relaxed text-foreground/55 lg:px-8">
                    {item.description}
                  </p>
                </div>
                <div className="border-b border-border">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={480}
                    height={320}
                    className="h-auto w-full p-10 opacity-80 dark:invert"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-8 w-full border-b md:h-12 lg:h-[112px]">
        <div className="container max-w-7xl h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Benefits };
