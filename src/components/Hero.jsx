import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const orbitAngleRef = useRef(0);
  const orbitDotRef = useRef(null);

  useEffect(() => {
    let rafId;
    const tick = () => {
      if (orbitDotRef.current) {
        const deg = orbitAngleRef.current * (180 / Math.PI);
        orbitDotRef.current.style.transform = `rotateX(70deg) rotateZ(${deg}deg)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#3B82F6]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <p className="font-mono-hud text-[12px] sm:text-[14px] text-[#0d8a6e] mb-3">
            &gt; INIT_SEQUENCE<span className="hud-blink ml-1">_</span>
          </p>
          <h1 className={`${styles.heroHeadText} text-ink`}>
            Hi, I'm <span className="text-[#3B82F6]">Yoen</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I work with
            <Typewriter
              options={{
                strings: [
                  "Agentic AI Pipelines",
                  "Agents & MCP Servers",
                  "iOS Apps Used by Millions",
                  "React at Scale",
                  "ML Classifiers & Data Pipelines",
                  "Custom End-to-end Test Suites",
                ],
                autoStart: true,
                loop: true,
                loopCount: Infinity,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
            />
          </p>
        </div>
      </div>

      <ComputersCanvas angleRef={orbitAngleRef} />

      <div className="absolute xs:bottom-12 bottom-36 right-6 sm:right-16 flex flex-col items-center gap-3 pointer-events-none">
        <div
          className="relative w-[64px] h-[64px]"
          style={{ perspective: "300px" }}
        >
          <div
            ref={orbitDotRef}
            className="absolute inset-0"
            style={{ transform: "rotateX(70deg)", willChange: "transform" }}
          >
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/50" />
            <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono-hud text-[10px] text-[#0d8a6e] tracking-wider">
          <motion.span
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            ◂
          </motion.span>
          DRAG_TO_ORBIT
          <motion.span
            animate={{ x: [2, -2, 2] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            ▸
          </motion.span>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-[#3B82F6] flex justify-center items-start p-2 bg-primary/60 backdrop-blur-sm"
            style={{ boxShadow: "0 0 14px rgba(59, 130, 246, 0.35)" }}
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#3B82F6] mb-1"
              style={{ boxShadow: "0 0 8px rgba(59, 130, 246, 0.7)" }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
