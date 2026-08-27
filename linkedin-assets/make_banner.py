"""Render a 1584x396 LinkedIn cover matching the portfolio palette."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1584, 396
OUT = Path(__file__).with_name("linkedin-banner.png")

BG = (10, 10, 10)
INK = (245, 245, 245)
MUTED = (161, 161, 161)
MINT = (200, 230, 208)
TEAL = (12, 61, 68)


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(rf"C:\Windows\Fonts\{name}", size)


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


img = Image.new("RGB", (W, H), BG)
px = img.load()

for y in range(H):
    for x in range(W):
        nx = x / W
        ny = y / H
        # Soft teal wash on the right; left stays dark for the photo overlap.
        wash = max(0.0, (nx - 0.28) / 0.72) ** 1.15
        vert = 0.55 + 0.45 * (1 - abs(ny - 0.48) * 1.6)
        t = min(1.0, wash * vert * 0.55)
        px[x, y] = lerp(BG, TEAL, t)

layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
glow = ImageDraw.Draw(layer)
glow.ellipse((980, -180, 1780, 520), fill=(*MINT, 28))
glow.ellipse((1280, 80, 1760, 520), fill=(*TEAL, 90))
layer = layer.filter(ImageFilter.GaussianBlur(72))
img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")
draw = ImageDraw.Draw(img)

# Hairline
draw.line((520, 78, 1488, 78), fill=(*MINT, ), width=1)
draw.rectangle((520, 76, 568, 80), fill=MINT)

serif = font("georgia.ttf", 46)
sans = font("segoeui.ttf", 22)
sans_sm = font("segoeui.ttf", 18)

# Copy sits in the right two-thirds — profile photo covers ~x<430.
title = "Backend & AI agent systems"
stack = "Python   ·   FastAPI   ·   .NET   ·   Kafka"
url = "sandeep-gonnabattula.dev"

draw.text((520, 118), title, font=serif, fill=INK)
draw.text((520, 188), stack, font=sans, fill=MINT)
draw.text((520, 248), url, font=sans_sm, fill=MUTED)

# Small monogram, far right
cx, cy, r = 1448, 198, 34
draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=MINT)
mono = font("georgia.ttf", 22)
bbox = draw.textbbox((0, 0), "SG", font=mono)
tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
draw.text((cx - tw / 2, cy - th / 2 - 4), "SG", font=mono, fill=BG)

img.save(OUT, "PNG", optimize=True)
print(f"wrote {OUT} {img.size}")
