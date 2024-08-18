import { cn } from "@/utils";


type HeadingProps = {
     words : string[];
     index:number;
}
export default function Heading({words , index} : HeadingProps){
  
     return <h1 className=" font-primaryRegular ">
        {words.map((word , i)=>{
          return <span key={i} className={cn(index!==i ? "text-2xl max-[320px]:text-2xl md:text-4xl lg:text-[40px] mr-1 md:mr-3 xl:text-[45px] 2xl:text-[50px]" :
               "bg-[#07C1A1] p-1 max-[320px]:text-2xl max-[320px]: text-2xl text-[#F7FAEB] mr-2 md:mr-3 md:text-4xl xl:text-[45px] xl:leading-normal 2xl:text-[50px]")}>
               {word}
          </span>
        })}
     </h1>
}
