import Image from "next/image";

const Perfection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 md:gap-20 lg:gap-8 w-full bg-[#DDEEFF] py-10 md:py-16 xl:py-20">
        <div className="flex gap-10 justify-center items-start w-full">
          <Image
            src="/Images/products-perfection-img-1.webp"
            alt="_bg"
            width={477}
            height={477}
            className="max-w-[477px] max-h-[477px] w-full w-[25%] hidden lg:block"
          />
          <div className="px-6 md:px-8 lg:px-0 lg:max-w-[884px] flex flex-col justify-start items-start lg:justify-center lg:items-center gap-6 lg:gap-10 w-full lg:w-[50%]">
            <p className="uppercase text-left lg:text-center whitefish text-border font-bold text-[#0E46A3] text-5xl xl:text-6xl 2xl:text-[100px] leading-[40px] font-medium w-fit">
              Frozen to Perfection Ensuring Ultimate Freshness and Flavor
            </p>
            <p className="lg:max-w-[639px] text-[#121212] poppins-regular text-base md:text-lg xl:text-[26px] text-left lg:text-center">
              Our state-of-the-art preservation methods ensure that our frozen
              seafood products maintain their exceptional quality and taste:
            </p>
          </div>
          <Image
            src="/Images/products-perfection-img-2.webp"
            alt="_bg"
            width={477}
            height={477}
            className="max-w-[477px] max-h-[477px] w-full w-[25%] hidden lg:block"
          />
        </div>
        <div className="px-6 md:px-8 lg:px-24 flex justify-center items-center w-full">
          <Image
            src="/Images/products-perfection-img-3.webp"
            alt="_bg"
            width={1532}
            height={694}
            className=" max-w-[1200px] max-h-[694px] w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Perfection;
