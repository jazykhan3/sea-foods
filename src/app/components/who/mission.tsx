import Image from "next/image";

const Mission = () => {
  return (
    <>
      <div className="bg-[#DDEEFF]">
        <div className="w-full bg-[url('/Images/who-mission-bg.webp')] bg-cover bg-center flex flex-col justify-center items-center px-6 lg:px-48">
          <div className="flex flex-col gap-20 lg:gap-32 py-32 justify-center items-center z-[1]">
            <p className="text-center whitefish text-border font-bold paint-order text-[#0E46A3] text-[80px] lg:text-[90px] xl:text-[120px] font-medium w-full leading-[70px]">
              Mission Statement
            </p>
            <div className="flex gap-[103px] w-full justify-center items-start">
              <div className="flex flex-col gap-8 justify-start items-start xl:max-w-[699px] xl:w-[50%]">
                <p className="poppins-bold text-[30px] text-[#0E46A3]">
                  Our Mission: Excellence in Every Catch
                </p>
                <p className="text-[#071B3B] poppins-medium text-lg">
                  At Seafood Focus, our mission is to provide superior seafood
                  products while promoting sustainability and responsibility. We
                  are dedicated to:
                </p>
                <p className="text-[#071B3B] poppins-medium text-lg">
                  <b>Sustainable Practices:</b> Ensuring that our sourcing
                  methods protect marine ecosystems and support the long-term
                  viability of fish populations.
                </p>
                <p className="text-[#071B3B] poppins-medium text-lg">
                  <b>Unmatched Quality:</b> Delivering seafood that meets the
                  highest standards of freshness, taste, and safety.
                </p>
                <p className="text-[#071B3B] poppins-medium text-lg">
                  <b>Customer Commitment:</b> Building strong relationships with
                  our clients by consistently meeting and exceeding their
                  expectations.
                </p>
                <p className="text-[#071B3B] poppins-medium text-lg">
                  <b>Innovation and Adaptation:</b> Continuously improving our
                  processes and expanding our product offerings to meet the
                  evolving needs of the market.
                </p>
                <p className="text-[#071B3B] poppins-medium text-lg">
                  <b>Community Engagement:</b> Supporting local communities and
                  contributing to the socio-economic development of the regions
                  we operate in.
                </p>
              </div>
              <div className="hidden xl:block w-[50%]">
                <Image
                  src="/Images/who-mission-img.webp"
                  alt="_bg"
                  className="w-full h-full max-h-[741px]"
                  width={496}
                  height={741}
                />
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/Images/who-mission-img-2.webp"
          alt="_bg"
          className="w-full h-full -mt-[17%]"
          width={496}
          height={741}
        />
      </div>
    </>
  );
};

export default Mission;
