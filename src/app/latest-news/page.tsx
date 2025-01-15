import { Navigation } from "@/components/nav/Navigation";
import { LatestNewsQuote } from "@/components/latestNews/LatestNewsQuote";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";
import { LatestNewsCard } from "@/components/latestNews/LatestNewsCard";
import { LatestNewsFeature } from "@/components/latestNews/LatestNewsFeature";
import { LatestNewsHeader } from "@/components/latestNews/LatestNewsHeader";
import { LatestNews } from "@/components/latestNews/LatestNews";

export default function Home() {
  return (
    <>
      <Navigation />
      <LatestNewsHeader />
      <LatestNews />
      <LatestNewsFeature />
      <LatestNewsQuote />
      <LatestNewsCard />
      <Cta />
      <Footer />
    </>
  );
}
