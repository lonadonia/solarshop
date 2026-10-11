import { Cloud, PanelQuad, SkyGradient, Sun, Tree } from "./parts";

/**
 * Hero illustration: the logo's sun-over-hills disc, opened up into a daylight
 * landscape with a solar home and a ground-mounted array.
 */
export function HeroScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      role="img"
      aria-label="Illustration: a home with rooftop solar panels and a battery, beside a field of ground-mounted panels on a sunny day"
    >
      <defs>
        <clipPath id="hero-disc">
          <circle cx="300" cy="300" r="300" />
        </clipPath>
        <SkyGradient id="hero-sky" height={420} />
      </defs>
      <g clipPath="url(#hero-disc)">
        <rect width="600" height="600" fill="url(#hero-sky)" />
        <Sun cx={212} cy={190} r={62} rise />
        <Cloud x={318} y={92} s={1.05} />
        <Cloud x={70} y={262} s={0.7} opacity={0.8} />

        {/* far hills */}
        <path d="M0 340 C 90 300 190 300 282 318 C 380 338 470 296 600 306 V600 H0 Z" fill="#c4d8a6" />
        <Tree x={470} y={306} r={10} canopy="var(--color-spring)" />
        <Tree x={492} y={302} r={13} canopy="var(--color-leaf)" />
        <Tree x={520} y={300} r={9} canopy="var(--color-spring)" />
        <Tree x={86} y={318} r={9} canopy="var(--color-leaf)" />

        {/* the curved band from the logo, as a country lane */}
        <path d="M-10 386 C 140 344 330 332 610 358" stroke="var(--color-daylight)" strokeWidth="14" fill="none" />
        {/* main hill */}
        <path d="M-10 394 C 140 352 330 340 610 366 V610 H-10 Z" fill="var(--color-leaf)" />
        {/* light sweep, lower right */}
        <path d="M110 610 C 206 506 388 436 610 414 V610 Z" fill="var(--color-meadow)" />
        <path d="M200 610 C 290 530 430 478 610 462" stroke="#9cba7c" strokeWidth="3" fill="none" opacity="0.7" />
        <path d="M290 610 C 360 560 470 520 610 510" stroke="#9cba7c" strokeWidth="3" fill="none" opacity="0.7" />

        {/* house */}
        <g>
          <ellipse cx="248" cy="476" rx="118" ry="10" fill="#3f6e43" opacity="0.35" />
          <polygon points="300,410 338,393 338,455 300,472" fill="#eadfc6" />
          <rect x="160" y="410" width="140" height="62" fill="#fbf6ea" />
          {/* side roof plane in earth tones */}
          <polygon points="312,412 282,352 320,337 350,395" fill="#6b5038" />
          {/* front roof plane */}
          <polygon points="148,412 312,412 282,352 178,352" fill="#4a3a29" />
          <PanelQuad
            quad={[
              [186, 359],
              [275, 359],
              [300, 405],
              [160, 405],
            ]}
            cols={4}
            rows={2}
          />
          <rect x="182" y="428" width="40" height="24" rx="2" fill="#d6e7f2" stroke="var(--color-soil)" strokeWidth="2" />
          <line x1="202" y1="428" x2="202" y2="452" stroke="var(--color-soil)" strokeWidth="1.6" />
          <rect x="244" y="430" width="26" height="42" rx="3" fill="var(--color-soil)" />
          <circle cx="264" cy="452" r="1.8" fill="var(--color-sun)" />
          {/* wall battery */}
          <polygon points="310,428 326,421 326,446 310,453" fill="var(--color-spring)" />
          <polygon points="316,432 320,430 318,437 322,436 316,445 318,438 314,439" fill="var(--color-daylight)" />
        </g>

        <Tree x={128} y={470} r={28} />
        <Tree x={98} y={478} r={18} canopy="#2f6b3b" />
        <Tree x={372} y={404} r={20} canopy="#2f6b3b" />

        {/* ground-mounted array */}
        <g>
          <polygon points="398,480 552,463 556,470 402,488" fill="#6f9157" opacity="0.5" />
          <PanelQuad quad={[[392, 456], [540, 440], [548, 460], [398, 477]]} cols={6} rows={2} />
          <polygon points="366,530 572,508 578,518 372,541" fill="#6f9157" opacity="0.5" />
          <PanelQuad quad={[[356, 500], [560, 478], [570, 503], [364, 526]]} cols={8} rows={2} />
          <polygon points="334,592 602,563 608,576 340,606" fill="#6f9157" opacity="0.5" />
          <PanelQuad quad={[[322, 552], [592, 524], [604, 556], [332, 585]]} cols={10} rows={2} />
        </g>
      </g>
    </svg>
  );
}
