import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const segments = [
  {
    icon: "ph:user",
    title: "Solo & Freelance",
    size: "1 user",
    description:
      "Your business, your number. Professional calling from day one with zero overhead.",
    cta: "Start free trial",
    href: "#pricing",
  },
  {
    icon: "ph:chat-circle",
    title: "Small Business",
    size: "2 – 50 employees",
    description:
      "A full phone system without the IT headache. Shared lines, call routing, and a local presence.",
    cta: "See plans",
    href: "#pricing",
  },
  {
    icon: "ph:stack",
    title: "Growing Teams",
    size: "50 – 500 employees",
    description:
      "Multi-department routing, analytics, and integrations that keep up with your pace.",
    cta: "See plans",
    href: "#pricing",
  },
  {
    icon: "ph:globe",
    title: "Enterprise",
    size: "500+ employees",
    description:
      "Global coverage, compliance-ready, and built for complex orgs that need reliability at scale.",
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
      <div>
        <div className="max-w-7xl mx-auto border-b border-x bg-background flex flex-col gap-3 px-5 py-6 lg:px-8 lg:py-10">
          <p className="marketing-section-kicker">Who it&apos;s for</p>
          <h2 className="marketing-section-heading">Right-Sized for Every Team</h2>
          <p className="marketing-section-desc">
            Calio grows with you — start small, scale infinitely, never switch
            platforms again.
          </p>
        </div>
      </div>

      <div>
        <div className="max-w-7xl mx-auto w-full border-b border-x bg-background lg:px-0!">
          <div className="grid bg-border max-lg:divide-y lg:grid-cols-2 lg:gap-px">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="group relative isolate flex flex-col bg-card p-8 text-start transition-all duration-300 hover:bg-[#FDFDFC] lg:p-10 lg:py-12"
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
                  <Icon icon="ph:arrow-right" className="size-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-8 w-full md:h-12 lg:h-28">
        <div className="max-w-7xl mx-auto h-full w-full border-b border-x bg-background"></div>
      </div>
    </section>
  );
};

export { WhoItsFor };
