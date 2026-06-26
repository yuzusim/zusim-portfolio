import styles from "../../ProjectDetail.module.scss";
import ScrollText from "components/scrolltext/ScrollText";

function Showcase({ project }) {
  const showcase = project?.mockup?.pc?.showcase;

  const { title, background = {} } = showcase;

  const { type, value, overlay = 0, images = [] } = background;
  const angle = project?.mockup?.pc?.showcase?.rotate?.angle ?? -45;
  //const angle = project?.mockup?.pc?.showcase?.rotate?.angle ?? 0;

  if (!showcase) return null;

  return (
    <section className={`${styles.pcShowcase}`}>
      {/* =========================
          BACKGROUND LAYER
      ========================= */}
      <div className={`${styles.backgroundLayer}`}>
        {/* IMAGE */}
        {type === "image" && (
          <div
            className={styles.bgImage}
            style={{ backgroundImage: `url(${value})` }}
          />
        )}

        {/* COLOR */}
        {type === "color" && (
          <div className={styles.bgColor} style={{ background: value }} />
        )}

        {/* GRADIENT */}
        {type === "gradient" && (
          <div className={styles.bgGradient} style={{ background: value }} />
        )}

        {/* OVERLAY (공통) */}
        <div className={styles.overlay} style={{ opacity: overlay }} />
      </div>

      {/* =========================
          FOREGROUND CONTENT
      ========================= */}
      <div className={`${styles.ShowcaseInner} ${styles.delphicVisual}`}>
        {/* TITLE */}
        {title && (
          <div className={styles.showcaseTitle} style={{ color: title.color }}>
            {title.lines.map((line, i) => (
              <h2 key={i}>{line}</h2>
            ))}
          </div>
        )}

        {/* =========================
            MOCKUP GRID ANIMATION
        ========================= */}
        <div
          className={styles.rotateBox}
          style={{
            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
          }}
        >
          {[1, 2, 3, 4].map((row) => (
            <div
              key={row}
              className={`${styles.gridSlider} ${
                row % 2 ? styles.rowDown : styles.rowUp
              }`}
            >
              {images
                .filter((img) => img.row === row)
                .concat(images.filter((img) => img.row === row))
                .map((img, idx) => (
                  <div key={idx} className={styles.card}>
                    <img
                      src={img.src}
                      className={`${styles.mockup} ${styles[img.size]}`}
                      alt=""
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
