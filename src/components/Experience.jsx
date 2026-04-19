import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useImageViewer } from "./ImageViewer";

const ExperienceCard = ({ experience, index, total }) => {
  const isActive = index === 0;
  const { openImage } = useImageViewer() || {};
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#EAE4D3",
        color: "#1a1a2e",
        border: "1px solid rgba(26, 26, 46, 0.08)",
        boxShadow: "0 12px 40px -20px rgba(26, 26, 46, 0.25)",
        padding: "1.75rem",
      }}
      contentArrowStyle={{ borderRight: "7px solid #EAE4D3" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="hud-frame relative p-5 -m-2">
        <span className="hud-bl" />
        <span className="hud-br" />
        <div className="absolute inset-0 hud-scanlines opacity-60 pointer-events-none" />

        <div className="relative flex items-center gap-2 font-mono-hud text-[11px] text-[#0d8a6e] mb-3">
          <span>MISSION_{String(total - index).padStart(2, "0")}</span>
          <span className="h-px flex-1 bg-[#0d8a6e]/30" />
          {isActive ? (
            <span className="flex items-center gap-1">
              <span className="hud-blink">●</span> ACTIVE
            </span>
          ) : (
            <span>COMPLETED</span>
          )}
        </div>

        <h3 className="relative text-ink text-[22px] font-black leading-tight">
          {experience.title}
        </h3>
        <p className="relative font-mono-hud text-[11px] text-secondary mt-1">
          {experience.company_name.toUpperCase()}
        </p>

        <div className="relative mt-5">
          <div className="font-mono-hud text-[10px] text-[#0d8a6e]/80 tracking-wider mb-2">
            &gt; LOG_ENTRIES
          </div>
          <ul className="space-y-2">
            {experience.points.map((point, i) => (
              <li
                key={`experience-point-${i}`}
                className="text-ink/85 text-[14px] leading-[20px] pl-5 relative"
              >
                <span className="absolute left-0 top-[7px] w-2 h-px bg-[#0d8a6e]" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {experience.photo && (
          <div
            onClick={() => openImage && openImage(experience.photo, experience.photoCaption)}
            className="hud-frame relative mt-5 aspect-[4/3] overflow-hidden cursor-zoom-in group"
          >
            <span className="hud-bl" />
            <span className="hud-br" />
            <img
              src={experience.photo}
              alt={experience.photoCaption}
              className="w-full h-full object-cover grayscale-[10%] contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 hud-scanlines pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/35 transition-colors pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="font-mono-hud text-[10px] text-primary bg-ink/80 border border-[#0d8a6e]/60 px-3 py-1">
                &gt; EXPAND_VIEW
              </span>
            </div>
            <div className="absolute bottom-2 left-2 right-2 font-mono-hud text-[10px] text-primary flex items-center gap-2 pointer-events-none">
              <span className="h-px flex-1 bg-[#0d8a6e]/50" />
              <span className="text-[#0d8a6e]">{experience.photoCaption}</span>
            </div>
          </div>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} font-mono-hud`}>
        <span className="text-[#0d8a6e]">{"> "}</span>
        [ 04 // QUEST_LOG ]
      </p>
      <h2 className={styles.sectionHeadText}>What I&apos;ve done.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[16px] max-w-3xl leading-[26px]"
    >
      Six missions across iOS, ML, data pipelines, agentic AI, and frontend. Newest on top, oldest at the bottom.
    </motion.p>

    <div className="mt-16 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
            index={index}
            total={experiences.length}
          />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, "work");
