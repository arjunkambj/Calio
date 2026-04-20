import Link from "next/link";

import Logo from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

type NavLink = {
  name: string;
  href: string;
};

type NavigationSection = {
  title: string;
  links: NavLink[];
};

const navigation: NavigationSection[] = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
      { name: "Docs", href: "#docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "mailto:support@calio.cc" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Refund Policy", href: "#refund" },
    ],
  },
];

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <section className={cn(className)}>
      {/* Main footer content */}
      <div>
        <div className="max-w-7xl mx-auto border-b border-x bg-background px-5 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <Logo />
              </div>
              <p className="text-[0.83rem] leading-relaxed text-foreground/45 max-w-[220px]">
                A business phone number that works on every device. No hardware
                needed.
              </p>
            </div>

            {/* Navigation columns */}
            <div className="col-span-3 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h4 className="mb-4 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-foreground/35">
                    {section.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-[0.85rem] text-foreground/55 transition-colors duration-150 hover:text-primary"
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

      {/* Bottom bar */}
      <div>
        <div className="max-w-7xl mx-auto border-b border-x bg-background px-5 py-5 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <p className="text-[0.78rem] text-foreground/35">
              &copy; {new Date().getFullYear()} Calio. All rights reserved.
            </p>
            <a
              href="mailto:support@calio.cc"
              className="text-[0.78rem] text-foreground/35 hover:text-primary transition-colors duration-150"
            >
              support@calio.cc
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer };
