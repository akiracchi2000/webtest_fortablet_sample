const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7717/63240' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 画像の問題 (1-5) ---
    // 問題 1
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ（共有点がない場合は「なし」と答えよ）。<br>$y = x^2 - 5x + 6$",
        answer: "$(2, 0), (3, 0)$",
        rationale: "<strong>解説: </strong><br>$x$軸との共有点の$x$座標は、$y=0$ としたときの2次方程式の実数解です。<br>$x^2 - 5x + 6 = 0$<br>左辺を因数分解します。<br>$(x-2)(x-3) = 0$<br>よって、$x = 2, 3$<br>したがって、共有点の座標は $(2, 0), (3, 0)$ です。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ（共有点がない場合は「なし」と答えよ）。<br>$y = 2x^2 + x - 1$",
        answer: "$(\\frac{1}{2}, 0), (-1, 0)$",
        rationale: "<strong>解説: </strong><br>$y=0$ とおきます。<br>$2x^2 + x - 1 = 0$<br>たすき掛けを用いて因数分解します。<br>$(2x-1)(x+1) = 0$<br>よって、$x = \\frac{1}{2}, -1$<br>共有点の座標は $(\\frac{1}{2}, 0), (-1, 0)$ です。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ（共有点がない場合は「なし」と答えよ）。<br>$y = 3x^2 + 7x - 3$",
        answer: "$(\\frac{-7 \\pm \\sqrt{85}}{6}, 0)$",
        rationale: "<strong>解説: </strong><br>$y=0$ とおきます。<br>$3x^2 + 7x - 3 = 0$<br>因数分解できないため、解の公式を利用します。<br>$x = \\frac{-7 \\pm \\sqrt{7^2 - 4 \\cdot 3 \\cdot (-3)}}{2 \\cdot 3}$<br>$x = \\frac{-7 \\pm \\sqrt{49 + 36}}{6}$<br>$x = \\frac{-7 \\pm \\sqrt{85}}{6}$<br>よって、共有点の座標は $(\\frac{-7 \\pm \\sqrt{85}}{6}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ（共有点がない場合は「なし」と答えよ）。<br>$y = 9x^2 + 6x + 1$",
        answer: "$(-\\frac{1}{3}, 0)$",
        rationale: "<strong>解説: </strong><br>$y=0$ とおきます。<br>$9x^2 + 6x + 1 = 0$<br>左辺は完全平方式です。<br>$(3x+1)^2 = 0$<br>よって、$x = -\\frac{1}{3}$（重解）<br>共有点は1点で、座標は $(-\\frac{1}{3}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ（共有点がない場合は「なし」と答えよ）。<br>$y = -x^2 - x - 2$",
        answer: "なし",
        rationale: "<strong>解説: </strong><br>$y=0$ とおきます。<br>$-x^2 - x - 2 = 0$<br>両辺に $-1$ を掛けて、$x^2 + x + 2 = 0$<br>判別式 $D$ を計算します。<br>$D = 1^2 - 4 \\cdot 1 \\cdot 2 = 1 - 8 = -7 < 0$<br>$D < 0$ なので実数解はありません。<br>よって、共有点は「なし」です。" + VIDEO_LINK
    },

    // --- 因数分解 (a=1) (6-15) ---
    // 問題 6
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 - 4$",
        answer: "$(\\pm 2, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 4 = 0$<br>$(x+2)(x-2) = 0$<br>$x = \\pm 2$<br>座標は $(2, 0), (-2, 0)$ です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 - 3x$",
        answer: "$(0, 0), (3, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 3x = 0$<br>$x(x-3) = 0$<br>$x = 0, 3$<br>座標は $(0, 0), (3, 0)$ です。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 - 5x + 4$",
        answer: "$(1, 0), (4, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 5x + 4 = 0$<br>$(x-1)(x-4) = 0$<br>$x = 1, 4$<br>座標は $(1, 0), (4, 0)$ です。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 + 2x - 8$",
        answer: "$(2, 0), (-4, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 + 2x - 8 = 0$<br>$(x-2)(x+4) = 0$<br>$x = 2, -4$<br>座標は $(2, 0), (-4, 0)$ です。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 - x - 12$",
        answer: "$(4, 0), (-3, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 - x - 12 = 0$<br>$(x-4)(x+3) = 0$<br>$x = 4, -3$<br>座標は $(4, 0), (-3, 0)$ です。" + VIDEO_LINK
    },
    // 問題 11
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 + 6x + 5$",
        answer: "$(-1, 0), (-5, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 + 6x + 5 = 0$<br>$(x+1)(x+5) = 0$<br>$x = -1, -5$<br>座標は $(-1, 0), (-5, 0)$ です。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 - 8x + 15$",
        answer: "$(3, 0), (5, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 8x + 15 = 0$<br>$(x-3)(x-5) = 0$<br>$x = 3, 5$<br>座標は $(3, 0), (5, 0)$ です。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 + 3x - 10$",
        answer: "$(2, 0), (-5, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 + 3x - 10 = 0$<br>$(x-2)(x+5) = 0$<br>$x = 2, -5$<br>座標は $(2, 0), (-5, 0)$ です。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 - 6x$",
        answer: "$(0, 0), (6, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 6x = 0$<br>$x(x-6) = 0$<br>$x = 0, 6$<br>座標は $(0, 0), (6, 0)$ です。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 - 1$",
        answer: "$(\\pm 1, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 1 = 0$<br>$(x+1)(x-1) = 0$<br>$x = \\pm 1$<br>座標は $(1, 0), (-1, 0)$ です。" + VIDEO_LINK
    },

    // --- 因数分解 (たすき掛け) (16-25) ---
    // 問題 16
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 2x^2 + 3x + 1$",
        answer: "$(-1, 0), (-\\frac{1}{2}, 0)$",
        rationale: "<strong>解説: </strong><br>$2x^2 + 3x + 1 = 0$<br>たすき掛け：$(x+1)(2x+1) = 0$<br>$x = -1, -\\frac{1}{2}$<br>座標は $(-1, 0), (-\\frac{1}{2}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 2x^2 - 5x + 2$",
        answer: "$(2, 0), (\\frac{1}{2}, 0)$",
        rationale: "<strong>解説: </strong><br>$2x^2 - 5x + 2 = 0$<br>たすき掛け：$(x-2)(2x-1) = 0$<br>$x = 2, \\frac{1}{2}$<br>座標は $(2, 0), (\\frac{1}{2}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 3x^2 - 4x + 1$",
        answer: "$(1, 0), (\\frac{1}{3}, 0)$",
        rationale: "<strong>解説: </strong><br>$3x^2 - 4x + 1 = 0$<br>$(x-1)(3x-1) = 0$<br>$x = 1, \\frac{1}{3}$<br>座標は $(1, 0), (\\frac{1}{3}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 3x^2 + 5x - 2$",
        answer: "$(-2, 0), (\\frac{1}{3}, 0)$",
        rationale: "<strong>解説: </strong><br>$3x^2 + 5x - 2 = 0$<br>$(x+2)(3x-1) = 0$<br>$x = -2, \\frac{1}{3}$<br>座標は $(-2, 0), (\\frac{1}{3}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 2x^2 + 5x - 3$",
        answer: "$(-3, 0), (\\frac{1}{2}, 0)$",
        rationale: "<strong>解説: </strong><br>$2x^2 + 5x - 3 = 0$<br>$(x+3)(2x-1) = 0$<br>$x = -3, \\frac{1}{2}$<br>座標は $(-3, 0), (\\frac{1}{2}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 21
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 4x^2 - 1$",
        answer: "$(\\pm \\frac{1}{2}, 0)$",
        rationale: "<strong>解説: </strong><br>$4x^2 - 1 = 0$<br>$(2x+1)(2x-1) = 0$<br>$x = \\pm \\frac{1}{2}$<br>座標は $(\\frac{1}{2}, 0), (-\\frac{1}{2}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 6x^2 - 7x - 3$",
        answer: "$(\\frac{3}{2}, 0), (-\\frac{1}{3}, 0)$",
        rationale: "<strong>解説: </strong><br>$6x^2 - 7x - 3 = 0$<br>たすき掛け：$(2x-3)(3x+1) = 0$<br>$x = \\frac{3}{2}, -\\frac{1}{3}$<br>座標は $(\\frac{3}{2}, 0), (-\\frac{1}{3}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 2x^2 - 3x - 2$",
        answer: "$(2, 0), (-\\frac{1}{2}, 0)$",
        rationale: "<strong>解説: </strong><br>$2x^2 - 3x - 2 = 0$<br>$(x-2)(2x+1) = 0$<br>$x = 2, -\\frac{1}{2}$<br>座標は $(2, 0), (-\\frac{1}{2}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 3x^2 - 2x$",
        answer: "$(0, 0), (\\frac{2}{3}, 0)$",
        rationale: "<strong>解説: </strong><br>$3x^2 - 2x = 0$<br>$x(3x-2) = 0$<br>$x = 0, \\frac{2}{3}$<br>座標は $(0, 0), (\\frac{2}{3}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 5x^2 + 10x$",
        answer: "$(0, 0), (-2, 0)$",
        rationale: "<strong>解説: </strong><br>$5x^2 + 10x = 0$<br>$5x(x+2) = 0$<br>$x = 0, -2$<br>座標は $(0, 0), (-2, 0)$ です。" + VIDEO_LINK
    },

    // --- 解の公式 (D>0) (26-35) ---
    // 問題 26
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 - x - 1$",
        answer: "$(\\frac{1 \\pm \\sqrt{5}}{2}, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 - x - 1 = 0$<br>解の公式：$x = \\frac{-(-1) \\pm \\sqrt{(-1)^2 - 4 \\cdot 1 \\cdot (-1)}}{2} = \\frac{1 \\pm \\sqrt{1+4}}{2}$<br>$x = \\frac{1 \\pm \\sqrt{5}}{2}$<br>座標は $(\\frac{1 + \\sqrt{5}}{2}, 0), (\\frac{1 - \\sqrt{5}}{2}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 + 3x + 1$",
        answer: "$(\\frac{-3 \\pm \\sqrt{5}}{2}, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 + 3x + 1 = 0$<br>解の公式：$x = \\frac{-3 \\pm \\sqrt{3^2 - 4 \\cdot 1 \\cdot 1}}{2} = \\frac{-3 \\pm \\sqrt{5}}{2}$<br>座標は $(\\frac{-3 \\pm \\sqrt{5}}{2}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 - 4x + 1$",
        answer: "$(2 \\pm \\sqrt{3}, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 4x + 1 = 0$<br>偶数の解の公式：$x = -(-2) \\pm \\sqrt{(-2)^2 - 1 \\cdot 1} = 2 \\pm \\sqrt{3}$<br>座標は $(2 + \\sqrt{3}, 0), (2 - \\sqrt{3}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 - 6x + 4$",
        answer: "$(3 \\pm \\sqrt{5}, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 6x + 4 = 0$<br>偶数の解の公式：$x = 3 \\pm \\sqrt{3^2 - 4} = 3 \\pm \\sqrt{5}$<br>座標は $(3 \\pm \\sqrt{5}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 2x^2 - x - 2$",
        answer: "$(\\frac{1 \\pm \\sqrt{17}}{4}, 0)$",
        rationale: "<strong>解説: </strong><br>$2x^2 - x - 2 = 0$<br>解の公式：$x = \\frac{1 \\pm \\sqrt{(-1)^2 - 4 \\cdot 2 \\cdot (-2)}}{2 \\cdot 2} = \\frac{1 \\pm \\sqrt{1 + 16}}{4}$<br>$x = \\frac{1 \\pm \\sqrt{17}}{4}$<br>座標は $(\\frac{1 \\pm \\sqrt{17}}{4}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 31
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 2x^2 + 5x + 1$",
        answer: "$(\\frac{-5 \\pm \\sqrt{17}}{4}, 0)$",
        rationale: "<strong>解説: </strong><br>$2x^2 + 5x + 1 = 0$<br>解の公式：$x = \\frac{-5 \\pm \\sqrt{25 - 8}}{4} = \\frac{-5 \\pm \\sqrt{17}}{4}$<br>座標は $(\\frac{-5 \\pm \\sqrt{17}}{4}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 3x^2 - 4x - 1$",
        answer: "$(\\frac{2 \\pm \\sqrt{7}}{3}, 0)$",
        rationale: "<strong>解説: </strong><br>$3x^2 - 4x - 1 = 0$<br>偶数の解の公式：$x = \\frac{2 \\pm \\sqrt{(-2)^2 - 3 \\cdot (-1)}}{3} = \\frac{2 \\pm \\sqrt{7}}{3}$<br>座標は $(\\frac{2 \\pm \\sqrt{7}}{3}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 - 5x + 3$",
        answer: "$(\\frac{5 \\pm \\sqrt{13}}{2}, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 5x + 3 = 0$<br>解の公式：$x = \\frac{5 \\pm \\sqrt{25 - 12}}{2} = \\frac{5 \\pm \\sqrt{13}}{2}$<br>座標は $(\\frac{5 \\pm \\sqrt{13}}{2}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 2x^2 + 3x - 1$",
        answer: "$(\\frac{-3 \\pm \\sqrt{17}}{4}, 0)$",
        rationale: "<strong>解説: </strong><br>$2x^2 + 3x - 1 = 0$<br>解の公式：$x = \\frac{-3 \\pm \\sqrt{9 - 4 \\cdot 2 \\cdot (-1)}}{4} = \\frac{-3 \\pm \\sqrt{17}}{4}$<br>座標は $(\\frac{-3 \\pm \\sqrt{17}}{4}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 + 2x - 4$",
        answer: "$(-1 \\pm \\sqrt{5}, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 + 2x - 4 = 0$<br>偶数の解の公式：$x = -1 \\pm \\sqrt{1^2 - (-4)} = -1 \\pm \\sqrt{5}$<br>座標は $(-1 \\pm \\sqrt{5}, 0)$ です。" + VIDEO_LINK
    },

    // --- 接する場合 (D=0) (36-40) ---
    // 問題 36
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 - 2x + 1$",
        answer: "$(1, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 2x + 1 = 0$<br>$(x-1)^2 = 0$<br>$x = 1$<br>接点となり、座標は $(1, 0)$ です。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 + 4x + 4$",
        answer: "$(-2, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 + 4x + 4 = 0$<br>$(x+2)^2 = 0$<br>$x = -2$<br>座標は $(-2, 0)$ です。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 4x^2 - 4x + 1$",
        answer: "$(\\frac{1}{2}, 0)$",
        rationale: "<strong>解説: </strong><br>$4x^2 - 4x + 1 = 0$<br>$(2x-1)^2 = 0$<br>$x = \\frac{1}{2}$<br>座標は $(\\frac{1}{2}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = 9x^2 - 12x + 4$",
        answer: "$(\\frac{2}{3}, 0)$",
        rationale: "<strong>解説: </strong><br>$9x^2 - 12x + 4 = 0$<br>$(3x-2)^2 = 0$<br>$x = \\frac{2}{3}$<br>座標は $(\\frac{2}{3}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = x^2 + 10x + 25$",
        answer: "$(-5, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 + 10x + 25 = 0$<br>$(x+5)^2 = 0$<br>$x = -5$<br>座標は $(-5, 0)$ です。" + VIDEO_LINK
    },

    // --- 共有点なし (D<0) (41-45) ---
    // 問題 41
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ（共有点がない場合は「なし」と答えよ）。<br>$y = x^2 + x + 1$",
        answer: "なし",
        rationale: "<strong>解説: </strong><br>$x^2 + x + 1 = 0$<br>判別式 $D = 1^2 - 4 \\cdot 1 \\cdot 1 = -3 < 0$<br>実数解を持たないため、共有点は「なし」です。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ（共有点がない場合は「なし」と答えよ）。<br>$y = x^2 - 2x + 3$",
        answer: "なし",
        rationale: "<strong>解説: </strong><br>$x^2 - 2x + 3 = 0$<br>判別式 $D/4 = (-1)^2 - 1 \\cdot 3 = 1 - 3 = -2 < 0$<br>共有点は「なし」です。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ（共有点がない場合は「なし」と答えよ）。<br>$y = 2x^2 + 2x + 1$",
        answer: "なし",
        rationale: "<strong>解説: </strong><br>$2x^2 + 2x + 1 = 0$<br>判別式 $D/4 = 1^2 - 2 \\cdot 1 = -1 < 0$<br>共有点は「なし」です。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ（共有点がない場合は「なし」と答えよ）。<br>$y = 3x^2 - 4x + 2$",
        answer: "なし",
        rationale: "<strong>解説: </strong><br>判別式 $D/4 = (-2)^2 - 3 \\cdot 2 = 4 - 6 = -2 < 0$<br>共有点は「なし」です。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ（共有点がない場合は「なし」と答えよ）。<br>$y = -x^2 + 3x - 5$",
        answer: "なし",
        rationale: "<strong>解説: </strong><br>$-x^2 + 3x - 5 = 0 \\Leftrightarrow x^2 - 3x + 5 = 0$<br>判別式 $D = (-3)^2 - 4 \\cdot 1 \\cdot 5 = 9 - 20 = -11 < 0$<br>共有点は「なし」です。" + VIDEO_LINK
    },

    // --- 応用・総合 (46-50) ---
    // 問題 46
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = -2x^2 + 4x + 6$",
        answer: "$(-1, 0), (3, 0)$",
        rationale: "<strong>解説: </strong><br>$-2x^2 + 4x + 6 = 0$<br>両辺を $-2$ で割ります。<br>$x^2 - 2x - 3 = 0$<br>$(x-3)(x+1) = 0$<br>$x = 3, -1$<br>座標は $(3, 0), (-1, 0)$ です。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = (x-2)^2 - 9$",
        answer: "$(5, 0), (-1, 0)$",
        rationale: "<strong>解説: </strong><br>$(x-2)^2 - 9 = 0$<br>$(x-2)^2 = 9$<br>$x-2 = \\pm 3$<br>$x = 2 \\pm 3$<br>$x = 5, -1$<br>座標は $(5, 0), (-1, 0)$ です。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = -x^2 + 4$",
        answer: "$(\\pm 2, 0)$",
        rationale: "<strong>解説: </strong><br>$-x^2 + 4 = 0$<br>$x^2 = 4$<br>$x = \\pm 2$<br>座標は $(2, 0), (-2, 0)$ です。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = \\frac{1}{2}x^2 - x - 4$",
        answer: "$(4, 0), (-2, 0)$",
        rationale: "<strong>解説: </strong><br>$\\frac{1}{2}x^2 - x - 4 = 0$<br>両辺を2倍します。<br>$x^2 - 2x - 8 = 0$<br>$(x-4)(x+2) = 0$<br>$x = 4, -2$<br>座標は $(4, 0), (-2, 0)$ です。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "次の2次関数のグラフと$x$軸の共有点の座標を求めよ。<br>$y = -3x^2 + 12x - 12$",
        answer: "$(2, 0)$",
        rationale: "<strong>解説: </strong><br>$-3x^2 + 12x - 12 = 0$<br>両辺を $-3$ で割ります。<br>$x^2 - 4x + 4 = 0$<br>$(x-2)^2 = 0$<br>$x = 2$<br>座標は $(2, 0)$ です。" + VIDEO_LINK
    }
];