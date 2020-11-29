import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Loader } from "drei";
import { RayshaderModel, MaterialModel } from "./Yuelongxueshan";

const Scene = ({ texture }) => {
  return (
    <>
      <fog attach='fog' args={[0xfff0ea, 70, 150]} />
      <ambientLight />
      <spotLight
        castShadow={texture}
        intensity={1}
        position={texture ? [0, 100, 0] : [70, 20, 30]}
      />
      <pointLight
        position={[0, 20, 0]}
        color={texture ? "white" : "lightblue"}
        intensity={texture ? 1 : 0.4}
      />
      <Suspense fallback={null}>
        {texture ? <RayshaderModel /> : <MaterialModel />}
      </Suspense>
      <OrbitControls />
    </>
  );
};

export const ThreeDimensionModel = ({ texture }) => {
  return (
    <>
      <Canvas
        camera={{
          position: [20, 20, 40],
        }}
        shadowMap={true}
      >
        <Scene texture={texture} fog />
      </Canvas>
      <Loader />
    </>
  );
};
