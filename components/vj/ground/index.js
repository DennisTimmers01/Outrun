import * as THREE from 'three';
import { useRender, useThree } from 'react-three-fiber'
import { useEffect, useRef, useMemo } from 'react';

import { socket } from '../../../pages';

export function Ground (props) {
  const opacity = useRef(0);
  const geometry = useRef(null);
  const mesh = useRef(null);
  const material = useRef(null);

  const { scene } = useThree();

  const SegmentWidth = 50;

  const background = useMemo(() => new THREE.TextureLoader().load('../../static/background.jpg'), []);

  useEffect(() => {
    socket.on('ground', data => {
      if (data.type === 'opacity') {
        console.log(111, 'ground', data.value);
        opacity.current = data.value;
      }
    });
  }, [])

  useEffect(() => {
    scene.fog = new THREE.FogExp2( 0x200522, 0.03 );
    // scene.background = background;
  });

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
    material.current.shininess = 10;
    // material.current.wireframe = props.isWireframe;
  }, []);

  useRender(() => {
    mesh.current.position.z += 0.05;

    material.current.opacity = opacity.current;

    if (mesh.current.position.z >= SegmentWidth) {
      mesh.current.position.z = (5 - 1) * -SegmentWidth;
    }
  }, false, [])

  return (
      <mesh rotation={props.rotation} position={props.position} ref={mesh}>
        <boxGeometry attach="geometry" args={[SegmentWidth, 1, SegmentWidth, SegmentWidth, 1, SegmentWidth]} ref={geometry} />
        <meshPhongMaterial transparent attach="material" color={0xada23d} emissive={0x2d475e} ref={material} side='Backside'/>
      </mesh>
  )
}

Ground.defaultProps = {
  rotation: [0, 0, 0],
  position: [0, 0, 0],
  isWireframe: false,
}