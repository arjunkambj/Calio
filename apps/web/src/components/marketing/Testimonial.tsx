import Image from "next/image";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    company: "Northline Dental",
    quote:
      "We stopped missing new-patient calls the moment we moved the number into Calio. The shared history makes handoffs between front desk staff much cleaner.",
    author: {
      name: "Maya Thompson",
      role: "Office Manager",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    },
  },
  {
    company: "Atlas Property Group",
    quote:
      "Our leasing team can answer from anywhere, but every call and text still lands in the same record. That alone removed a lot of operational chaos.",
    author: {
      name: "Jordan Lee",
      role: "Leasing Director",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    },
  },
  {
    company: "BrightPath Legal",
    quote:
      "Recordings and conversation history mean nothing gets lost after intake. We have better context before every follow-up and fewer dropped leads.",
    author: {
      name: "Sonia Patel",
      role: "Client Services Lead",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    },
  },
];

interface TestimonialProps {
  className?: string;
}

const Testimonial = ({ className }: TestimonialProps) => {
  return (
    <section className={cn(className)}>
      <div className="border-b">
        <div className="container max-w-7xl flex flex-col gap-5 border-x px-5 py-5 max-lg:border-x lg:px-8 lg:py-8">
          <p className="marketing-section-kicker">Customer stories</p>
          <h2 className="marketing-section-heading">
            Teams stay reachable with Calio
          </h2>
          <p className="marketing-section-desc">
            Built for businesses that need every call, text, and follow-up to
            stay visible.
          </p>
        </div>
      </div>

      <div className="border-b">
        <div className="container max-w-7xl grid gap-6 border-x px-5 py-5 lg:grid-cols-3 lg:px-8 lg:py-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group flex flex-col gap-5 rounded-none border border-foreground/8 bg-background p-6 shadow-none transition-all duration-300 hover:shadow-md hover:border-foreground/12"
            >
              <div className="flex items-center gap-2.5 text-foreground/45">
                <div className="marketing-icon-box" />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em]">
                  {testimonial.company}
                </span>
              </div>

              <blockquote className="text-[1rem] leading-relaxed text-foreground/60 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-auto flex items-center gap-3.5 border-t border-foreground/6 pt-5">
                <Image
                  src={testimonial.author.image}
                  alt={`${testimonial.author.name}'s profile picture`}
                  width={40}
                  height={40}
                  className="rounded-full object-cover ring-2 ring-foreground/5"
                />
                <div>
                  <p className="text-[0.9rem] font-medium tracking-[-0.01em]">
                    {testimonial.author.name}
                  </p>
                  <p className="text-[0.8rem] text-foreground/40">
                    {testimonial.author.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="h-8 w-full border-b md:h-12 lg:h-28">
        <div className="container max-w-7xl h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Testimonial };
