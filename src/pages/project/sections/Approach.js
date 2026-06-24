import styles from "../ProjectDetail.module.scss";

function Approach({ project }) {
  const { approach } = project;
  const { background, txt, title, items } = approach;

  return (
    <section
      className={styles.approach}
      style={{
        backgroundImage: `url(${background.value})`,
      }}
    >
      <div className={styles.overlay} style={{ opacity: background.overlay }} />

      <div className={styles.approachInner}>
        <div className={styles.approachTxtTop}>
          <p className={`${styles.approachTxt} pjSubTxt`}>{txt}</p>
          <h2 className={`${styles.approachTitle} subPageTit`}>{title}</h2>
        </div>

        <div className={styles.approachList}>
          {items.map((item) => (
            <div key={item.number} className={styles.approachItem}>
              <span className={styles.number}>{item.number}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>

              <div className={styles.itemDesc}>
                {item.description.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
