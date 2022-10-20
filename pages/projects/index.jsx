import React from "react";
import Navbar from "../../src/components/Nav";
import Project from "../../src/components/Project";
import SakamotoImage from "../../public/projectImages/Sakamoto.webp";
import GYGAppImage from "../../public/projectImages/GYG-App-1.jpg";
import GYGWebImage from "../../public/projectImages/GYG-Web-1.png";
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
      display: "",
    },
    {
      title: "GYG - ordering App",
      summary: "GYG summary",
      techStacks: ["a", "vv", "ccc"],
      projectImage: GYGAppImage,
      display: "",
    },
    {
      title: "GYG - ordering Web",
      summary: "GYG summary",
      techStacks: ["a", "vv", "ccc"],
      projectImage: GYGWebImage,
      display: "https://order.guzmanygomez.com.au/",
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
      display: "http://utms.com/cn",
    },
    {
      title: "UPhoto",
      summary: "testing summary",
      techStacks: ["a", "vv", "ccc"],
      projectImage: UPhotoImage,
      display: "",
    },
    {
      title: "Pure Portfolio",
      summary: "testing summary",
      techStacks: ["HTML", "CSS"],
      projectImage: purePortfolioImage,
      githubLink: "https://github.com/ads1029",
      display: "https://github.com/ads1029/ads1029.github.io",
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
