"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import Logo from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", link: "#home" },
  { name: "Features", link: "#features" },
  { name: "Pricing", link: "#pricing" },
  { name: "FAQ", link: "#faq" },
];

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [activeItem, setActiveItem] = useState(NAV_ITEMS[0]?.name ?? "");

  const indicatorRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = document.querySelector(
        `[data-nav-item="${activeItem}"]`,
      ) as HTMLElement;

      if (activeEl && indicatorRef.current && menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const itemRect = activeEl.getBoundingClientRect();

        indicatorRef.current.style.width = `${itemRect.width}px`;
        indicatorRef.current.style.left = `${itemRect.left - menuRect.left}px`;
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeItem]);

  return (
    <section className={cn(className)}>
      <nav className="mx-auto border-x flex w-full items-center justify-between px-4 container max-w-7xl lg:px-8">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList
            ref={menuRef}
            className="relative flex items-center gap-4 rounded-4xl px-4 py-2"
          >
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "relative cursor-pointer rounded-none p-2 text-[0.82rem] font-medium transition-colors duration-150 hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent",
                    activeItem === item.name
                      ? "text-foreground"
                      : "text-foreground/45 hover:text-foreground/70",
                  )}
                >
                  <Link
                    href={item.link}
                    data-nav-item={item.name}
                    onClick={() => setActiveItem(item.name)}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            {/* Active Indicator */}
            <div
              ref={indicatorRef}
              className="absolute bottom-1 flex h-1 items-center justify-center px-2 transition-all duration-300"
            >
              <div className="w-full rounded-t-none bg-foreground/70 transition-all duration-300" />
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Popover */}
        <MobileNav activeItem={activeItem} setActiveItem={setActiveItem} />

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            asChild
            className="h-9 rounded-lg px-5 text-[0.85rem] font-semibold"
          >
            <Link href="/sign-in">Get started</Link>
          </Button>
        </div>
      </nav>
    </section>
  );
};

export { Navbar };

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="group relative size-full">
      <div className="absolute flex size-full items-center justify-center">
        <Icon
          icon="lucide:menu"
          className={`absolute size-5 text-foreground/50 transition-all duration-300 group-hover:text-foreground ${
            isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <Icon
          icon="lucide:x"
          className={`absolute size-5 text-foreground/50 transition-all duration-300 group-hover:text-foreground ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

const MobileNav = ({
  activeItem,
  setActiveItem,
}: {
  activeItem: string;
  setActiveItem: (item: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-full items-center lg:hidden">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <AnimatedHamburger isOpen={isOpen} />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="relative top-4 -right-4 block w-[calc(100vw-32px)] overflow-hidden rounded-xl border border-foreground/8 p-0 sm:top-auto sm:right-auto sm:w-80 lg:hidden"
        >
          <ul className="w-full bg-background py-3 text-foreground">
            {NAV_ITEMS.map((navItem, idx) => (
              <li key={idx}>
                <Link
                  href={navItem.link}
                  onClick={() => {
                    setActiveItem(navItem.name);
                    setIsOpen(false);
                  }}
                  className={`flex items-center border-l-2 px-6 py-2.5 text-[0.9rem] font-medium transition-all duration-75 ${
                    activeItem === navItem.name
                      ? "border-foreground text-foreground"
                      : "border-transparent text-foreground/45 hover:text-foreground"
                  }`}
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
            <li className="flex flex-col px-5 py-2">
              <Button
                asChild
                className="h-10 rounded-lg text-[0.85rem] font-semibold"
              >
                <Link href="/sign-in" onClick={() => setIsOpen(false)}>
                  Get started
                </Link>
              </Button>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};
