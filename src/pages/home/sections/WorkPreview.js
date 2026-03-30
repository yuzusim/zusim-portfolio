import { Link } from "react-router-dom";
import styles from "../Home.module.scss";

import ScrollText from "components/scrolltext/ScrollText";
import { scrollTextData } from "data/scrollTextData";

function WorkPreview() {
  const { link, mockup } = scrollTextData.work;

  return (
    <section id="work" className={`${styles.sec04}`}>
      <div className={styles.workInner}>
        <div className={`${styles.workLeft} ${styles.subTxt} subTxt`}>
          <div className={`${styles.title} title`}>
            <p>WORK</p>
          </div>
          <ScrollText data={scrollTextData.work} />
          <Link to={link} className={`${styles.moreBtn}`}>
            MORE WORK
          </Link>
        </div>
        <div className={styles.workRight}>
          <div className={styles.rotateBox}>
            {[1, 2, 3, 4].map((row) => (
              <div
                key={row}
                className={`${styles.gridSlider} ${
                  // row % 2 ? styles.leftToRight : styles.rightToLeft
                  row % 2 ? styles.rowDown : styles.rowUp
                }`}
              >
                {mockup
                  .filter((img) => img.row === row)
                  .concat(mockup.filter((img) => img.row === row))
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
      </div>
    </section>
  );
}

export default WorkPreview;
