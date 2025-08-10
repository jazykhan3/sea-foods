"use client";
import Image from "next/image";
import React from "react";
import Community from "../../Community";

const data = [
  {
    id: 0,
    heading: "Sustainability Practices",
    description:
      "Learn about our commitment to sustainable fishing and environmentally friendly practices.",
    likes: "2.2k",
    shares: "60",
    img: "/Images/category-img-1.webp",
  },
  {
    id: 1,
    heading: "Recipes and Tips",
    description:
      "Discover new recipes and tips for cooking and enjoying seafood.",
    likes: "6kk",
    shares: "92",
    img: "/Images/category-img-2.webp",
  },
  {
    id: 2,
    heading: "Fresh Seafood",
    description: "Explore content focused on our fresh seafood offerings.",
    likes: "7k",
    shares: "73",
    img: "/Images/category-img-3.webp",
  },
];
const Categories = () => {
  const [isActiveId, setIsActiveId] = React.useState(0);

  const getDataRow = (row: any) => {
    return (
      <div
        key={row.id}
        className="lg:mx-4 my-10 lg:mt-16 lg:min-h-[426px] flex flex-col gap-8 justify-between items-start w-full lg:max-w-[400px] xl:max-w-[512px] h-full"
      >
        <Image
          src={row.img}
          alt="_bg"
          width={512}
          height={222}
          className="rounded-lg xl:max-w-[512px] xl:max-h-[222] w-full h-full"
        />
        <div className="w-full h-full gap-3 flex flex-col justify-between item-start">
          <div className="flex flex-col justify-start items-start gap-3 w-full">
            <p className="text-[#071B3B] poppins-semibold text-lg w-full truncate">
              {row.heading}
            </p>
            <p className="min-h-[56px] text-[#071B3B] poppins-regular text-lg line-clamp">
              {row.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-between items-center w-full">
            <div className="flex gap-3 justify-center items-center w-fit">
              <div className="flex gap-1 justify-center items-center bg-[#071B3B] text-[#DDF2FD] text-lg poppins-regular py-2 px-4 rounded-full">
                <Image
                  src="/Images/category-gray-heart.webp"
                  alt="_like"
                  width={24}
                  height={24}
                />
                <p>{row.likes}</p>
              </div>
              <div className="flex gap-1 justify-center items-center bg-[#071B3B] text-[#DDF2FD] text-lg poppins-regular py-2 px-4 rounded-full">
                <Image
                  src="/Images/blogs-ai-share-icon.webp"
                  alt="_like"
                  width={24}
                  height={24}
                />
                <p>{row.shares}</p>
              </div>
            </div>
            <button className="w-full xl:max-w-[277px] text-left flex justify-center items-center gap-3 px-3 md:px-6 py-4 md:py-5 bg-[#071B3B] rounded-xl text-[#DDF2FD] text-lg poppins-regular">
              <p>Read More</p>
              <Image
                src="/Images/blogs-ai-btn-arrow.webp"
                alt="_arrow"
                width={24}
                height={24}
                className="max-w-6 max-h-6 w-full h-full"
              />
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex gap-2 lg:gap-6 justify-start lg:justify-center items-center flex-wrap w-full bg-[#071B3B] px-6 lg:px-24 py-5">
          <p
            onClick={() => setIsActiveId(0)}
            className={`px-3 md:px-4 py-3 md:py-[14px] flex justify-center items-center rounded-[10px] transition-colors duration-300 ease-in-out ${
              isActiveId === 0
                ? "bg-[#77DFF8] text-[#071B3B]"
                : "bg-[#071B3B] text-[#DDF2FD]"
            } text-lg md:text-xl cursor-pointer`}
          >
            Trending
          </p>
          <p
            onClick={() => setIsActiveId(1)}
            className={`px-3 md:px-4 py-3 md:py-[14px] flex justify-center items-center rounded-[10px] transition-colors duration-300 ease-in-out ${
              isActiveId === 1
                ? "bg-[#77DFF8] text-[#071B3B]"
                : "bg-[#071B3B] text-[#DDF2FD]"
            } text-lg md:text-xl cursor-pointer`}
          >
            Popular
          </p>
          <p
            onClick={() => setIsActiveId(2)}
            className={`px-3 md:px-4 py-3 md:py-[14px] flex justify-center items-center rounded-[10px] transition-colors duration-300 ease-in-out ${
              isActiveId === 2
                ? "bg-[#77DFF8] text-[#071B3B]"
                : "bg-[#071B3B] text-[#DDF2FD]"
            } text-lg md:text-xl cursor-pointer`}
          >
            Highest Rated
          </p>
          <p
            onClick={() => setIsActiveId(3)}
            className={`px-3 md:px-4 py-3 md:py-[14px] flex justify-center items-center rounded-[10px] transition-colors duration-300 ease-in-out ${
              isActiveId === 3
                ? "bg-[#77DFF8] text-[#071B3B]"
                : "bg-[#071B3B] text-[#DDF2FD]"
            } text-lg md:text-xl cursor-pointer`}
          >
            Latest
          </p>
          <p
            onClick={() => setIsActiveId(4)}
            className={`px-3 md:px-4 py-3 md:py-[14px] flex justify-center items-center rounded-[10px] transition-colors duration-300 ease-in-out ${
              isActiveId === 4
                ? "bg-[#77DFF8] text-[#071B3B]"
                : "bg-[#071B3B] text-[#DDF2FD]"
            } text-lg md:text-xl cursor-pointer`}
          >
            Oldest
          </p>
        </div>
        {isActiveId === 0 ? (
          <>
            <div className="flex flex-col lg:flex-row lg:flex-wrap px-6 md:px-16 xl:px-32 w-full justify-center items-center">
              {Array.from({ length: 3 }, (_, i) =>
                data?.map((row: any, index: number) => {
                  const isLastRow = i === 2 && index === data.length - 1;
                  return (
                    <div
                      key={`row-${i}-${index}`}
                      className={` w-full lg:w-auto ${
                        !isLastRow ? "lg:border-b lg:border-[#071B3B]" : ""
                      }`}
                    >
                      {getDataRow(row)}
                    </div>
                  );
                })
              )}
            </div>
            <div className="-mt-3 h-4 bg-[#DDEEFF] w-full" />
            <div className="flex justify-center items-center w-full py-8 px-6 lg:px-24">
              <button className="rounded-[12px] border-[5px] border-[#DDF2FD] drop-shadow-lg w-full max-w-[200px] lg:max-w-[277px] text-left flex justify-center items-center gap-3 px-3 md:px-6 py-4 md:py-5 bg-[#071B3B] rounded-xl text-[#DDF2FD] text-lg poppins-regular">
                <p>Load More</p>
              </button>
            </div>
          </>
        ) : (
          <Community />
        )}
      </div>
    </>
  );
};

export default Categories;
