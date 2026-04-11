import Image from "next/image";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const testimonialsRow1 = [
  {
    quote:
      "We used to miss new-patient calls all the time. Now they all go through Calio and the front desk can hand off without losing context.",
    author: {
      name: "Maya Thompson",
      role: "Office Manager",
      company: "Northline Dental",
      image: "https://i.pravatar.cc/150?img=1",
    },
  },
  {
    quote:
      "Our agents are always out showing properties. With Calio, they take business calls on their phone but everything stays in one shared inbox back at the office.",
    author: {
      name: "Jordan Lee",
      role: "Leasing Director",
      company: "Atlas Property Group",
      image: "https://i.pravatar.cc/150?img=3",
    },
  },
  {
    quote:
      "Call recordings and conversation history mean nothing falls through the cracks after intake. We follow up faster and lose fewer leads.",
    author: {
      name: "Sonia Patel",
      role: "Client Services Lead",
      company: "BrightPath Legal",
      image: "https://i.pravatar.cc/150?img=5",
    },
  },
];

const testimonialsRow2 = [
  {
    quote:
      "The 3-minute setup was no joke. We were making calls from our business number before our coffee got cold.",
    author: {
      name: "Marcus Chen",
      role: "Founder",
      company: "TechStart Inc",
      image: "https://i.pravatar.cc/150?img=8",
    },
  },
  {
    quote:
      "Finally, a phone system that actually works on mobile. I can run my entire business from my phone now.",
    author: {
      name: "Elena Rodriguez",
      role: "CEO",
      company: "Growth Labs",
      image: "https://i.pravatar.cc/150?img=9",
    },
  },
  {
    quote:
      "Smart routing means our customers always reach the right department. No more 'let me transfer you' nightmares.",
    author: {
      name: "David Kim",
      role: "Operations Manager",
      company: "ServicePro",
      image: "https://i.pravatar.cc/150?img=12",
    },
  },
];

interface TestimonialCardProps {
  testimonial: (typeof testimonialsRow1)[0];
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="w-[380px] shrink-0 border-r border-y border-foreground/8 bg-card p-6 transition-colors duration-300 hover:bg-primary/[0.02]">
      <blockquote className="text-[0.95rem] leading-relaxed text-foreground/70">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="mt-5 flex items-center gap-3.5 border-t border-foreground/8 pt-5">
        <Image
          src={testimonial.author.image}
          alt={`${testimonial.author.name}'s profile picture`}
          width={36}
          height={36}
          className="rounded-full object-cover ring-1 ring-foreground/10"
        />
        <div>
          <p className="text-[0.88rem] font-medium tracking-[-0.01em]">
            {testimonial.author.name}
          </p>
          <p className="text-[0.78rem] text-foreground/45">
            {testimonial.author.role}, {testimonial.author.company}
          </p>
        </div>
      </div>
    </div>
  );
};

interface TestimonialProps {
  className?: string;
}

const Testimonial = ({ className }: TestimonialProps) => {
  return (
    <section className={cn(className)}>
      <div>
        <div className="max-w-7xl mx-auto border-b border-x flex flex-col gap-3 px-5 py-6 lg:px-8 lg:py-10">
          <p className="marketing-section-kicker">Customer stories</p>
          <h2 className="marketing-section-heading">
            Always On, Always Answered
          </h2>
          <p className="marketing-section-desc">
            Teams using Calio stop missing calls and start closing more deals.
          </p>
        </div>
      </div>

      <div>
        <div className="max-w-7xl mx-auto border-b border-x py-8 lg:py-12">
          <div className="flex flex-col gap-6">
            <Marquee
              className="[--gap:0rem] [--duration:30s]"
              pauseOnHover
              repeat={6}
            >
              {testimonialsRow1.map((testimonial, index) => (
                <TestimonialCard
                  key={`row1-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </Marquee>

            <Marquee
              className="[--gap:0rem] [--duration:35s]"
              pauseOnHover
              reverse
              repeat={6}
            >
              {testimonialsRow2.map((testimonial, index) => (
                <TestimonialCard
                  key={`row2-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      <div className="h-8 w-full md:h-12 lg:h-28">
        <div className="max-w-7xl mx-auto h-full w-full border-b border-x"></div>
      </div>
    </section>
  );
};

export { Testimonial };
