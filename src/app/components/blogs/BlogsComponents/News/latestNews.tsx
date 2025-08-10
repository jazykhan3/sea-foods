import Image from "next/image";

const LatestNews = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full py-10 xl:py-16 bg-[url('/Images/blogs-latest-news-img.webp')] bg-cover bg-center min-h-[300px] md:min-h-[350px] lg:min-h-[380px] xl:min-h-[450px] 2xl:min-h-[598px] flex justify-center items-end px-6 md:px-10 xl:px-40 text-white text-2xl md:text-4xl xl:text-6xl 2xl:text-[64px] poppins-semibold leading-normal text-center">
          <p>Stay Informed with the Latest News from Seafood Focus</p>
        </div>
        <div className="flex flex-col xl:flex-row justify-start items-start w-full">
          <div className="flex flex-col justfiy-start items-start w-full xl:w-[65%]">
            <div className="px-6 md:px-10 xl:pl-40 xl:pr-20 py-10 lg:py-20 flex flex-col gap-4 justify-start items-start w-full border-b border-[#262626]">
              <p className="max-w-[996px] text-[#071B3B] poppins-medium text-xl md:text-[28px] leading-normal text-left">
                Introduction
              </p>
              <p className="text-[#071B3B] max-w-[996px] poppins-regular text-base 2xl:text-lg text-left">
                Welcome to our News section, your primary source for all the
                latest happenings and important updates in the world of Seafood
                Focus. We keep you informed about the key events, new
                developments, and significant milestones in our company and the
                seafood industry.
              </p>
            </div>
            <div className="px-6 md:px-10 xl:pl-40 xl:pr-20 py-10 lg:py-20 flex flex-col justify-start items-start gap-8 w-full border-b border-[#262626]">
              <div className="max-w-[996px] flex flex-col gap-6 justify-start items-start w-full">
                <p className="text-[#071B3B] poppins-medium text-xl md:text-[28px] leading-normal text-left">
                  Latest News and Updates
                </p>
                <p className="text-[#071B3B] poppins-regular text-base 2xl:text-lg leading-normal text-left">
                  Stay on top of the most recent news with our timely updates.
                  Here, you'll find everything from major announcements to
                  noteworthy events that are shaping the seafood industry.
                </p>
                <p className="text-[#071B3B] poppins-regular text-base 2xl:text-lg leading-normal text-left">
                  Stay informed and connected with the Seafood Focus News
                  section. We bring you the most important news, insightful
                  analysis, and comprehensive coverage of the events that matter
                  most in the seafood industry.
                </p>
              </div>
              <div className="flex flex-col gap-6 justify-start items-start w-full">
                <p className="text-[#071B3B] poppins-medium text-xl md:text-[28px] leading-normal text-left">
                  Featured Stories
                </p>
                <p className="text-[#071B3B] poppins-regular text-base 2xl:text-lg leading-normal text-left">
                  Dive deeper into featured stories that provide an in-depth
                  look at significant topics and trends in the seafood sector.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justfiy-start items-start w-full xl:w-[35%]">
            <div className="px-6 md:px-10 2xl:px-20 py-8 md:py-12 w-full flex flex-wrap justify-start items-start gap-3 border-b border-[#262626] xl:border-l">
              <div className="flex gap-1 justify-center items-center bg-[#071B3B] text-[#DDF2FD] text-lg poppins-regular py-2 px-4 rounded-full">
                <Image
                  src="/Images/blogs-ai-heart-icon.webp"
                  alt="_like"
                  width={24}
                  height={24}
                />
                <p>24.5k</p>
              </div>
              <div className="flex gap-1 justify-center items-center bg-[#071B3B] text-[#DDF2FD] text-lg poppins-regular py-2 px-4 rounded-full">
                <Image
                  src="/Images/blogs-divein-list-eye.webp"
                  alt="_like"
                  width={24}
                  height={24}
                />
                <p>50k</p>
              </div>
              <div className="flex gap-1 justify-center items-center bg-[#071B3B] text-[#DDF2FD] text-lg poppins-regular py-2 px-4 rounded-full">
                <Image
                  src="/Images/blogs-ai-share-icon.webp"
                  alt="_like"
                  width={24}
                  height={24}
                />
                <p>206</p>
              </div>
            </div>
            <div className="w-full px-6 md:px-10 lg:px-16 2xl:px-20 py-8 md:py-12 xl:py-20 flex flex-col gap-10 md:gap-12 justify-start items-start w-full xl:border-l border-[#262626]">
              <div className="flex flex-col gap-5 justify-start items-start w-full">
                <div className="flex flex-col gap-5 sm:flex-row justify-start items-start w-full">
                  <div className="flex flex-col gap-2 justify-start items-start w-full lg:w-[50%]">
                    <p className="text-[#071B3B] text-base 2xl:text-lg poppins-semibold leading-normal">
                      Publication Date
                    </p>
                    <p className="text-[#6A5E5E] text-base poppins-medium leading-normal">
                      October 15, 2024
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start w-full lg:w-[50%]">
                    <p className="text-[#071B3B] text-base 2xl:text-lg poppins-semibold leading-normal">
                      Category
                    </p>
                    <p className="text-[#6A5E5E] text-base poppins-medium leading-normal">
                      Company News
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-5 sm:flex-row justify-start items-start w-full">
                  <div className="flex flex-col gap-2 justify-start items-start w-full lg:w-[50%]">
                    <p className="text-[#071B3B] text-base 2xl:text-lg poppins-semibold leading-normal">
                      Reading Time
                    </p>
                    <p className="text-[#6A5E5E] text-base poppins-medium leading-normal">
                      10 Min
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start w-full lg:w-[50%]">
                    <p className="text-[#071B3B] text-base 2xl:text-lg poppins-semibold leading-normal">
                      Author Name
                    </p>
                    <p className="text-[#6A5E5E] text-base poppins-medium leading-normal">
                      Dr. Emily Walker
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start w-full gap-4">
                <p className="text-[#071B3B] text-base 2xl:text-lg poppins-semibold leading-normal">
                  Table of Contents
                </p>
                <div className="flex flex-col gap-4 md:gap-5 justify-start items-start p-5 rounded-lg bg-[#071B3B] max-w-[350px] xl:max-w-[440px] w-full">
                  <p className="text-white poppins-regular text-base 2xl:text-lg">
                    • Introduction
                  </p>
                  <p className="text-white poppins-regular text-base 2xl:text-lg">
                    • Industry
                  </p>
                  <p className="text-white poppins-regular text-base 2xl:text-lg">
                    • Events
                  </p>
                  <p className="text-white poppins-regular text-base 2xl:text-lg">
                    • Sustainability
                  </p>
                  <p className="text-white poppins-regular text-base 2xl:text-lg">
                    • Innovation
                  </p>
                  <p className="text-white poppins-regular text-base 2xl:text-lg">
                    • Automation
                  </p>
                  <p className="text-white poppins-regular text-base 2xl:text-lg">
                    • Insightful Analysis
                  </p>
                  <p className="text-white poppins-regular text-base 2xl:text-lg">
                    • The Future of Seafood Focus
                  </p>
                  <p className="text-white poppins-regular text-base 2xl:text-lg">
                    • Conclusion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
