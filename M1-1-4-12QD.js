window.QUIZ_DATA = [
  {
    "question": "$x^2 + y^2$ を $x+y$ と $xy$ を用いて表せ。",
    "options": [
      "$(x+y)^2 - xy$",
      "$(x+y)^2 - 2xy$",
      "$(x+y)^2 + 2xy$",
      "$(x-y)^2 + xy$"
    ],
    "answer": "$(x+y)^2 - 2xy$",
    "rationale": "<strong>公式: </strong>基本対称式の変形公式です。<br><strong>解説: </strong>展開公式 $(x+y)^2 = x^2 + 2xy + y^2$ より、$2xy$ を移項して $x^2 + y^2 = (x+y)^2 - 2xy$ となります。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$(x-y)^2$ を $x+y$ と $xy$ を用いて表せ。",
    "options": [
      "$(x+y)^2 - 2xy$",
      "$(x+y)^2 - 4xy$",
      "$(x+y)^2 + 4xy$",
      "$(x+y)^2 - xy$"
    ],
    "answer": "$(x+y)^2 - 4xy$",
    "rationale": "<strong>解説: </strong>$(x-y)^2 = x^2 - 2xy + y^2$ です。これを $(x+y)^2 = x^2 + 2xy + y^2$ と比較すると、$4xy$ 分だけ少ないため、$(x+y)^2 - 4xy$ となります。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x^2 + y^2$ を $x-y$ と $xy$ を用いて表せ。",
    "options": [
      "$(x-y)^2 + 2xy$",
      "$(x-y)^2 - 2xy$",
      "$(x-y)^2 + xy$",
      "$(x-y)^2 - xy$"
    ],
    "answer": "$(x-y)^2 + 2xy$",
    "rationale": "<strong>公式: </strong>基本対称式の変形（差を利用する場合）です。<br><strong>解説: </strong>$(x-y)^2 = x^2 - 2xy + y^2$ より、$x^2+y^2 = (x-y)^2 + 2xy$ となります。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$\\frac{y}{x} + \\frac{x}{y}$ を $x+y$ と $xy$ を用いて表せ。",
    "options": [
      "$\\frac{(x+y)^2-2xy}{xy}$",
      "$\\frac{(x+y)^2}{xy}$",
      "$\\frac{(x+y)^2+2xy}{xy}$",
      "$\\frac{x+y}{xy}$"
    ],
    "answer": "$\\frac{(x+y)^2-2xy}{xy}$",
    "rationale": "<strong>解説: </strong>通分すると $\\frac{x^2+y^2}{xy}$ となります。<br>分子を基本対称式で変形すると $(x+y)^2-2xy$ なので、全体は $\\frac{(x+y)^2-2xy}{xy}$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x^2+xy+y^2$ を基本対称式で表せ。",
    "options": [
      "$(x+y)^2 - xy$",
      "$(x+y)^2 - 2xy$",
      "$(x+y)^2 + xy$",
      "$(x-y)^2 + xy$"
    ],
    "answer": "$(x+y)^2 - xy$",
    "rationale": "<strong>解説: </strong>$(x+y)^2 = x^2+2xy+y^2$ なので、ここから $xy$ を引けば $x^2+xy+y^2$ になります。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x+y=4, xy=3$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$10$",
      "$13$",
      "$7$",
      "$19$"
    ],
    "answer": "$10$",
    "rationale": "<strong>解説: </strong>$x^2+y^2 = (x+y)^2 - 2xy$ に代入します。<br>$4^2 - 2 \\cdot 3 = 16 - 6 = 10$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x+y=-3, xy=2$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$5$",
      "$13$",
      "$7$",
      "$-5$"
    ],
    "answer": "$5$",
    "rationale": "<strong>解説: </strong>$x^2+y^2 = (x+y)^2 - 2xy$ に代入します。<br>$(-3)^2 - 2 \\cdot 2 = 9 - 4 = 5$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x+y=5, xy=-2$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$21$",
      "$29$",
      "$25$",
      "$27$"
    ],
    "answer": "$29$",
    "rationale": "<strong>解説: </strong>$x^2+y^2 = (x+y)^2 - 2xy$ に代入します。<br>$5^2 - 2 \\cdot (-2) = 25 + 4 = 29$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x+y=6, xy=5$ のとき、$(x-y)^2$ の値を求めよ。",
    "options": [
      "$16$",
      "$26$",
      "$11$",
      "$36$"
    ],
    "answer": "$16$",
    "rationale": "<strong>解説: </strong>$(x-y)^2 = (x+y)^2 - 4xy$ に代入します。<br>$6^2 - 4 \\cdot 5 = 36 - 20 = 16$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x+y=3, xy=1$ のとき、$\\frac{y}{x} + \\frac{x}{y}$ の値を求めよ。",
    "options": [
      "$7$",
      "$9$",
      "$6$",
      "$8$"
    ],
    "answer": "$7$",
    "rationale": "<strong>解説: </strong>$\\frac{y}{x} + \\frac{x}{y} = \\frac{x^2+y^2}{xy}$ です。<br>分子は $(x+y)^2-2xy = 3^2-2\\cdot 1=7$。<br>よって $\\frac{7}{1}=7$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x+y=4, xy=2$ のとき、$\\frac{y}{x} + \\frac{x}{y}$ の値を求めよ。",
    "options": [
      "$6$",
      "$8$",
      "$4$",
      "$12$"
    ],
    "answer": "$6$",
    "rationale": "<strong>解説: </strong>$\\frac{y}{x} + \\frac{x}{y} = \\frac{x^2+y^2}{xy}$ です。<br>分子は $x^2+y^2 = (x+y)^2 - 2xy = 4^2 - 2\\cdot 2 = 16-4=12$。<br>よって、$\\frac{12}{2} = 6$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x+y=1, xy=-1$ のとき、$x^2+xy+y^2$ の値を求めよ。",
    "options": [
      "$4$",
      "$2$",
      "$3$",
      "$5$"
    ],
    "answer": "$2$",
    "rationale": "<strong>解説: </strong>$x^2+xy+y^2 = (x+y)^2 - xy$ に代入します。<br>$1^2 - (-1) = 1 + 1 = 2$です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x+y=3, x^2+y^2=7$ のとき、$xy$ の値を求めよ。",
    "options": [
      "$1$",
      "$2$",
      "$-1$",
      "$9$"
    ],
    "answer": "$1$",
    "rationale": "<strong>解説: </strong>$x^2+y^2 = (x+y)^2 - 2xy$ より、$7 = 3^2 - 2xy$。<br>$7 = 9 - 2xy$ なので、$2xy = 2$, つまり $xy=1$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x-y=2, xy=3$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$10$",
      "$7$",
      "$13$",
      "$1$"
    ],
    "answer": "$10$",
    "rationale": "<strong>解説: </strong>$x^2+y^2 = (x-y)^2 + 2xy$ という変形もできます。<br>$2^2 + 2\\cdot 3 = 4 + 6 = 10$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x^2+y^2=13, xy=6$ のとき、$x+y$ の値の候補はどれか。",
    "options": [
      "$\\pm 5$",
      "$5$",
      "$\\pm 1$",
      "$7$"
    ],
    "answer": "$\\pm 5$",
    "rationale": "<strong>解説: </strong>$(x+y)^2 = x^2+y^2+2xy = 13 + 2\\cdot 6 = 25$。<br>2乗して25になる数は $\\pm 5$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\sqrt{2}+1, y=\\sqrt{2}-1$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$6$",
      "$4$",
      "$8$",
      "$2$"
    ],
    "answer": "$6$",
    "rationale": "<strong>解説: </strong>和と積を求めます。<br>$x+y = 2\\sqrt{2}, \\ xy = 2-1=1$<br>$x^2+y^2 = (x+y)^2 - 2xy = \\left(2\\sqrt{2}\\right)^2 - 2\\cdot 1 = 8 - 2 = 6$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "answerIndex": 0
  },
  {
    "question": "$x=\\sqrt{3}+\\sqrt{2}, y=\\sqrt{3}-\\sqrt{2}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$10$",
      "$5$",
      "$12$",
      "$6$"
    ],
    "answer": "$10$",
    "rationale": "<strong>解説: </strong>和と積を求めます。<br>$x+y = 2\\sqrt{3}, \\ xy = 3-2=1$<br>$x^2+y^2 = (x+y)^2 - 2xy = \\left(2\\sqrt{3}\\right)^2 - 2\\cdot 1 = 12 - 2 = 10$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "answerIndex": 0
  },
  {
    "question": "$x=\\sqrt{5}+2, y=\\sqrt{5}-2$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$18$",
      "$20$",
      "$16$",
      "$9$"
    ],
    "answer": "$18$",
    "rationale": "<strong>解説: </strong>和と積を求めます。<br>$x+y = 2\\sqrt{5}, \\ xy = 5-4=1$<br>$x^2+y^2 = (x+y)^2 - 2xy = \\left(2\\sqrt{5}\\right)^2 - 2\\cdot 1 = 20 - 2 = 18$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "answerIndex": 0
  },
  {
    "question": "$x=\\sqrt{7}+\\sqrt{3}, y=\\sqrt{7}-\\sqrt{3}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$20$",
      "$14$",
      "$10$",
      "$4$"
    ],
    "answer": "$20$",
    "rationale": "<strong>解説: </strong>和と積を求めます。<br>$x+y = 2\\sqrt{7}, \\ xy = 7-3=4$<br>$x^2+y^2 = (x+y)^2 - 2xy = \\left(2\\sqrt{7}\\right)^2 - 2\\cdot 4 = 28 - 8 = 20$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "answerIndex": 0
  },
  {
    "question": "$x=\\sqrt{3}+1, y=\\sqrt{3}-1$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$8$",
      "$6$",
      "$4$",
      "$10$"
    ],
    "answer": "$8$",
    "rationale": "<strong>解説: </strong>まず和と積を求めます。<br>$x+y = 2\\sqrt{3}, \\ xy = 3-1=2$<br>$x^2+y^2 = (x+y)^2 - 2xy = \\left(2\\sqrt{3}\\right)^2 - 2\\cdot 2 = 12 - 4 = 8$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\sqrt{6}+\\sqrt{2}, y=\\sqrt{6}-\\sqrt{2}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$16$",
      "$12$",
      "$20$",
      "$8$"
    ],
    "answer": "$16$",
    "rationale": "<strong>解説: </strong>和と積を求めます。<br>$x+y = 2\\sqrt{6}, \\ xy = 6-2=4$<br>$x^2+y^2 = (x+y)^2 - 2xy = \\left(2\\sqrt{6}\\right)^2 - 2\\cdot 4 = 24 - 8 = 16$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=3+\\sqrt{5}, y=3-\\sqrt{5}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$28$",
      "$32$",
      "$36$",
      "$30$"
    ],
    "answer": "$28$",
    "rationale": "<strong>解説: </strong>$x+y=6, xy=9-5=4$ なので、<br>$x^2+y^2 = (x+y)^2 - 2xy = 6^2 - 2\\cdot (4) = 36 - 8 = 28$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\frac{1+\\sqrt{5}}{2}, y=\\frac{1-\\sqrt{5}}{2}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$3$",
      "$1$",
      "$2$",
      "$5$"
    ],
    "answer": "$3$",
    "rationale": "<strong>解説: </strong>和と積を計算します。<br>$x+y=1, xy=-1$。<br>$x^2+y^2 = (x+y)^2 - 2xy = 1^2 - 2\\cdot (-1) = 3$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\frac{1+\\sqrt{5}}{2}, y=\\frac{1-\\sqrt{5}}{2}$ のとき、$\\frac{y}{x} + \\frac{x}{y}$ の値を求めよ。",
    "options": [
      "$-3$",
      "$3$",
      "$-1$",
      "$2$"
    ],
    "answer": "$-3$",
    "rationale": "<strong>解説: </strong>$\\frac{x^2+y^2}{xy}$ を計算します。<br>$x+y=1, xy=-1$です。<br>分子は $x^2+y^2 = (x+y)^2 - 2xy = 1^2 - 2\\cdot (-1) = 1+2 =3$。<br>よって、$\\frac{3}{-1} = -3$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\frac{1+\\sqrt{5}}{2}, y=\\frac{1-\\sqrt{5}}{2}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$3$",
      "$1$",
      "$2$",
      "$5$"
    ],
    "answer": "$3$",
    "rationale": "<strong>解説: </strong>$x+y=1, xy=-1$ より、<br>$x^2+y^2 = (x+y)^2 - 2xy = 1^2 - 2(-1) = 1+2=3$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\sqrt{7}+\\sqrt{2}, y=\\sqrt{7}-\\sqrt{2}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$18$",
      "$14$",
      "$24$",
      "$28$"
    ],
    "answer": "$18$",
    "rationale": "<strong>解説: </strong>和と積を求めます。<br>$x+y = 2\\sqrt{7}, \\ xy = 7-2=5$<br>$x^2+y^2 = \\left(2\\sqrt{7}\\right)^2 - 2\\cdot 5 = 28 - 10 = 18$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "answerIndex": 0
  },
  {
    "question": "$x=\\sqrt{10}+\\sqrt{3}, y=\\sqrt{10}-\\sqrt{3}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$26$",
      "$34$",
      "$40$",
      "$13$"
    ],
    "answer": "$26$",
    "rationale": "<strong>解説: </strong>和と積を求めます。<br>$x+y = 2\\sqrt{10}, \\ xy = 10-3=7$<br>$x^2+y^2 = \\left(2\\sqrt{10}\\right)^2 - 2\\cdot 7 = 40 - 14 = 26$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "answerIndex": 0
  },
  {
    "question": "$x=\\frac{1}{\\sqrt{3}+1}, y=\\frac{1}{\\sqrt{3}-1}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$2$",
      "$4$",
      "$3$",
      "$1$"
    ],
    "answer": "$2$",
    "rationale": "<strong>解説: </strong>$x+y = \\frac{(\\sqrt{3}-1)+(\\sqrt{3}+1)}{2} = \\sqrt{3}$。<br>$xy = \\frac{1}{3-1} = \\frac{1}{2}$。<br>$x^2+y^2 = \\left(\\sqrt{3}\\right)^2 - 2\\cdot \\frac{1}{2} = 3-1=2$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\frac{1}{\\sqrt{3}+1}, y=\\frac{1}{\\sqrt{3}-1}$ のとき、$\\frac{y}{x} + \\frac{x}{y}$ の値を求めよ。",
    "options": [
      "$4$",
      "$2$",
      "$8$",
      "$6$"
    ],
    "answer": "$4$",
    "rationale": "<strong>解説: </strong>$\\frac{y}{x} + \\frac{x}{y}=\\frac{x^2+y^2}{xy}$ を計算します。<br>$x+y=\\frac{\\left( \\sqrt3-1\\right)+\\left( \\sqrt3+1\\right)}{\\left( \\sqrt3+1\\right)\\left( \\sqrt3-1\\right)}=\\frac{2\\sqrt3}{3-1}=\\sqrt3, xy=\\frac{1}{3-1}=\\frac12$です。<br>分子は $x^2+y^2 = (x+y)^2 - 2xy = \\sqrt3^2 - 2\\cdot \\frac12 = 3-1 =2$です。<br>よって $2 \\div \\frac{1}{2} = 4$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\frac{4}{\\sqrt{6}+\\sqrt{2}}, y=\\frac{4}{\\sqrt{6}-\\sqrt{2}}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$16$",
      "$24$",
      "$8$",
      "$20$"
    ],
    "answer": "$16$",
    "rationale": "<strong>解説: </strong>$x+y=\\frac{4\\left( \\sqrt6-\\sqrt2\\right)+\\left( \\sqrt6+\\sqrt2\\right)}{\\left( \\sqrt6+\\sqrt2\\right)\\left( \\sqrt6-\\sqrt2\\right)}=\\frac{8\\sqrt6}{6-2}=2\\sqrt6, xy=\\frac{4^2}{6-2}=4$です。<br>$x^2+y^2 = (2\\sqrt{6})^2 - 2(4) = 24-8=16$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\frac{4}{\\sqrt{6}+\\sqrt{2}}, y=\\frac{4}{\\sqrt{6}-\\sqrt{2}}$ のとき、$\\frac{y}{x} + \\frac{x}{y}$ の値を求めよ。",
    "options": [
      "$4$",
      "$2$",
      "$8$",
      "$16$"
    ],
    "answer": "$4$",
    "rationale": "<strong>解説: </strong></strong>$\\frac{y}{x} + \\frac{x}{y}=\\frac{x^2+y^2}{xy}$ を計算します。<br>$x+y=\\frac{4\\left( \\sqrt6-\\sqrt2\\right)+\\left( \\sqrt6+\\sqrt2\\right)}{\\left( \\sqrt6+\\sqrt2\\right)\\left( \\sqrt6-\\sqrt2\\right)}=\\frac{8\\sqrt6}{6-2}=2\\sqrt6, xy=\\frac{4^2}{6-2}=4$です。<br>$x^2+y^2=(x+y)^2-2xy=\\left( 2\\sqrt6\\right)^2-2\\cdot 4=16$ です。<br>よって $16/4 = 4$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\frac{4}{\\sqrt{6}+\\sqrt{2}}, y=\\frac{4}{\\sqrt{6}-\\sqrt{2}}$ のとき、$(x-y)^2$ の値を求めよ。",
    "options": [
      "$8$",
      "$16$",
      "$4$",
      "$12$"
    ],
    "answer": "$8$",
    "rationale": "<strong>解説: </strong>$(x-y)^2 = (x+y)^2 - 4xy$ を利用します。<br>$x+y=\\frac{4\\left( \\sqrt6-\\sqrt2\\right)+\\left( \\sqrt6+\\sqrt2\\right)}{\\left( \\sqrt6+\\sqrt2\\right)\\left( \\sqrt6-\\sqrt2\\right)}=\\frac{8\\sqrt6}{6-2}=2\\sqrt6, xy=\\frac{4^2}{6-2}=4$です。<br>よって，$\\left(2\\sqrt{6}\\right)^2 - 4\\cdot 4= 24 - 16 = 8$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\frac{4}{\\sqrt{6}+\\sqrt{2}}, y=\\frac{4}{\\sqrt{6}-\\sqrt{2}}$ のとき、$x^2-xy+y^2$ の値を求めよ。",
    "options": [
      "$12$",
      "$16$",
      "$20$",
      "$8$"
    ],
    "answer": "$12$",
    "rationale": "<strong>解説: </strong>$(x+y)^2 - 3xy$ を計算します。<br>$x+y=\\frac{4\\left( \\sqrt6-\\sqrt2\\right)+\\left( \\sqrt6+\\sqrt2\\right)}{\\left( \\sqrt6+\\sqrt2\\right)\\left( \\sqrt6-\\sqrt2\\right)}=\\frac{8\\sqrt6}{6-2}=2\\sqrt6, xy=\\frac{4^2}{6-2}=4$です。<br>よって，$\\left( 2\\sqrt6\\right)^2 - 3\\cdot 4 = 12$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\frac{4}{\\sqrt{6}+\\sqrt{2}}, y=\\frac{4}{\\sqrt{6}-\\sqrt{2}}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$16$",
      "$24$",
      "$8$",
      "$20$"
    ],
    "answer": "$16$",
    "rationale": "<strong>解説: </strong>$x+y=2\\sqrt{6}, xy=4$ を利用します。<br>$x+y=\\frac{4\\left( \\sqrt6-\\sqrt2\\right)+\\left( \\sqrt6+\\sqrt2\\right)}{\\left( \\sqrt6+\\sqrt2\\right)\\left( \\sqrt6-\\sqrt2\\right)}=\\frac{8\\sqrt6}{6-2}=2\\sqrt6, xy=\\frac{4^2}{6-2}=4$です。<br>$x^2+y^2 = (x+y)^2 - 2xy = \\left(2\\sqrt{6}\\right)^2 - 2\\cdot 4 = 24 - 8 = 16$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\frac{4}{\\sqrt{6}+\\sqrt{2}}, y=\\frac{4}{\\sqrt{6}-\\sqrt{2}}$ のとき、$(x-y)^2$ の値を求めよ。",
    "options": [
      "$8$",
      "$16$",
      "$4$",
      "$12$"
    ],
    "answer": "$8$",
    "rationale": "<strong>解説: </strong>$(x-y)^2 = (x+y)^2 - 4xy$ を利用します。<br>$x+y=\\frac{4\\left( \\sqrt6-\\sqrt2\\right)+\\left( \\sqrt6+\\sqrt2\\right)}{\\left( \\sqrt6+\\sqrt2\\right)\\left( \\sqrt6-\\sqrt2\\right)}=\\frac{8\\sqrt6}{6-2}=2\\sqrt6, xy=\\frac{4^2}{6-2}=4$です。<br>$(2\\sqrt{6})^2 - 4(4) = 24 - 16 = 8$ です。<br>（別解：$x-y = -2\\sqrt{2}$ なので、2乗して $8$）<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\frac{\\sqrt{5}+\\sqrt{3}}{\\sqrt{5}-\\sqrt{3}}, y=\\frac{\\sqrt{5}-\\sqrt{3}}{\\sqrt{5}+\\sqrt{3}}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$62$",
      "$64$",
      "$60$",
      "$32$"
    ],
    "answer": "$62$",
    "rationale": "<strong>解説: </strong>$x+y = \\frac{(\\sqrt{5}+\\sqrt{3})^2 + (\\sqrt{5}-\\sqrt{3})^2}{5-3} = \\frac{8+2\\sqrt{15}+8-2\\sqrt{15}}{2} = 8$。<br>$xy=1$。<br>$x^2+y^2 =\\left(x+y\\right)^2-2xy= 8^2 - 2 = 62$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\frac{\\sqrt{5}+\\sqrt{3}}{\\sqrt{5}-\\sqrt{3}}, y=\\frac{\\sqrt{5}-\\sqrt{3}}{\\sqrt{5}+\\sqrt{3}}$ のとき、$x^2+xy+y^2$ の値を求めよ。",
    "options": [
      "$63$",
      "$62$",
      "$64$",
      "$60$"
    ],
    "answer": "$63$",
    "rationale": "<strong>解説: </strong>$x+y = \\frac{(\\sqrt{5}+\\sqrt{3})^2 + (\\sqrt{5}-\\sqrt{3})^2}{5-3} = \\frac{8+2\\sqrt{15}+8-2\\sqrt{15}}{2} = 8$。<br>$xy=1$。<br>よって $x^2+xy+y^2=\\left( x+y\\right)^2-xy=8^2-1=63$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\frac{\\sqrt{5}+\\sqrt{3}}{\\sqrt{5}-\\sqrt{3}}, y=\\frac{\\sqrt{5}-\\sqrt{3}}{\\sqrt{5}+\\sqrt{3}}$ のとき、$\\frac{y}{x} + \\frac{x}{y}$ の値を求めよ。",
    "options": [
      "$62$",
      "$64$",
      "$30$",
      "$31$"
    ],
    "answer": "$62$",
    "rationale": "<strong>解説: </strong>$\\frac{x^2+y^2}{xy}$ を計算します。<br>$x+y = \\frac{(\\sqrt{5}+\\sqrt{3})^2 + (\\sqrt{5}-\\sqrt{3})^2}{5-3} = \\frac{8+2\\sqrt{15}+8-2\\sqrt{15}}{2} = 8$。<br>$xy=1$。<br>$x^2+y^2=\\left( x+y\\right)^2-2xy=8^2-2\\cdot 1=62, xy=1$ なので、$62\\div1 = 62$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x+y=8, xy=1$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$62$",
      "$64$",
      "$60$",
      "$14$"
    ],
    "answer": "$62$",
    "rationale": "<strong>解説: </strong>$x+y=8, xy=1$ より、<br>$x^2+y^2 = 8^2 - 2\\cdot 1 = 64 - 2 = 62$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=4+\\sqrt{3}, y=4-\\sqrt{3}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$38$",
      "$26$",
      "$32$",
      "$16$"
    ],
    "answer": "$38$",
    "rationale": "<strong>解説: </strong>和と積を求めます。<br>$x+y = 8, \\ xy = 16-3=13$<br>$x^2+y^2 = 8^2 - 2\\cdot 13 = 64 - 26 = 38$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\sqrt{11}+\\sqrt{5}, y=\\sqrt{11}-\\sqrt{5}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$32$",
      "$44$",
      "$22$",
      "$16$"
    ],
    "answer": "$32$",
    "rationale": "<strong>解説: </strong>和と積を求めます。<br>$x+y = 2\\sqrt{11}, \\ xy = 11-5=6$<br>$x^2+y^2 = \\left(2\\sqrt{11}\\right)^2 - 2\\cdot 6 = 44 - 12 = 32$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "answerIndex": 0
  },
  {
    "question": "$x+y=2\\sqrt{3}, xy=2$ のとき、$x^2+y^2$ を計算せよ。",
    "options": [
      "$8$",
      "$10$",
      "$12$",
      "$6$"
    ],
    "answer": "$8$",
    "rationale": "<strong>解説: </strong>$\\left(2\\sqrt{3}\\right)^2 - 2\\cdot 2 = 12 - 4 = 8$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x^2+y^2=12, xy=2$ のとき、$(x+y)^2$ の値を求めよ。",
    "options": [
      "$16$",
      "$12$",
      "$8$",
      "$10$"
    ],
    "answer": "$16$",
    "rationale": "<strong>解説: </strong>$(x+y)^2 = x^2+y^2+2xy$ を使います。<br>$12 + 2\\cdot 2 = 16$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x+y=\\sqrt{5}, x-y=\\sqrt{3}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$4$",
      "$8$",
      "$2$",
      "$\\sqrt{15}$"
    ],
    "answer": "$4$",
    "rationale": "<strong>解説: </strong>$(x+y)^2 + (x-y)^2 = 2(x^2+y^2)$ の等式を利用します。<br>$(x+y)^2 + (x-y)^2 =5 + 3 = 8$。<br>よって $2(x^2+y^2)=8$ なので $x^2+y^2=4$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x+y=\\sqrt{5}, x-y=\\sqrt{3}$ のとき、$xy$ の値を求めよ。",
    "options": [
      "$\\frac{1}{2}$",
      "$1$",
      "$2$",
      "$\\frac{\\sqrt{15}}{4}$"
    ],
    "answer": "$\\frac{1}{2}$",
    "rationale": "<strong>解説: </strong>$(x-y)^2 =(x+y)^2-4xy$ を利用します。<br>$\\left( \\sqrt3\\right)^2=\\left( \\sqrt5\\right)^2-4xy$<br>$4xy = 2$ なので、$xy = \\frac{2}{4} = \\frac{1}{2}$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x+y=t, xy=u$ とするとき、$(x-y)^2$ を表す式はどれか。",
    "options": [
      "$t^2-4u$",
      "$t^2-2u$",
      "$t^2+2u$",
      "$t-4u$"
    ],
    "answer": "$t^2-4u$",
    "rationale": "<strong>解説: </strong>$(x-y)^2 = (x+y)^2 - 4xy$ です。<br>代入すると $t^2-4u$ となります。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\sqrt{6}+\\sqrt{5}, y=\\sqrt{6}-\\sqrt{5}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$22$",
      "$24$",
      "$12$",
      "$2$"
    ],
    "answer": "$22$",
    "rationale": "<strong>解説: </strong>和と積を求めます。<br>$x+y = 2\\sqrt{6}, \\ xy = 6-5=1$<br>$x^2+y^2 = \\left(2\\sqrt{6}\\right)^2 - 2\\cdot 1 = 24 - 2 = 22$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "answerIndex": 0
  },
  {
    "question": "$x=3+\\sqrt{2}, y=3-\\sqrt{2}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$22$",
      "$14$",
      "$18$",
      "$20$"
    ],
    "answer": "$22$",
    "rationale": "<strong>解説: </strong>$x+y=6, xy=3^2-2=7$。<br>$x^2+y^2 = 6^2-2\\cdot 7 = 36-14=22$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "$x=\\frac{3+\\sqrt{5}}{2}, y=\\frac{3-\\sqrt{5}}{2}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$7$",
      "$9$",
      "$5$",
      "$8$"
    ],
    "answer": "$7$",
    "rationale": "<strong>解説: </strong>和と積を求めます。<br>$x+y = \\frac{6}{2}=3, \\ xy =\\frac{\\left( 3+\\sqrt{5}\\right)\\left( 3-\\sqrt{5}\\right)}{4}= \\frac{9-5}{4}=1$<br>$x^2+y^2 = 3^2 - 2\\cdot 1 = 9 - 2 = 7$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "answerIndex": 0
  },
  {
    "question": "$x=2+\\sqrt{7}, y=2-\\sqrt{7}$ のとき、$x^2+y^2$ の値を求めよ。",
    "options": [
      "$22$",
      "$16$",
      "$18$",
      "$4$"
    ],
    "answer": "$22$",
    "rationale": "<strong>解説: </strong>和と積を求めます。<br>$x+y = 4, \\ xy = 4-7=-3$<br>$x^2+y^2 = 4^2 - 2\\cdot (-3) = 16 + 6 = 22$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  }
];