import {
  Feature,
  Faq,
  Footer,
  Navbar,
  Pricing,
  Testimonial,
} from "@/components/marketing";

import { Hero } from "@/components/marketing/Hero";

export default function Home() {
  return (
    <div className="landing-page flex w-full item-center flex-col">
      <Navbar />
      <Hero />
      <Feature />
      <Pricing />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}
