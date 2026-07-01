import ScrollText from "components/scrolltext/ScrollText";
import Slider from "components/slider/core/Slider";
import styles from "pages/project/ProjectDetail.module.scss";

function HistorySlider({ config }) {
  if (!config?.items?.length) return null;

  return (
    <div
      className={styles.sliderWrap}
      style={{ background: config.background }}
    >
      <div className={styles.sliderTxtWrap}>
        <div className={`${styles.sliderTitle}`}>
          {config.title.map((text, index) => (
            <h2 key={index} className="subPageTit">
              {text}
            </h2>
          ))}
        </div>

        {/* <div className={styles.sliderText}>
          {config.text.map((text, index) => (
            <p key={index} className="pjSubTxt">
              {text}
            </p>
          ))}
        </div> */}

        <div className={`${styles.sliderText} pjSubTxt`}>
          <ScrollText
            data={{
              groups: [
                {
                  lines: config.text,
                },
              ],
            }}
          />
        </div>
      </div>

      <div className={styles.sliderArea}>
        <div className={`${styles.sliderInner} ${styles.HistorySlider}`}>
          <Slider
            config={config}
            renderItem={(item) => (
              <div className={styles.slideItem}>
                <div className={styles.historyCard}>
                  <div className={styles.historyImg}>
                    <img src={item.img} alt={item.text} />
                  </div>

                  <div className={styles.historyInfo}>
                    <span className={styles.year}>{item.year}</span>
                    <h3 className={styles.historyTitle}>
                      {(Array.isArray(item.text) ? item.text : [item.text]).map(
                        (line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ),
                      )}
                    </h3>
                    <div className={styles.beforeIcon}>
                      <img src={item.beforeImg} alt="" />
                    </div>
                    <p className={styles.afterText}>{item.afterText}</p>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default HistorySlider;
