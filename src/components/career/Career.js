import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Career.module.scss";

import ScrollText from "components/scrolltext/ScrollText";
import { careerData } from "data/careerData";
import gsap from "gsap";

function Career() {
  const [openIndex, setOpenIndex] = useState(null);
  const btnRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // GSAP 버튼 애니메이션
  useEffect(() => {
    if (btnRef.current) {
      if (
        openIndex ===
        careerData.career.sections.findIndex((s) => s.id === "career")
      ) {
        gsap.fromTo(
          btnRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        );
      }
    }
  }, [openIndex]);

  return (
    <ul className={styles.careerList}>
      {careerData.career.sections.map((section, index) => (
        <li key={section.id} className={styles.sectionItem}>
          {/* ===== 섹션 헤더 ===== */}
          <button
            className={styles.sectionHeader}
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span className="title">{section.title}</span>
            <span className={styles.icon}>
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          {/* ===== 섹션 내용 ===== */}
          {openIndex === index && (
            <div className={styles.sectionBody}>
              {/* Education */}
              {section.id === "education" && (
                <div className={styles.educationArea}>
                  {section.items.map((item, i) => (
                    <div key={i} className={styles.row}>
                      <div className={styles.period}>{item.period}</div>
                      <div className={styles.text}>
                        <ScrollText
                          data={{
                            groups: [
                              {
                                className: "subText",
                                lines: item.scrollText,
                                lineGap: 8,
                                charDelay: 0.02,
                              },
                            ],
                            threshold: 0.4,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Certificate */}
              {section.id === "certificate" && (
                <div className={styles.certArea}>
                  {section.items.map((item, i) => (
                    <div key={i} className={styles.row}>
                      <div className={styles.period}>{item.period}</div>
                      <div className={styles.text}>{item.text}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Career */}
              {section.id === "career" && (
                <div className={styles.careerArea}>
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className={`${styles.careerItem} ${styles.row}`}
                    >
                      <div className={styles.careerHeader}>
                        <div className={styles.company}>{item.company}</div>
                        <div className={styles.period}>{item.period}</div>
                        <div className={styles.role}>{item.role}</div>
                      </div>

                      <div className={styles.detailText}>
                        <ScrollText
                          data={{
                            groups: [
                              {
                                className: "detail",
                                lines: item.scrollText,
                                lineGap: 6,
                                charDelay: 0.015,
                              },
                            ],
                            threshold: 0.4,
                          }}
                        />
                      </div>
                    </div>
                  ))}

                  {/* ===== 워크 페이지 이동 버튼 ===== */}
                  <div className={styles.workBtnWrap}>
                    <Link
                      ref={btnRef}
                      to="/work"
                      className={`${styles.workBtn} ${styles.moreBtn}`}
                    >
                      MORE WORK
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Career;
