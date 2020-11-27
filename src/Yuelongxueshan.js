import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/yuelongxueshan.glb");
  return (
    <group ref={group} {...props}>
      <mesh
        geometry={nodes.yulongxueshan.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        material={materials.ray_surface}
      ></mesh>
    </group>
  );
}

useGLTF.preload("/yuelongxueshan.glb");

/*


export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/yuelongxueshan.glb");
  return (
    <group ref={group} {...props}>
      <mesh
        material={materials.ray_surface}
        geometry={nodes.yulongxueshan.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
      />
    </group>
  );
}

*/
