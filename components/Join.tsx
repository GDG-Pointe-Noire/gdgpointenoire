import { ArrowUpRight, MapPin, MessageCircle, UsersRound } from "lucide-react";
import { whatsappLink } from "@/data/i18n";
import type { Dictionary } from "@/data/i18n";
import { buttonBaseClass } from "@/components/button-styles";

export default function Join({ dict }: { dict: Dictionary }) {
  const j = dict.join;

  return (
    <section id="rejoindre" className="pt-4 pb-[88px] max-[560px]:pt-0">
      <div className="mx-auto w-full max-w-[1440px] px-5">
        <div className="relative grid grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] overflow-hidden rounded-3xl bg-ink text-white before:absolute before:inset-y-0 before:left-0 before:w-[5px] before:bg-[linear-gradient(180deg,var(--blue)_25%,var(--red)_25%_50%,var(--yellow)_50%_75%,var(--green)_75%)] before:content-[''] max-[760px]:grid-cols-1 max-[560px]:rounded-[18px]">
          <div className="p-[clamp(32px,6vw,64px)] max-[760px]:px-7 max-[760px]:py-[34px] max-[560px]:px-[22px] max-[560px]:pt-8 max-[560px]:pb-7">
            <p className="flex items-center gap-[9px] text-[0.88rem] font-bold text-[#a9c7ff]">
              <UsersRound size={17} aria-hidden="true" />
              <span>{j.eyebrow}</span>
            </p>
            <h2 className="mt-5 max-w-[15ch] text-[clamp(2.1rem,4.5vw,3.5rem)] leading-[1.03]">{j.title}</h2>
            <p className="mt-4 max-w-[55ch] text-[1.04rem] text-white/75">{j.text}</p>
            <a
              className={`${buttonBaseClass} mt-7 gap-2.5 border-white bg-white text-ink hover:-translate-y-0.5 hover:border-[#e8f0fe] hover:bg-[#e8f0fe]`}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} aria-hidden="true" />
              <span>{j.btn}</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <p className="mt-[22px] flex items-center gap-[7px] text-[0.88rem] text-white/60">
              <MapPin size={16} aria-hidden="true" />
              <span>{j.location}</span>
            </p>
          </div>
          <aside className="m-5 flex flex-col justify-center rounded-[18px] border border-white/[0.14] bg-white/[0.055] p-[clamp(24px,4vw,38px)] max-[760px]:mx-5 max-[760px]:mt-0 max-[760px]:mb-5 max-[760px]:p-6 max-[560px]:mx-3">
            <span className="grid size-[54px] place-items-center rounded-2xl bg-brand-blue/20 text-[#a9c7ff]" aria-hidden="true">
              <MessageCircle size={30} strokeWidth={1.7} />
            </span>
            <h3 className="mt-6 text-[1.35rem]">{j.asideTitle}</h3>
            <p className="mt-[9px] text-[0.94rem] text-white/70">{j.asideText}</p>
            <span className="mt-6 border-t border-white/[0.16] pt-4 text-[0.84rem] font-bold text-[#d6dfec]">{j.asideNote}</span>
          </aside>
        </div>
      </div>
    </section>
  );
}
