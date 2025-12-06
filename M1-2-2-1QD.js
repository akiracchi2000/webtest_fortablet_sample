const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7713/63184' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";

window.QUIZ_DATA = [
    // --- レベル1: 基本的な代数方程式・式の性質 (1-10) ---
    // 問題 1
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$x = 2$ ならば $x^2 = 4$ である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>$x=2$ を $x^2$ に代入すると $2^2 = 4$ となり、結論は常に成り立ちます。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$x^2 = 4$ ならば $x = 2$ である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>この命題は<strong>偽</strong>です。<br><strong>反例: </strong>$x = -2$ のとき<br>$(-2)^2 = 4$ となり仮定「$x^2=4$」を満たしますが、結論「$x=2$」は満たしません。" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x, y$ について、$x = y$ ならば $x^2 = y^2$ である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>$x$ と $y$ が等しい値であれば、それらを同じように2乗しても値は等しくなります。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x, y$ について、$x^2 = y^2$ ならば $x = y$ である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>この命題は<strong>偽</strong>です。<br><strong>反例: </strong>$x = 1, y = -1$ のとき<br>$1^2 = (-1)^2 = 1$ で仮定を満たしますが、$1 \\neq -1$ なので結論を満たしません。" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x, y$ について、$xy > 0$ ならば $x > 0$ かつ $y > 0$ である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>積が正になるのは「正×正」の場合だけではありません。<br><strong>反例: </strong>$x = -2, y = -3$ のとき<br>$xy = (-2)(-3) = 6 > 0$ となり仮定を満たしますが、$x, y$ は共に負の数です。" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$x > 0$ ならば $x + 1 > 0$ である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>正の数に $1$ を加えても、結果は必ず正の数になります。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$x + 1 > 0$ ならば $x > 0$ である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>この命題は<strong>偽</strong>です。<br><strong>反例: </strong>$x = -0.5$ のとき<br>$x + 1 = 0.5 > 0$ で仮定を満たしますが、$x$ 自体は負の数です。" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "次の命題の真偽を答えよ。<br>実数 $a, b$ について、$a = 0$ かつ $b = 0$ ならば $a + b = 0$ である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>$0 + 0 = 0$ なので、常に成り立ちます。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "次の命題の真偽を答えよ。<br>実数 $a, b$ について、$a + b = 0$ ならば $a = 0$ かつ $b = 0$ である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>足して0になるのは0同士の場合に限りません。<br><strong>反例: </strong>$a = 1, b = -1$ のとき<br>$1 + (-1) = 0$ となりますが、$a, b$ は0ではありません。" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x, y$ について、$x + y > 0$ ならば $x > 0$ かつ $y > 0$ である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>和が正でも、両方が正とは限りません。<br><strong>反例: </strong>$x = 5, y = -2$ のとき<br>$x + y = 3 > 0$ ですが、$y$ は負の数です。" + VIDEO_LINK
    },

    // --- レベル2: 不等式と絶対値、平方根 (11-20) ---
    // 問題 11
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$x > 1$ ならば $x^2 > 1$ である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>$x > 1$ のとき、両辺に正の数 $x$ を掛けると $x^2 > x$ となります。また $x > 1$ なので $x^2 > x > 1$ が成り立ちます。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$x^2 > 1$ ならば $x > 1$ である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>この命題は<strong>偽</strong>です。<br><strong>反例: </strong>$x = -2$ のとき<br>$(-2)^2 = 4 > 1$ で仮定を満たしますが、$x$ は $1$ より小さくなります。" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$|x| < 3$ ならば $x < 3$ である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>$|x| < 3$ は $-3 < x < 3$ を意味します。<br>この範囲にある $x$ は、当然 $3$ より小さい値です。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$x < 3$ ならば $|x| < 3$ である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>この命題は<strong>偽</strong>です。<br><strong>反例: </strong>$x = -5$ のとき<br>$-5 < 3$ は成り立ちますが、$|-5| = 5$ なので $|x| < 3$ を満たしません。" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$x > 0$ ならば $\\sqrt{x^2} = x$ である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>$\\sqrt{x^2} = |x|$ です。$x > 0$ のとき $|x| = x$ となるので、式は成り立ちます。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$\\sqrt{x^2} = x$ ならば $x > 0$ である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>この命題は<strong>偽</strong>です。<br><strong>反例: </strong>$x = 0$ のとき<br>$\\sqrt{0^2} = 0$ が成り立ちますが、$x > 0$ （正の数）ではありません。" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x, y$ について、$x < y$ ならば $x^2 < y^2$ である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>負の数での大小関係と2乗の大小関係は一致しません。<br><strong>反例: </strong>$x = -3, y = 1$ のとき<br>$-3 < 1$ ですが、$(-3)^2 = 9, 1^2 = 1$ となり、$x^2 > y^2$ となってしまいます。" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$|x| = 2$ ならば $x^2 = 4$ である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>$|x|=2$ となるのは $x=2$ または $x=-2$ です。<br>どちらの場合も2乗すれば $4$ になります。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "次の命題の真偽を答えよ。<br>実数 $a, b$ について、$a > 0, b > 0$ ならば $a + b > 0$ である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>正の数同士を足せば、結果は必ず正の数になります。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$x \\neq 1$ ならば $(x-1)^2 > 0$ である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>実数の2乗は常に0以上です。$(x-1)^2 = 0$ となるのは $x=1$ のときだけです。<br>仮定より $x \\neq 1$ なので、0になることはなく、必ず正の値をとります。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },

    // --- レベル3: 整数・自然数・倍数の性質 (21-30) ---
    // 問題 21
    {
        question: "次の命題の真偽を答えよ。<br>自然数 $n$ について、$n$ が4の倍数ならば $n$ は2の倍数である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>4の倍数は $4k = 2(2k)$ と書けるため、必ず2の倍数（偶数）になります。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "次の命題の真偽を答えよ。<br>自然数 $n$ について、$n$ が2の倍数ならば $n$ は4の倍数である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>この命題は<strong>偽</strong>です。<br><strong>反例: </strong>$n = 6$ のとき<br>6は2の倍数ですが、4で割り切れないため4の倍数ではありません。" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "次の命題の真偽を答えよ。<br>自然数 $n$ について、$n$ が素数ならば $n$ は奇数である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>素数のうち、唯一の偶数が存在します。<br><strong>反例: </strong>$n = 2$ のとき<br>2は素数ですが、偶数です。" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "次の命題の真偽を答えよ。<br>自然数 $a, b$ について、$a + b$ が偶数ならば、$a, b$ は共に偶数である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>奇数＋奇数＝偶数 になるケースがあります。<br><strong>反例: </strong>$a = 1, b = 3$ のとき<br>$1 + 3 = 4$（偶数）ですが、$a, b$ は共に奇数です。" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "次の命題の真偽を答えよ。<br>自然数 $a, b$ について、$ab$ が奇数ならば、$a, b$ は共に奇数である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>積が奇数になるのは「奇数×奇数」の場合のみです。<br>もしどちらか一方が偶数なら、積は偶数になってしまいます。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "次の命題の真偽を答えよ。<br>自然数 $n$ について、$n$ が6の倍数ならば $n$ は3の倍数である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>6の倍数は $6k = 3(2k)$ と表せるので、必ず3の倍数です。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "次の命題の真偽を答えよ。<br>自然数 $n$ について、$n$ が3の倍数ならば $n^2$ は9の倍数である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>$n = 3k$ と置くと、$n^2 = (3k)^2 = 9k^2$ となり、9の倍数となります。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "次の命題の真偽を答えよ。<br>自然数 $n$ について、$n^2$ が偶数ならば $n$ は偶数である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>対偶「$n$ が奇数ならば $n^2$ は奇数である」を考えると真であることがわかります（奇数×奇数＝奇数）。<br>よって元の命題も<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "次の命題の真偽を答えよ。<br>自然数 $n$ について、$n$ が10の倍数ならば $n$ は5の倍数かつ2の倍数である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>$10 = 2 \\times 5$ なので、10の倍数は必ず2の倍数であり5の倍数でもあります。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "次の命題の真偽を答えよ。<br>自然数 $a, b, c$ について、$a^2 + b^2 = c^2$ ならば $a, b, c$ の少なくとも一つは偶数である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>（少し発展的ですが）奇数の2乗は奇数、偶数の2乗は偶数です。もし$a, b, c$すべてが奇数だとすると、左辺は奇数＋奇数＝偶数、右辺は奇数となり矛盾します。ピタゴラス数において全てが奇数になることはありません。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },

    // --- レベル4: 平面図形（四角形・三角形） (31-40) ---
    // 問題 31
    {
        question: "次の命題の真偽を答えよ。<br>四角形が正方形ならば、その四角形は長方形である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>長方形の定義は「4つの角がすべて等しい（90度）」ことです。<br>正方形は4つの角がすべて90度なので、長方形の一種に含まれます。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "次の命題の真偽を答えよ。<br>四角形が長方形ならば、その四角形は正方形である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>この命題は<strong>偽</strong>です。<br><strong>反例: </strong>隣り合う辺の長さが異なる（例：縦2cm、横4cm）長方形は、正方形ではありません。" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "次の命題の真偽を答えよ。<br>四角形がひし形ならば、その四角形は平行四辺形である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>ひし形は「4つの辺の長さが等しい」四角形で、向かい合う辺は平行になります。<br>よって平行四辺形の性質を満たすため、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "次の命題の真偽を答えよ。<br>四角形が平行四辺形ならば、その四角形はひし形である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>この命題は<strong>偽</strong>です。<br><strong>反例: </strong>隣り合う辺の長さが異なる一般的な平行四辺形は、ひし形（4辺が等しい）ではありません。" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "次の命題の真偽を答えよ。<br>三角形が正三角形ならば、その三角形は二等辺三角形である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>二等辺三角形の定義は「2つの辺が等しい」ことです。<br>正三角形は「3つの辺が等しい」ので、当然2つの辺も等しくなっています。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "次の命題の真偽を答えよ。<br>三角形が二等辺三角形ならば、その三角形は正三角形である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>この命題は<strong>偽</strong>です。<br><strong>反例: </strong>3辺の長さが $3, 3, 4$ の三角形は、二等辺三角形ですが正三角形ではありません。" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "次の命題の真偽を答えよ。<br>2つの三角形が合同ならば、2つの三角形の面積は等しい。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>合同な図形は形も大きさも全く同じなので、当然面積も等しくなります。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "次の命題の真偽を答えよ。<br>2つの三角形の面積が等しいならば、2つの三角形は合同である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>この命題は<strong>偽</strong>です。<br><strong>反例: </strong>底辺4、高さ3の直角三角形と、底辺6、高さ2の鋭角三角形は、面積は共に6ですが形は全く異なります。" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "次の命題の真偽を答えよ。<br>四角形の対角線が直交するならば、その四角形はひし形である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>この命題は<strong>偽</strong>です。<br><strong>反例: </strong>「凧形（たこがた）」のように、対角線が直交していても、4辺の長さが全て等しいとは限らない図形があります。" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "次の命題の真偽を答えよ。<br>四角形が平行四辺形ならば、対角線はそれぞれの中点で交わる。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>これは平行四辺形の基本的な性質の一つです。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },

    // --- レベル5: 無理数・有理数・集合・その他 (41-50) ---
    // 問題 41
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$x$ が有理数ならば $x^2$ は有理数である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>有理数は分数（整数/整数）で表せます。これを2乗してもやはり分数の形になるため、有理数です。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$x^2$ が有理数ならば $x$ は有理数である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>この命題は<strong>偽</strong>です。<br><strong>反例: </strong>$x = \\sqrt{2}$ のとき<br>$x^2 = 2$ は有理数ですが、$x$ 自身は無理数です。" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x, y$ が無理数ならば、$x + y$ は無理数である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>無理数同士を足して有理数（0など）になることがあります。<br><strong>反例: </strong>$x = \\sqrt{2}, y = -\\sqrt{2}$ のとき<br>$x + y = 0$ となり、これは有理数です。" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x, y$ が有理数ならば、$x + y$ は有理数である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>有理数同士の和、差、積、商（0で割る場合を除く）は常に有理数になります。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$x$ が無理数ならば $x^2$ は無理数である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>この命題は<strong>偽</strong>です。<br><strong>反例: </strong>$x = \\sqrt{2}$ のとき<br>$x$ は無理数ですが、$x^2 = 2$ は有理数です。" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "次の命題の真偽を答えよ。<br>2つの集合 $A, B$ について、$x \\in A \\cap B$ ならば $x \\in A$ である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>$A \\cap B$ は「$A$ にも $B$ にも入っている要素」の集合です。<br>したがって、その要素は当然 $A$ に含まれています。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "次の命題の真偽を答えよ。<br>2つの集合 $A, B$ について、$x \\in A \\cup B$ ならば $x \\in A$ である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>$A \\cup B$ は「$A$ または $B$ に入っている要素」です。<br><strong>反例: </strong>$x$ が $B$ のみに含まれる要素（$A$にはない）である場合、仮定は満たしますが結論は満たしません。" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$x^2 - 3x + 2 = 0$ ならば $x = 1$ である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>方程式を解くと $(x-1)(x-2)=0$ より $x=1, 2$ です。<br><strong>反例: </strong>$x = 2$ のとき<br>仮定の方程式は成り立ちますが、$x=1$ ではありません。" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "次の命題の真偽を答えよ。<br>実数 $x$ について、$x = 1$ ならば $x^2 - 3x + 2 = 0$ である。",
        options: ["真", "偽"],
        answer: "真",
        rationale: "<strong>解説: </strong>$x=1$ を方程式に代入すると、$1^2 - 3(1) + 2 = 1 - 3 + 2 = 0$ となり成り立ちます。<br>よって、この命題は<strong>真</strong>です。" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "次の命題の真偽を答えよ。<br>実数 $a, b, c$ について、$ac = bc$ ならば $a = b$ である。",
        options: ["真", "偽"],
        answer: "偽",
        rationale: "<strong>解説: </strong>両辺を $c$ で割るには $c \\neq 0$ という条件が必要です。<br><strong>反例: </strong>$c = 0, a = 1, b = 2$ のとき<br>$1 \\times 0 = 2 \\times 0$ ($0=0$) で仮定は成り立ちますが、$a \\neq b$ です。" + VIDEO_LINK
    }
];