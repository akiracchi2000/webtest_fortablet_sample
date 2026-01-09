import os
import re
import glob

# Directory containing the HTML files
TARGET_DIR = r"h:\基本大全ウェブテスト\webtest_fortablet_sample"

# --- Improved Function Definitions (Same as before) ---
# Note: Indentation in these strings is 8 spaces.

NEW_GET_CANVAS_IMAGE = r"""        // --- キャンバス画像取得用ヘルパー (AIお助け用: 白背景・黒文字・クロッピング) ---
        function getCanvasImageBase64(scale = 1) {
            const originalCanvas = document.getElementById('memo-pad');
            const width = originalCanvas.width;
            const height = originalCanvas.height;
            const ctx = originalCanvas.getContext('2d');

            // 1. 元のピクセルデータを取得
            const imageData = ctx.getImageData(0, 0, width, height);
            const data = imageData.data;

            let minX = width, minY = height, maxX = 0, maxY = 0;
            let hasPixels = false;

            // 2. ピクセル操作 & バウンディングボックス検出
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    const i = (y * width + x) * 4;
                    const alpha = data[i + 3];

                    if (alpha > 50) { // 描画あり
                        data[i] = 0;     // R -> 黒
                        data[i + 1] = 0; // G -> 黒
                        data[i + 2] = 0; // B -> 黒
                        data[i + 3] = 255; // 完全不透明

                        if (x < minX) minX = x;
                        if (x > maxX) maxX = x;
                        if (y < minY) minY = y;
                        if (y > maxY) maxY = y;
                        hasPixels = true;
                    } else {
                        data[i + 3] = 0; // 透明
                    }
                }
            }

            if (!hasPixels) {
                // 白紙の場合はそのまま返す（後続の判定で弾かれるはず）
                return originalCanvas.toDataURL('image/png').split(',')[1];
            }

            // 3. 作業用キャンバスを作る（黒文字のみ）
            const workCanvas = document.createElement('canvas');
            workCanvas.width = width;
            workCanvas.height = height;
            const workCtx = workCanvas.getContext('2d');
            workCtx.putImageData(imageData, 0, 0);

            // 4. 切り抜き範囲の計算（パディング追加）
            const padding = 20;
            const cropX = Math.max(0, minX - padding);
            const cropY = Math.max(0, minY - padding);
            const cropWidth = Math.min(width, maxX + padding) - cropX;
            const cropHeight = Math.min(height, maxY + padding) - cropY;

            // 5. 提出用キャンバスを作る（切り抜いたサイズ）
            const exportCanvas = document.createElement('canvas');
            exportCanvas.width = cropWidth * scale;
            exportCanvas.height = cropHeight * scale;
            const exportCtx = exportCanvas.getContext('2d');

            // 背景を白で塗りつぶす
            exportCtx.fillStyle = '#FFFFFF';
            exportCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

            // 切り抜いて描画
            exportCtx.drawImage(
                workCanvas,
                cropX, cropY, cropWidth, cropHeight, // 元画像の範囲
                0, 0, exportCanvas.width, exportCanvas.height // 出力先の範囲
            );

            return exportCanvas.toDataURL('image/png').split(',')[1];
        }"""

