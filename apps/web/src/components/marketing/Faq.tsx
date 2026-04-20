import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/constants/landing-page";
import { cn } from "@/lib/utils";

interface FaqProps {
  className?: string;
}

const Faq = ({ className }: FaqProps) => {
  return (
    <section id="faq" className={cn(className)}>
      {/* Header */}
      <div>
        <div className="max-w-7xl mx-auto border-b border-x bg-background flex flex-col gap-4 px-5 py-8 lg:px-8 lg:py-12">
          <p className="marketing-section-kicker">FAQ</p>
          <h2 className="marketing-section-heading">Common Questions</h2>
          <p className="marketing-section-desc">
            Quick answers. If you need more, reach us at{" "}
            <a
              href="mailto:support@calio.cc"
              className="text-primary hover:underline"
            >
              support@calio.cc
            </a>
            .
          </p>
        </div>
      </div>

      {/* FAQ content */}
      <div>
        <div className="max-w-7xl mx-auto border-b border-x bg-background px-5 py-8 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-3xl">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="space-y-0 border-none"
            >
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-foreground/8 data-[state=open]:border-primary/20 transition-colors duration-200"
                >
                  <AccordionTrigger className="group py-5 text-start text-[0.92rem] font-medium tracking-[-0.01em] hover:no-underline">
                    <span className="pr-4 transition-colors duration-200 group-hover:text-primary group-data-[state=open]:text-primary">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[0.875rem] leading-relaxed text-foreground/50 pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <div className="h-8 w-full md:h-12 lg:h-28">
        <div className="max-w-7xl mx-auto h-full w-full border-b border-x bg-background"></div>
      </div>
    </section>
  );
};

export { Faq };
