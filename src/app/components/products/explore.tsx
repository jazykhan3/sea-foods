import Image from "next/image";

const Explore = () => {
  return (
    <>
      <div className="bg-[#DDEEFF] flex justify-center items-center w-full">
        <div className="bg-[url('/Images/who-mission-bg.webp')] bg-cover bg-center bg-no-repeat w-full flex flex-col lg:flex-row gap-10 justify-center items-center px-6 md:px-8 lg:px-24 xl:pr-0 py-10 xl:py-20 2xl:py-py-32">
          <div className="w-full lg:w-[50%] flex justify-center items-end">
            <div className="flex flex-col gap-4 md:gap-10 2xl:gap-16 justify-start items-start w-full lg:max-w-[639px]">
              <p className="text-black poppins-semibold text-xl md:text-2xl xl:text-[30px] text-left">
                From Fresh Catches to Frozen Delights, Explore Our Full
                Selection
              </p>
              <p className="leading-[30px] lg:leading-[35px] xl:leading-[40px] 2xl:leading-[51px] text-left text-[#121212] poppins-regular text-base lg:text-lg 2xl:text-[26px]">
                At Seafood Focus, we pride ourselves on offering a diverse and
                high-quality range of seafood products. Our commitment to
                excellence ensures that whether you are looking for fresh,
                frozen, or ready-to-eat seafood, you will find something to
                delight your palate. Explore our products and experience the
                best the ocean has to offer.
              </p>
            </div>
          </div>
          <div className="flex justify-end items-end w-full lg:w-[50%]">
            <Image
              src="/Images/products-explore.webp"
              alt="_bg"
              width={1031}
              height={561}
              className="hidden lg:block lg:max-h-[561px] lg:max-w-[1031px] w-full h-full"
            />
            <Image
              src="/Images/products-explore-sm.webp"
              alt="_bg"
              width={1031}
              height={561}
              className="block lg:hidden max-w-[1025px] max-h-[300px] w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
