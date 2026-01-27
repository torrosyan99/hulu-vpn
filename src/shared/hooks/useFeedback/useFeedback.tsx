
export const useFeedback = () => {
  const click = () => {
    const tg = window.Telegram?.WebApp;


    alert(
      JSON.stringify({
        inTelegram: !!tg,
        hasHaptic: !!tg?.HapticFeedback,
        hasVibrate: "vibrate" in navigator,
        ua: navigator.userAgent,
      }, null, 2)
    );

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