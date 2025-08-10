import Image from "next/image";

const Partners = () => {
  return (
    <>
      <div className="w-full bg-[#DDEEFF] flex flex-col gap-10 justify-center items-center px-6 lg:px-24 pt-16 pb-32">
        <p className="text-center whitefish text-border font-bold paint-order text-[#0E46A3] text-6xl lg:text-[90px] font-medium">
          Our Partners
        </p>
        <div className="w-full flex flex-wrap justify-center items-center gap-8">
          <Image
            src="/Images/who-partner-1.webp"
            alt="_company"
            className="w-full h-full max-w-[153px] max-h-[34px]"
            width={153}
            height={34}
          />
          <Image
            src="/Images/who-partner-2.webp"
            alt="_company"
            className="w-full h-full max-w-[146px] max-h-[59px]"
            width={146}
            height={59}
          />
          <Image
            src="/Images/who-partner-3.webp"
            alt="_company"
            className="w-full h-full max-w-[152px] max-h-[75px]"
            width={152}
            height={75}
          />
          <Image
            src="/Images/who-partner-4.webp"
            alt="_company"
            className="w-full h-full max-w-[151px] max-h-[42px]"
            width={151}
            height={42}
          />
          <Image
            src="/Images/who-partner-5.webp"
            alt="_company"
            className="w-full h-full max-w-[151px] max-h-[62px]"
            width={151}
            height={62}
          />
          <Image
            src="/Images/who-partner-6.webp"
            alt="_company"
            className="w-full h-full max-w-[151px] max-h-[72px]"
            width={151}
            height={72}
          />
        </div>
      </div>
    </>
  );
};

export default Partners;
