import Image from "next/image";

const Premium = () => {
  return (
    <>
      <div className="bg-[url('/Images/home-premium-bg.webp')] bg-cover bg-center flex justify-center items-center w-full flex flex-col">
        <Image
          src="/Images/who-wave.svg"
          alt="_wave"
          className="z-[1] w-full h-auto -mt-[16%]"
          width={2100}
          height={467}
        />
        <div className="w-full flex flex-col gap-10 px-4 md:px-6 lg:px-20 max-w-[1180px] w-full py-10 md:py-20 justify-center items-center">
          <p className="whitefish text-border font-bold text-[43px] md:text-[70px] text-[#0E46A3] text-center leading-[40px] md:leading-[80px]">
            Our Premium Seafood Selection
          </p>
          <div className="flex flex-col lg:flex-row gap-5 l:gap-6 justify-center items-center w-full">
            <div className="flex flex-col gap-5 justify-between items-center p-6 bg-white shadow-md lg:max-w-[277px] w-full lg:max-h-[450px] lg:h-[400px] xl:max-h-[355px] xl:h-[355px] h-full">
              <p className="text-center whitefish text-border text-[25px] md:text-[30px] text-[#0E46A3]">
                Fresh Fish
              </p>
              <p className="poppins-semibold text-[#071B3B] text-base text-center md:text-lg">
                Daily catches from local and international waters, ensuring the
                freshest and most flavorful fish for your table.
              </p>
              {/* <button className="bg-[#0E46A3] text-white max-w-[175px] md:max-w-[205px] w-full max-h-[47px] h-[50px] h-full px-4 flex justify-center items-center rounded-[12px] text-lg ">
                Browse
              </button> */}
            </div>
            <div className="flex flex-col gap-5 justify-between items-center p-6 bg-white shadow-md lg:max-w-[277px] w-full lg:max-h-[450px] lg:h-[400px] xl:max-h-[355px] xl:h-[355px] h-full">
              <p className="text-center whitefish text-border text-[25px] md:text-[30px] text-[#0E46A3] ">
                Shellfish
              </p>
              <p className="poppins-semibold text-[#071B3B] text-base text-center md:text-lg">
                A variety of shellfish including clams, oysters, and mussels,
                perfect for gourmet meals and special occasions.
              </p>
              {/* <button className="bg-[#0E46A3] text-white max-w-[175px] md:max-w-[205px] w-full max-h-[47px] h-[50px] h-full px-4 flex justify-center items-center rounded-[12px] text-lg ">
                Browse
              </button> */}
            </div>
            <div className="flex flex-col gap-5 justify-between items-center p-6 bg-white shadow-md lg:max-w-[277px] w-full lg:max-h-[450px] lg:h-[400px] xl:max-h-[355px] xl:h-[355px] h-full">
              <p className="text-center whitefish text-border text-[25px] md:text-[30px] text-[#0E46A3] ">
                Crustaceans
              </p>
              <p className="poppins-semibold text-[#071B3B] text-base text-center md:text-lg">
                Lobsters, crabs, and shrimp, sourced sustainably and delivered
                to you in peak condition.
              </p>
              {/* <button className="bg-[#0E46A3] text-white max-w-[175px] md:max-w-[205px] w-full max-h-[47px] h-[50px] h-full px-4 flex justify-center items-center rounded-[12px] text-lg ">
                Browse
              </button> */}
            </div>
            <div className="flex flex-col gap-5 justify-between items-center p-6 bg-white shadow-md lg:max-w-[277px] w-full lg:max-h-[450px] lg:h-[400px] xl:max-h-[355px] xl:h-[355px] h-full">
              <p className="text-center whitefish text-border text-[25px] md:text-[30px] text-[#0E46A3] ">
                Cephalopods
              </p>
              <p className="poppins-semibold text-[#071B3B] text-base text-center md:text-lg">
                Squid, octopus, and cuttlefish, offering unique flavors and
                textures for culinary exploration.
              </p>
              {/* <button className="bg-[#0E46A3] text-white max-w-[175px] md:max-w-[205px] w-full max-h-[47px] h-[50px] h-full px-4 flex justify-center items-center rounded-[12px] text-lg ">
                Browse
              </button> */}
            </div>
          </div>
        </div>
        <Image
          src="/Images/who-wave.svg"
          alt="_wave"
          className="z-[11] w-full h-auto -mb-[6%]"
          width={2100}
          height={467}
        />
      </div>
    </>
  );
};

export default Premium;
