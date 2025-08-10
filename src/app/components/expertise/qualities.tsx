"use client";
import Image from "next/image";
import React from "react";

const Qualities = () => {
  const wheelRef = React.useRef<HTMLDivElement>(null);
  const [isRotation, setIsRotation] = React.useState(false);

  // Use the IntersectionObserver API to detect when the Navbar is in view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Show arrow when Navbar is out of view
        setIsRotation(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (wheelRef.current) {
      observer.observe(wheelRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (wheelRef.current) {
        observer.unobserve(wheelRef.current);
      }
    };
  }, []);
  return (
    <>
      <div
        ref={wheelRef}
        className="w-full relative overflow-hidden flex justify-center items-center bg-[url(/Images/experties-qualities-bg.webp)] bg-cover bg-center py-24 lg:pt-[150px] lg:pb-[212px] px-6 lg:px-10 lg:px-[150px] 2xl:px-[329px]"
      >
        <Image
          src="/Images/qualities-wheel.webp"
          alt="_wheel"
          width={743}
          height={693}
          className={`hidden xl:block transition-transform duration-700 ease-in-out ${
            isRotation ? "rotate-180" : "rotate-0"
          } xl:-left-[185px] 2xl:-left-[279px] absolute min-w-[400px] max-w-[400px] w-[400px] 2xl:min-w-[600px] 2xl:max-w-[600px] 2xl:w-[600px] lg:max-w-[743px] h-auto`}
        />

        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="px-8 md:px-16 py-8 md:py-16 flex flex-col gap-6 w-full lg:w-[50%] bg-[url(/Images/quality-bg-1.webp)] bg-cover bg-center flex flex-col gap-10 md:gap-20 justify-start items-start h-fit lg:h-[550px] xl:h-[450px] w-full">
              <p className="text-[#DDF2FD] poppins-bold text-xl ">
                Commercial Expertise
              </p>
              <p className="text-[#DDF2FD] poppins-regular text-lg leading-[27px] tracking-[3%]">
                Our innovative online platform streamlines ordering and customer
                interaction, providing a seamless experience for our clients.
                <br />
                Purchasing Forces: Leveraging strong relationships with
                suppliers to secure the best prices and freshest products for
                our clients.
              </p>
            </div>
            <div className="px-8 md:px-16 py-8 md:py-16 flex flex-col gap-6 w-full lg:w-[50%] bg-[url(/Images/quality-bg-2.webp)] bg-cover bg-center flex flex-col gap-10 md:gap-20 justify-start items-start h-fit lg:h-[550px] xl:h-[450px] w-full">
              <p className="text-[#DDF2FD] poppins-bold text-xl ">Logistics</p>
              <p className="text-[#DDF2FD] poppins-regular text-lg leading-[27px] tracking-[3%]">
                Utilizing an advanced logistics network to ensure timely and
                efficient delivery of seafood products, maintaining freshness
                and quality.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="px-8 md:px-16 py-8 md:py-16 flex flex-col gap-6 w-full lg:w-[50%] bg-[url(/Images/quality-bg-3.webp)] bg-cover bg-center flex flex-col gap-10 md:gap-20 justify-start items-start h-fit lg:h-[550px] xl:h-[450px] w-full">
              <p className="text-[#DDF2FD] poppins-bold text-xl ">
                Infrastructure and Processes
              </p>
              <p className="text-[#DDF2FD] poppins-regular text-lg leading-[27px] tracking-[3%]">
                We have invested heavily in state-of-the-art infrastructure and
                streamlined processes to handle and process seafood products
                efficiently. Our facilities are equipped with the latest
                technology to ensure that our seafood retains its premium
                quality from start to finish.
              </p>
            </div>
            <div className="px-8 md:px-16 py-8 md:py-16 flex flex-col gap-6 w-full lg:w-[50%] bg-[url(/Images/quality-bg-4.webp)] bg-cover bg-center flex flex-col gap-10 md:gap-20 justify-start items-start h-fit lg:h-[550px] xl:h-[450px] w-full">
              <p className="text-[#DDF2FD] poppins-bold text-xl ">
                Quality Control
              </p>
              <p className="text-[#DDF2FD] poppins-regular text-lg leading-[27px] tracking-[3%]">
                Our stringent quality assurance processes at every stage, from
                sourcing to delivery, ensure the superior quality of our seafood
                products.
              </p>
            </div>
          </div>
        </div>

        <Image
          src="/Images/qualities-wheel.webp"
          alt="_wheel"
          width={743}
          height={693}
          className={`hidden xl:block transition-transform duration-700 ease-in-out ${
            isRotation ? "-rotate-90" : "rotate-0"
          } clip-path-inset -right-[199px] 2xl:-right-[300px] absolute min-w-[400px] max-w-[400px] w-[400px] 2xl:min-w-[600px] 2xl:max-w-[600px] 2xl:w-[600px] lg:max-w-[743px] h-auto`}
        />
      </div>
    </>
  );
};

export default Qualities;
