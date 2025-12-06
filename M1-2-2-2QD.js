const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7713/63186' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- レベル1: 基本的な等式・不等式の否定 (1-10) ---
    // 問題 1
    {
        question: "次の条件の否定を述べよ。<br>$x = 3$",
        options: ["$x < 3$", "$x \\neq 3$", "$x > 3$", "$x = -3$"],
        answer: "$x \\neq 3$",
        rationale: "<strong>正解: $x \\neq 3$</strong><br><strong>解説: </strong>等号「$=$」の否定は、等号否定「$\\neq$」です。<br>「$x$ は $3$ に等しい」の否定は「$x$ は $3$ に等しくない」となります。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "次の条件の否定を述べよ。<br>$x \\neq -2$",
        options: ["$x = -2$", "$x > -2$", "$x < -2$", "$x = 2$"],
        answer: "$x = -2$",
        rationale: "<strong>正解: $x = -2$</strong><br><strong>解説: </strong>「〜でない（$\\neq$）」の否定は、元の「〜である（$=$）」に戻ります。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "次の条件の否定を述べよ。<br>$x > 5$",
        options: ["$x < 5$", "$x \\leqq 5$", "$x \\geqq 5$", "$x = 5$"],
        answer: "$x \\leqq 5$",
        rationale: "<strong>正解: $x \\leqq 5$</strong><br><strong>解説: </strong>不等号「$>$」の否定は、向きを逆にして等号をつけた「$\\leqq$」になります。<br>数直線で考えると、「$5$ より大きい」範囲に含まれないのは「$5$ 以下（$5$ を含む）」の範囲です。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "次の条件の否定を述べよ。<br>$x < -1$",
        options: ["$x > -1$", "$x \\geqq -1$", "$x \\leqq -1$", "$x = -1$"],
        answer: "$x \\geqq -1$",
        rationale: "<strong>正解: $x \\geqq -1$</strong><br><strong>解説: </strong>「$<$」の否定は「$\\geqq$」です。<br>境界値を含まない不等式の否定は、境界値を含む形になります。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "次の条件の否定を述べよ。<br>$x \\geqq 0$",
        options: ["$x \\leqq 0$", "$x < 0$", "$x > 0$", "$x \\neq 0$"],
        answer: "$x < 0$",
        rationale: "<strong>正解: $x < 0$</strong><br><strong>解説: </strong>「$\\geqq$（以上）」の否定は「$<$（より小さい/未満）」です。<br>等号がついている不等式の否定には、等号はつきません。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "次の条件の否定を述べよ。<br>$x \\leqq 10$",
        options: ["$x \\geqq 10$", "$x > 10$", "$x < 10$", "$x \\neq 10$"],
        answer: "$x > 10$",
        rationale: "<strong>正解: $x > 10$</strong><br><strong>解説: </strong>「$\\leqq$（以下）」の否定は「$>$（より大きい）」です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "次の条件の否定を述べよ。<br>$n$ は偶数である",
        options: ["$n$ は奇数である", "$n$ は素数である", "$n$ は3の倍数である", "$n$ は負の数である"],
        answer: "$n$ は奇数である",
        rationale: "<strong>正解: $n$ は奇数である</strong><br><strong>解説: </strong>整数において、偶数でない数は奇数です。<br>したがって、否定は「$n$ は奇数である」となります。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "次の条件の否定を述べよ。<br>$n$ は3の倍数である",
        options: ["$n$ は3の倍数でない", "$n$ は3の倍数かつ奇数", "$n$ は3で割ると1余る", "$n$ は偶数である"],
        answer: "$n$ は3の倍数でない",
        rationale: "<strong>正解: $n$ は3の倍数でない</strong><br><strong>解説: </strong>単純に「〜である」の否定は「〜でない」となります。<br>（具体的には「3で割った余りが1または2」という意味になります）" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "次の条件の否定を述べよ。<br>$x + y = 0$",
        options: ["$x + y > 0$", "$x + y < 0$", "$x + y \\neq 0$", "$x = 0$ かつ $y = 0$"],
        answer: "$x + y \\neq 0$",
        rationale: "<strong>正解: $x + y \\neq 0$</strong><br><strong>解説: </strong>式の値に関する条件であっても、等式なら否定は $\\neq$ になります。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "次の条件の否定を述べよ。<br>$x$ は有理数である",
        options: ["$x$ は整数である", "$x$ は無理数である", "$x$ は自然数である", "$x$ は実数である"],
        answer: "$x$ は無理数である",
        rationale: "<strong>正解: $x$ は無理数である</strong><br><strong>解説: </strong>実数において、有理数でない数は無理数と定義されます。" + VIDEO_LINK
    },

    // --- レベル2: 「かつ」「または」の否定 (11-20) ---
    // 問題 11
    {
        question: "次の条件の否定を述べよ。<br>$x > 0$ かつ $y > 0$",
        options: ["$x \\leqq 0$ かつ $y \\leqq 0$", "$x \\leqq 0$ または $y \\leqq 0$", "$x < 0$ または $y < 0$", "$x > 0$ または $y > 0$"],
        answer: "$x \\leqq 0$ または $y \\leqq 0$",
        rationale: "<strong>正解: $x \\leqq 0$ または $y \\leqq 0$</strong><br><strong>解説: </strong>ド・モルガンの法則により、「A かつ B」の否定は「(Aでない) または (Bでない)」になります。<br>$x > 0$ の否定は $x \\leqq 0$、$y > 0$ の否定は $y \\leqq 0$ なので、これらを「または」で結びます。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "次の条件の否定を述べよ。<br>$x = 0$ または $y = 0$",
        options: ["$x \\neq 0$ または $y \\neq 0$", "$x \\neq 0$ かつ $y \\neq 0$", "$x = 0$ かつ $y = 0$", "$x \\neq 0$"],
        answer: "$x \\neq 0$ かつ $y \\neq 0$",
        rationale: "<strong>正解: $x \\neq 0$ かつ $y \\neq 0$</strong><br><strong>解説: </strong>「A または B」の否定は「(Aでない) かつ (Bでない)」です。<br>「または」が「かつ」に変わる点に注意しましょう。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "次の条件の否定を述べよ。<br>$1 < x < 3$",
        options: ["$x \\leqq 1$ または $x \\geqq 3$", "$1 \\leqq x \\leqq 3$", "$x < 1$ または $x > 3$", "$x \\leqq 1$ かつ $x \\geqq 3$"],
        answer: "$x \\leqq 1$ または $x \\geqq 3$",
        rationale: "<strong>正解: $x \\leqq 1$ または $x \\geqq 3$</strong><br><strong>解説: </strong>$1 < x < 3$ は「$x > 1$ かつ $x < 3$」という意味です。<br>否定をとると「$x \\leqq 1$ または $x \\geqq 3$」となります。<br>（数直線の内側・外側の関係をイメージすると分かりやすいです）" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "次の条件の否定を述べよ。<br>$x \\leqq -1$ または $x \\geqq 2$",
        options: ["$-1 < x < 2$", "$-1 \\leqq x \\leqq 2$", "$x > -1$ または $x < 2$", "$x \\geqq -1$ かつ $x \\leqq 2$"],
        answer: "$-1 < x < 2$",
        rationale: "<strong>正解: $-1 < x < 2$</strong><br><strong>解説: </strong>「または」の条件の否定なので、「かつ」になります。<br>$x > -1$ かつ $x < 2$ となるため、まとめて $-1 < x < 2$ と表せます。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "次の条件の否定を述べよ。<br>$a = 0$ かつ $b \\neq 0$",
        options: ["$a \\neq 0$ かつ $b = 0$", "$a \\neq 0$ または $b = 0$", "$a = 0$ または $b \\neq 0$", "$a \\neq 0$ かつ $b \\neq 0$"],
        answer: "$a \\neq 0$ または $b = 0$",
        rationale: "<strong>正解: $a \\neq 0$ または $b = 0$</strong><br><strong>解説: </strong>それぞれの条件を否定し、「かつ」を「または」に変えます。<br>$a=0 \\to a \\neq 0$、$b \\neq 0 \\to b=0$、接続詞は「または」になります。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "次の条件の否定を述べよ。<br>$x > 0$ または $y < 0$",
        options: ["$x \\leqq 0$ かつ $y \\geqq 0$", "$x < 0$ かつ $y > 0$", "$x \\leqq 0$ または $y \\geqq 0$", "$x \\geqq 0$ または $y \\leqq 0$"],
        answer: "$x \\leqq 0$ かつ $y \\geqq 0$",
        rationale: "<strong>正解: $x \\leqq 0$ かつ $y \\geqq 0$</strong><br><strong>解説: </strong>「または」の否定なので「かつ」になります。<br>不等号の向きと等号の有無に注意して否定を作ります。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "次の条件の否定を述べよ。<br>$x = 1$ かつ $y = 2$",
        options: ["$x \\neq 1$ かつ $y \\neq 2$", "$x \\neq 1$ または $y \\neq 2$", "$x = 1$ または $y = 2$", "$x = 1$ かつ $y \\neq 2$"],
        answer: "$x \\neq 1$ または $y \\neq 2$",
        rationale: "<strong>正解: $x \\neq 1$ または $y \\neq 2$</strong><br><strong>解説: </strong>「両方とも〜である」の否定は「少なくとも一方は〜でない（または）」になります。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "次の条件の否定を述べよ。<br>$n$ は偶数または3の倍数",
        options: ["$n$ は奇数かつ3の倍数でない", "$n$ は奇数または3の倍数でない", "$n$ は偶数かつ3の倍数", "$n$ は奇数である"],
        answer: "$n$ は奇数かつ3の倍数でない",
        rationale: "<strong>正解: $n$ は奇数かつ3の倍数でない</strong><br><strong>解説: </strong>「偶数」の否定は「奇数」、「3の倍数」の否定は「3の倍数でない」、「または」の否定は「かつ」です。<br>すべてを組み合わせます。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "次の条件の否定を述べよ。<br>$a > b$ かつ $b > c$",
        options: ["$a \\leqq b$ かつ $b \\leqq c$", "$a \\leqq b$ または $b \\leqq c$", "$a < b$ または $b < c$", "$a > b$ または $b > c$"],
        answer: "$a \\leqq b$ または $b \\leqq c$",
        rationale: "<strong>正解: $a \\leqq b$ または $b \\leqq c$</strong><br><strong>解説: </strong>連立不等式の否定です。接続詞が「かつ」から「または」に変わる点に注意してください。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "次の条件の否定を述べよ。<br>$x \\neq 0$ または $y \\neq 0$",
        options: ["$x = 0$ かつ $y = 0$", "$x = 0$ または $y = 0$", "$x \\neq 0$ かつ $y \\neq 0$", "$x = 0$"],
        answer: "$x = 0$ かつ $y = 0$",
        rationale: "<strong>正解: $x = 0$ かつ $y = 0$</strong><br><strong>解説: </strong>「少なくとも一方は0でない」の否定は「両方とも0である」となります。" + VIDEO_LINK
    },

    // --- レベル3: 文章表現（ともに、少なくとも一方）の否定 (21-30) ---
    // 問題 21
    {
        question: "次の条件の否定を述べよ。<br>$x, y$ はともに正",
        options: ["$x, y$ はともに負", "$x, y$ の少なくとも一方は0以下", "$x, y$ はともに0以下", "$x, y$ の少なくとも一方は負"],
        answer: "$x, y$ の少なくとも一方は0以下",
        rationale: "<strong>正解: $x, y$ の少なくとも一方は0以下</strong><br><strong>解説: </strong>「ともにA」の否定は「少なくとも一方はAでない」です。<br>「正（$>0$）」の否定は「0以下（$\\leqq 0$）」なので、「少なくとも一方は0以下」となります。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "次の条件の否定を述べよ。<br>$x, y$ の少なくとも一方は0",
        options: ["$x, y$ はともに0", "$x, y$ はともに0でない", "$x, y$ の少なくとも一方は0でない", "$x=0$ かつ $y \\neq 0$"],
        answer: "$x, y$ はともに0でない",
        rationale: "<strong>正解: $x, y$ はともに0でない</strong><br><strong>解説: </strong>「少なくとも一方はA」の否定は「ともにAでない」です。<br>これはド・モルガンの法則（$x=0$ または $y=0$ の否定 $\\to x \\neq 0$ かつ $y \\neq 0$）と同じことです。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "次の条件の否定を述べよ。<br>$m, n$ はともに奇数",
        options: ["$m, n$ はともに偶数", "$m, n$ の少なくとも一方は偶数", "$m$ は奇数，$n$ は偶数", "$m, n$ の少なくとも一方は奇数"],
        answer: "$m, n$ の少なくとも一方は偶数",
        rationale: "<strong>正解: $m, n$ の少なくとも一方は偶数</strong><br><strong>解説: </strong>「ともに〜」の否定は「少なくとも一方は〜でない」です。<br>奇数でない＝偶数なので、「少なくとも一方は偶数」となります。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "次の条件の否定を述べよ。<br>$a, b$ の少なくとも一方は無理数",
        options: ["$a, b$ はともに有理数", "$a, b$ はともに無理数", "$a, b$ の少なくとも一方は有理数", "$a$ は有理数"],
        answer: "$a, b$ はともに有理数",
        rationale: "<strong>正解: $a, b$ はともに有理数</strong><br><strong>解説: </strong>「少なくとも一方」の否定は「両方とも〜でない」です。<br>無理数でない＝有理数なので、「ともに有理数」となります。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "次の条件の否定を述べよ。<br>$x, y$ はともに有理数",
        options: ["$x, y$ はともに無理数", "$x, y$ の少なくとも一方は無理数", "$x, y$ の少なくとも一方は有理数", "$x$ は無理数"],
        answer: "$x, y$ の少なくとも一方は無理数",
        rationale: "<strong>正解: $x, y$ の少なくとも一方は無理数</strong><br><strong>解説: </strong>「ともに〜」の否定は「少なくとも一方は〜でない」です。<br>有理数でない＝無理数なので、「少なくとも一方は無理数」が正解です。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "次の条件の否定を述べよ。<br>$x, y, z$ はすべて正",
        options: ["$x, y, z$ はすべて0以下", "$x, y, z$ の少なくとも1つは0以下", "$x, y, z$ のうち2つは0以下", "$x, y, z$ はすべて負"],
        answer: "$x, y, z$ の少なくとも1つは0以下",
        rationale: "<strong>正解: $x, y, z$ の少なくとも1つは0以下</strong><br><strong>解説: </strong>3つの場合でも同様です。「すべてA」の否定は「少なくとも1つはAでない」となります。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "次の条件の否定を述べよ。<br>$x, y, z$ の少なくとも1つは0",
        options: ["$x, y, z$ はすべて0", "$x, y, z$ はすべて0でない", "$x, y, z$ の少なくとも1つは0でない", "$x=0$"],
        answer: "$x, y, z$ はすべて0でない",
        rationale: "<strong>正解: $x, y, z$ はすべて0でない</strong><br><strong>解説: </strong>「少なくとも1つ〜」の否定は「すべて〜でない」です。<br>（$x \\neq 0$ かつ $y \\neq 0$ かつ $z \\neq 0$）" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "次の条件の否定を述べよ。<br>$m, n$ はともに3の倍数",
        options: ["$m, n$ はともに3の倍数でない", "$m, n$ の少なくとも一方は3の倍数でない", "$m, n$ の少なくとも一方は3の倍数", "$m$ は3の倍数でない"],
        answer: "$m, n$ の少なくとも一方は3の倍数でない",
        rationale: "<strong>正解: $m, n$ の少なくとも一方は3の倍数でない</strong><br><strong>解説: </strong>「ともに〜」の否定は「少なくとも一方は〜でない」です。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "次の条件の否定を述べよ。<br>$x$ は正かつ $y$ は負",
        options: ["$x$ は負または $y$ は正", "$x$ は0以下または $y$ は0以上", "$x$ は正かつ $y$ は負でない", "$x$ は0以下かつ $y$ は0以上"],
        answer: "$x$ は0以下または $y$ は0以上",
        rationale: "<strong>正解: $x$ は0以下または $y$ は0以上</strong><br><strong>解説: </strong>「A かつ B」の否定は「(Aでない) または (Bでない)」です。<br>正の否定は0以下、負の否定は0以上です。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "次の条件の否定を述べよ。<br>$x = 0$ または $y = 0$",
        options: ["$x \\neq 0$ または $y \\neq 0$", "$x \\neq 0$ かつ $y \\neq 0$", "$x = 0$ かつ $y = 0$", "$xy \\neq 0$"],
        answer: "$x \\neq 0$ かつ $y \\neq 0$",
        rationale: "<strong>正解: $x \\neq 0$ かつ $y \\neq 0$</strong><br><strong>解説: </strong>これは「$xy = 0$」という条件と同値です。<br>その否定は「$x$ も $y$ も0でない」、すなわち「$xy \\neq 0$」となります。" + VIDEO_LINK
    },

    // --- レベル4: 命題の否定（すべての、ある） (31-40) ---
    // 問題 31
    {
        question: "次の命題の否定を述べよ。<br>すべての実数 $x$ について $x^2 \\geqq 0$",
        options: ["すべての実数 $x$ について $x^2 < 0$", "ある実数 $x$ について $x^2 < 0$", "ある実数 $x$ について $x^2 \\geqq 0$", "すべての実数 $x$ について $x^2 \\leqq 0$"],
        answer: "ある実数 $x$ について $x^2 < 0$",
        rationale: "<strong>正解: ある実数 $x$ について $x^2 < 0$</strong><br><strong>解説: </strong>「すべての $x$ について $p$」の否定は「ある $x$ について $\\bar{p}$」です。<br>条件 $x^2 \\geqq 0$ の否定は $x^2 < 0$ となります。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "次の命題の否定を述べよ。<br>ある実数 $x$ について $x^2 = -1$",
        options: ["すべての実数 $x$ について $x^2 = -1$", "すべての実数 $x$ について $x^2 \\neq -1$", "ある実数 $x$ について $x^2 \\neq -1$", "すべての実数 $x$ について $x^2 > -1$"],
        answer: "すべての実数 $x$ について $x^2 \\neq -1$",
        rationale: "<strong>正解: すべての実数 $x$ について $x^2 \\neq -1$</strong><br><strong>解説: </strong>「ある $x$ について $p$」の否定は「すべての $x$ について $\\bar{p}$」です。<br>「存在する」ことの否定は「ひとつも存在しない（＝すべて〜でない）」となります。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "次の命題の否定を述べよ。<br>すべての自然数 $n$ について $n$ は奇数である",
        options: ["すべての自然数 $n$ について $n$ は偶数である", "ある自然数 $n$ について $n$ は偶数である", "ある自然数 $n$ について $n$ は奇数である", "すべての自然数 $n$ について $n$ は素数である"],
        answer: "ある自然数 $n$ について $n$ は偶数である",
        rationale: "<strong>正解: ある自然数 $n$ について $n$ は偶数である</strong><br><strong>解説: </strong>「すべて」$\to$「ある」、「奇数」$\to$「偶数（奇数でない）」と変換します。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "次の命題の否定を述べよ。<br>ある有理数 $q$ について $q^2 = 2$",
        options: ["すべての有理数 $q$ について $q^2 \\neq 2$", "すべての有理数 $q$ について $q^2 = 2$", "ある有理数 $q$ について $q^2 \\neq 2$", "すべての実数 $q$ について $q^2 \\neq 2$"],
        answer: "すべての有理数 $q$ について $q^2 \\neq 2$",
        rationale: "<strong>正解: すべての有理数 $q$ について $q^2 \\neq 2$</strong><br><strong>解説: </strong>「ある〜」の否定は「すべての〜について...ない」です。<br>条件 $q^2=2$ の否定 $q^2 \\neq 2$ を「すべての有理数」に対して主張します。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "次の命題の否定を述べよ。<br>すべての $x > 0$ について $x + \\frac{1}{x} \\geqq 2$",
        options: ["すべての $x > 0$ について $x + \\frac{1}{x} < 2$", "ある $x > 0$ について $x + \\frac{1}{x} < 2$", "ある $x > 0$ について $x + \\frac{1}{x} \\geqq 2$", "ある $x \\leqq 0$ について $x + \\frac{1}{x} < 2$"],
        answer: "ある $x > 0$ について $x + \\frac{1}{x} < 2$",
        rationale: "<strong>正解: ある $x > 0$ について $x + \\frac{1}{x} < 2$</strong><br><strong>解説: </strong>前提条件（$x>0$）はそのままで、結論部分の否定を作ります。<br>「すべて」は「ある」に変わり、不等式 $\\geqq$ は $<$ に変わります。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "次の命題の否定を述べよ。<br>ある整数 $n$ について $n^2$ は奇数",
        options: ["すべての整数 $n$ について $n^2$ は奇数", "すべての整数 $n$ について $n^2$ は偶数", "ある整数 $n$ について $n^2$ は偶数", "すべての整数 $n$ について $n$ は偶数"],
        answer: "すべての整数 $n$ について $n^2$ は偶数",
        rationale: "<strong>正解: すべての整数 $n$ について $n^2$ は偶数</strong><br><strong>解説: </strong>「ある」の否定 $\to$ 「すべて」、「奇数」の否定 $\to$ 「偶数」です。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "次の命題の否定を述べよ。<br>すべての三角形において内角の和は180度である",
        options: ["すべての三角形において内角の和は180度でない", "ある三角形において内角の和は180度でない", "ある三角形において内角の和は180度である", "すべての多角形において内角の和は180度でない"],
        answer: "ある三角形において内角の和は180度でない",
        rationale: "<strong>正解: ある三角形において内角の和は180度でない</strong><br><strong>解説: </strong>全称命題（すべて〜）の否定は、特称命題（ある〜、反例が存在する）になります。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "次の命題の否定を述べよ。<br>ある素数は偶数である",
        options: ["すべての素数は偶数である", "すべての素数は奇数である", "ある素数は奇数である", "すべての数は奇数である"],
        answer: "すべての素数は奇数である",
        rationale: "<strong>正解: すべての素数は奇数である</strong><br><strong>解説: </strong>「ある素数は偶数である」の否定は、「すべての素数は偶数でない（つまり奇数）」となります。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "次の命題の否定を述べよ。<br>すべての実数 $x$ について $x^2 > x$",
        options: ["ある実数 $x$ について $x^2 \\leqq x$", "すべての実数 $x$ について $x^2 \\leqq x$", "ある実数 $x$ について $x^2 > x$", "すべての実数 $x$ について $x^2 < x$"],
        answer: "ある実数 $x$ について $x^2 \\leqq x$",
        rationale: "<strong>正解: ある実数 $x$ について $x^2 \\leqq x$</strong><br><strong>解説: </strong>「すべて」$\to$「ある」、「$>$」$\to$「$\\leqq$」と変換します。<br>（実際、元の命題は偽であり、否定である「$0 \\leqq x \\leqq 1$ などの $x$ が存在する」が真となります）" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "次の命題の否定を述べよ。<br>ある実数 $x$ について $x^2 + 1 = 0$",
        options: ["すべての実数 $x$ について $x^2 + 1 \\neq 0$", "すべての実数 $x$ について $x^2 + 1 = 0$", "ある実数 $x$ について $x^2 + 1 \\neq 0$", "すべての実数 $x$ について $x^2 + 1 < 0$"],
        answer: "すべての実数 $x$ について $x^2 + 1 \\neq 0$",
        rationale: "<strong>正解: すべての実数 $x$ について $x^2 + 1 \\neq 0$</strong><br><strong>解説: </strong>存在命題（解がある）の否定は、「解はひとつもない（すべて〜でない）」となります。" + VIDEO_LINK
    },

    // --- レベル5: 複合問題・複雑な条件 (41-50) ---
    // 問題 41
    {
        question: "次の条件の否定を述べよ。<br>$x = 0$ かつ ($y = 0$ または $z = 0$)",
        options: ["$x \\neq 0$ または ($y \\neq 0$ かつ $z \\neq 0$)", "$x \\neq 0$ かつ ($y \\neq 0$ または $z \\neq 0$)", "$x \\neq 0$ または ($y \\neq 0$ または $z \\neq 0$)", "$x = 0$ または $y \\neq 0$"],
        answer: "$x \\neq 0$ または ($y \\neq 0$ かつ $z \\neq 0$)",
        rationale: "<strong>正解: $x \\neq 0$ または ($y \\neq 0$ かつ $z \\neq 0$)</strong><br><strong>解説: </strong>全体が「A かつ B」の形です。否定は「(not A) または (not B)」になります。<br>Bの部分は「または」なので、その否定は「かつ」になります。<br>よって「$x \\neq 0$ または ($y \\neq 0$ かつ $z \\neq 0$)」となります。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "次の条件の否定を述べよ。<br>($x > 0$ または $y > 0$) かつ $z > 0$",
        options: ["($x \\leqq 0$ かつ $y \\leqq 0$) または $z \\leqq 0$", "($x \\leqq 0$ または $y \\leqq 0$) かつ $z \\leqq 0$", "$x \\leqq 0$ かつ $y \\leqq 0$ かつ $z \\leqq 0$", "$x > 0$ または $y > 0$ または $z > 0$"],
        answer: "($x \\leqq 0$ かつ $y \\leqq 0$) または $z \\leqq 0$",
        rationale: "<strong>正解: ($x \\leqq 0$ かつ $y \\leqq 0$) または $z \\leqq 0$</strong><br><strong>解説: </strong>全体の「かつ」を「または」に変え、各部分を否定します。<br>前半のカッコ内「または」は「かつ」に変わり、不等号もすべて逆転します。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "次の条件の否定を述べよ。<br>$x \\neq 0$ かつ $y \\neq 0$ かつ $z \\neq 0$",
        options: ["$x = 0$ または $y = 0$ または $z = 0$", "$x = 0$ かつ $y = 0$ かつ $z = 0$", "$x, y, z$ はすべて0", "$x, y, z$ の少なくとも2つは0"],
        answer: "$x = 0$ または $y = 0$ または $z = 0$",
        rationale: "<strong>正解: $x = 0$ または $y = 0$ または $z = 0$</strong><br><strong>解説: </strong>元の条件は「すべて0でない」です。<br>その否定は「少なくとも1つは0である」となり、これと同値なのは「$x=0$ または $y=0$ または $z=0$」です。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "次の条件の否定を述べよ。<br>$x, y, z$ の少なくとも1つは0でない",
        options: ["$x, y, z$ はすべて0", "$x, y, z$ はすべて0でない", "$x, y, z$ の少なくとも1つは0", "$x=0$"],
        answer: "$x, y, z$ はすべて0",
        rationale: "<strong>正解: $x, y, z$ はすべて0</strong><br><strong>解説: </strong>「少なくとも1つ〜」の否定は「すべて〜でない」です。<br>「0でない」の否定は「0」なので、「すべて0」となります。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "次の条件の否定を述べよ。<br>$m$ は偶数 または $n$ は奇数",
        options: ["$m$ は奇数 かつ $n$ は偶数", "$m$ は奇数 または $n$ は偶数", "$m$ は偶数 かつ $n$ は奇数", "$m$ は偶数 または $n$ は奇数"],
        answer: "$m$ は奇数 かつ $n$ は偶数",
        rationale: "<strong>正解: $m$ は奇数 かつ $n$ は偶数</strong><br><strong>解説: </strong>「または」→「かつ」、それぞれの性質を反転させます。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "次の条件の否定を述べよ。<br>$x^2 + y^2 = 0$",
        options: ["$x^2 + y^2 \\neq 0$", "$x \\neq 0$ または $y \\neq 0$", "$x \\neq 0$ かつ $y \\neq 0$", "ともに正解"],
        answer: "ともに正解",
        rationale: "<strong>正解: ともに正解</strong><br><strong>解説: </strong>$x, y$ が実数のとき、$x^2 + y^2 = 0$ は「$x=0$ かつ $y=0$」と同値です。<br>その否定は「$x \\neq 0$ または $y \\neq 0$」であり、これは「$x^2 + y^2 \\neq 0$」とも表現できます。<br>（選択肢に「ともに正解」がある場合、式の否定も成分の否定も正しいです。通常は成分条件の否定「$x \\neq 0$ または $y \\neq 0$」を答えることが多いです）" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "次の条件の否定を述べよ。<br>$x$ は有理数 または $y$ は有理数",
        options: ["$x$ は無理数 かつ $y$ は無理数", "$x$ は無理数 または $y$ は無理数", "$x, y$ はともに有理数", "$x$ は有理数 かつ $y$ は無理数"],
        answer: "$x$ は無理数 かつ $y$ は無理数",
        rationale: "<strong>正解: $x$ は無理数 かつ $y$ は無理数</strong><br><strong>解説: </strong>「または」の否定は「かつ」です。有理数の否定は無理数です。<br>よって「$x, y$ はともに無理数」となります。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "次の条件の否定を述べよ。<br>$x, y$ はともに0ではない",
        options: ["$x=0$ または $y=0$", "$x=0$ かつ $y=0$", "$x, y$ の少なくとも一方は0ではない", "$xy \\neq 0$"],
        answer: "$x=0$ または $y=0$",
        rationale: "<strong>正解: $x=0$ または $y=0$</strong><br><strong>解説: </strong>「ともに〜でない」の否定は「少なくとも一方は〜である」です。<br>（$xy \\neq 0$ の否定は $xy = 0$）" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "次の命題の否定を述べよ。<br>すべての $x > 0$ について、$x^2 > 0$ である",
        options: ["ある $x > 0$ について、$x^2 \\leqq 0$ である", "すべての $x > 0$ について、$x^2 \\leqq 0$ である", "ある $x \\leqq 0$ について、$x^2 > 0$ である", "ある $x > 0$ について、$x^2 > 0$ である"],
        answer: "ある $x > 0$ について、$x^2 \\leqq 0$ である",
        rationale: "<strong>正解: ある $x > 0$ について、$x^2 \\leqq 0$ である</strong><br><strong>解説: </strong>「すべてのAについてB」の否定は「BでないAが存在する（あるAについてBでない）」です。<br>前提（$x>0$）は変えず、結論の否定を作ります。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "次の命題の否定を述べよ。<br>ある実数 $x$ について、$x^2 = x$ かつ $x \\neq 1$",
        options: ["すべての実数 $x$ について、$x^2 \\neq x$ または $x = 1$", "すべての実数 $x$ について、$x^2 = x$ かつ $x = 1$", "ある実数 $x$ について、$x^2 \\neq x$ または $x = 1$", "すべての実数 $x$ について、$x^2 \\neq x$"],
        answer: "すべての実数 $x$ について、$x^2 \\neq x$ または $x = 1$",
        rationale: "<strong>正解: すべての実数 $x$ について、$x^2 \\neq x$ または $x = 1$</strong><br><strong>解説: </strong>「ある」の否定は「すべて」。「かつ」の否定は「または」です。<br>条件全体をド・モルガンの法則で反転させます。" + VIDEO_LINK
    }
];