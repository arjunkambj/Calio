import type { Metadata } from "next";
import "../styles/globals.css";
import Providers from "@/components/Providers";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server";
import { Inter, Instrument_Serif, Noto_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-app-sans",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Calio | The Smarter Way to Handle Business Calls",
  description:
    "Get a virtual business number in minutes. Make calls, send texts, record conversations, and track every customer interaction from any device, anywhere in the world.",
  icons: {
    icon: "/icon",
  },
  openGraph: {
    title: "Calio | The Smarter Way to Handle Business Calls",
    description:
      "Get a virtual business number in minutes. Make calls, send texts, record conversations, and track every customer interaction from any device, anywhere in the world.",
    siteName: "Calio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calio | The Smarter Way to Handle Business Calls",
    description:
      "Get a virtual business number in minutes. Make calls, send texts, record conversations, and track every customer interaction from any device, anywhere in the world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        instrumentSerif.variable,
        "font-sans",
        notoSans.variable,
      )}
      suppressHydrationWarning
    >
      <body className="font-sans" suppressHydrationWarning>
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <Providers>{children}</Providers>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
