// "use client"

// // Import necessary libraries
// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Environment, Lightformer, Sparkles, Stars } from '@react-three/drei';
// import { ModeToggle } from '@/components/ModeToggle';

// // Component for the 3D background scene
// const BackgroundScene = () => {
//   const sceneRef = useRef();

//   // Use useFrame to animate the background
//   useFrame(() => {
//     // Rotate the entire scene slowly for a parallax effect
//     sceneRef.current.rotation.x += 0.001;
//     sceneRef.current.rotation.y += 0.001;
//   });

//   return (
//     <group ref={sceneRef}>
//       {/* Stars component for a starry background */}
//       <Sparkles
//         count={100000} // Number of particles
//         speed={2}   // Speed of particles
//         opacity={1} // Opacity of particles
//         color="#000000" // Color of particles (white)
//         size={0.5}  // Size of particles
//         scale={10}   // The space the particles occupy
//         noise={1}   // Movement factor
//       />
//       {/* Example 3D background elements */}


//     </group>
//   );
// };

// // Main component
// const HomePage = () => {
//   return (
//     <div className='w-full h-screen'>
//       <ModeToggle />
//       <Canvas>

//         {/* Include the 3D background scene component */}
//         <BackgroundScene />

//         {/* Add the rest of your components here */}
//         {/* This is where you would place your 3D models, UI elements, etc. */}
//       </Canvas>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-[#000d52] to-[#fff]'>
       
    </div>
  )
}

export default page