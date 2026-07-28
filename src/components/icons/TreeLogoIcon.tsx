type TreeLogoIconProps = {
  className?: string;
};

export function TreeLogoIcon({ className }: TreeLogoIconProps) {
  return (
    <svg
      viewBox="0 0 140 170"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M70 8c-20 0-34 14-34 28 0 5 2 10 5 14-9 2-16 10-16 19 0 9 7 16 16 18-2 4-3 8-3 12 0 12 10 20 24 20h16c14 0 24-8 24-20 0-4-1-8-3-12 9-2 16-9 16-18 0-9-7-17-16-19 3-4 5-9 5-14 0-14-14-28-34-28z"
        fill="currentColor"
      />
      <rect x="63" y="60" width="14" height="26" fill="currentColor" />
      <path
        d="M20 96 L70 165 L120 96 L92 96 L70 138 L48 96 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <line x1="44" y1="100" x2="64" y2="128" stroke="currentColor" strokeWidth="4" />
      <line x1="96" y1="100" x2="76" y2="128" stroke="currentColor" strokeWidth="4" />
      <path
        d="M70 90 l-8 16 h5 v20 h6 v-20 h5 z"
        fill="var(--color-surface)"
      />
    </svg>
  );
}
