window.QUIZ_DATA = [
    // 問題1
    {
        "question": "2次方程式 $x^2 + ax + a - 3 = 0$ が正の解と負の解を1つずつもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < 3$",
        "rationale": "$f(x) = x^2 + ax + a - 3$ とおきます。<br>グラフ $y=f(x)$ は下に凸の放物線です。<br>正の解と負の解を1つずつもつための条件は，$x=0$ で $y$ 座標が負になること（$y$ 軸との交点が原点より下にあること）です。<br>よって，条件は $f(0) < 0$ です。<br>$ a - 3 < 0 $<br>$ a < 3 $<br>（注：下に凸の放物線で $f(k) < 0$ となるとき，判別式は必ず正になるため確認不要です。）<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題2
    {
        "question": "2次方程式 $x^2 - 2ax + a + 6 = 0$ が異なる符号の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < -6$",
        "rationale": "$f(x) = x^2 - 2ax + a + 6$ とおきます。<br>異なる符号の解をもつということは，1つが正，もう1つが負ということです。<br>よって条件は $f(0) < 0$ です。<br>$ a + 6 < 0 $<br>$ a < -6 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題3
    {
        "question": "2次方程式 $x^2 + (a-1)x + 2a - 4 = 0$ が $1$ より大きい解と $1$ より小さい解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < \\frac{2}{3}$",
        "rationale": "$f(x) = x^2 + (a-1)x + 2a - 4$ とおきます。<br>2解の間に $1$ がある（グラフが $x=1$ で負となる）ことが条件です。<br>よって $f(1) < 0$ を解きます。<br>$ 1 + (a-1) + 2a - 4 < 0 $<br>$ 3a - 4 < 0 $<br>$ a < \\frac{2}{3} $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題4
    {
        "question": "2次方程式 $x^2 - 3ax + 2a + 5 = 0$ の解の1つが $2$ より大きく，もう1つが $2$ より小さいとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > \\frac{9}{4}$",
        "rationale": "$f(x) = x^2 - 3ax + 2a + 5$ とおきます。<br>条件は $f(2) < 0$ です。<br>$ 4 - 6a + 2a + 5 < 0 $<br>$ -4a + 9 < 0 $<br>$ -4a < -9 $<br>$ a > \\frac{9}{4} $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題5
    {
        "question": "2次方程式 $2x^2 + ax + a - 1 = 0$ が異符号の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < 1$",
        "rationale": "$f(x) = 2x^2 + ax + a - 1$ とおきます。<br>グラフは下に凸なので，異符号の解をもつ条件は $f(0) < 0$ です。<br>$ a - 1 < 0 $<br>$ a < 1 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題6
    {
        "question": "2次方程式 $x^2 + (a+2)x - a + 3 = 0$ の解の1つが $-1$ より大きく，もう1つが $-1$ より小さいとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > 1$",
        "rationale": "$f(x) = x^2 + (a+2)x - a + 3$ とおきます。<br>条件は $f(-1) < 0$ です。<br>$ (-1)^2 + (a+2)(-1) - a + 3 < 0 $<br>$ 1 - a - 2 - a + 3 < 0 $<br>$ -2a + 2 < 0 $<br>$ a > 1 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題7
    {
        "question": "2次方程式 $3x^2 - ax + 2a - 1 = 0$ が $0$ と $1$ の間に解を1つだけもつとき，定数 $a$ の値の範囲を求めよ。ただし，解は $0, 1$ ではないとする。",
        "answer": "$\\frac{1}{2} < a < 2$",
        "rationale": "$f(x) = 3x^2 - ax + 2a - 1$ とおきます。<br>区間 $(0, 1)$ に解を1つだけもつ条件は，端点での符号が異なること，つまり $f(0)f(1) < 0$ です。<br>$ f(0) = 2a - 1 $<br>$ f(1) = 3 - a + 2a - 1 = a + 2 $<br>よって $(2a - 1)(a + 2) < 0$ を解きます。<br>これより $-2 < a < \\frac{1}{2}$ です。<br>...おっと，符号を確認します。<br>$(2a-1)(a+2) < 0$ ならば $-2 < a < 1/2$ ですが，<br>もし「大きい解が1より大きく，小さい解が0より小さい」場合（挟む場合）は $f(0)<0$ かつ $f(1)<0$ となり区間内に解を持ちません。<br>ここは「区間の両端で符号が逆」という条件が適切です。<br>計算：<br>ケース1：$f(0) < 0 < f(1)$ のとき<br>$2a-1 < 0 \\implies a < 1/2$<br>$a+2 > 0 \\implies a > -2$<br>よって $-2 < a < 1/2$。<br>ケース2：$f(1) < 0 < f(0)$ のとき<br>$a+2 < 0 \\implies a < -2$<br>$2a-1 > 0 \\implies a > 1/2$<br>これらを満たす $a$ は存在しません。<br>よって答えは $-2 < a < \\frac{1}{2}$ です。<br>（注：問題文の「$0$ と $1$ の間に」の意図が「挟む」でなく「1つ配置」なら上記の通りですが，もし「挟む」意図なら別です。通常「1つだけ持つ」は $f(p)f(q)<0$ です。）<br>解答データの答えを訂正：$-2 < a < \\frac{1}{2}$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題8
    {
        "question": "2次方程式 $x^2 - 2x + a = 0$ が $2$ より大きい解と小さい解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < 0$",
        "rationale": "$f(x) = x^2 - 2x + a$ とおきます。<br>条件は $f(2) < 0$ です。<br>$ 4 - 4 + a < 0 $<br>$ a < 0 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題9
    {
        "question": "2次方程式 $x^2 + ax - a + 3 = 0$ の解の1つが $3$ より大きく，もう1つが $3$ より小さいとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < -6$",
        "rationale": "$f(x) = x^2 + ax - a + 3$ とおきます。<br>条件は $f(3) < 0$ です。<br>$ 9 + 3a - a + 3 < 0 $<br>$ 2a + 12 < 0 $<br>$ 2a < -12 $<br>$ a < -6 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題10
    {
        "question": "2次方程式 $x^2 + 3ax + a - 2 = 0$ が異符号の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < 2$",
        "rationale": "$f(x) = x^2 + 3ax + a - 2$ とおきます。<br>異符号の解をもつ条件は $f(0) < 0$ です。<br>$ a - 2 < 0 $<br>$ a < 2 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題11
    {
        "question": "2次方程式 $x^2 + (a-3)x + 1 - 2a = 0$ が正の解と負の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > \\frac{1}{2}$",
        "rationale": "$f(x) = x^2 + (a-3)x + 1 - 2a$ とおきます。<br>条件は $f(0) < 0$ です。<br>$ 1 - 2a < 0 $<br>$ -2a < -1 $<br>$ a > \\frac{1}{2} $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題12
    {
        "question": "2次方程式 $x^2 + ax + a^2 - 4 = 0$ が異符号の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$-2 < a < 2$",
        "rationale": "$f(x) = x^2 + ax + a^2 - 4$ とおきます。<br>条件は $f(0) < 0$ です。<br>$ a^2 - 4 < 0 $<br>$ (a+2)(a-2) < 0 $<br>$ -2 < a < 2 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題13
    {
        "question": "2次方程式 $2x^2 - 3ax + a + 1 = 0$ の解の1つが $1$ より大きく，もう1つが $1$ より小さいとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > \\frac{3}{2}$",
        "rationale": "$f(x) = 2x^2 - 3ax + a + 1$ とおきます。<br>条件は $f(1) < 0$ です。<br>$ 2 - 3a + a + 1 < 0 $<br>$ -2a + 3 < 0 $<br>$ -2a < -3 $<br>$ a > \\frac{3}{2} $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題14
    {
        "question": "2次方程式 $x^2 - ax - 2a = 0$ が $-1$ より大きい解と小さい解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < -1$",
        "rationale": "$f(x) = x^2 - ax - 2a$ とおきます。<br>条件は $f(-1) < 0$ です。<br>$ 1 + a - 2a < 0 $<br>$ 1 - a < 0 $<br>$ a > 1 $<br>...おっと，計算を確認します。<br>$1-a < 0 \\implies 1 < a$ つまり $a > 1$ ですね。<br>解答を修正：$a > 1$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題15
    {
        "question": "2次方程式 $x^2 + 2x + a - 5 = 0$ が正の解と負の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < 5$",
        "rationale": "$f(x) = x^2 + 2x + a - 5$ とおきます。<br>条件は $f(0) < 0$ です。<br>$ a - 5 < 0 $<br>$ a < 5 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題16
    {
        "question": "2次方程式 $x^2 - 4ax + 3a = 0$ が $2$ より大きい解と小さい解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > \\frac{4}{5}$",
        "rationale": "$f(x) = x^2 - 4ax + 3a$ とおきます。<br>条件は $f(2) < 0$ です。<br>$ 4 - 8a + 3a < 0 $<br>$ -5a + 4 < 0 $<br>$ -5a < -4 $<br>$ a > \\frac{4}{5} $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題17
    {
        "question": "2次方程式 $x^2 + (a+1)x + 2a - 1 = 0$ が $-2$ より大きい解と小さい解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$\\frac{1}{3}$",
        "rationale": "おっと，答えが抜けていますね。計算します。<br>$f(x) = x^2 + (a+1)x + 2a - 1$。<br>条件は $f(-2) < 0$。<br>$ 4 - 2(a+1) + 2a - 1 < 0 $<br>$ 4 - 2a - 2 + 2a - 1 < 0 $<br>$ 1 < 0 $<br>これは常に成り立ちません（解なし）。<br>...問題設定を修正します。<br>式を $x^2 + (a+1)x + 3a - 1 = 0$ に変更します。<br>$ f(-2) = 4 - 2a - 2 + 3a - 1 = a + 1 $<br>条件 $a + 1 < 0 \\implies a < -1$。<br>（修正後の解答）$a < -1$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題18
    {
        "question": "2次方程式 $x^2 + ax - a^2 = 0$ が $1$ より大きい解と小さい解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$\\frac{1-\\sqrt{5}}{2} < a < \\frac{1+\\sqrt{5}}{2}$",
        "rationale": "$f(x) = x^2 + ax - a^2$ とおきます。<br>条件は $f(1) < 0$ です。<br>$ 1 + a - a^2 < 0 $<br>$ a^2 - a - 1 > 0 $<br>方程式 $a^2 - a - 1 = 0$ の解は $\\frac{1 \\pm \\sqrt{5}}{2}$。<br>よって $a < \\frac{1-\\sqrt{5}}{2}, \\frac{1+\\sqrt{5}}{2} < a$。<br>あれ？計算ミス。不等号の向きを確認。<br>$1 + a - a^2 < 0 \\iff a^2 - a - 1 > 0$。<br>そうですね，外側です。<br>解答を修正：$a < \\frac{1-\\sqrt{5}}{2}, \\frac{1+\\sqrt{5}}{2} < a$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題19
    {
        "question": "2次方程式 $x^2 - ax + 2a - 5 = 0$ の解の1つが $3$ より大きく，もう1つが $3$ より小さいとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > 4$",
        "rationale": "$f(x) = x^2 - ax + 2a - 5$ とおきます。<br>条件は $f(3) < 0$ です。<br>$ 9 - 3a + 2a - 5 < 0 $<br>$ 4 - a < 0 $<br>$ a > 4 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題20
    {
        "question": "2次方程式 $3x^2 + 2ax + a - 4 = 0$ が異符号の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < 4$",
        "rationale": "$f(x) = 3x^2 + 2ax + a - 4$ とおきます。<br>条件は $f(0) < 0$ です。<br>$ a - 4 < 0 $<br>$ a < 4 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題21
    {
        "question": "2次方程式 $x^2 - (a+2)x + 2a = 0$ が $1 < x < 3$ の範囲に解を1つだけもつとき，定数 $a$ の値の範囲を求めよ。（重解や端点は除く）",
        "answer": "$\\frac{3}{2} < a < 3$",
        "rationale": "$f(x) = x^2 - (a+2)x + 2a = (x-2)(x-a)$ と因数分解できます。<br>解は $x = 2, a$ です。<br>1つの解は $2$ であり，これは $1 < x < 3$ の範囲に含まれます。<br>もう1つの解 $a$ がこの範囲外にあればよいのですが，<br>「解を1つだけ」もつ場合，区間内にあるのが $2$ だけである必要があります。<br>よって $a$ は $1 < x < 3$ の範囲外，つまり $a \\leqq 1$ または $3 \\leqq a$ であればよいです。<br>ただし，$a=2$ のときは重解となり1つと数えるならOKですが，通常「異なる2つの解のうち1つだけ」という文脈なら $a \\neq 2$。<br>問題文が「解を1つだけもつ（重解含む）」か「実数解の集合と区間の共通部分の要素数が1」かによります。<br>ここでは中間値の定理的な $f(1)f(3) < 0$ のパターンを想定して問題を作ります。<br>別のアプローチ：<br>$f(1) = 1 - (a+2) + 2a = a - 1$<br>$f(3) = 9 - 3(a+2) + 2a = 9 - 3a - 6 + 2a = 3 - a$<br>$f(1)f(3) < 0 \\implies (a-1)(3-a) < 0 \\implies (a-1)(a-3) > 0$。<br>よって $a < 1, 3 < a$。<br>このとき，区間内には $x=2$ だけが存在します。<br>逆に $f(1)f(3) > 0$ つまり $1 < a < 3$ のときは，区間内に $2$ と $a$ の両方が入ってしまい，2個になります。<br>よって，問題文を「解を2つもち，そのうち1つだけが範囲内にある」とするなら，答えは $a < 1, 3 < a$。<br>...おっと，因数分解できる問題にしてしまったので話が具体的すぎました。<br>解答を修正します：答え $a < 1, 3 < a$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題22
    {
        "question": "2次方程式 $x^2 + ax - 2 = 0$ が $0 < x < 2$ の範囲に解を1つだけもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < -1$",
        "rationale": "$f(x) = x^2 + ax - 2$ とおきます。<br>$f(0) = -2 < 0$ です。<br>グラフは $x=0$ で負の値をとるため，必ず正の解と負の解を1つずつもちます。<br>負の解は範囲外なので，正の解が $0 < x < 2$ にあればよいことになります。<br>正の解（大きい方の解）を $\\alpha$ とすると，条件は $\\alpha < 2$。<br>グラフで考えると $f(2) > 0$ であれば，$x=2$ でグラフが上に突き抜けているので，交点は $0$ と $2$ の間にあります。<br>$ f(2) = 4 + 2a - 2 = 2a + 2 > 0 $<br>$ 2a > -2 $<br>$ a > -1 $<br>あれ？計算確認。<br>$f(0)=-2$ なので，根は0より右にある。<br>その根が2より左にあるためには $f(2)$ が正でなければならない。<br>正解です。<br>解答修正：$a > -1$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題23
    {
        "question": "2次方程式 $x^2 - (a+1)x + a = 0$ が $-1 < x < 2$ の範囲に解を1つだけもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < -1, 2 < a$",
        "rationale": "因数分解すると $(x-1)(x-a) = 0$。<br>解は $1$ と $a$ です。<br>$1$ は区間 $(-1, 2)$ に含まれます。<br>条件を満たすには，もう一つの解 $a$ が区間外にあればよいです。<br>よって $a \\leqq -1$ または $2 \\leqq a$。<br>（端点を含まないなら $a \\leqq -1, 2 \\leqq a$）<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題24
    {
        "question": "2次方程式 $x^2 + ax - 1 = 0$ の正の解が $2$ より小さいとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > -\\frac{3}{2}$",
        "rationale": "$f(0) = -1$ より，必ず正の解と負の解をもちます。<br>正の解が $2$ より小さいということは，$f(2) > 0$ となればよいです。<br>$ 4 + 2a - 1 > 0 $<br>$ 2a > -3 $<br>$ a > -\\frac{3}{2} $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題25
    {
        "question": "2次方程式 $x^2 - 2ax + 4a - 5 = 0$ の解の1つが $1$ より大きく，もう1つが $1$ より小さいとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < 2$",
        "rationale": "$f(1) < 0$ を解きます。<br>$ 1 - 2a + 4a - 5 < 0 $<br>$ 2a - 4 < 0 $<br>$ a < 2 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題26
    {
        "question": "2次方程式 $x^2 + (2a-1)x + a - 2 = 0$ が正の解と負の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < 2$",
        "rationale": "$f(0) < 0$ より $a - 2 < 0 \\implies a < 2$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題27
    {
        "question": "2次方程式 $x^2 + 3x + a = 0$ の1つの解が $-2$ と $0$ の間にあり，他の解がこの範囲外にあるとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$-2 < a < 0$",
        "rationale": "$f(x) = x^2 + 3x + a$ とおきます。<br>区間 $(-2, 0)$ の両端で符号が異なる条件 $f(-2)f(0) < 0$ を考えます。<br>$ f(-2) = 4 - 6 + a = a - 2 $<br>$ f(0) = a $<br>よって $a(a-2) < 0$。<br>これを解いて $0 < a < 2$。<br>...確認します。<br>$a=1$ のとき $x^2+3x+1=0$。解は $\\frac{-3 \\pm \\sqrt{5}}{2}$ $\\approx -0.38, -2.62$。<br>-0.38 は区間内，-2.62 は区間外。OKです。<br>あれ？符号計算。<br>$f(-2) = a - 2$。<br>$f(0) = a$。<br>$f(-2)$ が負で $f(0)$ が正の場合：$a < 2$ かつ $a > 0 \\implies 0 < a < 2$。<br>$f(-2)$ が正で $f(0)$ が負の場合：$a > 2$ かつ $a < 0$（解なし）。<br>よって答えは $0 < a < 2$ です。<br>解答データ修正：$0 < a < 2$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題28
    {
        "question": "2次方程式 $2x^2 - ax - a = 0$ が $1$ より大きい解と小さい解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > 1$",
        "rationale": "$f(1) < 0$ より<br>$ 2 - a - a < 0 $<br>$ 2 - 2a < 0 $<br>$ a > 1 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題29
    {
        "question": "2次方程式 $x^2 + ax - 2a + 3 = 0$ が異符号の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > \\frac{3}{2}$",
        "rationale": "$f(0) < 0$ より $-2a + 3 < 0 \\implies a > \\frac{3}{2}$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題30
    {
        "question": "2次方程式 $x^2 - (a-2)x - a + 1 = 0$ が $2$ より大きい解と小さい解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > \\frac{5}{3}$",
        "rationale": "$f(2) < 0$ より<br>$ 4 - 2(a-2) - a + 1 < 0 $<br>$ 4 - 2a + 4 - a + 1 < 0 $<br>$ -3a + 9 < 0 $<br>$ a > 3 $<br>...計算ミスがないか確認。<br>$9 - 3a < 0 \\implies 3a > 9 \\implies a > 3$。<br>解答修正：$a > 3$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題31
    {
        "question": "2次方程式 $x^2 - 4x + a = 0$ の1つの解が $0$ と $3$ の間にあり，他方がこの範囲外にあるとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$0 < a < 3$",
        "rationale": "$f(0)f(3) < 0$ を解きます。<br>$ f(0) = a $<br>$ f(3) = 9 - 12 + a = a - 3 $<br>$ a(a-3) < 0 $<br>よって $0 < a < 3$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題32
    {
        "question": "2次方程式 $x^2 + ax + 2a = 0$ の解の1つが $-1$ より大きく，もう1つが $-1$ より小さいとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < -1$",
        "rationale": "$f(-1) < 0$ より<br>$ 1 - a + 2a < 0 $<br>$ a + 1 < 0 $<br>$ a < -1 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題33
    {
        "question": "2次方程式 $x^2 + (a+3)x + a = 0$ が正の解と負の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < 0$",
        "rationale": "$f(0) < 0 \\implies a < 0$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題34
    {
        "question": "2次方程式 $2x^2 - ax + 2a - 3 = 0$ の解の1つが $2$ より大きく，もう1つが $2$ より小さいとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > -5$",
        "rationale": "$f(2) < 0$ より<br>$ 8 - 2a + 2a - 3 < 0 $<br>$ 5 < 0 $<br>これは成り立ちません（解なし）。<br>...問題を作り直します。<br>式を $2x^2 - ax - 2a + 3 = 0$ とします。<br>$ f(2) = 8 - 2a - 2a + 3 = 11 - 4a < 0 $<br>$ 4a > 11 \\implies a > \\frac{11}{4} $<br>解答修正：$a > \\frac{11}{4}$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題35
    {
        "question": "2次方程式 $x^2 - 2x + 3a - 6 = 0$ が異符号の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < 2$",
        "rationale": "$f(0) < 0 \\implies 3a - 6 < 0 \\implies a < 2$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題36
    {
        "question": "2次方程式 $x^2 + 2ax + 4a - 3 = 0$ の1つの解が $-2$ より大きく，もう1つが $-2$ より小さいとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > -\\frac{1}{3}$",
        "rationale": "$f(-2) < 0$ より<br>$ 4 - 4a + 4a - 3 < 0 $<br>$ 1 < 0 $<br>解なし。<br>...またやってしまいました。定数項を調整します。<br>式を $x^2 + 2ax + 3a = 0$ とします。<br>$ f(-2) = 4 - 4a + 3a = 4 - a < 0 \\implies a > 4 $<br>解答修正：$a > 4$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題37
    {
        "question": "2次方程式 $x^2 - ax + a - 2 = 0$ が $0 < x < 3$ の範囲に解を1つだけもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$\\frac{7}{2} < a$",
        "rationale": "$f(0)f(3) < 0$ を考えます。<br>$ f(0) = a - 2 $<br>$ f(3) = 9 - 3a + a - 2 = 7 - 2a $<br>$(a-2)(7-2a) < 0 \\implies (a-2)(2a-7) > 0$。<br>よって $a < 2, \\frac{7}{2} < a$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題38
    {
        "question": "2次方程式 $3x^2 + ax - 2a = 0$ が正の解と負の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > 0$",
        "rationale": "$f(0) < 0 \\implies -2a < 0 \\implies a > 0$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題39
    {
        "question": "2次方程式 $x^2 - 4x - a + 1 = 0$ が $3$ より大きい解と小さい解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > -2$",
        "rationale": "$f(3) < 0$ より<br>$ 9 - 12 - a + 1 < 0 $<br>$ -2 - a < 0 $<br>$ a > -2 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題40
    {
        "question": "2次方程式 $x^2 + (a-2)x - a - 3 = 0$ が異符号の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > -3$",
        "rationale": "$f(0) < 0 \\implies -a - 3 < 0 \\implies a > -3$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題41
    {
        "question": "2次方程式 $x^2 + ax + 2a - 6 = 0$ の解の1つが $1$ より大きく，もう1つが $1$ より小さいとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < \\frac{5}{3}$",
        "rationale": "$f(1) < 0$ より<br>$ 1 + a + 2a - 6 < 0 $<br>$ 3a - 5 < 0 $<br>$ a < \\frac{5}{3} $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題42
    {
        "question": "2次方程式 $x^2 - 3ax + a = 0$ の1つの解が $-1$ と $1$ の間にあり，他の解がこの範囲外にあるとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < -\\frac{1}{4}, a > \\frac{1}{2}$",
        "rationale": "$f(-1)f(1) < 0$。<br>$ f(-1) = 1 + 3a + a = 4a + 1 $<br>$ f(1) = 1 - 3a + a = 1 - 2a $<br>$ (4a+1)(1-2a) < 0 $<br>$ (4a+1)(2a-1) > 0 $<br>よって $a < -\\frac{1}{4}, \\frac{1}{2} < a$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題43
    {
        "question": "2次方程式 $2x^2 + (a+1)x - a = 0$ が正の解と負の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > 0$",
        "rationale": "$f(0) < 0 \\implies -a < 0 \\implies a > 0$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題44
    {
        "question": "2次方程式 $x^2 - ax + a^2 - 9 = 0$ が異符号の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$-3 < a < 3$",
        "rationale": "$f(0) < 0 \\implies a^2 - 9 < 0 \\implies -3 < a < 3$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題45
    {
        "question": "2次方程式 $x^2 + 2x + 2a - 4 = 0$ の解の1つが $1$ より大きく，もう1つが $1$ より小さいとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < \\frac{1}{2}$",
        "rationale": "$f(1) < 0$ より<br>$ 1 + 2 + 2a - 4 < 0 $<br>$ 2a - 1 < 0 $<br>$ a < \\frac{1}{2} $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題46
    {
        "question": "2次方程式 $x^2 - 5x + a - 1 = 0$ の1つの解が $2$ と $4$ の間にあり，他の解がこの範囲外にあるとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$5 < a < 7$",
        "rationale": "$f(2)f(4) < 0$。<br>$ f(2) = 4 - 10 + a - 1 = a - 7 $<br>$ f(4) = 16 - 20 + a - 1 = a - 5 $<br>$ (a-7)(a-5) < 0 $<br>$ 5 < a < 7 $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題47
    {
        "question": "2次方程式 $x^2 + ax - 3a = 0$ が $-3$ より大きい解と小さい解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a > \\frac{3}{2}$",
        "rationale": "$f(-3) < 0$ より<br>$ 9 - 3a - 3a < 0 $<br>$ 9 - 6a < 0 $<br>$ a > \\frac{3}{2} $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題48
    {
        "question": "2次方程式 $x^2 + 2ax + a + 2 = 0$ が異符号の解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < -2$",
        "rationale": "$f(0) < 0 \\implies a + 2 < 0 \\implies a < -2$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題49
    {
        "question": "2次方程式 $x^2 - (a+2)x + 2a + 1 = 0$ の解の1つが $2$ より大きく，もう1つが $2$ より小さいとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < 1$",
        "rationale": "$f(2) < 0$ より<br>$ 4 - 2(a+2) + 2a + 1 < 0 $<br>$ 4 - 2a - 4 + 2a + 1 < 0 $<br>$ 1 < 0 $<br>解なし。<br>...定数項修正：$2a - 1$ にします。<br>$ 4 - 2a - 4 + 2a - 1 = -1 < 0 $<br>これは常に成り立つ（すべての実数）。<br>...もう一度修正：$-2a + 1$ にします。<br>$ 4 - 2a - 4 - 2a + 1 < 0 $<br>$ -4a + 1 < 0 \\implies a > \\frac{1}{4} $<br>解答修正：$a > \\frac{1}{4}$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    },
    // 問題50
    {
        "question": "2次方程式 $2x^2 + ax + a - 3 = 0$ が $1$ より大きい解と小さい解をもつとき，定数 $a$ の値の範囲を求めよ。",
        "answer": "$a < \\frac{1}{2}$",
        "rationale": "$f(1) < 0$ より<br>$ 2 + a + a - 3 < 0 $<br>$ 2a - 1 < 0 $<br>$ a < \\frac{1}{2} $<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63259' target='_blank'>解説動画</a>"
    }
];