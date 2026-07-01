import { useParams } from "react-router-dom";

import { projectDetailData } from "data/projects";
import { useScrollTop } from "hooks/useScrollTop";

import Intro from "./sections/Intro";
import Overview from "./sections/Overview";
import Approach from "./sections/Approach";
import DesignSystem from "./sections/DesignSystem";

import PcStagger from "./mockup/pc/Stagger";
import MobileShowcase from "./mockup/mobile/Showcase";
import PcShowcase from "./mockup/pc/Showcase";
import TextBlock from "./mockup/pc/TextBlock";
import TabletShowcase from "./mockup/tablet/Showcase";

import MovieSlider from "components/slider/presets/MovieSlider";
import HistorySlider from "components/slider/presets/HistorySlider";
import { sliders } from "data/sliders";

function ProjectDetail() {
  useScrollTop();

  const { slug } = useParams();

  const project = projectDetailData.find((item) => item.slug === slug);

  if (!project) return <div>Not Found</div>;

  // =========================
  // COMPONENT MAP
  // =========================
  const sectionComponents = {
    intro: Intro,
    overview: Overview,
    approach: Approach,
    pcStagger: PcStagger,
    mobileShowcase: MobileShowcase,
    pcShowcase: PcShowcase,
    textBlock: TextBlock,
    tabletShowcase: TabletShowcase,
    designSystem: DesignSystem,
  };

  console.log(project.sections);
  console.log(sliders);

  return (
    <div id="projectDetail">
      {project.sections.map((section) => {
        // =========================
        // SLIDER TYPE

        if (section.type === "slider") {
          const config = sliders?.[section.key];

          if (!section.key || !config?.items?.length) return null;

          const SliderUI = {
            movie: MovieSlider,
            history: HistorySlider,
          }[section.key];

          if (!SliderUI) return null;

          return (
            <section className="section" key={section.key}>
              <SliderUI config={config} />
            </section>
          );
        }

        // =========================
        // NORMAL COMPONENT TYPE
        // =========================
        const Component = sectionComponents[section.key];

        // 🔥 2차 방어
        if (!Component) return null;

        return (
          <div key={section.key}>
            <Component project={project} />
          </div>
        );
      })}
    </div>
  );
}

export default ProjectDetail;
