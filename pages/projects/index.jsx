import React from "react";
import Navbar from "../../src/components/Nav";
import Project from "../../src/components/Project";

const Projects = () => {
  const projectList = [
    {
      title: "testing",
      summary: "testing summary",
      techStacks: ["a", "vv", "ccc"],
      githubLink: "https://github.com/",
    },
    {
      title: "GYG",
      summary: "GYG summary",
      techStacks: ["a", "vv", "ccc"],
      githubLink: "https://github.com/",
    },
    {
      title: "Several Shopify Projects",
      summary: "testing summary",
      techStacks: ["a", "vv", "ccc"],
      githubLink: "https://github.com/",
    },
    {
      title: "UTMS",
      summary: "testing summary",
      techStacks: ["a", "vv", "ccc"],
      githubLink: "https://github.com/",
    },
    {
      title: "UPhoto",
      summary: "testing summary",
      techStacks: ["a", "vv", "ccc"],
      githubLink: "https://github.com/",
    },
    {
      title: "Pure Portfolio",
      summary: "testing summary",
      techStacks: ["HTML", "CSS"],
      githubLink: "https://ads1029.github.io/",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        {projectList.map((project, index) => {
          return (
            <Project
              key={`${project.title}-${index}`}
              title={project.title}
              summary={project.summary}
              techStacks={project.techStacks}
              githubLink={project.githubLink}
              reverse={!!(index % 2)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
