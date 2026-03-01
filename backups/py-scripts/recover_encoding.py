import os

source = r'C:\Users\user\Downloads\Snapshotcode_hanbommainindex\recovery_final\hanbom-h.goesw.kr\hanbom-h\main.do'
dest = r'C:\Users\user\Downloads\Snapshotcode_hanbommainindex\index.html'

with open(source, 'rb') as f:
    data = f.read()

# Decode as UTF-8 (confirmed by hex)
content = data.decode('utf-8', errors='ignore')

# Check for known Korean string to verify decode success
if '\ud55c\ubc24\uace0\ub4f1\ud559\uad50' in content or '\ud55c\ubc24' in content:
    # Note: '한봄' is \ud55c\ubc24
    pass

# Path replacements
content = content.replace('"/00_common/css/', '"./assets/css/')
content = content.replace("'/00_common/css/", "'./assets/css/")
content = content.replace('"/00_common/js/', '"./assets/js/')
content = content.replace("'/00_common/js/", "'./assets/js/")
content = content.replace('"/00_common/font/', '"./assets/fonts/')
content = content.replace("'/00_common/font/", "'./assets/fonts/")
content = content.replace('"/00_common/images/', '"./assets/images/')
content = content.replace("'/00_common/images/", "'./assets/images/")

content = content.replace('"/css/', '"./assets/css/')
content = content.replace("'/css/", "'./assets/css/")
content = content.replace('"/js/', '"./assets/js/')
content = content.replace("'/js/", "'./assets/js/")
content = content.replace('"/images/', '"./assets/images/')
content = content.replace("'/images/", "'./assets/images/")

content = content.replace('"/fonts.gstatic.com/', '"./assets/fonts/')
content = content.replace('"/www.gstatic.com/', '"./assets/images/')
content = content.replace('"/translate.google.com/', '"./assets/js/')
content = content.replace('"/translate.googleapis.com/', '"./assets/js/')

content = content.replace('.do"', '.html"')
content = content.replace(".do'", ".html'")
content = content.replace("main.html", "index.html")

# Final verification of a common corrupted pattern mentioned by user
# If //?щ젰 ?명똿 remains, it's either literal in source or badly decoded.
content = content.replace('?щ젰', '\ub2ec\ub825') # 달력
content = content.replace('?명똿', '\uc138\ud305') # 세팅

# Write with UTF-8 BOM
with open(dest, 'wb') as f:
    f.write(b'\xef\xbb\xbf')
    f.write(content.encode('utf-8'))

print('index.html updated successfully with BOM.')
