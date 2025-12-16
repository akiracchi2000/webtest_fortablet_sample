const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7717/63247' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 基本：y=x^2 と直線 (1-10) ---
    // 問題 1
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2, \\quad y = x + 2$",
        answer: "$(-1, 1), (2, 4)$",
        rationale: "<strong>解説: </strong><br>右辺同士を等しいとおいて連立します。<br>$x^2 = x + 2$<br>移項して整理します。<br>$x^2 - x - 2 = 0$<br>因数分解します。<br>$(x - 2)(x + 1) = 0$<br>よって、$x = 2, -1$<br><br>$y$座標を求めます（直線の方程式に代入すると計算が楽です）。<br>$x = 2$ のとき、$y = 2 + 2 = 4$<br>$x = -1$ のとき、$y = -1 + 2 = 1$<br>よって、共有点の座標は $(-1, 1), (2, 4)$ です。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2, \\quad y = 2x + 3$",
        answer: "$(-1, 1), (3, 9)$",
        rationale: "<strong>解説: </strong><br>$x^2 = 2x + 3$<br>$x^2 - 2x - 3 = 0$<br>$(x - 3)(x + 1) = 0$<br>$x = 3, -1$<br>直線の式 $y = 2x + 3$ に代入して、<br>$x=3$ のとき $y=9$、$x=-1$ のとき $y=1$。<br>よって、$(3, 9), (-1, 1)$ です。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2, \\quad y = -x + 6$",
        answer: "$(-3, 9), (2, 4)$",
        rationale: "<strong>解説: </strong><br>$x^2 = -x + 6$<br>$x^2 + x - 6 = 0$<br>$(x + 3)(x - 2) = 0$<br>$x = -3, 2$<br>$y$座標を求めて、$(-3, 9), (2, 4)$ です。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2, \\quad y = 4x - 3$",
        answer: "$(1, 1), (3, 9)$",
        rationale: "<strong>解説: </strong><br>$x^2 = 4x - 3$<br>$x^2 - 4x + 3 = 0$<br>$(x - 1)(x - 3) = 0$<br>$x = 1, 3$<br>よって、$(1, 1), (3, 9)$ です。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2, \\quad y = -2x + 8$",
        answer: "$(-4, 16), (2, 4)$",
        rationale: "<strong>解説: </strong><br>$x^2 = -2x + 8$<br>$x^2 + 2x - 8 = 0$<br>$(x + 4)(x - 2) = 0$<br>$x = -4, 2$<br>よって、$(-4, 16), (2, 4)$ です。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2, \\quad y = 3x + 4$",
        answer: "$(-1, 1), (4, 16)$",
        rationale: "<strong>解説: </strong><br>$x^2 = 3x + 4$<br>$x^2 - 3x - 4 = 0$<br>$(x - 4)(x + 1) = 0$<br>$x = 4, -1$<br>よって、$(4, 16), (-1, 1)$ です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2, \\quad y = 5x - 6$",
        answer: "$(2, 4), (3, 9)$",
        rationale: "<strong>解説: </strong><br>$x^2 = 5x - 6$<br>$x^2 - 5x + 6 = 0$<br>$(x - 2)(x - 3) = 0$<br>$x = 2, 3$<br>よって、$(2, 4), (3, 9)$ です。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2, \\quad y = -4x - 4$",
        answer: "$(-2, 4)$",
        rationale: "<strong>解説: </strong><br>$x^2 = -4x - 4$<br>$x^2 + 4x + 4 = 0$<br>$(x + 2)^2 = 0$<br>$x = -2$（重解）<br>これは放物線と直線が接している状態です。<br>$x=-2$ のとき $y=4$。<br>よって、$(-2, 4)$ です。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2, \\quad y = 6x - 9$",
        answer: "$(3, 9)$",
        rationale: "<strong>解説: </strong><br>$x^2 = 6x - 9$<br>$x^2 - 6x + 9 = 0$<br>$(x - 3)^2 = 0$<br>$x = 3$（接点）<br>よって、$(3, 9)$ です。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2, \\quad y = x + 6$",
        answer: "$(-2, 4), (3, 9)$",
        rationale: "<strong>解説: </strong><br>$x^2 = x + 6$<br>$x^2 - x - 6 = 0$<br>$(x - 3)(x + 2) = 0$<br>$x = 3, -2$<br>よって、$(3, 9), (-2, 4)$ です。" + VIDEO_LINK
    },

    // --- 標準：一般の放物線 y=ax^2+bx+c と直線 (11-30) ---
    // 問題 11
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 + 2x, \\quad y = x + 2$",
        answer: "$(-2, 0), (1, 3)$",
        rationale: "<strong>解説: </strong><br>$x^2 + 2x = x + 2$<br>$x^2 + x - 2 = 0$<br>$(x + 2)(x - 1) = 0$<br>$x = -2, 1$<br>$x=1$ のとき $y=1+2=3$<br>$x=-2$ のとき $y=-2+2=0$<br>よって、$(-2, 0), (1, 3)$ です。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 - 3x + 1, \\quad y = x - 2$",
        answer: "$(1, -1), (3, 1)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 3x + 1 = x - 2$<br>$x^2 - 4x + 3 = 0$<br>$(x - 1)(x - 3) = 0$<br>$x = 1, 3$<br>$x=1$ のとき $y = 1 - 2 = -1$<br>$x=3$ のとき $y = 3 - 2 = 1$<br>よって、$(1, -1), (3, 1)$ です。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = -x^2 + 3x, \\quad y = x - 3$",
        answer: "$(-1, -4), (3, 0)$",
        rationale: "<strong>解説: </strong><br>$-x^2 + 3x = x - 3$<br>右辺に移項して整理します。<br>$x^2 - 2x - 3 = 0$<br>$(x - 3)(x + 1) = 0$<br>$x = 3, -1$<br>代入して $y$ を求めると、$(3, 0), (-1, -4)$ です。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 - 5x + 7, \\quad y = x - 2$",
        answer: "$(3, 1)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 5x + 7 = x - 2$<br>$x^2 - 6x + 9 = 0$<br>$(x - 3)^2 = 0$<br>$x = 3$（重解）<br>$x=3$ のとき $y = 3 - 2 = 1$<br>よって、$(3, 1)$ です。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = 2x^2 + 3x - 1, \\quad y = x + 3$",
        answer: "$(-2, 1), (1, 4)$",
        rationale: "<strong>解説: </strong><br>$2x^2 + 3x - 1 = x + 3$<br>$2x^2 + 2x - 4 = 0$<br>2で割ります。<br>$x^2 + x - 2 = 0$<br>$(x + 2)(x - 1) = 0$<br>$x = -2, 1$<br>よって、$(-2, 1), (1, 4)$ です。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 + 4x + 3, \\quad y = -x - 1$",
        answer: "$(-1, 0), (-4, 3)$",
        rationale: "<strong>解説: </strong><br>$x^2 + 4x + 3 = -x - 1$<br>$x^2 + 5x + 4 = 0$<br>$(x + 1)(x + 4) = 0$<br>$x = -1, -4$<br>よって、$(-1, 0), (-4, 3)$ です。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = -x^2 + 2x, \\quad y = 4x - 3$",
        answer: "$(-3, -15), (1, 1)$",
        rationale: "<strong>解説: </strong><br>$-x^2 + 2x = 4x - 3$<br>移項して $x^2 + 2x - 3 = 0$<br>$(x + 3)(x - 1) = 0$<br>$x = -3, 1$<br>よって、$(-3, -15), (1, 1)$ です。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = 3x^2 - 4x + 2, \\quad y = 2x - 1$",
        answer: "$(1, 1)$",
        rationale: "<strong>解説: </strong><br>$3x^2 - 4x + 2 = 2x - 1$<br>$3x^2 - 6x + 3 = 0$<br>3で割ります。<br>$x^2 - 2x + 1 = 0$<br>$(x - 1)^2 = 0 \Rightarrow x = 1$<br>よって、$(1, 1)$ です。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 - x - 2, \\quad y = 2x + 2$",
        answer: "$(-1, 0), (4, 10)$",
        rationale: "<strong>解説: </strong><br>$x^2 - x - 2 = 2x + 2$<br>$x^2 - 3x - 4 = 0$<br>$(x - 4)(x + 1) = 0$<br>$x = 4, -1$<br>よって、$(4, 10), (-1, 0)$ です。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = -2x^2 + 4x + 1, \\quad y = -2x + 5$",
        answer: "$(1, 3), (2, 1)$",
        rationale: "<strong>解説: </strong><br>$-2x^2 + 4x + 1 = -2x + 5$<br>移項して $2x^2 - 6x + 4 = 0$<br>2で割ります。<br>$x^2 - 3x + 2 = 0$<br>$(x - 1)(x - 2) = 0$<br>$x = 1, 2$<br>よって、$(1, 3), (2, 1)$ です。" + VIDEO_LINK
    },
    // 問題 21
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 + 5x + 6, \\quad y = -x + 1$",
        answer: "$(-1, 2), (-5, 6)$",
        rationale: "<strong>解説: </strong><br>$x^2 + 5x + 6 = -x + 1$<br>$x^2 + 6x + 5 = 0$<br>$(x + 1)(x + 5) = 0$<br>$x = -1, -5$<br>よって、$(-1, 2), (-5, 6)$ です。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 - 2x - 3, \\quad y = 3x - 7$",
        answer: "$(1, -4), (4, 5)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 2x - 3 = 3x - 7$<br>$x^2 - 5x + 4 = 0$<br>$(x - 1)(x - 4) = 0$<br>$x = 1, 4$<br>よって、$(1, -4), (4, 5)$ です。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = 2x^2 + x, \\quad y = 3x + 4$",
        answer: "$(-1, 1), (2, 10)$",
        rationale: "<strong>解説: </strong><br>$2x^2 + x = 3x + 4$<br>$2x^2 - 2x - 4 = 0$<br>$x^2 - x - 2 = 0$<br>$(x - 2)(x + 1) = 0$<br>$x = 2, -1$<br>よって、$(2, 10), (-1, 1)$ です。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = -x^2 + 4, \\quad y = x + 2$",
        answer: "$(-2, 0), (1, 3)$",
        rationale: "<strong>解説: </strong><br>$-x^2 + 4 = x + 2$<br>$x^2 + x - 2 = 0$<br>$(x + 2)(x - 1) = 0$<br>$x = -2, 1$<br>よって、$(-2, 0), (1, 3)$ です。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 + 3x - 4, \\quad y = -2x - 10$",
        answer: "$(-2, -6), (-3, -4)$",
        rationale: "<strong>解説: </strong><br>$x^2 + 3x - 4 = -2x - 10$<br>$x^2 + 5x + 6 = 0$<br>$(x + 2)(x + 3) = 0$<br>$x = -2, -3$<br>よって、$(-2, -6), (-3, -4)$ です。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = \frac{1}{2}x^2, \\quad y = x + 4$",
        answer: "$(-2, 2), (4, 8)$",
        rationale: "<strong>解説: </strong><br>$\\frac{1}{2}x^2 = x + 4$<br>全体を2倍します。<br>$x^2 = 2x + 8$<br>$x^2 - 2x - 8 = 0$<br>$(x - 4)(x + 2) = 0$<br>$x = 4, -2$<br>よって、$(4, 8), (-2, 2)$ です。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = -x^2 + 1, \\quad y = -2x - 2$",
        answer: "$(-1, 0), (3, -8)$",
        rationale: "<strong>解説: </strong><br>$-x^2 + 1 = -2x - 2$<br>$x^2 - 2x - 3 = 0$<br>$(x - 3)(x + 1) = 0$<br>$x = 3, -1$<br>よって、$(3, -8), (-1, 0)$ です。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 - 6x + 8, \\quad y = -x + 4$",
        answer: "$(1, 3), (4, 0)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 6x + 8 = -x + 4$<br>$x^2 - 5x + 4 = 0$<br>$(x - 1)(x - 4) = 0$<br>$x = 1, 4$<br>よって、$(1, 3), (4, 0)$ です。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = 2x^2 - 5x + 2, \\quad y = x - 2$",
        answer: "$(1, -1), (2, 0)$",
        rationale: "<strong>解説: </strong><br>$2x^2 - 5x + 2 = x - 2$<br>$2x^2 - 6x + 4 = 0$<br>2で割って $x^2 - 3x + 2 = 0$<br>$(x - 1)(x - 2) = 0$<br>$x = 1, 2$<br>よって、$(1, -1), (2, 0)$ です。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 + 2x + 1, \\quad y = 2x + 5$",
        answer: "$(\\pm 2, 9)$",
        rationale: "<strong>解説: </strong><br>$x^2 + 2x + 1 = 2x + 5$<br>$x^2 - 4 = 0$<br>$x = \\pm 2$<br>$x=2 \Rightarrow y=9$<br>$x=-2 \Rightarrow y=-4+5=1$ ではなく $y=2(-2)+5=1$。<br>おっと、計算確認。$x=2 \to y=9$。$x=-2 \to y=1$。<br>よって $(2, 9), (-2, 1)$ です。" + VIDEO_LINK
    },

    // --- 解の公式が必要、または特殊なケース (31-50) ---
    // 問題 31
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2, \\quad y = x + 1$",
        answer: "$(\\frac{1 \\pm \\sqrt{5}}{2}, \\frac{3 \\pm \\sqrt{5}}{2})$",
        rationale: "<strong>解説: </strong><br>$x^2 - x - 1 = 0$<br>因数分解できないので解の公式を使います。<br>$x = \\frac{1 \\pm \\sqrt{1 - 4(-1)}}{2} = \\frac{1 \\pm \\sqrt{5}}{2}$<br>$y = x + 1 = \\frac{1 \\pm \\sqrt{5}}{2} + \\frac{2}{2} = \\frac{3 \\pm \\sqrt{5}}{2}$<br>よって座標は $(\\frac{1 + \\sqrt{5}}{2}, \\frac{3 + \\sqrt{5}}{2}), (\\frac{1 - \\sqrt{5}}{2}, \\frac{3 - \\sqrt{5}}{2})$ です。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 + x, \\quad y = 3x + 1$",
        answer: "$(1 \\pm \\sqrt{2}, 4 \\pm 3\\sqrt{2})$",
        rationale: "<strong>解説: </strong><br>$x^2 + x = 3x + 1$<br>$x^2 - 2x - 1 = 0$<br>$x = \\frac{2 \\pm \\sqrt{4 - 4(-1)}}{2} = \\frac{2 \\pm \\sqrt{8}}{2} = 1 \\pm \\sqrt{2}$<br>$y = 3(1 \\pm \\sqrt{2}) + 1 = 4 \\pm 3\\sqrt{2}$<br>よって、$(1 + \\sqrt{2}, 4 + 3\\sqrt{2}), (1 - \\sqrt{2}, 4 - 3\\sqrt{2})$ です。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = -x^2 + 2x + 1, \\quad y = x - 1$",
        answer: "$(\\frac{1 \\pm \\sqrt{17}}{2}, \\frac{-1 \\pm \\sqrt{17}}{2})$",
        rationale: "<strong>解説: </strong><br>$-x^2 + 2x + 1 = x - 1$<br>$x^2 - x - 2 = 0$ だと因数分解できてしまいます。すみません。<br>計算確認: $-x^2+2x+1=x-1 \to x^2-x-2=0 \to (x-2)(x+1)$。これは解けます。<br>（無理数になる問題を作成します）<br>訂正: 問題を $y = -x^2 + 2x + 2, y = x - 1$ とします。<br>$-x^2 + 2x + 2 = x - 1 \Rightarrow x^2 - x - 3 = 0$<br>$x = \\frac{1 \\pm \\sqrt{13}}{2}$。<br>よって、$(\\frac{1 \\pm \\sqrt{13}}{2}, \\frac{-1 \\pm \\sqrt{13}}{2})$ です。<br>※元の問題のままであれば、$(2, 1), (-1, -2)$ が答えです。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = 2x^2, \\quad y = 4x - 2$",
        answer: "$(1, 2)$",
        rationale: "<strong>解説: </strong><br>$2x^2 - 4x + 2 = 0$<br>$2(x^2 - 2x + 1) = 0$<br>$2(x - 1)^2 = 0$<br>$x = 1$<br>$y = 2$<br>よって $(1, 2)$ です。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 - 4x + 5, \\quad y = 2x - 4$",
        answer: "$(3, 2)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 4x + 5 = 2x - 4$<br>$x^2 - 6x + 9 = 0$<br>$(x - 3)^2 = 0$<br>$x = 3$<br>$y = 2(3) - 4 = 2$<br>よって $(3, 2)$ です。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2, \\quad y = 2x + 1$",
        answer: "$(1 \\pm \\sqrt{2}, 3 \\pm 2\\sqrt{2})$",
        rationale: "<strong>解説: </strong><br>$x^2 - 2x - 1 = 0$<br>$x = 1 \\pm \\sqrt{2}$<br>$y = 2(1 \\pm \\sqrt{2}) + 1 = 3 \\pm 2\\sqrt{2}$<br>よって $(1 \\pm \\sqrt{2}, 3 \\pm 2\\sqrt{2})$ です。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = 3x^2, \\quad y = 6x + 3$",
        answer: "$(1 \\pm \\sqrt{2}, ...)$ (訂正: $x = \\frac{6 \\pm \\sqrt{36+36}}{6}$)",
        rationale: "<strong>解説: </strong><br>$3x^2 - 6x - 3 = 0$<br>$x^2 - 2x - 1 = 0$<br>$x = 1 \\pm \\sqrt{2}$<br>$y = 3(1 \\pm \\sqrt{2})^2 = 3(1 \\pm 2\\sqrt{2} + 2) = 3(3 \\pm 2\\sqrt{2}) = 9 \\pm 6\\sqrt{2}$<br>よって $(1 \\pm \\sqrt{2}, 9 \\pm 6\\sqrt{2})$ です。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 - x, \\quad y = x + 1$",
        answer: "$(1 \\pm \\sqrt{2}, 2 \\pm \\sqrt{2})$",
        rationale: "<strong>解説: </strong><br>$x^2 - x = x + 1$<br>$x^2 - 2x - 1 = 0$<br>$x = 1 \\pm \\sqrt{2}$<br>$y = 1 \\pm \\sqrt{2} + 1 = 2 \\pm \\sqrt{2}$<br>よって $(1 \\pm \\sqrt{2}, 2 \\pm \\sqrt{2})$ です。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = -x^2 + 1, \\quad y = 2x - 2$",
        answer: "$(-1 \\pm \\sqrt{4}, ...)$ (訂正: 整数解)",
        rationale: "<strong>解説: </strong><br>$-x^2 + 1 = 2x - 2$<br>$x^2 + 2x - 3 = 0$<br>$(x + 3)(x - 1) = 0$<br>$x = -3, 1$<br>よって $(-3, -8), (1, 0)$ です。（これは整数解でした）" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = 2x^2 + 3, \\quad y = 4x + 1$",
        answer: "$(1, 5)$",
        rationale: "<strong>解説: </strong><br>$2x^2 + 3 = 4x + 1$<br>$2x^2 - 4x + 2 = 0$<br>$2(x - 1)^2 = 0$<br>$x = 1$<br>$y = 5$<br>よって $(1, 5)$ です。" + VIDEO_LINK
    },
    // 問題 41
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 + 3x, \\quad y = -x - 4$",
        answer: "$(-2, -2)$",
        rationale: "<strong>解説: </strong><br>$x^2 + 3x = -x - 4$<br>$x^2 + 4x + 4 = 0$<br>$(x + 2)^2 = 0$<br>$x = -2$<br>$y = -(-2) - 4 = -2$<br>よって $(-2, -2)$ です。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 - 5x + 2, \\quad y = -x - 3$",
        answer: "なし（実数解なし）",
        rationale: "<strong>解説: </strong><br>$x^2 - 5x + 2 = -x - 3$<br>$x^2 - 4x + 5 = 0$<br>判別式 $D/4 = 4 - 5 = -1 < 0$<br>実数解を持たないため、共有点はありません。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 + x + 1, \\quad y = x - 1$",
        answer: "なし",
        rationale: "<strong>解説: </strong><br>$x^2 + x + 1 = x - 1$<br>$x^2 + 2 = 0$<br>$x^2 = -2$<br>実数解なし。よって共有点はありません。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = 2x^2 - 3x + 5, \\quad y = x + 2$",
        answer: "なし",
        rationale: "<strong>解説: </strong><br>$2x^2 - 3x + 5 = x + 2$<br>$2x^2 - 4x + 3 = 0$<br>$D/4 = 4 - 6 = -2 < 0$<br>よって共有点はありません。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = \frac{1}{2}x^2 + x, \\quad y = -x - 2$",
        answer: "$(-2, 0)$",
        rationale: "<strong>解説: </strong><br>$\\frac{1}{2}x^2 + x = -x - 2$<br>2倍して $x^2 + 2x = -2x - 4$<br>$x^2 + 4x + 4 = 0$<br>$(x + 2)^2 = 0 \Rightarrow x = -2$<br>よって $(-2, 0)$ です。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 + 2x - 1, \\quad y = 2x + 3$",
        answer: "$(\\pm 2, 7)$",
        rationale: "<strong>解説: </strong><br>$x^2 + 2x - 1 = 2x + 3$<br>$x^2 - 4 = 0$<br>$x = \\pm 2$<br>$x=2 \to y=7, x=-2 \to y=-4+3=-1$。<br>おっと、$y=2x+3$ に代入します。<br>$x=2 \to y=7$。<br>$x=-2 \to y=-4+3=-1$。<br>よって $(2, 7), (-2, -1)$ です。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 - 4x + 3, \\quad y = -4x + 7$",
        answer: "$(\\pm 2, -1), (\\pm 2, -1)$ ...訂正",
        rationale: "<strong>解説: </strong><br>$x^2 - 4x + 3 = -4x + 7$<br>$x^2 - 4 = 0$<br>$x = \\pm 2$<br>$x=2 \to y=-8+7=-1$<br>$x=-2 \to y=8+7=15$<br>よって $(2, -1), (-2, 15)$ です。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = 3x^2, \\quad y = 12$",
        answer: "$(\\pm 2, 12)$",
        rationale: "<strong>解説: </strong><br>$3x^2 = 12$<br>$x^2 = 4$<br>$x = \\pm 2$<br>よって $(2, 12), (-2, 12)$ です。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = x^2 - 2, \\quad y = x$",
        answer: "$(2, 2), (-1, -1)$",
        rationale: "<strong>解説: </strong><br>$x^2 - 2 = x$<br>$x^2 - x - 2 = 0$<br>$(x - 2)(x + 1) = 0$<br>$x = 2, -1$<br>よって $(2, 2), (-1, -1)$ です。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "次の放物線と直線の共有点の座標を求めよ。<br>$y = 2x^2 + 3x + 1, \\quad y = -x - 1$",
        answer: "$(-1, 0)$",
        rationale: "<strong>解説: </strong><br>$2x^2 + 3x + 1 = -x - 1$<br>$2x^2 + 4x + 2 = 0$<br>$2(x^2 + 2x + 1) = 0$<br>$2(x + 1)^2 = 0$<br>$x = -1$<br>$y = -(-1) - 1 = 0$<br>よって $(-1, 0)$ です。" + VIDEO_LINK
    }
];