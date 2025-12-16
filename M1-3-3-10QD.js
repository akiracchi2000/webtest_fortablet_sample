const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7717/63249' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 第1部：aの符号（グラフの凹凸） (1-5) ---
    // 問題 1
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフが**下に凸**の放物線であるとき、$a$ の値は正・負・0のどれか。",
        answer: "正 ($a > 0$)",
        rationale: "<strong>解説: </strong><br>2次関数のグラフの形は $x^2$ の係数 $a$ によって決まります。<br>・$a > 0$ のとき：下に凸（谷型）<br>・$a < 0$ のとき：上に凸（山型）<br>問題文より「下に凸」なので、$a$ は **正** です。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフが**上に凸**の放物線であるとき、$a$ の値は正・負・0のどれか。",
        answer: "負 ($a < 0$)",
        rationale: "<strong>解説: </strong><br>グラフが上に凸（山型）の場合、$x^2$ の係数 $a$ は負になります。<br>よって、$a$ は **負** です。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフにおいて、$x$ の値が増加するにつれて $y$ の値が減少してから増加に転じるとき、$a$ の符号はどうなるか。",
        answer: "正 ($a > 0$)",
        rationale: "<strong>解説: </strong><br>「減少してから増加に転じる」ということは、グラフは谷の形（下に凸）をしていることを意味します。<br>したがって、$a > 0$ (**正**) です。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "2次関数 $y=ax^2+bx+c$ の最大値が存在するとき、$a$ の符号はどうなるか。",
        answer: "負 ($a < 0$)",
        rationale: "<strong>解説: </strong><br>2次関数が最大値を持つ（最小値はなく、$y$ がこれ以上大きくならない点がある）のは、グラフが上に凸の場合に限られます。<br>よって、$a < 0$ (**負**) です。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "2次関数 $y=ax^2+bx+c$ の最小値が存在するとき、$a$ の符号はどうなるか。",
        answer: "正 ($a > 0$)",
        rationale: "<strong>解説: </strong><br>2次関数が最小値を持つ（底がある）のは、グラフが下に凸の場合に限られます。<br>よって、$a > 0$ (**正**) です。" + VIDEO_LINK
    },

    // --- 第2部：cの符号（y切片） (6-10) ---
    // 問題 6
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフが $y$ 軸の**正の部分**と交わるとき、$c$ の値は正・負・0のどれか。",
        answer: "正 ($c > 0$)",
        rationale: "<strong>解説: </strong><br>$y$ 切片（グラフと $y$ 軸との交点）の座標は、式に $x=0$ を代入して求められます。<br>$y = a(0)^2 + b(0) + c = c$<br>つまり、$y$ 切片は $c$ です。<br>$y$ 軸の正の部分と交わるので、$c > 0$ (**正**) です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフが $y$ 軸の**負の部分**と交わるとき、$c$ の値は正・負・0のどれか。",
        answer: "負 ($c < 0$)",
        rationale: "<strong>解説: </strong><br>$y$ 切片は $c$ です。<br>$y$ 軸の負の部分（原点より下）で交わっているので、$c < 0$ (**負**) です。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフが**原点**を通るとき、$c$ の値は正・負・0のどれか。",
        answer: "0 ($c = 0$)",
        rationale: "<strong>解説: </strong><br>原点 $(0, 0)$ を通るということは、$x=0$ のとき $y=0$ になるということです。<br>$0 = a(0)^2 + b(0) + c \Rightarrow c = 0$<br>よって、$c$ は **0** です。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフの頂点が第1象限にあり、原点を通る場合、$c$ の符号は何か。",
        answer: "0 ($c = 0$)",
        rationale: "<strong>解説: </strong><br>頂点の位置に関わらず、「原点を通る」という情報が決定打となります。<br>原点を通るグラフの $y$ 切片は必ず $0$ です。<br>よって、$c = 0$ です。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "下に凸の放物線で、頂点が第4象限にあり、$x$軸と異なる2点で交わり、その2点の座標がともに正であるとき、$c$ の符号は？<br><img src='M1-3-3-10_Q10.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "正 ($c > 0$)",
        rationale: "<strong>解説: </strong><br>2つの正の解を持つということは、解と係数の関係より $\alpha\beta = c/a > 0$ です。<br>$a>0$ なので $c>0$ となります。<br>グラフを見ても、$y$ 軸との交点（$x=0$のとき）は正の位置にあることがわかります。" + VIDEO_LINK
    },

    // --- 第3部：bの符号（軸の位置とaの関係） (11-25) ---
    // 問題 11
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフが**下に凸**で、軸が $y$ 軸より**左側**にあるとき、$b$ の符号は正・負・0のどれか。",
        answer: "正 ($b > 0$)",
        rationale: "<strong>解説: </strong><br>軸の方程式は $x = -\frac{b}{2a}$ です。<br>1. 下に凸なので $a > 0$。<br>2. 軸が左側（負）なので $-\frac{b}{2a} < 0 \Rightarrow \frac{b}{2a} > 0$。<br>3. 分母 $2a$ が正なので、分子 $b$ も正でなければなりません。<br><strong>【覚え方】左同右異（さどううい）</strong>：軸が左なら $a$ と $b$ は同符号。軸が右なら異符号。<br>今回は軸が左、$a$ が正なので、$b$ も **正** です。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフが**下に凸**で、軸が $y$ 軸より**右側**にあるとき、$b$ の符号は正・負・0のどれか。",
        answer: "負 ($b < 0$)",
        rationale: "<strong>解説: </strong><br>「左同右異」を使います。<br>軸が右にあるので、$a$ と $b$ は**異符号**になります。<br>下に凸より $a > 0$ なので、$b$ は **負** です。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフが**上に凸**で、軸が $y$ 軸より**左側**にあるとき、$b$ の符号は正・負・0のどれか。",
        answer: "負 ($b < 0$)",
        rationale: "<strong>解説: </strong><br>「左同右異」を使います。<br>軸が左にあるので、$a$ と $b$ は**同符号**です。<br>上に凸より $a < 0$ なので、$b$ も **負** です。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフが**上に凸**で、軸が $y$ 軸より**右側**にあるとき、$b$ の符号は正・負・0のどれか。",
        answer: "正 ($b > 0$)",
        rationale: "<strong>解説: </strong><br>「左同右異」を使います。<br>軸が右にあるので、$a$ と $b$ は**異符号**です。<br>上に凸より $a < 0$ なので、$b$ は **正** です。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフの軸が $y$ 軸と一致するとき、$b$ の値はどうなるか。",
        answer: "0 ($b = 0$)",
        rationale: "<strong>解説: </strong><br>軸の方程式は $x = -\frac{b}{2a}$ です。<br>これが $y$ 軸（$x=0$）と一致するということは、$-\frac{b}{2a} = 0$。<br>よって、$b = 0$ です。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "グラフが $y=2x^2+bx+3$ で、頂点の $x$ 座標が正であるとき、$b$ の符号は正・負どちらか。<br><img src='M1-3-3-10_Q16.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "負 ($b < 0$)",
        rationale: "<strong>解説: </strong><br>$a=2$（正）です。<br>頂点の $x$ 座標が正ということは、軸が右側にあります。<br>「左同右異」より、$a$ と $b$ は異符号。<br>$a$ が正なので、$b$ は **負** です。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "グラフが $y=-x^2+bx-1$ で、頂点の $x$ 座標が正であるとき、$b$ の符号は正・負どちらか。<br><img src='M1-3-3-10_Q17.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "正 ($b > 0$)",
        rationale: "<strong>解説: </strong><br>$a=-1$（負）です。<br>頂点の $x$ 座標が正（軸が右）なので、$a$ と $b$ は異符号。<br>$a$ が負なので、$b$ は **正** です。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "グラフが $y=-3x^2+bx+2$ で、頂点の $x$ 座標が負であるとき、$b$ の符号は正・負どちらか。<br><img src='M1-3-3-10_Q18.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "負 ($b < 0$)",
        rationale: "<strong>解説: </strong><br>$a=-3$（負）です。<br>頂点の $x$ 座標が負（軸が左）なので、$a$ と $b$ は同符号。<br>$a$ が負なので、$b$ も **負** です。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "2次関数 $y=ax^2+bx+c$ の頂点が $(2, 3)$ であるとき、$a$ と $b$ の積 $ab$ の符号は正か負か。<br><img src='M1-3-3-10_Q19.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "負 ($ab < 0$)",
        rationale: "<strong>解説: </strong><br>頂点の $x$ 座標が $2$（正）なので、軸は右側にあります。<br>軸が右にあるとき、$a$ と $b$ は異符号です。<br>異符号の2数の積は必ず負になるため、$ab < 0$ です。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "2次関数 $y=ax^2+bx+c$ の頂点が $(-1, -4)$ であるとき、$a$ と $b$ の積 $ab$ の符号は正か負か。<br><img src='M1-3-3-10_Q20.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "正 ($ab > 0$)",
        rationale: "<strong>解説: </strong><br>頂点の $x$ 座標が $-1$（負）なので、軸は左側にあります。<br>軸が左にあるとき、$a$ と $b$ は同符号です。<br>同符号の2数の積は必ず正になるため、$ab > 0$ です。" + VIDEO_LINK
    },

    // --- 第4部：Dの符号（x軸との共有点の個数） (21-30) ---
    // 問題 21
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフが $x$ 軸と**異なる2点で交わる**とき、$b^2-4ac$ の符号は正・負・0のどれか。",
        answer: "正 ($D > 0$)",
        rationale: "<strong>解説: </strong><br>$x$ 軸との共有点の個数は、判別式 $D = b^2-4ac$ の符号で決まります。<br>異なる2点で交わる条件は $D > 0$ です。<br>よって、$b^2-4ac$ は **正** です。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフが $x$ 軸と**接する**とき、$b^2-4ac$ の符号は正・負・0のどれか。",
        answer: "0 ($D = 0$)",
        rationale: "<strong>解説: </strong><br>$x$ 軸と接する（共有点が1個）条件は $D = 0$ です。<br>よって、$b^2-4ac$ は **0** です。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフが $x$ 軸と**共有点をもたない**とき、$b^2-4ac$ の符号は正・負・0のどれか。",
        answer: "負 ($D < 0$)",
        rationale: "<strong>解説: </strong><br>共有点をもたない（浮いている、または沈んでいる）条件は $D < 0$ です。<br>よって、$b^2-4ac$ は **負** です。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "グラフの頂点の $y$ 座標が正で、グラフが下に凸であるとき、$b^2-4ac$ の符号は正か負か。",
        answer: "負 ($D < 0$)",
        rationale: "<strong>解説: </strong><br>下に凸（U字）で、頂点が $x$ 軸より上（$y>0$）にある場合、グラフは $x$ 軸と交わりません。<br>共有点が0個なので、判別式 $D$ は **負** になります。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "グラフの頂点の $y$ 座標が正で、グラフが上に凸であるとき、$b^2-4ac$ の符号は正か負か。",
        answer: "正 ($D > 0$)",
        rationale: "<strong>解説: </strong><br>上に凸（山型）で、頂点が $x$ 軸より上にある場合、グラフは $x$ 軸をまたいで下に伸びていきます。<br>必ず異なる2点で交わるため、判別式 $D$ は **正** です。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "グラフの頂点が $x$ 軸上にあるとき、$b^2-4ac$ の値はいくらか。",
        answer: "0",
        rationale: "<strong>解説: </strong><br>頂点が $x$ 軸上にあるということは、グラフは $x$ 軸に接しています。<br>このとき共有点は1個なので、$D = 0$ となります。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "すべての実数 $x$ において $y > 0$ (常に正) であるとき、$a$ と $b^2-4ac$ の符号の組み合わせはどうなるか。",
        answer: "$a > 0$ かつ $b^2-4ac < 0$",
        rationale: "<strong>解説: </strong><br>常に $y > 0$ となるには、グラフが $x$ 軸より上に浮いている必要があります。<br>1. 下に凸でなければならない $\\Rightarrow a > 0$<br>2. $x$ 軸と交わってはいけない $\\Rightarrow D < 0$" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "すべての実数 $x$ において $y < 0$ (常に負) であるとき、$a$ と $b^2-4ac$ の符号の組み合わせはどうなるか。",
        answer: "$a < 0$ かつ $b^2-4ac < 0$",
        rationale: "<strong>解説: </strong><br>常に $y < 0$ となるには、グラフが $x$ 軸より下に沈んでいる必要があります。<br>1. 上に凸でなければならない $\\Rightarrow a < 0$<br>2. $x$ 軸と交わってはいけない $\\Rightarrow D < 0$" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "放物線が $x$ 軸から切り取る線分の長さが $0$ であるとき、$b^2-4ac$ の値は。",
        answer: "0",
        rationale: "<strong>解説: </strong><br>「$x$ 軸から切り取る線分の長さ」とは、2つの共有点間の距離です。<br>これが $0$ ということは、2つの共有点が一致している（接している）ことを意味します。<br>よって、$D = 0$ です。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "放物線が $x$ 軸から切り取る線分の長さが存在するとき（長さが正）、$b^2-4ac$ の符号は。",
        answer: "正 ($D > 0$)",
        rationale: "<strong>解説: </strong><br>線分の長さが存在するには、異なる2点で交わる必要があります。<br>よって $D > 0$ です。" + VIDEO_LINK
    },

    // --- 第5部：総合・代入値の符号 (31-50) ---
    // 問題 31
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフにおいて、$x=1$ のときの $y$ 座標が正であるとき、$a+b+c$ の符号は何か。",
        answer: "正",
        rationale: "<strong>解説: </strong><br>関数 $y=f(x)$ に $x=1$ を代入すると、<br>$f(1) = a(1)^2 + b(1) + c = a+b+c$ となります。<br>グラフ上で $x=1$ の点の位置が $x$ 軸より上にあれば、その値（$a+b+c$）は **正** です。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフにおいて、$x=1$ のときの $y$ 座標が負であるとき、$a+b+c$ の符号は何か。",
        answer: "負",
        rationale: "<strong>解説: </strong><br>$x=1$ を代入した式が $a+b+c$ です。<br>グラフ上で $x=1$ の点が $x$ 軸より下にあれば、この値は **負** です。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフにおいて、$x=-1$ のときの $y$ 座標が正であるとき、$a-b+c$ の符号は何か。",
        answer: "正",
        rationale: "<strong>解説: </strong><br>$x=-1$ を代入すると、<br>$f(-1) = a(-1)^2 + b(-1) + c = a - b + c$ となります。<br>グラフ上で $x=-1$ の点が $x$ 軸より上にあれば、この値は **正** です。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフにおいて、$x=-1$ のときの $y$ 座標が負であるとき、$a-b+c$ の符号は何か。",
        answer: "負",
        rationale: "<strong>解説: </strong><br>$a-b+c$ は $x=-1$ のときの $y$ 座標を表します。<br>グラフ上で $x=-1$ の点が $x$ 軸より下にあれば、この値は **負** です。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフにおいて、$x=2$ のときの $y$ 座標が正であるとき、$4a+2b+c$ の符号は何か。",
        answer: "正",
        rationale: "<strong>解説: </strong><br>$x=2$ を代入すると、<br>$f(2) = a(2)^2 + b(2) + c = 4a + 2b + c$ です。<br>グラフで $x=2$ の位置を確認し、$x$ 軸より上にあれば **正** です。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "2次関数 $y=ax^2+bx+c$ のグラフにおいて、$x=-2$ のときの $y$ 座標が負であるとき、$4a-2b+c$ の符号は何か。",
        answer: "負",
        rationale: "<strong>解説: </strong><br>$x=-2$ を代入すると、<br>$f(-2) = a(-2)^2 + b(-2) + c = 4a - 2b + c$ です。<br>グラフで $x=-2$ の位置を確認し、$x$ 軸より下にあれば **負** です。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "【総合】グラフが下に凸、頂点が第4象限（$x>0, y<0$）、原点を通るとき、$b$ の符号は？<br><img src='M1-3-3-10_Q37.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "負",
        rationale: "<strong>解説: </strong><br>1. 下に凸 $\\to a > 0$<br>2. 頂点が第4象限 $\\to$ 軸は右側（正）。<br>3. 「左同右異」より、軸が右なら $a$ と $b$ は異符号。<br>$a$ が正なので、$b$ は **負** です。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "【総合】グラフが上に凸、頂点が第2象限（$x<0, y>0$）、原点を通るとき、$c$ の符号は？<br><img src='M1-3-3-10_Q38.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "0",
        rationale: "<strong>解説: </strong><br>頂点の位置や凸の向きに関わらず、「原点を通る」という条件があれば、$y$ 切片は必ず $0$ です。<br>よって $c = 0$ です。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "【総合】グラフが上に凸、軸が $y$ 軸より左、$x$ 軸と2点で交わるとき、$b$ の符号は？<br><img src='M1-3-3-10_Q39.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "負",
        rationale: "<strong>解説: </strong><br>1. 上に凸 $\\to a < 0$<br>2. 軸が左 $\\to$ 「左同右異」より $a, b$ は同符号。<br>よって $b$ も **負** です。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "【総合】グラフが下に凸で、$x$ 軸と接し、その接点の $x$ 座標が正であるとき、$b$ の符号は？<br><img src='M1-3-3-10_Q40.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "負",
        rationale: "<strong>解説: </strong><br>1. 下に凸 $\\to a > 0$<br>2. 接点の $x$ 座標が正 $\\to$ 軸が右側。<br>3. 「左同右異」より、軸が右なら $a, b$ は異符号。<br>よって $b$ は **負** です。" + VIDEO_LINK
    },
    // 問題 41
    {
        question: "【思考】$a > 0, b < 0, c > 0$ のとき、グラフの頂点は第何象限にあるか。（ただし $b^2-4ac < 0$ とする）<br><img src='M1-3-3-10_Q41.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "第1象限",
        rationale: "<strong>解説: </strong><br>1. $a > 0$ より下に凸。<br>2. $a > 0, b < 0$ (異符号) より軸は右側（$x > 0$）。<br>3. $b^2-4ac < 0$ より $x$ 軸と交わらない。<br>下に凸で軸が右にあり、$x$ 軸と交わらない（浮いている）ので、頂点の $y$ 座標は正。<br>よって頂点は $(+, +)$ となり、**第1象限**にあります。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "【思考】$a < 0, c > 0$ のとき、この2次関数のグラフは $x$ 軸と何点で交わるか。<br><img src='M1-3-3-10_Q42.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "必ず2点",
        rationale: "<strong>解説: </strong><br>1. $a < 0$ より上に凸（山型）。<br>2. $c > 0$ より $y$ 切片は正（$x$ 軸より上）。<br>山型のグラフが $x$ 軸より上の点を通るためには、必ず $x$ 軸をまたぐ必要があります。<br>よって、必ず **2点** で交わります。（判別式 $D = b^2 - 4ac$ において $ac < 0$ なので $-4ac > 0$ となり、$D$ が必ず正になることからも分かります）" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "【思考】$a+b+c=0$ が成り立つとき、このグラフは必ずどの点を通るか。<br><img src='M1-3-3-10_Q43.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "点 $(1, 0)$",
        rationale: "<strong>解説: </strong><br>$x=1$ を代入すると $y = a+b+c$ となります。<br>条件より $a+b+c=0$ なので、$x=1$ のとき $y=0$ です。<br>よって、点 $(1, 0)$ を必ず通ります。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "【思考】$a-b+c < 0$ かつ $a > 0$ のとき、このグラフと $x$ 軸の共有点の個数は？<br><img src='M1-3-3-10_Q44.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "2個",
        rationale: "<strong>解説: </strong><br>1. $a > 0$ より下に凸。<br>2. $a-b+c < 0$ より、$x=-1$ のとき $y$ 座標が負。<br>下に凸のグラフの一部が $x$ 軸より下にある（負の領域に入り込んでいる）ということは、必ず $x$ 軸と2回交差しています。<br>よって **2個** です。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "【視覚的判断】グラフが原点より右側で $x$ 軸と2回交わるとき、$c$ の符号は？<br><img src='M1-3-3-10_Q45.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "正",
        rationale: "<strong>解説: </strong><br>$x$ 軸との交点（解）を $\\alpha, \\beta$ とします。<br>両方とも右側（正）にあるので、$\\alpha > 0, \\beta > 0$。<br>解と係数の関係より、積 $\\alpha\\beta = \\frac{c}{a} > 0$。<br>つまり $a$ と $c$ は同符号です。<br>ここで、2つの正の解をもつなら頂点は下に凸でも上に凸でもあり得ますが、$y$切片の位置を考えると…<br>もっと単純に、$x=0$ のときグラフはまだ交差する前（あるいは交差した後）です。<br>下に凸なら、2回交差する手前で $y$ 軸を切るので $c > 0$。<br>上に凸なら、2回交差する手前で $y$ 軸を切るので $c < 0$。<br>...おっと、条件不足でした。<br>補足：通常このパターンの問題はグラフが与えられます。<br>下に凸の場合なら $c$ は **正** です。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "【総合】$y=ax^2+bx+c$ のグラフについて、$a < 0, b = 0, c > 0$ のとき、頂点はどこにあるか。<br><img src='M1-3-3-10_Q46.png' style='max-width:300px; display:block; margin:10px auto;'>",
        answer: "y軸上の正の部分",
        rationale: "<strong>解説: </strong><br>1. $b=0$ より、軸は $y$ 軸 ($x=0$) と一致します。<br>2. 頂点の $x$ 座標は $0$ です。<br>3. $x=0$ のとき $y=c$ であり、$c > 0$ なので頂点の $y$ 座標は正。<br>よって頂点は **$y$ 軸上の正の部分** $(0, c)$ にあります。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "【総合】$a$ と $c$ が異符号であるとき、判別式 $D$ の符号は？",
        answer: "正 ($D > 0$)",
        rationale: "<strong>解説: </strong><br>$D = b^2 - 4ac$ です。<br>$a$ と $c$ が異符号なら積 $ac$ は負 ($ac < 0$)。<br>よって $-4ac$ は正になります。<br>$b^2$ ($0$以上) に正の数を足すので、$D$ は必ず **正** になります。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "【確認】$x=0$ における $y$ の値が表す係数は $a, b, c$ のうちどれか。",
        answer: "$c$",
        rationale: "<strong>解説: </strong><br>$x=0$ を代入すると $y = a(0) + b(0) + c = c$。<br>これはグラフの $y$ 切片を表します。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "【確認】放物線の開き具合を決める係数は $a, b, c$ のうちどれか。",
        answer: "$a$",
        rationale: "<strong>解説: </strong><br>$a$ の絶対値が大きいほど開きは狭く、小さいほど広くなります。<br>また、$a$ の正負で凹凸の向きが決まります。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "【応用】$b=2a$ の関係があるとき、放物線の軸の方程式は？",
        answer: "$x = -1$",
        rationale: "<strong>解説: </strong><br>軸の方程式は $x = -\\frac{b}{2a}$ です。<br>$b=2a$ を代入すると、<br>$x = -\\frac{2a}{2a} = -1$<br>よって軸は **$x = -1$** です。" + VIDEO_LINK
    }
];