import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"
  import { cn } from "@/utils";
  
  export default function TestimonialCard({content , title} :{content:string ,title:string}) {
    
    return (
    
      <Card  
        className={cn("w-[200px]  md:w-[300px] min-h-[300px] max-h-[400px] md:min-h-[400px] aspect-square bg-[#F5F2ED]  max-w-full relative rounded-2xl border  flex-shrink-0 border-[#07C1A1] md:px-6 md:py-1 lg:py-6" )}>
        <CardHeader>
           <img src="/Quote.png" alt="Qoute" className="w-10 md:w-14" />
        </CardHeader>
        <CardContent className="font-primaryRegular text-[10px] md:text-sm  ">
           {content}
        </CardContent>
        <CardFooter className="flex justify-start font-primaryRegular text-[10px] md:text-sm"> 
         {title}
        </CardFooter>
      </Card>
     
    )
  }