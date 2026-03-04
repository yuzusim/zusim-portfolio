// // export default SkillsSection;

// import { motion, useInView, useAnimation } from "framer-motion";
// import { useRef, useEffect } from "react";
// import styles from "./SkillsSection.module.scss";
// import { skillsPills } from "data/skillsData";

// function SkillsSection() {
//   const ref = useRef(null);
//   const controls = useAnimation();

//   // 👉 이 섹션이 보이는지 감지
//   const isInView = useInView(ref, {
//     once: true, // 한 번만 실행 (재스크롤 방지)
//     margin: "-10% 0px", // 살짝 아래에서 트리거
//   });

//   // 화면에 들어오면 애니 실행
//   useEffect(() => {
//     if (isInView) {
//       controls.start("show");
//     }
//   }, [isInView]);

//   const targetPositions = [
//     { x: -45, y: 20, rotate: 0 }, // HTML
//     { x: -27, y: 20, rotate: 0 }, // VS Code
//     { x: -15, y: 16, rotate: 18 }, // intelliJ
//     { x: 0, y: 20, rotate: 0 }, // gradle
//     { x: 20, y: 20, rotate: 0 }, // Github
//     { x: -40, y: 11, rotate: 10 }, // CSS
//     { x: -21, y: 5, rotate: -26 }, // JQuery
//     { x: -8, y: 10, rotate: 10 }, // Java
//     { x: 5, y: 8, rotate: -26 }, // Figma
//     { x: 15, y: 11, rotate: 0 }, // Git
//     { x: 24, y: 8, rotate: 40 }, // Spring
//     { x: 31, y: 10, rotate: 45 }, // Notion
//     { x: -35, y: 4, rotate: 10 }, // JS
//     { x: -25, y: -6, rotate: 0 }, // Ai
//     { x: -10, y: -7, rotate: 9 }, // XD
//     { x: 12, y: -5, rotate: 30 }, // React
//     { x: -20, y: -16, rotate: -9 },
//   ];

//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.12,
//       },
//     },
//   };

//   const pillMotion = (i) => ({
//     hidden: {
//       y: "-120vh",
//       x: 0,
//       opacity: 0,
//       rotate: 0,
//     },
//     show: {
//       x: `${targetPositions[i].x}vw`,
//       y: `${targetPositions[i].y}vh`,
//       rotate: targetPositions[i].rotate,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         damping: 10,
//       },
//     },
//   });

//   return (
//     <div className={styles.skillsSection} ref={ref}>
//       {/* <div className={styles.bgText}>
//         <span>Skills</span>
//         <span>Languages</span>
//         <span>Tools</span>
//       </div> */}

//       <div className={`${styles.title} title`}>
//         <p>Skils</p>
//         <p>Languages</p>
//         <p>Tools</p>
//       </div>

//       <motion.div
//         className={styles.pillContainer}
//         variants={container}
//         initial="hidden"
//         animate={controls} // 👉 여기 핵심!
//       >
//         {skillsPills.map((pill, i) => (
//           <motion.div
//             key={pill.id}
//             className={styles.pill}
//             variants={pillMotion(i)}
//             style={{ background: pill.color, color: pill.textColor }}
//             drag
//             dragConstraints={{
//               left: -250,
//               right: 250,
//               top: -250,
//               bottom: 250,
//             }}
//           >
//             {pill.icon && (
//               // <img
//               //   src={`/icons/${pill.icon}.svg`}
//               //   alt={pill.label}
//               //   className={styles.icon}
//               // />
//               <img
//                 src={`/images/skills/${pill.icon}`}
//                 alt={pill.label}
//                 className={styles.icon}
//               />
//             )}
//             <span>{pill.label}</span>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default SkillsSection;

////////////////////////////////////////////////////////////////////

// import { motion } from "framer-motion";
// import styles from "./SkillsSection.module.scss";
// import { useIsMobile } from "hooks/useIsMobile";

// const coreSkills = ["React", "TypeScript", "Next.js"];
// const subSkills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "SCSS",
//   "Git",
//   "Figma",
//   "Firebase",
// ];

// export default function SkillsSection() {
//   const isMobile = useIsMobile();

//   return (
//     <section className={styles.skillsSection}>
//       <h2 className={styles.title}>Skills</h2>

//       {/* 🖥 DESKTOP */}
//       {!isMobile && (
//         <div className={styles.pillContainer}>
//           {[...coreSkills, ...subSkills].map((skill, i) => (
//             <motion.div
//               key={skill}
//               className={styles.pill}
//               initial={{ opacity: 0, y: -200 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 80,
//                 damping: 12,
//                 delay: i * 0.05,
//               }}
//             >
//               {skill}
//             </motion.div>
//           ))}
//         </div>
//       )}

//       {/* 📱 MOBILE */}
//       {isMobile && (
//         <div className={styles.mobileWrapper}>
//           <div className={styles.coreSection}>
//             {coreSkills.map((skill) => (
//               <motion.div
//                 key={skill}
//                 className={styles.corePill}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//                 whileTap={{ scale: 0.96 }}
//               >
//                 {skill}
//               </motion.div>
//             ))}
//           </div>

//           <div className={styles.subSection}>
//             {subSkills.map((skill) => (
//               <motion.span
//                 key={skill}
//                 className={styles.subSkill}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 0.7 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 {skill}
//               </motion.span>
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

////////////////////////////////////////////////

// import { motion, useInView, useAnimation } from "framer-motion";
// import { useRef, useEffect, useState } from "react";
// import styles from "./SkillsSection.module.scss";
// import { skillsPills } from "data/skillsData";

// function SkillsSection() {
//   const ref = useRef(null);
//   const controls = useAnimation();

