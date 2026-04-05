import {
  Feature,
  Faq,
  Footer,
  Hero,
  Benefits,
  Navbar,
  Pricing,
  Testimonial,
} from "@/components/marketing";

export default function Home() {
  return (
    <div className="landing-page flex w-full flex-col items-stretch">
      <Navbar />
      <Hero />
      <Feature />
      <Benefits/>
      <Pricing />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}
