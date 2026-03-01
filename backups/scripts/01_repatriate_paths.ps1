
$root = "c:\Users\user\Downloads\Snapshotcode_hanbommainindex"

# Function to update files in a specific directory
function Update-Files ($dir, $relativePathToRoot) {
    $files = Get-ChildItem -Path $dir -Recurse -Include *.do, *.html, *.css, *.js
    foreach ($file in $files) {
        $content = Get-Content $file.FullName -Raw
        
        # Core assets
        $content = $content -replace '"/00_common/', "(`"$relativePathToRoot/website_archive/assets_common/`")"
        $content = $content -replace '''/00_common/', "(`'$relativePathToRoot/website_archive/assets_common/`')"
        
        $content = $content -replace '"/css/', "(`"$relativePathToRoot/website_archive/assets_web/css/`")"
        $content = $content -replace '''/css/', "(`'$relativePathToRoot/website_archive/assets_web/css/`')"
        
        $content = $content -replace '"/js/', "(`"$relativePathToRoot/website_archive/assets_web/js/`")"
        $content = $content -replace '''/js/', "(`'$relativePathToRoot/website_archive/assets_web/js/`')"
        
        $content = $content -replace '"/images/', "(`"$relativePathToRoot/website_archive/assets_web/images/`")"
        $content = $content -replace '''/images/', "(`'$relativePathToRoot/website_archive/assets_web/images/`')"
        
        $content = $content -replace '"/upload/', "(`"$relativePathToRoot/website_archive/uploads/`")"
        $content = $content -replace '''/upload/', "(`'$relativePathToRoot/website_archive/uploads/`')"

        # External assets
        $content = $content -replace '"/fonts.gstatic.com/', "(`"$relativePathToRoot/external_assets/google_fonts/`")"
        $content = $content -replace '"/www.gstatic.com/', "(`"$relativePathToRoot/external_assets/google_static/`")"
        $content = $content -replace '"/translate.google.com/', "(`"$relativePathToRoot/external_assets/google_translate/`")"
        $content = $content -replace '"/translate.googleapis.com/', "(`"$relativePathToRoot/external_assets/google_translate/`")"
        $content = $content -replace '"/_DataURI/', "(`"$relativePathToRoot/internal_assets/data_uri/`")"

        # Fix the parentheses I added for safety in regex replacement if needed, 
        # but actually I should just use the string directly.
        $content = $content -replace '\("', '"'
        $content = $content -replace '"\)', '"'
        $content = $content -replace "\('", "'"
        $content = $content -replace "'\)", "'"

        Set-Content -Path $file.FullName -Value $content -NoNewline
    }
}

# Apply to different layers
Write-Host "Updating Pages..."
Update-Files "$root\website_archive\pages" "../.."

Write-Host "Updating Common Assets..."
Update-Files "$root\website_archive\assets_common" "../.."

Write-Host "Updating Web Assets..."
Update-Files "$root\website_archive\assets_web" "../.."

Write-Host "Re-calculating specifically for assets to use shorter paths if possible, but the absolute-to-relative-root approach is safest."
