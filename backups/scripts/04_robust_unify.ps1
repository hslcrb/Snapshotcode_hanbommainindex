
$root = "c:\Users\user\Downloads\Snapshotcode_hanbommainindex"

# Function to safely update paths in a file
function Safe-Update-Paths ($filePath) {
    $content = Get-Content $filePath -Raw
    
    # 1. assets_common and assets_web mapping
    # Pattern: "/00_common/css/layout.css" -> "./assets/css/layout.css"
    $content = $content -replace '"/00_common/css/', '"./assets/css/'
    $content = $content -replace "'/00_common/css/", "'./assets/css/"
    $content = $content -replace '"/00_common/js/', '"./assets/js/'
    $content = $content -replace "'/00_common/js/", "'./assets/js/"
    $content = $content -replace '"/00_common/font/', '"./assets/fonts/'
    $content = $content -replace "'/00_common/font/", "'./assets/fonts/"
    $content = $content -replace '"/00_common/images/', '"./assets/images/'
    $content = $content -replace "'/00_common/images/", "'./assets/images/"

    $content = $content -replace '"/css/', '"./assets/css/'
    $content = $content -replace "'/css/", "'./assets/css/"
    $content = $content -replace '"/js/', '"./assets/js/'
    $content = $content -replace "'/js/", "'./assets/js/"
    $content = $content -replace '"/images/', '"./assets/images/'
    $content = $content -replace "'/images/", "'./assets/images/"
    
    # 2. External asset mapping
    $content = $content -replace '"/fonts.gstatic.com/', '"./assets/fonts/'
    $content = $content -replace '"/www.gstatic.com/', '"./assets/images/'
    $content = $content -replace '"/translate.google.com/', '"./assets/js/'
    $content = $content -replace '"/translate.googleapis.com/', '"./assets/js/'

    # 3. Normalization
    $content = $content -replace '\.do"', '.html"'
    $content = $content -replace "\.do'", ".html'"
    $content = $content -replace "main\.html", "index.html"

    Set-Content -Path $filePath -Value $content -Encoding utf8 -NoNewline
}

# Apply to all relevant files
$targetFiles = Get-ChildItem -Path $root -Include *.html, *.css, *.js -Recurse
foreach ($f in $targetFiles) {
    # Special handling for CSS/JS that might have been downloaded/moved
    # Actually most assets are already in assets/ so we mainly need to fix index.html
    # and maybe some CSS imports.
    Safe-Update-Paths $f.FullName
}

Write-Host "Robust path update and encoding fix complete."
