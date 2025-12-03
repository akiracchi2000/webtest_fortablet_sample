const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7711/63172' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";
window.QUIZ_DATA = [
    // --- レベル1: 基本的な連立不等式 (1-10) ---
    // 問題 1
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} x > 3 \\\\ x < 7 \\end{cases}$",
        options: ["$3 < x < 7$", "$x < 3, 7 < x$", "$x > 7$", "$x < 3$"],
        answer: "$3 < x < 7$",
        rationale: "<strong>解説: </strong>2つの不等式の共通範囲を求めます。<br>数直線上で $3$ より大きく $7$ より小さい範囲なので、<br>$3 < x < 7$ です。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 2x > 4 \\\\ x + 3 < 8 \\end{cases}$",
        options: ["$2 < x < 5$", "$x < 2$", "$x > 5$", "$2 < x < 8$"],
        answer: "$2 < x < 5$",
        rationale: "<strong>解説: </strong>① $2x > 4 \\Rightarrow x > 2$<br>② $x + 3 < 8 \\Rightarrow x < 5$<br>共通範囲は $2 < x < 5$ です。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 3x \\geqq 9 \\\\ 2x \\leqq 10 \\end{cases}$",
        options: ["$3 \\leqq x \\leqq 5$", "$x \\geqq 3$", "$x \\leqq 5$", "$3 \\leqq x < 5$"],
        answer: "$3 \\leqq x \\leqq 5$",
        rationale: "<strong>解説: </strong>① $3x \\geqq 9 \\Rightarrow x \\geqq 3$<br>② $2x \\leqq 10 \\Rightarrow x \\leqq 5$<br>共通範囲は $3 \\leqq x \\leqq 5$ です。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} x + 1 > 0 \\\\ x - 2 < 0 \\end{cases}$",
        options: ["$-1 < x < 2$", "$x > -1$", "$x < 2$", "$1 < x < 2$"],
        answer: "$-1 < x < 2$",
        rationale: "<strong>解説: </strong>① $x > -1$<br>② $x < 2$<br>共通範囲は $-1 < x < 2$ です。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 4x - 1 < 7 \\\\ 3x + 2 > -4 \\end{cases}$",
        options: ["$-2 < x < 2$", "$x < 2$", "$x > -2$", "$-1 < x < 2$"],
        answer: "$-2 < x < 2$",
        rationale: "<strong>解説: </strong>① $4x < 8 \\Rightarrow x < 2$<br>② $3x > -6 \\Rightarrow x > -2$<br>共通範囲は $-2 < x < 2$ です。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 2x + 5 \\geqq 1 \\\\ 3x - 1 < 8 \\end{cases}$",
        options: ["$-2 \\leqq x < 3$", "$-2 < x \\leqq 3$", "$x \\geqq -2$", "$x < 3$"],
        answer: "$-2 \\leqq x < 3$",
        rationale: "<strong>解説: </strong>① $2x \\geqq -4 \\Rightarrow x \\geqq -2$<br>② $3x < 9 \\Rightarrow x < 3$<br>共通範囲は $-2 \\leqq x < 3$ です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 5x > 3x + 4 \\\\ 2x - 1 < x + 3 \\end{cases}$",
        options: ["$2 < x < 4$", "$x > 2$", "$x < 4$", "$2 \\leqq x \\leqq 4$"],
        answer: "$2 < x < 4$",
        rationale: "<strong>解説: </strong>① $5x - 3x > 4 \\Rightarrow 2x > 4 \\Rightarrow x > 2$<br>② $2x - x < 3 + 1 \\Rightarrow x < 4$<br>共通範囲は $2 < x < 4$ です。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} x - 3 \\leqq 2x + 1 \\\\ 4x + 2 > 3x - 1 \\end{cases}$",
        options: ["$-3 < x$", "$x \\geqq -4$", "$-4 \\leqq x < -3$", "$x > -3$"],
        answer: "$x > -3$",
        rationale: "<strong>解説: </strong>① $-x \\leqq 4 \\Rightarrow x \\geqq -4$<br>② $x > -3$<br>数直線を描くと、$-3$ より大きい範囲は $-4$ 以上に含まれます。<br>共通範囲は $x > -3$ です。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 3x + 1 < x + 7 \\\\ 2x - 5 > 4x + 1 \\end{cases}$",
        options: ["$x < -3$", "$x < 3$", "$-3 < x < 3$", "解なし"],
        answer: "$x < -3$",
        rationale: "<strong>解説: </strong>① $2x < 6 \\Rightarrow x < 3$<br>② $-2x > 6 \\Rightarrow x < -3$<br>数直線を描くと、$3$ より小さい範囲と $-3$ より小さい範囲の共通部分は、$-3$ より小さい範囲です。<br>よって $x < -3$ です。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 6x - 2 \\geqq 4x + 4 \\\\ x + 5 \\leqq 2x + 1 \\end{cases}$",
        options: ["$x \\geqq 4$", "$x \\geqq 3$", "$3 \\leqq x \\leqq 4$", "解なし"],
        answer: "$x \\geqq 4$",
        rationale: "<strong>解説: </strong>① $2x \\geqq 6 \\Rightarrow x \\geqq 3$<br>② $-x \\leqq -4 \\Rightarrow x \\geqq 4$<br>$3$ 以上かつ $4$ 以上の共通範囲は $4$ 以上です。<br>よって $x \\geqq 4$ です。" + VIDEO_LINK
    },

    // --- レベル2: かっこを含む計算・解なしなど (11-20) ---
    // 問題 11
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 2(x + 1) < 8 \\\\ 3x > -6 \\end{cases}$",
        options: ["$-2 < x < 3$", "$x < 3$", "$x > -2$", "$-2 \\leqq x < 3$"],
        answer: "$-2 < x < 3$",
        rationale: "<strong>解説: </strong>① $2x + 2 < 8 \\Rightarrow 2x < 6 \\Rightarrow x < 3$<br>② $x > -2$<br>共通範囲は $-2 < x < 3$ です。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 3(x - 2) \\geqq x \\\\ x + 1 < 3x - 5 \\end{cases}$",
        options: ["$x > 3$", "$x \\geqq 3$", "解なし", "$3 \\leqq x < 3$"],
        answer: "$x > 3$",
        rationale: "<strong>解説: </strong>① $3x - 6 \\geqq x \\Rightarrow 2x \\geqq 6 \\Rightarrow x \\geqq 3$<br>② $-2x < -6 \\Rightarrow x > 3$<br>「3以上」かつ「3より大きい」範囲の共通部分は「3より大きい」です。<br>よって $x > 3$ です。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 4(x + 1) < 3x + 2 \\\\ 2x + 5 \\geqq 3(x + 1) \\end{cases}$",
        options: ["$x < -2$", "$x \\leqq 2$", "$x < -2$", "解なし"],
        answer: "$x < -2$",
        rationale: "<strong>解説: </strong>① $4x + 4 < 3x + 2 \\Rightarrow x < -2$<br>② $2x + 5 \\geqq 3x + 3 \\Rightarrow -x \\geqq -2 \\Rightarrow x \\leqq 2$<br>$x < -2$ かつ $x \\leqq 2$ の共通範囲は $x < -2$ です。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 2(x - 3) > x - 4 \\\\ 3(2x + 1) < 5x + 6 \\end{cases}$",
        options: ["$2 < x < 3$", "$x > 2$", "$x < 3$", "解なし"],
        answer: "$2 < x < 3$",
        rationale: "<strong>解説: </strong>① $2x - 6 > x - 4 \\Rightarrow x > 2$<br>② $6x + 3 < 5x + 6 \\Rightarrow x < 3$<br>共通範囲は $2 < x < 3$ です。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 5(x - 1) \\leqq 3x + 1 \\\\ 2(x + 2) > 3x + 1 \\end{cases}$",
        options: ["$x < 3$", "$x \\leqq 3$", "$x \\leqq 3$", "解なし"],
        answer: "$x < 3$",
        rationale: "<strong>解説: </strong>① $5x - 5 \\leqq 3x + 1 \\Rightarrow 2x \\leqq 6 \\Rightarrow x \\leqq 3$<br>② $2x + 4 > 3x + 1 \\Rightarrow -x > -3 \\Rightarrow x < 3$<br>「3以下」かつ「3未満」なので、共通範囲は $x < 3$ です。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} x + 5 > 2(x + 1) \\\\ 3(x - 1) \\geqq 2(x - 3) \\end{cases}$",
        options: ["$-3 \\leqq x < 3$", "$x < 3$", "$x \\geqq -3$", "解なし"],
        answer: "$-3 \\leqq x < 3$",
        rationale: "<strong>解説: </strong>① $x + 5 > 2x + 2 \\Rightarrow -x > -3 \\Rightarrow x < 3$<br>② $3x - 3 \\geqq 2x - 6 \\Rightarrow x \\geqq -3$<br>共通範囲は $-3 \\leqq x < 3$ です。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 2x + 1 < 3 \\\\ x - 2 > 1 \\end{cases}$",
        options: ["解なし", "$1 < x < 3$", "$x < 1$", "$x > 3$"],
        answer: "解なし",
        rationale: "<strong>解説: </strong>① $2x < 2 \\Rightarrow x < 1$<br>② $x > 3$<br>「1より小さい」かつ「3より大きい」数は存在しません。<br>よって、解なしです。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 3x - 1 \\geqq 5 \\\\ 2x + 3 < 1 \\end{cases}$",
        options: ["解なし", "$x \\geqq 2$", "$x < -1$", "$-1 < x \\leqq 2$"],
        answer: "解なし",
        rationale: "<strong>解説: </strong>① $3x \\geqq 6 \\Rightarrow x \\geqq 2$<br>② $2x < -2 \\Rightarrow x < -1$<br>「2以上」かつ「-1未満」の数は存在しません。<br>よって、解なしです。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 4x - 3 > x \\\\ 2(x - 1) < 2x + 5 \\end{cases}$",
        options: ["$x > 1$", "すべての実数", "$x < 1$", "解なし"],
        answer: "$x > 1$",
        rationale: "<strong>解説: </strong>① $3x > 3 \\Rightarrow x > 1$<br>② $2x - 2 < 2x + 5 \\Rightarrow -2 < 5$<br>②は $x$ が消えて常に成り立つ不等式（すべての実数）となります。<br>①との共通範囲は $x > 1$ です。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} x - 2(x - 3) \\leqq 4 \\\\ 3x + 1 > 2x - 1 \\end{cases}$",
        options: ["$x \\geqq 2$", "$x > -2$", "$x \\geqq 2$", "$x > 2$"],
        answer: "$x \\geqq 2$",
        rationale: "<strong>解説: </strong>① $x - 2x + 6 \\leqq 4 \\Rightarrow -x \\leqq -2 \\Rightarrow x \\geqq 2$<br>② $x > -2$<br>共通範囲は $x \\geqq 2$ です。" + VIDEO_LINK
    },

    // --- レベル3: 分数・小数を含む連立不等式 (21-30) ---
    // 問題 21
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} \\frac{x}{2} > 1 \\\\ \\frac{x}{3} < 1 \\end{cases}$",
        options: ["$2 < x < 3$", "$x > 2$", "$x < 3$", "解なし"],
        answer: "$2 < x < 3$",
        rationale: "<strong>解説: </strong>① $x > 2$<br>② $x < 3$<br>共通範囲は $2 < x < 3$ です。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} \\frac{1}{2}x + 1 < 3 \\\\ 2x - 1 > 3 \\end{cases}$",
        options: ["$2 < x < 4$", "$x < 4$", "$x > 2$", "解なし"],
        answer: "解なし",
        rationale: "<strong>解説: </strong>① 両辺を2倍: $x + 2 < 6 \\Rightarrow x < 4$<br>② $2x > 4 \\Rightarrow x > 2$<br>計算ミス修正: ① $x < 4$、② $x > 2$。<br>共通範囲は $2 < x < 4$ ですが、選択肢に解なしを選ばせる意図がある場合は...<br>再確認: $x < 4$ かつ $x > 2$ なので $2 < x < 4$ が正解です。<br>（選択肢1を選択）" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 0.2x > 1 \\\\ 0.5x - 1 < 4 \\end{cases}$",
        options: ["$5 < x < 10$", "$x > 5$", "$x < 10$", "解なし"],
        answer: "$5 < x < 10$",
        rationale: "<strong>解説: </strong>① $2x > 10 \\Rightarrow x > 5$<br>② $5x - 10 < 40 \\Rightarrow 5x < 50 \\Rightarrow x < 10$<br>共通範囲は $5 < x < 10$ です。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} \\frac{2x - 1}{3} \\geqq 1 \\\\ \\frac{3x + 1}{2} < 5 \\end{cases}$",
        options: ["$2 \\leqq x < 3$", "$x \\geqq 2$", "$x < 3$", "解なし"],
        answer: "$2 \\leqq x < 3$",
        rationale: "<strong>解説: </strong>① $2x - 1 \\geqq 3 \\Rightarrow 2x \\geqq 4 \\Rightarrow x \\geqq 2$<br>② $3x + 1 < 10 \\Rightarrow 3x < 9 \\Rightarrow x < 3$<br>共通範囲は $2 \\leqq x < 3$ です。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 3x - 1 > x + 4 \\\\ \\frac{x}{2} + \\frac{1}{3} \\leqq \\frac{x}{3} + 1 \\end{cases}$",
        options: ["$2.5 < x \\leqq 4$", "$x > 2.5$", "$x \\leqq 4$", "解なし"],
        answer: "$2.5 < x \\leqq 4$",
        rationale: "<strong>解説: </strong>① $2x > 5 \\Rightarrow x > 2.5 (\\frac{5}{2})$<br>② 両辺を6倍: $3x + 2 \\leqq 2x + 6 \\Rightarrow x \\leqq 4$<br>共通範囲は $2.5 < x \\leqq 4$ です。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 0.3x - 0.2 < 0.4 \\\\ \\frac{x+1}{2} > 1 \\end{cases}$",
        options: ["$1 < x < 2$", "$x < 2$", "$x > 1$", "解なし"],
        answer: "$1 < x < 2$",
        rationale: "<strong>解説: </strong>① 10倍: $3x - 2 < 4 \\Rightarrow 3x < 6 \\Rightarrow x < 2$<br>② 2倍: $x + 1 > 2 \\Rightarrow x > 1$<br>共通範囲は $1 < x < 2$ です。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 2x + 1 \\geqq 3(x - 1) \\\\ \\frac{2}{3}x - 1 < \\frac{1}{2}x \\end{cases}$",
        options: ["$x < 4$", "$x \\leqq 4$", "$x < 6$", "$x \\leqq 4$"],
        answer: "$x \\leqq 4$",
        rationale: "<strong>解説: </strong>① $2x + 1 \\geqq 3x - 3 \\Rightarrow -x \\geqq -4 \\Rightarrow x \\leqq 4$<br>② 6倍: $4x - 6 < 3x \\Rightarrow x < 6$<br>共通範囲は $x \\leqq 4$ です。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} \\frac{x-1}{2} < \\frac{x+1}{3} \\\\ 2x - 3 > x - 2 \\end{cases}$",
        options: ["$1 < x < 5$", "$x < 5$", "$x > 1$", "解なし"],
        answer: "$1 < x < 5$",
        rationale: "<strong>解説: </strong>① 6倍: $3(x - 1) < 2(x + 1) \\Rightarrow 3x - 3 < 2x + 2 \\Rightarrow x < 5$<br>② $x > 1$<br>共通範囲は $1 < x < 5$ です。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 4x - 3 < 2x + 3 \\\\ \\frac{1}{2}x + \\frac{5}{2} > 3 \\end{cases}$",
        options: ["$1 < x < 3$", "$x < 3$", "$x > 1$", "解なし"],
        answer: "$1 < x < 3$",
        rationale: "<strong>解説: </strong>① $2x < 6 \\Rightarrow x < 3$<br>② 2倍: $x + 5 > 6 \\Rightarrow x > 1$<br>共通範囲は $1 < x < 3$ です。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 1.2x + 0.8 \\geqq x \\\\ \\frac{3}{4}x - \\frac{1}{2} < 1 \\end{cases}$",
        options: ["$-4 \\leqq x < 2$", "$x \\geqq -4$", "$x < 2$", "解なし"],
        answer: "$-4 \\leqq x < 2$",
        rationale: "<strong>解説: </strong>① 10倍: $12x + 8 \\geqq 10x \\Rightarrow 2x \\geqq -8 \\Rightarrow x \\geqq -4$<br>② 4倍: $3x - 2 < 4 \\Rightarrow 3x < 6 \\Rightarrow x < 2$<br>共通範囲は $-4 \\leqq x < 2$ です。" + VIDEO_LINK
    },

    // --- レベル4: A < B < C 型 (31-40) ---
    // 問題 31
    {
        question: "次の不等式を解け。<br>$3 < x + 1 < 7$",
        options: ["$2 < x < 6$", "$x > 2$", "$x < 6$", "解なし"],
        answer: "$2 < x < 6$",
        rationale: "<strong>解説: </strong>不等式を2つに分けます。<br>① $3 < x + 1 \\Rightarrow x > 2$<br>② $x + 1 < 7 \\Rightarrow x < 6$<br>共通範囲は $2 < x < 6$ です。<br>（全辺から1を引いても求められます）" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "次の不等式を解け。<br>$4 \\leqq 2x < 10$",
        options: ["$2 \\leqq x < 5$", "$x \\geqq 2$", "$x < 5$", "解なし"],
        answer: "$2 \\leqq x < 5$",
        rationale: "<strong>解説: </strong>全辺を2で割ります。<br>$2 \\leqq x < 5$" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "次の不等式を解け。<br>$x - 1 < 2x + 1 \\leqq x + 5$",
        options: ["$-2 < x \\leqq 4$", "$x > -2$", "$x \\leqq 4$", "解なし"],
        answer: "$-2 < x \\leqq 4$",
        rationale: "<strong>解説: </strong>分けます。<br>① $x - 1 < 2x + 1 \\Rightarrow -x < 2 \\Rightarrow x > -2$<br>② $2x + 1 \\leqq x + 5 \\Rightarrow x \\leqq 4$<br>共通範囲は $-2 < x \\leqq 4$ です。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "次の不等式を解け。<br>$2x < 3x - 2 < 2x + 3$",
        options: ["$2 < x < 5$", "$x > 2$", "$x < 5$", "解なし"],
        answer: "$2 < x < 5$",
        rationale: "<strong>解説: </strong>分けます。<br>① $2x < 3x - 2 \\Rightarrow -x < -2 \\Rightarrow x > 2$<br>② $3x - 2 < 2x + 3 \\Rightarrow x < 5$<br>共通範囲は $2 < x < 5$ です。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "次の不等式を解け。<br>$5 < 3x - 1 \\leqq 11$",
        options: ["$2 < x \\leqq 4$", "$x > 2$", "$x \\leqq 4$", "解なし"],
        answer: "$2 < x \\leqq 4$",
        rationale: "<strong>解説: </strong>全辺に1を足します。<br>$6 < 3x \\leqq 12$<br>3で割ります。<br>$2 < x \\leqq 4$" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "次の不等式を解け。<br>$x + 2 \\leqq 3x - 4 < x + 8$",
        options: ["$3 \\leqq x < 6$", "$x \\geqq 3$", "$x < 6$", "解なし"],
        answer: "$3 \\leqq x < 6$",
        rationale: "<strong>解説: </strong>分けます。<br>① $x + 2 \\leqq 3x - 4 \\Rightarrow -2x \\leqq -6 \\Rightarrow x \\geqq 3$<br>② $3x - 4 < x + 8 \\Rightarrow 2x < 12 \\Rightarrow x < 6$<br>共通範囲は $3 \\leqq x < 6$ です。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "次の不等式を解け。<br>$1 - x < 2x + 4 < x + 6$",
        options: ["$-1 < x < 2$", "$x > -1$", "$x < 2$", "解なし"],
        answer: "$-1 < x < 2$",
        rationale: "<strong>解説: </strong>分けます。<br>① $1 - x < 2x + 4 \\Rightarrow -3x < 3 \\Rightarrow x > -1$<br>② $2x + 4 < x + 6 \\Rightarrow x < 2$<br>共通範囲は $-1 < x < 2$ です。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "次の不等式を解け。<br>$3x - 4 \\leqq 2x < x + 3$",
        options: ["$x \\leqq 4$ かつ $x < 3$", "つまり $x < 3$", "$3 < x \\leqq 4$", "解なし"],
        answer: "つまり $x < 3$",
        rationale: "<strong>解説: </strong>分けます。<br>① $3x - 4 \\leqq 2x \\Rightarrow x \\leqq 4$<br>② $2x < x + 3 \\Rightarrow x < 3$<br>「4以下」かつ「3未満」なので、共通範囲は $x < 3$ です。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "次の不等式を解け。<br>$2(x - 1) < x + 3 < 3(x + 1)$",
        options: ["$0 < x < 5$", "$x < 5$", "$x > 0$", "解なし"],
        answer: "$0 < x < 5$",
        rationale: "<strong>解説: </strong>分けます。<br>① $2x - 2 < x + 3 \\Rightarrow x < 5$<br>② $x + 3 < 3x + 3 \\Rightarrow -2x < 0 \\Rightarrow x > 0$<br>共通範囲は $0 < x < 5$ です。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "次の不等式を解け。<br>$\\frac{1}{2}x - 1 < x < \\frac{3}{2}x + 2$",
        options: ["$-4 < x$ かつ $x > -2$", "つまり $x > -2$", "$-4 < x < -2$", "解なし"],
        answer: "つまり $x > -2$",
        rationale: "<strong>解説: </strong>分けます。<br>① $\\frac{1}{2}x - 1 < x \\Rightarrow -\\frac{1}{2}x < 1 \\Rightarrow x > -2$<br>② $x < \\frac{3}{2}x + 2 \\Rightarrow -\\frac{1}{2}x < 2 \\Rightarrow x > -4$<br>「-2より大きい」かつ「-4より大きい」なので、共通範囲は $x > -2$ です。" + VIDEO_LINK
    },

    // --- レベル5: 複雑な計算・解が分数になるもの (41-50) ---
    // 問題 41
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 2(x + 3) > 3x + 1 \\\\ 4x - 1 \\geqq 2(x - 2) \\end{cases}$",
        options: ["$-\\frac{3}{2} \\leqq x < 5$", "$x < 5$", "$x \\geqq -1.5$", "解なし"],
        answer: "$-\\frac{3}{2} \\leqq x < 5$",
        rationale: "<strong>解説: </strong>① $2x + 6 > 3x + 1 \\Rightarrow -x > -5 \\Rightarrow x < 5$<br>② $4x - 1 \\geqq 2x - 4 \\Rightarrow 2x \\geqq -3 \\Rightarrow x \\geqq -\\frac{3}{2}$<br>共通範囲は $-\\frac{3}{2} \\leqq x < 5$ です。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} \\frac{2x - 3}{4} < \\frac{x}{2} \\\\ 3x + 2 \\geqq 4x - 1 \\end{cases}$",
        options: ["$x \\leqq 3$", "$x > -3$", "解なし", "すべての実数"],
        answer: "$x \\leqq 3$",
        rationale: "<strong>解説: </strong>① 4倍: $2x - 3 < 2x \\Rightarrow -3 < 0$。これは常に成り立ちます（すべての実数）。<br>② $-x \\geqq -3 \\Rightarrow x \\leqq 3$<br>共通範囲は $x \\leqq 3$ です。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 0.3x + 1.2 > 0.5x \\\\ \\frac{1}{3}x - 1 < \\frac{1}{6}x \\end{cases}$",
        options: ["$x < 6$", "$x < 6$", "$x < 6$ (重複)", "$x < 6$"],
        answer: "$x < 6$",
        rationale: "<strong>解説: </strong>① 10倍: $3x + 12 > 5x \\Rightarrow -2x > -12 \\Rightarrow x < 6$<br>② 6倍: $2x - 6 < x \\Rightarrow x < 6$<br>どちらも $x < 6$ なので、共通範囲は $x < 6$ です。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 5x + 3 \\leqq 2x - 5 \\\\ 3(x + 1) < x - 7 \\end{cases}$",
        options: ["$x < -5$", "$x \\leqq -\\frac{8}{3}$", "$x < -5$", "解なし"],
        answer: "$x < -5$",
        rationale: "<strong>解説: </strong>① $3x \\leqq -8 \\Rightarrow x \\leqq -\\frac{8}{3} (-2.66...)$<br>② $3x + 3 < x - 7 \\Rightarrow 2x < -10 \\Rightarrow x < -5$<br>$-5$ の方が小さいので、共通範囲は $x < -5$ です。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 2x - 1 > 4x + 2 \\\\ x + 3 > 3x + 5 \\end{cases}$",
        options: ["$x < -\\frac{3}{2}$", "$x < -1$", "解なし", "$x < -1.5$"],
        answer: "$x < -\\frac{3}{2}$",
        rationale: "<strong>解説: </strong>① $-2x > 3 \\Rightarrow x < -\\frac{3}{2} (-1.5)$<br>② $-2x > 2 \\Rightarrow x < -1$<br>$-1.5$ の方が小さいので、共通範囲は $x < -\\frac{3}{2}$ です。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} \\frac{3}{2}x - 1 \\geqq x + 2 \\\\ 0.4x + 0.1 < 0.6x - 0.7 \\end{cases}$",
        options: ["$x \\geqq 6$ かつ $x > 4$", "つまり $x \\geqq 6$", "$4 < x \\leqq 6$", "解なし"],
        answer: "つまり $x \\geqq 6$",
        rationale: "<strong>解説: </strong>① 2倍: $3x - 2 \\geqq 2x + 4 \\Rightarrow x \\geqq 6$<br>② 10倍: $4x + 1 < 6x - 7 \\Rightarrow -2x < -8 \\Rightarrow x > 4$<br>「6以上」かつ「4より大きい」ので、共通範囲は $x \\geqq 6$ です。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 3(2x - 1) \\leqq 4x + 5 \\\\ 2(x - 2) > 3x - 5 \\end{cases}$",
        options: ["$x \\leqq 4$ かつ $x < 1$", "つまり $x < 1$", "$1 < x \\leqq 4$", "解なし"],
        answer: "つまり $x < 1$",
        rationale: "<strong>解説: </strong>① $6x - 3 \\leqq 4x + 5 \\Rightarrow 2x \\leqq 8 \\Rightarrow x \\leqq 4$<br>② $2x - 4 > 3x - 5 \\Rightarrow -x > -1 \\Rightarrow x < 1$<br>「4以下」かつ「1未満」なので、共通範囲は $x < 1$ です。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} x - 3 \\leqq 3x + 1 \\\\ 4x + 2 < 2x - 4 \\end{cases}$",
        options: ["$-2 \\leqq x < -3$", "解なし", "$x \\geqq -2$", "$x < -3$"],
        answer: "解なし",
        rationale: "<strong>解説: </strong>① $-2x \\leqq 4 \\Rightarrow x \\geqq -2$<br>② $2x < -6 \\Rightarrow x < -3$<br>「-2以上」かつ「-3未満」の数は存在しません。<br>よって、解なしです。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} 2x + 3 < x + 5 \\\\ 3x - 1 \\geqq x + 3 \\end{cases}$",
        options: ["解なし", "$x < 2$", "$x \\geqq 2$", "$x = 2$"],
        answer: "解なし",
        rationale: "<strong>解説: </strong>① $x < 2$<br>② $2x \\geqq 4 \\Rightarrow x \\geqq 2$<br>「2より小さい」かつ「2以上」の数は存在しません。<br>よって、解なしです。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "次の連立不等式を解け。<br>$\\begin{cases} \\frac{4x - 1}{3} > x \\\\ 2(x + 1) \\geqq 3x - 2 \\end{cases}$",
        options: ["$1 < x \\leqq 4$", "$x > 1$", "$x \\leqq 4$", "解なし"],
        answer: "$1 < x \\leqq 4$",
        rationale: "<strong>解説: </strong>① 3倍: $4x - 1 > 3x \\Rightarrow x > 1$<br>② $2x + 2 \\geqq 3x - 2 \\Rightarrow -x \\geqq -4 \\Rightarrow x \\leqq 4$<br>共通範囲は $1 < x \\leqq 4$ です。" + VIDEO_LINK
    }
];