const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7713/63189' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- レベル1: 方程式・不等式の基本 (1-15) ---
    // 問題 1
    {
        question: "$x$ は実数とする。<br>$x = 2$ は、$x^2 = 4$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x = 2$、条件 $q: x^2 = 4$ とします。<br>1. $p \implies q$ ($x=2$ ならば $x^2=4$)<br>　これは<strong>真</strong>です。<br>2. $q \implies p$ ($x^2=4$ ならば $x=2$)<br>　$x = -2$ のときも成り立つため、<strong>偽</strong>です（反例: $x=-2$）。<br>よって、<strong>十分条件</strong>ですが必要条件ではありません。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "$x$ は実数とする。<br>$x^2 = 9$ は、$x = 3$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが、十分条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x^2 = 9$、条件 $q: x = 3$ とします。<br>1. $p \implies q$ ($x^2=9$ ならば $x=3$)<br>　$x = -3$ の可能性があるため、<strong>偽</strong>です（反例: $x=-3$）。<br>2. $q \implies p$ ($x=3$ ならば $x^2=9$)<br>　これは<strong>真</strong>です。<br>矢印が逆向き（$\\Leftarrow$）のみ成り立つので、<strong>必要条件</strong>です。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "$x$ は実数とする。<br>$x > 2$ は、$x > 1$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x > 2$、条件 $q: x > 1$ とします。<br>1. $p \implies q$ ($2$ より大きければ $1$ より大きい)<br>　数直線で考えると包含関係にあるため、<strong>真</strong>です。<br>2. $q \implies p$ ($1$ より大きければ $2$ より大きい)<br>　$x = 1.5$ などがあるため、<strong>偽</strong>です（反例: $x=1.5$）。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "$x$ は実数とする。<br>$x < 0$ は、$x \\leqq 0$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x < 0$、条件 $q: x \\leqq 0$ とします。<br>1. $p \implies q$ ($x$ が負ならば $0$ 以下である)<br>　これは<strong>真</strong>です。<br>2. $q \implies p$ ($0$ 以下ならば $x$ は負である)<br>　$x = 0$ の場合が含まれるため、<strong>偽</strong>です（反例: $x=0$）。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "$x$ は実数とする。<br>$x = 0$ は、$xy = 0$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x = 0$、条件 $q: xy = 0$ とします。<br>1. $p \implies q$ ($x=0$ ならば $xy=0$)<br>　$0$ を掛ければ必ず $0$ になるため、<strong>真</strong>です。<br>2. $q \implies p$ ($xy=0$ ならば $x=0$)<br>　$y=0$ であれば $x$ は $0$ でなくても成り立つため、<strong>偽</strong>です（反例: $x=1, y=0$）。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "$x$ は実数とする。<br>$x^2 = 0$ は、$x = 0$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である",
        rationale: "<strong>解説: </strong><br>条件 $p: x^2 = 0$、条件 $q: x = 0$ とします。<br>1. $p \implies q$ ($x^2=0$ ならば $x=0$)<br>　実数で2乗して0になるのは0のみなので、<strong>真</strong>です。<br>2. $q \implies p$ ($x=0$ ならば $x^2=0$)<br>　計算すれば明らかなので、<strong>真</strong>です。<br>双方向ともに成り立つので、<strong>必要十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "$x, y$ は実数とする。<br>$x = y$ は、$x^2 = y^2$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x = y$、条件 $q: x^2 = y^2$ とします。<br>1. $p \implies q$ ($x=y$ ならば $x^2=y^2$)<br>　同じ数を2乗すれば等しくなるため、<strong>真</strong>です。<br>2. $q \implies p$ ($x^2=y^2$ ならば $x=y$)<br>　$x = -y$ の場合もあるため、<strong>偽</strong>です（反例: $x=1, y=-1$）。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "$x, y$ は実数とする。<br>$x^2 + y^2 = 0$ は、$x = 0$ かつ $y = 0$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である",
        rationale: "<strong>解説: </strong><br>実数の性質として、$x^2 \\geqq 0, y^2 \\geqq 0$ です。<br>足して $0$ になるには、両方とも $0$ である必要があります。<br>すなわち $x^2+y^2=0 \\iff x=0$ かつ $y=0$ は同値です。<br>よって、<strong>必要十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "$x$ は実数とする。<br>$|x| < 3$ は、$x < 3$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: |x| < 3$（つまり $-3 < x < 3$）、条件 $q: x < 3$ とします。<br>1. $p \implies q$ ($-3 < x < 3$ ならば $x < 3$)<br>　範囲に含まれるため、<strong>真</strong>です。<br>2. $q \implies p$ ($x < 3$ ならば $-3 < x < 3$)<br>　$x = -5$ などの場合、条件 $p$ を満たさないため<strong>偽</strong>です（反例: $x=-5$）。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "$x$ は実数とする。<br>$x > 0$ は、$x^2 > 0$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x > 0$、条件 $q: x^2 > 0$ とします。<br>1. $p \implies q$ (正の数ならば2乗して正)<br>　これは<strong>真</strong>です。<br>2. $q \implies p$ (2乗して正ならば元の数は正)<br>　負の数も2乗すると正になるため、<strong>偽</strong>です（反例: $x=-2$）。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 11
    {
        question: "$a, b$ は実数とする。<br>$a = b$ は、$a + c = b + c$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である",
        rationale: "<strong>解説: </strong><br>等式の性質より、両辺に同じ数 $c$ を足しても引いても等号は維持されます。<br>1. $a=b \implies a+c=b+c$ （真）<br>2. $a+c=b+c \implies a=b$ （真）<br>双方向ともに成り立つので、<strong>必要十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "$a, b, c$ は実数とする。<br>$ac = bc$ は、$a = b$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが、十分条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: ac = bc$、条件 $q: a = b$ とします。<br>1. $p \implies q$ ($ac=bc$ ならば $a=b$)<br>　$c = 0$ の場合、$a, b$ が何であっても $0=0$ となるため、必ずしも $a=b$ とは限りません（反例: $c=0, a=1, b=2$）。よって<strong>偽</strong>です。<br>2. $q \implies p$ ($a=b$ ならば $ac=bc$)<br>　両辺に同じ数を掛けても等しいため<strong>真</strong>です。<br>逆向き（$\\Leftarrow$）のみ成り立つので、<strong>必要条件</strong>です。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "$x$ は実数とする。<br>$x(x-1) = 0$ は、$x = 1$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが、十分条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x(x-1) = 0$（解は $x=0, 1$）、条件 $q: x = 1$ とします。<br>1. $p \implies q$ ($x=0, 1$ ならば $x=1$)<br>　$x=0$ の場合があるため<strong>偽</strong>です。<br>2. $q \implies p$ ($x=1$ ならば方程式を満たす)<br>　代入して $1(1-1)=0$ となるため<strong>真</strong>です。<br>逆向き（$\\Leftarrow$）のみ成り立つので、<strong>必要条件</strong>です。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "$x, y$ は実数とする。<br>$x > 0$ かつ $y > 0$ は、$xy > 0$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x > 0$ かつ $y > 0$、条件 $q: xy > 0$ とします。<br>1. $p \implies q$ (共に正なら積は正)<br>　これは<strong>真</strong>です。<br>2. $q \implies p$ (積が正なら共に正)<br>　「負 $\times$ 負」の場合も積は正になるため、<strong>偽</strong>です（反例: $x=-1, y=-1$）。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "$x, y$ は実数とする。<br>$x^2 + y^2 > 0$ は、$x \neq 0$ または $y \neq 0$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である",
        rationale: "<strong>解説: </strong><br>対偶（否定）で考えると分かりやすい問題です。<br>命題: $x^2 + y^2 > 0 \iff x \neq 0$ または $y \neq 0$<br>この否定は: $x^2 + y^2 \\leqq 0 \iff x = 0$ かつ $y = 0$<br>実数において2乗和が負になることはないので、$x^2+y^2=0$ と同義です。<br>「2乗和が0」と「共に0」は同値なので、元の命題も同値になります。<br>よって、<strong>必要十分条件</strong>です。" + VIDEO_LINK
    },

    // --- レベル2: 集合・論理・平面図形 (16-35) ---
    // 問題 16
    {
        question: "集合 $A, B$ について、<br>$x \in A$ は、$x \in A \cup B$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x \in A$、条件 $q: x \in A \cup B$ とします。<br>1. $p \implies q$ ($A$ に属するなら和集合に属する)<br>　和集合の定義より<strong>真</strong>です。<br>2. $q \implies p$ (和集合に属するなら $A$ に属する)<br>　$B$ のみに属する要素の可能性があるため<strong>偽</strong>です。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "集合 $A, B$ について、<br>$x \in A \cap B$ は、$x \in A$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x \in A \cap B$、条件 $q: x \in A$ とします。<br>1. $p \implies q$ (共通部分に属するなら $A$ に属する)<br>　共通部分の定義より<strong>真</strong>です。<br>2. $q \implies p$ ($A$ に属するなら共通部分に属する)<br>　$B$ に属していない場合は共通部分に入らないため<strong>偽</strong>です。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "集合 $A, B$ について、<br>$A \subset B$ は、$A \cap B = A$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である",
        rationale: "<strong>解説: </strong><br>集合の包含関係の重要性質です。<br>「$A$ が $B$ にすっぽり含まれる ($A \subset B$)」ことと、「$A$ と $B$ の共通部分が $A$ そのものである ($A \cap B = A$)」ことは同値です。<br>よって、<strong>必要十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "自然数 $n$ について、<br>$n$ が4の倍数であることは、$n$ が2の倍数であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: n$ は4の倍数、条件 $q: n$ は2の倍数。<br>1. $p \implies q$ (4の倍数は2の倍数)<br>　$4k = 2(2k)$ なので<strong>真</strong>です。<br>2. $q \implies p$ (2の倍数は4の倍数)<br>　$n=2, 6$ などは4の倍数ではないので<strong>偽</strong>です。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "自然数 $n$ について、<br>$n$ が6の倍数であることは、$n$ が2の倍数かつ3の倍数であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である",
        rationale: "<strong>解説: </strong><br>$2$ と $3$ は「互いに素（最大公約数が1）」です。<br>互いに素な数の公倍数は、その積（最小公倍数）の倍数と一致します。<br>つまり「2の倍数かつ3の倍数」 $\iff$ 「6の倍数」となります。<br>よって、<strong>必要十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 21
    {
        question: "四角形 $Q$ について、<br>$Q$ が正方形であることは、$Q$ が長方形であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p$: 正方形、条件 $q$: 長方形。<br>1. $p \implies q$ (正方形なら長方形)<br>　正方形は長方形の性質（4つの角が等しい）を満たすため<strong>真</strong>です。<br>2. $q \implies p$ (長方形なら正方形)<br>　隣り合う辺の長さが違う長方形があるため<strong>偽</strong>です。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "四角形 $Q$ について、<br>$Q$ が長方形であることは、$Q$ の対角線の長さが等しいための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p$: 長方形、条件 $q$: 対角線の長さが等しい。<br>1. $p \implies q$ (長方形なら対角線は等しい)<br>　これは長方形の性質として<strong>真</strong>です。<br>2. $q \implies p$ (対角線が等しいなら長方形)<br>　「等脚台形」も対角線の長さは等しいですが、長方形ではありません。よって<strong>偽</strong>です。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "三角形 $T$ について、<br>$T$ が正三角形であることは、$T$ が二等辺三角形であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p$: 正三角形、条件 $q$: 二等辺三角形。<br>1. $p \implies q$ (正三角形なら二等辺三角形)<br>　3辺が等しければ、当然2辺も等しいため<strong>真</strong>です。<br>2. $q \implies p$ (二等辺三角形なら正三角形)<br>　底辺と等辺の長さが違う場合があるため<strong>偽</strong>です。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "$x, y$ は実数とする。<br>$x + y > 0$ は、$x > 0$ かつ $y > 0$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが、十分条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x+y > 0$、条件 $q: x > 0$ かつ $y > 0$。<br>1. $p \implies q$ (和が正なら共に正)<br>　$x=5, y=-2$ のように、一方が負でも和が正になることがあるため<strong>偽</strong>です。<br>2. $q \implies p$ (共に正なら和は正)<br>　正の数同士の足し算は正になるため<strong>真</strong>です。<br>逆向き（$\\Leftarrow$）のみ成り立つので、<strong>必要条件</strong>です。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "$x$ は実数とする。<br>$|x| = x$ は、$x \geqq 0$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である",
        rationale: "<strong>解説: </strong><br>絶対値の定義を確認します。<br>・$x \geqq 0$ のとき $|x| = x$<br>・$x < 0$ のとき $|x| = -x$<br>したがって、「そのまま外れる ($|x|=x$)」ことと「$0$ 以上である ($x \geqq 0$)」ことは同値です。<br>よって、<strong>必要十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "$x$ は実数とする。<br>$x < 1$ は、$x < 2$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x < 1$、条件 $q: x < 2$。<br>1. $p \implies q$ (1より小さいなら2より小さい)<br>　数直線で見れば明らかなので<strong>真</strong>です。<br>2. $q \implies p$ (2より小さいなら1より小さい)<br>　$x = 1.5$ などの反例があるため<strong>偽</strong>です。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "$x, y$ は実数とする。<br>$x^2 + y^2 = 0$ は、$x + y = 0$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x^2 + y^2 = 0$ ($x=0, y=0$)、条件 $q: x + y = 0$。<br>1. $p \implies q$ ($x=0, y=0$ ならば和は $0$)<br>　$0+0=0$ なので<strong>真</strong>です。<br>2. $q \implies p$ ($x+y=0$ ならば $x=0, y=0$)<br>　$x=1, y=-1$ の場合、和は0ですが2乗和は2になるため<strong>偽</strong>です。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "$x$ は実数とする。<br>$(x-1)(x-2) = 0$ は、$x = 1$ または $x = 2$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である",
        rationale: "<strong>解説: </strong><br>方程式 $(x-1)(x-2) = 0$ を解くと、$x = 1, 2$ となります。<br>これは条件「$x=1$ または $x=2$」と全く同じ意味です。<br>よって、<strong>必要十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "$n$ は自然数とする。<br>$n$ が素数であることは、$n$ が奇数であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要条件でも十分条件でもない",
        rationale: "<strong>解説: </strong><br>条件 $p$: 素数、条件 $q$: 奇数。<br>1. $p \implies q$ (素数なら奇数)<br>　偶数の素数「$2$」があるため<strong>偽</strong>です。<br>2. $q \implies p$ (奇数なら素数)<br>　「$9$」は奇数ですが素数ではない（$3 \times 3$）ため<strong>偽</strong>です。<br>どちらの矢印も成り立たないので、<strong>必要条件でも十分条件でもありません</strong>。" + VIDEO_LINK
    },
    // 問題 30 (修正済みデータ)
    {
        question: "$x, y$ は実数とする。<br>$x + y$ が有理数であることは、$x, y$ がともに有理数であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが、十分条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x+y$ が有理数、条件 $q: x, y$ が有理数。<br>1. $p \implies q$ (和が有理数なら夫々有理数)<br>　$x = \sqrt{2}, y = -\sqrt{2}$ の場合、和は $0$（有理数）ですが、元は無理数なので<strong>偽</strong>です。<br>2. $q \implies p$ (夫々有理数なら和は有理数)<br>　有理数同士の足し算は必ず有理数になるため<strong>真</strong>です。<br>逆向き（$\\Leftarrow$）のみ成り立つので、<strong>必要条件</strong>です。" + VIDEO_LINK
    },

    // --- レベル3: やや複雑な論理・ひっかけ (31-50) ---
    // 問題 31
    {
        question: "$x, y$ は実数とする。<br>$x^2 + y^2 > 0$ は、$x + y > 0$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが、十分条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x^2 + y^2 > 0$（$x, y$ の少なくとも一方は0ではない）、条件 $q: x + y > 0$。<br>1. $p \implies q$<br>　$x = 1, y = -2$ の場合、2乗和は正ですが和は負になるため<strong>偽</strong>です。<br>2. $q \implies p$ ($x+y > 0$ ならば $x^2+y^2 > 0$)<br>　和が正であるならば、$x, y$ の少なくとも一方は正の数（つまり0ではない）です。したがって2乗和は必ず正になります。よって<strong>真</strong>です。<br>逆向きのみ成り立つので、<strong>必要条件</strong>です。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "$x$ は実数とする。<br>$x^2 - 3x + 2 = 0$ は、$x = 1$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが、十分条件ではない",
        rationale: "<strong>解説: </strong><br>方程式を解くと $(x-1)(x-2)=0$ より $x=1, 2$ です。<br>条件 $p: x=1, 2$、条件 $q: x=1$。<br>1. $p \implies q$<br>　$x=2$ の場合があるため<strong>偽</strong>です。<br>2. $q \implies p$<br>　$x=1$ は解の一つなので<strong>真</strong>です。<br>逆向きのみ成り立つので、<strong>必要条件</strong>です。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "$x$ は実数とする。<br>$x^2 - 3x + 2 = 0$ は、$x = 1$ または $x = 2$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である",
        rationale: "<strong>解説: </strong><br>方程式の解は $x=1, 2$ です。<br>これは右側の条件と完全に一致します。<br>よって、<strong>必要十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "$A, B$ を集合とする。<br>$\overline{A} \cup \overline{B} = \overline{A}$ は、$A \subset B$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である",
        rationale: "<strong>解説: </strong><br>式を変形します。<br>ド・モルガンの法則より左辺は $\overline{A \cap B} = \overline{A}$。<br>両辺の補集合をとると $A \cap B = A$ となります。<br>「共通部分が $A$ と一致する」ことは「$A$ が $B$ に含まれる ($A \subset B$)」ことと同値です。<br>よって、<strong>必要十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "$x, y$ は実数とする。<br>$|x| < 1$ かつ $|y| < 1$ は、$|x+y| < 2$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: |x|<1, |y|<1$、条件 $q: |x+y|<2$。<br>1. $p \implies q$<br>　三角不等式 $|x+y| \leqq |x| + |y|$ より、$|x+y| < 1 + 1 = 2$ となり<strong>真</strong>です。<br>2. $q \implies p$<br>　$x=10, y=-10$ の場合、和は0（絶対値は2未満）ですが、個々の絶対値は1未満ではありません。よって<strong>偽</strong>です。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "$x, y$ は実数とする。<br>$xy > 0$ は、$x > 0$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要条件でも十分条件でもない",
        rationale: "<strong>解説: </strong><br>条件 $p: xy > 0$（同符号）、条件 $q: x > 0$。<br>1. $p \implies q$<br>　$x=-1, y=-1$（共に負）の場合も積は正になるため<strong>偽</strong>です。<br>2. $q \implies p$<br>　$x=1, y=-1$ の場合、積は負になるため<strong>偽</strong>です。<br>どちらも成り立たないので、<strong>必要条件でも十分条件でもありません</strong>。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "$x$ は実数とする。<br>$x^2 + x - 6 = 0$ は、$x = 2$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが、十分条件ではない",
        rationale: "<strong>解説: </strong><br>方程式を解くと $(x-2)(x+3)=0$ より $x = 2, -3$ です。<br>条件 $p: x=2, -3$、条件 $q: x=2$。<br>1. $p \implies q$<br>　$x=-3$ の場合があるため<strong>偽</strong>です。<br>2. $q \implies p$<br>　$x=2$ は解に含まれるため<strong>真</strong>です。<br>逆向きのみ成り立つので、<strong>必要条件</strong>です。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "$\triangle ABC$ と $\triangle DEF$ について、<br>$\triangle ABC \equiv \triangle DEF$ は、$\triangle ABC$ と $\triangle DEF$ の面積が等しいため[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p$: 合同、条件 $q$: 面積が等しい。<br>1. $p \implies q$ (合同なら面積等しい)<br>　形も大きさも同じなので当然<strong>真</strong>です。<br>2. $q \implies p$ (面積等しいなら合同)<br>　形が全く違う三角形でも面積が同じになることはあるため<strong>偽</strong>です。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "$x, y$ は整数とする。<br>$xy$ が奇数であることは、$x, y$ がともに奇数であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である",
        rationale: "<strong>解説: </strong><br>整数の積の性質です。<br>積が奇数になるのは、「奇数 $\times$ 奇数」の場合に限られます。<br>偶数が一つでも混じると積は偶数になります。<br>よって双方向ともに成り立ち、<strong>必要十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "$x, y$ は整数とする。<br>$x + y$ が偶数であることは、$x, y$ がともに偶数であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが、十分条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p$: 和が偶数、条件 $q$: ともに偶数。<br>1. $p \implies q$<br>　「奇数 $+$ 奇数」も偶数になるため、$x=1, y=1$ のような反例があり<strong>偽</strong>です。<br>2. $q \implies p$<br>　偶数同士の和は必ず偶数なので<strong>真</strong>です。<br>逆向きのみ成り立つので、<strong>必要条件</strong>です。" + VIDEO_LINK
    },
    // 問題 41
    {
        question: "$x$ は実数とする。<br>$x^2 < 1$ は、$x < 1$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: -1 < x < 1$（$x^2 < 1$を解いたもの）、条件 $q: x < 1$。<br>1. $p \implies q$ ($-1 < x < 1$ ならば $x < 1$)<br>　範囲に含まれるため<strong>真</strong>です。<br>2. $q \implies p$ ($x < 1$ ならば $-1 < x < 1$)<br>　$x = -5$ のように $-1$ より小さい場合があるため<strong>偽</strong>です。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "$x$ は実数とする。<br>$x > 0$ は、$x + \frac{1}{x} \geqq 2$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x > 0$、条件 $q: x + 1/x \geqq 2$。<br>1. $p \implies q$<br>　$x > 0$ なので相加相乗平均の関係（$x + 1/x \geqq 2\sqrt{x \cdot 1/x} = 2$）より<strong>真</strong>です。<br>2. $q \implies p$<br>　もし $x < 0$ ならば、$x + 1/x$ は負の値（$-2$以下）になります。<br>　不等式 $\geqq 2$ を満たすには $x$ は必ず正でなければならないため、これも<strong>真</strong>です。<br>よって、<strong>必要十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 43 (修正済みデータ)
    {
        question: "$a, b, c$ は実数とする。<br>$ab = ac$ は、$b = c$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが、十分条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: ab = ac$、条件 $q: b = c$。<br>1. $p \implies q$<br>　$a = 0$ の場合、$b, c$ が異なっていても $0=0$ が成り立つため<strong>偽</strong>です（反例: $a=0, b=1, c=2$）。<br>2. $q \implies p$<br>　$b=c$ ならば両辺に $a$ を掛けても等しいため<strong>真</strong>です。<br>逆向きのみ成り立つので、<strong>必要条件</strong>です。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "$x$ は実数とする。<br>$x^2 - 4x + 3 < 0$ は、$x < 3$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>不等式を解くと $(x-1)(x-3) < 0$ より $1 < x < 3$ です。<br>条件 $p: 1 < x < 3$、条件 $q: x < 3$。<br>1. $p \implies q$<br>　範囲に含まれるため<strong>真</strong>です。<br>2. $q \implies p$<br>　$x = 0$ の場合、$x < 3$ は満たしますが $1 < x$ を満たさないため<strong>偽</strong>です。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "$n$ は自然数とする。<br>$n$ が10の倍数であることは、$n$ が5の倍数であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p$: 10の倍数、条件 $q$: 5の倍数。<br>1. $p \implies q$<br>　$10k = 5(2k)$ なので<strong>真</strong>です。<br>2. $q \implies p$<br>　$n=5$ は5の倍数ですが10の倍数ではないため<strong>偽</strong>です。<br>よって、<strong>十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "$x, y$ は実数とする。<br>$(x-1)^2 + (y-2)^2 = 0$ は、$x=1$ かつ $y=2$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である",
        rationale: "<strong>解説: </strong><br>実数の2乗和が0になるのは、それぞれのカッコの中身が0の場合のみです。<br>$(x-1)^2 + (y-2)^2 = 0 \iff x-1=0$ かつ $y-2=0$<br>すなわち $x=1$ かつ $y=2$ と同値です。<br>よって、<strong>必要十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "四角形 $Q$ について、<br>$Q$ が平行四辺形であることは、$Q$ の対角線がそれぞれの中点で交わるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である",
        rationale: "<strong>解説: </strong><br>「対角線がそれぞれの中点で交わる」というのは、平行四辺形になるための5つの条件（定義・性質）のうちの一つです。<br>したがって、平行四辺形であることと完全に同値です。<br>よって、<strong>必要十分条件</strong>です。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "$x$ は実数とする。<br>$x^2 + 1 = 0$ は、$x = 0$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが、必要条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: x^2 + 1 = 0$、条件 $q: x = 0$。<br>1. $p \implies q$<br>　実数範囲で $x^2 = -1$ を満たす $x$ は存在しません（空集合）。論理学的に「偽の命題からは何を導いても真（空集合は任意の集合の部分集合）」となるため、これは<strong>真</strong>と扱われます。<br>2. $q \implies p$<br>　$x=0$ を代入すると $1 \neq 0$ なので<strong>偽</strong>です。<br>よって、論理的には<strong>十分条件</strong>となります。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "$x, y$ は実数とする。<br>$x < y$ は、$x^2 < y^2$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要条件でも十分条件でもない",
        rationale: "<strong>解説: </strong><br>条件 $p: x < y$、条件 $q: x^2 < y^2$。<br>1. $p \implies q$<br>　$x = -2, y = 1$ の場合、$x < y$ ですが $4 < 1$ は成り立たず<strong>偽</strong>です。<br>2. $q \implies p$<br>　$x = 1, y = -2$ の場合、$1 < 4$ ですが $1 < -2$ は成り立たず<strong>偽</strong>です。<br>どちらも成り立たないので、<strong>必要条件でも十分条件でもありません</strong>。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "$a, b$ は実数とする。<br>$a^2 = b^2$ は、$a = b$ であるための[　]。",
        options: ["必要十分条件である", "必要条件であるが、十分条件ではない", "十分条件であるが、必要条件ではない", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが、十分条件ではない",
        rationale: "<strong>解説: </strong><br>条件 $p: a^2 = b^2$、条件 $q: a = b$。<br>1. $p \implies q$<br>　$a = 1, b = -1$ の場合、2乗は等しいですが元の数は等しくないため<strong>偽</strong>です。<br>2. $q \implies p$<br>　等しければ2乗しても等しいため<strong>真</strong>です。<br>逆向きのみ成り立つので、<strong>必要条件</strong>です。" + VIDEO_LINK
    }
];