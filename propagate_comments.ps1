$sourceFile = "M1-1-1-1.html"
$targetDir = "."

# 1. Get the components from the source file content (hardcoded for reliability as reading from file might be tricky with partial matches)
# However, for the functions, it is better to have the exact string.

$cssToAdd = @'
        /* ===== 追加：不正解時の2択（やり直す／正解を教えて） ===== */
        .wrong-decision-area{
            margin-top:12px;
            display:flex;
            gap:10px;
            flex-wrap:wrap;
            justify-content:center;
        }
        .wrong-decision-btn{
            padding:10px 18px;
            font-size:1em;
        }
        .wrong-decision-note{
            margin-top:8px;
            font-size:0.85em;
            opacity:0.8;
            text-align:center;
        }

        /* ===== 追加：励ましコメント（気持ちよさUP） ===== */
        #encouragement-under-question{
            margin: 12px auto 0 auto;
            padding: 8px 12px;
            border-radius: 10px;
            border: 1px dashed var(--border-color);
            background: var(--panel-bg);
            font-size: 0.98em;
            text-align: center;
            max-width: 95%;
            opacity: 0.92;
        }
'@

$htmlElement = '<div id="encouragement-under-question" style="display:none;"></div>'

# JS Helper Functions
$jsHelpers = @'
        // --- 不正解時の分岐（もう一度解く／正解を教えて） ---
        let pendingAIResult = null; // { questionIndex, recognizedAnswer, feedback }

        // --- 励ましコメント（気持ちよさUP） ---
        const ENCOURAGEMENTS = [
            "OK！今の気づきを活かしてもう一度いこう。",
            "ナイス判断。ここでやり直せるのが強い。",
            "大丈夫。1回目で気づけたのが収穫！",
            "落ち着いていけば必ず取れる。",
            "今のミスは伸びしろ。次で回収しよう。",
            "いいね。ここからが本番。",
            "書き直してみよう。答えに近づいてるよ。"
        ];

        function showEncouragement() {
            const el = document.getElementById("encouragement-under-question");
            if (!el) return;
            const msg = ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
            el.textContent = msg;
            el.style.display = "block";
        }

        function hideEncouragement() {
            const el = document.getElementById("encouragement-under-question");
            if (!el) return;
            el.style.display = "none";
            el.textContent = "";
        }

        function showWrongDecisionUI(currentQuestion, result) {
            const feedbackEl = document.getElementById('feedback');
            const nextBtn = document.getElementById('next-btn');
            const resultsBtn = document.getElementById('results-btn');
            const answerBtn = document.getElementById('answer-btn');

            nextBtn.style.display = 'none';
            resultsBtn.style.display = 'none';
            answerBtn.style.display = 'none';

            pendingAIResult = {
                questionIndex: currentQuestionIndex,
                recognizedAnswer: result.recognizedAnswer || '',
                feedback: result.feedback || ''
            };

            feedbackEl.className = 'incorrect-feedback';
            feedbackEl.innerHTML = `
                <div class="ai-banner">🤖AIカガワ先生🤖の解答check✅</div><br>
                <span style="color: var(--incorrect-color);"><strong>今回は不正解でした。</strong></span><br>
                あなたの解答: ${pendingAIResult.recognizedAnswer || '(読み取り不可)'}<br>
                <div class="wrong-decision-area">
                    <button class="tool-btn ai-btn wrong-decision-btn" onclick="retryCurrentQuestion()">🔁 もう一度解く</button>
                    <button class="tool-btn ai-btn wrong-decision-btn" onclick="revealCorrectWithAI()">✅ 正解を教えて！AIカガワ先生</button>
                </div>
                <div class="wrong-decision-note">※「もう一度解く」を選ぶと，メモを消して解き直せます。</div>
            `;
            feedbackEl.style.display = 'block';
            renderAllMath();
        }

        function retryCurrentQuestion() {
            pendingAIResult = null;

            clearMemo();

            const feedbackEl = document.getElementById('feedback');
            const answerBtn = document.getElementById('answer-btn');
            const indicator = document.getElementById('analyzing-indicator');
            const nextBtn = document.getElementById('next-btn');
            const resultsBtn = document.getElementById('results-btn');

            feedbackEl.style.display = 'none';
            indicator.style.display = 'none';
            nextBtn.style.display = 'none';
            resultsBtn.style.display = 'none';

            answerBtn.textContent = "🤖AIカガワ先生🤖に添削してもらう";
            answerBtn.style.display = 'block';

            showEncouragement();
        }

        function revealCorrectWithAI() {
            if (!pendingAIResult) return;

            const feedbackEl = document.getElementById('feedback');
            const nextBtn = document.getElementById('next-btn');
            const resultsBtn = document.getElementById('results-btn');

            const q = quizData[pendingAIResult.questionIndex] || quizData[currentQuestionIndex];

            if (!incorrectQuestions.includes(q)) {
                incorrectQuestions.push(q);
            }

            let html = `
                <div class="ai-banner">🤖AIカガワ先生🤖の解答check✅</div><br>
                <span style="color: var(--incorrect-color);"><strong>今回は不正解でした。</strong></span><br>
                あなたの解答: ${pendingAIResult.recognizedAnswer || '(読み取り不可)'}<br>
                <strong>正解: ${q.answer}</strong><br><br>
            `;

            if (pendingAIResult.feedback) {
                html += `${pendingAIResult.feedback}<br>`;
            }

            html += `<hr><div class="explanation-banner">解説</div><br>${q.rationale || ""}`;

            feedbackEl.className = 'incorrect-feedback';
            feedbackEl.innerHTML = html;
            feedbackEl.style.display = 'block';
            renderAllMath();

            if (pendingAIResult.questionIndex < quizData.length - 1) {
                nextBtn.style.display = 'block';
                resultsBtn.style.display = 'none';
            } else {
                nextBtn.style.display = 'none';
                resultsBtn.style.display = 'block';
            }

            pendingAIResult = null;

            saveProgress();
            updateProgressAndScore();
        }
