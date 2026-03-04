import { useEffect, useState } from "react";

// export function useHeroText(ref, threshold = 0.4) {
//   const [active, setActive] = useState(false);

//   useEffect(() => {
//     if (!ref.current) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setActive(true);
//           observer.disconnect(); // ✅ 한 번만 실행
//         }
//       },
//       { threshold },
//     );

//     observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, [threshold]);

//   return active;
// }

export function useHeroText(ref, threshold = 0.4) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // ✅ 들어오면 true, 나가면 false
        setActive(entry.isIntersecting);
      },
      { threshold },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, ref]);

  return active;
}
