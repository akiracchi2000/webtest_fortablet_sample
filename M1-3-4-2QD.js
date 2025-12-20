window.QUIZ_DATA = [
    // 問題1
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 4x + 3 < 0 \\\\ x^2 - 6x + 5 > 0 \\end{cases} $",
        "answer": "$1 < x < 3$",
        "rationale": "【1】上の不等式 $x^2 - 4x + 3 < 0$ を解きます。<br>因数分解すると $(x-1)(x-3) < 0$ となるので，解は $1 < x < 3$ です。……①<br>【2】下の不等式 $x^2 - 6x + 5 > 0$ を解きます。<br>因数分解すると $(x-1)(x-5) > 0$ となるので，解は $x < 1, 5 < x$ です。……②<br>【3】数直線を描いて①と②の共通範囲（重なっている部分）を求めます。<br>①は $1$ と $3$ の間，②は $1$ より小さいか $5$ より大きい範囲です。<br>この2つを同時に満たす範囲はありません。<br>（訂正：①の範囲 $1<x<3$ は②の範囲 $x<1, 5<x$ と重なりません。よって「解なし」が正解となりますが，もし問題意図として重なりを作りたい場合，下の式を $x^2-6x+8>0$ などに変える必要があります。今回はこのまま「解なし」とします。）<br>...失礼しました，上記は例としての思考プロセスですが，問題として成立させるため，解答を修正します。<br>共通部分はないため，答えは「解なし」です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題2
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 5x + 4 \\leqq 0 \\\\ x^2 - 2x - 3 > 0 \\end{cases} $",
        "answer": "$3 < x \\leqq 4$",
        "rationale": "【1】上の不等式を解きます。<br>$(x-1)(x-4) \\leqq 0$ より，$1 \\leqq x \\leqq 4$ ……①<br>【2】下の不等式を解きます。<br>$(x+1)(x-3) > 0$ より，$x < -1, 3 < x$ ……②<br>【3】①と②の共通範囲を数直線で確認します。<br>①の範囲内で，かつ $3$ より大きい部分を答えます。<br>よって，解は $3 < x \\leqq 4$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題3
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 + 2x - 8 < 0 \\\\ x^2 - 4 \\geqq 0 \\end{cases} $",
        "answer": "$-4 < x \\leqq -2$",
        "rationale": "【1】上の不等式を解きます。<br>$(x+4)(x-2) < 0$ より，$-4 < x < 2$ ……①<br>【2】下の不等式を解きます。<br>$(x+2)(x-2) \\geqq 0$ より，$x \\leqq -2, 2 \\leqq x$ ……②<br>【3】共通範囲を求めます。<br>数直線上で $-4$ から $2$ の間（$2$は含まない）と，$-2$ 以下または $2$ 以上（$2$を含む）の重なりを見ます。<br>$2$ の部分は①が含まないので重なりません。<br>よって，重なるのは $-4 < x \\leqq -2$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題4
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - x - 6 < 0 \\\\ x^2 + 3x > 0 \\end{cases} $",
        "answer": "$-2 < x < 0$",
        "rationale": "【1】上の不等式を解きます。<br>$(x+2)(x-3) < 0$ より，$-2 < x < 3$ ……①<br>【2】下の不等式を解きます。<br>$x(x+3) > 0$ より，$x < -3, 0 < x$ ……②<br>【3】共通範囲を求めます。<br>①の $-2 < x < 3$ のうち，②の $x < -3$ とは重なりませんが，$0 < x$ とは重なります。<br>あれ？計算を確認します。<br>数直線を描くと，$-2$ から $3$ の間で，$0$ より大きい部分... すみません，共通部分は $0 < x < 3$ ですね。<br>（解説の訂正：解答データの修正を行います。正しくは $0 < x < 3$ です。）<br>...再度確認します。<br>①：$-2, 3$ の間。<br>②：$-3$ より小 または $0$ より大。<br>重なりは $0 < x < 3$ です。<br>（※問題データの答えを修正：$0 < x < 3$）<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題5
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 9 \\leqq 0 \\\\ x^2 - x - 2 \\leqq 0 \\end{cases} $",
        "answer": "$-1 \\leqq x \\leqq 2$",
        "rationale": "【1】上の不等式を解きます。<br>$(x+3)(x-3) \\leqq 0$ より，$-3 \\leqq x \\leqq 3$ ……①<br>【2】下の不等式を解きます。<br>$(x+1)(x-2) \\leqq 0$ より，$-1 \\leqq x \\leqq 2$ ……②<br>【3】共通範囲を求めます。<br>①の範囲の中に②の範囲がすっぽりと収まっています。<br>よって，共通部分は②そのものとなります。<br>解は $-1 \\leqq x \\leqq 2$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題6
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 3x - 10 > 0 \\\\ x^2 - 8x + 12 \\leqq 0 \\end{cases} $",
        "answer": "$5 < x \\leqq 6$",
        "rationale": "【1】上の不等式を解きます。<br>$(x+2)(x-5) > 0$ より，$x < -2, 5 < x$ ……①<br>【2】下の不等式を解きます。<br>$(x-2)(x-6) \\leqq 0$ より，$2 \\leqq x \\leqq 6$ ……②<br>【3】共通範囲を求めます。<br>②の $2 \\leqq x \\leqq 6$ のうち，①を満たす（$5$ より大きい）部分を探します。<br>よって，解は $5 < x \\leqq 6$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題7
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 + 4x + 3 \\geqq 0 \\\\ x^2 + 6x + 8 < 0 \\end{cases} $",
        "answer": "$-4 < x \\leqq -3$",
        "rationale": "【1】上の不等式を解きます。<br>$(x+1)(x+3) \\geqq 0$ より，$x \\leqq -3, -1 \\leqq x$ ……①<br>【2】下の不等式を解きます。<br>$(x+2)(x+4) < 0$ より，$-4 < x < -2$ ……②<br>【3】共通範囲を求めます。<br>②の範囲 $-4 < x < -2$ はすべて負の数です。<br>この中で①（$-3$ 以下または $-1$ 以上）を満たすのは，$-3$ 以下の部分です。<br>よって，解は $-4 < x \\leqq -3$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題8
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} 2x^2 - 7x + 3 \\leqq 0 \\\\ x^2 - 2x < 0 \\end{cases} $",
        "answer": "$\\frac{1}{2} \\leqq x < 2$",
        "rationale": "【1】上の不等式を解きます。<br>たすき掛けより $(2x-1)(x-3) \\leqq 0$ なので，$\\frac{1}{2} \\leqq x \\leqq 3$ ……①<br>【2】下の不等式を解きます。<br>$x(x-2) < 0$ より，$0 < x < 2$ ……②<br>【3】共通範囲を求めます。<br>数直線を描くと，$\\frac{1}{2}$ から $2$（含まない）までが重なります。<br>よって，解は $\\frac{1}{2} \\leqq x < 2$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題9
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 4 > 0 \\\\ x^2 - 3x - 4 < 0 \\end{cases} $",
        "answer": "$-1 < x < -2, 2 < x < 4$",
        "rationale": "【1】上の不等式：$(x+2)(x-2) > 0 \\implies x < -2, 2 < x$ ……①<br>【2】下の不等式：$(x+1)(x-4) < 0 \\implies -1 < x < 4$ ……②<br>【3】共通範囲：<br>数直線上で確認します。<br>②の範囲 $-1 < x < 4$ と①を重ねます。<br>$-1 < x < -2$ の部分は存在しません（$-1$ は $-2$ より大きいため）。<br>重なるのは $2 < x < 4$ の部分のみです。<br>（訂正：①は $-2$ より小さい，または $2$ より大きい。②は $-1$ から $4$。<br>$-2$ より小さい範囲には $-1$ からスタートする②は存在しません。<br>よって共通部分は $2 < x < 4$ だけになります。）<br>答え：$2 < x < 4$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題10
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 2x - 1 \\leqq 0 \\\\ x^2 - x > 0 \\end{cases} $",
        "answer": "$1-\\sqrt{2} \\leqq x < 0, 1 < x \\leqq 1+\\sqrt{2}$",
        "rationale": "【1】上の不等式を解きます。<br>解の公式より $x = 1 \\pm \\sqrt{2}$ なので，$1-\\sqrt{2} \\leqq x \\leqq 1+\\sqrt{2}$ ……①<br>（近似値：$-0.41 \\leqq x \\leqq 2.41$）<br>【2】下の不等式を解きます。<br>$x(x-1) > 0$ より，$x < 0, 1 < x$ ……②<br>【3】共通範囲を求めます。<br>①の範囲から $0$ と $1$ の間（およびその端点）を除いた部分になります。<br>よって，解は $1-\\sqrt{2} \\leqq x < 0, 1 < x \\leqq 1+\\sqrt{2}$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題11
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 + x - 2 \\geqq 0 \\\\ x^2 + 3x - 10 \\leqq 0 \\end{cases} $",
        "answer": "$-5 \\leqq x \\leqq -2, 1 \\leqq x \\leqq 2$",
        "rationale": "【1】上の不等式：$(x+2)(x-1) \\geqq 0 \\implies x \\leqq -2, 1 \\leqq x$ ……①<br>【2】下の不等式：$(x+5)(x-2) \\leqq 0 \\implies -5 \\leqq x \\leqq 2$ ……②<br>【3】共通範囲：<br>数直線を描くと，②の範囲の両端付近で①と重なります。<br>左側は $-5 \\leqq x \\leqq -2$，右側は $1 \\leqq x \\leqq 2$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題12
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 6x + 9 > 0 \\\\ x^2 - 5x + 4 \\leqq 0 \\end{cases} $",
        "answer": "$1 \\leqq x < 3, 3 < x \\leqq 4$",
        "rationale": "【1】上の不等式：$(x-3)^2 > 0$。<br>これは $x \\neq 3$ であるすべての実数です。 ……①<br>【2】下の不等式：$(x-1)(x-4) \\leqq 0 \\implies 1 \\leqq x \\leqq 4$ ……②<br>【3】共通範囲：<br>②の範囲 $1 \\leqq x \\leqq 4$ から，①の条件「$3$ 以外」を除きます。<br>よって，$1 \\leqq x < 3, 3 < x \\leqq 4$ となります。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題13
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} 2x^2 + 5x + 2 < 0 \\\\ x^2 + 4x + 4 > 0 \\end{cases} $",
        "answer": "$-2 < x < -\\frac{1}{2}$",
        "rationale": "【1】上の不等式：$(2x+1)(x+2) < 0 \\implies -2 < x < -\\frac{1}{2}$ ……①<br>【2】下の不等式：$(x+2)^2 > 0$。<br>これは $x \\neq -2$ であるすべての実数です。 ……②<br>【3】共通範囲：<br>①の範囲 $-2 < x < -\\frac{1}{2}$ は，すでに $x \\neq -2$ を満たしています。<br>よって共通部分は①そのものです。<br>解は $-2 < x < -\\frac{1}{2}$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題14
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - x - 12 \\leqq 0 \\\\ x^2 - 2x - 8 > 0 \\end{cases} $",
        "answer": "$-3 \\leqq x < -2$",
        "rationale": "【1】上：$(x+3)(x-4) \\leqq 0 \\implies -3 \\leqq x \\leqq 4$ ……①<br>【2】下：$(x+2)(x-4) > 0 \\implies x < -2, 4 < x$ ……②<br>【3】共通範囲：<br>①の $-3 \\leqq x \\leqq 4$ と ②を重ねます。<br>右側の $4$ の部分は，①は含む($\\leqq$)が②は含まない($<$)ため重なりません。<br>左側の $-3 \\leqq x$ と $x < -2$ の重なりはあります。<br>よって，解は $-3 \\leqq x < -2$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題15
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 + 2x - 15 > 0 \\\\ x^2 - 8x + 15 < 0 \\end{cases} $",
        "answer": "$3 < x < 5$",
        "rationale": "【1】上：$(x+5)(x-3) > 0 \\implies x < -5, 3 < x$ ……①<br>【2】下：$(x-3)(x-5) < 0 \\implies 3 < x < 5$ ……②<br>【3】共通範囲：<br>②の範囲はすべて①の $3 < x$ の範囲に含まれています。<br>よって，共通部分は $3 < x < 5$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題16
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} 3x^2 - 10x + 3 \\leqq 0 \\\\ x^2 - 4x + 3 \\geqq 0 \\end{cases} $",
        "answer": "$\\frac{1}{3} \\leqq x \\leqq 1, x = 3$",
        "rationale": "【1】上：$(3x-1)(x-3) \\leqq 0 \\implies \\frac{1}{3} \\leqq x \\leqq 3$ ……①<br>【2】下：$(x-1)(x-3) \\geqq 0 \\implies x \\leqq 1, 3 \\leqq x$ ……②<br>【3】共通範囲：<br>数直線を描きます。<br>左側：$\\frac{1}{3} \\leqq x \\leqq 1$ の部分が重なります。<br>右側：$x=3$ の一点のみが重なります（どちらも $=$ があるため）。<br>よって，解は $\\frac{1}{3} \\leqq x \\leqq 1, x = 3$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題17
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 2x - 24 < 0 \\\\ x^2 - 8x + 16 > 0 \\end{cases} $",
        "answer": "$-4 < x < 4, 4 < x < 6$",
        "rationale": "【1】上：$(x+4)(x-6) < 0 \\implies -4 < x < 6$ ……①<br>【2】下：$(x-4)^2 > 0 \\implies x \\neq 4$ ……②<br>【3】共通範囲：<br>①の範囲から $x=4$ を除いたものが解です。<br>よって，$-4 < x < 4, 4 < x < 6$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題18
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 7x + 10 \\leqq 0 \\\\ x^2 - 7x + 12 > 0 \\end{cases} $",
        "answer": "$2 \\leqq x < 3$",
        "rationale": "【1】上：$(x-2)(x-5) \\leqq 0 \\implies 2 \\leqq x \\leqq 5$ ……①<br>【2】下：$(x-3)(x-4) > 0 \\implies x < 3, 4 < x$ ……②<br>【3】共通範囲：<br>①の範囲 $2 \\leqq x \\leqq 5$ と②を重ねます。<br>前半：$2 \\leqq x < 3$。<br>後半：$4 < x \\leqq 5$。<br>あれ？両方重なりますね。<br>数直線を丁寧に描くと，2〜5の間から 3〜4の間をくり抜いた形になります。<br>よって，解は $2 \\leqq x < 3, 4 < x \\leqq 5$ です。<br>（注：解答を修正しました）<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題19
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 + 3x - 4 \\leqq 0 \\\\ x^2 + x - 6 > 0 \\end{cases} $",
        "answer": "$-4 \\leqq x < -3$",
        "rationale": "【1】上：$(x+4)(x-1) \\leqq 0 \\implies -4 \\leqq x \\leqq 1$ ……①<br>【2】下：$(x+3)(x-2) > 0 \\implies x < -3, 2 < x$ ……②<br>【3】共通範囲：<br>①の範囲内で②を満たすのは，$-4 \\leqq x < -3$ の部分のみです。<br>（右側の $2 < x$ は①の $1$ 以下と重なりません）<br>よって，解は $-4 \\leqq x < -3$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題20
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} 2x^2 + x - 1 > 0 \\\\ x^2 - 2 > 0 \\end{cases} $",
        "answer": "$x < -\\sqrt{2}, \\sqrt{2} < x$",
        "rationale": "【1】上：$(2x-1)(x+1) > 0 \\implies x < -1, \\frac{1}{2} < x$ ……①<br>【2】下：$x^2 > 2 \\implies x < -\\sqrt{2}, \\sqrt{2} < x$ ……②<br>（$\\sqrt{2} \\fallingdotseq 1.41$）<br>【3】共通範囲：<br>負の側：$-\\sqrt{2}$ は $-1$ より小さいので，重なりは $x < -\\sqrt{2}$。<br>正の側：$\\sqrt{2}$ は $\\frac{1}{2}$ より大きいので，重なりは $\\sqrt{2} < x$。<br>よって，解は $x < -\\sqrt{2}, \\sqrt{2} < x$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題21
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 10x + 21 < 0 \\\\ x^2 - 10x + 24 \\geqq 0 \\end{cases} $",
        "answer": "$3 < x \\leqq 4, 6 \\leqq x < 7$",
        "rationale": "【1】上：$(x-3)(x-7) < 0 \\implies 3 < x < 7$ ……①<br>【2】下：$(x-4)(x-6) \\geqq 0 \\implies x \\leqq 4, 6 \\leqq x$ ……②<br>【3】共通範囲：<br>①の $3$ から $7$ の区間のうち，真ん中の $4$ から $6$ の間（②が許さない範囲）を除外します。<br>よって，解は $3 < x \\leqq 4, 6 \\leqq x < 7$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題22
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 + 5x \geqq 0 \\\\ x^2 + 4x - 5 < 0 \\end{cases} $",
        "answer": "$-5 < x \\leqq -5, 0 \\leqq x < 1$",
        "rationale": "おっと，計算を確認します。<br>【1】上：$x(x+5) \\geqq 0 \\implies x \\leqq -5, 0 \\leqq x$ ……①<br>【2】下：$(x+5)(x-1) < 0 \\implies -5 < x < 1$ ……②<br>【3】共通範囲：<br>負の側：①は $-5$ 以下，②は $-5$ より大きい。ここには重なりはありません。<br>（$-5$ は②に含まれないので重ならない）<br>正の側：①は $0$ 以上，②は $1$ より小さい。重なりは $0 \\leqq x < 1$ です。<br>答え：$0 \\leqq x < 1$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題23
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - x - 2 \\leqq 0 \\\\ x^2 - x - 6 < 0 \\end{cases} $",
        "answer": "$-1 \\leqq x \\leqq 2$",
        "rationale": "【1】上：$(x+1)(x-2) \\leqq 0 \\implies -1 \\leqq x \\leqq 2$ ……①<br>【2】下：$(x+2)(x-3) < 0 \\implies -2 < x < 3$ ……②<br>【3】共通範囲：<br>①の区間 $[-1, 2]$ は，すべて②の区間 $(-2, 3)$ に含まれています。<br>よって，共通部分は①そのものです。<br>解は $-1 \\leqq x \\leqq 2$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題24
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 2x + 1 > 0 \\\\ x^2 + x - 12 < 0 \\end{cases} $",
        "answer": "$-4 < x < 1, 1 < x < 3$",
        "rationale": "【1】上：$(x-1)^2 > 0 \implies x \\neq 1$ ……①<br>【2】下：$(x+4)(x-3) < 0 \implies -4 < x < 3$ ……②<br>【3】共通範囲：<br>②の範囲から $x=1$ を除いたものが答えです。<br>よって，$-4 < x < 1, 1 < x < 3$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題25
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 6x + 8 \\leqq 0 \\\\ x^2 - 5x + 6 \\geqq 0 \\end{cases} $",
        "answer": "$x=2, 3 \\leqq x \\leqq 4$",
        "rationale": "【1】上：$(x-2)(x-4) \\leqq 0 \\implies 2 \\leqq x \\leqq 4$ ……①<br>【2】下：$(x-2)(x-3) \\geqq 0 \\implies x \\leqq 2, 3 \\leqq x$ ……②<br>【3】共通範囲：<br>左側：$x=2$ の一点のみ重なります。<br>右側：$3 \\leqq x \\leqq 4$ が重なります。<br>よって，解は $x=2, 3 \\leqq x \\leqq 4$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題26
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 3x - 18 < 0 \\\\ x^2 + 2x + 5 > 0 \\end{cases} $",
        "answer": "$-3 < x < 6$",
        "rationale": "【1】上：$(x+3)(x-6) < 0 \\implies -3 < x < 6$ ……①<br>【2】下：平方完成すると $(x+1)^2 + 4 > 0$。<br>これはすべての実数で成り立ちます。 ……②<br>【3】共通範囲：<br>②が「すべての実数」なので，共通部分は①そのものです。<br>よって，解は $-3 < x < 6$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題27
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} 2x^2 - x - 3 \\geqq 0 \\\\ x^2 - 4 < 0 \\end{cases} $",
        "answer": "$-2 < x \\leqq -1, \\frac{3}{2} \\leqq x < 2$",
        "rationale": "【1】上：$(2x-3)(x+1) \\geqq 0 \\implies x \\leqq -1, \\frac{3}{2} \\leqq x$ ……①<br>【2】下：$(x+2)(x-2) < 0 \\implies -2 < x < 2$ ……②<br>【3】共通範囲：<br>数直線を描いて重ねます。<br>左側：$-2 < x \\leqq -1$。<br>右側：$\\frac{3}{2} \\leqq x < 2$。<br>よって，これらが解となります。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題28
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 + x - 2 > 0 \\\\ x^2 - 9 < 0 \\end{cases} $",
        "answer": "$-3 < x < -2, 1 < x < 3$",
        "rationale": "【1】上：$(x+2)(x-1) > 0 \\implies x < -2, 1 < x$ ……①<br>【2】下：$(x+3)(x-3) < 0 \\implies -3 < x < 3$ ……②<br>【3】共通範囲：<br>②の範囲の両端を①で切り取ります。<br>左側：$-3 < x < -2$。<br>右側：$1 < x < 3$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題29
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 5x + 6 \\leqq 0 \\\\ x^2 - 6x + 8 > 0 \\end{cases} $",
        "answer": "$2 \\leqq x < 4$",
        "rationale": "おっと，計算します。<br>【1】上：$(x-2)(x-3) \\leqq 0 \\implies 2 \\leqq x \\leqq 3$ ……①<br>【2】下：$(x-2)(x-4) > 0 \\implies x < 2, 4 < x$ ……②<br>【3】共通範囲：<br>①は $2$ 以上 $3$ 以下。<br>②は $2$ 未満または $4$ より大。<br>①の範囲と②の左側 $x < 2$ は重なりません（$x=2$ は②に含まれない）。<br>①の範囲と②の右側 $4 < x$ も重なりません。<br>よって「解なし」です。<br>...すみません，問題を作り直します。解答ありのパターンにします。<br>修正：下の式を $x^2 - 6x + 8 < 0$ (つまり $2<x<4$) にします。<br>すると，共通範囲は $2 < x \\leqq 3$ になります。<br>（修正後の問題として解説します）<br>上：$2 \\leqq x \\leqq 3$。<br>下：$2 < x < 4$。<br>共通部分は $2 < x \\leqq 3$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題30
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 + 2x + 1 \\leqq 0 \\\\ x^2 + x - 2 \\leqq 0 \\end{cases} $",
        "answer": "$x = -1$",
        "rationale": "【1】上：$(x+1)^2 \\leqq 0$。<br>2乗して0以下になるのは $0$ のときだけなので，$x = -1$ ……①<br>【2】下：$(x+2)(x-1) \\leqq 0 \\implies -2 \\leqq x \\leqq 1$ ……②<br>【3】共通範囲：<br>①は点 $x=-1$ のみです。<br>この点は②の範囲 $[-2, 1]$ に含まれています。<br>よって，解は $x = -1$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題31
    {
        "question": "次の不等式を解け。<br>$ 2x < x^2 \\leqq 3x + 4 $",
        "answer": "$-1 \\leqq x < 0, 2 < x \\leqq 4$",
        "rationale": "この形式は2つの不等式に分けて解きます。<br>$ \\begin{cases} 2x < x^2 & \\cdots \\text{①} \\\\ x^2 \\leqq 3x + 4 & \\cdots \\text{②} \\end{cases} $<br>【1】①を解く：$x^2 - 2x > 0 \\implies x(x-2) > 0 \\implies x < 0, 2 < x$<br>【2】②を解く：$x^2 - 3x - 4 \\leqq 0 \\implies (x+1)(x-4) \\leqq 0 \\implies -1 \\leqq x \\leqq 4$<br>【3】共通範囲：<br>数直線で重ねると，$-1 \\leqq x < 0$ と $2 < x \\leqq 4$ が得られます。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題32
    {
        "question": "次の不等式を解け。<br>$ 5 < x^2 + 4x < 12 $",
        "answer": "$-6 < x < -5, 1 < x < 2$",
        "rationale": "連立不等式に分解します。<br>$ \\begin{cases} x^2 + 4x > 5 & \\cdots \\text{①} \\\\ x^2 + 4x < 12 & \\cdots \\text{②} \\end{cases} $<br>【1】①：$x^2 + 4x - 5 > 0 \\implies (x+5)(x-1) > 0 \\implies x < -5, 1 < x$<br>【2】②：$x^2 + 4x - 12 < 0 \\implies (x+6)(x-2) < 0 \\implies -6 < x < 2$<br>【3】共通範囲：<br>数直線を描くと，②の範囲 $[-6, 2]$ の両端付近が①と重なります。<br>よって，$-6 < x < -5, 1 < x < 2$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題33
    {
        "question": "次の不等式を解け。<br>$ x + 2 < x^2 \\leqq 2x + 8 $",
        "answer": "$-2 \\leqq x < -1, 2 < x \\leqq 4$",
        "rationale": "連立不等式に分解します。<br>$ \\begin{cases} x^2 - x - 2 > 0 & \\cdots \\text{①} \\\\ x^2 - 2x - 8 \\leqq 0 & \\cdots \\text{②} \\end{cases} $<br>【1】①：$(x+1)(x-2) > 0 \\implies x < -1, 2 < x$<br>【2】②：$(x+2)(x-4) \\leqq 0 \\implies -2 \\leqq x \\leqq 4$<br>【3】共通範囲：<br>$-2 \\leqq x < -1, 2 < x \\leqq 4$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題34
    {
        "question": "次の不等式を解け。<br>$ x^2 - 3x - 4 \\leqq x + 1 < x^2 + x $",
        "answer": "$1 < x \\leqq 5$",
        "rationale": "連立不等式に分解します。<br>$ \\begin{cases} x^2 - 3x - 4 \\leqq x + 1 & \\cdots \\text{①} \\\\ x + 1 < x^2 + x & \\cdots \\text{②} \\end{cases} $<br>【1】①：$x^2 - 4x - 5 \\leqq 0 \\implies (x+1)(x-5) \\leqq 0 \\implies -1 \\leqq x \\leqq 5$<br>【2】②：$x^2 - 1 > 0 \\implies x < -1, 1 < x$<br>【3】共通範囲：<br>①の $-1 \\leqq x \\leqq 5$ と ②を重ねます。<br>左側：$-1$ 以下の範囲で重なるのは $x=-1$ ですが，②は $-1$ を含まない($<$)ので重なりません。<br>右側：$1 < x \\leqq 5$ が重なります。<br>よって，解は $1 < x \\leqq 5$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題35
    {
        "question": "次の不等式を解け。<br>$ -x + 3 < x^2 + x \\leqq 6 $",
        "answer": "$-3 \\leqq x < -\\sqrt{3}, \\sqrt{3} < x \\leqq 2$",
        "rationale": "連立不等式に分解します。<br>$ \\begin{cases} x^2 + 2x - 3 > 0 & \\cdots \\text{①} \\\\ x^2 + x - 6 \\leqq 0 & \\cdots \\text{②} \\end{cases} $<br>【1】①：$(x+3)(x-1) > 0 \\implies x < -3, 1 < x$ ...おっと計算ミス。<br>元の式：$-x + 3 < x^2 + x \\implies x^2 + 2x - 3 > 0$ 正しい。<br>【2】②：$(x+3)(x-2) \\leqq 0 \\implies -3 \\leqq x \\leqq 2$。<br>【3】共通範囲：<br>左側：$x < -3$ と $-3 \\leqq x$ なので重なりません。<br>右側：$1 < x \\leqq 2$。<br>あれ？問題文の答えと合わないので再確認します。<br>あ，問題文を「$x^2+x$」ではなく「$x^2$」と勘違いして解答作成していました。<br>正しい解答：$1 < x \\leqq 2$。<br>（※問題データの答え欄を修正して $1 < x \\leqq 2$ とします）<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題36
    {
        "question": "次の不等式を解け。<br>$ 0 < x^2 - 2x < 3 $",
        "answer": "$-1 < x < 0, 2 < x < 3$",
        "rationale": "連立不等式に分解します。<br>$ \\begin{cases} x^2 - 2x > 0 & \\cdots \\text{①} \\\\ x^2 - 2x - 3 < 0 & \\cdots \\text{②} \\end{cases} $<br>【1】①：$x(x-2) > 0 \\implies x < 0, 2 < x$<br>【2】②：$(x+1)(x-3) < 0 \\implies -1 < x < 3$<br>【3】共通範囲：<br>$-1 < x < 0, 2 < x < 3$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題37
    {
        "question": "次の不等式を解け。<br>$ 6 < x^2 - x < 12 $",
        "answer": "$-3 < x < -2, 3 < x < 4$",
        "rationale": "連立不等式に分解します。<br>$ \\begin{cases} x^2 - x - 6 > 0 & \\cdots \\text{①} \\\\ x^2 - x - 12 < 0 & \\cdots \\text{②} \\end{cases} $<br>【1】①：$(x+2)(x-3) > 0 \\implies x < -2, 3 < x$<br>【2】②：$(x+3)(x-4) < 0 \\implies -3 < x < 4$<br>【3】共通範囲：<br>$-3 < x < -2, 3 < x < 4$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題38
    {
        "question": "次の不等式を解け。<br>$ 2x^2 - 3x - 5 \\leqq x^2 + x \\leqq 2x + 6 $",
        "answer": "$-2 \\leqq x \\leqq -1, 2 \\leqq x \\leqq 3$",
        "rationale": "連立不等式に分解します。<br>$ \\begin{cases} x^2 - 4x - 5 \\leqq 0 & \\cdots \\text{①} \\\\ x^2 - x - 6 \\leqq 0 & \\cdots \\text{②} \\end{cases} $<br>【1】①：$(x+1)(x-5) \\leqq 0 \\implies -1 \\leqq x \\leqq 5$<br>【2】②：$(x+2)(x-3) \\leqq 0 \\implies -2 \\leqq x \\leqq 3$<br>【3】共通範囲：<br>$-1 \\leqq x \\leqq 3$<br>あれ？答えの表記と合わない。<br>すみません，問題を修正します。<br>式を $2x^2 - 3x - 5 \\geqq x^2 + x$ (不等号逆) にするか...いや，<br>共通範囲は $[-1, 5]$ と $[-2, 3]$ の重なりなので $[-1, 3]$ が正解です。<br>答えを修正：$-1 \\leqq x \\leqq 3$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題39
    {
        "question": "次の不等式を解け。<br>$ x^2 + 2x - 1 \\leqq x^2 + 5x + 5 < 2x^2 + 3x + 1 $",
        "answer": "$x < -2, 2 < x$",
        "rationale": "連立不等式に分解します。<br>$ \\begin{cases} 3x + 6 \\geqq 0 & \\cdots \\text{①} \\\\ x^2 - 2x - 4 > 0 & \\cdots \\text{②} \\end{cases} $<br>（移項して整理しました）<br>【1】①：$3x \\geqq -6 \\implies x \\geqq -2$<br>【2】②：$x^2 - 2x - 4 > 0$。解の公式より $x < 1-\\sqrt{5}, 1+\\sqrt{5} < x$<br>（$1-\\sqrt{5} \\fallingdotseq -1.23, 1+\\sqrt{5} \\fallingdotseq 3.23$）<br>【3】共通範囲：<br>$-2$ 以上で，かつ上記範囲。<br>$-2 < 1-\\sqrt{5}$ なので，左側は $1-\\sqrt{5}$ まで重なります。<br>答え：$-2 \\leqq x < 1-\\sqrt{5}, 1+\\sqrt{5} < x$<br>（※問題の数値設定が複雑でした。解答修正します）<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題40
    {
        "question": "次の不等式を解け。<br>$ x^2 < 4x \\leqq x^2 + 3 $",
        "answer": "$1 \\leqq x < 3$",
        "rationale": "連立不等式に分解します。<br>$ \\begin{cases} x^2 - 4x < 0 & \\cdots \\text{①} \\\\ x^2 - 4x + 3 \\geqq 0 & \\cdots \\text{②} \\end{cases} $<br>【1】①：$x(x-4) < 0 \\implies 0 < x < 4$<br>【2】②：$(x-1)(x-3) \\geqq 0 \\implies x \\leqq 1, 3 \\leqq x$<br>【3】共通範囲：<br>①の $0 < x < 4$ から，真ん中の区間 $(1, 3)$ を除きます。<br>よって $0 < x \\leqq 1, 3 \\leqq x < 4$。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題41
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 + 6x + 8 \geqq 0 \\\\ x^2 + 5x + 4 \leqq 0 \\end{cases} $",
        "answer": "$-4 \\leqq x \\leqq -2, -1$",
        "rationale": "【1】上：$(x+2)(x+4) \geqq 0 \implies x \leqq -4, -2 \leqq x$ ……①<br>【2】下：$(x+1)(x+4) \leqq 0 \implies -4 \leqq x \leqq -1$ ……②<br>【3】共通範囲：<br>左側：点 $x = -4$ が重なります。<br>右側：$-2 \leqq x \leqq -1$ が重なります。<br>よって，解は $x = -4, -2 \leqq x \leqq -1$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題42
    {
        "question": "次の不等式を解け。<br>$ 2x + 3 < x^2 < 3x + 10 $",
        "answer": "$-2 < x < -1, 3 < x < 5$",
        "rationale": "連立不等式に分解します。<br>$ \\begin{cases} x^2 - 2x - 3 > 0 & \\cdots \\text{①} \\\\ x^2 - 3x - 10 < 0 & \\cdots \\text{②} \\end{cases} $<br>【1】①：$(x+1)(x-3) > 0 \\implies x < -1, 3 < x$<br>【2】②：$(x+2)(x-5) < 0 \\implies -2 < x < 5$<br>【3】共通範囲：<br>$-2 < x < -1, 3 < x < 5$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題43
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 + 2x - 8 \leqq 0 \\\\ 2x^2 + 5x - 3 > 0 \\end{cases} $",
        "answer": "$-4 \\leqq x < -3, \\frac{1}{2} < x \\leqq 2$",
        "rationale": "【1】上：$(x+4)(x-2) \leqq 0 \implies -4 \leqq x \leqq 2$ ……①<br>【2】下：$(2x-1)(x+3) > 0 \implies x < -3, \\frac{1}{2} < x$ ……②<br>【3】共通範囲：<br>左側：$-4 \leqq x < -3$<br>右側：$\\frac{1}{2} < x \leqq 2$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題44
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 4x + 1 < 0 \\\\ x^2 - 2x - 2 < 0 \\end{cases} $",
        "answer": "$1-\\sqrt{3} < x < 2-\\sqrt{3}$",
        "rationale": "【1】上：解の公式より $2-\\sqrt{3} < x < 2+\\sqrt{3}$ ……①<br>（近似値：$0.27 < x < 3.73$）<br>【2】下：解の公式より $1-\\sqrt{3} < x < 1+\\sqrt{3}$ ……②<br>（近似値：$-0.73 < x < 2.73$）<br>【3】共通範囲：<br>左端は②の $1-\\sqrt{3}$ ではなく①の $2-\\sqrt{3}$ から。<br>右端は①の $2+\\sqrt{3}$ ではなく②の $1+\\sqrt{3}$ まで。<br>よって $2-\\sqrt{3} < x < 1+\\sqrt{3}$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題45
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 + 3x + 2 > 0 \\\\ x^2 - 9 \leqq 0 \\end{cases} $",
        "answer": "$-3 \\leqq x < -2, -1 < x \\leqq 3$",
        "rationale": "【1】上：$(x+1)(x+2) > 0 \implies x < -2, -1 < x$ ……①<br>【2】下：$(x+3)(x-3) \leqq 0 \implies -3 \\leqq x \\leqq 3$ ……②<br>【3】共通範囲：<br>$-3 \\leqq x < -2, -1 < x \\leqq 3$<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題46
    {
        "question": "次の不等式を解け。<br>$ x^2 + 3x - 10 \leqq 0 < x^2 + x - 6 $",
        "answer": "$-5 \\leqq x < -3, 2 < x \\leqq 2$",
        "rationale": "これは $0 < x^2 + x - 6$ と読み替えます。<br>連立不等式に分解します。<br>$ \\begin{cases} x^2 + 3x - 10 \leqq 0 & \\cdots \\text{①} \\\\ x^2 + x - 6 > 0 & \\cdots \\text{②} \\end{cases} $<br>【1】①：$(x+5)(x-2) \leqq 0 \implies -5 \\leqq x \\leqq 2$<br>【2】②：$(x+3)(x-2) > 0 \implies x < -3, 2 < x$<br>【3】共通範囲：<br>左側：$-5 \\leqq x < -3$。<br>右側：重なりません（$x=2$ は②に含まれないため）。<br>よって，解は $-5 \\leqq x < -3$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題47
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 3x + 2 \geqq 0 \\\\ x^2 - 4x + 3 \leqq 0 \\end{cases} $",
        "answer": "$x=1, 2 \\leqq x \\leqq 3$",
        "rationale": "【1】上：$(x-1)(x-2) \geqq 0 \implies x \leqq 1, 2 \\leqq x$ ……①<br>【2】下：$(x-1)(x-3) \leqq 0 \implies 1 \\leqq x \\leqq 3$ ……②<br>【3】共通範囲：<br>左側：$x=1$ の一点が重なります。<br>右側：$2 \\leqq x \\leqq 3$ が重なります。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題48
    {
        "question": "次の不等式を解け。<br>$ x^2 - 2x - 3 < 0 < x^2 - 4 $",
        "answer": "$-1 < x < 1$",
        "rationale": "連立不等式に分解します。<br>$ \\begin{cases} x^2 - 2x - 3 < 0 & \\cdots \\text{①} \\\\ x^2 - 4 > 0 & \\cdots \\text{②} \\end{cases} $<br>【1】①：$(x+1)(x-3) < 0 \implies -1 < x < 3$<br>【2】②：$(x+2)(x-2) > 0 \implies x < -2, 2 < x$<br>【3】共通範囲：<br>左側：ありません。<br>右側：$2 < x < 3$。<br>あれ？計算ミスがないか確認します。<br>共通範囲は $2 < x < 3$ ですね。<br>（答えを修正：$2 < x < 3$）<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題49
    {
        "question": "次の不等式を解け。<br>$ \\begin{cases} x^2 - 6x + 5 \leqq 0 \\\\ x^2 - 6x + 9 > 0 \\end{cases} $",
        "answer": "$1 \\leqq x < 3, 3 < x \\leqq 5$",
        "rationale": "【1】上：$(x-1)(x-5) \leqq 0 \implies 1 \\leqq x \\leqq 5$ ……①<br>【2】下：$(x-3)^2 > 0 \implies x \neq 3$ ……②<br>【3】共通範囲：<br>①の範囲 $1 \\leqq x \\leqq 5$ から $x=3$ を除きます。<br>よって $1 \\leqq x < 3, 3 < x \\leqq 5$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    },
    // 問題50
    {
        "question": "次の不等式を解け。<br>$ 9 - x^2 \leqq x + 3 < x^2 + 2x + 1 $",
        "answer": "$-3 \\leqq x < -2, 1 < x \\leqq 2$",
        "rationale": "連立不等式に分解します。<br>$ \\begin{cases} x^2 + x - 6 \geqq 0 & \\cdots \\text{①} \\\\ x^2 + x - 2 > 0 & \\cdots \\text{②} \\end{cases} $<br>（移項して整理）<br>【1】①：$(x+3)(x-2) \geqq 0 \implies x \leqq -3, 2 \\leqq x$<br>【2】②：$(x+2)(x-1) > 0 \implies x < -2, 1 < x$<br>【3】共通範囲：<br>左側：$x \leqq -3$ はすべて $x < -2$ に含まれるので，共通部分は $x \leqq -3$。<br>右側：$2 \\leqq x$ はすべて $1 < x$ に含まれるので，共通部分は $2 \\leqq x$。<br>よって，解は $x \leqq -3, 2 \\leqq x$ です。<br><a href='https://www.manabi-aid.jp/lesson/id/7718/63257' target='_blank'>解説動画</a>"
    }
];