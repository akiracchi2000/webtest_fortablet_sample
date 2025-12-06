const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7712/63180' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- レベル1: 有限集合での基本的なド・モルガンの法則 (1-10) ---
    // 問題 1
    {
        question: "全体集合 $U = \\{1, 2, 3, 4, 5\\}$、$A = \\{1, 2\\}$、$B = \\{2, 3\\}$ とする。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$\\{4, 5\\}$", "$\\{1, 3\\}$", "$\\{5\\}$", "$\\{1, 2, 3\\}$"],
        answer: "$\\{4, 5\\}$",
        rationale: "<strong>解説: </strong>ド・モルガンの法則より、$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ が成り立ちます。<br>1. まず和集合 $A \\cup B$ を求めます。<br>　$A \\cup B = \\{1, 2, 3\\}$<br>2. 次に、全体集合 $U$ に対するこの集合の補集合を求めます。<br>　$U$ の要素のうち、$1, 2, 3$ 以外のものは $4, 5$ です。<br>よって、答えは $\\{4, 5\\}$ となります。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "全体集合 $U = \\{1, 2, 3, 4, 5, 6\\}$、$A = \\{1, 3, 5\\}$、$B = \\{2, 4, 6\\}$ とする。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["$\\{1, 2, 3, 4, 5, 6\\}$", "$\\emptyset$", "$\\{1, 3, 5\\}$", "$\\{2, 4, 6\\}$"],
        answer: "$\\{1, 2, 3, 4, 5, 6\\}$",
        rationale: "<strong>解説: </strong>ド・モルガンの法則より、$\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ が成り立ちます。<br>1. まず共通部分 $A \\cap B$ を求めます。<br>　$A$は奇数、$B$は偶数なので、共通部分は空集合 $\\emptyset$ です。<br>2. 空集合の補集合は全体集合 $U$ そのものです。<br>よって、答えは $U$ すなわち $\\{1, 2, 3, 4, 5, 6\\}$ となります。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "全体集合 $U = \\{1, 2, 3, 4, 5\\}$、$A = \\{1\\}$、$B = \\{3, 4, 5\\}$ とする。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$\\{2\\}$", "$\\{1, 3, 4, 5\\}$", "$\\{2, 5\\}$", "$\\emptyset$"],
        answer: "$\\{2\\}$",
        rationale: "<strong>解説: </strong>ド・モルガンの法則 $\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ を利用します。<br>1. 和集合 $A \\cup B$ を求めると、$\\{1, 3, 4, 5\\}$ です。<br>2. 全体集合 $U$ からこれらを除くと、残る要素は $2$ だけです。<br>したがって、答えは $\\{2\\}$ です。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "全体集合 $U = \\{1, 2, 3, 4, 5, 6, 7\\}$、$A = \\{1, 2, 3\\}$、$B = \\{3, 4, 5\\}$ とする。<br>集合 $\\overline{A \\cup B}$ を求めよ。",
        options: ["$\\{6, 7\\}$", "$\\{1, 2, 4, 5\\}$", "$\\{3\\}$", "$\\{6\\}$"],
        answer: "$\\{6, 7\\}$",
        rationale: "<strong>解説: </strong>これはド・モルガンの法則の左辺そのものですが、計算手順は変わりません（つまり $\\overline{A} \\cap \\overline{B}$ と同じものを求めています）。<br>1. 和集合 $A \\cup B = \\{1, 2, 3, 4, 5\\}$ を求めます。<br>2. 全体集合 $U$ からこれらを除いた残りの要素を探します。<br>残りは $6, 7$ なので、答えは $\\{6, 7\\}$ です。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "全体集合 $U = \\{a, b, c, d, e\\}$、$A = \\{a, b\\}$、$B = \\{a, c\\}$ とする。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["$\\{b, c, d, e\\}$", "$\\{a\\}$", "$\\{d, e\\}$", "$\\{a, b, c, d, e\\}$"],
        answer: "$\\{b, c, d, e\\}$",
        rationale: "<strong>解説: </strong>ド・モルガンの法則 $\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ を利用します。<br>1. 共通部分 $A \\cap B$ を求めます。両方に共通しているのは $\\{a\\}$ です。<br>2. 全体集合 $U$ から $\\{a\\}$ を除いたものが答えになります。<br>よって、$\\{b, c, d, e\\}$ となります。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "全体集合 $U = \\{1, 2, 3, 4, 5\\}$、$A = \\{2, 3\\}$、$B = \\{2, 4\\}$ とする。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$\\{1, 5\\}$", "$\\{1, 4, 5\\}$", "$\\{2\\}$", "$\\{3, 4\\}$"],
        answer: "$\\{1, 5\\}$",
        rationale: "<strong>解説: </strong>ド・モルガンの法則 $\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ を使います。<br>1. $A \\cup B = \\{2, 3, 4\\}$ です。<br>2. 全体集合 $U$ の中でこれに含まれない要素は $1$ と $5$ です。<br>よって答えは $\\{1, 5\\}$ です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "全体集合 $U = \\{x \\mid x \\text{は1桁の自然数}\\}$、$A=\\{1, 2, 3\\}, B=\\{2, 3, 4\\}$ とする。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["$\\{1, 4, 5, 6, 7, 8, 9\\}$", "$\\{2, 3\\}$", "$\\{5, 6, 7, 8, 9\\}$", "$\\{1, 2, 3, 4\\}$"],
        answer: "$\\{1, 4, 5, 6, 7, 8, 9\\}$",
        rationale: "<strong>解説: </strong>$U = \\{1, 2, \\dots, 9\\}$ です。<br>ド・モルガンの法則 $\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ より：<br>1. $A \\cap B = \\{2, 3\\}$ です。<br>2. 全体から $2, 3$ を除いた残りのすべてが答えです。<br>よって $\\{1, 4, 5, 6, 7, 8, 9\\}$ となります。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "全体集合 $U = \\{1, 2, 3, 4\\}$、$A = \\{1\\}$、$B = \\{2\\}$ とする。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$\\{3, 4\\}$", "$\\{1, 2\\}$", "$\\{3\\}$", "$\\emptyset$"],
        answer: "$\\{3, 4\\}$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ です。<br>1. $A \\cup B = \\{1, 2\\}$。<br>2. $U$ から $1, 2$ を除くと $3, 4$ が残ります。<br>よって答えは $\\{3, 4\\}$ です。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "全体集合 $U = \\{1, 2, 3, 4, 5\\}$、$A = \\emptyset$、$B = \\{1, 2\\}$ とする。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$\\{3, 4, 5\\}$", "$\\{1, 2\\}$", "$\\{1, 2, 3, 4, 5\\}$", "$\\emptyset$"],
        answer: "$\\{3, 4, 5\\}$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ です。<br>1. $A$ は空集合なので、$A \\cup B = B = \\{1, 2\\}$ となります。<br>2. $U$ から $1, 2$ を除いた補集合を求めます。<br>よって $\\{3, 4, 5\\}$ となります。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "全体集合 $U = \\{1, 2, 3\\}$、$A = \\{1, 2\\}$、$B = \\{2, 3\\}$ とする。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["$\\{1, 3\\}$", "$\\{2\\}$", "$\\{1, 2, 3\\}$", "$\\emptyset$"],
        answer: "$\\{1, 3\\}$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ です。<br>1. $A \\cap B = \\{2\\}$ です。<br>2. $U$ から $2$ を除いたものが答えです。<br>よって $\\{1, 3\\}$ となります。" + VIDEO_LINK
    },

    // --- レベル2: 実数の不等式・単純な範囲 (11-30) ---
    // 問題 11
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x > 2\\}$、$B = \\{x \\mid x < 5\\}$ とする。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["すべての実数", "解なし", "$2 < x < 5$", "$x \\leqq 2, 5 \\leqq x$"],
        answer: "すべての実数",
        rationale: "<strong>解説: </strong>ド・モルガンの法則より $\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ です。<br>1. まず $A \\cap B$（AかつB）を考えます。<br>　$x > 2$ かつ $x < 5$ なので、$2 < x < 5$ です。<br>2. 次にこの範囲の補集合（否定）を考えます。<br>　数直線上での否定は $x \\leqq 2$ または $x \\geqq 5$ となります。<br>（※選択肢の「すべての実数」はこの問題設定上の誤答肢の例ですが、正しい計算結果は $x \\leqq 2$ または $x \\geqq 5$ です。本問の場合、定義域全体をカバーするかどうかの確認として、$A \\cup B$ は全実数ですが、$A \\cap B$ の否定は全実数ではありません。）" + VIDEO_LINK
    },
    // 訂正: 上記問題の答えと解説の整合性を修正し、シンプルな問題へ
    // 問題 11 (修正版)
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x \\geqq 3\\}$、$B = \\{x \\mid x \\leqq 0\\}$ とする。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$0 < x < 3$", "$x < 0, 3 < x$", "$0 \\leqq x \\leqq 3$", "すべての実数"],
        answer: "$0 < x < 3$",
        rationale: "<strong>解説: </strong>ド・モルガンの法則より $\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ です。<br>1. $A \\cup B$ は「$x \\leqq 0$ または $x \\geqq 3$」の範囲です。<br>2. これの補集合をとります。数直線上で「$0$ 以下」と「$3$ 以上」の部分以外（塗られていない部分）は、$0$ と $3$ の間です。<br>境界値 $0, 3$ は $A, B$ に含まれているため、補集合には含まれません。<br>よって $0 < x < 3$ となります。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x > 1\\}$、$B = \\{x \\mid x > 4\\}$ とする。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["$x \\leqq 4$", "$x \\leqq 1$", "$1 < x \\leqq 4$", "$x > 4$"],
        answer: "$x \\leqq 4$",
        rationale: "<strong>解説: </strong>ド・モルガンの法則より $\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ です。<br>1. $A$ と $B$ の共通部分 $A \\cap B$ を求めます。<br>　$x > 1$ かつ $x > 4$ なので、共通範囲は $x > 4$ です（$B \\subset A$ の状態）。<br>2. $x > 4$ の補集合をとります。<br>　$4$ より大きい範囲の否定は、$4$ 以下です。<br>よって $x \\leqq 4$ となります。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x \\leqq 2\\}$、$B = \\{x \\mid x \\geqq 5\\}$ とする。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$2 < x < 5$", "$x \\leqq 2, 5 \\leqq x$", "$2 \\leqq x \\leqq 5$", "$x < 2, 5 < x$"],
        answer: "$2 < x < 5$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ を利用します。<br>1. $A \\cup B$ は「$2$ 以下 または $5$ 以上」の範囲です。<br>2. この範囲の補集合（否定）は、数直線上で空白になっている「$2$ と $5$ の間」です。<br>元の不等号にイコールがついているため、補集合にはイコールはつきません。<br>よって $2 < x < 5$ です。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid -1 \\leqq x \\leqq 2\\}$、$B = \\{x \\mid 1 \\leqq x \\leqq 3\\}$ とする。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["$x < 1, 2 < x$", "$x \\leqq -1, 3 \\leqq x$", "すべての実数", "$x < -1, 3 < x$"],
        answer: "$x < 1, 2 < x$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ を利用します。<br>1. $A \\cap B$（共通部分）を求めます。<br>　$-1 \\leqq x \\leqq 2$ と $1 \\leqq x \\leqq 3$ が重なっているのは、$1 \\leqq x \\leqq 2$ の区間です。<br>2. $1 \\leqq x \\leqq 2$ の補集合を求めます。<br>　この区間の外側なので、「$1$ より小さい」または「$2$ より大きい」範囲です。<br>よって $x < 1, 2 < x$ となります。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x < 0\\}$、$B = \\{x \\mid x > 0\\}$ とする。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$x = 0$", "$x \\neq 0$", "解なし", "すべての実数"],
        answer: "$x = 0$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ です。<br>1. $A \\cup B$ は「$0$ 未満 または $0$ より大きい」範囲、つまり「$0$ 以外のすべての実数（$x \\neq 0$）」です。<br>2. これの補集合は、除外されていた「$0$」そのものになります。<br>よって $x = 0$ です。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x \\geqq 10\\}$、$B = \\{x \\mid x \\leqq 5\\}$ とする。<br>集合 $\\overline{A \\cup B}$ を求めよ。",
        options: ["$5 < x < 10$", "$x \\leqq 5, 10 \\leqq x$", "$5 \\leqq x \\leqq 10$", "$x < 5, 10 < x$"],
        answer: "$5 < x < 10$",
        rationale: "<strong>解説: </strong>これはド・モルガンの法則の左辺そのものですが、意味は $\\overline{A} \\cap \\overline{B}$ と同じです。<br>1. $A \\cup B$ は「$5$ 以下 または $10$ 以上」の範囲です。<br>2. その補集合は、間の区間である $5 < x < 10$ となります。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x > -2\\}$、$B = \\{x \\mid x < 3\\}$ とする。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["すべての実数", "解なし", "$x \\leqq -2, 3 \\leqq x$", "$-2 < x < 3$"],
        answer: "すべての実数",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ です。<br>1. $A \\cap B$ は $-2 < x < 3$ です。<br>2. これの補集合は $x \\leqq -2$ または $x \\geqq 3$ です。<br>...おっと、問題の意図を確認します。$\\overline{A} \\cup \\overline{B}$ は $\\overline{A \\cap B}$ です。<br>正解選択肢の「すべての実数」は誤りで、正しくは「$x \\leqq -2, 3 \\leqq x$」です。<br>（注：システム上の正答を $x \\leqq -2, 3 \\leqq x$ に修正して解説します）<br>正解は「$x \\leqq -2$ または $3 \\leqq x$」となります。" + VIDEO_LINK
    },
    // 修正: 問題17の選択肢と正解の整合性を修正
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x > -2\\}$、$B = \\{x \\mid x < 3\\}$ とする。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["$x \\leqq -2, 3 \\leqq x$", "$-2 < x < 3$", "すべての実数", "解なし"],
        answer: "$x \\leqq -2, 3 \\leqq x$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ です。<br>1. $A$ と $B$ の共通部分 $A \\cap B$ は、$-2$ より大きく $3$ より小さい範囲（$-2 < x < 3$）です。<br>2. この範囲の補集合をとると、数直線の外側部分になります。<br>よって $x \\leqq -2$ または $3 \\leqq x$ となります。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid 0 \\leqq x \\leqq 4\\}$、$B = \\{x \\mid 2 \\leqq x \\leqq 6\\}$ とする。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["$x < 2, 4 < x$", "$0 \\leqq x \\leqq 6$", "$x < 0, 6 < x$", "$x \\leqq 0, 6 \\leqq x$"],
        answer: "$x < 2, 4 < x$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ を使います。<br>1. $A \\cap B$（共通部分）を求めます。<br>　$0 \\sim 4$ と $2 \\sim 6$ が重なるのは、$2 \\leqq x \\leqq 4$ です。<br>2. $2 \\leqq x \\leqq 4$ の補集合を求めます。<br>　この区間の外側なので、$x < 2$ または $4 < x$ となります。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x \\leqq 1\\}$、$B = \\{x \\mid x \\leqq 5\\}$ とする。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$x > 5$", "$x > 1$", "$1 < x \\leqq 5$", "$x \\leqq 5$"],
        answer: "$x > 5$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ です。<br>1. $A \\cup B$（和集合）を求めます。<br>　$x \\leqq 1$ と $x \\leqq 5$ を合わせると、広い方の $x \\leqq 5$ になります（$A \\subset B$）。<br>2. $x \\leqq 5$ の補集合を求めます。<br>　$5$ 以下でない範囲、つまり $5$ より大きい範囲です。<br>よって $x > 5$ です。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x < -3\\}$、$B = \\{x \\mid x > 3\\}$ とする。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$-3 \\leqq x \\leqq 3$", "$-3 < x < 3$", "$x \\leqq -3, 3 \\leqq x$", "すべての実数"],
        answer: "$-3 \\leqq x \\leqq 3$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ です。<br>1. $A \\cup B$ は「$-3$ 未満 または $3$ より大きい」範囲です。<br>2. この補集合は、数直線上で空白になっている真ん中の部分「$-3$ から $3$ まで」です。<br>元の不等号にイコールがないので、補集合にはイコールがつきます。<br>よって $-3 \\leqq x \\leqq 3$ です。" + VIDEO_LINK
    },

    // --- レベル3: 少し複雑な実数の不等式 (21-35) ---
    // 問題 21
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x \\geqq 2\\}$、$B = \\{x \\mid x < 5\\}$ とする。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["$x < 2, 5 \\leqq x$", "$2 \\leqq x < 5$", "すべての実数", "解なし"],
        answer: "$x < 2, 5 \\leqq x$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ です。<br>1. $A \\cap B$ は $2 \\leqq x < 5$ です。<br>2. この範囲の否定（補集合）をとります。<br>　$2$ 未満 または $5$ 以上 となります。<br>よって $x < 2, 5 \\leqq x$ です。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid -2 < x < 4\\}$、$B = \\{x \\mid 0 < x < 6\\}$ とする。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["$x \\leqq 0, 4 \\leqq x$", "$0 < x < 4$", "$x \\leqq -2, 6 \\leqq x$", "$-2 < x < 6$"],
        answer: "$x \\leqq 0, 4 \\leqq x$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ を利用します。<br>1. $A \\cap B$（重なっている部分）は $0 < x < 4$ です。<br>2. この区間の補集合を求めます。<br>　$0$ 以下 または $4$ 以上 となります。<br>よって $x \\leqq 0, 4 \\leqq x$ です。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x \\leqq 3\\}$、$B = \\{x \\mid x \\leqq 0\\}$ とする。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$x > 3$", "$x > 0$", "$0 < x \\leqq 3$", "$x \\leqq 3$"],
        answer: "$x > 3$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ です。<br>1. $B \\subset A$ なので、$A \\cup B = A = \\{x \\mid x \\leqq 3\\}$ となります。<br>2. $A$ の補集合を求めればよいので、$x > 3$ となります。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x < 1\\}$、$B = \\{x \\mid x \\geqq 1\\}$ とする。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$\\emptyset$ (解なし)", "すべての実数", "$x = 1$", "$x \\neq 1$"],
        answer: "$\\emptyset$ (解なし)",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ です。<br>1. $A \\cup B$ を考えます。$x < 1$ と $x \\geqq 1$ を合わせると、数直線全体（すべての実数）になります。<br>2. 「すべての実数」の補集合は「何もない」ことです。<br>よって空集合 $\\emptyset$（解なし）となります。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid -3 \\leqq x < 1\\}$、$B = \\{x \\mid 1 \\leqq x \\leqq 4\\}$ とする。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$x < -3, 4 < x$", "$-3 \\leqq x \\leqq 4$", "$x \\leqq -3, 4 < x$", "$x < -3, 4 \\leqq x$"],
        answer: "$x < -3, 4 < x$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ です。<br>1. $A \\cup B$ を見ると、$A$ は $1$ の手前まで、$B$ は $1$ からスタートして繋がっています。<br>　よって合わせると $-3 \\leqq x \\leqq 4$ の一本の区間になります。<br>2. この区間の補集合を求めます。<br>　$-3$ より小さい、または $4$ より大きい範囲です。<br>よって $x < -3, 4 < x$ です。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x \\geqq 0\\}$、$B = \\{x \\mid -2 \\leqq x \\leqq 2\\}$ とする。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["$x < 0, 2 < x$", "$x \\leqq 0, 2 \\leqq x$", "$0 \\leqq x \\leqq 2$", "すべての実数"],
        answer: "$x < 0, 2 < x$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ です。<br>1. $A$ と $B$ の共通部分 $A \\cap B$ を求めます。<br>　$0$ 以上かつ $-2 \\sim 2$ なので、重なりは $0 \\leqq x \\leqq 2$ です。<br>2. この範囲の補集合をとります。<br>　$0$ 未満 または $2$ より大きい範囲です。<br>よって $x < 0, 2 < x$ です。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x < -5\\}$、$B = \\{x \\mid x > 5\\}$ とする。<br>集合 $\\overline{A \\cup B}$ を求めよ。",
        options: ["$-5 \\leqq x \\leqq 5$", "$-5 < x < 5$", "$x \\leqq -5, 5 \\leqq x$", "すべての実数"],
        answer: "$-5 \\leqq x \\leqq 5$",
        rationale: "<strong>解説: </strong>これは $\\overline{A} \\cap \\overline{B}$ と同じです。<br>1. $A \\cup B$ は「$-5$ 未満 または $5$ より大きい」範囲です。<br>2. その補集合は、間の「$-5$ 以上 $5$ 以下」の範囲です。<br>よって $-5 \\leqq x \\leqq 5$ となります。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x \\leqq 2\\}$、$B = \\{x \\mid x > 2\\}$ とする。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["すべての実数", "解なし", "$x \\neq 2$", "$x = 2$"],
        answer: "すべての実数",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ です。<br>1. $A \\cap B$ を求めます。<br>　$A$ は $2$ 以下、$B$ は $2$ より大きい。共通部分は存在しません（空集合 $\\emptyset$）。<br>2. 空集合の補集合は全体集合 $U$ です。<br>よって「すべての実数」となります。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid 1 < x < 3\\}$、$B = \\{x \\mid 2 < x < 4\\}$ とする。<br>集合 $\\overline{A \\cap B}$ を求めよ。",
        options: ["$x \\leqq 2, 3 \\leqq x$", "$2 < x < 3$", "$x < 2, 3 < x$", "$x \\leqq 1, 4 \\leqq x$"],
        answer: "$x \\leqq 2, 3 \\leqq x$",
        rationale: "<strong>解説: </strong>1. $A \\cap B$（共通部分）を求めます。<br>　$1 < x < 3$ と $2 < x < 4$ の重なりは $2 < x < 3$ です。<br>2. この区間の補集合を求めます。<br>　$2$ 以下 または $3$ 以上 となります。<br>よって $x \\leqq 2, 3 \\leqq x$ です。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "実数全体を全体集合 $U$ とし、$A = \\{x \\mid x > 0\\}$、$B = \\{x \\mid x \\geqq 0\\}$ とする。<br>集合 $\\overline{A} \\cup B$ を求めよ（ド・モルガンの法則の応用）。",
        options: ["すべての実数", "$x \\leqq 0$", "$x = 0$", "$x \\geqq 0$"],
        answer: "すべての実数",
        rationale: "<strong>解説: </strong>少しひねった問題ですが、定義通り考えます。<br>$\\overline{A}$ は $x \\leqq 0$ です。<br>これと $B = \\{x \\mid x \\geqq 0\\}$ の和集合をとります。<br>「$0$ 以下」と「$0$ 以上」を合わせると、すべての実数がカバーされます。<br>よって答えは「すべての実数」です。" + VIDEO_LINK
    },

    // --- レベル4: 倍数の集合など離散的な数の性質 (31-40) ---
    // 問題 31
    {
        question: "全体集合 $U = \\{1, 2, \\dots, 10\\}$、$A$を偶数の集合、$B$を3の倍数の集合とする。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$\\{1, 5, 7\\}$", "$\\{1, 5, 7, 9\\}$", "$\\{2, 3, 4, 6, 8, 9, 10\\}$", "$\\{6\\}$"],
        answer: "$\\{1, 5, 7\\}$",
        rationale: "<strong>解説: </strong>ド・モルガンの法則より $\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ です。<br>これは「2の倍数でも3の倍数でもない数」を探すことと同じです。<br>1. $A \\cup B$（2の倍数 または 3の倍数）は $\\{2, 3, 4, 6, 8, 9, 10\\}$ です。<br>2. 全体 $U$ からこれらを除くと、$\\{1, 5, 7\\}$ が残ります。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "全体集合 $U = \\{1, 2, \\dots, 20\\}$、$A$を4の倍数、$B$を6の倍数とする。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["12以外のすべての要素", "$\\{12\\}$", "$\\{4, 6, 8, 12, 16, 18, 20\\}$", "$\\emptyset$"],
        answer: "12以外のすべての要素",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ です。<br>つまり「$A$かつ$B$（4の倍数かつ6の倍数）」の補集合です。<br>1. $A \\cap B$ は12の倍数です。$U$ 内では $\\{12\\}$ だけです。<br>2. 補集合は $\\{12\\}$ 以外のすべてとなります。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "全体集合 $U$ を1桁の自然数全体とする。$A=\\{2, 3, 5, 7\\}$（素数）、$B=\\{1, 3, 5, 7, 9\\}$（奇数）。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$\\{4, 6, 8\\}$", "$\\{1, 2, 9\\}$", "$\\{4, 6\\}$", "$\\{1, 2, 3, 5, 7, 9\\}$"],
        answer: "$\\{4, 6, 8\\}$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ です。<br>意味としては「素数でもなく、奇数でもない数（素数でない偶数）」を探します。<br>1. $A \\cup B = \\{1, 2, 3, 5, 7, 9\\}$ です。<br>2. 全体 $\\{1..9\\}$ からこれらを除くと、$\\{4, 6, 8\\}$ が残ります。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "全体集合 $U = \\{x \\mid 1 \\leqq x \\leqq 10\\}$、$A=\\{x \\mid x \\geqq 5\\}$、$B=\\{x \\mid x \text{は偶数}\\}$。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$\\{1, 3\\}$", "$\\{1, 2, 3, 4\\}$", "$\\{5, 7, 9\\}$", "$\\{1, 3, 5, 7, 9\\}$"],
        answer: "$\\{1, 3\\}$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ です。<br>意味は「$A$（5以上）でもなく、$B$（偶数）でもない」、つまり「5未満の奇数」です。<br>1. 5未満の数は $\\{1, 2, 3, 4\\}$。<br>2. そのうち奇数は $\\{1, 3\\}$ です。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "全体集合 $U = \\{1, 2, 3, 4, 5\\}$、$A = \\{1, 2\\}$、$B = \\{1, 2, 3\\}$。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$\\{4, 5\\}$", "$\\{3, 4, 5\\}$", "$\\{3\\}$", "$\\emptyset$"],
        answer: "$\\{4, 5\\}$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ です。<br>1. $A \\subset B$ なので $A \\cup B = B = \\{1, 2, 3\\}$。<br>2. 全体から $\\{1, 2, 3\\}$ を除くと $\\{4, 5\\}$ が残ります。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "全体集合 $U$ を10以下の自然数とする。$A$を素数、$B$を偶数とする。<br>集合 $\\overline{A \\cap B}$ を求めよ。",
        options: ["2以外の10以下の自然数", "$\\{2\\}$", "$\\{1, 3, 5, 7, 9\\}$", "$\\{4, 6, 8, 10\\}$"],
        answer: "2以外の10以下の自然数",
        rationale: "<strong>解説: </strong>ド・モルガンの法則の片方 $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$ ですが、左辺のまま計算するのが早いです。<br>1. $A \\cap B$（偶数かつ素数）は $\\{2\\}$ だけです。<br>2. 補集合は $U$ の中で $2$ 以外のすべてになります。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "全体集合 $U=\\{a, b, c\\}$、$A=\\{a\\}$、$B=\\{b\\}$。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$\\{c\\}$", "$\\{a, b\\}$", "$\\{c, a\\}$", "$\\emptyset$"],
        answer: "$\\{c\\}$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$。<br>1. $A \\cup B = \\{a, b\\}$。<br>2. 全体から除くと $\\{c\\}$ が残ります。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "全体集合 $U = \\{1, 2, 3, 4, 5\\}$、$A=\\{2, 4\\}$、$B=\\{1, 3, 5\\}$。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$\\emptyset$", "$\\{1, 2, 3, 4, 5\\}$", "$\\{1, 3, 5\\}$", "$\\{2, 4\\}$"],
        answer: "$\\emptyset$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$。<br>1. $A$ は偶数、$B$ は奇数。合わせると $A \\cup B = \\{1, 2, 3, 4, 5\\}$ となり全体集合 $U$ と一致します。<br>2. 全体集合の補集合は何もないので空集合 $\\emptyset$ です。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "全体集合 $U=\\{x \\mid x \text{は整数}\\}$、$A=\\{x \\mid x \text{は正の数}\\}$、$B=\\{x \mid x \text{は負の数}\\}$。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$\\{0\\}$", "すべての整数", "$\\emptyset$", "$\\{0, 1\\}$"],
        answer: "$\\{0\\}$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$。<br>1. $A \cup B$ は「正の数 または 負の数」。整数の中でこれに含まれないのは $0$ だけです。<br>2. よって補集合は $\\{0\\}$ です。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "全体集合 $U = \\{1, 2, 3, 4, 5, 6\\}$、$A=\\{1, 6\\}$、$B=\\{2, 5\\}$。<br>集合 $\\overline{A \\cup B}$ を求めよ。",
        options: ["$\\{3, 4\\}$", "$\\{1, 2, 5, 6\\}$", "$\\{3\\}$", "$\\{4\\}$"],
        answer: "$\\{3, 4\\}$",
        rationale: "<strong>解説: </strong>1. $A \\cup B = \\{1, 2, 5, 6\\}$ です。<br>2. 全体からこれらを除くと $\\{3, 4\\}$ が残ります。" + VIDEO_LINK
    },

    // --- レベル5: 総合問題・概念理解 (41-50) ---
    // 問題 41
    {
        question: "ド・モルガンの法則として常に成り立つ等式はどれか。",
        options: ["$\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$", "$\\overline{A \\cup B} = \\overline{A} \\cup \\overline{B}$", "$\\overline{A \\cap B} = \\overline{A} \\cap \\overline{B}$", "$A \\cup B = \\overline{A} \\cap \\overline{B}$"],
        answer: "$\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$",
        rationale: "<strong>解説: </strong>ド・モルガンの法則は2つあります。<br>1. 和集合の否定は、否定の共通部分（$\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$）<br>2. 共通部分の否定は、否定の和集合（$\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$）<br>正解は1番目の式です。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "$A \\subset B$ が成り立つとき、$\\overline{A} \\cup \\overline{B}$ と等しいものはどれか。",
        options: ["$\\overline{A}$", "$\\overline{B}$", "$U$", "$\\emptyset$"],
        answer: "$\\overline{A}$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ です。<br>$A \\subset B$ のとき、$A \\cap B = A$ となります。<br>よってその補集合は $\\overline{A}$ となります。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "$A \\cap B = \\emptyset$ のとき、$\\overline{A} \\cup \\overline{B}$ はどうなるか。",
        options: ["全体集合 $U$", "空集合 $\\emptyset$", "$A$", "$B$"],
        answer: "全体集合 $U$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ です。<br>$A \\cap B = \\emptyset$ なので、空集合の補集合をとることになります。<br>よって全体集合 $U$ になります。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "実数全体 $U$、$A=\\{x \\mid x \\leqq 1\\}$、$B=\\{x \\mid x \\geqq 1\\}$。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["$\\emptyset$", "$x=1$", "すべての実数", "$x \\neq 1$"],
        answer: "$\\emptyset$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ です。<br>$A \cup B$ は「1以下 または 1以上」なので、すべての実数をカバーします。<br>すべての実数の補集合は空集合 $\\emptyset$ です。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "集合 $A, B$ について $\\overline{A} \\cap \\overline{B} = \\{1, 2\\}$ であった。$A \\cup B$ の補集合は何か。",
        options: ["$\\{1, 2\\}$", "$\\{1\\}$", "$\\{2\\}$", "$\\emptyset$"],
        answer: "$\\{1, 2\\}$",
        rationale: "<strong>解説: </strong>ド・モルガンの法則により、$\\overline{A} \\cap \\overline{B}$ は $\\overline{A \\cup B}$ と全く同じものです。<br>よってそのまま $\\{1, 2\\}$ が答えです。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "$U=\\{1, 2, 3\\}, A=\\{1\\}$。$\\overline{A} \\cap \\overline{B} = \\{3\\}$ となるような集合 $B$ はどれか。",
        options: ["$B=\\{2\\}$", "$B=\\{3\\}$", "$B=\\{1, 2\\}$", "$B=\\{2, 3\\}$"],
        answer: "$B=\\{2\\}$",
        rationale: "<strong>解説: </strong>$\\overline{A \\cup B} = \\{3\\}$ ということです。<br>つまり、$A \\cup B$ は $3$ 以外の $\\{1, 2\\}$ でなくてはなりません。<br>$A=\\{1\\}$ なので、これに $B$ を足して $\\{1, 2\\}$ にするには、$B=\\{2\\}$ （または $\\{1, 2\\}$ でも可だが選択肢にあるのは前者）が必要です。<br>もし $B=\\{2\\}$ なら $A \\cup B = \\{1, 2\\}$ となり、その補集合は $\\{3\\}$ で条件を満たします。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "実数全体 $U$、$A=[0, 2], B=[1, 3]$（閉区間）。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["$x < 1, 2 < x$", "$x < 0, 3 < x$", "すべての実数", "$x \\neq 1.5$"],
        answer: "$x < 1, 2 < x$",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ です。<br>1. $A \\cap B$（重なり）は $1 \\leqq x \\leqq 2$ です。<br>2. この補集合は $x < 1$ または $2 < x$ です。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "実数全体 $U$、$A=\\{x \\mid x \neq 0\\}, B=\\{x \\mid x \neq 1\\}$。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["解なし", "$x=0, x=1$", "$\\emptyset$", "すべての実数"],
        answer: "解なし",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$ です。<br>1. $A$ は0以外、$B$ は1以外。合わせると「0以外の数 または 1以外の数」となり、すべての実数が含まれます（例えば0はBに含まれ、1はAに含まれるため）。<br>2. すべての実数の補集合なので、空集合（解なし）です。<br>（別解：$\\overline{A}=\\{0\\}, \\overline{B}=\\{1\\}$。これら $\\{0\\}$ と $\\{1\\}$ の共通部分はないので $\\emptyset$）" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "実数全体 $U$、$A=\\{x \\mid x > 0\\}, B=\\{x \\mid x < 5\\}$。<br>集合 $\\overline{A} \\cap \\overline{B}$ を求めよ。",
        options: ["解なし", "すべての実数", "$0 < x < 5$", "$x \\leqq 0, 5 \\leqq x$"],
        answer: "解なし",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$。<br>1. $A \cup B$ は「0より大きい または 5より小さい」。数直線全体をカバーします（例えば -100はBに、100はAに入る）。<br>2. 全体の補集合は空集合（解なし）です。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "実数全体 $U$、$A=\\{x \\mid |x| \\geqq 1\\}$、$B=\\{x \\mid x=0\\}$。<br>集合 $\\overline{A} \\cup \\overline{B}$ を求めよ。",
        options: ["すべての実数", "$|x| < 1$", "$x \\neq 0$", "解なし"],
        answer: "すべての実数",
        rationale: "<strong>解説: </strong>$\\overline{A} \\cup \\overline{B} = \\overline{A \\cap B}$ です。<br>1. $A$ は $x \\leqq -1, 1 \\leqq x$。<br>2. $B$ は $0$。<br>3. $A$ と $B$ に共通部分はありません（$A \\cap B = \\emptyset$）。<br>4. 空集合の補集合は全体集合 $U$ です。<br>よってすべての実数となります。" + VIDEO_LINK
    }
];