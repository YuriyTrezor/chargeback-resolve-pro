// Рабочее время: Пн–Пт, 10:00–20:00 МСК (UTC+3)
export const WORK_HOURS_LABEL = "Пн–Пт, 10:00–20:00 МСК";

export const isWorkingNow = (d = new Date()) => {
  const msk = new Date(d.getTime() + 3 * 3600_000);
  const day = msk.getUTCDay();
  const h = msk.getUTCHours();
  return day >= 1 && day <= 5 && h >= 10 && h < 20;
};

export const EMOJIS = ["😀","😊","🙂","😉","😍","🙏","👍","👌","👋","🤝","💪","🔥","✅","❗","❓","😔","😢","😡","🤔","😅","💰","💳","🏦","📄","📎","⏰","📞","✉️","❤️","🎉"];
