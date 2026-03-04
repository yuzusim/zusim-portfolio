import { useState, useEffect } from "react";
import styles from "../ProjectSlider.module.scss";

function BenzVisual({ project, isActive }) {
  const { base, floating } = project.mockup;
  const [animate, setAnimate] = useState(false);

  // 슬라이드가 바뀔 때마다 animate 상태 초기화 후 재적용
  useEffect(() => {
    if (isActive) {
      setAnimate(false); // 기존 애니메이션 제거
      const timer = setTimeout(() => setAnimate(true), 50); // 새로 실행
      return () => clearTimeout(timer);
    } else {
      setAnimate(false); // 비활성 시 초기화
    }
  }, [isActive]);

  return (
    <div className={styles.benzVisual}>
      {/* PC mockup */}
      <img src={base} className={styles.pcMockup} alt="PC mockup" />

      {/* Floating images */}
      {floating.map((item, idx) => (
        <div
          key={idx}
          className={`${styles.floating} ${styles[item.position]}`}
        >
          <div
            className={`${styles.floatingInner} ${animate ? styles.isActive : ""}`}
            style={{ animationDelay: `${item.delay}s` }} // stagger
          >
            <img src={item.src} className={styles[item.class]} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BenzVisual;
