import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="-mt-20 w-full bg-[#DDEEFF] flex justify-center items-center">
        <div className="w-full bg-[url('/Images/who-mission-bg.webp')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
          <div className="w-full flex flex-col xl:flex-row gap-10 px-6 lg:px-24 py-6 xl:pb-[400px] pt-[100px]">
            <div className="w-full xl:w-[50%] flex justify-center items-center">
              <p className="text-[#071B3B] poppins-medium leading-[42px] tracking-[3%] text-left text-2xl xl:max-w-[515px] 2xl:max-w-[700px]">
                We have invested heavily in state-of-the-art infrastructure and
                streamlined processes to handle and process seafood products
                efficiently. Our facilities are equipped with the latest
                technology to ensure that our seafood retains its premium
                quality from start to finish.
              </p>
            </div>
            <div className="w-full xl:w-[50%] flex justify-center items-center">
              <Image
                src="/Images/infrastructure-img.webp"
                alt="_bg"
                width={926}
                height={617}
                className="w-full h-auto max-w-[500px] lg:max-w-[600px] 2xl:max-w-[700px]"
              />
            </div>
            <Image
              src="/Images/infrstructure-crab-img.webp"
              alt="_crab"
              width={926}
              height={617}
              className="min-w-[400px] min-h-[400px] w-auto h-auto absolute xl:mt-[310px] xl:ml-[156px] 2xl:mt-[372px] 2xl:ml-[300px] hidden xl:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
