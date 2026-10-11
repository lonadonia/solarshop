/* Shared drawing helpers for the daylight illustrations. */

type Pt = [number, number];

const lerp = (a: Pt, b: Pt, t: number): Pt => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const pts = (list: Pt[]) => list.map((p) => p.map((n) => Math.round(n * 10) / 10).join(",")).join(" ");

type PanelQuadProps = {
  /** Corners in order: top-left, top-right, bottom-right, bottom-left */
  quad: [Pt, Pt, Pt, Pt];
  cols: number;
  rows: number;
  fill?: string;
  grid?: string;
  frame?: string;
  glint?: boolean;
  gridWidth?: number;
};

/** A bank of solar panels drawn on any four-sided plane, with cell grid lines. */
export function PanelQuad({
  quad,
  cols,
  rows,
  fill = "var(--color-sky)",
  grid = "#9cc0de",
  frame,
  glint = true,
  gridWidth = 1.4,
}: PanelQuadProps) {
  const [tl, tr, br, bl] = quad;
  const lines: [Pt, Pt][] = [];
  for (let c = 1; c < cols; c++) lines.push([lerp(tl, tr, c / cols), lerp(bl, br, c / cols)]);
  for (let r = 1; r < rows; r++) lines.push([lerp(tl, bl, r / rows), lerp(tr, br, r / rows)]);
  const g1 = lerp(tl, tr, 0.12);
  const g2 = lerp(tl, tr, 0.3);
  const g3 = lerp(bl, br, 0.16);
  const g4 = lerp(bl, br, -0.02);
  return (
    <g>
      <polygon points={pts(quad)} fill={fill} stroke={frame ?? fill} strokeWidth={frame ? 2 : 0} strokeLinejoin="round" />
      {glint && <polygon points={pts([g1, g2, g3, g4])} fill="#ffffff" opacity="0.16" />}
      {lines.map(([a, b], i) => (
        <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={grid} strokeWidth={gridWidth} opacity="0.85" />
      ))}
    </g>
  );
}

/** Soft daylight cloud built from rounded shapes. */
export function Cloud({ x, y, s = 1, opacity = 0.92 }: { x: number; y: number; s?: number; opacity?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="#ffffff" opacity={opacity}>
      <circle cx="18" cy="14" r="14" />
      <circle cx="40" cy="8" r="18" />
      <circle cx="62" cy="15" r="13" />
      <rect x="4" y="14" width="72" height="14" rx="7" />
    </g>
  );
}

/** Round-canopy tree. */
export function Tree({
  x,
  y,
  r = 18,
  canopy = "var(--color-forest)",
  trunk = "var(--color-soil)",
}: {
  x: number;
  y: number;
  r?: number;
  canopy?: string;
  trunk?: string;
}) {
  return (
    <g>
      <rect x={x - r * 0.12} y={y - r * 0.6} width={r * 0.24} height={r * 1.5} rx={r * 0.1} fill={trunk} />
      <circle cx={x} cy={y - r} r={r} fill={canopy} />
      <circle cx={x - r * 0.35} cy={y - r * 1.25} r={r * 0.38} fill="#ffffff" opacity="0.08" />
    </g>
  );
}

/** Sun with soft halo rings. */
export function Sun({ cx, cy, r, rise = false }: { cx: number; cy: number; r: number; rise?: boolean }) {
  return (
    <g className={rise ? "sun-rise" : undefined}>
      <circle className={rise ? "sun-halo" : undefined} cx={cx} cy={cy} r={r * 2.1} fill="var(--color-sun)" opacity="0.13" />
      <circle cx={cx} cy={cy} r={r * 1.45} fill="var(--color-sun)" opacity="0.2" />
      <circle cx={cx} cy={cy} r={r} fill="var(--color-sun)" />
      <circle cx={cx - r * 0.28} cy={cy - r * 0.3} r={r * 0.42} fill="#ffffff" opacity="0.18" />
    </g>
  );
}

/** Light daylight sky gradient definition. */
export function SkyGradient({ id, height }: { id: string; height: number }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2={height} gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#d3e5f1" />
      <stop offset="0.6" stopColor="#e9f1ea" />
      <stop offset="1" stopColor="#faf0cf" />
    </linearGradient>
  );
}
