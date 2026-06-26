import styles from "../../ProjectDetail.module.scss";
import { getBackgroundStyle } from "utils/getBackgroundStyle";

function Showcase({ project }) {
  const showcase = project?.mockup?.mobile?.showcase;
  console.log("Showcase 렌더링");

  if (!showcase) return null;

  const { images = [], background, fade } = showcase;

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
              column % 2 ? styles.columnUp : styles.columnDown
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
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );

  // return (
  //   <section className={styles.mobileShowcase}>
  //     <div className={styles.ShowcaseInner}>
  //       {[1, 2, 3].map((column) => (
  //         <div
  //           key={column}
  //           className={`${styles.gridSlider} ${
  //             column % 2 ? styles.columnUp : styles.columnDown
  //           }`}
  //         >
  //           {images
  //             .filter((img) => img.column === column)
  //             .concat(images.filter((img) => img.column === column))
  //             .map((img, idx) => (
  //               <div key={idx} className={styles.card}>
  //                 <img
  //                   src={img.src}
  //                   className={`${styles.mockup} ${styles[img.size]}`}
  //                   alt=""
  //                 />
  //               </div>
  //             ))}
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  // );
}
export default Showcase;
