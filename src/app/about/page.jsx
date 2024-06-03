"use client";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Skills from "../components/Skills";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="w-screen  bg-dark-blue">
      <Navbar></Navbar>
      <div className=" 2xl:flex flex-col items-center">
        <motion.div
          className="py-8 w-screen  md:px-8 md:max-w-screen-2xl md:flex flex-row justify-between gap-8"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col px-8 mb-8 ">
            <h1 className="w-full leading-normal text-title-color text-4xl font-extralight md:text-5xl md:max-w-screen-2xl">
              Let's get to know
              <br></br>
              each other
              <br></br>
              better
            </h1>
            <p className="text-white text-xl mt-4 w-full  md:text-2xl font-thin md:w-2/3">
              My name is Bogdan, and I'm a Front-end Developer. <br></br>
              <br></br>
              With one year of experience, I've honed my skills in creating
              intuitive user interfaces and implementing responsive designs.
              <br></br>
              <br></br> Passionate about web development, I thrive on turning
              innovative ideas into engaging digital experiences.
            </p>
            <div className="my-12 w-full flex gap-8 md:my-14">
              <Link
                href="/contact"
                className="uppercase w-full text-white text-center text-xl transition-all duration-100 ease-in-out rounded-xl md:w-[150px] border-b-2 hover:border-t-2 border-title-color"
              >
                Contact Me
              </Link>
              <Link
                href="/projects"
                className="uppercase w-full text-white text-center text-xl transition-all duration-100 ease-in-out rounded-xl md:w-[150px] border-b-2 hover:border-t-2 border-title-color"
              >
                Projects
              </Link>
            </div>
          </div>
          <div className="flex justify-center bg-black w-full rounded-md md:w-3/4 h-full">
            <Image
              src="/coding.gif"
              className="rounded-full md:hidden "
              width={300}
              height={250}
            ></Image>
            <Image
              src="/coding.gif"
              className="hidden md:block rounded-md"
              width={300}
              height={100}
            ></Image>
          </div>
        </motion.div>

        <div className="bg-wave h-[100px] w-full bg-cover md:bg-center md:h-[150px]"></div>

        <motion.div
          className=" px-8 text-white flex flex-col my-12  md:flex  md:px-12 md:max-w-screen-2xl"
          initial={{ x: -1500 }}
          viewport={{ once: true }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className=" flex flex-col  ">
            <h2 className="text-title-color text-4xl font-extralight my-8 tracking-widest text-center md:text-start md:text-5xl">
              Who am I ?
            </h2>
            <p className="w-full text-xl md:text-2xl font-thin md:w-12/12">
              I'm just a simple guy from Ukraine, striving to make the world a
              bit better. Every day, I aim to improve and grow, constantly
              challenging myself to be better than I was yesterday in every
              aspect of my life.
              <br></br>
              <br></br>
              The beginning of 2023 was an important time for me in my career,
              as I decided to start learning Front-End Development
              <br></br>
              <br></br>I am usually inspired by challenging and interesting
              challenges. Most of the time I learn from YouTube and various
              documentations, I am also in the company of people who are much
              higher level than me, so I always strive to rise to a higher level
            </p>
          </div>
        </motion.div>

        <div className="bg-wave2 h-[100px] w-full bg-cover  md:h-[150px] md:bg-no-repeat "></div>

        <motion.div
          className="px-8 py-8 md:px-12  "
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-title-color text-4xl font-extralight my-4 tracking-widest text-center md:text-start md:text-5xl ">
            SKILLS
          </h2>
          <div className="flex flex-col items-center gap-4 w-full md:flex-row  md:items-start">
            <div className="my-4 ">
              <p className="w-full my-4 text-white text-xl md:text-2xl font-thin md:w-10/12  ">
                Most of the time I do{" "}
                <span className="text-2xl text-light-blue md:text-3xl">
                  Front-End
                </span>{" "}
                development, but I also have basic Back-End skills.
              </p>
              <p className="w-full my-4 text-white text-xl md:text-2xl font-thin md:w-10/12 ">
                I know and use for Front-End: HTML, CSS, JS, React, Next.js,
                Tailwind, and for sure Artificial Intelligence(AI)
              </p>
              <p className="w-full my-4 text-white text-xl md:text-2xl font-thin md:w-10/12 ">
                Also,{" "}
                <span className="text-2xl text-light-blue md:text-3xl">
                  Familiar
                </span>{" "}
                with Node.js, MongoDB, Express
              </p>
              <p className="w-full my-4 text-white text-xl md:text-2xl font-thin md:w-10/12 ">
                Same way i like to use different  <span className="text-2xl text-light-blue md:text-3xl">
                  Libraries
                </span>,{" "} often use most popular libraries which make development much easier and faster
             
       
              </p>
            </div>
            <div className="my-8 mx-10">
              <Skills></Skills>
            </div>
          </div>
        </motion.div>

        <div className="bg-wave3 h-[100px] w-full bg-cover  md:h-[150px] md:bg-no-repeat "></div>
        <motion.div
          className="py-8  w-screen h-screen"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-title-color text-center text-4xl font-extralight bg-black  px-8 pt-8  md:px-12 md:text-start md:text-5xl">
            <span className="neon tracking-widest">EXPERIENCE</span>
          </h2>
          <div className="flex justify-between bg-black bg-tdBg bg-contain bg-top w-screen md:bg-right bg-no-repeat h-8/12">
            <div className="mx-8 my-12 pt-32 flex flex-col md:mx-12 md:pt-4">
              <h2 className="text-red-600 tracking-widest text-center text-4xl font-bold my-4 md:text-start">
                Traffic Devils
              </h2>
              <p className="text-white my-4 text-xl  md:my-4">
                <span className="text-red-600 text-2xl">Position</span>:
                Front-End Developer
              </p>
              <p className="text-white my-4 text-xl  md:my-4">
                <span className="text-red-600 text-2xl">From</span>: 2023-2024
              </p>
              <p className="text-white my-4 text-xl  md:my-4">
                <span className="text-red-600 text-2xl">Tech</span>: HTML, CSS,
                JavaScript, Tailwind, Figma
              </p>
              <p className="text-white my-4 text-xl w-full  md:my-4  md:w-1/3">
                <span className="text-red-600 text-2xl">Responsibilities</span>:{" "}
                <br></br>Development of Landing pages from scratch, including
                concept, design and implementation, using modern tools and
                technologies such as HTML5, CSS3 and JavaScript.
                <br></br>
                <br></br>
                Implementation of responsive and cross-browser development using
                various libraries, including Tailwind, Slider.js, Ion-range
                slider. Working with mockups and implementing user interfaces
                using responsive design principles
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
