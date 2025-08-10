import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/Images/home-hero-bg.svg"
          width={3000}
          height={733}
          className="w-full"
          alt="_bg"
        />
        <div className="flex flex-col gap-12 jusrify-center items-center w-full -mt-[57px] xs:-mt-[67px] sm:-mt-[107px] md:-mt-[130px] lg:-mt-[185px] pb-[100px] xl:-mt-[464px] xl:-ml-[391px] 2xl:-mt-[566px] 2xl:-ml-[570px] pb-20">
          <div className="flex flex-col gap-5 px-10 xl:px-20 max-w-[313px] md:max-w-[1000px] w-full">
            <p className="text-[#0E46A3] brice text-4xl md:text-5xl lg:text-[70px] text-border text-center">
              Discover the Freshest Seafood from the Ocean
            </p>
            <p className="poppins-bold text-black text-[13px] md:text-[22px] text-center">
              Experience the Freshness of the Ocean
            </p>
            <p className="text-[13px] md:text-[20px] poppins-regular text-black text-center">
              At Seafood Focus,
              <br />
              we bring you a wide range of the freshest and highest-quality
              seafood. Sourced sustainably and delivered with care, our products
              ensure a premium ocean-to-table experience
            </p>
          </div>
          {/* <div className="flex justify-center items-center w-full">
            <button className="max-w-[262px] w-full h-[47px] bg-[#0E46A3] text-white text-lg px-4 md:px-6 py-[10px] rounded-[12px] font-bold poppins-bold">
              Explore more
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
