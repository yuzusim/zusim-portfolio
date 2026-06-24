import styles from "./ProjectDetail.module.scss";

import { useParams } from "react-router-dom";

import { projectDetailData } from "data/projects";
import { useScrollTop } from "hooks/useScrollTop ";

import Intro from "./sections/Intro";
import Overview from "./sections/Overview";
import Approach from "./sections/Approach";
import PcStagger from "./mockup/pc/Stagger";
import MobileShowcase from "./mockup/mobile/Showcase";
import PcShowcase from "./mockup/pc/Showcase";
import TabletShowcase from "./mockup/tablet/Showcase";
import DesignSystem from "./sections/DesignSystem";

function ProjectDetail() {
  // 스크롤 최상단
  useScrollTop();

  const { id } = useParams();

  const project = projectDetailData.find((item) => item.id === Number(id));

  if (!project) return <div>Not Found</div>;

  return (
    <div id="projectDetail">
      <Intro project={project} />
      <Overview project={project} />
      <Approach project={project} />
      <PcStagger project={project} />
      <MobileShowcase project={project} />
      <PcShowcase project={project} />
      <TabletShowcase project={project} />
      <DesignSystem project={project} />
    </div>
  );
}

export default ProjectDetail;
