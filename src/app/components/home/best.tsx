import Image from "next/image";

const Best = () => {
  return (
    <>
      <div className="bg-[#DDEEFF] mt-[-320px] flex justify-center items-center px-8 md:px-10 lg:px-20 pb-[100px] relative overflow-hidden mt-[-25%]">
        <Image
          src="/Images/home-best-img-1.webp"
          alt="_bg"
          width={992}
          height={885}
          className="z-[1] hidden lg:block absolute left-[-10%] mt-[15%]"
        />
        <div className="z-[11] bg-[#DDEEFF] md:bg-transparent rounded-[12px] md:rounded-0 max-w-[1102px] flex flex-col justify-center items-center gap-10 xl:gap-28 px-6 md:px-10 lg:px-20 xl:px-[180px] py-20 md:py-40 xl:py-[190px]">
          <Image
            src="/Images/home-best-bg.webp"
            alt="_bg"
            width={1102}
            height={734}
            className="hidden md:block absolute"
          />
          <p className="z-[1] text-center max-w-[600px] text-[#071B3B] whitefish text-[40px]">
            Ensuring the Best Seafood While Protecting Our Oceans
          </p>
          <p className="z-[1] poppins-regular text-center text-[22px] max-w-[735px]">
            <b className="poppins-semibold">At Seafood Focus,</b> <br />
            we are deeply committed to delivering the highest quality seafood
            while maintaining sustainable practices. Our dedication to
            responsible sourcing ensures that our oceans remain healthy and
            vibrant for future generations. We work closely with local
            fishermen, adhere to strict quality control measures, and engage in
            eco-friendly practices to bring you seafood that you can trust and
            enjoy.
          </p>
        </div>
        <Image
          src="/Images/home-best-img-2.webp"
          alt="_bg"
          width={992}
          height={885}
          className="z-[1] hidden lg:block absolute right-[-10%] mt-[15%]"
        />
      </div>
    </>
  );
};
export default Best;
