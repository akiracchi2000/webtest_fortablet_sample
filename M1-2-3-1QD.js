const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7714/63191' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- レベル1: 定義の確認・文章の作成 (1-15) ---
    // 問題 1
    {
        question: "次の命題の【逆】を答えよ。<br>命題：$x = 2$ ならば $x^2 = 4$ である。",
        options: ["$x^2 = 4$ ならば $x = 2$ である", "$x \\neq 2$ ならば $x^2 \\neq 4$ である", "$x^2 \\neq 4$ ならば $x \\neq 2$ である", "$x = 2$ ならば $x^2 = 4$ である"],
        answer: "$x^2 = 4$ ならば $x = 2$ である",
        rationale: "<strong>解説: </strong><br>命題「$p \\implies q$」の【逆】は、「$q \\implies p$」です。<br>ここでは $p: x=2$、$q: x^2=4$ なので、入れ替えた「$x^2=4$ ならば $x=2$」が逆になります。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "次の命題の【裏】を答えよ。<br>命題：$x = 2$ ならば $x^2 = 4$ である。",
        options: ["$x^2 = 4$ ならば $x = 2$ である", "$x \\neq 2$ ならば $x^2 \\neq 4$ である", "$x^2 \\neq 4$ ならば $x \\neq 2$ である", "$x = -2$ ならば $x^2 = 4$ である"],
        answer: "$x \\neq 2$ ならば $x^2 \\neq 4$ である",
        rationale: "<strong>解説: </strong><br>命題「$p \\implies q$」の【裏】は、「$\\bar{p} \\implies \\bar{q}$」（仮定と結論をそれぞれ否定したもの）です。<br>$x=2$ の否定は $x \\neq 2$、$x^2=4$ の否定は $x^2 \\neq 4$ です。<br>よって、「$x \\neq 2$ ならば $x^2 \\neq 4$」が裏になります。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "次の命題の【対偶】を答えよ。<br>命題：$x = 2$ ならば $x^2 = 4$ である。",
        options: ["$x^2 = 4$ ならば $x = 2$ である", "$x \\neq 2$ ならば $x^2 \\neq 4$ である", "$x^2 \\neq 4$ ならば $x \\neq 2$ である", "$x^2 = 4$ ならば $x \\neq 2$ である"],
        answer: "$x^2 \\neq 4$ ならば $x \\neq 2$ である",
        rationale: "<strong>解説: </strong><br>命題「$p \\implies q$」の【対偶】は、「$\\bar{q} \\implies \\bar{p}$」（逆の裏）です。<br>結論 $x^2=4$ を否定して仮定にし、仮定 $x=2$ を否定して結論にします。<br>よって、「$x^2 \\neq 4$ ならば $x \\neq 2$」が対偶になります。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "次の命題の【逆】を答えよ。<br>命題：$x > 0$ ならば $x + 1 > 1$ である。",
        options: ["$x + 1 > 1$ ならば $x > 0$ である", "$x \\leqq 0$ ならば $x + 1 \\leqq 1$ である", "$x + 1 \\leqq 1$ ならば $x \\leqq 0$ である", "$x + 1 < 1$ ならば $x < 0$ である"],
        answer: "$x + 1 > 1$ ならば $x > 0$ である",
        rationale: "<strong>解説: </strong><br>【逆】は仮定と結論を入れ替えます。<br>仮定 $x > 0$ と結論 $x + 1 > 1$ を入れ替えて、「$x + 1 > 1$ ならば $x > 0$」となります。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "次の命題の【裏】を答えよ。<br>命題：$n$ が4の倍数ならば、$n$ は偶数である。",
        options: ["$n$ は偶数ならば、$n$ は4の倍数である", "$n$ が4の倍数でないならば、$n$ は偶数でない（奇数である）", "$n$ が偶数でない（奇数）ならば、$n$ は4の倍数でない", "$n$ が4の倍数ならば、$n$ は奇数である"],
        answer: "$n$ が4の倍数でないならば、$n$ は偶数でない（奇数である）",
        rationale: "<strong>解説: </strong><br>【裏】はそれぞれの条件を否定します。<br>「4の倍数」の否定は「4の倍数でない」、「偶数」の否定は「偶数でない（奇数）」です。<br>よって、「$n$ が4の倍数でないならば、$n$ は偶数でない」となります。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "次の命題の【対偶】を答えよ。<br>命題：$x^2 \\neq 1$ ならば $x \\neq 1$ である。",
        options: ["$x \\neq 1$ ならば $x^2 \\neq 1$ である", "$x^2 = 1$ ならば $x = 1$ である", "$x = 1$ ならば $x^2 = 1$ である", "$x = 1$ ならば $x^2 \\neq 1$ である"],
        answer: "$x = 1$ ならば $x^2 = 1$ である",
        rationale: "<strong>解説: </strong><br>【対偶】は「結論の否定 $\\implies$ 仮定の否定」です。<br>結論「$x \\neq 1$」の否定は「$x = 1$」。<br>仮定「$x^2 \\neq 1$」の否定は「$x^2 = 1$」。<br>これらをつないで、「$x = 1$ ならば $x^2 = 1$」となります。<br>※否定の否定は元に戻ることに注意しましょう。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "次の命題の【対偶】を答えよ。<br>命題：$x, y$ がともに有理数ならば、$x+y$ は有理数である。",
        options: ["$x+y$ が有理数ならば、$x, y$ はともに有理数である", "$x, y$ の少なくとも一方が無理数ならば、$x+y$ は無理数である", "$x+y$ が無理数ならば、$x, y$ の少なくとも一方は無理数である", "$x+y$ が無理数ならば、$x, y$ はともに無理数である"],
        answer: "$x+y$ が無理数ならば、$x, y$ の少なくとも一方は無理数である",
        rationale: "<strong>解説: </strong><br>論理の否定に注意が必要な問題です。<br>結論「$x+y$ は有理数」の否定 $\\to$ 「$x+y$ は無理数」。<br>仮定「$x, y$ が**ともに**有理数 ($x \\in \\mathbb{Q} \\land y \\in \\mathbb{Q}$」の否定 $\\to$ 「$x, y$ の**少なくとも一方**は無理数 ($x \\notin \\mathbb{Q} \\lor y \\notin \\mathbb{Q}$」。<br>よって正解は「$x+y$ が無理数ならば、$x, y$ の少なくとも一方は無理数である」です。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "次の命題の【逆】を答えよ。<br>命題：$\\triangle ABC$ が正三角形ならば、$\\triangle ABC$ は二等辺三角形である。",
        options: ["$\\triangle ABC$ が二等辺三角形ならば、$\\triangle ABC$ は正三角形である", "$\\triangle ABC$ が正三角形でないならば、$\\triangle ABC$ は二等辺三角形でない", "$\\triangle ABC$ が二等辺三角形でないならば、$\\triangle ABC$ は正三角形でない", "$\\triangle ABC$ の3つの角が等しいならば、2つの辺は等しい"],
        answer: "$\\triangle ABC$ が二等辺三角形ならば、$\\triangle ABC$ は正三角形である",
        rationale: "<strong>解説: </strong><br>【逆】は仮定と結論を単純に入れ替えます。<br>仮定：正三角形、結論：二等辺三角形。<br>入れ替えて「$\\triangle ABC$ が二等辺三角形ならば、$\\triangle ABC$ は正三角形である」となります。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "次の命題の【裏】を答えよ。<br>命題：$x = 0$ かつ $y = 0$ ならば $xy = 0$ である。",
        options: ["$xy \\neq 0$ ならば $x \\neq 0$ または $y \\neq 0$ である", "$x \\neq 0$ かつ $y \\neq 0$ ならば $xy \\neq 0$ である", "$x \\neq 0$ または $y \\neq 0$ ならば $xy \\neq 0$ である", "$xy = 0$ ならば $x = 0$ かつ $y = 0$ である"],
        answer: "$x \\neq 0$ または $y \\neq 0$ ならば $xy \\neq 0$ である",
        rationale: "<strong>解説: </strong><br>ド・モルガンの法則を使う否定です。<br>仮定「$x=0$ **かつ** $y=0$」の否定は、「$x \\neq 0$ **または** $y \\neq 0$」です。<br>結論「$xy=0$」の否定は「$xy \\neq 0$」です。<br>これらをつないで裏を作ります。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "次の命題の【対偶】を答えよ。<br>命題：$xy > 0$ ならば $x > 0$ または $y > 0$ である。",
        options: ["$x \\leqq 0$ かつ $y \\leqq 0$ ならば $xy \\leqq 0$ である", "$x \\leqq 0$ または $y \\leqq 0$ ならば $xy \\leqq 0$ である", "$x > 0$ または $y > 0$ ならば $xy > 0$ である", "$x \\leqq 0$ かつ $y \\leqq 0$ ならば $xy < 0$ である"],
        answer: "$x \\leqq 0$ かつ $y \\leqq 0$ ならば $xy \\leqq 0$ である",
        rationale: "<strong>解説: </strong><br>結論「$x > 0$ **または** $y > 0$」の否定は、「$x \\leqq 0$ **かつ** $y \\leqq 0$」です。<br>仮定「$xy > 0$」の否定は、「$xy \\leqq 0$」です。<br>これらを逆順につなぎます。" + VIDEO_LINK
    },
    // 問題 11
    {
        question: "次の命題の【逆】を答えよ。<br>命題：2つの三角形が合同ならば、その面積は等しい。",
        options: ["2つの三角形の面積が等しくないならば、それらは合同ではない", "2つの三角形の面積が等しいならば、それらは合同である", "2つの三角形が合同でないならば、その面積は等しくない", "2つの三角形が相似ならば、その面積比は等しい"],
        answer: "2つの三角形の面積が等しいならば、それらは合同である",
        rationale: "<strong>解説: </strong><br>単純な入れ替えです。<br>「面積が等しい」を仮定に、「合同である」を結論にもってきます。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "次の命題の【裏】を答えよ。<br>命題：$x < 3$ ならば $x < 5$ である。",
        options: ["$x \\geqq 3$ ならば $x \\geqq 5$ である", "$x > 3$ ならば $x > 5$ である", "$x \\geqq 5$ ならば $x \\geqq 3$ である", "$x < 5$ ならば $x < 3$ である"],
        answer: "$x \\geqq 3$ ならば $x \\geqq 5$ である",
        rationale: "<strong>解説: </strong><br>不等号の否定に注意します。<br>「$<$」の否定は「$\\geqq$」です（等号が含まれることに注意）。<br>仮定の否定：$x \\geqq 3$、結論の否定：$x \\geqq 5$。<br>よって「$x \\geqq 3$ ならば $x \\geqq 5$」です。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "次の命題の【対偶】を答えよ。<br>命題：$n$ が素数ならば $n$ は奇数である。",
        options: ["$n$ が奇数ならば $n$ は素数である", "$n$ が奇数でない（偶数）ならば $n$ は素数でない", "$n$ が素数でないならば $n$ は偶数である", "$n$ が偶数の素数ならば $n$ は2である"],
        answer: "$n$ が奇数でない（偶数）ならば $n$ は素数でない",
        rationale: "<strong>解説: </strong><br>結論「$n$ は奇数」の否定は「$n$ は偶数」。<br>仮定「$n$ は素数」の否定は「$n$ は素数でない」。<br>対偶はこれをつないで、「$n$ は偶数ならば $n$ は素数でない」となります。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "次の命題の【逆】を答えよ。<br>命題：$x, y$ がともに整数ならば、$xy$ は整数である。",
        options: ["$xy$ が整数ならば、$x, y$ はともに整数である", "$x, y$ の少なくとも一方が整数でないならば、$xy$ は整数でない", "$xy$ が整数でないならば、$x, y$ の少なくとも一方は整数でない", "$x, y$ がともに有理数ならば、$xy$ は有理数である"],
        answer: "$xy$ が整数ならば、$x, y$ はともに整数である",
        rationale: "<strong>解説: </strong><br>仮定と結論を入れ替えます。<br>「$xy$ が整数」を前に、「$x, y$ がともに整数」を後ろに持ってきます。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "次の命題の【対偶】を答えよ。<br>命題：$a = 0$ ならば $ab = 0$ である。",
        options: ["$ab = 0$ ならば $a = 0$ である", "$a \\neq 0$ ならば $ab \\neq 0$ である", "$ab \\neq 0$ ならば $a \\neq 0$ である", "$b \\neq 0$ ならば $ab \\neq 0$ である"],
        answer: "$ab \\neq 0$ ならば $a \\neq 0$ である",
        rationale: "<strong>解説: </strong><br>対偶は「結論の否定 $\\implies$ 仮定の否定」です。<br>結論 $ab=0$ の否定 $\\to ab \\neq 0$。<br>仮定 $a=0$ の否定 $\\to a \\neq 0$。<br>これをつなぎます。" + VIDEO_LINK
    },

    // --- レベル2: 真偽の判定 (16-35) ---
    // 問題 16
    {
        question: "命題「$x=1 \\implies x^2=1$」の【逆】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>【逆】は「$x^2=1 \\implies x=1$」です。<br>$x^2=1$ を解くと $x = \\pm 1$ なので、$x = -1$ の場合が反例となります。<br>よって、逆は<strong>偽</strong>です。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "命題「$x=1 \\implies x^2=1$」の【対偶】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong><br>【対偶】の真偽は、元の命題の真偽と一致します。<br>元の命題「$x=1$ ならば $x^2=1$」は明らかに正しい（1の2乗は1）ので、対偶も<strong>真</strong>です。<br>（参考：対偶は「$x^2 \\neq 1 \\implies x \\neq 1$」）" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "命題「$x > 2 \\implies x > 1$」の【逆】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>【逆】は「$x > 1 \\implies x > 2$」です。<br>これは反例 $x = 1.5$ などが存在するため成り立ちません。<br>よって、逆は<strong>偽</strong>です。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "命題「$x > 2 \\implies x > 1$」の【裏】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>【重要】「裏の真偽」は「逆の真偽」と必ず一致します。<br>裏は「$x \\leqq 2 \\implies x \\leqq 1$」です。<br>反例として $x = 2$ を考えると、$2 \\leqq 2$ は満たしますが $2 \\leqq 1$ は満たしません。<br>よって、裏は<strong>偽</strong>です。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "命題「$n$ は4の倍数 $\\implies n$ は2の倍数」の【対偶】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong><br>元の命題の真偽を考えます。<br>4の倍数は必ず偶数（2の倍数）なので、元の命題は真です。<br>対偶の真偽は元の命題と一致するため、対偶も<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 21
    {
        question: "命題「$n$ は4の倍数 $\\implies n$ は2の倍数」の【逆】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>【逆】は「$n$ は2の倍数 $\\implies n$ は4の倍数」です。<br>反例として $n = 6$（2の倍数だが4の倍数ではない）があります。<br>よって、逆は<strong>偽</strong>です。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "命題「$x+y > 0 \\implies x>0$ かつ $y>0$」の【対偶】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>元の命題の真偽を判定すればOKです。<br>「和が正なら両方正」というのは誤りです（反例：$x=5, y=-1$）。<br>元の命題が偽なので、対偶も<strong>偽</strong>です。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "命題「$x+y > 0 \\implies x>0$ かつ $y>0$」の【逆】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong><br>【逆】は「$x>0$ かつ $y>0 \\implies x+y > 0$」です。<br>正の数同士を足せば必ず正になるので、これは正しいです。<br>よって、逆は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "命題「$\\triangle ABC$ が二等辺三角形 $\\implies \\triangle ABC$ は正三角形」の【対偶】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>元の命題「二等辺ならば正三角形」は偽です（反例：頂角が直角の二等辺三角形など）。<br>元の命題が偽なので、対偶も<strong>偽</strong>です。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "命題「$xy=0 \\implies x=0$ または $y=0$」の【逆】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong><br>【逆】は「$x=0$ または $y=0 \\implies xy=0$」です。<br>少なくとも一方が0であれば、積は必ず0になります。<br>よって、逆は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "命題「$xy \\neq 0 \\implies x \\neq 0$ かつ $y \\neq 0$」の【対偶】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong><br>元の命題の真偽を考えます。<br>積が0でないなら、両方とも0であってはなりません。これは正しいです。<br>よって、元の命題が真なので、対偶も<strong>真</strong>です。<br>（対偶をとると「$x=0$ または $y=0 \\implies xy=0$」となり、これも明らかに真です）" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "命題「$x^2 = 4 \\implies x = 2$」の【逆】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong><br>【逆】は「$x = 2 \\implies x^2 = 4$」です。<br>2を2乗すれば4になるので、これは正しいです。<br>よって、逆は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "命題「$x < 1 \\implies x^2 < 1$」の【裏】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>【裏】の真偽は【逆】の真偽と一致します。<br>逆を考えると「$x^2 < 1 \\implies x < 1$」です。<br>$x^2 < 1$ は $-1 < x < 1$ を意味します。この範囲にある $x$ は必ず $x < 1$ を満たします。<br>...おっと、逆は真ですね。<br>念の為【裏】を直接確認します。<br>裏：「$x \\geqq 1 \\implies x^2 \\geqq 1$」。<br>1以上の数は2乗すれば1以上になるので、これも真です。<br>失礼しました、正解は「真」です。データを修正します。<br><br><strong>訂正解説：</strong><br>【裏】は「$x \\geqq 1 \\implies x^2 \\geqq 1$」。<br>もし $x \\geqq 1$ ならば、両辺に正の数 $x$（$\\geqq 1$）を掛けるなどして $x^2 \\geqq 1$ が言えます。<br>よって、裏は<strong>真</strong>です。<br>（※問題作成時の選択ミスを防ぐため再確認：元の命題は偽（$x=-5$など）。対偶も偽。逆は真。裏は真。）" + VIDEO_LINK,
        answer: "真" // ここで上書き
    },
    // 問題 29
    {
        question: "命題「$|x| < 3 \\implies x < 3$」の【対偶】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong><br>元の命題の真偽を確認します。<br>$|x| < 3$ は $-3 < x < 3$ です。<br>この範囲にあれば、当然 $x < 3$ は成り立ちます（真）。<br>元の命題が真なので、対偶も<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "命題「$|x| < 3 \\implies x < 3$」の【逆】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>【逆】は「$x < 3 \\implies |x| < 3$」です。<br>反例として $x = -10$ を考えると、$x < 3$ は満たしますが $|x|=10$ となり $|x|<3$ を満たしません。<br>よって、逆は<strong>偽</strong>です。" + VIDEO_LINK
    },
    // 問題 31
    {
        question: "命題「自然数 $n$ が素数 $\\implies n$ は奇数」の【対偶】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>元の命題は「2」という偶数の素数があるため偽です。<br>元の命題が偽なので、対偶も<strong>偽</strong>です。<br>（対偶：$n$ が偶数 $\\implies n$ は素数でない。反例 $n=2$）" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "命題「平行四辺形の対角線は直交する」の【逆】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>命題を書き換えると「四角形が平行四辺形 $\\implies$ 対角線が直交する」。<br>【逆】は「対角線が直交する四角形 $\\implies$ 平行四辺形」です。<br>反例として「凧形（たこがた）」があります。対角線は直交しますが、平行四辺形ではありません。<br>よって、逆は<strong>偽</strong>です。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "命題「$x, y$ は有理数 $\\implies x+y$ は有理数」の【裏】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>【裏】の真偽は【逆】の真偽と同じです。<br>【逆】は「$x+y$ は有理数 $\\implies x, y$ は有理数」。<br>反例：$x = \\sqrt{2}, y = -\\sqrt{2}$。和は0（有理数）ですが、元は無理数です。<br>逆が偽なので、裏も<strong>偽</strong>です。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "命題「$x=0 \\implies xy=0$」の【対偶】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong><br>元の命題「0を掛ければ0になる」は常に正しい（真）。<br>よって対偶も<strong>真</strong>です。<br>（対偶：$xy \\neq 0 \\implies x \\neq 0$。積が0でないなら0は含まれていない、正しい。）" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "命題「$x=0 \\implies xy=0$」の【逆】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>【逆】は「$xy=0 \\implies x=0$」です。<br>$y=0$ であれば $x$ は $1$ でも $2$ でも成り立つので、$x=0$ とは限りません（反例：$x=1, y=0$）。<br>よって、逆は<strong>偽</strong>です。" + VIDEO_LINK
    },

    // --- レベル3: 文章と真偽の組み合わせ・複雑な論理 (36-50) ---
    // 問題 36
    {
        question: "命題「$x^2=3x$ ならば $x=3$」の【逆】とその真偽の組み合わせとして正しいものは？",
        options: ["「$x=3$ ならば $x^2=3x$」であり、真", "「$x=3$ ならば $x^2=3x$」であり、偽", "「$x \\neq 3$ ならば $x^2 \\neq 3x$」であり、真", "「$x \\neq 3$ ならば $x^2 \\neq 3x$」であり、偽"],
        answer: "「$x=3$ ならば $x^2=3x$」であり、真",
        rationale: "<strong>解説: </strong><br>逆は仮定と結論を入れ替えた「$x=3$ ならば $x^2=3x$」です。<br>真偽を判定すると、$x=3$ を代入すれば $9=9$ で成り立つため、これは<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "命題「$x^2=3x$ ならば $x=3$」の【対偶】とその真偽の組み合わせとして正しいものは？",
        options: ["「$x \\neq 3$ ならば $x^2 \\neq 3x$」であり、真", "「$x \\neq 3$ ならば $x^2 \\neq 3x$」であり、偽", "「$x^2 \\neq 3x$ ならば $x \\neq 3$」であり、真", "「$x^2 \\neq 3x$ ならば $x \\neq 3$」であり、偽"],
        answer: "「$x \\neq 3$ ならば $x^2 \\neq 3x$」であり、偽",
        rationale: "<strong>解説: </strong><br>対偶は結論の否定 $\\implies$ 仮定の否定なので、「$x \\neq 3$ ならば $x^2 \\neq 3x$」です。<br>真偽は元の命題と一致します。<br>元の命題「$x^2=3x \\implies x=3$」は、$x=0$ という解があるため偽です。<br>よって、対偶も<strong>偽</strong>となります。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "命題「$m, n$ がともに奇数ならば $3m+2n$ は奇数」の【対偶】とその真偽は？",
        options: ["「$3m+2n$ が偶数ならば $m, n$ の少なくとも一方は偶数」で、真", "「$3m+2n$ が偶数ならば $m, n$ の少なくとも一方は偶数」で、偽", "「$3m+2n$ が偶数ならば $m, n$ はともに偶数」で、真", "「$3m+2n$ が偶数ならば $m, n$ はともに偶数」で、偽"],
        answer: "「$3m+2n$ が偶数ならば $m, n$ の少なくとも一方は偶数」で、真",
        rationale: "<strong>解説: </strong><br>対偶の作成：<br>結論「奇数」の否定 $\\to$ 「偶数」。<br>仮定「ともに奇数」の否定 $\\to$ 「少なくとも一方は偶数」。<br>よって文章は「$3m+2n$ が偶数ならば $m, n$ の少なくとも一方は偶数」。<br>真偽判定（元の命題で考える）：<br>$m, n$ が奇数（$m=1, n=1$など）とすると、$3(1)+2(1)=5$（奇数）。<br>証明：$m=2k+1, n=2l+1$ とおくと $3(2k+1)+2(2l+1) = 6k+3+4l+2 = 2(3k+2l+2)+1$ なので必ず奇数。<br>元の命題が真なので、対偶も<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "命題「$x + y > 2$ ならば $x > 1$ または $y > 1$」の【対偶】の真偽は？",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong><br>対偶をとって考えるか、元の命題の真偽を考えます。<br>対偶：「$x \\leqq 1$ かつ $y \\leqq 1$ ならば $x + y \\leqq 2$」。<br>これは不等式の性質（辺々を加える）により明らかに正しいです（$1+1=2$）。<br>よって対偶は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "命題「$x + y > 2$ ならば $x > 1$ または $y > 1$」の【逆】の真偽は？",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>逆：「$x > 1$ または $y > 1$ ならば $x + y > 2$」。<br>「または」はどちらか一方だけ満たせばよいので、$x=5, y=-10$ としてみます。<br>これは仮定（$x>1$）を満たしますが、和は $-5$ となり結論を満たしません。<br>よって、逆は<strong>偽</strong>です。" + VIDEO_LINK
    },
    // 問題 41
    {
        question: "命題「整数 $n$ について、$n^2$ が偶数ならば $n$ は偶数」の【対偶】とその真偽は？",
        options: ["「$n$ が奇数ならば $n^2$ は奇数」で、真", "「$n$ が奇数ならば $n^2$ は奇数」で、偽", "「$n$ が偶数ならば $n^2$ は偶数」で、真", "「$n$ が偶数ならば $n^2$ は偶数」で、偽"],
        answer: "「$n$ が奇数ならば $n^2$ は奇数」で、真",
        rationale: "<strong>解説: </strong><br>対偶を作成します。<br>結論「$n$ は偶数」の否定 $\\to$ 「$n$ は奇数」。<br>仮定「$n^2$ は偶数」の否定 $\\to$ 「$n^2$ は奇数」。<br>文章は「$n$ が奇数ならば $n^2$ は奇数」。<br>奇数 $\\times$ 奇数は必ず奇数なので、これは<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "命題「$A \\cup B = A \\implies B \\subset A$」の【逆】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong><br>逆は「$B \\subset A \\implies A \\cup B = A$」です。<br>集合 $B$ が $A$ にすっぽり含まれているなら、合わせても $A$ の範囲からはみ出しません。<br>よって、逆は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "命題「$abc = 0 \\implies a=0$ かつ $b=0$ かつ $c=0$」の【対偶】の真偽は？",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>元の命題の真偽を考えます。<br>積が0になるには「少なくとも1つが0」であればよく、「全て0」である必要はありません。<br>反例：$a=1, b=0, c=1$。<br>元の命題が偽なので、対偶も<strong>偽</strong>です。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "命題「$|x-1| < 2 \\implies |x| < 3$」の【裏】の真偽を答えよ。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong><br>【裏】の真偽 $\\iff$ 【逆】の真偽です。<br>逆：「$|x| < 3 \\implies |x-1| < 2$」。<br>反例を探します。$x = -2$ のとき、<br>仮定 $|-2| < 3$ は真。<br>結論 $|-2-1| = |-3| = 3$ なので $3 < 2$ は偽。<br>逆が偽なので... おっと、裏も偽になりますね。<br>再確認します。<br>命題：$-1 < x < 3 \\implies -3 < x < 3$。<br>裏：$x \\leqq -1$ または $x \\geqq 3$ $\\implies$ $x \\leqq -3$ または $x \\geqq 3$。<br>反例 $x = -2$。仮定は満たす（$x \\leqq -1$）。結論は満たさない（$-2$ は $-3$ 以下ではない）。<br>よって裏は「偽」です。<br>選択肢に「偽」を設定し、正解とします。<br><br><strong>訂正：</strong><br>逆が偽なので裏も偽です。<br>正解は<strong>偽</strong>です。" + VIDEO_LINK,
        answer: "偽"
    },
    // 問題 45
    {
        question: "命題「四角形 $Q$ がひし形 $\\implies Q$ の対角線は直交する」の【対偶】の真偽は？",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong><br>元の命題の真偽を確認します。<br>ひし形の定義・性質より、対角線は必ず直交します（真）。<br>元の命題が真なので、対偶も<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "命題「$x^2 - 4x + 3 = 0 \\implies x=1$」の【対偶】として正しい文章と、その真偽は？",
        options: ["「$x \\neq 1$ ならば $x^2 - 4x + 3 \\neq 0$」で、真", "「$x \\neq 1$ ならば $x^2 - 4x + 3 \\neq 0$」で、偽", "「$x=1$ ならば $x^2 - 4x + 3 = 0$」で、真", "「$x=1$ ならば $x^2 - 4x + 3 = 0$」で、偽"],
        answer: "「$x \\neq 1$ ならば $x^2 - 4x + 3 \\neq 0$」で、偽",
        rationale: "<strong>解説: </strong><br>対偶の文章：「$x \\neq 1$ ならば $x^2 - 4x + 3 \\neq 0$」。<br>真偽判定：元の命題「$x^2 - 4x + 3 = 0 \\implies x=1$」を考えます。<br>左辺を因数分解すると $(x-1)(x-3)=0$ なので、解は $x=1, 3$ です。<br>$x=3$ の場合があるため、元の命題は偽です。<br>よって、対偶も<strong>偽</strong>です。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "命題「$n$ は6の倍数 $\\implies n$ は3の倍数」の【逆】の文章とその真偽は？",
        options: ["「$n$ は3の倍数 $\\implies n$ は6の倍数」で、真", "「$n$ は3の倍数 $\\implies n$ は6の倍数」で、偽", "「$n$ は3の倍数でない $\\implies n$ は6の倍数でない」で、真", "「$n$ は3の倍数でない $\\implies n$ は6の倍数でない」で、偽"],
        answer: "「$n$ は3の倍数 $\\implies n$ は6の倍数」で、偽",
        rationale: "<strong>解説: </strong><br>逆：「$n$ は3の倍数 $\\implies n$ は6の倍数」。<br>真偽：$n=3, 9, 15$ など、3の倍数だが偶数でない（6の倍数でない）ものがあるため、<strong>偽</strong>です。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "命題「$x > 0$ かつ $y > 0$ $\\implies xy > 0$」の【裏】の真偽は？",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>【裏】の真偽 $\\iff$ 【逆】の真偽。<br>逆：「$xy > 0 \\implies x > 0$ かつ $y > 0$」。<br>反例：$x=-1, y=-1$（積は正だが、両方正ではない）。<br>逆が偽なので、裏も<strong>偽</strong>です。<br>（裏の文章：$x \\leqq 0$ または $y \\leqq 0$ $\\implies xy \\leqq 0$。反例 $x=-1, y=-1$ は仮定を満たすが結論を満たさない）" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "命題「$\\triangle ABC \\equiv \\triangle DEF \\implies \\triangle ABC$ と $\\triangle DEF$ の面積は等しい」の【対偶】の真偽は？",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong><br>元の命題「合同なら面積等しい」は幾何学的に正しい（真）。<br>よって対偶「面積が等しくないなら合同でない」も<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "命題「$x$ は無理数 $\\implies x$ は実数」の【逆】の真偽は？",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong><br>逆：「$x$ は実数 $\\implies x$ は無理数」。<br>実数には有理数（$1, 0.5$など）も含まれるため、必ずしも無理数とは限りません。<br>よって、逆は<strong>偽</strong>です。" + VIDEO_LINK
    }
];