"use client";
import Image from "next/image";
import { useState} from "react";

import {motion} from "framer-motion"
const Skills = ( ) => {
  const icons = [
    "/reactIcon.png",
    "/nextIcon.png",
    "/htmlIcon.png",
    "/jsIcon.png",
    "/nodeIcon.png",
    "/cssIcon.png",
    "/tailwindIcon.png",
    "/aiIcon.png",
    "/mongoIcon.svg"
  ];
  const [rotationAngle, setRotationAngle] = useState(0);

  return (
    <div className="flex my-12 ">
    <motion.div className="relative h-32 w-32 "
    
    animate={{ rotate: 360 }}
    transition={{
        loop: Infinity,
        duration: 60, 
        ease: "linear"
      }}
    >
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute bg-white p-3 rounded-full top-1/2 left-1/2 "
          style={{
         
            transform: `translate(-50%, -50%) rotate(${rotationAngle + index * (360 / icons.length)}deg) translateY(-100px) rotate(-${rotationAngle + index * (360 / icons.length)}deg)`
          }}
        >
            <motion.div className=""
             animate={{ rotate: -360 }}
             transition={{
                 loop: Infinity,
                 duration: 60, 
                 ease: "linear"
               }}>
            <Image src={icon} alt="icon" width={70} height={70} />
            </motion.div>
        
        </div>
        
      ))}
    </motion.div>

 

  </div>
  );
};

export default Skills;
