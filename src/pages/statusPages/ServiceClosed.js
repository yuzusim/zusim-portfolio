import { Link } from "react-router-dom";
import styles from "./ServiceClosed.module.scss";

export default function ServiceClosed() {
  return (
    <div className={styles.closedPage}>
      <h2>서비스가 종료된 사이트입니다.</h2>
      <p>
        죄송합니다.<br></br> 해당 사이트는 더 이상 이용하실 수 없습니다.
      </p>
      <Link to="/work" className={styles.moreBtn}>
        MORE WORK
      </Link>
    </div>
  );
}
