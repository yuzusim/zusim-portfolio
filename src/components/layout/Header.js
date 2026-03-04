import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.scss";

import { useScrollTopCallback } from "hooks/useCallback";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTop = useScrollTopCallback();

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.inner} w18`}>
        <Link
          to="/"
          onClick={() => scrollTop("smooth")}
          className={styles.logo}
        >
          ZUSIM
        </Link>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="menu toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {/* <div className={styles.menu}></div> */}
      {/* 햄버거 버튼 (menu 제어용) */}

      {/* nav 자체가 열리고 닫힘 */}
      <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          ABOUT
        </Link>
        <Link to="/#project" onClick={() => setIsOpen(false)}>
          PROJECT
        </Link>
        <Link to="/work" onClick={() => setIsOpen(false)}>
          WORK
        </Link>
        <Link to="/#contact" onClick={() => setIsOpen(false)}>
          CONTACT
        </Link>
      </nav>
    </header>
  );
}

export default Header;
