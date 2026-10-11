"""Turn the client's logo (white background) into transparent web assets.

Usage: python3 scripts/logo_assets.py <source_logo.png> <out_dir>
Outputs: logo.png (full colour, transparent), logo-light.png (for dark
backgrounds), mark.png (the sun-over-hills 'o' as a square icon).
"""
import sys
from PIL import Image
import numpy as np

src, out = sys.argv[1], sys.argv[2]
im = np.asarray(Image.open(src).convert("RGB")).astype(float)
H, W, _ = im.shape
white = np.array([254.5, 254.5, 254.5])
palette = np.array([
    [0x55, 0x83, 0x55],  # leaf green ("solar")
    [0x47, 0x7D, 0xAB],  # sky blue ("shop")
    [0xEB, 0xB5, 0x4A],  # sun gold
    [0x8F, 0xAE, 0x6E],  # light hill
], dtype=float)

d = white - im                                   # H,W,3
alphas, resid = [], []
for p in palette:
    v = white - p
    t = np.clip((d @ v) / (v @ v), 0, 1)
    proj = white - t[..., None] * v
    alphas.append(t)
    resid.append(np.linalg.norm(im - proj, axis=-1))
alphas, resid = np.stack(alphas), np.stack(resid)
best = resid.argmin(0)
alpha = np.take_along_axis(alphas, best[None], 0)[0]
color = palette[best]
# Near-opaque pixels keep their exact original colour (internal edges stay smooth)
opaque = alpha > 0.92
color[opaque] = im[opaque]
alpha[opaque] = 1.0
alpha[np.linalg.norm(d, axis=-1) < 6] = 0.0

rgba = np.dstack([color, alpha * 255]).round().clip(0, 255).astype(np.uint8)
logo = Image.fromarray(rgba, "RGBA")
bbox = logo.getbbox()
logo = logo.crop(bbox)
logo.save(f"{out}/logo.png", optimize=True)
print("logo bbox", bbox, logo.size)

# Locate the 'o' (sun disc) via gold pixels
gold = (best == 2) & (alpha > 0.5)
ys, xs = np.where(gold)
cx = (xs.min() + xs.max()) / 2
r = (xs.max() - xs.min()) / 2
cy = ys.min() + r
print("o centre", cx, cy, "radius", r)

# Light variant: letters -> daylight cream / pale sky, the 'o' keeps its colours
light = rgba.copy()
yy, xx = np.mgrid[0:H, 0:W]
outside_o = (xx - cx) ** 2 + (yy - cy) ** 2 > (r + 6) ** 2
green_letters = (best == 0) & outside_o
blue_letters = best == 1
light[green_letters, :3] = [0xF8, 0xF9, 0xF2]
light[blue_letters, :3] = [0xB9, 0xD5, 0xEC]
Image.fromarray(light, "RGBA").crop(bbox).save(f"{out}/logo-light.png", optimize=True)

# Square mark from the 'o'
pad = 4
box = (int(cx - r - pad), int(cy - r - pad), int(cx + r + pad), int(cy + r + pad))
mark = Image.fromarray(rgba, "RGBA").crop(box)
mark.save(f"{out}/mark.png", optimize=True)
mark.resize((64, 64), Image.LANCZOS).save(f"{out}/favicon-64.png", optimize=True)
mark.resize((180, 180), Image.LANCZOS).save(f"{out}/apple-touch-icon.png", optimize=True)
print("mark box", box)
