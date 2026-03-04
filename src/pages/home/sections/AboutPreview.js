import { Link } from "react-router-dom";
import styles from "../Home.module.scss";

import ScrollText from "components/scrolltext/ScrollText";
import { scrollTextData } from "data/scrollTextData";

function AboutPreview() {
  const { link } = scrollTextData.about;

  return (
    <section id="about" className={`${styles.sec02}`}>
      <div className={`${styles.aboutTxt}`}>
        <div className={`${styles.aboutLeft} ${styles.title} title`}>
          <p>ABOUT ZUSIM</p>
        </div>
        <div className={`${styles.aboutRight} ${styles.subTxt} subTxt`}>
          <ScrollText data={scrollTextData.about} />
          <Link to={link} className={`${styles.moreBtn}`}>
            ABOUT ZUSIM
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
