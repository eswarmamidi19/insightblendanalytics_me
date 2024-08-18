import { cn } from "@/utils";

type side = {
    direction: "left" | "right";
    imgsrc: string;
    para: string;
    children?: React.ReactNode;
}

export default function ImagePara({ direction, imgsrc, para, children }: side) {
    return <>
        <div className={cn(direction === 'left' ? 'flex flex-col-reverse w-full gap-[30px] my-[81px] md:flex-row md:justify-center md:items-center md:gap-10 lg:gap-20' : 
            'flex flex-col-reverse w-full gap-[30px] my-[81px] md:flex-row-reverse md:justify-center md:items-center md:gap-10 md:mb-0 lg:gap-20')}>
            <div className="w-full md:w-1/2 border-red-400">
                <img src={imgsrc} className="" />
            </div>
            <div className="w-full md:w-1/2  border-green-400">
                <div className="mb-[30px]">{children}</div>
                <p className="text-[#202e1ec3] font-primaryRegular text-sm text-justify md:text-md lg:text-xl 3xl:text-2xl">{para}</p>
            </div>
        </div>
    </>
}