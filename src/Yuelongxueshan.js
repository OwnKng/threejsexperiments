import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";
import * as THREE from "three";

export const MaterialModel = () => {
  const group = useRef();
  const { nodes } = useGLTF("/yuelongxueshan.glb");

  return (
    <group ref={group}>
      <mesh
        geometry={nodes.yulongxueshan.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        receiveShadow={true}
        castShadow={true}
      >
        <meshStandardMaterial
          color='#497593'
          side={THREE.DoubleSide}
          roughness={0}
          metalness={0}
          fog={true}
        />
      </mesh>
    </group>
  );
};

export const RayshaderModel = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/yuelongxueshan.glb");

  return (
    <group ref={group}>
      <mesh
        geometry={nodes.yulongxueshan.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        material={materials.ray_surface}
      ></mesh>
    </group>
  );
};

useGLTF.preload("/yuelongxueshan.glb");
