import Head from "next/head";
import Image from "next/image";
import Navbar from "../src/components/Nav";
import { Canvas } from "@react-three/fiber";
import { useAtom } from "jotai";

const Home = () => {
  const Floor = (props) => {
    return (
      <mesh {...props} recieveShadow={true}>
        <boxBufferGeometry args={[-10, 10, 30]} />
        <meshPhysicalMaterial color="white" />
      </mesh>
    );
  };

  const Box = (props) => {
    return (
      <mesh {...props} recieveShadow={true} castShadow={true}>
        <boxBufferGeometry />
        <meshPhysicalMaterial color={"white"} />
      </mesh>
    );
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-4xl"> {`<three.js model spinning>`} </h1>

      <Canvas
        shadows={true}
        className=""
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"pink"} intensity={0.7} />
        <Box rotateX={3} rotateY={0.2} />
        <Floor position={[0, -11, 10]} />
      </Canvas>

      <div className="intro prose-xl flex flex-col place-items-center">
        <h1>Hi, I am Minjie</h1>
        <h2>title h2</h2>
        <h3>title h3</h3>
        <p>pppppppp</p>
      </div>
    </div>
  );
};

export default Home;
