import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useProgress } from "drei";
import { RayshaderModel, MaterialModel } from "./Yuelongxueshan";
import { a, useTransition } from "@react-spring/web";

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
          position: [0, 80, 100],
        }}
        shadowMap={true}
      >
        <Scene texture={texture} fog />
      </Canvas>
      <Loader />
    </>
  );
};

const Loader = () => {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className='loading' style={{ opacity }}>
          <div className='loading-bar-container'>
            <a.div className='loading-bar' style={{ width: progress }}>
              <a.span className='loading-data'>
                {progress.to((p) => `${p.toFixed(2)}%`)}
              </a.span>
            </a.div>
          </div>
        </a.div>
      )
  );
};
