window.QUIZ_DATA = [
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x-1|$$",
    "options": [
      "g_V_1_0.png",
      "g_V_n1_0.png",
      "g_M_1_0.png",
      "g_V_0_1.png"
    ],
    "answer": "g_V_1_0.png",
    "rationale": "絶対値の中身 $x-1$ の符号で場合分けをします。<br>(i) $x-1 \\geqq 0$ つまり $x \\geqq 1$ のとき<br>$y=x-1$<br>(ii) $x-1 < 0$ つまり $x < 1$ のとき<br>$y=-(x-1)=-x+1$<br>よって，$x=1$ で折れ曲がる，頂点 $(1, 0)$ のV字型グラフになります。<br><br>【別解】<br>$y=|x|$ のグラフを $x$ 軸方向に $1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 1, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - Math.abs(x - 1)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x+1|$$",
    "options": [
      "g_V_1_0.png",
      "g_V_n1_0.png",
      "g_V_0_1.png",
      "g_M_n1_0.png"
    ],
    "answer": "g_V_n1_0.png",
    "rationale": "絶対値の中身 $x+1$ の符号で場合分けをします。<br>(i) $x+1 \\geqq 0$ つまり $x \\geqq -1$ のとき<br>$y=x+1$<br>(ii) $x+1 < 0$ つまり $x < -1$ のとき<br>$y=-(x+1)=-x-1$<br>よって，$x=-1$ で折れ曲がる，頂点 $(-1, 0)$ のV字型グラフになります。<br><br>【別解】<br>$y=|x|$ のグラフを $x$ 軸方向に $-1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: -1, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - Math.abs(x + 1)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x-2|$$",
    "options": [
      "g_V_2_0.png",
      "g_V_n2_0.png",
      "g_V_1_0.png",
      "g_M_2_0.png"
    ],
    "answer": "g_V_2_0.png",
    "rationale": "絶対値の中身 $x-2$ の符号で場合分けをします。<br>(i) $x-2 \\geqq 0$ つまり $x \\geqq 2$ のとき<br>$y=x-2$<br>(ii) $x-2 < 0$ つまり $x < 2$ のとき<br>$y=-(x-2)=-x+2$<br>よって，$x=2$ で折れ曲がる，頂点 $(2, 0)$ のV字型グラフになります。<br><br>【別解】<br>$y=|x|$ のグラフを $x$ 軸方向に $2$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 2, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - Math.abs(x - 2)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x+2|$$",
    "options": [
      "g_V_2_0.png",
      "g_V_n2_0.png",
      "g_V_n1_0.png",
      "g_M_0_0.png"
    ],
    "answer": "g_V_n2_0.png",
    "rationale": "絶対値の中身 $x+2$ の符号で場合分けをします。<br>(i) $x+2 \\geqq 0$ つまり $x \\geqq -2$ のとき<br>$y=x+2$<br>(ii) $x+2 < 0$ つまり $x < -2$ のとき<br>$y=-(x+2)=-x-2$<br>よって，$x=-2$ で折れ曲がる，頂点 $(-2, 0)$ のV字型グラフになります。<br><br>【別解】<br>$y=|x|$ のグラフを $x$ 軸方向に $-2$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: -2, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - Math.abs(x + 2)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x| + 1$$",
    "options": [
      "g_V_0_1.png",
      "g_V_1_0.png",
      "g_V_0_n1.png",
      "g_V_1_1.png"
    ],
    "answer": "g_V_0_1.png",
    "rationale": "絶対値の中身 $x$ の符号で場合分けをします。<br>(i) $x \\geqq 0$ のとき<br>$y=x+1$<br>(ii) $x < 0$ のとき<br>$y=-x+1$<br>よって，$x=0$ で折れ曲がる，頂点 $(0, 1)$ のV字型グラフになります。<br><br>【別解】<br>$y=|x|$ のグラフを $y$ 軸方向に $1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 1 }],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x) + 1)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x| - 1$$",
    "options": [
      "g_V_0_1.png",
      "g_V_0_n1.png",
      "g_V_1_n1.png",
      "g_M_0_1.png"
    ],
    "answer": "g_V_0_n1.png",
    "rationale": "絶対値の中身 $x$ の符号で場合分けをします。<br>(i) $x \\geqq 0$ のとき<br>$y=x-1$<br>(ii) $x < 0$ のとき<br>$y=-x-1$<br>よって，$x=0$ で折れ曲がる，頂点 $(0, -1)$ のV字型グラフになります。<br><br>【別解】<br>$y=|x|$ のグラフを $y$ 軸方向に $-1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x-1| + 1$$",
    "options": [
      "g_V_1_1.png",
      "g_V_1_0.png",
      "g_V_n1_n1.png",
      "g_V_0_1.png"
    ],
    "answer": "g_V_1_1.png",
    "rationale": "絶対値の中身 $x-1$ の符号で場合分けをします。<br>(i) $x-1 \\geqq 0$ つまり $x \\geqq 1$ のとき<br>$y=(x-1)+1=x$<br>(ii) $x-1 < 0$ つまり $x < 1$ のとき<br>$y=-(x-1)+1=-x+2$<br>よって，$x=1$ で折れ曲がる，頂点 $(1, 1)$ のV字型グラフになります。<br><br>【別解】<br>$y=|x|$ のグラフを $x$ 軸方向に $1$，$y$ 軸方向に $1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x-1| - 1$$",
    "options": [
      "g_V_1_n1.png",
      "g_V_1_1.png",
      "g_V_n1_n1.png",
      "g_V_2_n1.png"
    ],
    "answer": "g_V_1_n1.png",
    "rationale": "絶対値の中身 $x-1$ の符号で場合分けをします。<br>(i) $x-1 \\geqq 0$ つまり $x \\geqq 1$ のとき<br>$y=(x-1)-1=x-2$<br>(ii) $x-1 < 0$ つまり $x < 1$ のとき<br>$y=-(x-1)-1=-x$<br>よって，$x=1$ で折れ曲がる，頂点 $(1, -1)$ のV字型グラフになります。<br><br>【別解】<br>$y=|x|$ のグラフを $x$ 軸方向に $1$，$y$ 軸方向に $-1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x+1| - 1$$",
    "options": [
      "g_V_n1_n1.png",
      "g_V_1_n1.png",
      "g_V_n1_0.png",
      "g_V_0_n1.png"
    ],
    "answer": "g_V_n1_n1.png",
    "rationale": "絶対値の中身 $x+1$ の符号で場合分けをします。<br>(i) $x+1 \\geqq 0$ つまり $x \\geqq -1$ のとき<br>$y=(x+1)-1=x$<br>(ii) $x+1 < 0$ つまり $x < -1$ のとき<br>$y=-(x+1)-1=-x-2$<br>よって，$x=-1$ で折れ曲がる，頂点 $(-1, -1)$ のV字型グラフになります。<br><br>【別解】<br>$y=|x|$ のグラフを $x$ 軸方向に $-1$，$y$ 軸方向に $-1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x+1| + 2$$",
    "options": [
      "g_V_n1_2.png",
      "g_V_n1_n1.png",
      "g_V_1_1.png",
      "g_V_0_1.png"
    ],
    "answer": "g_V_n1_2.png",
    "rationale": "絶対値の中身 $x+1$ の符号で場合分けをします。<br>(i) $x+1 \\geqq 0$ つまり $x \\geqq -1$ のとき<br>$y=(x+1)+2=x+3$<br>(ii) $x+1 < 0$ つまり $x < -1$ のとき<br>$y=-(x+1)+2=-x+1$<br>よって，$x=-1$ で折れ曲がる，頂点 $(-1, 2)$ のV字型グラフになります。<br><br>【別解】<br>$y=|x|$ のグラフを $x$ 軸方向に $-1$，$y$ 軸方向に $2$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = -|x|$$",
    "options": [
      "g_M_0_0.png",
      "g_V_0_0.png",
      "g_M_0_1.png",
      "g_M_1_0.png"
    ],
    "answer": "g_M_0_0.png",
    "rationale": "絶対値の中身 $x$ の符号で場合分けをします。<br>(i) $x \\geqq 0$ のとき<br>$y=-x$<br>(ii) $x < 0$ のとき<br>$y=-(-x)=x$<br>よって，原点 $(0, 0)$ を頂点とする山型のグラフになります。<br><br>【別解】<br>$y=|x|$ のグラフを $x$ 軸に関して対称移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (-Math.abs(x))) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = -|x-1|$$",
    "options": [
      "g_M_1_0.png",
      "g_M_n1_0.png",
      "g_V_1_0.png",
      "g_M_0_0.png"
    ],
    "answer": "g_M_1_0.png",
    "rationale": "絶対値の中身 $x-1$ の符号で場合分けをします。<br>(i) $x-1 \\geqq 0$ つまり $x \\geqq 1$ のとき<br>$y=-(x-1)=-x+1$<br>(ii) $x-1 < 0$ つまり $x < 1$ のとき<br>$y=-(-(x-1))=x-1$<br>よって，頂点 $(1, 0)$ の山型のグラフになります。<br><br>【別解】<br>$y=-|x|$（山型）のグラフを $x$ 軸方向に $1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 1, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (-Math.abs(x - 1))) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = -|x+1|$$",
    "options": [
      "g_M_n1_0.png",
      "g_M_1_0.png",
      "g_V_n1_0.png",
      "g_M_0_0.png"
    ],
    "answer": "g_M_n1_0.png",
    "rationale": "絶対値の中身 $x+1$ の符号で場合分けをします。<br>(i) $x+1 \\geqq 0$ つまり $x \\geqq -1$ のとき<br>$y=-(x+1)=-x-1$<br>(ii) $x+1 < 0$ つまり $x < -1$ のとき<br>$y=-(-(x+1))=x+1$<br>よって，頂点 $(-1, 0)$ の山型のグラフになります。<br><br>【別解】<br>$y=-|x|$（山型）のグラフを $x$ 軸方向に $-1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: -1, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (-Math.abs(x + 1))) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = -|x| + 1$$",
    "options": [
      "g_M_0_1.png",
      "g_M_0_0.png",
      "g_V_0_1.png",
      "g_M_1_0.png"
    ],
    "answer": "g_M_0_1.png",
    "rationale": "絶対値の中身 $x$ の符号で場合分けをします。<br>(i) $x \\geqq 0$ のとき<br>$y=-x+1$<br>(ii) $x < 0$ のとき<br>$y=-(-x)+1=x+1$<br>よって，頂点 $(0, 1)$ の山型のグラフになります。<br><br>【別解】<br>$y=-|x|$（山型）のグラフを $y$ 軸方向に $1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 1 }],
      "isValidPoint": (x, y) => Math.abs(y - (-Math.abs(x) + 1)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = -|x-2|$$",
    "options": [
      "g_M_2_0.png",
      "g_M_1_0.png",
      "g_V_2_0.png",
      "g_P_2_1_n1.png"
    ],
    "answer": "g_M_2_0.png",
    "rationale": "絶対値の中身 $x-2$ の符号で場合分けをします。<br>(i) $x-2 \\geqq 0$ つまり $x \\geqq 2$ のとき<br>$y=-(x-2)=-x+2$<br>(ii) $x-2 < 0$ つまり $x < 2$ のとき<br>$y=-(-(x-2))=x-2$<br>よって，頂点 $(2, 0)$ の山型のグラフになります。<br><br>【別解】<br>$y=-|x|$（山型）のグラフを $x$ 軸方向に $2$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 2, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (-Math.abs(x - 2))) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |2x|$$",
    "options": [
      "g_V_0_0_k2.png",
      "g_V_0_0.png",
      "g_M_0_0_k2.png",
      "g_P_0_0_2.png"
    ],
    "answer": "g_V_0_0_k2.png",
    "rationale": "絶対値の中身 $2x$ の符号で場合分けをします。<br>(i) $2x \\geqq 0$ つまり $x \\geqq 0$ のとき<br>$y=2x$<br>(ii) $2x < 0$ つまり $x < 0$ のとき<br>$y=-2x$<br>よって，原点 $(0, 0)$ で折れ曲がる，傾き $\\pm 2$ の急なV字型グラフになります。<br><br>【別解】<br>$y=2|x|$ と変形できるので，基本の $y=|x|$ を $y$ 軸方向に $2$ 倍に引き伸ばしたグラフと考えられます。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - Math.abs(2 * x)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |2x-2|$$",
    "options": [
      "g_V_1_0_k2.png",
      "g_V_1_0.png",
      "g_V_2_0.png",
      "g_M_1_0_k2.png"
    ],
    "answer": "g_V_1_0_k2.png",
    "rationale": "絶対値の中身 $2x-2$ の符号で場合分けをします。<br>(i) $2x-2 \\geqq 0$ つまり $x \\geqq 1$ のとき<br>$y=2x-2$<br>(ii) $2x-2 < 0$ つまり $x < 1$ のとき<br>$y=-(2x-2)=-2x+2$<br>よって，$(1,0)$ で折れ曲がる，傾き $\\pm 2$ のV字型グラフになります。<br><br>【別解】<br>$y=2|x-1|$ と変形し，$y=2|x|$ のグラフを $x$ 軸方向に $1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 1, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - Math.abs(2 * x - 2)) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |2x+2|$$",
    "options": [
      "g_V_n1_0_k2.png",
      "g_V_n1_0.png",
      "g_V_n2_0.png",
      "g_M_n1_0.png"
    ],
    "answer": "g_V_n1_0_k2.png",
    "rationale": "絶対値の中身 $2x+2$ の符号で場合分けをします。<br>(i) $2x+2 \\geqq 0$ つまり $x \\geqq -1$ のとき<br>$y=2x+2$<br>(ii) $2x+2 < 0$ つまり $x < -1$ のとき<br>$y=-(2x+2)=-2x-2$<br>よって，$(-1,0)$ で折れ曲がる，傾き $\\pm 2$ のV字型グラフになります。<br><br>【別解】<br>$y=2|x+1|$ と変形し，$y=2|x|$ のグラフを $x$ 軸方向に $-1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: -1, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - Math.abs(2 * x + 2)) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = -|2x|$$",
    "options": [
      "g_M_0_0_k2.png",
      "g_M_0_0.png",
      "g_V_0_0_k2.png",
      "g_M_1_0_k2.png"
    ],
    "answer": "g_M_0_0_k2.png",
    "rationale": "絶対値の中身 $2x$ の符号で場合分けをします。<br>(i) $2x \\geqq 0$ のとき<br>$y=-2x$<br>(ii) $2x < 0$ のとき<br>$y=-(-2x)=2x$<br>よって，原点 $(0, 0)$ を頂点とする，傾き $\\pm 2$ の山型グラフになります。<br><br>【別解】<br>$y=-2|x|$ と変形し，$y=-2x$ と $y=2x$ を組み合わせた形と考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (-Math.abs(2 * x))) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = -|2x-2|$$",
    "options": [
      "g_M_1_0_k2.png",
      "g_M_1_0.png",
      "g_V_1_0_k2.png",
      "g_M_0_0_k2.png"
    ],
    "answer": "g_M_1_0_k2.png",
    "rationale": "絶対値の中身 $2x-2$ の符号で場合分けをします。<br>(i) $2x-2 \\geqq 0$ つまり $x \\geqq 1$ のとき<br>$y=-(2x-2)=-2x+2$<br>(ii) $2x-2 < 0$ つまり $x < 1$ のとき<br>$y=-(-(2x-2))=2x-2$<br>よって，頂点 $(1, 0)$ の山型グラフになります。<br><br>【別解】<br>$y=-2|x-1|$ と変形し，$y=-2|x|$ のグラフを $x$ 軸方向に $1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 1, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (-Math.abs(2 * x - 2))) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |-x|$$",
    "options": [
      "g_V_0_0.png",
      "g_M_0_0.png",
      "g_V_0_1.png",
      "g_V_0_n1.png"
    ],
    "answer": "g_V_0_0.png",
    "rationale": "$|-A|=|A|$ の性質より，$y=|-x|=|x|$ と同じ式になります。<br>よって，<br>(i) $x \\geqq 0$ のとき $y=x$<br>(ii) $x < 0$ のとき $y=-x$<br>となり，原点 $(0, 0)$ を頂点とする基本的なV字型グラフになります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - Math.abs(-x)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |-x+1|$$",
    "options": [
      "g_V_1_0.png",
      "g_V_n1_0.png",
      "g_M_1_0.png",
      "g_V_1_1.png"
    ],
    "answer": "g_V_1_0.png",
    "rationale": "$|-A|=|A|$ の性質より，$|-x+1|=|-(x-1)|=|x-1|$ と変形できます。<br>したがって，中身の $x-1$ で場合分けをします。<br>(i) $x-1 \\geqq 0$ つまり $x \\geqq 1$ のとき $y=x-1$<br>(ii) $x-1 < 0$ つまり $x < 1$ のとき $y=-x+1$<br>よって，頂点 $(1, 0)$ のV字型グラフになります。<br><br>【別解】<br>$y=|x|$ を $x$ 軸方向に $1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 1, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - Math.abs(-x + 1)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x-2|-1$$",
    "options": [
      "g_V_2_n1.png",
      "g_V_2_0.png",
      "g_V_n2_0.png",
      "g_V_1_n1.png"
    ],
    "answer": "g_V_2_n1.png",
    "rationale": "絶対値の中身 $x-2$ の符号で場合分けをします。<br>(i) $x-2 \\geqq 0$ つまり $x \\geqq 2$ のとき<br>$y=(x-2)-1=x-3$<br>(ii) $x-2 < 0$ つまり $x < 2$ のとき<br>$y=-(x-2)-1=-x+1$<br>よって，頂点 $(2, -1)$ のV字型グラフになります。<br><br>【別解】<br>$y=|x|$ のグラフを $x$ 軸方向に $2$，$y$ 軸方向に $-1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 2, y: -1 }],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x - 2) - 1)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = 2 - |x-2|$$",
    "options": [
      "g_P_2_1_n1.png",
      "g_M_2_0.png",
      "g_V_2_0.png",
      "g_P_0_2_4.png"
    ],
    "answer": "g_P_2_1_n1.png",
    "rationale": "式を $y = -|x-2| + 2$ と整理して，絶対値の中身 $x-2$ で場合分けをします。<br>(i) $x \\geqq 2$ のとき<br>$y=-(x-2)+2=-x+4$<br>(ii) $x < 2$ のとき<br>$y=-(-(x-2))+2=x$<br>よって，頂点 $(2, 2)$ の山型グラフになります。<br><br>【別解】<br>$y=-|x|$（山型）を $x$ 軸方向に $2$，$y$ 軸方向に $2$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 2, y: 2 }],
      "isValidPoint": (x, y) => Math.abs(y - (2 - Math.abs(x - 2))) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |-x-1|$$",
    "options": [
      "g_V_n1_0.png",
      "g_V_1_0.png",
      "g_M_n1_0.png",
      "g_V_0_n1.png"
    ],
    "answer": "g_V_n1_0.png",
    "rationale": "$|-A|=|A|$ の性質より，$|-x-1|=|-(x+1)|=|x+1|$ と変形できます。<br>したがって，中身の $x+1$ で場合分けをします。<br>(i) $x \\geqq -1$ のとき $y=x+1$<br>(ii) $x < -1$ のとき $y=-x-1$<br>よって，頂点 $(-1, 0)$ のV字型グラフになります。<br><br>【別解】<br>$y=|x|$ を $x$ 軸方向に $-1$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: -1, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - Math.abs(-x - 1)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x| + 2x$$",
    "options": [
      "g_P_0_1_3.png",
      "g_P_0_n1_3.png",
      "g_V_0_0_k2.png",
      "g_V_0_0.png"
    ],
    "answer": "g_P_0_1_3.png",
    "rationale": "絶対値の中身 $x$ の符号で場合分けをします。<br>(i) $x \\geqq 0$ のとき<br>$y=x+2x=3x$<br>(ii) $x < 0$ のとき<br>$y=-x+2x=x$<br>よって，原点で折れ曲がり，右側は傾き $3$，左側は傾き $1$ となるグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x) + 2 * x)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = 2|x| + x$$",
    "options": [
      "g_P_0_n1_3.png",
      "g_P_0_1_3.png",
      "g_V_0_0_k2.png",
      "g_P_0_0_2.png"
    ],
    "answer": "g_P_0_n1_3.png",
    "rationale": "絶対値の中身 $x$ の符号で場合分けをします。<br>(i) $x \\geqq 0$ のとき<br>$y=2x+x=3x$<br>(ii) $x < 0$ のとき<br>$y=-2x+x=-x$<br>よって，原点で折れ曲がり，右側は傾き $3$，左側は傾き $-1$ となるグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (2 * Math.abs(x) + x)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x| + x$$",
    "options": [
      "g_P_0_0_2.png",
      "g_P_0_n2_0.png",
      "g_V_0_0.png",
      "g_V_1_0.png"
    ],
    "answer": "g_P_0_0_2.png",
    "rationale": "絶対値の中身 $x$ の符号で場合分けをします。<br>(i) $x \\geqq 0$ のとき<br>$y=x+x=2x$<br>(ii) $x < 0$ のとき<br>$y=-x+x=0$<br>よって，$x < 0$ では $x$ 軸に重なり（$y=0$），$x \\geqq 0$ で傾き $2$ の直線となるグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x) + x)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x| - x$$",
    "options": [
      "g_P_0_n2_0.png",
      "g_P_0_0_2.png",
      "g_M_0_0.png",
      "g_V_0_0.png"
    ],
    "answer": "g_P_0_n2_0.png",
    "rationale": "絶対値の中身 $x$ の符号で場合分けをします。<br>(i) $x \\geqq 0$ のとき<br>$y=x-x=0$<br>(ii) $x < 0$ のとき<br>$y=-x-x=-2x$<br>よって，$x \\geqq 0$ では $x$ 軸に重なり（$y=0$），$x < 0$ で傾き $-2$ の直線となるグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x) - x)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = 3x + |x|$$",
    "options": [
      "g_P_0_2_4.png",
      "g_P_0_4_2.png",
      "g_V_0_0_k2.png",
      "g_P_0_1_3.png"
    ],
    "answer": "g_P_0_2_4.png",
    "rationale": "絶対値の中身 $x$ の符号で場合分けをします。<br>(i) $x \\geqq 0$ のとき<br>$y=3x+x=4x$<br>(ii) $x < 0$ のとき<br>$y=3x-x=2x$<br>よって，原点で折れ曲がり，右側は傾き $4$，左側は傾き $2$ となるグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (3 * x + Math.abs(x))) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = 3x - |x|$$",
    "options": [
      "g_P_0_4_2.png",
      "g_P_0_2_4.png",
      "g_V_0_0_k2.png",
      "g_P_0_1_3.png"
    ],
    "answer": "g_P_0_4_2.png",
    "rationale": "絶対値の中身 $x$ の符号で場合分けをします。<br>(i) $x \\geqq 0$ のとき<br>$y=3x-x=2x$<br>(ii) $x < 0$ のとき<br>$y=3x-(-x)=4x$<br>よって，原点で折れ曲がり，右側は傾き $2$，左側は傾き $4$ となるグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (3 * x - Math.abs(x))) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = 2|x-1| + x - 1$$",
    "options": [
      "g_P_1_n1_3.png",
      "g_V_1_0.png",
      "g_V_1_1.png",
      "g_P_0_1_3.png"
    ],
    "answer": "g_P_1_n1_3.png",
    "rationale": "絶対値の中身 $x-1$ の符号で場合分けをします。<br>(i) $x-1 \\geqq 0$ つまり $x \\geqq 1$ のとき<br>$y=2(x-1)+x-1=3x-3$<br>(ii) $x-1 < 0$ つまり $x < 1$ のとき<br>$y=-2(x-1)+x-1=-x+1$<br>よって，$(1,0)$ で折れ曲がり，右側の傾きが $3$，左側の傾きが $-1$ となるグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 1, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (2 * Math.abs(x - 1) + x - 1)) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = x + |x| + x$$",
    "options": [
      "g_P_0_1_3.png",
      "g_V_0_0_k2.png",
      "g_P_0_0_2.png",
      "g_V_0_0.png"
    ],
    "answer": "g_P_0_1_3.png",
    "rationale": "式を $y = |x| + 2x$ と整理してから場合分けをします。<br>(i) $x \\geqq 0$ のとき<br>$y=x+2x=3x$<br>(ii) $x < 0$ のとき<br>$y=-x+2x=x$<br>よって，原点で折れ曲がり，右側の傾きが $3$，左側の傾きが $1$ となるグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x) + 2 * x)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x| + |x|$$",
    "options": [
      "g_V_0_0_k2.png",
      "g_V_0_0.png",
      "g_P_0_0_2.png",
      "g_M_0_0.png"
    ],
    "answer": "g_V_0_0_k2.png",
    "rationale": "式は $y=2|x|$ と同じです。<br>(i) $x \\geqq 0$ のとき $y=2x$<br>(ii) $x < 0$ のとき $y=-2x$<br>よって，原点を頂点とする，傾き $\\pm 2$ のV字型グラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (2 * Math.abs(x))) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = \\\\sqrt{x^2}$$",
    "options": [
      "g_V_0_0.png",
      "g_P_0_0_2.png",
      "g_M_0_0.png",
      "g_V_1_0.png"
    ],
    "answer": "g_V_0_0.png",
    "rationale": "定義として $\\sqrt{x^2} = |x|$ です。よって $y=|x|$ のグラフを描きます。<br>(i) $x \\geqq 0$ のとき $y=x$<br>(ii) $x < 0$ のとき $y=-x$<br>したがって，原点を頂点とする標準的なV字型グラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - Math.abs(x)) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x-1| + |x-3|$$",
    "options": [
      "g_U_1_3_2.png",
      "g_Z_1_3_n2_2.png",
      "g_V_2_0.png",
      "g_V_1_1.png"
    ],
    "answer": "g_U_1_3_2.png",
    "rationale": "絶対値の中身が $0$ になる $x=1$ と $x=3$ を境目にして，3つの区間に場合分けします。<br>(i) $x < 1$ のとき<br>$y=-(x-1)-(x-3)=-2x+4$<br>(ii) $1 \\leqq x < 3$ のとき<br>$y=(x-1)-(x-3)=2$ （定数）<br>(iii) $x \\geqq 3$ のとき<br>$y=(x-1)+(x-3)=2x-4$<br>よって，$x=1$ と $3$ の間で底が平らになる（$y=2$）グラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [
        { x: 1, y: 2 },
        { x: 3, y: 2 }
      ],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x - 1) + Math.abs(x - 3))) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x+1| + |x-1|$$",
    "options": [
      "g_U_n1_1_2.png",
      "g_Z_n1_1_n2_2.png",
      "g_V_0_0.png",
      "g_V_0_1.png"
    ],
    "answer": "g_U_n1_1_2.png",
    "rationale": "$x=-1$ と $x=1$ を境目に場合分けします。<br>(i) $x < -1$ のとき<br>$y=-(x+1)-(x-1)=-2x$<br>(ii) $-1 \\leqq x < 1$ のとき<br>$y=(x+1)-(x-1)=2$<br>(iii) $x \\geqq 1$ のとき<br>$y=(x+1)+(x-1)=2x$<br>よって，$x=-1$ と $1$ の間で底が平らになるグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [
        { x: -1, y: 2 },
        { x: 1, y: 2 }
      ],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x + 1) + Math.abs(x - 1))) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x| + |x-2|$$",
    "options": [
      "g_U_0_2_2.png",
      "g_U_n2_0_2.png",
      "g_V_1_0.png",
      "g_Z_n2_0_n2_2.png"
    ],
    "answer": "g_U_0_2_2.png",
    "rationale": "$x=0$ と $x=2$ を境目に場合分けします。<br>(i) $x < 0$ のとき<br>$y=-x-(x-2)=-2x+2$<br>(ii) $0 \\leqq x < 2$ のとき<br>$y=x-(x-2)=2$<br>(iii) $x \\geqq 2$ のとき<br>$y=x+(x-2)=2x-2$<br>よって，$x=0$ と $2$ の間で底が平らになるグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [
        { x: 0, y: 2 },
        { x: 2, y: 2 }
      ],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x) + Math.abs(x - 2))) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x+2| + |x|$$",
    "options": [
      "g_U_n2_0_2.png",
      "g_U_0_2_2.png",
      "g_Z_n2_0_n2_2.png",
      "g_V_n1_0.png"
    ],
    "answer": "g_U_n2_0_2.png",
    "rationale": "$x=-2$ と $x=0$ を境目に場合分けします。<br>(i) $x < -2$ のとき<br>$y=-(x+2)-x=-2x-2$<br>(ii) $-2 \\leqq x < 0$ のとき<br>$y=(x+2)-x=2$<br>(iii) $x \\geqq 0$ のとき<br>$y=(x+2)+x=2x+2$<br>よって，$x=-2$ と $0$ の間で底が平らになるグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [
        { x: -2, y: 2 },
        { x: 0, y: 2 }
      ],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x + 2) + Math.abs(x))) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x-3| + |x-1|$$",
    "options": [
      "g_U_1_3_2.png",
      "g_U_n1_1_2.png",
      "g_V_2_0.png",
      "g_Z_1_3_n2_2.png"
    ],
    "answer": "g_U_1_3_2.png",
    "rationale": "$y = |x-1| + |x-3|$ と順序を入れ替えて考えます。<br>$x=1$ と $x=3$ を境目に場合分けします。<br>(i) $x < 1$ のとき $y=-2x+4$<br>(ii) $1 \\leqq x < 3$ のとき $y=(x-1)-(x-3)=2$<br>(iii) $x \\geqq 3$ のとき $y=2x-4$<br>よって，$x=1$ と $3$ の間で底が平らになるグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [
        { x: 1, y: 2 },
        { x: 3, y: 2 }
      ],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x - 3) + Math.abs(x - 1))) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x-1| + |x+1|$$",
    "options": [
      "g_U_n1_1_2.png",
      "g_U_0_2_2.png",
      "g_V_0_0.png",
      "g_Z_n1_1_n2_2.png"
    ],
    "answer": "g_U_n1_1_2.png",
    "rationale": "$y = |x+1| + |x-1|$ と整理し，$x=-1$ と $x=1$ を境目に場合分けします。<br>(i) $x < -1$ のとき $y=-2x$<br>(ii) $-1 \\leqq x < 1$ のとき $y=(x+1)-(x-1)=2$<br>(iii) $x \\geqq 1$ のとき $y=2x$<br>よって，$x=-1$ と $1$ の間で底が平らになるグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [
        { x: -1, y: 2 },
        { x: 1, y: 2 }
      ],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x - 1) + Math.abs(x + 1))) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x-2| + |x|$$",
    "options": [
      "g_U_0_2_2.png",
      "g_U_n2_0_2.png",
      "g_V_1_0.png",
      "g_Z_n2_0_n2_2.png"
    ],
    "answer": "g_U_0_2_2.png",
    "rationale": "$y = |x| + |x-2|$ と整理し，$x=0$ と $x=2$ を境目に場合分けします。<br>(i) $x < 0$ のとき $y=-2x+2$<br>(ii) $0 \\leqq x < 2$ のとき $y=x-(x-2)=2$<br>(iii) $x \\geqq 2$ のとき $y=2x-2$<br>よって，$x=0$ と $2$ の間で底が平らになるグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [
        { x: 0, y: 2 },
        { x: 2, y: 2 }
      ],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x - 2) + Math.abs(x))) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x| + |x+2|$$",
    "options": [
      "g_U_n2_0_2.png",
      "g_U_0_2_2.png",
      "g_V_n1_0.png",
      "g_Z_n2_0_n2_2.png"
    ],
    "answer": "g_U_n2_0_2.png",
    "rationale": "$y = |x+2| + |x|$ と整理し，$x=-2$ と $x=0$ を境目に場合分けします。<br>(i) $x < -2$ のとき $y=-2x-2$<br>(ii) $-2 \\leqq x < 0$ のとき $y=(x+2)-x=2$<br>(iii) $x \\geqq 0$ のとき $y=2x+2$<br>よって，$x=-2$ と $0$ の間で底が平らになるグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [
        { x: -2, y: 2 },
        { x: 0, y: 2 }
      ],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x) + Math.abs(x + 2))) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x-1| - |x-3|$$",
    "options": [
      "g_Z_1_3_n2_2.png",
      "g_U_1_3_2.png",
      "g_V_2_0.png",
      "g_M_1_0.png"
    ],
    "answer": "g_Z_1_3_n2_2.png",
    "rationale": "$x=1$ と $x=3$ を境目に場合分けします。<br>(i) $x < 1$ のとき<br>$y=-(x-1)-(-(x-3))=-2$（定数）<br>(ii) $1 \\leqq x < 3$ のとき<br>$y=(x-1)-(-(x-3))=2x-4$（傾き2）<br>(iii) $x \\geqq 3$ のとき<br>$y=(x-1)-(x-3)=2$（定数）<br>よって，左側で $y=-2$，右側で $y=2$ となり，その間を斜めに結ぶZ型のグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [
        { x: 1, y: -2 },
        { x: 3, y: 2 }
      ],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x - 1) - Math.abs(x - 3))) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x+1| - |x-1|$$",
    "options": [
      "g_Z_n1_1_n2_2.png",
      "g_U_n1_1_2.png",
      "g_V_0_0.png",
      "g_M_0_0.png"
    ],
    "answer": "g_Z_n1_1_n2_2.png",
    "rationale": "$x=-1$ と $x=1$ を境目に場合分けします。<br>(i) $x < -1$ のとき<br>$y=-(x+1)-(-(x-1))=-2$<br>(ii) $-1 \\leqq x < 1$ のとき<br>$y=(x+1)-(-(x-1))=2x$<br>(iii) $x \\geqq 1$ のとき<br>$y=(x+1)-(x-1)=2$<br>よって，左側で $y=-2$，右側で $y=2$ となるZ型のグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [
        { x: -1, y: -2 },
        { x: 1, y: 2 }
      ],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x + 1) - Math.abs(x - 1))) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |x+2| - |x|$$",
    "options": [
      "g_Z_n2_0_n2_2.png",
      "g_U_n2_0_2.png",
      "g_V_n1_0.png",
      "g_V_0_0.png"
    ],
    "answer": "g_Z_n2_0_n2_2.png",
    "rationale": "$x=-2$ と $x=0$ を境目に場合分けします。<br>(i) $x < -2$ のとき<br>$y=-(x+2)-(-x)=-2$<br>(ii) $-2 \\leqq x < 0$ のとき<br>$y=(x+2)-(-x)=2x+2$<br>(iii) $x \\geqq 0$ のとき<br>$y=(x+2)-x=2$<br>よって，左側で $y=-2$，右側で $y=2$ となるZ型のグラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [
        { x: -2, y: -2 },
        { x: 0, y: 2 }
      ],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(x + 2) - Math.abs(x))) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = -(|x-3| - |x-1|)$$",
    "options": [
      "g_Z_1_3_n2_2.png",
      "g_U_1_3_2.png",
      "g_V_2_0.png",
      "g_Z_n1_1_n2_2.png"
    ],
    "answer": "g_Z_1_3_n2_2.png",
    "rationale": "マイナスを展開して $y = |x-1| - |x-3|$ と変形し，$x=1$ と $x=3$ を境目に場合分けします。<br>(i) $x < 1$ のとき $y=-2$<br>(ii) $1 \\leqq x < 3$ のとき $y=2x-4$<br>(iii) $x \\geqq 3$ のとき $y=2$<br>よって，左側が低く右側が高いZ型のグラフ（選択肢1）が正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [
        { x: 1, y: -2 },
        { x: 3, y: 2 }
      ],
      "isValidPoint": (x, y) => Math.abs(y - (-(Math.abs(x - 3) - Math.abs(x - 1)))) < 0.3
    },
    "answerIndex": 0
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |-x-2|$$",
    "options": [
      "g_V_n2_0.png",
      "g_V_2_0.png",
      "g_V_n1_0.png",
      "g_M_n2_0.png"
    ],
    "answer": "g_V_n2_0.png",
    "rationale": "$|-x-2|=|-(x+2)|=|x+2|$ と変形し，中身の $x+2$ で場合分けをします。<br>(i) $x \\geqq -2$ のとき $y=x+2$<br>(ii) $x < -2$ のとき $y=-x-2$<br>よって，頂点 $(-2, 0)$ のV字型グラフが正解です。<br><br>【別解】<br>$y=|x|$ を $x$ 軸方向に $-2$ 平行移動したものと考えてもよいです。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: -2, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - Math.abs(-x - 2)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = \\sqrt{4x^2}$$",
    "options": [
      "g_V_0_0_k2.png",
      "g_V_0_0.png",
      "g_M_0_0.png",
      "g_M_0_0_k2.png"
    ],
    "answer": "g_V_0_0_k2.png",
    "rationale": "$\\sqrt{4x^2} = \\sqrt{(2x)^2} = |2x|$ です。<br>中身の $2x$ で場合分けをします。<br>(i) $x \\geqq 0$ のとき $y=2x$<br>(ii) $x < 0$ のとき $y=-2x$<br>よって，原点を頂点とする，傾き $\\pm 2$ の細いV字型グラフが正解です。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: 0, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - Math.abs(2 * x)) < 0.3
    }
  },
  {
    "question": "次の関数のグラフをかけ。<br>$$y = |3x+3| - |x+1|$$",
    "options": [
      "g_V_n1_0_k2.png",
      "g_V_n1_0.png",
      "g_V_0_0.png",
      "g_V_1_0_k2.png"
    ],
    "answer": "g_V_n1_0_k2.png",
    "rationale": "$y = 3|x+1| - |x+1| = 2|x+1|$ と簡単にできます。<br>中身の $x+1$ で場合分けをします。<br>(i) $x \\geqq -1$ のとき $y=2(x+1)=2x+2$<br>(ii) $x < -1$ のとき $y=-2(x+1)=-2x-2$<br>よって，頂点が $(-1, 0)$ で傾きが $\\pm 2$ のV字型グラフを表します。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63157' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>",
    "graphTarget": {
      "requiredPoints": [{ x: -1, y: 0 }],
      "isValidPoint": (x, y) => Math.abs(y - (Math.abs(3 * x + 3) - Math.abs(x + 1))) < 0.3
    }
  }
];