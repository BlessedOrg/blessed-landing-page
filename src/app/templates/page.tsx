import { Navigation } from "@/components/nav/Navigation";
import { TemplatesHeader } from "@/components/templates/TemplatesHeader";
import { TemplatesTiles } from "@/components/templates/TemplatesTiles";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";


export default function Home() {

    return (
      <>
        <Navigation />
        <TemplatesHeader />
        <TemplatesTiles />
        <Cta />
        <Footer />
  
      </>
    );
  }