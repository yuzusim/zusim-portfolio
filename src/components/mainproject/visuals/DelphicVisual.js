import styles from "../ProjectSlider.module.scss";

function DelphicVisual({ project }) {
  return (
    <div className={`${styles.delphicVisual} ${styles.gridLayout}`}>
      {[1, 2, 3].map((row) => (
        <div
          key={row}
          className={` ${styles.gridSlider} ${
            row % 2 ? styles.leftToRight : styles.rightToLeft
          }`}
        >
          {project.mockup
            .filter((img) => img.row === row)
            .concat(project.mockup.filter((img) => img.row === row)) // 무한처럼
            .map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                className={`${styles.mockup} ${styles[img.size]}`}
                alt=""
              />
            ))}
        </div>
      ))}
    </div>
  );
}

export default DelphicVisual;
