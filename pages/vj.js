import { Canvas } from 'react-three-fiber'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'

import { socket } from './';
import { Ground } from '../components/vj/ground';
import { Mountain } from '../components/vj/mountain';

function Scene() {
  const [hue, setHue] = useState(0);
  const groundCount = 5

  useEffect(() => {
    socket.on('change-hue-external', data => setHue(data));
  })

  return (
    <Canvas style={{height: '100vh'}} >
      <directionalLight args={[0xffffff, 1]} />
      {[...Array(groundCount)].map((_, index) => (
        <>
          <Ground position={[0, -1.5, (-50 * index)]} key={index} />
          <Mountain position={[-10, 3, (-50 * index)]} />
          <Mountain position={[10, 3, (-50 * index)]} />
        </>
      ))}
    </Canvas>
  )
}

export default dynamic(() => Promise.resolve(Scene), {
  ssr: false
});
