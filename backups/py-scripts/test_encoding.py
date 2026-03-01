import os

source = r'C:\Users\user\Downloads\Snapshotcode_hanbommainindex\recovery_final\hanbom-h.goesw.kr\hanbom-h\main.do'

with open(source, 'rb') as f:
    data = f.read()

# Define the target string "한봄" using escape sequences to avoid script encoding issues
target = '\ud55c\ubd44' # 한 (D55C) 봄 (BD44)

encodings = ['utf-8', 'cp949', 'euc-kr']
for enc in encodings:
    try:
        content = data.decode(enc)
        if target in content:
            print(f'MATCH: {enc} contains target string.')
            # Success! Let's write out the decoded content to index.html with BOM
            dest = r'C:\Users\user\Downloads\Snapshotcode_hanbommainindex\index.html'
            with open(dest, 'wb') as f_out:
                f_out.write(b'\xef\xbb\xbf') # BOM for Windows
                f_out.write(content.encode('utf-8'))
            print(f'index.html successfully restored using {enc} and saved as UTF-8 with BOM.')
            break
        else:
            print(f'NO MATCH: {enc} does not contain target string.')
    except Exception as e:
        print(f'ERROR with {enc}: {e}')
