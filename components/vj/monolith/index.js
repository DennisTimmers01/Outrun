import * as THREE from 'three';
import { useRender } from 'react-three-fiber'
import { useEffect, useRef } from 'react';

export function Monolith (props) {
    var color = new THREE.Color();

    const mesh = useRef(null);
    const geometry = useRef(null);
    const material = useRef(null);
    const ticker = useRef(0);

    useRender(() => {
        ticker.current += 0.001;

        // if (material.current.color.r === 1) {
        //     material.current.color.r = 0;
        // } else {
        //     material.current.color.r += 0.001;
        // }

        material.current.color = color.setHSL( ticker.current / 2, 1.0, 0.5 );;


        mesh.current.rotation.x = Math.cos(ticker.current);
        mesh.current.rotation.y = Math.sin(ticker.current);
        // mesh.current.rotation.z = Math.sin(ticker.current);
    }, false, []);

    return (
        <mesh rotation={[0,10,0]} position={[0, 5, -20]} ref={mesh}>
          <boxGeometry attach="geometry" args={[4, 9, 1]} ref={geometry} />
          <meshPhongMaterial attach="material" shininess={0.1} emissive={'darkred'} ref={material} side='Backside' />
        </mesh>
    );
};