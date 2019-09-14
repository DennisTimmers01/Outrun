import { Canvas } from 'react-three-fiber'
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic'

import { socket } from './';
import { Ground } from '../components/vj/ground';
import { Mountain } from '../components/vj/mountain';
import { Sphere } from '../components/vj/sphere';
import { FreakyDots } from '../components/vj/freakydots';

function Scene() {
  const hue = useRef(0);
  const groundCount = 5;
  const shereCount = 50;
  const freakyDotsCount = 200;
  
  useEffect(() => {
    socket.on('change-hue-external', data => hue.current = data);
  })

  return (
    <Canvas style={{height: '100vh', backgroundColor: 'black'}} >
      <directionalLight args={[0xffffff, 1]} position={[0, 10, 150]} />
      <hemisphereLight skyColor={0x3df5c7} groundColor={0xf2469f} intensity={.6} />
      {[...Array(groundCount)].map((_, index) => (
        <>
          <Ground position={[0, -1.5, (-50 * index)]} key={index} />
    
          <Mountain position={[-12, 1, (-50 * index)]} rotation={[0, 0, -.3]} />
          <Mountain position={[12, 1, (-50 * index)]} rotation={[0, 0, .3]} />
        </>
      ))}
      {[...Array(shereCount)].map(() => <Sphere position={[0, 0, 0]} rotation={[0, 0, .3]} /> )}
      {[...Array(freakyDotsCount)].map(() => <FreakyDots /> )}
    </Canvas>
  )
}

export default dynamic(() => Promise.resolve(Scene), {
  ssr: false
});
