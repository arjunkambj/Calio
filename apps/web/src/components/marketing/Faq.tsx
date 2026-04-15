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
      <div>
        <div className="max-w-7xl mx-auto border-b border-x bg-background flex flex-col gap-3 px-5 py-6 lg:px-8 lg:py-10">
          <p className="marketing-section-kicker">FAQ</p>
          <h2 className="marketing-section-heading">Common Questions</h2>
          <p className="marketing-section-desc">
            Quick answers. If you need more, reach us at support@calio.cc.
          </p>
        </div>
      </div>

      <div>
        <div className="max-w-7xl mx-auto border-b border-x bg-background px-5 py-5 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-3xl">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="space-y-1 border-none"
            >
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-foreground/8 text-foreground data-[state=open]:pb-3 data-[state=open]:border-primary/20 rounded-lg px-4 -mx-4 transition-all duration-200 hover:bg-primary/[0.03] hover:border-primary/15 data-[state=open]:bg-card"
                >
                  <AccordionTrigger className="group py-5 text-start text-[0.95rem] font-medium tracking-[-0.01em] hover:no-underline">
                    <span className="pr-3 transition-colors duration-200 group-hover:text-primary">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[0.92rem] leading-relaxed tracking-[-0.005em] text-foreground/50">
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
