import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import React from "react";

const Car = () => {
    const model = useLoader(GLTFLoader, "./models/mercedes.glb");

    model.scene.traverse((object) => {
        if (object.isMesh) {
            object.castShadow = true;
        }
    })

    return (
        <>
            <group>
                <object3D position={[0, 0.1, 4]} scale={[0.01, 0.01, 0.01]}>
                    <primitive object={model.scene.clone()}/>
                </object3D>
            </group>
        </>
    )
}

export default Car
