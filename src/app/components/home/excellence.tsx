import Image from "next/image";

const Excellence = () => {
  return (
    <>
      <div className="flex flex-col py-10 relative overflow-hidden">
        <Image
          src="/Images/qualities-wheel.webp"
          alt="_wheel"
          width={743}
          height={693}
          className={`z-[1] hidden xl:block -mt-[6%] -left-[303px] absolute h-auto w-[500px] h-[500px]`}
        />
        <div className="px-8 lg:px-10 xl:px-[180px] flex flex-col gap-3 md:gap-[30px] justify-start items-start">
          <p className="whitefish text-border font-bold text-[43px] md:text-[70px] text-[#0E46A3] text-left leading-[40px] md:leading-[80px]">
            Leading the Way in Seafood Excellence
          </p>
          <p className="poppins-bold text-black text-[13px] md:text-[22px] text-left">
            Your Premier Source for Quality Seafood
          </p>
          <p className="w-[80%] xl:w-[70%] text-[13px] md:text-[20px] poppins-regular text-black text-left">
            Seafood Focus is at the forefront of the seafood industry, renowned
            for our exceptional range of fresh and frozen products. Here's what
            makes us a leader
          </p>
          {/* <button className="text-white max-w-[250px] h-[40px] 2xl:h-[47px] bg-[#0E46A3] px-4 py-2 rounded-[6px] md:rounded-[12px] poppins-bold text-sm md:text-lg">
            Explore more
          </button> */}
        </div>
        <Image
          src="/Images/home-excellence-img.svg"
          alt="_bg"
          width={10000}
          height={338}
          className="-mt-[100px] xs:-mt-[123px] sm:-mt-[136px] md:-mt-[253px] lg:-mt-[310px] xl:-mt-[432px] 2xl:-mt-[531px]"
        />
        <Image
          src="/Images/wave-2.webp"
          alt="_bg"
          width={10000}
          height={338}
          className="-mt-[40%] md:hidden "
        />
        <Image
          src="/Images/qualities-wheel.webp"
          alt="_wheel"
          width={743}
          height={693}
          className={`z-[1] mt-[56%] mr-[-9%] 2xl:mt-[39%] 2xl:mr-[-12%] hidden xl:block right-0 absolute h-auto w-[300px] h-[300px] 2xl:w-[420px] 2xl:h-[420px]`}
        />
      </div>
    </>
  );
};

export default Excellence;
