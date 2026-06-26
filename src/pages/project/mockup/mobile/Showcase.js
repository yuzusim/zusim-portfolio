// import styles from "../../ProjectDetail.module.scss";
// import { getBackgroundStyle } from "utils/getBackgroundStyle";

// function Showcase({ project }) {
//   const showcase = project?.mockup?.mobile?.showcase;
//   console.log("Showcase 렌더링");

//   if (!showcase) return null;

//   const { images = [], background, fade } = showcase;
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const list = images.map((img) => {
//       return new Promise((resolve) => {
//         const image = new Image();
//         image.src = img.src;
//         image.onload = resolve;
//       });
//     });

//     Promise.all(list).then(() => setLoaded(true));
//   }, [images]);

//   return (
//     <section
//       className={styles.mobileShowcase}
//       style={getBackgroundStyle(background)}
//     >
//       <div
//         className={styles.ShowcaseInner}
//         style={{
//           "--fade-color": fade?.color || "#fff",
//           "--fade-height": fade?.height || "50px",
//         }}
//       >
//         {[1, 2, 3].map((column) => (
//           // <div
//           //   key={column}
//           //   className={`${styles.gridSlider} ${
//           //     column % 2 ? styles.columnUp : styles.columnDown
//           //   }`}
//           // >

//           <div
//             className={`${styles.gridSlider} ${
//               loaded ? (column % 2 ? styles.columnUp : styles.columnDown) : ""
//             }`}
//           >
//             {images
//               .filter((img) => img.column === column)
//               .concat(images.filter((img) => img.column === column))
//               .map((img, idx) => (
//                 <div key={idx} className={styles.card}>
//                   <img
//                     src={img.src}
//                     className={`${styles.mockup} ${styles[img.size]}`}
//                     alt=""
//                     loading="eager"
//                     decoding="sync"
//                     fetchPriority="high"
//                   />
//                 </div>
//               ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// export default Showcase;

import { useEffect, useState } from "react";
import styles from "../../ProjectDetail.module.scss";
import { getBackgroundStyle } from "utils/getBackgroundStyle";

function Showcase({ project }) {
  const showcase = project?.mockup?.mobile?.showcase;

  const [loaded, setLoaded] = useState(false);

  const { images = [], background, fade } = showcase;

  useEffect(() => {
    const promises = images.map((img) => {
      return new Promise((resolve) => {
        const image = new Image();

        image.onload = resolve;
        image.onerror = resolve;

        image.src = img.src;
      });
    });

    Promise.all(promises).then(() => {
      setLoaded(true);
    });
  }, [images]);

  if (!showcase) return null;

  return (
    <section
      className={styles.mobileShowcase}
      style={getBackgroundStyle(background)}
    >
      <div
        className={styles.ShowcaseInner}
        style={{
          "--fade-color": fade?.color || "#fff",
          "--fade-height": fade?.height || "50px",
        }}
      >
        {[1, 2, 3].map((column) => (
          <div
            key={column}
            className={`${styles.gridSlider} ${
              loaded ? (column % 2 ? styles.columnUp : styles.columnDown) : ""
            }`}
          >
            {images
              .filter((img) => img.column === column)
              .concat(images.filter((img) => img.column === column))
              .map((img, idx) => (
                <div key={idx} className={styles.card}>
                  <img
                    src={img.src}
                    className={`${styles.mockup} ${styles[img.size]}`}
                    alt=""
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Showcase;
