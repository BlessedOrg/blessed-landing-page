import { Navigation } from "@/components/nav/Navigation";
import { AboutUsHeader } from "@/components/aboutUs/AboutUsHeader";
import { AboutUsCard } from "@/components/aboutUs/AboutUsCard";
import { AboutUsTiles } from "@/components/aboutUs/AboutUsTiles";
import { Team } from "@/components/aboutUs/Team";
import { PartnersClients } from "@/components/aboutUs/PartnersClients";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <AboutUsHeader />
      <AboutUsCard />
      <Team />
      <PartnersClients />
      <AboutUsTiles />
      <Cta />
      <Footer />
    </>
  );
}
