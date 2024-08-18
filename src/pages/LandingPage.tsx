import { FaArrowRight } from "react-icons/fa";
import Marq from "../components/Marq";
import Bento from "../components/Bento";
import Heading from "../components/Heading";
import Testimonials from "@/components/Testimonials";
export default function LandingPage() {
  return (
    <div className="max-w-[1300px] pt-28  w-full px-10">
      <section className="flex flex-col  gap-8  lg:flex-row  w-full  ">
        <section className="flex flex-col lg:w-3/5 gap-5 md:gap-5 lg:gap-5 xl:gap-11">
          <header className="w-full flex flex-col gap-1 md:gap-5 font-primaryRegular text-3xl md:text-[50px] max-[320px]:text-2xl lg:text-[40px]  xl:text-[55px] whitespace-nowrap">
            <div className="font-primaryRegular ">Empowering minds,</div>
            <div className="font-primaryRegular flex gap-2">
              <img src="./line.svg" alt="A line" className="w-[40%] min-[320px]:mt-2 mt-4 md:w-[250px]" />
              <div>one formula</div>
            </div>
            <div className="font-primaryRegular  flex gap-2">
              <div>at a time</div>
              <img src="./star.svg" alt="star" />
            </div>
          </header>
          <section className="font-primaryRegular  text-sm md:text-[15px] lg:text-lg xl:text-2xl xl:leading-9 2xl:text-2xl 4xl:text-2xl  text-[#202E1E] w-full h-auto">
            <div className="w-full lg:w-full  text-justify">
              Whether you’re diving into Microsoft Excel or exploring the
              dynamic world of Power BI, you’ll benefit from expert guidance,
              certification readiness, and a global community. Our founder, a
              Microsoft Certified Trainer (MCT), brings unparalleled expertise
              to your training. Join us on this transformative journey where
              data mastery meets MCT excellence!.🚀💡
            </div>
          </section>
          <section className="w-full ">
              <button className="flex px-4 py-3 items-center justify-center gap-3 rounded-3xl border border-black font-primaryRegular">
                    <span>Browse courses </span>
                    <FaArrowRight/>
              </button>
          </section>
        </section>
        <section className="flex justify-center items-center xl:items-start relative ">
          <figure className=" min-[600px]:ml-[20%] md:ml-[20%]">
            <img
              src="per.png"
              alt=""
              className="w-[90%] min-[600px]:w-2/3 md:w-2/3 lg:w-[700px]"
            />
          </figure>
          <figure className="absolute -left-7 -bottom-7 xl:bottom-14 animate-spin-slow min-[600px]:ml-[20%] md:ml-[20%] ">
            <img
              src="oc.svg"
              alt=""
              className="w-24 md:w-32 xl:w-36 rounded-md lg:"
            />
          </figure>
        </section>
      </section>

      <section className="mt-10">
          <Marq/>
      </section>

      <section className="mt-20">
        <div className="flex flex-col items-center bg-[#F7FAEB] md:felx-col lg:flex-row lg:items-start scroll-smooth " data-aos="fade-in" data-aos-easing="ease-in-sine" data-aos-duration="700">
            <div className="w-full h-auto font-primaryRegular p-2 lg:w-[50%]">
                <Heading words={["Learn", "from","the"]} index={3}/>
                <Heading words={["expert", "practitioners"]} index={0}/>
                <p className="text-justify text-sm text-[#202E1E] mt-10 md:text-[15px] lg:text-lg xl:text-2xl xl:leading-9 2xl:text-2xl 4xl:text-2xl">
                    Develop real-world skills with our courses designed by industry practitioners who are Microsoft Excel experts. 
                    Our instructors bring years of hands-on experience, offering practical insights you can apply immediately.
                </p>
                <p className="text-justify text-sm text-[#202E1E] mt-4 md:text-[15px] lg:text-lg xl:text-2xl xl:leading-9 2xl:text-2xl 4xl:text-2xl">
                    Gain a competitive edge with training that goes beyond theory, giving you the tools and confidence to excel in your career.
                </p>
            </div>
            <div className="grid grid-cols-2 h-auto pt-6 mt-4 w-full lg:w-[50%]">
                <img src='./badges/Badge1.png'  
                    className="w-32 min-[425px]:ml-[10%] min-[425px]:w-36 md:w-44 md:ml-20 lg:ml-14 lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] 2xl:ml-20 4xl:w-[200px] 4xl:h-[200px] animate-custom-bounce hover:animate-wobble">
                </img>
                <img src='./badges/badge2.png'  
                    className="ml-8 w-28 mt-2 min-[425px]:w-36 md:w-40 lg:ml-18 lg:w-[140px] lg:h-[140px] xl:w-[170px] xl:h-[170px] 4xl:w-[190px] 4xl:h-[190px] animate-custom-bounce hover:animate-wobble">
                </img>
                <img src='./badges/b3.png' 
                    className="w-32 mt-4 ml-[-3%] min-[425px]:ml-[10%] min-[425px]:w-36 md:w-44 md:ml-[20%] lg:w-[150px] lg:h-[150px] lg:ml-[25%] xl:w-[180px] xl:h-[180px] 2xl:ml-[24%] 4xl:w-[200px] 4xl:h-[200px] animate-custom-bounce hover:animate-wobble">
                </img>
                <img src='./badges/associate.png' 
                    className="max-w-32 min-[425px]:max-w-36 ml-5 mt-4 md:w-[80%] min-[425px]:w-[100%] md:max-w-44 lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] 4xl:w-[180px] 4xl:aspect-square 4xl:h-[180px]  4xl:ml-[10%] animate-custom-bounce hover:animate-wobble">
                </img>
                {/* <img src="Badge2.svg" width={250}></img> */}
            </div>
        </div>
      </section>

      <section className="mt-32">
        <Bento/>
      </section>

       <section>
         <Testimonials/>
       </section>

      
    </div>
  );
}
