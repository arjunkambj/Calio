import { Icon } from "@iconify/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  {
    title: "Product",
    links: [
      { name: "Home", href: "#home" },
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Contact sales", href: "#pricing" },
      { name: "Terms of service", href: "#" },
      { name: "Privacy policy", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: "ph:x-logo", href: "#", label: "X" },
  { icon: "ph:linkedin-logo", href: "#", label: "LinkedIn" },
  { icon: "ph:instagram-logo", href: "#", label: "Instagram" },
  { icon: "ph:youtube-logo", href: "#", label: "YouTube" },
];

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <section className={cn("bg-background", className)}>
      {/* CTA */}
      <div className="border-b">
        <div className="container max-w-7xl border-x px-5 py-16 md:py-20 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="max-w-2xl text-[2rem] leading-[1.08] font-bold tracking-[-0.035em] md:text-[2.5rem] lg:text-[2.85rem]">
              Put your business number to work.{" "}
              <span className="relative inline-block">
                Stay reachable everywhere.
                <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-foreground/20"></span>
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-foreground/45">
              Get a virtual line your team can answer from any device, with
              texts, recordings, and conversation history all in one place.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="group h-11 rounded-xl px-7 text-[0.88rem] font-semibold shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-px"
              >
                <Link href="/sign-in" className="flex items-center gap-2">
                  Get started with Calio
                  <Icon
                    icon="lucide:arrow-right"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Nav */}
      <div className="border-b">
        <div className="container max-w-7xl border-x px-5 py-10 lg:px-8 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-10">
            {/* About block */}
            <div>
              <h3 className="mb-2 text-base font-semibold tracking-[-0.01em]">
                About Calio
              </h3>
              <p className="text-[0.88rem] leading-relaxed text-foreground/50">
                A smarter way to handle business calls, texts, and customer
                conversations from any device.
              </p>
            </div>

            {/* Nav columns */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-10">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-3.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-foreground/35">
                    {section.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="inline-block text-[0.88rem] text-foreground/50 transition-colors duration-150 hover:text-foreground"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-b">
        <div className="container max-w-7xl border-x px-5 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-[0.78rem] text-foreground/30">
              &copy; {new Date().getFullYear()} Calio. Business calls,
              organized.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  aria-label={link.label}
                  key={link.label}
                  href={link.href}
                  className="text-foreground/30 transition-all duration-200 hover:text-foreground/60"
                >
                  <Icon icon={link.icon} className="size-[1.05rem]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer };
