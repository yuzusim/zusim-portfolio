import { motion } from "framer-motion";
import styles from "./SkillsSection.module.scss";
import { skillsPills } from "data/skillsData";

function MobileSkills() {
  return (
    <div className={`${styles.skillsSection} ${styles.mobileSection}`}>
      <div className={`${styles.title} title`}>
        <p>Skills</p>
        <p>Languages</p>
        <p>Tools</p>
      </div>

      <div className={styles.mobileGrid}>
        {skillsPills.map((pill, i) => (
          <motion.div
            key={pill.id}
            className={styles.mobilePill}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 18,
              delay: i * 0.05,
            }}
            viewport={{ once: true }}
            whileTap={{ scale: 0.96 }}
            style={{ background: pill.color, color: pill.textColor }}
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
      </div>
    </div>
  );
}

export default MobileSkills;
