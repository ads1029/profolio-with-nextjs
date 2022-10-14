import React from "react";
import Navbar from "../../src/components/Nav";
import Project from "../../src/components/Project";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <Project title="testing" reverse />
        <Project title="testing" />
        <Project title="testing" />
      </div>
    </>
  );
};

export default Projects;
