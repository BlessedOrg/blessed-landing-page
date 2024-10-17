import { Navigation } from "@/components/nav/Navigation";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";
import { Header404 } from "@/components/404/Header404";


export default function Home() {

    return (
      <>
        <Navigation />
        <Header404 />
        <Cta />
        <Footer />
        
      </>
    );
  }