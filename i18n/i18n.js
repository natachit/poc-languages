"use client"; // Required for client components

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website!",
      start: "Let's get started!",
      about_us: "About Us",
    },
  },
  th: {
    translation: {
      welcome: "ยินดีต้อนรับสู่เว็บไซต์ของเรา！",
      start: "มาเริ่มกันเลย!",
      about_us: "เกี่ยวกับเรา",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["navigator", "cookie", "localStorage"],
      caches: [],
    },
  });

export default i18n;
