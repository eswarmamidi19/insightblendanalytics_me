import { Button } from "@/components/ui/button"
import { MoveUpRight } from 'lucide-react';
import { Hourglass } from 'lucide-react';
import { IoStatsChartOutline } from "react-icons/io5";
import { Wrench } from 'lucide-react';
import { MonitorPlay } from 'lucide-react';

type CourseProps = {
    cname: string,
    cfor: string,
    cduration: string,
}

export default function CourseCard({ cname, cfor, cduration }: CourseProps) {
    return (
        <div className="flex flex-col items-center justify-center mb-20 transition-all duration-500 hover:scale-110">
            <div className="w-[283px] h-[300px] border border-black hover:shadow-lg hover:shadow-[#00857392] flex flex-col rounded-lg lg:w-[300px] lg:h-[330px] ">
                <div className="w-full h-[216px] bg-[#008573] rounded-tl-md rounded-tr-md border-b border-b-black">

                </div>
                <div className="w-full h-fit m-1 lg:m-2">
                    <div className="ml-4">
                        <p className="flex items-center h-10 font-primaryRegular md:text-lg">
                            {cname}
                        </p>
                        <div className="flex flex-col font-primaryRegular text-[#413D45] text-xs  gap-2 md:grid md:grid-cols-2">
                            <p className="flex gap-2"><Hourglass size={16} strokeWidth={1.5} className="mt-[1px]" />{cduration}</p>
                            <p className="flex gap-2"><IoStatsChartOutline className="mt-[1px] mr-1" />{cfor}</p>
                            <p className="flex gap-2"><Wrench size={16} strokeWidth={1.5} className="mt-[1px]" />Real Time projects</p>
                            <p className="flex gap-2"><MonitorPlay size={16} strokeWidth={1.5} />Live Classes</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center m-2">
                    {/* <button className="border border-x-blue-400 flex items-center justify-center w-[98%] bg-[#008573] text-white font-primaryRegular text-xs rounded-md">
                        <p className="m-2">Explore now</p>
                        <p className="ml-1">↗</p>
                    </button> */}
                    <Button className="w-full bg-[#008573] font-primaryRegular text-xs " size={"sm"}>
                        Explore now
                        <MoveUpRight size={12} strokeWidth={1.5} className="ml-3 mt-[1px]" />
                    </Button>
                </div>
            </div>
        </div>
    )
}