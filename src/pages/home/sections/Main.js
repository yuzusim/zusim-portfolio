import styles from "../Home.module.scss";

import AnimatedTextRandom from "components/text/AnimatedTextRandom";
import ScrollText from "components/scrolltext/ScrollText";
import { scrollTextData } from "data/scrollTextData";

function Main() {
  return (
    <section id="main" className={`${styles.sec01} ${styles.mainVisual}`}>
      <div className={`${styles.inner}`}>
        <AnimatedTextRandom
          text={`Designing \nThe Center\nBetween \nusers and brands.`}
          className={`${styles.desc} ${styles.bigTit}`}
        />

        <ScrollText data={scrollTextData.main} />
      </div>
    </section>
  );
}

export default Main;
