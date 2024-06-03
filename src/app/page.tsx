"use client";
import Image from "next/image";

import Link from "next/link";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-mainBg bg-no-repeat bg-cover h-screen  bg-center">
      <Navbar></Navbar>

      <div className="w-screen  flex flex-col justify-between">
        <div>
          <div className="w-full flex text-center flex-col items-center my-12">
            <motion.div className=""
              initial={{ x: -1500 }}
              viewport={{ once: true }}
               animate={{ x: 0 }}
             transition={{duration: 0.5, delay: 0.5}}>
            <h2 className="text-3xl  px-4 my-8 text-white md:w-full md:text-5xl">
              I’m a <span className="neon neon-flick text-title-color">Front-End</span> developer from Ukraine.
            </h2>
            </motion.div>
            <motion.div className=""
            initial={{ x: 1500 }}
            viewport={{ once: true }}
             animate={{ x: 0 }}
           transition={{duration: 0.5, delay: 1}}>
            <p className="text-md px-4 my-8 text-white md:w-full md:text-xl md:my-4">
              Most of the time I do Front-End development, but I also have basic
              Back-End skills.
            </p>
            </motion.div>
            
          </div>

          <div className="w-10/12 flex items-center justify-end text-white ">
            <motion.div className="w-max"
             initial={{ x: -1500 }}
             viewport={{ once: true }}
              animate={{ x: 0 }}
            transition={{duration: 0.5, delay: 1.5}}>
            <Link href="/about">
            <button className="relative  border-transparent  px-4 py-2 bg-transparent text-white font-bold text-lg focus:outline-none overflow-hidden">
              <span className="uppercase">About Me</span>
              <span className="absolute top-0 left-0 w-full h-full border-t-2 border-b-2  border-transparent  animate-ray "></span> 
            </button>
            </Link>
            </motion.div>
            
          </div>
        </div>

        <motion.div
         initial={{ x: "100%", y: "100%" }}
         animate={{ x: 0, y: 0 }}
         transition={{ duration: 1, delay: 1 }}
         className="absolute bottom-0 right-0 w-full"
         >
        <div className="absolute py-4 right-0 flex justify-center  rounded-none w-full   bottom-0 z-10 md:w-2/12 md:rounded-l-2xl ">
          <div className="flex gap-10">
            <Link href="https://www.linkedin.com/in/synbohdan/" target="_blank">
            <Image
              src="/linkedin.png"
              width={50}
              height={50}
              alt="linkedin"
              className="border-b-2 border-title-color p-2 rounded-xl"
            ></Image>
            </Link>
            <Link href="https://github.com/senya274" target='_blank'>
            <Image
              src="/github.png"
              width={50}
              height={50}
              alt="Github"
              className="border-b-2 border-title-color p-2 rounded-xl"
            ></Image>
            </Link>
            <Link href="https://t.me/senya_s24" target='_blank'>
            <Image
              src="/telegram.png"
              width={50}
              height={50}
              alt="Telegram"
              className="border-b-2 border-title-color p-2 rounded-xl"
            ></Image>
            </Link>
           
          </div>
        </div>
        </motion.div>
      </div>

    </div>
  );
}
