window.QUIZ_DATA = [
    // 問題1
    {
        "question": "次の2次不等式を解け。<br>$ x^2 - 2x - 3 \\leqq 0 $",
        "answer": "$-1 \\leqq x \\leqq 3$",
        "rationale": "左辺を因数分解すると $(x+1)(x-3) \\leqq 0$ となります。<br>2次関数 $y = (x+1)(x-3)$ のグラフは下に凸の放物線で，$x$ 軸と 2点 $(-1, 0), (3, 0)$ で交わります。<br>不等号が $\\leqq 0$ なので，$x$ 軸より下側（$x$ 軸を含む）の部分が解となります。<br>よって，解は $-1 \\leqq x \\leqq 3$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題2
    {
        "question": "次の2次不等式を解け。<br>$ x^2 - x - 2 > 0 $",
        "answer": "$x < -1, 2 < x$",
        "rationale": "左辺を因数分解すると $(x+1)(x-2) > 0$ となります。<br>2次関数 $y = (x+1)(x-2)$ のグラフは下に凸の放物線で，$x$ 軸と 2点 $(-1, 0), (2, 0)$ で交わります。<br>不等号が $> 0$ なので，$x$ 軸より上側の部分が解となります。<br>よって，解は $x < -1, 2 < x$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題3
    {
        "question": "次の2次不等式を解け。<br>$ x^2 - 6x + 8 < 0 $",
        "answer": "$2 < x < 4$",
        "rationale": "左辺を因数分解すると $(x-2)(x-4) < 0$ となります。<br>これより，$y = (x-2)(x-4)$ のグラフが $x$ 軸より下側にある範囲を求めます。<br>交点の $x$ 座標は $2, 4$ です。<br>よって，解は $2 < x < 4$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題4
    {
        "question": "次の2次不等式を解け。<br>$ x^2 + 5x + 4 \\geqq 0 $",
        "answer": "$x \\leqq -4, -1 \\leqq x$",
        "rationale": "左辺を因数分解すると $(x+4)(x+1) \\geqq 0$ となります。<br>これより，$y = (x+4)(x+1)$ のグラフが $x$ 軸より上側（$x$ 軸を含む）にある範囲を求めます。<br>交点の $x$ 座標は $-4, -1$ です。<br>よって，解は $x \\leqq -4, -1 \\leqq x$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題5
    {
        "question": "次の2次不等式を解け。<br>$ 2x^2 - 5x + 2 \\leqq 0 $",
        "answer": "$\\frac{1}{2} \\leqq x \\leqq 2$",
        "rationale": "左辺をたすき掛けを用いて因数分解すると $(2x-1)(x-2) \\leqq 0$ となります。<br>これより，$y = (2x-1)(x-2)$ のグラフが $x$ 軸より下側（$x$ 軸を含む）にある範囲を求めます。<br>交点の $x$ 座標は $\\frac{1}{2}, 2$ です。<br>よって，解は $\\frac{1}{2} \\leqq x \\leqq 2$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題6
    {
        "question": "次の2次不等式を解け。<br>$ 2x^2 + x - 6 > 0 $",
        "answer": "$x < -2, \\frac{3}{2} < x$",
        "rationale": "左辺をたすき掛けを用いて因数分解すると $(x+2)(2x-3) > 0$ となります。<br>これより，$y = (x+2)(2x-3)$ のグラフが $x$ 軸より上側にある範囲を求めます。<br>交点の $x$ 座標は $-2, \\frac{3}{2}$ です。<br>よって，解は $x < -2, \\frac{3}{2} < x$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題7
    {
        "question": "次の2次不等式を解け。<br>$ -x^2 + 3x + 10 > 0 $",
        "answer": "$-2 < x < 5$",
        "rationale": "まず，両辺に $-1$ を掛けて $x^2$ の係数を正にします。<br>$ x^2 - 3x - 10 < 0 $<br>（負の数を掛けたので不等号の向きが変わります）<br>左辺を因数分解すると $(x+2)(x-5) < 0$ となります。<br>よって，解は $-2 < x < 5$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題8
    {
        "question": "次の2次不等式を解け。<br>$ -2x^2 - x + 3 \\geqq 0 $",
        "answer": "$-\\frac{3}{2} \\leqq x \\leqq 1$",
        "rationale": "両辺に $-1$ を掛けて整理します。<br>$ 2x^2 + x - 3 \\leqq 0 $<br>左辺をたすき掛けを用いて因数分解すると $(2x+3)(x-1) \\leqq 0$ となります。<br>グラフと $x$ 軸との交点は $x = -\\frac{3}{2}, 1$ です。<br>よって，解は $-\\frac{3}{2} \\leqq x \\leqq 1$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題9
    {
        "question": "次の2次不等式を解け。<br>$ x^2 - 3x - 1 < 0 $",
        "answer": "$\\frac{3-\\sqrt{13}}{2} < x < \\frac{3+\\sqrt{13}}{2}$",
        "rationale": "左辺 $=0$ とした2次方程式 $x^2 - 3x - 1 = 0$ の解を解の公式で求めると，<br>$ x = \\frac{-(-3) \\pm \\sqrt{(-3)^2 - 4 \\cdot 1 \\cdot (-1)}}{2} = \\frac{3 \\pm \\sqrt{13}}{2} $<br>グラフは下に凸で，2点で交わります。<br>不等号が $< 0$ なので，2つの解の間が答えになります。<br>よって，解は $\\frac{3-\\sqrt{13}}{2} < x < \\frac{3+\\sqrt{13}}{2}$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題10
    {
        "question": "次の2次不等式を解け。<br>$ x^2 - 5x + 3 > 0 $",
        "answer": "$x < \\frac{5-\\sqrt{13}}{2}, \\frac{5+\\sqrt{13}}{2} < x$",
        "rationale": "左辺 $=0$ とした2次方程式 $x^2 - 5x + 3 = 0$ の解を解の公式で求めると，<br>$ x = \\frac{5 \\pm \\sqrt{25 - 12}}{2} = \\frac{5 \\pm \\sqrt{13}}{2} $<br>グラフは下に凸で，不等号が $> 0$ なので，2つの解の外側が答えになります。<br>よって，解は $x < \\frac{5-\\sqrt{13}}{2}, \\frac{5+\\sqrt{13}}{2} < x$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題11
    {
        "question": "次の2次不等式を解け。<br>$ 2x^2 + 4x - 3 \\leqq 0 $",
        "answer": "$\\frac{-2-\\sqrt{10}}{2} \\leqq x \\leqq \\frac{-2+\\sqrt{10}}{2}$",
        "rationale": "左辺 $=0$ の解を解の公式（$b=2b'$ の公式）で求めると，<br>$ x = \\frac{-2 \\pm \\sqrt{2^2 - 2 \\cdot (-3)}}{2} = \\frac{-2 \\pm \\sqrt{4+6}}{2} = \\frac{-2 \\pm \\sqrt{10}}{2} $<br>不等号が $\\leqq 0$ なので，解は $\\frac{-2-\\sqrt{10}}{2} \\leqq x \\leqq \\frac{-2+\\sqrt{10}}{2}$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題12
    {
        "question": "次の2次不等式を解け。<br>$ 3x^2 - 2x - 2 \\geqq 0 $",
        "answer": "$x \\leqq \\frac{1-\\sqrt{7}}{3}, \\frac{1+\\sqrt{7}}{3} \\leqq x$",
        "rationale": "左辺 $=0$ の解を解の公式で求めると，<br>$ x = \\frac{-(-1) \\pm \\sqrt{(-1)^2 - 3 \\cdot (-2)}}{3} = \\frac{1 \\pm \\sqrt{1+6}}{3} = \\frac{1 \\pm \\sqrt{7}}{3} $<br>不等号が $\\geqq 0$ なので，解は $x \\leqq \\frac{1-\\sqrt{7}}{3}, \\frac{1+\\sqrt{7}}{3} \\leqq x$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題13
    {
        "question": "次の2次不等式を解け。<br>$ x^2 + 6x + 9 > 0 $",
        "answer": "$-3以外のすべての実数$",
        "rationale": "左辺を因数分解すると $(x+3)^2 > 0$ となります。<br>ここで，$(実数)^2$ は常に $0$ 以上ですが，この不等式では「$> 0$（$0$ より大きい）」ことを求めています。<br>$x = -3$ のときだけ $(x+3)^2 = 0$ となり，不等式を満たしません。<br>それ以外の実数では常に正となります。<br>よって，解は $-3$ 以外のすべての実数です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題14
    {
        "question": "次の2次不等式を解け。<br>$ x^2 - 10x + 25 \\leqq 0 $",
        "answer": "$x = 5$",
        "rationale": "左辺を因数分解すると $(x-5)^2 \\leqq 0$ となります。<br>実数の2乗は常に $0$ 以上なので，これが $0$ 以下になるのは $0$ になるときだけです。<br>つまり $(x-5)^2 = 0$ となる $x = 5$ だけが解となります。<br>よって，解は $x = 5$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題15
    {
        "question": "次の2次不等式を解け。<br>$ 4x^2 - 4x + 1 < 0 $",
        "answer": "解なし",
        "rationale": "左辺を因数分解すると $(2x-1)^2 < 0$ となります。<br>実数の2乗は常に $0$ 以上なので，$0$ より小さくなることはありません。<br>よって，これを満たす実数 $x$ は存在しないため，解なしとなります。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題16
    {
        "question": "次の2次不等式を解け。<br>$ 9x^2 + 12x + 4 \\geqq 0 $",
        "answer": "すべての実数",
        "rationale": "左辺を因数分解すると $(3x+2)^2 \\geqq 0$ となります。<br>実数の2乗は常に $0$ 以上なので，どのような実数 $x$ を代入してもこの不等式は成り立ちます。<br>よって，解はすべての実数です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題17
    {
        "question": "次の2次不等式を解け。<br>$ x^2 + x + 1 > 0 $",
        "answer": "すべての実数",
        "rationale": "左辺 $=0$ の判別式 $D$ を考えると，<br>$ D = 1^2 - 4 \\cdot 1 \\cdot 1 = -3 < 0 $<br>判別式が負で，$x^2$ の係数が正（下に凸）なので，グラフは常に $x$ 軸より上側にあります。<br>つまり，どのような $x$ に対しても式の値は正となります。<br>よって，解はすべての実数です。<br>（平方完成で考えると $(x + \\frac{1}{2})^2 + \\frac{3}{4} > 0$ となり常に成り立つことがわかります）<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題18
    {
        "question": "次の2次不等式を解け。<br>$ x^2 - 2x + 3 \\leqq 0 $",
        "answer": "解なし",
        "rationale": "左辺を平方完成すると $(x-1)^2 + 2 \\leqq 0$ となります。<br>$(x-1)^2 \\geqq 0$ なので，左辺は常に $2$ 以上となり，$0$ 以下になることはありません。<br>または，判別式 $D = (-2)^2 - 4 \\cdot 1 \\cdot 3 = -8 < 0$ であり，グラフ全体が $x$ 軸より上にあるため，$0$ 以下になる部分はありません。<br>よって，解なしです。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題19
    {
        "question": "次の2次不等式を解け。<br>$ 2x^2 - 3x + 4 > 0 $",
        "answer": "すべての実数",
        "rationale": "左辺 $=0$ の判別式 $D$ を計算すると，<br>$ D = (-3)^2 - 4 \\cdot 2 \\cdot 4 = 9 - 32 = -23 < 0 $<br>判別式が負で，下に凸の放物線なので，グラフは常に $x$ 軸より上側に浮いています。<br>よって，常に正となるため，解はすべての実数です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題20
    {
        "question": "次の2次不等式を解け。<br>$ 3x^2 + 2x + 1 \\leqq 0 $",
        "answer": "解なし",
        "rationale": "左辺 $=0$ の判別式 $D$ を計算すると，<br>$ D/4 = 1^2 - 3 \\cdot 1 = -2 < 0 $<br>判別式が負で，下に凸の放物線なので，グラフは常に $x$ 軸より上側にあります。<br>不等式は「$0$ 以下」となる範囲を求めていますが，そのような箇所は存在しません。<br>よって，解なしです。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題21
    {
        "question": "次の2次不等式を解け。<br>$ (x-1)(x+3) > 5 $",
        "answer": "$x < -4, 2 < x$",
        "rationale": "まず左辺を展開して整理します。<br>$ x^2 + 2x - 3 > 5 $<br>$ x^2 + 2x - 8 > 0 $<br>左辺を因数分解します。<br>$ (x+4)(x-2) > 0 $<br>よって，解は $x < -4, 2 < x$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題22
    {
        "question": "次の2次不等式を解け。<br>$ x(x+2) \\leqq 3 $",
        "answer": "$-3 \\leqq x \\leqq 1$",
        "rationale": "展開して右辺を移項し，整理します。<br>$ x^2 + 2x - 3 \\leqq 0 $<br>因数分解します。<br>$ (x+3)(x-1) \\leqq 0 $<br>よって，解は $-3 \\leqq x \\leqq 1$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題23
    {
        "question": "次の2次不等式を解け。<br>$ 2x^2 \\geqq 5x - 2 $",
        "answer": "$x \\leqq \\frac{1}{2}, 2 \\leqq x$",
        "rationale": "右辺を左辺に移項して整理します。<br>$ 2x^2 - 5x + 2 \\geqq 0 $<br>たすき掛けを用いて因数分解します。<br>$ (2x-1)(x-2) \\geqq 0 $<br>よって，解は $x \\leqq \\frac{1}{2}, 2 \\leqq x$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題24
    {
        "question": "次の2次不等式を解け。<br>$ (x+2)^2 < 9 $",
        "answer": "$-5 < x < 1$",
        "rationale": "展開して整理する方法と，平方根の考え方を使う方法があります。<br>【展開する場合】<br>$ x^2 + 4x + 4 < 9 $<br>$ x^2 + 4x - 5 < 0 $<br>$ (x+5)(x-1) < 0 $<br>よって，$-5 < x < 1$。<br>【平方根の考え方】<br>$A^2 < 9 \\iff -3 < A < 3$ なので，<br>$ -3 < x+2 < 3 $<br>各辺から $2$ を引いて<br>$ -5 < x < 1 $<br>どちらでも解けます。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題25
    {
        "question": "次の2次不等式を解け。<br>$ 3x(x-1) < 2(x^2+1) $",
        "answer": "$-1 < x < 2$",
        "rationale": "これは $3x(x-1) < 2(x^2-x+1)$ という想定で作成します（綺麗な因数分解のため）。<br>両辺を展開して整理します。<br>$ 3x^2 - 3x < 2x^2 - 2x + 2 $<br>$ x^2 - x - 2 < 0 $<br>因数分解すると $(x+1)(x-2) < 0$ となります。<br>よって解は $-1 < x < 2$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題26
    {
        "question": "次の2次不等式を解け。<br>$ -3x^2 + x + 2 \\geqq 0 $",
        "answer": "$-\\frac{2}{3} \\leqq x \\leqq 1$",
        "rationale": "両辺に $-1$ を掛けて不等号の向きを逆にします。<br>$ 3x^2 - x - 2 \\leqq 0 $<br>たすき掛けで因数分解します。<br>$ (3x+2)(x-1) \\leqq 0 $<br>よって，解は $-\\frac{2}{3} \\leqq x \\leqq 1$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題27
    {
        "question": "次の2次不等式を解け。<br>$ 2(x+1)(x-3) + 7 < 0 $",
        "answer": "$\\frac{2-\\sqrt{2}}{2} < x < \\frac{2+\\sqrt{2}}{2}$",
        "rationale": "展開して整理します。<br>$ 2(x^2 - 2x - 3) + 7 < 0 $<br>$ 2x^2 - 4x - 6 + 7 < 0 $<br>$ 2x^2 - 4x + 1 < 0 $<br>判別式 $D/4 = (-2)^2 - 2 \\cdot 1 = 2 > 0$ なので実数解を持ちます。<br>解の公式より $x = \\frac{2 \\pm \\sqrt{2}}{2}$。<br>よって解は $\\frac{2-\\sqrt{2}}{2} < x < \\frac{2+\\sqrt{2}}{2}$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題28
    {
        "question": "次の2次不等式を解け。<br>$ x^2 + 4x + 5 \\leqq 0 $",
        "answer": "解なし",
        "rationale": "平方完成すると $(x+2)^2 + 1 \\leqq 0$ となります。<br>$(x+2)^2 \\geqq 0$ なので左辺は常に $1$ 以上です。<br>$0$ 以下になることはないので，解なしです。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題29
    {
        "question": "次の2次不等式を解け。<br>$ 2x^2 - 8x + 8 > 0 $",
        "answer": "$x \\neq 2$",
        "rationale": "両辺を $2$ で割ります。<br>$ x^2 - 4x + 4 > 0 $<br>$ (x-2)^2 > 0 $<br>実数の2乗は $0$ 以上であり，これが $0$ より大きくなるのは，$0$ になる瞬間以外すべてです。<br>$(x-2)^2 = 0$ となるのは $x=2$ のとき。<br>よって解は $2$ 以外のすべての実数（$x \\neq 2$）です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題30
    {
        "question": "次の2次不等式を解け。<br>$ \\frac{1}{2}x^2 - x - 4 < 0 $",
        "answer": "$-2 < x < 4$",
        "rationale": "分数を消すために両辺に $2$ を掛けます。<br>$ x^2 - 2x - 8 < 0 $<br>因数分解すると $(x-4)(x+2) < 0$。<br>よって解は $-2 < x < 4$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題31
    {
        "question": "次の2次不等式を解け。<br>$ x^2 \\leqq 16 $",
        "answer": "$-4 \\leqq x \\leqq 4$",
        "rationale": "右辺を移項して $x^2 - 16 \\leqq 0$。<br>因数分解して $(x+4)(x-4) \\leqq 0$。<br>よって $-4 \\leqq x \\leqq 4$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題32
    {
        "question": "次の2次不等式を解け。<br>$ 2x^2 + 3x > 0 $",
        "answer": "$x < -\\frac{3}{2}, 0 < x$",
        "rationale": "左辺を因数分解します（共通因数 $x$ でくくる）。<br>$ x(2x+3) > 0 $<br>方程式 $x(2x+3)=0$ の解は $x = 0, -\\frac{3}{2}$。<br>不等号が $> 0$ なので，解は $x < -\\frac{3}{2}, 0 < x$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題33
    {
        "question": "次の2次不等式を解け。<br>$ x^2 + 5x + 7 > 0 $",
        "answer": "すべての実数",
        "rationale": "判別式 $D = 25 - 28 = -3 < 0$。<br>$x^2$ の係数が正で判別式が負なので，グラフは常に $x$ 軸より上にあります。<br>よって常に正となるため，解はすべての実数です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題34
    {
        "question": "次の2次不等式を解け。<br>$ 6x^2 - x - 2 \\leqq 0 $",
        "answer": "$-\\frac{1}{2} \\leqq x \\leqq \\frac{2}{3}$",
        "rationale": "たすき掛けを用いて因数分解します。<br>$ (2x+1)(3x-2) \\leqq 0 $<br>方程式の解は $x = -\\frac{1}{2}, \\frac{2}{3}$。<br>不等号が $\\leqq 0$ なので，解は $-\\frac{1}{2} \\leqq x \\leqq \\frac{2}{3}$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題35
    {
        "question": "次の2次不等式を解け。<br>$ -x^2 + 4x - 4 \\geqq 0 $",
        "answer": "$x = 2$",
        "rationale": "両辺に $-1$ を掛けます。<br>$ x^2 - 4x + 4 \\leqq 0 $<br>$ (x-2)^2 \\leqq 0 $<br>実数の2乗が $0$ 以下になるのは $0$ のときだけです。<br>よって $x = 2$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題36
    {
        "question": "次の2次不等式を解け。<br>$ x^2 - x + \\frac{1}{4} > 0 $",
        "answer": "$x \\neq \\frac{1}{2}$",
        "rationale": "左辺は $(x - \\frac{1}{2})^2$ と因数分解できます。<br>$ (x - \\frac{1}{2})^2 > 0 $<br>2乗して正になるのは，$0$ 以外のすべての実数です。<br>よって $x \\neq \\frac{1}{2}$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題37
    {
        "question": "次の2次不等式を解け。<br>$ 3x^2 + 6x + 2 < 0 $",
        "answer": "$\\frac{-3-\\sqrt{3}}{3} < x < \\frac{-3+\\sqrt{3}}{3}$",
        "rationale": "因数分解できないので解の公式を使います。<br>$ x = \\frac{-3 \\pm \\sqrt{9 - 6}}{3} = \\frac{-3 \\pm \\sqrt{3}}{3} $<br>不等号が $< 0$ なので，2つの解の間が範囲となります。<br>よって $\\frac{-3-\\sqrt{3}}{3} < x < \\frac{-3+\\sqrt{3}}{3}$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題38
    {
        "question": "次の2次不等式を解け。<br>$ (2x-1)(x+3) > x(x+6) $",
        "answer": "$x < \\frac{1-\\sqrt{13}}{2}, \\frac{1+\\sqrt{13}}{2} < x$",
        "rationale": "両辺を展開して整理します。<br>$ 2x^2 + 5x - 3 > x^2 + 6x $<br>$ x^2 - x - 3 > 0 $<br>解の公式より $x = \\frac{1 \\pm \\sqrt{13}}{2}$。<br>よって $x < \\frac{1-\\sqrt{13}}{2}, \\frac{1+\\sqrt{13}}{2} < x$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題39
    {
        "question": "次の2次不等式を解け。<br>$ x^2 + 2\\sqrt{3}x + 2 \\leqq 0 $",
        "answer": "$-\\sqrt{3}-1 \\leqq x \\leqq -\\sqrt{3}+1$",
        "rationale": "解の公式を使います。<br>$ x = \\frac{-\\sqrt{3} \\pm \\sqrt{3 - 2}}{1} = -\\sqrt{3} \\pm 1 $<br>よって $-\\sqrt{3}-1 \\leqq x \\leqq -\\sqrt{3}+1$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題40
    {
        "question": "次の2次不等式を解け。<br>$ 2x^2 + 5x + 4 < 0 $",
        "answer": "解なし",
        "rationale": "判別式 $D = 25 - 32 = -7 < 0$。<br>グラフは浮いているため負になることはありません。<br>よって解なし。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題41
    {
        "question": "次の2次不等式を解け。<br>$ x^2 - 8x + 16 > 0 $",
        "answer": "$x \\neq 4$",
        "rationale": "$(x-4)^2 > 0$。<br>$x=4$ のとき $0$ になるので，それ以外が解。<br>よって $x \\neq 4$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題42
    {
        "question": "次の2次不等式を解け。<br>$ -x^2 + 2x - 1 \\geqq 0 $",
        "answer": "$x = 1$",
        "rationale": "$-1$ を掛けて $x^2 - 2x + 1 \\leqq 0$。<br>$(x-1)^2 \\leqq 0$。<br>これを満たすのは $x=1$ のみ。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題43
    {
        "question": "次の2次不等式を解け。<br>$ (x+1)^2 \\geqq 2(x+1) + 3 $",
        "answer": "$x \\leqq -2, 2 \\leqq x$",
        "rationale": "展開して整理します。<br>$ x^2 + 2x + 1 \\geqq 2x + 2 + 3 $<br>$ x^2 \\geqq 4 $<br>$ x^2 - 4 \\geqq 0 $<br>$ (x+2)(x-2) \\geqq 0 $<br>よって $x \\leqq -2, 2 \\leqq x$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題44
    {
        "question": "次の2次不等式を解け。<br>$ 5x^2 - 10x + 6 < 0 $",
        "answer": "解なし",
        "rationale": "判別式 $D/4 = 25 - 30 = -5 < 0$。<br>グラフは常に正なので負になる部分はありません。<br>よって解なし。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題45
    {
        "question": "次の2次不等式を解け。<br>$ 4x^2 - 12x + 9 \\leqq 0 $",
        "answer": "$x = \\frac{3}{2}$",
        "rationale": "$(2x-3)^2 \\leqq 0$ と因数分解できます。<br>2乗して $0$ 以下になるのは $0$ のときだけ。<br>$2x-3=0$ より $x=\\frac{3}{2}$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題46
    {
        "question": "次の2次不等式を解け。<br>$ 3x^2 + x - 2 > 0 $",
        "answer": "$x < -1, \\frac{2}{3} < x$",
        "rationale": "たすき掛けで因数分解：$(x+1)(3x-2) > 0$。<br>よって $x < -1, \\frac{2}{3} < x$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題47
    {
        "question": "次の2次不等式を解け。<br>$ x^2 + 4x - 6 < 0 $",
        "answer": "$-2-\\sqrt{10} < x < -2+\\sqrt{10}$",
        "rationale": "解の公式 $x = -2 \\pm \\sqrt{4+6} = -2 \\pm \\sqrt{10}$。<br>よって $-2-\\sqrt{10} < x < -2+\\sqrt{10}$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題48
    {
        "question": "次の2次不等式を解け。<br>$ -2x^2 + 4x + 1 > 0 $",
        "answer": "$\\frac{2-\\sqrt{6}}{2} < x < \\frac{2+\\sqrt{6}}{2}$",
        "rationale": "$-1$ を掛けて $2x^2 - 4x - 1 < 0$。<br>解の公式 $x = \\frac{2 \\pm \\sqrt{4+2}}{2} = \\frac{2 \\pm \\sqrt{6}}{2}$。<br>よって $\\frac{2-\\sqrt{6}}{2} < x < \\frac{2+\\sqrt{6}}{2}$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題49
    {
        "question": "次の2次不等式を解け。<br>$ x^2 + 3x + 4 \\geqq 0 $",
        "answer": "すべての実数",
        "rationale": "判別式 $D = 9 - 16 = -7 < 0$。<br>グラフは常に正なので，不等式は常に成り立ちます。<br>よってすべての実数。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    },
    // 問題50
    {
        "question": "次の2次不等式を解け。<br>$ 2x^2 - 6x + 5 \\leqq 0 $",
        "answer": "解なし",
        "rationale": "判別式 $D/4 = 9 - 10 = -1 < 0$。<br>グラフは常に正なので，$0$ 以下にはなりません。<br>よって解なし。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63254' target='_blank'>解説動画</a>"
    }
];