import { Navigation } from "@/components/nav/Navigation";
import { ContactUsQuestions } from "@/components/contactUs/ContactUsQuestions";
import { GetInTouch } from "@/components/contactUs/GetInTouch";
import { ContactUsLocation } from "@/components/contactUs/ContactUsLocation";
import { SeeYouIn } from "@/components/contactUs/SeeYouIn";
import { QuoteSection } from "@/components/home/quoteSection/QuoteSection";
import { QuoteCard } from "@/components/home/quoteSection/QuoteCard";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";

export default function Home() {

    return (
      <>
        <Navigation />
        <ContactUsQuestions />
        <GetInTouch />
        <ContactUsLocation />
        <SeeYouIn />
        <QuoteSection />
        <QuoteCard />
        <Cta />
        <Footer />
        
      </>
    );
  }