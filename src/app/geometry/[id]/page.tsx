"use client"
import React from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "@components/CanvasLoader";
import { Stats, Environment, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";


export default function GeometryByParamsPage({ params }: { params: { id: string } }) {
  const map: { [key: string]: React.FC } = {
    box: () => <boxGeometry />,
    sphere: () => <sphereGeometry />,
    cone: () => <coneGeometry />,
    cylinder: () => <cylinderGeometry />,
    ring: () => <ringGeometry />,
    icosahedron: () => <icosahedronGeometry />,
    dodecahedron: () => <dodecahedronGeometry />,
    torus: () => <torusGeometry />,
    torusKnot: () => <torusKnotGeometry />,
  };

  const Component = map[params.id] || null;

  const config = useControls({
    autoRotate: !0,
    gridHelper: !0,
    axesHelper: !0,
    stats: !0,
  });

  return (
    <div className='overflow-hidden h-screen bg-primary'>
      <Canvas shadows camera={{ position: [-2, 2, 4] }}>
        <CanvasLoader>
          <Environment files={'/images/venice_sunset_1k.hdr.jpg'} background backgroundBlurriness={0.8} />
          <gridHelper position-y={0} visible={config.gridHelper} />
          <mesh receiveShadow scale={1}>
            {Component ? <Component /> : <div>Component not found</div>}
            <meshStandardMaterial side={2} />
          </mesh>
          <OrbitControls autoRotate={config.autoRotate} target-y={0.5} />
          <axesHelper args={[5]} visible={config.axesHelper} />
          {config.stats && <Stats />}
        </CanvasLoader>
      </Canvas>
    </div>
  )
}