'@

# The new checkAnswerWithAI function (escaped appropriately for PowerShell using Here-String)
$newCheckAnswerFunction = @'
        async function checkAnswerWithAI() {
            const answerBtn = document.getElementById('answer-btn');
            const indicator = document.getElementById('analyzing-indicator');
            const feedbackEl = document.getElementById('feedback');
            const nextBtn = document.getElementById('next-btn');
            const resultsBtn = document.getElementById('results-btn');

            hideEncouragement();
            pendingAIResult = null;

            answerBtn.style.display = 'none';
            indicator.style.display = 'block';

            // iOS対策: ユーザー操作の直後にAudioContextを再開する
            if (isSoundOn && audioCtx) {
                if (audioCtx.state === 'suspended') {
                    audioCtx.resume();
                }
            } else if (isSoundOn && !audioCtx) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (AudioContext) {
                    audioCtx = new AudioContext();
                    audioCtx.resume();
                }
            }

            const apiKey = localStorage.getItem('gemini_api_key');
            if (!apiKey) {
                alert("APIキーが設定されていません。トップページで設定してください。");
                indicator.style.display = 'none';
                answerBtn.style.display = 'block';
                return;
            }

            const currentQuestion = quizData[currentQuestionIndex];

            try {
                // html2canvasでメモコンテナを画像化
                const memoContainer = document.getElementById('memo-container');
                const capturedCanvas = await html2canvas(memoContainer, {
                    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
                    scale: 2
                });
                const imageData = capturedCanvas.toDataURL('image/png').split(',')[1];

                const prompt = `
あなたは高校数学の「誤り診断」に特化した添削者です。
以下の問題に対する生徒の手書き解答（画像）を読み取り，
最終答案の正誤と，途中式の数学的整合性だけを判定してください。

問題: ${currentQuestion.question}
正解: ${currentQuestion.answer}

【最重要ルール】
1. 画像に何も書かれていない，または白紙に近い場合は必ず不正解とする。
2. その場合は次の一文だけを出力して終了する：
   「メモ帳に記述がない場合は分析ができないので，解答はメモ帳に書いてくださいね！」
   - この文以外は一切出力しない。
3. 最終答案が正解と一致している場合のみ isCorrect を true とする。
   - 有理化で同じ，同値変形，積の順序違いなどは正解扱い。
4. 途中式が存在する場合は，必ず途中式の整合性をチェックする。
5. 最終答案が正解でも途中式に数学的な誤りや飛躍がある場合，
   hasProcessError を true とし，
   feedback で短く指摘する。
6. 途中式がほぼ無い/読めない場合は hasProcessError を false にしてよいが，
   feedback に「途中式が読み取れないため過程の検証は不十分」と短く書く。
7. 間違いの要因として「計算ミス」だけでなく
   「数式の写し間違い（問題文の式や条件の転記ミス）」も重要な誤りとして扱い，
   可能なら優先して指摘する。
8. 正誤判定問題（答えが「正しい」「正しくない」の場合）について:
   - 漢字の崩れやひらがな表記（例：「ただしい」）でも意図が明確なら採点。
   - 「〇」「×」はそれぞれ「正しい」「正しくない」に対応させて採点。
9. 数式は必ずLaTeX形式（$...$）で記述する。分数は \\frac{a}{b} を用いる。

【feedbackの書き方（やさしく短く）】
- 50〜120字程度。
- 指摘は最大2点まで。
- 解説や模範解答の再提示は禁止（解説は別に表示される）。
- 誤りタイプの例：
  計算ミス／符号ミス／公式の適用条件ミス／同値変形の誤り／論理の飛躍／写し間違い
- 不正解の場合は最も致命的な誤り箇所を優先して指摘。
- 正解だが hasProcessError が true の場合は
  「答えは合っていますが，途中式に誤りが見られます。」のように自然な表現で短く指摘。

【出力】
以下のJSON形式のみを出力してください。Markdownのコードブロックは不要です。
{
  "isCorrect": true または false,
  "hasProcessError": true または false,
  "recognizedAnswer": "画像から読み取った生徒の最終解答（LaTeX $...$）。読み取れない場合は空文字。",
  "feedback": "誤り診断コメント。正解かつ過程も問題なければ空文字。"
}
`;

                const response = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{
                                parts: [
                                    { text: prompt },
                                    {
                                        inline_data: {
                                            mime_type: "image/png",
                                            data: imageData
                                        }
                                    }
                                ]
                            }]
                        })
                    }
                );

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error?.message || "API Error");
                }

                const data = await response.json();
                const aiText = data.candidates[0].content.parts[0].text
                    .replace(/```json/g, '')
                    .replace(/```/g, '')
                    .trim();

                const result = JSON.parse(aiText);

                if (result.recognizedAnswer === 'null' || result.recognizedAnswer === null) result.recognizedAnswer = '';
                if (result.feedback === 'null' || result.feedback === null) result.feedback = '';
                if (result.hasProcessError === 'null' || result.hasProcessError === null) result.hasProcessError = false;

                // 不正解なのに誤誘導表現が混ざった場合の安全弁
                const misleading = /(答え|結論)は合って(い|)ます|偶然正解/;
                if (result.isCorrect === false && misleading.test(result.feedback || "")) {
                    result.feedback = "途中の計算や条件の確認が必要です。ゆっくり見直してみましょう。";
                }

                indicator.style.display = 'none';

                if (result.isCorrect) {
                    score++;
                    playSound('correct');

                    // 正解済みなら不正解リストから外す（任意）
                    const idx = incorrectQuestions.indexOf(currentQuestion);
                    if (idx !== -1) incorrectQuestions.splice(idx, 1);

                    feedbackEl.className = 'correct-feedback';

                    const caution = result.hasProcessError
                        ? `<br><span style="color: var(--incorrect-color);"><strong>※答えは合っていますが，途中式に誤りが見られます。</strong></span><br>`
                        : `<br>`;

                    let feedbackHtml =
                        `<div class="ai-banner">🤖AIカガワ先生🤖の解答check✅</div><br>` +
                        `<span style="color: var(--correct-color);"><strong>正解！💐</strong></span>${caution}` +
                        `あなたの解答: ${result.recognizedAnswer || '(読み取り不可)'}<br>`;

                    if (result.feedback) {
                        feedbackHtml += `<br>${result.feedback}<br>`;
                    }

                    feedbackEl.innerHTML = feedbackHtml;

                    saveProgress();
                    updateProgressAndScore();

                    feedbackEl.innerHTML += `<hr><div class="explanation-banner">解説</div><br>${currentQuestion.rationale || ""}`;
                    feedbackEl.style.display = 'block';
                    renderAllMath();

                    if (currentQuestionIndex < quizData.length - 1) {
                        nextBtn.style.display = 'block';
                    } else {
                        resultsBtn.style.display = 'block';
                    }

                } else {
                    playSound('incorrect');

                    // 不正解時は2択を提示（ここではまだ正解も解説も出さない）
                    showWrongDecisionUI(currentQuestion, result);

                    saveProgress();
                    updateProgressAndScore();
                }

            } catch (error) {
                console.error("Gemini API error:", error);
                const msg = String(error.message || '');

                if (
                    msg.includes('Quota exceeded') ||
                    msg.includes('rate limit') ||
                    msg.includes('429')
                ) {
                    alert(
                        "AIの無料利用回数の上限に達しました。\n" +
                        "少し時間をおいてから、もう一度お試しください。"
                    );
                } else {
                    alert("採点中にエラーが発生しました。\n詳細: " + msg);
                }

                indicator.style.display = 'none';
                answerBtn.style.display = 'block';
            }
        }
