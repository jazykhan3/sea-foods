import Image from "next/image";

const Welcome = () => {
  return (
    <>
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col w-full md:px-12 pb-6 md:pb-12">
        <div className="flex flex-col xl:flex-row w-full justify-center items-center xl:justify-end xl:items-end xl:border-b border-[#262626]">
            <div className="xl:border-r border-[#262626] w-full xl:w-[65%] flex flex-col gap-20 md:gap-[100px] justify-start items-start h-full pt-10 xl:pt-[120px]">
                <div className="px-6 md:px-10 lg:px-12 2xl:pl-40 xl:pr-12 xl:max-w-[797px] flex flex-col gap-8 justify-start items-start">
                    <p className="text-[#666666] poppins-mediumtext-2xl md:text-[30px]leading-[36px] text-left">Welcome to our AI Blogs section</p>
                    <div className="flex flex-col justify-start items-start gap-5 w-full">
                        <p className="text-[#0E46A3] brice text-4xl md:text-5xl lg:text-[70px] text-border text-left">Dive into the Future of Seafood with AI-Generated Insights</p>
                        <p className="text-[#7E7E81] poppins-regular text-lg text-left">Welcome to our AI Blogs section, where cutting-edge technology meets the vibrant world of seafood. This automated blog section leverages advanced AI to bring you the latest insights, trends, and updates in real-time.</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row border-y xl:border-b-[0px] border-[#262626] w-full">
                    <div className="w-full sm:w-[40%] px-6 md:px-10 lg:px-12 2xl:pl-40 xl:pr-10 py-8 sm:py-10 md:py-py-12 lg:py-12 border-class border-[#262626] flex flex-col justify-start items-start gap-4">
                        <p className="text-3xl md:text-[40px] text-[#071B3B] poppins-semibold">1M<span className="text-[#77DFF8]">+</span></p>
                        <p className="max-w-[200px] text-[#071B3B] text-lg poppins-regular">1 Million+ Data Points Analyzed</p>
                    </div>
                    <div className="w-full sm:w-[35%] px-6 md:px-6 py-8 sm:py-10 md:py-py-12 lg:py-12 border-class border-[#262626] flex flex-col justify-start items-start gap-4">
                        <p className="text-3xl md:text-[40px] text-[#071B3B] poppins-semibold">12k<span className="text-[#77DFF8]">+</span></p>
                        <p className="max-w-[200px] text-[#071B3B] text-lg poppins-regular">12,000+ Articles Generated</p>
                    </div>
                    <div className="w-full sm:w-[25%] px-6 md:px-6 py-8 sm:py-10 md:py-py-12 lg:py-12 flex flex-col justify-start items-start gap-4">
                        <p className="text-3xl md:text-[40px] text-[#071B3B] poppins-semibold">95%</p>
                        <p className="max-w-[200px] text-[#071B3B] text-lg poppins-regular">95% User Satisfaction Rate</p>
                    </div>
                </div>
            </div>
            <div className="h-full w-full xl:w-[35%] border-b xl:border-none border-[#262626] xl:px-20 xl:pr-6 xl:py-20 flex flex-row xl:flex-col gap-0 xl:gap-20 sm:justify-center sm:items-center xl:justify-start xl:items-start">
                <div className="hidden md:block py-10 xl:py-0 flex justify-center items-center w-[40%] xl:w-full">
                <Image src='/Images/blogs-ai-boat.webp' alt='_boat' width={564} height={376} className="max-w-[564px] max-h-[376px] w-full h-full"/>
                </div>
                <div className="w-full py-10 xl:py-0 md:w-[60%] xl:w-full flex flex-col gap-8 justify-start items-start px-6 sm:px-10 xl:px-0 md:border-l border-[#262626] xl:border-none">
                    <div className="bg-[#071B3B] border border-[#262626] rounded-[100px] p-[10px] flex">
                        <Image src='/Images/blogs-avt-1.webp' alt='_avatar' width={60} height={60} className="max-w-12 max-h-12 md:max-w-16 md:max-h-16 w-full h-full border border-[#77DFF8] rounded-[100px]"/>
                        <Image src='/Images/blogs-avt-2.webp' alt='_avatar' width={60} height={60} className="-ml-6 max-w-12 max-h-12 md:max-w-16 md:max-h-16 w-full h-full border border-[#77DFF8] rounded-[100px]"/>
                        <Image src='/Images/blogs-avt-3.webp' alt='_avatar' width={60} height={60} className="-ml-6 max-w-12 max-h-12 md:max-w-16 md:max-h-16 w-full h-full border border-[#77DFF8] rounded-[100px]"/>
                        <Image src='/Images/blogs-avt-4.webp' alt='_avatar' width={60} height={60} className="-ml-6 max-w-12 max-h-12 md:max-w-16 md:max-h-16 w-full h-full border border-[#77DFF8] rounded-[100px]"/>
                    </div>
                    <div className="flex flex-col gap-3 justify-start items-start">
                        <p className="text-[#071B3B] text-2xl poppins-medium leading-[36px]">Explore Community</p>
                        <p className="text-[#071B3B] text-lg poppins-regular leading-[27px]">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                    </div>
                    <button className="w-full max-w-[350px] text-left flex justify-center items-center gap-3 px-3 md:px-6 py-4 md:py-5 bg-[#071B3B] rounded-xl text-[#DDF2FD] text-lg poppins-regular">
                    <p>Explore Community Articles</p>
                    <Image src='/Images/blogs-ai-btn-arrow.webp' alt='_arrow' width={24} height={24} className="max-w-6 max-h-6 w-full h-full"/>
                    </button>
                </div>
            </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-start items-start w-full">
            <div className="w-full xl:w-[35%] px-6 md:px-8 2xl:px-12 2xl:pl-40 xl:pr-10 py-8 sm:py-10 md:py-12 border-b border-[#262626] xl:border-none flex flex-col gap-8 justify-start items-start">
                <Image src='/Images/blogs-ai-icon-1.webp' alt='_icon' width={50} height={50} className="max-w-[50px] max-h-[50px] w-full h-full"/>
                <div className="w-full flex flex-wrap gap-6 justify-between items-end">
                    <div className="flex flex-col gap-2 justify-start items-start w-fit">
                        <p className="text-[#071B3B] poppins-medium text-xl">Latest News Updates</p>
                        <p className="text-[#7E7E81] text-lg poppins-regular">Stay Current</p>
                    </div>
                <Image src='/Images/blogs-ai-arrow-icon.webp' alt='_go' width={52} height={52} className="cursor-pointer max-w-[52px] max-h-[52px] w-full h-full"/>
                </div>
                <p className="text-[#071B3B] poppins-regular text-xl">Our AI has produced over 10,000 articles, covering every facet of the seafood industry.</p>
            </div>
            <div className="w-full xl:w-[30%] px-6 md:px-8 2xl:px-12 py-8 sm:py-10 md:py-12 xl:border-x border-[#262626] flex flex-col gap-8 justify-start items-start">
                <Image src='/Images/blogs-ai-icon-2.webp' alt='_icon' width={50} height={50} className="max-w-[50px] max-h-[50px] w-full h-full"/>
                <div className="w-full flex flex-wrap gap-6 justify-between items-end">
                    <div className="flex flex-col gap-2 justify-start items-start w-fit">
                        <p className="text-[#071B3B] poppins-medium text-xl">Data Points Analyzed</p>
                        <p className="text-[#7E7E81] text-lg poppins-regular">Trusted Insights</p>
                    </div>
                <Image src='/Images/blogs-ai-arrow-icon.webp' alt='_go' width={52} height={52} className="cursor-pointer max-w-[52px] max-h-[52px] w-full h-full"/>
                </div>
                <p className="text-[#071B3B] poppins-regular text-xl">Each article is backed by analysis of more than a million data points to ensure accuracy and relevance.</p>
            </div>
            <div className="w-full xl:w-[35%] px-6 md:px-8 2xl:px-12 py-8 sm:py-10 md:py-12 border-t xl:border-none border-[#262626] flex flex-col gap-8 justify-start items-start">
                <Image src='/Images/blogs-ai-icon-2.webp' alt='_icon' width={50} height={50} className="max-w-[50px] max-h-[50px] w-full h-full"/>
                <div className="w-full flex flex-wrap gap-6 justify-between items-end">
                    <div className="flex flex-col gap-2 justify-start items-start w-fit">
                        <p className="text-[#071B3B] poppins-medium text-xl">24/7 Updates</p>
                        <p className="text-[#7E7E81] text-lg poppins-regular">Real Time Updates</p>
                    </div>
                <Image src='/Images/blogs-ai-arrow-icon.webp' alt='_go' width={52} height={52} className="cursor-pointer max-w-[52px] max-h-[52px] w-full h-full"/>
                </div>
                <p className="text-[#071B3B] poppins-regular text-xl">Our AI operates around the clock, ensuring that you get the latest updates whenever you need them.</p>
            </div>
        </div>
      </div>

      </div>
    </>
  );
};

export default Welcome;
