const About = () => {
  return (
    <>
      <div className="z-[1] flex justify-center items-center px-8 md:px-10 lg:px-20 xl:px-32 mt-[-70px] md:-mt-[291px] bg-gradient-to-t from-[#F5F5F5] to-[#ffffff00] lg:-mt[310px] xl:mt-[-410px] 2xl:mt-[-510px]">
        <div className="z-[1] shadow-2xl max-w-[1189px] w-full bg-[url('/Images/home-about-bg.webp')] bg-cover bg-center flex flex-col lg:flex-row gap-20 md:gap-6 justify-between items-start px-8 md:px-20 py-32 md:py-[124px] border border-white border-[12px] rounded-[26px]">
          <div className="w-full lg:w-[33%] flex flex-col gap-4 md:gap-12 justify-start items-center">
            <p className="text-[#77DFF8] text-lg md:text-[22px] poppins-bold text-center">
              Expert Selection
            </p>
            <p className="text-center text-[#DDF2FD] poppins-medium text-base md:text-lg">
              We specialize in sourcing the finest seafood from daily auctions
              across the Atlantic coast, ensuring only the best reaches your
              table
            </p>
          </div>
          <div className="w-full lg:w-[33%] flex flex-col gap-4 md:gap-12 justify-start items-center">
            <p className="text-[#77DFF8] text-lg md:text-[22px] poppins-bold text-center">
              Global Reach
            </p>
            <p className="text-center text-[#DDF2FD] poppins-medium text-base md:text-lg">
              With 25 state-of-the-art processing workshops in major ports and
              an international subsidiary, we guarantee a diverse and reliable
              supply of premium seafood
            </p>
          </div>
          <div className="w-full lg:w-[33%] flex flex-col gap-4 md:gap-12 justify-start items-center">
            <p className="text-[#77DFF8] text-lg md:text-[22px] poppins-bold text-center">
              Innovative Solutions
            </p>
            <p className="text-center text-[#DDF2FD] poppins-medium text-base md:text-lg">
              Our team of purchasing specialists secures a complementary range
              of imported seafood products, ensuring a steady and varied supply.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
