import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import {useRender} from 'react-three-fiber';

export function FreakyDots() {
  const freakyDotsSize = [80, 40];
  const posX = useRef(Math.random() * (freakyDotsSize[0] - -freakyDotsSize[0]) + -freakyDotsSize[0]);
  const posY = useRef(Math.random() * (freakyDotsSize[1] - 0) + 0);
  const mesh = useRef(null);

  let ticker = 0;

  useRender(() => {
    ticker += 0.01;
    mesh.current.position.z = ((Math.sin(ticker) - 1) * 1.1 - 45);
    mesh.current.rotation.y = (Math.sin(ticker) * 1.1 - 45);
  }, false, []);

  return (
    <>
        <group>
            <mesh
                visible
                position={[posX.current, posY.current, -45]}
                rotation={[0, 0, 0]}
                ref={mesh}
            >
                <circleGeometry attach="geometry" args={[0.2, 4]} />
                <meshPhongMaterial color={0xada23d} emissive={0x2d475e} attach="material" color="white" />
            </mesh>
        </group>
        <group>
            <mesh
                visible
                position={[posX.current, posY.current, -45]}
                rotation={[0, 0, 0]}
                ref={mesh}
            >
                <circleGeometry attach="geometry" args={[0.2, 4]} />
                <meshPhongMaterial color={0xFFFFF} emissive={0xFFFFFF} attach="material" color="white" />
            </mesh>
        </group>
    </>
  );
};
