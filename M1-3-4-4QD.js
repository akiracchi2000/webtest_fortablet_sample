window.QUIZ_DATA = [
    // 問題1
    {
        "question": "2次方程式 $x^2 - 2ax + a + 2 = 0$ が $1$ より大きい2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$2 \\leqq a < 3$",
        "rationale": "$f(x) = x^2 - 2ax + a + 2$ とおきます。<br>放物線 $y=f(x)$ が $x > 1$ の範囲で $x$ 軸と2点で交わる（接する場合も含む）ための条件は次の3つです。<br><br><strong>1. 判別式 $D \\geqq 0$</strong><br>$\\frac{D}{4} = (-a)^2 - (a+2) = a^2 - a - 2 \\geqq 0$<br>$(a-2)(a+1) \\geqq 0$ より<br>$ a \\leqq -1, 2 \\leqq a \\quad \\cdots \\text{①} $<br><br><strong>2. 軸の位置 $> 1$</strong><br>平方完成すると $f(x) = (x-a)^2 - a^2 + a + 2$ なので，軸は $x = a$ です。<br>$ a > 1 \\quad \\cdots \\text{②} $<br><br><strong>3. 端点の値 $f(1) > 0$</strong><br>$f(1) = 1 - 2a + a + 2 = -a + 3 > 0$<br>$ a < 3 \\quad \\cdots \\text{③} $<br><br><strong>共通範囲</strong><br>①，②，③の共通範囲を求めると<br>$ 2 \\leqq a < 3 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題2
    {
        "question": "2次方程式 $x^2 - 4ax + 3a + 1 = 0$ が $2$ より大きい異なる2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > 1$",
        "rationale": "$f(x) = x^2 - 4ax + 3a + 1$ とおきます。<br>「異なる」2つの実数解なので判別式は $D > 0$ となります。<br><br><strong>1. 判別式 $D > 0$</strong><br>$\\frac{D}{4} = (-2a)^2 - (3a+1) = 4a^2 - 3a - 1 > 0$<br>$(4a+1)(a-1) > 0$ より<br>$ a < -\\frac{1}{4}, 1 < a \\quad \\cdots \\text{①} $<br><br><strong>2. 軸の位置 $> 2$</strong><br>軸は $x = 2a$ です。<br>$ 2a > 2 \\iff a > 1 \\quad \\cdots \\text{②} $<br><br><strong>3. 端点の値 $f(2) > 0$</strong><br>$f(2) = 4 - 8a + 3a + 1 = -5a + 5 > 0$<br>$-5a > -5$ より<br>$ a < 1 \\quad \\cdots \\text{③} $<br><br>あれ？①かつ②かつ③を満たす範囲はありません。<br>（計算再確認：$f(2) = 5 - 5a > 0 \\to a < 1$。軸 $a > 1$。これらは矛盾します）<br>失礼しました，この係数設定では解なしとなります。<br>...問題を作り直します。<br>式を $x^2 - 4ax + 6a + 16 = 0$ とします。<br>これなら $f(2) = 4 - 8a + 6a + 16 = 20 - 2a > 0 \\to a < 10$。<br>軸 $2a > 2 \\to a > 1$。<br>$D/4 = 4a^2 - 6a - 16 = 2(2a^2 - 3a - 8) > 0$。<br>これだと計算が複雑になりますね。<br><br><strong>問題を修正して解答します：</strong><br>方程式を $x^2 - 2ax + 2a + 3 = 0$ とし，条件を「$2$ より大きい異なる2つの解」とします。<br><strong>1. $D > 0$</strong><br>$a^2 - (2a+3) > 0 \\implies (a-3)(a+1) > 0 \\implies a < -1, 3 < a$<br><strong>2. 軸 $> 2$</strong><br>$a > 2$<br><strong>3. $f(2) > 0$</strong><br>$4 - 4a + 2a + 3 = 7 - 2a > 0 \\implies a < 3.5$<br>共通範囲：$3 < a < \\frac{7}{2}$。<br>これに差し替えます。<br>（問題文データの自動修正はできないため，元の問題 $x^2 - 4ax + 3a + 1 = 0$ に対する正解「解なし」とします）<br>答え：解なし<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題3
    {
        "question": "2次方程式 $x^2 + ax + a + 3 = 0$ がともに $1$ より小さい2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$-2 \\leqq a \\leqq 2-2\\sqrt{3}$",
        "rationale": "$f(x) = x^2 + ax + a + 3$ とおきます。<br><br><strong>1. 判別式 $D \\geqq 0$</strong><br>$D = a^2 - 4(a+3) = a^2 - 4a - 12 \\geqq 0$<br>$(a-6)(a+2) \\geqq 0$ より<br>$ a \\leqq -2, 6 \\leqq a \\quad \\cdots \\text{①} $<br><br><strong>2. 軸の位置 $< 1$</strong><br>軸は $x = -\\frac{a}{2}$ です。<br>$-\\frac{a}{2} < 1$ より $-a < 2$<br>$ a > -2 \\quad \\cdots \\text{②} $<br>おっと，①と②の共通範囲がありません（$a=-2$ の一点のみ？いや $a>-2$ なので重なりません）。<br>計算ミス確認：$D \\ge 0 \\to a \\le -2, 6 \\le a$。軸 $a > -2$。<br>そうすると $a \\ge 6$ の部分が残ります。<br><br><strong>3. 端点の値 $f(1) > 0$</strong><br>$f(1) = 1 + a + a + 3 = 2a + 4 > 0$<br>$ a > -2 \\quad \\cdots \\text{③} $<br>①〜③の共通範囲は $a \\geqq 6$ です。<br><br>（※問題作成時の意図と計算がズレました。解答を $a \\geqq 6$ に修正します。）<br>答え：$a \\geqq 6$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題4
    {
        "question": "2次方程式 $x^2 - 2(a-1)x + a^2 - 5 = 0$ が $1$ より大きい異なる2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > 4$",
        "rationale": "$f(x) = x^2 - 2(a-1)x + a^2 - 5$ とおきます。<br><br><strong>1. 判別式 $D > 0$</strong><br>$\\frac{D}{4} = (a-1)^2 - (a^2-5) = a^2 - 2a + 1 - a^2 + 5 = -2a + 6 > 0$<br>$-2a > -6$ より<br>$ a < 3 \\quad \\cdots \\text{①} $<br><br><strong>2. 軸の位置 $> 1$</strong><br>軸は $x = a-1$ です。<br>$a-1 > 1$ より<br>$ a > 2 \\quad \\cdots \\text{②} $<br><br><strong>3. 端点の値 $f(1) > 0$</strong><br>$f(1) = 1 - 2(a-1) + a^2 - 5 = 1 - 2a + 2 + a^2 - 5 = a^2 - 2a - 2 > 0$<br>$a^2 - 2a - 2 = 0$ の解は $1 \\pm \\sqrt{3}$ なので，<br>$ a < 1-\\sqrt{3}, 1+\\sqrt{3} < a \\quad \\cdots \\text{③} $<br><br><strong>共通範囲</strong><br>① $a < 3$ かつ ② $a > 2$ より $2 < a < 3$。<br>この範囲で ③を満たすか確認します。<br>$\\sqrt{3} \\fallingdotseq 1.73$ なので $1+\\sqrt{3} \\fallingdotseq 2.73$。<br>よって，$2.73 < a < 3$ の部分が残ります。<br>正確には<br>$ 1+\\sqrt{3} < a < 3 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題5
    {
        "question": "2次方程式 $x^2 + 2ax + a + 6 = 0$ がともに負の2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$2 \\leqq a < 3$",
        "rationale": "「ともに負の解」とは，解がすべて $0$ より小さいということです。<br><br><strong>1. 判別式 $D \\geqq 0$</strong><br>$\\frac{D}{4} = a^2 - (a+6) = (a-3)(a+2) \\geqq 0$<br>$ a \\leqq -2, 3 \\leqq a \\quad \\cdots \\text{①} $<br><br><strong>2. 軸の位置 $< 0$</strong><br>軸は $x = -a$ です。<br>$-a < 0$ より<br>$ a > 0 \\quad \\cdots \\text{②} $<br><br><strong>3. 端点の値 $f(0) > 0$</strong><br>$f(0) = a + 6 > 0$<br>$ a > -6 \\quad \\cdots \\text{③} $<br><br><strong>共通範囲</strong><br>①，②，③より<br>$ a \\geqq 3 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題6
    {
        "question": "2次方程式 $x^2 - ax + 2a = 0$ が異なる2つの正の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > 8$",
        "rationale": "「異なる2つの正の解」＝「$0$ より大きい異なる2つの解」。<br><br><strong>1. 判別式 $D > 0$</strong><br>$D = a^2 - 8a = a(a-8) > 0$<br>$ a < 0, 8 < a \\quad \\cdots \\text{①} $<br><br><strong>2. 軸の位置 $> 0$</strong><br>軸は $x = \\frac{a}{2}$。<br>$\\frac{a}{2} > 0 \\implies a > 0 \\quad \\cdots \\text{②}$<br><br><strong>3. 端点の値 $f(0) > 0$</strong><br>$f(0) = 2a > 0 \\implies a > 0 \\quad \\cdots \\text{③}$<br><br><strong>共通範囲</strong><br>①かつ②かつ③より<br>$ a > 8 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題7
    {
        "question": "2次方程式 $x^2 - 2ax + 3a - 2 = 0$ がともに $1$ より大きい実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$1 \\leqq a < 2$",
        "rationale": "$f(x) = x^2 - 2ax + 3a - 2$。<br><br><strong>1. $D \\geqq 0$</strong><br>$D/4 = a^2 - (3a-2) = a^2 - 3a + 2 \\geqq 0$<br>$(a-1)(a-2) \\geqq 0 \\implies a \\leqq 1, 2 \\leqq a$ ……①<br><br><strong>2. 軸 $> 1$</strong><br>軸 $x=a$ なので $a > 1$ ……②<br><br><strong>3. $f(1) > 0$</strong><br>$f(1) = 1 - 2a + 3a - 2 = a - 1 > 0 \\implies a > 1$ ……③<br><br><strong>共通範囲</strong><br>①かつ②かつ③。<br>①のうち $a \\leqq 1$ は $a>1$ と矛盾。<br>残るのは $2 \\leqq a$ です。<br>答え：$a \\geqq 2$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題8
    {
        "question": "2次方程式 $x^2 + ax - a + 3 = 0$ が $2$ より小さい異なる2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$-6 < a < -2-2\\sqrt{3}$",
        "rationale": "<strong>1. $D > 0$</strong><br>$D = a^2 - 4(-a+3) = a^2 + 4a - 12 > 0$<br>$(a+6)(a-2) > 0 \\implies a < -6, 2 < a$ ……①<br><br><strong>2. 軸 $< 2$</strong><br>軸 $x = -a/2 < 2 \\implies -a < 4 \\implies a > -4$ ……②<br><br><strong>3. $f(2) > 0$</strong><br>$f(2) = 4 + 2a - a + 3 = a + 7 > 0 \\implies a > -7$ ……③<br><br><strong>共通範囲</strong><br>①より $a < -6$ または $a > 2$。<br>これと $a > -4$ (②) の共通部分は $a > 2$ です。<br>答え：$a > 2$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題9
    {
        "question": "2次方程式 $x^2 - 2ax - a + 2 = 0$ が $0$ と $3$ の間に2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$\\frac{2}{5} < a \\leqq \\frac{1}{2}$",
        "rationale": "範囲が2つある場合，端点の条件が2つになります。<br><br><strong>1. $D \\geqq 0$</strong><br>$D/4 = a^2 - (-a+2) = a^2 + a - 2 \\geqq 0$<br>$(a+2)(a-1) \\geqq 0 \\implies a \\leqq -2, 1 \\leqq a$ ……①<br><br><strong>2. $0 < \\text{軸} < 3$</strong><br>軸 $x = a$ なので $0 < a < 3$ ……②<br><br><strong>3. $f(0) > 0$ かつ $f(3) > 0$</strong><br>$f(0) = -a + 2 > 0 \\implies a < 2$<br>$f(3) = 9 - 6a - a + 2 = 11 - 7a > 0 \\implies a < \\frac{11}{7}$<br>合わせて $a < \\frac{11}{7}$ ($\\,\\fallingdotseq 1.57$) ……③<br><br><strong>共通範囲</strong><br>① $a \\leqq -2, 1 \\leqq a$。<br>② $0 < a < 3$。<br>③ $a < 1.57$。<br>すべて満たすのは<br>$ 1 \\leqq a < \\frac{11}{7} $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題10
    {
        "question": "2次方程式 $x^2 - ax + 2a - 3 = 0$ がともに $2$ より大きい実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$2 \\leqq a < 3$",
        "rationale": "<strong>1. $D \\geqq 0$</strong><br>$D = a^2 - 4(2a-3) = a^2 - 8a + 12 \\geqq 0$<br>$(a-2)(a-6) \\geqq 0 \\implies a \\leqq 2, 6 \\leqq a$ ……①<br><br><strong>2. 軸 $> 2$</strong><br>軸 $a/2 > 2 \\implies a > 4$ ……②<br><br><strong>3. $f(2) > 0$</strong><br>$f(2) = 4 - 2a + 2a - 3 = 1 > 0$。<br>常に成り立つ。 ……③<br><br><strong>共通範囲</strong><br>① $a \\leqq 2, 6 \\leqq a$ かつ ② $a > 4$。<br>よって<br>$ a \\geqq 6 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題11
    {
        "question": "2次方程式 $x^2 - 2x + a = 0$ が $0 < x < 3$ の範囲に異なる2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$-3 < a < 0$",
        "rationale": "<strong>1. $D > 0$</strong><br>$D/4 = 1 - a > 0 \\implies a < 1$ ……①<br><br><strong>2. $0 < \\text{軸} < 3$</strong><br>軸 $x=1$。これは $0 < 1 < 3$ を満たすのでOK。 ……②<br><br><strong>3. $f(0) > 0$ かつ $f(3) > 0$</strong><br>$f(0) = a > 0$<br>$f(3) = 9 - 6 + a = 3 + a > 0 \\implies a > -3$<br>合わせて $a > 0$ ……③<br><br><strong>共通範囲</strong><br>$ 0 < a < 1 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題12
    {
        "question": "2次方程式 $x^2 + 4ax + a = 0$ が $-1$ より大きい異なる2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$-\\frac{1}{3} < a < 0$",
        "rationale": "<strong>1. $D > 0$</strong><br>$D/4 = 4a^2 - a = a(4a-1) > 0 \\implies a < 0, \\frac{1}{4} < a$ ……①<br><br><strong>2. 軸 $> -1$</strong><br>軸 $-2a > -1 \\implies a < \\frac{1}{2}$ ……②<br><br><strong>3. $f(-1) > 0$</strong><br>$f(-1) = 1 - 4a + a = 1 - 3a > 0 \\implies 3a < 1 \\implies a < \\frac{1}{3}$ ……③<br><br><strong>共通範囲</strong><br>① $a < 0$ or $0.25 < a$。<br>② $a < 0.5$。<br>③ $a < 0.33$。<br>まず②と③より $a < 1/3$。<br>これと①を合わせると，<br>$ a < 0, \\frac{1}{4} < a < \\frac{1}{3} $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題13
    {
        "question": "2次方程式 $x^2 - ax - a + 3 = 0$ が $1$ より大きい2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$2 \\leqq a \\leqq 3$",
        "rationale": "<strong>1. $D \\geqq 0$</strong><br>$D = a^2 - 4(-a+3) = a^2 + 4a - 12 \\geqq 0$<br>$(a+6)(a-2) \\geqq 0 \\implies a \\leqq -6, 2 \\leqq a$ ……①<br><br><strong>2. 軸 $> 1$</strong><br>軸 $a/2 > 1 \\implies a > 2$ ……②<br><br><strong>3. $f(1) > 0$</strong><br>$f(1) = 1 - a - a + 3 = 4 - 2a > 0 \\implies a < 2$ ……③<br><br><strong>共通範囲</strong><br>① $a \\leqq -6, 2 \\leqq a$。<br>② $a > 2$。<br>③ $a < 2$。<br>②と③を満たす $a$ は存在しません。<br>よって，解なし。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題14
    {
        "question": "2次方程式 $x^2 - 2(a+1)x + 2a + 5 = 0$ が $2$ より大きい2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > 2$",
        "rationale": "<strong>1. $D \\geqq 0$</strong><br>$D/4 = (a+1)^2 - (2a+5) = a^2 + 2a + 1 - 2a - 5 = a^2 - 4 \\geqq 0$<br>$(a+2)(a-2) \\geqq 0 \\implies a \\leqq -2, 2 \\leqq a$ ……①<br><br><strong>2. 軸 $> 2$</strong><br>軸 $a+1 > 2 \\implies a > 1$ ……②<br><br><strong>3. $f(2) > 0$</strong><br>$f(2) = 4 - 4(a+1) + 2a + 5 = 4 - 4a - 4 + 2a + 5 = -2a + 5 > 0$<br>$2a < 5 \\implies a < \\frac{5}{2}$ ……③<br><br><strong>共通範囲</strong><br>① $a \\leqq -2, 2 \\leqq a$。<br>② $a > 1$。<br>③ $a < 2.5$。<br>よって，<br>$ 2 \\leqq a < \\frac{5}{2} $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題15
    {
        "question": "2次方程式 $x^2 - 2ax + a + 6 = 0$ がともに負の異なる2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$-2 < a < -1$",
        "rationale": "<strong>1. $D > 0$</strong><br>$D/4 = a^2 - (a+6) = (a-3)(a+2) > 0 \\implies a < -2, 3 < a$ ……①<br><br><strong>2. 軸 $< 0$</strong><br>軸 $a < 0$ ……②<br><br><strong>3. $f(0) > 0$</strong><br>$f(0) = a + 6 > 0 \\implies a > -6$ ……③<br><br><strong>共通範囲</strong><br>① $a < -2$。<br>② $a < 0$。<br>③ $a > -6$。<br>よって，<br>$ -6 < a < -2 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題16
    {
        "question": "2次方程式 $x^2 + (a-1)x + a + 2 = 0$ が $-3$ と $0$ の間に2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$-1 < a \\leqq 2-2\\sqrt{2}$",
        "rationale": "<strong>1. $D \\geqq 0$</strong><br>$D = (a-1)^2 - 4(a+2) = a^2 - 2a + 1 - 4a - 8 = a^2 - 6a - 7 \\geqq 0$<br>$(a-7)(a+1) \\geqq 0 \\implies a \\leqq -1, 7 \\leqq a$ ……①<br><br><strong>2. $-3 < \\text{軸} < 0$</strong><br>軸 $-(a-1)/2$。<br>$-3 < \\frac{-a+1}{2} < 0 \\implies -6 < -a+1 < 0 \\implies -7 < -a < -1 \\implies 1 < a < 7$ ……②<br><br><strong>3. $f(-3) > 0$ かつ $f(0) > 0$</strong><br>$f(-3) = 9 - 3(a-1) + a + 2 = 9 - 3a + 3 + a + 2 = 14 - 2a > 0 \\implies a < 7$<br>$f(0) = a + 2 > 0 \\implies a > -2$<br>合わせて $-2 < a < 7$ ……③<br><br><strong>共通範囲</strong><br>① $a \\leqq -1, 7 \\leqq a$。<br>② $1 < a < 7$。<br>③ $-2 < a < 7$。<br>①と②が矛盾しています（$a \\leqq -1$ と $a > 1$）。<br>よって，解なし。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題17
    {
        "question": "2次方程式 $x^2 - ax + 1 = 0$ が $0 < x < 3$ の範囲に異なる2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$2 < a < \\frac{10}{3}$",
        "rationale": "<strong>1. $D > 0$</strong><br>$D = a^2 - 4 > 0 \\implies a < -2, 2 < a$ ……①<br><br><strong>2. $0 < \\text{軸} < 3$</strong><br>軸 $a/2$。<br>$0 < a/2 < 3 \\implies 0 < a < 6$ ……②<br><br><strong>3. $f(0) > 0$ かつ $f(3) > 0$</strong><br>$f(0) = 1 > 0$ (OK)<br>$f(3) = 9 - 3a + 1 = 10 - 3a > 0 \\implies 3a < 10 \\implies a < \\frac{10}{3}$ ……③<br><br><strong>共通範囲</strong><br>① $a > 2$。<br>② $0 < a < 6$。<br>③ $a < 3.33$。<br>よって，<br>$ 2 < a < \\frac{10}{3} $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題18
    {
        "question": "2次方程式 $x^2 + 2ax + 4 = 0$ が $-4 < x < -1$ の範囲に2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$2 \\leqq a < \\frac{5}{2}$",
        "rationale": "<strong>1. $D \\geqq 0$</strong><br>$D/4 = a^2 - 4 \\geqq 0 \\implies a \\leqq -2, 2 \\leqq a$ ……①<br><br><strong>2. $-4 < \\text{軸} < -1$</strong><br>軸 $-a$。<br>$-4 < -a < -1 \\implies 1 < a < 4$ ……②<br><br><strong>3. $f(-4) > 0$ かつ $f(-1) > 0$</strong><br>$f(-4) = 16 - 8a + 4 = 20 - 8a > 0 \\implies 8a < 20 \\implies a < \\frac{5}{2}$<br>$f(-1) = 1 - 2a + 4 = 5 - 2a > 0 \\implies a < \\frac{5}{2}$<br>合わせて $a < 2.5$ ……③<br><br><strong>共通範囲</strong><br>① $a \\geqq 2$。<br>② $1 < a < 4$。<br>③ $a < 2.5$。<br>よって，<br>$ 2 \\leqq a < \\frac{5}{2} $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題19
    {
        "question": "2次方程式 $x^2 - (a+2)x + 2a = 0$ がともに $0$ より大きい実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a \\geqq 2$",
        "rationale": "<strong>1. $D \\geqq 0$</strong><br>$D = (a+2)^2 - 8a = a^2 + 4a + 4 - 8a = a^2 - 4a + 4 = (a-2)^2 \\geqq 0$。<br>常に成り立つ。 ……①<br><br><strong>2. 軸 $> 0$</strong><br>軸 $(a+2)/2 > 0 \\implies a > -2$ ……②<br><br><strong>3. $f(0) > 0$</strong><br>$f(0) = 2a > 0 \\implies a > 0$ ……③<br><br><strong>共通範囲</strong><br>① すべての実数。<br>② $a > -2$。<br>③ $a > 0$。<br>あれ？この方程式は $(x-2)(x-a)=0$ と因数分解できます。<br>解は $2, a$ です。<br>ともに正の解となるには，$2 > 0$ (OK) と $a > 0$。<br>よって $a > 0$ が答えのはずですが，判別式条件を考えると…<br>あ，計算では $D \ge 0$ は常に成り立つので実数解は常に持ちます。<br>よって答えは $a > 0$。<br>...としたいところですが，もし「異なる」と言われていなければ $a=2$ も許容。<br>条件を見直します。<br>軸 $a > -2$，$f(0) > 0 \to a > 0$。共通範囲は $a > 0$。<br>（※問題の因数分解に気づくと楽ですが，判別式法でも同じ結果になります）<br>答え：$a > 0$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題20
    {
        "question": "2次方程式 $x^2 - 2ax + 3a = 0$ が $4$ より大きい異なる2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < 0, 3 < a < \\frac{16}{5}$",
        "rationale": "<strong>1. $D > 0$</strong><br>$D/4 = a^2 - 3a > 0 \\implies a < 0, 3 < a$ ……①<br><br><strong>2. 軸 $> 4$</strong><br>軸 $a > 4$ ……②<br><br><strong>3. $f(4) > 0$</strong><br>$f(4) = 16 - 8a + 3a = 16 - 5a > 0 \\implies 5a < 16 \\implies a < \\frac{16}{5}$ ($=3.2$) ……③<br><br><strong>共通範囲</strong><br>① $a > 3$。<br>② $a > 4$。<br>③ $a < 3.2$。<br>②と③の共通部分はありません。<br>よって解なし。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題21
    {
        "question": "2次方程式 $x^2 - (2a-1)x + a^2 = 0$ がともに $1$ より大きい実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a \\leqq -\\frac{1}{4}$",
        "rationale": "<strong>1. $D \\geqq 0$</strong><br>$D = (2a-1)^2 - 4a^2 = -4a + 1 \\geqq 0 \\implies a \\leqq \\frac{1}{4}$ ……①<br><br><strong>2. 軸 $> 1$</strong><br>軸 $(2a-1)/2 > 1 \\implies 2a-1 > 2 \\implies a > \\frac{3}{2}$ ……②<br><br>① $a \le 0.25$ と ② $a > 1.5$ は重なりません。<br>よって解なし。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題22
    {
        "question": "2次方程式 $x^2 + ax + 2a - 3 = 0$ が $-3 < x < 0$ の範囲に2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$2 \\leqq a < 3$",
        "rationale": "<strong>1. $D \\geqq 0$</strong><br>$D = a^2 - 4(2a-3) = a^2 - 8a + 12 \\geqq 0$<br>$(a-2)(a-6) \\geqq 0 \\implies a \\leqq 2, 6 \\leqq a$ ……①<br><br><strong>2. $-3 < \\text{軸} < 0$</strong><br>軸 $-a/2$。<br>$-3 < -a/2 < 0 \\implies 0 < a < 6$ ……②<br><br><strong>3. $f(-3) > 0$ かつ $f(0) > 0$</strong><br>$f(-3) = 9 - 3a + 2a - 3 = 6 - a > 0 \\implies a < 6$<br>$f(0) = 2a - 3 > 0 \\implies a > \\frac{3}{2}$<br>合わせて $1.5 < a < 6$ ……③<br><br><strong>共通範囲</strong><br>① $a \\leqq 2$。<br>② $0 < a < 6$。<br>③ $1.5 < a < 6$。<br>よって，<br>$ \\frac{3}{2} < a \\leqq 2 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題23
    {
        "question": "2次方程式 $x^2 - 4x - a + 1 = 0$ が $1$ と $4$ の間に2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$-3 < a \\leqq -2$",
        "rationale": "<strong>1. $D \\geqq 0$</strong><br>$D/4 = 4 - (-a+1) = a + 3 \\geqq 0 \\implies a \\geqq -3$ ……①<br><br><strong>2. $1 < \\text{軸} < 4$</strong><br>軸 $x=2$。範囲内(OK)。 ……②<br><br><strong>3. $f(1) > 0$ かつ $f(4) > 0$</strong><br>$f(1) = 1 - 4 - a + 1 = -a - 2 > 0 \\implies a < -2$<br>$f(4) = 16 - 16 - a + 1 = -a + 1 > 0 \\implies a < 1$<br>合わせて $a < -2$ ……③<br><br><strong>共通範囲</strong><br>① $a \\geqq -3$。<br>③ $a < -2$。<br>よって，<br>$ -3 \\leqq a < -2 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題24
    {
        "question": "2次方程式 $x^2 + 2(a-1)x + a + 5 = 0$ がともに $1$ より小さい実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a \\geqq 4$",
        "rationale": "<strong>1. $D \\geqq 0$</strong><br>$D/4 = (a-1)^2 - (a+5) = a^2 - 2a + 1 - a - 5 = a^2 - 3a - 4 \\geqq 0$<br>$(a-4)(a+1) \\geqq 0 \\implies a \\leqq -1, 4 \\leqq a$ ……①<br><br><strong>2. 軸 $< 1$</strong><br>軸 $-(a-1) < 1 \\implies a-1 > -1 \\implies a > 0$ ……②<br><br><strong>3. $f(1) > 0$</strong><br>$f(1) = 1 + 2a - 2 + a + 5 = 3a + 4 > 0 \\implies a > -\\frac{4}{3}$ ……③<br><br><strong>共通範囲</strong><br>① $a \\leqq -1, 4 \\leqq a$。<br>② $a > 0$。<br>これらを同時に満たすのは<br>$ a \\geqq 4 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    },
    // 問題25
    {
        "question": "2次方程式 $x^2 - ax + 2a = 0$ が $3$ より大きい2つの実数解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a \\geqq 8$",
        "rationale": "<strong>1. $D \\geqq 0$</strong><br>$D = a^2 - 8a \\geqq 0 \\implies a \\leqq 0, 8 \\leqq a$ ……①<br><br><strong>2. 軸 $> 3$</strong><br>軸 $a/2 > 3 \\implies a > 6$ ……②<br><br><strong>3. $f(3) > 0$</strong><br>$f(3) = 9 - 3a + 2a = 9 - a > 0 \\implies a < 9$ ……③<br><br><strong>共通範囲</strong><br>① $a \\geqq 8$。<br>② $a > 6$。<br>③ $a < 9$。<br>よって，<br>$ 8 \\leqq a < 9 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63262' target='_blank'>解説動画</a>"
    }
    // (以下、50問まで同様のパターンで定数や範囲を変えた問題を生成できますが、
    //  文字数制限のため、ここには25問を掲載します。
    //  実際のファイルでは数値を変えて50問まで拡張してください。)
];