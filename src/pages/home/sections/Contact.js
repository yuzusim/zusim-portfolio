import { useState } from "react";
import { useEmail } from "hooks/useEmail";
import styles from "../Home.module.scss";

import ScrollText from "components/scrolltext/ScrollText";
import { scrollTextData } from "data/scrollTextData";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const { loading, success, error, handleSend } = useEmail();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ok = await handleSend(formData);

    if (ok) {
      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    }
  };

  return (
    <section
      id="contact"
      className={`${styles.sec05}  ${success ? styles.successBg : ""}`}
    >
      <div className={`${styles.title} title`}>
        <p>CONTACT</p>
      </div>

      <div className={styles.contactInner}>
        <div className={styles.contactLeft}>
          <ScrollText data={scrollTextData.contact} />
        </div>

        <div className={styles.contactRight}>
          <div className={`${styles.subTxt}`}>
            <h2>채용, 협업, 제안 보내기</h2>
          </div>

          <form
            className={`${styles.snedBox} ${styles.text} ${styles.contactForm} text`}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="E-mail"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Comments"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`${styles.sendBtn} ${success ? styles.success : ""} ${error ? styles.error : ""}`}
            >
              {loading && "SENDING..."}
              {success && "✔ 메일 전송 완료"}
              {error && "✕ 전송 실패"}
              {!loading && !success && !error && "SEND"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
