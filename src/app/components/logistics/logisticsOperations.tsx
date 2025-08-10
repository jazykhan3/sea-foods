import Image from "next/image";

const LogisticsOperation = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col gap-16 md:gap-20 lg:gap-[130px] justify-center items-center w-full bg-[#DDEEFF] px-6 lg:px-24 py-10 md:py-20">
        <div className="flex flex-col gap-10 lg:gap-16 justify-center items-center w-full">
          <p className="uppercase text-center whitefish text-border font-bold text-[#0E46A3] text-6xl lg:text-[90px] font-medium w-fit">
            Logistics Operations
          </p>
          <p className="text-[#071B3B] poppins-bold text-center text-lg lg:text-[22px] font-bold leading-[30px] lg:leading-[35px] max-w-[1280px]">
            Our logistics operations encompass a series of carefully coordinated
            steps to maintain the highest standards of product quality and
            delivery efficiency:
          </p>
        </div>
        <div className="flex flex-col gap-12 lg:gap-8 justify-start items-start lg:justify-center lg:items-center">
          <div className="flex gap-4 justify-start items-start lg:justify-center lg:items-center">
            <Image
              src="/Images/logistics-fish-img-1.webp"
              alt="_fish"
              width={100}
              height={100}
              className="max-w-[50px] max-h-[50px] md:max-w-[80px] md:max-h-[80px] w-full h-full lg:hidden"
            />
            <div className="hidden lg:block w-full lg:w-[50%]">
              <Image
                src="/Images/logistics-img-1.webp"
                alt="_fish"
                width={885}
                height={485}
                className="max-w-[885px] max-h-[485px] w-full h-full hidden lg:block"
              />
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-4 lg:gap-10 justify-start items-start lg:max-w-[400px]">
              <p className="text-[#071B3B] poppins-medium font-bold text-lg md:text-[22px] text-left">
                Advanced Tracking Systems
              </p>
              <p className="text-[#071B3B] poppins-medium leading-[42px] tracking-[3%] text-left">
                Implementing real-time tracking to monitor the location and
                condition of our shipments.
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-start items-start lg:justify-center lg:items-center">
            <Image
              src="/Images/logistics-fish-img-2.webp"
              alt="_fish"
              width={100}
              height={100}
              className="max-w-[50px] max-h-[50px] md:max-w-[80px] md:max-h-[80px] w-full h-full lg:hidden"
            />
            <div className="hidden lg:block w-full lg:w-[50%]">
              <Image
                src="/Images/logistics-img-2.webp"
                alt="_fish"
                width={885}
                height={485}
                className="max-w-[885px] max-h-[485px] w-full h-full hidden lg:block"
              />
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-4 lg:gap-10 justify-start items-start lg:max-w-[400px]">
              <p className="text-[#071B3B] poppins-medium font-bold text-lg md:text-[22px] text-left">
                Temperature-Controlled Transportation
              </p>
              <p className="text-[#071B3B] poppins-medium leading-[42px] tracking-[3%] text-left">
                Utilizing specialized vehicles to maintain the cold chain and
                ensure products remain fresh.
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-start items-start lg:justify-center lg:items-center">
            <Image
              src="/Images/logistics-fish-img-3.webp"
              alt="_fish"
              width={100}
              height={100}
              className="max-w-[50px] max-h-[50px] md:max-w-[80px] md:max-h-[80px] w-full h-full lg:hidden"
            />
            <div className="hidden lg:block w-full lg:w-[50%]">
              <Image
                src="/Images/logistics-img-3.webp"
                alt="_fish"
                width={885}
                height={485}
                className="max-w-[885px] max-h-[485px] w-full h-full hidden lg:block"
              />
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-4 lg:gap-10 justify-start items-start lg:max-w-[400px]">
              <p className="text-[#071B3B] poppins-medium font-bold text-lg md:text-[22px] text-left">
                Efficient Route Planning
              </p>
              <p className="text-[#071B3B] poppins-medium leading-[42px] tracking-[3%] text-left">
                Optimizing delivery routes to minimize transit times and ensure
                timely deliveries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogisticsOperation;
