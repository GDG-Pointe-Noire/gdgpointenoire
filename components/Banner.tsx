export default function Banner({ text }: { text: string }) {
  return (
    <div className="bg-ink px-5 py-2.5 text-white max-[560px]:px-4 max-[560px]:py-2">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-center gap-3 px-5 text-center">
        <span className="flex gap-1 max-[720px]:hidden" aria-hidden="true">
          <i className="block size-2.5 rounded-full bg-brand-blue" />
          <i className="block size-2.5 rounded-full bg-brand-red" />
          <i className="block size-2.5 rounded-full bg-brand-yellow" />
          <i className="block size-2.5 rounded-full bg-brand-green" />
        </span>
        <p className="text-[0.92rem] font-semibold max-[720px]:text-[0.85rem]">{text}</p>
      </div>
    </div>
  );
}
