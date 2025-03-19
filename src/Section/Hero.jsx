// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import { PerspectiveCamera } from "@react-three/drei";
// import HackerRoom from "../Components/HackerRoom";
// import CanvasLoader from "../Components/CanvasLoader";
// // import { Leva, useControls } from "leva";
// import { useMediaQuery } from "react-responsive";
// import { calculateSizes } from "../Constants/index";
// import Target from "../Components/Target";
// import ReactLogo from "../Components/ReactLogo";
// import Cube from "../Components/Cube";
// import Rings from "../Components/Rings";
// import HeroCamera from "../Components/HeroCamera";

// const Hero = () => {
//   // const x = useControls("HackerRoom", {
//   //   positionX: { value: 2.5, min: -10, max: 10 },
//   //   positionY: { value: 2.5, min: -10, max: 10 },
//   //   positionZ: { value: 2.5, min: -10, max: 10 },
//   //   rotationX:{ value: 0, min: -10, max: 0 },
//   //   rotationY:{ value: 0, min: -10, max: 0 },
//   //   rotationZ:{ value: 0, min: -10, max: 0 },
//   //   scale:{ value: 0, min:0.1, max: 10},
//   //   // scaleX:{ value: 0, min:0.1, max: 10},
//   //   // scaleY:{ value: 0, min:0.1, max: 10},
//   //   // scaleZ:{ value: 0, min:0.1, max: 10},


//   // });
//    // Use media queries to determine screen size
//    const isSmall = useMediaQuery({ maxWidth: 440 });
//    const isMobile = useMediaQuery({ maxWidth: 768 });
//    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
 
//    const sizes = calculateSizes(isSmall, isMobile, isTablet);
//   return (
//     <section className="min-h-screen w-full flex flex-col relative">
//       <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
//         <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
//           Hi, I am Anup <span>👋</span>
//         </p>
//         <p className="hero_tag text-gray_gradient">
//           Buildings Products & Brands
//         </p>
//       </div>
//       <div className="w-full mt-6 h-full absolute inset-0">
//       {/* <Leva></Leva> */}

//         <Canvas className w-full h-full>
//           <Suspense fallback={<CanvasLoader />}>
//             {/* <PerspectiveCamera makeDefault position={[0, 0, 20]} />
//             <HackerRoom
//               // scale={0.1}
//               // position={[2,-8.7,2]}
//               // // rotation={[-5.7, -3.3,0.0]}
//               rotation={[0, -Math.PI,0]}
//               position={sizes.deskPosition}
//               scale={sizes.deskScale}

//               // rotation = {[x.rotationX, x.rotationY, x.rotationZ]}
//               // scale ={[x.scaleX, x.scaleY, x.scaleZ]}
//               // scale={[x.scale,x.scale,x.scale]}

//               // position ={[x.positionX,x.positionY,x.positionZ]}
//             /> */}
//             <PerspectiveCamera makeDefault position={[0, 0, 30]} />

// <HeroCamera isMobile={isMobile}>
//   <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
// </HeroCamera>
//             <group>
//               <Target position={sizes.targetPosition}/>
//               <ReactLogo position={sizes.reactLogoPosition} />
//               <Cube position={sizes.cubePosition} />
//               <Rings position={sizes.ringPosition} />
              

//             </group>
//             <ambientLight intensity={1} />
//             <directionalLight position={[10, 10, 10]} intensity={0.5} />
//           </Suspense>
//         </Canvas>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
// import About from './About.jsx';
import Cube from '../Components/Cube.jsx';
import Rings from '../Components/Rings.jsx';
import ReactLogo from '../Components/ReactLogo';
import Button from '../Components/Button.jsx';
import Target from '../Components/Target.jsx';
import CanvasLoader from '../Components/Loading.jsx';
import HeroCamera from '../Components/HeroCamera.jsx';
import { calculateSizes } from '../Constants/index.js';
import { HackerRoom } from '../Components/HackerRoom.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Anup Kushwaha <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              {/* <Rings position={sizes.ringPosition} /> */}

            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
      {/* <About></About> */}
    </section>
  );
};

export default Hero;