import React from "react";
import Image from "next/image";
import Tick from "../../public/check_circle_icon.svg";

const Project = ({ title, summary, techStacks, githubLink, reverse }) => {
  return (
    <div className="flex flex-row items-center mb-10 bg-base prose shadow-lg rounded-lg">
      {reverse || <div className="bg-slate-600 w-80 h-40 mr-10" />}
      <div className="flex flex-col">
        <h3 className="mb-1 ">{title}</h3>
        <p className="mb-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          pariatur ipsa maiores quod similique unde asperiores ut tempora dolor.
          Obcaecati?
        </p>
        <a href="" className="mb-1">
          repo
        </a>

        <div className="flex mb-4">
          <Image src={Tick} alt="tick" className="fill-slate-100" />
          <div className="mx-4 ">Lorem, ipsum.</div>
        </div>
      </div>
      {reverse && <div className="bg-slate-600 w-80 h-40" />}
    </div>
  );
};

export default Project;
