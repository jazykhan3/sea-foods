const ProductsHero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full bg-[#DDEFFF]">
        <div className="w-full flex justify-center items-center px-6 lg:px-10 py-48 md:py-80 bg-[url('/Images/products-hero-img.webp')] bg-cover bg-center">
          <p className="uppercase text-[#0E46A3] brice text-[40px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[50px] sm:leading-[90px] md:leading-[110px] lg:leading-[140px] max-w-[1549px] text-center text-border sm:text-border font-bold tracking-[4px] md:tracking-[8px]">
            Discover Our <span className="hidden xl:block">Exceptional</span>
            <span className="xl:hidden">Excep -tional</span> Range of Seafood
            Products
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductsHero;
