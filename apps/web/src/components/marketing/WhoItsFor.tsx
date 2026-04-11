import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const segments = [
  {
    icon: "solar:chat-round-bold-duotone",
    title: "Small Business",
    size: "1 – 50 employees",
    description:
      "Get a professional phone system in minutes. No IT, no hardware, no contracts. Just pick a number and start.",
    cta: "Start free trial",
    href: "#pricing",
  },
  {
    icon: "solar:layers-bold-duotone",
    title: "Mid-Market",
    size: "50 – 500 employees",
    description:
      "Smart routing, shared inboxes, and call analytics for teams that need more than a single line.",
    cta: "See plans",
    href: "#pricing",
  },
  {
    icon: "solar:global-bold-duotone",
    title: "Enterprise",
    size: "500+ employees",
    description:
      "Custom deployments, dedicated support, compliance, and global coverage. Built for large teams across many locations.",
    cta: "Talk to sales",
    href: "mailto:support@calio.cc",
  },
];

interface WhoItsForProps {
  className?: string;
}

const WhoItsFor = ({ className }: WhoItsForProps) => {
  return (
    <section className={cn(className)}>
      <div className="border-b">
        <div className="max-w-7xl mx-auto flex flex-col gap-3 border-x px-5 py-6 lg:px-8 lg:py-10">
          <p className="marketing-section-kicker">Who it&apos;s for</p>
          <h2 className="marketing-section-heading">Built For Your Stage</h2>
          <p className="marketing-section-desc">
            Whether you&apos;re a 5-person startup or a 5,000-person company,
            Calio fits how your team works.
          </p>
        </div>
      </div>

      <div className="border-b">
        <div className="max-w-7xl mx-auto w-full border-x lg:px-0!">
          <div className="grid bg-border max-lg:divide-y lg:grid-cols-3 lg:gap-px">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="group relative isolate flex flex-col bg-card p-8 text-start transition-all duration-300 lg:p-10 lg:py-12"
              >
                <div className="mb-5 text-primary">
                  <Icon
                    icon={segment.icon}
                    className="size-7 transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-foreground">
                  {segment.title}
                </h3>
                <p className="mt-1 text-[0.8rem] font-medium text-primary/70">
                  {segment.size}
                </p>
                <p className="mt-3 max-w-md text-[0.92rem] leading-relaxed text-foreground/50">
                  {segment.description}
                </p>
                <a
                  href={segment.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-primary transition-all duration-200 hover:gap-2.5"
                >
                  {segment.cta}
                  <Icon icon="solar:arrow-right-linear" className="size-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-8 w-full border-b md:h-12 lg:h-28">
        <div className="max-w-7xl mx-auto h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { WhoItsFor };
