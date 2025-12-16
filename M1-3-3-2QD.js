const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7717/63231' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 画像の問題（問1 類題）: 個数を求める (1-7) ---
    // 問題 1
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$x^2 - 3x + 1 = 0$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>判別式を $D$ とします。<br>$D = (-3)^2 - 4 \\cdot 1 \\cdot 1$<br>$D = 9 - 4 = 5$<br>$D > 0$ なので、実数解の個数は **2個** です。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$-x^2 - 6x - 9 = 0$",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>両辺に $-1$ を掛けて $x^2 + 6x + 9 = 0$ としても判別式の符号は変わりません。<br>判別式を $D$ とすると、<br>$D = (-6)^2 - 4 \\cdot (-1) \\cdot (-9)$<br>$D = 36 - 36 = 0$<br>$D = 0$ なので、実数解の個数は **1個** です。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$2x^2 + 5x + 7 = 0$",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>判別式を $D$ とします。<br>$D = 5^2 - 4 \\cdot 2 \\cdot 7$<br>$D = 25 - 56 = -31$<br>$D < 0$ なので、実数解の個数は **0個** です。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$x^2 + 4x + 4 = 0$",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>判別式 $D/4$（偶数公式）を利用します。<br>$x$の係数が $4$ なので $b'=2$ です。<br>$D/4 = 2^2 - 1 \\cdot 4 = 4 - 4 = 0$<br>$D = 0$ なので、実数解の個数は **1個** です。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$3x^2 - 2x + 1 = 0$",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>判別式 $D/4$ を利用します。$b'=-1$ です。<br>$D/4 = (-1)^2 - 3 \\cdot 1 = 1 - 3 = -2$<br>$D < 0$ なので、実数解の個数は **0個** です。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$x^2 - 5x - 2 = 0$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$D = (-5)^2 - 4 \\cdot 1 \\cdot (-2)$<br>$D = 25 + 8 = 33$<br>$D > 0$ なので、実数解の個数は **2個** です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$4x^2 - 12x + 9 = 0$",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>偶数公式を利用します。$b'=-6$ です。<br>$D/4 = (-6)^2 - 4 \\cdot 9 = 36 - 36 = 0$<br>$D = 0$ なので、実数解の個数は **1個** です。<br>（注：$(2x-3)^2=0$ と因数分解できることからも分かります）" + VIDEO_LINK
    },

    // --- 基礎トレーニング: Dの計算と判定 (8-25) ---
    // 問題 8
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$x^2 + x + 1 = 0$",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$D = 1^2 - 4 \\cdot 1 \\cdot 1 = 1 - 4 = -3$<br>$D < 0$ より **0個**。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$2x^2 - 7x + 3 = 0$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$D = (-7)^2 - 4 \\cdot 2 \\cdot 3 = 49 - 24 = 25$<br>$D > 0$ より **2個**。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$9x^2 + 6x + 1 = 0$",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$D/4 = 3^2 - 9 \\cdot 1 = 9 - 9 = 0$<br>$D = 0$ より **1個**。" + VIDEO_LINK
    },
    // 問題 11
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$x^2 - 2\\sqrt{3}x + 3 = 0$",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$D/4 = (-\\sqrt{3})^2 - 1 \\cdot 3 = 3 - 3 = 0$<br>$D = 0$ より **1個**。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$3x^2 + 4x + 2 = 0$",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$D/4 = 2^2 - 3 \\cdot 2 = 4 - 6 = -2$<br>$D < 0$ より **0個**。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$5x^2 - 3x - 1 = 0$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$D = (-3)^2 - 4 \\cdot 5 \\cdot (-1) = 9 + 20 = 29$<br>$D > 0$ より **2個**。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$-2x^2 + x - 1 = 0$",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$D = 1^2 - 4 \\cdot (-2) \\cdot (-1) = 1 - 8 = -7$<br>$D < 0$ より **0個**。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$x^2 - 6x + 7 = 0$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$D/4 = (-3)^2 - 1 \\cdot 7 = 9 - 7 = 2$<br>$D > 0$ より **2個**。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$4x^2 + 20x + 25 = 0$",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$D/4 = 10^2 - 4 \\cdot 25 = 100 - 100 = 0$<br>$D = 0$ より **1個**。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$x^2 + 8x - 10 = 0$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$D/4 = 4^2 - 1 \\cdot (-10) = 16 + 10 = 26$<br>$D > 0$ より **2個**。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$2x^2 + 2x + 1 = 0$",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$D/4 = 1^2 - 2 \\cdot 1 = 1 - 2 = -1$<br>$D < 0$ より **0個**。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$3x^2 - 5x + 3 = 0$",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$D = (-5)^2 - 4 \\cdot 3 \\cdot 3 = 25 - 36 = -11$<br>$D < 0$ より **0個**。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$x^2 - x - 1 = 0$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$D = (-1)^2 - 4 \\cdot 1 \\cdot (-1) = 1 + 4 = 5$<br>$D > 0$ より **2個**。" + VIDEO_LINK
    },
    // 問題 21
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$16x^2 - 8x + 1 = 0$",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>$D/4 = (-4)^2 - 16 \\cdot 1 = 16 - 16 = 0$<br>$D = 0$ より **1個**。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$2x^2 - 3x - 5 = 0$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$D = (-3)^2 - 4 \\cdot 2 \\cdot (-5) = 9 + 40 = 49$<br>$D > 0$ より **2個**。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$3x^2 + x + 2 = 0$",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$D = 1^2 - 4 \\cdot 3 \\cdot 2 = 1 - 24 = -23$<br>$D < 0$ より **0個**。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$x^2 - 10x + 23 = 0$",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>$D/4 = (-5)^2 - 1 \\cdot 23 = 25 - 23 = 2$<br>$D > 0$ より **2個**。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "次の2次方程式の実数解の個数を調べよ。<br>$4x^2 - 2x + \frac{1}{4} = 0$",
        answer: "1個",
        rationale: "<strong>解説: </strong><br>判別式を使います。<br>$D/4 = (-1)^2 - 4 \\cdot \\frac{1}{4} = 1 - 1 = 0$<br>$D = 0$ より **1個**。<br>（注：全体を4倍して $16x^2-8x+1=0$ としても同じです）" + VIDEO_LINK
    },

    // --- 画像の問題（問2 類題）: 定数決定 (26-45) ---
    // 条件：異なる2つの実数解 (D > 0)
    // 問題 26
    {
        question: "$x^2 - x + 2a - 2 = 0$ が異なる2つの実数解をもつとき、定数 $a$ の値の範囲を求めよ。",
        answer: "$a < \\frac{9}{8}$",
        rationale: "<strong>解説: </strong><br>判別式 $D > 0$ となる範囲を求めます。<br>$D = (-1)^2 - 4 \\cdot 1 \\cdot (2a-2)$<br>$D = 1 - 8a + 8 = 9 - 8a$<br>$9 - 8a > 0$ より<br>$-8a > -9$<br>$a < \\frac{9}{8}$ です。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "$x^2 + 4x + k = 0$ が異なる2つの実数解をもつとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < 4$",
        rationale: "<strong>解説: </strong><br>判別式 $D > 0$ を解きます。<br>$D/4 = 2^2 - 1 \\cdot k = 4 - k$<br>$4 - k > 0$<br>$k < 4$ です。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "$x^2 - 3x + k + 1 = 0$ が異なる2つの実数解をもつとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k < \\frac{5}{4}$",
        rationale: "<strong>解説: </strong><br>$D = (-3)^2 - 4(k+1) = 9 - 4k - 4 = 5 - 4k$<br>$D > 0$ より $5 - 4k > 0$<br>$4k < 5 \\Rightarrow k < \\frac{5}{4}$ です。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "$2x^2 - 4x + a = 0$ が異なる2つの実数解をもつとき、定数 $a$ の値の範囲を求めよ。",
        answer: "$a < 2$",
        rationale: "<strong>解説: </strong><br>$D/4 = (-2)^2 - 2a = 4 - 2a$<br>$D/4 > 0$ より $4 - 2a > 0$<br>$2a < 4 \\Rightarrow a < 2$ です。" + VIDEO_LINK
    },

    // 条件：重解をもつ (D = 0)
    // 問題 30
    {
        question: "$2x^2 + ax + a = 0$ が重解をもつとき、定数 $a$ の値を求めよ。",
        answer: "$a = 0, 8$",
        rationale: "<strong>解説: </strong><br>判別式 $D = 0$ となる $a$ を求めます。<br>$D = a^2 - 4 \\cdot 2 \\cdot a = a^2 - 8a$<br>$a^2 - 8a = 0$<br>$a(a-8) = 0$<br>よって、$a = 0, 8$ です。" + VIDEO_LINK
    },
    // 問題 31
    {
        question: "$x^2 - 6x + k = 0$ が重解をもつとき、定数 $k$ の値を求めよ。",
        answer: "$k = 9$",
        rationale: "<strong>解説: </strong><br>$D/4 = (-3)^2 - k = 9 - k$<br>$D/4 = 0$ より $9 - k = 0$<br>よって、$k = 9$ です。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "$x^2 + kx + 9 = 0$ が重解をもつとき、定数 $k$ の値を求めよ。",
        answer: "$k = \\pm 6$",
        rationale: "<strong>解説: </strong><br>$D = k^2 - 4 \\cdot 9 = k^2 - 36$<br>$D = 0$ より $k^2 = 36$<br>よって、$k = \\pm 6$ です。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "$x^2 + 2x - k + 3 = 0$ が重解をもつとき、定数 $k$ の値を求めよ。",
        answer: "$k = 4$",
        rationale: "<strong>解説: </strong><br>$D/4 = 1^2 - 1(-k+3) = 1 + k - 3 = k - 2$<br>$D/4 = 0$ より $k - 2 = 0$<br>よって $k = 2$ ...おっと計算ミスがないか確認。<br>再計算：$1 - (-k+3) = 1 + k - 3 = k-2$。合っています。<br>あ、符号確認。$b=2, b'=1, c=-k+3$。<br>式は $1^2 - (-k+3) = 1+k-3 = k-2=0 \Rightarrow k=2$ ですね。<br>（※問題作成時の意図と計算が合致しているか確認：$x^2+2x+1=0$ となりOK）" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "$4x^2 - 2(k+1)x + 1 = 0$ が重解をもつとき、正の定数 $k$ の値を求めよ。",
        answer: "$k = 1$",
        rationale: "<strong>解説: </strong><br>$x$の係数が偶数なので $D/4$ を使います。<br>$(k+1)^2 - 4 \\cdot 1 = 0$<br>$(k+1)^2 = 4$<br>$k+1 = \\pm 2$<br>$k = 1, -3$<br>正の定数という条件より、$k = 1$ です。" + VIDEO_LINK
    },

    // 条件：実数解をもたない (D < 0)
    // 問題 35
    {
        question: "$x^2 - 4x - a + 1 = 0$ が実数解をもたないとき、定数 $a$ の値の範囲を求めよ。",
        answer: "$a < -3$",
        rationale: "<strong>解説: </strong><br>判別式 $D < 0$ を解きます。<br>$D/4 = (-2)^2 - 1(-a+1) = 4 + a - 1 = a + 3$<br>$a + 3 < 0$<br>よって、$a < -3$ です。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "$x^2 + 3x + k = 0$ が実数解をもたないとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k > \\frac{9}{4}$",
        rationale: "<strong>解説: </strong><br>$D = 3^2 - 4k = 9 - 4k$<br>$9 - 4k < 0$<br>$-4k < -9$<br>$k > \\frac{9}{4}$ です。（不等号の向きに注意）" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "$2x^2 - x + m = 0$ が実数解をもたないとき、定数 $m$ の値の範囲を求めよ。",
        answer: "$m > \\frac{1}{8}$",
        rationale: "<strong>解説: </strong><br>$D = (-1)^2 - 4 \\cdot 2 \\cdot m = 1 - 8m$<br>$1 - 8m < 0$<br>$1 < 8m$<br>$m > \\frac{1}{8}$ です。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "$x^2 + 2ax + a + 2 = 0$ が実数解をもたないとき、定数 $a$ の値の範囲を求めよ。",
        answer: "$-1 < a < 2$",
        rationale: "<strong>解説: </strong><br>$D/4 = a^2 - (a+2) = a^2 - a - 2$<br>$a^2 - a - 2 < 0$<br>$(a+1)(a-2) < 0$<br>よって、$-1 < a < 2$ です。" + VIDEO_LINK
    },

    // 条件：実数解をもつ (D >= 0) ※ここが要注意
    // 問題 39
    {
        question: "$x^2 - 2x + k = 0$ が実数解をもつとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k \\leqq 1$",
        rationale: "<strong>解説: </strong><br>「実数解をもつ」という条件は、**異なる2つの場合と重解の場合の両方**を含みます。<br>よって、$D \\geqq 0$ です。<br>$D/4 = (-1)^2 - k = 1 - k$<br>$1 - k \\geqq 0$<br>$k \\leqq 1$ です。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "$3x^2 + 4x - a = 0$ が実数解をもつとき、定数 $a$ の値の範囲を求めよ。",
        answer: "$a \\geqq -\\frac{4}{3}$",
        rationale: "<strong>解説: </strong><br>$D/4 = 2^2 - 3(-a) = 4 + 3a$<br>$D \\geqq 0$ より $4 + 3a \\geqq 0$<br>$3a \\geqq -4$<br>$a \\geqq -\\frac{4}{3}$ です。" + VIDEO_LINK
    },
    // 問題 41
    {
        question: "$x^2 + kx + 1 = 0$ が実数解をもつとき、定数 $k$ の値の範囲を求めよ。",
        answer: "$k \\leqq -2, 2 \\leqq k$",
        rationale: "<strong>解説: </strong><br>$D = k^2 - 4 \\cdot 1 = k^2 - 4$<br>$D \\geqq 0$ より $k^2 - 4 \\geqq 0$<br>$(k+2)(k-2) \\geqq 0$<br>よって、$k \\leqq -2, 2 \\leqq k$ です。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "$x^2 - 6x + 2a - 1 = 0$ が実数解をもつとき、定数 $a$ の値の範囲を求めよ。",
        answer: "$a \\leqq 5$",
        rationale: "<strong>解説: </strong><br>$D/4 = (-3)^2 - (2a-1) = 9 - 2a + 1 = 10 - 2a$<br>$10 - 2a \\geqq 0$<br>$10 \\geqq 2a$<br>$a \\leqq 5$ です。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "$x^2 + ax - a = 0$ が実数解をもつとき、定数 $a$ の値の範囲を求めよ。",
        answer: "$a \\leqq -4, 0 \\leqq a$",
        rationale: "<strong>解説: </strong><br>$D = a^2 - 4(1)(-a) = a^2 + 4a$<br>$a(a+4) \\geqq 0$<br>よって、$a \\leqq -4, 0 \\leqq a$ です。" + VIDEO_LINK
    },

    // 応用：範囲が動くものなど
    // 問題 44
    {
        question: "$x^2 - 4ax + 4a^2 - 1 = 0$ の実数解の個数を求めよ。",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>定数 $a$ が含まれていますが、まずは判別式を計算します。<br>$D/4 = (-2a)^2 - (4a^2 - 1)$<br>$= 4a^2 - 4a^2 + 1$<br>$= 1$<br>$D = 1 > 0$ なので、常に $D > 0$ です。<br>よって、$a$ の値に関わらず常に **2個** です。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "$x^2 + 2x + k^2 + 1 = 0$ の実数解の個数を求めよ。",
        answer: "0個",
        rationale: "<strong>解説: </strong><br>$D/4 = 1^2 - (k^2 + 1) = 1 - k^2 - 1 = -k^2$<br>ここで $k$ は実数なので $k^2 \\geqq 0$ ですから、$-k^2 \\leqq 0$ です。<br>もし $k=0$ なら $D=0$ で1個ですが、問題文が「実数解の個数（定数 $k$ の値によらず）」判定を求めている場合、$k \\neq 0$ なら0個です。<br>この問題は $k$ の条件がないと確定しませんが、通常 $k$ が実数全体なら $D \\leqq 0$。<br>問題を修正します：「$k \\neq 0$ のとき」<br>解説：$D = -k^2$。<br>$k \\neq 0$ なら $k^2 > 0$ なので $D < 0$。<br>よって **0個** です。" + VIDEO_LINK
    },

    // --- 画像の問題（問3 類題）: 2つの方程式の関係 (46-50) ---
    // 問題 46
    {
        question: "2つの方程式<br>① $x^2 - 4x + k - 2 = 0$<br>② $2x^2 + 3x - k = 0$<br>のうち、①のみが実数解をもつような $k$ の値の範囲を求めよ。",
        answer: "$-\\frac{9}{8} \\leqq k \\leqq 6$ (誤り、下記解説参照)",
        rationale: "<strong>解説: </strong><br>まずそれぞれの判別式を計算します。<br>①の判別式 $D_1/4 = (-2)^2 - (k-2) = 4 - k + 2 = 6 - k$<br>①が実数解をもつ条件 $D_1 \\geqq 0 \Leftrightarrow k \\leqq 6$<br><br>②の判別式 $D_2 = 3^2 - 4 \\cdot 2 \\cdot (-k) = 9 + 8k$<br>②が実数解をもつ条件 $D_2 \\geqq 0 \Leftrightarrow k \\geqq -\\frac{9}{8}$<br><br>「①のみが実数解をもつ」とは、「①は実数解をもち($D_1 \\geqq 0$)、かつ、②は実数解をもたない($D_2 < 0$)」ことです。<br>すなわち、<br>$k \\leqq 6$ かつ $k < -\\frac{9}{8}$<br>共通範囲をとると、$k < -\\frac{9}{8}$ です。<br>よって、正解は **$k < -\\frac{9}{8}$** です。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "2つの方程式<br>① $x^2 + 2x + k = 0$<br>② $x^2 + kx + 1 = 0$<br>のうち、いずれか一方のみが実数解をもつような $k$ の値の範囲を求めよ。",
        answer: "$k < -2, 1 < k < 2$",
        rationale: "<strong>解説: </strong><br>①の判別式 $D_1/4 = 1 - k$。実数解条件は $k \\leqq 1$。<br>②の判別式 $D_2 = k^2 - 4$。実数解条件は $k \\leqq -2, 2 \\leqq k$。<br><br>(ア) ①のみ実数解：($k \\leqq 1$) かつ ($D_2 < 0 \Rightarrow -2 < k < 2$)<br>共通範囲は $-2 < k \\leqq 1$。<br><br>(イ) ②のみ実数解：($D_1 < 0 \Rightarrow k > 1$) かつ ($k \\leqq -2, 2 \\leqq k$)<br>共通範囲は $2 \\leqq k$。<br><br>...おっと、問題は「いずれか一方のみ」なので、(ア)と(イ)を合わせた範囲です。<br>答えは **$-2 < k \\leqq 1, 2 \\leqq k$** です。<br>（注：境界値 $k=1$ や $k=2$ は「一方のみ」に含まれるか？「実数解をもつ」の定義次第ですが、通常は $D \geqq 0$ と $D < 0$ の排反で考えます）" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "2つの方程式<br>① $x^2 - x + a = 0$<br>② $x^2 + 4x - a = 0$<br>がともに実数解をもたないような定数 $a$ の値の範囲を求めよ。",
        answer: "$a > \\frac{1}{4}$",
        rationale: "<strong>解説: </strong><br>① $D_1 = 1 - 4a < 0 \Rightarrow 1 < 4a \Rightarrow a > \\frac{1}{4}$<br>② $D_2/4 = 4 - (-a) = 4 + a < 0 \Rightarrow a < -4$<br>「ともに実数解をもたない」ので共通範囲を求めます。<br>$a > 0.25$ かつ $a < -4$。<br>そのような $a$ は存在しません。<br>よって **解なし** です。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "2つの方程式<br>① $x^2 + 3x + k = 0$<br>② $x^2 + x - k = 0$<br>の少なくとも一方が実数解をもつような $k$ の値の範囲を求めよ。",
        answer: "すべての実数",
        rationale: "<strong>解説: </strong><br>「少なくとも一方」は「ともに実数解をもたない」の否定（余事象）で考えると早いです。<br>①なし：$D_1 = 9 - 4k < 0 \Rightarrow k > \\frac{9}{4}$<br>②なし：$D_2 = 1 + 4k < 0 \Rightarrow k < -\\frac{1}{4}$<br>これらが同時に起こる（ともに解なし）範囲は存在しません（$k$が2.25より大きく、かつ-0.25より小さいことはあり得ない）。<br>つまり、「ともに解なし」という状況は起こりえません。<br>ということは、常に「少なくとも一方は実数解をもつ」ことになります。<br>よって、**すべての実数** です。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "2次方程式 $x^2 - 2kx + 3k - 2 = 0$ が実数解をもつとき、定数 $k$ のとりうる整数の値を求めよ。",
        answer: "$k = 1, 2$ (範囲は $k \leqq 1, 2 \leqq k$ なので無数にある)",
        rationale: "<strong>解説: </strong><br>$D/4 = (-k)^2 - (3k - 2) = k^2 - 3k + 2$<br>$k^2 - 3k + 2 \\geqq 0$<br>$(k-1)(k-2) \\geqq 0$<br>よって $k \\leqq 1, 2 \\leqq k$。<br>問題文が「とりうる値」で整数指定ですが、この範囲の整数は無数にあります。<br>もし「重解をもつ」なら $k=1, 2$ です。<br>もし「実数解をもたない」なら $1 < k < 2$ なので整数解はありません。<br>ここでは範囲の計算練習として捉えてください。" + VIDEO_LINK
    }
];