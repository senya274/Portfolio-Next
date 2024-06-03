import { projects } from "../../data.js";
import Navbar from "@/app/components/Navbar.jsx";
import Image from "next/image.js";
import Link from "next/link.js";

const page = ({ params }) => {
  const project = projects.find(
    (project) => project.id === parseInt(params.id)
  );

  // Проверяем, найден ли проект
  if (!project) {
    return <div>Проект не найден</div>;
  }
  console.log(project); // Вывод информации о проекте в консоль

  return (
    <div className="w-screen bg-dark-blue">
      <Navbar></Navbar>
      <div
        className="relative w-full h-screen bg-cover bg-center flex flex-col items-center py-32"
        style={{ backgroundImage: `url(${project.background})` }}
      >
        <div className="absolute inset-0 backdrop-filter backdrop-blur-md bg-opacity-50"></div>
        <div className="flex justify-center flex-col items-center bg-slate-100 p-12 gap-8">
        <h1 className="text-black font-[700] text-[40px] tracking-widest md:text-[100px] relative z-10">
          {project.title}
        </h1>
        <div className="relative z-10">
          <Link
            className="mt-10 uppercase w-full text-black text-center text-2xl transition-all p-2 duration-100 ease-in-out rounded-xl md:w-[100px] border-b-4 hover:border-t-4 border-title-color"
            href={`${project.url}`}
            target="_blank"
          >
            open project
          </Link>
        </div>
        </div>
       
      </div>

      <div className="w-full text-center md:text-start mt-24">
        <span className="text-title-color text-4xl md:text-6xl md:px-8 my-12 ">
          01 Description
        </span>
      </div>

      <div className="text-white py-6  gap-8 flex-col mx-4   md:full md:flex md:flex-col md:mx-4 lg:w-full lg:flex lg:flex-row">
        <div className="flex-col w-full my-6  md:px-12 md:my-12 lg:w-full">
          <h2 className="italic text-light-blue uppercase text-center text-3xl md:text-4xl md:text-start">
            “Main idea of project”
          </h2>
          <div className="flex justify-between my-8 md:my-24 text-2xl ">
            <span>Reading Time</span>
            <span>1 min</span>
          </div>

          <div className="">
            <p className="text-xl md:w-fit md:text-2xl lg:text-3xl   lg:w-[80%]">
              {project.descriptionFull}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center relative lg:w-1/2  ">
          <Image src="/idea.png" width={350} height={350}></Image>
        </div>
      </div>

      <div className="w-full text-center md:text-end">
        <span className="text-title-color text-4xl md:text-6xl md:px-8 my-12">
          02 Technologies
        </span>
      </div>
      <div className="text-white mx-4 py-6 flex-col  md:flex lg:w-full lg:flex lg:flex-row-reverse md:full md:mx-4">
        <div className="flex-col w-full my-6  md:px-12 md:my-12  lg:w-full  ">
          <h2 className="italic text-light-blue  uppercase  text-center text-3xl md:text-4xl md:text-start">
            “TECHNOLOGIES THAT HAVE BEEN USED...”
          </h2>
          <div className="flex justify-between my-8  md:my-24 text-2xl ">
            <span>Reading Time</span>
            <span>1 min</span>
          </div>

          <div className="">
            <p className="text-xl md:w-fit md:text-2xl lg:text-3xl lg:w-[80%]" style={{ whiteSpace: 'pre-line' }}>
            {project.usedTech.join('\n')}

            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center relative lg:w-1/2  ">
          <Image src="/code.png" width={350} height={350}></Image>
        </div>
      </div>

      <div className="w-full text-center md:text-start">
        <span className="text-title-color text-4xl md:text-6xl md:px-8 my-12">
          03 Goal
        </span>
      </div>

      <div className="text-white py-6  gap-8 flex-col mx-4   md:full  md:mx-4 lg:w-full lg:flex lg:flex-row">
        <div className="flex-col w-full my-6  md:px-12 md:my-12  lg:w-full ">
          <h2 className="italic text-light-blue uppercase text-center text-3xl md:text-4xl md:text-start">
            “Final goal of project”
          </h2>
          <div className="flex justify-between my-8 md:my-24 text-2xl ">
            <span>Reading Time</span>
            <span>1 min</span>
          </div>

          <div className="">
            <p className="text-xl md:w-fit md:text-2xl lg:text-3xl  lg:w-[80%]">
              {project.idea}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center relative lg:w-1/2">
          <Image src="/goal.png" width={350} height={350}></Image>
        </div>
      </div>
    </div>
  );
};

export default page;
