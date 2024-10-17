import Image from 'next/image';

export const PricingTestimonial = () => {
    return (
        <div className="flex flex-col gap-4 justify-center py-[64px] items-center px-[109px]">
            <div className="flex flex-col gap-6 items-center justify-center w-full mt-10">
                <div className="flex w-full min-h-[374px] py-6 px-4 md:py-10 md:px-8 bg-gradient-to-r my-5 from-[#FFFACD] to-[#EFEFEF] justify-between flex-col gap-6">
                    <div className="flex flex-col gap-6 md:flex-row justify-between">
                        <div className="flex flex-col gap-4">
                            <div className="text-9xl font-bold uppercase">“</div>
                            <div className="text-6xl font-bold uppercase">Blessed scales to your needs. It’s as compact or as large as you need it.”</div>
                            <div className="text-[xl] font-bold">Michaela Placeholder</div>
                            <div className="text-[xl] font-medium">Director of product, Starkware</div>
                        </div>
                        <Image src="/img/icons/Michaela.png" alt="Michaela" className="self-center md:self-auto" width={296} height={405}/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-between w-full">
                   
                </div>
            </div>
        </div>
    );
};