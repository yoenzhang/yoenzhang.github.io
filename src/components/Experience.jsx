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
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index, total }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#EAE4D3",
      color: "#1a1a2e",
      border: "1px solid rgba(26, 26, 46, 0.08)",
      boxShadow: "0 12px 40px -20px rgba(26, 26, 46, 0.25)",
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
    <div>
      <p className="font-mono-hud text-[11px] text-[#0d8a6e] mb-2">
        &gt; MISSION_{String(total - index).padStart(2, "0")}
        {index === 0 && <span className="ml-2 hud-blink">[ACTIVE]</span>}
      </p>
      <h3 className="text-ink text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>

    {experience.photo && (
      <div className="hud-frame relative mt-5 aspect-[4/3] overflow-hidden">
        <span className="hud-bl" />
        <span className="hud-br" />
        <img
          src={experience.photo}
          alt={experience.photoCaption}
          className="w-full h-full object-cover grayscale-[10%] contrast-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 hud-scanlines pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-2 left-2 right-2 font-mono-hud text-[10px] text-primary flex items-center gap-2">
          <span className="h-px flex-1 bg-[#0d8a6e]/50" />
          <span className="text-[#0d8a6e]">{experience.photoCaption}</span>
        </div>
      </div>
    )}
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} font-mono-hud text-center`}>
        <span className="text-[#0d8a6e]">{"> "}</span>
        [ 04 // QUEST_LOG ]
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
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