NEW_INIT_CANVAS = r"""        function initCanvas() {
            // イベントリスナーのセットアップ
            resizeCanvas();
            // resizeCanvasは初期サイズ設定を行う
            window.addEventListener('resize', resizeCanvas);
            canvas.addEventListener('contextmenu', (e) => e.preventDefault());

            if (window.PointerEvent) {
                // Pointer Events (モダンブラウザ・タブレット向け)
                canvas.addEventListener('pointerdown', (e) => {
                    e.preventDefault();
                    if (isPenOnlyMode && e.pointerType === 'touch') {
                        return;
                    }
                    canvas.setPointerCapture(e.pointerId);
                    startDrawing(e);
                });

                canvas.addEventListener('pointermove', (e) => {
                    e.preventDefault();
                    if (isPenOnlyMode && e.pointerType === 'touch') {
                        return;
                    }

                    // 補間イベント（Coalesced Events）の処理
                    // これにより、描画ポイントが増え、線が滑らかになります
                    if (e.getCoalescedEvents) {
                        const events = e.getCoalescedEvents();
                        for (const event of events) {
                            draw(event);
                        }
                    } else {
                        draw(e);
                    }
                    updateCursor(e);
                });

                canvas.addEventListener('pointerup', (e) => {
                    e.preventDefault();
                    canvas.releasePointerCapture(e.pointerId);
                    stopDrawing();
                    updateCursor(e);
                });
                canvas.addEventListener('pointerenter', (e) => {
                    if (currentTool === 'eraser') {
                        document.getElementById('eraser-cursor').style.display = 'block';
                    }
                });
                canvas.addEventListener('pointerleave', (e) => {
                    document.getElementById('eraser-cursor').style.display = 'none';
                });
                canvas.addEventListener('pointercancel', (e) => {
                    canvas.releasePointerCapture(e.pointerId);
                    stopDrawing();
                });
            } else {
                // フォールバック (古いブラウザ用)
                canvas.addEventListener('mousedown', startDrawing);
                canvas.addEventListener('mousemove', draw);
                canvas.addEventListener('mouseup', stopDrawing);
                canvas.addEventListener('mouseout', stopDrawing);

                canvas.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    if (isPenOnlyMode) return;
                    const touch = e.touches[0];
                    const mouseEvent = new MouseEvent("mousedown", { clientX: touch.clientX, clientY: touch.clientY });
                    canvas.dispatchEvent(mouseEvent);
                }, { passive: false });

                canvas.addEventListener('touchmove', (e) => {
                    e.preventDefault();
                    if (isPenOnlyMode) return;
                    // Touch events do not support coalesced events in the same way directly here
                    const touch = e.touches[0];
                    const mouseEvent = new MouseEvent("mousemove", { clientX: touch.clientX, clientY: touch.clientY });
                    canvas.dispatchEvent(mouseEvent);
                }, { passive: false });

                canvas.addEventListener('touchend', () => {
                    if (isPenOnlyMode) return;
                    canvas.dispatchEvent(new MouseEvent("mouseup", {}));
                });
            }
        }"""

NEW_RESIZE_CANVAS = r"""        function resizeCanvas() {
            const container = document.getElementById('memo-container');
            const dpr = window.devicePixelRatio || 1;

            // 現在の描画内容を一時保存
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = canvas.width;
            tempCanvas.height = canvas.height;
            const tempCtx = tempCanvas.getContext('2d');
            if (canvas.width > 0 && canvas.height > 0) {
                tempCtx.drawImage(canvas, 0, 0);
            }

            // コンテナのサイズを取得
            const rect = container.getBoundingClientRect();

            // キャンバスの実サイズをDPIに合わせて設定
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            // CSSサイズはコンテナに合わせる
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;

            // コンテキストのスケールを設定
            // これにより、以後の描画座標（CSSピクセル単位）が自動的にDPIに合わせて拡大される
            ctx.scale(dpr, dpr);

            // 描画内容を復元 (ピクセル等倍で書き戻す)
            if (tempCanvas.width > 0 && tempCanvas.height > 0) {
                ctx.save();
                ctx.resetTransform(); // スケールを一時的に解除
                ctx.drawImage(tempCanvas, 0, 0);
                ctx.restore();
            }
        }"""

NEW_DRAW = r"""        function draw(e) {
            if (!isDrawing) return;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            ctx.lineCap = 'round';
            ctx.lineJoin = 'round'; // 角を丸くする

            if (currentTool === 'pen') {
                ctx.globalCompositeOperation = 'source-over';
                ctx.lineWidth = 4;
                ctx.strokeStyle = currentPenColor;
            } else if (currentTool === 'pen-red') {
                ctx.globalCompositeOperation = 'source-over';
                ctx.lineWidth = 4;
                ctx.strokeStyle = '#ff0000';
            } else if (currentTool === 'eraser') {
                ctx.globalCompositeOperation = 'destination-out';
                ctx.lineWidth = 20;
                ctx.strokeStyle = 'rgba(0,0,0,1)';
            }

            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
        }"""

