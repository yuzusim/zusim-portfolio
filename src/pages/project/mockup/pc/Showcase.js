import styles from "../../ProjectDetail.module.scss";

function Showcase({ project }) {
  const showcase = project?.mockup?.pc?.showcase;

  if (!showcase) return null;

  const bg = showcase?.background?.value;
  const overlay = showcase?.background?.overlay ?? 0;
  const images = showcase?.background?.images || [];

  return (
    <section className={`${styles.pcShowcase}`}>
      {/* background layer */}
      <div
        className={styles.backgroundLayer}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className={styles.overlay} style={{ opacity: overlay }} />
      </div>

      {/* foreground content */}
      <div className={`${styles.ShowcaseInner} ${styles.delphicVisual}`}>
        {/* {showcase.title?.length > 0 && (
          <div className={styles.showcaseTitle}>
            {showcase.title.map((text, idx) => (
              <h2 key={idx}>{text}</h2>
            ))}
          </div>
        )} */}

        {showcase.title && (
          <div
            className={styles.showcaseTitle}
            style={{ color: showcase.title.color }}
          >
            {showcase.title.lines.map((line, i) => (
              <h2 key={i}>{line}</h2>
            ))}
          </div>
        )}

        <div className={`${styles.rotateBox}`}>
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
