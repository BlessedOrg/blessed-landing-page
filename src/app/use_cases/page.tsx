import { Navigation } from "@/components/nav/Navigation";
import { PricingTestimonial } from "@/components/pricing/PricingTestimonial";
import { QuoteSection } from "@/components/home/quoteSection/QuoteSection";
import { QuoteCard } from "@/components/home/quoteSection/QuoteCard"; 
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";


export default function Home() {

    return (
      <>
        <Navigation />
        <PricingTestimonial />
        <QuoteSection />
        <QuoteCard />
        <Cta />
        <Footer />
      
      </>
    );
  }