NEW_CHECK_ANSWER = r"""        async function checkAnswerWithAI() {
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
            // --- 逋ｽ邏吶メ繧ｧ繝・け ---
            const memoPad = document.getElementById('memo-pad');
            if (typeof isCanvasBlank === 'function' && isCanvasBlank(memoPad)) {
                indicator.style.display = 'none';
                playSound('incorrect');

                const feedbackEl = document.getElementById('feedback');

                feedbackEl.className = 'incorrect-feedback';
                feedbackEl.innerHTML = `
                    <div class="ai-banner">🤖AIカガワ先生🤖の解答check✅</div><br>
                    <span style="color: var(--incorrect-color);"><strong>メモが白紙のようです💦</strong></span><br>
                    メモ帳に記述がない場合は分析ができないので，解答はメモ帳に書いてくださいね！<br>
                    <div class="wrong-decision-area">
                        <button class="tool-btn ai-btn wrong-decision-btn" onclick="retryCurrentQuestion()">🔁 もう一度解く</button>
                    </div>
                `;
                feedbackEl.style.display = 'block';
                return;
            }


            const currentQuestion = quizData[currentQuestionIndex];

            try {
                // html2canvas廃止 -> 直接キャンバスから画像を生成
                const imageData = getCanvasImageBase64(1);

                const prompt = `
あなたは高校数学の「誤り診断」に特化した添削者です。
以下の問題に対する生徒の手書き解答（画像）を読み取り，
最終答案の正誤と，途中式の数学的整合性だけを判定してください。

【重要確認事項】
- 画像は手書きの文字です。特に**数字の「0」や「6」「8」「9」などの閉じた数字**を注意深く読み取ってください。
- 少し線が離れていたり、かすれていても、数学的な文脈から数字を推測してください。
- 小さな丸や点も「0」や「小数点」の可能性があります。

問題: ${currentQuestion.question}
正解: ${currentQuestion.answer}
解説(参考): ${currentQuestion.rationale}

【採点者としての前提】
- あなたは「厳密さを重視する高校数学教師」です。
- 生徒を責めるのではなく，短くやさしいコメントで誤りの種類や原因を伝えますが，
  正誤や途中式の判定そのものは甘くしてはいけません。

【途中式チェックの方針（必ず実行する内部手順。出力には書かない）】
- まず，与えられた「正解」と「解説(参考)」を手がかりに，
  その問題の典型的な模範解答の流れを 3〜6 個程度のステップに
  頭の中で整理しなさい（この内容は出力しない）。
- 次に，生徒の解答を上から順に読み，
  行やまとまりごとに「ステップ」とみなして，前後のつながりを確認しなさい。
- 生徒の各ステップが，「解説(参考)」のどのステップに対応しているかを大まかに対応づけ，
  どの段階でズレ・省略・誤りが生じているかを把握しなさい。
- 各ステップについて，必ず次の 3 点をチェックしなさい：
  1. 数学的に正しい式変形・論理になっているか。
  2. 直前のステップから論理的に導かれているか（飛躍がないか）。
  3. 等式・不等式の場合，同値変形になっているか。
- 解説とは別解であっても，数学的に正しく，条件をきちんと使っていれば問題ありません。
  ただし，条件抜けや論理の飛躍があれば誤りとして扱いなさい。
- 途中に 1 箇所でも，次のようなものがあれば，
  最終答案が正しくても hasProcessError を true としなさい：
  - 明らかな計算ミスや変形ミス
  - 同値でない式変形
  - 条件の見落としや論理の飛躍
  - 矛盾した記述
- 誤った式や前提から出発しているのに，
  その後の計算によりたまたま正しい最終結果に到達している場合は，
  「途中に誤りがあるが結果が偶然一致している状態」とみなし，
  isCorrect は最終答案で判定しつつ，必ず hasProcessError を true とし，
  feedback では「途中に誤りがあるのに結果だけ合っている」ことを短く指摘しなさい。

【解説(参考)の使い方】
- 「解説(参考)」はその問題の正しい解法の一例です。
- 途中式チェックでは，この解説の流れを基準にして，
  生徒がどのステップで
  - 解説と違う計算や変形をしているか
  - 必要な説明や変形を省略しているか
  - 別の方針を取っていて，それが正しいかどうか
  を推測しなさい。
- feedbackを書くときは，可能であれば
  「解説の○○にあたる部分で〜をしていない／別の式を書いているようです」
  のように，解説とのズレを意識した一言を含めなさい（ただし字数は守る）。

【最重要ルール】
0. 【最重要】画像にユーザーの手書きが全く見当たらない（白紙）場合は、絶対に「不正解」と判定し、isCorrect: false を返してください。「回答が見当たりません」と指摘してください。
1. 画像に何も書かれていない，または白紙に近い場合は必ず不正解とする。
2. その場合は以下のJSONのみを出力して終了する：
   {"isCorrect": false, "hasProcessError": false, "recognizedAnswer": "", "feedback": "メモ帳に記述がない場合は分析ができないので，解答はメモ帳に書いてくださいね！"}
3. 最終答案が正解と一致している場合のみ isCorrect を true とする。
   - 有理化で同じ，同値変形，積の順序違いなどは正解扱い。
   - 途中式に誤りがあるかどうかは isCorrect ではなく hasProcessError で判定し，
     誤りがあれば必ず hasProcessError を true にすること。
4. 途中式が存在する場合は，必ず全ての途中式の整合性をチェックする。
   - 1 行ごと，または意味のまとまりごとに，「前の行と論理的につながっているか」
     「左辺と右辺が本当に等しいか／同値か」を確認する。
5. 最終答案が正解でも途中式に数学的な誤りや飛躍がある場合，
   hasProcessError を true とし，
   feedback で短く指摘する。
   - 途中に誤った式や不正確な同値変形が 1 回でもあれば，
     「細かいからいいか」と見逃さずに hasProcessError を true にする。
6. 途中式がほぼ無い，または文字がつぶれて読めない場合は，
   hasProcessError を false にしてよいが，
   feedback に「途中式が読み取れないため過程の検証は不十分」と短く書く。
7. 間違いの要因として「計算ミス」だけでなく
   「数式の写し間違い（問題文の式や条件の転記ミス）」も重要な誤りとして扱う。
   - 特に，問題文の式や条件を書き写している最初の数行については，
     符号・係数・指数・不等号の向きなどの違いがないかを優先的にチェックし，
     誤りがあれば「写し間違い」として指摘する。
8. 正誤判定問題（答えが「正しい」「正しくない」の場合）について:
   - 漢字の崩れやひらがな表記（例：「ただしい」）でも意図が明確なら採点する。
   - 「〇」「×」はそれぞれ「正しい」「正しくない」に対応させて採点する。
9. 数式は必ずLaTeX形式（$...$）で記述する。分数は \\\\frac{a}{b} を用いる。
   集合記号（\\\\subset,\\\\subseteq,\\\\supset,\\\\supseteq,\\\\in,\\\\notin,\\\\cup,\\\\cap,\\\\emptyset など）も
   必ず $...$ の中に入れる。
   例：「AはBの部分集合なので $A \\\\subset B$」。
10. JSON出力時、文字列内のバックスラッシュは必ずエスケープして「\\\\」と記述してください。
    （例：「\\\\{」ではなく「\\\\\\\\{」）

【背理法などの証明問題に関する追加ルール】
- 解答が背理法を用いている場合は，次の 4 点を必ず確認しなさい。
  1. 証明したい命題の「否定」を，はっきり仮定しているか。
  2. その仮定のもとで，正しい式変形・論理展開を行っているか。
  3. 仮定と矛盾する内容（大小関係の矛盾，偶奇や整数性の矛盾など）を明確に導いているか。
  4. 「仮定が誤り → 元の命題が成り立つ」という結論を，最後に明示しているか。
- 上のいずれかが欠けている場合は，最終的な結論の文言が正しくても，
  hasProcessError を true とし，論証として不十分であることを feedback で短く指摘しなさい。

【feedbackの書き方（やさしく・原因も意識して短く）】
- 50〜120字程度。
- 指摘は最大2点まで。
- 解説や模範解答の再提示は禁止（解説は別に表示される）。
- できる限り，次の2つをセットで簡潔に書きなさい：
  1. どの行・どの式でどんな誤りがあったか（表面的な誤り）
  2. その背景にありそうな原因の推測（〜かもしれません，もしかして〜など）
- 誤りタイプの例：
  計算ミス／符号ミス／公式の適用条件ミス／同値変形の誤り／論理の飛躍／写し間違い
- 原因が確実に特定できる場合は断定してよいが，
  完全には特定できない場合は，
  「〜かもしれません」「〜の可能性があります」「もしかして〜してしまったかな？」など，
  推測であることが分かるやわらかい表現を用いなさい。
  例：
  - 「2行目で $-3$ を $+3$ としているので符号ミスかもしれません。」
  - 「解説で使っている公式の形をうろ覚えで適用してしまった可能性があります。」
- 不正解の場合は，最も致命的な誤り箇所を優先して指摘し，
  可能であれば「なぜそう書いてしまったか」の推測も一言そえる。
- 正解だが hasProcessError が true の場合は
  「答えは合っていますが，途中式に誤りが見られます。」のように，
  答えは認めつつ過程の問題とその原因の推測を短く指摘する。
- 正解かつ途中式にも問題がない場合のみ，feedback を空文字にする。

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

                const result = parseAIJsonWithRepair(aiText);

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
                        "AIの無料利用回数の上限に達しました。\\n" +
                        "少し時間をおいてから、もう一度お試しください。"
                    );
                } else {
                    alert("採点中にエラーが発生しました。\\n詳細: " + msg);
                }

                indicator.style.display = 'none';
                answerBtn.style.display = 'block';
            }
        }"""

