import Link from "next/link";
import Logo from "@/components/layout/Logo";

const sections = [
  {
    title: "Explore",
    links: [
      { name: "Capabilities", href: "/#capabilities" },
      { name: "Why Calio", href: "/#features" },
      { name: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Account",
    links: [
      { name: "Sign In", href: "/sign-in" },
      { name: "Get Your Number", href: "/sign-in" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/70 bg-background/96">
      <div className="container mx-auto px-6 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex">
              <Logo iconClassName="h-7 w-7" />
            </Link>
            <p className="max-w-xs text-sm leading-7 text-muted-foreground">
              Calio gives businesses a smarter way to handle calls with virtual
              numbers, texting, recordings, and a clear history of every
              customer interaction.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="marketing-hairline mt-12" />

        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Calio. All rights reserved.
          </p>
          <Link
            href="/sign-in"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Get started with Calio
          </Link>
        </div>
      </div>
    </footer>
  );
}
