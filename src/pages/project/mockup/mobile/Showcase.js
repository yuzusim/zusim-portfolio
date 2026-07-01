// import { useEffect, useMemo, useRef } from "react";
// import styles from "../../ProjectDetail.module.scss";
// import { getBackgroundStyle } from "utils/getBackgroundStyle";

// function Showcase({ project }) {
//   const showcase = project?.mockup?.mobile?.showcase;

//   const { images = [], background, fade, axis = "column" } = showcase;

//   const refs = useRef([]);

//   // 🔥 key 기준 (row / column fallback 포함)
//   const getKey = (img) => {
//     if (axis === "column") return img.column;
//     if (axis === "row") return img.row ?? img.column;
//   };

//   // 🔥 direction (애니메이션 분기)
//   const getDirectionClass = (index) => {
//     if (axis === "column") {
//       return index % 2 ? styles.columnUp : styles.columnDown;
//     }

//     if (axis === "row") {
//       return index % 2 ? styles.rowUp : styles.rowDown;
//     }
//   };

//   // 🔥 groups (중요: 고정 1,2,3 제거)
//   const groups = useMemo(() => {
//     const keys = images.map(getKey);
//     return [...new Set(keys)];
//   }, [images, axis]);

//   useEffect(() => {
//     refs.current.forEach((el) => {
//       if (!el) return;

//       if (axis === "column") {
//         const height = el.scrollHeight / 2;
//         el.style.setProperty("--move", `-${height}px`);
//       }

//       if (axis === "row") {
//         const width = el.scrollWidth / 2;
//         el.style.setProperty("--move", `-${width}px`);
//       }
//     });
//   }, [images, axis]);

//   if (!showcase) return null;

//   return (
//     <section
//       className={styles.mobileShowcase}
//       style={getBackgroundStyle(background)}
//       data-axis={axis}
//     >
//       <div
//         className={styles.ShowcaseInner}
//         style={{
//           "--fade-color": fade?.color || "#fff",
//           "--fade-height": fade?.height || "50px",
//         }}
//       >
//         {groups.map((group) => {
//           const filtered = images.filter((img) => getKey(img) === group);

//           return (
//             <div
//               key={group}
//               ref={(el) => (refs.current[group] = el)}
//               className={`${styles.gridSlider} ${getDirectionClass(group)}`}
//             >
//               {[...filtered, ...filtered].map((img, idx) => (
//                 <div key={idx} className={styles.card}>
//                   <img src={img.src} className={styles.mockup} alt="" />
//                 </div>
//               ))}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default Showcase;

import { useEffect, useMemo, useRef } from "react";
import styles from "../../ProjectDetail.module.scss";
import { getBackgroundStyle } from "utils/getBackgroundStyle";

function Showcase({ project }) {
  const showcase = project?.mockup?.mobile?.showcase;

  const { images = [], background, fade, axis = "column" } = showcase;

  const refs = useRef([]);

  // -------------------------------
  // key 계산 (useMemo dependency 문제 제거 위해 내부 고정)
  // -------------------------------
  const groups = useMemo(() => {
    const keys = images.map((img) =>
      axis === "row" ? (img.row ?? img.column) : img.column,
    );

    return [...new Set(keys)];
  }, [images, axis]);

  // -------------------------------
  // direction class
  // -------------------------------
  const getDirectionClass = (index) => {
    return axis === "column"
      ? index % 2
        ? styles.columnUp
        : styles.columnDown
      : index % 2
        ? styles.rowUp
        : styles.rowDown;
  };

  // -------------------------------
  // scroll 거리 계산
  // -------------------------------
  useEffect(() => {
    refs.current.forEach((el) => {
      if (!el) return;

      if (axis === "column") {
        const h = el.scrollHeight / 2;
        el.style.setProperty("--move", `-${h}px`);
      } else {
        const w = el.scrollWidth / 2;
        el.style.setProperty("--move", `-${w}px`);
      }
    });
  }, [images, axis]);

  //
  if (!showcase) return null;

  return (
    <section
      className={styles.mobileShowcase}
      style={getBackgroundStyle(background)}
      data-axis={axis}
    >
      <div
        className={styles.ShowcaseInner}
        style={{
          "--fade-color": fade?.color || "#fff",
          "--fade-height": fade?.height || "50px",
        }}
      >
        {groups.map((group, i) => {
          const filtered = images.filter((img) =>
            axis === "row"
              ? (img.row ?? img.column) === group
              : img.column === group,
          );

          return (
            <div
              key={group}
              ref={(el) => (refs.current[i] = el)}
              className={`${styles.gridSlider} ${getDirectionClass(i)}`}
            >
              {[...filtered, ...filtered].map((img, idx) => (
                <div key={idx} className={styles.card}>
                  <img src={img.src} className={styles.mockup} alt="" />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Showcase;