NEW_ANALYZE_ERROR = r"""        async function analyzeError() {
            const modal = document.getElementById('ai-modal');
            const content = document.getElementById('ai-content');
            modal.style.display = 'flex';
            content.innerHTML = '<p>AIカガワ先生が分析中・・・<br><span style="font-size:2em;">🤖💭</span></p>';

            const apiKey = localStorage.getItem('gemini_api_key');
            if (!apiKey) {
                content.innerHTML = `
                    <p>APIキーが設定されていません。</p>
                    <p><a href="index.html" target="_blank">トップページ</a>の「APIキー設定」からキーを保存してください。</p>
                    <button class="tool-btn" onclick="closeAiModal()">閉じる</button>
                `;
                return;
            }

            const currentQuestion = quizData[currentQuestionIndex];

            try {
                // html2canvas廃止 -> 直接キャンバスから画像を生成
                const imageData = getCanvasImageBase64(1);

                const prompt = `
あなたは高校数学の「誤り診断」に特化した添削者です。
以下の問題に対する生徒の手書き解答（画像）を読み取り，
最終答案の正誤と，途中式の数学的整合性だけを判定してください。

【重要確認事項】
- 画像は手書きの文字です。特に**数字の「0」や「6」「8」「9」などの閉じた数字**を注意深く読み取ってください。
- 少し線が離れていたり、かすれていても、数学的な文脈から数字を推測してください。
- 小さな丸や点も「0」や「小数点」の可能性があります。

問題: ${currentQuestion.question}
正解: ${currentQuestion.answer}

【最重要ルール】
0. 【最重要】画像にユーザーの手書きが全く見当たらない（白紙）場合は、絶対に「不正解」と判定し、isCorrect: false を返してください。「回答が見当たりません」と指摘してください。
1. 画像に何も書かれていない，または白紙に近い場合は必ず不正解とする。
2. その場合は以下のJSONのみを出力して終了する：
   {"isCorrect": false, "hasProcessError": false, "recognizedAnswer": "", "feedback": "メモ帳に記述がない場合は分析ができないので，解答はメモ帳に書いてくださいね！"}
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
9. 数式は必ずLaTeX形式（$...$）で記述する。分数は \\\\frac{a}{b} を用いる。
   集合記号（\\\\subset,\\\\subseteq,\\\\supset,\\\\supseteq,\\\\in,\\\\notin,\\\\cup,\\\\cap,\\\\emptyset など）も
   必ず $...$ の中に入れる。
   例：「AはBの部分集合なので $A \\\\subset B$」。
10. JSON出力時、文字列内のバックスラッシュは必ずエスケープして「\\\\」と記述してください。（例：「\\\\{」ではなく「\\\\\\\\{」）

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


                // ユーザーの環境で利用可能な gemini-2.0-flash を使用 (v1beta)
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
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
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`API Error: ${response.status} - ${errorText}`);
                }

                const data = await response.json();

                // レスポンス構造のチェック
                if (!data.candidates || data.candidates.length === 0 || !data.candidates[0].content) {
                    throw new Error("No candidates returned from API");
                }

                const aiText = data.candidates[0].content.parts[0].text;

                content.innerHTML = `
                    <h4>🤖 AIカガワ先生からのアドバイス</h4>
                    <p>${aiText.replace(/\\n/g, '<br>')}</p>
                    <button class="tool-btn" onclick="closeAiModal()">閉じる</button>
                `;

                // KaTeXレンダリングを適用
                renderAllMath();

            } catch (error) {
                console.error(error);
                let errorMsg = "不明なエラーが発生しました。";
                if (error.message.includes("404")) {
                    errorMsg = "モデルが見つかりません (404)。APIキーまたはモデル名を確認してください。";
                } else if (error.message.includes("400")) {
                    errorMsg = "リクエストが不正です (400)。APIキーが無効な可能性があります。";
                } else if (error.message.includes("403")) {
                    errorMsg = "アクセス権限がありません (403)。APIキーを確認してください。";
                } else if (error.message.includes("429")) {
                    errorMsg = "リクエスト回数制限を超えました (429)。しばらく待ってから再試行してください。";
                } else {
                    errorMsg = error.message;
                }

                content.innerHTML = `
                    <p>分析中にエラーが発生しました。</p>
                    <p style="color:red; font-size:0.9em;">${errorMsg}</p>
                    <p>詳細: <span style="font-size:0.8em; color:#666;">${error.message}</span></p>
                    <button class="tool-btn" onclick="closeAiModal()">閉じる</button>
                `;
            }
        }"""


