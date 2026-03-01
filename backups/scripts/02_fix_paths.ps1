
$root = "c:\Users\user\Downloads\Snapshotcode_hanbommainindex"

function Fix-Files ($dir, $rel) {
    # Fix the corrupted paths caused by previous script
    $files = Get-ChildItem -Path $dir -Recurse -Include *.do, *.html, *.css, *.js
    foreach ($file in $files) {
        $content = Get-Content $file.FullName -Raw
        
        # Fixing the corrupted `"../..."folder/` pattern
        # Original script might have produced: "../../website_archive/assets_common/"css/
        # which should be "../../website_archive/assets_common/css/"
        
        $content = $content.Replace('"../../website_archive/assets_common/"', '"../../website_archive/assets_common/')
        $content = $content.Replace("'../../website_archive/assets_common/'", "'../../website_archive/assets_common/")
        
        $content = $content.Replace('"../../website_archive/assets_web/css/"', '"../../website_archive/assets_web/css/')
        $content = $content.Replace('"../../website_archive/assets_web/js/"', '"../../website_archive/assets_web/js/')
        $content = $content.Replace('"../../website_archive/assets_web/images/"', '"../../website_archive/assets_web/images/')
        $content = $content.Replace('"../../website_archive/uploads/"', '"../../website_archive/uploads/')
        
        # Correctly handle the domains too
        $content = $content.Replace('"../../external_assets/google_fonts/"', '"../../external_assets/google_fonts/')
        $content = $content.Replace('"../../external_assets/google_static/"', '"../../external_assets/google_static/')
        $content = $content.Replace('"../../external_assets/google_translate/"', '"../../external_assets/google_translate/')
        $content = $content.Replace('"../../internal_assets/data_uri/"', '"../../internal_assets/data_uri/')

        Set-Content -Path $file.FullName -Value $content -NoNewline
    }
}

Fix-Files "$root\website_archive\pages" ""
Fix-Files "$root\website_archive\assets_common" ""
Fix-Files "$root\website_archive\assets_web" ""
