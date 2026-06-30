import { useParams } from "react-router-dom";

import { projectDetailData } from "data/projects";
import { useScrollTop } from "hooks/useScrollTop ";

import Intro from "./sections/Intro";
import Overview from "./sections/Overview";
import Approach from "./sections/Approach";
import DesignSystem from "./sections/DesignSystem";

import PcStagger from "./mockup/pc/Stagger";
import MobileShowcase from "./mockup/mobile/Showcase";
import PcShowcase from "./mockup/pc/Showcase";
import TabletShowcase from "./mockup/tablet/Showcase";

function ProjectDetail() {
  // 스크롤 최상단
  useScrollTop();

  // const { id } = useParams();

  const { slug } = useParams();

  const project = projectDetailData.find((item) => item.slug === slug);

  console.log("slug:", slug);
  console.log("project:", project);

  // const project = projectDetailData.find((item) => item.id === Number(id));

  if (!project) return <div>Not Found</div>;

  const sectionComponents = {
    intro: <Intro project={project} />,
    overview: <Overview project={project} />,
    approach: <Approach project={project} />,
    pcStagger: <PcStagger project={project} />,
    mobileShowcase: <MobileShowcase project={project} />,
    pcShowcase: <PcShowcase project={project} />,
    tabletShowcase: <TabletShowcase project={project} />,
    designSystem: <DesignSystem project={project} />,
  };

  return (
    <div id="projectDetail">
      {project.sections.map((section) => (
        <div key={section}>{sectionComponents[section]}</div>
      ))}
    </div>
  );
}

export default ProjectDetail;
