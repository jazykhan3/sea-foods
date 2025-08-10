import Image from "next/image";

const Explore = () => {
  return (
    <>
      <div className="sm:min-h-[600px] bg-[#DDEEFF] flex justify-center items-center px-8 md:px-10 lg:px-20 xl:px-40 2xl:px-[200px] py-10 md:py-40">
        <Image
          src="/Images/home-explore-bg.webp"
          alt="_bg"
          width={1519}
          height={895}
          className="hidden sm:block max-w-[1000px] max-h-[600px] w-full h-full absolute"
        />
        <div className="z-[1] flex justify-center items-center">
          <p className="max-w-[400px] xl:max-w-[658px] uppercase text-center whitefish text-border font-bold paint-order text-[#0E46A3] text-[80px] sm:text-[40px] md:text-[60px] xl:text-[80px] font-medium w-full leading-[60px] xl:leading-[100px]">
            Explore Our Diverse Product Range
          </p>
        </div>
      </div>
    </>
  );
};

export default Explore;
