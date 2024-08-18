import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import Heading from './Heading'
import Example from "./ui/HoverCard";

export default function Bento() {
    //bg-no-repeat
    const items = [
        {
            title: (<p className="text-2xl font-primaryRegular text-[#F5F2ED] md:text-[20px] lg:text-3xl"> Offline Personal Training Experience </p>),
            description: (
                <p className="text-lg text-wrap font-primaryRegular mt-[30%] text-[#F5F2ED] md:p-1 md:text-[16px] md:mt-[3%] lg:mt-[20%] lg:text-[22px] lg:tracking-wide">
                    Exclusive, face-to-face learning with experts, enhancing your professional journey.
                    <br /> <br/>
                    This face-to-face interaction is not just about learning it's about building a professional relationship that nurtures
                    and guides you personally in your career path.
                </p>
            ),
            className: "p-6 md:row-span-2 bg-gradient-to-r from-[#004268] via-[#03896a] to-[#21d286] bg-fixed lg:p-6 xl:p-10",
        },
        {
            title: (<p className="text-2xl font-primaryRegular text-[#F5F2ED] md:text-[26px] lg:text-3xl ">International Reach & Expertise </p>),
            description: (
                <p className="text-lg text-wrap font-primaryRegular mt-[10%] text-[#F5F2ED] md:pr-20 lg:pr-44 lg:text-[24px] lg:tracking-wide">
                    World-Class Training led by esteemed Microsoft Certified Trainer, Vishwanadhula Sudhansh Bhaskar
                </p>
            ),
            className: "p-6 md:col-span-2 bg-gradient-to-r from-[#21d286] via-[#03896a] to-[#004268] bg-fixed md:p-9 lg:p-10",
        },
        {
            title: (<p className="text-2xl font-primaryRegular text-[#F5F2ED] md:text-[26px] lg:text-3xl">Customized Learning Path </p>),
            description: (
                <p className="text-lg tracking-wide text-wrap font-primaryRegular mt-[8%] text-[#F5F2ED] md:pr-24 lg:pr-44 lg:text-[24px] lg:tracking-wide ">
                    Comprehensive courses for all levels, building skills from beginner to expert.
                </p>
            ),
            className: "p-6 md:col-span-2 bg-gradient-to-r from-[#21d286] via-[#0cb689] to-[#004268] bg-fixed md:p-9 lg:p-10",
        },
        {
            title: (<p className="text-2xl font-primaryRegular text-[#F5F2ED] md:text-[26px] lg:text-3xl">Certification & Recognition </p>),
            description: (
                <p className="text-lg text-wrap tracking-wide font-primaryRegular mt-[10%] text-[#F5F2ED] md:pr-20 lg:pr-44 lg:text-[24px] lg:tracking-wide">
                    Achieve prestigious, globally recognized Microsoft Certifications in Excel and Power BI.
                </p>
            ),
            className: "p-6 md:col-span-2 bg-gradient-to-r from-[#004268] via-[#21d286] to-[#21d286] bg-fixed md:p-9 lg:p-10",
        },
        {
            title: (<p className="text-2xl font-primaryRegular text-[#F5F2ED] md:text-[26px] lg:text-3xl">Bespoke Courses and Workshops </p>),
            description: (
                <p className="text-lg text-wrap tracking-wide font-primaryRegular mt-[20%] text-[#F5F2ED] lg:mt-[40%] lg:text-[22px] lg:tracking-wide">
                    Our range of courses and workshops is as diverse as our clientele. From short, intensive workshops to comprehensive multi-week courses, each program is designed with your needs in mind
                </p>
            ),
            className: "p-6 md:row-span-2  bg-gradient-to-r from-[#21d286] via-[#0cb689] to-[#004268] bg-fixed md:p-4 lg:p-4 lg:p-10",
        },
        {
            title: (<p className="text-2xl font-primaryRegular text-[#F5F2ED] md:text-[26px] lg:text-3xl">From Beginners to Advanced Learners </p>),
            description: (
                <p className="text-lg text-wrap tracking-wide font-primaryRegular mt-[10%] text-[#F5F2ED] md:pr-24 lg:pr-44 lg:text-[26px] lg:tracking-wide">
                    Comprehensive courses for all levels, building skills from beginner to expert.
                </p>
            ),
            className: "p-6 md:col-span-2  bg-gradient-to-r from-[#004268] via-[#21d286] to-[#21d286] bg-fixed md:p-9 lg:p-10",
        },
    ];
    return <>
        <div className="bg-[#F7FAEB] mt-10">
            <Heading words={["What", "sets", "us", "apart"]} index={3} />
            <BentoGrid className="mt-10 lg:w-full bg-cover" >
                    { items.map((item, i) => (
                    <Example className={item.className + " hidden md:block "} key={i} components={item} />
                    ))}
                
            </BentoGrid>


            <BentoGrid className="mt-10 lg:w-full bg-cover  md:hidden" >
             {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        className={`${item.className}`}
                    />
                ))}
                
            </BentoGrid>
        </div>
    </>
}