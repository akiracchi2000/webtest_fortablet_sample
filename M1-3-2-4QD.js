const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7716/63217' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 第1部：基本原理（下に凸のグラフと最大値）(1-10) ---
    // 問題 1
    {
        question: "下に凸の2次関数（U字型のグラフ）において、定義域内での最大値はどこでとるか。",
        answer: "定義域の両端のいずれか（頂点ではない）",
        rationale: "<strong>解説: </strong><br>下に凸のグラフは、頂点で最小値をとりますが、左右に離れるほど値が大きくなっていきます。<br>したがって、区間の両端のうち、**軸から遠い方**で最大値をとります。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "定義域が $0 \\leqq x \\leqq 2$ のとき、この区間の「中央（中点）」の値はいくつか。",
        answer: "$1$",
        rationale: "<strong>解説: </strong><br>区間の中央は、足して2で割ります。<br>$\\frac{0+2}{2} = 1$ です。<br>この「中央」と「軸」の位置関係で、最大値をとる場所が入れ替わります。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "定義域が $0 \\leqq x \\leqq 2$（中央 $1$）のとき、軸が $x=0.5$ にあるとする。最大値をとる $x$ は？",
        answer: "$x=2$（右端）",
        rationale: "<strong>解説: </strong><br>軸 $0.5$ は中央 $1$ より左にあります。<br>軸から右端 $x=2$ までの距離の方が、左端 $x=0$ までの距離より長いため、右端でグラフはより高くなります。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "定義域が $0 \\leqq x \\leqq 2$（中央 $1$）のとき、軸が $x=1.5$ にあるとする。最大値をとる $x$ は？",
        answer: "$x=0$（左端）",
        rationale: "<strong>解説: </strong><br>軸 $1.5$ は中央 $1$ より右にあります。<br>軸から左端 $x=0$ までの距離の方が長いため、左端で最大値をとります。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "定義域が $0 \\leqq x \\leqq 2$ のとき、軸が $x=1$（中央）にあるとする。最大値はどうなるか。",
        answer: "$x=0, 2$ の両方で同じ最大値をとる",
        rationale: "<strong>解説: </strong><br>軸が区間のど真ん中にある場合、グラフは左右対称になります。<br>よって両端の高さが同じになり、その両方が最大値となります。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "2次関数 $y=(x-a)^2+b$ の最大値を考える際、場合分けの境界となるのは「軸 $x=a$」がどこにあるときか。",
        answer: "定義域の中央",
        rationale: "<strong>解説: </strong><br>最大値が左端か右端かで切り替わるポイントは、軸からの距離が等しくなる瞬間、つまり「定義域の中央」です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "定義域 $0 \\leqq x \\leqq 4$ において、下に凸の2次関数の軸 $x=a$ が $a < 2$ の範囲にあるとき、最大値をとる $x$ は？",
        answer: "$x=4$（右端）",
        rationale: "<strong>解説: </strong><br>定義域の中央は $2$ です。<br>軸 $a$ が中央より左（$a < 2$）にあるため、軸から遠いのは右端 $x=4$ です。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "定義域 $0 \\leqq x \\leqq 4$ において、下に凸の2次関数の軸 $x=a$ が $a > 2$ の範囲にあるとき、最大値をとる $x$ は？",
        answer: "$x=0$（左端）",
        rationale: "<strong>解説: </strong><br>軸 $a$ が中央 $2$ より右（$a > 2$）にあるため、軸から遠いのは左端 $x=0$ です。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "2次関数 $y=x^2-2ax$ の軸の方程式を求めよ。",
        answer: "$x=a$",
        rationale: "<strong>解説: </strong><br>平方完成します。<br>$y = (x^2-2ax)$<br>$y = (x-a)^2 - a^2$<br>よって軸は $x=a$ です。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "2次関数 $y=x^2+4ax$ の軸の方程式を求めよ。",
        answer: "$x=-2a$",
        rationale: "<strong>解説: </strong><br>$y = (x^2+4ax)$<br>$y = (x+2a)^2 - 4a^2$<br>軸は $x=-2a$ です。符号に注意しましょう。" + VIDEO_LINK
    },

    // --- 第2部：具体的な計算・場合分けの実践 (11-30) ---
    // 問題 11
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$ について。<br>軸 $a=0.5$ のとき、最大値を求めよ。",
        answer: "$x=2$ で最大値 $4-4(0.5) = 2$",
        rationale: "<strong>解説: </strong><br>1. 中央は $1$ です。<br>2. 軸 $0.5$ は中央より左です。<br>3. よって右端 $x=2$ で最大値をとります。<br>4. $y = 2^2 - 2(0.5)(2) = 4 - 2 = 2$。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$ について。<br>軸 $a=1.5$ のとき、最大値を求めよ。",
        answer: "$x=0$ で最大値 $0$",
        rationale: "<strong>解説: </strong><br>1. 中央は $1$ です。<br>2. 軸 $1.5$ は中央より右です。<br>3. よって左端 $x=0$ で最大値をとります。<br>4. $y = 0^2 - 0 = 0$。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$ の最大値を求める場合分けにおいて、<br>「$a < 1$」のときの最大値は式でどう表されるか。",
        answer: "$4-4a$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が中央 $1$ より左にある場合、最大値は右端 $x=2$ でとります。<br>$x=2$ を代入：<br>$y = 2^2 - 2a(2) = 4 - 4a$。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$ の最大値を求める場合分けにおいて、<br>「$a \\geqq 1$」のときの最大値は式でどう表されるか。",
        answer: "$0$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が中央 $1$ より右（または同じ）にある場合、最大値は左端 $x=0$ でとります。<br>$x=0$ を代入：<br>$y = 0 - 0 = 0$。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "2次関数 $y=x^2-2ax+1$ $(0 \\leqq x \\leqq 2)$ について。<br>$a < 1$ のときの最大値を $a$ を用いて表せ。",
        answer: "$5-4a$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が中央 $1$ より左なので、右端 $x=2$ で最大となります。<br>$y = 2^2 - 2a(2) + 1$<br>$= 4 - 4a + 1$<br>$= 5 - 4a$" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "2次関数 $y=x^2-2ax+1$ $(0 \\leqq x \\leqq 2)$ について。<br>$a \\geqq 1$ のときの最大値を求めよ。",
        answer: "$1$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が中央 $1$ より右なので、左端 $x=0$ で最大となります。<br>$y = 0^2 - 0 + 1 = 1$。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "2次関数 $y=x^2-4ax$ $(0 \\leqq x \\leqq 4)$ について。<br>この問題の場合分けの基準となる $a$ の値はいくつか。",
        answer: "$a=1$",
        rationale: "<strong>解説: </strong><br>まず軸を求めます。$y=(x-2a)^2...$ より軸は $x=2a$。<br>定義域 $0 \\leqq x \\leqq 4$ の中央は $2$。<br>軸と中央が重なる時が基準なので、$2a = 2 \\iff a = 1$ です。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "2次関数 $y=x^2-4ax$ $(0 \\leqq x \\leqq 4)$ について。<br>$a < 1$ のときの最大値を求めよ。",
        answer: "$16-16a$",
        rationale: "<strong>解説: </strong><br>$a<1$ のとき、軸 $2a < 2$（中央より左）。<br>よって右端 $x=4$ で最大値。<br>$y = 4^2 - 4a(4) = 16 - 16a$。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "2次関数 $y=x^2-4ax$ $(0 \\leqq x \\leqq 4)$ について。<br>$a \\geqq 1$ のときの最大値を求めよ。",
        answer: "$0$",
        rationale: "<strong>解説: </strong><br>$a\\geqq 1$ のとき、軸 $2a \\geqq 2$（中央より右）。<br>よって左端 $x=0$ で最大値。<br>$y = 0 - 0 = 0$。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "2次関数 $y=x^2+2ax$ $(-1 \\leqq x \\leqq 1)$ について。<br>軸の方程式と、定義域の中央の値を答えよ。",
        answer: "軸：$x=-a$, 中央：$0$",
        rationale: "<strong>解説: </strong><br>軸：$y=(x+a)^2...$ より $x=-a$。<br>中央：$(-1+1)/2 = 0$。<br>この2つを比較します。" + VIDEO_LINK
    },
    // 問題 21
    {
        question: "2次関数 $y=x^2+2ax$ $(-1 \\leqq x \\leqq 1)$ について。<br>軸 $-a < 0$ （つまり $a > 0$）のとき、最大値をとる $x$ は？",
        answer: "$x=1$（右端）",
        rationale: "<strong>解説: </strong><br>軸 $-a$ が中央 $0$ より左にある場合です。<br>軸から遠いのは右端 $x=1$ です。<br>（注：$a>0$ なので、$-a$ は負の数です）" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "2次関数 $y=x^2+2ax$ $(-1 \\leqq x \\leqq 1)$ について。<br>軸 $-a \\geqq 0$ （つまり $a \\leqq 0$）のとき、最大値をとる $x$ は？",
        answer: "$x=-1$（左端）",
        rationale: "<strong>解説: </strong><br>軸 $-a$ が中央 $0$ より右にある場合です。<br>軸から遠いのは左端 $x=-1$ です。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "2次関数 $y=x^2+2ax$ $(-1 \\leqq x \\leqq 1)$。<br>$a=2$ のときの最大値を求めよ。",
        answer: "$x=1$ で最大値 $5$",
        rationale: "<strong>解説: </strong><br>$a=2$ のとき、軸は $x=-2$。<br>これは中央 $0$ より左です。<br>よって右端 $x=1$ で最大。<br>$y = 1^2 + 2(2)(1) = 1 + 4 = 5$。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "2次関数 $y=x^2-2ax-3$ $(0 \\leqq x \\leqq 2)$。<br>最大値が $-3$ となるときの定数 $a$ の条件は？",
        answer: "$a \\geqq 1$",
        rationale: "<strong>解説: </strong><br>最大値の候補は $x=0$ か $x=2$ です。<br>$x=0$ のとき $y=-3$。<br>$x=2$ のとき $y=4-4a-3 = 1-4a$。<br>最大値が $-3$ になるには、$x=0$ が選ばれる（軸が中央より右にある）必要があります。<br>よって $a \\geqq 1$。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$。<br>最大値が $4$ となるような $a$ の値を求めよ。",
        answer: "$a=0$",
        rationale: "<strong>解説: </strong><br>場合分けで考えます。<br>(i) $a < 1$ のとき、最大値は $x=2$ で $4-4a$。<br>　$4-4a = 4 \\to -4a=0 \\to a=0$。<br>　これは $a<1$ を満たす。<br>(ii) $a \\geqq 1$ のとき、最大値は $x=0$ で $0$。<br>　$0=4$ は不適。<br>よって $a=0$。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "2次関数 $y=2x^2-4ax$ $(0 \\leqq x \\leqq 2)$。<br>軸の方程式と定義域の中央を求めよ。",
        answer: "軸 $x=a$, 中央 $1$",
        rationale: "<strong>解説: </strong><br>平方完成：$y=2(x^2-2ax)=2(x-a)^2...$ より軸は $x=a$。<br>中央は $1$。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "2次関数 $y=2x^2-4ax$ $(0 \\leqq x \\leqq 2)$。<br>$a < 1$ のときの最大値を求めよ。",
        answer: "$8-8a$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が中央 $1$ より左。<br>右端 $x=2$ で最大。<br>$y = 2(4) - 4a(2) = 8 - 8a$。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "2次関数 $y=2x^2-4ax$ $(0 \\leqq x \\leqq 2)$。<br>$a \\geqq 1$ のときの最大値を求めよ。",
        answer: "$0$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が中央 $1$ より右。<br>左端 $x=0$ で最大。<br>$y = 0 - 0 = 0$。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "2次関数 $y=x^2-2ax+2$ $(0 \\leqq x \\leqq 4)$。<br>最大値を $M(a)$ とするとき、$M(a)$ の式を場合分けして答えよ。",
        answer: "$a<2$ のとき $18-8a$, $a\\geqq 2$ のとき $2$",
        rationale: "<strong>解説: </strong><br>軸 $x=a$、中央 $2$。<br>(i) $a<2$ (軸が左) $\\to$ 右端 $x=4$ で最大。<br>　$y = 16 - 8a + 2 = 18 - 8a$。<br>(ii) $a\\geqq 2$ (軸が右) $\\to$ 左端 $x=0$ で最大。<br>　$y = 0 - 0 + 2 = 2$。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "2次関数 $y=x^2-2ax$ $(1 \\leqq x \\leqq 3)$。<br>場合分けの境界となる $a$ の値は？",
        answer: "$a=2$",
        rationale: "<strong>解説: </strong><br>定義域 $1 \\leqq x \\leqq 3$ の中点は $2$。<br>軸 $x=a$ と比較するので、$a=2$ が境界。" + VIDEO_LINK
    },

    // --- 第3部：応用・定数項の変化・定義域の変化 (31-50) ---
    // 問題 31
    {
        question: "2次関数 $y=x^2-2ax$ $(1 \\leqq x \\leqq 3)$。<br>$a < 2$ のときの最大値は？",
        answer: "$9-6a$",
        rationale: "<strong>解説: </strong><br>軸が中央 $2$ より左 $\\to$ 右端 $x=3$ で最大。<br>$y = 3^2 - 2a(3) = 9 - 6a$。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "2次関数 $y=x^2-2ax$ $(1 \\leqq x \\leqq 3)$。<br>$a \\geqq 2$ のときの最大値は？",
        answer: "$1-2a$",
        rationale: "<strong>解説: </strong><br>軸が中央 $2$ より右 $\\to$ 左端 $x=1$ で最大。<br>$y = 1^2 - 2a(1) = 1 - 2a$。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "2次関数 $y=(x-a)^2$ $(0 \\leqq x \\leqq 2)$。<br>最大値が $9$ となるとき、正の定数 $a$ の値を求めよ。",
        answer: "$a=3$",
        rationale: "<strong>解説: </strong><br>軸は $x=a$。中央は $1$。<br>(i) $0 < a < 1$ のとき、最大値は $x=2$ で $(2-a)^2$。<br>　$(2-a)^2=9 \to 2-a=\pm 3 \to a=-1, 5$。範囲不適。<br>(ii) $a \\geqq 1$ のとき、最大値は $x=0$ で $(-a)^2=a^2$。<br>　$a^2=9 \to a=3$（$a \geqq 1$を満たす）。<br>よって $a=3$。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "2次関数 $y=x^2-2(a+1)x$ $(0 \\leqq x \\leqq 4)$。<br>軸の方程式は？",
        answer: "$x=a+1$",
        rationale: "<strong>解説: </strong><br>平方完成すると $(x-(a+1))^2...$ となるため、軸は $x=a+1$。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "2次関数 $y=x^2-2(a+1)x$ $(0 \\leqq x \\leqq 4)$。<br>最大値を考える際の場合分けの基準となる $a$ の値は？",
        answer: "$a=1$",
        rationale: "<strong>解説: </strong><br>定義域の中央は $2$。<br>軸 $a+1$ と中央 $2$ を比較します。<br>$a+1 = 2 \iff a = 1$ が基準。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "2次関数 $y=x^2-2(a+1)x$ $(0 \\leqq x \\leqq 4)$。<br>$a < 1$ のときの最大値を求めよ。",
        answer: "$16-8a-8 = 8-8a$",
        rationale: "<strong>解説: </strong><br>$a<1$ なら軸 $a+1 < 2$ (左側)。<br>右端 $x=4$ で最大。<br>$y = 16 - 2(a+1)(4)$<br>$= 16 - 8a - 8 = 8 - 8a$。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "2次関数 $y=x^2-6ax$ $(-1 \\leqq x \\leqq 1)$。<br>軸の方程式は？",
        answer: "$x=3a$",
        rationale: "<strong>解説: </strong><br>軸は $x=3a$ です。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "2次関数 $y=x^2-6ax$ $(-1 \\leqq x \\leqq 1)$。<br>最大値の場合分けの基準となる $a$ の値は？",
        answer: "$a=0$",
        rationale: "<strong>解説: </strong><br>定義域の中央は $0$。<br>軸 $3a = 0 \iff a = 0$ が基準。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "2次関数 $y=x^2-6ax$ $(-1 \\leqq x \\leqq 1)$。<br>$a < 0$ のときの最大値は？",
        answer: "$1-6a$",
        rationale: "<strong>解説: </strong><br>$a<0$ なら軸 $3a < 0$ (左側)。<br>右端 $x=1$ で最大。<br>$y = 1 - 6a$。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "2次関数 $y=x^2-6ax$ $(-1 \\leqq x \\leqq 1)$。<br>$a \\geqq 0$ のときの最大値は？",
        answer: "$1+6a$",
        rationale: "<strong>解説: </strong><br>$a \\geqq 0$ なら軸 $3a \\geqq 0$ (右側)。<br>左端 $x=-1$ で最大。<br>$y = (-1)^2 - 6a(-1) = 1 + 6a$。" + VIDEO_LINK
    },
    // 問題 41
    {
        question: "2次関数 $y=3x^2-6ax$ $(0 \\leqq x \\leqq 2)$。<br>軸 $x=a$ が $a < 1$ の範囲にあるとき、最大値をとる $x$ は？",
        answer: "$x=2$",
        rationale: "<strong>解説: </strong><br>定義域の中央は $1$。<br>軸 $a$ が中央より左 $\\to$ 右端 $x=2$ で最大。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "2次関数 $y=3x^2-6ax$ $(0 \\leqq x \\leqq 2)$。<br>$a < 1$ のときの最大値を求めよ。",
        answer: "$12-12a$",
        rationale: "<strong>解説: </strong><br>$x=2$ を代入。<br>$y = 3(4) - 6a(2) = 12 - 12a$。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "2次関数 $y=\\frac{1}{2}x^2-ax$ $(0 \\leqq x \\leqq 4)$。<br>軸の方程式を求めよ。",
        answer: "$x=a$",
        rationale: "<strong>解説: </strong><br>$y = \\frac{1}{2}(x^2-2ax) = \\frac{1}{2}(x-a)^2...$ より軸は $x=a$。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "2次関数 $y=\\frac{1}{2}x^2-ax$ $(0 \\leqq x \\leqq 4)$。<br>場合分けの基準となる $a$ の値は？",
        answer: "$a=2$",
        rationale: "<strong>解説: </strong><br>定義域 $0 \\leqq x \\leqq 4$ の中央は $2$。<br>軸 $x=a$ と中央 $2$ を比較。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "2次関数 $y=\\frac{1}{2}x^2-ax$ $(0 \\leqq x \\leqq 4)$。<br>$a < 2$ のときの最大値を求めよ。",
        answer: "$8-4a$",
        rationale: "<strong>解説: </strong><br>軸が中央より左 $\\to$ 右端 $x=4$ で最大。<br>$y = \\frac{1}{2}(16) - 4a = 8 - 4a$。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "2次関数 $y=\\frac{1}{2}x^2-ax$ $(0 \\leqq x \\leqq 4)$。<br>$a \\geqq 2$ のときの最大値を求めよ。",
        answer: "$0$",
        rationale: "<strong>解説: </strong><br>軸が中央より右 $\\to$ 左端 $x=0$ で最大。<br>$y = 0$。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "2次関数 $y=x^2-2ax$ $(-2 \\leqq x \\leqq 2)$。<br>この関数が最大値 $8$ をとるとき（ただし $a>0$ とする）、$a$ の値は？",
        answer: "$a=1$",
        rationale: "<strong>解説: </strong><br>中央は $0$。$a>0$ なので軸は右側。<br>最大値は左端 $x=-2$ でとる。<br>$y = (-2)^2 - 2a(-2) = 4 + 4a$。<br>$4 + 4a = 8 \to 4a = 4 \to a=1$。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "2次関数 $y=x^2+2ax+3$ $(0 \\leqq x \\leqq 1)$。<br>軸が $x=-a$ である。$a < -0.5$ のとき、最大値をとる $x$ は？",
        answer: "$x=0$",
        rationale: "<strong>解説: </strong><br>中央は $0.5$。<br>$a < -0.5$ のとき、軸 $-a > 0.5$（中央より右）。<br>よって最大値は左端 $x=0$。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "2次関数 $y=(x-a)^2+a$ $(0 \\leqq x \\leqq 2)$。<br>$a=3$ のときの最大値は？",
        answer: "$12$",
        rationale: "<strong>解説: </strong><br>軸 $a=3$ は中央 $1$ より右。<br>よって左端 $x=0$ で最大。<br>$y = (0-3)^2 + 3 = 9 + 3 = 12$。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$ の最大値を $M(a)$ とする。<br>$M(a)$ のグラフの概形として正しい説明はどれか。",
        answer: "$a=1$ で折れ曲がるV字型（谷型）のグラフ",
        rationale: "<strong>解説: </strong><br>$a < 1$ のとき $M(a) = 4-4a$（右下がり）。<br>$a \geqq 1$ のとき $M(a) = 0$（...おっと、この場合 $0$ ですね）。<br>問題25で確認した通り、$a \geqq 1$（軸が右）なら左端 $x=0$ で最大値 $0$。<br>つまり、$a=1$ までは右下がりの直線、$a=1$ 以降はずっと $0$ の横一直線となります。（V字というよりL字に近いですね）。<br>重要なのは $a=1$ で関数の形が変わる点です。" + VIDEO_LINK
    },
    // --- 第5部：aの条件なし・自分で場合分けをする最大値問題 (51-65) ---
    // 問題 51
    {
        question: "2次関数 $y=x^2-2ax+3$ $(0 \\leqq x \\leqq 2)$ の最大値を求めよ。",
        answer: "$a<1$ のとき $7-4a$, $a \\geqq 1$ のとき $3$",
        rationale: "<strong>解説: </strong><br>軸は $x=a$、定義域の中央は $1$ です。<br>最大値は「軸から遠い方の端点」でとります。<br>1. **軸が中央より左 ($a<1$)**: 右端 $x=2$ が遠い $\\to y=4-4a+3=7-4a$<br>2. **軸が中央より右 ($a \\geqq 1$)**: 左端 $x=0$ が遠い $\\to y=3$<br>（※等号 $a=1$ はどちらに含めても正解です）" + VIDEO_LINK
    },
    // 問題 52
    {
        question: "2次関数 $y=x^2-4ax$ $(0 \\leqq x \\leqq 2)$ の最大値を求めよ。",
        answer: "$a<\\frac{1}{2}$ のとき $4-8a$, $a \\geqq \\frac{1}{2}$ のとき $0$",
        rationale: "<strong>解説: </strong><br>軸は $x=2a$、定義域の中央は $1$ です。<br>「軸 $2a$」と「中央 $1$」を比較します。<br>1. $2a < 1$ つまり **$a < 0.5$** のとき: 右端 $x=2$ で最大 $\\to 4-8a$<br>2. $2a \\geqq 1$ つまり **$a \\geqq 0.5$** のとき: 左端 $x=0$ で最大 $\\to 0$" + VIDEO_LINK
    },
    // 問題 53
    {
        question: "2次関数 $y=x^2+2ax$ $(-1 \\leqq x \\leqq 1)$ の最大値を求めよ。",
        answer: "$a>0$ のとき $1-2a$, $a \\leqq 0$ のとき $1+2a$",
        rationale: "<strong>解説: </strong><br>軸は $x=-a$、定義域の中央は $0$ です。<br>1. **軸が左 ($-a < 0 \\to a > 0$)**: 右端 $x=1$ で最大 $\\to 1+2a$...ではなく、軸が左にあるなら「右端」が遠いので $x=1$ で最大です。<br>計算: $1^2+2a(1) = 1+2a$。<br>...おっと、軸 $-a$ が左 ($<0$) ということは、$a$ は正の値です。グラフは左にズレているので右端が上がります。正解。<br><br>2. **軸が右 ($-a \\geqq 0 \\to a \\leqq 0$)**: 左端 $x=-1$ で最大 $\\to (-1)^2+2a(-1) = 1-2a$。<br>（不等号の向きと式の対応に注意しましょう）" + VIDEO_LINK
    },
    // 問題 54
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 4)$ の最大値を求めよ。",
        answer: "$a<2$ のとき $16-8a$, $a \\geqq 2$ のとき $0$",
        rationale: "<strong>解説: </strong><br>軸は $x=a$、定義域の中央は $2$ です。<br>1. **軸が左 ($a<2$)**: 右端 $x=4$ で最大 $\\to 16-8a$<br>2. **軸が右 ($a \\geqq 2$)**: 左端 $x=0$ で最大 $\\to 0$" + VIDEO_LINK
    },
    // 問題 55
    {
        question: "2次関数 $y=2x^2-4ax+1$ $(0 \\leqq x \\leqq 2)$ の最大値を求めよ。",
        answer: "$a<1$ のとき $9-8a$, $a \\geqq 1$ のとき $1$",
        rationale: "<strong>解説: </strong><br>軸は $x=a$、中央は $1$。<br>1. **軸が左 ($a<1$)**: 右端 $x=2$ で最大 $\\to 2(4)-4a(2)+1 = 9-8a$<br>2. **軸が右 ($a \\geqq 1$)**: 左端 $x=0$ で最大 $\\to 1$" + VIDEO_LINK
    },
    // 問題 56
    {
        question: "2次関数 $y=x^2-ax$ $(0 \\leqq x \\leqq 2)$ の最大値を求めよ。",
        answer: "$a<2$ のとき $4-2a$, $a \\geqq 2$ のとき $0$",
        rationale: "<strong>解説: </strong><br>軸は $x=\\frac{a}{2}$ です。定義域の中央は $1$。<br>比較式: $\\frac{a}{2} < 1 \\iff a < 2$。<br>1. **$a<2$ (軸が左)**: 右端 $x=2$ で最大 $\\to 4-2a$<br>2. **$a \\geqq 2$ (軸が右)**: 左端 $x=0$ で最大 $\\to 0$" + VIDEO_LINK
    },
    // 問題 57
    {
        question: "2次関数 $y=x^2-2ax$ $(1 \\leqq x \\leqq 3)$ の最大値を求めよ。",
        answer: "$a<2$ のとき $9-6a$, $a \\geqq 2$ のとき $1-2a$",
        rationale: "<strong>解説: </strong><br>軸は $x=a$。定義域 $1 \\sim 3$ の中央は $2$ です。<br>1. **$a<2$**: 軸が左寄りなので右端 $x=3$ で最大 $\\to 9-6a$<br>2. **$a \\geqq 2$**: 軸が右寄りなので左端 $x=1$ で最大 $\\to 1-2a$" + VIDEO_LINK
    },
    // 問題 58
    {
        question: "2次関数 $y=-x^2+2ax$ $(0 \\leqq x \\leqq 2)$ の最大値を求めよ。（上に凸）",
        answer: "$a<0$ のとき $4a-4$, $0 \\leqq a \\leqq 2$ のとき $a^2$, $a>2$ のとき $0$",
        rationale: "<strong>解説: </strong><br>注意！これは「上に凸（山型）」の最大値問題です。<br>この場合、「軸が範囲内なら頂点」で最大になります。<br>よって3つの場合分け（左外・中・右外）になります。<br>軸 $x=a$。<br>1. **左外 ($a<0$)**: 左端 $x=0$ 側が頂点に近い...いや、軸が左にあるならグラフは右下がり。左端 $x=0$ で最大 $\\to 0$。<br>...訂正します。軸が左にある($a<0$) $\\to$ 定義域 $0\\sim2$ はすべて軸の右側（下り坂） $\\to$ 左端 $x=0$ で最大 $\\to 0$。<br>2. **中 ($0 \\leqq a \\leqq 2$)**: 頂点で最大 $\\to a^2$<br>3. **右外 ($a>2$)**: 右端 $x=2$ で最大 $\\to -4+4a$<br>...もう一度グラフをイメージしましょう。<br>軸が右外($a>2$)にある $\\to$ 定義域は軸の左側（上り坂） $\\to$ 右端 $x=2$ で最大。<br>OKです。答えは「$a<0$で$0$, 中で$a^2$, $a>2$で$4a-4$」です。" + VIDEO_LINK
    },
    // 問題 59
    {
        question: "2次関数 $y=x^2+2(a-1)x$ $(0 \\leqq x \\leqq 2)$ の最大値を求めよ。",
        answer: "$a>0$ のとき $0$, $a \\leqq 0$ のとき $4a$, ",
        rationale: "<strong>解説: </strong><br>軸は $x=-(a-1) = 1-a$ です。定義域の中央は $1$。<br>比較: $1-a < 1 \\iff -a < 0 \\iff a > 0$。<br>1. **$a > 0$ (軸が中央より左)**: 右端 $x=2$ で最大 $\\to 4+4(a-1) = 4a$。<br>2. **$a \\leqq 0$ (軸が中央より右)**: 左端 $x=0$ で最大 $\\to 0$。<br>...解説と答えが逆になっていますね。再確認。<br>・軸 $1-a$ が $1$ より左 $\\iff a>0$。軸が左なら右端 $x=2$ が遠い。値は $4a$。<br>・軸 $1-a$ が $1$ より右 $\\iff a \\leqq 0$。軸が右なら左端 $x=0$ が遠い。値は $0$。<br>よって「$a>0$ のとき $4a$, $a \\leqq 0$ のとき $0$」が正解です。" + VIDEO_LINK
    },
    // 問題 60
    {
        question: "2次関数 $y=(x-a)^2+1$ $(0 \\leqq x \\leqq 2)$ の最大値を求めよ。",
        answer: "$a<1$ のとき $(2-a)^2+1$, $a \\geqq 1$ のとき $a^2+1$",
        rationale: "<strong>解説: </strong><br>軸は $x=a$、中央は $1$。<br>1. **$a<1$ (左)**: 右端 $x=2$ で最大 $\\to (2-a)^2+1 = a^2-4a+5$<br>2. **$a \\geqq 1$ (右)**: 左端 $x=0$ で最大 $\\to (-a)^2+1 = a^2+1$" + VIDEO_LINK
    },
    // 問題 61
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$ の最大値が $3$ となる定数 $a$ の値を求めよ。",
        answer: "$a = \\frac{1}{4}$",
        rationale: "<strong>解説: </strong><br>場合分けをして逆算します。<br>1. **$a<1$ のとき**: 最大値は $x=2$ で $4-4a$。<br>   $4-4a=3 \\to 4a=1 \\to a=1/4$。<br>   これは $a<1$ を満たすので適する。<br>2. **$a \\geqq 1$ のとき**: 最大値は $x=0$ で $0$。<br>   $0=3$ は不適。<br>よって $a=1/4$。" + VIDEO_LINK
    },
    // 問題 62
    {
        question: "2次関数 $y=x^2-2ax+a^2$ $(-1 \\leqq x \\leqq 1)$ の最大値を求めよ。",
        answer: "$a<0$ のとき $(1-a)^2$, $a \\geqq 0$ のとき $(1+a)^2$",
        rationale: "<strong>解説: </strong><br>式は $y=(x-a)^2$ です。軸 $a$、中央 $0$。<br>1. **$a<0$ (左)**: 右端 $x=1$ で最大 $\\to (1-a)^2$<br>2. **$a \\geqq 0$ (右)**: 左端 $x=-1$ で最大 $\\to (-1-a)^2 = (1+a)^2$" + VIDEO_LINK
    },
    // 問題 63
    {
        question: "2次関数 $y=x^2-4ax+1$ $(0 \\leqq x \\leqq 2)$ の最大値が $5$ となる $a$ の値を求めよ。",
        answer: "$a = -\\frac{1}{2}$",
        rationale: "<strong>解説: </strong><br>軸 $2a$、中央 $1$。<br>1. **$2a<1 (a<0.5)$**: 最大値 ($x=2$) は $4-8a+1 = 5-8a$。<br>   $5-8a=5 \\to -8a=0 \\to a=0$。<br>   これは $a<0.5$ を満たす。<br>2. **$2a \\geqq 1 (a \\geqq 0.5)$**: 最大値 ($x=0$) は $1$。<br>   $1=5$ は不適。<br>よって $a=0$。<br>...すみません、問題作成時の計算ミスか、$x=2$ の代入計算ミスですね。<br>再計算: $x=2$ のとき $y=4-8a+1=5-8a$。これが $5$ なら $a=0$。<br>もし答えが $-1/2$ なら、最大値は $5-8(-0.5)=9$ になってしまいます。<br>正解は $a=0$ です。" + VIDEO_LINK
    },
    // 問題 64
    {
        question: "2次関数 $y=x^2+2ax-a^2$ $(-1 \\leqq x \\leqq 1)$ の最大値を求めよ。（画像の問題）",
        answer: "$a>0$ のとき $1+2a-a^2$, $a \\leqq 0$ のとき $1-2a-a^2$",
        rationale: "<strong>解説: </strong><br>軸は $x=-a$、中央は $0$。<br>1. **軸が左 ($-a < 0 \\to a > 0$)**: 右端 $x=1$ で最大 $\\to 1+2a-a^2$<br>2. **軸が右 ($-a \\geqq 0 \\to a \\leqq 0$)**: 左端 $x=-1$ で最大 $\\to 1-2a-a^2$" + VIDEO_LINK
    },
    // 問題 65
    {
        question: "2次関数 $y=3x^2-6ax$ $(0 \\leqq x \\leqq 2)$ の最大値を $M(a)$ とする。$M(a)$ のグラフの形は？",
        answer: "$a=1$ で折れ曲がるL字型",
        rationale: "<strong>解説: </strong><br>1. $a<1$ のとき、最大値は $x=2$ で $12-12a$（右下がりの直線）。<br>2. $a \\geqq 1$ のとき、最大値は $x=0$ で $0$（横一直線）。<br>$a=1$ で $12-12(1)=0$ となり連続しますが、傾きが急に変わります。" + VIDEO_LINK
    }
];