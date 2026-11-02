import { whatsappLink } from "@/data/i18n";
import type { Dictionary } from "@/data/i18n";
import { primaryButton } from "@/components/button-styles";
import SectionTitle from "@/components/SectionTitle";

export default function Members({ dict }: { dict: Dictionary }) {
  const m = dict.members;
  return (
    <section id="membres" className="py-[88px]">
      <div className="mx-auto w-full max-w-[1440px] px-5">
        <SectionTitle title={m.title} subtitle={m.subtitle} />
        <div className="mx-auto max-w-[680px] rounded-3xl border border-dashed border-line bg-surface px-7 py-12 text-center">
          <h3 className="mb-2 text-[1.35rem]">{m.emptyTitle}</h3>
          <p className="mb-[18px] text-muted">{m.note}</p>
          <a
            className={primaryButton}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.hero.joinBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
