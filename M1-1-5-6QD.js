const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7711/63174' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";
window.QUIZ_DATA = [
    // --- レベル1: 基本的な絶対値不等式 |x| < c, |x| > c (1-10) ---
    // 問題 1
    {
        question: "次の不等式を解け。<br>$|x| < 3$",
        options: ["$-3 < x < 3$", "$x < -3, 3 < x$", "$x < 3$", "$x > 3$"],
        answer: "$-3 < x < 3$",
        rationale: "<strong>解説: </strong>絶対値は原点からの距離を表します。<br>原点からの距離が $3$ より小さい範囲なので、$-3 < x < 3$ となります。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "次の不等式を解け。<br>$|x| > 5$",
        options: ["$-5 < x < 5$", "$x < -5, 5 < x$", "$x > 5$", "$x < -5$"],
        answer: "$x < -5, 5 < x$",
        rationale: "<strong>解説: </strong>原点からの距離が $5$ より大きい範囲です。<br>よって、$x < -5, 5 < x$ となります。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "次の不等式を解け。<br>$|x| \\leqq 4$",
        options: ["$x \\leqq 4$", "$x \\leqq -4, 4 \\leqq x$", "$-4 \\leqq x \\leqq 4$", "$-4 < x < 4$"],
        answer: "$-4 \\leqq x \\leqq 4$",
        rationale: "<strong>解説: </strong>原点からの距離が $4$ 以下となる範囲です。<br>$-4 \\leqq x \\leqq 4$ となります。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "次の不等式を解け。<br>$|x| \\geqq 2$",
        options: ["$-2 \\leqq x \\leqq 2$", "$x \\leqq -2, 2 \\leqq x$", "$x \\geqq 2$", "$x \\leqq -2$"],
        answer: "$x \\leqq -2, 2 \\leqq x$",
        rationale: "<strong>解説: </strong>原点からの距離が $2$ 以上となる範囲です。<br>$x \\leqq -2, 2 \\leqq x$ となります。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "次の不等式を解け。<br>$|x| < 1$",
        options: ["$x < 1$", "$x > 1$", "$-1 < x < 1$", "$x < -1, 1 < x$"],
        answer: "$-1 < x < 1$",
        rationale: "<strong>解説: </strong>$|x| < c$ の形は $-c < x < c$ となります。<br>よって、$-1 < x < 1$ です。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "次の不等式を解け。<br>$|x| \\geqq 6$",
        options: ["$x \\geqq 6$", "$x \\leqq -6, 6 \\leqq x$", "$-6 \\leqq x \\leqq 6$", "$-6 < x < 6$"],
        answer: "$x \\leqq -6, 6 \\leqq x$",
        rationale: "<strong>解説: </strong>$|x| \\geqq c$ の形は $x \\leqq -c, c \\leqq x$ となります。<br>よって、$x \\leqq -6, 6 \\leqq x$ です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "次の不等式を解け。<br>$|x| < 0.5$",
        options: ["$-0.5 < x < 0.5$", "$x < -0.5, 0.5 < x$", "$x < 0.5$", "$x > 0.5$"],
        answer: "$-0.5 < x < 0.5$",
        rationale: "<strong>解説: </strong>小数でも考え方は同じです。<br>$-0.5 < x < 0.5$ となります。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "次の不等式を解け。<br>$|x| > \\frac{3}{2}$",
        options: ["$-\\frac{3}{2} < x < \\frac{3}{2}$", "$x < -\\frac{3}{2}, \\frac{3}{2} < x$", "$x > \\frac{3}{2}$", "$x < -\\frac{3}{2}$"],
        answer: "$x < -\\frac{3}{2}, \\frac{3}{2} < x$",
        rationale: "<strong>解説: </strong>分数でも考え方は同じです。<br>$x < -\\frac{3}{2}, \\frac{3}{2} < x$ となります。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "次の不等式を解け。<br>$|x| \\leqq 0$",
        options: ["解なし", "$x=0$", "すべての実数", "$x \\leqq 0$"],
        answer: "$x=0$",
        rationale: "<strong>解説: </strong>絶対値は必ず $0$ 以上です。<br>$|x| \\leqq 0$ を満たすのは $|x|=0$ のとき、すなわち $x=0$ だけです。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "次の不等式を解け。<br>$|x| < -2$",
        options: ["解なし", "すべての実数", "$x < -2$", "$-2 < x < 2$"],
        answer: "解なし",
        rationale: "<strong>解説: </strong>絶対値 $|x|$ は常に $0$ 以上なので、負の数 $-2$ より小さくなることはありません。<br>よって、解なしです。" + VIDEO_LINK
    },

    // --- レベル2: 平行移動型 |x-a| < c (11-20) ---
    // 問題 11
    {
        question: "次の不等式を解け。<br>$|x - 2| < 3$",
        options: ["$-1 < x < 5$", "$1 < x < 5$", "$x < -1, 5 < x$", "$-5 < x < 1$"],
        answer: "$-1 < x < 5$",
        rationale: "<strong>解説: </strong>$-3 < x - 2 < 3$ と変形します。<br>各辺に $2$ を足して、<br>$-1 < x < 5$ となります。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "次の不等式を解け。<br>$|x + 1| \\leqq 4$",
        options: ["$-5 \\leqq x \\leqq 3$", "$-3 \\leqq x \\leqq 5$", "$x \\leqq -5, 3 \\leqq x$", "$x \\leqq 3$"],
        answer: "$-5 \\leqq x \\leqq 3$",
        rationale: "<strong>解説: </strong>$-4 \\leqq x + 1 \\leqq 4$ と変形します。<br>各辺から $1$ を引いて、<br>$-5 \\leqq x \\leqq 3$ となります。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "次の不等式を解け。<br>$|x - 4| > 1$",
        options: ["$3 < x < 5$", "$x < 3, 5 < x$", "$x > 5$", "$x < 3$"],
        answer: "$x < 3, 5 < x$",
        rationale: "<strong>解説: </strong>$x - 4 < -1, 1 < x - 4$ と変形します。<br>それぞれ解くと、<br>$x < 3, 5 < x$ となります。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "次の不等式を解け。<br>$|x + 3| \\geqq 2$",
        options: ["$-5 \\leqq x \\leqq -1$", "$x \\leqq -5, -1 \\leqq x$", "$x \\geqq -1$", "$x \\leqq -5$"],
        answer: "$x \\leqq -5, -1 \\leqq x$",
        rationale: "<strong>解説: </strong>$x + 3 \\leqq -2, 2 \\leqq x + 3$ と変形します。<br>それぞれ解くと、<br>$x \\leqq -5, -1 \\leqq x$ となります。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "次の不等式を解け。<br>$|x - 5| < 2$",
        options: ["$3 < x < 7$", "$-7 < x < -3$", "$x < 3, 7 < x$", "$-2 < x < 2$"],
        answer: "$3 < x < 7$",
        rationale: "<strong>解説: </strong>$-2 < x - 5 < 2$ と変形します。<br>各辺に $5$ を足して、<br>$3 < x < 7$ となります。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "次の不等式を解け。<br>$|x + 2| < 5$",
        options: ["$-7 < x < 3$", "$-3 < x < 7$", "$x < -7, 3 < x$", "$-5 < x < 5$"],
        answer: "$-7 < x < 3$",
        rationale: "<strong>解説: </strong>$-5 < x + 2 < 5$ と変形します。<br>各辺から $2$ を引いて、<br>$-7 < x < 3$ となります。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "次の不等式を解け。<br>$|x - 1| \\geqq 3$",
        options: ["$-2 \\leqq x \\leqq 4$", "$x \\leqq -2, 4 \\leqq x$", "$x \\geqq 4$", "$x \\leqq -2$"],
        answer: "$x \\leqq -2, 4 \\leqq x$",
        rationale: "<strong>解説: </strong>$x - 1 \\leqq -3, 3 \\leqq x - 1$ と変形します。<br>それぞれ解くと、<br>$x \\leqq -2, 4 \\leqq x$ となります。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "次の不等式を解け。<br>$|x + 4| > 2$",
        options: ["$-6 < x < -2$", "$x < -6, -2 < x$", "$x > -2$", "$x < -6$"],
        answer: "$x < -6, -2 < x$",
        rationale: "<strong>解説: </strong>$x + 4 < -2, 2 < x + 4$ と変形します。<br>それぞれ解くと、<br>$x < -6, -2 < x$ となります。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "次の不等式を解け。<br>$|x - 3| \\leqq 1$",
        options: ["$2 \\leqq x \\leqq 4$", "$x \\leqq 2, 4 \\leqq x$", "$-1 \\leqq x \\leqq 1$", "$-4 \\leqq x \\leqq -2$"],
        answer: "$2 \\leqq x \\leqq 4$",
        rationale: "<strong>解説: </strong>$-1 \\leqq x - 3 \\leqq 1$ と変形します。<br>各辺に $3$ を足して、<br>$2 \\leqq x \\leqq 4$ となります。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "次の不等式を解け。<br>$|x + 5| < 1$",
        options: ["$-6 < x < -4$", "$-4 < x < -6$", "$x < -6, -4 < x$", "$-1 < x < 1$"],
        answer: "$-6 < x < -4$",
        rationale: "<strong>解説: </strong>$-1 < x + 5 < 1$ と変形します。<br>各辺から $5$ を引いて、<br>$-6 < x < -4$ となります。" + VIDEO_LINK
    },

    // --- レベル3: 係数がある型 |ax+b| < c (21-40) ---
    // 問題 21
    {
        question: "次の不等式を解け。<br>$|2x| < 6$",
        options: ["$-3 < x < 3$", "$x < -3, 3 < x$", "$-6 < x < 6$", "$-12 < x < 12$"],
        answer: "$-3 < x < 3$",
        rationale: "<strong>解説: </strong>$-6 < 2x < 6$ と変形します。<br>各辺を $2$ で割って、<br>$-3 < x < 3$ となります。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "次の不等式を解け。<br>$|3x| \\geqq 9$",
        options: ["$-3 \\leqq x \\leqq 3$", "$x \\leqq -3, 3 \\leqq x$", "$x \\geqq 3$", "$x \\leqq -3$"],
        answer: "$x \\leqq -3, 3 \\leqq x$",
        rationale: "<strong>解説: </strong>$3x \\leqq -9, 9 \\leqq 3x$ と変形します。<br>各辺を $3$ で割って、<br>$x \\leqq -3, 3 \\leqq x$ となります。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "次の不等式を解け。<br>$|2x - 1| < 3$",
        options: ["$-1 < x < 2$", "$-2 < x < 1$", "$x < -1, 2 < x$", "$-2 < x < 2$"],
        answer: "$-1 < x < 2$",
        rationale: "<strong>解説: </strong>$-3 < 2x - 1 < 3$ と変形します。<br>各辺に $1$ を足して $-2 < 2x < 4$。<br>各辺を $2$ で割って $-1 < x < 2$ となります。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "次の不等式を解け。<br>$|2x + 3| \\leqq 5$",
        options: ["$-4 \\leqq x \\leqq 1$", "$-1 \\leqq x \\leqq 4$", "$x \\leqq -4, 1 \\leqq x$", "$-8 \\leqq x \\leqq 2$"],
        answer: "$-4 \\leqq x \\leqq 1$",
        rationale: "<strong>解説: </strong>$-5 \\leqq 2x + 3 \\leqq 5$ と変形します。<br>各辺から $3$ を引いて $-8 \\leqq 2x \\leqq 2$。<br>各辺を $2$ で割って $-4 \\leqq x \\leqq 1$ となります。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "次の不等式を解け。<br>$|3x - 2| > 4$",
        options: ["$x < -\\frac{2}{3}, 2 < x$", "$-\\frac{2}{3} < x < 2$", "$x < -2, \\frac{2}{3} < x$", "$x > 2$"],
        answer: "$x < -\\frac{2}{3}, 2 < x$",
        rationale: "<strong>解説: </strong>$3x - 2 < -4, 4 < 3x - 2$ と変形します。<br>$3x < -2, 6 < 3x$ となるので、<br>$x < -\\frac{2}{3}, 2 < x$ となります。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "次の不等式を解け。<br>$|4x + 1| < 9$",
        options: ["$-\\frac{5}{2} < x < 2$", "$-2 < x < \\frac{5}{2}$", "$x < -\\frac{5}{2}, 2 < x$", "$-10 < x < 8$"],
        answer: "$-\\frac{5}{2} < x < 2$",
        rationale: "<strong>解説: </strong>$-9 < 4x + 1 < 9$ と変形します。<br>各辺から $1$ を引いて $-10 < 4x < 8$。<br>各辺を $4$ で割って $-\\frac{5}{2} < x < 2$ となります。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "次の不等式を解け。<br>$|3x + 4| \\geqq 2$",
        options: ["$x \\leqq -2, -\\frac{2}{3} \\leqq x$", "$-2 \\leqq x \\leqq -\\frac{2}{3}$", "$x \\geqq -\\frac{2}{3}$", "$x \\leqq -2$"],
        answer: "$x \\leqq -2, -\\frac{2}{3} \\leqq x$",
        rationale: "<strong>解説: </strong>$3x + 4 \\leqq -2, 2 \\leqq 3x + 4$ と変形します。<br>$3x \\leqq -6, -2 \\leqq 3x$ となるので、<br>$x \\leqq -2, -\\frac{2}{3} \\leqq x$ となります。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "次の不等式を解け。<br>$|2x - 5| < 1$",
        options: ["$2 < x < 3$", "$-3 < x < -2$", "$x < 2, 3 < x$", "$1 < x < 4$"],
        answer: "$2 < x < 3$",
        rationale: "<strong>解説: </strong>$-1 < 2x - 5 < 1$ と変形します。<br>各辺に $5$ を足して $4 < 2x < 6$。<br>各辺を $2$ で割って $2 < x < 3$ となります。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "次の不等式を解け。<br>$|5x - 3| \\leqq 12$",
        options: ["$-\\frac{9}{5} \\leqq x \\leqq 3$", "$-3 \\leqq x \\leqq \\frac{9}{5}$", "$x \\leqq -\\frac{9}{5}, 3 \\leqq x$", "$x \\leqq 3$"],
        answer: "$-\\frac{9}{5} \\leqq x \\leqq 3$",
        rationale: "<strong>解説: </strong>$-12 \\leqq 5x - 3 \\leqq 12$ と変形します。<br>各辺に $3$ を足して $-9 \\leqq 5x \\leqq 15$。<br>各辺を $5$ で割って $-\\frac{9}{5} \\leqq x \\leqq 3$ となります。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "次の不等式を解け。<br>$|2x + 6| > 4$",
        options: ["$x < -5, -1 < x$", "$-5 < x < -1$", "$x < -1, 5 < x$", "$x > -1$"],
        answer: "$x < -5, -1 < x$",
        rationale: "<strong>解説: </strong>$2x + 6 < -4, 4 < 2x + 6$ と変形します。<br>$2x < -10, -2 < 2x$ となるので、<br>$x < -5, -1 < x$ となります。" + VIDEO_LINK
    },
    // 問題 31
    {
        question: "次の不等式を解け。<br>$|3 - x| < 4$",
        options: ["$-1 < x < 7$", "$-7 < x < 1$", "$x < -1, 7 < x$", "$-4 < x < 4$"],
        answer: "$-1 < x < 7$",
        rationale: "<strong>解説: </strong>$|3 - x| = |-(x - 3)| = |x - 3|$ なので、$|x - 3| < 4$ と同じです。<br>$-4 < x - 3 < 4$ と変形し、$3$ を足して<br>$-1 < x < 7$ となります。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "次の不等式を解け。<br>$|1 - 2x| \\leqq 5$",
        options: ["$-2 \\leqq x \\leqq 3$", "$-3 \\leqq x \\leqq 2$", "$x \\leqq -2, 3 \\leqq x$", "$-5 \\leqq x \\leqq 5$"],
        answer: "$-2 \\leqq x \\leqq 3$",
        rationale: "<strong>解説: </strong>$|1 - 2x| = |-(2x - 1)| = |2x - 1|$ なので、$|2x - 1| \\leqq 5$ と同じです。<br>$-5 \\leqq 2x - 1 \\leqq 5$ と変形し、$1$ を足して $-4 \\leqq 2x \\leqq 6$。<br>よって $-2 \\leqq x \\leqq 3$ となります。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "次の不等式を解け。<br>$|2 - x| > 3$",
        options: ["$x < -1, 5 < x$", "$-1 < x < 5$", "$x < 5, -1 < x$", "$x < -5, 1 < x$"],
        answer: "$x < -1, 5 < x$",
        rationale: "<strong>解説: </strong>$|2 - x| = |x - 2|$ なので、$|x - 2| > 3$ と同じです。<br>$x - 2 < -3, 3 < x - 2$ と変形し、<br>$x < -1, 5 < x$ となります。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "次の不等式を解け。<br>$|4 - 3x| < 5$",
        options: ["$-\\frac{1}{3} < x < 3$", "$-3 < x < \\frac{1}{3}$", "$x < -\\frac{1}{3}, 3 < x$", "$-\\frac{1}{3} < x < \\frac{1}{3}$"],
        answer: "$-\\frac{1}{3} < x < 3$",
        rationale: "<strong>解説: </strong>$|3x - 4| < 5$ と考えます。<br>$-5 < 3x - 4 < 5$。<br>$4$ を足して $-1 < 3x < 9$。<br>よって $-\\frac{1}{3} < x < 3$ となります。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "次の不等式を解け。<br>$|-x - 2| \\leqq 3$",
        options: ["$-5 \\leqq x \\leqq 1$", "$-1 \\leqq x \\leqq 5$", "$x \\leqq -5, 1 \\leqq x$", "$-3 \\leqq x \\leqq 3$"],
        answer: "$-5 \\leqq x \\leqq 1$",
        rationale: "<strong>解説: </strong>$|-x - 2| = |-(x + 2)| = |x + 2|$ です。<br>$-3 \\leqq x + 2 \\leqq 3$。<br>$2$ を引いて $-5 \\leqq x \\leqq 1$ となります。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "次の不等式を解け。<br>$|2x + 1| < 0$",
        options: ["解なし", "すべての実数", "$x < -0.5$", "$-1 < x < 0$"],
        answer: "解なし",
        rationale: "<strong>解説: </strong>絶対値は必ず $0$ 以上です。<br>負の数より小さくなることはないので、解なしです。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "次の不等式を解け。<br>$|3x - 1| > -2$",
        options: ["すべての実数", "解なし", "$x > -1/3$", "$x < 1$"],
        answer: "すべての実数",
        rationale: "<strong>解説: </strong>絶対値は必ず $0$ 以上です。<br>常に $-2$ より大きくなるため、すべての実数が解となります。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "次の不等式を解け。<br>$|x| + 2 < 5$",
        options: ["$-3 < x < 3$", "$x < 3$", "$-7 < x < 3$", "$x < -3, 3 < x$"],
        answer: "$-3 < x < 3$",
        rationale: "<strong>解説: </strong>まず定数項を移項します。<br>$|x| < 3$ となるので、<br>$-3 < x < 3$ です。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "次の不等式を解け。<br>$2|x| \\leqq 8$",
        options: ["$-4 \\leqq x \\leqq 4$", "$x \\leqq 4$", "$-16 \\leqq x \\leqq 16$", "$x \\leqq -4, 4 \\leqq x$"],
        answer: "$-4 \\leqq x \\leqq 4$",
        rationale: "<strong>解説: </strong>両辺を $2$ で割ります。<br>$|x| \\leqq 4$ となるので、<br>$-4 \\leqq x \\leqq 4$ です。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "次の不等式を解け。<br>$|x - 2| + 1 \\geqq 4$",
        options: ["$x \\leqq -1, 5 \\leqq x$", "$-1 \\leqq x \\leqq 5$", "$x \\geqq 5$", "$x \\leqq -1$"],
        answer: "$x \\leqq -1, 5 \\leqq x$",
        rationale: "<strong>解説: </strong>移項して $|x - 2| \\geqq 3$。<br>$x - 2 \\leqq -3, 3 \\leqq x - 2$。<br>それぞれ解くと、$x \\leqq -1, 5 \\leqq x$ となります。" + VIDEO_LINK
    },

    // --- レベル4: 少し複雑な形 (41-50) ---
    // 問題 41
    {
        question: "次の不等式を解け。<br>$|2x - 1| < 5$",
        options: ["$-2 < x < 3$", "$-3 < x < 2$", "$x < -2, 3 < x$", "$-2 < x < 2$"],
        answer: "$-2 < x < 3$",
        rationale: "<strong>解説: </strong>$-5 < 2x - 1 < 5$。<br>$1$ を足して $-4 < 2x < 6$。<br>$2$ で割って $-2 < x < 3$ です。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "次の不等式を解け。<br>$|3x + 2| \\leqq 4$",
        options: ["$-2 \\leqq x \\leqq \\frac{2}{3}$", "$-\\frac{2}{3} \\leqq x \\leqq 2$", "$x \\leqq -2$", "$-2 \\leqq x \\leqq 2$"],
        answer: "$-2 \\leqq x \\leqq \\frac{2}{3}$",
        rationale: "<strong>解説: </strong>$-4 \\leqq 3x + 2 \\leqq 4$。<br>$2$ を引いて $-6 \\leqq 3x \\leqq 2$。<br>$3$ で割って $-2 \\leqq x \\leqq \\frac{2}{3}$ です。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "次の不等式を解け。<br>$|1 - x| > 2$",
        options: ["$x < -1, 3 < x$", "$-1 < x < 3$", "$x < -3, 1 < x$", "$x > 3$"],
        answer: "$x < -1, 3 < x$",
        rationale: "<strong>解説: </strong>$|x - 1| > 2$ と同じです。<br>$x - 1 < -2, 2 < x - 1$。<br>よって $x < -1, 3 < x$ です。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "次の不等式を解け。<br>$3|x| - 2 < 7$",
        options: ["$-3 < x < 3$", "$x < 3$", "$-\\frac{5}{3} < x < \\frac{5}{3}$", "$x < -3, 3 < x$"],
        answer: "$-3 < x < 3$",
        rationale: "<strong>解説: </strong>$3|x| < 9$。<br>$|x| < 3$。<br>よって $-3 < x < 3$ です。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "次の不等式を解け。<br>$|2x| - 5 \\geqq 1$",
        options: ["$x \\leqq -3, 3 \\leqq x$", "$-3 \\leqq x \\leqq 3$", "$x \\geqq 3$", "$-2 \\leqq x \\leqq 2$"],
        answer: "$x \\leqq -3, 3 \\leqq x$",
        rationale: "<strong>解説: </strong>$|2x| \\geqq 6$。<br>$2x \\leqq -6, 6 \\leqq 2x$。<br>よって $x \\leqq -3, 3 \\leqq x$ です。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "次の不等式を解け。<br>$|x + 2| < 2.5$",
        options: ["$-4.5 < x < 0.5$", "$-0.5 < x < 4.5$", "$x < -4.5, 0.5 < x$", "$-2.5 < x < 2.5$"],
        answer: "$-4.5 < x < 0.5$",
        rationale: "<strong>解説: </strong>$-2.5 < x + 2 < 2.5$。<br>$2$ を引いて $-4.5 < x < 0.5$ です。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "次の不等式を解け。<br>$|3 - 2x| \\leqq 1$",
        options: ["$1 \\leqq x \\leqq 2$", "$x \\leqq 1, 2 \\leqq x$", "$-1 \\leqq x \\leqq 1$", "$-2 \\leqq x \\leqq -1$"],
        answer: "$1 \\leqq x \\leqq 2$",
        rationale: "<strong>解説: </strong>$|2x - 3| \\leqq 1$ と考えます。<br>$-1 \\leqq 2x - 3 \\leqq 1$。<br>$2 \\leqq 2x \\leqq 4$。<br>よって $1 \\leqq x \\leqq 2$ です。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "次の不等式を解け。<br>$|4x + 2| > 6$",
        options: ["$x < -2, 1 < x$", "$-2 < x < 1$", "$x < -1, 2 < x$", "$x > 1$"],
        answer: "$x < -2, 1 < x$",
        rationale: "<strong>解説: </strong>$4x + 2 < -6, 6 < 4x + 2$。<br>$4x < -8, 4 < 4x$。<br>よって $x < -2, 1 < x$ です。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "次の不等式を解け。<br>$2|x - 1| < 6$",
        options: ["$-2 < x < 4$", "$x < -2, 4 < x$", "$-4 < x < 2$", "$x < 4$"],
        answer: "$-2 < x < 4$",
        rationale: "<strong>解説: </strong>$|x - 1| < 3$。<br>$-3 < x - 1 < 3$。<br>よって $-2 < x < 4$ です。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "次の不等式を解け。<br>$3|x + 2| \\geqq 9$",
        options: ["$x \\leqq -5, 1 \\leqq x$", "$-5 \\leqq x \\leqq 1$", "$x \\geqq 1$", "$x \\leqq -1, 5 \\leqq x$"],
        answer: "$x \\leqq -5, 1 \\leqq x$",
        rationale: "<strong>解説: </strong>$|x + 2| \\geqq 3$。<br>$x + 2 \\leqq -3, 3 \\leqq x + 2$。<br>よって $x \\leqq -5, 1 \\leqq x$ です。" + VIDEO_LINK
    }
];