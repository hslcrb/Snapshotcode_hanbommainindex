import os
import re

index_path = r'c:\Users\user\Downloads\Snapshotcode_hanbommainindex\index.html'
with open(index_path, 'rb') as f:
    data = f.read()

# Handle BOM
bom = b''
if data.startswith(b'\xef\xbb\xbf'):
    bom = b'\xef\xbb\xbf'
    data = data[3:]

content = data.decode('utf-8', errors='ignore')

# Replace absolute paths starting with /hanbom-h/ or /00_common/ or /css/ etc.
# These should all be relative to root (./assets/...)
patterns = [
    (r'\"/hanbom-h/', '\"./'),
    (r'\'/hanbom-h/', '\'./'),
    (r'\"/00_common/', '\"./assets/'),
    (r'\'/00_common/', '\'./assets/'),
    (r'\"/upload/', '\"./assets/uploads/'),
    (r'\'/upload/', '\'./assets/uploads/'),
    (r'\"/css/', '\"./assets/css/'),
    (r'\'/css/', '\'./assets/css/'),
    (r'\"/js/', '\"./assets/js/'),
    (r'\'/js/', '\'./assets/js/'),
    (r'\"/images/', '\"./assets/images/'),
    (r'\'/images/', '\'./assets/images/'),
]

new_content = content
for old_p, new_p in patterns:
    new_content = re.sub(old_p, new_p, new_content)

if new_content != content:
    with open(index_path, 'wb') as f:
        f.write(bom)
        f.write(new_content.encode('utf-8'))
    print("Fixed absolute paths in index.html.")
else:
    print("No absolute paths found in index.html.")
