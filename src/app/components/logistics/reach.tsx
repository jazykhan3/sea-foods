import Qualities from "../expertise/qualities";

const Reach = () => {
  return (
    <>
      <div className="bg-[#DDEEFF] w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center bg-[url('/Images/logistics-reach-bg.webp')] bg-cover bg-center">
          <div className="z-[1] max-w-[1080px] w-full px-6 lg:px-24 pt-20 md:pt-40 flex flex-col gap-8 md:gap-10 justify-center items-center w-full">
            <p className="uppercase text-center whitefish font-bold text-[#0E46A3] text-6xl lg:text-[90px] font-medium w-fit">
              Global Reach
            </p>
            <div className="flex flex-col gap-4 md:gap-6 justify-center items-center">
              <p className="text-center text-[#071B3B] poppins-bold font-bold text-lg md:text-[22px] leading-[30px] md:leading-[35px]">
                • Worldwide Distribution
              </p>
              <p className="capitalize text-center text-[#071B3B] poppins-light text-lg font-[100px] md:text-[22px] leading-[30px] md:leading-[35px]">
                Leveraging a robust logistics network, we deliver our premium
                seafood to clients worldwide, ensuring that the quality and
                freshness of French seafood are enjoyed globally.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 justify-center items-center">
              <p className="text-center text-[#071B3B] poppins-bold font-bold text-lg md:text-[22px] leading-[30px] md:leading-[35px]">
                • Trusted by Many
              </p>
              <p className="capitalize text-center text-[#071B3B] poppins-light font-[100px] text-lg md:text-[22px] leading-[30px] md:leading-[35px]">
                From fine dining establishments to retail markets, our products
                are trusted and cherished by customers around the world.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[300px] bg-gradient-to-t from-[#DDEEFF] to-[#DDEEFF00] -mt-[296px]"></div>
        <div className="w-full flex justify-center items-center">
          <Qualities />
        </div>
      </div>
    </>
  );
};

export default Reach;
