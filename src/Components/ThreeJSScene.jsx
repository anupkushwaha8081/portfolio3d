// import React, { useEffect, useRef } from "react";
// // import logo1 from "../../public/assets/react.svg";

// const techStack = [
//   { src: "/assets/asdf.png", alt: "Next.js" },
//   { src: "/assets/react.svg", alt: "Tailwind CSS" },
//   { src: "/assets/tailwindcss.png", alt: "React" },
//   { src: "/assets/typescript.png", alt: "TypeScript" },
//   // { src: "/graphql.svg", alt: "GraphQL" },
//   { src: "https://canada1.discourse-cdn.com/flex035/uploads/threejs/optimized/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751_2_1016x1024.png", alt: "Material UI" },
// ];

// const CircularTechStack = () => {
//   const circleRef = useRef(null);

//   useEffect(() => {
//     let angle = 0;
//     const rotate = () => {
//       angle += 5;
//       if (circleRef.current) {
//         circleRef.current.style.transform = `rotate(${angle}deg)`;
//       }
//       requestAnimationFrame(rotate);
//     };
//     rotate();
//   }, []);

//   return (
//     <div className="relative flex items-center mx-auto justify-center w-[300px] h-[300px]">
//       <div
//         ref={circleRef}
//         className="absolute w-[250px] h-[250px] rounded-full flex items-center justify-center"
//       >
//         {techStack.map((tech, index) => {
//           const angle = (index / techStack.length) * 360;
//           const x = 100 * Math.cos((angle * Math.PI) / 180);
//           const y = 100 * Math.sin((angle * Math.PI) / 180);
//           return (
//             <img
//               key={tech.alt}
//               src={tech.src}
//               alt={tech.alt}
//               className="absolute w-[50px] h-[50px] transition-transform duration-500 ease-in-out"
//               style={{
//                 transform: `translate(${x}px, ${y}px) rotate(${-angle}deg)`,
//               }}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CircularTechStack;
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const techStack = [
  { src: "/assets/asdf.png", alt: "Next.js" },
  { src: "/assets/react.svg", alt: "React" },
  { src: "/assets/tailwindcss.png", alt: "Tailwind CSS" },
  { src: "/assets/typescript.png", alt: "TypeScript" },
  { src: "/assets/react.svg", alt: "React" },

  { src: "https://canada1.discourse-cdn.com/flex035/uploads/threejs/optimized/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751_2_1016x1024.png", alt: "Material UI" },
];

const RotatingCube = () => {
  const cubeRef = useRef();
  useFrame(() => {
    cubeRef.current.rotation.y += 0.2; // Faster Rotation
    cubeRef.current.rotation.x += 0.2;
  });

  const textures = techStack.map((tech) => useTexture(tech.src));

  return (
    <>
      {/* Main Cube */}
      <mesh ref={cubeRef}>
        <boxGeometry args={[5, 5, 5]} /> {/* Larger Cube */}
        {textures.map((texture, index) => (
          <meshBasicMaterial key={index} attach={`material-${index}`} map={texture} transparent opacity={0.9} />
        ))}
      </mesh>

      
    </>
  );
};

const ThreeJSScene = () => {
  return (
    <Canvas camera={{ position: [6, 6, 6] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingCube />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default ThreeJSScene;
