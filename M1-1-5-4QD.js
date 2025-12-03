const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7711/63170' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";
window.QUIZ_DATA = [
    // --- レベル1: 基本的な不等式 (1-10) ---
    // 問題 1
    {
        question: "次の不等式を解け。<br>$3x > 9$",
        options: ["$x > 3$", "$x < 3$", "$x > 27$", "$x < 27$"],
        answer: "$x > 3$",
        rationale: "<strong>解説: </strong>両辺を正の数 $3$ で割ります。<br>不等号の向きは変わりません。<br>$x > 3$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "次の不等式を解け。<br>$-2x \\geqq 8$",
        options: ["$x \\geqq -4$", "$x \\leqq -4$", "$x \\geqq 4$", "$x \\leqq 4$"],
        answer: "$x \\leqq -4$",
        rationale: "<strong>解説: </strong>両辺を負の数 $-2$ で割ります。<br><strong>負の数で割ると不等号の向きが変わります。</strong><br>$x \\leqq -4$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "次の不等式を解け。<br>$4x + 1 > 9$",
        options: ["$x > 2$", "$x < 2$", "$x > 8$", "$x < 8$"],
        answer: "$x > 2$",
        rationale: "<strong>解説: </strong>移項して整理します。<br>$4x > 9 - 1$<br>$4x > 8$<br>$x > 2$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "次の不等式を解け。<br>$3x - 5 \\leqq 10$",
        options: ["$x \\leqq 5$", "$x \\geqq 5$", "$x \\leqq 15$", "$x \\geqq 15$"],
        answer: "$x \\leqq 5$",
        rationale: "<strong>解説: </strong>移項して整理します。<br>$3x \\leqq 10 + 5$<br>$3x \\leqq 15$<br>$x \\leqq 5$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "次の不等式を解け。<br>$5x + 2 < 3x + 8$",
        options: ["$x < 3$", "$x > 3$", "$x < 5$", "$x > 5$"],
        answer: "$x < 3$",
        rationale: "<strong>解説: </strong>$x$ を含む項を左辺へ、定数項を右辺へ移項します。<br>$5x - 3x < 8 - 2$<br>$2x < 6$<br>$x < 3$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "次の不等式を解け。<br>$2x - 7 \\geqq 4x + 3$",
        options: ["$x \\geqq -5$", "$x \\leqq -5$", "$x \\geqq 5$", "$x \\leqq 5$"],
        answer: "$x \\leqq -5$",
        rationale: "<strong>解説: </strong>移項して整理します。<br>$2x - 4x \\geqq 3 + 7$<br>$-2x \\geqq 10$<br>両辺を $-2$ で割るため、不等号の向きが変わります。<br>$x \\leqq -5$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "次の不等式を解け。<br>$x + 8 > 4x - 1$",
        options: ["$x > 3$", "$x < 3$", "$x > -3$", "$x < -3$"],
        answer: "$x < 3$",
        rationale: "<strong>解説: </strong>移項して整理します。<br>$x - 4x > -1 - 8$<br>$-3x > -9$<br>両辺を $-3$ で割るため、不等号の向きが変わります。<br>$x < 3$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "次の不等式を解け。<br>$6x + 5 \\leqq 2x - 7$",
        options: ["$x \\leqq -3$", "$x \\geqq -3$", "$x \\leqq 3$", "$x \\geqq 3$"],
        answer: "$x \\leqq -3$",
        rationale: "<strong>解説: </strong>移項して整理します。<br>$6x - 2x \\leqq -7 - 5$<br>$4x \\leqq -12$<br>$x \\leqq -3$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "次の不等式を解け。<br>$10 - 3x < x + 2$",
        options: ["$x > 2$", "$x < 2$", "$x > -2$", "$x < -2$"],
        answer: "$x > 2$",
        rationale: "<strong>解説: </strong>移項して整理します。<br>$-3x - x < 2 - 10$<br>$-4x < -8$<br>両辺を $-4$ で割るため、不等号の向きが変わります。<br>$x > 2$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "次の不等式を解け。<br>$-x + 4 \\geqq 2x - 5$",
        options: ["$x \\leqq 3$", "$x \\geqq 3$", "$x \\leqq -3$", "$x \\geqq -3$"],
        answer: "$x \\leqq 3$",
        rationale: "<strong>解説: </strong>移項して整理します。<br>$-x - 2x \\geqq -5 - 4$<br>$-3x \\geqq -9$<br>両辺を $-3$ で割るため、不等号の向きが変わります。<br>$x \\leqq 3$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },

    // --- レベル2: かっこを含む不等式 (11-20) ---
    // 問題 11
    {
        question: "次の不等式を解け。<br>$2(x - 3) > 4$",
        options: ["$x > 5$", "$x < 5$", "$x > 2$", "$x < 2$"],
        answer: "$x > 5$",
        rationale: "<strong>解説: </strong>かっこを展開します。<br>$2x - 6 > 4$<br>$2x > 10$<br>$x > 5$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "次の不等式を解け。<br>$3(x + 2) \\leqq 15$",
        options: ["$x \\leqq 3$", "$x \\geqq 3$", "$x \\leqq 5$", "$x \\geqq 5$"],
        answer: "$x \\leqq 3$",
        rationale: "<strong>解説: </strong>かっこを展開します。<br>$3x + 6 \\leqq 15$<br>$3x \\leqq 9$<br>$x \\leqq 3$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "次の不等式を解け。<br>$4(x - 1) < 2x + 6$",
        options: ["$x < 5$", "$x > 5$", "$x < 2$", "$x > 2$"],
        answer: "$x < 5$",
        rationale: "<strong>解説: </strong>かっこを展開します。<br>$4x - 4 < 2x + 6$<br>$4x - 2x < 6 + 4$<br>$2x < 10$<br>$x < 5$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "次の不等式を解け。<br>$5(2x + 1) \\geqq 7x - 4$",
        options: ["$x \\geqq -3$", "$x \\leqq -3$", "$x \\geqq 3$", "$x \\leqq 3$"],
        answer: "$x \\geqq -3$",
        rationale: "<strong>解説: </strong>かっこを展開します。<br>$10x + 5 \\geqq 7x - 4$<br>$10x - 7x \\geqq -4 - 5$<br>$3x \\geqq -9$<br>$x \\geqq -3$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "次の不等式を解け。<br>$2(3x - 2) > 5x + 1$",
        options: ["$x > 5$", "$x < 5$", "$x > 1$", "$x < 1$"],
        answer: "$x > 5$",
        rationale: "<strong>解説: </strong>かっこを展開します。<br>$6x - 4 > 5x + 1$<br>$6x - 5x > 1 + 4$<br>$x > 5$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "次の不等式を解け。<br>$3(x - 2) \\leqq 5(x + 1)$",
        options: ["$x \\geqq -\\frac{11}{2}$", "$x \\leqq -\\frac{11}{2}$", "$x \\geqq -5.5$", "$x \\leqq -5.5$"],
        answer: "$x \\geqq -\\frac{11}{2}$",
        rationale: "<strong>解説: </strong>展開して整理します。<br>$3x - 6 \\leqq 5x + 5$<br>$3x - 5x \\leqq 5 + 6$<br>$-2x \\leqq 11$<br>負の数で割るため不等号が逆転します。<br>$x \\geqq -\\frac{11}{2}$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "次の不等式を解け。<br>$4 - 2(x + 1) > 6$",
        options: ["$x < -2$", "$x > -2$", "$x < -3$", "$x > -3$"],
        answer: "$x < -2$",
        rationale: "<strong>解説: </strong>展開して整理します。<br>$4 - 2x - 2 > 6$<br>$-2x + 2 > 6$<br>$-2x > 4$<br>$x < -2$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "次の不等式を解け。<br>$2(x + 3) + 1 < 3x + 5$",
        options: ["$x > 2$", "$x < 2$", "$x > -2$", "$x < -2$"],
        answer: "$x > 2$",
        rationale: "<strong>解説: </strong>展開して整理します。<br>$2x + 6 + 1 < 3x + 5$<br>$2x + 7 < 3x + 5$<br>$2x - 3x < 5 - 7$<br>$-x < -2$<br>$x > 2$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "次の不等式を解け。<br>$3(2x - 1) \\geqq 4(x + 2)$",
        options: ["$x \\geqq \\frac{11}{2}$", "$x \\leqq \\frac{11}{2}$", "$x \\geqq 5.5$", "$x \\leqq 5.5$"],
        answer: "$x \\geqq \\frac{11}{2}$",
        rationale: "<strong>解説: </strong>展開して整理します。<br>$6x - 3 \\geqq 4x + 8$<br>$6x - 4x \\geqq 8 + 3$<br>$2x \\geqq 11$<br>$x \\geqq \\frac{11}{2}$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "次の不等式を解け。<br>$5x - 2(x - 3) \\leqq 0$",
        options: ["$x \\leqq -2$", "$x \\geqq -2$", "$x \\leqq 2$", "$x \\geqq 2$"],
        answer: "$x \\leqq -2$",
        rationale: "<strong>解説: </strong>展開して整理します。<br>$5x - 2x + 6 \\leqq 0$<br>$3x \\leqq -6$<br>$x \\leqq -2$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },

    // --- レベル3: 分数・小数を含む不等式 (21-40) ---
    // 問題 21
    {
        question: "次の不等式を解け。<br>$\\frac{x}{2} > 3$",
        options: ["$x > 6$", "$x < 6$", "$x > 1.5$", "$x < 1.5$"],
        answer: "$x > 6$",
        rationale: "<strong>解説: </strong>両辺に $2$ をかけます。<br>$x > 6$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "次の不等式を解け。<br>$\\frac{1}{3}x + 1 \\leqq 2$",
        options: ["$x \\leqq 3$", "$x \\geqq 3$", "$x \\leqq 1$", "$x \\geqq 1$"],
        answer: "$x \\leqq 3$",
        rationale: "<strong>解説: </strong>両辺に $3$ をかけます。<br>$x + 3 \\leqq 6$<br>$x \\leqq 3$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "次の不等式を解け。<br>$\\frac{x}{2} - \\frac{x}{3} > 1$",
        options: ["$x > 6$", "$x < 6$", "$x > 1$", "$x < 1$"],
        answer: "$x > 6$",
        rationale: "<strong>解説: </strong>両辺に $6$ をかけて分母を払います。<br>$3x - 2x > 6$<br>$x > 6$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "次の不等式を解け。<br>$\\frac{2x - 1}{3} \\geqq 3$",
        options: ["$x \\geqq 5$", "$x \\leqq 5$", "$x \\geqq 4$", "$x \\leqq 4$"],
        answer: "$x \\geqq 5$",
        rationale: "<strong>解説: </strong>両辺に $3$ をかけます。<br>$2x - 1 \\geqq 9$<br>$2x \\geqq 10$<br>$x \\geqq 5$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "次の不等式を解け。<br>$\\frac{x + 2}{2} < \\frac{x - 1}{3}$",
        options: ["$x < -8$", "$x > -8$", "$x < -4$", "$x > -4$"],
        answer: "$x < -8$",
        rationale: "<strong>解説: </strong>両辺に $6$ をかけます。<br>$3(x + 2) < 2(x - 1)$<br>$3x + 6 < 2x - 2$<br>$x < -8$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "次の不等式を解け。<br>$0.3x + 0.2 > 1.4$",
        options: ["$x > 4$", "$x < 4$", "$x > 0.4$", "$x < 0.4$"],
        answer: "$x > 4$",
        rationale: "<strong>解説: </strong>両辺を10倍して小数をなくします。<br>$3x + 2 > 14$<br>$3x > 12$<br>$x > 4$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "次の不等式を解け。<br>$0.5x - 1.5 \\leqq x$",
        options: ["$x \\geqq -3$", "$x \\leqq -3$", "$x \\geqq 3$", "$x \\leqq 3$"],
        answer: "$x \\geqq -3$",
        rationale: "<strong>解説: </strong>両辺を10倍します。<br>$5x - 15 \\leqq 10x$<br>$5x - 10x \\leqq 15$<br>$-5x \\leqq 15$<br>$x \\geqq -3$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "次の不等式を解け。<br>$\\frac{3}{4}x + \\frac{1}{2} < 2$",
        options: ["$x < 2$", "$x > 2$", "$x < 1.5$", "$x > 1.5$"],
        answer: "$x < 2$",
        rationale: "<strong>解説: </strong>両辺に $4$ をかけます。<br>$3x + 2 < 8$<br>$3x < 6$<br>$x < 2$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "次の不等式を解け。<br>$\\frac{x-1}{2} \\geqq \\frac{2x+3}{5}$",
        options: ["$x \\geqq 11$", "$x \\leqq 11$", "$x \\geqq -11$", "$x \\leqq -11$"],
        answer: "$x \\geqq 11$",
        rationale: "<strong>解説: </strong>両辺に $10$ をかけます。<br>$5(x - 1) \\geqq 2(2x + 3)$<br>$5x - 5 \\geqq 4x + 6$<br>$x \\geqq 11$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "次の不等式を解け。<br>$\\frac{2x-1}{3} - \\frac{x+2}{2} > 1$",
        options: ["$x > 14$", "$x < 14$", "$x > 10$", "$x < 10$"],
        answer: "$x > 14$",
        rationale: "<strong>解説: </strong>両辺に $6$ をかけます。<br>$2(2x - 1) - 3(x + 2) > 6$<br>$4x - 2 - 3x - 6 > 6$<br>$x - 8 > 6$<br>$x > 14$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },

    // --- レベル4: 複雑な計算・解が分数になるもの (31-50) ---
    // 問題 31
    {
        question: "次の不等式を解け。<br>$3x + 4 < 2x + 6$",
        options: ["$x < 2$", "$x > 2$", "$x < 10$", "$x > 10$"],
        answer: "$x < 2$",
        rationale: "<strong>解説: </strong>$x < 2$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "次の不等式を解け。<br>$5x - 2 > 7x + 4$",
        options: ["$x < -3$", "$x > -3$", "$x < 3$", "$x > 3$"],
        answer: "$x < -3$",
        rationale: "<strong>解説: </strong>$-2x > 6$ なので $x < -3$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "次の不等式を解け。<br>$2(x+1) \\geqq 3(x-1)$",
        options: ["$x \\leqq 5$", "$x \\geqq 5$", "$x \\leqq 1$", "$x \\geqq 1$"],
        answer: "$x \\leqq 5$",
        rationale: "<strong>解説: </strong>$2x+2 \\geqq 3x-3$<br>$-x \\geqq -5$<br>$x \\leqq 5$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "次の不等式を解け。<br>$\\frac{x}{3} + 2 < x - 4$",
        options: ["$x > 9$", "$x < 9$", "$x > 6$", "$x < 6$"],
        answer: "$x > 9$",
        rationale: "<strong>解説: </strong>両辺を3倍します。<br>$x + 6 < 3x - 12$<br>$-2x < -18$<br>$x > 9$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "次の不等式を解け。<br>$2x + 5 < 3x + 7$",
        options: ["$x > -2$", "$x < -2$", "$x > 2$", "$x < 2$"],
        answer: "$x > -2$",
        rationale: "<strong>解説: </strong>$-x < 2$ なので $x > -2$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "次の不等式を解け。<br>$0.2x - 1 \\geqq 0.5x + 0.5$",
        options: ["$x \\leqq -5$", "$x \\geqq -5$", "$x \\leqq 5$", "$x \\geqq 5$"],
        answer: "$x \\leqq -5$",
        rationale: "<strong>解説: </strong>10倍します。<br>$2x - 10 \\geqq 5x + 5$<br>$-3x \\geqq 15$<br>$x \\leqq -5$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "次の不等式を解け。<br>$\\frac{3x+1}{2} < \\frac{5x-2}{3}$",
        options: ["$x > 7$", "$x < 7$", "$x > -7$", "$x < -7$"],
        answer: "$x > 7$",
        rationale: "<strong>解説: </strong>6倍します。<br>$3(3x+1) < 2(5x-2)$<br>$9x+3 < 10x-4$<br>$-x < -7$<br>$x > 7$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "次の不等式を解け。<br>$4(2-x) > 3(x+5)$",
        options: ["$x < -1$", "$x > -1$", "$x < 1$", "$x > 1$"],
        answer: "$x < -1$",
        rationale: "<strong>解説: </strong>$8-4x > 3x+15$<br>$-7x > 7$<br>$x < -1$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "次の不等式を解け。<br>$3x + 4 \\geqq 5(x-2)$",
        options: ["$x \\leqq 7$", "$x \\geqq 7$", "$x \\leqq 2$", "$x \\geqq 2$"],
        answer: "$x \\leqq 7$",
        rationale: "<strong>解説: </strong>$3x+4 \\geqq 5x-10$<br>$-2x \\geqq -14$<br>$x \\leqq 7$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "次の不等式を解け。<br>$\\frac{2x}{3} - 1 < \\frac{x}{2} + 1$",
        options: ["$x < 12$", "$x > 12$", "$x < 6$", "$x > 6$"],
        answer: "$x < 12$",
        rationale: "<strong>解説: </strong>6倍します。<br>$4x - 6 < 3x + 6$<br>$x < 12$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 41 (解が分数)
    {
        question: "次の不等式を解け。<br>$2x + 1 > 4$",
        options: ["$x > \\frac{3}{2}$", "$x < \\frac{3}{2}$", "$x > \\frac{5}{2}$", "$x < \\frac{5}{2}$"],
        answer: "$x > \\frac{3}{2}$",
        rationale: "<strong>解説: </strong>$2x > 3$<br>$x > \\frac{3}{2}$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "次の不等式を解け。<br>$3x - 2 \\leqq 4$",
        options: ["$x \\leqq 2$", "$x \\geqq 2$", "$x \\leqq 3$", "$x \\geqq 3$"],
        answer: "$x \\leqq 2$",
        rationale: "<strong>解説: </strong>$3x \\leqq 6$<br>$x \\leqq 2$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 43 (解が分数)
    {
        question: "次の不等式を解け。<br>$5x + 3 < 2x - 4$",
        options: ["$x < -\\frac{7}{3}$", "$x > -\\frac{7}{3}$", "$x < -\\frac{1}{3}$", "$x > -\\frac{1}{3}$"],
        answer: "$x < -\\frac{7}{3}$",
        rationale: "<strong>解説: </strong>$3x < -7$<br>$x < -\\frac{7}{3}$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "次の不等式を解け。<br>$4x - 1 \\geqq 6x + 2$",
        options: ["$x \\leqq -\\frac{3}{2}$", "$x \\geqq -\\frac{3}{2}$", "$x \\leqq -1.5$", "$x \\geqq -1.5$"],
        answer: "$x \\leqq -\\frac{3}{2}$",
        rationale: "<strong>解説: </strong>$-2x \\geqq 3$<br>$x \\leqq -\\frac{3}{2}$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "次の不等式を解け。<br>$\\frac{1}{2}x + \\frac{3}{4} > x$",
        options: ["$x < \\frac{3}{2}$", "$x > \\frac{3}{2}$", "$x < 1.5$", "$x > 1.5$"],
        answer: "$x < \\frac{3}{2}$",
        rationale: "<strong>解説: </strong>4倍します。<br>$2x + 3 > 4x$<br>$-2x > -3$<br>$x < \\frac{3}{2}$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "次の不等式を解け。<br>$2(x-1) < 3x + 2$",
        options: ["$x > -4$", "$x < -4$", "$x > 4$", "$x < 4$"],
        answer: "$x > -4$",
        rationale: "<strong>解説: </strong>$2x-2 < 3x+2$<br>$-x < 4$<br>$x > -4$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "次の不等式を解け。<br>$3(2x+1) \\geqq 2(3x-1)$",
        options: ["すべての実数", "解なし", "$x \\geqq 0$", "$x \\leqq 0$"],
        answer: "すべての実数",
        rationale: "<strong>解説: </strong>$6x + 3 \\geqq 6x - 2$<br>$3 \\geqq -2$<br>これは常に成り立つため、解はすべての実数です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "次の不等式を解け。<br>$4x - 2 > 2(2x + 1)$",
        options: ["解なし", "すべての実数", "$x > 0$", "$x < 0$"],
        answer: "解なし",
        rationale: "<strong>解説: </strong>$4x - 2 > 4x + 2$<br>$-2 > 2$<br>これは成り立たないため、解なしです。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "次の不等式を解け。<br>$\\frac{2x+5}{3} \\leqq x - 1$",
        options: ["$x \\geqq 8$", "$x \\leqq 8$", "$x \\geqq 5$", "$x \\leqq 5$"],
        answer: "$x \\geqq 8$",
        rationale: "<strong>解説: </strong>3倍します。<br>$2x + 5 \\leqq 3x - 3$<br>$-x \\leqq -8$<br>$x \\geqq 8$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "次の不等式を解け。<br>$0.1x + 0.05 < 0.2x - 0.15$",
        options: ["$x > 2$", "$x < 2$", "$x > 0.2$", "$x < 0.2$"],
        answer: "$x > 2$",
        rationale: "<strong>解説: </strong>100倍します。<br>$10x + 5 < 20x - 15$<br>$-10x < -20$<br>$x > 2$" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    }
];