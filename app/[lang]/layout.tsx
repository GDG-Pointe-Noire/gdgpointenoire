import "../globals.css";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import { isLocale, locales, type Locale } from "@/data/i18n";
import type { ReactNode } from "react";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: "GDG Pointe-Noire",
    description: isEn
      ? "Google Developer Group Pointe-Noire: the tech community of Pointe-Noire. Meet our organizing team and active members."
      : "Google Developer Group Pointe-Noire : la communauté tech de Pointe-Noire. Découvrez notre équipe organisatrice et nos membres actifs.",
    openGraph: {
      title: "GDG Pointe-Noire",
      description: isEn
        ? "Google Developer Group Pointe-Noire: the tech community of Pointe-Noire."
        : "Google Developer Group Pointe-Noire : la communauté tech de Pointe-Noire.",
      locale: isEn ? "en_US" : "fr_FR",
      type: "website",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const htmlLang: Locale = isLocale(lang) ? lang : "fr";

  return (
    <html lang={htmlLang} className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
