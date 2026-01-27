import { useCallback } from "react";

export const useFeedback = () => {
  const tg = window.Telegram?.WebApp;

  const click = useCallback(() => {
    if (tg?.HapticFeedback) {
      tg.HapticFeedback.impactOccurred("light");
      return;
    }
    if (navigator.vibrate) navigator.vibrate(20);
  }, []);

  return { click };
};
