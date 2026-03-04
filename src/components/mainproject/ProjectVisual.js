import DelphicVisual from "./visuals/DelphicVisual";
import BenzVisual from "./visuals/BenzVisual";
import DisneyVisual from "./visuals/DisneyVisual";

function ProjectVisual({ project }) {
  if (!project) return null;

  switch (project.visualType) {
    case "delphic":
      return project.mockup ? <DelphicVisual project={project} /> : null;

    case "benz":
      return project.mockup ? <BenzVisual project={project} /> : null;

    case "disney":
      return project.mockup ? <DisneyVisual project={project} /> : null;

    default:
      return null;
  }
}

export default ProjectVisual;
