import Image from "next/image";
import Qualities from "../expertise/qualities";

const Facilities = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="z-[1] w-full h-[100px] xl:h-[300px] bg-gradient-to-b from-[#DDEEFF] to-[#DDEEFF00] -mb-[100px] xl:-mb-[300px]"></div>
          <div className="w-full bg-[url(/Images/infrastructure-facilities-bg.webp)] bg-cover bg-center px-6 lg:px-24 py-20 2xl:py-48 flex flex-col justify-center items-center gap-20 lg:gap-0">
            <div className="z-[11] flex gap-4 justify-start items-start lg:justify-center lg:items-center">
              <Image
                src="/Images/infrastructure-facilities-ocean.webp"
                alt="_fish"
                width={100}
                height={100}
                className="max-w-[50px] max-h-[50px] md:max-w-[80px] md:max-h-[80px] w-full h-full lg:hidden"
              />
              <div className="hidden lg:block w-full lg:w-[50%]">
                <Image
                  src="/Images/infrastructure-facilities-img-1.webp"
                  alt="_ocean"
                  width={646}
                  height={619}
                  className="max-w-[646px] max-h-[619px] w-full h-full hidden lg:block"
                />
              </div>
              <div className="w-full lg:w-[50%] flex flex-col gap-3 sm:gap-4 lg:gap-10 justify-start items-start lg:max-w-[400px]">
                <p className="lg:hidden text-white poppins-bold font-bold text-2xl text-left md:text-3xl">
                  Advanced Processing Facilities
                </p>
                <p className="text-white text-xl md:text-2xl poppins-regular max-w-[583px] leading-[30px] md:leading-[42px] tracking-[3%] text-left opacity-80 lg:opacity-100">
                  Employing the latest technology to clean, cut, and package
                  seafood in hygienic conditions.
                </p>
              </div>
            </div>

            <div className="z-[11] flex gap-4 lg:flex-row-reverse justify-start items-start lg:justify-center lg:items-center lg:-mt-[100px]">
              <Image
                src="/Images/infrastructure-facilities-ocean.webp"
                alt="_fish"
                width={100}
                height={100}
                className="max-w-[50px] max-h-[50px] md:max-w-[80px] md:max-h-[80px] w-full h-full lg:hidden"
              />
              <div className="hidden lg:block w-full lg:w-[50%]">
                <Image
                  src="/Images/infrastructure-facilities-img-1.webp"
                  alt="_ocean"
                  width={646}
                  height={619}
                  className="max-w-[646px] max-h-[619px] w-full h-full hidden lg:block"
                />
              </div>
              <div className="w-full lg:w-[50%] flex flex-col gap-3 sm:gap-4 lg:gap-10 justify-start items-start lg:max-w-[400px]">
                <p className="lg:hidden text-white poppins-bold font-bold text-2xl text-left md:text-3xl">
                  Sustainable Practices
                </p>
                <p className="text-white text-xl md:text-2xl poppins-regular max-w-[583px] leading-[30px] md:leading-[42px] tracking-[3%] text-left opacity-80 lg:opacity-100">
                  Implementing eco-friendly processes to minimize waste and
                  reduce environmental impact.
                </p>
              </div>
            </div>

            <div className="z-[11] flex gap-4 justify-start items-start lg:justify-center lg:items-center lg:-mt-[67px]">
              <Image
                src="/Images/infrastructure-facilities-ocean.webp"
                alt="_fish"
                width={100}
                height={100}
                className="max-w-[50px] max-h-[50px] md:max-w-[80px] md:max-h-[80px] w-full h-full lg:hidden"
              />
              <div className="hidden lg:block w-full lg:w-[50%]">
                <Image
                  src="/Images/infrastructure-facilities-img-3.webp"
                  alt="_ocean"
                  width={646}
                  height={619}
                  className="max-w-[646px] max-h-[619px] w-full h-full hidden lg:block"
                />
              </div>
              <div className="w-full lg:w-[50%] flex flex-col gap-3 sm:gap-4 lg:gap-10 justify-start items-start lg:max-w-[400px]">
                <p className="lg:hidden text-white poppins-bold font-bold text-2xl text-left md:text-3xl">
                  Quality Assurance Labs
                </p>
                <p className="text-white text-xl md:text-2xl poppins-regular max-w-[583px] leading-[30px] md:leading-[42px] tracking-[3%] text-left opacity-80 lg:opacity-100">
                  On-site labs for rigorous testing and quality control to
                  ensure compliance with the highest standards.
                </p>
              </div>
            </div>
          </div>
          <div className="z-[1] w-full h-[100px] bg-gradient-to-t from-[#DDEEFF] to-[#DDEEFF00] -mt-[100px] xl:-mt-[300px]"></div>
        </div>
        <div className="bg-[#DDEEFF] flex justify-center items-center w-full">
          <Qualities />
        </div>
      </div>
    </>
  );
};

export default Facilities;
