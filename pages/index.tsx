import type {NextPage} from 'next'
import {Canvas} from "@react-three/fiber";
import AnimatedBox from "../components/AnimatedBox";
import {OrbitControls, Stats, PerspectiveCamera} from "@react-three/drei";

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
                <directionalLight color="red" position={[0, 0, 5]}/>
                <AnimatedBox isTesting={testing}/>
            </Canvas>
        </div>
    )
}

export default Home
