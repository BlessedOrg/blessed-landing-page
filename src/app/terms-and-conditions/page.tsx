import { Navigation } from "@/components/nav/Navigation";
import { TermsConditions } from "@/components/termsConditions/TermsConditions";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <TermsConditions />
      <Cta />
      <Footer />
    </>
  );
}
