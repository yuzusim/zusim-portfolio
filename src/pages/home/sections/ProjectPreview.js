import { Link } from "react-router-dom";
import styles from "../Home.module.scss";
import ProjectSlider from "components/mainproject/ProjectSlider";

function ProjectPreview() {
  return (
    <section id="project" className={`${styles.sec03}`}>
      {/* <div className={styles.title}>
        <p>PROJECT</p>
      </div> */}
      <ProjectSlider />
    </section>
  );
}

export default ProjectPreview;
