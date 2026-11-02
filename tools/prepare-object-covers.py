"""Extract original photos/renders from PDFs, without the presentation text layers.

Usage: python tools/prepare-object-covers.py SOURCE OUTPUT
Dependencies: PyMuPDF, Pillow. Source PDFs are opened read-only.
"""
from io import BytesIO
from pathlib import Path
import sys

import fitz
from PIL import Image, ImageOps

source, output = map(Path, sys.argv[1:3])
output.mkdir(parents=True, exist_ok=True)
figures = [
    ("2.pdf", 0, 0, "dream-object.webp"),
    ("6.14/Q ROBOT.pdf", 0, 2, "robot-object.webp"),
    ("6.14/Q ROBOT.pdf", 0, 0, "robot-flower.webp"),
]
for filename, page, index, name in figures:
    with fitz.open(source / filename) as document:
        xref = document[page].get_images(full=True)[index][0]
        data = document.extract_image(xref)
        with Image.open(BytesIO(data["image"])) as original:
            image = ImageOps.exif_transpose(original).convert("RGB")
            image.thumbnail((2000, 1800))
            image.save(output / name, "WEBP", quality=88, method=6)
    print("Extracted", name)
