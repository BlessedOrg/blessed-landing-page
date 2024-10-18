import { Navigation } from "@/components/nav/Navigation";
import { AboutUsHeader } from "@/components/aboutUs/AboutUsHeader";
import { AboutUsCard } from "@/components/aboutUs/AboutUsCard";
import { AboutUsTiles } from "@/components/aboutUs/AboutUsTiles";
import { Team } from "@/components/aboutUs/team/Team";
import { Slogan } from "@/components/aboutUs/Slogan";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <AboutUsHeader />
      <AboutUsCard />
      <Team />
      <Slogan />
      {/* <PartnersClients /> */}
      <AboutUsTiles />
      <Cta />
      <Footer />
    </>
  );
}
