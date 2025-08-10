import Image from "next/image";

const Sourcing = () => {
  return (
    <>
      <div className="px-6 lg:px-24 py-10 lg:py-40 flex flex-col xl:flex-row justify-center items-center gap-10 lg:gap-16 2xl:gap-56 lg:flex-row bg-[url('/Images/expertise-sourcing-bg-img-sm.webp')] bg-cover bg-center">
        <div className="w-full lg:w-[50%] flex flex-col gap-10 justify-start items-start max-w-[630px]">
          <p className="uppercase whitefish text-[#0E46A3] text-3xl md:text-[30px]">
            Seafood Focus: Your Premier Source for Quality Seafood
          </p>
          <p className="text-[#071B3B] text-lg poppins-regular leading-[27px] tracking-[3%]">
            Our dedicated team and cutting-edge infrastructure allow us to
            deliver exceptional seafood while adhering to our commitment to
            sustainability and customer satisfaction.
          </p>
          <div className="flex flex-col gap-6 justify-start items-start bg-gradient-to-l from-[#557C9F] to-[#001121] via-[#557C9F]/80 px-6 py-10 md:py-12 lg:pr-24 rounded-[23px] border border-[15px] border-white drop-shadow-sm">
            <p className="text-[#DDF2FD] font-bold poppins-regular text-lg ">
              Sourcing
            </p>
            <p className="text-[#DDF2FD] poppins-regular leading-[27px] tracking-[3%] max-w-[500px]">
              We Partner With Sustainable Fisheries And Trusted Suppliers
              Worldwide To Procure The Highest Quality Seafood.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex justify-center items-center w-full">
          <Image
            src="/Images/expertise-sourcing-img.webp"
            alt="_bg"
            width={574}
            height={527}
            className="max-w-[574px] max-h-[527px] w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Sourcing;
