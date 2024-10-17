import { Navigation } from "@/components/nav/Navigation";
import { UseCasesHeader } from "@/components/useCases/UseCasesHeader";
import { UseCases } from "@/components/useCases/UseCases";
import { PricingTestimonial } from "@/components/pricing/PricingTestimonial";
import { QuoteSection } from "@/components/home/quoteSection/QuoteSection";
import { QuoteCard } from "@/components/home/quoteSection/QuoteCard";
import { TemplatesCards } from "@/components/templates/TemplatesCards";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <UseCasesHeader />
      <UseCases />
      {/* <PricingTestimonial /> */}
      {/* <TemplatesCards /> */}
      <QuoteSection />
      <QuoteCard />
      <Cta />
      <Footer />
    </>
  );
}
