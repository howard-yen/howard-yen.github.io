'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import faceshot from '@/images/23ThesisPortraits_Square.png';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 0.8 },
  transition: { delay: 0.2, duration: 1 },
};

export default function AboutPage() {
  return (
    <div className="about">
      <motion.div {...fadeIn}>
        <Image
          src={faceshot}
          alt="Howard Yen"
          width={250}
          height={250}
          className="about-pic"
          priority
        />
      </motion.div>

      <motion.div {...fadeIn} className="about-text-container">
        <div className="card">
          <h2>Hi I&apos;m Howard!</h2>
          <p style={{ textIndent: '1em' }}>
            I&apos;m a Computer Science PhD student at Princeton University, advised by&nbsp;
            <a className="external" href="https://www.cs.princeton.edu/~danqic/" target="_blank" rel="noopener noreferrer">
              Professor Danqi Chen
            </a>
            .
            Previously, I also obtained my BSE from Princeton in 2023.
            I&apos;m part of the&nbsp;
            <a className="external" href="https://princeton-nlp.github.io/" target="_blank" rel="noopener noreferrer">
              Princeton Natural Language Processing Group
            </a> and&nbsp;
            <a className="external" href="https://pli.princeton.edu/" target="_blank" rel="noopener noreferrer">
              Princeton Language and Intelligence
            </a>
            .&nbsp;
            {/* I&apos;m grateful for being supported by the William A. Dippel &apos;50 *55 Graduate Fellowship. */}
            I have also spent time at Jane Street, Samaya AI, and Facebook/Meta.
            You can find a copy of my CV&nbsp;
            <a className="external" href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              here
            </a>.
          </p>
        </div>

        <div className="card">
          <p style={{ textIndent: '1em' }}>
            Previously, I have developed long-context and reasoning-intensive benchmarks (
            <a className="external" href="https://arxiv.org/abs/2410.02694" target="_blank" rel="noopener noreferrer">HELMET</a>,&nbsp;
            <a className="external" href="https://arxiv.org/abs/2407.12883" target="_blank" rel="noopener noreferrer">BRIGHT</a>
            )
            as well as long-context language modeling methods (
            <a className="external" href="https://arxiv.org/abs/2402.16617" target="_blank" rel="noopener noreferrer">CEPE</a>,&nbsp;
            <a className="external" href="https://arxiv.org/abs/2410.02660" target="_blank" rel="noopener noreferrer">ProLong</a>
            ).
            Recently, I&apos;m particularly excited about long-horizon systems (
            <a className="external" href="https://arxiv.org/abs/2510.18939" target="_blank" rel="noopener noreferrer">SLIM</a>
            ) and their foundations&ndash;long-context LMs and tool-using agents.
            Specifically, I&apos;m interested in the dynamics between pre-training and post-training (e.g., reinforcement learning) for long-context LMs with reasoning and tool-use capabilities.
            Please check out my <a className="external" href="https://scholar.google.com/citations?user=8rJOrBEAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a> for a full list of my publications.
          </p>
        </div>

        <div className="card">
          <p style={{ textIndent: '1em' }}>
            In my free time, I like to run, cook, read, and (occasionally) play/do badminton/soccer/BJJ.
            I also enjoy learning languages&mdash;am currently studying Taiwanese (&#21488;&#35486;) and Japanese (&#26085;&#26412;&#35486;).
          </p>
        </div>

        <div className="card">
          <h3>Contact</h3>
          <p>
            If you are interested in chatting about research, feel free to reach out at hyen [at] cs [dot] princeton [dot] edu
          </p>
        </div>
      </motion.div>
    </div>
  );
}
