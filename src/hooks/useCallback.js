import { useCallback } from "react";

// 클릭/버튼 시 스크롤 최상단
export const useScrollTopCallback = () => {
  const scrollTop = useCallback((behavior = "auto") => {
    window.scrollTo({ top: 0, behavior });
  }, []);

  return scrollTop;
};
