type DroneIconProps = {
  className?: string;
};

export function DroneIcon({ className }: DroneIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="32" y1="30" x2="14" y2="12" />
      <line x1="32" y1="30" x2="50" y2="12" />
      <line x1="32" y1="34" x2="14" y2="52" />
      <line x1="32" y1="34" x2="50" y2="52" />
      <circle cx="14" cy="12" r="9" />
      <circle cx="50" cy="12" r="9" />
      <circle cx="14" cy="52" r="9" />
      <circle cx="50" cy="52" r="9" />
      <rect x="26" y="28" width="12" height="8" rx="2" fill="currentColor" stroke="none" />
    </svg>
  );
}
