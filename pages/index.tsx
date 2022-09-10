import type {NextPage} from 'next'
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stats, useTexture} from "@react-three/drei";
import React from "react";

const TexturedShapes = () => {
    const map = useTexture("./textures/metal_plate_diff_1k.png")
    const displacementMap = useTexture("./textures/metal_plate_disp_1k.png")
    const normalMap = useTexture("./textures/metal_plate_nor_gl_1k.png")
    const roughnessMap = useTexture("./textures/metal_plate_rough_1k.png")

    return (
        <>
            <mesh scale={[0.5, 0.5, 0.5]} position={[-1.5, 0, 0]}>
                <sphereGeometry/>
                <meshStandardMaterial map={map}/>
            </mesh>
            <mesh scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]}>
                <sphereGeometry/>
                <meshStandardMaterial map={map} normalMap={normalMap} roughnessMap={roughnessMap}/>
            </mesh>
            <mesh scale={[0.5, 0.5, 0.5]} position={[1.5, 0, 0]}>
                <sphereGeometry args={[1, 200, 200]}/>
                <meshStandardMaterial
                    map={map} normalMap={normalMap} roughnessMap={roughnessMap} displacementMap={displacementMap}
                    displacementScale={0.05}
                />
            </mesh>
        </>
    )
}

const Home: NextPage = () => {
    const testing = true;

    return (
        <div className="container">
            <Canvas orthographic camera={{left: -5, top: 5, right: 5, bottom: -5, zoom: 50}}>
                {/*<PerspectiveCamera makeDefault/>*/}
                {testing ? <Stats/> : null}
                {testing ? <axesHelper args={[2]}/> : null}
                {testing ? <gridHelper args={[10, 10]}/> : null}
                <OrbitControls/>
                <Stats/>
                <ambientLight intensity={0.3}/>
                <directionalLight position={[0, 5, 5]}/>
                <TexturedShapes/>
            </Canvas>
        </div>
    )
}

export default Home
