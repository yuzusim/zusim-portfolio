// components/AnimatedText.jsx
import { motion } from "framer-motion";

// 컨테이너 설정: 글자 stagger 적용
const container = {
  visible: {
    transition: {
      staggerChildren: 0.05, // 글자 간 간격
    },
  },
};

// 글자 단위 애니메이션
const letterUpVariants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// 텍스트를 글자 단위로 분리
const splitText = (text) => text.split("");

// AnimatedText 컴포넌트
export default function AnimatedText({ text, className }) {
  // \n 기준으로 줄 나누기
  const lines = text.split("\n");

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* {lines.map((line, idx) => (
        <motion.p key={idx} style={{ margin: 0 }}>
          {splitText(line).map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterUpVariants}
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.p>
      ))} */}

      {lines.map((line, idx) => (
        <motion.div key={idx} className="line">
          {splitText(line).map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterUpVariants}
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
}
