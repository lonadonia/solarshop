/**
 * All homepage copy, contact details and products live in this one file.
 * Edit the text between the quotes, save, and rebuild (see README).
 *
 * Anything marked SAMPLE is placeholder content written for the design.
 * Replace it with SolarShop's real details before going live.
 */

export const company = {
  name: "SolarShop",
  tagline: "Solar panels, batteries and EV charging for homes, farms and business.",
  // SAMPLE contact details
  phone: "0000 000 000",
  email: "hello@yourdomain.com",
  hours: "Mon–Fri 8:00–17:30 · Sat 9:00–13:00",
  area: "Your town and surrounding region",
};

export const nav = [
  { label: "What we do", href: "#services" },
  { label: "Who it's for", href: "#solutions" },
  { label: "Shop", href: "#shop" },
  { label: "How it works", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Solar for homes, farms and business",
  // The "o" in the word below is drawn as the SolarShop sun-over-hills mark.
  titleStart: "Grow your own",
  titleMarkWord: "power.",
  lead:
    "SolarShop plans, supplies and installs solar panel and battery systems sized to your roof, your energy use and your budget. One team looks after you from the first survey to switch-on and beyond.",
  primaryCta: { label: "Book a free assessment", href: "#enquire" },
  secondaryCta: { label: "Browse the range", href: "#shop" },
  // The promise strip along the bottom of the hero
  points: [
    { icon: "survey", title: "Free roof assessment", text: "On-site survey and a clear, no-obligation quote." },
    { icon: "install", title: "Design, supply and install", text: "One team from first drawing to switch-on." },
    { icon: "monitor", title: "Aftercare and monitoring", text: "We watch over your system long after install." },
    { icon: "sizes", title: "Homes, farms and business", text: "Rooftop, ground-mount and battery systems." },
  ],
  // SAMPLE system shown on the hero card
  example: { panels: 16, size: "6.4 kWp", battery: "10 kWh", pitch: "32°", facing: "South" },
};

export type Service = {
  id: string;
  title: string;
  text: string;
  points: string[];
  tone: "sun" | "spring" | "sky" | "forest";
  icon: "panel" | "battery" | "plug" | "care";
};

export const services: Service[] = [
  {
    id: "solar",
    title: "Solar panel systems",
    text:
      "Roof-mounted and ground-mounted systems designed around your roof shape, shading and the way you use electricity through the day.",
    points: ["Pitched, flat and ground mounts", "Shade and yield modelling", "Neat cable routing"],
    tone: "sun",
    icon: "panel",
  },
  {
    id: "battery",
    title: "Battery storage",
    text: "Keep the daytime energy you generate and use it in the evening, when prices are highest.",
    points: ["Add to new or existing systems", "Backup options"],
    tone: "spring",
    icon: "battery",
  },
  {
    id: "ev",
    title: "EV charging",
    text: "Home and workplace chargers that can run on surplus solar instead of exporting it.",
    points: ["Solar-match charging", "Single and three phase"],
    tone: "sky",
    icon: "plug",
  },
  {
    id: "care",
    title: "Care and monitoring",
    text: "Health checks, cleaning and app monitoring so your system keeps producing year after year.",
    points: ["Annual service visits", "Fault alerts"],
    tone: "forest",
    icon: "care",
  },
];

export type Solution = {
  id: string;
  tab: string;
  title: string;
  text: string;
  fits: string[];
  typical: { label: string; value: string }[];
  scene: "home" | "business" | "farm";
};

export const solutions: Solution[] = [
  {
    id: "homes",
    tab: "Homes",
    title: "Lower bills from your own roof",
    text:
      "We look at your roof, your meter readings and your plans (an EV, a heat pump, a growing family) and design a system that pays its way.",
    fits: [
      "Panels sized to your real usage, not a standard kit",
      "Battery-ready from day one",
      "Installed in a day or two for most homes",
    ],
    typical: [
      { label: "Typical size", value: "3–10 kWp" },
      { label: "Panels", value: "8–24" },
      { label: "Storage", value: "5–15 kWh" },
    ],
    scene: "home",
  },
  {
    id: "business",
    tab: "Business",
    title: "Turn idle roof space into running-cost savings",
    text:
      "Offices, workshops and warehouses use most of their power in daylight hours, which makes solar one of the quickest ways to cut overheads.",
    fits: [
      "Load analysis from your half-hourly data",
      "Installs planned around your working hours",
      "Clear reporting for your accounts team",
    ],
    typical: [
      { label: "Typical size", value: "30–250 kWp" },
      { label: "Roof types", value: "Flat & pitched" },
      { label: "Monitoring", value: "Per string" },
    ],
    scene: "business",
  },
  {
    id: "farms",
    tab: "Farms & land",
    title: "Power the farm from its own buildings and fields",
    text:
      "Barns, sheds and spare land make ideal sites. We design around livestock, machinery access and grazing so solar works with the farm, not against it.",
    fits: [
      "Barn-roof and ground-mount layouts",
      "Systems for dairies, pumps and cold stores",
      "Grazing-friendly panel heights",
    ],
    typical: [
      { label: "Typical size", value: "10–500 kWp" },
      { label: "Mounting", value: "Roof or ground" },
      { label: "Storage", value: "Optional" },
    ],
    scene: "farm",
  },
];

export type Product = {
  id: string;
  name: string;
  category: "panels" | "inverters" | "batteries" | "ev";
  specs: string[];
  text: string;
  art: "panel-black" | "panel-bifacial" | "inverter" | "battery" | "charger" | "mounting";
};

export const productCategories = [
  { id: "all", label: "All" },
  { id: "panels", label: "Panels" },
  { id: "inverters", label: "Inverters" },
  { id: "batteries", label: "Batteries" },
  { id: "ev", label: "EV & fittings" },
] as const;

// SAMPLE listings to show the layout. Replace with your own range.
export const products: Product[] = [
  {
    id: "p430",
    name: "All-black 430 W panel",
    category: "panels",
    specs: ["430 W", "21.8 % eff.", "Mono"],
    text: "Low-profile black panel for homes where looks matter.",
    art: "panel-black",
  },
  {
    id: "p550",
    name: "Bifacial 550 W panel",
    category: "panels",
    specs: ["550 W", "Glass-glass", "Bifacial"],
    text: "Collects light on both faces. Built for ground mounts.",
    art: "panel-bifacial",
  },
  {
    id: "inv5",
    name: "5 kW hybrid inverter",
    category: "inverters",
    specs: ["5 kW", "Battery-ready", "Wi-Fi"],
    text: "Runs panels and battery from one unit, with app monitoring.",
    art: "inverter",
  },
  {
    id: "bat10",
    name: "10 kWh home battery",
    category: "batteries",
    specs: ["10 kWh", "LFP", "Stackable"],
    text: "Stores daytime solar for evenings. Add modules later.",
    art: "battery",
  },
  {
    id: "ev7",
    name: "7 kW smart EV charger",
    category: "ev",
    specs: ["7.4 kW", "Type 2", "Solar match"],
    text: "Charges your car from surplus solar when the sun is out.",
    art: "charger",
  },
  {
    id: "mount",
    name: "Pitched-roof mounting kit",
    category: "ev",
    specs: ["Aluminium", "4 panels", "Tile hooks"],
    text: "Rails, hooks and clamps for a tidy, secure install.",
    art: "mounting",
  },
];

export const steps = [
  {
    title: "Free assessment",
    text: "We check your roof, shading, fuse board and energy use, on site or from photos and bills.",
    time: "Week 1",
  },
  {
    title: "Design and quote",
    text: "You get a panel layout, yield estimate and fixed written price. No pressure, no surprises.",
    time: "Week 1–2",
  },
  {
    title: "Installation",
    text: "Our team fits panels, inverter and any battery, then tidies up and tests every connection.",
    time: "1–2 days on site",
  },
  {
    title: "Switch-on and aftercare",
    text: "We register the system, set up your monitoring app and stay on call for service.",
    time: "For years to come",
  },
];

export const about = {
  eyebrow: "Why SolarShop",
  statementStart: "Straight advice, ",
  statementMid: "proper design",
  statementJoin: " and ",
  statementEnd: "one team",
  statementTail: " from survey to switch-on.",
  text:
    "We started SolarShop to make going solar simple. You deal with the same people from the first visit to the last check-up, and every system is designed for the building it sits on.",
  values: [
    { title: "Sized for you", text: "Designed from your bills and your roof, never from a standard package." },
    { title: "Fixed, clear quotes", text: "One written price with every part listed. What we quote is what you pay." },
    { title: "Tidy installs", text: "Hidden cables, protected roofs and a clean site when we leave." },
    { title: "Here after install", text: "Monitoring, servicing and a real person to call when you need us." },
  ],
  // SAMPLE figures: replace with your own before launch
  stats: [
    { value: "1,200+", label: "systems installed" },
    { value: "15", label: "years in solar" },
    { value: "4.9/5", label: "average customer rating" },
    { value: "8 MWp", label: "capacity connected" },
  ],
};

export const faqs = [
  {
    q: "How much does a solar system cost?",
    a: "It depends on the size of the system, your roof and whether you add a battery. After a free assessment we give you one fixed written price with every component listed.",
  },
  {
    q: "Do solar panels work on cloudy days?",
    a: "Yes. Panels generate from daylight, not only direct sun. Output drops under heavy cloud, and our yield estimate accounts for your local weather across the whole year.",
  },
  {
    q: "Do I need a battery?",
    a: "Not always. If you are home during the day you will use much of your solar directly. A battery helps if most of your use is in the evening, and we can add one later.",
  },
  {
    q: "How long does installation take?",
    a: "Most homes take one to two days on site. Commercial and farm systems are scheduled in stages around your working hours.",
  },
  {
    q: "What maintenance is needed?",
    a: "Very little. We recommend a yearly health check, and your monitoring app flags any drop in output so problems are caught early.",
  },
  {
    q: "Can I add more panels later?",
    a: "Usually, yes. We plan inverter capacity and roof layout with future additions in mind, so expanding is straightforward.",
  },
];

export const enquiry = {
  eyebrow: "Get started",
  title: "Book your free solar assessment",
  text:
    "Tell us a little about your property and we will be in touch within one working day to arrange a visit or a quick video call.",
  propertyTypes: ["Home", "Business", "Farm or land"],
  interests: ["Solar panels", "Battery storage", "EV charger", "Service or repair"],
};

export const footer = {
  columns: [
    {
      title: "What we do",
      links: [
        { label: "Solar panels", href: "#services" },
        { label: "Battery storage", href: "#services" },
        { label: "EV charging", href: "#services" },
        { label: "Care and monitoring", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About us", href: "#about" },
        { label: "How it works", href: "#process" },
        { label: "Shop", href: "#shop" },
        { label: "FAQ", href: "#faq" },
      ],
    },
  ],
};
