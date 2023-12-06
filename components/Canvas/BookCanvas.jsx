"use client"

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { useSpring, a } from '@react-spring/web';
import { Suspense } from 'react';
import { Book } from '../models/Book';

const BookCanvas = () => {
    const { rotation } = useSpring({
        rotation: [0, Math.PI * 2, 0],
        from: { rotation: [0, 0, 0] },
    });
    return (
        <section className="w-full  md:h-screen">
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
                    <Book/>
                </Suspense>
                <Preload all />
            </Canvas>
        </section>
    )
}

export default BookCanvas;