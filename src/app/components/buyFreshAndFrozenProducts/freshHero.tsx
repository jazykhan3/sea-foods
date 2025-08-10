const FreshHero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full bg-[#DDEFFF]">
        <div className="w-full flex justify-center items-center px-6 lg:px-10 py-48 md:py-80 bg-[url('/Images/buy-fresh-hero.webp')] bg-cover bg-center">
          <p className="uppercase text-[#0E46A3] brice text-[30px] xs:text-[35px] sm:text-[50px] md:text-[85px] lg:text-[100px] 2xl:text-[120px] leading-[50px] sm:leading-[90px] md:leading-[110px] lg:leading-[140px] max-w-[1549px] text-center text-border sm:text-border-heavy font-bold tracking-[4px] md:tracking-[8px]">
            Our Traditional Fresh Products
          </p>
        </div>
      </div>
    </>
  );
};

export default FreshHero;
