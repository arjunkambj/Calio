import { Icon } from "@iconify/react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type NavLink = {
  name: string;
  href: string;
  icon?: string;
};

type NavigationSection = {
  title: string;
  links: NavLink[];
};

const navigation: NavigationSection[] = [
  {
    title: "Product",
    links: [
      { name: "Docs", href: "#docs" },
      { name: "Pricing", href: "#pricing" },
      { name: "Features", href: "#features" },
      { name: "Compare", href: "#compare" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Blog", href: "#blog" },
      { name: "Manifesto", href: "#manifesto" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Contact", href: "#contact" },
      { name: "GitHub", href: "https://github.com" },
    ],
  },
  {
    title: "Support",
    links: [
      {
        name: "support@calio.cc",
        href: "mailto:support@calio.cc",
      },
    ],
  },
];

const legalLinks = [
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Data Policy", href: "#data" },
  { name: "DPA", href: "#dpa" },
  { name: "Terms of Service", href: "#terms" },
];

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <section className={cn("bg-background", className)}>
      {/* Footer Nav */}
      <div className="border-b border-border/40">
        <div className="max-w-6xl mx-auto border-x border-border/40 px-5 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight">Calio</span>
              </div>
              <p className="text-[0.85rem] leading-relaxed text-foreground/50">
                Privacy-first web analytics without compromising user data.
              </p>
            </div>

            {/* Navigation columns */}
            <div className="col-span-3 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-12">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h4 className="mb-4 text-[0.78rem] font-semibold text-foreground">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-2 text-[0.85rem] text-foreground/60 transition-colors duration-150 hover:text-foreground"
                        >
                          {link.icon && (
                            <Icon icon={link.icon} className="h-4 w-4" />
                          )}
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

      {/* Bottom Section */}
      <div>
        <div className="max-w-6xl mx-auto border-x border-border/40 px-5 py-8 lg:px-8">
          {/* Legal Links */}
          <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-[0.82rem] text-foreground/50">
            {legalLinks.map((link, index) => (
              <span key={link.name} className="flex items-center">
                <Link
                  href={link.href}
                  className="transition-colors duration-150 hover:text-foreground"
                >
                  {link.name}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="mx-2 text-foreground/30">•</span>
                )}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-start justify-between gap-2 pt-6 sm:flex-row">
            <p className="text-[0.82rem] text-foreground/40">
              &copy; {new Date().getFullYear()} Calio
            </p>
            <p className="text-[0.82rem] text-foreground/40">
              Privacy-first analytics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer };
