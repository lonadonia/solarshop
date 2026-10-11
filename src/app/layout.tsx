import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolarShop | Solar panels, batteries and EV charging",
  description:
    "SolarShop plans, supplies and installs solar panel, battery and EV charging systems for homes, farms and businesses. Book a free solar assessment.",
  icons: {
    icon: [{ url: "/brand/favicon-64.png", type: "image/png", sizes: "64x64" }],
    apple: "/brand/apple-touch-icon.png",
  },
  openGraph: {
    title: "SolarShop | Grow your own power",
    description: "Solar panels, batteries and EV charging, designed and installed by one team.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f8f1",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/outfit.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/instrument-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
