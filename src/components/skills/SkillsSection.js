import { useEffect, useState } from "react";
import DesktopSkills from "./DesktopSkills";
import MobileSkills from "./MobileSkills";

function SkillsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile ? <MobileSkills /> : <DesktopSkills />;
}

export default SkillsSection;
