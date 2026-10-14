// Bande media plein largeur. Photo placeholder a remplacer par l'equipe
// (voir public/assets/community/CREDITS.md et SPEC_UI_UX_CONTENU.md, section 12).
export default function PhotoBand({ dict }: { dict: Dictionary }) {
  const b = dict.band;

  return (
    <figure className="photo-band">
      <img src="/assets/community/devfest-crowd.jpg" alt={b.alt} loading="lazy" />
      <figcaption>{b.caption}</figcaption>
    </figure>
  );
}
import type { Dictionary } from "@/data/i18n";
