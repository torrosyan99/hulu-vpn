
export const useFeedback = () => {
  const click = () => {
    const tg = window.Telegram?.WebApp;
    if (tg?.HapticFeedback) {
      tg.HapticFeedback.impactOccurred("light");
      return;
    }
    if ("vibrate" in navigator) {
      navigator.vibrate(20);
      return;
    }
    // fallback (например анимация) — можно оставить пусто
  };

  return { click };
};