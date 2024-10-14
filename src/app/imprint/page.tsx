import { Navigation } from "@/components/nav/Navigation";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";



export default function Home() {

    return (
      <>
        <Navigation />
        <div className="max-w-[640px] mx-auto px-4">
  <h2 className="font-bold uppercase text-3xl md:text-6xl mb-4">Imprint</h2>
  <p>
  This imprint provides important information about the owner and the legal framework of this website.

Website Owner:
[Your Company Name]
[Your Company Address]

Business Registration:
[Your Registration Number]
[Your VAT Identification Number]

Disclaimer:
The content of this website is for general information purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.

Liability for Links:
Through this website, you may be able to link to other websites that are not under the control of [Your Company Name]. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.

Copyright:
All content on this website, including text, graphics, logos, and images, is the property of [Your Company Name] and is protected by copyright laws. Unauthorized use or reproduction of any materials from this website is prohibited.
  </p>
</div>
        <Cta />
        <Footer />
        
      </>
    );
  }

  