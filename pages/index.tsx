import type {NextPage} from 'next'
import {Canvas, useLoader} from "@react-three/fiber";
import {OrbitControls, Stats} from "@react-three/drei";
import Lights from "../components/Lights";
import Ground from "../components/Ground";
import Trees from "../components/Trees";
import Car from "../components/Car";

const Home: NextPage = () => {
    const testing = true;

    return (
        <div className="container">
            <Canvas shadows>
                {testing ? <Stats/> : null}
                {testing ? <axesHelper args={[2]}/> : null}
                {testing ? <gridHelper args={[10, 10]}/> : null}
                <OrbitControls/>
                <Lights/>
                <Trees/>
                <Car/>
                <Ground/>
            </Canvas>
        </div>
    )
}

export default Home
