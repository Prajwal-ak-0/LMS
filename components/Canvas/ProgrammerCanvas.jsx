"use client"

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { useSpring, a } from '@react-spring/web';
import { Suspense } from 'react';
import { Programmer } from '../models/Programmer';

const ProgrammerCanvas = () => {

    return (
        <section className="w-full bg-black h-full">
            <Canvas >
                <Suspense>
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={1}
                        castShadow
                    />
                    <hemisphereLight
                        skyColor={"#ffffff"}
                        groundColor={"#ffffff"}
                        intensity={0.5}
                        position={[0, 50, 0]}
                    />
                    <OrbitControls
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2 - 0.1}
                        minPolarAngle={Math.PI / 2 - 0.1}
                    />
                    <Programmer/>
                </Suspense>
                <Preload all />
            </Canvas>
        </section>
    )
}

export default ProgrammerCanvas;