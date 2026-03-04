import { useState } from "react";
import { sendEmail } from "../services/EmailService";

export const useEmail = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSend = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      await sendEmail(formData);

      setSuccess(true);

      // 성공 메시지 3초 후 제거
      setTimeout(() => setSuccess(false), 3000);

      return true; // 성공 여부 반환
    } catch (err) {
      console.error(err);
      setError(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, success, error, handleSend };
};
