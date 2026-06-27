import { useEffect, useRef, useState } from "react";
import styles from "./ScrollText.module.scss";

function ScrollText({ data, startFromZero = false, align = "left" }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const threshold = data?.threshold ?? 0.5;

  // =========================
  // 0. 안전한 데이터 가공 (핵심)
  // =========================
  const groups = data?.groups ?? [];

  // =========================
  // 1. 스크롤 진행도 계산
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let value;

      if (startFromZero) {
        value = (windowHeight - rect.top) / (windowHeight + rect.height);
      } else {
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

  // groups 없으면 렌더 자체 안 함 (crash 방지)
  if (!groups.length) return null;

  // =========================
  // 2. 총 글자 수 계산 (안전 버전)
  // =========================
  const totalChars = groups.reduce((sum, group) => {
    return (
      sum +
      (group?.lines ?? []).reduce(
        (lineSum, line) => lineSum + (line?.length ?? 0),
        0,
      )
    );
  }, 0);

  let currentCharIndex = 0;

  return (
    <div ref={containerRef} className={`${styles.scrollText} ${styles[align]}`}>
      {groups.map((group, gIdx) => (
        <div
          key={gIdx}
          className={`${styles.group} ${
            group?.className ? styles[group.className] : ""
          }`}
        >
          {(group?.lines ?? []).map((line, lIdx) => (
            <div key={lIdx} className={styles.line}>
              {(line ?? "").split("").map((char, cIdx) => {
                const charPoint =
                  totalChars > 0 ? (currentCharIndex + 1) / totalChars : 1;

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
