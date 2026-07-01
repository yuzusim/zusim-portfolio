import { useEffect, useRef, useState } from "react";
import styles from "../../ProjectDetail.module.scss";

import ScrollText from "components/scrolltext/ScrollText";

function MockupStagger({ project }) {
  const stagger = project?.mockup?.pc?.stagger;

  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // if (!stagger) return null;
  if (!stagger?.floating?.length) return null;

  return (
    <section className={styles.MockupStagger} ref={ref}>
      <div className={styles.stage}>
        <div className={styles.stack}>
          {stagger.floating.map((item, index) => {
            const gap = isMobile ? -40 : -100;
            const verticalGap = isMobile ? -20 : -50;

            const offsetX = index * gap;
            const offsetY = index * verticalGap;

            const scale = isMobile ? 1 - index * 0.02 : 1 - index * 0.04;

            return (
              <div
                key={index}
                className={`${styles.card} ${active ? styles.active : ""}`}
                style={{
                  zIndex: 100 - index,

                  left: isMobile ? "75%" : "60%",

                  transform: active
                    ? `
                        translate(-50%, -50%)
                        translate(${offsetX}px, ${offsetY}px)
                        scale(${scale})
                      `
                    : `
                        translate(-50%, -50%)
                        translateY(80px)
                        scale(0.85)
                      `,

                  transitionDelay: `${index * 0.12}s`,
                }}
              >
                <img src={item.src} alt={item.alt} />
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${styles.textBox} ${active ? styles.textActive : ""}`}>
        <h2 className="subPageTit">{stagger.subtitle}</h2>
        {/* <p className="text">{stagger.sectionTxt}</p> */}
        <p className={`${styles.pjSubTxt} pjSubTxt`}>
          {/* <ScrollText
            data={{
              groups: [
                {
                  lines: [String(stagger.sectionTxt)],
                },
              ],
            }}
          /> */}

          <ScrollText
            data={{
              groups: [
                {
                  lines: stagger.sectionTxt,
                },
              ],
            }}
          />
        </p>
      </div>
    </section>
  );
}

export default MockupStagger;
