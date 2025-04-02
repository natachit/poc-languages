"use client";

import { Suspense } from "react";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <h1>{t("about_us")}</h1>
      </Suspense>
    </main>
  );
}
