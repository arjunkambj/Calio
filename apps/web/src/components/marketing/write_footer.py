import pathlib

content = r'''import Link from "next/link";

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