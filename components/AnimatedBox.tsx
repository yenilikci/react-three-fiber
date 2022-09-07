import React, {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {BoxHelper} from "three";
import {useHelper} from "@react-three/drei";

type Props = {
    isTesting: boolean
}

const AnimatedBox: React.FC<Props> = ({isTesting}) => {
    const meshRef = useRef<THREE.Mesh>(null);
    {
        isTesting ? useHelper(meshRef, BoxHelper, "blue") : null
    }

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
