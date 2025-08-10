import Image from "next/image";

const Processing = () => {
  return (
    <>
      <div className="bg-[#DDEEFF] py-10 md:py-16 px-6 md:px-8 lg:px-24 flex flex-col lg:flex-row gap-10 xl:gap-16 justify-center items-center w-full">
        <div className="flex flex-col gap-6 xl:gap-12 justify-start items-start xl:justify-end xl:items-end w-full lg:w-[50%]">
          <p className="brice text-4xl md:text-5xl xl:text-[50px] text-left xl:max-w-[707px] 2xl:max-w-[1000px] font-bold w-full text-border sm:text-border text-[#0E46A3] leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[55px] uppercase sm:hidden">
            Process - ing and Pre - paration
          </p>
          <p className="brice text-4xl md:text-5xl xl:text-[50px] text-left xl:max-w-[707px] 2xl:max-w-[1000px] font-bold w-full text-border sm:text-border text-[#0E46A3] leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[55px] uppercase hidden sm:block">
            Processing and Preparation
          </p>
          <p className="xl:max-w-[707px] 2xl:max-w-[1000px] text-black poppins-bold text-lg 2xl:text-[30px] text-left xl:max-w-[707px] 2xl:max-w-[1000px] w-full">
            Expert Preparation
          </p>
          <p className="xl:max-w-[707px] 2xl:max-w-[1000px] text-[#121212] poppins-regular text-base xl:text-lg 2xl:text-[26px] text-left leading-[30px] xl:leading-[35px] 2xl:leading-[51px]">
            With 25 fish trading workshops located in key French ports, our
            expert teams meticulously process and prepare your orders. Whether
            you need whole fish, fillets, or specific cuts, we cater to your
            exact requirements. Our workshops are equipped with advanced
            technology to maintain the highest standards of hygiene and quality
            control.
          </p>
        </div>
        <div className="flex justify-center items-center lg:justify-start lg:items-start w-full lg:w-[50%]">
          <Image
            src="/Images/fresh-processing-img.webp"
            alt="_food"
            width={733}
            height={694}
            className="hidden lg:block max-w-[400px] md:max-w-[500px] max-h-[380px] md:max-h-[470px] xl:max-w-[733px] xl:max-h-[694px] w-full h-full"
          />
          <Image
            src="/Images/fresh-processing-img-sm.webp"
            alt="_bg"
            width={1532}
            height={694}
            className="lg:hidden md:max-w-[700px] md:max-h-[350px] max-w-[1200px] max-h-[694px] w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Processing;
