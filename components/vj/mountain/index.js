import * as THREE from 'three';
import { useRender } from 'react-three-fiber'
import { useEffect, useRef, useMemo } from 'react';

export function Mountain (props) {
  const geometry = useRef(null);
  const mesh = useRef(null);
  const material = useRef(null);
  const texture = useRef(null);
  

  
  const tile = useMemo(() => new THREE.TextureLoader().load('../../static/textures/tileGreen128.svg'), []);
  const reflectionBackground = useMemo(() => new THREE.TextureLoader().load('../../static/textures/reflaction.png'), []);

  const SegmentWidth = 50;

  useEffect(() => {
    const randomVertices = geometry.current.vertices.map(vertice => vertice.y = Math.random() * (1 - 3) + 0);
    
    // save first vertices row in array 
    const startVertices = geometry.current.vertices.slice(0, SegmentWidth);
    
    // remove last vertices row from array
    randomVertices.splice(randomVertices.length - SegmentWidth, SegmentWidth);
    
    // add first vertices row to end of array
    randomVertices.splice(randomVertices.length, 0, ...startVertices);

    // set vertices to newly created vertices array
    geometry.current.vertice = randomVertices;
    
    geometry.current.verticesNeedUpdate = true;
    geometry.current.mergeMesh = true;

    material.current.flatShading = true;
    material.current.side = THREE.DoubleSide;
    material.current.shadowSide = THREE.DoubleSide;

    // texture.current.wrapS = THREE.RepeatWrapping;
    // texture.current.wrapT = THREE.RepeatWrapping;
    // texture.current.repeat.set(10, 10);
  }, []);

  useRender(() => {
    mesh.current.position.z += 0.05;

    if (mesh.current.position.z >= SegmentWidth) {
      mesh.current.position.z = (5 - 1) * -SegmentWidth;
    }
  })

  return (
    <mesh rotation={props.rotation} position={props.position} ref={mesh}>
      <boxGeometry attach="geometry" args={[20, 1, SegmentWidth, 30, 1, 30]} ref={geometry} />
      <meshStandardMaterial attach="material" color={0xc8ff00} emissive={0x2d475e} ref={material} side='Backside'>
        {/* <primitive attach="map" object={tile} ref={texture} /> */}
      </meshStandardMaterial>
    </mesh>
  )
}

Mountain.defaultProps = {
  rotation: [0, 0, 0],
  position: [0, 1.5, 0],
}