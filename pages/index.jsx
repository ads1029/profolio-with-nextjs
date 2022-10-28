import Head from "next/head";
import Image from "next/image";
import Navbar from "../src/components/Nav";
import Cat from "../src/components/Cat";
import { useAtom } from "jotai";

const Home = () => {
  const changableTailwindClass = "intro flex flex-col place-items-center";

  return (
    <div>
      <Navbar />
      <div className="flex flex-col place-items-center">
        {/* <a href="https://nichijou.fandom.com/wiki/Sakamoto"> */}
        <div className=" h-[25vw] min-h-[100px]">
          <Cat />
        </div>

        <a href="https://nichijou.fandom.com/wiki/Sakamoto">
          <div
            className="hover:underline mb-10 text-xl text-gray-400 text-center tooltip tooltip-warning"
            data-tip="It is a cat!"
          >
            ☝️ <br /> what is this thing?
          </div>
        </a>
        {/* </a> */}
      </div>

      {/* should not be using prose. Need customise spacing */}
      <div className={changableTailwindClass}>
        <h1 className="font-light text-5xl">
          Hi, my name is{" "}
          <p
            className="inline-block 
          hover:bg-yellow-200 duration-1000"
          >
            {/* half text tall bg hover effect */}
            {/* hover:bg-gradient-to-b hover:from-white hover:via-white hover:to-yellow-300 "> */}
            黄旻杰
          </p>
          <br />
          aka. Minjie Huang
        </h1>

        <h2 className=" mt-10 text-3xl font-light">
          I am a frontend developer <br /> who creates with passion.
        </h2>
      </div>
    </div>
  );
};

export default Home;
