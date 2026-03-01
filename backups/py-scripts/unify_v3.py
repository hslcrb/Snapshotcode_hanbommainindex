import os

def update_file(filepath):
    with open(filepath, 'rb') as f:
        content = f.read().decode('utf-8', errors='ignore')
    
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
    
    # Correction for specific corruption mentioned by user
    # If ?щ젰 ?명똿 remains, it means the source was already like that.
    # But usually, a fresh decode ('utf-8') of the zip content should be clean.

    with open(filepath, 'wb') as f:
        f.write(content.encode('utf-8'))

update_file('C:/Users/user/Downloads/Snapshotcode_hanbommainindex/index.html')
print("Update complete.")