def replace_function(content, func_name, new_code):
    lines = content.split('\n')
    
    # 0. Helper Function Insertion:
    insert_prefix = ""
    if func_name == "checkAnswerWithAI":
         if "function getCanvasImageBase64" not in content:
             insert_prefix = NEW_GET_CANVAS_IMAGE + "\n\n"
             
    # 1. Find start line index
    start_line_idx = -1
    pattern = r"^\s*(async )?function " + func_name + r"\s*\("
    
    for i, line in enumerate(lines):
        if re.search(pattern, line):
            start_line_idx = i
            break
            
    if start_line_idx == -1:
        print(f"Warning: Function {func_name} not found.")
        return content

    # 2. Determine indentation of the start line
    start_line = lines[start_line_idx]
    # Count leading spaces
    indentation = ""
    match_indent = re.match(r"^(\s*)", start_line)
    if match_indent:
        indentation = match_indent.group(1)
        
    expected_end_line = indentation + "}"
    
    # 3. Scan forward for the matching closing brace at same indentation
    end_line_idx = -1
    for i in range(start_line_idx + 1, len(lines)):
        line = lines[i]
        # Check if line matches exactly "        }" (with potential whitespace after, though unlikely)
        if line.rstrip() == expected_end_line.rstrip():
            end_line_idx = i
            break
            
    if end_line_idx != -1:
        # Before returning, checking if we need to insert prefix (helper function)
        # Replacing lines from start_line_idx to end_line_idx inclusive
        
        # Split new_code into lines to preserve line endings usually, 
        # but here we can just join the suffix and prefix
        
        prefix = "\n".join(lines[:start_line_idx])
        suffix = "\n".join(lines[end_line_idx+1:])
        
        # If we are inserting a helper, we put it before the function
        replacement = insert_prefix + new_code
        
        return prefix + "\n" + replacement + "\n" + suffix
    else:
        print(f"Error: Could not find closing brace for {func_name} (Indentation: {len(indentation)} spaces)")
        return content

def main():
    files = glob.glob(os.path.join(TARGET_DIR, "M1-*.html"))
    count = 0
    
    for file_path in files:
        # Optional: Skip M1-3-3-10.html if you want to preserve it as is, 
        # but replacing it with itself (or the "golden" version) is also fine.
        # if "M1-3-3-10.html" in file_path:
        #     continue
            
        print(f"Processing {os.path.basename(file_path)}...")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Apply replacements
            content = replace_function(content, "initCanvas", NEW_INIT_CANVAS)
            content = replace_function(content, "resizeCanvas", NEW_RESIZE_CANVAS)
            content = replace_function(content, "draw", NEW_DRAW)
            content = replace_function(content, "checkAnswerWithAI", NEW_CHECK_ANSWER)
            content = replace_function(content, "analyzeError", NEW_ANALYZE_ERROR)
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                count += 1
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

    print(f"Update complete. Modified {count} files.")

if __name__ == "__main__":
    main()
