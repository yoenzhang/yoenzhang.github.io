import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const sizeMap = {
  sm: "w-[160px] h-[200px]",
  md: "w-[220px] h-[280px]",
  lg: "w-[260px] h-[320px]",
};

const SectionPortrait = ({
  src,
  tag = "IMG",
  caption = "UNLABELED",
  size = "md",
  direction = "right",
  className = "",
}) => (
  <motion.div
    variants={fadeIn(direction, "spring", 0.1, 0.9)}
    className={`hud-frame relative shrink-0 overflow-hidden ${sizeMap[size]} ${className}`}
  >
    <span className="hud-bl" />
    <span className="hud-br" />
    <img
      src={src}
      alt={caption}
      className="w-full h-full object-cover grayscale-[10%] contrast-[1.05]"
      loading="lazy"
    />
    <div className="absolute inset-0 hud-scanlines pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent pointer-events-none" />
    <div className="absolute top-2 left-2 font-mono-hud text-[10px] text-[#0d8a6e] bg-primary/85 px-2 py-0.5">
      {tag}
    </div>
    <div className="absolute bottom-2 left-2 right-2 font-mono-hud text-[10px] text-primary flex items-center gap-2">
      <span className="h-px flex-1 bg-[#0d8a6e]/50" />
      <span className="text-[#0d8a6e]">{caption}</span>
    </div>
  </motion.div>
);

export default SectionPortrait;
