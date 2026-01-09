
$files = Get-ChildItem "h:\基本大全ウェブテスト\webtest_fortablet_sample\M1-*.html" -Exclude "M1-3-1-6.html"
$target = "【最重要ルール】"
$injection = "0. 【最重要】画像にユーザーの手書きが全く見当たらない（白紙）場合は、絶対に「不正解」と判定し、isCorrect: false を返してください。「回答が見当たりません」と指摘してください。"

foreach ($f in $files) {
    try {
        $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
        if ($content.Contains($target) -and -not $content.Contains("0. 【最重要】")) {
            $newContent = $content.Replace($target, "$target`r`n            $injection")
            [System.IO.File]::WriteAllText($f.FullName, $newContent, [System.Text.Encoding]::UTF8)
            Write-Host "Updated $($f.Name)"
        }
    }
    catch {
        Write-Host "Error processing $($f.Name): $_"
    }
}
