import React, {useRef} from "react";
import {useHelper} from "@react-three/drei";
import {DirectionalLightHelper} from "three";

const Ground: React.FC = () => {

    return (
        <mesh rotation-x={Math.PI * -0.5} receiveShadow>
            <planeBufferGeometry args={[1000, 1000]}/>
            <meshStandardMaterial color={"#458745"}/>
        </mesh>
    )
}

export default Ground;
