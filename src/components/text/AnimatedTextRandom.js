import { motion } from "framer-motion";

// 컨테이너: 글자 stagger
const container = {
  visible: {
    transition: {
      staggerChildren: 0.05, // 글자 간 간격
    },
  },
};

// 랜덤 위치 + 회전 애니메이션
const letterVariants = {
  hidden: () => ({
    x: (Math.random() - 0.5) * 200, // -100 ~ 100
    y: (Math.random() - 0.5) * 200, // -100 ~ 100
    opacity: 0,
    rotate: (Math.random() - 0.5) * 30, // -15 ~ 15
  }),
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const splitText = (text) => text.split("");

// AnimatedScatterText 컴포넌트
export default function AnimatedTextRandom({ text, className }) {
  // \n 기준으로 줄바꿈 처리
  const lines = text.split("\n");

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, idx) => (
        <motion.div key={idx} style={{ margin: 0 }}>
          {splitText(line).map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
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
