export default function Footer() {
  return (
    <footer className="bg-[#F7FAEB] sm:max-w-4xl md:max-w-5xl xl:max-w-[1200px] mx-auto pt-10  md:px-4 ">
      <div className="flex flex-col w-full  text-[#056A5D] sm:flex-row">
        {/* Mobile Screen */}
        <div className="sm:hidden  flex flex-col gap-3 text-[15px] font-primaryRegular items-center justify-center border-b border-t border-[#056a5d4c] p-2">
          <p className="font-primaryBold text-[10px] flex">[GET IN TOUCH]</p>
          <div className="flex flex-row gap-5 text-[11px]">
            <a href="" className="flex items-center justify-center gap-1">
              <img
                src="/footer/whatsapp.svg"
                className="w-[18%] h-full mb-[1px]"
              />
              <p>WHATSAPP</p>
            </a>
            <a href="" className="flex items-center justify-center gap-1">
              <img
                src="/footer/linkedin.svg"
                className="w-[20%] h-full mb-[3px]"
              />
              <p>LINKEDIN</p>
            </a>
            <a href="" className="flex items-center justify-center gap-1">
              <img
                src="/footer/twitter.svg"
                className="w-[20%] h-full mb-[1px]"
              />
              <p>TWITTER</p>
            </a>
            <a href="" className="flex items-center justify-center gap-1">
              <img
                src="/footer/instagram.svg"
                className="w-[17%] h-full mb-[1px]"
              />
              <p>INSTAGRAM</p>
            </a>
          </div>
        </div>

        {/* Tablet and Laptop Screen */}
        <div className="hidden sm:flex sm:pb-4 md:flex border-t border-[#056a5d4c] border-b border-r w-[30%] items-center flex-col uppercase gap-2 xl:gap-3">
          <p className="font-primaryBold text-sm flex mt-8 lg:text-md xl:text-lg">
            [GET IN TOUCH]
          </p>
          <div className="flex w-[60%] mt-2 gap-2">
            <div className="w-[25%] flex flex-col gap-[15px] items-center xl:items-end">
              <a href="">
                <img
                  src="/footer/whatsapp.svg"
                  width={15}
                  className="lg:w-5 xl:w-6"
                />
              </a>
              <a href="">
                <img src="/footer/linkedin.svg" width={15} className="lg:w-5" />
              </a>
              <a href="">
                <img
                  src="/footer/twitter.svg"
                  width={15}
                  className="lg:w-5 lg:mt-1.5"
                />
              </a>
              <a href="">
                <img
                  src="/footer/instagram.svg"
                  width={15}
                  className="lg:w-5"
                />
              </a>
            </div>
            <div className="w-[75%] text-[10px] flex flex-col gap-[14px] font-primaryRegular items-start lg:text-sm lg:gap-[15px] xl:text- xl:gap-[16.5px]">
              <p>whatsapp</p>
              <p>linkedin</p>
              <p>twitter</p>
              <p>instagram</p>
            </div>
          </div>
        </div>

        {/* Mobile Screen */}
        <div className="p-4 border-b border-[#056a5d4c] sm:hidden ">
          <div className="md:hidden w-full flex  sm:px-[25%] uppercase font-primaryRegular ">
            <div className="w-[50%] text-[10px] flex flex-col gap-2 ">
              <p className="font-primaryBold">[Explore]</p>
              <p>about</p>
              <p>careers</p>
              <p>privacy policy</p>
              <p>services</p>
              <p>TESTIMONIALS</p>
              <p>Contact us</p>
              <p>Our brand PARTNERS</p>
            </div>
            <div className="w-[50%] text-[10px] flex flex-col gap-2 min-[375px]:ml-14 min-[425px]:ml-20">
              <p>our team</p>
              <p>elite EDUCATION partners</p>
              <p>terms and conditions</p>
              <p className="font-primaryBold mb-1">[ping at]</p>
              <p>+91 92814 31419</p>
              <p className="font-primaryBold mb-1">[timmings]</p>
              <p>
                MON to SAT <br />
                9am IST - 5am IST
              </p>
            </div>
          </div>
        </div>
        {/* Tablet and Laptop Screen */}
        <div className="p-4 hidden sm:text-[10px] sm:flex sm:w-full sm:justify-between border-[#056a5d4c] md:flex md:text-[10px] items-center lg:text-sm xl:text-md sm:border-t sm:border-b md:w-full lg:border-r-0">
          <div className="flex flex-col gap-2 font-primaryRegular xl:gap-3">
            <p className="font-primaryBold text-sm xl:text-lg">[EXPLORE]</p>
            <a className="">ABOUT</a>
            <a className="">CAREERS</a>
            <a className="">PRIVACY POLICY</a>
            <a className="">SERVICES</a>
            <a className="">TESTIMONIALS</a>
          </div>
          <div className="flex flex-col gap-2  font-primaryRegular">
            <a className="mt-5 md:mt-7"></a>
            <a>CONTACT US</a>
            <a>OUR BRAND PARTNERS</a>
            <a>OUR TEAM</a>
            <a>ELITE EDUCATION PARTNERS</a>
            <a>TERMS AND CONDITIONS</a>
          </div>
          <div className="flex flex-col font-primaryRegular gap-2 ">
            <p className="font-primaryBold md:text-sm xl:text-lg">[PING AT]</p>
            <p>+91 92814 31419</p>
            <p className="font-primaryBold md:text-sm xl:text-lg">[TIMINGS]</p>
            <p>
              MON to SAT <br />
              9am IST - 5am IST
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse p-2 text-[#056A5D] text-[12px] items-center justify-center md:flex-row md:justify-between lg:border-l-0 lg:border-r-0 lg:border-[#056A5D] ">
        <div className="flex p-2 gap-2 items-center md:ml-6 lg:ml-14 xl:ml-28 md:w-[50%]">
          <img
            src="/footer/emjs.svg"
            width={40}
            className="md:w-[12%] xl:w-12"
          />
          <p className="font-primaryItalic text-[10px] xl:text-[12px]">
            Made by Software Square
          </p>
        </div>
        <div className="md:mr-4">
          <p className="text-[10px] font-primaryRegular xl:text-[12px]">
            © 2024 InsightBlend Analytics LLP | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
