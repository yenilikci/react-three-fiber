import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

const AnimatedBox = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current)
            meshRef.current.rotation.x += 0.01;
    });

    return (
        <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
            <boxGeometry/>
            <meshStandardMaterial/>
        </mesh>
    )
}

export default AnimatedBox;
