// src/pages/ErrorPage.jsx
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

export default function ErrorPage({ message }) {
  return (
    <div className={styles.errorPage}>
      <h1>오류 발생</h1>
      <p>{message || "알 수 없는 오류가 발생했습니다."}</p>
      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
}
