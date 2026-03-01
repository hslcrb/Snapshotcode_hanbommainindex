import os

source = r'C:\Users\user\Downloads\Snapshotcode_hanbommainindex\recovery_v4\hanbom-h.goesw.kr\hanbom-h\main.do'
dest = r'C:\Users\user\Downloads\Snapshotcode_hanbommainindex\index.html'

with open(source, 'rb') as f:
    data = f.read()

# 한봄 in Unicode
target = '\ud55c\ubd44' 

# Try UTF-8 first
content = None
try:
    decoded = data.decode('utf-8')
    if target in decoded:
        print("MATCH: UTF-8")
        content = decoded
except:
    pass

# Try CP949 if no match
if content is None:
    try:
        decoded = data.decode('cp949')
        if target in decoded:
            print("MATCH: CP949")
            content = decoded
    except:
        pass

if content:
    # Perform path replacements
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

    # Write with BOM
    with open(dest, 'wb') as f_out:
        f_out.write(b'\xef\xbb\xbf')
        f_out.write(content.encode('utf-8'))
    print("SUCCESS: index.html restored.")
else:
    print("FAILURE: No encoding match for 'Hanbom'.")
