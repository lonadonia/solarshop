import type { Product } from "@/content/site";
import { PanelQuad } from "./parts";

const labels: Record<Product["art"], string> = {
  "panel-black": "Illustration of an all-black solar panel",
  "panel-bifacial": "Illustration of a glass-glass bifacial solar panel",
  inverter: "Illustration of a hybrid inverter with a display",
  battery: "Illustration of a stackable home battery",
  charger: "Illustration of a wall-mounted EV charger with cable",
  mounting: "Illustration of roof mounting rails, hooks and clamps",
};

export function ProductArt({ art }: { art: Product["art"] }) {
  return (
    <svg viewBox="0 0 240 180" role="img" aria-label={labels[art]} className="h-full w-full">
      <ellipse cx="120" cy="164" rx="78" ry="7" fill="var(--color-pine)" opacity="0.12" />
      {art === "panel-black" && (
        <g>
          <PanelQuad quad={[[70, 22], [178, 34], [168, 156], [58, 146]]} cols={6} rows={8} fill="#183247" grid="#2f5677" frame="#0c2233" />
        </g>
      )}
      {art === "panel-bifacial" && (
        <PanelQuad
          quad={[[70, 22], [178, 34], [168, 156], [58, 146]]}
          cols={6}
          rows={8}
          fill="var(--color-sky)"
          grid="#dceaf3"
          gridWidth={3.2}
          frame="#b8cfe2"
        />
      )}
      {art === "inverter" && (
        <g>
          <rect x="66" y="26" width="108" height="128" rx="14" fill="#fbf6ea" stroke="#d9cfb4" strokeWidth="2" />
          <rect x="66" y="26" width="108" height="14" rx="7" fill="var(--color-sun)" />
          <rect x="82" y="56" width="76" height="44" rx="6" fill="var(--color-mist)" />
          <path d="M88 90 C 100 88 104 70 116 72 C 128 74 130 62 142 64 L152 64" stroke="var(--color-spring)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="94" cy="122" r="5" fill="var(--color-spring)" />
          <rect x="106" y="118" width="48" height="8" rx="4" fill="#e7dec6" />
          <rect x="86" y="154" width="12" height="10" fill="#d9cfb4" />
          <rect x="142" y="154" width="12" height="10" fill="#d9cfb4" />
        </g>
      )}
      {art === "battery" && (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x="78" y={30 + i * 42} width="84" height="38" rx="9" fill="#fbf6ea" stroke="#d9cfb4" strokeWidth="2" />
              {[0, 1, 2, 3].map((b) => (
                <rect key={b} x={92 + b * 15} y={44 + i * 42} width="10" height="10" rx="2" fill={i === 0 && b === 3 ? "#e7dec6" : "var(--color-spring)"} />
              ))}
            </g>
          ))}
          <path d="M150 38 L144 50 L150 50 L146 60" stroke="var(--color-forest)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}
      {art === "charger" && (
        <g>
          <rect x="80" y="24" width="72" height="104" rx="18" fill="#fbf6ea" stroke="#d9cfb4" strokeWidth="2" />
          <circle cx="116" cy="62" r="18" fill="none" stroke="var(--color-sky)" strokeWidth="5" />
          <circle cx="116" cy="62" r="7" fill="var(--color-sun)" />
          <rect x="102" y="96" width="28" height="6" rx="3" fill="var(--color-spring)" />
          <path d="M116 128 C 116 160 168 158 168 128 C 168 110 150 106 150 92" stroke="var(--color-pine)" strokeWidth="5" fill="none" strokeLinecap="round" />
          <rect x="142" y="76" width="16" height="20" rx="5" fill="var(--color-pine)" />
        </g>
      )}
      {art === "mounting" && (
        <g>
          <polygon points="40,70 200,52 204,62 44,80" fill="#cdb98f" />
          <polygon points="40,120 200,102 204,112 44,130" fill="#cdb98f" />
          {[70, 120, 170].map((x) => (
            <g key={x}>
              <rect x={x - 6} y={63 - (x - 40) * 0.11} width="12" height="14" rx="2" fill="var(--color-forest)" />
              <rect x={x - 6} y={113 - (x - 40) * 0.11} width="12" height="14" rx="2" fill="var(--color-forest)" />
            </g>
          ))}
          <path d="M60 129 L60 152 C 60 160 74 160 74 152 L74 146" stroke="var(--color-soil)" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M170 117 L170 142 C 170 150 184 150 184 142 L184 136" stroke="var(--color-soil)" strokeWidth="5" fill="none" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}
