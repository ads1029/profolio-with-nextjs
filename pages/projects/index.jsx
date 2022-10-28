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
      title: "Sakamoto Sang",
      summary:
        "A cat that speaks in human. Coming from the one of the best Anime Series Nichijo. Awesome!",
      techStacks: ["a", "powerful", "cat"],
      projectImage: SakamotoImage,
      display: "",
    },
    {
      title: "GYG - ordering App - 2022",
      summary:
        "An ordring App that helps Guzman Y Gomez refine the ordering experience into a next level",
      techStacks: ["ReactNative", "Redux", "Typescript"],
      projectImage: GYGAppImage,
      display:
        "https://apps.apple.com/au/app/guzman-y-gomez-gyg-mexican/id595292048",
    },
    {
      title: "GYG - ordering Web - 2022",
      summary:
        "An ordring Web App that helps Guzman Y Gomez refine the ordering experience into a next level",
      techStacks: ["React", "Redux", "Sass", "Typescript"],
      projectImage: GYGWebImage,
      display: "https://order.guzmanygomez.com.au/",
    },
    {
      title: "Billini - 2021",
      summary:
        "A shopify shopping website which helps the customer feel a touch of refreshing",
      techStacks: ["Liquid", "Vue", "Sass"],
      projectImage: BilliniImage,
      display: "https://www.billini.com/",
    },
    {
      title: "UTMS - 2020",
      summary:
        "A supply chain B2B system using blockchain technology to help the clients monitor the status of their orders",
      techStacks: ["React", "Redux", "ElementUI"],
      projectImage: UTMSImage,
      display: "http://utms.com/cn",
    },
    {
      title: "UPhoto - 2020",
      summary:
        "A camera App using blockchain technology to help the users capture their photos, files, and other information immutably",
      techStacks: ["ReactNative", "Redux"],
      projectImage: UPhotoImage,
      display: "",
    },
    {
      title: "Pure Portfolio - 2020",
      summary:
        "A pure portfolio building with pure HTML and CSS, mainly showing the potential of CSS",
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
        <div>running cat image east egg</div>
      </div>
    </>
  );
};

export default Projects;
