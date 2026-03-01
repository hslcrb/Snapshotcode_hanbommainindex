
$root = "c:\Users\user\Downloads\Snapshotcode_hanbommainindex"

# 1. Update index.html and any other pages
$files = Get-ChildItem -Path $root -Include *.html, *.css, *.js -Recurse
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Update asset paths to unified structure
    # Patterns to match: ../../website_archive/assets_common/css/ -> ./assets/css/
    # (Adjust based on file depth)
    
    # Simple strategy: Replace any variant of the old archive paths with unified assets/
    $content = $content -replace "\.\./\.\./website_archive/assets_common/css/", "./assets/css/"
    $content = $content -replace "\.\./\.\./website_archive/assets_common/js/", "./assets/js/"
    $content = $content -replace "\.\./\.\./website_archive/assets_common/font/", "./assets/fonts/"
    $content = $content -replace "\.\./\.\./website_archive/assets_web/css/", "./assets/css/"
    $content = $content -replace "\.\./\.\./website_archive/assets_web/js/", "./assets/js/"
    $content = $content -replace "\.\./\.\./website_archive/assets_web/images/", "./assets/images/"
    $content = $content -replace "\.\./\.\./website_archive/uploads/", "./assets/uploads/"
    
    # Handle domain-based external assets now in assets/
    $content = $content -replace "\.\./\.\./external_assets/google_fonts/", "./assets/fonts/"
    $content = $content -replace "\.\./\.\./external_assets/google_static/", "./assets/images/"
    $content = $content -replace "\.\./\.\./external_assets/google_translate/", "./assets/js/"

    # Handle direct /assets/ style if absolute-rooted was used (unlikely but safe)
    $content = $content -replace "/website_archive/assets_common/", "./assets/"
    $content = $content -replace "/website_archive/assets_web/", "./assets/"
    $content = $content -replace "/external_assets/", "./assets/"

    # 2. Normalize .do to .html in all files
    $content = $content -replace "\.do", ".html"
    
    # 3. Handle main entry point rename in links
    $content = $content -replace "main\.html", "index.html"

    Set-Content -Path $file.FullName -Value $content -NoNewline
}

Write-Host "Unified path updates and HTML normalization complete."
