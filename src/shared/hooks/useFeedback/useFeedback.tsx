
export const useFeedback = () => {
  const click = () => {
    const tg = window.Telegram?.WebApp;

    if (tg?.HapticFeedback) {
      tg.HapticFeedback.impactOccurred("light");
      return;
    }
  };

  return { click };
};