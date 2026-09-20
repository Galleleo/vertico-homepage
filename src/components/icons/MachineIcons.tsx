type IconProps = { className?: string };

export function DryerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="6" y="10" width="36" height="28" rx="1" />
      <circle cx="24" cy="24" r="9" />
      <circle cx="24" cy="24" r="4" />
      <line x1="12" y1="16" x2="16" y2="16" />
    </svg>
  );
}

export function CompressorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="8" y="20" width="28" height="14" rx="1" />
      <circle cx="14" cy="38" r="4" />
      <circle cx="30" cy="38" r="4" />
      <line x1="14" y1="20" x2="14" y2="10" />
      <line x1="26" y1="20" x2="26" y2="10" />
      <rect x="10" y="6" width="20" height="4" />
    </svg>
  );
}

export function PlateCompactorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="6" y="30" width="30" height="6" rx="1" />
      <path d="M14 30 L14 18 L32 18 L32 30" />
      <line x1="32" y1="18" x2="40" y2="12" />
      <line x1="40" y1="12" x2="40" y2="22" />
    </svg>
  );
}

export function ChipperIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="16" y="14" width="20" height="18" rx="1" />
      <circle cx="26" cy="23" r="5" />
      <line x1="4" y1="16" x2="16" y2="20" />
      <circle cx="20" cy="38" r="4" />
      <circle cx="32" cy="38" r="4" />
    </svg>
  );
}

export function TrailerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="6" y="14" width="30" height="14" rx="1" />
      <line x1="36" y1="24" x2="42" y2="24" />
      <circle cx="15" cy="32" r="4" />
      <circle cx="27" cy="32" r="4" />
    </svg>
  );
}

export function ScaffoldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="10" y1="6" x2="10" y2="42" />
      <line x1="38" y1="6" x2="38" y2="42" />
      <line x1="10" y1="12" x2="38" y2="12" />
      <line x1="10" y1="24" x2="38" y2="24" />
      <line x1="10" y1="36" x2="38" y2="36" />
      <line x1="10" y1="12" x2="38" y2="24" />
      <line x1="38" y1="12" x2="10" y2="24" />
    </svg>
  );
}
