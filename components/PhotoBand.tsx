// Bande media plein largeur. Photo placeholder a remplacer par l'equipe
// (voir public/assets/community/CREDITS.md et SPEC_UI_UX_CONTENU.md, section 12).
export default function PhotoBand({ dict }: { dict: Dictionary }) {
  const b = dict.band;

  return (
    <figure className="relative my-0 h-[clamp(200px,32vw,360px)] overflow-hidden bg-ink after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(23,32,51,0)_45%,rgba(23,32,51,0.6))] after:content-['']">
      <img className="block size-full object-cover" src="/assets/community/devfest-crowd.jpg" alt={b.alt} loading="lazy" />
      <figcaption className="absolute inset-x-0 bottom-0 z-[1] px-5 pt-[18px] pb-5 text-center text-[clamp(0.92rem,2vw,1.05rem)] font-semibold text-white">{b.caption}</figcaption>
    </figure>
  );
}
import type { Dictionary } from "@/data/i18n";
