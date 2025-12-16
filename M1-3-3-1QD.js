const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7717/63229' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 画像の問題 (1-6) ---
    // 問題 1
    {
        question: "次の2次方程式を解け。<br>$6x^2 - 5x - 6 = 0$",
        answer: "$x = -\\frac{2}{3}, \\frac{3}{2}$",
        rationale: "<strong>解説: </strong><br>たすき掛けを利用して因数分解します。<br>掛けて $6$ になる組み合わせ（$2$ と $3$）、掛けて $-6$ になる組み合わせ（$3$ と $-2$）を探します。<br>$$ \\begin{matrix} 2 & \\nearrow & -3 & = & -9 \\\\ 3 & \\searrow & 2 & = & 4 \\\\ \\hline & & & & -5 \\end{matrix} $$<br>これにより、$(2x - 3)(3x + 2) = 0$ と因数分解できます。<br>よって、$2x - 3 = 0$ または $3x + 2 = 0$。<br>解は $x = \\frac{3}{2}, -\\frac{2}{3}$ です。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "次の2次方程式を解け。<br>$x^2 + 8x + 16 = 0$",
        answer: "$x = -4$",
        rationale: "<strong>解説: </strong><br>左辺が完全平方式になっていることに注目します。<br>$x^2 + 2 \\times 4 \\times x + 4^2 = (x+4)^2$ です。<br>方程式は $(x+4)^2 = 0$ となります。<br>よって、重解 $x = -4$ です。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "次の2次方程式を解け。<br>$x^2 + 3x - 2 = 0$",
        answer: "$x = \\frac{-3 \\pm \\sqrt{17}}{2}$",
        rationale: "<strong>解説: </strong><br>因数分解できないため、解の公式 $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ を利用します。<br>$a=1, b=3, c=-2$ を代入します。<br>$$ x = \\frac{-3 \\pm \\sqrt{3^2 - 4 \\cdot 1 \\cdot (-2)}}{2 \\cdot 1} $$<br>$$ x = \\frac{-3 \\pm \\sqrt{9 + 8}}{2} $$<br>$$ x = \\frac{-3 \\pm \\sqrt{17}}{2} $$<br>よって、答えは $x = \\frac{-3 \\pm \\sqrt{17}}{2}$ です。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "次の2次方程式を解け。<br>$x^2 - 6x + 7 = 0$",
        answer: "$x = 3 \\pm \\sqrt{2}$",
        rationale: "<strong>解説: </strong><br>$x$の係数が偶数（$-6$）なので、偶数の解の公式 $x = \\frac{-b' \\pm \\sqrt{b'^2 - ac}}{a}$ を利用します。<br>$b' = -3$ です。<br>$$ x = \\frac{-(-3) \\pm \\sqrt{(-3)^2 - 1 \\cdot 7}}{1} $$<br>$$ x = 3 \\pm \\sqrt{9 - 7} $$<br>$$ x = 3 \\pm \\sqrt{2} $$<br>よって、答えは $x = 3 \\pm \\sqrt{2}$ です。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "次の2次方程式を解け。<br>$3x^2 - 4x - 5 = 0$",
        answer: "$x = \\frac{2 \\pm \\sqrt{19}}{3}$",
        rationale: "<strong>解説: </strong><br>$x$の係数が偶数（$-4$）なので、偶数の解の公式を利用します。<br>$a=3, b'=-2, c=-5$ です。<br>$$ x = \\frac{-(-2) \\pm \\sqrt{(-2)^2 - 3 \\cdot (-5)}}{3} $$<br>$$ x = \\frac{2 \\pm \\sqrt{4 + 15}}{3} $$<br>$$ x = \\frac{2 \\pm \\sqrt{19}}{3} $$<br>よって、答えは $x = \\frac{2 \\pm \\sqrt{19}}{3}$ です。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "次の2次方程式を解け。<br>$x^2 - x + 1 = 0$",
        answer: "実数解なし",
        rationale: "<strong>解説: </strong><br>解の公式の根号の中身（判別式 $D$）を確認します。<br>$D = b^2 - 4ac = (-1)^2 - 4 \\cdot 1 \\cdot 1 = 1 - 4 = -3$<br>$D < 0$ となるため、実数の範囲では解を持ちません。<br>よって答えは「実数解なし」です。<br>（※虚数解を考える場合は $x = \\frac{1 \\pm \\sqrt{3}i}{2}$ となります）" + VIDEO_LINK
    },

    // --- 因数分解の基本 (7-15) ---
    // 問題 7
    {
        question: "次の2次方程式を解け。<br>$(x-3)(x+5) = 0$",
        answer: "$x = 3, -5$",
        rationale: "<strong>解説: </strong><br>すでに因数分解されています。<br>$x-3=0$ または $x+5=0$ を満たす $x$ が解です。<br>よって、$x = 3, -5$ です。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "次の2次方程式を解け。<br>$x^2 - 7x + 10 = 0$",
        answer: "$x = 2, 5$",
        rationale: "<strong>解説: </strong><br>足して $-7$、掛けて $10$ になる2つの数を探します。<br>$-2$ と $-5$ です。<br>$(x-2)(x-5) = 0$ と因数分解できます。<br>よって、$x = 2, 5$ です。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "次の2次方程式を解け。<br>$x^2 + 6x + 5 = 0$",
        answer: "$x = -1, -5$",
        rationale: "<strong>解説: </strong><br>足して $6$、掛けて $5$ になる2つの数は $1$ と $5$ です。<br>$(x+1)(x+5) = 0$ と因数分解できます。<br>よって、$x = -1, -5$ です。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "次の2次方程式を解け。<br>$x^2 - x - 12 = 0$",
        answer: "$x = 4, -3$",
        rationale: "<strong>解説: </strong><br>足して $-1$、掛けて $-12$ になる2つの数は $-4$ と $3$ です。<br>$(x-4)(x+3) = 0$ と因数分解できます。<br>よって、$x = 4, -3$ です。" + VIDEO_LINK
    },
    // 問題 11
    {
        question: "次の2次方程式を解け。<br>$x^2 + 5x = 0$",
        answer: "$x = 0, -5$",
        rationale: "<strong>解説: </strong><br>共通因数 $x$ でくくります。<br>$x(x+5) = 0$ となります。<br>よって、$x=0$ または $x+5=0$ なので、$x = 0, -5$ です。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "次の2次方程式を解け。<br>$x^2 - 9 = 0$",
        answer: "$x = \\pm 3$",
        rationale: "<strong>解説: </strong><br>和と差の積の公式 $a^2 - b^2 = (a+b)(a-b)$ を利用します。<br>$(x+3)(x-3) = 0$ と因数分解できます。<br>よって、$x = -3, 3$ です。<br>（別解：$x^2=9$ として平方根をとると $x=\\pm 3$）" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "次の2次方程式を解け。<br>$x^2 - 8x = 0$",
        answer: "$x = 0, 8$",
        rationale: "<strong>解説: </strong><br>共通因数 $x$ でくくります。<br>$x(x-8) = 0$ となります。<br>よって、$x = 0, 8$ です。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "次の2次方程式を解け。<br>$x^2 + 10x + 25 = 0$",
        answer: "$x = -5$",
        rationale: "<strong>解説: </strong><br>左辺は $(x+5)^2$ と因数分解できます。<br>$(x+5)^2 = 0$ なので、重解 $x = -5$ です。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "次の2次方程式を解け。<br>$x^2 - 14x + 49 = 0$",
        answer: "$x = 7$",
        rationale: "<strong>解説: </strong><br>左辺は $(x-7)^2$ と因数分解できます。<br>$(x-7)^2 = 0$ なので、重解 $x = 7$ です。" + VIDEO_LINK
    },

    // --- たすき掛けの因数分解 (16-25) ---
    // 問題 16
    {
        question: "次の2次方程式を解け。<br>$2x^2 + 5x + 3 = 0$",
        answer: "$x = -1, -\\frac{3}{2}$",
        rationale: "<strong>解説: </strong><br>たすき掛けを行います。<br>$$ \\begin{matrix} 2 & \\nearrow & 3 & = & 3 \\\\ 1 & \\searrow & 1 & = & 2 \\\\ \\hline & & & & 5 \\end{matrix} $$<br>$(2x+3)(x+1) = 0$ となります。<br>よって、$x = -\\frac{3}{2}, -1$ です。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "次の2次方程式を解け。<br>$2x^2 - 7x + 3 = 0$",
        answer: "$x = 3, \\frac{1}{2}$",
        rationale: "<strong>解説: </strong><br>たすき掛けを行います。<br>$$ \\begin{matrix} 2 & \\nearrow & -1 & = & -1 \\\\ 1 & \\searrow & -3 & = & -6 \\\\ \\hline & & & & -7 \\end{matrix} $$<br>$(2x-1)(x-3) = 0$ となります。<br>よって、$x = \\frac{1}{2}, 3$ です。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "次の2次方程式を解け。<br>$3x^2 + 7x + 2 = 0$",
        answer: "$x = -\\frac{1}{3}, -2$",
        rationale: "<strong>解説: </strong><br>たすき掛けを行います。<br>$$ \\begin{matrix} 3 & \\nearrow & 1 & = & 1 \\\\ 1 & \\searrow & 2 & = & 6 \\\\ \\hline & & & & 7 \\end{matrix} $$<br>$(3x+1)(x+2) = 0$ となります。<br>よって、$x = -\\frac{1}{3}, -2$ です。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "次の2次方程式を解け。<br>$3x^2 - 5x - 2 = 0$",
        answer: "$x = 2, -\\frac{1}{3}$",
        rationale: "<strong>解説: </strong><br>たすき掛けを行います。<br>$$ \\begin{matrix} 3 & \\nearrow & 1 & = & 1 \\\\ 1 & \\searrow & -2 & = & -6 \\\\ \\hline & & & & -5 \\end{matrix} $$<br>$(3x+1)(x-2) = 0$ となります。<br>よって、$x = -\\frac{1}{3}, 2$ です。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "次の2次方程式を解け。<br>$4x^2 - 9 = 0$",
        answer: "$x = \\pm \\frac{3}{2}$",
        rationale: "<strong>解説: </strong><br>左辺は $(2x)^2 - 3^2$ の形です。<br>$(2x+3)(2x-3) = 0$ と因数分解できます。<br>よって、$x = -\\frac{3}{2}, \\frac{3}{2}$ です。" + VIDEO_LINK
    },
    // 問題 21
    {
        question: "次の2次方程式を解け。<br>$5x^2 - 8x + 3 = 0$",
        answer: "$x = 1, \\frac{3}{5}$",
        rationale: "<strong>解説: </strong><br>たすき掛けを行います。<br>$$ \\begin{matrix} 5 & \\nearrow & -3 & = & -3 \\\\ 1 & \\searrow & -1 & = & -5 \\\\ \\hline & & & & -8 \\end{matrix} $$<br>$(5x-3)(x-1) = 0$ となります。<br>よって、$x = \\frac{3}{5}, 1$ です。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "次の2次方程式を解け。<br>$6x^2 + x - 2 = 0$",
        answer: "$x = \\frac{1}{2}, -\\frac{2}{3}$",
        rationale: "<strong>解説: </strong><br>たすき掛けを行います。<br>$$ \\begin{matrix} 2 & \\nearrow & -1 & = & -3 \\\\ 3 & \\searrow & 2 & = & 4 \\\\ \\hline & & & & 1 \\end{matrix} $$<br>$(2x+1)(3x-2) = 0$ となります。<br>よって、$2x+1=0$ より $x=-\\frac{1}{2}$、$3x-2=0$ より $x=\\frac{2}{3}$ です。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "次の2次方程式を解け。<br>$4x^2 - 12x + 9 = 0$",
        answer: "$x = \\frac{3}{2}$",
        rationale: "<strong>解説: </strong><br>左辺は $(2x-3)^2$ と因数分解できます。<br>$(2x-3)^2 = 0$ なので、重解 $x = \\frac{3}{2}$ です。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "次の2次方程式を解け。<br>$2x^2 + 4x = 0$",
        answer: "$x = 0, -2$",
        rationale: "<strong>解説: </strong><br>共通因数 $2x$ でくくります。<br>$2x(x+2) = 0$ となります。<br>よって、$x = 0, -2$ です。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "次の2次方程式を解け。<br>$x^2 + 3x - 10 = 0$",
        answer: "$x = 2, -5$",
        rationale: "<strong>解説: </strong><br>足して $3$、掛けて $-10$ の組み合わせは $5$ と $-2$ です。<br>$(x+5)(x-2) = 0$ となります。<br>よって、$x = -5, 2$ です。" + VIDEO_LINK
    },

    // --- 解の公式 (無理数を含む解) (26-35) ---
    // 問題 26
    {
        question: "次の2次方程式を解け。<br>$x^2 + 5x + 3 = 0$",
        answer: "$x = \\frac{-5 \\pm \\sqrt{13}}{2}$",
        rationale: "<strong>解説: </strong><br>因数分解できないため、解の公式を利用します。<br>$D = 5^2 - 4 \\cdot 1 \\cdot 3 = 25 - 12 = 13$。<br>よって、$x = \\frac{-5 \\pm \\sqrt{13}}{2}$ です。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "次の2次方程式を解け。<br>$x^2 - 7x + 4 = 0$",
        answer: "$x = \\frac{7 \\pm \\sqrt{33}}{2}$",
        rationale: "<strong>解説: </strong><br>解の公式を利用します。<br>$D = (-7)^2 - 4 \\cdot 1 \\cdot 4 = 49 - 16 = 33$。<br>よって、$x = \\frac{7 \\pm \\sqrt{33}}{2}$ です。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "次の2次方程式を解け。<br>$x^2 + x - 1 = 0$",
        answer: "$x = \\frac{-1 \\pm \\sqrt{5}}{2}$",
        rationale: "<strong>解説: </strong><br>解の公式を利用します。<br>$D = 1^2 - 4 \\cdot 1 \\cdot (-1) = 1 + 4 = 5$。<br>よって、$x = \\frac{-1 \\pm \\sqrt{5}}{2}$ です。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "次の2次方程式を解け。<br>$2x^2 + 3x - 1 = 0$",
        answer: "$x = \\frac{-3 \\pm \\sqrt{17}}{4}$",
        rationale: "<strong>解説: </strong><br>解の公式を利用します。分母は $2a = 4$ になります。<br>$D = 3^2 - 4 \\cdot 2 \\cdot (-1) = 9 + 8 = 17$。<br>よって、$x = \\frac{-3 \\pm \\sqrt{17}}{4}$ です。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "次の2次方程式を解け。<br>$3x^2 - 5x + 1 = 0$",
        answer: "$x = \\frac{5 \\pm \\sqrt{13}}{6}$",
        rationale: "<strong>解説: </strong><br>解の公式を利用します。分母は $2a = 6$ になります。<br>$D = (-5)^2 - 4 \\cdot 3 \\cdot 1 = 25 - 12 = 13$。<br>よって、$x = \\frac{5 \\pm \\sqrt{13}}{6}$ です。" + VIDEO_LINK
    },
    // 問題 31
    {
        question: "次の2次方程式を解け。<br>$x^2 - 3x - 3 = 0$",
        answer: "$x = \\frac{3 \\pm \\sqrt{21}}{2}$",
        rationale: "<strong>解説: </strong><br>解の公式を利用します。<br>$D = (-3)^2 - 4 \\cdot 1 \\cdot (-3) = 9 + 12 = 21$。<br>よって、$x = \\frac{3 \\pm \\sqrt{21}}{2}$ です。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "次の2次方程式を解け。<br>$2x^2 - x - 2 = 0$",
        answer: "$x = \\frac{1 \\pm \\sqrt{17}}{4}$",
        rationale: "<strong>解説: </strong><br>解の公式を利用します。<br>$D = (-1)^2 - 4 \\cdot 2 \\cdot (-2) = 1 + 16 = 17$。<br>よって、$x = \\frac{1 \\pm \\sqrt{17}}{4}$ です。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "次の2次方程式を解け。<br>$x^2 + 5x - 2 = 0$",
        answer: "$x = \\frac{-5 \\pm \\sqrt{33}}{2}$",
        rationale: "<strong>解説: </strong><br>解の公式を利用します。<br>$D = 5^2 - 4 \\cdot 1 \\cdot (-2) = 25 + 8 = 33$。<br>よって、$x = \\frac{-5 \\pm \\sqrt{33}}{2}$ です。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "次の2次方程式を解け。<br>$3x^2 + x - 1 = 0$",
        answer: "$x = \\frac{-1 \\pm \\sqrt{13}}{6}$",
        rationale: "<strong>解説: </strong><br>解の公式を利用します。<br>$D = 1^2 - 4 \\cdot 3 \\cdot (-1) = 1 + 12 = 13$。<br>よって、$x = \\frac{-1 \\pm \\sqrt{13}}{6}$ です。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "次の2次方程式を解け。<br>$x^2 - 9x + 19 = 0$",
        answer: "$x = \\frac{9 \\pm \\sqrt{5}}{2}$",
        rationale: "<strong>解説: </strong><br>解の公式を利用します。<br>$D = (-9)^2 - 4 \\cdot 1 \\cdot 19 = 81 - 76 = 5$。<br>よって、$x = \\frac{9 \\pm \\sqrt{5}}{2}$ です。" + VIDEO_LINK
    },

    // --- 偶数の解の公式 (36-45) ---
    // 問題 36
    {
        question: "次の2次方程式を解け。<br>$x^2 + 4x + 1 = 0$",
        answer: "$x = -2 \\pm \\sqrt{3}$",
        rationale: "<strong>解説: </strong><br>偶数の解の公式を利用します。$b' = 2$ です。<br>$x = -2 \\pm \\sqrt{2^2 - 1} = -2 \\pm \\sqrt{3}$ です。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "次の2次方程式を解け。<br>$x^2 - 2x - 4 = 0$",
        answer: "$x = 1 \\pm \\sqrt{5}$",
        rationale: "<strong>解説: </strong><br>偶数の解の公式を利用します。$b' = -1$ です。<br>$x = -(-1) \\pm \\sqrt{(-1)^2 - (-4)} = 1 \\pm \\sqrt{1+4} = 1 \\pm \\sqrt{5}$ です。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "次の2次方程式を解け。<br>$3x^2 + 6x + 2 = 0$",
        answer: "$x = \\frac{-3 \\pm \\sqrt{3}}{3}$",
        rationale: "<strong>解説: </strong><br>偶数の解の公式を利用します。$b' = 3$ です。<br>$$ x = \\frac{-3 \\pm \\sqrt{3^2 - 3 \\cdot 2}}{3} $$<br>$$ x = \\frac{-3 \\pm \\sqrt{9 - 6}}{3} $$<br>$$ x = \\frac{-3 \\pm \\sqrt{3}}{3} $$" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "次の2次方程式を解け。<br>$2x^2 - 8x + 3 = 0$",
        answer: "$x = \\frac{4 \\pm \\sqrt{10}}{2}$",
        rationale: "<strong>解説: </strong><br>偶数の解の公式を利用します。$b' = -4$ です。<br>$$ x = \\frac{-(-4) \\pm \\sqrt{(-4)^2 - 2 \\cdot 3}}{2} $$<br>$$ x = \\frac{4 \\pm \\sqrt{16 - 6}}{2} $$<br>$$ x = \\frac{4 \\pm \\sqrt{10}}{2} $$" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "次の2次方程式を解け。<br>$x^2 - 10x + 20 = 0$",
        answer: "$x = 5 \\pm \\sqrt{5}$",
        rationale: "<strong>解説: </strong><br>偶数の解の公式を利用します。$b' = -5$ です。<br>$x = 5 \\pm \\sqrt{(-5)^2 - 20} = 5 \\pm \\sqrt{25 - 20} = 5 \\pm \\sqrt{5}$ です。" + VIDEO_LINK
    },
    // 問題 41
    {
        question: "次の2次方程式を解け。<br>$5x^2 - 2x - 1 = 0$",
        answer: "$x = \\frac{1 \\pm \\sqrt{6}}{5}$",
        rationale: "<strong>解説: </strong><br>偶数の解の公式を利用します。$b' = -1$ です。<br>$$ x = \\frac{-(-1) \\pm \\sqrt{(-1)^2 - 5 \\cdot (-1)}}{5} $$<br>$$ x = \\frac{1 \\pm \\sqrt{1 + 5}}{5} $$<br>$$ x = \\frac{1 \\pm \\sqrt{6}}{5} $$" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "次の2次方程式を解け。<br>$x^2 + 6x - 2 = 0$",
        answer: "$x = -3 \\pm \\sqrt{11}$",
        rationale: "<strong>解説: </strong><br>偶数の解の公式を利用します。$b' = 3$ です。<br>$x = -3 \\pm \\sqrt{3^2 - (-2)} = -3 \\pm \\sqrt{9 + 2} = -3 \\pm \\sqrt{11}$ です。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "次の2次方程式を解け。<br>$4x^2 - 4x - 1 = 0$",
        answer: "$x = \\frac{1 \\pm \\sqrt{2}}{2}$",
        rationale: "<strong>解説: </strong><br>偶数の解の公式を利用します。$b' = -2$ です。<br>$$ x = \\frac{-(-2) \\pm \\sqrt{(-2)^2 - 4 \\cdot (-1)}}{4} $$<br>$$ x = \\frac{2 \\pm \\sqrt{4 + 4}}{4} = \\frac{2 \\pm \\sqrt{8}}{4} = \\frac{2 \\pm 2\\sqrt{2}}{4} $$<br>約分して、$x = \\frac{1 \\pm \\sqrt{2}}{2}$ です。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "次の2次方程式を解け。<br>$x^2 - 12x + 1 = 0$",
        answer: "$x = 6 \\pm \\sqrt{35}$",
        rationale: "<strong>解説: </strong><br>偶数の解の公式を利用します。$b' = -6$ です。<br>$x = 6 \\pm \\sqrt{(-6)^2 - 1} = 6 \\pm \\sqrt{36 - 1} = 6 \\pm \\sqrt{35}$ です。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "次の2次方程式を解け。<br>$2x^2 + 10x + 11 = 0$",
        answer: "$x = \\frac{-5 \\pm \\sqrt{3}}{2}$",
        rationale: "<strong>解説: </strong><br>偶数の解の公式を利用します。$b' = 5$ です。<br>$$ x = \\frac{-5 \\pm \\sqrt{5^2 - 2 \\cdot 11}}{2} $$<br>$$ x = \\frac{-5 \\pm \\sqrt{25 - 22}}{2} $$<br>$$ x = \\frac{-5 \\pm \\sqrt{3}}{2} $$" + VIDEO_LINK
    },

    // --- 応用・実数解なし・整理が必要なもの (46-50) ---
    // 問題 46
    {
        question: "次の2次方程式を解け。<br>$(x+2)^2 = 5$",
        answer: "$x = -2 \\pm \\sqrt{5}$",
        rationale: "<strong>解説: </strong><br>展開せずに、平方根の考え方を利用します。<br>$x+2 = \\pm \\sqrt{5}$<br>よって、$x = -2 \\pm \\sqrt{5}$ です。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "次の2次方程式を解け。<br>$3(x-1)^2 - 12 = 0$",
        answer: "$x = 3, -1$",
        rationale: "<strong>解説: </strong><br>式を整理します。<br>$3(x-1)^2 = 12$<br>$(x-1)^2 = 4$<br>$x-1 = \\pm 2$<br>$x = 1 \\pm 2$<br>よって、$x = 3, -1$ です。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "次の2次方程式を解け。<br>$x^2 + 2x + 3 = 0$",
        answer: "実数解なし",
        rationale: "<strong>解説: </strong><br>判別式 $D = 2^2 - 4 \\cdot 1 \\cdot 3 = 4 - 12 = -8$<br>$D < 0$ なので、実数解はありません。<br>（※虚数解は $x = -1 \\pm \\sqrt{2}i$）" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "次の2次方程式を解け。<br>$2x^2 - 2x + 1 = 0$",
        answer: "実数解なし",
        rationale: "<strong>解説: </strong><br>判別式 $D/4 = (-1)^2 - 2 \\cdot 1 = 1 - 2 = -1$<br>$D < 0$ なので、実数解はありません。<br>（※虚数解は $x = \\frac{1 \\pm i}{2}$）" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "次の2次方程式を解け。<br>$(x+1)(x-2) = 2x - 2$",
        answer: "$x = 0, 3$",
        rationale: "<strong>解説: </strong><br>まず展開して整理します。<br>$x^2 - x - 2 = 2x - 2$<br>移項すると $x^2 - 3x = 0$ となります。<br>$x(x-3) = 0$ と因数分解できるので、<br>解は $x = 0, 3$ です。" + VIDEO_LINK
    }
];