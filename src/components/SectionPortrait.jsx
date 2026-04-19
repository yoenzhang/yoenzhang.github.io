import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import { useImageViewer } from "./ImageViewer";

const sizeMap = {
  sm: "w-[160px] h-[200px]",
  md: "w-[220px] h-[280px]",
  lg: "w-[260px] h-[320px]",
};

const SectionPortrait = ({
  src,
  caption = "UNLABELED",
  size = "md",
  direction = "right",
  className = "",
}) => {
  const { openImage } = useImageViewer() || {};
  return (
    <motion.div
      variants={fadeIn(direction, "spring", 0.1, 0.9)}
      onClick={() => openImage && openImage(src, caption)}
      className={`hud-frame relative shrink-0 overflow-hidden cursor-zoom-in group ${sizeMap[size]} ${className}`}
    >
      <span className="hud-bl" />
      <span className="hud-br" />
      <img
        src={src}
        alt={caption}
        className="w-full h-full object-cover grayscale-[10%] contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 hud-scanlines pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/35 transition-colors pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="font-mono-hud text-[10px] text-primary bg-ink/80 border border-[#0d8a6e]/60 px-3 py-1">
          &gt; EXPAND_VIEW
        </span>
      </div>
      <div className="absolute bottom-2 left-2 right-2 font-mono-hud text-[10px] text-primary flex items-center gap-2 pointer-events-none">
        <span className="h-px flex-1 bg-[#0d8a6e]/50" />
        <span className="text-[#0d8a6e]">{caption}</span>
      </div>
    </motion.div>
  );
};

export default SectionPortrait;
