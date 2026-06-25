import styles from "../ProjectDetail.module.scss";
import { Monitor, Tablet, Smartphone } from "lucide-react";

const deviceIcons = {
  desktop: Monitor,
  tablet: Tablet,
  mobile: Smartphone,
};

function DesignSystem({ project }) {
  const { designSystem } = project;
  const { title, cards } = designSystem;

  return (
    <section className={`${styles.designSystem}`}>
      <div className={styles.designSystemInner}>
        <h2 className="subPageTit">{title}</h2>

        <div className={styles.designSystemList}>
          {cards.map((card, index) => {
            if (card.type === "font") {
              return (
                <div
                  key={index}
                  className={`${styles.designCard} ${styles.fontCard}`}
                  style={{ fontFamily: card.family }}
                >
                  <h3>{card.title}</h3>

                  <div className={styles.fontPreview}>{card.preview}</div>

                  <p>{card.weights.join(" / ")}</p>
                </div>
              );
            }

            if (card.type === "color") {
              return (
                <div
                  key={index}
                  className={`${styles.designCard} ${styles.colorCard}`}
                >
                  {card.colors.map((color) => (
                    <div
                      key={color}
                      className={styles.colorItem}
                      style={{
                        background: color,

                        color: ["#000000", "#040714"].includes(color)
                          ? "#fff"
                          : "#000",
                      }}
                    >
                      {color}
                    </div>
                  ))}

                  {card.gradient && (
                    <div
                      className={styles.colorItem}
                      style={{
                        background: card.gradient.background,
                      }}
                    >
                      {card.gradient.colors.map((color) => (
                        <span key={color}>{color}</span>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (card.type === "responsive") {
              return (
                <div
                  key={index}
                  className={`${styles.designCard} ${styles.responsiveCard}`}
                >
                  <h3>{card.title}</h3>
                  {card.devices.map((device) => {
                    const Icon = deviceIcons[device.icon];

                    return (
                      <div key={device.title} className={styles.deviceItem}>
                        <Icon strokeWidth={1.5} size={54} />

                        <div>
                          <h4>{device.title}</h4>
                          <span>{device.value}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}

export default DesignSystem;
