const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7715/63197' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 第1部：1次関数の値・基本 (1-10) ---
    // 問題 1
    {
        question: "$f(x) = 2x + 1$ のとき、$f(3)$ の値を求めよ。",
        answer: "7",
        rationale: "<strong>解説: </strong><br>$x$ に $3$ を代入します。<br>$f(3) = 2 \\times 3 + 1$<br>$= 6 + 1$<br>$= 7$<br>関数の $x$ の場所に、カッコをつけて数値を代入するイメージを持つと計算ミスが減ります。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "$f(x) = 3x - 5$ のとき、$f(0)$ の値を求めよ。",
        answer: "-5",
        rationale: "<strong>解説: </strong><br>$x$ に $0$ を代入します。<br>$f(0) = 3 \\times 0 - 5$<br>$= 0 - 5$<br>$= -5$<br>$x$ を含む項が消えるため、定数項（数字だけの項）がそのまま答えになります。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "$f(x) = -4x + 2$ のとき、$f(2)$ の値を求めよ。",
        answer: "-6",
        rationale: "<strong>解説: </strong><br>$x$ に $2$ を代入します。<br>$f(2) = -4 \\times 2 + 2$<br>$= -8 + 2$<br>$= -6$<br>マイナスの符号に注意して計算しましょう。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "$f(x) = 5x - 3$ のとき、$f(-1)$ の値を求めよ。",
        answer: "-8",
        rationale: "<strong>解説: </strong><br>$x$ に $-1$ を代入します。<br>$f(-1) = 5 \\times (-1) - 3$<br>$= -5 - 3$<br>$= -8$<br>負の数を代入するときは、必ずカッコ $( -1 )$ をつけて代入する習慣をつけましょう。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "$f(x) = -2x - 4$ のとき、$f(-3)$ の値を求めよ。",
        answer: "2",
        rationale: "<strong>解説: </strong><br>$x$ に $-3$ を代入します。<br>$f(-3) = -2 \\times (-3) - 4$<br>$= 6 - 4$<br>$= 2$<br>マイナス同士のかけ算（$-2 \\times -3$）はプラスになることに注意してください。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "$f(x) = \\frac{1}{2}x + 4$ のとき、$f(6)$ の値を求めよ。",
        answer: "7",
        rationale: "<strong>解説: </strong><br>$x$ に $6$ を代入します。<br>$f(6) = \\frac{1}{2} \\times 6 + 4$<br>$= 3 + 4$<br>$= 7$<br>分数と整数の積を先に計算してから足し算を行います。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "$f(x) = 3x + 2$ のとき、$f\\left(\\frac{1}{3}\\right)$ の値を求めよ。",
        answer: "3",
        rationale: "<strong>解説: </strong><br>$x$ に分数 $\\frac{1}{3}$ を代入します。<br>$f\\left(\\frac{1}{3}\\right) = 3 \\times \\frac{1}{3} + 2$<br>$= 1 + 2$<br>$= 3$<br>約分によって分母が消え、整数になります。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "$f(x) = 10 - 2x$ のとき、$f(5)$ の値を求めよ。",
        answer: "0",
        rationale: "<strong>解説: </strong><br>$x$ に $5$ を代入します。<br>$f(5) = 10 - 2 \\times 5$<br>$= 10 - 10$<br>$= 0$<br>答えが $0$ になることもあります。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "$f(x) = -x + 1$ のとき、$f(-5)$ の値を求めよ。",
        answer: "6",
        rationale: "<strong>解説: </strong><br>$x$ に $-5$ を代入します。<br>$f(-5) = -(-5) + 1$<br>$= 5 + 1$<br>$= 6$<br>$-x$ は「$-1 \\times x$」のことなので、$-1 \\times (-5)$ となり符号がプラスになります。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "$f(x) = 7x$ のとき、$f(0) + f(2)$ の値を求めよ。",
        answer: "14",
        rationale: "<strong>解説: </strong><br>それぞれの値を求めてから足します。<br>$f(0) = 7 \\times 0 = 0$<br>$f(2) = 7 \\times 2 = 14$<br>よって、$0 + 14 = 14$ です。<br>（別解：$f(x)$は比例なので $f(0+2)$ と一致しますが、基本通り別々に計算するのが確実です）" + VIDEO_LINK
    },

    // --- 第2部：1次関数の値・文字式の代入 (11-20) ---
    // 問題 11
    {
        question: "$f(x) = 2x + 5$ のとき、$f(a)$ の値を求めよ。",
        answer: "$2a + 5$",
        rationale: "<strong>解説: </strong><br>$x$ をそのまま文字 $a$ に置き換えます。<br>$f(a) = 2 \\times a + 5$<br>$= 2a + 5$<br>これ以上計算はできないので、この式がそのまま答えになります。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "$f(x) = 3x - 1$ のとき、$f(2a)$ の値を求めよ。",
        answer: "$6a - 1$",
        rationale: "<strong>解説: </strong><br>$x$ の位置に $(2a)$ を代入します。<br>$f(2a) = 3 \\times (2a) - 1$<br>$= 6a - 1$<br>係数同士のかけ算（$3 \\times 2$）を忘れずに行いましょう。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "$f(x) = -x + 4$ のとき、$f(a+1)$ の値を求めよ。",
        answer: "$-a + 3$",
        rationale: "<strong>解説: </strong><br>$x$ の位置に $(a+1)$ を代入します。必ずカッコをつけましょう。<br>$f(a+1) = -(a+1) + 4$<br>$= -a - 1 + 4$<br>$= -a + 3$<br>マイナスの分配法則により、$-1$ もマイナスになる点に注意してください。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "$f(x) = 2x + 3$ のとき、$f(a-1)$ の値を求めよ。",
        answer: "$2a + 1$",
        rationale: "<strong>解説: </strong><br>$x$ に $(a-1)$ を代入します。<br>$f(a-1) = 2(a-1) + 3$<br>分配法則を使ってカッコを外します。<br>$= 2a - 2 + 3$<br>$= 2a + 1$" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "$f(x) = 4x - 5$ のとき、$f(a+2)$ の値を求めよ。",
        answer: "$4a + 3$",
        rationale: "<strong>解説: </strong><br>$x$ に $(a+2)$ を代入します。<br>$f(a+2) = 4(a+2) - 5$<br>$= 4a + 8 - 5$<br>$= 4a + 3$<br>定数項の計算（$8-5$）を最後に行います。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "$f(x) = -3x + 2$ のとき、$f(a-2)$ の値を求めよ。",
        answer: "$-3a + 8$",
        rationale: "<strong>解説: </strong><br>$f(a-2) = -3(a-2) + 2$<br>$= -3a + 6 + 2$<br>$= -3a + 8$<br>$-3 \\times -2 = +6$ となる符号の変化に気をつけましょう。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "$f(x) = 5x$ のとき、$f(a+b)$ の値を求めよ。",
        answer: "$5a + 5b$",
        rationale: "<strong>解説: </strong><br>$x$ に多項式 $(a+b)$ を代入します。<br>$f(a+b) = 5(a+b)$<br>$= 5a + 5b$<br>単純な分配法則の問題です。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "$f(x) = 2x + 1$ のとき、$f(a) + f(2)$ を計算せよ。",
        answer: "$2a + 6$",
        rationale: "<strong>解説: </strong><br>$f(a)$ と $f(2)$ をそれぞれ求めます。<br>$f(a) = 2a + 1$<br>$f(2) = 2 \\times 2 + 1 = 5$<br>これらを足すと、$(2a + 1) + 5 = 2a + 6$ となります。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "$f(x) = 3x - 4$ のとき、$f(2a) - f(a)$ を計算せよ。",
        answer: "$3a$",
        rationale: "<strong>解説: </strong><br>それぞれ代入して式を作ります。<br>$f(2a) = 3(2a) - 4 = 6a - 4$<br>$f(a) = 3a - 4$<br>引き算をします：$(6a - 4) - (3a - 4)$<br>$= 6a - 4 - 3a + 4$<br>$= 3a$<br>$-4$ が打ち消し合って消えるのがポイントです。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "$f(x) = x + 5$ のとき、$f(a+1) - f(a)$ の値を求めよ。",
        answer: "1",
        rationale: "<strong>解説: </strong><br>これは関数の「変化の割合」に関係する計算です。<br>$f(a+1) = (a+1) + 5 = a + 6$<br>$f(a) = a + 5$<br>差をとると、$(a + 6) - (a + 5) = a + 6 - a - 5 = 1$<br>直線の傾き（係数）である $1$ が残ります。" + VIDEO_LINK
    },

    // --- 第3部：2次関数の値・基本 (21-30) ---
    // 問題 21
    {
        question: "$f(x) = x^2$ のとき、$f(-3)$ の値を求めよ。",
        answer: "9",
        rationale: "<strong>解説: </strong><br>$x$ に $-3$ を代入します。<br>$f(-3) = (-3)^2$<br>$= (-3) \\times (-3)$<br>$= 9$<br>マイナスの数を2乗するとプラスになります。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "$f(x) = -x^2$ のとき、$f(4)$ の値を求めよ。",
        answer: "-16",
        rationale: "<strong>解説: </strong><br>$x$ に $4$ を代入します。<br>$f(4) = - (4^2)$<br>$= - 16$<br>このマイナスは2乗の外にあるので、最後まで残ります。「$(-4)^2=16$」と混同しないようにしましょう。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "$f(x) = x^2 + 3$ のとき、$f(-2)$ の値を求めよ。",
        answer: "7",
        rationale: "<strong>解説: </strong><br>$f(-2) = (-2)^2 + 3$<br>$= 4 + 3$<br>$= 7$" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "$f(x) = 2x^2 + 1$ のとき、$f(3)$ の値を求めよ。",
        answer: "19",
        rationale: "<strong>解説: </strong><br>$x$ に $3$ を代入します。<br>$f(3) = 2 \\times 3^2 + 1$<br>累乗（2乗）を先に計算します。<br>$= 2 \\times 9 + 1$<br>$= 18 + 1$<br>$= 19$" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "$f(x) = x^2 - 4x$ のとき、$f(5)$ の値を求めよ。",
        answer: "5",
        rationale: "<strong>解説: </strong><br>$f(5) = 5^2 - 4 \\times 5$<br>$= 25 - 20$<br>$= 5$" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "$f(x) = x^2 - 2x + 1$ のとき、$f(3)$ の値を求めよ。",
        answer: "4",
        rationale: "<strong>解説: </strong><br>$f(3) = 3^2 - 2 \\times 3 + 1$<br>$= 9 - 6 + 1$<br>$= 4$<br>（別解：因数分解して $f(x)=(x-1)^2$ と見てから代入すると、$(3-1)^2 = 2^2 = 4$ と計算できます）" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "$f(x) = x^2 + x - 6$ のとき、$f(-2)$ の値を求めよ。",
        answer: "-4",
        rationale: "<strong>解説: </strong><br>$f(-2) = (-2)^2 + (-2) - 6$<br>$= 4 - 2 - 6$<br>$= -4$<br>符号ミスが起きやすいので、一つずつ丁寧に計算しましょう。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "$f(x) = -x^2 + 2x$ のとき、$f(-1)$ の値を求めよ。",
        answer: "-3",
        rationale: "<strong>解説: </strong><br>$f(-1) = -(-1)^2 + 2 \\times (-1)$<br>$= -(1) - 2$<br>$= -1 - 2$<br>$= -3$<br>最初の項は「マイナス・カッコ・マイナス1の2乗」なので、$-1$ になります。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "$f(x) = 3x^2 - 5$ のとき、$f(0)$ の値を求めよ。",
        answer: "-5",
        rationale: "<strong>解説: </strong><br>$f(0) = 3 \\times 0^2 - 5$<br>$= 0 - 5$<br>$= -5$<br>$x$ に $0$ を代入すると、$x$ を含む項はすべて消えます。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "$f(x) = (x-2)^2 + 1$ のとき、$f(2)$ の値を求めよ。",
        answer: "1",
        rationale: "<strong>解説: </strong><br>基本形の頂点を求めるような計算です。<br>$f(2) = (2-2)^2 + 1$<br>$= 0^2 + 1$<br>$= 1$" + VIDEO_LINK
    },

    // --- 第4部：2次関数の値・文字式の展開 (31-40) ---
    // 問題 31
    {
        question: "$f(x) = x^2$ のとき、$f(a+1)$ を展開して答えよ。",
        answer: "$a^2 + 2a + 1$",
        rationale: "<strong>解説: </strong><br>$x$ に $(a+1)$ を代入します。<br>$f(a+1) = (a+1)^2$<br>乗法公式 $(A+B)^2 = A^2 + 2AB + B^2$ を使って展開します。<br>$= a^2 + 2a + 1$" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "$f(x) = x^2$ のとき、$f(a-3)$ を展開して答えよ。",
        answer: "$a^2 - 6a + 9$",
        rationale: "<strong>解説: </strong><br>$f(a-3) = (a-3)^2$<br>乗法公式 $(A-B)^2 = A^2 - 2AB + B^2$ を利用します。<br>$= a^2 - 2 \\times 3 \\times a + 3^2$<br>$= a^2 - 6a + 9$" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "$f(x) = x^2 + 2x$ のとき、$f(a+1)$ を展開して整理せよ。",
        answer: "$a^2 + 4a + 3$",
        rationale: "<strong>解説: </strong><br>それぞれの $x$ に $(a+1)$ を代入します。<br>$f(a+1) = (a+1)^2 + 2(a+1)$<br>$= (a^2 + 2a + 1) + (2a + 2)$<br>同類項をまとめます。<br>$= a^2 + (2a+2a) + (1+2)$<br>$= a^2 + 4a + 3$" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "$f(x) = x^2 - x$ のとき、$f(a-1)$ を展開して整理せよ。",
        answer: "$a^2 - 3a + 2$",
        rationale: "<strong>解説: </strong><br>$f(a-1) = (a-1)^2 - (a-1)$<br>$= (a^2 - 2a + 1) - a + 1$<br>後半のマイナスの分配に注意します。<br>$= a^2 - 2a - a + 1 + 1$<br>$= a^2 - 3a + 2$" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "$f(x) = 2x^2$ のとき、$f(3a)$ の値を求めよ。",
        answer: "$18a^2$",
        rationale: "<strong>解説: </strong><br>$f(3a) = 2(3a)^2$<br>まず2乗を計算します。$(3a)^2 = 9a^2$ です。<br>$= 2 \\times 9a^2$<br>$= 18a^2$<br>「$6a^2$」としてしまうミスが多いので注意しましょう。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "$f(x) = x^2 - 3x + 2$ のとき、$f(a+1)$ を展開して整理せよ。",
        answer: "$a^2 - a$",
        rationale: "<strong>解説: </strong><br>$f(a+1) = (a+1)^2 - 3(a+1) + 2$<br>$= (a^2 + 2a + 1) - 3a - 3 + 2$<br>同類項を計算します。<br>$a$ の項： $2a - 3a = -a$<br>定数項： $1 - 3 + 2 = 0$<br>よって $a^2 - a$ となります。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "$f(x) = x^2 + 1$ のとき、$f(a-1) - f(a)$ を計算せよ。",
        answer: "$-2a + 1$",
        rationale: "<strong>解説: </strong><br>それぞれ計算します。<br>$f(a-1) = (a-1)^2 + 1 = a^2 - 2a + 1 + 1 = a^2 - 2a + 2$<br>$f(a) = a^2 + 1$<br>引き算をします。<br>$(a^2 - 2a + 2) - (a^2 + 1)$<br>$= a^2 - 2a + 2 - a^2 - 1$<br>$= -2a + 1$" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "$f(x) = 3x^2$ のとき、$f(2a)$ の値を求めよ。",
        answer: "$12a^2$",
        rationale: "<strong>解説: </strong><br>$f(2a) = 3(2a)^2$<br>$= 3 \\times 4a^2$<br>$= 12a^2$" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "$f(x) = x^2 - 4$ のとき、$f(a+2)$ を展開して整理せよ。",
        answer: "$a^2 + 4a$",
        rationale: "<strong>解説: </strong><br>$f(a+2) = (a+2)^2 - 4$<br>$= (a^2 + 4a + 4) - 4$<br>$= a^2 + 4a$<br>定数項が消えるパターンです。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "$f(x) = x^2 + 2x + 1$ のとき、$f(a-1)$ の値を求めよ。",
        answer: "$a^2$",
        rationale: "<strong>解説: </strong><br>真面目に代入しても良いですが、$f(x)=(x+1)^2$ と因数分解できることに気づくと速いです。<br>$f(a-1) = ((a-1) + 1)^2$<br>$= (a)^2$<br>$= a^2$<br>もちろん、普通に展開しても $(a^2 - 2a + 1) + (2a - 2) + 1 = a^2$ と求まります。" + VIDEO_LINK
    },

    // --- 第5部：応用・逆算問題 (41-50) ---
    // 問題 41
    {
        question: "$f(x) = 2x - 3$ において、$f(a) = 7$ となる $a$ の値を求めよ。",
        answer: "5",
        rationale: "<strong>解説: </strong><br>$f(a)$ の値が与えられていて、代入した $a$ を求める逆算の問題です。<br>$f(a) = 2a - 3$ なので、方程式 $2a - 3 = 7$ を立てます。<br>$2a = 10$<br>$a = 5$" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "$f(x) = x^2 - 5$ において、$f(a) = 4$ となる正の数 $a$ の値を求めよ。",
        answer: "3",
        rationale: "<strong>解説: </strong><br>方程式 $a^2 - 5 = 4$ を解きます。<br>$a^2 = 9$<br>$a = \\pm 3$<br>「正の数」という条件があるので、$a = 3$ が答えです。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "$f(x) = 3x + k$ において、$f(2) = 1$ のとき、定数 $k$ の値を求めよ。",
        answer: "-5",
        rationale: "<strong>解説: </strong><br>$x=2$ のとき値が $1$ になるという意味です。<br>$3 \\times 2 + k = 1$<br>$6 + k = 1$<br>$k = 1 - 6$<br>$k = -5$" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "$f(x) = ax - 4$ において、$f(3) = 2$ のとき、定数 $a$ の値を求めよ。",
        answer: "2",
        rationale: "<strong>解説: </strong><br>$x$ に $3$ を代入した結果が $2$ です。<br>$a \\times 3 - 4 = 2$<br>$3a = 6$<br>$a = 2$" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "$f(x) = x^3$ のとき、$f(-2)$ の値を求めよ。",
        answer: "-8",
        rationale: "<strong>解説: </strong><br>3次関数の代入です。<br>$f(-2) = (-2)^3$<br>$= (-2) \\times (-2) \\times (-2)$<br>$= 4 \\times (-2)$<br>$= -8$<br>奇数乗なのでマイナスが残ります。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "$f(x) = \\frac{12}{x}$ のとき、$f(4)$ の値を求めよ。",
        answer: "3",
        rationale: "<strong>解説: </strong><br>反比例の関数（分数関数）です。<br>$f(4) = \\frac{12}{4} = 3$" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "$f(x) = \\frac{6}{x}$ のとき、$f(a+1)$ を表せ。",
        answer: "$\\frac{6}{a+1}$",
        rationale: "<strong>解説: </strong><br>$x$ の部分をそのまま $(a+1)$ に置き換えます。<br>これ以上約分などはできないので、$\\frac{6}{a+1}$ が答えとなります。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "$f(x) = |x - 3|$ のとき、$f(1)$ の値を求めよ。",
        answer: "2",
        rationale: "<strong>解説: </strong><br>絶対値記号を含む関数です。<br>$f(1) = |1 - 3|$<br>$= |-2|$<br>絶対値は原点からの距離（中身が負ならプラスに変える）なので、$2$ となります。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "$f(x) = 2x - 1, g(x) = x^2$ のとき、$g(f(2))$ の値を求めよ。",
        answer: "9",
        rationale: "<strong>解説: </strong><br>合成関数の基礎となる計算です。内側から計算します。<br>まず $f(2) = 2 \\times 2 - 1 = 3$。<br>次に、この結果を $g(x)$ に代入します。<br>$g(3) = 3^2 = 9$<br>よって答えは $9$ です。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "$f(x) = x^2 - x + 1$ のとき、$f(1 - a)$ を展開して整理せよ。",
        answer: "$a^2 - a + 1$",
        rationale: "<strong>解説: </strong><br>$x$ に $(1-a)$ を代入します。<br>$f(1-a) = (1-a)^2 - (1-a) + 1$<br>$= (1 - 2a + a^2) - 1 + a + 1$<br>降べきの順（次数の高い順）に整理します。<br>$= a^2 + (-2a + a) + (1 - 1 + 1)$<br>$= a^2 - a + 1$<br>（$x^2-x+1$ と形が似ていますが、符号が変わる面白い結果になります）" + VIDEO_LINK
    }
];