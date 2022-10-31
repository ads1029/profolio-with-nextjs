import Head from "next/head";
import Image from "next/image";
import Navbar from "../src/components/Nav";
import Cat from "../src/components/Cat";
import { useAtom } from "jotai";
import Link from "next/link";

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
            className="hover:underline mb-10 text-sm text-gray-400 text-center tooltip tooltip-warning"
            data-tip="It is a cat!"
          >
            ☝️ <br /> what is this?
          </div>
        </a>
        {/* </a> */}
      </div>

      {/* should not be using prose. Need customise spacing */}
      <div className={changableTailwindClass}>
        <h1 className="font-light lg:text-5xl text-3xl">
          Hi, I am
          <p
            className="inline-block mx-4
            bg-gradient-to-b from-white via-yellow-100 to-yellow-300 "
          >
            {/* half text tall bg hover effect */}
            {/* hover:bg-yellow-200 duration-1000"> */}
            黄旻杰
          </p>
          <br />
          aka. Minjie Huang
        </h1>

        <h2 className=" mt-10 text-2xl lg:text-3xl font-light">
          I am a frontend developer <br /> who creates with passion.
        </h2>

        <Link href="/projects">
          <button className="btn btn-outline btn-primary text-2xl mt-24 lg:mt-10">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
