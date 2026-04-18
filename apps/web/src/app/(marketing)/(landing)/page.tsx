import {
  Feature,
  Faq,
  Footer,
  Hero,
  Navbar,
  Pricing,
  Testimonial,
  TrustedBy,
  AISuite,
} from "@/components/marketing";

export default function Home() {
  return (
    <div className="landing-page flex w-full flex-col items-stretch">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Feature />
      <AISuite />
      <Testimonial />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
