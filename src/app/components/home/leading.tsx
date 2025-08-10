import Image from "next/image";

const Leading = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-[-217px]">
      <div className="w-full h-[300px] relative bg-gradient-to-b from-[#F5F5F5] to-[#ffffff00] mb-[-299px]"></div>
      <div className="w-full flex justify-center items-center px-8 md:px-10 lg:px-20 2xl:px-40 w-full bg-[url('/Images/home-leading-bg.webp')] bg-cover bg-center">
        <div className="flex flex-col gap-10 xl:gap-20 w-full pt-[300px] pb-[150px]">
          <p className="whitefish text-border font-bold text-[43px] md:text-[70px] text-[#0E46A3] text-center leading-[40px] md:leading-[80px] z-[1]">
            Leading the Way in Seafood Excellence
          </p>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center w-full">
            <div className="flex justify-center items-center w-full lg:w-[33%]">
              <Image
                src="/Images/home-leading-img-1.webp"
                alt="_bg"
                width={449}
                height={536}
                className="z-[1] rounded-[12px] w-full max-h-[400px] lg:max-h-[536px] h-full object-cover"
              />
            </div>
            <div className="flex justify-center items-center w-full lg:w-[33%]">
              <Image
                src="/Images/home-leading-img-2.webp"
                alt="_bg"
                width={449}
                height={536}
                className="z-[1] rounded-[12px] w-full max-h-[400px] lg:max-h-[536px] h-full object-cover"
              />
            </div>
            <div className="flex justify-center items-center w-full lg:w-[33%]">
              <Image
                src="/Images/home-leading-img-3.webp"
                alt="_bg"
                width={449}
                height={536}
                className="z-[1] rounded-[12px] w-full max-h-[400px] lg:max-h-[536px] h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[300px] bg-gradient-to-t from-[#DDEEFF] to-[#ffffff00] -mt-[296px]"></div>
    </div>
  );
};

export default Leading;
