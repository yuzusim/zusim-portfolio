import styles from "../../ProjectDetail.module.scss";

import ScrollText from "components/scrolltext/ScrollText";
import { getBackgroundStyle } from "utils/getBackgroundStyle";

function TextBlock({ project }) {
  const textBlock = project?.mockup?.pc?.textBlock;
  if (!textBlock) return null;

  const { background, title, txt } = textBlock;

  return (
    <section
      className={`${styles.textBlock}`}
      style={getBackgroundStyle(background)}
    >
      <div className={styles.textBlockTxtWrap}>
        <h2 className={`${styles.textBlockTitle} subPageTit`}>
          {title.map((item, i) => (
            <span key={i}>
              {item}
              <br />
            </span>
          ))}
        </h2>

        {/* <p className={`${styles.textBlockTxt} pjSubTxt`}>{txt}</p> */}
        <p className={`${styles.textBlockTxt} pjSubTxt`}>
          <ScrollText
            data={{
              groups: [
                {
                  lines:
                    typeof txt === "string"
                      ? txt.split(". ")
                      : Array.isArray(txt)
                        ? txt
                        : [],
                },
              ],
            }}
          />
        </p>
      </div>
    </section>
  );
}

export default TextBlock;
