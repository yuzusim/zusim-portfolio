import styles from "../ProjectDetail.module.scss";

import ScrollText from "components/scrolltext/ScrollText";
import { getBackgroundStyle } from "utils/getBackgroundStyle";

function Approach({ project }) {
  const { approach } = project;
  const { txt, title, items, background } = approach;
  //const { background } = approach;

  return (
    <section className={styles.approach} style={getBackgroundStyle(background)}>
      <div className={styles.overlay} style={{ opacity: background.overlay }} />

      <div className={styles.approachInner}>
        <div className={styles.approachTxtTop}>
          <p className={`${styles.approachTxt} pjSubTxt`}>{txt}</p>
          <h2 className={`${styles.approachTitle} subPageTit`}>
            {title}
            {/* <ScrollText data={{ groups: [{ lines: [title] }] }} /> */}
          </h2>
        </div>

        <div className={styles.approachList}>
          {items.map((item) => (
            <div key={item.number} className={styles.approachItem}>
              {/* <span className={styles.number}>{item.number}</span> */}
              {/* <h3 className={styles.itemTitle}>{item.title}</h3> */}

              <span className={styles.number}>
                {/* NUMBER */}
                <ScrollText
                  data={{
                    groups: [
                      {
                        lines: [String(item.number)],
                      },
                    ],
                  }}
                />
              </span>
              <p className={styles.itemTitle}>
                {/* title → ScrollText */}
                <ScrollText
                  data={{
                    groups: [
                      {
                        lines: [item.title],
                      },
                    ],
                  }}
                />
              </p>

              <div className={styles.itemDesc}>
                {/* {item.description.map((text, index) => (
                  <p key={index}>{text}</p>
                ))} */}
                <ScrollText
                  data={{
                    groups: item.description.map((text) => ({
                      lines: [text],
                    })),
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
