import Head from "next/head";
import Image from "next/image";
import Navbar from "../src/components/Nav";
import Cat from "../src/components/Cat";
import { useAtom } from "jotai";

const Home = () => {
  const changableTailwindClass =
    "intro prose-xl flex flex-col place-items-center";

  return (
    <div>
      <Navbar />
      <div className="flex flex-col place-items-center">
        {/* <a href="https://nichijou.fandom.com/wiki/Sakamoto"> */}
        <div className=" h-[25vw] min-h-[100px]">
          <Cat />
        </div>
        {/* </a> */}
      </div>

      <div className={changableTailwindClass}>
        <h1 className="text-center">
          Hi, my name is 黄旻杰 <br />
          (Minjie Huang)
        </h1>
        <div className="tooltip h-[25vw] min-h-[100px]" data-tip="hello">
          hallo
        </div>
        <h2>title h2</h2>
        <h3>title h3</h3>
        <p>pppppppp</p>
      </div>
    </div>
  );
};

export default Home;
