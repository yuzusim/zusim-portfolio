// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>찾을 수 없는 페이지입니다.</p>
      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
}
