"use client";
import React from "react";
import Image from "next/image";
import Menu from "./menu/menu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isBlurred, setIsBlurred] = React.useState(false);
const pathname = usePathname();

  React.useEffect(() => {
    setIsBlurred((pathname == '/Who' || pathname == '/Logistics' || pathname == '/FrozenProducts' || pathname == '/FreshProducts') ? false : true)
  }, [pathname]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div
        className={`overflow-hidden z-[1111] w-full absolute flex justify-between items-center px-6 md:pr-0 lg:pl-24 ${
          isMenuOpen ? "xl:px-0" : "lg:pl-24 2xl:pl-48"
        } py-4 md:py-10 2xl:py-20 gap-6`}
      >
        <div className={`${pathname=='/Home' ? 'block md:hidden':'hidden'}`}></div>
        {/* <div className={`${pathname=='/Home' ? 'block md:hidden':'hidden'}`}></div> */}
        <Image
          src="/Images/Logo.svg"
          alt="_logo"
          className={`cursor-pointer w-full h-full  max-w-[347px] md:max-w-[500px] max-h-20 md:max-h-[100px] ${
            isMenuOpen ? "hidden sm:block xl:hidden" : "hidden sm:block"
          }
            `}
          width={500}
          height={100}
        />
        <Image
          src="/Images/menu-logo.webp"
          alt="_logo"
          width={636}
          height={204}
          className={`max-w-[636px] max-h-[205px] w-full transition-margin duration-500 ${
            isMenuOpen ? "hidden xl:flex -ml-[2%]" : "hidden xl:flex -ml-[180%]"
          }`}
        />
        <Image
          src="/Images/logo-img.webp"
          alt="_wheel"
          onClick={toggleMenu}
          className="z-[1111] cursor-pointer block sm:hidden w-auto h-auto max-w-[78px] max-h-20"
          width={78}
          height={80}
        />
        <div
          className={`cursor-pointer hidden md:block ${isBlurred ? 'bg-[rgba(256,256,256,0.2)]' : ''} rounded-l-[60px] pl-8 py-3 pr-40 transition-all duration-500 ${
            isMenuOpen ? "bg-white" : (isBlurred ? "backdrop-blur-sm" : "")
          }`}
        >
          <Image
            src="/Images/nav-wheel.webp"
            alt="_wheel"
            onClick={toggleMenu}
            className={`${
              isMenuOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-500 cursor-pointer min-w-[207px] h-[181px] max-w-[207px] max-h-[181px] w-full h-full`}
            width={207}
            height={181}
          />
        </div>
        <Image
          src={isMenuOpen ? "/Images/menu-cross.webp": "/Images/nav-menu-icon.webp"}
          alt="_menu"
          className="text-2xl cursor-pointer md:hidden w-full h-full max-w-[42px] max-h-[42px] transition-all duation-500"
          width={42}
          onClick={toggleMenu}
          height={42}
        />
      </div>

        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </>
  );
};

export default Navbar;
