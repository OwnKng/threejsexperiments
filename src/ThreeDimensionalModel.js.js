import React, { useRef, Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { OrbitControls } from "drei";
import Model from "./Yuelongxueshan";

const Scene = () => {
  return (
    <>
      <ambientLight />
      <pointLight intensity={1} position={[0, 40, 50]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </>
  );
};

export const ThreeDimensionModel = () => {
  return (
    <>
      <h1>Hutiaoxia</h1>
      <Canvas
        camera={{
          position: [0, 80, 100],
        }}
        shadowMap={true}
      >
        <Scene />
      </Canvas>
    </>
  );
};