type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
};

export function Logo({ className, tone = "dark" }: LogoProps) {
  const color = tone === "dark" ? "var(--color-primary)" : "var(--color-on-dark)";

  return (
    <svg
      viewBox="0 0 120 150"
      role="img"
      aria-label="Vertico Logo: Baum über umgedrehtem Stahlfachwerk-Dreieck mit Pfeil nach oben"
      className={className}
      fill={color}
    >
      <path d="M60 8c-14 0-24 10-24 21 0 3 1 6 2 8-8 1-15 7-15 15 0 6 4 11 10 13-3 3-5 7-5 11 0 9 8 15 18 15h28c10 0 18-6 18-15 0-4-2-8-5-11 6-2 10-7 10-13 0-8-7-14-15-15 1-2 2-5 2-8 0-11-10-21-24-21z" />
      <rect x="55" y="60" width="10" height="30" />
      <path d="M60 82l-6 10h4v18h4V92h4z" fill="var(--color-surface)" />
      <path
        d="M20 60 L60 145 L100 60 L82 60 L60 100 L38 60 Z"
        fill="none"
        stroke={color}
        strokeWidth="4"
      />
      <line x1="42" y1="64" x2="58" y2="94" stroke={color} strokeWidth="3" />
      <line x1="78" y1="64" x2="62" y2="94" stroke={color} strokeWidth="3" />
    </svg>
  );
}
