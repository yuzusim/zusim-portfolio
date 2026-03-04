import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useState } from "react";

// CSS는 기존대로
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import styles from "./ProjectSlider.module.scss";
import { mainProjectData } from "data/mainProjectData";
import ProjectVisual from "./ProjectVisual";

function ProjectSlider() {
  // const [active, setActiveIndex] = useState(0);
  // const [active, setActive] = useState(false);
  const [realIndex, setRealIndex] = useState(0);

  return (
    <section className={styles.projectSlider}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        // onSlideChangeTransitionEnd={(swiper) =>
        //   setActiveIndex(swiper.activeIndex)
        // }
        // onSlideChange={(swiper) => {
        //   setActive(swiper.realIndex === idx); // 현재 슬라이드일 때
        // }}
        onSlideChange={(swiper) => setRealIndex(swiper.realIndex)}
        // onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        loop
        speed={900}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {mainProjectData.map((project, idx) => {
          // 백그라운드 스타일 지정
          const bgStyle =
            project.bgType === "image"
              ? { backgroundImage: `url(${project.bg})` }
              : { background: project.bg };

          return (
            <SwiperSlide key={project.id}>
              {/* 각 슬라이드 */}
              <section className={styles.slide} style={bgStyle}>
                {/* 배경 오버레이 (보통 색상 반투명) */}
                {/* 기존 overlay */}
                {project.overlay && <div className={styles.overlay} />}

                {/* 슬라이드 내부 콘텐츠 영역 */}
                <div className={styles.slideInner}>
                  {/* TEXT */}
                  <div className={styles.textArea}>
                    <span className={`${styles.label} title`}>PROJECT</span>
                    {/* 인덱스 번호 (01, 02, ...) */}
                    <h2 className={styles.index}>
                      {String(idx + 1).padStart(2, "0")}
                    </h2>
                    {/* 프로젝트 제목 */}
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    {/* 프로젝트 설명 */}
                    {/* project.desc가 배열이면 그대로 map, project.desc가 문자열이면 \n 기준으로 배열로 변환 후 map */}
                    <div className={styles.desc}>
                      {(project.desc ?? []).map((block, i) =>
                        block
                          .split("\n")
                          .map((line, j) => <p key={`${i}-${j}`}>{line}</p>),
                      )}
                    </div>

                    {/* link 이동 */}
                    <Link to={project.link} className={styles.linkBtn}>
                      MORE
                    </Link>
                  </div>

                  {/* VISUAL */}
                  <div className={styles.visualArea}>
                    {/* MOCKUP */}
                    <ProjectVisual
                      project={project}
                      isActive={realIndex === idx}
                    />
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default ProjectSlider;
