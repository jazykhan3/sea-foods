import Image from "next/image";

const ExpertiseHero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full flex justify-center items-center px-6 lg:px-10 py-48 md:py-80 bg-[url('/Images/expertise-hero-img-sm.webp')] bg-cover bg-center">
          <p className="text-[#0E46A3] brice text-[40px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[50px] sm:leading-[90px] md:leading-[110px] lg:leading-[140px] max-w-[1549px] text-center text-border sm:text-border font-bold tracking-[4px] md:tracking-[8px]">
            OUR EXPERTISE
          </p>
        </div>
        <p className="lg:px-[207px] max-w-[1266px] text-center poppins-thin font-thin text-[rgba(256,256,256,0.7)] -mt-[100px] md:-mt-[148px] lg:-mt-[245px] md:rounded-t-[20px] py-8 px-6 sm:px-8 lg:p-20 text-lg bg-[#071B3B]">
          At Seafood Focus, we excel in every aspect of the seafood supply
          chain, ensuring that our customers receive only the finest products.
          Our expertise encompasses sourcing, processing, logistics, and quality
          control, each meticulously managed to maintain the highest standards
          of quality and sustainability.
        </p>
      </div>
    </>
  );
};

export default ExpertiseHero;
