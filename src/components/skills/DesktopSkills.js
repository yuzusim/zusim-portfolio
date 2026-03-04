import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import styles from "./SkillsSection.module.scss";
import { skillsPills } from "data/skillsData";

function DesktopSkills() {
  const ref = useRef(null);
  const controls = useAnimation();

  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  const targetPositions = [
    { x: -45, y: 20, rotate: 0 },
    { x: -27, y: 20, rotate: 0 },
    { x: -15, y: 16, rotate: 18 },
    { x: 0, y: 20, rotate: 0 },
    { x: 20, y: 20, rotate: 0 },
    { x: -40, y: 11, rotate: 10 },
    { x: -21, y: 5, rotate: -26 },
    { x: -8, y: 10, rotate: 10 },
    { x: 5, y: 8, rotate: -26 },
    { x: 15, y: 11, rotate: 0 },
    { x: 24, y: 8, rotate: 40 },
    { x: 31, y: 10, rotate: 45 },
    { x: -35, y: 4, rotate: 10 },
    { x: -25, y: -6, rotate: 0 },
    { x: -10, y: -7, rotate: 9 },
    { x: 12, y: -5, rotate: 30 },
    { x: -20, y: -16, rotate: -9 },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const pillMotion = (i) => ({
    hidden: {
      y: "-120vh",
      x: 0,
      opacity: 0,
      rotate: 0,
    },
    show: {
      x: `${targetPositions[i]?.x || 0}vw`,
      y: `${targetPositions[i]?.y || 0}vh`,
      rotate: targetPositions[i]?.rotate || 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
  });

  return (
    <div className={styles.skillsSection} ref={ref}>
      <div className={`${styles.title} title`}>
        <p>Skills</p>
        <p>Languages</p>
        <p>Tools</p>
      </div>

      <motion.div
        className={styles.pillContainer}
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {skillsPills.map((pill, i) => (
          <motion.div
            key={pill.id}
            className={styles.pill}
            variants={pillMotion(i)}
            style={{ background: pill.color, color: pill.textColor }}
            drag
            dragConstraints={{
              left: -250,
              right: 250,
              top: -250,
              bottom: 250,
            }}
          >
            {pill.icon && (
              <img
                src={`/images/skills/${pill.icon}`}
                alt={pill.label}
                className={styles.icon}
              />
            )}
            <span>{pill.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default DesktopSkills;
