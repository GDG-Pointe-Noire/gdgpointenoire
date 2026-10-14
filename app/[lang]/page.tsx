import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Paths from "@/components/Paths";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Members from "@/components/Members";
import Partners from "@/components/Partners";
import Join from "@/components/Join";
import Footer from "@/components/Footer";
import { getDictionary, isLocale, type Locale } from "@/data/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = isLocale(rawLang) ? rawLang : "fr";
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main id="top">
        <Hero dict={dict} lang={lang} />
        <Events dict={dict} lang={lang} />
        <About dict={dict} />
        <Programs dict={dict} lang={lang} />
        <Paths dict={dict} />
        <Projects dict={dict} lang={lang} />
        <Team dict={dict} lang={lang} />
        <Members dict={dict} />
        <Partners dict={dict} />
        <Join dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
