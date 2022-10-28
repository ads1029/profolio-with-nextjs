import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";

import Model from "./Model";
import CatModel from "./CatModel";

const Cat = () => {
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
        <boxBufferGeometry args={[2, 2, 2]} />
        <meshPhysicalMaterial color={"white"} />
      </mesh>
    );
  };

  // try out 3.js
  const MyRotatingBox = () => {
    const myMesh = React.useRef();

    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      myMesh.current.rotation.y = a;
    });

    return (
      <mesh castShadow ref={myMesh} position={[0, 0, 0]}>
        <boxBufferGeometry args={[3, 3, 3]} />
        <meshPhongMaterial color="violet" />
      </mesh>
    );
  };

  const MyRotateCat = () => {
    const myMesh = React.useRef();

    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      myMesh.current.rotation.y = a;
    });

    return (
      <mesh castShadow ref={myMesh} position={[0, 0, 0]}>
        <CatModel />
      </mesh>
    );
  };

  const MyRotateRoom = () => {
    const myMesh = React.useRef();

    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      myMesh.current.rotation.y = a;
    });

    return (
      <mesh castShadow ref={myMesh} position={[0, 0, 0]}>
        <Model />
      </mesh>
    );
  };

  return (
    <>
      <Canvas camera={{ position: [0, 10, -26], fov: 60 }}>
        {/* <MyRotatingBox /> */}
        <MyRotateCat />

        {/* 3 types of lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.2}
          shadow-mapSize-Width={1024}
          shadow-mapSize-Height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
        />
        <pointLight position={[-10, 0, 0]} intensity={0.2} />

        <OrbitControls />
        {/* groups */}
        <group>
          <mesh>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" />
          </mesh>
        </group>
      </Canvas>
    </>
  );
};

export default Cat;
