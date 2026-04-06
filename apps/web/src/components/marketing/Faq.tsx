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
      <div className="border-b">
        <div className="max-w-6xl mx-auto flex flex-col gap-5 border-x px-5 py-5 max-lg:border-x lg:px-8 lg:py-8">
          <p className="marketing-section-kicker">FAQ</p>
          <h2 className="marketing-section-heading">Common questions</h2>
          <p className="marketing-section-desc">
            Learn how Calio helps teams stay reachable, organized, and ready to
            respond from anywhere.
          </p>
        </div>
      </div>

      <div className="border-b">
        <div className="max-w-6xl mx-auto border-x px-5 py-5 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-3xl">
            <Accordion
              type="single"
              collapsible
              className="space-y-1 border-none"
            >
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-foreground/8 text-foreground data-[state=open]:pb-3"
                >
                  <AccordionTrigger className="group py-5 text-start text-[0.95rem] font-medium tracking-[-0.01em] hover:no-underline">
                    <span className="pr-3 transition-opacity duration-200 group-hover:opacity-70">
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
      <div className="h-8 w-full border-b md:h-12 lg:h-28">
        <div className="max-w-6xl mx-auto h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Faq };
