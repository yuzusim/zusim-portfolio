// import { useEffect, useRef } from "react";
// import styles from "./ScrollLine.module.scss";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// export default function ScrollLine() {
//   const pathRef = useRef(null);
//   const planeRef = useRef(null);
//   const wrapRef = useRef(null);

//   useEffect(() => {
//     const path = pathRef.current;
//     const plane = planeRef.current;
//     const wrap = wrapRef.current;
//     const length = path.getTotalLength();

//     // ====== 선 기본 세팅 ======
//     gsap.set(path, {
//       strokeDasharray: length,
//       strokeDashoffset: length,
//     });

//     // ====== ① 스크롤에 따라 선 드로잉 ======
//     gsap.to(path, {
//       strokeDashoffset: 0,
//       ease: "none",
//       scrollTrigger: {
//         trigger: "body",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1.2,
//       },
//     });

//     // ====== ② 비행기 motionPath ======
//     // gsap.to(plane, {
//     //   motionPath: {
//     //     path: path,
//     //     align: path,
//     //     alignOrigin: [0.5, 0.5],
//     //     autoRotate: true,
//     //     start: 0,
//     //     end: 1,
//     //   },
//     //   ease: "none",
//     //   scrollTrigger: {
//     //     trigger: "body",
//     //     start: "top top",
//     //     end: "bottom bottom",
//     //     scrub: 1.2,
//     //   },
//     // });

//     gsap.set(plane, { opacity: 1 });

//     gsap.to(plane, {
//       motionPath: {
//         path: path,
//         align: path,
//         alignOrigin: [0.5, 0.5],
//         autoRotate: true,
//       },
//       ease: "none",
//       scrollTrigger: {
//         trigger: document.documentElement,
//         start: 0,
//         end: "max",
//         scrub: true,
//       },
//     });

//     // ====== ③ PROJECT 구간 → 선 숨김 ======
//     ScrollTrigger.create({
//       trigger: "#project",
//       start: "top center",
//       end: "bottom center",
//       onEnter: () => gsap.to(wrap, { opacity: 0, duration: 0.3 }),
//       onLeave: () => gsap.to(wrap, { opacity: 1, duration: 0.3 }),
//       onLeaveBack: () => gsap.to(wrap, { opacity: 1, duration: 0.3 }),
//     });

//     // ====== ④ CONTACT 구간 → 선 색상 변경 ======
//     ScrollTrigger.create({
//       trigger: "#contact",
//       start: "top center",
//       end: "bottom center",
//       onEnter: () =>
//         // gsap.to(path, { stroke: "rgba(1, 239, 0, 1)", duration: 0.3 }),
//         gsap.to(path, { stroke: "rgba(255, 255, 255, .8)", duration: 0.3 }),
//       onLeaveBack: () => gsap.to(path, { stroke: "#000000", duration: 0.3 }),
//     });
//   }, []);

//   return (
//     <div className={styles.lineWrap} ref={wrapRef}>
//       <svg
//         width="100%"
//         height="100%"
//         viewBox="-40 -180 1250 1100"
//         preserveAspectRatio="xMidYMid meet"
//       >
//         {/* ====== 선 ====== * // stroke="rgba(1, 239, 0, 1)" // 메인 컬러*/}
//         <path
//           ref={pathRef}
//           d="M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819"
//           fill="none"
//           stroke="rgba(0, 0, 0, .8)" // 메인 컬러
//           strokeWidth="2" // 굵기
//           strokeLinecap="round"
//         />

//         {/* ====== 비행기 ====== */}
//         <g
//           ref={planeRef}
//           className="plane"
//           transform="translate(0,0) scale(0.6)"
//         >
//           <path
//             fill="url(#grad)"
//             opacity="0.3"
//             d="m82.8 35 215.9 94.6L79 92l3.8-57Z"
//           />
//           <path fill="url(#grad)" d="m82.8 35 52-23.5 163.9 118.1-216-94.5Z" />
//           <path
//             fill="url(#grad)"
//             opacity="0.3"
//             d="m76.8 107.1 214.4 19.6L74.7 131l2.1-23.9Z"
//           />
//           <path
//             fill="url(#grad)"
//             d="M298.8 130.4 1.9 103.3l54-45 242.9 72.1Z"
//           />
//         </g>

//         <defs>
//           <linearGradient
//             id="grad"
//             x1="0"
//             x2="0"
//             y1="0"
//             y2="1"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0" stopColor="rgba(1, 239, 0, 1)" /> {/* 밝은 연두 */}
//             <stop offset="1" stopColor="rgba(0, 200, 0, 1)" />{" "}
//             {/* 조금 진한 연두 */}
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   );
// }

import { useEffect, useRef } from "react";
import styles from "./ScrollLine.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function ScrollLine() {
  const pathRef = useRef(null);
  const planeRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const plane = planeRef.current;
    const wrap = wrapRef.current;

    if (!path || !plane) return;

    const length = path.getTotalLength();

    // ====== ① 선 기본 세팅 ======
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // ====== ② 선 드로잉 ======
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: "max",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    // ====== ③ 비행기 시작 위치 강제 세팅 (핵심) ======
    gsap.set(plane, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0,
        end: 0,
      },
    });

    // ====== ④ 비행기 모션 ======
    gsap.to(plane, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0,
        end: 1,
      },
      ease: "none",
      immediateRender: true,
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: "max",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    // ====== ⑤ PROJECT 구간 → 선 숨김 ======
    ScrollTrigger.create({
      trigger: "#project",
      start: "top center",
      end: "bottom center",
      onEnter: () => gsap.to(wrap, { opacity: 0, duration: 0.3 }),
      onLeave: () => gsap.to(wrap, { opacity: 1, duration: 0.3 }),
      onLeaveBack: () => gsap.to(wrap, { opacity: 1, duration: 0.3 }),
    });

    // ====== ⑥ CONTACT 구간 → 색상 변경 ======
    ScrollTrigger.create({
      trigger: "#contact",
      start: "top center",
      end: "bottom center",
      onEnter: () =>
        gsap.to(path, { stroke: "rgba(255, 255, 255, .8)", duration: 0.3 }),
      onLeaveBack: () => gsap.to(path, { stroke: "#000000", duration: 0.3 }),
    });

    // ====== ⑦ 강제 리프레시 (모바일 필수) ======
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className={styles.lineWrap} ref={wrapRef}>
      {/* <svg
        width="100%"
        height="100%"
        viewBox="-40 -180 1250 1100"
        preserveAspectRatio="xMidYMid meet"

        viewBox="-150 -160 1400 1100"
      > */}

      <svg
        width="100%"
        height="100%"
        viewBox="-150 -200 1500 1200"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          ref={pathRef}
          d="M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819"
          fill="none"
          stroke="rgba(0, 0, 0, .8)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <g ref={planeRef} transform="translate(0,0) scale(0.6)">
          <path
            fill="url(#grad)"
            opacity="0.3"
            d="m82.8 35 215.9 94.6L79 92l3.8-57Z"
          />
          <path fill="url(#grad)" d="m82.8 35 52-23.5 163.9 118.1-216-94.5Z" />
          <path
            fill="url(#grad)"
            opacity="0.3"
            d="m76.8 107.1 214.4 19.6L74.7 131l2.1-23.9Z"
          />
          <path
            fill="url(#grad)"
            d="M298.8 130.4 1.9 103.3l54-45 242.9 72.1Z"
          />
        </g>

        <defs>
          <linearGradient
            id="grad"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="rgba(1, 239, 0, 1)" />
            <stop offset="1" stopColor="rgba(0, 200, 0, 1)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
