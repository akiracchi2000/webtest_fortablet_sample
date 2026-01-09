$path = "g:\マイドライブ\UnderConstruction\M1-1-4-11.html"
$lines = Get-Content -Path $path -Encoding UTF8
$top = $lines[0..9]
$bottom = $lines[523..($lines.Count-1)]
$insert = @(
    '    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js"></script>',
    '    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/auto-render.min.js"></script>',
    '    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>',
    '    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>',
    '',
    '    <!-- クイズデータ読み込み -->',
    '    <script src="M1-1-4-11QD.js"></script>',
    ''
)
$newContent = $top + $insert + $bottom
$newContent | Set-Content -Path $path -Encoding UTF8
