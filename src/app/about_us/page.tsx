import { Navigation } from "@/components/nav/Navigation";
import { AboutUsCard } from "@/components/aboutUs/AboutUsCard";
import { AboutUsTiles } from "@/components/aboutUs/AboutUsTiles";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";


export default function Home() {

    return (
      <>
        <Navigation />
        <AboutUsCard />
        <AboutUsTiles />
        <Cta />
        <Footer />
      
      </>
    );
  }