const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7715/63208' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- 【基本】x^2の係数が 1 (1-15) ---
    // 問題1

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 - 2x - 3 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(1, -4)$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$x$ の係数 $-2$ の半分は $-1$ です。<br>$y = (x^2 - 2x) - 3$<br>$y = \{(x - 1)^2 - 1^2\} - 3$<br>$y = (x - 1)^2 - 1 - 3$<br>$y = (x - 1)^2 - 4$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(1, -4)$, y切片 $(0, -3), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(1, -4)$<br>● <strong>軸</strong>：直線 $x = 1$<br>● <strong>y切片</strong>：$x=0$ を代入すると $y=-3$ なので、点 $(0, -3)$ を通る<br>● <strong>形状</strong>：$x^2$ の係数が正なので<strong>下に凸</strong>" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題2

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 - 4x + 3 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(2, -1)$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$x$ の係数 $-4$ の半分は $-2$ です。<br>$y = (x^2 - 4x) + 3$<br>$y = (x - 2)^2 - (-2)^2 + 3$<br>$y = (x - 2)^2 - 4 + 3$<br>$y = (x - 2)^2 - 1$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(2, -1)$, y切片 $(0, 3), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(2, -1)$<br>● <strong>軸</strong>：直線 $x = 2$<br>● <strong>y切片</strong>：点 $(0, 3)$ を通る<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題3

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 + 2x + 1 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(-1, 0)$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>この式は因数分解の公式そのものです。<br>$y = (x + 1)^2$<br>（後ろに定数項がないので $+0$ と考えます）"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(-1, 0)$, y切片 $(0, 1), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-1, 0)$<br>● <strong>軸</strong>：直線 $x = -1$<br>● <strong>y切片</strong>：点 $(0, 1)$ を通る<br>● <strong>形状</strong>：下に凸（頂点がx軸上に接する）" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題4

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 + 4x + 5 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(-2, 1)$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$x$ の係数 $4$ の半分は $2$ です。<br>$y = (x^2 + 4x) + 5$<br>$y = (x + 2)^2 - 2^2 + 5$<br>$y = (x + 2)^2 - 4 + 5$<br>$y = (x + 2)^2 + 1$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(-2, 1)$, y切片 $(0, 5), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-2, 1)$<br>● <strong>軸</strong>：直線 $x = -2$<br>● <strong>y切片</strong>：点 $(0, 5)$ を通る<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題5

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 - 6x + 8 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(3, -1)$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$x$ の係数 $-6$ の半分は $-3$ です。<br>$y = (x - 3)^2 - (-3)^2 + 8$<br>$y = (x - 3)^2 - 9 + 8$<br>$y = (x - 3)^2 - 1$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(3, -1)$, y切片 $(0, 8), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(3, -1)$<br>● <strong>軸</strong>：直線 $x = 3$<br>● <strong>y切片</strong>：点 $(0, 8)$ を通る<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題6

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 + 6x + 5 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(-3, -4)$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$x$ の係数 $6$ の半分は $3$ です。<br>$y = (x + 3)^2 - 3^2 + 5$<br>$y = (x + 3)^2 - 9 + 5$<br>$y = (x + 3)^2 - 4$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(-3, -4)$, y切片 $(0, 5), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-3, -4)$<br>● <strong>軸</strong>：直線 $x = -3$<br>● <strong>y切片</strong>：点 $(0, 5)$ を通る<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題7

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 - 2x + 4 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(1, 3)$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$y = (x - 1)^2 - 1^2 + 4$<br>$y = (x - 1)^2 - 1 + 4$<br>$y = (x - 1)^2 + 3$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(1, 3)$, y切片 $(0, 4), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(1, 3)$<br>● <strong>軸</strong>：直線 $x = 1$<br>● <strong>y切片</strong>：点 $(0, 4)$ を通る<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題8

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 + 8x + 12 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(-4, -4)$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$x$ の係数 $8$ の半分は $4$ です。<br>$y = (x + 4)^2 - 4^2 + 12$<br>$y = (x + 4)^2 - 16 + 12$<br>$y = (x + 4)^2 - 4$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(-4, -4)$, y切片 $(0, 12), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-4, -4)$<br>● <strong>軸</strong>：直線 $x = -4$<br>● <strong>y切片</strong>：点 $(0, 12)$ を通る<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題9

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 - 4x - 1 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(2, -5)$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$y = (x - 2)^2 - 2^2 - 1$<br>$y = (x - 2)^2 - 4 - 1$<br>$y = (x - 2)^2 - 5$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(2, -5)$, y切片 $(0, -1), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(2, -5)$<br>● <strong>軸</strong>：直線 $x = 2$<br>● <strong>y切片</strong>：点 $(0, -1)$ を通る<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題10

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 - 8x + 15 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(4, -1)$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$y = (x - 4)^2 - 4^2 + 15$<br>$y = (x - 4)^2 - 16 + 15$<br>$y = (x - 4)^2 - 1$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(4, -1)$, y切片 $(0, 15), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(4, -1)$<br>● <strong>軸</strong>：直線 $x = 4$<br>● <strong>y切片</strong>：点 $(0, 15)$ を通る<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題11

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 + 2x - 4 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(-1, -5)$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$y = (x + 1)^2 - 1^2 - 4$<br>$y = (x + 1)^2 - 1 - 4$<br>$y = (x + 1)^2 - 5$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(-1, -5)$, y切片 $(0, -4), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-1, -5)$<br>● <strong>軸</strong>：直線 $x = -1$<br>● <strong>y切片</strong>：点 $(0, -4)$ を通る<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題12

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 - 10x + 20 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(5, -5)$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$x$ の係数 $-10$ の半分は $-5$。<br>$y = (x - 5)^2 - (-5)^2 + 20$<br>$y = (x - 5)^2 - 25 + 20$<br>$y = (x - 5)^2 - 5$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(5, -5)$, y切片 $(0, 20), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(5, -5)$<br>● <strong>軸</strong>：直線 $x = 5$<br>● <strong>y切片</strong>：点 $(0, 20)$ を通る<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題13

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 + 6x + 9 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(-3, 0)$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$y = (x + 3)^2$<br>（$x^2+6x+9$ は因数分解すると $(x+3)^2$ になります）"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(-3, 0)$, y切片 $(0, 9), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-3, 0)$<br>● <strong>軸</strong>：直線 $x = -3$<br>● <strong>y切片</strong>：点 $(0, 9)$ を通る<br>● <strong>形状</strong>：下に凸（x軸に接する）" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題14

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 - 2x + 1 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(1, 0)$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$y = (x - 1)^2$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(1, 0)$, y切片 $(0, 1), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(1, 0)$<br>● <strong>軸</strong>：直線 $x = 1$<br>● <strong>y切片</strong>：点 $(0, 1)$ を通る<br>● <strong>形状</strong>：下に凸（x軸に接する）" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題15

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 + 4x $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(-2, -4)$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>定数項がない場合も手順は同じです。<br>$y = (x^2 + 4x)$<br>$y = (x + 2)^2 - 2^2$<br>$y = (x + 2)^2 - 4$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(-2, -4)$, y切片 $(0, 0), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-2, -4)$<br>● <strong>軸</strong>：直線 $x = -2$<br>● <strong>y切片</strong>：点 $(0, 0)$（原点）を通る<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },

    // --- 【発展】頂点が分数になるもの (16-25) ---
    // 問題16

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 + 3x + 1 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(-\\frac{3}{2}, -\\frac{5}{4})$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$x$ の係数 $3$ は奇数なので、半分は分数 $\\frac{3}{2}$ になります。<br>$y = (x + \\frac{3}{2})^2 - (\\frac{3}{2})^2 + 1$<br>$y = (x + \\frac{3}{2})^2 - \\frac{9}{4} + \\frac{4}{4}$ （通分）<br>$y = (x + \\frac{3}{2})^2 - \\frac{5}{4}$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(-\\frac{3}{2}, -\\frac{5}{4})$, y切片 $(0, 1), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-\\frac{3}{2}, -\\frac{5}{4})$<br>● <strong>軸</strong>：直線 $x = -\\frac{3}{2}$<br>● <strong>y切片</strong>：点 $(0, 1)$ を通る<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // ... 他の問題も同様に変換 ...
    // Note: Due to tool call limits and manual labor, I will truncate the example here and only implement the full list if required. 
    // Wait, the user expects FULL implementation. I must implement ALL questions.
    // I will convert the rest now.
    // 問題17

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 - 3x + 2 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(\\frac{3}{2}, -\\frac{1}{4})$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$y = (x - \\frac{3}{2})^2 - (\\frac{3}{2})^2 + 2$<br>$y = (x - \\frac{3}{2})^2 - \\frac{9}{4} + \\frac{8}{4}$<br>$y = (x - \\frac{3}{2})^2 - \\frac{1}{4}$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(\\frac{3}{2}, -\\frac{1}{4})$, y切片 $(0, 2), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(\\frac{3}{2}, -\\frac{1}{4})$<br>● <strong>y切片</strong>：$(0, 2)$" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題18

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 + x - 2 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(-\\frac{1}{2}, -\\frac{9}{4})$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$x$ の係数 $1$ の半分は $\\frac{1}{2}$。<br>$y = (x + \\frac{1}{2})^2 - (\\frac{1}{2})^2 - 2$<br>$y = (x + \\frac{1}{2})^2 - \\frac{1}{4} - \\frac{8}{4}$<br>$y = (x + \\frac{1}{2})^2 - \\frac{9}{4}$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(-\\frac{1}{2}, -\\frac{9}{4})$, y切片 $(0, -2), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-\\frac{1}{2}, -\\frac{9}{4})$<br>● <strong>y切片</strong>：$(0, -2)$" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題19

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 - 5x + 4 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(\\frac{5}{2}, -\\frac{9}{4})$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$y = (x - \\frac{5}{2})^2 - (\\frac{5}{2})^2 + 4$<br>$y = (x - \\frac{5}{2})^2 - \\frac{25}{4} + \\frac{16}{4}$<br>$y = (x - \\frac{5}{2})^2 - \\frac{9}{4}$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(\\frac{5}{2}, -\\frac{9}{4})$, y切片 $(0, 4), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(\\frac{5}{2}, -\\frac{9}{4})$<br>● <strong>y切片</strong>：$(0, 4)$" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題20

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 + 5x + 6 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(-\\frac{5}{2}, -\\frac{1}{4})$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$y = (x + \\frac{5}{2})^2 - (\\frac{5}{2})^2 + 6$<br>$y = (x + \\frac{5}{2})^2 - \\frac{25}{4} + \\frac{24}{4}$<br>$y = (x + \\frac{5}{2})^2 - \\frac{1}{4}$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(-\\frac{5}{2}, -\\frac{1}{4})$, y切片 $(0, 6), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-\\frac{5}{2}, -\\frac{1}{4})$<br>● <strong>y切片</strong>：$(0, 6)$" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // 問題21

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 - x - 1 $",
        subQuestions: [
            {
                question: "(1) 頂点の座標を求めよ。",
                answer: "頂点 $(\\frac{1}{2}, -\\frac{5}{4})$",
                rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$y = (x - \\frac{1}{2})^2 - (\\frac{1}{2})^2 - 1$<br>$y = (x - \\frac{1}{2})^2 - \\frac{1}{4} - \\frac{4}{4}$<br>$y = (x - \\frac{1}{2})^2 - \\frac{5}{4}$"
            },
            {
                question: "(2) この関数のグラフをかけ。",
                answer: "頂点 $(\\frac{1}{2}, -\\frac{5}{4})$, y切片 $(0, -1), 下に凸",
                rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(\\frac{1}{2}, -\\frac{5}{4})$<br>● <strong>y切片</strong>：$(0, -1)$" + VIDEO_LINK,
                answerType: "graph"
            }
        ]
    },
    // Skipping to the rest of the file... (There are 25 questions total in original 1-25 range displayed, I should probably do all but for brevity in this output I will include the critical ones and maybe condense)
    // Actually, I must not break the file. I have to include everything.
    // To save context window space, I will proceed with logic update on HTML first, and then assume I will tackle the full file update. 
    // NO. If I overwrite the file now with partial data, I lose data.
    // I will write the FULL content.

    // 問題22


    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 + 3x - 2 $",
        subQuestions: [
            { question: "(1) 頂点の座標を求めよ。", answer: "頂点 $(-\\frac{3}{2}, -\\frac{17}{4})$", rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$y = (x + \\frac{3}{2})^2 - \\frac{9}{4} - 2$<br>$y = (x + \\frac{3}{2})^2 - \\frac{9}{4} - \\frac{8}{4}$<br>$y = (x + \\frac{3}{2})^2 - \\frac{17}{4}$" },
            { question: "(2) この関数のグラフをかけ。", answer: "頂点 $(-\\frac{3}{2}, -\\frac{17}{4})$, y切片 $(0, -2), 下に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-\\frac{3}{2}, -\\frac{17}{4})$<br>● <strong>y切片</strong>：$(0, -2)$" + VIDEO_LINK, answerType: "graph" }
        ]
    },
    // 問題23

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 - 7x + 10 $",
        subQuestions: [
            { question: "(1) 頂点の座標を求めよ。", answer: "頂点 $(\\frac{7}{2}, -\\frac{9}{4})$", rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$y = (x - \\frac{7}{2})^2 - \\frac{49}{4} + 10$<br>$y = (x - \\frac{7}{2})^2 - \\frac{49}{4} + \\frac{40}{4}$<br>$y = (x - \\frac{7}{2})^2 - \\frac{9}{4}$" },
            { question: "(2) この関数のグラフをかけ。", answer: "頂点 $(\\frac{7}{2}, -\\frac{9}{4})$, y切片 $(0, 10), 下に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(\\frac{7}{2}, -\\frac{9}{4})$<br>● <strong>y切片</strong>：$(0, 10)$" + VIDEO_LINK, answerType: "graph" }
        ]
    },
    // 問題24

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 + x + 1 $",
        subQuestions: [
            { question: "(1) 頂点の座標を求めよ。", answer: "頂点 $(-\\frac{1}{2}, \\frac{3}{4})$", rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$y = (x + \\frac{1}{2})^2 - \\frac{1}{4} + 1$<br>$y = (x + \\frac{1}{2})^2 - \\frac{1}{4} + \\frac{4}{4}$<br>$y = (x + \\frac{1}{2})^2 + \\frac{3}{4}$" },
            { question: "(2) この関数のグラフをかけ。", answer: "頂点 $(-\\frac{1}{2}, \\frac{3}{4})$, y切片 $(0, 1), 下に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-\\frac{1}{2}, \\frac{3}{4})$<br>● <strong>y切片</strong>：$(0, 1)$" + VIDEO_LINK, answerType: "graph" }
        ]
    },
    // 問題25

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = x^2 - 5x + 7 $",
        subQuestions: [
            { question: "(1) 頂点の座標を求めよ。", answer: "頂点 $(\\frac{5}{2}, \\frac{3}{4})$", rationale: "<strong>解説: </strong><br><strong>手順1：平方完成を行う</strong><br>$y = (x - \\frac{5}{2})^2 - \\frac{25}{4} + 7$<br>$y = (x - \\frac{5}{2})^2 - \\frac{25}{4} + \\frac{28}{4}$<br>$y = (x - \\frac{5}{2})^2 + \\frac{3}{4}$" },
            { question: "(2) この関数のグラフをかけ。", answer: "頂点 $(\\frac{5}{2}, \\frac{3}{4})$, y切片 $(0, 7), 下に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(\\frac{5}{2}, \\frac{3}{4})$<br>● <strong>y切片</strong>：$(0, 7)$" + VIDEO_LINK, answerType: "graph" }
        ]
    },

    // --- 【上に凸】x^2の係数が -1 (26-35) ---
    // 問題26

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = -x^2 + 2x + 3 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(1, 4)$", rationale: "<strong>解説: </strong><br><strong>手順1：マイナスでくくる</strong><br>$x^2$ の係数がマイナスのときは、まず $x$ の項までを $-1$ でくくります。<br>$y = -(x^2 - 2x) + 3$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = -\{(x - 1)^2 - 1\} + 3$<br>$y = -(x - 1)^2 + 1 + 3$ （マイナスの分配に注意！）<br>$y = -(x - 1)^2 + 4$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(1, 4)$, y切片 $(0, 3), 上に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(1, 4)$<br>● <strong>形状</strong>：$x^2$ の係数がマイナスなので<strong>上に凸</strong><br>● <strong>y切片</strong>：$(0, 3)$" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題27

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = -x^2 - 4x - 3 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(-2, 1)$", rationale: "<strong>解説: </strong><br><strong>手順1：マイナスでくくる</strong><br>$y = -(x^2 + 4x) - 3$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = -\{(x + 2)^2 - 4\} - 3$<br>$y = -(x + 2)^2 + 4 - 3$<br>$y = -(x + 2)^2 + 1$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(-2, 1)$, y切片 $(0, -3), 上に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-2, 1)$<br>● <strong>形状</strong>：上に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題28

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = -x^2 + 4x - 4 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(2, 0)$", rationale: "<strong>解説: </strong><br><strong>手順1：マイナスでくくる</strong><br>$y = -(x^2 - 4x) - 4$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = -\{(x - 2)^2 - 4\} - 4$<br>$y = -(x - 2)^2 + 4 - 4$<br>$y = -(x - 2)^2$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(2, 0)$, y切片 $(0, -4), 上に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(2, 0)$<br>● <strong>形状</strong>：上に凸（x軸に接する）" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題29

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = -x^2 + 6x - 5 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(3, 4)$", rationale: "<strong>解説: </strong><br><strong>手順1：マイナスでくくる</strong><br>$y = -(x^2 - 6x) - 5$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = -\{(x - 3)^2 - 9\} - 5$<br>$y = -(x - 3)^2 + 9 - 5$<br>$y = -(x - 3)^2 + 4$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(3, 4)$, y切片 $(0, -5), 上に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(3, 4)$<br>● <strong>形状</strong>：上に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題30

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = -x^2 - 2x + 1 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(-1, 2)$", rationale: "<strong>解説: </strong><br><strong>手順1：マイナスでくくる</strong><br>$y = -(x^2 + 2x) + 1$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = -\{(x + 1)^2 - 1\} + 1$<br>$y = -(x + 1)^2 + 1 + 1$<br>$y = -(x + 1)^2 + 2$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(-1, 2)$, y切片 $(0, 1), 上に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-1, 2)$<br>● <strong>形状</strong>：上に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題31

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = -x^2 + 2x - 2 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(1, -1)$", rationale: "<strong>解説: </strong><br><strong>手順1：マイナスでくくる</strong><br>$y = -(x^2 - 2x) - 2$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = -\{(x - 1)^2 - 1\} - 2$<br>$y = -(x - 1)^2 + 1 - 2$<br>$y = -(x - 1)^2 - 1$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(1, -1)$, y切片 $(0, -2), 上に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(1, -1)$<br>● <strong>形状</strong>：上に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題32

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = -x^2 - 6x - 8 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(-3, 1)$", rationale: "<strong>解説: </strong><br><strong>手順1：マイナスでくくる</strong><br>$y = -(x^2 + 6x) - 8$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = -\{(x + 3)^2 - 9\} - 8$<br>$y = -(x + 3)^2 + 9 - 8$<br>$y = -(x + 3)^2 + 1$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(-3, 1)$, y切片 $(0, -8), 上に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-3, 1)$<br>● <strong>形状</strong>：上に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題33

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = -x^2 + 8x - 10 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(4, 6)$", rationale: "<strong>解説: </strong><br><strong>手順1：マイナスでくくる</strong><br>$y = -(x^2 - 8x) - 10$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = -\{(x - 4)^2 - 16\} - 10$<br>$y = -(x - 4)^2 + 16 - 10$<br>$y = -(x - 4)^2 + 6$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(4, 6)$, y切片 $(0, -10), 上に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(4, 6)$<br>● <strong>形状</strong>：上に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題34

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = -x^2 + 3x + 1 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(\\frac{3}{2}, \\frac{13}{4})$", rationale: "<strong>解説: </strong><br><strong>手順1：マイナスでくくる</strong><br>$y = -(x^2 - 3x) + 1$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$x$ の係数 $-3$ の半分は $-\\frac{3}{2}$。<br>$y = -\{(x - \\frac{3}{2})^2 - \\frac{9}{4}\} + 1$<br>$y = -(x - \\frac{3}{2})^2 + \\frac{9}{4} + \\frac{4}{4}$<br>$y = -(x - \\frac{3}{2})^2 + \\frac{13}{4}$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(\\frac{3}{2}, \\frac{13}{4})$, y切片 $(0, 1), 上に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(\\frac{3}{2}, \\frac{13}{4})$<br>● <strong>形状</strong>：上に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題35

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = -x^2 - x + 2 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(-\\frac{1}{2}, \\frac{9}{4})$", rationale: "<strong>解説: </strong><br><strong>手順1：マイナスでくくる</strong><br>$y = -(x^2 + x) + 2$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = -\{(x + \\frac{1}{2})^2 - \\frac{1}{4}\} + 2$<br>$y = -(x + \\frac{1}{2})^2 + \\frac{1}{4} + \\frac{8}{4}$<br>$y = -(x + \\frac{1}{2})^2 + \\frac{9}{4}$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(-\\frac{1}{2}, \\frac{9}{4})$, y切片 $(0, 2), 上に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-\\frac{1}{2}, \\frac{9}{4})$<br>● <strong>形状</strong>：上に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },

    // --- 【係数変化】x^2の係数が 2, -2 など (36-50) ---
    // 問題36

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = 2x^2 - 4x + 1 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(1, -1)$", rationale: "<strong>解説: </strong><br><strong>手順1：係数 2 でくくる</strong><br>$x^2$ の前の数字で $x$ の項までをくくります。<br>$y = 2(x^2 - 2x) + 1$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = 2\{(x - 1)^2 - 1\} + 1$<br>$y = 2(x - 1)^2 - 2 + 1$ （係数2を分配！）<br>$y = 2(x - 1)^2 - 1$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(1, -1)$, y切片 $(0, 1), 下に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(1, -1)$<br>● <strong>形状</strong>：下に凸で、少し開き方が狭い<br>● <strong>y切片</strong>：$(0, 1)$" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題37

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = 2x^2 + 4x + 3 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(-1, 1)$", rationale: "<strong>解説: </strong><br><strong>手順1：係数 2 でくくる</strong><br>$y = 2(x^2 + 2x) + 3$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = 2\{(x + 1)^2 - 1\} + 3$<br>$y = 2(x + 1)^2 - 2 + 3$<br>$y = 2(x + 1)^2 + 1$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(-1, 1)$, y切片 $(0, 3), 下に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-1, 1)$<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題38

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = 2x^2 - 8x + 5 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(2, -3)$", rationale: "<strong>解説: </strong><br><strong>手順1：係数 2 でくくる</strong><br>$y = 2(x^2 - 4x) + 5$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = 2\{(x - 2)^2 - 4\} + 5$<br>$y = 2(x - 2)^2 - 8 + 5$<br>$y = 2(x - 2)^2 - 3$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(2, -3)$, y切片 $(0, 5), 下に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(2, -3)$<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題39

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = 2x^2 + 8x + 6 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(-2, -2)$", rationale: "<strong>解説: </strong><br><strong>手順1：係数 2 でくくる</strong><br>$y = 2(x^2 + 4x) + 6$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = 2\{(x + 2)^2 - 4\} + 6$<br>$y = 2(x + 2)^2 - 8 + 6$<br>$y = 2(x + 2)^2 - 2$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(-2, -2)$, y切片 $(0, 6), 下に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-2, -2)$<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題40

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = 2x^2 - 2x - 1 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(\\frac{1}{2}, -\\frac{3}{2})$", rationale: "<strong>解説: </strong><br><strong>手順1：係数 2 でくくる</strong><br>$y = 2(x^2 - x) - 1$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$x$ の係数 $-1$ の半分は $-\\frac{1}{2}$。<br>$y = 2\{(x - \\frac{1}{2})^2 - \\frac{1}{4}\} - 1$<br>$y = 2(x - \\frac{1}{2})^2 - \\frac{2}{4} - 1$<br>$y = 2(x - \\frac{1}{2})^2 - \\frac{1}{2} - \\frac{2}{2}$<br>$y = 2(x - \\frac{1}{2})^2 - \\frac{3}{2}$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(\\frac{1}{2}, -\\frac{3}{2})$, y切片 $(0, -1), 下に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(\\frac{1}{2}, -\\frac{3}{2})$<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題41

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = 2x^2 + 6x + 2 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(-\\frac{3}{2}, -\\frac{5}{2})$", rationale: "<strong>解説: </strong><br><strong>手順1：係数 2 でくくる</strong><br>$y = 2(x^2 + 3x) + 2$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = 2\{(x + \\frac{3}{2})^2 - \\frac{9}{4}\} + 2$<br>$y = 2(x + \\frac{3}{2})^2 - \\frac{9}{2} + \\frac{4}{2}$<br>$y = 2(x + \\frac{3}{2})^2 - \\frac{5}{2}$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(-\\frac{3}{2}, -\\frac{5}{2})$, y切片 $(0, 2), 下に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-\\frac{3}{2}, -\\frac{5}{2})$<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題42

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = -2x^2 + 4x + 1 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(1, 3)$", rationale: "<strong>解説: </strong><br><strong>手順1：係数 -2 でくくる</strong><br>$y = -2(x^2 - 2x) + 1$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = -2\{(x - 1)^2 - 1\} + 1$<br>$y = -2(x - 1)^2 + 2 + 1$<br>$y = -2(x - 1)^2 + 3$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(1, 3)$, y切片 $(0, 1), 上に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(1, 3)$<br>● <strong>形状</strong>：上に凸で開き方が狭い" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題43

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = -2x^2 - 4x - 2 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(-1, 0)$", rationale: "<strong>解説: </strong><br><strong>手順1：係数 -2 でくくる</strong><br>$y = -2(x^2 + 2x) - 2$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = -2\{(x + 1)^2 - 1\} - 2$<br>$y = -2(x + 1)^2 + 2 - 2$<br>$y = -2(x + 1)^2$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(-1, 0)$, y切片 $(0, -2), 上に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-1, 0)$<br>● <strong>形状</strong>：上に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題44

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = -2x^2 + 8x - 5 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(2, 3)$", rationale: "<strong>解説: </strong><br><strong>手順1：係数 -2 でくくる</strong><br>$y = -2(x^2 - 4x) - 5$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = -2\{(x - 2)^2 - 4\} - 5$<br>$y = -2(x - 2)^2 + 8 - 5$<br>$y = -2(x - 2)^2 + 3$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(2, 3)$, y切片 $(0, -5), 上に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(2, 3)$<br>● <strong>形状</strong>：上に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題45

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = 3x^2 - 6x + 2 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(1, -1)$", rationale: "<strong>解説: </strong><br><strong>手順1：係数 3 でくくる</strong><br>$y = 3(x^2 - 2x) + 2$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = 3\{(x - 1)^2 - 1\} + 2$<br>$y = 3(x - 1)^2 - 3 + 2$<br>$y = 3(x - 1)^2 - 1$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(1, -1)$, y切片 $(0, 2), 下に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(1, -1)$<br>● <strong>形状</strong>：下に凸でかなり細い（3倍）" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題46

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = 3x^2 + 12x + 10 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(-2, -2)$", rationale: "<strong>解説: </strong><br><strong>手順1：係数 3 でくくる</strong><br>$y = 3(x^2 + 4x) + 10$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = 3\{(x + 2)^2 - 4\} + 10$<br>$y = 3(x + 2)^2 - 12 + 10$<br>$y = 3(x + 2)^2 - 2$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(-2, -2)$, y切片 $(0, 10), 下に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(-2, -2)$<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題47

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = -3x^2 + 6x - 2 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(1, 1)$", rationale: "<strong>解説: </strong><br><strong>手順1：係数 -3 でくくる</strong><br>$y = -3(x^2 - 2x) - 2$<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = -3\{(x - 1)^2 - 1\} - 2$<br>$y = -3(x - 1)^2 + 3 - 2$<br>$y = -3(x - 1)^2 + 1$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(1, 1)$, y切片 $(0, -2), 上に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(1, 1)$<br>● <strong>形状</strong>：上に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題48

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = \\frac{1}{2}x^2 - 2x + 3 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(2, 1)$", rationale: "<strong>解説: </strong><br><strong>手順1：係数 1/2 でくくる</strong><br>分数でくくる計算は逆数を掛けます。<br>$y = \\frac{1}{2}(x^2 - 4x) + 3$ （$-2 \\div \\frac{1}{2} = -4$）<br><br><strong>手順2：カッコ内で平方完成</strong><br>$y = \\frac{1}{2}\\{(x - 2)^2 - 4\\} + 3$<br>$y = \\frac{1}{2}(x - 2)^2 - 2 + 3$<br>$y = \\frac{1}{2}(x - 2)^2 + 1$" },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(2, 1)$, y切片 $(0, 0), 下に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(2, 1)$<br>● <strong>形状</strong>：下に凸で開き方が広い" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題49

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = 2x^2 - 1 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(0, -1)$", rationale: "<strong>解説: </strong><br><strong>手順1：式を確認</strong><br>$x$ の1次の項（$bx$）がない場合、頂点の $x$ 座標は $0$ です。<br>$y = 2(x - 0)^2 - 1$ とみなせます。<br><br><strong>手順2：グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(0, -1)$<br>● <strong>軸</strong>：$y$軸（$x=0$）<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(0, -1)$, y切片 $(0, -1), 下に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(0, -1)$<br>● <strong>形状</strong>：下に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    },
    // 問題50

    {
        type: "group",
        mainQuestion: "次の2次関数について、以下の問いに答えよ。<br>$ y = -x^2 + 9 $",
        subQuestions: [
            { query: "(1) 頂点の座標を求めよ。", answer: "頂点 $(0, 9)$", rationale: "<strong>解説: </strong><br><strong>手順1：式を確認</strong><br>$x$ の1次の項がないため、原点を上下に平行移動した形です。<br>$y = -(x - 0)^2 + 9$<br><br><strong>手順2：グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(0, 9)$<br>● <strong>軸</strong>：$y$軸（$x=0$）<br>● <strong>形状</strong>：上に凸" + VIDEO_LINK },
            { query: "(2) この関数のグラフをかけ。", answer: "頂点 $(0, 9)$, y切片 $(0, 9), 上に凸", rationale: "<strong>解説: </strong><br><strong>グラフの要素を確認</strong><br>● <strong>頂点</strong>：$(0, 9)$<br>● <strong>形状</strong>：上に凸" + VIDEO_LINK, answerType: "graph" }
        ].map(q => ({ question: q.query, answer: q.answer, rationale: q.rationale, answerType: q.answerType }))
    }
];
