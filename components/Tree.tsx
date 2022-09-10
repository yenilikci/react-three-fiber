import * as THREE from "three";
import React, {useRef, useState} from "react";
import {useGLTF} from "@react-three/drei";
import {GLTF} from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Tree_2_leaves001_Green_leaves: THREE.Mesh;
        Tree_2_leaves001_Tree: THREE.Mesh;
    };
    materials: {
        Green_leaves: THREE.MeshStandardMaterial;
        Tree: THREE.MeshStandardMaterial;
    };
};

export function TreeModel(props: JSX.IntrinsicElements["group"]) {
    const {nodes, materials} = useGLTF("/models/tree.glb") as GLTFResult;
    const [color, setColor] = useState("pink");

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_2_leaves001_Green_leaves.geometry}
                material={materials.Green_leaves}
            />
            <mesh
                onClick={() => setColor("blue")}
                castShadow
                receiveShadow
                geometry={nodes.Tree_2_leaves001_Tree.geometry}
                material={materials.Tree}
                material-color={color}
            />
        </group>
    );
}

useGLTF.preload("/tree.glb");
