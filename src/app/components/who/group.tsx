import Image from "next/image";

const WhoGroup = () => {
  return (
    <>
      <div className="bg-[#DDEFFF] py-24 xl:pt-24 xl:py-0 flex flex-col justify-center items-center w-full gap-20 xl:gap-0">
        <div className="flex flex-col gap-4 md:gap-8 justify-center items-center w-full xl:-mb-[106px] z-[1]">
          <p className="text-center whitefish text-border font-bold paint-order text-[#0E46A3] text-6xl lg:text-[90px] font-medium">
            The Group
          </p>
          <p className="poppins-bold text-[#071B3B] text-2xl md:text-3xl text-center ">
            Seafood Focus: Your Premier Source for Quality Seafood
          </p>
        </div>
        <Image
          src="/Images/who-group-img.webp"
          alt="_bg"
          className="w-full h-auto hidden xl:block"
          width={1920}
          height={1280}
        />
        <p className="xl:mt-2 px-6 lg:px-10 xl:max-w-[43%] text-left xl:text-center poppins-regular text-black text-base 2xl:text-lg xl:absolute">
          Seafood Focus is a leading supplier of fresh and frozen seafood
          products, renowned for our dedication to quality and sustainability.
          We specialize in sourcing the finest fish, cephalopods, shellfish, and
          crustaceans from the pristine waters of the world&apos;s oceans.
          <br />
          Our commitment to excellence is evident in every aspect of our
          operations. From our state-of-the-art processing facilities to our
          rigorous quality control standards, we ensure that our products meet
          the highest standards of freshness and taste.
        </p>
      </div>
    </>
  );
};

export default WhoGroup;
