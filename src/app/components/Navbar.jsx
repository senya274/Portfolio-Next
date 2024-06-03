"use client"
import {motion, AnimatePresence} from "framer-motion"
import { useState } from "react";
import {links} from "@/app/data"
import Link from "next/link";
const Navbar = () => {

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open);
  };
  
  return (
    
    <div className="flex justify-between p-6 ">
      <div className="p-2 rounded-md z-50 ">
        <Link href="/" className="flex  gap-2">
        <span className="text-white flex font-bold text-2xl items-center">Syn</span>
        <span className="flex text-white items-center border-2 text-sm p-1 rounded-md">Front.Dev</span>
        </Link>
      </div>

      <div class="flex items-center flex-col justify-center  z-50" onClick={toggleMenu}>
      <span className=" bg-white w-10 h-1 rounded-full transition-all duration-300"></span>
        <span className=" bg-white w-10 h-1 rounded-full mt-1.5 transition-all duration-300"></span>
        <span className=" bg-white w-10 h-1 rounded-full mt-1.5 transition-all duration-300"></span>
      </div>
      <AnimatePresence>
      {open && (
       <motion.div
       initial={{ opacity: 0  }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{ duration: 0.8 }}
       className="menu fixed top-0 left-0 w-screen h-screen z-40 bg-burger text-white flex flex-col items-center justify-center gap-8 text-4xl overflow-hidden">
       {links.map(link=>(
         <Link className="p-4 w-1/2 text-center transition-all duration-100 ease-in-out rounded-xl md:w-3/12 hover:border-b-2 border-title-color" href={link.url} key={link.title}>{link.title}</Link>
       ))}
       </motion.div>
    )
    }
    </AnimatePresence>
     
    </div>
  );
};

export default Navbar;
