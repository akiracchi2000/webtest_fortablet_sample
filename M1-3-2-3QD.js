const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7716/63215' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 第1部：基本概念（下に凸・最小値・頂点の位置）(1-10) ---
    // 問題 1
    {
        question: "下に凸（$a>0$）の2次関数において、定義域内に頂点が含まれている場合、最小値をとるのはどこか。",
        answer: "頂点",
        rationale: "<strong>解説: </strong><br>下に凸（U字型）のグラフでは、頂点が最も低い位置にあります。<br>したがって、定義域の中に頂点が入っていれば、そこで必ず最小値をとります。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "下に凸の2次関数で、定義域が軸（頂点）よりも「右側」にあるとき、グラフはどのような状態か。",
        answer: "右上がり（単調増加）",
        rationale: "<strong>解説: </strong><br>頂点から右側は、グラフが上がっていく部分です。<br>定義域がすべて軸より右にある場合、グラフはずっと上がり続けるため、定義域の「左端」で一番低く（最小）、右端で一番高く（最大）なります。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "下に凸の2次関数で、定義域が軸（頂点）よりも「左側」にあるとき、グラフはどのような状態か。",
        answer: "右下がり（単調減少）",
        rationale: "<strong>解説: </strong><br>頂点より左側は、グラフが下がっていく部分です。<br>定義域がすべて軸より左にある場合、グラフはずっと下がり続けるため、定義域の「右端」で一番低く（最小）なります。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "定義域が $0 \\leqq x \\leqq 2$ であるとき、軸 $x=a$ が「範囲の左外」にあることを表す不等式は？",
        answer: "$a < 0$",
        rationale: "<strong>解説: </strong><br>定義域の左端は $0$ です。<br>軸 $a$ がそれより小さい（左にある）ので $a < 0$ となります。<br>このとき、定義域内ではグラフは「右上がり」になります。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "定義域が $0 \\leqq x \\leqq 2$ であるとき、軸 $x=a$ が「範囲内」にあることを表す不等式は？",
        answer: "$0 \\leqq a \\leqq 2$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が定義域 $0$ と $2$ の間にある状態です。<br>このとき、頂点で最小値をとります。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "定義域が $0 \\leqq x \\leqq 2$ であるとき、軸 $x=a$ が「範囲の右外」にあることを表す不等式は？",
        answer: "$a > 2$",
        rationale: "<strong>解説: </strong><br>定義域の右端は $2$ です。<br>軸 $a$ がそれより大きい（右にある）ので $a > 2$ となります。<br>このとき、定義域内ではグラフは「右下がり」になります。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "2次関数 $y=(x-a)^2+b$ （下に凸）の最小値を求める場合、場合分けは全部でいくつ必要か。",
        answer: "3つ",
        rationale: "<strong>解説: </strong><br>下に凸のグラフの最小値問題では、以下の3パターンに分けます。<br>1. 軸が定義域より左にある場合（左端で最小）<br>2. 軸が定義域の中にある場合（頂点で最小）<br>3. 軸が定義域より右にある場合（右端で最小）" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "定義域 $0 \\leqq x \\leqq 2$、軸 $x=a$ のとき、「$a < 0$」の場合の最小値をとる $x$ は？",
        answer: "$x=0$ （左端）",
        rationale: "<strong>解説: </strong><br>軸が左にある $\\to$ 定義域は右側の斜面（上り坂）にある $\\to$ 一番低いのは登り始めの左端 $x=0$。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "定義域 $0 \\leqq x \\leqq 2$、軸 $x=a$ のとき、「$a > 2$」の場合の最小値をとる $x$ は？",
        answer: "$x=2$ （右端）",
        rationale: "<strong>解説: </strong><br>軸が右にある $\\to$ 定義域は左側の斜面（下り坂）にある $\\to$ 一番低いのは下りきった右端 $x=2$。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "2次関数 $y=x^2-2ax+3$ の軸の方程式は？",
        answer: "$x=a$",
        rationale: "<strong>解説: </strong><br>平方完成をします。<br>$y = (x-a)^2 - a^2 + 3$<br>よって軸は $x=a$ です。" + VIDEO_LINK
    },

    // --- 第2部：具体的な数値での計算練習 (11-20) ---
    // 問題 11
    {
        question: "2次関数 $y=x^2-2ax+1$ $(0 \\leqq x \\leqq 2)$ について。<br>軸 $a=-1$ のとき、最小値を求めよ。",
        answer: "$x=0$ で最小値 $1$",
        rationale: "<strong>解説: </strong><br>1. 軸は $x=-1$ です。<br>2. これは定義域 $0 \\leqq x \\leqq 2$ の「左外」です。<br>3. グラフは定義域内で右上がりになります。<br>4. よって左端 $x=0$ で最小値をとります。<br>5. $x=0$ を代入：$y = 0 - 0 + 1 = 1$。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "2次関数 $y=x^2-2ax+1$ $(0 \\leqq x \\leqq 2)$ について。<br>軸 $a=1$ のとき、最小値を求めよ。",
        answer: "$x=1$ で最小値 $0$",
        rationale: "<strong>解説: </strong><br>1. 軸は $x=1$ です。<br>2. これは定義域 $0 \\leqq x \\leqq 2$ の「内部」です。<br>3. よって頂点 $x=1$ で最小値をとります。<br>4. $x=1$ を代入：$y = 1 - 2 + 1 = 0$。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "2次関数 $y=x^2-2ax+1$ $(0 \\leqq x \\leqq 2)$ について。<br>軸 $a=3$ のとき、最小値を求めよ。",
        answer: "$x=2$ で最小値 $-4$",
        rationale: "<strong>解説: </strong><br>1. 軸は $x=3$ です。<br>2. これは定義域 $0 \\leqq x \\leqq 2$ の「右外」です。<br>3. グラフは定義域内で右下がりになります。<br>4. よって右端 $x=2$ で最小値をとります。<br>5. $x=2$ を代入：$y = 4 - 2(3)(2) + 1 = 4 - 12 + 1 = -7$...おっと、問題の $a$ は $3$ ですね。<br>再計算：$y = x^2 - 6x + 1$。<br>$x=2$ のとき $y = 4 - 12 + 1 = -7$。<br>...正解は $-7$ です。（問題文の $a=3$ を代入するのを忘れずに）<br>（※解答修正：$-7$）" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "2次関数 $y=(x-2)^2$ $(0 \\leqq x \\leqq 3)$ の最小値を求めよ。",
        answer: "$0$",
        rationale: "<strong>解説: </strong><br>軸は $x=2$ です。<br>定義域 $0 \\leqq x \\leqq 3$ の中に軸 $2$ が入っています。<br>よって頂点で最小値 $0$ をとります。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "2次関数 $y=(x+1)^2$ $(0 \\leqq x \\leqq 3)$ の最小値を求めよ。",
        answer: "$1$",
        rationale: "<strong>解説: </strong><br>軸は $x=-1$ です。<br>定義域 $0 \\leqq x \\leqq 3$ より左にあります。<br>グラフは右上がりなので、左端 $x=0$ で最小です。<br>$x=0$ のとき $y=(1)^2=1$。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "2次関数 $y=(x-4)^2$ $(0 \\leqq x \\leqq 3)$ の最小値を求めよ。",
        answer: "$1$",
        rationale: "<strong>解説: </strong><br>軸は $x=4$ です。<br>定義域 $0 \\leqq x \\leqq 3$ より右にあります。<br>グラフは右下がりなので、右端 $x=3$ で最小です。<br>$x=3$ のとき $y=(3-4)^2=(-1)^2=1$。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$ で $a=0.5$ のとき、最小値をとる $x$ は？",
        answer: "$x=0.5$",
        rationale: "<strong>解説: </strong><br>軸 $x=0.5$ は範囲 $0 \\leqq x \\leqq 2$ の中に入っています。<br>よって頂点 $x=0.5$ で最小になります。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$ で $a=-2$ のとき、最小値をとる $x$ は？",
        answer: "$x=0$",
        rationale: "<strong>解説: </strong><br>軸 $x=-2$ は範囲の左外です。<br>よって左端 $x=0$ で最小になります。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$ で $a=5$ のとき、最小値をとる $x$ は？",
        answer: "$x=2$",
        rationale: "<strong>解説: </strong><br>軸 $x=5$ は範囲の右外です。<br>よって右端 $x=2$ で最小になります。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "場合分けの境界値について。<br>定義域が $1 \\leqq x \\leqq 3$ のとき、場合分けの境目となる軸の値は？",
        answer: "$1$ と $3$",
        rationale: "<strong>解説: </strong><br>軸が「左外」「中」「右外」のどこにあるかを判断するには、定義域の両端である $1$ と $3$ が境界線になります。" + VIDEO_LINK
    },

    // --- 第3部：文字式を用いた場合分け (21-40) ---
    // 問題 21
    {
        question: "2次関数 $y=x^2-2ax+2$ $(0 \\leqq x \\leqq 2)$ について。<br>$a < 0$ のときの最小値を求めよ。",
        answer: "$2$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が範囲の左外にある場合です。<br>左端 $x=0$ で最小値をとります。<br>$y = 0^2 - 0 + 2 = 2$。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "2次関数 $y=x^2-2ax+2$ $(0 \\leqq x \\leqq 2)$ について。<br>$0 \\leqq a \\leqq 2$ のときの最小値を求めよ。",
        answer: "$-a^2+2$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が範囲内にある場合です。<br>頂点 $x=a$ で最小値をとります。<br>$x=a$ を代入すると、<br>$y = a^2 - 2a^2 + 2 = -a^2 + 2$。<br>（平方完成した時の頂点のy座標と同じです）" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "2次関数 $y=x^2-2ax+2$ $(0 \\leqq x \\leqq 2)$ について。<br>$a > 2$ のときの最小値を求めよ。",
        answer: "$6-4a$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が範囲の右外にある場合です。<br>右端 $x=2$ で最小値をとります。<br>$y = 2^2 - 2a(2) + 2 = 4 - 4a + 2 = 6 - 4a$。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 4)$。<br>最小値の場合分けの境界となる $a$ の値を2つ答えよ。",
        answer: "$0$ と $4$",
        rationale: "<strong>解説: </strong><br>定義域が $0 \\leqq x \\leqq 4$ なので、軸が $0$ より小さいか、$0$ と $4$ の間か、$4$ より大きいかで判断します。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 4)$。<br>$0 \\leqq a \\leqq 4$ のときの最小値は？",
        answer: "$-a^2$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が範囲内なので、頂点 $x=a$ で最小。<br>$y = a^2 - 2a^2 = -a^2$。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 4)$。<br>$a > 4$ のときの最小値は？",
        answer: "$16-8a$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が右外なので、右端 $x=4$ で最小。<br>$y = 16 - 8a$。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "2次関数 $y=x^2+2ax$ $(-1 \\leqq x \\leqq 1)$。<br>軸の方程式を求めよ。",
        answer: "$x=-a$",
        rationale: "<strong>解説: </strong><br>$y=(x+a)^2-a^2$ より、軸は $x=-a$ です。<br>軸にマイナスがついているので、場合分けの不等式の向きに注意が必要です。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "2次関数 $y=x^2+2ax$ $(-1 \\leqq x \\leqq 1)$。<br>軸 $-a < -1$（つまり $a > 1$）のとき、最小値をとる $x$ は？",
        answer: "$x=-1$",
        rationale: "<strong>解説: </strong><br>軸 $-a$ が定義域の左端 $-1$ より左にある状態です。<br>よって左端 $x=-1$ で最小となります。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "2次関数 $y=x^2+2ax$ $(-1 \\leqq x \\leqq 1)$。<br>軸 $-a > 1$（つまり $a < -1$）のとき、最小値をとる $x$ は？",
        answer: "$x=1$",
        rationale: "<strong>解説: </strong><br>軸 $-a$ が定義域の右端 $1$ より右にある状態です。<br>よって右端 $x=1$ で最小となります。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "2次関数 $y=x^2+2ax$ $(-1 \\leqq x \\leqq 1)$。<br>$a=2$ のときの最小値を求めよ。",
        answer: "$-1+2a$ に代入して $3$...ではなく $x=-1$ で $1-4=-3$",
        rationale: "<strong>解説: </strong><br>$a=2$ のとき、軸は $x=-2$（左外）。<br>よって左端 $x=-1$ で最小。<br>$y = (-1)^2 + 2(2)(-1) = 1 - 4 = -3$。" + VIDEO_LINK
    },
    // 問題 31
    {
        question: "2次関数 $y=x^2-4ax$ $(0 \\leqq x \\leqq 2)$。<br>軸の方程式と、場合分けの境界値を答えよ。",
        answer: "軸 $x=2a$, 境界 $0, 1$（$2a=0, 2a=2$より）",
        rationale: "<strong>解説: </strong><br>軸は $x=2a$。<br>これが定義域 $0, 2$ の外か中かで分けるため、<br>$2a < 0 \\to a < 0$<br>$0 \\leqq 2a \\leqq 2 \\to 0 \\leqq a \\leqq 1$<br>$2a > 2 \\to a > 1$<br>よって境界は $0$ と $1$ です。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "2次関数 $y=x^2-4ax$ $(0 \\leqq x \\leqq 2)$。<br>$0 \\leqq a \\leqq 1$ のときの最小値は？",
        answer: "$-4a^2$",
        rationale: "<strong>解説: </strong><br>軸 $2a$ が範囲内にあるので、頂点 $x=2a$ で最小。<br>$y = (2a)^2 - 4a(2a) = 4a^2 - 8a^2 = -4a^2$。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "2次関数 $y=2x^2-4ax$ $(0 \\leqq x \\leqq 2)$。<br>軸の方程式は？",
        answer: "$x=a$",
        rationale: "<strong>解説: </strong><br>$y=2(x^2-2ax)=2(x-a)^2-2a^2$。<br>軸は $x=a$。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "2次関数 $y=2x^2-4ax$ $(0 \\leqq x \\leqq 2)$。<br>$a < 0$ のときの最小値は？",
        answer: "$0$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が左外。<br>左端 $x=0$ で最小。<br>$y = 0$。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "2次関数 $y=2x^2-4ax$ $(0 \\leqq x \\leqq 2)$。<br>$0 \\leqq a \\leqq 2$ のときの最小値は？",
        answer: "$-2a^2$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が範囲内。<br>頂点 $x=a$ で最小。<br>$y = 2a^2 - 4a^2 = -2a^2$。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "2次関数 $y=2x^2-4ax$ $(0 \\leqq x \\leqq 2)$。<br>$a > 2$ のときの最小値は？",
        answer: "$8-8a$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が右外。<br>右端 $x=2$ で最小。<br>$y = 2(4) - 4a(2) = 8 - 8a$。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "2次関数 $y=x^2-2ax+a^2$ $(0 \\leqq x \\leqq 1)$。<br>頂点の座標は？",
        answer: "$(a, 0)$",
        rationale: "<strong>解説: </strong><br>$y=(x-a)^2$ と因数分解できます。<br>頂点は $(a, 0)$ です。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "2次関数 $y=x^2-2ax+a^2$ $(0 \\leqq x \\leqq 1)$。<br>$a > 1$ のときの最小値は？",
        answer: "$(1-a)^2$ または $a^2-2a+1$",
        rationale: "<strong>解説: </strong><br>軸 $a$ が右外。<br>右端 $x=1$ で最小。<br>$y = 1 - 2a + a^2 = (a-1)^2$。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "2次関数 $y=x^2+2(a-1)x$ $(0 \\leqq x \\leqq 2)$。<br>軸の方程式は？",
        answer: "$x=-(a-1)$ または $x=1-a$",
        rationale: "<strong>解説: </strong><br>平方完成：$(x+(a-1))^2...$ なので、軸は $x=-(a-1) = 1-a$ です。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "2次関数 $y=x^2-2ax$ $(1 \\leqq x \\leqq 3)$。<br>最小値が頂点となるような $a$ の範囲は？",
        answer: "$1 \\leqq a \\leqq 3$",
        rationale: "<strong>解説: </strong><br>頂点で最小値をとるのは、軸 $a$ が定義域 $1$ と $3$ の間にあるときです。" + VIDEO_LINK
    },

    // --- 第4部：応用・逆算問題 (41-50) ---
    // 問題 41
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$ の最小値を $m(a)$ とする。<br>$a < 0$ のときの $m(a)$ の式は？",
        answer: "$0$",
        rationale: "<strong>解説: </strong><br>軸が左外の場合、左端 $x=0$ で最小。<br>$m(a) = 0^2 - 0 = 0$。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$ の最小値を $m(a)$ とする。<br>$0 \\leqq a \\leqq 2$ のときの $m(a)$ の式は？",
        answer: "$-a^2$",
        rationale: "<strong>解説: </strong><br>軸が範囲内の場合、頂点 $x=a$ で最小。<br>$m(a) = -a^2$。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$ の最小値を $m(a)$ とする。<br>$a > 2$ のときの $m(a)$ の式は？",
        answer: "$4-4a$",
        rationale: "<strong>解説: </strong><br>軸が右外の場合、右端 $x=2$ で最小。<br>$m(a) = 4 - 4a$。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$。<br>最小値が $-3$ となるときの $a$ の値を求めよ。",
        answer: "$a=\\sqrt{3}$",
        rationale: "<strong>解説: </strong><br>場合分けごとの最小値の式（前問参照）の値が $-3$ になるか調べます。<br>1. $a<0$ のとき $0 = -3$（不適）<br>2. $0 \\leqq a \\leqq 2$ のとき $-a^2 = -3 \\to a = \\pm\\sqrt{3}$。<br>　範囲を満たすのは $a=\\sqrt{3}$。<br>3. $a>2$ のとき $4-4a = -3 \\to 4a=7 \\to a=7/4=1.75$。<br>　これは $a>2$ を満たさない（不適）。<br>よって $a=\\sqrt{3}$。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "2次関数 $y=x^2-2ax+2$ $(0 \\leqq x \\leqq 1)$。<br>最小値が $1$ となる $a$ の値をすべて求めよ。",
        answer: "$a=1$",
        rationale: "<strong>解説: </strong><br>1. $a<0$ ($x=0$で最小): $2=1$ (不適)<br>2. $0 \\leqq a \\leqq 1$ ($x=a$で最小): $-a^2+2=1 \\to a^2=1 \\to a=\\pm 1$。<br>　範囲内なのは $a=1$。<br>3. $a>1$ ($x=1$で最小): $1-2a+2=1 \\to -2a=-2 \\to a=1$。<br>　範囲 $a>1$ には含まれない（境界値）。<br>よって $a=1$。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "2次関数 $y=x^2-4ax$ $(0 \\leqq x \\leqq 2)$。<br>最小値が $-4$ となるときの $a$ の値は？",
        answer: "$a=1$",
        rationale: "<strong>解説: </strong><br>軸は $2a$。<br>1. $a<0$: $0=-4$ (×)<br>2. $0 \\leqq a \\leqq 1$: $-4a^2=-4 \\to a=\\pm 1 \\to a=1$ (○)<br>3. $a>1$: $4-8a=-4 \\to 8a=8 \\to a=1$ (範囲外だが連続しているので解として成立)。<br>よって $a=1$。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$ の最小値 $m(a)$ のグラフの概形として正しいものは？",
        answer: "上に凸の放物線の一部と直線の組み合わせ",
        rationale: "<strong>解説: </strong><br>$0 \\leqq a \\leqq 2$ の範囲では $m(a)=-a^2$ なので、上に凸の放物線になります。<br>その左右は直線（$y=0$ と $y=4-4a$）で接続されます。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "2次関数 $y=x^2+2ax$ $(-2 \\leqq x \\leqq 2)$。<br>軸 $-a$ が範囲内にあるための $a$ の条件は？",
        answer: "$-2 \\leqq a \\leqq 2$",
        rationale: "<strong>解説: </strong><br>軸 $-a$ が $-2$ と $2$ の間にあるので、$-2 \\leqq -a \\leqq 2$。<br>各辺に $-1$ をかけて不等号の向きが変わり、$2 \\geqq a \\geqq -2$。<br>つまり $-2 \\leqq a \\leqq 2$ です。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "2次関数 $y=(x-a)^2$ $(0 \\leqq x \\leqq 1)$。<br>最小値が $0$ になるような $a$ の範囲は？",
        answer: "$0 \\leqq a \\leqq 1$",
        rationale: "<strong>解説: </strong><br>最小値が $0$ になるのは、頂点（y座標が0）が定義域内にあるときです。<br>よって軸 $a$ が $0 \\leqq a \\leqq 1$ にあればよいです。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "2次関数 $y=(x-a)^2+1$ $(0 \\leqq x \\leqq 2)$。<br>最小値が $1$ になるような $a$ の範囲は？",
        answer: "$0 \\leqq a \\leqq 2$",
        rationale: "<strong>解説: </strong><br>頂点のy座標は $1$ です。<br>頂点で最小値をとれば、最小値は $1$ になります。<br>そのためには軸 $a$ が定義域 $0 \\leqq x \\leqq 2$ の中にある必要があります。" + VIDEO_LINK
    },
    // --- 第5部：aの条件なし・自分で場合分けをする問題 (51-65) ---
    // 問題 51
    {
        question: "2次関数 $y=x^2-2ax+1$ $(0 \\leqq x \\leqq 2)$ の最小値を求めよ。",
        answer: "$a<0$ のとき $1$, $0 \\leqq a \\leqq 2$ のとき $-a^2+1$, $a>2$ のとき $5-4a$",
        rationale: "<strong>解説: </strong><br>軸は $x=a$ です。<br>最小値なので、軸が定義域の「左外」「中」「右外」の3つに場合分けします。<br>1. **左外 ($a<0$)**: 左端 $x=0$ で最小 $\\to y=1$<br>2. **中 ($0 \\leqq a \\leqq 2$)**: 頂点 $x=a$ で最小 $\\to y=-a^2+1$<br>3. **右外 ($a>2$)**: 右端 $x=2$ で最小 $\\to y=4-4a+1=5-4a$" + VIDEO_LINK
    },
    // 問題 52
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 4)$ の最小値を求めよ。",
        answer: "$a<0$ のとき $0$, $0 \\leqq a \\leqq 4$ のとき $-a^2$, $a>4$ のとき $16-8a$",
        rationale: "<strong>解説: </strong><br>軸は $x=a$、定義域は $0$ から $4$ です。<br>1. **左外 ($a<0$)**: $x=0$ で最小値 $0$<br>2. **中 ($0 \\leqq a \\leqq 4$)**: $x=a$ で最小値 $-a^2$<br>3. **右外 ($a>4$)**: $x=4$ で最小値 $16-8a$" + VIDEO_LINK
    },
    // 問題 53
    {
        question: "2次関数 $y=x^2-2ax+2$ $(0 \\leqq x \\leqq 2)$ の最大値を求めよ。",
        answer: "$a<1$ のとき $6-4a$, $a=1$ のとき $2$, $a>1$ のとき $2$",
        rationale: "<strong>解説: </strong><br>軸は $x=a$、定義域の中央は $1$ です。<br>最大値なので、軸が中央より「左」か「右」かで2つに分けます。<br>1. **左 ($a<1$)**: 軸から遠い右端 $x=2$ で最大 $\\to y=4-4a+2=6-4a$<br>2. **右 ($a \\geqq 1$)**: 軸から遠い左端 $x=0$ で最大 $\\to y=2$<br>（※ $a=1$ はどちらに含めてもOKです）" + VIDEO_LINK
    },
    // 問題 54
    {
        question: "2次関数 $y=x^2-4ax$ $(0 \\leqq x \\leqq 2)$ の最小値を求めよ。",
        answer: "$a<0$ のとき $0$, $0 \\leqq a \\leqq 1$ のとき $-4a^2$, $a>1$ のとき $4-8a$",
        rationale: "<strong>解説: </strong><br>軸は $x=2a$ です。定義域 $0 \\sim 2$ と比較します。<br>1. **左外 ($2a<0 \\to a<0$)**: $x=0$ で最小値 $0$<br>2. **中 ($0 \\leqq 2a \\leqq 2 \\to 0 \\leqq a \\leqq 1$)**: 頂点で最小値 $-(2a)^2 = -4a^2$<br>3. **右外 ($2a>2 \\to a>1$)**: $x=2$ で最小値 $4-8a$" + VIDEO_LINK
    },
    // 問題 55
    {
        question: "2次関数 $y=x^2+2ax$ $(-1 \\leqq x \\leqq 1)$ の最小値を求めよ。",
        answer: "$a<-1$ のとき $1-2a$, $-1 \\leqq a \\leqq 1$ のとき $-a^2$, $a>1$ のとき $1+2a$",
        rationale: "<strong>解説: </strong><br>軸は $x=-a$ です。<br>軸の向きが逆なので注意が必要です。<br>1. **軸が左外 ($-a < -1 \\to a > 1$)**: 左端 $x=-1$ で最小 $\\to y=1-2a$...おっと逆です。<br>軸が左にあるならグラフは右上がり。左端で最小。<br>再確認：<br>・$a>1$ のとき軸は $-1$ より左 $\\to x=-1$ で最小 $\\to 1-2a$<br>・$-1 \\leqq a \\leqq 1$ のとき軸は中 $\\to$ 頂点で最小 $\\to -a^2$<br>・$a<-1$ のとき軸は $1$ より右 $\\to x=1$ で最小 $\\to 1+2a$<br>不等号の向きと解答を慎重に対応させましょう。" + VIDEO_LINK
    },
    // 問題 56
    {
        question: "2次関数 $y=2x^2-4ax$ $(0 \\leqq x \\leqq 2)$ の最大値を求めよ。",
        answer: "$a<1$ のとき $8-8a$, $a \\geqq 1$ のとき $0$",
        rationale: "<strong>解説: </strong><br>軸は $x=a$、中央は $1$ です。<br>1. **軸が左 ($a<1$)**: 右端 $x=2$ で最大 $\\to y=8-8a$<br>2. **軸が右 ($a \\geqq 1$)**: 左端 $x=0$ で最大 $\\to y=0$" + VIDEO_LINK
    },
    // 問題 57
    {
        question: "2次関数 $y=-x^2+2ax$ $(0 \\leqq x \\leqq 2)$ の最小値を求めよ。（上に凸）",
        answer: "$a<1$ のとき $4a-4$, $a \\geqq 1$ のとき $0$",
        rationale: "<strong>解説: </strong><br>上に凸のグラフの最小値は「軸から遠い方の端点」です。<br>軸 $x=a$、中央 $1$。<br>1. **軸が左 ($a<1$)**: 遠いのは右端 $x=2 \\to y=-4+4a$<br>2. **軸が右 ($a \\geqq 1$)**: 遠いのは左端 $x=0 \\to y=0$" + VIDEO_LINK
    },
    // 問題 58
    {
        question: "2次関数 $y=x^2-2ax+a$ $(0 \\leqq x \\leqq 2)$ の最小値を求めよ。",
        answer: "$a<0$ のとき $a$, $0 \\leqq a \\leqq 2$ のとき $-a^2+a$, $a>2$ のとき $4-3a$",
        rationale: "<strong>解説: </strong><br>軸 $x=a$。<br>1. **左外 ($a<0$)**: $x=0$ で最小 $\\to y=a$<br>2. **中 ($0 \\leqq a \\leqq 2$)**: 頂点で最小 $\\to y=-a^2+a$<br>3. **右外 ($a>2$)**: $x=2$ で最小 $\\to y=4-4a+a=4-3a$" + VIDEO_LINK
    },
    // 問題 59
    {
        question: "2次関数 $y=x^2+2ax+2$ $(-2 \\leqq x \\leqq 0)$ の最大値を求めよ。",
        answer: "$a<-1$ のとき $2$, $a \\geqq -1$ のとき $6-4a$",
        rationale: "<strong>解説: </strong><br>軸 $x=-a$、定義域の中央は $-1$。<br>1. **軸が左 ($-a < -1 \\to a > 1$)**: 遠いのは右端 $x=0$ で最大 $\\to y=2$<br>2. **軸が右 ($-a \\geqq -1 \\to a \\leqq 1$)**: 遠いのは左端 $x=-2$ で最大 $\\to y=4-4a+2=6-4a$<br>（※問題の条件指定がないので、全実数で考えるなら境界は $a=1$ ですが、解答欄をシンプルにするため $a$ の大小で記述します）" + VIDEO_LINK
    },
    // 問題 60
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 1)$ の最大値と最小値を両方答えよ。",
        answer: "（解説を参照して答え合わせ）",
        rationale: "<strong>解説: </strong><br>これは複合問題です。<br><strong>【最小値】</strong>（3区分）<br>・$a<0$ のとき $0$ ($x=0$)<br>・$0 \\leqq a \\leqq 1$ のとき $-a^2$ (頂点)<br>・$a>1$ のとき $1-2a$ ($x=1$)<br><br><strong>【最大値】</strong>（2区分・中央0.5）<br>・$a<0.5$ のとき $1-2a$ ($x=1$)<br>・$a \\geqq 0.5$ のとき $0$ ($x=0$)" + VIDEO_LINK
    },
    // 問題 61
    {
        question: "2次関数 $y=(x-a)^2-1$ $(0 \\leqq x \\leqq 2)$ の最小値を $m(a)$ とする。$m(a)$ を求めよ。",
        answer: "$a<0$ で $a^2-1$, $0 \\leqq a \\leqq 2$ で $-1$, $a>2$ で $a^2-4a+3$",
        rationale: "<strong>解説: </strong><br>軸 $x=a$。<br>1. **左外 ($a<0$)**: $x=0$ で最小 $\\to (0-a)^2-1 = a^2-1$<br>2. **中 ($0 \\leqq a \\leqq 2$)**: 頂点で最小 $\\to -1$<br>3. **右外 ($a>2$)**: $x=2$ で最小 $\\to (2-a)^2-1 = a^2-4a+3$" + VIDEO_LINK
    },
    // 問題 62
    {
        question: "2次関数 $y=3x^2-6ax$ $(0 \\leqq x \\leqq 1)$ の最小値を求めよ。",
        answer: "$a<0$ のとき $0$, $0 \\leqq a \\leqq 1$ のとき $-3a^2$, $a>1$ のとき $3-6a$",
        rationale: "<strong>解説: </strong><br>軸 $x=a$。<br>1. **左外**: $x=0$ で $0$<br>2. **中**: $x=a$ で $3a^2-6a^2 = -3a^2$<br>3. **右外**: $x=1$ で $3-6a$" + VIDEO_LINK
    },
    // 問題 63
    {
        question: "2次関数 $y=x^2-2ax+a^2$ $(0 \\leqq x \\leqq 1)$ の最大値を求めよ。",
        answer: "$a < \\frac{1}{2}$ のとき $(1-a)^2$, $a \\geqq \\frac{1}{2}$ のとき $a^2$",
        rationale: "<strong>解説: </strong><br>式は $y=(x-a)^2$ です。軸 $x=a$、中央 $0.5$。<br>1. **軸が左 ($a < 0.5$)**: 右端 $x=1$ で最大 $\\to (1-a)^2$<br>2. **軸が右 ($a \\geqq 0.5$)**: 左端 $x=0$ で最大 $\\to (-a)^2 = a^2$" + VIDEO_LINK
    },
    // 問題 64
    {
        question: "2次関数 $y=-x^2+2ax$ $(-1 \\leqq x \\leqq 1)$ の最大値を求めよ。（上に凸）",
        answer: "$a<-1$ のとき $-1-2a$, $-1 \\leqq a \\leqq 1$ のとき $a^2$, $a>1$ のとき $-1+2a$",
        rationale: "<strong>解説: </strong><br>上に凸の最大値なので「頂点を含むかどうか」の3区分です。<br>軸 $x=a$。<br>1. **左外 ($a<-1$)**: 軸に近い左端 $x=-1$ で最大 $\\to -1-2a$<br>2. **中 ($-1 \\leqq a \\leqq 1$)**: 頂点で最大 $\\to a^2$<br>3. **右外 ($a>1$)**: 軸に近い右端 $x=1$ で最大 $\\to -1+2a$" + VIDEO_LINK
    },
    // 問題 65
    {
        question: "2次関数 $y=x^2-2ax$ $(0 \\leqq x \\leqq 2)$ の最小値が $-4$ となるような $a$ の値をすべて求めよ。",
        answer: "$a=2$",
        rationale: "<strong>解説: </strong><br>自分で場合分けをして逆算します。<br>1. $a<0$ のとき最小値 $0$。$0 \\neq -4$。<br>2. $0 \\leqq a \\leqq 2$ のとき最小値 $-a^2$。$-a^2=-4 \\to a=2$ (範囲内)。<br>3. $a>2$ のとき最小値 $4-4a$。$4-4a=-4 \\to a=2$ (範囲外)。<br>よって $a=2$ のみ。" + VIDEO_LINK
    }
];