import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import {useRender} from 'react-three-fiber';

export function FreakyDots() {
  const amount = 300;
  const freakyDotsSize = [80, 30];
  const posX = useRef(Math.random() * (freakyDotsSize[0] - -freakyDotsSize[0]) + -freakyDotsSize[0]);
  const posY = useRef(Math.random() * (freakyDotsSize[1] - -freakyDotsSize[1]) + -freakyDotsSize[1]);
  const rotation = useRef(0);
  const mesh = useRef(null);

  let ticker = 0;

  useRender(() => {
    ticker += 0.01;
    mesh.current.position.z = ((Math.sin(ticker) - 1) * 3 - 45);
  }, false, []);

  return (
    <>
        <group rotation={new THREE.Euler(0, 0, 0)}>
            <mesh
                visible
                position={[posX.current, posY.current + 10, -45]}
                rotation={[0, 0, 0]}
                ref={mesh}
            >
                <circleGeometry attach="geometry" args={[0.2, 4]} />
                <meshPhongMaterial attach="material" color="white" transparent />
            </mesh>
        </group>
        <group rotation={new THREE.Euler(0, 0, rotation.current)}>
            <mesh
                visible
                position={[posX.current, posY.current + 10, -45]}
                rotation={[0, 0, 0]}
                ref={mesh}
            >
                <circleGeometry attach="geometry" args={[0.2, 4]} />
                <meshPhongMaterial attach="material" color="white" transparent />
            </mesh>
        </group>
    </>
  );
};
