import * as THREE from 'three'
import React from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from 'react-three-fiber'

function Thing({ vertices }) {
  return (
    <group ref={() => console.log('we have access to the instance')}>
      <line>
        <geometry
          attach="geometry"
          vertices={vertices.map(v => new THREE.Vector3(...v))}
          onUpdate={self => (self.verticesNeedUpdate = true)}
        />
        <lineBasicMaterial attach="material" color="black" />
      </line>
      <mesh
        onClick={() => console.log('click')} 
        onPointerOver={() => console.log('hover')} 
        onPointerOut={() => console.log('unhover')}>
        <octahedronGeometry attach="geometry" />
        <meshBasicMaterial attach="material" color="red" opacity={.5} />
      </mesh>
    </group>
  )
}

ReactDOM.render(
  <Canvas>
    <Thing vertices={[[1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]]} />
  </Canvas>,
  document.getElementById('root')
)