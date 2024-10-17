import Image from "next/image";

export const WhatsNewFeature = () => {
    return (
        <div className="flex flex-col items-center"> 
            <h2 className="font-bold uppercase text-3xl md:text-6xl text-center mb-8">Feature highlights</h2> 
        <div className="flex gap-8"> 
        
            <div className="w-[624px] h-[583px] p-0 pb-8 gap-8 rounded-[24px] overflow-hidden">
                <div className="w-[624px] h-[351px] gap-0">
                    <Image src="/img/icons/Card_image1.png" alt="Card image 1" width={624} height={351} className="object-cover" />
                </div>
                <div className="p-6">
                    <p>Update</p>
                    <p className="text-xl font-bold">Learn about our latest security enhancements to protect your tickets.</p>
                    <p>August 20, 2024</p>
                </div>
            </div>

            <div className="w-[624px] h-[583px] p-0 pb-8 gap-8 rounded-[24px] overflow-hidden">
                <div className="w-[624px] h-[351px] gap-0">
                    <Image src="/img/icons/Card_image2.png" alt="Card image 2" width={624} height={351} className="object-cover" />
                </div>
                <div className="p-6">
                    <p>Update</p>
                    <p className="text-xl font-bold">Explore our new tools designed for easy integration with existing systems.</p>
                    <p>July 14, 2024</p>
                </div>
            </div>
        </div>
        </div>
    );
};

  