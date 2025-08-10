import Image from "next/image";

const Discover = () => {
  return (
    <>
      <div className="flex px-4 md:px-6 lg:px-10 justify-center items-center py-20 relative overflow-hidden">
        <Image
          src="/Images/qualities-wheel.webp"
          alt="_wheel"
          width={743}
          height={693}
          className={`hidden sm:block md:hidden -ml-[105%] mt-[75%] transition-transform duration-700 ease-in-out xl:-left-[185px] 2xl:-left-[279px] absolute min-w-[400px] max-w-[400px] w-[400px] 2xl:min-w-[600px] 2xl:max-w-[600px] 2xl:w-[600px] lg:max-w-[743px] h-auto`}
        />
        <div className="md:hidden bg-[url('/Images/home-discover-bg.webp')] bg-cover bg-center flex flex-col gap-[30px] justify-center items-center px-8 py-12 rounded-[12px]">
          <Image
            src="/Images/home-discover-img.webp"
            width={276}
            height={218}
            alt="_bg"
          />
          <p className="text-center text-[#DDF2FD] poppins-light  text-[13px] max-w-[279px]">
            At Seafood Focus, we pride ourselves on offering a diverse range of
            seafood products. From fresh fish to shellfish and crustaceans, our
            selection is carefully curated to ensure the highest quality and
            freshness.
          </p>
          {/* <button className="text-[#071B3B] bg-[#77DFF8] max-w-[236px] px-4 py-2 max-h-[30px] h-[30px] w-full rounded-[8px] text-sm font-bold flex justify-center items-center text-center">
            Discover Our Full Range
          </button> */}
        </div>

        <div className="md:flex hidden  h-full">
          <div className="bg-[url('/Images/home-discover-bg-lg-2.webp')] bg-cover bg-center flex flex-col gap-8 justify-end items-start w-[70%] pt-[100px] pb-[47px] px-10">
            <p className="text-[#DDF2FD] text-lg poppins-semibold max-w-[600px]">
              At Seafood Focus, we pride ourselves on offering a diverse range
              of seafood products. From fresh fish to shellfish and crustaceans,
              our selection is carefully curated to ensure the highest quality
              and freshness.
            </p>
            {/* <button className="text-[#071B3B] bg-[#77DFF8] max-w-[365px] px-4 py-2 max-h-[40px] h-[40px] w-full rounded-[8px] text-sm font-bold flex justify-center items-center text-center">
              Discover Our Full Range
            </button> */}
          </div>
          <div className="w-[30%] flex">
            <Image
              src="/Images/home-discover-vector.svg"
              width={31}
              height={42}
              alt="_bg"
              className="h-[42px] xl:h-[60px] 2xl:w-[200px] w-[80px] w-full absolute -ml-[40px] 2xl:-ml-[97px] mt-[6px]"
            />
            <Image
              src="/Images/home-discover-img-2.webp"
              width={314}
              height={314}
              alt="_bg"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <Image
          src="/Images/qualities-wheel.webp"
          alt="_wheel"
          width={743}
          height={693}
          className={`hidden sm:block md:hidden -mr-[100%] mt-[75%] transition-transform duration-700 ease-in-out xl:-left-[185px] 2xl:-left-[279px] absolute min-w-[400px] max-w-[400px] w-[400px] 2xl:min-w-[600px] 2xl:max-w-[600px] 2xl:w-[600px] lg:max-w-[743px] h-auto`}
        />
      </div>
    </>
  );
};

export default Discover;
