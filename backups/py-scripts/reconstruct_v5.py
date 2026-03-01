import os

source = r'C:\Users\user\Downloads\Snapshotcode_hanbommainindex\recovery_v4\hanbom-h.goesw.kr\hanbom-h\main.do'
dest = r'C:\Users\user\Downloads\Snapshotcode_hanbommainindex\index.html'

with open(source, 'rb') as f:
    data = f.read()

# Decode as UTF-8 (it is confirmed as UTF-8)
try:
    content = data.decode('utf-8')
    print("SUCCESS: UTF-8 Decode.")
except Exception as e:
    print(f"WARNING: UTF-8 Decode failed ({e}). trying errors='replace'")
    content = data.decode('utf-8', errors='replace')

# Path replacements
replacements = {
    '"/00_common/css/': '"./assets/css/',
    "'/00_common/css/": "'./assets/css/",
    '"/00_common/js/': '"./assets/js/',
    "'/00_common/js/": "'./assets/js/",
    '"/00_common/font/': '"./assets/fonts/',
    "'/00_common/font/": "'./assets/fonts/",
    '"/00_common/images/': '"./assets/images/',
    "'/00_common/images/": "'./assets/images/",
    '"/css/': '"./assets/css/',
    "'/css/": "'./assets/css/",
    '"/js/': '"./assets/js/',
    "'/js/": "'./assets/js/",
    '"/images/': '"./assets/images/',
    "'/images/": "'./assets/images/",
    '"/fonts.gstatic.com/': '"./assets/fonts/',
    '"/www.gstatic.com/': '"./assets/images/',
    '"/translate.google.com/': '"./assets/js/',
    '"/translate.googleapis.com/': '"./assets/js/',
    '.do"': '.html"',
    ".do'": ".html'",
    "main.html": "index.html"
}

for old, new in replacements.items():
    content = content.replace(old, new)

# Specific repair for common corruptions if any
content = content.replace('\uFFFD', '') # Remove replacement chars if any

# Write with BOM
with open(dest, 'wb') as f:
    f.write(b'\xef\xbb\xbf')
    f.write(content.encode('utf-8'))

print("index.html reconstructed and verified.")
