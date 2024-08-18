export default function Badges() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-1/2">
        <Batch url="./Badge1.png"/>
        <img
          src="./badge2.png"
          className=" w-1/2 md:w-1/2  lg:w-[75%] animate-custom-bounce hover:animate-wobble"
        ></img>
      </div>
      <div className="flex w-1/2">
        <img
          src="./b3.png"
          className="w-1/2 md:w-1/2  lg:w-[75%] animate-custom-bounce hover:animate-wobble"
        ></img>
        <img
          src="./Badge1.png"
          className="w-1/2 md:w-1/2  lg:w-[75%] animate-custom-bounce hover:animate-wobble"
        ></img>
      </div>
    </div>
  );
}

function Batch({url} : {url:string}){
     return <div className="w-full flex items-center justify-center ">
           <div className="">
             <img src={url} />
           </div>
     </div>
}