import { Navigation } from "@/components/nav/Navigation";
import { TemplatesTiles } from "@/components/templates/TemplatesTiles";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";


export default function Home() {

    return (
      <>
        <Navigation />
        <TemplatesTiles />
        <Cta />
        <Footer />
  
      </>
    );
  }