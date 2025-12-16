const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7717/63233' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 画像の問題 (1-2) ---
    // 問題 1
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 2x-y=1 \\dots ① \\\\ x^2+2y^2=2 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (0, -1), (\\frac{8}{9}, \\frac{7}{9})$",
        rationale: "<strong>解説: </strong><br>1次式①を $y$ について解きます。<br>$y = 2x - 1 \\dots ③$<br>これを②に代入します。<br>$x^2 + 2(2x-1)^2 = 2$<br>$x^2 + 2(4x^2 - 4x + 1) = 2$<br>$x^2 + 8x^2 - 8x + 2 = 2$<br>$9x^2 - 8x = 0$<br>$x(9x - 8) = 0$<br>よって、$x = 0, \\frac{8}{9}$。<br><br>これらを③に代入して $y$ を求めます。<br>$x=0$ のとき、$y = 2(0) - 1 = -1$<br>$x=\\frac{8}{9}$ のとき、$y = 2(\\frac{8}{9}) - 1 = \\frac{16}{9} - \\frac{9}{9} = \\frac{7}{9}$<br>よって答えは $(x, y) = (0, -1), (\\frac{8}{9}, \\frac{7}{9})$ です。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=3 \\dots ① \\\\ xy=-4 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (4, -1), (-1, 4)$",
        rationale: "<strong>解説: </strong><br>【解法1：解と係数の関係の利用】<br>和が3、積が-4となる2つの数は、2次方程式 $t^2 - 3t - 4 = 0$ の解です。<br>$(t-4)(t+1) = 0$<br>$t = 4, -1$<br>よって、$(x, y) = (4, -1), (-1, 4)$ です。<br><br>【解法2：代入法】<br>①より $y = 3-x$。これを②に代入。<br>$x(3-x) = -4$<br>$3x - x^2 = -4$<br>$x^2 - 3x - 4 = 0$<br>$(x-4)(x+1) = 0 \\Rightarrow x = 4, -1$<br>それぞれ①に代入して $y$ を求めると同様の結果になります。" + VIDEO_LINK
    },

    // --- 基本：代入法 (3-20) ---
    // 問題 3
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} y=x^2 \\dots ① \\\\ y=x+2 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (2, 4), (-1, 1)$",
        rationale: "<strong>解説: </strong><br>代入法で解きます。①を②に代入（または $y$ を消去）。<br>$x^2 = x + 2$<br>$x^2 - x - 2 = 0$<br>$(x-2)(x+1) = 0$<br>$x = 2, -1$<br>①に代入して $y$ を求めます。<br>$x=2 \\Rightarrow y=4$<br>$x=-1 \\Rightarrow y=1$" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x-y=1 \\dots ① \\\\ x^2+y^2=13 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (3, 2), (-2, -3)$",
        rationale: "<strong>解説: </strong><br>①より $y = x-1$。<br>これを②に代入します。<br>$x^2 + (x-1)^2 = 13$<br>$x^2 + x^2 - 2x + 1 - 13 = 0$<br>$2x^2 - 2x - 12 = 0$<br>$x^2 - x - 6 = 0$<br>$(x-3)(x+2) = 0$<br>$x = 3, -2$<br>$y = x-1$ より、<br>$x=3 \\Rightarrow y=2$<br>$x=-2 \\Rightarrow y=-3$" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} y=2x \\dots ① \\\\ x^2+y^2=5 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (1, 2), (-1, -2)$",
        rationale: "<strong>解説: </strong><br>①を②に代入します。<br>$x^2 + (2x)^2 = 5$<br>$x^2 + 4x^2 = 5$<br>$5x^2 = 5$<br>$x^2 = 1 \\Rightarrow x = \\pm 1$<br>①より、<br>$x=1 \\Rightarrow y=2$<br>$x=-1 \\Rightarrow y=-2$" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=5 \\dots ① \\\\ x^2+y^2=17 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (1, 4), (4, 1)$",
        rationale: "<strong>解説: </strong><br>①より $y = 5-x$。<br>これえを②に代入。<br>$x^2 + (5-x)^2 = 17$<br>$x^2 + 25 - 10x + x^2 - 17 = 0$<br>$2x^2 - 10x + 8 = 0$<br>$x^2 - 5x + 4 = 0$<br>$(x-1)(x-4) = 0$<br>$x = 1, 4$<br>$y = 5-x$ より、<br>$x=1 \\Rightarrow y=4$<br>$x=4 \\Rightarrow y=1$" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} y=x-2 \\dots ① \\\\ y=x^2-4x+2 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (1, -1), (4, 2)$",
        rationale: "<strong>解説: </strong><br>$y$ を消去します。<br>$x-2 = x^2-4x+2$<br>$x^2 - 5x + 4 = 0$<br>$(x-1)(x-4) = 0$<br>$x = 1, 4$<br>①に代入して、<br>$x=1 \\Rightarrow y=-1$<br>$x=4 \\Rightarrow y=2$" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+2y=0 \\dots ① \\\\ x^2+y^2=20 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (4, -2), (-4, 2)$",
        rationale: "<strong>解説: </strong><br>①より $x = -2y$。<br>これを②に代入します（$y$について解く方が楽）。<br>$(-2y)^2 + y^2 = 20$<br>$4y^2 + y^2 = 20$<br>$5y^2 = 20$<br>$y^2 = 4 \\Rightarrow y = \\pm 2$<br>$x = -2y$ より、<br>$y=2 \\Rightarrow x=-4$<br>$y=-2 \\Rightarrow x=4$" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x-y=2 \\dots ① \\\\ x^2-2y-7=0 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (3, 1), (-1, -3)$",
        rationale: "<strong>解説: </strong><br>①より $x = y+2$。<br>②に代入。<br>$(y+2)^2 - 2y - 7 = 0$<br>$y^2 + 4y + 4 - 2y - 7 = 0$<br>$y^2 + 2y - 3 = 0$<br>$(y+3)(y-1) = 0 \\Rightarrow y = -3, 1$<br>$x = y+2$ より、<br>$y=1 \\Rightarrow x=3$<br>$y=-3 \\Rightarrow x=-1$" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=1 \\dots ① \\\\ x^2+y^2=5 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (2, -1), (-1, 2)$",
        rationale: "<strong>解説: </strong><br>①より $y = 1-x$。<br>②に代入。<br>$x^2 + (1-x)^2 = 5$<br>$x^2 + 1 - 2x + x^2 - 5 = 0$<br>$2x^2 - 2x - 4 = 0$<br>$x^2 - x - 2 = 0$<br>$(x-2)(x+1) = 0$<br>$x = 2, -1$<br>①より $y$ を求めて完了です。" + VIDEO_LINK
    },
    // 問題 11
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} y=2x+2 \\dots ① \\\\ x^2+y=5 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (1, 4), (-3, -4)$",
        rationale: "<strong>解説: </strong><br>①を②に代入します。<br>$x^2 + (2x+2) = 5$<br>$x^2 + 2x - 3 = 0$<br>$(x+3)(x-1) = 0 \\Rightarrow x = -3, 1$<br>①より、<br>$x=1 \\Rightarrow y=4$<br>$x=-3 \\Rightarrow y=-4$" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 2x+y=4 \\dots ① \\\\ 2x^2+y=8 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (2, 0), (-1, 6)$",
        rationale: "<strong>解説: </strong><br>①より $y = 4-2x$。<br>②に代入。<br>$2x^2 + (4-2x) = 8$<br>$2x^2 - 2x - 4 = 0$<br>$x^2 - x - 2 = 0$<br>$(x-2)(x+1) = 0 \\Rightarrow x = 2, -1$<br>$x=2 \to y=0$<br>$x=-1 \to y=6$" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x-y=3 \\dots ① \\\\ x^2+y^2=29 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (5, 2), (-2, -5)$",
        rationale: "<strong>解説: </strong><br>①より $x = y+3$。<br>②に代入。<br>$(y+3)^2 + y^2 = 29$<br>$y^2 + 6y + 9 + y^2 = 29$<br>$2y^2 + 6y - 20 = 0$<br>$y^2 + 3y - 10 = 0$<br>$(y+5)(y-2) = 0 \\Rightarrow y = -5, 2$<br>$y=-5 \to x=-2$<br>$y=2 \to x=5$" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} y=x+1 \\dots ① \\\\ x^2+y^2=25 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (3, 4), (-4, -3)$",
        rationale: "<strong>解説: </strong><br>①を②に代入。<br>$x^2 + (x+1)^2 = 25$<br>$x^2 + x^2 + 2x + 1 - 25 = 0$<br>$2x^2 + 2x - 24 = 0$<br>$x^2 + x - 12 = 0$<br>$(x+4)(x-3) = 0 \\Rightarrow x = -4, 3$<br>$x=-4 \to y=-3$<br>$x=3 \to y=4$" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} y=3x-1 \\dots ① \\\\ y=2x^2-x+1 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (1, 2)$",
        rationale: "<strong>解説: </strong><br>$y$ を消去。<br>$3x-1 = 2x^2-x+1$<br>$2x^2 - 4x + 2 = 0$<br>$2(x^2 - 2x + 1) = 0$<br>$2(x-1)^2 = 0 \Rightarrow x=1$（重解）<br>①に代入して $y = 3(1)-1 = 2$。<br>よって $(1, 2)$ です。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=0 \\dots ① \\\\ x^2-3y+2=0 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (-1, 1), (-2, 2)$",
        rationale: "<strong>解説: </strong><br>①より $y = -x$。<br>②に代入。<br>$x^2 - 3(-x) + 2 = 0$<br>$x^2 + 3x + 2 = 0$<br>$(x+1)(x+2) = 0 \\Rightarrow x = -1, -2$<br>$y = -x$ より、<br>$x=-1 \to y=1$<br>$x=-2 \to y=2$" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 2x+y=1 \\dots ① \\\\ x^2+y^2=13 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (2, -3), (-\\frac{6}{5}, \\frac{17}{5})$",
        rationale: "<strong>解説: </strong><br>①より $y = 1-2x$。<br>②に代入。<br>$x^2 + (1-2x)^2 = 13$<br>$x^2 + 1 - 4x + 4x^2 - 13 = 0$<br>$5x^2 - 4x - 12 = 0$<br>たすき掛け：$(5x+6)(x-2) = 0$<br>$x = 2, -\\frac{6}{5}$<br>$x=2 \to y = 1-4 = -3$<br>$x=-\\frac{6}{5} \to y = 1 - 2(-\\frac{6}{5}) = 1 + \\frac{12}{5} = \\frac{17}{5}$<br>よって、$(2, -3), (-\\frac{6}{5}, \\frac{17}{5})$" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x=2y \\dots ① \\\\ x^2+y^2=20 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (4, 2), (-4, -2)$",
        rationale: "<strong>解説: </strong><br>①を②に代入します。<br>$(2y)^2 + y^2 = 20$<br>$4y^2 + y^2 = 20$<br>$5y^2 = 20 \Rightarrow y^2 = 4$<br>$y = \pm 2$<br>$x = 2y$ より、<br>$y=2 \Rightarrow x=4$<br>$y=-2 \Rightarrow x=-4$" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=6 \\dots ① \\\\ xy=8 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (2, 4), (4, 2)$",
        rationale: "<strong>解説: </strong><br>和が6、積が8なので、$t^2 - 6t + 8 = 0$ の解です。<br>$(t-2)(t-4) = 0$<br>$t = 2, 4$<br>よって $(2, 4), (4, 2)$" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=2 \\dots ① \\\\ x^2+y^2=10 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (3, -1), (-1, 3)$",
        rationale: "<strong>解説: </strong><br>代入法：$y = 2-x$ を②に代入。<br>$x^2 + (2-x)^2 = 10$<br>$2x^2 - 4x + 4 - 10 = 0$<br>$2x^2 - 4x - 6 = 0$<br>$x^2 - 2x - 3 = 0$<br>$(x-3)(x+1) = 0$<br>$x = 3, -1$<br>それぞれ①に代入して解を求めます。" + VIDEO_LINK
    },

    // --- 対称式・和と積 (21-35) ---
    // 問題 21
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=4 \\dots ① \\\\ xy=3 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (1, 3), (3, 1)$",
        rationale: "<strong>解説: </strong><br>$t^2 - 4t + 3 = 0$ を解くと $(t-1)(t-3)=0$ より $t=1, 3$。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=-3 \\dots ① \\\\ xy=2 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (-1, -2), (-2, -1)$",
        rationale: "<strong>解説: </strong><br>$t^2 - (-3)t + 2 = 0 \Rightarrow t^2 + 3t + 2 = 0$。<br>$(t+1)(t+2)=0$ より $t=-1, -2$。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=5 \\dots ① \\\\ xy=-6 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (6, -1), (-1, 6)$",
        rationale: "<strong>解説: </strong><br>$t^2 - 5t - 6 = 0$。<br>$(t-6)(t+1)=0$ より $t=6, -1$。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=1 \\dots ① \\\\ xy=-12 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (4, -3), (-3, 4)$",
        rationale: "<strong>解説: </strong><br>$t^2 - t - 12 = 0$。<br>$(t-4)(t+3)=0$ より $t=4, -3$。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=7 \\dots ① \\\\ xy=12 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (3, 4), (4, 3)$",
        rationale: "<strong>解説: </strong><br>$t^2 - 7t + 12 = 0$。<br>$(t-3)(t-4)=0$ より $t=3, 4$。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=-5 \\dots ① \\\\ xy=-14 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (2, -7), (-7, 2)$",
        rationale: "<strong>解説: </strong><br>$t^2 + 5t - 14 = 0$。<br>$(t+7)(t-2)=0$ より $t=-7, 2$。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x^2+y^2=13 \\dots ① \\\\ xy=6 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (2, 3), (3, 2), (-2, -3), (-3, -2)$",
        rationale: "<strong>解説: </strong><br>工夫して解きます。<br>$(x+y)^2 = x^2+y^2+2xy = 13 + 12 = 25$。<br>よって $x+y = \pm 5$。<br><br>(i) $x+y=5, xy=6$ のとき<br>$t^2-5t+6=0 \Rightarrow (t-2)(t-3)=0 \Rightarrow (2,3), (3,2)$。<br><br>(ii) $x+y=-5, xy=6$ のとき<br>$t^2+5t+6=0 \Rightarrow (t+2)(t+3)=0 \Rightarrow (-2,-3), (-3,-2)$。<br>計4組が答えです。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x^2+y^2=25 \\dots ① \\\\ x+y=7 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (3, 4), (4, 3)$",
        rationale: "<strong>解説: </strong><br>代入法でも解けますが、対称式を利用します。<br>$(x+y)^2 = x^2+y^2+2xy$<br>$49 = 25 + 2xy \Rightarrow 2xy=24 \Rightarrow xy=12$。<br>$x+y=7, xy=12$ を解くと、$t^2-7t+12=0$ より $(3, 4), (4, 3)$。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x^2+y^2=10 \\dots ① \\\\ x+y=-2 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (1, -3), (-3, 1)$",
        rationale: "<strong>解説: </strong><br>$(x+y)^2 = x^2+y^2+2xy$<br>$(-2)^2 = 10 + 2xy$<br>$4 = 10 + 2xy \Rightarrow 2xy = -6 \Rightarrow xy = -3$。<br>$x+y=-2, xy=-3$ より $t^2+2t-3=0$。<br>$(t+3)(t-1)=0$ より $t=-3, 1$。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=4 \\dots ① \\\\ x^2+xy+y^2=13 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (1, 3), (3, 1)$",
        rationale: "<strong>解説: </strong><br>$x^2+xy+y^2 = (x+y)^2 - xy$。<br>$13 = 4^2 - xy \Rightarrow 13 = 16 - xy \Rightarrow xy = 3$。<br>$x+y=4, xy=3$ より $t^2-4t+3=0$。<br>$(t-1)(t-3)=0$ より $(1, 3), (3, 1)$。" + VIDEO_LINK
    },
    // 問題 31
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} \frac{1}{x} + \frac{1}{y} = \frac{5}{6} \\dots ① \\\\ x+y=5 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (2, 3), (3, 2)$",
        rationale: "<strong>解説: </strong><br>①を通分します。$\frac{x+y}{xy} = \frac{5}{6}$。<br>②より $x+y=5$ なので、$\frac{5}{xy} = \frac{5}{6}$。<br>よって $xy = 6$。<br>$x+y=5, xy=6$ を解くと、$(2, 3), (3, 2)$。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x-y=2 \\dots ① \\\\ x^2+y^2=34 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (5, 3), (-3, -5)$",
        rationale: "<strong>解説: </strong><br>$x=y+2$ を②に代入。<br>$(y+2)^2+y^2=34$<br>$2y^2+4y+4=34$<br>$2y^2+4y-30=0$<br>$y^2+2y-15=0$<br>$(y+5)(y-3)=0 \Rightarrow y=-5, 3$<br>$y=3 \to x=5$<br>$y=-5 \to x=-3$" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=8 \\dots ① \\\\ x^2-xy+y^2=49 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (3, 5), (5, 3)$",
        rationale: "<strong>解説: </strong><br>$x^2-xy+y^2 = (x+y)^2 - 3xy$。<br>$49 = 8^2 - 3xy \Rightarrow 49 = 64 - 3xy$<br>$3xy = 15 \Rightarrow xy = 5$。<br>$x+y=8, xy=5$ より $t^2-8t+5=0$。<br>解の公式：$t = 4 \pm \sqrt{16-5} = 4 \pm \sqrt{11}$。<br>答えは $(4+\sqrt{11}, 4-\sqrt{11}), (4-\sqrt{11}, 4+\sqrt{11})$" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} xy=8 \\dots ① \\\\ x^2+y^2=20 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (4, 2), (2, 4), (-4, -2), (-2, -4)$",
        rationale: "<strong>解説: </strong><br>$(x+y)^2 = x^2+y^2+2xy = 20 + 16 = 36 \Rightarrow x+y = \pm 6$。<br>(i) $x+y=6, xy=8 \Rightarrow t^2-6t+8=0 \Rightarrow (2,4), (4,2)$。<br>(ii) $x+y=-6, xy=8 \Rightarrow t^2+6t+8=0 \Rightarrow (-2,-4), (-4,-2)$。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=1 \\dots ① \\\\ x^2+y^2=1 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (1, 0), (0, 1)$",
        rationale: "<strong>解説: </strong><br>$y=1-x$ を代入。<br>$x^2+(1-x)^2=1 \Rightarrow 2x^2-2x=0 \Rightarrow 2x(x-1)=0$。<br>$x=0, 1$。" + VIDEO_LINK
    },

    // --- 応用・計算 (36-50) ---
    // 問題 36
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} y=3x \\dots ① \\\\ 2x^2-y^2=-7 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (1, 3), (-1, -3)$",
        rationale: "<strong>解説: </strong><br>①を②に代入します。<br>$2x^2 - (3x)^2 = -7$<br>$2x^2 - 9x^2 = -7$<br>$-7x^2 = -7$<br>$x^2 = 1 \Rightarrow x = \pm 1$<br>①より、<br>$x=1 \Rightarrow y=3$<br>$x=-1 \Rightarrow y=-3$" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 2x+3y=7 \\dots ① \\\\ x^2+y^2=5 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (2, 1), (\\frac{2}{13}, \\frac{29}{13})$",
        rationale: "<strong>解説: </strong><br>①より $x = \frac{7-3y}{2}$。<br>②に代入：$(\frac{7-3y}{2})^2 + y^2 = 5$<br>$\frac{49-42y+9y^2}{4} + y^2 = 5$<br>$49-42y+9y^2 + 4y^2 = 20$<br>$13y^2 - 42y + 29 = 0$<br>因数分解 $(y-1)(13y-29) = 0$<br>$y = 1, \frac{29}{13}$。<br>$y=1 \to 2x=4 \to x=2$。<br>$y=\frac{29}{13} \to 2x = 7 - 3(\frac{29}{13}) = \frac{91-87}{13} = \frac{4}{13} \to x=\frac{2}{13}$。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x-y=2 \\dots ① \\\\ x^2+xy+y^2=7 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (\\sqrt{3}+1, \\sqrt{3}-1), (-\\sqrt{3}+1, -\\sqrt{3}-1)$",
        rationale: "<strong>解説: </strong><br>$x=y+2$ を代入。<br>$(y+2)^2 + y(y+2) + y^2 = 7$<br>$y^2+4y+4 + y^2+2y + y^2 - 7 = 0$<br>$3y^2 + 6y - 3 = 0$<br>$y^2 + 2y - 1 = 0$<br>$y = -1 \pm \sqrt{2}$。<br>$x = y+2 = 1 \pm \sqrt{2}$。<br>答え：$(1+\sqrt{2}, -1+\sqrt{2}), (1-\sqrt{2}, -1-\sqrt{2})$" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x^2+y^2=2 \\dots ① \\\\ y=2x-3 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (1, -1), (\\frac{7}{5}, -\\frac{1}{5})$",
        rationale: "<strong>解説: </strong><br>代入します。<br>$x^2 + (2x-3)^2 = 2$<br>$x^2 + 4x^2 - 12x + 9 = 2$<br>$5x^2 - 12x + 7 = 0$<br>因数分解 $(x-1)(5x-7)=0$。<br>$x=1, \frac{7}{5}$。<br>$x=1 \to y=-1$。<br>$x=\frac{7}{5} \to y = \frac{14}{5}-3 = -\frac{1}{5}$。<br>答え：$(1, -1), (\frac{7}{5}, -\frac{1}{5})$" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=2\sqrt{2} \\dots ① \\\\ xy=2 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (\sqrt{2}, \sqrt{2})$",
        rationale: "<strong>解説: </strong><br>$t^2 - 2\sqrt{2}t + 2 = 0$。<br>$(t-\sqrt{2})^2 = 0$。<br>よって $x=y=\sqrt{2}$（重解）。" + VIDEO_LINK
    },
    // 問題 41
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} y=x^2-1 \\dots ① \\\\ x^2+y^2=13 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (\pm 2, 3)$",
        rationale: "<strong>解説: </strong><br>①より $x^2 = y+1$。<br>これを②に代入。<br>$(y+1) + y^2 = 13$<br>$y^2 + y - 12 = 0$<br>$(y+4)(y-3) = 0 \Rightarrow y = -4, 3$<br>$y=3$ のとき $x^2=4 \Rightarrow x=\pm 2$。<br>$y=-4$ のとき $x^2=-3$ なので実数解なし。<br>よって $(2, 3), (-2, 3)$。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 4x^2+y^2=4 \\dots ① \\\\ 2x+y=2 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (0, 2), (1, 0)$",
        rationale: "<strong>解説: </strong><br>②より $y = 2-2x$。<br>①に代入。<br>$4x^2 + (2-2x)^2 = 4$<br>$4x^2 + 4 - 8x + 4x^2 = 4$<br>$8x^2 - 8x = 0$<br>$8x(x-1) = 0 \Rightarrow x=0, 1$<br>$x=0 \to y=2$<br>$x=1 \to y=0$" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x^2+y^2+2x=3 \\dots ① \\\\ x+y=1 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (1, 0), (-1, 2)$",
        rationale: "<strong>解説: </strong><br>②より $y = 1-x$。<br>①に代入。<br>$x^2 + (1-x)^2 + 2x = 3$<br>$x^2 + 1 - 2x + x^2 + 2x = 3$<br>$2x^2 + 1 = 3$<br>$2x^2 = 2 \Rightarrow x = \pm 1$<br>$x=1 \to y=0$<br>$x=-1 \to y=2$" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=3 \\dots ① \\\\ x^2+y^2=5 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (1, 2), (2, 1)$",
        rationale: "<strong>解説: </strong><br>代入法：$y=3-x$。<br>$x^2 + (3-x)^2 = 5$<br>$2x^2 - 6x + 9 = 5$<br>$2x^2 - 6x + 4 = 0$<br>$x^2 - 3x + 2 = 0$<br>$(x-1)(x-2)=0$<br>答え：$(1, 2), (2, 1)$" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x-y=4 \\dots ① \\\\ x^2-3xy-y^2=1 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (3, -1), (\\frac{5}{3}, -\\frac{7}{3})$",
        rationale: "<strong>解説: </strong><br>計算が複雑ですがやってみましょう。<br>$x=y+4$。<br>$(y+4)^2 - 3y(y+4) - y^2 = 1$<br>$y^2+8y+16 - 3y^2-12y - y^2 = 1$<br>$-3y^2 - 4y + 15 = 0$<br>$3y^2 + 4y - 15 = 0$<br>たすき掛け：$(3y-5)(y+3) = 0 \Rightarrow y = \frac{5}{3}, -3$<br>$y=-3 \to x=1$<br>$y=\frac{5}{3} \to x = \frac{17}{3}$。<br>答え：$(1, -3), (\\frac{17}{3}, \\frac{5}{3})$" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x^2=4y \\dots ① \\\\ x+y=3 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (2, 1), (-6, 9)$",
        rationale: "<strong>解説: </strong><br>②より $y = 3-x$。<br>①に代入。<br>$x^2 = 4(3-x)$<br>$x^2 + 4x - 12 = 0$<br>$(x+6)(x-2) = 0 \Rightarrow x = -6, 2$<br>$x=2 \to y=1$<br>$x=-6 \to y=9$" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+y=-1 \\dots ① \\\\ x^2+y^2+3x+3y=2 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (1, -2), (-2, 1)$",
        rationale: "<strong>解説: </strong><br>②の式は $x^2+y^2 + 3(x+y) = 2$ と変形できます。<br>$(x+y)^2 - 2xy + 3(x+y) = 2$<br>$(-1)^2 - 2xy + 3(-1) = 2$<br>$1 - 2xy - 3 = 2$<br>$-2 - 2xy = 2 \Rightarrow -2xy = 4 \Rightarrow xy = -2$<br>$x+y=-1, xy=-2$ を解くと、$(1, -2), (-2, 1)$。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} 3x-y=5 \\dots ① \\\\ x^2+y^2=25 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (3, 4), (0, -5)$",
        rationale: "<strong>解説: </strong><br>①より $y = 3x-5$。<br>②に代入。<br>$x^2 + (3x-5)^2 = 25$<br>$x^2 + 9x^2 - 30x + 25 = 25$<br>$10x^2 - 30x = 0$<br>$10x(x-3) = 0 \Rightarrow x=0, 3$<br>$x=0 \to y=-5$<br>$x=3 \to y=4$" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} y=x^2-2x \\dots ① \\\\ y=-x^2+2x \\dots ② \\end{cases}$",
        answer: "$(x, y) = (0, 0), (2, 0)$",
        rationale: "<strong>解説: </strong><br>①=②とします。<br>$x^2-2x = -x^2+2x$<br>$2x^2 - 4x = 0$<br>$2x(x-2) = 0 \Rightarrow x=0, 2$<br>$x=0 \to y=0$<br>$x=2 \to y=0$" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "次の連立方程式を解け。<br>$\\begin{cases} x+2y=3 \\dots ① \\\\ 2x^2+3xy-2y^2=3 \\dots ② \\end{cases}$",
        answer: "$(x, y) = (1, 1)$",
        rationale: "<strong>解説: </strong><br>②の左辺は因数分解できます：$(2x-y)(x+2y) = 3$<br>①より $x+2y=3$ なので、<br>$(2x-y) \cdot 3 = 3 \Rightarrow 2x-y=1 \\dots ③$<br>①と③の連立方程式を解きます。<br>$\\begin{cases} x+2y=3 \\\\ 2x-y=1 \end{cases}$<br>③より $y = 2x-1$。代入して $x+2(2x-1)=3 \Rightarrow 5x-2=3 \Rightarrow 5x=5 \Rightarrow x=1$。<br>$y=1$。<br>よって $(1, 1)$。" + VIDEO_LINK
    }
];