/*
auto-generated by: https://github.com/react-spring/gltfjsx
author: engine9 (https://sketchfab.com/engine9)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/rhetorician-a89f035291d843069d73988cc0e25399
title: Rhetorician
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader, useFrame, useResource, useThree } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { draco } from 'drei'

export default function Statue(...props) {
  const [ref] = useResource()
  const { gl, scene } = useThree()
  useFrame(() => ref.current.update(gl, scene))

  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '3d/statue/scene.gltf', draco('/draco-gltf/'))

  const crownRingTop = useRef()
  const crownRingMiddle = useRef()
  const crownRingBottom = useRef()
  
  // const actions = useRef()
  // const [mixer] = useState(() => new THREE.AnimationMixer())
  // useFrame((state, delta) => mixer.update(delta))
  useFrame(state => {
    crownRingTop.current.rotation.z = Math.sin(state.clock.getElapsedTime() / 8) * Math.PI
    crownRingMiddle.current.rotation.z = Math.sin(state.clock.getElapsedTime() / 2) * Math.PI
    crownRingBottom.current.rotation.z = Math.sin(state.clock.getElapsedTime() / 4) * Math.PI
  })
//   useEffect(() => {
//     actions.current = {
//       'Take 01': mixer.clipAction(animations[0], group.current),
//     }
//     return () => animations.forEach((clip) => mixer.uncacheClip(clip))
//     // return () => animations[0].mixer.uncacheClip(clip)
//   }, [animations, mixer])
// console.log(nodes)

  return (
    <group ref={group} {...props} dispose={null} scale={[1.4,1.4,1.4]} rotation={[0,-.4,0]} position={[5,-3.3,-5]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.27, 0.12, 1.33]}>
        <cubeCamera args={[0.1, 50, 512]} ref={ref} position={[-0.27, 0.12, 1.33]} />
      {ref.current && (
        <mesh   geometry={nodes.mentor_roman_retopo_0.geometry}  >
            <meshPhysicalMaterial
              attach="material"
              color="#554A3C"
              emissive="#000000"
              roughness="0.4"
              metalness="0.2"
              reflectivity="1.5"
              // clearcoat="1"
              side={THREE.DoubleSide}
              envMap={ref.current.renderTarget.texture}
            />
          </mesh>
        )}
        </group>
        <group position={[0.16, -0.17, 4.81]} rotation={[-0.1, 0.1, 0]} scale={[0.9, 0.9, 0.9]}>
          <mesh ref={crownRingTop} material={materials.Crown} geometry={nodes.nimbus002_0.geometry} />
          <mesh ref={crownRingMiddle} material={materials.Crown} geometry={nodes.nimbus001_0.geometry} />
          <mesh ref={crownRingBottom} material={materials.Crown} geometry={nodes.nimbus003_0.geometry} />
        </group>
      </group>
    </group>
  )
}
