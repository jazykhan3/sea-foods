  "use client";
  import React from "react";
  import Image from "next/image";

const ContactForm = () => {
  const [selectedSubject, setSelectedSubject] = React.useState(0);
  const [formData, setFormData] = React.useState({
    fname: "John",
    lname: "Doe",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formDataWithSubject = { ...formData, subject: selectedSubject };
    console.log("Form submitted with data:", formDataWithSubject);
  };
  return (
    <>
      <div className="w-full pt-6 md:pt-8 lg:pt-10 flex flex-col justify-center items-center gap-5 w-full bg-[#DDEEFF]">
        <div className="px-6 md:px-10 lg:px-24 flex flex-col w-full max-w-[1192px] justify-center items-center gap-6">
          <p className="text-black whitefish text-2xl md:text-3xl lg:text-4xl 2xl:text-[64px] font-bold text-center">
            Get in Touch with Seafood Focus
          </p>
          <p className="text-[#121212] poppins-regular text-center text-sm md:text-base lg:text-lg xl:text-2xl">
            We’re here to answer any questions you may have about our products,
            services, or company. Whether you're a customer, partner, or simply
            interested in learning more about Seafood Focus, we’d love to hear
            from you.
          </p>
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="z-[1] w-full h-[100px] bg-gradient-to-b from-[#DDEEFF] to-[#DDEEFF00] -mb-[100px]"></div>
          <div className=" w-full bg-[url('/Images/contact-bg.webp')] bg-cover bg-center px-6 md:px-10 lg:px-24 py-10 lg:py-12 xl:py-16 2xl:py-20 flex justify-center items-center">
            <div className="z-[1] xl:max-h-[664px] 2xl:max-h-[700px] flex flex-col xl:flex-row gap-10 p-3 rounded-lg bg-white w-full max-w-[1343px]">
              <div className="rounded-lg w-full xl:w-[40%] bg-[url('/Images/contact-form-bg.webp')] bg-cover bg-center relative overflow-hidden px-6 md:px-8 py-8 lg:p-10 flex flex-col justify-start items-start gap-10 md:gap-20 lg:gap-16 xl:gap-32 h-full w-full">
                <div className="z-[1] flex flex-col gap-1 justify-start items-start">
                  <p className="text-[#0799C3] poppins-semibold text-xl xl:text-[26px] 2xl:text-[30px] leading-normal">
                    Contact Information
                  </p>
                  <p className="text-[#C9C9C9] poppins-regular text-base 2xl:text-xl leading-normal">
                    Say something to start a live chat!
                  </p>
                </div>
                <div className="z-[1] flex flex-col gap-4 lg:gap-10 justify-start items-start w-full">
                  <div className="flex flex-wrap sm:flex-nowrap gap-4 2xl:gap-6 justify-start items-center w-full">
                    <Image
                      src="/Images/contact-phone-icon.webp"
                      alt="_contact"
                      width={26}
                      height={26}
                      className="max-w-[26px] max-h-[26px] w-full h-full"
                    />
                    <p className="text-white poppins-regular text-base 2xl:text-lg">
                      +1012 3456 789
                    </p>
                  </div>
                  <div className="flex flex-wrap sm:flex-nowrap gap-4 2xl:gap-6 justify-start items-center w-full">
                    <Image
                      src="/Images/contact-mail-icon.webp"
                      alt="_contact"
                      width={26}
                      height={26}
                      className="max-w-[26px] max-h-[26px] w-full h-full"
                    />
                    <p className="text-white poppins-regular text-base 2xl:text-lg">
                      demo@seafoodfocus.com
                    </p>
                  </div>
                  <div className="flex flex-wrap sm:flex-nowrap gap-4 2xl:gap-6 justify-start items-center w-full">
                    <Image
                      src="/Images/contact-location-icon.webp"
                      alt="_contact"
                      width={26}
                      height={26}
                      className="max-w-[26px] max-h-[26px] w-full h-full"
                    />
                    <p className="text-white poppins-regular text-base 2xl:text-lg">
                      Seafood Focus Headquarters
                      <br />
                      123 Ocean Drive
                      <br />
                      Coastal City, France
                    </p>
                  </div>
                </div>
                <div className="z-[1] flex flex-wrap w-full gap-4 md:gap-[28px] justify-start items-center">
                  <Image
                    src="/Images/contact-twitter-icon.webp"
                    alt="_contact"
                    width={34}
                    height={34}
                    className="cursor-pointer max-w-[28px] max-h-[28px] md:max-w-[34px] md:max-h-[34px] w-full h-full"
                  />
                  <Image
                    src="/Images/contact-insta-icon.webp"
                    alt="_contact"
                    width={34}
                    height={34}
                    className="cursor-pointer max-w-[28px] max-h-[28px] md:max-w-[34px] md:max-h-[34px] w-full h-full"
                  />
                  <Image
                    src="/Images/contact-discord-icon.webp"
                    alt="_contact"
                    width={34}
                    height={34}
                    className="cursor-pointer max-w-[28px] max-h-[28px] md:max-w-[34px] md:max-h-[34px] w-full h-full"
                  />
                  <Image
                    src="/Images/contact-hand-icon.webp"
                    alt="_contact"
                    width={27}
                    height={27}
                    className="mt-[53px] ml-[73px] hidden lg:block absolute max-w-[27px] max-h-[27px] w-full h-full"
                  />
                </div>
                <Image
                  src="/Images/contact-circles.webp"
                  alt="_bg"
                  width={200}
                  height={200}
                  className=" clip-path-inset bottom-0 right-0 absolute max-w-[200px] max-h-[200px] w-full h-full"
                />
              </div>
              <div className="w-full xl:w-[60%] flex justify-start items-start px-6 py-8 lg:py-10 xl:py-20">
                <form onSubmit={handleSubmit} className="w-full">
                  <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full justify-start items-start">
                    <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 justify-between items-center w-full">
                      <div className="flex flex-col gap-1 justify-start items-start w-full lg:w-[50%]">
                        <label
                          htmlFor="fname"
                          className="text-[#8D8D8D] poppins-medium text-xs"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          className="w-full border-b border-[#8D8D8D] outline-none py-1 px-2 text-[#8D8D8D] text-sm md:text-base poppins-medium"
                          value={formData.fname}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col gap-1 justify-start items-start w-full lg:w-[50%]">
                        <label
                          htmlFor="lname"
                          className="text-[#8D8D8D] poppins-medium text-xs"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lname"
                          name="lname"
                          className="w-full border-b border-[#8D8D8D] outline-none py-1 px-2 text-[#8D8D8D] text-sm md:text-base poppins-medium"
                          value={formData.lname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 justify-between items-center w-full">
                      <div className="flex flex-col gap-1 justify-start items-start w-full lg:w-[50%]">
                        <label
                          htmlFor="email"
                          className="text-[#8D8D8D] poppins-medium text-xs"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full border-b border-[#8D8D8D] outline-none py-1 px-2 text-[#8D8D8D] text-sm md:text-base poppins-medium"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col gap-1 justify-start items-start w-full lg:w-[50%]">
                        <label
                          htmlFor="phone"
                          className="text-[#8D8D8D] poppins-medium text-xs"
                        >
                          phone
                        </label>
                        <input
                          type="phone"
                          id="phone"
                          name="phone"
                          className="w-full border-b border-[#8D8D8D] outline-none py-1 px-2 text-[#8D8D8D] text-sm md:text-base poppins-medium"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 justify-start items-start w-full">
                      <p className="text-black poppins-semibold text-sm">
                        Select Subject?
                      </p>
                      <div className="flex flex-wrap gap-3 lg:gap-4 justify-start items-start w-full">
                        <div
                          onClick={() => setSelectedSubject(0)}
                          className="cursor-pointer flex gap-3 justify-start items-center"
                        >
                          <Image
                            src={`${
                              selectedSubject === 0
                                ? "/Images/contact-selected-check.webp"
                                : "/Images/contact-unselected-check.webp"
                            }`}
                            alt={`${
                              selectedSubject === 0
                                ? "_selected"
                                : "_unselected"
                            }`}
                            width={15}
                            height={15}
                            className="max-w-[15px] max-h-[15px] w-full h-full cursor-pointer"
                          />
                          <p className="text-black poppins-regular min-w-[130px] text-sm">
                            General Inquiry
                          </p>
                        </div>
                        <div
                          onClick={() => setSelectedSubject(1)}
                          className="cursor-pointer flex gap-3 justify-start items-center"
                        >
                          <Image
                            src={`${
                              selectedSubject === 1
                                ? "/Images/contact-selected-check.webp"
                                : "/Images/contact-unselected-check.webp"
                            }`}
                            alt={`${
                              selectedSubject === 1
                                ? "_selected"
                                : "_unselected"
                            }`}
                            width={15}
                            height={15}
                            className="max-w-[15px] max-h-[15px] w-full h-full cursor-pointer"
                          />
                          <p className="text-black poppins-regular min-w-[130px] text-sm">
                            General Inquiry1
                          </p>
                        </div>
                        <div
                          onClick={() => setSelectedSubject(2)}
                          className="cursor-pointer flex gap-3 justify-start items-center"
                        >
                          <Image
                            src={`${
                              selectedSubject === 2
                                ? "/Images/contact-selected-check.webp"
                                : "/Images/contact-unselected-check.webp"
                            }`}
                            alt={`${
                              selectedSubject === 2
                                ? "_selected"
                                : "_unselected"
                            }`}
                            width={15}
                            height={15}
                            className="max-w-[15px] max-h-[15px] w-full h-full cursor-pointer"
                          />
                          <p className="text-black poppins-regular min-w-[130px] text-sm">
                            General Inquiry2
                          </p>
                        </div>
                        <div
                          onClick={() => setSelectedSubject(3)}
                          className="cursor-pointer flex gap-3 justify-start items-center"
                        >
                          <Image
                            src={`${
                              selectedSubject === 3
                                ? "/Images/contact-selected-check.webp"
                                : "/Images/contact-unselected-check.webp"
                            }`}
                            alt={`${
                              selectedSubject === 3
                                ? "_selected"
                                : "_unselected"
                            }`}
                            width={15}
                            height={15}
                            className="max-w-[15px] max-h-[15px] w-full h-full cursor-pointer"
                          />
                          <p className="text-black poppins-regular min-w-[130px] text-sm">
                            General Inquiry3
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 justify-start items-start w-full">
                      <label
                        htmlFor="message"
                        className="text-[#8D8D8D] poppins-medium text-xs"
                      >
                        Message
                      </label>
                      <input
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Write your message.."
                        className="w-full border-b border-[#8D8D8D] outline-none py-1 px-2 text-[#8D8D8D] text-sm md:text-base poppins-medium"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex justify-end items-end w-full">
                      <button
                        type="submit"
                        className="text-white text-base lg:text-lg poppins-medium text-center flex justify-center items-center py-3 xl:py-4 px-6 md:px-10 xl:px-54px rounded-md bg-[#071B3B] drop-shadow-lg"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-full h-[100px] bg-gradient-to-t from-[#DDEEFF] to-[#DDEEFF00] -mt-[40px]"></div>
          
          <div className="w-full flex flex-col justify-center items-center">
            
            <Image
            src="/Images/who-wave.svg"
            alt="_wave"
            className="z-[11] w-full h-auto -mt-[16%]"
            width={2100}
            height={467}
          />

          <Image
            src="/Images/contact-map.webp"
            alt="_map"
            className="w-full max-h-[1920px] -mt-[8%]"
            width={2100}
            height={1920}
          />
            </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
