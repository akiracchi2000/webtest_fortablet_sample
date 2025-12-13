const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7715/63204' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 第1部：基本（x^2の係数が1, 偶数） (1-10) ---
    // 問題 1
    {
        question: "2次関数 $y=x^2-2x$ を平方完成し、頂点の座標を求めよ。",
        answer: "$(1, -1)$",
        rationale: "<strong>解説: </strong><br>1. $x$ の係数 $-2$ の半分の2乗を足して引きます。<br>$y = x^2 - 2x + 1 - 1$<br>2. 因数分解できる部分をまとめます。<br>$y = (x-1)^2 - 1$<br>よって頂点は $(1, -1)$ です。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "2次関数 $y=x^2+4x$ の頂点の座標を求めよ。",
        answer: "$(-2, -4)$",
        rationale: "<strong>解説: </strong><br>$y = x^2 + 4x + 4 - 4$<br>$= (x+2)^2 - 4$<br>頂点は $(-2, -4)$ です。<br>「半分の2乗を足して引く」が基本です。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "2次関数 $y=x^2-6x+5$ の頂点の座標を求めよ。",
        answer: "$(3, -4)$",
        rationale: "<strong>解説: </strong><br>定数項 $+5$ は一旦無視して、$x$ の項だけで調整します。<br>$y = (x^2 - 6x) + 5$<br>$= (x^2 - 6x + 9 - 9) + 5$<br>$= (x-3)^2 - 9 + 5$<br>$= (x-3)^2 - 4$<br>頂点は $(3, -4)$ です。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "2次関数 $y=x^2+2x-3$ の頂点の座標を求めよ。",
        answer: "$(-1, -4)$",
        rationale: "<strong>解説: </strong><br>$y = (x^2 + 2x) - 3$<br>$2$ の半分は $1$、2乗も $1$ です。<br>$= (x^2 + 2x + 1 - 1) - 3$<br>$= (x+1)^2 - 1 - 3$<br>$= (x+1)^2 - 4$<br>頂点は $(-1, -4)$ です。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "2次関数 $y=x^2-8x+10$ を平方完成した式を答えよ。",
        answer: "$y=(x-4)^2-6$",
        rationale: "<strong>解説: </strong><br>$y = (x^2 - 8x + 16 - 16) + 10$<br>$= (x-4)^2 - 16 + 10$<br>$= (x-4)^2 - 6$<br>頂点は $(4, -6)$ です。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "2次関数 $y=x^2-4x+7$ の頂点の座標を求めよ。",
        answer: "$(2, 3)$",
        rationale: "<strong>解説: </strong><br>$y = (x^2 - 4x + 4 - 4) + 7$<br>$= (x-2)^2 - 4 + 7$<br>$= (x-2)^2 + 3$<br>頂点は $(2, 3)$ です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "2次関数 $y=x^2+10x+20$ の頂点の座標を求めよ。",
        answer: "$(-5, -5)$",
        rationale: "<strong>解説: </strong><br>$x$ の係数 $10$ の半分は $5$ です。<br>$y = (x+5)^2 - 25 + 20$<br>$= (x+5)^2 - 5$<br>頂点は $(-5, -5)$ です。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "2次関数 $y=x^2-12x$ の頂点の座標を求めよ。",
        answer: "$(6, -36)$",
        rationale: "<strong>解説: </strong><br>定数項がない場合も手順は同じです。<br>$y = (x-6)^2 - 36$<br>頂点は $(6, -36)$ です。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "2次関数 $y=x^2+6x+9$ の頂点の座標を求めよ。",
        answer: "$(-3, 0)$",
        rationale: "<strong>解説: </strong><br>これは公式通り因数分解できます。<br>$y = (x+3)^2$<br>後ろに余りが出ないため、頂点のy座標は $0$ になります。<br>頂点は $(-3, 0)$ です。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "2次関数 $y=x^2-2ax$ ($a$は定数) の頂点の座標を $a$ を用いて表せ。",
        answer: "$(a, -a^2)$",
        rationale: "<strong>解説: </strong><br>$x$ の係数は $-2a$ です。半分は $-a$、2乗は $a^2$ です。<br>$y = x^2 - 2ax + a^2 - a^2$<br>$= (x-a)^2 - a^2$<br>よって頂点は $(a, -a^2)$ です。" + VIDEO_LINK
    },

    // --- 第2部：係数あり（a ≠ 1, 整数） (11-20) ---
    // 問題 11
    {
        question: "2次関数 $y=2x^2-4x$ の頂点の座標を求めよ。",
        answer: "$(1, -2)$",
        rationale: "<strong>解説: </strong><br>まず $x^2$ の係数 $2$ で $x$ の項をくくります。<br>$y = 2(x^2 - 2x)$<br>カッコの中で平方完成します。<br>$y = 2\\{(x-1)^2 - 1\\}$<br>最後に係数 $2$ を分配します。<br>$y = 2(x-1)^2 - 2$<br>頂点は $(1, -2)$ です。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "2次関数 $y=2x^2+8x+3$ の頂点の座標を求めよ。",
        answer: "$(-2, -5)$",
        rationale: "<strong>解説: </strong><br>1. 定数項以外をくくる： $y = 2(x^2 + 4x) + 3$<br>2. カッコ内を平方完成： $y = 2\\{(x+2)^2 - 4\\} + 3$<br>3. 係数2を掛けて展開： $y = 2(x+2)^2 - 8 + 3$<br>4. 整理： $y = 2(x+2)^2 - 5$<br>頂点は $(-2, -5)$ です。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "2次関数 $y=3x^2-6x+1$ の頂点の座標を求めよ。",
        answer: "$(1, -2)$",
        rationale: "<strong>解説: </strong><br>$y = 3(x^2 - 2x) + 1$<br>$= 3\\{(x-1)^2 - 1\\} + 1$<br>係数 $3$ を分配するのを忘れないように。<br>$= 3(x-1)^2 - 3 + 1$<br>$= 3(x-1)^2 - 2$<br>頂点は $(1, -2)$ です。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "2次関数 $y=-x^2+2x$ の頂点の座標を求めよ。",
        answer: "$(1, 1)$",
        rationale: "<strong>解説: </strong><br>マイナスでくくります。<br>$y = -(x^2 - 2x)$<br>$= -\\{(x-1)^2 - 1\\}$<br>マイナスを分配すると符号が変わります。<br>$= -(x-1)^2 + 1$<br>頂点は $(1, 1)$ です。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "2次関数 $y=-x^2-4x+1$ の頂点の座標を求めよ。",
        answer: "$(-2, 5)$",
        rationale: "<strong>解説: </strong><br>$y = -(x^2 + 4x) + 1$<br>$= -\\{(x+2)^2 - 4\\} + 1$<br>$= -(x+2)^2 + 4 + 1$<br>$= -(x+2)^2 + 5$<br>頂点は $(-2, 5)$ です。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "2次関数 $y=-2x^2+4x-3$ の頂点の座標を求めよ。",
        answer: "$(1, -1)$",
        rationale: "<strong>解説: </strong><br>$y = -2(x^2 - 2x) - 3$<br>$= -2\\{(x-1)^2 - 1\\} - 3$<br>$= -2(x-1)^2 + 2 - 3$<br>$= -2(x-1)^2 - 1$<br>頂点は $(1, -1)$ です。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "2次関数 $y=3x^2+12x+5$ の頂点の座標を求めよ。",
        answer: "$(-2, -7)$",
        rationale: "<strong>解説: </strong><br>$y = 3(x^2 + 4x) + 5$<br>$= 3\\{(x+2)^2 - 4\\} + 5$<br>$= 3(x+2)^2 - 12 + 5$<br>$= 3(x+2)^2 - 7$<br>頂点は $(-2, -7)$ です。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "2次関数 $y=2x^2-12x+18$ の頂点の座標を求めよ。",
        answer: "$(3, 0)$",
        rationale: "<strong>解説: </strong><br>$y = 2(x^2 - 6x + 9)$ と因数分解できますが、手順通りやるなら<br>$y = 2(x^2 - 6x) + 18$<br>$= 2\\{(x-3)^2 - 9\\} + 18$<br>$= 2(x-3)^2 - 18 + 18$<br>$= 2(x-3)^2$<br>頂点は $(3, 0)$ です。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "2次関数 $y=-3x^2+6x+2$ の頂点の座標を求めよ。",
        answer: "$(1, 5)$",
        rationale: "<strong>解説: </strong><br>$y = -3(x^2 - 2x) + 2$<br>$= -3\\{(x-1)^2 - 1\\} + 2$<br>$= -3(x-1)^2 + 3 + 2$<br>$= -3(x-1)^2 + 5$<br>頂点は $(1, 5)$ です。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "2次関数 $y=4x^2-8x-1$ の頂点の座標を求めよ。",
        answer: "$(1, -5)$",
        rationale: "<strong>解説: </strong><br>$y = 4(x^2 - 2x) - 1$<br>$= 4\\{(x-1)^2 - 1\\} - 1$<br>$= 4(x-1)^2 - 4 - 1$<br>$= 4(x-1)^2 - 5$<br>頂点は $(1, -5)$ です。" + VIDEO_LINK
    },

    // --- 第3部：分数が登場する計算（奇数の係数など） (21-30) ---
    // 問題 21
    {
        question: "2次関数 $y=x^2-3x$ の頂点の座標を求めよ。",
        answer: "$(\\frac{3}{2}, -\\frac{9}{4})$",
        rationale: "<strong>解説: </strong><br>係数 $-3$ の半分は $-\\frac{3}{2}$ です。<br>$y = (x - \\frac{3}{2})^2 - (\\frac{3}{2})^2$<br>$= (x - \\frac{3}{2})^2 - \\frac{9}{4}$<br>頂点は $(\\frac{3}{2}, -\\frac{9}{4})$ です。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "2次関数 $y=x^2+x+1$ の頂点の座標を求めよ。",
        answer: "$(-\\frac{1}{2}, \\frac{3}{4})$",
        rationale: "<strong>解説: </strong><br>係数 $1$ の半分は $\\frac{1}{2}$。<br>$y = (x + \\frac{1}{2})^2 - \\frac{1}{4} + 1$<br>$= (x + \\frac{1}{2})^2 - \\frac{1}{4} + \\frac{4}{4}$<br>$= (x + \\frac{1}{2})^2 + \\frac{3}{4}$<br>頂点は $(-\\frac{1}{2}, \\frac{3}{4})$ です。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "2次関数 $y=x^2-5x+2$ の頂点の座標を求めよ。",
        answer: "$(\\frac{5}{2}, -\\frac{17}{4})$",
        rationale: "<strong>解説: </strong><br>$y = (x - \\frac{5}{2})^2 - \\frac{25}{4} + 2$<br>$= (x - \\frac{5}{2})^2 - \\frac{25}{4} + \\frac{8}{4}$<br>$= (x - \\frac{5}{2})^2 - \\frac{17}{4}$<br>頂点は $(\\frac{5}{2}, -\\frac{17}{4})$ です。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "2次関数 $y=2x^2-3x$ の頂点の座標を求めよ。",
        answer: "$(\\frac{3}{4}, -\\frac{9}{8})$",
        rationale: "<strong>解説: </strong><br>まず $2$ でくくります。<br>$y = 2(x^2 - \\frac{3}{2}x)$<br>$\\frac{3}{2}$ のさらに半分は $\\frac{3}{4}$ です。<br>$= 2\\{(x - \\frac{3}{4})^2 - \\frac{9}{16}\\}$<br>$= 2(x - \\frac{3}{4})^2 - \\frac{18}{16}$<br>$= 2(x - \\frac{3}{4})^2 - \\frac{9}{8}$" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "2次関数 $y=-2x^2+x$ の頂点の座標を求めよ。",
        answer: "$(\\frac{1}{4}, \\frac{1}{8})$",
        rationale: "<strong>解説: </strong><br>$y = -2(x^2 - \\frac{1}{2}x)$<br>$= -2\\{(x - \\frac{1}{4})^2 - \\frac{1}{16}\\}$<br>$= -2(x - \\frac{1}{4})^2 + \\frac{2}{16}$<br>$= -2(x - \\frac{1}{4})^2 + \\frac{1}{8}$" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "2次関数 $y=x^2+7x+10$ の頂点の座標を求めよ。",
        answer: "$(-\\frac{7}{2}, -\\frac{9}{4})$",
        rationale: "<strong>解説: </strong><br>$y = (x + \\frac{7}{2})^2 - \\frac{49}{4} + 10$<br>$= (x + \\frac{7}{2})^2 - \\frac{49}{4} + \\frac{40}{4}$<br>$= (x + \\frac{7}{2})^2 - \\frac{9}{4}$" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "2次関数 $y=2x^2+5x-1$ の頂点の座標を求めよ。",
        answer: "$(-\\frac{5}{4}, -\\frac{33}{8})$",
        rationale: "<strong>解説: </strong><br>$y = 2(x^2 + \\frac{5}{2}x) - 1$<br>$= 2\\{(x + \\frac{5}{4})^2 - \\frac{25}{16}\\} - 1$<br>$= 2(x + \\frac{5}{4})^2 - \\frac{25}{8} - \\frac{8}{8}$<br>$= 2(x + \\frac{5}{4})^2 - \\frac{33}{8}$" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "2次関数 $y=-x^2+3x-4$ の頂点の座標を求めよ。",
        answer: "$(\\frac{3}{2}, -\\frac{7}{4})$",
        rationale: "<strong>解説: </strong><br>$y = -(x^2 - 3x) - 4$<br>$= -\\{(x - \\frac{3}{2})^2 - \\frac{9}{4}\\} - 4$<br>$= -(x - \\frac{3}{2})^2 + \\frac{9}{4} - \\frac{16}{4}$<br>$= -(x - \\frac{3}{2})^2 - \\frac{7}{4}$" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "2次関数 $y=3x^2-x$ の頂点の座標を求めよ。",
        answer: "$(\\frac{1}{6}, -\\frac{1}{12})$",
        rationale: "<strong>解説: </strong><br>$y = 3(x^2 - \\frac{1}{3}x)$<br>$\\frac{1}{3}$ の半分は $\\frac{1}{6}$。<br>$= 3\\{(x - \\frac{1}{6})^2 - \\frac{1}{36}\\}$<br>$= 3(x - \\frac{1}{6})^2 - \\frac{3}{36}$<br>$= 3(x - \\frac{1}{6})^2 - \\frac{1}{12}$" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "2次関数 $y=-2x^2-5x$ の頂点の座標を求めよ。",
        answer: "$(-\\frac{5}{4}, \\frac{25}{8})$",
        rationale: "<strong>解説: </strong><br>$y = -2(x^2 + \\frac{5}{2}x)$<br>$= -2\\{(x + \\frac{5}{4})^2 - \\frac{25}{16}\\}$<br>$= -2(x + \\frac{5}{4})^2 + \\frac{25}{8}$" + VIDEO_LINK
    },

    // --- 第4部：係数が分数・少し複雑な計算 (31-40) ---
    // 問題 31
    {
        question: "2次関数 $y=\\frac{1}{2}x^2-2x$ の頂点の座標を求めよ。",
        answer: "$(2, -2)$",
        rationale: "<strong>解説: </strong><br>分数 $\\frac{1}{2}$ でくくります。<br>$y = \\frac{1}{2}(x^2 - 4x)$<br>（展開して $-2x$ に戻るよう、中は4倍になります）<br>$= \\frac{1}{2}\\{(x-2)^2 - 4\\}$<br>$= \\frac{1}{2}(x-2)^2 - 2$<br>頂点は $(2, -2)$ です。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "2次関数 $y=\\frac{1}{2}x^2+3x$ の頂点の座標を求めよ。",
        answer: "$(-3, -\\frac{9}{2})$",
        rationale: "<strong>解説: </strong><br>$y = \\frac{1}{2}(x^2 + 6x)$<br>$= \\frac{1}{2}\\{(x+3)^2 - 9\\}$<br>$= \\frac{1}{2}(x+3)^2 - \\frac{9}{2}$<br>頂点は $(-3, -\\frac{9}{2})$ です。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "2次関数 $y=\\frac{1}{3}x^2-2x+1$ の頂点の座標を求めよ。",
        answer: "$(3, -2)$",
        rationale: "<strong>解説: </strong><br>$y = \\frac{1}{3}(x^2 - 6x) + 1$<br>$= \\frac{1}{3}\\{(x-3)^2 - 9\\} + 1$<br>$= \\frac{1}{3}(x-3)^2 - 3 + 1$<br>$= \\frac{1}{3}(x-3)^2 - 2$" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "2次関数 $y=-\\frac{1}{2}x^2-x$ の頂点の座標を求めよ。",
        answer: "$(-1, \\frac{1}{2})$",
        rationale: "<strong>解説: </strong><br>$y = -\\frac{1}{2}(x^2 + 2x)$<br>$= -\\frac{1}{2}\\{(x+1)^2 - 1\\}$<br>$= -\\frac{1}{2}(x+1)^2 + \\frac{1}{2}$" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "2次関数 $y=-\\frac{1}{3}x^2-x-\\frac{3}{4}$ の頂点の座標を求めよ。（※画像問題より）",
        answer: "$(-\\frac{3}{2}, 0)$",
        rationale: "<strong>解説: </strong><br>$y = -\\frac{1}{3}(x^2 + 3x) - \\frac{3}{4}$<br>$= -\\frac{1}{3}\\{(x + \\frac{3}{2})^2 - \\frac{9}{4}\\} - \\frac{3}{4}$<br>$= -\\frac{1}{3}(x + \\frac{3}{2})^2 + \\frac{3}{4} - \\frac{3}{4}$<br>$= -\\frac{1}{3}(x + \\frac{3}{2})^2$<br>頂点は $(-\\frac{3}{2}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "2次関数 $y=2x^2-6x+5$ を平方完成し、軸の方程式を求めよ。",
        answer: "$x = \\frac{3}{2}$",
        rationale: "<strong>解説: </strong><br>$y = 2(x^2 - 3x) + 5$<br>$= 2\\{(x - \\frac{3}{2})^2 - \\frac{9}{4}\\} + 5$<br>$= 2(x - \\frac{3}{2})^2 - \\frac{9}{2} + \\frac{10}{2}$<br>$= 2(x - \\frac{3}{2})^2 + \\frac{1}{2}$<br>軸は $x = \\frac{3}{2}$ です。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "2次関数 $y=-2x^2+3x-2$ の頂点の座標を求めよ。（※画像問題より）",
        answer: "$(\\frac{3}{4}, -\\frac{7}{8})$",
        rationale: "<strong>解説: </strong><br>$y = -2(x^2 - \\frac{3}{2}x) - 2$<br>$= -2\\{(x - \\frac{3}{4})^2 - \\frac{9}{16}\\} - 2$<br>$= -2(x - \\frac{3}{4})^2 + \\frac{9}{8} - \\frac{16}{8}$<br>$= -2(x - \\frac{3}{4})^2 - \\frac{7}{8}$" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "2次関数 $y=\\frac{1}{4}x^2-x+2$ の頂点の座標を求めよ。",
        answer: "$(2, 1)$",
        rationale: "<strong>解説: </strong><br>$y = \\frac{1}{4}(x^2 - 4x) + 2$<br>$= \\frac{1}{4}\\{(x-2)^2 - 4\\} + 2$<br>$= \\frac{1}{4}(x-2)^2 - 1 + 2$<br>$= \\frac{1}{4}(x-2)^2 + 1$" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "2次関数 $y=-x^2+x-1$ の頂点の座標を求めよ。",
        answer: "$(\\frac{1}{2}, -\\frac{3}{4})$",
        rationale: "<strong>解説: </strong><br>$y = -(x^2 - x) - 1$<br>$= -\\{(x - \\frac{1}{2})^2 - \\frac{1}{4}\\} - 1$<br>$= -(x - \\frac{1}{2})^2 + \\frac{1}{4} - \\frac{4}{4}$<br>$= -(x - \\frac{1}{2})^2 - \\frac{3}{4}$" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "2次関数 $y=3x^2+2x+1$ の頂点の座標を求めよ。",
        answer: "$(-\\frac{1}{3}, \\frac{2}{3})$",
        rationale: "<strong>解説: </strong><br>$y = 3(x^2 + \\frac{2}{3}x) + 1$<br>$\\frac{2}{3}$ の半分は $\\frac{1}{3}$。<br>$= 3\\{(x + \\frac{1}{3})^2 - \\frac{1}{9}\\} + 1$<br>$= 3(x + \\frac{1}{3})^2 - \\frac{1}{3} + \\frac{3}{3}$<br>$= 3(x + \\frac{1}{3})^2 + \\frac{2}{3}$" + VIDEO_LINK
    },

    // --- 第5部：文字定数・応用・まとめ (41-50) ---
    // 問題 41
    {
        question: "2次関数 $y=x^2-2ax+a^2+1$ の頂点の座標を求めよ。",
        answer: "$(a, 1)$",
        rationale: "<strong>解説: </strong><br>$x$ の部分に注目します。<br>$y = (x^2 - 2ax) + a^2 + 1$<br>$= (x-a)^2 - a^2 + a^2 + 1$<br>$= (x-a)^2 + 1$<br>頂点は $(a, 1)$ です。<br>（因数分解に気づけば一瞬です）" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "2次関数 $y=x^2+4ax+4a^2-3$ の頂点の座標を求めよ。",
        answer: "$(-2a, -3)$",
        rationale: "<strong>解説: </strong><br>$y = (x+2a)^2 - 3$<br>頂点は $(-2a, -3)$ です。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "2次関数 $y=ax^2-2ax+b$ ($a \\neq 0$) の軸の方程式を求めよ。",
        answer: "$x=1$",
        rationale: "<strong>解説: </strong><br>$a$ でくくります。<br>$y = a(x^2 - 2x) + b$<br>$= a\\{(x-1)^2 - 1\\} + b$<br>$= a(x-1)^2 - a + b$<br>頂点のx座標は $1$ なので、軸は $x=1$ です。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "2次関数 $y=-x^2+2kx$ の頂点の座標を $k$ を用いて表せ。",
        answer: "$(k, k^2)$",
        rationale: "<strong>解説: </strong><br>$y = -(x^2 - 2kx)$<br>$= -\\{(x-k)^2 - k^2\\}$<br>$= -(x-k)^2 + k^2$<br>頂点は $(k, k^2)$ です。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "2次関数 $y=x^2-x+k$ の頂点のy座標が $0$ であるとき、定数 $k$ の値を求めよ。",
        answer: "$\\frac{1}{4}$",
        rationale: "<strong>解説: </strong><br>平方完成すると、<br>$y = (x - \\frac{1}{2})^2 - \\frac{1}{4} + k$<br>頂点のy座標は $-\\frac{1}{4} + k$ です。<br>これが $0$ になるので、$k = \\frac{1}{4}$ です。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "2次関数 $y=2x^2+4x+c$ の頂点の座標が $(-1, 3)$ であるとき、定数 $c$ の値を求めよ。",
        answer: "5",
        rationale: "<strong>解説: </strong><br>平方完成します。<br>$y = 2(x^2 + 2x) + c$<br>$= 2(x+1)^2 - 2 + c$<br>頂点のy座標は $-2+c$ です。<br>$-2+c = 3$ より $c = 5$。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "次の変形の誤りを指摘せよ。<br>$y = 2x^2 - 4x = 2(x^2 - 2x) = 2(x-1)^2 - 1$",
        answer: "最後の $-1$ を $2$ 倍し忘れている（正しくは $-2$）",
        rationale: "<strong>解説: </strong><br>カッコの外に出すとき、係数 $2$ を掛けるのを忘れがちです。<br>正しくは $2\\{(x-1)^2 - 1\\} = 2(x-1)^2 - 2$ です。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "2次関数 $y=3x^2+6x$ を $y=a(x-p)^2+q$ の形に変形したときの $p, q$ の値は？",
        answer: "$p=-1, q=-3$",
        rationale: "<strong>解説: </strong><br>$y = 3(x^2+2x) = 3\\{(x+1)^2-1\\} = 3(x+1)^2-3$<br>形を比べると、$x-p = x+1$ より $p=-1$。<br>$q = -3$。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "2次関数 $y=-2x^2+8x-5$ の最大値を求めよ（頂点のy座標を答えよ）。",
        answer: "3",
        rationale: "<strong>解説: </strong><br>平方完成して頂点を求めます。<br>$y = -2(x^2 - 4x) - 5$<br>$= -2\\{(x-2)^2 - 4\\} - 5$<br>$= -2(x-2)^2 + 8 - 5$<br>$= -2(x-2)^2 + 3$<br>上に凸のグラフなので、頂点のy座標 $3$ が最大値です。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "2次関数 $y=ax^2+bx+c$ の頂点のx座標（軸の公式）を答えよ。",
        answer: "$x = -\\frac{b}{2a}$",
        rationale: "<strong>解説: </strong><br>文字式で平方完成を行うと導けます。<br>$y = a(x^2 + \\frac{b}{a}x) + c$<br>$= a(x + \\frac{b}{2a})^2 - \\frac{b^2}{4a} + c$<br>この頂点のx座標 $-\\frac{b}{2a}$ は公式として覚えておくと便利です。" + VIDEO_LINK
    }
];