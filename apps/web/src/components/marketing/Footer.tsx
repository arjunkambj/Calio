import { Icon } from "@iconify/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    title: "Company",
    links: [
      { name: "About Calio", href: "#features" },
      { name: "Contact sales", href: "#pricing" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", href: "#faq" },
      { name: "Get started", href: "/get-started" },
    ],
  },
  {
    title: "Service",
    links: [
      { name: "Terms of service", href: "#" },
      { name: "Privacy policy", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: "lucide:facebook", href: "#", label: "Facebook" },
  { icon: "lucide:twitter", href: "#", label: "Twitter" },
  { icon: "lucide:linkedin", href: "#", label: "LinkedIn" },
  { icon: "lucide:instagram", href: "#", label: "Instagram" },
];

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <section
      className={cn(
        "bg-primary py-16 text-primary-foreground md:py-24 lg:py-32",
        className,
      )}
    >
      <div className="container">
        <footer>
          <div className="mb-16 rounded-2xl bg-primary-foreground/5 p-8 backdrop-blur-sm md:p-12 lg:p-16">
            <div className="flex flex-col items-center text-center">
              <h2 className="max-w-[800px] text-4xl leading-tight font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
                Put your business number to work.
                <span className="text-sand-600 relative inline-block">
                  Stay reachable everywhere.
                  <span className="bg-sand-600/30 absolute bottom-1 left-0 h-1 w-full rounded-full"></span>
                </span>
              </h2>
              <p className="mt-4 max-w-[600px] text-lg text-primary-foreground/80">
                Get a virtual line your team can answer from any device, with
                texts, recordings, and conversation history all in one place.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild variant="secondary" size="lg" className="group">
                  <a href="/get-started" className="flex items-center gap-2">
                    Get started with Calio
                    <Icon
                      icon="lucide:arrow-right"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-sand-600/20 mb-14 border-b pb-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div>
                <h3 className="mb-2 text-2xl font-medium">Stay connected</h3>
                <p className="max-w-md text-primary-foreground/70">
                  Get product updates, launch news, and practical ideas for
                  handling customer calls more efficiently.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative grow">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="h-12 border-primary-foreground/20 bg-primary-foreground/10 pl-10"
                  />
                </div>
                <Button variant="secondary" type="submit" className="h-12 px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="border-sand-600/20 grid grid-cols-2 gap-x-6 gap-y-10 border-b py-10 sm:grid-cols-4 lg:py-16">
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="mb-5 text-lg font-semibold">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="inline-block text-primary-foreground/80 transition-colors duration-200 hover:text-primary-foreground"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="mx-auto mt-4 py-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="font-medium text-primary-foreground/80">
                © {new Date().getFullYear()} Calio. Business calls, organized.
              </p>
              <div className="flex items-center gap-6">
                {socialLinks.map((link) => (
                  <a
                    aria-label={link.label}
                    key={link.href}
                    href={link.href}
                    className="text-primary-foreground/70 transition-colors hover:text-primary-foreground/100"
                  >
                    <Icon
                      icon={link.icon}
                      className="size-5 transition-transform hover:scale-110"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
