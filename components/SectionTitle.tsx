export default function SectionTitle({
  title,
  subtitle,
  dark = false,
}: {
  title: string;
  subtitle: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-12 text-center after:mx-auto after:mt-[18px] after:block after:h-1 after:w-[72px] after:rounded-sm after:bg-[linear-gradient(90deg,var(--blue)_25%,var(--red)_25%_50%,var(--yellow)_50%_75%,var(--green)_75%)] after:content-['']">
      <h2 className={`text-[clamp(1.9rem,4vw,2.7rem)] ${dark ? "text-white" : ""}`}>
        {title}
      </h2>
      <p className={`mx-auto mt-2 max-w-[620px] ${dark ? "text-white/80" : "text-muted"}`}>
        {subtitle}
      </p>
    </div>
  );
}
