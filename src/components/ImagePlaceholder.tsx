type ImagePlaceholderProps = {
  label: string;
  recommended: string[];
};

export function ImagePlaceholder({ label, recommended }: ImagePlaceholderProps) {
  return (
    <div className="relative h-64 md:h-80 w-full mb-12 rounded-[var(--radius-sharp)] border-2 border-dashed border-border bg-surface-alt flex flex-col items-center justify-center gap-2 px-4 text-center">
      <svg
        viewBox="0 0 48 48"
        className="h-10 w-10 text-ink/30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M6 16a2 2 0 0 1 2-2h5l2-3h10l2 3h5a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z" />
        <circle cx="24" cy="27" r="7" />
      </svg>
      <p className="font-heading text-sm uppercase text-ink/60">{label}</p>
      <p className="font-body text-xs text-ink/40 max-w-xs">
        Foto folgt – empfohlen: {recommended.join(", ")}
      </p>
    </div>
  );
}
