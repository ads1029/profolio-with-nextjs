import Head from "next/head";
import Image from "next/image";
import Navbar from "../src/components/Nav";
import Counter, { countAtom } from "../src/components/Counter";
import { useAtom } from "jotai";

const Home = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl"> {`<three.js model spinning>`} </h1>
      <div className="flex flex-col">
        <Counter />
        <div>
          I want to read atom too:
          <div>the counter should also show here: {count}</div>
        </div>
        <button className="btn btn-primary btn-wide">Button</button>
        <button className="btn btn-secondary btn-wide">Two</button>
      </div>
    </div>
  );
};

export default Home;
