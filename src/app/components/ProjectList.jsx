"use client";
import Link from "next/link";
import Image from "next/image";
import {projects} from "/src/app/data.js"
import { motion, AnimatePresence } from "framer-motion";
const ProjectList = () => {
  
  const getTechStyle = (tech) => {
    switch (tech) {
      case "HTML":
        return " border-red-400  rounded-xl"; 
      case "CSS":
        return " border-blue-400 rounded-xl"; 
      case "JavaScript":
        return " border-yellow-400 rounded-xl"; 
        case "React":
          return "border-purple-400 rounded-xl"
      case "Next.js":
        return " border-green-400 rounded-xl"; 
      case "Tailwind":
        return " border-cyan-400 rounded-xl";
        case "Prisma":
          return " border-green-400 rounded-xl"; 
      case "OAuth 2.0":
        return "border-orange-400 rounded-xl";
        case "KindeAuth":
        return "border-purple-400 rounded-xl"
      default:
        return " border-gray-300 rounded-xl";
        
    }
  };

  return (
    <div className="flex  w-screen bg-dark-blue">
      <div className="flex flex-col items-center gap-8 w-full my-8 md:mx-12 md:flex md:flex-col xl:flex-row xl: justify-center ">
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.3 }}
              whileHover={{ y: -20 }}
              
              className="bg-cardBg p-4 w-10/12  rounded-lg flex flex-col justify-between  md:w-[700px] xl:w-[400px]  h-full"
            >
              <div className="relative flex justify-center">
                
                <Image
                  src={project.image}
                  width={600}
                  height={300}
                  className="rounded-xl border-2"
                  alt={project.title}
                />
              </div>

              <h2 className="my-4 uppercase text-2xl text-light-blue">
                {project.title}
              </h2>
              <div className="flex gap-4 my-4 flex-wrap">
                {project.technologies.map((tech) => (
                  <div
                    className={`text-white border-2 py-2 px-4 ${getTechStyle(tech)}`}
                    key={tech}
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <p className="my-4 text-xl text-white">{project.descriptionShort}</p>
              <div className="flex justify-end mx-4 uppercase">
                <Link
                  className="uppercase w-full text-white text-center text-2xl transition-all duration-100 ease-in-out rounded-xl md:w-[100px] border-b-2 hover:border-t-2 border-title-color"
                  href={`/projects/${project.id}`}
                >
                  More
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectList;
