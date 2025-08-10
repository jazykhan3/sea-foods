import Image from "next/image";

const LogisticsHero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full bg-[#DDEFFF]">
        <div className="relative w-full flex justify-center items-center px-6 lg:px-10 py-48 md:py-80">
          {/* Video as background */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/Videos/logistics-video.mp4" // Replace with your video path
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Content on top of the video */}
          <p className="relative text-[#0E46A3] brice text-[40px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[50px] sm:leading-[90px] md:leading-[110px] lg:leading-[140px] max-w-[1549px] text-center text-border sm:text-border font-bold tracking-[4px] md:tracking-[8px]">
            LOGISTICS
          </p>
        </div>
        <Image
          src="/Images/who-wave.svg"
          alt="_wave"
          className="z-[1] w-full h-auto -mt-[16%]"
          width={2100}
          height={467}
        />
      </div>
    </>
  );
};

export default LogisticsHero;
