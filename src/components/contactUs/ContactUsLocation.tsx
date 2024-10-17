import Image from "next/image";

export const ContactUsLocation = () => {
    return (
      <section 
        className="w-full h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: `url('/img/icons/Blessed_location.png')` }}
      >
       
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-black font-bold text-[158px] uppercase">Blessed Location</h1>
        
        </div>
      </section>
    );
  };
  