import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";
import * as THREE from "three";

export default function Model(props) {
  const group = useRef();
  const { nodes } = useGLTF("/hutiaoxia.glb");
  return (
    <group ref={group} {...props}>
      <mesh
        geometry={nodes.hutiaoxia.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
      >
        <meshStandardMaterial color='teal' side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/hutiaoxia.glb");
