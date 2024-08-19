import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import { cn } from "@/utils";

type NavElement = {
   name : string;
   location : string;
   isActive : boolean
}


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [pages,setPages] = useState<NavElement[]>([ {
   name : "home" , 
   location : "/" ,
   isActive : false
 } , {
   name : "about" , 
   location : "/about" ,
   isActive : false
 },{
   name : "courses" , 
   location : "/course" ,
   isActive : false
 },{
   name : "Team" , 
   location : "/" ,
   isActive : false
 },{
   name : "Contact Us" , 
   location : "/" ,
   isActive : false
 }])

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const navigate = useNavigate();

  const handleMobileNavClick = (page:NavElement) => {
    const location :string = page.location;
    setPages((prev)=>{
       
       return prev.map((ele) =>{
        ele.isActive = false;
         if(ele.name===page.name){
          ele.isActive = true;
          return ele;
        }
        return ele;

       }) 
    })
    handleOpen(); 
    navigate(location); 
  };

  return (
    <header className="bg-[#0C3531] text-white fixed top-0 z-10 w-full  shadow-nav">
      <section className="sm:max-w-4xl md:max-w-5xl xl:max-w-[1200px] mx-auto p-4 px-10  md:px-4 flex justify-between  items-center ">
        <img src="/logo.svg" className="w-[30%] md:w-[15%]" onClick={() => { navigate("/") }} />
        <div>
          <button className="text-3xl md:hidden focus:outline-none text-[#ECB148]">
            {open ? (
              <AiOutlineClose
                size={20}
                className="text-[#ECB148]"
                onClick={handleOpen}
              />
            ) : (
              <AiOutlineMenu
                size={20}
                className="text-[#ECB148]"
                onClick={handleOpen}
              />
            )}
          </button>
          <nav className="hidden md:block space-x-8 text-sm" aria-label="main">
            <Link to={"/"} className="hover:opacity-90 font-primaryRegular">
              Home
            </Link>
            <Link to={"/about"} className="hover:opacity-90 font-primaryRegular">
              About Us
            </Link>
            <Link to={"/course"} className="hover:opacity-90 font-primaryRegular">
              Courses
            </Link>
            <Link to={"/"} className="hover:opacity-90 font-primaryRegular">
              Team
            </Link>
            <Link
              to={"/"}
              className="hover:opacity-90 font-primaryRegular py-2 px-3 border border-[#ECB148]"
            >
              {" "}
              Contact us{" "}
            </Link>
          </nav>
        </div>
      </section>
      {open && (
        <section className="top-60  min-h-screen bg-white text-black md:hidden animate-open-menu no-doc-scroll">
          <nav
            className="flex min-h-screen flex-col items-center py-8 "
            aria-label="mobile"
          > 
             {
               pages.map((page)=>{
                return (
            <div className={cn("w-4/5 flex justify-between items-center border-b-[3px]  py-7 border-[#0A574D]", page.isActive&& "border-[#ECB148]")} key={page.name}>
            <button
              onClick={() => handleMobileNavClick(page)}
              className="hover:opacity-90 font-primaryRegular text-[#0A574D] text-2xl"
            >
              {page.name}
            </button>
            <LuArrowUpRight className="text-3xl text-[#0A574D]" />
           </div>
          )
           })
             }
          </nav>
        </section>
      )}
    </header>
  );
}
