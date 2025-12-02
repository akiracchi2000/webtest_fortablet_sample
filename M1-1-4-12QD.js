const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";
window.QUIZ_DATA = [
    // 問題 1
    {
        question: "$x^2 + y^2$ を $x+y$ と $xy$ を用いて表せ。",
        options: [ "$(x+y)^2 - xy$", "$(x+y)^2 - 2xy$", "$(x+y)^2 + 2xy$", "$(x-y)^2 + xy$" ],
        answer: "$(x+y)^2 - 2xy$",
        rationale: "<strong>公式: </strong>基本対称式の変形公式です。<br><strong>解説: </strong>展開公式 $(x+y)^2 = x^2 + 2xy + y^2$ より、$2xy$ を移項して $x^2 + y^2 = (x+y)^2 - 2xy$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "$(x-y)^2$ を $x+y$ と $xy$ を用いて表せ。",
        options: [ "$(x+y)^2 - 2xy$", "$(x+y)^2 - 4xy$", "$(x+y)^2 + 4xy$", "$(x+y)^2 - xy$" ],
        answer: "$(x+y)^2 - 4xy$",
        rationale: "<strong>解説: </strong>$(x-y)^2 = x^2 - 2xy + y^2$ です。これを $(x+y)^2 = x^2 + 2xy + y^2$ と比較すると、$4xy$ 分だけ少ないため、$(x+y)^2 - 4xy$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "$x^3 + y^3$ を $x+y$ と $xy$ を用いて表せ。",
        options: [ "$(x+y)^3 - 3xy(x+y)$", "$(x+y)^3 + 3xy(x+y)$", "$(x+y)^3 - xy(x+y)$", "$(x+y)(x^2 + y^2)$" ],
        answer: "$(x+y)^3 - 3xy(x+y)$",
        rationale: "<strong>公式: </strong>3乗の和の変形公式です。<br><strong>解説: </strong>$(x+y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$ より、$x^3+y^3 = (x+y)^3 - 3xy(x+y)$ と変形できます。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "$\\frac{y}{x} + \\frac{x}{y}$ を通分して変形した式を選べ。",
        options: [ "$\\frac{x^2+y^2}{xy}$", "$\\frac{x+y}{xy}$", "$\\frac{x^2+y^2}{x+y}$", "$\\frac{(x+y)^2}{xy}$" ],
        answer: "$\\frac{x^2+y^2}{xy}$",
        rationale: "<strong>解説: </strong>分母を $xy$ で通分します。<br>$\\frac{y \\times y}{x \\times y} + \\frac{x \\times x}{y \\times x} = \\frac{y^2}{xy} + \\frac{x^2}{xy} = \\frac{x^2+y^2}{xy}$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "$x^2+xy+y^2$ を基本対称式で表せ。",
        options: [ "$(x+y)^2 - xy$", "$(x+y)^2 - 2xy$", "$(x+y)^2 + xy$", "$(x-y)^2 + xy$" ],
        answer: "$(x+y)^2 - xy$",
        rationale: "<strong>解説: </strong>$(x+y)^2 = x^2+2xy+y^2$ なので、ここから $xy$ を引けば $x^2+xy+y^2$ になります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "$x+y=4, xy=3$ のとき、$x^2+y^2$ の値を求めよ。",
        options: [ "$10$", "$13$", "$7$", "$19$" ],
        answer: "$10$",
        rationale: "<strong>解説: </strong>$x^2+y^2 = (x+y)^2 - 2xy$ に代入します。<br>$4^2 - 2 \\times 3 = 16 - 6 = 10$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "$x+y=-3, xy=2$ のとき、$x^2+y^2$ の値を求めよ。",
        options: [ "$5$", "$13$", "$7$", "$-5$" ],
        answer: "$5$",
        rationale: "<strong>解説: </strong>$x^2+y^2 = (x+y)^2 - 2xy$ に代入します。<br>$(-3)^2 - 2 \\times 2 = 9 - 4 = 5$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "$x+y=5, xy=-2$ のとき、$x^2+y^2$ の値を求めよ。",
        options: [ "$21$", "$29$", "$25$", "$27$" ],
        answer: "$29$",
        rationale: "<strong>解説: </strong>$x^2+y^2 = (x+y)^2 - 2xy$ に代入します。<br>$5^2 - 2 \\times (-2) = 25 + 4 = 29$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "$x+y=6, xy=5$ のとき、$(x-y)^2$ の値を求めよ。",
        options: [ "$16$", "$26$", "$11$", "$36$" ],
        answer: "$16$",
        rationale: "<strong>解説: </strong>$(x-y)^2 = (x+y)^2 - 4xy$ に代入します。<br>$6^2 - 4 \\times 5 = 36 - 20 = 16$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "$x+y=3, xy=1$ のとき、$x^3+y^3$ の値を求めよ。",
        options: [ "$18$", "$24$", "$27$", "$9$" ],
        answer: "$18$",
        rationale: "<strong>解説: </strong>$x^3+y^3 = (x+y)^3 - 3xy(x+y)$ に代入します。<br>$3^3 - 3 \\times 1 \\times 3 = 27 - 9 = 18$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 11
    {
        question: "$x+y=4, xy=2$ のとき、$\\frac{y}{x} + \\frac{x}{y}$ の値を求めよ。",
        options: [ "$6$", "$8$", "$4$", "$12$" ],
        answer: "$6$",
        rationale: "<strong>解説: </strong>$\\frac{y}{x} + \\frac{x}{y} = \\frac{x^2+y^2}{xy}$ です。<br>分子は $x^2+y^2 = (x+y)^2 - 2xy = 4^2 - 2(2) = 16-4=12$。<br>よって、$\\frac{12}{2} = 6$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "$x+y=1, xy=-1$ のとき、$x^3+y^3$ の値を求めよ。",
        options: [ "$4$", "$1$", "$-2$", "$2$" ],
        answer: "$4$",
        rationale: "<strong>解説: </strong>$x^3+y^3 = (x+y)^3 - 3xy(x+y)$ に代入します。<br>$1^3 - 3(-1)(1) = 1 + 3 = 4$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "$x+y=3, x^2+y^2=7$ のとき、$xy$ の値を求めよ。",
        options: [ "$1$", "$2$", "$-1$", "$9$" ],
        answer: "$1$",
        rationale: "<strong>解説: </strong>$x^2+y^2 = (x+y)^2 - 2xy$ より、$7 = 3^2 - 2xy$。<br>$7 = 9 - 2xy$ なので、$2xy = 2$, つまり $xy=1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "$x-y=2, xy=3$ のとき、$x^2+y^2$ の値を求めよ。",
        options: [ "$10$", "$7$", "$13$", "$1$" ],
        answer: "$10$",
        rationale: "<strong>解説: </strong>$x^2+y^2 = (x-y)^2 + 2xy$ という変形もできます。<br>$2^2 + 2(3) = 4 + 6 = 10$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "$x^2+y^2=13, xy=6$ のとき、$x+y$ の値の候補はどれか。",
        options: [ "$\\pm 5$", "$5$", "$\\pm 1$", "$7$" ],
        answer: "$\\pm 5$",
        rationale: "<strong>解説: </strong>$(x+y)^2 = x^2+y^2+2xy = 13 + 2(6) = 25$。<br>2乗して25になる数は $\\pm 5$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "$x=\\sqrt{2}+1, y=\\sqrt{2}-1$ のとき、$x+y$ の値を求めよ。",
        options: [ "$2\\sqrt{2}$", "$2$", "$\\sqrt{2}$", "$0$" ],
        answer: "$2\\sqrt{2}$",
        rationale: "<strong>解説: </strong>$x+y = (\\sqrt{2}+1) + (\\sqrt{2}-1) = 2\\sqrt{2}$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "$x=\\sqrt{3}+\\sqrt{2}, y=\\sqrt{3}-\\sqrt{2}$ のとき、$x+y$ の値を求めよ。",
        options: [ "$2\\sqrt{3}$", "$2\\sqrt{2}$", "$\\sqrt{6}$", "$2$" ],
        answer: "$2\\sqrt{3}$",
        rationale: "<strong>解説: </strong>$x+y = (\\sqrt{3}+\\sqrt{2}) + (\\sqrt{3}-\\sqrt{2}) = 2\\sqrt{3}$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "$x=\\sqrt{5}+2, y=\\sqrt{5}-2$ のとき、$xy$ の値を求めよ。",
        options: [ "$1$", "$9$", "$5-2\\sqrt{5}$", "$3$" ],
        answer: "$1$",
        rationale: "<strong>解説: </strong>$xy = (\\sqrt{5}+2)(\\sqrt{5}-2)$ です。和と差の積の公式 $(a+b)(a-b)=a^2-b^2$ を利用します。<br>$(\\sqrt{5})^2 - 2^2 = 5 - 4 = 1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "$x=\\sqrt{7}+\\sqrt{3}, y=\\sqrt{7}-\\sqrt{3}$ のとき、$xy$ の値を求めよ。",
        options: [ "$4$", "$10$", "$7$", "$3$" ],
        answer: "$4$",
        rationale: "<strong>解説: </strong>$xy = (\\sqrt{7}+\\sqrt{3})(\\sqrt{7}-\\sqrt{3}) = (\\sqrt{7})^2 - (\\sqrt{3})^2 = 7 - 3 = 4$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "$x=\\sqrt{3}+1, y=\\sqrt{3}-1$ のとき、$x^2+y^2$ の値を求めよ。",
        options: [ "$8$", "$6$", "$4$", "$10$" ],
        answer: "$8$",
        rationale: "<strong>解説: </strong>まず和と積を求めます。<br>$x+y = 2\\sqrt{3}, \\ xy = 3-1=2$<br>$x^2+y^2 = (x+y)^2 - 2xy = (2\\sqrt{3})^2 - 2(2) = 12 - 4 = 8$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 21
    {
        question: "$x=\\sqrt{6}+\\sqrt{2}, y=\\sqrt{6}-\\sqrt{2}$ のとき、$x^2+y^2$ の値を求めよ。",
        options: [ "$16$", "$12$", "$20$", "$8$" ],
        answer: "$16$",
        rationale: "<strong>解説: </strong>和と積を求めます。<br>$x+y = 2\\sqrt{6}, \\ xy = 6-2=4$<br>$x^2+y^2 = (x+y)^2 - 2xy = (2\\sqrt{6})^2 - 2(4) = 24 - 8 = 16$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "$x=3+\\sqrt{5}, y=3-\\sqrt{5}$ のとき、$x^2+y^2$ の値を求めよ。",
        options: [ "$28$", "$32$", "$36$", "$30$" ],
        answer: "$28$",
        rationale: "<strong>解説: </strong>$x+y=6, xy=9-5=4$ なので、<br>$x^2+y^2 = (x+y)^2 - 2xy = 6^2 - 2(4) = 36 - 8 = 28$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "$x=\\frac{1+\\sqrt{5}}{2}, y=\\frac{1-\\sqrt{5}}{2}$ のとき、$x+y$ の値を求めよ。",
        options: [ "$1$", "$\\sqrt{5}$", "$2$", "$0$" ],
        answer: "$1$",
        rationale: "<strong>解説: </strong>$x+y = \\frac{1+\\sqrt{5} + 1-\\sqrt{5}}{2} = \\frac{2}{2} = 1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "$x=\\frac{1+\\sqrt{5}}{2}, y=\\frac{1-\\sqrt{5}}{2}$ のとき、$xy$ の値を求めよ。",
        options: [ "$-1$", "$1$", "$-4$", "$\\frac{1}{4}$" ],
        answer: "$-1$",
        rationale: "<strong>解説: </strong>$xy = \\frac{(1+\\sqrt{5})(1-\\sqrt{5})}{4} = \\frac{1-5}{4} = \\frac{-4}{4} = -1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "$x=\\frac{1+\\sqrt{5}}{2}, y=\\frac{1-\\sqrt{5}}{2}$ のとき、$x^2+y^2$ の値を求めよ。",
        options: [ "$3$", "$1$", "$2$", "$5$" ],
        answer: "$3$",
        rationale: "<strong>解説: </strong>$x+y=1, xy=-1$ より、<br>$x^2+y^2 = (x+y)^2 - 2xy = 1^2 - 2(-1) = 1+2=3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "$\\frac{1}{\\sqrt{2}+1}$ を有理化せよ。",
        options: [ "$\\sqrt{2}-1$", "$\\sqrt{2}+1$", "$1-\\sqrt{2}$", "$\\frac{\\sqrt{2}-1}{2}$" ],
        answer: "$\\sqrt{2}-1$",
        rationale: "<strong>解説: </strong>分母と分子に $\\sqrt{2}-1$ を掛けます。<br>$\\frac{\\sqrt{2}-1}{(\\sqrt{2}+1)(\\sqrt{2}-1)} = \\frac{\\sqrt{2}-1}{2-1} = \\sqrt{2}-1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "$\\frac{1}{\\sqrt{3}-\\sqrt{2}}$ を有理化せよ。",
        options: [ "$\\sqrt{3}+\\sqrt{2}$", "$\\sqrt{3}-\\sqrt{2}$", "$\\sqrt{3}$", "$1$" ],
        answer: "$\\sqrt{3}+\\sqrt{2}$",
        rationale: "<strong>解説: </strong>分母と分子に $\\sqrt{3}+\\sqrt{2}$ を掛けます。<br>分母は $(\\sqrt{3})^2 - (\\sqrt{2})^2 = 3-2=1$ となるため、分子の $\\sqrt{3}+\\sqrt{2}$ が答えです。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "$x=\\frac{1}{\\sqrt{3}+1}, y=\\frac{1}{\\sqrt{3}-1}$ のとき、$x+y$ の値を求めよ。",
        options: [ "$\\sqrt{3}$", "$2\\sqrt{3}$", "$1$", "$3$" ],
        answer: "$\\sqrt{3}$",
        rationale: "<strong>解説: </strong>有理化します。<br>$x = \\frac{\\sqrt{3}-1}{3-1} = \\frac{\\sqrt{3}-1}{2}$<br>$y = \\frac{\\sqrt{3}+1}{3-1} = \\frac{\\sqrt{3}+1}{2}$<br>$x+y = \\frac{\\sqrt{3}-1 + \\sqrt{3}+1}{2} = \\frac{2\\sqrt{3}}{2} = \\sqrt{3}$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "$x=\\frac{1}{\\sqrt{3}+1}, y=\\frac{1}{\\sqrt{3}-1}$ のとき、$xy$ の値を求めよ。",
        options: [ "$\\frac{1}{2}$", "$1$", "$2$", "$\\frac{1}{4}$" ],
        answer: "$\\frac{1}{2}$",
        rationale: "<strong>解説: </strong>$xy = \\frac{1}{(\\sqrt{3}+1)(\\sqrt{3}-1)} = \\frac{1}{3-1} = \\frac{1}{2}$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "【画像の問題】$x=\\frac{4}{\\sqrt{6}+\\sqrt{2}}$ を有理化せよ。",
        options: [ "$\\sqrt{6}-\\sqrt{2}$", "$\\sqrt{6}+\\sqrt{2}$", "$2(\\sqrt{6}-\\sqrt{2})$", "$4(\\sqrt{6}-\\sqrt{2})$" ],
        answer: "$\\sqrt{6}-\\sqrt{2}$",
        rationale: "<strong>解説: </strong>分母・分子に $\\sqrt{6}-\\sqrt{2}$ を掛けます。<br>分母は $6-2=4$ になります。<br>$x = \\frac{4(\\sqrt{6}-\\sqrt{2})}{4} = \\sqrt{6}-\\sqrt{2}$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 31
    {
        question: "【画像の問題】$y=\\frac{4}{\\sqrt{6}-\\sqrt{2}}$ を有理化せよ。",
        options: [ "$\\sqrt{6}+\\sqrt{2}$", "$\\sqrt{6}-\\sqrt{2}$", "$2(\\sqrt{6}+\\sqrt{2})$", "$4$" ],
        answer: "$\\sqrt{6}+\\sqrt{2}$",
        rationale: "<strong>解説: </strong>分母・分子に $\\sqrt{6}+\\sqrt{2}$ を掛けます。<br>分母は $6-2=4$ になります。<br>$y = \\frac{4(\\sqrt{6}+\\sqrt{2})}{4} = \\sqrt{6}+\\sqrt{2}$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "【画像の問題(1)】$x=\\frac{4}{\\sqrt{6}+\\sqrt{2}}, y=\\frac{4}{\\sqrt{6}-\\sqrt{2}}$ のとき、$x+y$ の値を求めよ。",
        options: [ "$2\\sqrt{6}$", "$2\\sqrt{2}$", "$4\\sqrt{6}$", "$8$" ],
        answer: "$2\\sqrt{6}$",
        rationale: "<strong>解説: </strong>有理化すると $x=\\sqrt{6}-\\sqrt{2}, y=\\sqrt{6}+\\sqrt{2}$ です。<br>$x+y = (\\sqrt{6}-\\sqrt{2}) + (\\sqrt{6}+\\sqrt{2}) = 2\\sqrt{6}$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "【画像の問題(2)】$x=\\frac{4}{\\sqrt{6}+\\sqrt{2}}, y=\\frac{4}{\\sqrt{6}-\\sqrt{2}}$ のとき、$xy$ の値を求めよ。",
        options: [ "$4$", "$2$", "$6$", "$16$" ],
        answer: "$4$",
        rationale: "<strong>解説: </strong>$xy = (\\sqrt{6}-\\sqrt{2})(\\sqrt{6}+\\sqrt{2}) = 6 - 2 = 4$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "【画像の問題(3)】$x=\\frac{4}{\\sqrt{6}+\\sqrt{2}}, y=\\frac{4}{\\sqrt{6}-\\sqrt{2}}$ のとき、$x^2+y^2$ の値を求めよ。",
        options: [ "$16$", "$24$", "$8$", "$20$" ],
        answer: "$16$",
        rationale: "<strong>解説: </strong>$x+y=2\\sqrt{6}, xy=4$ を利用します。<br>$x^2+y^2 = (x+y)^2 - 2xy = (2\\sqrt{6})^2 - 2(4) = 24 - 8 = 16$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "【画像の問題(4)】$x=\\frac{4}{\\sqrt{6}+\\sqrt{2}}, y=\\frac{4}{\\sqrt{6}-\\sqrt{2}}$ のとき、$(x-y)^2$ の値を求めよ。",
        options: [ "$8$", "$16$", "$4$", "$12$" ],
        answer: "$8$",
        rationale: "<strong>解説: </strong>$(x-y)^2 = (x+y)^2 - 4xy$ を利用します。<br>$(2\\sqrt{6})^2 - 4(4) = 24 - 16 = 8$ です。<br>（別解：$x-y = -2\\sqrt{2}$ なので、2乗して $8$）" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "$x=\\frac{\\sqrt{5}+\\sqrt{3}}{\\sqrt{5}-\\sqrt{3}}$ の分母を有理化せよ。",
        options: [ "$4+\\sqrt{15}$", "$4-\\sqrt{15}$", "$8+2\\sqrt{15}$", "$1$" ],
        answer: "$4+\\sqrt{15}$",
        rationale: "<strong>解説: </strong>分母・分子に $\\sqrt{5}+\\sqrt{3}$ を掛けます。<br>分母: $5-3=2$<br>分子: $(\\sqrt{5}+\\sqrt{3})^2 = 5 + 2\\sqrt{15} + 3 = 8 + 2\\sqrt{15}$<br>約分して $4+\\sqrt{15}$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "$x=\\frac{\\sqrt{5}+\\sqrt{3}}{\\sqrt{5}-\\sqrt{3}}, y=\\frac{\\sqrt{5}-\\sqrt{3}}{\\sqrt{5}+\\sqrt{3}}$ のとき、$x+y$ の値を求めよ。",
        options: [ "$8$", "$4$", "$2\\sqrt{15}$", "$16$" ],
        answer: "$8$",
        rationale: "<strong>解説: </strong>$x=4+\\sqrt{15}, y=4-\\sqrt{15}$ となります。<br>よって $x+y = (4+\\sqrt{15}) + (4-\\sqrt{15}) = 8$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "$x=\\frac{\\sqrt{5}+\\sqrt{3}}{\\sqrt{5}-\\sqrt{3}}, y=\\frac{\\sqrt{5}-\\sqrt{3}}{\\sqrt{5}+\\sqrt{3}}$ のとき、$xy$ の値を求めよ。",
        options: [ "$1$", "$8$", "$4$", "$\\sqrt{15}$" ],
        answer: "$1$",
        rationale: "<strong>解説: </strong>互いに逆数の関係にあるため、掛け合わせると約分されて $1$ になります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "$x=\\frac{\\sqrt{5}+\\sqrt{3}}{\\sqrt{5}-\\sqrt{3}}, y=\\frac{\\sqrt{5}-\\sqrt{3}}{\\sqrt{5}+\\sqrt{3}}$ のとき、$x^2+y^2$ の値を求めよ。",
        options: [ "$62$", "$64$", "$60$", "$14$" ],
        answer: "$62$",
        rationale: "<strong>解説: </strong>$x+y=8, xy=1$ より、<br>$x^2+y^2 = 8^2 - 2(1) = 64 - 2 = 62$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "$x=2-\\sqrt{3}$ のとき、$x + \\frac{1}{x}$ の値を求めよ。",
        options: [ "$4$", "$2\\sqrt{3}$", "$1$", "$2$" ],
        answer: "$4$",
        rationale: "<strong>解説: </strong>$\\frac{1}{x} = \\frac{1}{2-\\sqrt{3}} = 2+\\sqrt{3}$ (有理化)。<br>よって $x + \\frac{1}{x} = (2-\\sqrt{3}) + (2+\\sqrt{3}) = 4$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 41
    {
        question: "$x=2-\\sqrt{3}$ のとき、$x^2 + \\frac{1}{x^2}$ の値を求めよ。",
        options: [ "$14$", "$16$", "$12$", "$18$" ],
        answer: "$14$",
        rationale: "<strong>解説: </strong>$x^2 + \\frac{1}{x^2} = (x + \\frac{1}{x})^2 - 2$ を利用します。<br>前問より $x+\\frac{1}{x}=4$ なので、$4^2 - 2 = 16 - 2 = 14$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "$x+y=2\\sqrt{3}, xy=2$ のとき、$x^2+y^2$ を計算せよ。",
        options: [ "$8$", "$10$", "$12$", "$6$" ],
        answer: "$8$",
        rationale: "<strong>解説: </strong>$(2\\sqrt{3})^2 - 2(2) = 12 - 4 = 8$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "$x+y=\\sqrt{5}, x-y=\\sqrt{3}$ のとき、$x^2-y^2$ の値を求めよ。",
        options: [ "$\\sqrt{15}$", "$2$", "$8$", "$\\sqrt{2}$" ],
        answer: "$\\sqrt{15}$",
        rationale: "<strong>解説: </strong>$x^2-y^2 = (x+y)(x-y)$ です。<br>$\\sqrt{5} \\times \\sqrt{3} = \\sqrt{15}$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "$x+y=\\sqrt{5}, x-y=\\sqrt{3}$ のとき、$xy$ の値を求めよ。",
        options: [ "$\\frac{1}{2}$", "$1$", "$2$", "$\\frac{\\sqrt{15}}{4}$" ],
        answer: "$\\frac{1}{2}$",
        rationale: "<strong>解説: </strong>$(x+y)^2 - (x-y)^2 = 4xy$ という恒等式を利用すると便利です。<br>$(\\sqrt{5})^2 - (\\sqrt{3})^2 = 5-3=2$<br>$4xy = 2$ なので、$xy = \\frac{2}{4} = \\frac{1}{2}$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "$x+y=t, xy=u$ とするとき、$x^2+y^2$ を表す式はどれか。",
        options: [ "$t^2-2u$", "$t^2+2u$", "$t^2-u$", "$t-2u$" ],
        answer: "$t^2-2u$",
        rationale: "<strong>定義: </strong>基本対称式の確認です。<br><strong>解説: </strong>$x^2+y^2 = (x+y)^2 - 2xy$ に代入すると $t^2-2u$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "$x=\\sqrt{10}-3$ のとき、$x+3$ の値は？",
        options: [ "$\\sqrt{10}$", "$3$", "$10$", "$\\sqrt{7}$" ],
        answer: "$\\sqrt{10}$",
        rationale: "<strong>解説: </strong>$x+3 = (\\sqrt{10}-3)+3 = \\sqrt{10}$ です。（式の値の準備）" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "$x=3+\\sqrt{2}, y=3-\\sqrt{2}$ のとき、$\\frac{x}{y} + \\frac{y}{x}$ の値を求めよ。",
        options: [ "$\\frac{22}{7}$", "$4$", "$\\frac{18}{7}$", "$2$" ],
        answer: "$\\frac{22}{7}$",
        rationale: "<strong>解説: </strong>$\\frac{x^2+y^2}{xy}$ を計算します。<br>$x+y=6, xy=9-2=7$。<br>$x^2+y^2 = 6^2-2(7) = 36-14=22$。<br>よって $\\frac{22}{7}$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "$a+b+c=0$ のとき、$(a+b)(b+c)(c+a)$ を変形せよ。",
        options: [ "$-abc$", "$-a^2b^2c^2$", "$-3abc$", "$abc$" ],
        answer: "-abc",
        rationale: "<strong>解説: </strong>$a+b=-c, b+c=-a, c+a=-b$ を代入します。<br>$(-c)(-a)(-b) = -abc$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "$x+y=2$ のとき、$x^2+y^2+2xy$ の値は？",
        options: [ "$4$", "$2$", "$8$", "$1$" ],
        answer: "$4$",
        rationale: "<strong>解説: </strong>$x^2+y^2+2xy = (x+y)^2$ です。<br>$2^2 = 4$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "$x=\\frac{1}{\\sqrt{2}}$ のとき、$x + \\frac{1}{x}$ の値は？",
        options: [ "$\\frac{3\\sqrt{2}}{2}$", "$\\sqrt{2}$", "$2\\sqrt{2}$", "$2$" ],
        answer: "$\\frac{3\\sqrt{2}}{2}$",
        rationale: "<strong>解説: </strong>$x=\\frac{\\sqrt{2}}{2}, \\frac{1}{x}=\\sqrt{2}$ です。<br>足すと $\\frac{\\sqrt{2}}{2} + \\frac{2\\sqrt{2}}{2} = \\frac{3\\sqrt{2}}{2}$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    }
];