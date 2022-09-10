import type {NextPage} from 'next'
import {Canvas, useLoader} from "@react-three/fiber";
import {OrbitControls, Stats, useTexture} from "@react-three/drei";
import React from "react";
import Lights from "../components/Lights";
import Ground from "../components/Ground";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {TreeModel} from "../components/Tree";

const Tree = () => {
    const model = useLoader(GLTFLoader, "./models/tree.glb");

    model.scene.traverse((object) => {
        if (object.isMesh) {
            object.castShadow = true;
        }
    })

    return <primitive object={model.scene}/>
}

const TexturedShapes = () => {
    const map = useTexture("./textures/metal_plate_diff_1k.png")
    const normalMap = useTexture("./textures/metal_plate_nor_gl_1k.png")
    const roughnessMap = useTexture("./textures/metal_plate_rough_1k.png")

    return (
        <>
            <mesh scale={[0.5, 0.5, 0.5]} position={[0, 1, 0]} castShadow>
                <sphereGeometry/>
                <meshStandardMaterial map={map} normalMap={normalMap} roughnessMap={roughnessMap}/>
            </mesh>
        </>
    )
}

const Home: NextPage = () => {
    const testing = true;

    return (
        <div className="container">
            <Canvas
                shadows
                // orthographic camera={{left: -5, top: 5, right: 5, bottom: -5, zoom: 50}}
            >
                {/*<PerspectiveCamera makeDefault/>*/}
                {testing ? <Stats/> : null}
                {testing ? <axesHelper args={[2]}/> : null}
                {testing ? <gridHelper args={[10, 10]}/> : null}
                <OrbitControls/>
                <TexturedShapes/>
                <Tree/>
                <TreeModel position={[2, 0, 0]}/>
                <Lights/>
                <Ground/>
            </Canvas>
        </div>
    )
}

export default Home
