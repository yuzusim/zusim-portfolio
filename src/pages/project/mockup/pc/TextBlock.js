import styles from "../../ProjectDetail.module.scss";
import ScrollText from "components/scrolltext/ScrollText";
import { getBackgroundStyle } from "utils/getBackgroundStyle";
import { toScrollData } from "utils/toScrollData";

function TextBlock({ project }) {
  const textBlock = project?.mockup?.pc?.textBlock;
  if (!textBlock) return null;

  const { background, title, txt } = textBlock;

  return (
    <section
      className={`${styles.textBlock}`}
      style={getBackgroundStyle(background)}
    >
      <div className={styles.textBlockInner}>
        <div className={styles.textBlockTxtWrap}>
          <h2 className={`${styles.textBlockTitle} subPageTit`}>
            {title.map((item, i) => (
              <span key={i}>
                {item}
                <br />
              </span>
            ))}
          </h2>

          <div className={styles.textBlockTxt}>
            <ScrollText data={toScrollData(txt)} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextBlock;
