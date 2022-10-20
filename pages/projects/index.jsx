import React from "react";
import Navbar from "../../src/components/Nav";
import Project from "../../src/components/Project";
import SakamotoImage from "../../public/projectImages/Sakamoto.webp";
import GYGImage from "../../public/projectImages/GYG-App-1.jpg";
import BilliniImage from "../../public/projectImages/portfolio-shopify-billini.png";
import UTMSImage from "../../public/projectImages/portfolio-UTMS.png";
import UPhotoImage from "../../public/projectImages/portfolio-Uphoto.png";
import purePortfolioImage from "../../public/projectImages/portfolio-pure-portfolio.png";

const Projects = () => {
  const projectList = [
    {
      title: "testing",
      summary: "testing summary",
      techStacks: ["a", "vv", "ccc"],
      projectImage: SakamotoImage,
      display: "https://ads1029.github.io/",
    },
    {
      title: "GYG",
      summary: "GYG summary",
      techStacks: ["a", "vv", "ccc"],
      projectImage: GYGImage,
      display: "https://ads1029.github.io/",
    },
    {
      title: "Billini",
      summary: "testing summary",
      techStacks: ["a", "vv", "ccc"],
      projectImage: BilliniImage,
      display: "https://www.billini.com/",
    },
    {
      title: "UTMS",
      summary: "testing summary",
      techStacks: ["a", "vv", "ccc"],
      projectImage: UTMSImage,
      display: "https://ads1029.github.io/",
    },
    {
      title: "UPhoto",
      summary: "testing summary",
      techStacks: ["a", "vv", "ccc"],
      projectImage: UPhotoImage,
      display: "https://ads1029.github.io/",
    },
    {
      title: "Pure Portfolio",
      summary: "testing summary",
      techStacks: ["HTML", "CSS"],
      projectImage: purePortfolioImage,
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
