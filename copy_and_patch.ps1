$templateFile = "M1-1-1-1.html"
$targetDir = "."

# Load Template
if (-not (Test-Path $templateFile)) {
    Write-Error "Template file $templateFile not found!"
    exit
}
$templateContent = Get-Content -Path $templateFile -Raw -Encoding UTF8

# Get Target Files (excluding template and backups)
$files = Get-ChildItem -Path $targetDir -Filter "M1-*.html" | Where-Object { $_.Name -ne $templateFile -and $_.Name -notlike "*old.html" }

foreach ($file in $files) {
    Write-Host "Processing $($file.Name)..."
    
    # 1. Read Original Content to extract unique values
    $originalContent = Get-Content -Path $file.FullName -Raw -Encoding UTF8

    # Extract Title
    if ($originalContent -match '<title>(.*?)</title>') {
        $uniqueTitle = $matches[1]
    }
    else {
        Write-Warning "Title not found in $($file.Name)"
        continue
    }

    # Extract H1
    if ($originalContent -match '<h1>(.*?)</h1>') {
        $uniqueH1 = $matches[1]
    }
    else {
        Write-Warning "H1 not found in $($file.Name)"
        continue
    }

    # Extract QD Script
    if ($originalContent -match '<script src="(M1-.*?-?QD\.js)"></script>') {
        $uniqueQD = $matches[1]
    }
    else {
        Write-Warning "QD Script not found in $($file.Name)"
        continue
    }

    # Determine unique local storage key part
    # M1-1-1-2.html -> m1_1_1_2
    $baseName = $file.BaseName
    $uniqueKeyPart = $baseName.ToLower().Replace("-", "_")

    # 2. Prepare New Content from Template
    $newContent = $templateContent

    # Replace Title
    $newContent = $newContent -replace '(<title>).*?(</title>)', "`$1$uniqueTitle`$2"

    # Replace H1
    $newContent = $newContent -replace '(<h1>).*?(</h1>)', "`$1$uniqueH1`$2"

    # Replace QD Script
    $newContent = $newContent -replace '(script src=")M1-1-1-1QD\.js(")', "`$1$uniqueQD`$2"

    # Replace Local Storage Keys
    # Template uses: quiz_progress_m1_1_1_1
    $newContent = $newContent -replace 'quiz_progress_m1_1_1_1', "quiz_progress_$uniqueKeyPart"

    # 3. Write to File
    Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
}

Write-Host "Template propagation complete!"