'@

# Helper to find end of CSS
function Add-CssContent {
    param($content, $newCss)
    if ($content -match "\.wrong-decision-area") {
        return $content # Already exists
    }
    # Fix: Use backtick to escape $1 so it refers to regex capture group, not powershell var
    return $content -replace "(\s*</style>)", "$newCss`n`$1"
}

# Helper to add HTML
function Add-HtmlContent {
    param($content, $newHtml)

    # Check existence of elements
    $encouragementExists = $content -match 'id="encouragement-under-question"'
    $h2Exists = $content -match '<h2 id="question-text"></h2>'
    
    if ($encouragementExists -and $h2Exists) {
        return $content
    }

    if ($encouragementExists -and -not $h2Exists) {
        # REPAIR MODE: h2 was deleted by previous buggy run. Restoring it before the encouragement div.
        # Use backtick to escape $1 for PowerShell double-quoted string interpolation
        return $content -replace '(<div id="encouragement-under-question")', "<h2 id=`"question-text`"></h2>`n                `$1"
    }
    
    if (-not $encouragementExists -and $h2Exists) {
        # Standard Add
        return $content -replace '(<h2 id="question-text"></h2>)', "`$1`n                $newHtml"
    }

    if (-not $encouragementExists -and -not $h2Exists) {
        # Both missing? Try to append after question-header block
        return $content -replace '(<div id="question-header">[\s\S]*?</div>)', "`$1`n                <h2 id=`"question-text`"></h2>`n                $newHtml"
    }
    
    return $content
}

# Helper to Update JS
# This is tricky because we need to replace a large function block.
# We will use Regex to find the checkAnswerWithAI function and replace it.
# We also need to insert the helper functions before it.

function Update-JsContent {
    param($content, $helpers, $newFunc)
    
    # Strategy:
    # 1. Look for the Helper Start Marker. If found, we are in "Updated" or "Corrupted" state.
    #    We replace everything from Marker to selectAnswer with Fresh Helpers + Fresh Function.
    # 2. If Marker NOT found, we are in "Clean" state.
    #    We replace checkAnswerWithAI to selectAnswer with Fresh Helpers + Fresh Function.

    $markerStr = "// --- 不正解時の分岐（もう一度解く／正解を教えて） ---"
    
    $markerIndex = $content.IndexOf($markerStr)
    $endMatch = [regex]::Match($content, "function\s+selectAnswer")
    
    if (-not $endMatch.Success) {
        Write-Warning "Could not find 'function selectAnswer'. Skipping."
        return $content
    }
    $endIndex = $endMatch.Index

    if ($markerIndex -ge 0) {
        # Corrupted or Already Updated state.
        # Replace from marker to selectAnswer
        if ($endIndex -gt $markerIndex) {
            # We assume everything between marker and selectAnswer is "to be replaced"
            $before = $content.Substring(0, $markerIndex)
            $after = $content.Substring($endIndex)
            return $before + $helpers + "`n`n        " + $newFunc + "`n`n        " + $after
        }
        else {
            Write-Warning "Marker found but appears after selectAnswer? Skipping."
            return $content
        }
    }
    else {
        # Clean state
        $startMatch = [regex]::Match($content, "(async\s+)?function\s+checkAnswerWithAI")
        
        if ($startMatch.Success) {
            $startIndex = $startMatch.Index
            if ($endIndex -gt $startIndex) {
                $before = $content.Substring(0, $startIndex)
                $after = $content.Substring($endIndex)
                return $before + $helpers + "`n`n        " + $newFunc + "`n`n        " + $after
            }
        }
        
        Write-Warning "Could not find CheckAnswer function or Marker. Skipping."
        return $content
    }
}


# Get all M1-*.html files except M1-1-1-1.html and old files
$files = Get-ChildItem -Path $targetDir -Filter "M1-*.html" | Where-Object { $_.Name -ne "M1-1-1-1.html" -and $_.Name -notlike "*old.html" }

foreach ($file in $files) {
    Write-Host "Processing $($file.Name)..."
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8

    # Apply changes
    $content = Add-CssContent -content $content -newCss $cssToAdd
    $content = Add-HtmlContent -content $content -newHtml $htmlElement
    
    # Update JS (Helpers + Replacement)
    # Note: Update-JsContent handles both checks inside
    $content = Update-JsContent -content $content -helpers $jsHelpers -newFunc $newCheckAnswerFunction

    # Save
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}

Write-Host "Done!"
