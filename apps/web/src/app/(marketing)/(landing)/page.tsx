import Hero from "@/components/marketing/Hero";
import ComparisonTable from "@/components/marketing/ComparisonTable";
import Features from "@/components/marketing/Features";
import FAQ from "@/components/marketing/FAQ";

export default function Home() {
  return (
    <div className="landing-page flex w-full flex-col">
      <Hero />
      <ComparisonTable />
      <Features />
      <FAQ />
    </div>
  );
}
