const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7716/63210' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 第1部：基本の平方完成・下に凸 (1-10) ---
    // 問題 1
    {
        question: "2次関数 $y=x^2-4x$ の最大値または最小値を求めよ。",
        answer: "$x=2$ で最小値 $-4$",
        rationale: "<strong>解説: </strong><br>最大値・最小値を求めるために、平方完成をして頂点の座標を調べます。<br>1. $x$ の係数 $-4$ の半分の2乗（$(-2)^2=4$）を足して引きます。<br>   $y = x^2 - 4x + 4 - 4$<br>2. 因数分解して形を整えます。<br>   $y = (x - 2)^2 - 4$<br><br>頂点は $(2, -4)$ です。<br>$x^2$ の係数が $1$（プラス）なので、グラフは**下に凸**の放物線です。<br>よって、頂点で一番低い値（最小値）をとります。<br>最大値はありません（無限に大きくなるため）。<br><br><strong>答え：</strong> $x=2$ のとき、最小値 $-4$" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "2次関数 $y=x^2-6x+5$ の最大値または最小値を求めよ。",
        answer: "$x=3$ で最小値 $-4$",
        rationale: "<strong>解説: </strong><br>平方完成を行います。<br>$y = x^2 - 6x + 5$<br>$= (x^2 - 6x + 9) - 9 + 5$<br>$= (x - 3)^2 - 4$<br><br>頂点は $(3, -4)$、下に凸のグラフです。<br>よって最小値をとります。<br><br><strong>答え：</strong> $x=3$ のとき、最小値 $-4$" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "2次関数 $y=x^2+2x-3$ の最大値または最小値を求めよ。",
        answer: "$x=-1$ で最小値 $-4$",
        rationale: "<strong>解説: </strong><br>平方完成を行います。<br>$y = x^2 + 2x - 3$<br>$= (x^2 + 2x + 1) - 1 - 3$<br>$= (x + 1)^2 - 4$<br><br>頂点は $(-1, -4)$、下に凸のグラフです。<br><br><strong>答え：</strong> $x=-1$ のとき、最小値 $-4$" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "2次関数 $y=x^2-2x+3$ の最大値または最小値を求めよ。",
        answer: "$x=1$ で最小値 $2$",
        rationale: "<strong>解説: </strong><br>平方完成を行います。<br>$y = x^2 - 2x + 3$<br>$= (x^2 - 2x + 1) - 1 + 3$<br>$= (x - 1)^2 + 2$<br><br>頂点は $(1, 2)$、下に凸のグラフです。<br><br><strong>答え：</strong> $x=1$ のとき、最小値 $2$" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "2次関数 $y=x^2+4x+1$ の最大値または最小値を求めよ。",
        answer: "$x=-2$ で最小値 $-3$",
        rationale: "<strong>解説: </strong><br>平方完成を行います。<br>$y = x^2 + 4x + 1$<br>$= (x^2 + 4x + 4) - 4 + 1$<br>$= (x + 2)^2 - 3$<br><br>頂点は $(-2, -3)$、下に凸のグラフです。<br><br><strong>答え：</strong> $x=-2$ のとき、最小値 $-3$" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "2次関数 $y=x^2-8x+10$ の最大値または最小値を求めよ。",
        answer: "$x=4$ で最小値 $-6$",
        rationale: "<strong>解説: </strong><br>平方完成を行います。<br>$y = x^2 - 8x + 10$<br>$= (x - 4)^2 - 16 + 10$<br>$= (x - 4)^2 - 6$<br><br>頂点は $(4, -6)$、下に凸のグラフです。<br><br><strong>答え：</strong> $x=4$ のとき、最小値 $-6$" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "2次関数 $y=x^2+10x$ の最大値または最小値を求めよ。",
        answer: "$x=-5$ で最小値 $-25$",
        rationale: "<strong>解説: </strong><br>定数項がない場合も手順は同じです。<br>$y = x^2 + 10x$<br>$= (x^2 + 10x + 25) - 25$<br>$= (x + 5)^2 - 25$<br><br>頂点は $(-5, -25)$、下に凸のグラフです。<br><br><strong>答え：</strong> $x=-5$ のとき、最小値 $-25$" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "2次関数 $y=(x-3)^2+1$ の最大値または最小値を求めよ。",
        answer: "$x=3$ で最小値 $1$",
        rationale: "<strong>解説: </strong><br>この式はすでに平方完成されています（基本形）。<br>式から直接、頂点が $(3, 1)$ であると読み取れます。<br>係数がプラスなので下に凸です。<br><br><strong>答え：</strong> $x=3$ のとき、最小値 $1$" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "2次関数 $y=x^2+6x+9$ の最大値または最小値を求めよ。",
        answer: "$x=-3$ で最小値 $0$",
        rationale: "<strong>解説: </strong><br>因数分解の公式がそのまま使えます。<br>$y = x^2 + 6x + 9 = (x + 3)^2$<br>頂点は $(-3, 0)$ です。<br><br><strong>答え：</strong> $x=-3$ のとき、最小値 $0$" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "2次関数 $y=x^2-5$ の最大値または最小値を求めよ。",
        answer: "$x=0$ で最小値 $-5$",
        rationale: "<strong>解説: </strong><br>$x$ の1次の項がない場合、軸は $y$軸（$x=0$）です。<br>$y = (x - 0)^2 - 5$ と考えられます。<br>頂点は $(0, -5)$ です。<br><br><strong>答え：</strong> $x=0$ のとき、最小値 $-5$" + VIDEO_LINK
    },

    // --- 第2部：上に凸のグラフ (11-20) ---
    // 問題 11
    {
        question: "2次関数 $y=-x^2+2x$ の最大値または最小値を求めよ。",
        answer: "$x=1$ で最大値 $1$",
        rationale: "<strong>解説: </strong><br>$x^2$ の係数がマイナスの場合、まずマイナスでくくります。<br>$y = -(x^2 - 2x)$<br>$= -\{(x - 1)^2 - 1\}$<br>$= -(x - 1)^2 + 1$<br><br>頂点は $(1, 1)$ です。<br>$x^2$ の係数が負（$-1 < 0$）なので、グラフは**上に凸**（山型）になります。<br>よって、頂点で一番高い値（最大値）をとります。<br>最小値はありません（無限に小さくなるため）。<br><br><strong>答え：</strong> $x=1$ のとき、最大値 $1$" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "2次関数 $y=-x^2+4x-3$ の最大値または最小値を求めよ。",
        answer: "$x=2$ で最大値 $1$",
        rationale: "<strong>解説: </strong><br>平方完成を行います。<br>$y = -(x^2 - 4x) - 3$<br>$= -\{(x - 2)^2 - 4\} - 3$<br>$= -(x - 2)^2 + 4 - 3$<br>$= -(x - 2)^2 + 1$<br><br>頂点は $(2, 1)$、上に凸のグラフです。<br><br><strong>答え：</strong> $x=2$ のとき、最大値 $1$" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "2次関数 $y=-x^2-2x+5$ の最大値または最小値を求めよ。",
        answer: "$x=-1$ で最大値 $6$",
        rationale: "<strong>解説: </strong><br>平方完成を行います。<br>$y = -(x^2 + 2x) + 5$<br>$= -\{(x + 1)^2 - 1\} + 5$<br>$= -(x + 1)^2 + 1 + 5$<br>$= -(x + 1)^2 + 6$<br><br>頂点は $(-1, 6)$、上に凸のグラフです。<br><br><strong>答え：</strong> $x=-1$ のとき、最大値 $6$" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "2次関数 $y=-x^2+6x+1$ の最大値または最小値を求めよ。",
        answer: "$x=3$ で最大値 $10$",
        rationale: "<strong>解説: </strong><br>平方完成を行います。<br>$y = -(x^2 - 6x) + 1$<br>$= -\{(x - 3)^2 - 9\} + 1$<br>$= -(x - 3)^2 + 9 + 1$<br>$= -(x - 3)^2 + 10$<br><br>頂点は $(3, 10)$、上に凸のグラフです。<br><br><strong>答え：</strong> $x=3$ のとき、最大値 $10$" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "2次関数 $y=-x^2-4x$ の最大値または最小値を求めよ。",
        answer: "$x=-2$ で最大値 $4$",
        rationale: "<strong>解説: </strong><br>平方完成を行います。<br>$y = -(x^2 + 4x)$<br>$= -\{(x + 2)^2 - 4\}$<br>$= -(x + 2)^2 + 4$<br><br>頂点は $(-2, 4)$、上に凸のグラフです。<br><br><strong>答え：</strong> $x=-2$ のとき、最大値 $4$" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "2次関数 $y=-x^2+8x-16$ の最大値または最小値を求めよ。",
        answer: "$x=4$ で最大値 $0$",
        rationale: "<strong>解説: </strong><br>平方完成を行います。<br>$y = -(x^2 - 8x + 16)$<br>$= -(x - 4)^2$<br><br>頂点は $(4, 0)$、上に凸のグラフです。<br><br><strong>答え：</strong> $x=4$ のとき、最大値 $0$" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "2次関数 $y=-x^2+1$ の最大値または最小値を求めよ。",
        answer: "$x=0$ で最大値 $1$",
        rationale: "<strong>解説: </strong><br>頂点は原点から $y$軸方向に $+1$ 平行移動した点 $(0, 1)$ です。<br>上に凸のグラフです。<br><br><strong>答え：</strong> $x=0$ のとき、最大値 $1$" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "2次関数 $y=-(x+2)^2-3$ の最大値または最小値を求めよ。",
        answer: "$x=-2$ で最大値 $-3$",
        rationale: "<strong>解説: </strong><br>基本形 $y=a(x-p)^2+q$ になっているので、そのまま読み取ります。<br>頂点は $(-2, -3)$ です。<br>先頭にマイナスがついているので上に凸です。<br><br><strong>答え：</strong> $x=-2$ のとき、最大値 $-3$" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "2次関数 $y=-x^2-x$ の最大値または最小値を求めよ。",
        answer: "$x=-\\frac{1}{2}$ で最大値 $\\frac{1}{4}$",
        rationale: "<strong>解説: </strong><br>平方完成を行います。分数が登場することに注意しましょう。<br>$y = -(x^2 + x)$<br>$= -\\{(x + \\frac{1}{2})^2 - \\frac{1}{4}\\}$<br>$= -(x + \\frac{1}{2})^2 + \\frac{1}{4}$<br><br>頂点は $(-\\frac{1}{2}, \\frac{1}{4})$ です。<br><br><strong>答え：</strong> $x=-\\frac{1}{2}$ のとき、最大値 $\\frac{1}{4}$" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "2次関数 $y=-x^2+2$ の最大値または最小値を求めよ。",
        answer: "$x=0$ で最大値 $2$",
        rationale: "<strong>解説: </strong><br>頂点は $(0, 2)$、上に凸です。<br><br><strong>答え：</strong> $x=0$ のとき、最大値 $2$" + VIDEO_LINK
    },

    // --- 第3部：係数が1でない場合 (21-30) ---
    // 問題 21
    {
        question: "2次関数 $y=2x^2-4x+1$ の最大値または最小値を求めよ。",
        answer: "$x=1$ で最小値 $-1$",
        rationale: "<strong>解説: </strong><br>係数 $2$ で $x$ を含む項をくくります。<br>$y = 2(x^2 - 2x) + 1$<br>$= 2\{(x - 1)^2 - 1\} + 1$<br>$= 2(x - 1)^2 - 2 + 1$<br>$= 2(x - 1)^2 - 1$<br><br>頂点は $(1, -1)$ です。<br>係数 $2 > 0$ なので下に凸、最小値をとります。<br><br><strong>答え：</strong> $x=1$ のとき、最小値 $-1$" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "2次関数 $y=2x^2+8x+5$ の最大値または最小値を求めよ。",
        answer: "$x=-2$ で最小値 $-3$",
        rationale: "<strong>解説: </strong><br>係数 $2$ でくくります。<br>$y = 2(x^2 + 4x) + 5$<br>$= 2\{(x + 2)^2 - 4\} + 5$<br>$= 2(x + 2)^2 - 8 + 5$<br>$= 2(x + 2)^2 - 3$<br><br>頂点は $(-2, -3)$、下に凸です。<br><br><strong>答え：</strong> $x=-2$ のとき、最小値 $-3$" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "2次関数 $y=3x^2-6x+2$ の最大値または最小値を求めよ。",
        answer: "$x=1$ で最小値 $-1$",
        rationale: "<strong>解説: </strong><br>係数 $3$ でくくります。<br>$y = 3(x^2 - 2x) + 2$<br>$= 3\{(x - 1)^2 - 1\} + 2$<br>$= 3(x - 1)^2 - 3 + 2$<br>$= 3(x - 1)^2 - 1$<br><br>頂点は $(1, -1)$、下に凸です。<br><br><strong>答え：</strong> $x=1$ のとき、最小値 $-1$" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "2次関数 $y=-2x^2+4x-1$ の最大値または最小値を求めよ。",
        answer: "$x=1$ で最大値 $1$",
        rationale: "<strong>解説: </strong><br>係数 $-2$ でくくります。<br>$y = -2(x^2 - 2x) - 1$<br>$= -2\{(x - 1)^2 - 1\} - 1$<br>分配法則に注意して展開します。<br>$= -2(x - 1)^2 + 2 - 1$<br>$= -2(x - 1)^2 + 1$<br><br>頂点は $(1, 1)$、上に凸です。<br><br><strong>答え：</strong> $x=1$ のとき、最大値 $1$" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "2次関数 $y=-2x^2-8x-5$ の最大値または最小値を求めよ。",
        answer: "$x=-2$ で最大値 $3$",
        rationale: "<strong>解説: </strong><br>$y = -2(x^2 + 4x) - 5$<br>$= -2\{(x + 2)^2 - 4\} - 5$<br>$= -2(x + 2)^2 + 8 - 5$<br>$= -2(x + 2)^2 + 3$<br><br>頂点は $(-2, 3)$、上に凸です。<br><br><strong>答え：</strong> $x=-2$ のとき、最大値 $3$" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "2次関数 $y=-3x^2+6x$ の最大値または最小値を求めよ。",
        answer: "$x=1$ で最大値 $3$",
        rationale: "<strong>解説: </strong><br>$y = -3(x^2 - 2x)$<br>$= -3\{(x - 1)^2 - 1\}$<br>$= -3(x - 1)^2 + 3$<br><br>頂点は $(1, 3)$、上に凸です。<br><br><strong>答え：</strong> $x=1$ のとき、最大値 $3$" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "2次関数 $y=2x^2-12x+18$ の最大値または最小値を求めよ。",
        answer: "$x=3$ で最小値 $0$",
        rationale: "<strong>解説: </strong><br>共通因数 $2$ でくくると因数分解が見えやすくなります。<br>$y = 2(x^2 - 6x + 9)$<br>$= 2(x - 3)^2$<br><br>頂点は $(3, 0)$、下に凸です。<br><br><strong>答え：</strong> $x=3$ のとき、最小値 $0$" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "2次関数 $y=-4x^2+12x-9$ の最大値または最小値を求めよ。",
        answer: "$x=\\frac{3}{2}$ で最大値 $0$",
        rationale: "<strong>解説: </strong><br>$-4$ でくくります。<br>$y = -4(x^2 - 3x) - 9$<br>$= -4\{(x - \\frac{3}{2})^2 - \\frac{9}{4}\} - 9$<br>$= -4(x - \\frac{3}{2})^2 + 9 - 9$<br>$= -4(x - \\frac{3}{2})^2$<br><br>頂点は $(\\frac{3}{2}, 0)$、上に凸です。<br><br><strong>答え：</strong> $x=\\frac{3}{2}$ のとき、最大値 $0$" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "2次関数 $y=\\frac{1}{2}x^2-2x+3$ の最大値または最小値を求めよ。",
        answer: "$x=2$ で最小値 $1$",
        rationale: "<strong>解説: </strong><br>分数 $\\frac{1}{2}$ でくくります。<br>$y = \\frac{1}{2}(x^2 - 4x) + 3$<br>$= \\frac{1}{2}\\{(x - 2)^2 - 4\\} + 3$<br>$= \\frac{1}{2}(x - 2)^2 - 2 + 3$<br>$= \\frac{1}{2}(x - 2)^2 + 1$<br><br>頂点は $(2, 1)$、係数がプラスなので下に凸です。<br><br><strong>答え：</strong> $x=2$ のとき、最小値 $1$" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "2次関数 $y=2x^2+1$ の最大値または最小値を求めよ。",
        answer: "$x=0$ で最小値 $1$",
        rationale: "<strong>解説: </strong><br>$x$ の項がないため、頂点は $(0, 1)$ です。<br>下に凸です。<br><br><strong>答え：</strong> $x=0$ のとき、最小値 $1$" + VIDEO_LINK
    },

    // --- 第4部：分数が含まれる・少し複雑な計算 (31-40) ---
    // 問題 31
    {
        question: "2次関数 $y=x^2-3x$ の最大値または最小値を求めよ。",
        answer: "$x=\\frac{3}{2}$ で最小値 $-\\frac{9}{4}$",
        rationale: "<strong>解説: </strong><br>奇数を $2$ で割るため分数が出ます。<br>$y = (x^2 - 3x)$<br>$= (x - \\frac{3}{2})^2 - (\\frac{3}{2})^2$<br>$= (x - \\frac{3}{2})^2 - \\frac{9}{4}$<br><br>頂点は $(\\frac{3}{2}, -\\frac{9}{4})$、下に凸です。<br><br><strong>答え：</strong> $x=\\frac{3}{2}$ のとき、最小値 $-\\frac{9}{4}$" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "2次関数 $y=x^2+x+1$ の最大値または最小値を求めよ。",
        answer: "$x=-\\frac{1}{2}$ で最小値 $\\frac{3}{4}$",
        rationale: "<strong>解説: </strong><br>$y = (x + \\frac{1}{2})^2 - \\frac{1}{4} + 1$<br>$= (x + \\frac{1}{2})^2 + \\frac{3}{4}$<br><br>頂点は $(-\\frac{1}{2}, \\frac{3}{4})$、下に凸です。<br><br><strong>答え：</strong> $x=-\\frac{1}{2}$ のとき、最小値 $\\frac{3}{4}$" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "2次関数 $y=-x^2+5x$ の最大値または最小値を求めよ。",
        answer: "$x=\\frac{5}{2}$ で最大値 $\\frac{25}{4}$",
        rationale: "<strong>解説: </strong><br>$y = -(x^2 - 5x)$<br>$= -\{(x - \\frac{5}{2})^2 - \\frac{25}{4}\}$<br>$= -(x - \\frac{5}{2})^2 + \\frac{25}{4}$<br><br>頂点は $(\\frac{5}{2}, \\frac{25}{4})$、上に凸です。<br><br><strong>答え：</strong> $x=\\frac{5}{2}$ のとき、最大値 $\\frac{25}{4}$" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "2次関数 $y=2x^2-3x+2$ の最大値または最小値を求めよ。",
        answer: "$x=\\frac{3}{4}$ で最小値 $\\frac{7}{8}$",
        rationale: "<strong>解説: </strong><br>$y = 2(x^2 - \\frac{3}{2}x) + 2$<br>$= 2\{(x - \\frac{3}{4})^2 - \\frac{9}{16}\} + 2$<br>$= 2(x - \\frac{3}{4})^2 - \\frac{9}{8} + \\frac{16}{8}$<br>$= 2(x - \\frac{3}{4})^2 + \\frac{7}{8}$<br><br>頂点は $(\\frac{3}{4}, \\frac{7}{8})$、下に凸です。<br><br><strong>答え：</strong> $x=\\frac{3}{4}$ のとき、最小値 $\\frac{7}{8}$" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "2次関数 $y=-2x^2+x$ の最大値または最小値を求めよ。",
        answer: "$x=\\frac{1}{4}$ で最大値 $\\frac{1}{8}$",
        rationale: "<strong>解説: </strong><br>$y = -2(x^2 - \\frac{1}{2}x)$<br>$= -2\{(x - \\frac{1}{4})^2 - \\frac{1}{16}\}$<br>$= -2(x - \\frac{1}{4})^2 + \\frac{1}{8}$<br><br>頂点は $(\\frac{1}{4}, \\frac{1}{8})$、上に凸です。<br><br><strong>答え：</strong> $x=\\frac{1}{4}$ のとき、最大値 $\\frac{1}{8}$" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "2次関数 $y=3x^2+2x$ の最大値または最小値を求めよ。",
        answer: "$x=-\\frac{1}{3}$ で最小値 $-\\frac{1}{3}$",
        rationale: "<strong>解説: </strong><br>$y = 3(x^2 + \\frac{2}{3}x)$<br>$= 3\{(x + \\frac{1}{3})^2 - \\frac{1}{9}\}$<br>$= 3(x + \\frac{1}{3})^2 - \\frac{1}{3}$<br><br>頂点は $(-\\frac{1}{3}, -\\frac{1}{3})$、下に凸です。<br><br><strong>答え：</strong> $x=-\\frac{1}{3}$ のとき、最小値 $-\\frac{1}{3}$" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "2次関数 $y=-3x^2+4x-1$ の最大値または最小値を求めよ。",
        answer: "$x=\\frac{2}{3}$ で最大値 $\\frac{1}{3}$",
        rationale: "<strong>解説: </strong><br>$y = -3(x^2 - \\frac{4}{3}x) - 1$<br>$= -3\{(x - \\frac{2}{3})^2 - \\frac{4}{9}\} - 1$<br>$= -3(x - \\frac{2}{3})^2 + \\frac{4}{3} - \\frac{3}{3}$<br>$= -3(x - \\frac{2}{3})^2 + \\frac{1}{3}$<br><br>頂点は $(\\frac{2}{3}, \\frac{1}{3})$、上に凸です。<br><br><strong>答え：</strong> $x=\\frac{2}{3}$ のとき、最大値 $\\frac{1}{3}$" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "2次関数 $y=\\frac{1}{2}x^2+x-1$ の最大値または最小値を求めよ。",
        answer: "$x=-1$ で最小値 $-\\frac{3}{2}$",
        rationale: "<strong>解説: </strong><br>$y = \\frac{1}{2}(x^2 + 2x) - 1$<br>$= \\frac{1}{2}\\{(x + 1)^2 - 1\\} - 1$<br>$= \\frac{1}{2}(x + 1)^2 - \\frac{1}{2} - 1$<br>$= \\frac{1}{2}(x + 1)^2 - \\frac{3}{2}$<br><br>頂点は $(-1, -\\frac{3}{2})$、下に凸です。<br><br><strong>答え：</strong> $x=-1$ のとき、最小値 $-\\frac{3}{2}$" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "2次関数 $y=-\\frac{1}{3}x^2+2x$ の最大値または最小値を求めよ。",
        answer: "$x=3$ で最大値 $3$",
        rationale: "<strong>解説: </strong><br>$y = -\\frac{1}{3}(x^2 - 6x)$<br>$= -\\frac{1}{3}\\{(x - 3)^2 - 9\\}$<br>$= -\\frac{1}{3}(x - 3)^2 + 3$<br><br>頂点は $(3, 3)$、上に凸です。<br><br><strong>答え：</strong> $x=3$ のとき、最大値 $3$" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "2次関数 $y=4x^2-4x+3$ の最大値または最小値を求めよ。",
        answer: "$x=\\frac{1}{2}$ で最小値 $2$",
        rationale: "<strong>解説: </strong><br>$y = 4(x^2 - x) + 3$<br>$= 4\{(x - \\frac{1}{2})^2 - \\frac{1}{4}\} + 3$<br>$= 4(x - \\frac{1}{2})^2 - 1 + 3$<br>$= 4(x - \\frac{1}{2})^2 + 2$<br><br>頂点は $(\\frac{1}{2}, 2)$、下に凸です。<br><br><strong>答え：</strong> $x=\\frac{1}{2}$ のとき、最小値 $2$" + VIDEO_LINK
    },

    // --- 第5部：概念・確認問題 (41-50) ---
    // 問題 41
    {
        question: "2次関数 $y=3(x-2)^2+5$ の最小値はいくつか。",
        answer: "$5$",
        rationale: "<strong>解説: </strong><br>頂点形式 $y=a(x-p)^2+q$ において、$a>0$ ならば最小値は $q$ です。<br>ここでは $q=5$ が最小値となります。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "2次関数 $y=-2(x+1)^2-3$ の最大値はいくつか。",
        answer: "$-3$",
        rationale: "<strong>解説: </strong><br>$a<0$（上に凸）なので頂点で最大値をとります。<br>頂点の $y$座標である $-3$ が最大値です。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "次の2次関数のうち、最大値が存在する（最小値がない）ものはどれか。<br>A: $y=2x^2+3$　B: $y=-x^2+4x$　C: $y=(x-1)^2$",
        answer: "B",
        rationale: "<strong>解説: </strong><br>最大値が存在するのは、グラフが「上に凸（山型）」の場合です。<br>これは $x^2$ の係数がマイナスのときです。<br>Aは係数が $2$（正）、Bは $-1$（負）、Cは $1$（正）。<br>よってBのみ最大値を持ちます。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "2次関数 $y=x^2-100$ の最小値をとるときの $x$ の値は？",
        answer: "$x=0$",
        rationale: "<strong>解説: </strong><br>式は $y=(x-0)^2-100$ と見ることができます。<br>頂点の $x$座標は $0$ です。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "2次関数 $y=-(x-5)^2$ の最大値は？",
        answer: "$0$",
        rationale: "<strong>解説: </strong><br>頂点は $(5, 0)$ です。<br>上に凸なので、頂点の $y$座標 $0$ が最大値となります。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "2次関数 $y=2x^2+4x+c$ の最小値が $3$ であるとき、定数 $c$ の値を求めよ。",
        answer: "$c=5$",
        rationale: "<strong>解説: </strong><br>平方完成すると、<br>$y = 2(x^2+2x)+c$<br>$= 2(x+1)^2 - 2 + c$<br>最小値は定数部分の $-2+c$ です。<br>これが $3$ になるので、$-2+c=3$ より $c=5$。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "2次関数 $y=-x^2+2x+k$ の最大値が $5$ であるとき、定数 $k$ の値を求めよ。",
        answer: "$k=4$",
        rationale: "<strong>解説: </strong><br>平方完成すると、<br>$y = -(x-1)^2 + 1 + k$<br>最大値は $1+k$ です。<br>$1+k=5$ より $k=4$。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "定義域がすべての実数であるとき、2次関数 $y=3x^2$ に最大値はあるか。",
        answer: "ない",
        rationale: "<strong>解説: </strong><br>下に凸のグラフ（$a>0$）では、最小値（頂点）はありますが、上には無限に伸びていくため、最大値はありません。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "2次関数 $y=-5x^2-10x-1$ の最大値または最小値を求めよ。",
        answer: "$x=-1$ で最大値 $4$",
        rationale: "<strong>解説: </strong><br>$y = -5(x^2+2x)-1$<br>$= -5\{(x+1)^2-1\}-1$<br>$= -5(x+1)^2+5-1$<br>$= -5(x+1)^2+4$<br>上に凸なので最大値 $4$ をとります。<br><br><strong>答え：</strong> $x=-1$ のとき、最大値 $4$" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "2次関数 $y=x^2-2ax+a^2+1$ （$a$は定数）の最小値を求めよ。",
        answer: "$1$",
        rationale: "<strong>解説: </strong><br>文字定数が含まれていても手順は同じです。<br>$y = (x-a)^2 - a^2 + a^2 + 1$<br>$y = (x-a)^2 + 1$<br>頂点は $(a, 1)$ で下に凸です。<br>よって最小値は常に $1$ です。<br>（$x=a$ のとき最小値 $1$）" + VIDEO_LINK
    }
];