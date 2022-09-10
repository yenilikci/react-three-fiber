import type {NextPage} from 'next'
import {Canvas} from "@react-three/fiber";
import AnimatedBox from "../components/AnimatedBox";
import {OrbitControls, Stats, PerspectiveCamera, Torus} from "@react-three/drei";
import React from "react";

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
                <ambientLight intensity={0.1}/>
                <directionalLight position={[0, 0, 5]}/>
                <mesh scale={[0.5, 0.5, 0.5]}>
                    {/*<boxGeometry/>*/}
                    <coneGeometry/>
                    <Torus/>
                    <meshStandardMaterial color={"blue"} wireframe={true}/>
                </mesh>
            </Canvas>
        </div>
    )
}

export default Home
