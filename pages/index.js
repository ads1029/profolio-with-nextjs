import Head from "next/head";
import Image from "next/image";
import Navbar from "../src/components/Nav";
import Counter, { countAtom } from "../src/components/Counter";
import { useAtom } from "jotai";

export default function Home() {
  const count = useAtom(countAtom);

  return (
    <div>
      <Navbar />
      <h1>Hello world</h1>
      <div className="flex flex-col">
        <Counter />
        <div>
          I want to read atom too:
          <div>the counter should also show here: {count}</div>
        </div>
        <button className="btn mx-4">Button</button>
        <button class="btn btn-secondary">Two</button>
      </div>
    </div>
  );
}
