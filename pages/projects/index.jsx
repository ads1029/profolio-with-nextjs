import React from "react";
import Navbar from "../../src/components/Nav";
import Project from "../../src/components/Project";

const Projects = () => {
  const projectList = [
    {
      title: "testing",
      summary: "testing summary",
      techStacks: ["a", "vv", "ccc"],
      projectImage: "/../public/projectImages/Sakamoto.webp",
      display: "https://ads1029.github.io/",
    },
    {
      title: "GYG",
      summary: "GYG summary",
      techStacks: ["a", "vv", "ccc"],
      projectImage: "/../public/projectImages/GYG-App-1.jpg",
      display: "https://ads1029.github.io/",
    },
    {
      title: "Billini",
      summary: "testing summary",
      techStacks: ["a", "vv", "ccc"],
      projectImage: "/../public/projectImages/portfolio-shopify-billini.png",
      display: "https://www.billini.com/",
    },
    {
      title: "UTMS",
      summary: "testing summary",
      techStacks: ["a", "vv", "ccc"],
      projectImage: "/../public/projectImages/portfolio-UTMS.png",
      display: "https://ads1029.github.io/",
    },
    {
      title: "UPhoto",
      summary: "testing summary",
      techStacks: ["a", "vv", "ccc"],
      projectImage: "/../public/projectImages/portfolio-Uphoto.png",
      display: "https://ads1029.github.io/",
    },
    {
      title: "Pure Portfolio",
      summary: "testing summary",
      techStacks: ["HTML", "CSS"],
      projectImage: "/../public/projectImages/portfolio-pure-portfolio.png",
      githubLink: "https://ads1029.github.io/",
      display: "https://ads1029.github.io/",
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
              display={project.display}
              projectImage={project.projectImage}
              reverse={!!(index % 2)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
