import styles from "./About.module.scss";

import AnimatedText from "components/text/AnimatedText";
import ScrollText from "components/scrolltext/ScrollText";
import SkillsSection from "components/skills/SkillsSection";
import Career from "components/career/Career";

import { useScrollTop } from "hooks/useScrollTop ";
import { useIsMobile } from "hooks/useIsMobile";
import { aboutData } from "data/aboutData";

function About() {
  // 스크롤 최상단
  useScrollTop();

  const isMobile = useIsMobile(767);

  const desktopText =
    "사용자와 브랜드의 \n‘마음의 중심’을 잇는, \nUX/UI 디자이너, 심유주입니다.";

  const mobileText =
    "사용자와 브랜드의 ‘마음의 중심’을 잇는, UX/UI 디자이너, 심유주입니다.";

  return (
    <section className={styles.about}>
      {/* INTRO */}

      <div className={`${styles.aboutIntro} ${styles.aboutMargin}`}>
        <AnimatedText
          key={isMobile ? "mobile" : "desktop"}
          text={isMobile ? mobileText : desktopText}
          className={`${styles.title} title`}
        />

        <ScrollText data={aboutData.intro} />
      </div>

      {/* SKILLS */}
      <div className={`${styles.skills} ${styles.aboutMargin}`}>
        <SkillsSection />
      </div>

      {/* CAREER - 아코디언 구조로 확장 가능 */}
      <div className={`${styles.career} ${styles.aboutMargin}`}>
        <Career />
      </div>
    </section>
  );
}
export default About;
