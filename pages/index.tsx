import type {NextPage} from 'next'
import {Canvas} from "@react-three/fiber";
import AnimatedBox from "../components/AnimatedBox";
import CameraOrbitController from "../components/CameraOrbitController";

const Home: NextPage = () => {

    return (
        <div className="container">
            <Canvas>
                <CameraOrbitController/>
                <ambientLight intensity={0.1}/>
                <directionalLight color="red" position={[0, 0, 5]}/>
                <AnimatedBox/>
            </Canvas>
        </div>
    )
}

export default Home
