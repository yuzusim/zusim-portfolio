import { useEffect, useState } from "react";

// export function useScrollText(ref, threshold = 0.5) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ref.current) return;

//       const rect = ref.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const start = windowHeight;
//       const end = rect.height * threshold;

//       const value = (start - rect.top) / (start - end);
//       setProgress(Math.min(Math.max(value, 0), 1));
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [threshold]);

//   return progress;
// }

// ScrollText/useScrollText.js
// import { useEffect, useState } from "react";

// export function useScrollText(ref, threshold = 0.5, startOffset = 0) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       if (!ref.current) return;

//       const rect = ref.current.getBoundingClientRect();
//       const vh = window.innerHeight;

//       //   const start = vh;
//       const start = vh - startOffset;
//       const end = rect.height * threshold;

//       const value = (start - rect.top) / (start - end);

//       // 0 ~ 1 사이로 고정
//       setProgress(Math.min(Math.max(value, 0), 1));
//     };

//     window.addEventListener("scroll", onScroll);
//     onScroll();

//     return () => window.removeEventListener("scroll", onScroll);
//   }, [threshold, startOffset]);

//   return progress;
// }

export function useScrollText(ref, threshold = 0.5, startOffset = 0) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const start = vh - startOffset;
      const end = rect.height * threshold;

      const value = (start - rect.top) / (start - end);
      setProgress(Math.min(Math.max(value, 0), 1));
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, startOffset]);

  return progress;
}
