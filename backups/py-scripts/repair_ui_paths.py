import os
import re

root = r'c:\Users\user\Downloads\Snapshotcode_hanbommainindex'

def fix_css_paths():
    css_dir = os.path.join(root, 'assets', 'css')
    for r, d, f in os.walk(css_dir):
        for file in f:
            if file.endswith('.css'):
                path = os.path.join(r, file)
                with open(path, 'rb') as f_in:
                    data = f_in.read()
                
                try:
                    content = data.decode('utf-8')
                except:
                    content = data.decode('cp949', errors='ignore')
                
                # Fix double-wrapped paths: ./assets/css/ -> ./
                # Since the CSS files are now in assets/css/, paths like ./assets/css/basic.css 
                # should just be ./basic.css (or basic.css)
                new_content = content.replace('./assets/css/', './')
                new_content = new_content.replace('./assets/js/', '../js/')
                new_content = new_content.replace('./assets/images/', '../images/')
                new_content = new_content.replace('./assets/fonts/', '../fonts/')
                
                if new_content != content:
                    with open(path, 'wb') as f_out:
                        f_out.write(new_content.encode('utf-8'))
                    print(f"Fixed CSS: {os.path.relpath(path, root)}")

def fix_index_uploads():
    index_path = os.path.join(root, 'index.html')
    with open(index_path, 'rb') as f_in:
        data = f_in.read()
    
    # Handle BOM
    bom = b''
    if data.startswith(b'\xef\xbb\xbf'):
        bom = b'\xef\xbb\xbf'
        data = data[3:]
    
    content = data.decode('utf-8')
    
    # Replace absolute /upload/ with relative ./assets/uploads/
    # And fix any /hanbom-h/ style absolute paths
    new_content = content.replace('"/upload/', '"./assets/uploads/')
    new_content = new_content.replace("'/upload/", "'./assets/uploads/")
    
    # Fix common absolute-rooted paths that might remain
    new_content = new_content.replace('"/hanbom-h/', '"./')
    new_content = new_content.replace("'/hanbom-h/", "'./")
    
    # Verification of assets/ paths
    # Some ./assets/... might be broken if they were double-wrapped too
    # But usually index.html is in root, so ./assets/ is correct.
    
    if new_content != content:
        with open(index_path, 'wb') as f_out:
            f_out.write(bom)
            f_out.write(new_content.encode('utf-8'))
        print("Fixed index.html uploads/absolute paths.")

if __name__ == "__main__":
    fix_css_paths()
    fix_index_uploads()
    print("UI/UX Path Repair Complete.")
