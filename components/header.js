"use client";

import { Suspense } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>{t("welcome")}</h1>
    </Suspense>
  );
}
