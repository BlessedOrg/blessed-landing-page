import { Navigation } from "@/components/nav/Navigation";
import { QuoteCard } from "@/components/home/quoteSection/QuoteCard"; 
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";


export default function Home() {

    return (
      <>
        <Navigation />
        <QuoteCard />
        <Cta />
        <Footer />
      
      </>
    );
  }