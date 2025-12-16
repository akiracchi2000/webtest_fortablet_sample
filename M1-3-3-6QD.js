const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7717/63242' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 基礎：共有点の個数を求める (1-20) ---
    // 問題 1
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = x^2 + 5x + 4$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>2次方程式 $x^2 + 5x + 4 = 0$ の判別式を $D$ とします。<br>$D = 5^2 - 4 \\cdot 1 \\cdot 4 = 25 - 16 = 9$<br>$D > 0$ なので、共有点の個数は <strong>2個</strong> です。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = x^2 - 4x + 4$",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>判別式 $D/4$（偶数公式）を利用します。<br>$D/4 = (-2)^2 - 1 \\cdot 4 = 4 - 4 = 0$<br>$D = 0$ なので、共有点の個数は <strong>1個</strong> です（接します）。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = x^2 + 2x + 3$",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>判別式 $D/4 = 1^2 - 1 \\cdot 3 = 1 - 3 = -2$<br>$D < 0$ なので、共有点の個数は <strong>0個</strong> です。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = 2x^2 - 3x - 5$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$D = (-3)^2 - 4 \\cdot 2 \\cdot (-5) = 9 + 40 = 49$<br>$D > 0$ なので、共有点の個数は <strong>2個</strong> です。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = -x^2 + 6x - 9$",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$D/4 = 3^2 - (-1) \\cdot (-9) = 9 - 9 = 0$<br>$D = 0$ なので、共有点の個数は <strong>1個</strong> です。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = 3x^2 + x + 2$",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$D = 1^2 - 4 \\cdot 3 \\cdot 2 = 1 - 24 = -23$<br>$D < 0$ なので、共有点の個数は <strong>0個</strong> です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = x^2 - 7x + 10$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$D = (-7)^2 - 4 \\cdot 1 \\cdot 10 = 49 - 40 = 9 > 0$<br>よって <strong>2個</strong> です。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = 4x^2 + 4x + 1$",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$D/4 = 2^2 - 4 \\cdot 1 = 4 - 4 = 0$<br>よって <strong>1個</strong> です。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = -2x^2 + x - 1$",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$D = 1^2 - 4 \\cdot (-2) \\cdot (-1) = 1 - 8 = -7 < 0$<br>よって <strong>0個</strong> です。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = x^2 - x - 2$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$D = (-1)^2 - 4 \\cdot 1 \\cdot (-2) = 1 + 8 = 9 > 0$<br>よって <strong>2個</strong> です。" + VIDEO_LINK
    },
    // 問題 11
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = 2x^2 - 5x + 4$",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$D = (-5)^2 - 4 \\cdot 2 \\cdot 4 = 25 - 32 = -7 < 0$<br>よって <strong>0個</strong> です。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = 9x^2 - 6x + 1$",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$D/4 = (-3)^2 - 9 \\cdot 1 = 9 - 9 = 0$<br>よって <strong>1個</strong> です。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = x^2 + 3x - 1$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$D = 3^2 - 4 \\cdot 1 \\cdot (-1) = 9 + 4 = 13 > 0$<br>よって <strong>2個</strong> です。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = -x^2 + 2x + 4$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$D/4 = 1^2 - (-1) \\cdot 4 = 1 + 4 = 5 > 0$<br>よって <strong>2個</strong> です。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = x^2 - 2\\sqrt{3}x + 3$",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$D/4 = (-\\sqrt{3})^2 - 1 \\cdot 3 = 3 - 3 = 0$<br>よって <strong>1個</strong> です。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = 2x^2 + 4x + 3$",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$D/4 = 2^2 - 2 \\cdot 3 = 4 - 6 = -2 < 0$<br>よって <strong>0個</strong> です。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = x^2 - 8x + 16$",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$D/4 = (-4)^2 - 1 \\cdot 16 = 16 - 16 = 0$<br>よって <strong>1個</strong> です。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = -3x^2 + 7x - 2$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$D = 7^2 - 4 \\cdot (-3) \\cdot (-2) = 49 - 24 = 25 > 0$<br>よって <strong>2個</strong> です。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = 5x^2 - 2x + 1$",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$D/4 = (-1)^2 - 5 \\cdot 1 = 1 - 5 = -4 < 0$<br>よって <strong>0個</strong> です。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "次の2次関数のグラフと$x$軸の共有点の個数を求めよ。<br>$y = \\frac{1}{2}x^2 - 2x + 2$",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>方程式 $\\frac{1}{2}x^2 - 2x + 2 = 0$ の両辺を2倍すると $x^2 - 4x + 4 = 0$。<br>この判別式は $D/4 = (-2)^2 - 1 \\cdot 4 = 0$。<br>よって <strong>1個</strong> です。" + VIDEO_LINK
    },

    // --- 応用：条件を満たす定数 k の値を求める (21-50) ---
    // 条件：共有点が2個 (D > 0)
    // 問題 21
    {
        question: "2次関数 $y = x^2 + kx + 4$ のグラフが$x$軸と異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < -4, 4 < k$",
        rationale: "<strong>解説: </strong><br>判別式 $D = k^2 - 4 \\cdot 1 \\cdot 4 = k^2 - 16$<br>条件は $D > 0$ なので $k^2 - 16 > 0$<br>$(k+4)(k-4) > 0$<br>よって $k < -4, 4 < k$ です。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "2次関数 $y = x^2 - 2x + k$ のグラフが$x$軸と異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < 1$",
        rationale: "<strong>解説: </strong><br>$D/4 = (-1)^2 - 1 \\cdot k = 1 - k$<br>条件は $D > 0$ なので $1 - k > 0$<br>よって $k < 1$ です。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "2次関数 $y = 2x^2 + 4x + k$ のグラフが$x$軸と異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < 2$",
        rationale: "<strong>解説: </strong><br>$D/4 = 2^2 - 2 \\cdot k = 4 - 2k$<br>$4 - 2k > 0 \\Rightarrow 2k < 4$<br>よって $k < 2$ です。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "2次関数 $y = -x^2 + 6x + k$ のグラフが$x$軸と異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k > -9$",
        rationale: "<strong>解説: </strong><br>$D/4 = 3^2 - (-1) \\cdot k = 9 + k$<br>$9 + k > 0$<br>よって $k > -9$ です。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "2次関数 $y = x^2 - kx + 9$ のグラフが$x$軸と異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < -6, 6 < k$",
        rationale: "<strong>解説: </strong><br>$D = (-k)^2 - 4 \\cdot 1 \\cdot 9 = k^2 - 36$<br>$k^2 - 36 > 0$<br>よって $k < -6, 6 < k$ です。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "2次関数 $y = x^2 + 3x + k$ のグラフが$x$軸と異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < \\frac{9}{4}$",
        rationale: "<strong>解説: </strong><br>$D = 3^2 - 4k = 9 - 4k$<br>$9 - 4k > 0$<br>よって $k < \\frac{9}{4}$ です。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "2次関数 $y = -x^2 + kx - 4$ のグラフが$x$軸と異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < -4, 4 < k$",
        rationale: "<strong>解説: </strong><br>$D = k^2 - 4(-1)(-4) = k^2 - 16$<br>$k^2 - 16 > 0$<br>よって $k < -4, 4 < k$ です。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "2次関数 $y = x^2 + (k-1)x + 1$ のグラフが$x$軸と異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < -1, 3 < k$",
        rationale: "<strong>解説: </strong><br>$D = (k-1)^2 - 4 \\cdot 1 \\cdot 1 = k^2 - 2k + 1 - 4 = k^2 - 2k - 3$<br>$k^2 - 2k - 3 > 0$<br>$(k+1)(k-3) > 0$<br>よって $k < -1, 3 < k$ です。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "2次関数 $y = x^2 - 4x + 2k$ のグラフが$x$軸と異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < 2$",
        rationale: "<strong>解説: </strong><br>$D/4 = (-2)^2 - 1 \\cdot 2k = 4 - 2k$<br>$4 - 2k > 0 \\Rightarrow 2k < 4$<br>よって $k < 2$ です。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "2次関数 $y = 2x^2 - kx + 1$ のグラフが$x$軸と異なる2点で交わるとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < -2\\sqrt{2}, 2\\sqrt{2} < k$",
        rationale: "<strong>解説: </strong><br>$D = (-k)^2 - 4 \\cdot 2 \\cdot 1 = k^2 - 8$<br>$k^2 - 8 > 0$<br>よって $k < -2\\sqrt{2}, 2\\sqrt{2} < k$ です。" + VIDEO_LINK
    },

    // 条件：共有点が1個 (D = 0)
    // 問題 31
    {
        question: "2次関数 $y = x^2 + kx + 16$ のグラフが$x$軸と接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = \\pm 8$",
        rationale: "<strong>解説: </strong><br>接する条件は $D = 0$ です。<br>$D = k^2 - 4 \\cdot 16 = k^2 - 64$<br>$k^2 - 64 = 0$<br>よって $k = \\pm 8$ です。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "2次関数 $y = x^2 - 6x + k$ のグラフが$x$軸と接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = 9$",
        rationale: "<strong>解説: </strong><br>$D/4 = (-3)^2 - k = 9 - k$<br>$9 - k = 0$<br>よって $k = 9$ です。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "2次関数 $y = kx^2 + 4x + 1$ ($k \\neq 0$) のグラフが$x$軸と接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = 4$",
        rationale: "<strong>解説: </strong><br>$D/4 = 2^2 - k \\cdot 1 = 4 - k$<br>$4 - k = 0$<br>よって $k = 4$ です。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "2次関数 $y = x^2 + 2kx + k + 2$ のグラフが$x$軸と接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = 2, -1$",
        rationale: "<strong>解説: </strong><br>$D/4 = k^2 - (k+2) = k^2 - k - 2$<br>$k^2 - k - 2 = 0$<br>$(k-2)(k+1) = 0$<br>よって $k = 2, -1$ です。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "2次関数 $y = x^2 + (k+1)x + 1$ のグラフが$x$軸と接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = 1, -3$",
        rationale: "<strong>解説: </strong><br>$D = (k+1)^2 - 4 = k^2 + 2k + 1 - 4 = k^2 + 2k - 3$<br>$(k+3)(k-1) = 0$<br>よって $k = 1, -3$ です。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "2次関数 $y = 2x^2 - 4x + k$ のグラフが$x$軸と接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = 2$",
        rationale: "<strong>解説: </strong><br>$D/4 = (-2)^2 - 2k = 4 - 2k$<br>$4 - 2k = 0$<br>よって $k = 2$ です。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "2次関数 $y = x^2 - 2kx + 4$ のグラフが$x$軸と接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = \\pm 2$",
        rationale: "<strong>解説: </strong><br>$D/4 = (-k)^2 - 4 = k^2 - 4$<br>$k^2 - 4 = 0$<br>よって $k = \\pm 2$ です。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "2次関数 $y = x^2 + kx + k$ のグラフが$x$軸と接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = 0, 4$",
        rationale: "<strong>解説: </strong><br>$D = k^2 - 4k$<br>$k(k-4) = 0$<br>よって $k = 0, 4$ です。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "2次関数 $y = kx^2 - 6x + 9$ ($k \\neq 0$) のグラフが$x$軸と接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = 1$",
        rationale: "<strong>解説: </strong><br>$D/4 = (-3)^2 - 9k = 9 - 9k$<br>$9 - 9k = 0$<br>よって $k = 1$ です。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "2次関数 $y = x^2 - 2(k-1)x + 1$ のグラフが$x$軸と接するとき、定数 $k$ の値を求めよ。",
        answer: "$k = 0, 2$",
        rationale: "<strong>解説: </strong><br>$D/4 = \\{-(k-1)\\}^2 - 1 = (k-1)^2 - 1 = k^2 - 2k$<br>$k(k-2) = 0$<br>よって $k = 0, 2$ です。" + VIDEO_LINK
    },

    // 条件：共有点が0個 (D < 0)
    // 問題 41
    {
        question: "2次関数 $y = x^2 + 2x + k$ のグラフが$x$軸と共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k > 1$",
        rationale: "<strong>解説: </strong><br>条件は $D < 0$ です。<br>$D/4 = 1^2 - k = 1 - k$<br>$1 - k < 0$<br>よって $k > 1$ です。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "2次関数 $y = x^2 + kx + 5$ のグラフが$x$軸と共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$-\\sqrt{20} < k < \\sqrt{20}$ ($-2\\sqrt{5} < k < 2\\sqrt{5}$)",
        rationale: "<strong>解説: </strong><br>$D = k^2 - 20$<br>$k^2 - 20 < 0$<br>よって $-2\\sqrt{5} < k < 2\\sqrt{5}$ です。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "2次関数 $y = -x^2 + x + k$ のグラフが$x$軸と共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < -\\frac{1}{4}$",
        rationale: "<strong>解説: </strong><br>$D = 1^2 - 4(-1)k = 1 + 4k$<br>$1 + 4k < 0$<br>よって $k < -\\frac{1}{4}$ です。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "2次関数 $y = 2x^2 - 3x + k$ のグラフが$x$軸と共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k > \\frac{9}{8}$",
        rationale: "<strong>解説: </strong><br>$D = (-3)^2 - 4 \\cdot 2 \\cdot k = 9 - 8k$<br>$9 - 8k < 0$<br>よって $k > \\frac{9}{8}$ です。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "2次関数 $y = x^2 - kx + k^2$ ($k \\neq 0$) のグラフが$x$軸と共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k$は0以外のすべての実数",
        rationale: "<strong>解説: </strong><br>$D = (-k)^2 - 4k^2 = -3k^2$<br>ここで $k \\neq 0$ なので $k^2 > 0$、つまり $-3k^2 < 0$ は常に成り立ちます。<br>よって、$k$ が $0$ 以外のどのような値であっても共有点をもちません。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "2次関数 $y = x^2 + 4x - k$ のグラフが$x$軸と共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < -4$",
        rationale: "<strong>解説: </strong><br>$D/4 = 2^2 - (-k) = 4 + k$<br>$4 + k < 0$<br>よって $k < -4$ です。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "2次関数 $y = x^2 + (k+2)x + 1$ のグラフが$x$軸と共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$-4 < k < 0$",
        rationale: "<strong>解説: </strong><br>$D = (k+2)^2 - 4 = k^2 + 4k + 4 - 4 = k^2 + 4k$<br>$k(k+4) < 0$<br>よって $-4 < k < 0$ です。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "2次関数 $y = kx^2 + 2x - 1$ ($k \\neq 0$) のグラフが$x$軸と共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < -1$",
        rationale: "<strong>解説: </strong><br>$D/4 = 1^2 - k(-1) = 1 + k$<br>$1 + k < 0$<br>よって $k < -1$ です。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "2次関数 $y = x^2 - 2x + 3k$ のグラフが$x$軸と共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k > \\frac{1}{3}$",
        rationale: "<strong>解説: </strong><br>$D/4 = (-1)^2 - 3k = 1 - 3k$<br>$1 - 3k < 0$<br>よって $k > \\frac{1}{3}$ です。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "2次関数 $y = x^2 + kx + 2k - 3$ のグラフが$x$軸と共有点をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$2 < k < 6$",
        rationale: "<strong>解説: </strong><br>$D = k^2 - 4(2k-3) = k^2 - 8k + 12$<br>$k^2 - 8k + 12 < 0$<br>$(k-2)(k-6) < 0$<br>よって $2 < k < 6$ です。" + VIDEO_LINK
    }
];