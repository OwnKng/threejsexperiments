import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";
import * as THREE from "three";

/*
const Model = () => {
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

*/

const Mesh = (props) => {
  const group = useRef();
  const { nodes } = useGLTF("/yuelongxueshan.glb");
  return (
    <group ref={group} {...props}>
      <mesh
        geometry={nodes.yulongxueshan.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
      >
        <meshPhongMaterial
          roughness={1}
          metalness={0.5}
          attach='material'
          color='hotpink'
          wireframe={true}
          side={THREE.DoubleSide}
          transparent={false}
        />
      </mesh>
    </group>
  );
};

export default Mesh;

useGLTF.preload("/yuelongxueshan.glb");
