import Image from "next/image";

const Operations = () => {
  return (
    <>
      <div className="w-full -mt-20">
        <div className="flex justify-center items-center w-full bg-[#DDEEFF]">
          <div className="w-full bg-[url('/Images/who-mission-bg.webp')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
            <div className="flex flex-col-reverse xl:flex-row gap-10 px-6 lg:px-24 py-20">
              <div className="w-full xl:w-[50%] flex justfy-center items-center">
                <Image
                  src="/Images/logistics-operation-img.webp"
                  alt="_truck"
                  width={926}
                  height={617}
                  className="w-auto h-auto"
                />
              </div>
              <div className="w-full xl:w-[50%]">
                <p className="text-[#071B3B] poppins-medium leading-[25px] xl:leading-[38px] tracking-[3%] px-4 md:px-6 xl:px-10 py-12 xl:py-[120px] text-center text-base md:text-lg xl:text-xl bg-[#DDEEFF] drop-shadow-lg rounded-[30px]">
                  Our logistics operations are meticulously designed to ensure
                  that our seafood products are handled and delivered with the
                  highest care and efficiency. We employ sophisticated tracking
                  systems and temperature-controlled transportation to maintain
                  the freshness and quality of our seafood from the moment it
                  leaves our facilities until it reaches our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Operations;
