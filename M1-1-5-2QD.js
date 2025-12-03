const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7711/63166' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";
window.QUIZ_DATA = [
    // --- レベル1: 基本的な加減法（係数が揃っている・符号が逆など） (1-10) ---
    // 問題 1
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x + y = 6 \\\\ x - y = 2 \\end{cases}$",
        options: ["$x=4, y=2$", "$x=2, y=4$", "$x=3, y=3$", "$x=5, y=1$"],
        answer: "$x=4, y=2$",
        rationale: "<strong>解説: </strong>2つの式を足します。<br>$(x+y) + (x-y) = 6 + 2$<br>$2x = 8 \\Rightarrow x = 4$<br>$x=4$ を上の式に代入します。<br>$4 + y = 6 \\Rightarrow y = 2$<br>よって、$x=4, y=2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 2x + y = 7 \\\\ 2x - y = 1 \\end{cases}$",
        options: ["$x=2, y=3$", "$x=3, y=1$", "$x=2, y=1$", "$x=4, y=-1$"],
        answer: "$x=2, y=3$",
        rationale: "<strong>解説: </strong>2つの式を足して $y$ を消去します。<br>$4x = 8 \\Rightarrow x = 2$<br>$x=2$ を上の式に代入します。<br>$2(2) + y = 7 \\Rightarrow 4 + y = 7 \\Rightarrow y = 3$<br>よって、$x=2, y=3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x + 2y = 8 \\\\ x - 2y = 4 \\end{cases}$",
        options: ["$x=6, y=1$", "$x=6, y=2$", "$x=4, y=2$", "$x=8, y=0$"],
        answer: "$x=6, y=1$",
        rationale: "<strong>解説: </strong>2つの式を足して $y$ を消去します。<br>$2x = 12 \\Rightarrow x = 6$<br>$x=6$ を上の式に代入します。<br>$6 + 2y = 8 \\Rightarrow 2y = 2 \\Rightarrow y = 1$<br>よって、$x=6, y=1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 3x + y = 10 \\\\ x + y = 4 \\end{cases}$",
        options: ["$x=3, y=1$", "$x=2, y=2$", "$x=3, y=2$", "$x=4, y=0$"],
        answer: "$x=3, y=1$",
        rationale: "<strong>解説: </strong>上の式から下の式を引いて $y$ を消去します。<br>$2x = 6 \\Rightarrow x = 3$<br>$x=3$ を下の式に代入します。<br>$3 + y = 4 \\Rightarrow y = 1$<br>よって、$x=3, y=1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 2x - 3y = 1 \\\\ 2x + y = 9 \\end{cases}$",
        options: ["$x=2, y=5$", "$x=3, y=3$", "$x=4, y=1$", "$x=3.5, y=2$"],
        answer: "$x=3.5, y=2$",
        rationale: "<strong>解説: </strong>下の式から上の式を引いて $x$ を消去します。<br>$y - (-3y) = 9 - 1$<br>$4y = 8 \\Rightarrow y = 2$<br>$y=2$ を下の式に代入します。<br>$2x + 2 = 9 \\Rightarrow 2x = 7 \\Rightarrow x = \\frac{7}{2} (=3.5)$<br>よって、$x=\\frac{7}{2}, y=2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x + y = 5 \\\\ x - y = -1 \\end{cases}$",
        options: ["$x=2, y=3$", "$x=3, y=2$", "$x=1, y=4$", "$x=4, y=1$"],
        answer: "$x=2, y=3$",
        rationale: "<strong>解説: </strong>2つの式を足します。<br>$2x = 4 \\Rightarrow x = 2$<br>$x=2$ を上の式に代入します。<br>$2 + y = 5 \\Rightarrow y = 3$<br>よって、$x=2, y=3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 5x + 2y = 12 \\\\ 3x + 2y = 8 \\end{cases}$",
        options: ["$x=2, y=1$", "$x=1, y=2$", "$x=2, y=2$", "$x=3, y=0$"],
        answer: "$x=2, y=1$",
        rationale: "<strong>解説: </strong>上の式から下の式を引きます。<br>$2x = 4 \\Rightarrow x = 2$<br>$x=2$ を下の式に代入します。<br>$3(2) + 2y = 8 \\Rightarrow 6 + 2y = 8 \\Rightarrow 2y = 2 \\Rightarrow y = 1$<br>よって、$x=2, y=1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 4x + 3y = 2 \\\\ 4x - y = 6 \\end{cases}$",
        options: ["$x=1, y=-2$", "$x=2, y=-2$", "$x=1.25, y=-1$", "$x=1, y=2$"],
        answer: "$x=1.25, y=-1$",
        rationale: "<strong>解説: </strong>上の式から下の式を引きます。<br>$4y = -4 \\Rightarrow y = -1$<br>$y=-1$ を下の式に代入します。<br>$4x - (-1) = 6 \\Rightarrow 4x + 1 = 6 \\Rightarrow 4x = 5 \\Rightarrow x = \\frac{5}{4} (=1.25)$<br>よって、$x=\\frac{5}{4}, y=-1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 3x - y = 7 \\\\ x + y = 5 \\end{cases}$",
        options: ["$x=3, y=2$", "$x=2, y=3$", "$x=4, y=1$", "$x=3, y=-1$"],
        answer: "$x=3, y=2$",
        rationale: "<strong>解説: </strong>2つの式を足します。<br>$4x = 12 \\Rightarrow x = 3$<br>$x=3$ を下の式に代入します。<br>$3 + y = 5 \\Rightarrow y = 2$<br>よって、$x=3, y=2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 2x + 5y = 15 \\\\ -2x + y = 3 \\end{cases}$",
        options: ["$x=0, y=3$", "$x=1, y=3$", "$x=2, y=2$", "$x=-1, y=3$"],
        answer: "$x=0, y=3$",
        rationale: "<strong>解説: </strong>2つの式を足します。<br>$6y = 18 \\Rightarrow y = 3$<br>$y=3$ を下の式に代入します。<br>$-2x + 3 = 3 \\Rightarrow -2x = 0 \\Rightarrow x = 0$<br>よって、$x=0, y=3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },

    // --- レベル2: 一方を何倍かして係数を揃える (11-20) ---
    // 問題 11
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x + 2y = 8 \\\\ 2x + y = 7 \\end{cases}$",
        options: ["$x=2, y=3$", "$x=3, y=2$", "$x=4, y=2$", "$x=1, y=5$"],
        answer: "$x=2, y=3$",
        rationale: "<strong>解説: </strong>上の式を2倍して $x$ の係数を揃えます。<br>$2x + 4y = 16$<br>これと下の式 $2x + y = 7$ を引きます。<br>$3y = 9 \\Rightarrow y = 3$<br>$y=3$ を上の式（元の式）に代入します。<br>$x + 6 = 8 \\Rightarrow x = 2$<br>よって、$x=2, y=3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 3x + y = 5 \\\\ x - 2y = 4 \\end{cases}$",
        options: ["$x=2, y=-1$", "$x=1, y=2$", "$x=3, y=-4$", "$x=0, y=5$"],
        answer: "$x=2, y=-1$",
        rationale: "<strong>解説: </strong>上の式を2倍して $y$ の係数を揃えます。<br>$6x + 2y = 10$<br>これと下の式 $x - 2y = 4$ を足します。<br>$7x = 14 \\Rightarrow x = 2$<br>$x=2$ を上の式に代入します。<br>$6 + y = 5 \\Rightarrow y = -1$<br>よって、$x=2, y=-1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 2x + 3y = 8 \\\\ x + y = 3 \\end{cases}$",
        options: ["$x=1, y=2$", "$x=2, y=1$", "$x=3, y=0$", "$x=0, y=3$"],
        answer: "$x=1, y=2$",
        rationale: "<strong>解説: </strong>下の式を2倍して $x$ を消去しやすくします。<br>$2x + 2y = 6$<br>上の式 $2x + 3y = 8$ からこれを引きます。<br>$y = 2$<br>$y=2$ を下の式に代入します。<br>$x + 2 = 3 \\Rightarrow x = 1$<br>よって、$x=1, y=2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 3x - y = 9 \\\\ 2x + 3y = 17 \\end{cases}$",
        options: ["$x=3, y=2$", "$x=4, y=3$", "$x=5, y=1$", "$x=2, y=-3$"],
        answer: "$x=4, y=3$",
        rationale: "<strong>解説: </strong>上の式を3倍して $y$ を消去しやすくします。<br>$9x - 3y = 27$<br>これと下の式 $2x + 3y = 17$ を足します。<br>$11x = 44 \\Rightarrow x = 4$<br>$x=4$ を上の式に代入します。<br>$12 - y = 9 \\Rightarrow -y = -3 \\Rightarrow y = 3$<br>よって、$x=4, y=3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 4x + 5y = 2 \\\\ 2x - y = 8 \\end{cases}$",
        options: ["$x=3, y=-2$", "$x=2, y=-4$", "$x=1, y=-2$", "$x=3, y=2$"],
        answer: "$x=3, y=-2$",
        rationale: "<strong>解説: </strong>下の式を2倍して $x$ の係数を揃えます。<br>$4x - 2y = 16$<br>上の式 $4x + 5y = 2$ からこれを引きます。<br>$7y = -14 \\Rightarrow y = -2$<br>$y=-2$ を下の式に代入します。<br>$2x - (-2) = 8 \\Rightarrow 2x + 2 = 8 \\Rightarrow 2x = 6 \\Rightarrow x = 3$<br>よって、$x=3, y=-2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x - 3y = 5 \\\\ 3x + 2y = 4 \\end{cases}$",
        options: ["$x=2, y=-1$", "$x=1, y=-1$", "$x=2, y=1$", "$x=5, y=0$"],
        answer: "$x=2, y=-1$",
        rationale: "<strong>解説: </strong>上の式を3倍して $x$ を消去しやすくします。<br>$3x - 9y = 15$<br>下の式 $3x + 2y = 4$ からこれを引きます。<br>$11y = -11 \\Rightarrow y = -1$<br>$y=-1$ を上の式に代入します。<br>$x - 3(-1) = 5 \\Rightarrow x + 3 = 5 \\Rightarrow x = 2$<br>よって、$x=2, y=-1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 5x - 2y = 8 \\\\ -x + 5y = 3 \\end{cases}$",
        options: ["$x=1, y=2$", "$x=2, y=1$", "$x=2, y=2$", "$x=1, y=1$"],
        answer: "$x=2, y=1$",
        rationale: "<strong>解説: </strong>下の式を5倍して $x$ の係数を揃えます。<br>$-5x + 25y = 15$<br>これと上の式 $5x - 2y = 8$ を足します。<br>$23y = 23 \\Rightarrow y = 1$<br>$y=1$ を下の式に代入します。<br>$-x + 5 = 3 \\Rightarrow -x = -2 \\Rightarrow x = 2$<br>よって、$x=2, y=1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 2x + y = 10 \\\\ x - 3y = -9 \\end{cases}$",
        options: ["$x=3, y=4$", "$x=2, y=6$", "$x=4, y=2$", "$x=3, y=5$"],
        answer: "$x=3, y=4$",
        rationale: "<strong>解説: </strong>下の式を2倍します。<br>$2x - 6y = -18$<br>上の式 $2x + y = 10$ からこれを引きます。<br>$7y = 28 \\Rightarrow y = 4$<br>$y=4$ を下の式に代入します。<br>$x - 12 = -9 \\Rightarrow x = 3$<br>よって、$x=3, y=4$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 4x + 3y = 11 \\\\ 2x + y = 5 \\end{cases}$",
        options: ["$x=2, y=1$", "$x=1, y=3$", "$x=3, y=-1$", "$x=2, y=2$"],
        answer: "$x=2, y=1$",
        rationale: "<strong>解説: </strong>下の式を2倍します。<br>$4x + 2y = 10$<br>上の式 $4x + 3y = 11$ からこれを引きます。<br>$y = 1$<br>$y=1$ を下の式に代入します。<br>$2x + 1 = 5 \\Rightarrow 2x = 4 \\Rightarrow x = 2$<br>よって、$x=2, y=1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} -3x + 4y = 1 \\\\ x - 2y = -1 \\end{cases}$",
        options: ["$x=1, y=1$", "$x=3, y=2$", "$x=2, y=1$", "$x=5, y=4$"],
        answer: "$x=1, y=1$",
        rationale: "<strong>解説: </strong>下の式を3倍します。<br>$3x - 6y = -3$<br>これと上の式 $-3x + 4y = 1$ を足します。<br>$-2y = -2 \\Rightarrow y = 1$<br>$y=1$ を下の式に代入します。<br>$x - 2 = -1 \\Rightarrow x = 1$<br>よって、$x=1, y=1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },

    // --- レベル3: 両方を何倍かして係数を揃える (21-30) ---
    // 問題 21
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 2x + 3y = 13 \\\\ 3x + 2y = 12 \\end{cases}$",
        options: ["$x=2, y=3$", "$x=3, y=2$", "$x=1, y=4$", "$x=4, y=1$"],
        answer: "$x=2, y=3$",
        rationale: "<strong>解説: </strong>上の式を3倍、下の式を2倍して $x$ の係数を揃えます。<br>① $\\times 3$: $6x + 9y = 39$<br>② $\\times 2$: $6x + 4y = 24$<br>引きます: $5y = 15 \\Rightarrow y = 3$<br>$y=3$ を下の式に代入します。<br>$3x + 6 = 12 \\Rightarrow 3x = 6 \\Rightarrow x = 2$<br>よって、$x=2, y=3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 3x - 2y = 10 \\\\ 4x + 3y = 2 \\end{cases}$",
        options: ["$x=2, y=-2$", "$x=2, y=-1$", "$x=4, y=1$", "$x=-2, y=2$"],
        answer: "$x=2, y=-2$",
        rationale: "<strong>解説: </strong>上の式を3倍、下の式を2倍して $y$ の係数を揃えます。<br>① $\\times 3$: $9x - 6y = 30$<br>② $\\times 2$: $8x + 6y = 4$<br>足します: $17x = 34 \\Rightarrow x = 2$<br>$x=2$ を上の式に代入します。<br>$6 - 2y = 10 \\Rightarrow -2y = 4 \\Rightarrow y = -2$<br>よって、$x=2, y=-2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 5x - 3y = 1 \\\\ 2x - 5y = -11 \\end{cases}$",
        options: ["$x=2, y=3$", "$x=1, y=2$", "$x=3, y=5$", "$x=-1, y=-2$"],
        answer: "$x=2, y=3$",
        rationale: "<strong>解説: </strong>上の式を2倍、下の式を5倍して $x$ を消去します。<br>① $\\times 2$: $10x - 6y = 2$<br>② $\\times 5$: $10x - 25y = -55$<br>引きます: $19y = 57 \\Rightarrow y = 3$<br>$y=3$ を上の式に代入します。<br>$5x - 9 = 1 \\Rightarrow 5x = 10 \\Rightarrow x = 2$<br>よって、$x=2, y=3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 3x + 4y = 6 \\\\ 2x + 3y = 5 \\end{cases}$",
        options: ["$x=-2, y=3$", "$x=2, y=0$", "$x=-1, y=2$", "$x=1, y=1$"],
        answer: "$x=-2, y=3$",
        rationale: "<strong>解説: </strong>上の式を2倍、下の式を3倍して $x$ を消去します。<br>① $\\times 2$: $6x + 8y = 12$<br>② $\\times 3$: $6x + 9y = 15$<br>引きます: $-y = -3 \\Rightarrow y = 3$<br>$y=3$ を下の式に代入します。<br>$2x + 9 = 5 \\Rightarrow 2x = -4 \\Rightarrow x = -2$<br>よって、$x=-2, y=3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 2x + 5y = 1 \\\\ 3x - 2y = 11 \\end{cases}$",
        options: ["$x=3, y=-1$", "$x=2, y=1$", "$x=4, y=-1$", "$x=3, y=-2$"],
        answer: "$x=3, y=-1$",
        rationale: "<strong>解説: </strong>上の式を2倍、下の式を5倍して $y$ の係数を揃えます。<br>① $\\times 2$: $4x + 10y = 2$<br>② $\\times 5$: $15x - 10y = 55$<br>足します: $19x = 57 \\Rightarrow x = 3$<br>$x=3$ を上の式に代入します。<br>$6 + 5y = 1 \\Rightarrow 5y = -5 \\Rightarrow y = -1$<br>よって、$x=3, y=-1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 4x - 3y = 18 \\\\ 3x + 2y = 5 \\end{cases}$",
        options: ["$x=3, y=-2$", "$x=2, y=-3$", "$x=4, y=-1$", "$x=3, y=2$"],
        answer: "$x=3, y=-2$",
        rationale: "<strong>解説: </strong>上の式を2倍、下の式を3倍して $y$ を消去します。<br>① $\\times 2$: $8x - 6y = 36$<br>② $\\times 3$: $9x + 6y = 15$<br>足します: $17x = 51 \\Rightarrow x = 3$<br>$x=3$ を下の式に代入します。<br>$9 + 2y = 5 \\Rightarrow 2y = -4 \\Rightarrow y = -2$<br>よって、$x=3, y=-2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 5x - 4y = 3 \\\\ 3x + 5y = 14 \\end{cases}$",
        options: ["$x=\\frac{71}{37}, y=\\frac{61}{37}$", "$x=\\frac{43}{21}, y=\\frac{33}{21}$", "整数解なし", "$x=2, y=1$"],
        answer: "$x=\\frac{71}{37}, y=\\frac{61}{37}$",
        rationale: "<strong>解説: </strong>上の式を5倍、下の式を4倍します。<br>① $\\times 5$: $25x - 20y = 15$<br>② $\\times 4$: $12x + 20y = 56$<br>足します: $37x = 71 \\Rightarrow x = \\frac{71}{37}$<br>同様に $y$ を求めると $y = \\frac{61}{37}$ となります。<br>（計算練習として分数解の問題とします。）" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 7x + 2y = 20 \\\\ 2x - 3y = -5 \\end{cases}$",
        options: ["$x=2, y=3$", "$x=3, y=2$", "$x=1, y=4$", "$x=4, y=-1$"],
        answer: "$x=2, y=3$",
        rationale: "<strong>解説: </strong>上の式を3倍、下の式を2倍します。<br>① $\\times 3$: $21x + 6y = 60$<br>② $\\times 2$: $4x - 6y = -10$<br>足します: $25x = 50 \\Rightarrow x = 2$<br>$x=2$ を上の式に代入します。<br>$14 + 2y = 20 \\Rightarrow 2y = 6 \\Rightarrow y = 3$<br>よって、$x=2, y=3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 3x - 5y = -19 \\\\ 2x + 3y = 0 \\end{cases}$",
        options: ["$x=-3, y=2$", "$x=-3, y=-2$", "$x=3, y=-2$", "$x=2, y=5$"],
        answer: "$x=-3, y=2$",
        rationale: "<strong>解説: </strong>上の式を2倍、下の式を3倍します。<br>① $\\times 2$: $6x - 10y = -38$<br>② $\\times 3$: $6x + 9y = 0$<br>②から①を引きます: $19y = 38 \\Rightarrow y = 2$<br>$y=2$ を下の式に代入します。<br>$2x + 6 = 0 \\Rightarrow 2x = -6 \\Rightarrow x = -3$<br>よって、$x=-3, y=2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 4x + 7y = 3 \\\\ 3x - 5y = 2 \\end{cases}$",
        options: ["$x=\\frac{29}{41}, y=\\frac{1}{41}$", "$x=1, y=0$", "$x=2, y=-1$", "$x=3, y=-2$"],
        answer: "$x=\\frac{29}{41}, y=\\frac{1}{41}$",
        rationale: "<strong>解説: </strong>上の式を3倍、下の式を4倍します。<br>① $\\times 3$: $12x + 21y = 9$<br>② $\\times 4$: $12x - 20y = 8$<br>引きます: $41y = 1 \\Rightarrow y = \\frac{1}{41}$<br>これを代入して $x$ を求めると $x = \\frac{29}{41}$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },

    // --- レベル4: 代入法が有効、またはカッコの展開 (31-40) ---
    // 問題 31
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} y = 2x - 1 \\\\ x + y = 5 \\end{cases}$",
        options: ["$x=2, y=3$", "$x=3, y=2$", "$x=1, y=4$", "$x=2, y=1$"],
        answer: "$x=2, y=3$",
        rationale: "<strong>解説: </strong>代入法を使います。上の式の $y$ を下の式に代入します。<br>$x + (2x - 1) = 5$<br>$3x - 1 = 5 \\Rightarrow 3x = 6 \\Rightarrow x = 2$<br>$x=2$ を上の式に代入します。<br>$y = 4 - 1 = 3$<br>よって、$x=2, y=3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x = 3y + 2 \\\\ 2x - 5y = 6 \\end{cases}$",
        options: ["$x=8, y=2$", "$x=5, y=1$", "$x=11, y=3$", "$x=2, y=0$"],
        answer: "$x=8, y=2$",
        rationale: "<strong>解説: </strong>上の式を下の式の $x$ に代入します。<br>$2(3y + 2) - 5y = 6$<br>$6y + 4 - 5y = 6$<br>$y = 2$<br>$y=2$ を上の式に代入します。<br>$x = 6 + 2 = 8$<br>よって、$x=8, y=2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} y = -x + 4 \\\\ 3x + 2y = 9 \\end{cases}$",
        options: ["$x=1, y=3$", "$x=2, y=2$", "$x=3, y=1$", "$x=0, y=4$"],
        answer: "$x=1, y=3$",
        rationale: "<strong>解説: </strong>上の式を下の式に代入します。<br>$3x + 2(-x + 4) = 9$<br>$3x - 2x + 8 = 9$<br>$x = 1$<br>$x=1$ を上の式に代入します。<br>$y = -1 + 4 = 3$<br>よって、$x=1, y=3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 2(x + y) = 10 \\\\ x - y = 1 \\end{cases}$",
        options: ["$x=3, y=2$", "$x=4, y=1$", "$x=2, y=3$", "$x=5, y=0$"],
        answer: "$x=3, y=2$",
        rationale: "<strong>解説: </strong>上の式のカッコを外すか、両辺を2で割ります。<br>$x + y = 5$ となります。<br>これと $x - y = 1$ を連立します。<br>足すと $2x = 6 \\Rightarrow x = 3$<br>$3 + y = 5 \\Rightarrow y = 2$<br>よって、$x=3, y=2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 3(x - 1) + 2y = 7 \\\\ x + y = 4 \\end{cases}$",
        options: ["$x=2, y=2$", "$x=1, y=3$", "$x=3, y=1$", "$x=0, y=4$"],
        answer: "$x=2, y=2$",
        rationale: "<strong>解説: </strong>上の式を展開します。<br>$3x - 3 + 2y = 7 \\Rightarrow 3x + 2y = 10$<br>下の式を2倍して $2x + 2y = 8$ とします。<br>引きます: $x = 2$<br>$x=2$ を下の式に代入して $y=2$<br>よって、$x=2, y=2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 2x + y = 7 \\\\ 3(x - y) = 6 \\end{cases}$",
        options: ["$x=2, y=3$", "$x=3, y=1$", "$x=2, y=1$", "$x=4, y=-1$"],
        answer: "$x=3, y=1$",
        rationale: "<strong>解説: </strong>下の式の両辺を3で割ると $x - y = 2$ です。<br>上の式 $2x + y = 7$ と足します。<br>$3x = 9 \\Rightarrow x = 3$<br>代入して $3 - y = 2 \\Rightarrow y = 1$<br>よって、$x=3, y=1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 0.2x + 0.3y = 1.3 \\\\ x - y = -1 \\end{cases}$",
        options: ["$x=2, y=3$", "$x=3, y=2$", "$x=1, y=4$", "$x=5, y=1$"],
        answer: "$x=2, y=3$",
        rationale: "<strong>解説: </strong>上の式を10倍します。<br>$2x + 3y = 13$<br>下の式から $x = y - 1$ として代入します。<br>$2(y - 1) + 3y = 13 \\Rightarrow 2y - 2 + 3y = 13 \\Rightarrow 5y = 15 \\Rightarrow y = 3$<br>$x = 3 - 1 = 2$<br>よって、$x=2, y=3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} \\frac{1}{2}x + \\frac{1}{3}y = 3 \\\\ x - y = 1 \\end{cases}$",
        options: ["$x=4, y=3$", "$x=3, y=2$", "$x=2, y=1$", "$x=6, y=5$"],
        answer: "$x=4, y=3$",
        rationale: "<strong>解説: </strong>上の式を6倍して分母を払います。<br>$3x + 2y = 18$<br>下の式を2倍して $2x - 2y = 2$<br>足します: $5x = 20 \\Rightarrow x = 4$<br>$4 - y = 1 \\Rightarrow y = 3$<br>よって、$x=4, y=3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 4x + 3y = 1 \\\\ y = 2x + 7 \\end{cases}$",
        options: ["$x=-2, y=3$", "$x=-1, y=5$", "$x=-3, y=1$", "$x=0, y=7$"],
        answer: "$x=-2, y=3$",
        rationale: "<strong>解説: </strong>代入法を使います。<br>$4x + 3(2x + 7) = 1$<br>$4x + 6x + 21 = 1$<br>$10x = -20 \\Rightarrow x = -2$<br>$y = 2(-2) + 7 = 3$<br>よって、$x=-2, y=3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 2x - 5y = 1 \\\\ 3x - 2y = -4 \\end{cases}$",
        options: ["$x=-2, y=-1$", "$x=-1, y=-2$", "$x=2, y=1$", "$x=3, y=1$"],
        answer: "$x=-2, y=-1$",
        rationale: "<strong>解説: </strong>上の式を3倍、下の式を2倍します。<br>$6x - 15y = 3$<br>$6x - 4y = -8$<br>引きます: $-11y = 11 \\Rightarrow y = -1$<br>$2x - 5(-1) = 1 \\Rightarrow 2x + 5 = 1 \\Rightarrow 2x = -4 \\Rightarrow x = -2$<br>よって、$x=-2, y=-1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },

    // --- レベル5: A=B=C の形 (41-50) ---
    // 問題 41
    {
        question: "次の連立方程式を解け。<br>$x + y = 2x - y = 3$",
        options: ["$x=1, y=2$", "$x=2, y=1$", "$x=3, y=0$", "$x=1, y=1$"],
        answer: "$x=2, y=1$",
        rationale: "<strong>解説: </strong>この式は次の連立方程式と同じ意味です。<br>$\\begin{cases} x + y = 3 \\\\ 2x - y = 3 \\end{cases}$<br>2式を足します: $3x = 6 \\Rightarrow x = 2$<br>$2 + y = 3 \\Rightarrow y = 1$<br>よって、$x=2, y=1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "次の連立方程式を解け。<br>$2x + y = x + 3y = 5$",
        options: ["$x=2, y=1$", "$x=1, y=2$", "$x=3, y=-1$", "$x=0, y=5$"],
        answer: "$x=2, y=1$",
        rationale: "<strong>解説: </strong>分解します。<br>$\\begin{cases} 2x + y = 5 \\\\ x + 3y = 5 \\end{cases}$<br>下の式を2倍: $2x + 6y = 10$<br>上の式から引く: $-5y = -5 \\Rightarrow y = 1$<br>$x + 3 = 5 \\Rightarrow x = 2$<br>よって、$x=2, y=1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "次の連立方程式を解け。<br>$1 = 5x - 2y = 4x + y$",
        options: ["$x=1, y=2$", "$x=0.2, y=0$", "$x=\\frac{3}{13}, y=\\frac{1}{13}$", "$x=\\frac{3}{13}, y=\\frac{1}{13}$"],
        answer: "$x=\\frac{3}{13}, y=\\frac{1}{13}$",
        rationale: "<strong>解説: </strong>画像の問題(3)と同じ形式です。<br>$\\begin{cases} 5x - 2y = 1 \\\\ 4x + y = 1 \\end{cases}$<br>下の式を2倍: $8x + 2y = 2$<br>上の式と足す: $13x = 3 \\Rightarrow x = \\frac{3}{13}$<br>これを代入して $y = \\frac{1}{13}$。<br>（計算練習として分数解の問題とします）" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "次の連立方程式を解け。<br>$3x + 2y = x - y + 10 = 10$",
        options: ["$x=2, y=2$", "$x=4, y=-1$", "$x=2, y=2$", "$x=0, y=5$"],
        answer: "$x=2, y=2$",
        rationale: "<strong>解説: </strong>定数項が10なので、次のように分けます。<br>$\\begin{cases} 3x + 2y = 10 \\\\ x - y + 10 = 10 \\end{cases}$<br>下の式は $x - y = 0 \\Rightarrow x = y$ です。<br>上の式に代入: $3x + 2x = 10 \\Rightarrow 5x = 10 \\Rightarrow x = 2$<br>よって $y=2$。<br>解は $x=2, y=2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "次の連立方程式を解け。<br>$x + y = 2x - y + 3 = 9$",
        options: ["$x=4, y=5$", "$x=5, y=4$", "$x=3, y=6$", "$x=2, y=7$"],
        answer: "$x=4, y=5$",
        rationale: "<strong>解説: </strong>分解します。<br>$\\begin{cases} x + y = 9 \\\\ 2x - y + 3 = 9 \\end{cases}$<br>下の式は $2x - y = 6$ です。<br>足します: $3x = 15 \\Rightarrow x = 5$<br>$5 + y = 9 \\Rightarrow y = 4$<br>よって、$x=5, y=4$ です。（選択肢2番目）" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "次の連立方程式を解け。<br>$2x + 3y = 4x + y = 10$",
        options: ["$x=2, y=2$", "$x=1, y=3$", "$x=3, y=1$", "$x=0, y=10$"],
        answer: "$x=2, y=2$",
        rationale: "<strong>解説: </strong>分解します。<br>$\\begin{cases} 2x + 3y = 10 \\\\ 4x + y = 10 \\end{cases}$<br>下の式より $y = 10 - 4x$。<br>上の式に代入: $2x + 3(10 - 4x) = 10 \\Rightarrow 2x + 30 - 12x = 10$<br>$-10x = -20 \\Rightarrow x = 2$<br>$y = 10 - 8 = 2$<br>よって、$x=2, y=2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "次の連立方程式を解け。<br>$3x - y = x + 2y = 7$",
        options: ["$x=3, y=2$", "$x=2, y=3$", "$x=1, y=4$", "$x=4, y=1$"],
        answer: "$x=3, y=2$",
        rationale: "<strong>解説: </strong>分解します。<br>$\\begin{cases} 3x - y = 7 \\\\ x + 2y = 7 \\end{cases}$<br>上の式を2倍: $6x - 2y = 14$<br>下の式と足す: $7x = 21 \\Rightarrow x = 3$<br>$3 + 2y = 7 \\Rightarrow 2y = 4 \\Rightarrow y = 2$<br>よって、$x=3, y=2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "次の連立方程式を解け。<br>$x + 2y = 3x - y = 7$",
        options: ["$x=3, y=2$", "$x=2, y=3$", "$x=4, y=1$", "$x=1, y=4$"],
        answer: "$x=3, y=2$",
        rationale: "<strong>解説: </strong>分解します。<br>$\\begin{cases} x + 2y = 7 \\\\ 3x - y = 7 \\end{cases}$<br>下の式を2倍: $6x - 2y = 14$<br>上の式と足す: $7x = 21 \\Rightarrow x = 3$<br>$3 + 2y = 7 \\Rightarrow 2y = 4 \\Rightarrow y = 2$<br>よって、$x=3, y=2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "次の連立方程式を解け。<br>$2x + y = 4x - 3y = 2$",
        options: ["$x=1, y=0$", "$x=0.8, y=0.4$", "$x=0.8, y=0.4$", "$x=2, y=2$"],
        answer: "$x=0.8, y=0.4$",
        rationale: "<strong>解説: </strong>分解します。<br>$\\begin{cases} 2x + y = 2 \\\\ 4x - 3y = 2 \\end{cases}$<br>上の式を2倍: $4x + 2y = 4$<br>下の式から引く: $5y = 2 \\Rightarrow y = 0.4 (\\frac{2}{5})$<br>$2x + 0.4 = 2 \\Rightarrow 2x = 1.6 \\Rightarrow x = 0.8 (\\frac{4}{5})$<br>よって、$x=0.8, y=0.4$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "次の連立方程式を解け。<br>$5x + 3y = 2x + 7y - 2 = 16$",
        options: ["$x=2, y=2$", "$x=3, y=1$", "$x=1, y=3$", "$x=4, y=-1$"],
        answer: "$x=2, y=2$",
        rationale: "<strong>解説: </strong>分解します。<br>$\\begin{cases} 5x + 3y = 16 \\\\ 2x + 7y - 2 = 16 \\end{cases}$<br>下の式を整理: $2x + 7y = 18$<br>上の式を2倍: $10x + 6y = 32$<br>下の式を5倍: $10x + 35y = 90$<br>引きます: $29y = 58 \\Rightarrow y = 2$<br>$5x + 6 = 16 \\Rightarrow 5x = 10 \\Rightarrow x = 2$<br>よって、$x=2, y=2$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    }
];