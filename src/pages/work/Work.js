import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Work.module.scss";

import AnimatedText from "components/text/AnimatedText";
import ScrollText from "components/scrolltext/ScrollText";

import { useScrollTop } from "hooks/useScrollTop ";
import { workData } from "data/workData";
import { workscrollTextData } from "data/workData";

function Work() {
  const tabs = ["ALL", "반응형웹", "WEB", "UI/UX", "IDENTITY", "LOGO"];

  const [activeTab, setActiveTab] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  useScrollTop();

  // 반응형 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 카테고리 변경 시 카드 리셋
  useEffect(() => {
    setVisibleCount(6);
  }, [activeTab]);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredData =
    activeTab === "ALL"
      ? workData
      : workData.filter((item) => item.category.includes(activeTab));

  const visibleData = filteredData.slice(0, visibleCount);

  return (
    <section className={styles.work}>
      <div className={styles.workTop}>
        <AnimatedText text="WORK" className={`${styles.title} title`} />
        <div className={`${styles.workTit} pt-30`}>
          <ScrollText data={workscrollTextData.work} startFromZero />
        </div>
      </div>

      <div className={styles.workBottom}>
        {/* ✅ 카테고리 영역 */}
        {isMobile ? (
          <div className={styles.mobileFilter} ref={dropdownRef}>
            <button
              className={styles.filterBtn}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {activeTab} <span className={styles.arrow}>▾</span>
            </button>

            {isOpen && (
              <ul className={styles.dropdown}>
                {tabs.map((tab) => (
                  <li
                    key={tab}
                    className={activeTab === tab ? styles.selected : ""}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsOpen(false);
                    }}
                  >
                    {activeTab === tab && "✓ "}
                    {tab}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? styles.active : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* 카드 */}
        <div className={styles.gridWrap}>
          <div className={styles.grid}>
            {visibleData.map((item) =>
              item.isClosed ? (
                <Link
                  to="/service-closed"
                  key={item.id}
                  className={styles.card}
                >
                  <div className={styles.imgWrap}>
                    <img src={item.image} alt={item.title} />
                    <div className={styles.hoverInfo}>
                      <p className={styles.title}>{item.title}</p>
                      <p className={styles.sub}>{item.sub}</p>
                      <div className={styles.category}>
                        {item.category.map((cat, i) => (
                          <span key={i}>{cat}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <a
                  href={item.url}
                  key={item.id}
                  className={styles.card}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.imgWrap}>
                    <img src={item.image} alt={item.title} />
                    <div className={styles.hoverInfo}>
                      <p className={styles.title}>{item.title}</p>
                      <p className={styles.sub}>{item.sub}</p>
                      <div className={styles.category}>
                        {item.category.map((cat, i) => (
                          <span key={i}>{cat}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ),
            )}
          </div>

          {visibleCount < filteredData.length && (
            <div className={styles.more}>
              <button
                className={styles.moreBtn}
                onClick={() => setVisibleCount((prev) => prev + 6)}
              >
                MORE
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Work;
