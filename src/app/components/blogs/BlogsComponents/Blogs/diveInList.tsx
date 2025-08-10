import Image from "next/image";

const DiveInList = () => {
  const data: any = [
    {
      id: 0,
      heading: "Health Benefits of Seafood",
      date: "4 Min • June 7, 2024",
      img: "/Images/blogs-dive-in-list-img-1.webp",
    },
    {
      id: 1,
      heading: "Health Benefits of Seafood",
      date: "4 Min • June 7, 2024",
      img: "/Images/blogs-dive-in-list-img-2.webp",
    },
    {
      id: 2,
      heading: "Health Benefits of Seafood",
      date: "4 Min • June 7, 2024",
      img: "/Images/blogs-dive-in-list-img-1.webp",
    },
    {
      id: 3,
      heading: "Health Benefits of Seafood",
      date: "4 Min • June 7, 2024",
      img: "/Images/blogs-dive-in-list-img-2.webp",
    },
    {
      id: 4,
      heading: "Health Benefits of Seafood",
      date: "4 Min • June 7, 2024",
      img: "/Images/blogs-dive-in-list-img-1.webp",
    },
    {
      id: 5,
      heading: "Health Benefits of Seafood",
      date: "4 Min • June 7, 2024",
      img: "/Images/blogs-dive-in-list-img-2.webp",
    },
    {
      id: 6,
      heading: "Health Benefits of Seafood",
      date: "4 Min • June 7, 2024",
      img: "/Images/blogs-dive-in-list-img-1.webp",
    },
    {
      id: 7,
      heading: "Health Benefits of Seafood",
      date: "4 Min • June 7, 2024",
      img: "/Images/blogs-dive-in-list-img-2.webp",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full gap-10 justify-center items-center pb-10 lg:pb-20">
        <div className="flex flex-col gap-4 md:gap-8 w-full justify-center items-center px-6 lg:px-24 pt-10 lg:pt-20 max-w-[1192px]">
          {data?.map((item: any, index: number) => (
            <div
              key={item.id}
              className={`flex flex-wrap md:flex-no-wrap gap-8 md:gap-10 justify-start items-center w-full py-6 md:py-8 border-t border-[#B8B8B8]`}
            >
              <Image
                src={item.img}
                alt="_bg"
                width={261}
                height={200}
                className="w-full h-full sm:max-w-[261px] max-h-[180px] sm:max-h-[200px] rounded-lg lg:rounded-none"
              />
              <div className="flex flex-col gap-1 justify-start items-start">
                <p className="text-[#121212] text-xl md:text-2xl 2xl:text-3xl poppins-medium md:leading-[42px]">
                  {item.heading}
                </p>
                <p className="text-[#717171] poppins-regular text-lg md:text-xl leading-normal">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full py-8 px-6 lg:px-24">
          <button className="rounded-[12px] border-[5px] border-[#DDF2FD] drop-shadow-lg w-full max-w-[200px] lg:max-w-[277px] text-left flex justify-center items-center gap-3 px-3 md:px-6 py-4 md:py-5 bg-[#071B3B] rounded-xl text-[#DDF2FD] text-lg poppins-regular">
            <p>Load More</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default DiveInList;
