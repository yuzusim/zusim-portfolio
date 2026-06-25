import styles from "../ProjectDetail.module.scss";
import { getBackgroundStyle } from "utils/getBackgroundStyle";

function Intro({ project }) {
  const { background, intro, title } = project;

  const renderTitle = () => {
    if (title?.logo) {
      return (
        <img
          src={title.logo}
          alt="project logo"
          className={styles.projectLogo}
        />
      );
    }

    if (title?.text) {
      return (
        <h1 className={`${styles.subPageTit} subPageTit`}>{title.text}</h1>
      );
    }

    return <h1 className={styles.titleText}>{project.name}</h1>;
  };

  return (
    <section
      className={styles.pjIntro}
      style={{
        ...getBackgroundStyle(background),
        "--mobile-position": background.mobilePosition || "center",
      }}
    >
      <div className={styles.overlay} style={{ opacity: background.overlay }} />

      <div className={styles.pjIntroTxt}>
        {renderTitle()}

        <p className="pjSubTxt">{intro.mainTxt}</p>
        <p className="pjSubTxt">{intro.subTxt}</p>
      </div>
    </section>
  );
}

export default Intro;
