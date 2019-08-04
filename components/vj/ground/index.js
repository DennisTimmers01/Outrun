import * as THREE from 'three';
import { useRender } from 'react-three-fiber'
import { useState, useEffect, useRef, useMemo } from 'react';

import { socket } from '../../../pages';

export function Ground (props) {
  const [hue, setHue] = useState(0);

  const geometry = useRef(null);
  const mesh = useRef(null);
  const material = useRef(null);
  const texture = useRef(null);

  const SegmentWidth = 50;

  const tile = useMemo(() => new THREE.TextureLoader().load('../../static/textures/tileNew128.svg'), []);

  useEffect(() => {
    socket.on('change-hue-external', data => setHue(data));
  })
  
  useEffect(() => {
    const randomVertices = geometry.current.vertices.map(vertice => vertice.y = Math.random() * (.1 - .3) + 0);
    
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

    texture.current.wrapS = THREE.RepeatWrapping;
    texture.current.wrapT = THREE.RepeatWrapping;
    texture.current.repeat.set(50, 50);
  }, []);

  useRender(() => {
    mesh.current.position.z += 0.05;

    if (mesh.current.position.z >= SegmentWidth) {
      mesh.current.position.z = (6 - 1) * -SegmentWidth;
    }
  }, false, [hue])

  return (
    <mesh rotation={props.rotation} position={props.position} ref={mesh}>
      <boxGeometry attach="geometry" args={[SegmentWidth, 1, SegmentWidth, SegmentWidth, 1, SegmentWidth]} ref={geometry} />
      <meshStandardMaterial attach="material" color={0xada23d} emissive={0x2d475e} ref={material} side='Backside'>
        <primitive attach="map" object={tile} ref={texture} />
      </meshStandardMaterial>
    </mesh>
  )
}

Ground.defaultProps = {
  rotation: [0, 0, 0],
  position: [0, 0, 0],
}