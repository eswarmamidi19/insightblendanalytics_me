import Navbar from "./components/NavBar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
function App() {
  return (
    <>
     <div className="min-h-full   bg-[#F7FAEB]">
           <Navbar/>   
           <div className="w-full  flex justify-center">
             <Outlet/>
           </div>     
           <Footer/>
     </div>     
    </>
  )
}

export default App

