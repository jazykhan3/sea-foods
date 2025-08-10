"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = ({ isMenuOpen, setIsMenuOpen }: any) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [whoAccordion, setWhoAccordion] = React.useState(false);
  const [expertiseAccordion, setExpertiseAccordion] = React.useState(false);
  const [productsAccordion, setProductsAccordion] = React.useState(false);
  const [newsAccordion, setNewsAccordion] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay to ensure transition works after initial render
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  React.useEffect(() => {
    if (!isMenuOpen) {
      setIsVisible(false);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 200); // Delay to ensure transition works after initial render
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    setWhoAccordion(false);
    setExpertiseAccordion(false);
    setProductsAccordion(false);
    setProductsAccordion(false);
  };
  return (
    <>
      <div
        className={`${
          isMenuOpen ? "opacity-100" : "opacity-0"
        } bg-[#88C4FF] h-fit xl:h-screen z-[11] xl:overflow-hidden absolute w-full bg-[url('/Images/menu-bg.webp')] bg-center bg-cover bg-no-repeat transition-opacity duration-1000 
      `}
      >
        <div
          className={`flex flex-col gap-6 md:gap-8 lg:gap-10 2xl:gap-[62px] justify-center items-center w-full py-[120px] md:pt-[265px] lg:pt-[230px] xl:pt-[180px] 2xl:pt-[265px] pb-10 px-4 md:px-6 relative transition-all duration-500 ${
            isVisible ? "mt-[0%]" : "-mt-[42%]"
          }`}
        >
          <Link href="/">
            <p className="text-[#0E46A3] text-3xl 2xl:text-[60px] whitefish text-border">
              HOME
            </p>
          </Link>
          <div className="flex flex-col justify-center items-center gap-3 w-full lg:hidden">
            {/* Who */}
            <div className="flex flex-col gap-3 justify-center items-center w-full transition-all duration-500">
              <div className="flex gap-2 justify-between items-center min-w-[200px] max-w-[200px] w-full transition-all duration-500">
                {/* <Link onClick={handleMenuClose} href="/Who"> */}
                  <p className="whitefish text-2xl font-bold text-[#0E46A3] 2xl:text-[40px] text-border">
                    WHO ARE WE ?
                  </p>
                {/* </Link> */}
                <Image
                  onClick={() => setWhoAccordion(!whoAccordion)}
                  src="/Images/chevron-icon.webp"
                  alt="_arrow"
                  width={30}
                  height={30}
                  className={`w-[35px] h-[35px] max-w-[35px] max-h-[35px] w-full h-full cursor-pointer ${whoAccordion ? '' : 'rotate-180'}`}
                />
              </div>
              {whoAccordion && (
                <div className="flex flex-col gap-2 justify-start items-start w-full transition-all duration-500 min-w-[200px] max-w-[200px] pb-[20px]">
                  <Link
                    onClick={handleMenuClose}
                    href="/Who#group"
                    scroll={false}
                  >
                    <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                      Our Group
                    </p>
                  </Link>
                  <Link
                    onClick={handleMenuClose}
                    href="/Who#mission"
                    scroll={false}
                  >
                    <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                      Our Mission
                    </p>
                  </Link>
                </div>
              )}
            </div>
            {/* Expertise*/}
            <div className="flex flex-col gap-3 justify-center items-center w-full transition-all duration-500">
              <div className="flex gap-2 justify-between items-center min-w-[200px] max-w-[200px] w-full transition-all duration-500">
                {/* <Link onClick={handleMenuClose} href="/Expertise"> */}
                  <p className="whitefish text-2xl font-bold text-[#0E46A3] 2xl:text-[40px] text-border">
                    OUR EXPERTISE
                  </p>
                {/* </Link> */}
                <Image
                  onClick={() => setExpertiseAccordion(!expertiseAccordion)}
                  src="/Images/chevron-icon.webp"
                  alt="_arrow"
                  width={30}
                  height={30}
                  className={`w-[35px] h-[35px] max-w-[35px] max-h-[35px] w-full h-full cursor-pointer ${expertiseAccordion ? '' : 'rotate-180'}`}
                />
              </div>
              {expertiseAccordion && (
                <div className="flex flex-col gap-2 justify-start items-start w-full transition-all duration-500 min-w-[200px] max-w-[200px] pb-[20px]">
                  <Link
                    onClick={handleMenuClose}
                    href="/Expertise#overview"
                    scroll={false}
                  >
                    <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                      Overview
                    </p>
                  </Link>
                  {/* <Link
                    onClick={handleMenuClose}
                    href="/Logistics#operations"
                    scroll={false}
                  >
                    <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                      Logistics Operations
                    </p>
                  </Link> */}
                  <Link
                    onClick={handleMenuClose}
                    href="/Infrastructure"
                    scroll={false}
                  >
                    <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                      Infrastructure And Processess
                    </p>
                  </Link>
                </div>
              )}
            </div>
            {/* Products */}
            <div className="flex flex-col gap-3 justify-center items-center w-full transition-all duration-500">
              <div className="flex gap-2 justify-between items-center min-w-[200px] max-w-[200px] w-full transition-all duration-500">
                {/* <Link onClick={handleMenuClose} href="/Products"> */}
                  <p className="whitefish text-2xl font-bold text-[#0E46A3] 2xl:text-[40px] text-border">
                    OUR PRODUCTS
                  </p>
                {/* </Link> */}
                <Image
                  onClick={() => setProductsAccordion(!productsAccordion)}
                  src="/Images/chevron-icon.webp"
                  alt="_arrow"
                  width={30}
                  height={30}
                  className={`w-[35px] h-[35px] max-w-[35px] max-h-[35px] w-full h-full cursor-pointer ${expertiseAccordion ? '' : 'rotate-180'}`}
                />
              </div>
              {productsAccordion && (
                <div className="flex flex-col gap-2 justify-start items-start w-full transition-all duration-500 min-w-[200px] max-w-[200px] pb-[20px]">
                  <Link onClick={handleMenuClose} href="/FreshProducts">
                    <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                      Traditional Fresh Products
                    </p>
                  </Link>
                  {/* <Link
                    onClick={handleMenuClose}
                    href="/Products#qualities"
                    scroll={false}
                  >
                    <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                      Products Categories And Highlights
                    </p>
                  </Link> */}
                  <Link onClick={handleMenuClose} href="/FrozenProducts">
                    <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                      Frozen Products
                    </p>
                  </Link>
                </div>
              )}
            </div>
            {/* News */}
            <div className="flex flex-col gap-3 justify-center items-center w-full transition-all duration-500">
              <div className="flex gap-2 justify-between items-center min-w-[200px] max-w-[200px] w-full transition-all duration-500">
                {/* <Link onClick={handleMenuClose} href="/Blogs"> */}
                  <p className="whitefish text-2xl font-bold text-[#0E46A3] 2xl:text-[40px] text-border">
                    OUR NEWS
                  </p>
                {/* </Link> */}
                <Image
                  onClick={() => setNewsAccordion(!newsAccordion)}
                  src="/Images/chevron-icon.webp"
                  alt="_arrow"
                  width={30}
                  height={30}
                  className={`w-[35px] h-[35px] max-w-[35px] max-h-[35px] w-full h-full cursor-pointer ${newsAccordion ? '' : 'rotate-180'}`}
                />
              </div>
              {newsAccordion && (
                <div className="flex flex-col gap-2 justify-start items-start w-full transition-all duration-500 min-w-[200px] max-w-[200px] pb-[20px]">
                  <Link onClick={handleMenuClose} href="/Blogs">
                    <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                      Our News
                    </p>
                  </Link>
                  <Link onClick={handleMenuClose} href="/Blogs">
                    <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                      Blog
                    </p>
                  </Link>
                  <Link onClick={handleMenuClose} href="/Blogs">
                    <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                      AI Insights
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="hidden lg:flex flex-wrap gap-10 justify-center items-start w-fit">
            <div className="flex flex-col z-[1] gap-3 lg:gap-4 xl:gap-[18px] w-fit justify-start items-start max-w-[200px] min-w-[200px] sm:min-w-[276px] sm:max-w-[276px] xl:max-w-[unset] xl:min-w-[unset]">
              <p className="whitefish text-2xl font-bold text-[#0E46A3] 2xl:text-[40px] text-border">
                WHO ARE WE ?
              </p>
              <Link onClick={handleMenuClose} href="/Who#group" scroll={false}>
                <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                  Our Group
                </p>
              </Link>
              <Link
                onClick={handleMenuClose}
                href="/Who#mission"
                scroll={false}
              >
                <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                  Our Mission
                </p>
              </Link>
            </div>
            <div className="flex flex-col z-[1] gap-3 lg:gap-4 xl:gap-[18px] w-fit justify-start items-start max-w-[200px] min-w-[200px] sm:min-w-[276px] sm:max-w-[276px] xl:max-w-[unset] xl:min-w-[unset]">
              {/* <Link onClick={handleMenuClose} href="/Expertise"> */}
                <p className="whitefish text-2xl font-bold text-[#0E46A3] 2xl:text-[40px] text-border">
                  OUR EXPERTISE
                </p>
              {/* </Link> */}
              <Link onClick={handleMenuClose} href="/Expertise">
                <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                  Overview
                </p>
              </Link>
              {/* <Link
                onClick={handleMenuClose}
                href="/Logistics#operations"
                scroll={false}
              >
                <p className="text-white capitalize text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                  logistics Operations
                </p>
              </Link> */}
              <Link onClick={handleMenuClose} href="/Infrastructure">
                <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                  Infrastructure And Processes
                </p>
              </Link>
            </div>
            <div className="flex flex-col z-[1] gap-3 lg:gap-4 xl:gap-[18px] w-fit justify-start items-start max-w-[200px] min-w-[200px] sm:min-w-[276px] sm:max-w-[276px] xl:max-w-[unset] xl:min-w-[unset]">
              {/* <Link onClick={handleMenuClose} href="/Products"> */}
                <p className="whitefish text-2xl font-bold text-[#0E46A3] 2xl:text-[40px] text-border">
                  OUR PRODUCTS
                </p>
              {/* </Link> */}
              <Link onClick={handleMenuClose} href="/FreshProducts">
                <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                  Traditional Fresh Products
                </p>
              </Link>
              {/* <Link onClick={handleMenuClose} href="/FreshProducts">
                <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                  Key Features And Benefits
                </p>
              </Link> */}
              {/* <Link onClick={handleMenuClose} href="/FreshProducts">
                <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                  Product Categories And Highlights
                </p>
              </Link> */}
              <Link onClick={handleMenuClose} href="/FrozenProducts">
                <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                  Frozen Products
                </p>
              </Link>
            </div>
            <div className="flex flex-col z-[1] gap-3 lg:gap-4 xl:gap-[18px] w-fit justify-start items-start max-w-[200px] min-w-[200px] sm:min-w-[276px] sm:max-w-[276px] xl:max-w-[unset] xl:min-w-[unset]">
              <p className="whitefish text-2xl font-bold text-[#0E46A3] 2xl:text-[40px] text-border">
                OUR NEWS
              </p>
              <Link onClick={handleMenuClose} href="/Blogs">
                <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                  Our News
                </p>
              </Link>
              <Link onClick={handleMenuClose} href="/Blogs">
                <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                  Blog
                </p>
              </Link>
              <Link onClick={handleMenuClose} href="/Blogs">
                <p className="text-white text-lg 2xl:text-[26px] text-shadow-gray font-[600]">
                  AI Insights
                </p>
              </Link>
            </div>
          </div>

          <Link onClick={handleMenuClose} href="/Contact" className="z-[1]">
            <button className="text-white poppins-bold text-xl xl:text-2xl px-8 lg:px-10 2xl:px-[68px] py-3 bg-[#0E46A3] rounded-lg border border-[4px] border-white z-[1]">
              Contact US
            </button>
          </Link>
        </div>
        <Image
          src="/Images/menu-waves.webp"
          alt="_waves"
          className={`hidden xl:block absolute left-0 w-full transition-all duration-700 max-h-[400px] ${
            isVisible ? "bottom-0" : "-bottom-[321px]"
          }`}
          width={1920}
          height={1080}
        />
      </div>
    </>
  );
};

export default Menu;
