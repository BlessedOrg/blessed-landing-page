import { Navigation } from "@/components/nav/Navigation";
import { PrivacyPolicy } from "@/components/privacyPolicy/PrivacyPolicy";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <PrivacyPolicy />
      <Cta />
      <Footer />
    </>
  );
}
