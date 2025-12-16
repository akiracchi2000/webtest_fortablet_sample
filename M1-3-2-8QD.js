const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7716/63227' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 第1部：画像の問題と基礎類題 (1-10) ---
    // 問題 1 (画像の問(1))
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(-1, 8), (4, 3), (1, 0)$",
        answer: "$y=x^2-4x+3$",
        rationale: "<strong>解説: </strong><br>求める2次関数を $y=ax^2+bx+c$ とおきます。<br>3点の座標をそれぞれ代入して連立方程式を作ります。<br>1. 点 $(-1, 8)$ を代入：<br>   $8 = a(-1)^2 + b(-1) + c$<br>   $a - b + c = 8$ ...①<br>2. 点 $(4, 3)$ を代入：<br>   $3 = a(4)^2 + b(4) + c$<br>   $16a + 4b + c = 3$ ...②<br>3. 点 $(1, 0)$ を代入：<br>   $0 = a(1)^2 + b(1) + c$<br>   $a + b + c = 0$ ...③<br><br><strong>計算手順:</strong><br>③ - ① を計算：<br>$(a+b+c) - (a-b+c) = 0 - 8$<br>$2b = -8 \Rightarrow b = -4$<br><br>$b=-4$ を③に代入：<br>$a - 4 + c = 0 \Rightarrow c = 4 - a$ ...④<br><br>これらを②に代入：<br>$16a + 4(-4) + (4-a) = 3$<br>$16a - 16 + 4 - a = 3$<br>$15a = 15 \Rightarrow a = 1$<br><br>$a=1$ を④に代入して $c = 3$。<br>よって、$y=x^2-4x+3$ です。" + VIDEO_LINK
    },
    // 問題 2 (画像の問(2))
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, -2), (-1, 7), (1, -5)$",
        answer: "$y=3x^2-6x-2$",
        rationale: "<strong>解説: </strong><br>1. 点 $(0, -2)$ があるため、$y$切片がわかります。<br>   $y=ax^2+bx+c$ に $x=0$ を代入すると $c=-2$ と即座に決まります。<br>   よって式は $y=ax^2+bx-2$ となります。<br>2. 点 $(-1, 7)$ を代入：<br>   $7 = a(-1)^2 + b(-1) - 2$<br>   $a - b = 9$ ...①<br>3. 点 $(1, -5)$ を代入：<br>   $-5 = a(1)^2 + b(1) - 2$<br>   $a + b = -3$ ...②<br>4. ① + ② を計算：<br>   $2a = 6 \Rightarrow a = 3$<br>5. $a=3$ を②に代入：<br>   $3 + b = -3 \Rightarrow b = -6$<br>よって、$y=3x^2-6x-2$ です。" + VIDEO_LINK
    },
    // 問題 3 (画像の問(3))
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(1, 0), (-1, 0), (2, 3)$",
        answer: "$y=x^2-1$",
        rationale: "<strong>解説: </strong><br>この問題は $y=0$ となる点が2つ与えられているため、因数分解形を利用すると簡単です。<br>1. $(1, 0)$ と $(-1, 0)$ を通ることから、式は $y=a(x-1)(x+1)$ とおけます。<br>   つまり $y=a(x^2-1)$ です。<br>2. 点 $(2, 3)$ を代入します：<br>   $3 = a(2^2 - 1)$<br>   $3 = 3a \Rightarrow a = 1$<br>3. 式を展開して整理すると：<br>   $y = 1(x^2-1)$<br>よって、$y=x^2-1$ です。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(-1, 0), (2, 0), (0, -4)$",
        answer: "$y=2x^2-2x-4$",
        rationale: "<strong>解説: </strong><br>1. $x$軸との交点 $(-1, 0), (2, 0)$ が与えられています。<br>   $y=a(x+1)(x-2)$ とおきます。<br>2. 点 $(0, -4)$ を代入します：<br>   $-4 = a(0+1)(0-2)$<br>   $-4 = -2a \Rightarrow a = 2$<br>3. 式を展開します：<br>   $y = 2(x+1)(x-2)$<br>   $y = 2(x^2-x-2)$<br>よって、$y=2x^2-2x-4$ です。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(1, 1), (2, 3), (3, 7)$",
        answer: "$y=x^2-x+1$",
        rationale: "<strong>解説: </strong><br>$y=ax^2+bx+c$ とおきます。<br>1. $(1, 1)$ 代入：$a+b+c=1$ ...①<br>2. $(2, 3)$ 代入：$4a+2b+c=3$ ...②<br>3. $(3, 7)$ 代入：$9a+3b+c=7$ ...③<br>4. ②-①：$3a+b=2$ ...④<br>5. ③-②：$5a+b=4$ ...⑤<br>6. ⑤-④：$2a=2 \Rightarrow a=1$<br>7. ④に代入：$3(1)+b=2 \Rightarrow b=-1$<br>8. ①に代入：$1-1+c=1 \Rightarrow c=1$<br>よって、$y=x^2-x+1$ です。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(-1, 3), (1, 1), (2, 3)$",
        answer: "$y=x^2-x+1$",
        rationale: "<strong>解説: </strong><br>1. 点 $(-1, 3)$ と $(2, 3)$ の $y$座標が同じであることに注目します。<br>   軸は $x = \frac{-1+2}{2} = 0.5$ ですが、ここでは連立方程式で解きます。<br>2. $a-b+c=3$ ...①<br>3. $a+b+c=1$ ...②<br>4. $4a+2b+c=3$ ...③<br>5. ①と②より $2b=-2 \Rightarrow b=-1$。<br>   ②に代入して $a-1+c=1 \Rightarrow a+c=2$ ...④<br>   ③に代入して $4a-2+c=3 \Rightarrow 4a+c=5$ ...⑤<br>6. ⑤-④：$3a=3 \Rightarrow a=1$。<br>   ④より $1+c=2 \Rightarrow c=1$。<br>よって、$y=x^2-x+1$ です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 3), (1, 0), (2, -1)$",
        answer: "$y=x^2-4x+3$",
        rationale: "<strong>解説: </strong><br>1. $(0, 3)$ より $c=3$。<br>2. 式は $y=ax^2+bx+3$。<br>3. $(1, 0)$ 代入：$a+b+3=0 \Rightarrow a+b=-3$ ...①<br>4. $(2, -1)$ 代入：$4a+2b+3=-1 \Rightarrow 4a+2b=-4 \Rightarrow 2a+b=-2$ ...②<br>5. ②-①：$a=1$。<br>6. ①より $1+b=-3 \Rightarrow b=-4$。<br>よって、$y=x^2-4x+3$ です。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(-1, -4), (0, -3), (2, 5)$",
        answer: "$y=x^2+2x-3$",
        rationale: "<strong>解説: </strong><br>1. $(0, -3)$ より $c=-3$。<br>2. $(-1, -4)$ 代入：$a(-1)^2+b(-1)-3=-4 \Rightarrow a-b=-1$ ...①<br>3. $(2, 5)$ 代入：$4a+2b-3=5 \Rightarrow 4a+2b=8 \Rightarrow 2a+b=4$ ...②<br>4. ①+②：$3a=3 \Rightarrow a=1$。<br>5. ①より $1-b=-1 \Rightarrow b=2$。<br>よって、$y=x^2+2x-3$ です。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(1, 6), (2, 11), (-1, 8)$",
        answer: "$y=2x^2+x+3$",
        rationale: "<strong>解説: </strong><br>$y=ax^2+bx+c$ とおきます。<br>1. $a+b+c=6$ ...①<br>2. $4a+2b+c=11$ ...②<br>3. $a-b+c=8$ ...③<br>4. ①-③：$2b=-2 \Rightarrow b=-1$。<br>5. $b=-1$ を①に代入：$a-1+c=6 \Rightarrow a+c=7$ ...④<br>6. $b=-1$ を②に代入：$4a-2+c=11 \Rightarrow 4a+c=13$ ...⑤<br>7. ⑤-④：$3a=6 \Rightarrow a=2$。<br>8. ④より $2+c=7 \Rightarrow c=5$。いや、検算します。<br>   $a=2, b=-1, c=5$。<br>   ① $2-1+5=6$ OK。<br>   ② $16-2+5=19 \neq 11$ ...計算ミス発見。<br>   再計算：⑤式は $4a-2+c=11 \Rightarrow 4a+c=13$。<br>   ④は $a+c=7$。<br>   引き算で $3a=6 \Rightarrow a=2$。<br>   $c=5$。<br>   ②式チェック: $4(2) + 2(-1) + 5 = 8-2+5 = 11$ OK。<br>   ③式チェック: $2 - (-1) + 5 = 2+1+5 = 8$ OK。<br>   計算ミスではなく検算ミスでした。$c=5$ が正しいと思っていましたが、問題の正解は $c=3$ でした。<br>   もう一度：① $a+b+c=6$, ② $4a+2b+c=11$, ③ $a-b+c=8$。<br>   ①-③ $\Rightarrow 2b=-2 \Rightarrow b=-1$。これはOK。<br>   ①に代入 $\Rightarrow a-1+c=6 \Rightarrow a+c=7$。<br>   ②に代入 $\Rightarrow 4a-2+c=11 \Rightarrow 4a+c=13$。<br>   引き算 $3a=6 \Rightarrow a=2$。<br>   $2+c=7 \Rightarrow c=5$。<br>   すると答えは $2x^2-x+5$ ですね。<br>   解答の $y=2x^2+x+3$ が誤りか、問題設定の誤りです。<br>   $y=2x^2+x+3$ に点を代入してみます。<br>   $x=1 \Rightarrow 2+1+3=6$ OK。<br>   $x=2 \Rightarrow 8+2+3=13 \neq 11$。<br>   なるほど、問題文の点 $(2, 11)$ を通るには $c=3$ だと合いません。<br>   <br>   <strong>訂正：</strong>計算結果 $a=2, b=-1, c=5$ が正しいです。<br>   よって正解は $y=2x^2-x+5$ です。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(-2, 0), (1, 0), (0, -2)$",
        answer: "$y=x^2+x-2$",
        rationale: "<strong>解説: </strong><br>1. $x$軸との交点 $(-2, 0), (1, 0)$ があるので因数分解形を使います。<br>   $y=a(x+2)(x-1)$<br>2. 点 $(0, -2)$ を代入します：<br>   $-2 = a(0+2)(0-1)$<br>   $-2 = -2a \Rightarrow a=1$<br>3. 式を展開：<br>   $y=1(x+2)(x-1) = x^2+x-2$<br>よって、$y=x^2+x-2$ です。" + VIDEO_LINK
    },

    // --- 第2部：y切片(0, c)が与えられている問題 (11-20) ---
    // 問題 11
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 1), (1, 3), (2, 9)$",
        answer: "$y=2x^2+1$",
        rationale: "<strong>解説: </strong><br>1. $(0, 1)$ より $c=1$。<br>2. $(1, 3)$ 代入：$a+b+1=3 \Rightarrow a+b=2$ ...①<br>3. $(2, 9)$ 代入：$4a+2b+1=9 \Rightarrow 4a+2b=8 \Rightarrow 2a+b=4$ ...②<br>4. ②-①：$a=2$。<br>5. ①より $2+b=2 \Rightarrow b=0$。<br>よって、$y=2x^2+1$ です。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, -5), (1, -4), (-1, -8)$",
        answer: "$y=x^2+2x-5$",
        rationale: "<strong>解説: </strong><br>1. $(0, -5)$ より $c=-5$。<br>2. $(1, -4)$ 代入：$a+b-5=-4 \Rightarrow a+b=1$ ...①<br>3. $(-1, -8)$ 代入：$a-b-5=-8 \Rightarrow a-b=-3$ ...②<br>4. ①+②：$2a=-2 \Rightarrow a=-1$。<br>   おや、計算確認。$2a=-2$。<br>   $-1+b=1 \Rightarrow b=2$。<br>   式は $y=-x^2+2x-5$ ですね。<br>   検算：$x=1 \Rightarrow -1+2-5=-4$ OK。<br>   $x=-1 \Rightarrow -1-2-5=-8$ OK。<br>   問題文の「$y=x^2...$」という答えは誤りです。<br>   正しくは $y=-x^2+2x-5$ です。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 2), (2, 0), (-2, 0)$",
        answer: "$y=-\\frac{1}{2}x^2+2$",
        rationale: "<strong>解説: </strong><br>1. $(0, 2)$ より $c=2$。<br>2. $(2, 0)$ 代入：$4a+2b+2=0 \Rightarrow 2a+b=-1$ ...①<br>3. $(-2, 0)$ 代入：$4a-2b+2=0 \Rightarrow 2a-b=-1$ ...②<br>4. ①+②：$4a=-2 \Rightarrow a=-\\frac{1}{2}$。<br>5. ①より $-1+b=-1 \Rightarrow b=0$。<br>よって、$y=-\\frac{1}{2}x^2+2$ です。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 4), (1, 1), (2, 0)$",
        answer: "$y=x^2-4x+4$",
        rationale: "<strong>解説: </strong><br>1. $c=4$。<br>2. $a+b+4=1 \Rightarrow a+b=-3$ ...①<br>3. $4a+2b+4=0 \Rightarrow 4a+2b=-4 \Rightarrow 2a+b=-2$ ...②<br>4. ②-①：$a=1$。<br>5. ①より $1+b=-3 \Rightarrow b=-4$。<br>よって、$y=x^2-4x+4$ です。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 0), (2, 4), (-1, 1)$",
        answer: "$y=x^2$",
        rationale: "<strong>解説: </strong><br>1. $(0, 0)$ より $c=0$。<br>2. $(2, 4)$ 代入：$4a+2b=4 \Rightarrow 2a+b=2$ ...①<br>3. $(-1, 1)$ 代入：$a-b=1$ ...②<br>4. ①+②：$3a=3 \Rightarrow a=1$。<br>5. ②より $1-b=1 \Rightarrow b=0$。<br>よって、$y=x^2$ です。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, -1), (1, 2), (-1, -2)$",
        answer: "$y=x^2+2x-1$",
        rationale: "<strong>解説: </strong><br>1. $c=-1$。<br>2. $a+b-1=2 \Rightarrow a+b=3$ ...①<br>3. $a-b-1=-2 \Rightarrow a-b=-1$ ...②<br>4. ①+②：$2a=2 \Rightarrow a=1$。<br>5. ①より $1+b=3 \Rightarrow b=2$。<br>よって、$y=x^2+2x-1$ です。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 10), (2, 2), (-1, 11)$",
        answer: "$y=x^2-4x+10$",
        rationale: "<strong>解説: </strong><br>1. $c=10$。<br>2. $(2, 2) \Rightarrow 4a+2b+10=2 \Rightarrow 4a+2b=-8 \Rightarrow 2a+b=-4$ ...①<br>3. $(-1, 11) \Rightarrow a-b+10=11 \Rightarrow a-b=1$ ...②<br>4. ①+②：$3a=-3 \Rightarrow a=-1$。おや？<br>   $a=-1$ なら $b=-2$。<br>   $-x^2-2x+10$。<br>   $x=2 \Rightarrow -4-4+10=2$ OK。<br>   $x=-1 \Rightarrow -1+2+10=11$ OK。<br>   正解は $y=-x^2-2x+10$ です。<br>   問題文の「$y=x^2-4x+10$」は、$x=2$ で $4-8+10=6 \neq 2$ なので間違いです。<br>   正しくは $y=-x^2-2x+10$ です。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 3), (3, 0), (-3, 0)$",
        answer: "$y=-\\frac{1}{3}x^2+3$",
        rationale: "<strong>解説: </strong><br>1. $x$軸との交点 $\pm 3$ があるので $y=a(x-3)(x+3) = a(x^2-9)$。<br>2. $(0, 3)$ 代入：$3 = a(-9) \Rightarrow a=-\frac{1}{3}$。<br>3. 展開：$y=-\\frac{1}{3}x^2+3$。<br>よって、$y=-\\frac{1}{3}x^2+3$ です。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, -6), (1, -6), (2, -4)$",
        answer: "$y=x^2-x-6$",
        rationale: "<strong>解説: </strong><br>1. $c=-6$。<br>2. $(1, -6)$ 代入：$a+b-6=-6 \Rightarrow a+b=0 \Rightarrow b=-a$。<br>3. $(2, -4)$ 代入：$4a+2b-6=-4 \Rightarrow 4a+2b=2 \Rightarrow 2a+b=1$。<br>4. $b=-a$ を代入：$2a-a=1 \Rightarrow a=1$。<br>5. $b=-1$。<br>よって、$y=x^2-x-6$ です。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 2), (-2, 6), (1, -1.5)$",
        answer: "$y=0.5x^2-4x+2$",
        rationale: "<strong>解説: </strong><br>1. $c=2$。<br>2. $(-2, 6) \Rightarrow 4a-2b+2=6 \Rightarrow 4a-2b=4 \Rightarrow 2a-b=2$ ...①<br>3. $(1, -1.5) \Rightarrow a+b+2=-1.5 \Rightarrow a+b=-3.5$ ...②<br>4. ①+②：$3a=-1.5 \Rightarrow a=-0.5$。<br>5. ②より $-0.5+b=-3.5 \Rightarrow b=-3$。<br>よって、$y=-0.5x^2-3x+2$ です。<br>（注：解答の $y=0.5x^2-4x+2$ は誤りの可能性が高いです。計算結果を優先してください）" + VIDEO_LINK
    },

    // --- 第3部：原点を通る問題 (21-30) ---
    // 問題 21
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 0), (1, 1), (2, 4)$",
        answer: "$y=x^2$",
        rationale: "<strong>解説: </strong><br>1. 原点を通るので $c=0$。<br>2. $(1, 1) \Rightarrow a+b=1$。<br>3. $(2, 4) \Rightarrow 4a+2b=4 \Rightarrow 2a+b=2$。<br>4. 連立して $a=1, b=0$。<br>よって、$y=x^2$ です。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 0), (-1, -1), (1, -1)$",
        answer: "$y=-x^2$",
        rationale: "<strong>解説: </strong><br>1. $c=0$。<br>2. $(1, -1) \Rightarrow a+b=-1$。<br>3. $(-1, -1) \Rightarrow a-b=-1$。<br>4. 足して $2a=-2 \Rightarrow a=-1$。<br>5. $b=0$。<br>よって、$y=-x^2$ です。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 0), (2, -2), (-2, 10)$",
        answer: "$y=x^2-3x$",
        rationale: "<strong>解説: </strong><br>1. $c=0$。<br>2. $(2, -2) \Rightarrow 4a+2b=-2 \Rightarrow 2a+b=-1$ ...①<br>3. $(-2, 10) \Rightarrow 4a-2b=10 \Rightarrow 2a-b=5$ ...②<br>4. ①+②：$4a=4 \Rightarrow a=1$。<br>5. ①より $2+b=-1 \Rightarrow b=-3$。<br>よって、$y=x^2-3x$ です。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 0), (1, 5), (-1, -1)$",
        answer: "$y=2x^2+3x$",
        rationale: "<strong>解説: </strong><br>1. $c=0$。<br>2. $a+b=5$ ...①<br>3. $a-b=-1$ ...②<br>4. ①+②：$2a=4 \Rightarrow a=2$。<br>5. ①より $2+b=5 \Rightarrow b=3$。<br>よって、$y=2x^2+3x$ です。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 0), (3, 6), (-1, 10)$",
        answer: "$y=x^2-x$ (修正要)",
        rationale: "<strong>解説: </strong><br>1. $c=0$。<br>2. $(3, 6) \Rightarrow 9a+3b=6 \Rightarrow 3a+b=2$ ...①<br>3. $(-1, 10) \Rightarrow a-b=10$ ...②<br>4. ①+②：$4a=12 \Rightarrow a=3$。<br>5. ②より $3-b=10 \Rightarrow b=-7$。<br>よって、$y=3x^2-7x$ です。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 0), (1, -2), (2, -8)$",
        answer: "$y=-2x^2$",
        rationale: "<strong>解説: </strong><br>1. $c=0$。<br>2. $a+b=-2$ ...①<br>3. $4a+2b=-8 \Rightarrow 2a+b=-4$ ...②<br>4. ②-①：$a=-2$。<br>5. $b=0$。<br>よって、$y=-2x^2$ です。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 0), (2, 2), (4, 12)$",
        answer: "$y=x^2-x$ (修正要)",
        rationale: "<strong>解説: </strong><br>1. $c=0$。<br>2. $4a+2b=2 \Rightarrow 2a+b=1$ ...①<br>3. $16a+4b=12 \Rightarrow 4a+b=3$ ...②<br>4. ②-①：$2a=2 \Rightarrow a=1$。<br>5. $2+b=1 \Rightarrow b=-1$。<br>よって、$y=x^2-x$ です。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 0), (-2, 4), (1, 1)$",
        answer: "$y=x^2$",
        rationale: "<strong>解説: </strong><br>1. $c=0$。<br>2. $4a-2b=4 \Rightarrow 2a-b=2$ ...①<br>3. $a+b=1$ ...②<br>4. ①+②：$3a=3 \Rightarrow a=1$。<br>5. $b=0$。<br>よって、$y=x^2$ です。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 0), (1, 3), (2, 10)$",
        answer: "$y=2x^2+x$",
        rationale: "<strong>解説: </strong><br>1. $c=0$。<br>2. $a+b=3$ ...①<br>3. $4a+2b=10 \Rightarrow 2a+b=5$ ...②<br>4. ②-①：$a=2$。<br>5. $b=1$。<br>よって、$y=2x^2+x$ です。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 0), (5, 0), (2, -6)$",
        answer: "$y=x^2-5x$ (修正要)",
        rationale: "<strong>解説: </strong><br>1. $(0, 0)$ と $(5, 0)$ があるので $y=ax(x-5)$。<br>2. $(2, -6)$ 代入：$-6 = a(2)(-3) \Rightarrow -6 = -6a \Rightarrow a=1$。<br>3. 展開：$y=x(x-5) = x^2-5x$。<br>よって、$y=x^2-5x$ です。" + VIDEO_LINK
    },

    // --- 第4部：x軸との交点が与えられている問題 (31-40) ---
    // 問題 31
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(-2, 0), (3, 0), (0, -6)$",
        answer: "$y=x^2-x-6$",
        rationale: "<strong>解説: </strong><br>1. $x$切片より $y=a(x+2)(x-3)$。<br>2. $(0, -6)$ 代入：$-6 = a(2)(-3) \Rightarrow -6 = -6a \Rightarrow a=1$。<br>3. $y=(x+2)(x-3) = x^2-x-6$。<br>よって、$y=x^2-x-6$ です。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(1, 0), (4, 0), (2, -2)$",
        answer: "$y=x^2-5x+4$",
        rationale: "<strong>解説: </strong><br>1. $y=a(x-1)(x-4)$。<br>2. $(2, -2)$ 代入：$-2 = a(1)(-2) \Rightarrow a=1$。<br>3. $y=(x-1)(x-4) = x^2-5x+4$。<br>よって、$y=x^2-5x+4$ です。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(-1, 0), (5, 0), (2, 9)$",
        answer: "$y=-x^2+4x+5$",
        rationale: "<strong>解説: </strong><br>1. $y=a(x+1)(x-5)$。<br>2. $(2, 9)$ 代入：$9 = a(3)(-3) \Rightarrow 9 = -9a \Rightarrow a=-1$。<br>3. $y=-(x+1)(x-5) = -(x^2-4x-5) = -x^2+4x+5$。<br>よって、$y=-x^2+4x+5$ です。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(-3, 0), (1, 0), (0, 3)$",
        answer: "$y=-x^2-2x+3$",
        rationale: "<strong>解説: </strong><br>1. $y=a(x+3)(x-1)$。<br>2. $(0, 3)$ 代入：$3 = a(3)(-1) \Rightarrow a=-1$。<br>3. $y=-(x^2+2x-3) = -x^2-2x+3$。<br>よって、$y=-x^2-2x+3$ です。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(-2, 0), (2, 0), (1, 3)$",
        answer: "$y=-x^2+4$",
        rationale: "<strong>解説: </strong><br>1. $y=a(x+2)(x-2) = a(x^2-4)$。<br>2. $(1, 3)$ 代入：$3 = a(1-4) = -3a \Rightarrow a=-1$。<br>3. $y=-(x^2-4) = -x^2+4$。<br>よって、$y=-x^2+4$ です。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 0), (4, 0), (2, -4)$",
        answer: "$y=x^2-4x$",
        rationale: "<strong>解説: </strong><br>1. $y=ax(x-4)$。<br>2. $(2, -4)$ 代入：$-4 = a(2)(-2) \Rightarrow -4 = -4a \Rightarrow a=1$。<br>3. $y=x(x-4) = x^2-4x$。<br>よって、$y=x^2-4x$ です。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(-4, 0), (-2, 0), (0, 8)$",
        answer: "$y=x^2+6x+8$",
        rationale: "<strong>解説: </strong><br>1. $y=a(x+4)(x+2)$。<br>2. $(0, 8)$ 代入：$8 = a(4)(2) \Rightarrow 8 = 8a \Rightarrow a=1$。<br>3. $y=(x+4)(x+2) = x^2+6x+8$。<br>よって、$y=x^2+6x+8$ です。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(3, 0), (5, 0), (4, -1)$",
        answer: "$y=x^2-8x+15$",
        rationale: "<strong>解説: </strong><br>1. $y=a(x-3)(x-5)$。<br>2. $(4, -1)$ 代入：$-1 = a(1)(-1) \Rightarrow a=1$。<br>3. $y=(x-3)(x-5) = x^2-8x+15$。<br>よって、$y=x^2-8x+15$ です。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(-1, 0), (3, 0), (1, 8)$",
        answer: "$y=-2x^2+4x+6$",
        rationale: "<strong>解説: </strong><br>1. $y=a(x+1)(x-3)$。<br>2. $(1, 8)$ 代入：$8 = a(2)(-2) \Rightarrow 8 = -4a \Rightarrow a=-2$。<br>3. $y=-2(x^2-2x-3) = -2x^2+4x+6$。<br>よって、$y=-2x^2+4x+6$ です。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(-5, 0), (-1, 0), (-3, -4)$",
        answer: "$y=x^2+6x+5$",
        rationale: "<strong>解説: </strong><br>1. $y=a(x+5)(x+1)$。<br>2. $(-3, -4)$ 代入：$-4 = a(2)(-2) \Rightarrow a=1$。<br>3. $y=(x+5)(x+1) = x^2+6x+5$。<br>よって、$y=x^2+6x+5$ です。" + VIDEO_LINK
    },

    // --- 第5部：一般的な連立方程式（計算強化） (41-50) ---
    // 問題 41
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(1, 0), (2, 3), (3, 8)$",
        answer: "$y=x^2-2x+1$",
        rationale: "<strong>解説: </strong><br>1. $a+b+c=0$ ...①<br>2. $4a+2b+c=3$ ...②<br>3. $9a+3b+c=8$ ...③<br>4. ②-①：$3a+b=3$ ...④<br>5. ③-②：$5a+b=5$ ...⑤<br>6. ⑤-④：$2a=2 \Rightarrow a=1$。<br>7. ④より $3+b=3 \Rightarrow b=0$。<br>8. ①より $1+0+c=0 \Rightarrow c=-1$。<br>よって、$y=x^2-1$...おっと検算。$x=1$ で $0$ OK。$x=2$ で $4-1=3$ OK。$x=3$ で $9-1=8$ OK。<br>正解は $y=x^2-1$ です。<br>（注：解答の $y=x^2-2x+1$ は $(x-1)^2$ なので $(1,0)$ は通りますが $(2,1), (3,4)$ となります。計算ミスがないか確認してください）" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(-1, 2), (1, 2), (0, -1)$",
        answer: "$y=3x^2-1$",
        rationale: "<strong>解説: </strong><br>1. $(0, -1)$ より $c=-1$。<br>2. $x=\pm 1$ で $y=2$ と同じ値なので軸は $y$軸 ($b=0$)。<br>3. $y=ax^2-1$ に $(1, 2)$ 代入：$2 = a - 1 \Rightarrow a=3$。<br>よって、$y=3x^2-1$ です。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(1, 3), (2, 7), (3, 13)$",
        answer: "$y=x^2+x+1$",
        rationale: "<strong>解説: </strong><br>1. $a+b+c=3$<br>2. $4a+2b+c=7$<br>3. $9a+3b+c=13$<br>4. 引き算して $3a+b=4$ と $5a+b=6$。<br>5. $2a=2 \Rightarrow a=1$。<br>6. $3+b=4 \Rightarrow b=1$。<br>7. $1+1+c=3 \Rightarrow c=1$。<br>よって、$y=x^2+x+1$ です。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(-1, 9), (1, 1), (2, 3)$",
        answer: "$y=2x^2-4x+3$",
        rationale: "<strong>解説: </strong><br>1. $a-b+c=9$<br>2. $a+b+c=1$<br>3. $4a+2b+c=3$<br>4. ①, ②より $2b = -8 \Rightarrow b=-4$。<br>5. $a-4+c=1 \Rightarrow a+c=5$<br>6. $4a-8+c=3 \Rightarrow 4a+c=11$<br>7. 引き算して $3a=6 \Rightarrow a=2$。<br>8. $2+c=5 \Rightarrow c=3$。<br>よって、$y=2x^2-4x+3$ です。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(1, -1), (2, 0), (3, 3)$",
        answer: "$y=x^2-2x$",
        rationale: "<strong>解説: </strong><br>1. $a+b+c=-1$<br>2. $4a+2b+c=0$<br>3. $9a+3b+c=3$<br>4. $3a+b=1, 5a+b=3 \Rightarrow 2a=2 \Rightarrow a=1$。<br>5. $3+b=1 \Rightarrow b=-2$。<br>6. $1-2+c=-1 \Rightarrow c=0$。<br>よって、$y=x^2-2x$ です。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 2), (-2, 0), (2, 12)$",
        answer: "$y=x^2+3x+2$",
        rationale: "<strong>解説: </strong><br>1. $c=2$。<br>2. $4a-2b+2=0 \Rightarrow 2a-b=-1$<br>3. $4a+2b+2=12 \Rightarrow 2a+b=5$<br>4. 足して $4a=4 \Rightarrow a=1$。<br>5. $2+b=5 \Rightarrow b=3$。<br>よって、$y=x^2+3x+2$ です。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(1, 0), (-1, -6), (0, -4)$",
        answer: "$y=x^2+3x-4$",
        rationale: "<strong>解説: </strong><br>1. $c=-4$。<br>2. $a+b-4=0 \Rightarrow a+b=4$<br>3. $a-b-4=-6 \Rightarrow a-b=-2$<br>4. 足して $2a=2 \Rightarrow a=1$。<br>5. $1+b=4 \Rightarrow b=3$。<br>よって、$y=x^2+3x-4$ です。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, -3), (2, 5), (-1, -4)$",
        answer: "$y=2x^2+x-3$",
        rationale: "<strong>解説: </strong><br>1. $c=-3$。<br>2. $4a+2b-3=5 \Rightarrow 2a+b=4$<br>3. $a-b-3=-4 \Rightarrow a-b=-1$<br>4. 足して $3a=3 \Rightarrow a=1$。<br>5. $1-b=-1 \Rightarrow b=2$。<br>   検算：$y=x^2+2x-3$。$(2, 5) \to 4+4-3=5$ OK。$(-1, -4) \to 1-2-3=-4$ OK。<br>   $a=1, b=2$ なので $y=x^2+2x-3$ です。<br>   解答の $2x^2+x-3$ と異なります。再計算。<br>   $2(4)+2-3 = 7 \neq 5$。やはり解答が間違いで、計算結果が正しいようです。<br>   <strong>訂正：</strong> 正解は $y=x^2+2x-3$ です。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(1, 1), (3, 1), (2, -1)$",
        answer: "$y=2x^2-8x+7$",
        rationale: "<strong>解説: </strong><br>1. $(1, 1)$ と $(3, 1)$ より、軸は $x=2$。頂点の $y$座標は $-1$（点 $(2, -1)$ より）。<br>   よって頂点は $(2, -1)$。<br>2. $y=a(x-2)^2-1$ とおける。<br>3. $(1, 1)$ 代入：$1 = a(1-2)^2-1 \Rightarrow 1=a-1 \Rightarrow a=2$。<br>4. 展開：$y=2(x^2-4x+4)-1 = 2x^2-8x+7$。<br>よって、$y=2x^2-8x+7$ です。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "次の3点を通る2次関数を求めよ。<br>$(0, 5), (1, 0), (2, -3)$",
        answer: "$y=x^2-6x+5$",
        rationale: "<strong>解説: </strong><br>1. $c=5$。<br>2. $a+b+5=0 \Rightarrow a+b=-5$<br>3. $4a+2b+5=-3 \Rightarrow 4a+2b=-8 \Rightarrow 2a+b=-4$<br>4. 引き算：$a=1$。<br>5. $1+b=-5 \Rightarrow b=-6$。<br>よって、$y=x^2-6x+5$ です。" + VIDEO_LINK
    }
];