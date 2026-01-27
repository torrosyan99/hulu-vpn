
declare global {
  type TelegramWebApp = {
    HapticFeedback?: {
      impactOccurred: (style: "light" | "medium" | "heavy") => void;
      selectionChanged: () => void;
      notificationOccurred: (type: "success" | "warning" | "error") => void;
    };
  };

  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}


export {};