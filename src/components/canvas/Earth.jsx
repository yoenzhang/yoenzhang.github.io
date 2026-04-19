import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "../Loader";

const AngleReporter = ({ controlsRef, angleRef }) => {
  useFrame(() => {
    if (controlsRef.current && angleRef) {
      angleRef.current = controlsRef.current.getAzimuthalAngle();
    }
  });
  return null;
};

const EarthModel = () => {
  const { scene } = useGLTF(
    "./planet/scene.gltf",
    undefined,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      loader.setDRACOLoader(dracoLoader);
    }
  );

  return (
    <primitive object={scene} scale={3} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = ({ angleRef }) => {
  const controlsRef = useRef();
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      shadows
    >
      <OrbitControls
        ref={controlsRef}
        autoRotate
        autoRotateSpeed={-0.6}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <AngleReporter controlsRef={controlsRef} angleRef={angleRef} />
      <Suspense fallback={<CanvasLoader />}>
        <EarthModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
