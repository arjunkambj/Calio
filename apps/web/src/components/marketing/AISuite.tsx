import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: "ph:text-aa",
    title: "Real-time Transcription",
    description:
      "Live transcripts so you can review every call without missing details.",
  },
  {
    icon: "ph:chart-bar",
    title: "AI Individual Call Reports",
    description:
      "Instant structured insights for each call with outcomes and next steps.",
  },
  {
    icon: "ph:target",
    title: "Reason & Resolution Extraction",
    description:
      "Detects why the customer called and how the issue was resolved.",
  },
  {
    icon: "ph:smiley",
    title: "Sentiment Analysis",
    description:
      "Measures tone and emotion of both caller and agent to track experience quality.",
  },
];

interface AISuiteProps {
  className?: string;
}

const AISuite = ({ className }: AISuiteProps) => {
  return (
    <section className={cn(className)}>
      {/* Section header */}
      <div>
        <div className="max-w-7xl mx-auto border-b border-x bg-background flex flex-col gap-4 px-5 py-8 lg:px-8 lg:py-12">
          <p className="marketing-section-kicker">AI Suite</p>
          <h2 className="marketing-section-heading">Calio AI Suite</h2>
          <p className="marketing-section-desc">
            Leverage the power of AI to route incoming calls effortlessly to the
            right team or device, ensuring no call is ever missed.
          </p>
        </div>
      </div>

      {/* Feature grid — 2 cols, larger cards */}
      <div>
        <div className="max-w-7xl mx-auto w-full border-b border-x bg-background">
          <div className="grid divide-y lg:grid-cols-2 lg:divide-y-0 lg:divide-x divide-border">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "group relative isolate flex flex-col bg-card p-10 text-start transition-colors duration-200 hover:bg-primary/[0.03] lg:p-12",
                  index < 2 && "lg:border-b lg:border-border"
                )}
              >
                {/* Index */}
                <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-foreground/20 mb-6 block">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mb-5 text-primary">
                  <Icon
                    icon={feature.icon}
                    className="size-8 transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-md text-[0.875rem] leading-relaxed text-foreground/50">
                  {feature.description}
                </p>

                {/* Hover bottom accent */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
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

export { AISuite };