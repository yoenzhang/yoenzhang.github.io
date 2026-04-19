import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { yoenPic2 } from '../assets';
import SectionPortrait from './SectionPortrait';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-mono-hud`}>
          <span className="text-[#0d8a6e]">{"> "}</span>
          [ 01 // PLAYER_PROFILE ]
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-start">
        <SectionPortrait src={yoenPic2} caption="SAN_FRANCISCO.CA" />

        <motion.p
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hey, I’m Yoen. I’m an engineer based out of Toronto, occasionally in San Francisco, and
          in New York whenever a bagel calls me by name. Lately I’ve been obsessed with AI agents
          and how far you can push a well‑designed chain of them. I like the messy, end‑to‑end parts of the
          job: figuring out what to build, making it real, and watching it land in someone’s hands.
          Over the years I’ve bounced between iOS, frontend, data pipelines, and now agentic
          systems, and I’ve learned that the best work usually happens when you care a little too
          much and ship a little too fast. Outside of code, I’m probably watching the Raptors,
          chasing a good burger spot, or wandering around trying to find the best custard tart
          (or as the Portuguese call it, Natas).
        </motion.p>
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
