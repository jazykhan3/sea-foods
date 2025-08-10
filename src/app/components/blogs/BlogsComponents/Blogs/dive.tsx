import Image from "next/image";

const Dive = () => {
  return (
    <>
      <div className="px-6 lg:px-24 py-10 2xl:px-56 lg:pt-24 lg:pb-10 flex flex-col w-full gap-10 justify-center items-center max-w-[1192px]">
        <div className="flex flex-col gap-10 md:gap-12 w-full justify-center items-center justify-center items-center">
          <p className="text-[#071B3B] poppins-bold text-4xl md:text-5xl lg:text-[70px] xl:text-[96px] leading-normal xl:leading-[120px] text-center max-w-[1150px]">
            Dive into the World of Seafood
          </p>
          <p className="text-[#121212] text-xl poppins-regular text-center">
            Welcome to our Blogs section, your go-to source for in-depth
            articles, insightful commentary, and the latest updates from the
            world of seafood. Whether you're a seafood enthusiast, a
            professional in the industry, or just curious about the latest
            trends and practices, our blogs offer a wealth of information
            tailored to your interests.
          </p>
        </div>
        <div className="flex flex-col gap-8 justify-start items-start w-full">
          <Image
            src="/Images/blogs-dive-img.webp"
            alt="_bg"
            width={1192}
            height={299}
            className="w-full h-full min-h-[100px] max-h-[299px] max-w-[1192px]"
          />
          <div className="flex flex-col gap-1 lg:gap-2 justify-start items-start w-full">
            <p className="text-[#121212] text-2xl xl:text-4xl poppins-medium md:leading-[42px]">
              Innovations in Seafood Processing
            </p>
            <p className="text-[#717171] poppins-regular text-base lg:text-xl leading-normal">
              4 Min • June 7, 2024
            </p>
          </div>
          <p className="text-[#121212] text-base md:text-lg lg:text-xl poppins-regular text-left">
            Discover the latest technological advancements in seafood
            processing. See how innovation is transforming the industry and
            improving efficiency and product quality.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dive;
