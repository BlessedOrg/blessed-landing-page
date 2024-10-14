import { Navigation } from "@/components/nav/Navigation";
import { Cta } from "@/components/footer/Cta";
import { Footer } from "@/components/footer/Footer";



export default function Home() {

    return (
      <>
        <Navigation />
        <div className="max-w-[640px] mx-auto px-4">
  <h2 className="font-bold uppercase text-3xl md:text-6xl mb-4">Terms & conditions</h2>
  <p>
    Every website needs a Terms and Conditions. Even if your website is not for your business or any commercial structure, you will be better off with a Terms and Conditions agreement. All websites are advised to have their own agreements for their own protection. We will help you by providing this FREE terms and conditions generator. Fill in the blank fields below, and we will email you your personalized terms and conditions just for you and your business. The accuracy of the generated document on this website is not legally binding. Use at your own risk.
  </p>
</div>


        <Cta />
        <Footer />
        
      </>
    );
  }

  