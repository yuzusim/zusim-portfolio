import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "../ProjectDetail.module.scss";

function Overview({ project }) {
  const { overview } = project;

  return (
    <section className={styles.overview}>
      <div className={styles.overviewInner}>
        <div className={styles.overviewTxt}>
          <div className={styles.overviewTop}>
            <div className={`subPageTit`}>{overview.title.left}</div>
            <div className={styles.line}></div>
            <div className={`subPageTit`}>{overview.title.right}</div>
          </div>

          <div className={`${styles.description} pjSubTxt`}>
            {overview.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        <div className={styles.overviewContent}>
          {/* Summary */}
          <div className={`${styles.summary} `}>
            <h3 className={`${styles.summaryTitle} pjSubTxt`}>
              {overview.summary.title}
            </h3>
            <ul className={styles.summaryList}>
              {overview.summary.items.map((item) => (
                <li key={item.title} className={`${styles.summaryItem} pjTxt`}>
                  <span>{item.title}</span>

                  <div className={styles.content}>
                    {Array.isArray(item.content) ? (
                      item.content.map((text, index) => (
                        <p key={index}>{text}</p>
                      ))
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Story */}
          <div className={styles.story}>
            <h3 className={`${styles.summaryTitle} pjSubTxt`}>
              {overview.story.title}
            </h3>
            <p className={`${styles.storyTxt} pjTxt`}>
              {overview.story.description}
            </p>
            {/* link 이동 */}
            <a
              href={project.overview.link}
              className={styles.siteBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>VISIT SITE</span>
              <FiArrowUpRight size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
