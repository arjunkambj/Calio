import Image from "next/image";

import { Icon } from "@iconify/react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    company: "Northline Dental",
    quote:
      "We used to miss new-patient calls all the time. Now they all go through Calio and the front desk can hand off without losing context.",
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
      "Our agents are always out showing properties. With Calio, they take business calls on their phone but everything stays in one shared inbox back at the office.",
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
      "Call recordings and conversation history mean nothing falls through the cracks after intake. We follow up faster and lose fewer leads.",
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
        <div className="max-w-6xl mx-auto flex flex-col gap-3 border-x px-5 py-6 lg:px-8 lg:py-10">
          <p className="marketing-section-kicker">Customer stories</p>
          <h2 className="marketing-section-heading">
            Businesses that answer every call
          </h2>
          <p className="marketing-section-desc">
            Teams using Calio stop missing calls and start closing more deals.
          </p>
        </div>
      </div>

      <div className="border-b">
        <div className="max-w-6xl mx-auto grid gap-5 border-x px-5 py-5 lg:grid-cols-3 lg:px-8 lg:py-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group flex flex-col gap-5 rounded-xl border border-foreground/6 bg-background p-6 shadow-none transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="flex items-center gap-2.5">
                <div className="marketing-icon-box">
                  <Icon icon="solar:buildings-linear" />
                </div>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-foreground/45">
                  {testimonial.company}
                </span>
              </div>

              <blockquote className="text-[1rem] leading-relaxed text-foreground/65">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-auto flex items-center gap-3.5 border-t border-foreground/6 pt-5">
                <Image
                  src={testimonial.author.image}
                  alt={`${testimonial.author.name}'s profile picture`}
                  width={40}
                  height={40}
                  className="rounded-full object-cover ring-2 ring-primary/20"
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
        <div className="max-w-6xl mx-auto h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Testimonial };
