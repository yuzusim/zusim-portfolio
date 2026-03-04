import emailjs from "emailjs-com";

export const sendEmail = ({ user_name, user_email, message }) => {
  return emailjs.send(
    "yuzu_gmail_service", // Service ID
    "template_974cg2s", // Template ID
    { user_name, user_email, message },
    "CKCVFnLCWE3vKi6TZ", // Public Key
  );
};
