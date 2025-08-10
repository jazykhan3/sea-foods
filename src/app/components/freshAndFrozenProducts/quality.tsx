const Quality = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-6 md:px-8 lg:px-24 py-10 md:py-20 2xl:py-48 bg-[url('/Images/fresh-quality-img.webp')] bg-cover bg-center">
        <p className="brice text-4xl md:text-5xl xl:text-[50px] text-center font-bold w-fit text-border sm:text-border text-[#0E46A3] leading-[40px] sm:leading-[45px] md:leading-[50px] lg:leading-[55px] uppercase">
          Quality and Freshness
        </p>
        <p className="text-[#DDF2FD] poppins-bold text-xl lg:text-2xl 2xl:text-[30px] text-center">
          Unmatched Freshness
        </p>
        <p className="text-center text-[#DDF2FD] poppins-medium text-base md:text-lg xl:text-[22px] 2xl:text-[26px] leading-[30px] xl:leading-[40px] max-w-[707px]">
          Our fresh products are sourced daily, ensuring that you receive
          seafood at the peak of its freshness. Our strategic presence in French
          fishing ports allows us to purchase the best catches directly from
          local fishermen. This ensures that our seafood retains its natural
          flavors and textures, providing a superior culinary experience.
        </p>
        <button className="bg-[#77DFF8] border-white border-[4px] lg:border-[9px] rounded-lg px-6 md:px-10 2xl:px-20 py-2 lg:py-4 2xl:py-[18px] text-[#071B3B] poppins-bold text-lg 2xl:text-[22px]">
          Learn More
        </button>
      </div>
    </>
  );
};

export default Quality;
