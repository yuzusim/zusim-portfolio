import { useEffect } from "react";

// useScrollTop 훅 정의
export const useScrollTop = (behavior = "auto") => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior });
  }, [behavior]);
};
