"use client";
import React from "react";
import Image from "next/image";
import AIBlogs from "./AIblogs";
import Blogs from "./Blogs";
import News from "./News";
import Community from "./Community";

const Future = (isLinkActiveId:any) => {
  const [isActiveId, setIsActiveId] = React.useState(0);

  return (
    <>
      <div className="px-6 md:px-12 py-10 md:py-12 flex flex-col justify-center items-center w-full gap-10 md:gap-16 bg-[#DDEEFF]">
        <div className="rounded-[18px] lg:mx-20 flex justify-between gap-6 items-center bg-[#071B3B] px-6 md:px-10 2xl:px-40 py-5 w-full">
          <div className="hidden sm:flex justify-center items-center w-fit">
            <Image
              src="/Images/blogs-logo.webp"
              alt="_logo"
              width={288}
              height={44}
              className="w-full h-full max-w-[288px] max-h-[44px] hidden xl:block"
            />
            <Image
              src="/Images/blogs-logo-sm.webp"
              alt="_logo"
              width={44}
              height={44}
              className="w-full h-full max-w-[44px] max-h-[44px] xl:hidden"
            />
          </div>
          <div className="flex gap-2 lg:gap-6 justify-start items-start flex-wrap w-fit">
            <p
              onClick={() => setIsActiveId(0)}
              className={`px-3 md:px-4 py-3 md:py-[14px] flex justify-center items-center rounded-[10px] transition-colors duration-300 ease-in-out ${
                isActiveId === 0
                  ? "bg-[#77DFF8] text-[#071B3B]"
                  : "bg-[#071B3B] text-[#DDF2FD]"
              } text-lg md:text-xl cursor-pointer`}
            >
              AI Blogs
            </p>
            <p
              onClick={() => setIsActiveId(1)}
              className={`px-3 md:px-4 py-3 md:py-[14px] flex justify-center items-center rounded-[10px] transition-colors duration-300 ease-in-out ${
                isActiveId === 1
                  ? "bg-[#77DFF8] text-[#071B3B]"
                  : "bg-[#071B3B] text-[#DDF2FD]"
              } text-lg md:text-xl cursor-pointer`}
            >
              Blogs
            </p>
            <p
              onClick={() => setIsActiveId(2)}
              className={`px-3 md:px-4 py-3 md:py-[14px] flex justify-center items-center rounded-[10px] transition-colors duration-300 ease-in-out ${
                isActiveId === 2
                  ? "bg-[#77DFF8] text-[#071B3B]"
                  : "bg-[#071B3B] text-[#DDF2FD]"
              } text-lg md:text-xl cursor-pointer`}
            >
              News
            </p>
            <p
              onClick={() => setIsActiveId(3)}
              className={`px-3 md:px-4 py-3 md:py-[14px] flex justify-center items-center rounded-[10px] transition-colors duration-300 ease-in-out ${
                isActiveId === 3
                  ? "bg-[#77DFF8] text-[#071B3B]"
                  : "bg-[#071B3B] text-[#DDF2FD]"
              } text-lg md:text-xl cursor-pointer`}
            >
              Community
            </p>
          </div>
          <div className="flex justify-center items-center w-fit">
            <Image
              src="/Images/blogs-contact-sm.webp"
              alt="_logo"
              width={60}
              height={60}
              className="w-[60px] h-[60px] max-w-[60px] max-h-[60px] xl:hidden"
            />
            <button className="cursor-pointer hidden xl:block px-3 md:px-6 py-3 md:py-[14px] flex justify-center items-center rounded-[10px] bg-[#77DFF8] text-[#071B3B] text-lg md:text-xl cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>

      </div>
        {isActiveId === 0 && <AIBlogs />}
        {isActiveId === 1 && <Blogs />}
        {isActiveId === 2 && <News />}
        {isActiveId === 3 && <Community />}
    </>
  );
};

export default Future;
