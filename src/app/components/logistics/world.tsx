import Image from "next/image";

const World = () => {
  return (
    <>
      <div className="px-6 lg:px-24 py-10 md:pt-40 md:pb-16 flex flex-col justify-center items-center gap-10 md:gap-32 w-full bg-[#DDEEFF] lg:bg-[url('/Images/logistics-world-bg.webp')] bg-cover bg-center">
        <p className="uppercase text-center whitefish text-border font-bold text-[#0E46A3] text-6xl lg:text-[90px] font-medium w-fit">
          From Senegal to Worldwide
        </p>

        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-8 justify-center items-center w-full">
            <div className="flex justify-center items-center w-full lg:w-[30%]">
              <Image
                // src="/Images/logistics-world-map-img.webp"
                src="/Images/logistics-world-map-img-2.gif"
                alt="_map"
                width={691}
                height={676}
                className="max-w-[200px] max-h-[200px] md:max-w-[300px] md:max-h-[300px] lg:max-w-[691px] lg:max-h-[676px] w-full h-full"
              />
            </div>
            <div className="flex justify-center items-center w-full lg:w-[30%]">
              <Image
                src="/Images/logistics-world-arrow-img.webp"
                alt="_arrow"
                width={365}
                height={365}
                className="rotate-90 sm:rotate-0 max-w-[150px] max-h-[150px] md:max-w-[200px] md:max-h-[200px] lg:max-w-[365px] lg:max-h-[365px] w-full h-full"
              />
            </div>
            <div className="flex justify-center items-center w-full lg:w-[30%]">
              <Image
                src="/Videos/earth-video.gif"
                alt="_earth_gif"
                width={210}
                height={210}
                className="max-w-[170px] max-h-[170px] md:max-w-[210px] md:max-h-[210px] lg:max-w-[425px] lg:max-h-[429px] w-full h-full"
              />
            </div>
          </div>
          <p className="capitalize text-[#071B3B] font-bold text-lg md:text-[22px] leading-[30px] md:leading-[35px] text-center max-w-[1377px] poppins-bold">
            Seafood Focus is proud to bring the finest seafood from the vibrant
            waters of Senegal to customers all around the globe. Our base in
            Senegal, West Africa, allows us to source the freshest and highest
            quality seafood, ensuring that our products meet the highest
            standards of taste and sustainability.
            <br />
            We are committed to expanding our reach and sharing the rich seafood
            heritage of Senegal with the world. Our future plans include
            establishing a subsidiary in France to further enhance our
            distribution network and provide even more seamless service to our
            European customers.
          </p>
        </div>
      </div>
    </>
  );
};

export default World;
