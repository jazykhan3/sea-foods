import Image from "next/image";

const Saying = () => {
  return (
    <>
      <div className="flex w-full flex justify-right items-right">
        <Image src='/Images/home-saying-img.webp' alt='_bg' width={10000} height={870} className='w-full h-full'/>
      </div>
    </>
  );
};

export default Saying;
