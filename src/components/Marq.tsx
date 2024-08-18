import Marquee from "react-fast-marquee";

export default function Marq(){
    
    return <>
        <div className="flex-col bg-[#F7FAEB] md:flex-row lg:flex xl:flex-row 2xl:flex-row gap-7 mt-28">
            <p className=" w-full font-primaryRegular text-center  pt-5 mb-6 lg:mb-0 md:w-full md:mt-6 text-xl text-black md:text-3xl lg:w-[28%] xl:w-[20%] ">Partnered with</p>
            <Marquee autoFill={true} speed={100} gradient gradientWidth={100} gradientColor='#F7FAEB'>
                <a href="https://www.microsoft.com/en-in" target="_blank"><img src="./marquee/microsoft.svg" className="p-[10%]" ></img></a>
                <a href="https://ethames.ac.in/index.html" target="_blank"><img src="./marquee/ethames.svg" className="p-[10%]"></img></a>
                <a href="https://muditaconcepts.com" target="_blank"><img src="./marquee/Mudita.svg" className="p-[10%]"></img></a>
                <a href="https://certiport.pearsonvue.com" target="_blank"><img src="./marquee/certiport logo.svg" className="p-[10%]"></img></a>
                <a href="https://atypicaladvantage.in" target="_blank"><img src="./marquee/atypical.svg" className="p-[10%] w-[80%]"></img></a>
            </Marquee>
        </div>
    </>
}
            