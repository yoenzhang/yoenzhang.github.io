import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { yoenPic3 } from "../assets";
import { useImageViewer } from "./ImageViewer";

const classes = [
  {
    id: "CLS_01",
    name: "Agentic AI Systems",
    role: "Founding Solutions AI Engineer",
    where: "Velt · now",
    blurb:
      "Building AI systems that actually do things. Chaining agents, tools, and context into workflows that replace entire dev cycles.",
    noteLabel: "FAV_PART",
    note: "when the agents start surprising me.",
    accent: "#0d8a6e",
  },
  {
    id: "CLS_02",
    name: "Mobile · iOS",
    role: "Mobile Software Developer",
    where: "ESPN Bet · theScore",
    blurb:
      "Native iOS the way it's supposed to feel. Smooth, snappy, thoughtfully designed, and built to scale when millions of users hit it at once.",
    noteLabel: "RULE_01",
    note: "the detail nobody notices is the one that matters.",
    accent: "#3B82F6",
  },
  {
    id: "CLS_03",
    name: "ML & Data Pipelines",
    role: "Data Pipeline Engineer",
    where: "TRAFFIC · research",
    blurb:
      "Taking messy real-world data and making it useful. Ingestion, classification, and enrichment, stitched into pipelines that don't break at 2am.",
    noteLabel: "REALITY_CHECK",
    note: "data lies. the pipeline shouldn't.",
    accent: "#0d8a6e",
  },
  {
    id: "CLS_04",
    name: "Frontend at Scale",
    role: "Frontend Developer",
    where: "Mozilla · Velt",
    blurb:
      "React and Next.js interfaces that stay fast, stay consistent, and hold up when you ship them to a million users on a Tuesday.",
    noteLabel: "NORTH_STAR",
    note: "if it ships clean at 1M users, it ships clean anywhere.",
    accent: "#3B82F6",
  },
];

const ClassCard = ({ index, item }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="hud-frame bg-tertiary/60 p-6 flex gap-5 relative overflow-hidden group"
  >
    <span className="hud-bl" />
    <span className="hud-br" />
    <div className="absolute inset-0 hud-grid-bg opacity-30 pointer-events-none" />

    <div
      className="relative w-1 shrink-0 self-stretch"
      style={{ background: item.accent, boxShadow: `0 0 16px ${item.accent}` }}
    />

    <div className="relative flex-1 flex flex-col">
      <div className="flex items-center gap-2 font-mono-hud text-[11px]">
        <span style={{ color: item.accent }}>{item.id}</span>
        <span className="h-px flex-1" style={{ background: `${item.accent}55` }} />
        <span className="text-[#0d8a6e]/70 group-hover:text-[#0d8a6e] transition-colors">
          SELECT ▸
        </span>
      </div>

      <h3 className="mt-3 text-ink font-black text-[26px] leading-tight tracking-tight">
        {item.name}
      </h3>
      <p className="mt-1 font-mono-hud text-[11px] text-secondary">
        {item.role.toUpperCase()} <span className="text-[#0d8a6e]">//</span> {item.where}
      </p>

      <p className="mt-4 text-secondary text-[14px] leading-[22px]">{item.blurb}</p>

      <div className="mt-auto pt-6">
        <div className="font-mono-hud text-[10px] text-[#0d8a6e]/80 tracking-wider mb-1">
          &gt; {item.noteLabel}
        </div>
        <p className="text-ink/80 text-[13px] leading-[18px] italic">
          “{item.note}”
        </p>
      </div>
    </div>
  </motion.div>
);

const Classes = () => {
  const { openImage } = useImageViewer() || {};
  return (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} font-mono-hud`}>
        <span className="text-[#0d8a6e]">{"> "}</span>
        [ 03 // CLASS_SELECT ]
      </p>
      <h2 className={styles.sectionHeadText}>What I do.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[16px] max-w-3xl leading-[26px]"
    >
      Four domains I move between. Some I’ve lived in for years, one I’m obsessed with right now.
    </motion.p>

    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 auto-rows-fr">
      <motion.div
        variants={fadeIn("right", "spring", 0.1, 0.9)}
        onClick={() => openImage && openImage(yoenPic3, "GOOGLE_CAMPUS")}
        className="hud-frame relative overflow-hidden lg:row-span-2 min-h-[280px] cursor-zoom-in group"
      >
        <span className="hud-bl" />
        <span className="hud-br" />
        <img
          src={yoenPic3}
          alt="Google campus"
          className="absolute inset-0 w-full h-full object-cover grayscale-[10%] contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 hud-scanlines pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/35 transition-colors pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="font-mono-hud text-[10px] text-primary bg-ink/80 border border-[#0d8a6e]/60 px-3 py-1">
            &gt; EXPAND_VIEW
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 font-mono-hud text-[11px] text-primary flex items-center gap-2 pointer-events-none">
          <span className="h-px flex-1 bg-[#0d8a6e]/50" />
          <span className="text-[#0d8a6e]">GOOGLE_CAMPUS</span>
        </div>
      </motion.div>

      {classes.map((item, index) => (
        <ClassCard key={item.id} index={index} item={item} />
      ))}
    </div>
  </>
  );
};

export default SectionWrapper(Classes, "classes");
