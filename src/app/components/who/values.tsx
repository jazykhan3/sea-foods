import Image from "next/image";

const Values = () => {
  return (
    <>
      <div className="bg-[#DDEEFF] overflow-hidden">
        <div className="flex justify-between items-center">
          <Image
            src="/Images/who-values-crab-img.webp"
            alt="_fish"
            className="hidden sm:block max-w-[400px] md:max-w-[500px] 2xl:max-w-[756px] max-h-[733px] w-full h-full absolute -mt-[50px] lg:mt-[43px] -ml-[13px]"
            width={756}
            height={733}
          />
          <Image
            src="/Images/who-values-fish-bg.webp"
            alt="_fish"
            className="hidden lg:block  max-h-[300px] xl:max-w-[400px] 2xl:max-h-[450px] lg:max-w-[300px] xl:max-h-[400px] 2xl:max-w-[550px] mt-[569px] w-full h-full absolute right-0"
            width={656}
            height={558}
          />
        </div>
        <div className="mt-24 w-full bg-[url('/Images/who-mission-bg.webp')] bg-cover bg-center bg-no-repeat flex flex-col gap-10 justify-center items-center px-6 lg:px-24">
          <div className="flex flex-col gap-6 justify-center items-center">
            <p className="text-center text-center whitefish text-border font-bold paint-order text-[#0E46A3] text-[80px] lg:text-[90px] xl:text-[140px] font-medium w-full leading-[70px]">
              OUR VALUES
            </p>
            <p className="text-center  poppins-bold text-[30px] text-[#0E46A3]">
              Core Principles That Guide Us
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:gap-0 justify-center items-center">
            <div className="flex flex-col-reverse lg:flex-row gap-4 justify-center items-center w-full lg:w-[50%]">
              <p className="text-center lg:text-right text-black poppins-regular text-base md:text-lg max-w-[200px] w-full lg:w-[50%]">
                Conducting our business with honesty and transparency.
              </p>
              <div className="w-full lg:w-[50%] flex justify-center items-center">
                <Image
                  src="/Images/who-values-integrity-fish.webp"
                  alt="_fish"
                  className="max-w-[350px] sm:max-w-[500px] lg:min-w-[320px] lg:max-w-[750px] 2xl:max-w-[900px] lg:max-h-[350px] w-full h-full"
                  width={700}
                  height={300}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex flex-col-reverse lg:flex-row gap-4 justify-center items-center w-full lg:w-[50%]">
                <p className="text-center lg:text-right text-black poppins-regular text-base md:text-lg max-w-[200px]">
                  {" "}
                  Embracing new technologies and practices to enhance our
                  products and services.
                </p>
                <div className="w-full lg:w-[50%] flex justify-center items-center">
                  <Image
                    src="/Images/who-values-innovation-fish.webp"
                    alt="_fish"
                    className="hidden lg:block max-w-[350px] sm:max-w-[500px] lg:min-w-[320px] lg:max-w-[750px] 2xl:max-w-[900px] lg:max-h-[350px] w-full h-full"
                    width={700}
                    height={300}
                  />
                  <Image
                    src="/Images/who-values-innovation-fish-2.webp"
                    alt="_fish"
                    className="lg:hidden max-w-[350px] sm:max-w-[500px] lg:min-w-[320px] lg:max-w-[750px] 2xl:max-w-[900px] lg:max-h-[350px] w-full h-full"
                    width={700}
                    height={300}
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-4 justify-center items-center w-full lg:w-[50%]">
                <p className="text-center lg:text-right text-black poppins-regular text-base md:text-lg max-w-[200px]">
                  {" "}
                  Driven by a deep love for the ocean and its bounty.
                </p>
                <div className="w-full lg:w-[50%] flex justify-center items-center">
                  <Image
                    src="/Images/who-values-passion-fish.webp"
                    alt="_fish"
                    className="hidden lg:block max-w-[350px] sm:max-w-[500px] lg:min-w-[320px] lg:max-w-[750px] lg:max-h-[350px] w-full h-full"
                    width={700}
                    height={300}
                  />
                  <Image
                    src="/Images/who-values-passion-fish-2.webp"
                    alt="_fish"
                    className="lg:hidden max-w-[350px] sm:max-w-[500px] lg:min-w-[320px] lg:max-w-[750px] lg:max-h-[350px] w-full h-full"
                    width={700}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-24 justify-center items-center px-6 lg:px-24 lg:pt-20">
          <p className="lg:pb-40 xl:pb-20 w-full lg:w-[50%] max-w-[506px] text-center lg:text-left text-[#0E46A3] poppins-bold text-[40px] pt-28 lg:pt-0">
            Excellence: Striving for the highest quality in everything we do.
          </p>
          <div className="w-full lg:w-[50%] flex justify-center items-center">
            <Image
              src="/Images/who-values-boat.webp"
              alt="_boat"
              className="w-full h-full"
              width={862}
              height={625}
            />
          </div>
        </div>
        <Image
          src="/Images/who-wave.svg"
          alt="_wave"
          className="w-full h-auto -mt-[29%] lg:-mt-[20%] 2xl:-mt[-21%]"
          width={2100}
          height={467}
        />
      </div>
    </>
  );
};

export default Values;
