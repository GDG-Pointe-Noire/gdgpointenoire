const buttonBase =
  "btn inline-flex max-w-full items-center justify-center rounded-full border-2 border-brand-blue px-6 py-3 text-center font-bold [text-wrap:balance] transition-[background-color,border-color,color,transform] duration-200 ease motion-reduce:transition-none";

export const primaryButton =
  `${buttonBase} max-[560px]:w-full bg-brand-blue text-white hover:border-[#2f6fd8] hover:bg-[#2f6fd8]`;

export const heroPrimaryButton =
  `${buttonBase} bg-brand-blue text-white hover:border-[#2f6fd8] hover:bg-[#2f6fd8]`;

export const heroGhostButton =
  `${buttonBase} border-line bg-surface text-text hover:bg-surface-hover`;

export const buttonBaseClass =
  `${buttonBase} max-[560px]:w-full`;
