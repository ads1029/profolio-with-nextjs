import React from "react";
import Navbar from "../../src/components/Nav";
import Project from "../../src/components/Project";

const Projects = () => {
  const projectList = [
    "testing",
    "GYG",
    "Several Shopify Projects",
    "UTMS",
    "UPhoto",
  ];
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        {projectList.map((project, index) => {
          return (
            <Project
              key={`${project}-{index}`}
              title={project}
              reverse={!!(index % 2)}
            />
          );
        })}
        <Project title="testing" reverse />
        <Project title="testing" />
      </div>
    </>
  );
};

export default Projects;
