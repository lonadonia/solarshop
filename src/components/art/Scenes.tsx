import { Cloud, PanelQuad, SkyGradient, Sun, Tree } from "./parts";

const W = 480;
const H = 360;

function Frame({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} className="block h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <SkyGradient id={`${id}-sky`} height={260} />
      </defs>
      <rect width={W} height={H} fill={`url(#${id}-sky)`} />
      {children}
    </svg>
  );
}

export function HomeScene() {
  return (
    <Frame id="home" label="Illustration: family home with solar panels on the roof, a wall battery and an electric car charging on the drive">
      <Sun cx={384} cy={84} r={34} />
      <Cloud x={46} y={58} s={0.9} />
      <Cloud x={236} y={34} s={0.55} opacity={0.75} />
      <path d="M0 212 C 120 180 260 192 480 176 V360 H0 Z" fill="#c4d8a6" />
      <Tree x={420} y={190} r={12} canopy="var(--color-spring)" />
      <Tree x={446} y={186} r={9} canopy="var(--color-leaf)" />
      <path d="M0 252 C 140 224 330 216 480 234 V360 H0 Z" fill="var(--color-leaf)" />
      <path d="M0 302 C 150 286 330 288 480 298 V360 H0 Z" fill="var(--color-meadow)" />
      <polygon points="346,300 480,292 480,322 372,330" fill="#e9dfc4" />

      <ellipse cx="240" cy="304" rx="140" ry="9" fill="#3f6e43" opacity="0.3" />
      <polygon points="300,226 346,206 346,282 300,302" fill="#eadfc6" />
      <rect x="140" y="226" width="160" height="76" fill="#fbf6ea" />
      <polygon points="312,228 278,160 324,142 358,208" fill="#6b5038" />
      <polygon points="126,228 312,228 278,160 160,160" fill="#4a3a29" />
      <PanelQuad quad={[[168, 168], [270, 168], [298, 221], [140, 221]]} cols={5} rows={2} />
      <rect x="160" y="248" width="46" height="28" rx="2" fill="#d6e7f2" stroke="var(--color-soil)" strokeWidth="2.5" />
      <line x1="183" y1="248" x2="183" y2="276" stroke="var(--color-soil)" strokeWidth="2" />
      <rect x="238" y="250" width="30" height="52" rx="3" fill="var(--color-lake)" />
      <circle cx="262" cy="278" r="2" fill="var(--color-sun)" />
      <polygon points="312,244 330,236 330,266 312,274" fill="var(--color-spring)" />

      {/* EV and charger */}
      <rect x="352" y="250" width="10" height="44" rx="3" fill="var(--color-spring)" />
      <circle cx="357" cy="260" r="3" fill="var(--color-daylight)" />
      <path d="M362 270 C 376 272 380 288 392 292" stroke="var(--color-pine)" strokeWidth="2.5" fill="none" />
      <path d="M384 300 L388 282 C 392 274 400 270 410 270 L438 270 C 448 270 456 278 460 286 L470 290 C 476 292 478 296 478 302 L478 306 L384 306 Z" fill="var(--color-sky)" />
      <path d="M402 284 L408 275 L432 275 L440 284 Z" fill="#d6e7f2" />
      <circle cx="404" cy="308" r="9" fill="var(--color-pine)" />
      <circle cx="458" cy="308" r="9" fill="var(--color-pine)" />
      <circle cx="404" cy="308" r="3.5" fill="#d6e7f2" />
      <circle cx="458" cy="308" r="3.5" fill="#d6e7f2" />

      <Tree x={78} y={306} r={34} />
      <Tree x={36} y={312} r={22} canopy="#2f6b3b" />
      <Tree x={118} y={312} r={14} canopy="var(--color-spring)" />
    </Frame>
  );
}

