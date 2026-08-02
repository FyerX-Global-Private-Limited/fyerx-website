import type { CapabilityIconName } from "@/data/capabilities";

interface CapabilityIconProps {
  name: CapabilityIconName;
  className?: string;
}

// Single-stroke line icons, one consistent weight, used by the Capabilities
// section and the footer's capabilities column.
export default function CapabilityIcon({ name, className }: CapabilityIconProps) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "signal":
      return (
        <svg {...common}>
          <line x1="4" y1="19" x2="4" y2="14" />
          <line x1="10" y1="19" x2="10" y2="10" />
          <line x1="16" y1="19" x2="16" y2="6" />
          <polyline points="4 11 10 6 16 3 20 5" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.25" />
          <path d="M3 20c0-3.3 2.7-5.75 6-5.75s6 2.45 6 5.75" />
          <path d="M15.5 5.2a3.25 3.25 0 0 1 0 6.1" />
          <path d="M17.5 14.6c2.55.55 4.5 2.7 4.5 5.4" />
        </svg>
      );
    case "brackets":
      return (
        <svg {...common}>
          <polyline points="9 5 4 12 9 19" />
          <polyline points="15 5 20 12 15 19" />
        </svg>
      );
    case "certificate":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="5.5" />
          <path d="M12 6.3v5.4M9.3 9h5.4" />
          <path d="M9 13.8 7.5 21l4.5-2 4.5 2-1.5-7.2" />
        </svg>
      );
    case "device":
      return (
        <svg {...common}>
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <line x1="10" y1="18" x2="14" y2="18" />
        </svg>
      );
  }
}
