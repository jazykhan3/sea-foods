import Image from "next/image";

const Variety = () => {
  return (
    <>
      <div className="bg-[url('/Images/home-variety-bg.webp')] bg-cover bg-center flex flex-col gap-12 md:gap-0 pt-10 2xl:pb-[150px]">
        <div className="flex flex-col justify-center items-center gap-6 md:min-h-[559px] lg:min-w-[839px] 2xl:ml-[-42%]">
          <Image
            src="/Images/home-variety-ship.webp"
            alt="_bg"
            width={839}
            height={559}
            className="hidden md:block absolute"
          />
          <p className="mt-[-20px] z-[1] uppercase text-center whitefish text-border text-[25px] md:text-[30px] text-[#0E46A3]">
            Fresh Fish
          </p>
          <p className="text-[#071B3B] z-[1] poppins-semibold text-lg text-center max-w-[335px]">
            A wide variety of fresh fish sourced daily from the best fishing
            grounds.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 md:min-h-[559px] lg:min-w-[839px] 2xl:mt-[-23%] 2xl:ml-[45%]">
          <Image
            src="/Images/home-variety-ship.webp"
            alt="_bg"
            width={839}
            height={559}
            className="hidden md:block absolute"
          />
          <p className="mt-[-20px] z-[1] uppercase text-center whitefish text-border text-[25px] md:text-[30px] text-[#0E46A3]">
            Shellfish & Crustaceans
          </p>
          <p className="text-[#071B3B] z-[1] poppins-semibold text-lg text-center max-w-[335px]">
            Premium shellfish and crustaceans, perfect for any seafood dish.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 md:min-h-[559px] lg:min-w-[839px] 2xl:mt-[-13%] 2xl:ml-[-2%]">
          <Image
            src="/Images/home-variety-ship.webp"
            alt="_bg"
            width={839}
            height={559}
            className="hidden md:block absolute"
          />
          <p className="mt-[-20px] z-[1] uppercase text-center whitefish text-border text-[25px] md:text-[30px] text-[#0E46A3]">
            frozen seafood
          </p>
          <p className="text-[#071B3B] z-[1] poppins-semibold text-lg text-center max-w-[335px]">
            High-quality frozen seafood products, preserving the freshness and
            taste of the ocean.
          </p>
        </div>

        {/* <div className="flex gap-10 w-full">
          <Image
            src="/Images/home-variety-fish-1.png"
            alt="_fish"
            width={366}
            height={293}
            className="z-[1] absolute hidden 2xl:block mt-[-22%]"
          />
          <Image
            src="/Images/home-variety-fish-2.png"
            alt="_fish"
            width={366}
            height={293}
            className="z-[1] absolute hidden 2xl:block right-[40%] mt-[-5%]"
          />
          <Image
            src="/Images/home-variety-fish-3.png"
            alt="_fish"
            width={366}
            height={293}
            className="z-[1] absolute hidden 2xl:block mt-[-22%] right-0"
          />
        </div> */}
      </div>
    </>
  );
};

export default Variety;
