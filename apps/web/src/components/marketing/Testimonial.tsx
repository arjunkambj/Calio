import { Icon } from "@iconify/react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
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
    <section className={cn("py-32", className)}>
      <div className="border-y">
        <div className="container flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Icon icon="lucide:handshake" className="size-4" />
            <span>Customer stories</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Teams use Calio to stay reachable and accountable
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            Built for businesses that need every call, text, and follow-up to
            stay visible.
          </p>
        </div>
      </div>

      <div className="container mt-10 grid gap-8 md:mt-14 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="flex flex-col gap-6 rounded-md bg-background p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="flex size-10 items-center justify-center rounded-full bg-muted">
                <Icon icon="lucide:building-2" className="size-5" />
              </div>
              <span className="text-sm font-medium uppercase tracking-[0.18em]">
                {testimonial.company}
              </span>
            </div>

            <blockquote className="text-muted-foreground-subtle text-lg font-normal italic">{`“${testimonial.quote}”`}</blockquote>

            <div className="mt-auto flex items-center gap-4">
              <Image
                src={testimonial.author.image}
                alt={`${testimonial.author.name}'s profile picture`}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-lg tracking-[-0.36px]">
                  {testimonial.author.name}
                </p>
                <p className="text-muted-foreground">
                  {testimonial.author.role}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { Testimonial };
