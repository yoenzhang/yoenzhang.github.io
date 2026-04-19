import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const stats = [
  {
    value: 2.5,
    suffix: "M+",
    decimals: 1,
    label: "USERS_REACHED",
    caption: "across shipped iOS and web products",
  },
  {
    value: 1000,
    suffix: "+",
    label: "FEATURES_SHIPPED",
    caption: "for laptops and iPhone screens to AI pipelines and tools behind the scenes",
  },
  {
    value: 6,
    suffix: "",
    label: "COMPANIES",
    caption: "from fintech to mobile to AI",
  },
  {
    value: 3,
    suffix: "",
    label: "CITIES_CALLED_HOME",
    caption: "Toronto, SF, and sometimes NY",
  },
];

const formatValue = (value, decimals = 0) => {
  if (value >= 1000) {
    return Math.round(value).toLocaleString();
  }
  return value.toFixed(decimals);
};

const CountUp = ({ target, decimals = 0, duration = 1600 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {formatValue(display, decimals)}
    </span>
  );
};

const StatCell = ({ index, stat }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="hud-frame relative bg-tertiary/60 px-6 py-8 flex flex-col gap-3 overflow-hidden"
  >
    <span className="hud-bl" />
    <span className="hud-br" />
    <div className="absolute inset-0 hud-grid-bg opacity-40 pointer-events-none" />

    <div className="relative flex items-center gap-2 font-mono-hud text-[11px] text-[#0d8a6e]">
      <span>{String(index + 1).padStart(2, "0")}</span>
      <span className="h-px flex-1 bg-[#0d8a6e]/30" />
      <span className="hud-blink">●</span>
    </div>

    <div className="relative font-black text-ink text-[52px] sm:text-[60px] leading-none hud-glow tracking-tight">
      <CountUp target={stat.value} decimals={stat.decimals} />
      <span className="text-[#0d8a6e]">{stat.suffix}</span>
    </div>

    <div className="relative font-mono-hud text-[12px] text-[#0d8a6e]">
      {stat.label}
    </div>
    <p className="relative text-secondary text-[13px] leading-[20px]">
      {stat.caption}
    </p>
  </motion.div>
);

const Stats = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} font-mono-hud`}>
        <span className="text-[#0d8a6e]">{"> "}</span>
        [ 02 // MISSION_STATS ]
      </p>
      <h2 className={styles.sectionHeadText}>By the numbers.</h2>
    </motion.div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat, index) => (
        <StatCell key={stat.label} index={index} stat={stat} />
      ))}
    </div>

    <motion.p
      variants={fadeIn("", "", 0.4, 1)}
      className="mt-8 font-mono-hud text-[11px] text-[#0d8a6e]/70"
    >
      &gt; SYS: and honestly, this isn&apos;t even a drop in the bucket.
      <span className="hud-blink ml-1">_</span>
    </motion.p>
  </>
);

export default SectionWrapper(Stats, "stats");
