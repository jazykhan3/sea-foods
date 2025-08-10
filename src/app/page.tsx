import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col justify-between items-center gap-10 xl:gap-20 2xl:[240px] min-h-screen w-full h-full px-6 md:px-8 lg:px-24 py-6 md:py-10 xl:pt-[44px] xl:pb-[74px]">
        {/* Video as background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Videos/landing-video.mp4" // Replace with your video path
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Content on top of the video */}
        <Image
          src="/Images/Logo.svg"
          alt="_logo"
          className="relative cursor-pointer w-full h-full max-w-[347px] max-h-20"
          width={347}
          height={80}
        />
        <div className="relative flex flex-col gap-4 md:gap-6 justify-center items-center max-w-[790px]">
          <p className="text-center text-white brice text-5xl md:text-6xl xl:text-50px 2xl:text-[80px]">
            Seafood Focus
          </p>
          <p className="text-center text-white poppins-bold text-md md:text-lg lg:text-[22px]">
            Experience the Freshness of the Ocean
          </p>
          <p className="text-center font-poppins text-white font-normal leading-[30px] tracking-[0.03em] text-base lg:text-lg 2xl:text-[20px] max-w-[550px]">
            At Seafood Focus, we pride ourselves on delivering the freshest and
            finest seafood products, directly from the ocean to your table. Our
            commitment to quality and sustainability ensures that you always
            receive the best.
          </p>
          <Link href="/Home">
            <button className="max-w-[160px] hover:shadow-md hover:scale-105 text-[#02495D] poppins-bold text-base lg:text-lg 2xl:text-[22px] px-10 py-2 bg-white rounded-xl">
              Dive in
            </button>
          </Link>
        </div>
        <div className="relative w-full flex justify-end items-end text-white poppins-regular text-sm xl:text-lg">
          <p className="w-fit">
            Preparing Your Journey to the Ocean's Bounty...
          </p>
        </div>
      </div>
    </>
  );
}
