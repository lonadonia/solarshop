import { Cloud, PanelQuad, Sun, Tree } from "./parts";

/**
 * Hero panorama: the logo's sun-over-hills mark opened out to the full width
 * of the page. The sun rises behind rolling hills; a farm sits on the far
 * ridge, a solar home with a battery and EV charger on the middle hill, and a
 * ground-mounted array runs down the slope on the right.
 *
 * Drawn on a 1600 x 700 canvas. The left third stays low so the headline sits
 * over open sky; the bottom 60 units are plain ground for the promise strip.
 * Narrow screens crop the sides (xMidYMax slice) and keep the home and the sun.
 */
export function HeroScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1600 700"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      role="img"
      aria-label="Illustration: the sun rising over green hills, a farm with solar panels on the far ridge, a home with rooftop panels, a battery and an EV charger, and rows of ground-mounted panels on the slope"
    >
      <defs>
        <linearGradient id="hs-ridge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d4e3bf" />
          <stop offset="1" stopColor="#e4edd5" />
        </linearGradient>
        <linearGradient id="hs-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bdd49f" />
          <stop offset="1" stopColor="#a6c287" />
        </linearGradient>
        <linearGradient id="hs-main" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7aa269" />
          <stop offset="1" stopColor="#5f8d5c" />
        </linearGradient>
      </defs>

      {/* sun rising behind the far ridge */}
      <Sun cx={1112} cy={452} r={64} rise />

      <Cloud x={1196} y={318} s={0.95} />
      <Cloud x={1452} y={360} s={0.62} opacity={0.8} />
      <Cloud x={430} y={420} s={0.6} opacity={0.75} />

      {/* far ridge, low on the left so the headline sits over open sky */}
      <path
        d="M0 560 C 220 548 420 522 600 502 C 780 482 900 470 1040 462 C 1200 452 1380 406 1600 392 V700 H0 Z"
        fill="url(#hs-ridge)"
      />
      <g opacity="0.9">
        <Tree x={1420} y={404} r={9} canopy="var(--color-meadow)" />
        <Tree x={1440} y={401} r={12} canopy="#93b577" />
        <Tree x={1462} y={398} r={8} canopy="var(--color-meadow)" />
        <Tree x={700} y={492} r={8} canopy="#93b577" />
        <Tree x={716} y={490} r={6} canopy="var(--color-meadow)" />
      </g>

      {/* farm on the far ridge: barn with a panelled roof and a silo */}
      <g>
        <rect x="334" y="494" width="16" height="36" rx="8" fill="#ece3cc" />
        <rect x="334" y="494" width="16" height="9" rx="4.5" fill="#cbbd9a" />
        <polygon points="354,532 354,506 386,492 418,506 418,532" fill="#c98d5c" />
        <polygon points="418,506 444,502 444,530 418,532" fill="#a8714a" />
        <polygon points="386,492 410,488 444,502 418,506" fill="#6b5038" />
        <PanelQuad quad={[[390, 491], [410, 488], [440, 501], [419, 505]]} cols={4} rows={1} gridWidth={0.8} glint={false} />
        <rect x="378" y="514" width="15" height="18" fill="#7a4f31" />
        <Tree x={470} y={528} r={11} canopy="#8fb35a" />
      </g>

      {/* rolling middle hill */}
      <path
        d="M0 604 C 240 588 460 568 640 550 C 820 532 1000 514 1180 502 C 1360 490 1480 472 1600 464 V700 H0 Z"
        fill="url(#hs-hill)"
      />
      <g>
        <Tree x={600} y={562} r={15} canopy="var(--color-spring)" />
        <Tree x={626} y={558} r={10} canopy="#8fb35a" />
        <Tree x={1548} y={470} r={14} canopy="var(--color-spring)" />
        <Tree x={1574} y={468} r={18} canopy="var(--color-leaf)" />
      </g>

      {/* home with rooftop panels and a wall battery */}
      <g>
        <ellipse cx="852" cy="550" rx="140" ry="10" fill="#3f6e43" opacity="0.3" />
        <polygon points="906,480 948,462 948,526 906,544" fill="#e6dac0" />
        <rect x="750" y="480" width="156" height="64" fill="#fbf6ea" />
        <polygon points="918,482 886,416 928,400 960,464" fill="#6b5038" />
        <polygon points="736,482 918,482 886,416 770,416" fill="#4a3a29" />
        <PanelQuad
          quad={[
            [776, 423],
            [878, 423],
            [903, 475],
            [751, 475],
          ]}
          cols={5}
          rows={2}
        />
        <rect x="770" y="496" width="42" height="26" rx="2" fill="#d6e7f2" stroke="var(--color-soil)" strokeWidth="2.2" />
        <line x1="791" y1="496" x2="791" y2="522" stroke="var(--color-soil)" strokeWidth="1.8" />
        <rect x="834" y="496" width="28" height="48" rx="3" fill="var(--color-soil)" />
        <circle cx="856" cy="521" r="2" fill="var(--color-sun)" />
        <rect x="874" y="496" width="22" height="20" rx="2" fill="#d6e7f2" stroke="var(--color-soil)" strokeWidth="2.2" />
        <polygon points="916,496 934,488 934,516 916,524" fill="var(--color-spring)" />
        <polygon points="922,500 927,498 924,506 929,504 922,515 924,508 919,509" fill="var(--color-daylight)" />
      </g>

      {/* EV charger and car on the drive */}
      <g>
        <rect x="972" y="506" width="9" height="36" rx="3" fill="var(--color-paper)" stroke="#8aa77a" strokeWidth="1.5" />
        <rect x="974" y="511" width="5" height="7" rx="1.5" fill="var(--color-sky)" />
        <path d="M979 524 C 992 530 994 538 1004 536" stroke="var(--color-ink)" strokeWidth="2" fill="none" />
        <ellipse cx="1040" cy="552" rx="56" ry="6" fill="#3f6e43" opacity="0.3" />
        <path
          d="M990 546 V533 C 990 528 994 524 999 523 L1013 520 L1028 507 C 1032 504 1035 503 1040 503 H1062 C 1067 503 1071 505 1074 508 L1085 521 C 1090 523 1092 527 1092 532 V546 Z"
          fill="var(--color-sky)"
        />
        <path d="M1020 521 L1031 510 C 1033 508 1035 507 1038 507 H1047 V521 Z" fill="#d6e7f2" />
        <path d="M1052 507 H1061 C 1064 507 1066 508 1068 510 L1077 521 H1052 Z" fill="#d6e7f2" />
        <circle cx="1012" cy="547" r="9" fill="var(--color-ink)" />
        <circle cx="1012" cy="547" r="3.5" fill="#c9d6c0" />
        <circle cx="1070" cy="547" r="9" fill="var(--color-ink)" />
        <circle cx="1070" cy="547" r="3.5" fill="#c9d6c0" />
      </g>

      <Tree x={716} y={552} r={28} />
      <Tree x={688} y={560} r={18} canopy="#2f6b3b" />
      <Tree x={968} y={482} r={18} canopy="#2f6b3b" />

      {/* the curved band from the logo, as a country lane, then the near hill */}
      <path d="M0 624 C 360 598 760 582 1100 570 C 1300 562 1460 540 1600 528" stroke="var(--color-daylight)" strokeWidth="12" fill="none" />
      <path d="M0 634 C 360 608 760 592 1100 580 C 1300 572 1460 550 1600 538 V700 H0 Z" fill="url(#hs-main)" />

      {/* ground-mounted array down the slope */}
      <g>
        <polygon points="1248,590 1420,574 1424,582 1252,598" fill="#3f6e43" opacity="0.45" />
        <PanelQuad quad={[[1240, 566], [1410, 550], [1418, 572], [1246, 589]]} cols={8} rows={2} />
        <polygon points="1430,572 1600,556 1600,564 1434,580" fill="#3f6e43" opacity="0.45" />
        <PanelQuad quad={[[1424, 548], [1600, 531], [1600, 554], [1430, 571]]} cols={8} rows={2} />
      </g>

      {/* plain ground for the promise strip */}
      <path d="M0 700 V662 C 420 646 1040 650 1600 630 V700 Z" fill="var(--color-leaf)" />
    </svg>
  );
}
