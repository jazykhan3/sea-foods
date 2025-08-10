import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="bg-[#DDEEFF] flex justify-center items-center w-full">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 justify-center items-end w-full bg-[url('/Images/who-mission-bg.webp')] bg-cover bg-center bg-no-repeat">
          <div className="px-6 md:px-8 lg:pr-0 lg:pl-24 py-4 lg:py-20 w-full lg:w-[50%] flex flex-col gap-10 justify-start items-start">
            <div className="flex flex-col gap-10 justify-start items-start lg:justify-end lg:items-end w-full">
              <p className="text-black poppins-semibold text-base sm:text-lg xl:text-[26px] leading-normal xl:leading-[39px] xl:max-w-[707px] 2xl:max-w-[1000px]">
                At Seafood Focus, we are dedicated to providing the finest
                seafood products available. Our range includes traditional fresh
                catches, premium frozen options, convenient cooked meals, and
                more. Each product is carefully selected and prepared to ensure
                you enjoy the best the ocean has to offer.
              </p>
              <div className="xl:max-w-[707px] 2xl:max-w-[1000px] flex justify-start items-start w-full">
                <Link href="/BuyFreshProducts">
                  <button className="px-10 py-4 text-[#DDF2FD] poppins-bold drop-shadow-lg rounded-lg bg-[#071B3B] border border-white">
                    Explore All Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex flex-col gap-10 justify-end items-end">
            <Image
              src="/Images/product-about-img.webp"
              alt="_design"
              width={1016}
              height={676}
              className="max-w-[500px] max-h-[500px] md:max-w-[500px] md:max-h-[500px] lg:max-w-[800px] lg:max-h-[676px] w-full h-full"
            />
            <Image
              src="/Videos/shark-video.gif"
              alt="_design"
              width={1016}
              height={676}
              className="opacity-60	-mb-[35px] max-w-[85px] max-h-[135px] md:max-w-[150px] md:max-h-[197px] absolute w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
