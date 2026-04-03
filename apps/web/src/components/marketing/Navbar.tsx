"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { ThemeSwitch } from "@/components/layout/ThemeSwitch";
import Logo from "@/components/layout/Logo";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Features", href: "/#features" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/94 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4 md:px-6">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <Icon icon="solar:hamburger-menu-linear" width={22} />
          </Button>
          <Link
            href="/"
            scroll
            className="flex items-center gap-2"
            aria-label="Go to home page"
          >
            <Logo iconClassName="h-7 w-7" />
          </Link>
        </div>

        <nav className="hidden items-center gap-10 lg:gap-12 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeSwitch />
          <Button asChild className="rounded-full px-5">
            <Link href="/sign-in">
              Get Your Number
              <Icon icon="solar:arrow-right-linear" className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetContent side="left" className="w-72">
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>Main navigation menu</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-2 pt-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-base text-foreground/80 transition-colors hover:bg-accent/60 hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-4 rounded-full">
                <Link href="/sign-in" onClick={() => setIsMenuOpen(false)}>
                  Get Your Number
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
