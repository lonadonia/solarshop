// Builds a single self-contained HTML preview of the homepage from the static
// export in /out: CSS, fonts and images are inlined and the framework-free
// enhancement script replaces the Next.js runtime. Run `npm run build` first.
//
//   node scripts/build-preview.mjs [output-file]
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { build } from "esbuild";

const root = process.cwd();
const outDir = join(root, "out");
const target = process.argv[2] ?? join(root, "preview", "solarshop-preview.html");

if (!existsSync(join(outDir, "index.html"))) {
  console.error("out/index.html not found. Run `npm run build` first.");
  process.exit(1);
}

const mime = { ".woff2": "font/woff2", ".png": "image/png", ".svg": "image/svg+xml", ".webp": "image/webp", ".jpg": "image/jpeg" };
const dataUri = (publicPath) => {
  const file = join(outDir, publicPath.replace(/^\//, ""));
  return `data:${mime[extname(file)] ?? "application/octet-stream"};base64,${readFileSync(file).toString("base64")}`;
};

const html = readFileSync(join(outDir, "index.html"), "utf8");

// 1. Stylesheets -> one inline <style>, with fonts embedded
const cssHrefs = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)].map((m) => m[1]);
const inlineStyles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]);
let css = [...cssHrefs.map((href) => readFileSync(join(outDir, href.replace(/^\//, "")), "utf8")), ...inlineStyles].join("\n");
css = css.replace(/url\((["']?)(\/(?:fonts|brand)\/[^"')]+)\1\)/g, (_, q, p) => `url("${dataUri(p)}")`);

// 2. Body markup without the Next.js runtime scripts, images embedded
let body = html.match(/<body[^>]*>([\s\S]*)<\/body>/)[1];
body = body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
body = body.replace(/(src|href)="(\/brand\/[^"]+)"/g, (_, attr, p) => `${attr}="${dataUri(p)}"`);
body = body.replace(/<!--\/?\$\??-->/g, "");

// 3. Enhancement script as a small IIFE
const bundle = await build({
  stdin: {
    contents: `import { initSite } from "./src/lib/enhance.ts";
      if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => initSite());
      else initSite();`,
    resolveDir: root,
    loader: "ts",
  },
  bundle: true,
  minify: true,
  format: "iife",
  target: "es2019",
  write: false,
});
const js = bundle.outputFiles[0].text;

const page = `<title>SolarShop Homepage</title>
<meta name="description" content="SolarShop homepage design: solar panels, batteries and EV charging for homes, farms and business.">
<style>${css}</style>
${body.trim()}
<script>${js}</script>
`;

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, page);
console.log(`Preview written to ${target} (${(Buffer.byteLength(page) / 1024).toFixed(0)} KB)`);
