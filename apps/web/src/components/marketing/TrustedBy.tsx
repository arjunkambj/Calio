"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const companies = [
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/635BFF" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion/000000" },
  { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000" },
  { name: "Loom", logo: "https://cdn.simpleicons.org/loom/625DF5" },
  { name: "Linear", logo: "https://cdn.simpleicons.org/linear/5E6AD2" },
  { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3FCF8E" },
  { name: "Resend", logo: "https://cdn.simpleicons.org/resend/000000" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
];

interface TrustedByProps {
  className?: string;
}

const TrustedBy = ({ className }: TrustedByProps) => {
  return (
    <section className={cn("w-full", className)}>
      <div>
        <div className="max-w-7xl mx-auto border-b border-x">
          <div className="flex flex-col items-center py-8 lg:py-12">
            <div className="w-full overflow-hidden">
              <Marquee
                className="[--gap:5rem] [--duration:30s]"
                pauseOnHover
                repeat={6}
              >
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-foreground/40 transition-all duration-300 hover:text-foreground/70 hover:scale-105"
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={28}
                      height={28}
                      className="dark:invert"
                      unoptimized
                    />
                    <span className="text-[0.95rem] font-medium tracking-tight whitespace-nowrap">
                      {company.name}
                    </span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TrustedBy };
