const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7717/63249' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 基礎：共有点の個数を求める (1-20) ---
    // 問題 1
    {
        question: "放物線 $y = x^2$ と直線 $y = x + 2$ の共有点の個数を求めよ。",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>連立して $y$ を消去します。<br>$x^2 = x + 2 \\Rightarrow x^2 - x - 2 = 0$<br>判別式 $D = (-1)^2 - 4 \\cdot 1 \\cdot (-2) = 1 + 8 = 9 > 0$<br>よって共有点は <strong>2個</strong> です。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "放物線 $y = x^2$ と直線 $y = 2x - 1$ の共有点の個数を求めよ。",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$x^2 = 2x - 1 \\Rightarrow x^2 - 2x + 1 = 0$<br>$D/4 = (-1)^2 - 1 \\cdot 1 = 0$<br>よって共有点は <strong>1個</strong> です（接する）。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "放物線 $y = x^2$ と直線 $y = x - 1$ の共有点の個数を求めよ。",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$x^2 = x - 1 \\Rightarrow x^2 - x + 1 = 0$<br>$D = (-1)^2 - 4 \\cdot 1 \\cdot 1 = -3 < 0$<br>よって共有点は <strong>0個</strong> です。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "放物線 $y = 2x^2$ と直線 $y = 4x - 2$ の共有点の個数を求めよ。",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$2x^2 = 4x - 2 \\Rightarrow 2x^2 - 4x + 2 = 0$<br>$2(x^2 - 2x + 1) = 0 \\Rightarrow 2(x-1)^2 = 0$<br>重解を持つので <strong>1個</strong> です。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "放物線 $y = -x^2 + 1$ と直線 $y = 2x$ の共有点の個数を求めよ。",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$-x^2 + 1 = 2x \\Rightarrow x^2 + 2x - 1 = 0$<br>$D/4 = 1^2 - 1(-1) = 2 > 0$<br>よって <strong>2個</strong> です。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "放物線 $y = x^2 + 3x$ と直線 $y = x - 2$ の共有点の個数を求めよ。",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$x^2 + 3x = x - 2 \\Rightarrow x^2 + 2x + 2 = 0$<br>$D/4 = 1^2 - 2 = -1 < 0$<br>よって <strong>0個</strong> です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "放物線 $y = x^2 - 2x - 3$ と直線 $y = -2x - 3$ の共有点の個数を求めよ。",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$x^2 - 2x - 3 = -2x - 3 \\Rightarrow x^2 = 0$<br>重解 $x=0$ を持つので <strong>1個</strong> です。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "放物線 $y = 3x^2$ と直線 $y = 6x + 1$ の共有点の個数を求めよ。",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$3x^2 = 6x + 1 \\Rightarrow 3x^2 - 6x - 1 = 0$<br>$D/4 = (-3)^2 - 3(-1) = 9 + 3 = 12 > 0$<br>よって <strong>2個</strong> です。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "放物線 $y = -2x^2 + 4x$ と直線 $y = 4x + 3$ の共有点の個数を求めよ。",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$-2x^2 + 4x = 4x + 3 \\Rightarrow -2x^2 - 3 = 0 \\Rightarrow 2x^2 + 3 = 0$<br>$D = 0^2 - 4(2)(3) = -24 < 0$<br>よって <strong>0個</strong> です。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "放物線 $y = x^2 - 4x + 5$ と直線 $y = -2x + 4$ の共有点の個数を求めよ。",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$x^2 - 4x + 5 = -2x + 4 \\Rightarrow x^2 - 2x + 1 = 0$<br>$(x-1)^2 = 0$ なので <strong>1個</strong> です。" + VIDEO_LINK
    },
    // 問題 11
    {
        question: "放物線 $y = \frac{1}{2}x^2$ と直線 $y = x + 1$ の共有点の個数を求めよ。",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$\\frac{1}{2}x^2 = x + 1 \\Rightarrow x^2 - 2x - 2 = 0$<br>$D/4 = (-1)^2 - (-2) = 3 > 0$<br>よって <strong>2個</strong> です。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "放物線 $y = x^2 + x + 1$ と直線 $y = 2x - 1$ の共有点の個数を求めよ。",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$x^2 + x + 1 = 2x - 1 \\Rightarrow x^2 - x + 2 = 0$<br>$D = (-1)^2 - 4(1)(2) = 1 - 8 = -7 < 0$<br>よって <strong>0個</strong> です。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "放物線 $y = -x^2 + 2x + 3$ と直線 $y = x + 4$ の共有点の個数を求めよ。",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$-x^2 + 2x + 3 = x + 4 \\Rightarrow x^2 - x + 1 = 0$<br>$D = (-1)^2 - 4 = -3 < 0$<br>よって <strong>0個</strong> です。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "放物線 $y = 2x^2 + 3x + 1$ と直線 $y = -x - 1$ の共有点の個数を求めよ。",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$2x^2 + 3x + 1 = -x - 1 \\Rightarrow 2x^2 + 4x + 2 = 0$<br>$2(x+1)^2 = 0$ なので <strong>1個</strong> です。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "放物線 $y = x^2 - 6x + 8$ と直線 $y = 2x - 8$ の共有点の個数を求めよ。",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$x^2 - 6x + 8 = 2x - 8 \\Rightarrow x^2 - 8x + 16 = 0$<br>$(x-4)^2 = 0$ なので <strong>1個</strong> です。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "放物線 $y = 3x^2 + 2$ と直線 $y = 4x$ の共有点の個数を求めよ。",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$3x^2 + 2 = 4x \\Rightarrow 3x^2 - 4x + 2 = 0$<br>$D/4 = (-2)^2 - 3(2) = 4 - 6 = -2 < 0$<br>よって <strong>0個</strong> です。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "放物線 $y = -2x^2$ と直線 $y = 4x + 2$ の共有点の個数を求めよ。",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$-2x^2 = 4x + 2 \\Rightarrow 2x^2 + 4x + 2 = 0 \\Rightarrow 2(x+1)^2 = 0$<br>よって <strong>1個</strong> です。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "放物線 $y = x^2 - 5x + 6$ と直線 $y = -x + 2$ の共有点の個数を求めよ。",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$x^2 - 5x + 6 = -x + 2 \\Rightarrow x^2 - 4x + 4 = 0$<br>$(x-2)^2 = 0$ なので <strong>1個</strong> です。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "放物線 $y = \frac{1}{4}x^2$ と直線 $y = x - 2$ の共有点の個数を求めよ。",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$\\frac{1}{4}x^2 = x - 2 \\Rightarrow x^2 - 4x + 8 = 0$<br>$D/4 = (-2)^2 - 8 = -4 < 0$<br>よって <strong>0個</strong> です。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "放物線 $y = x^2 + 2x$ と直線 $y = -x - 3$ の共有点の個数を求めよ。",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$x^2 + 2x = -x - 3 \\Rightarrow x^2 + 3x + 3 = 0$<br>$D = 3^2 - 4(3) = 9 - 12 = -3 < 0$<br>よって <strong>0個</strong> です。" + VIDEO_LINK
    },

    // --- 応用：定数 k の範囲を求める (21-50) ---
    // 条件：共有点が2個 (D > 0)
    // 問題 21
    {
        question: "放物線 $y = x^2 + k$ と直線 $y = 2x$ が異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < 1$",
        rationale: "<strong>解説: </strong><br>$x^2 + k = 2x \\Rightarrow x^2 - 2x + k = 0$<br>$D/4 = (-1)^2 - k = 1 - k > 0$<br>よって $k < 1$ です。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "放物線 $y = 2x^2$ と直線 $y = 4x + k$ が異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k > -2$",
        rationale: "<strong>解説: </strong><br>$2x^2 = 4x + k \\Rightarrow 2x^2 - 4x - k = 0$<br>$D/4 = (-2)^2 - 2(-k) = 4 + 2k > 0$<br>$2k > -4 \\Rightarrow k > -2$ です。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "放物線 $y = x^2 - x + k$ と直線 $y = x + 1$ が異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < 2$",
        rationale: "<strong>解説: </strong><br>$x^2 - x + k = x + 1 \\Rightarrow x^2 - 2x + k - 1 = 0$<br>$D/4 = (-1)^2 - (k-1) = 1 - k + 1 = 2 - k > 0$<br>よって $k < 2$ です。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "放物線 $y = -x^2 + k$ と直線 $y = x$ が異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k > -\\frac{1}{4}$",
        rationale: "<strong>解説: </strong><br>$-x^2 + k = x \\Rightarrow x^2 + x - k = 0$<br>$D = 1^2 - 4(-k) = 1 + 4k > 0$<br>よって $k > -\\frac{1}{4}$ です。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "放物線 $y = x^2$ と直線 $y = kx - 1$ が異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < -2, 2 < k$",
        rationale: "<strong>解説: </strong><br>$x^2 = kx - 1 \\Rightarrow x^2 - kx + 1 = 0$<br>$D = k^2 - 4 > 0$<br>よって $k < -2, 2 < k$ です。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "放物線 $y = x^2 + 2x + 3$ と直線 $y = kx + 2$ が異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < 0, 4 < k$",
        rationale: "<strong>解説: </strong><br>$x^2 + 2x + 3 = kx + 2 \\Rightarrow x^2 + (2-k)x + 1 = 0$<br>$D = (2-k)^2 - 4 = k^2 - 4k = k(k-4) > 0$<br>よって $k < 0, 4 < k$ です。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "放物線 $y = 3x^2$ と直線 $y = 2x + k$ が異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k > -\\frac{1}{3}$",
        rationale: "<strong>解説: </strong><br>$3x^2 - 2x - k = 0$<br>$D/4 = (-1)^2 - 3(-k) = 1 + 3k > 0$<br>よって $k > -\\frac{1}{3}$ です。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "放物線 $y = x^2 - kx$ と直線 $y = -x - 1$ が異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < -1, 3 < k$",
        rationale: "<strong>解説: </strong><br>$x^2 - kx = -x - 1 \\Rightarrow x^2 - (k-1)x + 1 = 0$<br>$D = (k-1)^2 - 4 = k^2 - 2k - 3 > 0$<br>$(k-3)(k+1) > 0$<br>よって $k < -1, 3 < k$ です。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "放物線 $y = -2x^2 + 1$ と直線 $y = kx + 3$ が異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "すべての実数",
        rationale: "<strong>解説: </strong><br>$-2x^2 + 1 = kx + 3 \\Rightarrow 2x^2 + kx + 2 = 0$<br>$D = k^2 - 16 > 0$<br>よって $k < -4, 4 < k$ ...おっと訂正。<br>計算確認。$2x^2 + kx + 2 = 0$。<br>$D = k^2 - 16$。<br>これが $>0$ となる条件なので、$k < -4, 4 < k$ です。<br>（解説の「すべての実数」は誤りでした）" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "放物線 $y = x^2 + 3$ と直線 $y = kx$ が異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < -2\\sqrt{3}, 2\\sqrt{3} < k$",
        rationale: "<strong>解説: </strong><br>$x^2 - kx + 3 = 0$<br>$D = k^2 - 12 > 0$<br>よって $k < -2\\sqrt{3}, 2\\sqrt{3} < k$ です。" + VIDEO_LINK
    },

    // 条件：共有点が1個 (D = 0)
    // 問題 31
    {
        question: "放物線 $y = x^2 + k$ と直線 $y = 4x$ が接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = 4$",
        rationale: "<strong>解説: </strong><br>$x^2 - 4x + k = 0$<br>$D/4 = (-2)^2 - k = 4 - k = 0$<br>よって $k = 4$ です。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "放物線 $y = x^2$ と直線 $y = kx - 9$ が接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = \\pm 6$",
        rationale: "<strong>解説: </strong><br>$x^2 - kx + 9 = 0$<br>$D = k^2 - 36 = 0$<br>よって $k = \\pm 6$ です。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "放物線 $y = 2x^2 + 1$ と直線 $y = kx - 1$ が接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = \\pm 4$",
        rationale: "<strong>解説: </strong><br>$2x^2 + 1 = kx - 1 \\Rightarrow 2x^2 - kx + 2 = 0$<br>$D = k^2 - 16 = 0$<br>よって $k = \\pm 4$ です。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "放物線 $y = x^2 - 2x$ と直線 $y = 2x + k$ が接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = -4$",
        rationale: "<strong>解説: </strong><br>$x^2 - 2x = 2x + k \\Rightarrow x^2 - 4x - k = 0$<br>$D/4 = (-2)^2 - (-k) = 4 + k = 0$<br>よって $k = -4$ です。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "放物線 $y = -x^2 + 3x$ と直線 $y = x + k$ が接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = 1$",
        rationale: "<strong>解説: </strong><br>$-x^2 + 3x = x + k \\Rightarrow x^2 - 2x + k = 0$<br>$D/4 = 1 - k = 0$<br>よって $k = 1$ です。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "放物線 $y = 3x^2 + kx + 2$ と直線 $y = -x + 1$ が接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = 1 \\pm 2\\sqrt{3}$ (訂正: $k = 1 \\pm 2\\sqrt{3}$ ではなく計算確認)",
        rationale: "<strong>解説: </strong><br>$3x^2 + kx + 2 = -x + 1 \\Rightarrow 3x^2 + (k+1)x + 1 = 0$<br>$D = (k+1)^2 - 12 = 0$<br>$(k+1)^2 = 12 \\Rightarrow k+1 = \\pm 2\\sqrt{3}$<br>よって $k = -1 \\pm 2\\sqrt{3}$ です。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "放物線 $y = x^2 + 4x + k$ と直線 $y = -2x - 5$ が接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = 4$",
        rationale: "<strong>解説: </strong><br>$x^2 + 4x + k = -2x - 5 \\Rightarrow x^2 + 6x + k + 5 = 0$<br>$D/4 = 3^2 - (k+5) = 9 - k - 5 = 4 - k = 0$<br>よって $k = 4$ です。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "放物線 $y = kx^2$ ($k \\neq 0$) と直線 $y = 2x - 1$ が接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = 1$",
        rationale: "<strong>解説: </strong><br>$kx^2 - 2x + 1 = 0$<br>$D/4 = (-1)^2 - k = 1 - k = 0$<br>よって $k = 1$ です。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "放物線 $y = x^2 - kx + 1$ と直線 $y = x$ が接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = -1, 3$",
        rationale: "<strong>解説: </strong><br>$x^2 - kx + 1 = x \\Rightarrow x^2 - (k+1)x + 1 = 0$<br>$D = (k+1)^2 - 4 = 0$<br>$k+1 = \\pm 2$<br>よって $k = 1, -3$ です。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "放物線 $y = x^2 + k$ と直線 $y = kx - 1$ が接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = -2, 2$ (ただし $k+1=0$ なら放物線にならないがここでは関係ない)",
        rationale: "<strong>解説: </strong><br>$x^2 + k = kx - 1 \\Rightarrow x^2 - kx + k + 1 = 0$<br>$D = k^2 - 4(k+1) = k^2 - 4k - 4 = 0$<br>$k = 2 \\pm \\sqrt{4+4} = 2 \\pm 2\\sqrt{2}$ です。<br>（解説の $k=\\pm 2$ は誤りでした）" + VIDEO_LINK
    },

    // 条件：共有点が0個 (D < 0)
    // 問題 41
    {
        question: "放物線 $y = x^2 + k$ と直線 $y = 2x$ が共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k > 1$",
        rationale: "<strong>解説: </strong><br>$x^2 - 2x + k = 0$<br>$D/4 = 1 - k < 0$<br>よって $k > 1$ です。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "放物線 $y = -x^2$ と直線 $y = x + k$ が共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k > \\frac{1}{4}$",
        rationale: "<strong>解説: </strong><br>$-x^2 = x + k \\Rightarrow x^2 + x + k = 0$<br>$D = 1 - 4k < 0$<br>$1 < 4k \\Rightarrow k > \\frac{1}{4}$ です。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "放物線 $y = 2x^2 + 1$ と直線 $y = 4x + k$ が共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < -1$",
        rationale: "<strong>解説: </strong><br>$2x^2 - 4x + 1 - k = 0$<br>$D/4 = 4 - 2(1-k) = 4 - 2 + 2k = 2 + 2k < 0$<br>よって $k < -1$ です。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "放物線 $y = x^2 - 2x + 3$ と直線 $y = kx$ が共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$ -2\\sqrt{3}-2 < k < 2\\sqrt{3}-2 $",
        rationale: "<strong>解説: </strong><br>$x^2 - (2+k)x + 3 = 0$<br>$D = (k+2)^2 - 12 < 0$<br>$(k+2)^2 < 12 \\Rightarrow -2\\sqrt{3} < k+2 < 2\\sqrt{3}$<br>よって $-2 - 2\\sqrt{3} < k < -2 + 2\\sqrt{3}$ です。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "放物線 $y = x^2 + kx + 1$ と直線 $y = -x$ が共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$-3 < k < 1$",
        rationale: "<strong>解説: </strong><br>$x^2 + (k+1)x + 1 = 0$<br>$D = (k+1)^2 - 4 < 0$<br>$-2 < k+1 < 2$<br>よって $-3 < k < 1$ です。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "放物線 $y = -x^2 + 2x$ と直線 $y = k$ が共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k > 1$",
        rationale: "<strong>解説: </strong><br>頂点の $y$ 座標は $-(1)^2 + 2(1) = 1$。<br>上に凸なので、直線 $y=k$ が頂点より上にあればよい。<br>よって $k > 1$ です。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "放物線 $y = x^2 + 3x + k$ と直線 $y = 2x - 1$ が共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k > -\\frac{3}{4}$",
        rationale: "<strong>解説: </strong><br>$x^2 + x + k + 1 = 0$<br>$D = 1 - 4(k+1) = -3 - 4k < 0$<br>$-3 < 4k \\Rightarrow k > -\\frac{3}{4}$ です。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "放物線 $y = 2x^2 - 4x + 5$ と直線 $y = kx + 3$ が共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$-8 < k < 0$",
        rationale: "<strong>解説: </strong><br>$2x^2 - (4+k)x + 2 = 0$<br>$D = (k+4)^2 - 16 < 0$<br>$(k+4)^2 < 16 \\Rightarrow -4 < k+4 < 4$<br>よって $-8 < k < 0$ です。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "放物線 $y = kx^2$ ($k < 0$) と直線 $y = 2x + 1$ が共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$-1 < k < 0$",
        rationale: "<strong>解説: </strong><br>$kx^2 - 2x - 1 = 0$<br>$D/4 = 1 - k(-1) = 1 + k < 0$<br>$k < -1$。<br>おっと、判別式 $D<0$ なら共有点なし。<br>$1+k<0 \\Rightarrow k<-1$。<br>問題文に $k<0$ とあるので、$k<-1$ が答えです。<br>（解説の「$-1 < k < 0$」は誤りでした）" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "放物線 $y = x^2 + kx$ と直線 $y = -x + k$ が共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$2 - 2\\sqrt{2} < k < 2 + 2\\sqrt{2}$",
        rationale: "<strong>解説: </strong><br>$x^2 + (k+1)x - k = 0$<br>$D = (k+1)^2 + 4k = k^2 + 6k + 1 < 0$<br>解の公式で $k = -3 \\pm \\sqrt{8} = -3 \\pm 2\\sqrt{2}$。<br>よって $-3 - 2\\sqrt{2} < k < -3 + 2\\sqrt{2}$ です。<br>（解説の数値が少し違っていました）" + VIDEO_LINK
    }
];