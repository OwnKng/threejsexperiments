import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Html, useProgress } from "drei";
import { RayshaderModel, MaterialModel } from "./Yuelongxueshan";
import { motion } from "framer-motion";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <motion.div
        style={{ width: progress, height: 10, background: "white" }}
      ></motion.div>
    </Html>
  );
};

const Scene = ({ texture }) => {
  return (
    <>
      <ambientLight />
      <spotLight
        castShadow={texture}
        intensity={1}
        position={texture ? [0, 100, 0] : [60, 40, 30]}
      />
      <pointLight
        position={[0, 20, 0]}
        color={texture ? "white" : "red"}
        intensity={0.5}
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
          position: [0, 80, 100],
        }}
        shadowMap={true}
      >
        <Scene texture={texture} fog />
      </Canvas>
    </>
  );
};
