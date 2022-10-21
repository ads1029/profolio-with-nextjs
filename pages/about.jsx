import React from "react";
import Nav from "../src/components/Nav";
const About = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="prose">
        <h1>h1 title</h1>
        <div className="flex flex-row">
          <div className="bg-gradient-to-br from-primary w-80 h-80 col-start-1  shadow-xl" />
          <div className="bg-gradient-to-tl from-accent to-zinc-100 w-80 h-80 col-start-2 -ml-20 mt-20 shadow-xl" />
        </div>
        <h2>h2</h2>
        <h3>h3</h3>
      </div>
      <h2>maybe move github and linkedin to here?</h2>
    </div>
  );
};

export default About;
