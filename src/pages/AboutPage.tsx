import ImagePara from "@/components/ImagePara";
import Heading from "../components/Heading";
export default function AboutPage() {
    return (
        <div className="max-w-[1300px] pt-28 w-full px-10 ">
            <section className="w-full flex flex-col relative">
                <section className="w-full absolute flex justify-center items-center sm:ml-[7%] sm:mt-[5%] md:mt-[-3%] xl:flex xl:gap-5 -top-6 md:top-0 lg:top-[10%] xl:top-8 xl:left-[-7%] ">
                    <figure>
                        <img src="./aboutus/star.svg" alt="" className="w-4/5 sm:w-[70px] md:w-[70px] lg:w-[80px] xl:w-[96px]  animate-spin-slow" />
                    </figure>
                    <div>
                        <h1 className="text-5xl sm:text-7xl sm:ml-4 md:text-6xl lg:ml-2 lg:text-7xl xl:text-8xl text-[#0C3531] tracking-[1.2px] font-anton">ABOUT US</h1>
                    </div>
                </section>
                <section className="w-full flex flex-col gap-7 md:flex-row ">
                    <div className="md:w-1/2 sm:p-10 md:p-3 lg:p-10">
                        <figure className="w-full">
                            <img src="/Workers.png" alt="Workers" className="w-full sm:ml-[-2%]" />
                        </figure>
                    </div>
                    <div className="md:w-1/2   flex items-center justify-center ">
                        <div className="font-primaryRegular text-sm text-justify md:text-md lg:text-xl lg:pt-10 3xl:text-2xl xl:pr-20">
                            <p>
                                Here at InsightBlend Analytics (IBA), we are driven by a
                                profound belief in the transformative power of personalized
                                education.
                            </p>
                            <p>
                                We understand that everyone embarks on a learning journey that
                                is as unique as their own fingerprints. Our philosophy is rooted
                                in the recognition of this uniqueness, and our ommitment is
                                unwavering in nurturing and honouring it.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
            <section>
                <div>
                    <ImagePara
                        direction="right"
                        imgsrc="./aboutus/img1.svg"
                        para="Our vision at InsightBlend Analytics LLP is to become the top choice for luxury training in data analytics and visualization worldwide. We aim to be known everywhere for our top-quality teaching and innovative methods. Our goal goes beyond just being the best; we want to change the way these subjects are taught, making our courses both effective and exciting."
                        children={<Heading words={["What", "We", "Envision"]} index={2} />}
                    />
                </div>
            </section>
            <section>
                <div>
                    <ImagePara
                        direction="left"
                        imgsrc="./aboutus/img1.svg"
                        para="Our mission at InsightBlend Analytics LLP is clear: to equip professionals, students and freshers around the world with advanced skills in Excel and Power BI. We're committed to helping people grow in their careers through our quality training programs. Each course is designed not just to give information but to build important skills for today's job market."
                        children={<Heading words={["What", "Drives", "Us"]} index={1} />}
                    />
                </div>
            </section>
            <section>
                <div className="block md:hidden w-full">
                    <div className="sm:hidden">
                        <ImagePara
                            direction="left"
                            imgsrc="./aboutus/partners.svg"
                            para="We are proud to partner with a diverse array of esteemed companies, colleges, and organizations. These collaborations highlight our commitment to excellence and innovation. By working closely with industry leaders and academic institutions, we deliver impactful solutions enriched with cutting-edge insights. Together, we are building a dynamic ecosystem that fosters growth, learning, and success."
                            children={<Heading words={["Our", "Partners"]} index={1} />}
                        />
                    </div>
                    <div className="hidden sm:flex sm:flex-col">
                        <div className="px-20 mt-10 w-full  flex items-start justify-between ">
                            <img src="./marquee/microsoft.svg" className="w-[30%] xl:w-[25%]" />
                            <img
                                src="./marquee/certiport logo.svg"
                                className="w-[35%] mt-3 xl:w-[25%]"
                            />
                        </div>
                        <div className="flex items-center justify-center mt-10">
                            <img src="./marquee/Mudita.svg" className="w-[35%] xl:w-[100%]" />
                        </div>
                        <div className="px-20 w-full flex items-start justify-between mt-10">
                            <img src="./marquee/atypical.svg" className="w-[30%] xl:w-[22%]" />
                            <img src="./marquee/ethames.svg" className="w-[35%] xl:w-[22%]" />
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex md:flex-col md:items-center md:justify-center">
                    <Heading words={["Our", "Partners"]} index={1} />
                    <p className="text-[#202e1ec3] px-20 mt-10 font-primaryRegular text-sm text-justify lg:text-xl 3xl:text-2xl">
                        We are proud to partner with a diverse array of esteemed companies,
                        colleges, and organizations. These collaborations highlight our
                        commitment to excellence and innovation. By working closely with
                        industry leaders and academic institutions, we deliver impactful
                        solutions enriched with cutting-edge insights. Together, we are
                        building a dynamic ecosystem that fosters growth, learning, and
                        success.
                    </p>
                    <div className="px-20 mt-10 w-full flex items-start justify-between ">
                        <img src="./marquee/microsoft.svg" className="w-[35%] xl:w-[25%]" />
                        <img
                            src="./marquee/certiport logo.svg"
                            className="w-[35%] mt-3 xl:w-[25%]"
                        />
                    </div>
                    <div className="flex items-center justify-center mt-10">
                        <img src="./marquee/Mudita.svg" className="w-[90%] xl:w-[100%]" />
                    </div>
                    <div className="px-20 w-full flex items-start justify-between mt-10">
                        <img src="./marquee/atypical.svg" className="w-[25%] xl:w-[22%]" />
                        <img src="./marquee/ethames.svg" className="w-[30%] xl:w-[22%]" />
                    </div>
                </div>
            </section>
        </div>
    );
}
