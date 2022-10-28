import React, { useState, useRef } from "react";
import Navbar from "../../src/components/Nav";
import Project from "../../src/components/Project";
import SakamotoImage from "../../public/projectImages/Sakamoto.webp";
import GYGAppImage from "../../public/projectImages/GYG-App-1.jpg";
import GYGWebImage from "../../public/projectImages/GYG-Web-1.png";
import BilliniImage from "../../public/projectImages/portfolio-shopify-billini.png";
import UTMSImage from "../../public/projectImages/portfolio-UTMS.png";
import UPhotoImage from "../../public/projectImages/portfolio-Uphoto.png";
import purePortfolioImage from "../../public/projectImages/portfolio-pure-portfolio.png";
import catGIF from "../../public/runningCat.gif";
import Image from "next/image";
import Tick from "../../public/check_circle_icon.svg";

const Projects = () => {
  const projectList = [
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

  const sakamoto = {
    title: "Sakamoto",
    summary:
      "A cat that speaks in human. Coming from the one of the best Anime Series Nichijo. Awesome!",
    techStacks: ["a", "powerful", "cat"],
    projectImage: SakamotoImage,
    display: "",
  };

  const [showEgg, setShowEgg] = useState(false);

  let sakamotoClass = `card max-w-md lg:max-w-4xl lg:card-side  bg-base-100 shadow-xl mb-12 ${
    showEgg ? "" : "hidden"
  }`;

  const handleScroll = () => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const divRef = useRef();

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

        {/* Sakamoto eastern egg */}

        <div className={sakamotoClass}>
          <figure>
            <div
              className="w-[400px] h-[400px] flex-1 relative 
                  duration-500 hover:scale-105"
            >
              <Image
                className="rounded-lg"
                src={sakamoto.projectImage}
                alt="project Image"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                quality={40} // ? TBC
              />
            </div>
          </figure>
          <div className="card-body prose place-items-center lg:place-items-start ">
            <h1 className="card-title">{sakamoto.title}</h1>
            <h4>{sakamoto.summary}</h4>
            <p></p>
            <div className="flex mb-4 justify-center lg:justify-start">
              {sakamoto.techStacks.map((techStack, key) => {
                return (
                  <div className="flex" key={key}>
                    <Image src={Tick} alt="tick" />
                    <div className="mx-4">{techStack}</div>
                  </div>
                );
              })}
            </div>
            <div className="card-actions justify-center lg:justify-start">
              {sakamoto.display ? (
                <a href={display}>
                  <button className={"btn btn-primary"}>Display</button>
                </a>
              ) : (
                <button className={"btn btn-disabled"}>Display</button>
              )}
              {!!sakamoto.githubLink && (
                <a href={sakamoto.githubLink}>
                  <button className="btn btn-primary">Repo</button>
                </a>
              )}
            </div>
          </div>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => {
            setShowEgg(!showEgg);
            handleScroll();
          }}
          ref={divRef}
        >
          <Image src={catGIF} alt="cat gif" width={50} height={50} />
        </div>
      </div>
    </>
  );
};

export default Projects;
