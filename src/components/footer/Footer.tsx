export const Footer = () => {
  return (
    <div className="w-full bg-[rgba(239,239,239,1)]">
      <div className="flex flex-col justify-center items-center px-4 w-full max-w-[1280px] min-h-[212px] mx-auto gap-[64px] py-10">
        <div className="flex justify-between items-start w-full border-t-2 border-black pt-10">
          <div className="flex items-start gap-64 w-full">
        
            <div>
              <img src="/img/icons/logo.svg" alt="Logo" />
            </div>

   
            <div className="flex gap-40">
       
              <div className="flex flex-col gap-4">
                <span className="font-bold">Product</span>
                <span>Overview</span>
                <span>What’s new</span>
                <span>Guides & tutorials</span>
                <span>Developer API</span>
                <span>Docs</span>
                <span>Pricing</span>
              </div>

             
              <div className="flex flex-col gap-4">
                <span className="font-bold">Company</span>
                <span>About us</span>
                <span>Contact</span>
                <span>Media kit</span>
                <span>Terms & conditions</span>
                <span>Privacy policy</span>
              </div>
            </div>
          </div>

       
          <div className="text-right">
            <span>De/En</span>
          </div>
        </div>

       
        <div className="flex justify-between items-center w-full pt-10">
    
          <div className="flex items-center gap-4">
            <span className="font-medium">© 2077 Blessed</span>
            <span className="font-medium">Imprint</span>
          </div>


          <div>
          <span
              className="uppercase font-bold text-[32px] leading-[44px] text-center"
              style={{
                color: "#1D1D1B",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: '"TT Bluescreens"',
                fontStyle: "normal",
                fontWeight: 700,
              }}
            >
              radical transparency + love 🙏
            </span>
          </div>

      
          <div className="flex gap-4">
  {["twitter-x", "linkedin", "Discord", "Github"].map((icon) => (
    <div
      key={icon}
      className="flex w-[36px] h-[36px] p-[9px] items-start gap-[10px] bg-white rounded-full"
    >
      <img src={`/img/icons/${icon}.svg`} alt={icon} />
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};