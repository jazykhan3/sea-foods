import Image from "next/image";

const Insight = () => {
  return (
    <>
      {" "}
      <div className="w-full border-t border-[#262626] px-6 md:px-16 xl:px-32 py-10 md:py-20 flex flex-col xl:flex-row gap-10 md:gap-16 justify-center items-center">
        <div className="hidden w-full xl:w-[40%] xl:block flex-justify-center items-center">
          <Image
            src="/Images/blogs-ai-insight-img.webp"
            alt="_bg"
            width={515}
            height={427}
            className="w-full h-full xl:max-w-[515px] xl:max-h-[427px]"
          />
        </div>
        <div className="w-full xl:w-[60%] py-10 flex flex-col gap-12 justify-start items-start">
          <div className="flex flex-col justify-start items-start gap-8 w-full">
            <p className="text-[#071B3B] poppins-semibold text-2xl md:text-[32px]">
              Industry Insights
            </p>
            <p className="text-[#071B3B] poppins-regular text-lg md:text-xl">
              Get the latest information on seafood industry trends and market
              updates.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 md:gap-12 justify-start items-start">
            <div className="flex flex-col gap-1 justify-start items-start">
              <p className="text-[#071B3B] text-lg poppins-regular">Category</p>
              <p className="text-[#8F8989] text-lg poppins-regular">
                Fisheries
              </p>
            </div>
            <div className="flex flex-col gap-1 justify-start items-start">
              <p className="text-[#071B3B] text-lg poppins-regular">
                Publication Date
              </p>
              <p className="text-[#8F8989] text-lg poppins-regular">
                June 10, 2024
              </p>
            </div>
            <div className="flex flex-col gap-1 justify-start items-start">
              <p className="text-[#071B3B] text-lg poppins-regular">Author</p>
              <p className="text-[#8F8989] text-lg poppins-regular">
                Jane Smith
              </p>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center gap-8">
            <div className="flex gap-3 justify-center items-center w-fit">
              <div className="flex gap-1 justify-center items-center bg-[#071B3B] text-[#DDF2FD] text-lg poppins-regular py-2 px-4 rounded-full">
                <Image
                  src="/Images/blogs-ai-heart-icon.webp"
                  alt="_like"
                  width={24}
                  height={24}
                />
                <p>14k</p>
              </div>
              <div className="flex gap-1 justify-center items-center bg-[#071B3B] text-[#DDF2FD] text-lg poppins-regular py-2 px-4 rounded-full">
                <Image
                  src="/Images/blogs-ai-share-icon.webp"
                  alt="_like"
                  width={24}
                  height={24}
                />
                <p>204</p>
              </div>
            </div>
            <button className="text-left flex justify-center items-center gap-3 px-3 md:px-6 py-4 bg-[#071B3B] rounded-xl text-[#DDF2FD] text-lg poppins-regular">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insight;
