import styles from "../ProjectDetail.module.scss";

function Intro({ project }) {
  const { background, intro, title } = project;

  return (
    <section
      className={styles.pjIntro}
      style={{
        backgroundImage: `url(${background.value})`,
      }}
    >
      <div className={styles.overlay} style={{ opacity: background.overlay }} />

      <div className={styles.pjIntroTxt}>
        <div className={`${styles.subPageTit} subPageTit`}>{title}</div>
        <p className={`pjSubTxt`}>{intro.mainTxt}</p>
        <p className={`pjSubTxt`}>{intro.subTxt}</p>
      </div>
    </section>
  );
}

export default Intro;
