import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-[#071B3B] px-6 lg:px-24 xl:px-48 pt-20 pb-6 sm:pb-24 2xl:pb-40 flex flex-col justify-center items-center w-full">
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex flex-col gap-10 md:gap-20 justify-center items-center">
            <div className="flex justify-between gap-6 items-center">
              <div className="">
                <Image
                  src="/Images/logo-img.webp"
                  alt="_logo"
                  className="w-full h-full max-w-[120px] md:max-w-[180px] max-h-[120px] md:max-h-[180px]"
                  width={165}
                  height={170}
                />
              </div>
              <div className="">
                <p className="brice font-bold text-5xl sm:text-6xl md:leading-[74px] md:text-[80px] text-[#00ADCF]">
                  <span className="text-white">S</span>eafood{" "}
                  <span className="text-white">F</span>ocus
                </p>
              </div>
              <div className=""></div>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-6 w-full">
              <button
                disabled
                className="cursor-not-allowed rounded-lg border border-white px-4 py-4 flex justify-center items-center text-white text-lg poppins-bold w-full sm:w-[236px]"
              >
                SHOP NOW
              </button>
              <Link href="/Who" className="w-full sm:w-[236px]">
                <button className="rounded-lg bg-white border border-[white] px-4 py-4 flex justify-center items-center text-[#071B3B] text-lg poppins-bold w-full sm:w-[236px]">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
          <div className="flex pt-24 pb-16 flex-wrap gap-10 sm:gap-20 md:gap-24 2xl:gap-48">
            <div className="flex flex-col gap-4 justify-start items-start w-fit">
              <p className="uppercase poppins-bold text-lg text-white">
                Navigation
              </p>
              <div className="flex flex-col gap-2 justifystart items-start">
                <Link href="/">
                  <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                    Home
                  </p>
                </Link>
                <Link href="/Who">
                  <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                    About Us
                  </p>
                </Link>
                <Link href="/Who">
                  <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                    What We Do
                  </p>
                </Link>
                <Link href="/Expertise">
                  <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                    Our Expertise
                  </p>
                </Link>
                <Link href="/Who">
                  <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                    Our Groups
                  </p>
                </Link>
                <Link href="/Contact">
                  <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                    Contact Us
                  </p>
                </Link>
                <Link href="/Blogs">
                  <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                    News & Blogs
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start w-fit">
              <p className="uppercase poppins-bold text-lg text-white">
                Products
              </p>
              <div className="flex flex-col gap-2 justifystart items-start">
                <Link href="/Products">
                  <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                    All Products
                  </p>
                </Link>
                <Link href="/FreshProducts">
                  <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                    Fresh Seafood
                  </p>
                </Link>
                <Link href="/FrozenProducts">
                  <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                    Frozen Products
                  </p>
                </Link>
                {/* <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                  Key features and Benefits
                </p> */}
                {/* <Link href="/BuyFreshProducts">
                  <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                    Product Categories{" "}
                  </p>
                </Link> */}
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start w-fit">
              <p className="uppercase poppins-bold text-lg text-white">LEGAL</p>
              <div className="flex flex-col gap-2 justifystart items-start">
                <Link href="/Who">
                  <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                    General Info
                  </p>
                </Link>
                <Link href="/Contact">
                  <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                    Privacy Policy
                  </p>
                </Link>
                <Link href="/Contact">
                  <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                    Terms of Service
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start w-fit">
              <p className="uppercase poppins-bold text-lg text-white">
                TALK TO US
              </p>
              <div className="flex flex-col gap-2 justifystart items-start">
                <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                  support@seafoodfocus.com
                </p>
                <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                  +66 2399 1145
                </p>
                <Link href="/Contact">
                  <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                    Contact Us
                  </p>
                </Link>
                <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                  Facebook
                </p>
                <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                  Linkedin
                </p>
                <p className="poppins-regular text-white text-lg cursor-pointer text-opacity-80">
                  Twitter
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-between items-center gap-4 sm:gap-6 md:gap-8 pt-10 md:pt-20 border-t border-[#20324F]">
          <p className="text-white poppins-regular text-lg">
            © 2024 SeafoodFocus. All Rights Reserved.{" "}
          </p>
          <div className="flex flex-wrap sm:flex-no-wrap max-w-[192px] sm:min-w-[192px] w-full gap-3 sm:gap-[18px]">
            <Image
              src="/Images/footer-fb-icon.webp"
              alt="_socialMedia"
              className="w-full h-full max-w-[52px] max-h-[52px]"
              width={52}
              height={52}
            />
            <Image
              src="/Images/footer-linkedin-icon.webp"
              alt="_socialMedia"
              className="w-full h-full max-w-[52px] max-h-[52px]"
              width={52}
              height={52}
            />
            <Image
              src="/Images/footer-twitter-icon.webp"
              alt="_socialMedia"
              className="w-full h-full max-w-[52px] max-h-[52px]"
              width={52}
              height={52}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
