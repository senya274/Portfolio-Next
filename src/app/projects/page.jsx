import React from "react";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList"
const projectsPage = () => {


  return (
    <div className="bg-dark-blue w-screen h-screen">
      <Navbar></Navbar>
      <div>
        <h2 className="text-title-color text-center text-4xl font-extralight px-8 pt-8  md:px-12 md:text-5xl">
          <span className="neon tracking-widest">PROJECTS</span>
        </h2>
        <div className="">
        <ProjectList></ProjectList>
        </div>
      </div>
    </div>
  );
};

export default projectsPage;
