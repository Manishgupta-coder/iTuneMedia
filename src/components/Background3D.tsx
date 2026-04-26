import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedShapes() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const sphereRef2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
    if (sphereRef2.current) {
      sphereRef2.current.rotation.x = state.clock.getElapsedTime() * -0.1;
      sphereRef2.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[1.5, 64, 64]} position={[-3, 1, -5]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            transmission={0.9}
            thickness={1}
          />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Sphere ref={sphereRef2} args={[2, 64, 64]} position={[4, -2, -6]}>
          <MeshDistortMaterial
            color="#a855f7"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.1}
            metalness={0.9}
            transmission={0.9}
            thickness={1}
          />
        </Sphere>
      </Float>

      <Float speed={1} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1, 32, 32]} position={[0, 4, -8]}>
          <MeshDistortMaterial
            color="#ec4899"
            attach="material"
            distort={0.5}
            speed={3}
            roughness={0.3}
            metalness={0.7}
            transmission={0.8}
          />
        </Sphere>
      </Float>
    </>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-zinc-950">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <AnimatedShapes />
      </Canvas>
      {/* Overlay to ensure content remains readable */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
    </div>
  );
}
