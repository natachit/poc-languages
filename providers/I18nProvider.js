"use client"; // Ensures this runs only on the client side

import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n/i18n"; // Import your i18n configuration

const I18nProvider = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
