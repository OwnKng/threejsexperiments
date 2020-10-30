import React, { useRef, Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { OrbitControls } from "drei";

const China = () => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, "/hutiaoxia.gltf", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);
  });

  return <primitive position={[0, 0, 0]} ref={ref} object={gltf.scene} />;
};

const Scene = () => {
  return (
    <>
      <ambientLight />
      <pointLight intensity={0.5} position={[0, 100, 0]} />
      <Suspense fallback={null}>
        <China />
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
      >
        <Scene />
      </Canvas>
    </>
  );
};
