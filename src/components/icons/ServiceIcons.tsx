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
