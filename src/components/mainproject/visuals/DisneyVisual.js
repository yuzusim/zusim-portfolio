import styles from "../ProjectSlider.module.scss";

function DisneyVisual({ project }) {
  return (
    <div className={styles.disneyVisual}>
      {project.mockup.map((item, idx) => (
        <div key={idx} className={`${styles.mockupWrap} ${styles[item.class]}`}>
          <img
            src={item.src}
            className={`${styles.mockup} ${styles.mockup}`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}

export default DisneyVisual;
