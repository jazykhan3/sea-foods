"use client";
import React from "react";
import Image from "next/image";
import Community from "../../Community";

const Categories = () => {
  const [isActiveId, setIsActiveId] = React.useState(0);

  const data = [
    {
      id: 0,
      heading: "Company Announcements",
      description:
        "Get the latest news about Seafood Focus, including new partnerships, product launches, and corporate initiatives.",
      likes: "2.2k",
      shares: "60",
      img: "/Images/blogs-news-cat-img-1.webp",
    },
    {
      id: 1,
      heading: "Industry News",
      description:
        "Stay informed about the broader seafood industry. From regulatory changes to market trends, we cover all the crucial updates that matter to our stakeholders.",
      likes: "6k",
      shares: "92",
      img: "/Images/blogs-news-cat-img-2.webp",
    },
    {
      id: 2,
      heading: "Event Coverage",
      description:
        "Read about our participation in industry events, trade shows, and conferences. Discover highlights and key takeaways from these important gatherings.",
      likes: "10k",
      shares: "124",
      img: "/Images/blogs-news-cat-img-3.webp",
    },
  ];

  const getDataRow = (row: any) => {
    return (
      <div
        key={row.id}
        className="lg:min-h-[426px] flex flex-col gap-8 justify-between items-start w-full lg:max-w-[400px] xl:max-w-[512px] h-full"
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
            <p className="min-h-[56px] text-[#98989A] poppins-regular text-lg line-clamp">
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
            <div className="px-6 md:px-10 xl:px-32 2xl:px-40 pt-10 xl:pt-20 flex flex-col gap-10 lg:gap-12 2xl:gap-16 justify-center items-center w-full">
              <div className="w-full flex flex-wrap gap-8 justify-between items-center">
                <p className="text-[#071B3B] poppins-semibold text-[28px] leading-normal text-left">
                  Similar News
                </p>
                <button className="hidden w-full max-w-[250px] text-left md:flex justify-center items-center gap-3 px-3 md:px-6 py-4 md:py-5 bg-[#071B3B] rounded-xl text-[#DDF2FD] text-lg poppins-regular">
                  <p className="hidden md:block w-fit">View All News</p>
                  <Image
                    src="/Images/blogs-ai-btn-arrow.webp"
                    alt="_arrow"
                    width={24}
                    height={24}
                    className="hidden md:block max-w-6 max-h-6 w-full h-full"
                  />
                </button>
                <Image
                  src="/Images/blogs-new-view-all-arrow.webp"
                  alt="_arrow"
                  width={24}
                  height={24}
                  className="md:hidden cursor-pointer max-w-[52px] max-h-[52px] w-full h-full"
                />
              </div>
              <div className="flex flex-wrap gap-8 lg:gap-16 2xl:gap-12 justify-start items-center w-full border-b border-[#262626] pb-10 2xl:pb-20">
                {data?.map((row: any) => getDataRow(row))}
              </div>
            </div>
            <div className="px-6 md:px-10 xl:px-32 2xl:px-40 pt-10 xl:pt-20 flex flex-col gap-10 lg:gap-12 2xl:gap-16 justify-center items-center w-full">
              <div className="w-full flex flex-wrap gap-8 justify-between items-center">
                <p className="text-[#071B3B] poppins-semibold text-[28px] leading-normal text-left">
                  Trending News
                </p>
                <button className="hidden w-full max-w-[250px] text-left md:flex justify-center items-center gap-3 px-3 md:px-6 py-4 md:py-5 bg-[#071B3B] rounded-xl text-[#DDF2FD] text-lg poppins-regular">
                  <p className="hidden md:block w-fit">View All News</p>
                  <Image
                    src="/Images/blogs-ai-btn-arrow.webp"
                    alt="_arrow"
                    width={24}
                    height={24}
                    className="hidden md:block max-w-6 max-h-6 w-full h-full"
                  />
                </button>
                <Image
                  src="/Images/blogs-new-view-all-arrow.webp"
                  alt="_arrow"
                  width={24}
                  height={24}
                  className="md:hidden cursor-pointer max-w-[52px] max-h-[52px] w-full h-full"
                />
              </div>
              <div className="flex flex-wrap gap-8 lg:gap-16 2xl:gap-12 justify-start items-center w-full border-b border-[#262626] pb-10 2xl:pb-20">
                {data?.map((row: any) => getDataRow(row))}
              </div>
            </div>
            <div className="px-6 md:px-10 xl:px-32 2xl:px-40 pt-10 xl:pt-20 flex flex-col gap-10 lg:gap-12 2xl:gap-16 justify-center items-center w-full">
              <div className="w-full flex flex-wrap gap-8 justify-between items-center">
                <p className="text-[#071B3B] poppins-semibold text-[28px] leading-normal text-left">
                  Trending News
                </p>
                <button className="hidden w-full max-w-[250px] text-left md:flex justify-center items-center gap-3 px-3 md:px-6 py-4 md:py-5 bg-[#071B3B] rounded-xl text-[#DDF2FD] text-lg poppins-regular">
                  <p className="hidden md:block w-fit">View All News</p>
                  <Image
                    src="/Images/blogs-ai-btn-arrow.webp"
                    alt="_arrow"
                    width={24}
                    height={24}
                    className="hidden md:block max-w-6 max-h-6 w-full h-full"
                  />
                </button>
                <Image
                  src="/Images/blogs-new-view-all-arrow.webp"
                  alt="_arrow"
                  width={24}
                  height={24}
                  className="md:hidden cursor-pointer max-w-[52px] max-h-[52px] w-full h-full"
                />
              </div>
              <div className="flex flex-wrap gap-8 lg:gap-16 2xl:gap-12 justify-start items-center w-full pb-10 2xl:pb-20">
                {data?.map((row: any) => getDataRow(row))}
              </div>
            </div>
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
