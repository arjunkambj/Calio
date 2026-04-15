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
      <div>
        <div className="max-w-7xl mx-auto border-b border-x bg-background px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            <div className="lg:col-span-1">
              <div className="mb-3">
                <Logo />
              </div>
              <p className="text-[0.85rem] leading-snug text-foreground/50 max-w-[240px]">
                A business phone number that works on every device. No hardware
                needed.
              </p>
            </div>

            <div className="col-span-3 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:gap-x-8 lg:gap-y-4">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h4 className="mb-2.5 text-[0.78rem] font-semibold text-foreground">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-2 text-[0.85rem] text-foreground/60 transition-colors duration-150 hover:text-primary"
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

      <div>
        <div className="max-w-7xl mx-auto border-b border-x bg-background px-5 py-10 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
            <p className="text-[0.82rem] text-foreground/40">
              &copy; {new Date().getFullYear()} Calio
            </p>
            <p className="text-[0.82rem] text-foreground/40">
              support@calio.cc
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer };
