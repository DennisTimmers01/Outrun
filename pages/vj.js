import { Canvas } from 'react-three-fiber'
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic'

import { socket } from './';
import { Ground } from '../components/vj/ground';
import { Mountain } from '../components/vj/mountain';

function Scene() {
  const hue = useRef(0);
  const groundCount = 5

  useEffect(() => {
    socket.on('change-hue-external', data => hue.current = data);

  })

  return (
    <Canvas style={{height: '100vh', backgroundColor: '#000'}} >
      <hemisphereLight />
      <directionalLight args={[0xffffff, 1]} />
      {[...Array(groundCount)].map((_, index) => (
        <>
          <Ground position={[0, -1.5, (-50 * index)]} key={index} />
          <Mountain position={[-5, 3, (-50 * index)]} rotation={[0, 0, -1]} />
          <Mountain position={[5, 3, (-50 * index)]} rotation={[0, 0, 1]} />
        </>
      ))}
    </Canvas>
  )
}

export default dynamic(() => Promise.resolve(Scene), {
  ssr: false
});
