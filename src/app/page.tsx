import { Navigation } from "@/components/nav/Navigation";
import { TabsSection } from "@/components/home/tabsSection/TabsSection";
import { TilesSection } from "@/components/home/tilesSection/TilesSection";
import { QuoteSection } from "@/components/home/quoteSection/QuoteSection";
import { QuoteCard } from "@/components/home/quoteSection/QuoteCard";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";
import { QuestionsSection } from "@/components/home/questionsSection/QuestionsSection";
import { Header } from "@/components/home/header/Header";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <TabsSection />
      <TilesSection />
      {/*/!* <HomeTestimonial /> *!/*/}
      <QuoteSection />
      <QuoteCard />
      <QuestionsSection />
      <Cta />
      <Footer />
    </>
  );
}
