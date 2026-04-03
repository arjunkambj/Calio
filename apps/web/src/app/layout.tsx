import type { Metadata } from "next";
import "../styles/globals.css";
import Providers from "@/components/Providers";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server";
import { Inter, Instrument_Serif } from "next/font/google";

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
  title: "Calio - Prop Firm Comparison",
  description:
    "Compare top prop firms, discover active offers, and sign in with Calio.",
  icons: {
    icon: "/icon",
  },
  openGraph: {
    title: "Calio - Prop Firm Comparison",
    description:
      "Compare top prop firms, discover active offers, and sign in with Calio.",
    siteName: "Calio",
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
      className={`${inter.variable} ${instrumentSerif.variable}`}
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
