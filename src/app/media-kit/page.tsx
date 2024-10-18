import { Navigation } from "@/components/nav/Navigation";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";
import { ComingSoon } from "@/components/404/ComingSoon";


export default function Home() {

    return (
      <>
        <Navigation />
        <ComingSoon />
        <Cta />
        <Footer />
        
      </>
    );
  }

  