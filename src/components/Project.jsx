import React from "react";
import Image from "next/image";
import Tick from "../../public/check_circle_icon.svg";

const Project = ({
  title,
  summary,
  techStacks,
  githubLink,
  display,
  projectImage,
  reverse,
}) => {
  const projectImageDiv = !!projectImage ? (
    <div className="w-[400px] h-[400px] flex-1 relative">
      <Image
        className="rounded-lg"
        src={projectImage}
        alt="project Image"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        quality={10} // ? TBC
      />
    </div>
  ) : (
    <div className="bg-gradient-to-br from-primary w-80 h-80 flex-1" />
  );

  // console.log(techStacks);
  // console.log(techStacks.map((techStack) => console.log(techStack)));

  return (
    // <div className="flex flex-row items-center mb-10 bg-base prose shadow-lg rounded-lg lg:prose-xl">
    <>
      <div className="card max-w-md lg:max-w-4xl lg:card-side  bg-base-100 shadow-xl mb-12">
        <figure>{projectImageDiv}</figure>
        <div className="card-body prose">
          <h1 className="card-title">{title}</h1>
          <h4>{summary}</h4>
          <p></p>
          <div className="flex mb-4 justify-center lg:justify-start">
            {techStacks.map((techStack, key) => {
              return (
                <div className="flex" key="key">
                  <Image src={Tick} alt="tick" />

                  <div className="mx-4">
                    <div>{techStack}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="card-actions justify-center lg:justify-start">
            {!display ? (
              <button className={"btn btn-disabled"}>Display</button>
            ) : (
              <a href={display}>
                <button className={"btn btn-accent"}>Display</button>
              </a>
            )}
            {!!githubLink && (
              <a href={githubLink}>
                <button className="btn btn-accent">Repo</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
