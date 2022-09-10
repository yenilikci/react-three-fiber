import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import React from "react";

const Trees = () => {
    const model = useLoader(GLTFLoader, "./models/tree.glb");

    model.scene.traverse((object) => {
        if (object.isMesh) {
            object.castShadow = true;
        }
    })

    return (
       <>
         <group rotation={[0, 4, 0]}>
             <object3D position={[2, 0, 0]}>
                 <primitive object={model.scene.clone()}/>
             </object3D>
             <object3D position={[4, 0, 0]}>
                 <primitive object={model.scene.clone()}/>
             </object3D>
             <object3D position={[6, 0, 0]}>
                 <primitive object={model.scene.clone()}/>
             </object3D>
         </group>
       </>
    )
}

export default Trees
