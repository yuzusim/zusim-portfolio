import { useEffect, useMemo, useRef } from "react";
import styles from "../../ProjectDetail.module.scss";
import { getBackgroundStyle } from "utils/getBackgroundStyle";

function Showcase({ project }) {
  const showcase = project?.mockup?.mobile?.showcase;

  const columnRefs = useRef([]);

  const { images = [], background, fade } = showcase;

  const columns = useMemo(() => [1, 2, 3], []);

  useEffect(() => {
    columnRefs.current.forEach((el) => {
      if (!el) return;

      const height = el.scrollHeight / 2;
      el.style.setProperty("--move", `-${height}px`);
    });
  }, [images]);

  if (!showcase) return null;

  return (
    <section
      className={styles.mobileShowcase}
      style={getBackgroundStyle(background)}
    >
      <div
        className={styles.ShowcaseInner}
        style={{
          "--fade-color": fade?.color || "#fff",
          "--fade-height": fade?.height || "50px",
        }}
      >
        {columns.map((column) => {
          const colImages = images.filter((img) => img.column === column);

          return (
            <div
              key={column}
              ref={(el) => (columnRefs.current[column] = el)}
              className={`${styles.gridSlider} ${
                column % 2 ? styles.columnUp : styles.columnDown
              }`}
            >
              {[...colImages, ...colImages].map((img, idx) => (
                <div key={idx} className={styles.card}>
                  <img src={img.src} className={styles.mockup} alt="" />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Showcase;
