import styles from "../../ProjectDetail.module.scss";

function Showcase({ project }) {
  const showcase = project?.mockup?.tablet?.showcase;

  //   const bg = showcase?.background?.value;
  //   const overlay = showcase?.background?.overlay ?? 0;
  //   const images = showcase?.background?.images || [];

  if (!showcase) return null;

  const { images = false } = showcase;

  return (
    <section className={styles.tabletShowcase}>
      <div className={styles.ShowcaseInner}>
        {[1, 2, 3].map((row) => (
          <div
            key={row}
            className={`${styles.gridSlider} ${
              row % 2 ? styles.rowDown : styles.rowUp
            }`}
          >
            {images
              .filter((img) => img.column === row)
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
    </section>
  );
}

export default Showcase;