//   // ✅ 모바일 감지 (리사이즈 대응)
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 767);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // 👉 섹션 보이는지 감지
//   const isInView = useInView(ref, {
//     once: true,
//     margin: "-10% 0px",
//   });

//   useEffect(() => {
//     if (isInView) {
//       controls.start("show");
//     }
//   }, [isInView, controls]);

//   // ✅ 데스크탑 좌표
//   const desktopPositions = [
//     { x: -45, y: 20, rotate: 0 },
//     { x: -27, y: 20, rotate: 0 },
//     { x: -15, y: 16, rotate: 18 },
//     { x: 0, y: 20, rotate: 0 },
//     { x: 20, y: 20, rotate: 0 },
//     { x: -40, y: 11, rotate: 10 },
//     { x: -21, y: 5, rotate: -26 },
//     { x: -8, y: 10, rotate: 10 },
//     { x: 5, y: 8, rotate: -26 },
//     { x: 15, y: 11, rotate: 0 },
//     { x: 24, y: 8, rotate: 40 },
//     { x: 31, y: 10, rotate: 45 },
//     { x: -35, y: 4, rotate: 10 },
//     { x: -25, y: -6, rotate: 0 },
//     { x: -10, y: -7, rotate: 9 },
//     { x: 12, y: -5, rotate: 30 },
//     { x: -20, y: -16, rotate: -9 },
//   ];

//   // ✅ 모바일 전용 좌표 (덜 퍼지고 위로)
//   const mobilePositions = [
//     { x: -45, y: 20, rotate: 0 },
//     { x: -27, y: 20, rotate: 0 },
//     { x: -15, y: 16, rotate: 18 },
//     { x: 0, y: 20, rotate: 0 },
//     { x: 20, y: 20, rotate: 0 },
//     { x: -40, y: 11, rotate: 10 },
//     { x: -21, y: 5, rotate: -26 },
//     { x: -8, y: 10, rotate: 10 },
//     { x: 5, y: 8, rotate: -26 },
//     { x: 15, y: 11, rotate: 0 },
//     { x: 24, y: 8, rotate: 40 },
//     { x: 31, y: 10, rotate: 45 },
//     { x: -35, y: 4, rotate: 10 },
//     { x: -25, y: -6, rotate: 0 },
//     { x: -10, y: -7, rotate: 9 },
//     { x: 12, y: -5, rotate: 30 },
//     { x: -20, y: -16, rotate: -9 },
//   ];

//   const targetPositions = isMobile ? mobilePositions : desktopPositions;

//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.12,
//       },
//     },
//   };

//   const pillMotion = (i) => ({
//     hidden: {
//       y: "-120vh",
//       x: 0,
//       opacity: 0,
//       rotate: 0,
//     },
//     show: {
//       x: `${targetPositions[i].x}vw`,
//       y: `${targetPositions[i].y}vh`,
//       rotate: targetPositions[i].rotate,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: isMobile ? 60 : 80,
//         damping: isMobile ? 14 : 10,
//       },
//     },
//   });

//   return (
//     <div className={styles.skillsSection} ref={ref}>
//       <div className={`${styles.title} title`}>
//         <p>Skils</p>
//         <p>Languages</p>
//         <p>Tools</p>
//       </div>

//       <motion.div
//         className={styles.pillContainer}
//         variants={container}
//         initial="hidden"
//         animate={controls}
//       >
//         {skillsPills.map((pill, i) => (
//           <motion.div
//             key={pill.id}
//             className={styles.pill}
//             variants={pillMotion(i)}
//             style={{ background: pill.color, color: pill.textColor }}
//             drag
//             dragConstraints={{
//               left: isMobile ? -120 : -250,
//               right: isMobile ? 120 : 250,
//               top: isMobile ? -120 : -250,
//               bottom: isMobile ? 120 : 250,
//             }}
//           >
//             {pill.icon && (
//               <img
//                 src={`/images/skills/${pill.icon}`}
//                 alt={pill.label}
//                 className={styles.icon}
//               />
//             )}
//             <span>{pill.label}</span>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default SkillsSection;

//////////////////////////////////////////////////

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styles from "./SkillsSection.module.scss";
import { skillsPills } from "data/skillsData";

function SkillsSection() {
  const ref = useRef(null);
  const controls = useAnimation();

  // ✅ matchMedia로 모바일 감지 (가장 안정적)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // ✅ 뷰포트 감지
  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  useEffect(() => {
    if (isInView) controls.start("show");
  }, [isInView, controls]);

  // -------------------------
  // ✅ 데스크탑 퍼지는 배치
  // -------------------------
  const desktopPositions = [
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
        staggerChildren: isMobile ? 0.08 : 0.12,
      },
    },
  };

  const pillMotion = (i) => ({
    hidden: {
      opacity: 0,
      y: isMobile ? 40 : "-120vh",
      x: 0,
      rotate: 0,
    },
    show: {
      opacity: 1,
      x: isMobile ? 0 : `${desktopPositions[i].x}vw`,
      y: isMobile ? 0 : `${desktopPositions[i].y}vh`,
      rotate: isMobile ? 0 : desktopPositions[i].rotate,
      transition: {
        type: "spring",
        stiffness: isMobile ? 70 : 80,
        damping: isMobile ? 18 : 10,
      },
    },
  });

  return (
    <div className={styles.skillsSection} ref={ref}>
      <div className={`${styles.title} title`}>
        <p>Skils</p>
        <p>Languages</p>
        <p>Tools</p>
      </div>

      <motion.div
        key={isMobile ? "mobile-layout" : "desktop-layout"} // 🔥 중요
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
            drag={!isMobile} // 모바일은 드래그 제거
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

export default SkillsSection;
