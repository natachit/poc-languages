"use client";

import Link from "next/link";

import Header from "@/components/header";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <main>
        <Header />
        <p>🔥 {t("start")} 🔥</p>
        <p>
          <Link href="/about">{t("about_us")}</Link>
        </p>
        <p>{i18n.language}</p>
        {/* <button
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "th" : "en")
        }
      >
        Switch to {i18n.language === "en" ? "Thai" : "English"}
      </button> */}
      </main>
    </Suspense>
  );
}
