import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, yoenPic4 } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useImageViewer } from "./ImageViewer";

const ProjectCard = ({ index, name, description, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.75)}>
      <Tilt
        options={{
          max: 20,
          scale: 1,
          speed: 450,
        }}
        className="hud-frame bg-tertiary/70 p-6 w-full min-h-[350px] flex flex-col relative overflow-hidden"
      >
        <span className="hud-bl" />
        <span className="hud-br" />
        <div className="absolute inset-0 hud-grid-bg opacity-30 pointer-events-none" />

        <div className="relative flex items-center gap-2 font-mono-hud text-[11px] text-[#0d8a6e] mb-3">
          <span>ITEM_{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px flex-1 bg-[#0d8a6e]/30" />
          <span>UNLOCKED</span>
        </div>

        <div className="relative flex items-start justify-between gap-3">
          <h3 className="text-ink font-bold text-[24px]">{name}</h3>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shrink-0 border border-[#0d8a6e]/40 hover:border-[#0d8a6e] transition-colors"
          >
            <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
        <p className="relative mt-3 text-secondary text-[14px] flex-1">{description}</p>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { openImage } = useImageViewer() || {};
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-mono-hud`}>
          <span className="text-[#0d8a6e]">{"> "}</span>
          [ 05 // INVENTORY ]
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Side Quests.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Weekend projects and experiments. Stuff I built because it seemed fun. Each one is
        linked to its repo if you want to poke around.
      </motion.p>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        <motion.div
          variants={fadeIn("up", "spring", projects.length * 0.15, 0.75)}
          onClick={() => openImage && openImage(yoenPic4, "SIDE_QUEST / BURGER_HUNT")}
          className="hud-frame relative overflow-hidden min-h-[350px] cursor-zoom-in group"
        >
          <span className="hud-bl" />
          <span className="hud-br" />
          <img
            src={yoenPic4}
            alt="Burger hunt"
            className="absolute inset-0 w-full h-full object-cover object-[50%_30%] grayscale-[10%] contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/35 transition-colors pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="font-mono-hud text-[10px] text-primary bg-ink/80 border border-[#0d8a6e]/60 px-3 py-1">
              &gt; EXPAND_VIEW
            </span>
          </div>
          <div className="absolute inset-0 hud-scanlines pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent pointer-events-none" />
          <div className="absolute top-3 left-3 font-mono-hud text-[11px] text-[#0d8a6e] bg-primary/85 px-2 py-0.5">
            ITEM_{String(projects.length + 1).padStart(2, "0")}
          </div>
          <div className="absolute top-3 right-3 font-mono-hud text-[11px] text-[#0d8a6e] bg-primary/85 px-2 py-0.5">
            ONGOING
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <h3 className="text-primary font-bold text-[22px] leading-tight">Burger Hunt</h3>
            <p className="mt-1 text-primary/80 text-[13px] leading-[18px]">
              An ever‑growing list of the best burgers across Toronto, SF, and wherever else I end up.
            </p>
            <div className="mt-3 font-mono-hud text-[11px] text-[#0d8a6e] flex items-center gap-2">
              <span className="h-px flex-1 bg-[#0d8a6e]/50" />
              <span>SIDE_QUEST / ONGOING</span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
