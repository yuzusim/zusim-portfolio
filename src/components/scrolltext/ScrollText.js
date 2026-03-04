import { useEffect, useRef, useState } from "react";
import styles from "./ScrollText.module.scss";

function ScrollText({ data, startFromZero = false }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const threshold = data?.threshold ?? 0.5;

  // =========================
  // 1. 스크롤 진행도 계산 (0 ~ 1)
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let value;

      if (startFromZero) {
        // 화면 상단에서 요소가 닿으면 progress = 0
        // 화면 하단 지나면 progress = 1
        value = (windowHeight - rect.top) / (windowHeight + rect.height);
      } else {
        // 기존 threshold 기반 계산
        const start = windowHeight;
        const end = windowHeight - rect.height * threshold;
        value = (start - rect.bottom) / (start - end);
      }

      setProgress(Math.min(Math.max(value, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, startFromZero]);

  // =========================
  // 2. 전체 글자 수 계산 (모든 문단 포함)
  // =========================
  const totalChars = data.groups.reduce((sum, group) => {
    return (
      sum + group.lines.reduce((lineSum, line) => lineSum + line.length, 0)
    );
  }, 0);

  let currentCharIndex = 0;

  return (
    <div ref={containerRef} className={styles.scrollText}>
      {data.groups.map((group, gIdx) => (
        <div
          key={gIdx}
          className={`${styles.group} ${group.className ? styles[group.className] : ""}`}
          // style={{ marginBottom: group.marginBottom || 0 }}
        >
          {group.lines.map((line, lIdx) => (
            <div
              key={lIdx}
              className={styles.line}
              // style={{ marginBottom: group.lineGap || 0 }}
            >
              {line.split("").map((char, cIdx) => {
                const charPoint = (currentCharIndex + 1) / totalChars;
                const isActive = progress >= charPoint;
                currentCharIndex++;

                return (
                  <span
                    key={cIdx}
                    className={styles.char}
                    style={{
                      opacity: isActive ? 1 : 0.2,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ScrollText;