export function BusinessScene() {
  const rows = [186, 194, 202];
  return (
    <Frame id="biz" label="Illustration: a warehouse and office with rows of solar panels covering the flat roof">
      <Sun cx={92} cy={78} r={34} />
      <Cloud x={318} y={46} s={1} />
      <path d="M0 200 C 130 178 300 186 480 170 V360 H0 Z" fill="#c4d8a6" />
      <Tree x={448} y={182} r={12} canopy="var(--color-leaf)" />
      <path d="M0 270 C 160 258 330 260 480 264 V360 H0 Z" fill="var(--color-meadow)" />
      <rect x="0" y="304" width="480" height="22" fill="#e9dfc4" />
      {[60, 110, 160, 210, 260, 310, 360, 410].map((x) => (
        <line key={x} x1={x} y1="306" x2={x - 6} y2="324" stroke="var(--color-paper)" strokeWidth="2.5" />
      ))}

      {/* warehouse roof seen from above */}
      <polygon points="96,210 432,210 456,180 120,180" fill="#e6dcc2" />
      {rows.map((y) => {
        const shift = ((210 - y) * 24) / 30;
        return (
          <PanelQuad
            key={y}
            quad={[
              [118 + shift, y],
              [428 + shift, y],
              [426 + shift, y + 5],
              [116 + shift, y + 5],
            ]}
            cols={12}
            rows={1}
            glint={false}
          />
        );
      })}
      <rect x="96" y="210" width="336" height="94" fill="#f1e7d0" />
      {Array.from({ length: 21 }, (_, i) => 108 + i * 15.6).map((x) => (
        <line key={x} x1={x} y1="212" x2={x} y2="302" stroke="#e3d4b2" strokeWidth="1.5" />
      ))}
      <polygon points="432,210 456,180 456,274 432,304" fill="#e2d5b6" />
      {[250, 312, 374].map((x) => (
        <g key={x}>
          <rect x={x} y="244" width="46" height="60" fill="#c9dbe9" />
          {[252, 260, 268, 276, 284, 292].map((y) => (
            <line key={y} x1={x} y1={y} x2={x + 46} y2={y} stroke="var(--color-sky)" strokeWidth="1.2" opacity="0.6" />
          ))}
        </g>
      ))}

      {/* office block */}
      <rect x="40" y="196" width="112" height="108" fill="#fbf6ea" />
      <rect x="40" y="190" width="112" height="8" fill="var(--color-forest)" />
      {[214, 246].map((y) =>
        [54, 88, 122].map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="22" height="20" rx="2" fill="#bcd4e8" />),
      )}
      <rect x="84" y="276" width="26" height="28" fill="var(--color-lake)" />
      <circle cx="176" cy="234" r="11" fill="var(--color-gold)" />
      <path d="M165 236 C 170 233 180 232 187 234 L187 246 L165 246 Z" fill="var(--color-leaf)" />

      <Tree x={20} y={300} r={16} canopy="#2f6b3b" />
      <Tree x={196} y={300} r={14} canopy="var(--color-spring)" />
      <Tree x={226} y={300} r={18} />
      <Tree x={470} y={300} r={16} canopy="#2f6b3b" />
    </Frame>
  );
}

export function FarmScene() {
  return (
    <Frame id="farm" label="Illustration: a farm barn with solar panels on its roof, crop fields, hay bales and a small ground-mounted array">
      <Sun cx={402} cy={72} r={36} />
      <Cloud x={40} y={64} s={0.95} />
      <Cloud x={240} y={36} s={0.5} opacity={0.75} />
      <path d="M0 206 C 140 182 310 190 480 176 V360 H0 Z" fill="#c4d8a6" />
      <path d="M0 236 C 150 214 320 212 480 226 V360 H0 Z" fill="var(--color-spring)" />
      {[250, 268, 290, 316, 346].map((y, i) => (
        <path
          key={y}
          d={`M0 ${y} C 160 ${y - 20 + i * 2} 330 ${y - 22 + i * 2} 480 ${y - 8}`}
          stroke="#97c25a"
          strokeWidth={3 + i}
          fill="none"
          opacity="0.75"
        />
      ))}

      {/* barn */}
      <ellipse cx="150" cy="300" rx="120" ry="8" fill="#3f6e43" opacity="0.3" />
      <polygon points="182,232 266,214 266,284 182,302" fill="#6d4f33" />
      <polygon points="122,190 202,172 266,214 182,232" fill="#4a3a29" />
      <PanelQuad quad={[[132, 192], [200, 177], [254, 213], [182, 228]]} cols={4} rows={3} />
      <polygon points="60,302 60,232 122,190 182,232 182,302" fill="#8a6644" />
      <rect x="92" y="246" width="60" height="56" fill="#7a5a3a" stroke="var(--color-wheat)" strokeWidth="3" />
      <line x1="92" y1="246" x2="152" y2="302" stroke="var(--color-wheat)" strokeWidth="3" />
      <line x1="152" y1="246" x2="92" y2="302" stroke="var(--color-wheat)" strokeWidth="3" />
      <circle cx="122" cy="220" r="8" fill="var(--color-wheat)" />

      {/* silo */}
      <rect x="276" y="200" width="32" height="92" fill="#ece0c0" />
      <path d="M276 200 C 276 184 308 184 308 200 Z" fill="#d9c79d" />
      {[220, 244, 268].map((y) => (
        <line key={y} x1="276" y1={y} x2="308" y2={y} stroke="#d9c79d" strokeWidth="2" />
      ))}

      {/* hay bales */}
      <circle cx="212" cy="318" r="12" fill="#e7cf8b" />
      <circle cx="212" cy="318" r="6" fill="none" stroke="#d2b56a" strokeWidth="2" />
      <circle cx="238" cy="322" r="10" fill="#e7cf8b" />
      <circle cx="238" cy="322" r="5" fill="none" stroke="#d2b56a" strokeWidth="2" />

      {/* ground array */}
      <polygon points="336,280 470,268 474,276 340,288" fill="#4f7a2c" opacity="0.4" />
      <PanelQuad quad={[[330, 258], [458, 246], [466, 266], [336, 279]]} cols={6} rows={2} />
      <polygon points="324,326 480,312 480,322 328,336" fill="#4f7a2c" opacity="0.4" />
      <PanelQuad quad={[[316, 298], [474, 284], [484, 310], [324, 325]]} cols={7} rows={2} />

      <Tree x={36} y={300} r={24} />
      <Tree x={448} y={196} r={12} canopy="var(--color-leaf)" />
    </Frame>
  );
}
