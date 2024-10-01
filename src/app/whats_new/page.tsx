import { Navigation } from "@/components/nav/Navigation";
import { WhatsNewQuote } from "@/components/whatsNew/WhatsNewQuote";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";

export default function Home() {

    return (
      <>
        <Navigation />
        <WhatsNewQuote />
        <Cta />
        <Footer />
      </>
    );
  }