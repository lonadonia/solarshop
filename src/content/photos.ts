/**
 * Photography for "Who it's for" and the shop. All images are free to use
 * under the Unsplash License (https://unsplash.com/license) and are served from
 * Unsplash's image CDN, which resizes and converts them to WebP/AVIF.
 * If a photo fails to load, the daylight illustration underneath shows instead.
 *
 * To use your own photos: put the file in /public/photos and replace `src`
 * with its path (for example "/photos/home.jpg").
 */
export type PhotoData = {
  src: string;
  alt: string;
  credit: string;
  page: string;
  /** CSS object-position, to keep the subject in frame when cropped */
  focus?: string;
};

const u = (id: string) => `https://images.unsplash.com/${id}`;

export const photos = {
  home: {
    src: u("photo-1655300256335-beef51a914fe"),
    alt: "A family house with solar panels across its roof",
    credit: "Watt A Lot",
    page: "https://unsplash.com/photos/Ja8t8nJN2I4",
  },
  business: {
    src: u("photo-1545209463-e2825498edbf"),
    alt: "Rows of blue solar panels on a building roof in daylight",
    credit: "Mariana Proença",
    page: "https://unsplash.com/photos/_h0xG4s6NFg",
  },
  farm: {
    src: u("photo-1670519808728-335b1eb2ef52"),
    alt: "Solar panels standing in a green farm field",
    credit: "Green Voltaics Solar Energy",
    page: "https://unsplash.com/photos/TtyY0tr7_as",
  },
  "panel-black": {
    src: u("photo-1613665813446-82a78c468a1d"),
    alt: "Close-up of black solar panels",
    credit: "Nuno Marques",
    page: "https://unsplash.com/photos/0GbrjL3vZF4",
  },
  "panel-bifacial": {
    src: u("photo-1508514177221-188b1cf16e9d"),
    alt: "Solar panels under a clear blue sky",
    credit: "American Public Power Association",
    page: "https://unsplash.com/photos/XGAZzyLzn18",
  },
  inverter: {
    src: u("photo-1780445392417-68b9dccc45f2"),
    alt: "A wall-mounted solar inverter and energy storage system",
    credit: "Sergio Martins",
    page: "https://unsplash.com/photos/7WzD2mTRWK8",
  },
  battery: {
    src: u("photo-1766507680004-1c71007aefe5"),
    alt: "A home energy station mounted on a wooden wall",
    credit: "dcbel",
    page: "https://unsplash.com/photos/LP9D8zD4Xmw",
  },
  charger: {
    src: u("photo-1766507679659-30076abc8c95"),
    alt: "An electric car charging station mounted on a brick wall",
    credit: "dcbel",
    page: "https://unsplash.com/photos/VX6oILb_64k",
    focus: "50% 40%",
  },
  mounting: {
    src: u("photo-1624397640148-949b1732bb0a"),
    alt: "An installer fixing a black solar panel to a shingled roof under blue sky",
    credit: "Bill Mead",
    page: "https://unsplash.com/photos/wmaP3Tl80ww",
  },
} satisfies Record<string, PhotoData>;
