export const toneClasses = [
  "[--tone:var(--blue)]",
  "[--tone:var(--red)]",
  "[--tone:var(--yellow)]",
  "[--tone:var(--green)]",
] as const;

export const colorToneClasses = {
  blue: toneClasses[0],
  red: toneClasses[1],
  yellow: toneClasses[2],
  green: toneClasses[3],
} as const;
