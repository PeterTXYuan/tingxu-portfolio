type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <header className="border-b border-[var(--line)] pb-10 md:pb-14">
      <p className="eyebrow">{eyebrow}</p>
      <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] lg:items-end">
        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-[var(--ink)] sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
}
