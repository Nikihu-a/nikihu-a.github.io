"""Optimize rendered portfolio pages and selected originals, leaving source files unchanged."""
from pathlib import Path
from PIL import Image, ImageOps
import shutil,sys
source,rendered,target=map(Path,sys.argv[1:4]);target.mkdir(parents=True,exist_ok=True)
def save(src,dest,size=1600):
    with Image.open(src) as original:
        image=ImageOps.exif_transpose(original).convert('RGB')
        image.thumbnail((size,size))
        image.save(target/dest,'WEBP',quality=86,method=6)
for p in sorted(rendered.glob('*.png')):save(p,p.stem+'.webp')
for n in [1,4,7,8,9]:save(source/'Marketing ins9图'/f'ins{n:02d}.png',f'pagepeek-{n:02d}.webp',1100)
save(source/'pagepeek活动'/'IMG_1360.JPG','pagepeek-event.webp',1200)
shutil.copy2(rendered/'ashes-demo.mp4',target/'ashes-demo.mp4')
print('Published asset size:',round(sum(p.stat().st_size for p in target.iterdir())/1024**2,2),'MiB')
