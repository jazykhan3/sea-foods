'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define an interface for the props
interface data {
  title?: string;
  description?: string;
}
interface AboutProps {
  data: data;
}

const Variety: React.FC<AboutProps> = ({ data }) => {
  const varietyData = [
    "Our Range of Fish",
    "Our Shellfish",
    "Crustaceans",
    "Cephalopods",
  ];
  const [viewVisible, setViewVisible] = React.useState<any>({});

  const getVarietyData = (title: string, index:number) => {

    const scrollToRight = () => {
      const container = document.getElementById(`${index}fishItems`);
      if (container) {
        container.scrollBy({ left: 300, behavior: 'smooth' });
      }
    };

    const toggleView = (idx:any) => {
      setViewVisible((prev:any) => ({
        ...prev,
        [idx]: !prev[idx], // Toggle visibility for the given index
      }));
    };

    return (
      <div key={title} className="flex flex-col gap-10 lg:gap-16 justify-center items-center w-full overflow-hidden">
        <div className="bg-[#071B3B] px-6 py-2 md:py-4 lg:py-[18px] flex justify-between items-center w-full gap-6 flex-wrap">
          <p className="text-[#DDF2FD] poppins-bold text-xl md:text-[22px]">
            {title}
          </p>
          <div className="flex gap-5 justify-center items-center">
            <Image
            onClick={() => toggleView(index)}
              src="/Images/fresh-variety-action.webp"
              alt="_action"
              width={24}
              height={24}
              className="w-6 h-6 cursor-pointer"
            />
             {viewVisible[index] && ( // Conditionally render the view
            <Link className="absolute mt-[74px] -ml-[129px] px-6 py-3 rounded-md bg-white shadow-md cursor-pointer" href={data.title == 'Wide Variety of Fresh Seafood' ? '/BuyFreshProducts' : '/BuyFrozenProducts'}><div
              id={`${index}View`}
            >
              View all
            </div>
            </Link>
          )}
            <Image
            onClick={scrollToRight}
              src="/Images/fresh-variety-action-go.webp"
              alt="_action"
              width={42}
              height={42}
              className="w-10 h-10 2xl:w-12 2xl:h-12 cursor-pointer hiiii"
            />
          </div>
        </div>
        <div id={`${index}fishItems`} className="noscrollbars overflow-x-scroll z-[1] flex justify-start items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 w-full overflow-hidden">
          <div className="bg-[url('/Images/fresh-variety-img-1.webp')] bg-cover bg-center flex flex-col justify-end items-center w-full max-w-[200px] max-h-[170px] sm:max-w-[300px] sm:max-h-[270px] md:max-w-[500px] md:max-h-[460px] 2xl:max-w-[578px] 2xl:max-h-[481px] min-w-[200px] min-h-[170px] sm:min-w-[300px] sm:min-h-[270px] md:min-w-[500px] md:min-h-[460px] 2xl:min-w-[578px] 2xl:min-h-[481px] w-full h-full p-4 md:p-6 lg:p-8 xl:px-16 xl:py-10 2xl:py-20">
            <p className="text-center text-white poppins-bold text-lg lg:text-xl 2xl:text-[30px]">
              Sardine
            </p>
            <p className="hidden md:block text-center text-white text-base xl:text-lg max-w-[515px]">
              Sardines are small, oily fish known for their rich flavor and high
              nutritional value. They are packed with omega-3 fatty acids,
              calcium, and vitamin D, making them an excellent choice for a
              healthy diet.
            </p>
            <p className="md:hidden text-center text-white text-base xl:text-lg max-w-[515px]">
              Sardines are small, oily fish known for their rich flavor and high
              nutritional value.
            </p>
          </div>
          <div className="bg-[url('/Images/fresh-variety-img-2.webp')] bg-cover bg-center flex flex-col justify-end items-center w-full max-w-[200px] max-h-[170px] sm:max-w-[300px] sm:max-h-[270px] md:max-w-[500px] md:max-h-[460px] 2xl:max-w-[578px] 2xl:max-h-[481px] min-w-[200px] min-h-[170px] sm:min-w-[300px] sm:min-h-[270px] md:min-w-[500px] md:min-h-[460px] 2xl:min-w-[578px] 2xl:min-h-[481px] w-full h-full p-4 md:p-6 lg:p-8 xl:px-16 xl:py-10 2xl:py-20">
            <p className="text-center text-white poppins-bold text-lg lg:text-xl 2xl:text-[30px]">
              ShelFish
            </p>
            <p className="hidden md:block text-center text-white text-base xl:text-lg max-w-[515px]">
              Shelfish, often referred to as the "poor man's lobster," is prized
              for its firm, sweet, and dense white flesh that closely resembles
              lobster meat. This deep-sea fish is known for its unique
              appearance, with a large head and mouth filled with sharp teeth.
            </p>
            <p className="md:hidden text-center text-white text-base xl:text-lg max-w-[515px]">
              Shelfish, often referred to as the "poor man's lobster,"
            </p>
          </div>
          <div className="bg-[url('/Images/fresh-variety-img-3.webp')] bg-cover bg-center flex flex-col justify-end items-center w-full max-w-[200px] max-h-[170px] sm:max-w-[300px] sm:max-h-[270px] md:max-w-[500px] md:max-h-[460px] 2xl:max-w-[578px] 2xl:max-h-[481px] min-w-[200px] min-h-[170px] sm:min-w-[300px] sm:min-h-[270px] md:min-w-[500px] md:min-h-[460px] 2xl:min-w-[578px] 2xl:min-h-[481px] w-full h-full p-4 md:p-6 lg:p-8 xl:px-16 xl:py-10 2xl:py-20">
            <p className="text-center text-white poppins-bold text-lg lg:text-xl 2xl:text-[30px]">
              MonkFish
            </p>
            <p className="hidden md:block text-center text-white text-base xl:text-lg max-w-[515px]">
              Monkfish, often referred to as the "poor man's lobster," is prized
              for its firm, sweet, and dense white flesh that closely resembles
              lobster meat. This deep-sea fish is known for its unique
              appearance, with a large head and mouth filled with sharp teeth.
            </p>
            <p className="md:hidden text-center text-white text-base xl:text-lg max-w-[515px]">
              Monkfish, often referred to as the "poor man's lobster,"
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="bg-[#DDEEFF] flex flex-col justify-center items-center w-full py-10 md:py-20">
        <div className="flex justify-between items-start w-full">
          <Image
            src="/Images/fresh-variety-can.webp"
            alt="_can"
            width={335}
            height={512}
            className="-mt-[150px] hidden xl:block absolute max-w-[335px] max-h-[512px]"
          />
          <Image
            src="/Images/fresh-variety-crab.webp"
            alt="_can"
            width={1100}
            height={1500}
            className="-mt-[300px] right-0 hidden xl:block absolute max-w-[1100px] max-h-[1500px]"
          />
        </div>
        <div className="flex flex-col gap-20 2xl:gap-48 justify-center items-center w-full px-6 md:px-8 lg:px-24 2xl:px-48">
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 2xl:gap-12 justify-center items-center w-full">
            <p className="uppercase text-center whitefish text-border font-bold text-[#0E46A3] text-5xl xl:text-6xl 2xl:text-[100px] leading-[40px] font-medium w-fit">
              {data.title}
            </p>
            <p className="max-w-[600px] 2xl:max-w-[1201px] text-[#121212] poppins-regular text-base md:text-lg xl:text-[26px] text-center">
              {data.description}
            </p>
          </div>
          <div className="z-[1] flex flex-col gap-10 xl:gap-20 justify-center items-center w-full overflow-hidden w-full">
            {varietyData?.map((varietyTitle: string, index:number) =>
              getVarietyData(varietyTitle, index)
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Variety;
