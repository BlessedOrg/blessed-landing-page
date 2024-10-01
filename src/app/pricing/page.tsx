import { PricingHeader } from "@/components/pricing/PricingHeader";
import { Navigation } from "@/components/nav/Navigation";
import { PricingTestimonial } from "@/components/pricing/PricingTestimonial";
import { QuoteSection } from "@/components/home/quoteSection/QuoteSection";
import { QuoteCard } from "@/components/home/quoteSection/QuoteCard"; 
import { QuestionsSection } from "@/components/home/questionsSection/QuestionsSection";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";

export default function Home() {

  return (
    <>
      <Navigation />
      <PricingHeader/>
      <PricingTestimonial/>
      <QuoteSection/>
      <QuoteCard />
      <QuestionsSection/>
      <Cta />
      <Footer />

    </>
  );
}