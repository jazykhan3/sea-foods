import Image from "next/image";

const Reach = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="flex flex-col w-full">
          <div className="w-full bg-[url('/Images/who-reach-bg-2.webp')] xl:bg-[url('/Images/who-reach-bg-1.webp')] bg-cover bg-center flex flex-col gap-8 md:gap-32 justify-start items-center px-6 lg:px-24 pt-32">
            <p className="whitefish text-border font-bold text-[#0E46A3] text-6xl lg:text-[90px] font-medium w-full">
              Our Reach and Capabilities
            </p>
            <div className="flex gap-10 justify-center items-center w-full">
              <div className="w-full xl:w-[50%] flex flex-col gap-10 justify-center items-center pb-32">
                <div className="w-full flex justify-start items-start">
                  <div className="flex flex-col gap-2 xl:gap-6 justify-start items-center max-w-[367px]">
                    <div className="flex gap-4 xl:gap-6 justify-start items-center w-full">
                      <Image
                        src="/Images/who-reach-icon-1.webp"
                        alt="_icon"
                        className="w-8 h-8"
                        width={35}
                        height={35}
                      />
                      <p className="text-white poppins-bold text-[26px] ">
                        Global Sourcing
                      </p>
                    </div>
                    <p className="text-white poppins-regular text-xl">
                      We source our seafood from trusted partners worldwide,
                      ensuring a diverse and high-quality product range.
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-end items-end">
                  <div className="flex flex-col gap-2 xl:gap-6 justify-start items-center max-w-[367px]">
                    <div className="flex gap-6 justify-start items-center w-full">
                      <Image
                        src="/Images/who-reach-icon-2.webp"
                        alt="_icon"
                        className="w-8 h-8"
                        width={35}
                        height={35}
                      />
                      <p className="text-white poppins-bold text-[26px] ">
                        Comprehensive Service
                      </p>
                    </div>
                    <p className="text-white poppins-regular text-xl">
                      {" "}
                      From selection and purchase to processing and delivery, we
                      manage the entire value chain to guarantee exceptional
                      service and products.
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-start items-start">
                  <div className="flex flex-col gap-2 xl:gap-6 justify-start items-center max-w-[367px]">
                    <div className="flex gap-6 justify-start items-center w-full">
                      <Image
                        src="/Images/who-reach-icon-3.webp"
                        alt="_icon"
                        className="w-8 h-8"
                        width={35}
                        height={35}
                      />
                      <p className="text-white poppins-bold text-[26px] ">
                        Cutting-Edge Facilities
                      </p>
                    </div>
                    <p className="text-white poppins-regular text-xl">
                      Our processing and storage facilities are equipped with
                      the latest technology to maintain the quality and
                      freshness of our products.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden xl:block xl:w-[50%]"></div>
            </div>
          </div>
          <Image
            src="/Images/who-wave.svg"
            alt="_wave"
            className="w-full h-auto -mt-[16%] z-[1]"
            width={2100}
            height={467}
          />
        </div>
        <div className="-mt-[6%] bg-[#DDEEFF] flex flex-col lg:flex-row gap-10 xl:gap-24 justify-center items-center w-full">
          <div className="flex w-full lg:w-[50%] h-full justify-center items-center">
            <Image
              src="/Images/who-reach-img-2.webp"
              alt="_bg"
              className="w-full-h-full"
              width={2080}
              height={721}
            />
          </div>
          <div className="flex w-full lg:w-[50%] h-full justify-center items-center">
            <p className="text-[#071B3B] poppins-bold text-3xl md:text-[30px] max-w-[506px] px-6 g:px-10 pb-10 lg:pb-0">
              We are more than just a seafood supplier; we are your trusted
              partner in providing the best seafood products, committed to
              sustainability and quality
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reach;
