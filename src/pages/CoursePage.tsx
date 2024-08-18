import CourseCard from './../components/CourseCard'
export default function CoursePage(){
    return( 
        <div className="max-w-[1300px] pt-28 w-full px-10">
                <section className="flex w-full">
                    <figure>
                        <img src="./aboutus/star.svg" alt="" className="w-[60%] md:w-[75%] mt-[5%]" />
                    </figure>
                    <div className="">
                        <h1 className="text-4xl md:text-5xl  text-[#0C3531] font-anton">GET CERTIFIED</h1>
                    </div>
                </section>
                <section className="mt-6">
                    <div>
                        <p className="text-sm font-primaryRegular text-[#202e1ec0] text-justify tracking-wide md:text-md lg:text-lg">
                            At InsightBlend Analytics LLP, our suite of programs is meticulously crafted to offer an
                            unparalleled learning experience in Microsoft Excel and Power BI. Each program is a
                            testament to our commitment to luxury, personalized learning, and professional
                            excellence.
                        </p>
                    </div>
                </section>
                <section className="mt-16">
                    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6  lg:grid-cols-3">
                        <CourseCard cname={"Excel with AI: Quick Mastery"} cfor={"Intermediate"} cduration={"3 Hours"}/>
                        <CourseCard cname={"Excel with AI: Quick Mastery"} cfor={"Intermediate"} cduration={"3 Hours"}/>
                        <CourseCard cname={"Excel with AI: Quick Mastery"} cfor={"Intermediate"} cduration={"3 Hours"}/>
                        <CourseCard cname={"Excel with AI: Quick Mastery"} cfor={"Intermediate"} cduration={"3 Hours"}/>
                    </div>
                </section>
        </div>
    )
}
