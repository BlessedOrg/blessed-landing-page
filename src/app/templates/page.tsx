import { Navigation } from "@/components/nav/Navigation";
import { TemplatesHeader } from "@/components/templates/TemplatesHeader";
import { TemplatesTypes } from "@/components/templates/TemplatesTypes";
import { TemplatesCards } from "@/components/templates/TemplatesCards";
import { TemplatesTiles } from "@/components/templates/TemplatesTiles";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";


export default function Home() {

    return (
      <>
        <Navigation />
        <TemplatesHeader />
        <TemplatesTypes />
        <TemplatesCards />
        <TemplatesTiles />
        <Cta />
        <Footer />
  
      </>
    );
  }