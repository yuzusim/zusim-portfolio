import ScrollText from "components/scrolltext/ScrollText";
import Slider from "components/slider/core/Slider";
import styles from "pages/project/ProjectDetail.module.scss";

function MovieSlider({ config }) {
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
        <div className={`${styles.sliderInner} ${styles.movieSlider}`}>
          <Slider
            config={config}
            renderItem={(item) => (
              <div className={styles.slideItem}>
                <div className={styles.card}>
                  <figure className={styles.posterWrap}>
                    <img
                      src={item.poster}
                      alt={item.title}
                      className={styles.poster}
                    />
                  </figure>

                  <div className={styles.info}>
                    <img
                      src={item.titleImg}
                      alt={item.title}
                      className={styles.titleImg}
                    />

                    <ul className={styles.meta}>
                      <li className={styles.ageWrap}>
                        <img
                          src={item.ageImg}
                          alt="관람등급"
                          className={styles.age}
                        />
                      </li>

                      <li className={styles.year}>{item.year}</li>
                    </ul>
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

export default MovieSlider;
