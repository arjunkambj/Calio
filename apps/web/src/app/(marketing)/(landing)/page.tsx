import {
  Feature,
  Faq,
  Footer,
  Hero,
  Navbar,
  Pricing,
  Testimonial,
  WhoItsFor,
} from "@/components/marketing";

export default function Home() {
  return (
    <div className="landing-page flex w-full flex-col items-stretch">
      <Navbar />
      <Hero />
      <Feature />
      <WhoItsFor />
      <Testimonial />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
