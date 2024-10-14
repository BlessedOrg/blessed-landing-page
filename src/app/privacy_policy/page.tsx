import { Navigation } from "@/components/nav/Navigation";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";



export default function Home() {

    return (
      <>
        <Navigation />
        
        <div className="max-w-[640px] mx-auto px-4">
  <h2 className="font-bold uppercase text-3xl md:text-6xl mb-4">Privacy policy</h2>
  <p>
  This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
  </p>
</div>
        <Cta />
        <Footer />
        
      </>
    );
  }

  