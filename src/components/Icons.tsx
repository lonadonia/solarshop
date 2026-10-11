type IconProps = { className?: string };

/* Duotone service icons: a soft disc behind a simple line drawing. */

export function PanelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
      <circle cx="35" cy="12" r="6" fill="currentColor" opacity="0.25" stroke="none" />
      <path d="M8 36 L14 18 H38 L32 36 Z" />
      <path d="M11 27 H35 M18 18 L15 36 M26 18 L23.5 36" />
      <path d="M20 36 V42 M26 36 V42 M16 42 H30" />
    </svg>
  );
}

export function BatteryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
      <rect x="12" y="10" width="24" height="32" rx="5" />
      <path d="M19 6 H29" />
      <rect x="16" y="26" width="16" height="12" rx="2" fill="currentColor" opacity="0.25" stroke="none" />
      <path d="M25 15 L20 23 H28 L23 31" />
    </svg>
  );
}

export function PlugIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
      <rect x="10" y="8" width="20" height="30" rx="6" />
      <circle cx="20" cy="19" r="5" fill="currentColor" opacity="0.25" stroke="none" />
      <circle cx="20" cy="19" r="5" />
      <path d="M30 30 C 38 30 38 40 32 42" />
      <path d="M15 31 H25" />
    </svg>
  );
}

export function CareIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
      <rect x="8" y="10" width="32" height="24" rx="5" />
      <path d="M13 27 C 18 27 19 17 24 17 C 29 17 30 24 35 24" />
      <circle cx="24" cy="17" r="3" fill="currentColor" stroke="none" opacity="0.35" />
      <path d="M18 40 H30 M24 34 V40" />
    </svg>
  );
}

export const serviceIcons = {
  panel: PanelIcon,
  battery: BatteryIcon,
  plug: PlugIcon,
  care: CareIcon,
};
