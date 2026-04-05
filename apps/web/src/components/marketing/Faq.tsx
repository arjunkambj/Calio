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
      <div className="border-y">
        <div className="container max-w-7xl flex flex-col gap-6 border-x px-5 py-4 max-lg:border-x lg:px-8 lg:py-8">
          <p className="marketing-section-kicker">FAQ</p>
          <h2 className="marketing-section-heading">Common questions</h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            Learn how Calio helps teams stay reachable, organized, and ready to
            respond from anywhere.
          </p>
        </div>
      </div>

      <div className="container max-w-7xl">
        <div className="mx-auto max-w-5xl pt-8 pb-4 md:pb-8 lg:pt-[3.75rem] lg:pb-[50px]">
          <Accordion
            type="single"
            collapsible
            className="space-y-4 border-none"
          >
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className=" text-primary data-[state=open]:pb-2"
              >
                <AccordionTrigger className="py-5 text-start text-base tracking-[-0.32px]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base tracking-[-0.32px] text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container max-w-7xl h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Faq };
