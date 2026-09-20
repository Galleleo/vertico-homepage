type IconProps = { className?: string };

export function DocumentCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 6h16l8 8v28a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
      <path d="M28 6v8h8" />
      <path d="M17 26l5 5 9-11" />
    </svg>
  );
}

export function MagnifierIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="21" cy="21" r="13" />
      <line x1="30.5" y1="30.5" x2="41" y2="41" />
    </svg>
  );
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M30 8a9 9 0 0 0-11.4 11.4L6 32l6 6 12.6-12.6A9 9 0 0 0 36 14l-6 6-4-4 6-6Z" />
    </svg>
  );
}

export function RopeAccessIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="24" cy="8" r="3" />
      <line x1="24" y1="11" x2="24" y2="30" />
      <path d="M24 30c0 6-4 9-8 10" />
      <path d="M24 30c0 6 4 9 8 10" />
    </svg>
  );
}

export function DroneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="24" cy="24" r="4" />
      <line x1="24" y1="24" x2="12" y2="12" />
      <line x1="24" y1="24" x2="36" y2="12" />
      <line x1="24" y1="24" x2="12" y2="36" />
      <line x1="24" y1="24" x2="36" y2="36" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="36" cy="12" r="4" />
      <circle cx="12" cy="36" r="4" />
      <circle cx="36" cy="36" r="4" />
    </svg>
  );
}
