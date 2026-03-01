import os

root = r'C:\Users\user\Downloads\Snapshotcode_hanbommainindex\recovery_v4'
# 한 (D55C) 봄 (BD44)
target_unicode = '\ud55c\ubd44' 
target_utf8 = target_unicode.encode('utf-8')
target_cp949 = target_unicode.encode('cp949')

possible_files = []
for r, d, f in os.walk(root):
    for file in f:
        if file.endswith('.do') or file.endswith('.html'):
            possible_files.append(os.path.join(r, file))

print(f'Scanning {len(possible_files)} files...')
for path in possible_files:
    with open(path, 'rb') as f:
        data = f.read()
    
    match_enc = None
    if target_utf8 in data:
        print(f'MATCH (UTF-8): {path}')
        match_enc = 'utf-8'
    elif target_cp949 in data:
        print(f'MATCH (CP949): {path}')
        match_enc = 'cp949'
    
    if match_enc:
        content = data.decode(match_enc, errors='ignore')
        # Perform replacements on THIS content
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

        # Final write out to root index.html with BOM
        dest = r'C:\Users\user\Downloads\Snapshotcode_hanbommainindex\index.html'
        with open(dest, 'wb') as f_out:
            f_out.write(b'\xef\xbb\xbf')
            f_out.write(content.encode('utf-8'))
        print(f'Successfully restored from {path}')
        # If this is the main.do, we are DONE with index.html
        if 'main.do' in path.lower():
            print('MAINDOC RESTORED.')
            # break # Keep scanning to see if others exist

print('Reconstruction scan complete.')
