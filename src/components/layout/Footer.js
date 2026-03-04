import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

import { useScrollTopCallback } from "hooks/useCallback";

function Footer() {
  const scrollTop = useScrollTopCallback();

  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.ftIn} w18`}>
        <ul className={`${styles.ftMenu}`}>
          <li>
            <Link to="/about" className={styles}>
              About
            </Link>
          </li>
          <li>
            <Link to="/#project" className={styles}>
              Project
            </Link>
          </li>
          <li>
            <Link to="/work" className={styles}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/#contact" className={styles}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={`${styles.ftInfo}`}>
          <p>+82 10 6471 2233</p>
          <p>yuzusim@gmail.com</p>
          <p>Copyright © ZUSIM All Right Reserved.</p>
          <p>
            This site is for personal portfolio use only and not for commercial
            purposes.
          </p>
        </div>
        <div className={`${styles.fLogo} title`}>
          <Link to="/" onClick={() => scrollTop("smooth")}>
            ZUSIM
          </Link>
        </div>

        {/* 🔝 Top Button */}
        <button
          type="button"
          className={styles.topBtn}
          onClick={() => scrollTop("smooth")}
        >
          ↑ <span className="sound_only"></span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
