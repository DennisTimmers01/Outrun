import * as THREE from 'three';
import { useRender } from 'react-three-fiber'
import { useEffect, useRef } from 'react';

export function Sphere (props) {

  const mesh = useRef(null);
  const geometry = useRef(null);
  const material = useRef(null);

  const randomY = Math.random() * (-0.005 - -.05) + -0.005;
  const randomSize = Math.random() * (1 - .5) + 1;

  useEffect(() => {
      mesh.current.position.x = Math.random() * (-40 - 40) + 40;
      mesh.current.position.y = -5;
      mesh.current.position.z = Math.random() * (150 - 500) + 150;
    }, []);


  useRender(() => {
    mesh.current.position.z += 0.05;
    mesh.current.position.y += randomY;

    if (mesh.current.position.z >= 5) {
      mesh.current.position.z = Math.random() * (150 - 500) + 150;
      mesh.current.position.y = -5;
    }
  }, false, [])

  return (
    <mesh rotation={props.rotation} position={props.position} ref={mesh}>
      <sphereGeometry attach="geometry" args={[randomSize, 16, 16]} ref={geometry} />
      <meshPhongMaterial attach="material" opacity={0.8} color={0xada23d} emissive={0x2d475e} ref={material} side='Backside' transparent/>
    </mesh>
  )
}

Sphere.defaultProps = {
  rotation: [0, 0, 0],
  position: [0, 0, 0],
}