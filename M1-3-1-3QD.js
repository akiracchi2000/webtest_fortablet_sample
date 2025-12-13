const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7715/63202' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 第1部：基本形 y=a(x-p)^2+q の頂点 (1-10) ---
    // 問題 1
    {
        question: "2次関数 $y=(x-2)^2+3$ の頂点の座標を求めよ。",
        answer: "$(2, 3)$",
        rationale: "<strong>解説: </strong><br>基本形 $y=a(x-p)^2+q$ の頂点は $(p, q)$ です。<br>カッコの中の $(x-2)$ を見て、符号を逆にした $2$ が $x$座標。<br>式の後ろの $+3$ を見て、符号そのまま $3$ が $y$座標になります。<br>「カッコの中は逆、外はそのまま」と覚えましょう。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "2次関数 $y=(x-1)^2+5$ の頂点の座標を求めよ。",
        answer: "$(1, 5)$",
        rationale: "<strong>解説: </strong><br>カッコの中が $(x-1)$ なので、$x$座標は $1$ です（$-1$ ではありません）。<br>後ろが $+5$ なので、$y$座標は $5$ です。<br>よって頂点は $(1, 5)$ です。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "2次関数 $y=(x-4)^2-2$ の頂点の座標を求めよ。",
        answer: "$(4, -2)$",
        rationale: "<strong>解説: </strong><br>$x$座標：$(x-4)$ の符号を変えて $4$。<br>$y$座標：後ろの $-2$ はそのまま。<br>よって $(4, -2)$ となります。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "2次関数 $y=(x+3)^2+1$ の頂点の座標を求めよ。",
        answer: "$(-3, 1)$",
        rationale: "<strong>解説: </strong><br>カッコの中が $(x+3)$ とプラスになっています。<br>この場合、$x - (-3)$ と考えられるため、$x$座標は $-3$ になります。<br>$y$座標はそのまま $+1$ なので、答えは $(-3, 1)$ です。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "2次関数 $y=(x+2)^2-4$ の頂点の座標を求めよ。",
        answer: "$(-2, -4)$",
        rationale: "<strong>解説: </strong><br>$x$座標は $+2$ の逆で $-2$。<br>$y$座標は後ろの数字そのまま $-4$。<br>組み合わせると $(-2, -4)$ です。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "2次関数 $y=2(x-1)^2+3$ の頂点の座標を求めよ。",
        answer: "$(1, 3)$",
        rationale: "<strong>解説: </strong><br>先頭に係数 $2$ がついていますが、頂点の求め方は変わりません。<br>あくまで $(x-1)$ と $+3$ に注目します。<br>$x=1, y=3$ より、頂点は $(1, 3)$ です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "2次関数 $y=-3(x-2)^2+1$ の頂点の座標を求めよ。",
        answer: "$(2, 1)$",
        rationale: "<strong>解説: </strong><br>係数がマイナスでも手順は同じです。<br>$(x-2)$ $\\to$ $x=2$。<br>後ろの $+1$ $\\to$ $y=1$。<br>頂点 $(2, 1)$ です。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "2次関数 $y=-(x+5)^2-2$ の頂点の座標を求めよ。",
        answer: "$(-5, -2)$",
        rationale: "<strong>解説: </strong><br>$(x+5)$ なので $x$座標は $-5$。<br>定数項が $-2$ なので $y$座標は $-2$。<br>答えは $(-5, -2)$ です。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "2次関数 $y=4(x-3)^2+10$ の頂点の座標を求めよ。",
        answer: "$(3, 10)$",
        rationale: "<strong>解説: </strong><br>符号の反転（$x$側）と維持（$y$側）を間違えなければ簡単です。<br>$(3, 10)$ となります。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "2次関数 $y=\\frac{1}{2}(x+1)^2-3$ の頂点の座標を求めよ。",
        answer: "$(-1, -3)$",
        rationale: "<strong>解説: </strong><br>係数が分数であっても、頂点の位置には影響しません。<br>カッコ内の $+1$ を見て $-1$、後ろの $-3$ を見て $-3$。<br>よって $(-1, -3)$ です。" + VIDEO_LINK
    },

    // --- 第2部：軸の方程式を求める (11-20) ---
    // 問題 11
    {
        question: "2次関数 $y=2(x-1)^2+3$ の軸の方程式を求めよ。",
        answer: "$x=1$",
        rationale: "<strong>解説: </strong><br>軸の方程式は、頂点の $x$座標と同じ値になります。<br>頂点が $(1, 3)$ なので、軸は直線 $x=1$ です。<br>「軸」と聞かれたら「$x=〇$」という式の形で答えます。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "2次関数 $y=-(x-2)^2-4$ の軸の方程式を求めよ。",
        answer: "$x=2$",
        rationale: "<strong>解説: </strong><br>頂点の $x$座標は $2$ です。<br>したがって、軸の方程式は $x=2$ となります。<br>カッコの中が $0$ になる $x$ の値、と覚えてもOKです。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "2次関数 $y=(x+3)^2-5$ の軸の方程式を求めよ。",
        answer: "$x=-3$",
        rationale: "<strong>解説: </strong><br>カッコの中が $(x+3)$ なので、頂点の $x$座標は $-3$ です。<br>よって軸の方程式は $x=-3$ です。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "2次関数 $y=-2(x+1)^2+2$ の軸の方程式を求めよ。",
        answer: "$x=-1$",
        rationale: "<strong>解説: </strong><br>頂点の $x$座標 $(-1)$ がそのまま軸の位置になります。<br>答えは $x=-1$ です。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "2次関数 $y=3(x-4)^2$ の軸の方程式を求めよ。",
        answer: "$x=4$",
        rationale: "<strong>解説: </strong><br>$y$座標が書かれていませんが、$(x-4)$ の部分だけで軸は決まります。<br>$x-4=0$ より $x=4$ です。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "2次関数 $y=x^2+5$ の軸の方程式を求めよ。",
        answer: "$x=0$ ($y$軸)",
        rationale: "<strong>解説: </strong><br>カッコ $(x-p)$ が見当たりませんが、これは $(x-0)^2$ と同じことです。<br>頂点の $x$座標は $0$ なので、軸は $x=0$（$y$軸）となります。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "2次関数 $y=5(x+2)^2-1$ の軸の方程式を求めよ。",
        answer: "$x=-2$",
        rationale: "<strong>解説: </strong><br>$(x+2)$ に注目します。<br>符号を逆にして $x=-2$ が軸です。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "2次関数 $y=-(x-\\frac{1}{2})^2+1$ の軸の方程式を求めよ。",
        answer: "$x=\\frac{1}{2}$",
        rationale: "<strong>解説: </strong><br>分数の場合も同様です。<br>$(x-\\frac{1}{2})$ より、軸は $x=\\frac{1}{2}$ となります。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "2次関数 $y=2x^2-3$ の軸の方程式を求めよ。",
        answer: "$x=0$",
        rationale: "<strong>解説: </strong><br>$x$ の項が $x^2$ だけ（1次の項がない）の場合、左右の移動はありません。<br>したがって軸は原点を通る $x=0$ です。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "2次関数 $y=-(x+5)^2$ の軸の方程式を求めよ。",
        answer: "$x=-5$",
        rationale: "<strong>解説: </strong><br>頂点の $x$座標は $-5$ なので、軸は $x=-5$ です。" + VIDEO_LINK
    },

    // --- 第3部：片方が0になるパターン・省略形 (21-30) ---
    // 問題 21
    {
        question: "2次関数 $y=2x^2+1$ の頂点の座標を求めよ。",
        answer: "$(0, 1)$",
        rationale: "<strong>解説: </strong><br>$(x-p)^2$ の形が見えないときは、$p=0$ と考えます。<br>つまり $y=2(x-0)^2+1$ という意味です。<br>よって $x$座標は $0$、$y$座標は $1$ で、頂点は $(0, 1)$ となります。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "2次関数 $y=-x^2-3$ の頂点の座標を求めよ。",
        answer: "$(0, -3)$",
        rationale: "<strong>解説: </strong><br>$x$ の横移動がないパターンです。<br>$x=0$、後ろの定数が $-3$ なので、頂点は $(0, -3)$ です。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "2次関数 $y=3(x-2)^2$ の頂点の座標を求めよ。",
        answer: "$(2, 0)$",
        rationale: "<strong>解説: </strong><br>後ろに足される数（$+q$）がない場合は、$q=0$ と考えます。<br>$y=3(x-2)^2+0$ という意味です。<br>よって頂点は $(2, 0)$ です。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "2次関数 $y=-(x+4)^2$ の頂点の座標を求めよ。",
        answer: "$(-4, 0)$",
        rationale: "<strong>解説: </strong><br>上下移動がない（$q=0$）パターンです。<br>カッコ内の $+4$ より $x=-4$。<br>頂点は $(-4, 0)$ となります。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "2次関数 $y=x^2$ の頂点の座標を求めよ。",
        answer: "$(0, 0)$",
        rationale: "<strong>解説: </strong><br>最も基本的な形です。<br>左右移動も上下移動もしていないので、頂点は原点 $(0, 0)$ です。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "2次関数 $y=-3x^2$ の頂点の座標を求めよ。",
        answer: "$(0, 0)$",
        rationale: "<strong>解説: </strong><br>係数が $-3$ になっても、平行移動成分が含まれていなければ頂点は動きません。<br>$(0, 0)$ です。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "2次関数 $y=(x-5)^2$ の頂点の座標を求めよ。",
        answer: "$(5, 0)$",
        rationale: "<strong>解説: </strong><br>カッコの中を見て $x=5$。<br>後ろに何もないので $y=0$。<br>$(5, 0)$ です。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "2次関数 $y=\\frac{1}{3}x^2-2$ の頂点の座標を求めよ。",
        answer: "$(0, -2)$",
        rationale: "<strong>解説: </strong><br>$x$ の項が単独なので $x=0$。<br>後ろの $-2$ がそのまま $y$座標。<br>$(0, -2)$ です。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "2次関数 $y=-2(x+1)^2$ の頂点の座標を求めよ。",
        answer: "$(-1, 0)$",
        rationale: "<strong>解説: </strong><br>左右には $-1$ 動いていますが、上下には動いていません。<br>頂点は $(-1, 0)$ です。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "2次関数 $y=4x^2+5$ の頂点の座標を求めよ。",
        answer: "$(0, 5)$",
        rationale: "<strong>解説: </strong><br>上下に $+5$ 動いています。<br>頂点は $(0, 5)$ です。" + VIDEO_LINK
    },

    // --- 第4部：分数・小数・応用 (31-40) ---
    // 問題 31
    {
        question: "2次関数 $y=3(x+\\frac{1}{2})^2-\\frac{3}{4}$ の頂点の座標を求めよ。",
        answer: "$(-\\frac{1}{2}, -\\frac{3}{4})$",
        rationale: "<strong>解説: </strong><br>分数が入ってきてもルールは絶対です。<br>カッコ内の $+\\frac{1}{2}$ の符号を変えて $-\\frac{1}{2}$。<br>後ろの $-\\frac{3}{4}$ はそのまま。<br>よって $(-\\frac{1}{2}, -\\frac{3}{4})$ です。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "2次関数 $y=-(x-\\frac{3}{2})^2+\\frac{1}{4}$ の頂点の座標を求めよ。",
        answer: "$(\\frac{3}{2}, \\frac{1}{4})$",
        rationale: "<strong>解説: </strong><br>カッコ内の符号を逆に $\\to \\frac{3}{2}$。<br>後ろの定数 $\\to \\frac{1}{4}$。<br>頂点は $(\\frac{3}{2}, \\frac{1}{4})$ です。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "2次関数 $y=(x+0.5)^2-1.2$ の頂点の座標を求めよ。",
        answer: "$(-0.5, -1.2)$",
        rationale: "<strong>解説: </strong><br>小数の場合も同様です。<br>$+0.5$ の逆で $-0.5$。<br>$-1.2$ はそのまま。<br>$(-0.5, -1.2)$ となります。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "2次関数 $y=\\frac{1}{2}(x-2)^2+1$ の軸の方程式を求めよ。",
        answer: "$x=2$",
        rationale: "<strong>解説: </strong><br>軸を求める問題では、係数の分数（$\\frac{1}{2}$）や後ろの定数（$+1$）は関係ありません。<br>$(x-2)$ だけを見て、$x=2$ と答えます。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "2次関数 $y=-2(x+\\frac{5}{2})^2$ の頂点の座標を求めよ。",
        answer: "$(-\\frac{5}{2}, 0)$",
        rationale: "<strong>解説: </strong><br>カッコ内の逆符号で $-\\frac{5}{2}$。<br>上下移動なしで $0$。<br>$(-\\frac{5}{2}, 0)$ です。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "2次関数 $y=(x-1.5)^2+2.5$ の頂点の座標を求めよ。",
        answer: "$(1.5, 2.5)$",
        rationale: "<strong>解説: </strong><br>符号の見落としに注意。<br>$-1.5 \\to +1.5$。<br>$+2.5 \\to +2.5$。<br>頂点は $(1.5, 2.5)$ です。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "2次関数 $y=3(x+\\frac{1}{3})^2+\\frac{2}{3}$ の頂点の座標を求めよ。",
        answer: "$(-\\frac{1}{3}, \\frac{2}{3})$",
        rationale: "<strong>解説: </strong><br>$(-\\frac{1}{3}, \\frac{2}{3})$ となります。<br>分数の計算などは必要なく、ただ読み取るだけです。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "頂点が $(-2, 3)$ である2次関数の式として正しい形はどれか。<br>A: $y=a(x-2)^2+3$<br>B: $y=a(x+2)^2+3$",
        answer: "B",
        rationale: "<strong>解説: </strong><br>頂点の $x$座標が負の数 $-2$ の場合、式の中では $(x+2)$ とプラスになります。<br>よって正しい形は B です。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "2次関数 $y=-(x-\\sqrt{2})^2+1$ の頂点の座標を求めよ。",
        answer: "$(\\sqrt{2}, 1)$",
        rationale: "<strong>解説: </strong><br>ルートが入っていてもルールは同じです。<br>$-\\sqrt{2}$ の逆符号で $\\sqrt{2}$。<br>後ろはそのまま $1$。<br>$(\\sqrt{2}, 1)$ です。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "2次関数 $y=(x-p)^2+q$ の頂点の座標を文字で答えよ。",
        answer: "$(p, q)$",
        rationale: "<strong>解説: </strong><br>これが基本公式そのものです。<br>$-p$ の逆で $p$、$+q$ はそのまま $q$。<br>頂点は $(p, q)$ です。" + VIDEO_LINK
    },

    // --- 第5部：総合確認・ひっかけ (41-50) ---
    // 問題 41
    {
        question: "2次関数 $y=3(2-x)^2+1$ の頂点の座標を求めよ。（※難問）",
        answer: "$(2, 1)$",
        rationale: "<strong>解説: </strong><br>$(2-x)^2$ は $(-(x-2))^2$ と同じであり、2乗するとマイナスが消えて $(x-2)^2$ と同じになります。<br>よって $y=3(x-2)^2+1$ と変形でき、頂点は $(2, 1)$ です。<br>（カッコの中が $0$ になる $x$ の値、と考えると $2-x=0 \\to x=2$ とすぐに分かります）" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "2次関数 $y=-x^2+2x-1$ を $y=-(x-1)^2$ と変形した。この頂点の座標は？",
        answer: "$(1, 0)$",
        rationale: "<strong>解説: </strong><br>平方完成された形 $y=-(x-1)^2$ から読み取ります。<br>$-1$ の逆で $1$、後ろに数がないので $0$。<br>頂点は $(1, 0)$ です。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "頂点が $(3, -1)$ で、$x^2$ の係数が $2$ である2次関数の式を答えよ。",
        answer: "$y=2(x-3)^2-1$",
        rationale: "<strong>解説: </strong><br>頂点 $(p, q)$ と係数 $a$ がわかれば式が作れます。<br>$x$座標 $3$ $\\to$ $(x-3)$<br>$y$座標 $-1$ $\\to$ 最後尾に $-1$<br>係数 $2$ を前につけて、$y=2(x-3)^2-1$ となります。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "2次関数 $y=a(x+p)^2+q$ の頂点の座標は？",
        answer: "$(-p, q)$",
        rationale: "<strong>解説: </strong><br>式の中で $(x+p)$ とプラスになっているので、頂点の座標はマイナスの $-p$ になります。<br>$y$座標はそのまま $q$。<br>よって $(-p, q)$ です。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "2次関数 $y=-2(x-1)^2-5$ の軸は、$y$軸よりも右にあるか、左にあるか。",
        answer: "右にある",
        rationale: "<strong>解説: </strong><br>まず軸を求めます。頂点の $x$座標が $1$ なので、軸は $x=1$ です。<br>$x=1$ は $y$軸（$x=0$）よりも右側（プラス側）にあります。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "2次関数 $y=(x+3)^2+4$ の頂点は第何象限にあるか。",
        answer: "第2象限",
        rationale: "<strong>解説: </strong><br>頂点の座標を求めると $(-3, 4)$ です。<br>$x < 0, y > 0$ のエリアは第2象限です。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "2次関数 $y=x^2-6x+9$ を因数分解すると $y=(x-3)^2$ になる。この頂点は？",
        answer: "$(3, 0)$",
        rationale: "<strong>解説: </strong><br>因数分解後の形から読み取ります。<br>$(x-3)^2$ なので $x=3$。<br>定数項がないので $y=0$。<br>頂点は $(3, 0)$ です。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "2次関数 $y=2(x+1)^2-2$ の頂点は第何象限にあるか。",
        answer: "第3象限",
        rationale: "<strong>解説: </strong><br>頂点は $(-1, -2)$ です。<br>$x, y$ ともに負の数なので、左下の第3象限になります。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "2次関数 $y=-(x-2)^2+5$ の頂点と軸を答えよ。",
        answer: "頂点：$(2, 5)$、軸：$x=2$",
        rationale: "<strong>解説: </strong><br>まとめの問題です。<br>カッコ内の逆符号で $x=2$（これが軸）。<br>後ろの定数で $y=5$。<br>頂点は $(2, 5)$、軸は $x=2$ です。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "軸が $x=-1$ で頂点の $y$座標が $3$ である放物線の式の形は $y=a(x+〇)^2+△$ である。〇と△に入る数は？",
        answer: "〇：$1$、△：$3$",
        rationale: "<strong>解説: </strong><br>軸が $x=-1$ ということは、頂点の $x$座標が $-1$ です。<br>式に入れるときは符号を逆にするので、カッコ内は $(x+1)$ となります。よって〇は $1$。<br>$y$座標はそのまま後ろにつくので、△は $3$ です。" + VIDEO_LINK
    }
];