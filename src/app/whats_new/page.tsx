import { Navigation } from "@/components/nav/Navigation";
import { WhatsNewQuote } from "@/components/whatsNew/WhatsNewQuote";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";
import { WhatsNewCard } from "@/components/whatsNew/WhatsNewCard";
import { WhatsNewFeature } from "@/components/whatsNew/WhatsNewFeature";
import { WhatsNewHeader } from "@/components/whatsNew/WhatsNewHeader";
import { WhatsNews } from "@/components/whatsNew/WhatsNews";


export default function Home() {

    return (
      <>
        <Navigation />
        <WhatsNewHeader />
        <WhatsNews />
        <WhatsNewFeature />
        <WhatsNewQuote />
        <WhatsNewCard />
        <Cta />
        <Footer />
        
      </>
    );
  }