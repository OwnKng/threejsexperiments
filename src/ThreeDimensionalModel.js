import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useProgress, Html } from "drei";
import { RayshaderModel, MaterialModel } from "./Yuelongxueshan";

const Scene = ({ texture }) => {
  return (
    <>
      <fog attach='fog' args={[0xfff0ea, 50, 200]} />
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
      <Suspense fallback={<Loader />}>
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
          fov: 100,
          position: [30, 20, 10],
        }}
        shadowMap={true}
      >
        <Scene texture={texture} fog />
      </Canvas>
    </>
  );
};

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html style={{ margin: 0, padding: 0, textAlign: "center" }}>
      <div style={{ fontSize: "2rem" }}>{progress}% loaded</div>
    </Html>
  );
};
