import styles from "./Home.module.scss";

import Main from "./sections/Main";
import AboutPreview from "./sections/AboutPreview";
import ProjectPreview from "./sections//ProjectPreview";
import WorkPreview from "./sections/WorkPreview";
import Contact from "./sections/Contact";

import ScrollLine from "components/scrollLine/ScrollLine";

function Home() {
  return (
    <div id="home" className={styles.container}>
      <ScrollLine />
      <Main />
      <AboutPreview />
      <ProjectPreview />
      <WorkPreview />
      <Contact />
    </div>
  );
}

export default Home;
