import * as THREE from 'three';
import { useRender, useThree } from 'react-three-fiber'
import { useState, useEffect, useRef, useMemo } from 'react';

const FreakyDots = () => {
  const [timer, setTimer] = useState(0);

  const freakyDotsAmt = useRef(200);
  const freakyDotsSize = useRef([20, 20]);
  const freakyDotsPosX = useRef([...Array(freakyDotsAmt.current)].map(() => Math.random() * (freakyDotsSize.current[0] - -freakyDotsSize.current[0]) + -freakyDotsSize.current[0]));
  const freakyDotsPosY = useRef([...Array(freakyDotsAmt.current)].map(() => Math.random() * (freakyDotsSize.current[1] - -freakyDotsSize.current[1]) + -freakyDotsSize.current[1]));
  const freakyDotsCopyOffset = useRef([0, 0]);
  const freakyDotsCopyRotation = useRef(0);
  const freakyDotsCopyScale = useRef(1);

  useEffect(() => {
    setTimer(timer + 0.01);

    // freakyDotsCopyRotation.current = Math.sin(timer) * 0.05;
    freakyDotsCopyScale.current = (Math.sin(timer) + 20) * 0.05;
  });

  useEffect(() => {

  }, []);

  return (
    <>
        <FreakyDotsLayer
            rotation={0}
            scale={1}
            amount={freakyDotsAmt.current}
            posY={freakyDotsPosY.current}
            posX={freakyDotsPosX.current}
        />
        <FreakyDotsLayer
            rotation={freakyDotsCopyRotation.current}
            scale={freakyDotsCopyScale.current}
            amount={freakyDotsAmt.current}
            posX={freakyDotsPosX.current}
            posY={freakyDotsPosY.current}
        />
    </>
  );
};

export default FreakyDots;

const FreakyDotsLayer = ({rotation, scale, amount, posX, posY}) => (
    <group rotation={new THREE.Euler(0, 0, rotation)}>
        <>
            {[...Array(amount)].map((_, index) => (
                <mesh
                    visible
                    position={[posX[index], posY[index] + 10, -30 * scale]}
                    rotation={[0, 0, 0]}
                >
                    <circleGeometry attach="geometry" args={[0.3, 10]} />
                    <meshPhongMaterial attach="material" color="white" transparent />
                </mesh>
            ))}
        </>
    </group>
);