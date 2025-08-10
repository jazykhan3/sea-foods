import Image from "next/image";
import Link from "next/link";

// Define an interface for the props
interface data  {
    smallScreenTitle?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    buttonText?: string;
    mainImageSrc: string;
    secondaryImageSrc: string;
}
interface AboutProps {
    data: data;
  }

  const About: React.FC<AboutProps> = ({data}) => {

  return (
    <>
      <div className="bg-[#DDEEFF] pt-[121px] sm:pt-[110px] md:pt-[295px] 2xl:pt-[375px] pb-10 md:pb-16 px-6 md:px-8 lg:px-24 flex flex-col lg:flex-row gap-10 xl:gap-16 justify-center items-center w-full">
        <div className="flex flex-col gap-6 xl:gap-12 justify-start items-start xl:justify-end xl:items-end w-full lg:w-[50%]">
          <p className="brice text-[28px] sm:text-4xl md:text-5xl xl:text-[50px] text-left xl:max-w-[707px] 2xl:max-w-[1000px] font-bold w-full text-border sm:text-border text-[#0E46A3] leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[55px] uppercase block">
            {data.title}
          </p>
          {data.subtitle && <p className="xl:max-w-[707px] 2xl:max-w-[1000px] text-black poppins-bold text-lg 2xl:text-[30px] text-left xl:max-w-[707px] 2xl:max-w-[1000px] w-full">
            {data.subtitle}
          </p>}
          <p className="xl:max-w-[707px] 2xl:max-w-[1000px] text-[#121212] poppins-regular text-base xl:text-lg 2xl:text-[26px] text-left leading-[30px] xl:leading-[35px] 2xl:leading-[51px]">
           {data.description}
          </p>
          <div className="flex justify-start items-start w-full xl:max-w-[707px] 2xl:max-w-[1000px]">
            <Link href={data.title == 'OUR TRADITIONAL FRESH PRODUCTS' ? '/BuyFreshProducts' : '/BuyFrozenProducts'}>
            <button className="px-3 md:px-5 py-3 md:py-4 md:py-5 xl:py-6 bg-[#071B3B] rounded-lg texxt-center text-[#DDF2FD] poppins-bold text-base lg:text-[22px]">
              {data.buttonText}
            </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center lg:justify-start lg:items-start w-full lg:w-[50%]">
          <Image
            src={data.mainImageSrc}
            alt="_food"
            width={733}
            height={694}
            className="hidden lg:block max-w-[400px] md:max-w-[500px] max-h-[380px] md:max-h-[470px] xl:max-w-[733px] xl:max-h-[694px] w-full h-full"
          />
          <Image
            src={data.secondaryImageSrc}
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

export default About;
