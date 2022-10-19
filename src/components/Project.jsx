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
    <div className="w-80 h-80 flex-1 relative">
      <Image
        src={projectImage}
        alt="project Image"
        layout="fill"
        objectFit="cover"
      />
      {/* <div className="bg-gradient-to-br from-accent w-80 h-80 flex-1" /> */}
    </div>
  ) : (
    <div className="bg-gradient-to-br from-primary w-80 h-80 flex-1" />
  );

  // console.log(techStacks);
  // console.log(techStacks.map((techStack) => console.log(techStack)));

  return (
    // <div className="flex flex-row items-center mb-10 bg-base prose shadow-lg rounded-lg lg:prose-xl">
    <div className="flex flex-row mb-10 bg-base prose shadow-lg rounded-lg lg:prose-xl">
      {reverse || projectImageDiv}
      <div className="flex flex-col flex-1 mx-2">
        <h3>{title}</h3>
        <p>
          {summary}
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo
          itaque assumenda id saepe ducimus doloribus inventore repellendus,
          maiores tenetur.
        </p>

        <div className="flex justify-between mr-4">
          {!!display && (
            <a href={display} className="mb-2">
              display
            </a>
          )}
          {!!githubLink && (
            <a href={githubLink} className="mb-2">
              repo
            </a>
          )}
        </div>

        <div className="flex mb-4">
          {techStacks.map((techStack) => {
            return (
              <>
                <Image src={Tick} alt="tick" className="fill-slate-100" />
                <div className="mx-4 ">{techStack}</div>
              </>
            );
          })}
        </div>
      </div>
      {reverse && projectImageDiv}
    </div>
  );
};

export default Project;
