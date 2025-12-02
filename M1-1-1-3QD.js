// --- クイズデータ(QD)はここに貼り付けてください ---
window.QUIZ_DATA = [  
                // 問題 1
                {
                    question: "次の計算をせよ。<br>$2x^2y \\times \\left(-5xy^3\\right)$",
                    options: [ "$-10x^3y^4$", "$-3x^3y^4$", "$-10x^2y^3$", "$10x^3y^4$" ],
                    answer: "$-10x^3y^4$",
                    rationale: "係数（数字の部分）同士を計算します: $2 \\times (-5) = -10$。<br>文字 $x$ について、指数法則 $a^m \\times a^n = a^{m+n}$ を使い、指数を足します: $x^2 \\times x^1 = x^{2+1} = x^3$。<br>文字 $y$ についても同様に指数を足します: $y^1 \\times y^3 = y^{1+3} = y^4$。<br>すべてを組み合わせて、$-10x^3y^4$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 2
                {
                    question: "次の計算をせよ。<br>$\\left(-2x^2y^2\\right)^3 \\times \\left(-2x^3y\\right)$",
                    options: [ "$16x^9y^7$", "$-8x^8y^7$", "$-16x^9y^7$", "$8x^9y^7$" ],
                    answer: "$16x^9y^7$",
                    rationale: "まず、累乗の部分 $\\left(-2x^2y^2\\right)^3$ を計算します。指数法則 $\\left(ab\\right)^n = a^nb^n$ と $\\left(a^m\\right)^n = a^{mn}$ を使います。<br>係数: $\\left(-2\\right)^3 = -8$。<br>$x$ の部分: $\\left(x^2\\right)^3 = x^{2 \\times 3} = x^6$。<br>$y$ の部分: $\\left(y^2\\right)^3 = y^{2 \\times 3} = y^6$。<br>よって、累乗の部分は $-8x^6y^6$ となります。<br>次に、これと $\\left(-2x^3y\\right)$ を掛け合わせます: $\\left(-8x^6y^6\\right) \\times \\left(-2x^3y\\right)$。<br>係数: $\\left(-8\\right) \\times \\left(-2\\right) = 16$。<br>$x$ の部分: $x^6 \\times x^3 = x^{6+3} = x^9$。<br>$y$ の部分: $y^6 \\times y^1 = y^{6+1} = y^7$。<br>すべてを組み合わせて、$16x^9y^7$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 3
                {
                    question: "次の計算をせよ。<br>$36x^4y^3 \\div 9x^2y^2$",
                    options: [ "$4x^2y$", "$4x^6y^5$", "$27x^2y$", "$4x^2y^5$" ],
                    answer: "$4x^2y$",
                    rationale: "係数（数字の部分）同士を計算します: $36 \\div 9 = 4$。<br>文字 $x$ について、指数法則 $a^m \\div a^n = a^{m-n}$ を使い、指数を引き算します: $x^4 \\div x^2 = x^{4-2} = x^2$。<br>文字 $y$ についても同様に指数を引き算します: $y^3 \\div y^2 = y^{3-2} = y^1 = y$。<br>すべてを組み合わせて、$4x^2y$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 4
                {
                    question: "次の計算をせよ。<br>$\\left(-3a^3b^2\\right) \\times \\left(4a^2b\\right)$",
                    options: [ "$-12a^5b^3$", "$12a^5b^3$", "$-12a^6b^2$", "$a^5b^3$" ],
                    answer: "$-12a^5b^3$",
                    rationale: "係数同士を計算します: $\\left(-3\\right) \\times 4 = -12$。<br>文字 $a$ について、指数法則 $a^m \\times a^n = a^{m+n}$ を使い、指数を足します: $a^3 \\times a^2 = a^{3+2} = a^5$。<br>文字 $b$ についても同様に指数を足します: $b^2 \\times b^1 = b^{2+1} = b^3$。<br>すべてを組み合わせて、$-12a^5b^3$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 5
                {
                    question: "次の計算をせよ。<br>$\\left(5xy\\right)^2$",
                    options: [ "$25x^2y^2$", "$5x^2y^2$", "$10x^2y^2$", "$25xy^2$" ],
                    answer: "$25x^2y^2$",
                    rationale: "指数法則 $\\left(ab\\right)^n = a^nb^n$ を使い、() の中の各部分を2乗します。<br>係数: $5^2 = 25$。<br>$x$ の部分: $x^2$。<br>$y$ の部分: $y^2$。<br>すべてを組み合わせて、$25x^2y^2$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
              
                },
                // 問題 6
                {
                    question: "次の計算をせよ。<br>$\\left(-a^2b^3\\right)^4$",
                    options: [ "$a^8b^{12}$", "$-a^8b^{12}$", "$a^6b^7$", "$-4a^8b^{12}$" ],
                    answer: "$a^8b^{12}$",
                    rationale: "指数法則 $\\left(ab\\right)^n = a^nb^n$ と $\\left(a^m\\right)^n = a^{mn}$ を使います。() の中身は $\\left(-1 \\times a^2 \\times b^3\\right)$ と考えられます。<br>係数: $\\left(-1\\right)^4 = 1$ （負の数でも偶数乗すると正になります）。<br>$a$ の部分: $\\left(a^2\\right)^4 = a^{2 \\times 4} = a^8$。<br>$b$ の部分: $\\left(b^3\\right)^4 = b^{3 \\times 4} = b^{12}$。<br>すべてを組み合わせて、$1 \\times a^8b^{12} = a^8b^{12}$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 7
                {
                    question: "次の計算をせよ。<br>$18a^5b^4 \\div \\left(-6a^2b\\right)$",
                    options: [ "$-3a^3b^3$", "$3a^3b^3$", "$-3a^7b^5$", "$-12a^3b^3$" ],
                    answer: "$-3a^3b^3$",
                    rationale: "係数同士を計算します: $18 \\div \\left(-6\\right) = -3$。<br>文字 $a$ について、指数法則 $a^m \\div a^n = a^{m-n}$ を使い、指数を引き算します: $a^5 \\div a^2 = a^{5-2} = a^3$。<br>文字 $b$ についても同様に指数を引き算します: $b^4 \\div b^1 = b^{4-1} = b^3$。<br>すべてを組み合わせて、$-3a^3b^3$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 8
                {
                    question: "次の計算をせよ。<br>$x^3 \\times \\left(-x\\right)^2 \\times x$",
                    options: [ "$x^6$", "$-x^6$", "$x^5$", "$-x^5$" ],
                    answer: "$x^6$",
                    rationale: "まず、累乗の部分 $\\left(-x\\right)^2$ を計算します。これは $\\left(-1 \\times x\\right)^2$ と同じで、$\\left(-1\\right)^2 \\times x^2 = 1 \\times x^2 = x^2$ となります。<br>よって、式は $x^3 \\times x^2 \\times x$ となります。<br>指数法則 $a^m \\times a^n = a^{m+n}$ を使い、すべての指数を足します: $x^{3+2+1} = x^6$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 9
                {
                    question: "次の計算をせよ。<br>$\\left(-2a^2b\\right)^3 \\div \\left(4ab^2\\right)$",
                    options: [ "$-2a^5b$", "$2a^5b$", "$-8a^5b$", "$-2a^4b$" ],
                    answer: "$-2a^5b$",
                    rationale: "まず、累乗の部分 $\\left(-2a^2b\\right)^3$ を計算します。<br>係数: $\\left(-2\\right)^3 = -8$。<br>$a$ の部分: $\\left(a^2\\right)^3 = a^{2 \\times 3} = a^6$。<br>$b$ の部分: $b^3$。<br>よって、累乗の部分は $-8a^6b^3$ となります。<br>次に、これを $\\left(4ab^2\\right)$ で割ります: $\\left(-8a^6b^3\\right) \\div \\left(4ab^2\\right)$。<br>係数: $\\left(-8\\right) \\div 4 = -2$。<br>$a$ の部分: $a^6 \\div a^1 = a^{6-1} = a^5$。<br>$b$ の部分: $b^3 \\div b^2 = b^{3-2} = b^1 = b$。<br>すべてを組み合わせて、$-2a^5b$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 10
                {
                    question: "次の計算をせよ。<br>$6x^2y \\times \\left(-3xy^2\\right) \\div \\left(2x^2y^2\\right)$",
                    options: [ "$-9xy$", "$9xy$", "$-9x$", "$-9y$" ],
                    answer: "$-9xy$",
                    rationale: "乗法と除法が混在しているため、前から順に計算します。<br>1. まず乗法: $6x^2y \\times \\left(-3xy^2\\right)$<br>   係数: $6 \\times \\left(-3\\right) = -18$<br>   $x$ の指数: $x^2 \\times x = x^{2+1} = x^3$<br>   $y$ の指数: $y \\times y^2 = y^{1+2} = y^3$<br>   ここまでで $-18x^3y^3$ となります。<br>2. 次に除法: $\\left(-18x^3y^3\\right) \\div \\left(2x^2y^2\\right)$<br>   係数: $\\left(-18\\right) \\div 2 = -9$<br>   $x$ の指数: $x^3 \\div x^2 = x^{3-2} = x$<br>   $y$ の指数: $y^3 \\div y^2 = y^{3-2} = y$<br>すべてを組み合わせて、$-9xy$ となります。<br>（別解: 分数の形で計算 $\\dfrac{6x^2y \\times \\left(-3xy^2\\right)}{2x^2y^2} = \\dfrac{-18x^3y^3}{2x^2y^2} = -9x^{3-2}y^{3-2} = -9xy$）<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 11
                {
                    question: "次の計算をせよ。<br>$\\left(-x^4y^2z\\right) \\times \\left(3xyz^3\\right)$",
                    options: [ "$-3x^5y^3z^4$", "$3x^5y^3z^4$", "$-3x^4y^2z^3$", "$-3x^5y^2z^4$" ],
                    answer: "$-3x^5y^3z^4$",
                    rationale: "係数同士を計算します: $\\left(-1\\right) \\times 3 = -3$。<br>文字 $x$ について、指数法則 $a^m \\times a^n = a^{m+n}$ を使い、指数を足します: $x^4 \\times x^1 = x^{4+1} = x^5$。<br>文字 $y$ についても同様に指数を足します: $y^2 \\times y^1 = y^{2+1} = y^3$。<br>文字 $z$ についても同様に指数を足します: $z^1 \\times z^3 = z^{1+3} = z^4$。<br>すべてを組み合わせて、$-3x^5y^3z^4$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 12
                {
                    question: "次の計算をせよ。<br>$\\left(2a^3b\\right)^3$",
                    options: [ "$8a^9b^3$", "$6a^9b^3$", "$8a^6b^3$", "$8a^9b$" ],
                    answer: "$8a^9b^3$",
                    rationale: "指数法則 $\\left(ab\\right)^n = a^nb^n$ と $\\left(a^m\\right)^n = a^{mn}$ を使い、() の中の各部分を3乗します。<br>係数: $2^3 = 8$。<br>$a$ の部分: $\\left(a^3\\right)^3 = a^{3 \\times 3} = a^9$。<br>$b$ の部分: $b^3$。<br>すべてを組み合わせて、$8a^9b^3$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 13
                {
                    question: "次の計算をせよ。<br>$\\left(-10x^6y^5\\right) \\div \\left(-2x^3y^2\\right)$",
                    options: [ "$5x^3y^3$", "$-5x^3y^3$", "$8x^3y^3$", "$5x^9y^7$" ],
                    answer: "$5x^3y^3$",
                    rationale: "係数同士を計算します: $\\left(-10\\right) \\div \\left(-2\\right) = 5$。<br>文字 $x$ について、指数法則 $a^m \\div a^n = a^{m-n}$ を使い、指数を引き算します: $x^6 \\div x^3 = x^{6-3} = x^3$。<br>文字 $y$ についても同様に指数を引き算します: $y^5 \\div y^2 = y^{5-2} = y^3$。<br>すべてを組み合わせて、$5x^3y^3$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 14
                {
                    question: "次の計算をせよ。<br>$\\left(4a^2b^3\\right)^2 \\times \\left(-ab\\right)$",
                    options: [ "$-16a^5b^7$", "$16a^5b^7$", "$-16a^4b^6$", "$-8a^5b^7$" ],
                    answer: "$-16a^5b^7$",
                    rationale: "まず、累乗の部分 $\\left(4a^2b^3\\right)^2$ を計算します。<br>係数: $4^2 = 16$。<br>$a$ の部分: $\\left(a^2\\right)^2 = a^{2 \\times 2} = a^4$。<br>$b$ の部分: $\\left(b^3\\right)^2 = b^{3 \\times 2} = b^6$。<br>よって、累乗の部分は $16a^4b^6$ となります。<br>次に、これと $\\left(-ab\\right)$ を掛け合わせます: $\\left(16a^4b^6\\right) \\times \\left(-1a^1b^1\\right)$。<br>係数: $16 \\times \\left(-1\\right) = -16$。<br>$a$ の部分: $a^4 \\times a^1 = a^{4+1} = a^5$。<br>$b$ の部分: $b^6 \\times b^1 = b^{6+1} = b^7$。<br>すべてを組み合わせて、$-16a^5b^7$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 15
                {
                    question: "次の計算をせよ。<br>$x^5 \\div x^2 \\times x^3$",
                    options: [ "$x^6$", "$x^4$", "$x^{10}$", "$x^0=1$" ],
                    answer: "$x^6$",
                    rationale: "左から順に計算します。<br>1. まず除法: $x^5 \\div x^2 = x^{5-2} = x^3$。（指数法則 $a^m \\div a^n = a^{m-n}$）<br>2. 次に乗法: $x^3 \\times x^3 = x^{3+3} = x^6$。（指数法則 $a^m \\times a^n = a^{m+n}$）<br>よって、$x^6$ となります。<br>（別解: 指数だけで計算 $5 - 2 + 3 = 6$）<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 16
                {
                    question: "次の計算をせよ。<br>$\\left(-y\\right)^3 \\times \\left(2y\\right)^2$",
                    options: [ "$-4y^5$", "$4y^5$", "$4y^6$", "$-4y^6$" ],
                    answer: "$-4y^5$",
                    rationale: "まず、それぞれの累乗を計算します。<br>$\\left(-y\\right)^3 = \\left(-1 \\times y\\right)^3 = \\left(-1\\right)^3 \\times y^3 = -1 \\times y^3 = -y^3$。（奇数乗なので符号はマイナス）<br>$\\left(2y\\right)^2 = 2^2 \\times y^2 = 4y^2$。<br>次に、これらを掛け合わせます: $\\left(-y^3\\right) \\times \\left(4y^2\\right)$。<br>係数: $\\left(-1\\right) \\times 4 = -4$。<br>$y$ の部分: $y^3 \\times y^2 = y^{3+2} = y^5$。<br>すべてを組み合わせて、$-4y^5$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 17
                {
                    question: "次の計算をせよ。<br>$\\left(-a^3b^2c\\right)^2 \\div \\left(a^2b^3c\\right)$",
                    options: [ "$a^4bc$", "$a^4b$", "$-a^4bc$", "$a^3b$" ],
                    answer: "$a^4bc$",
                    rationale: "まず、累乗の部分 $\\left(-a^3b^2c\\right)^2$ を計算します。<br>係数: $\\left(-1\\right)^2 = 1$。（偶数乗なので符号はプラス）<br>$a$ の部分: $\\left(a^3\\right)^2 = a^{3 \\times 2} = a^6$。<br>$b$ の部分: $\\left(b^2\\right)^2 = b^{2 \\times 2} = b^4$。<br>$c$ の部分: $c^2$。<br>よって、累乗の部分は $a^6b^4c^2$ となります。<br>次に、これを $\\left(a^2b^3c\\right)$ で割ります: $\\left(a^6b^4c^2\\right) \\div \\left(a^2b^3c^1\\right)$。<br>係数: $1 \\div 1 = 1$。<br>$a$ の部分: $a^6 \\div a^2 = a^{6-2} = a^4$。<br>$b$ の部分: $b^4 \\div b^3 = b^{4-3} = b^1 = b$。<br>$c$ の部分: $c^2 \\div c^1 = c^{2-1} = c^1 = c$。<br>すべてを組み合わせて、$a^4bc$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 18
                {
                    question: "次の計算をせよ。<br>$24x^3y^4 \\div \\left(-4xy\\right) \\times \\left(-x^2y\\right)$",
                    options: [ "$6x^4y^4$", "$-6x^4y^4$", "$6x^3y^3$", "$-6x^3y^3$" ],
                    answer: "$6x^4y^4$",
                    rationale: "左から順に計算します。<br>1. まず除法: $\\left(24x^3y^4\\right) \\div \\left(-4xy\\right)$<br>   係数: $24 \\div \\left(-4\\right) = -6$<br>   $x$ の指数: $x^3 \\div x^1 = x^{3-1} = x^2$<br>   $y$ の指数: $y^4 \\div y^1 = y^{4-1} = y^3$<br>   ここまでで $-6x^2y^3$ となります。<br>2. 次に乗法: $\\left(-6x^2y^3\\right) \\times \\left(-x^2y\\right)$<br>   係数: $\\left(-6\\right) \\times \\left(-1\\right) = 6$<br>   $x$ の指数: $x^2 \\times x^2 = x^{2+2} = x^4$<br>   $y$ の指数: $y^3 \\times y^1 = y^{3+1} = y^4$<br>すべてを組み合わせて、$6x^4y^4$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 19
                {
                    question: "次の計算をせよ。<br>$\\left(ab^2\\right)^3 \\times a^2b$",
                    options: [ "$a^5b^7$", "$a^5b^6$", "$a^6b^7$", "$a^6b^6$" ],
                    answer: "$a^5b^7$",
                    rationale: "まず、累乗の部分 $\\left(ab^2\\right)^3$ を計算します。<br>$a$ の部分: $a^3$<br>$b$ の部分: $\\left(b^2\\right)^3 = b^{2 \\times 3} = b^6$<br>よって、累乗の部分は $a^3b^6$ となります。<br>次に、これと $a^2b$ を掛け合わせます: $\\left(a^3b^6\\right) \\times \\left(a^2b^1\\right)$。<br>$a$ の部分: $a^3 \\times a^2 = a^{3+2} = a^5$。<br>$b$ の部分: $b^6 \\times b^1 = b^{6+1} = b^7$。<br>すべてを組み合わせて、$a^5b^7$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 20
                {
                    question: "次の計算をせよ。<br>$\\left(-3x^2\\right)^2 \\div x^3$",
                    options: [ "$9x$", "$9x^7$", "$-9x$", "$6x$" ],
                    answer: "$9x$",
                    rationale: "まず、累乗の部分 $\\left(-3x^2\\right)^2$ を計算します。<br>係数: $\\left(-3\\right)^2 = 9$。（偶数乗なので符号はプラス）<br>$x$ の部分: $\\left(x^2\\right)^2 = x^{2 \\times 2} = x^4$。<br>よって、累乗の部分は $9x^4$ となります。<br>次に、これを $x^3$ で割ります: $9x^4 \\div x^3$。<br>係数: $9 \\div 1 = 9$。<br>$x$ の部分: $x^4 \\div x^3 = x^{4-3} = x^1 = x$。<br>すべてを組み合わせて、$9x$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 21
                {
                    question: "次の計算をせよ。<br>$5a^4b \\times \\left(-2b^3\\right)$",
                    options: [ "$-10a^4b^4$", "$10a^4b^4$", "$-10a^4b^3$", "$3a^4b^4$" ],
                    answer: "$-10a^4b^4$",
                    rationale: "係数同士を計算します: $5 \\times \\left(-2\\right) = -10$。<br>文字 $a$ は、左側にしかないので $a^4$ のままです。<br>文字 $b$ について、指数法則 $a^m \\times a^n = a^{m+n}$ を使い、指数を足します: $b^1 \\times b^3 = b^{1+3} = b^4$。<br>すべてを組み合わせて、$-10a^4b^4$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 22
                {
                    question: "次の計算をせよ。<br>$\\left(xy^2z^3\\right)^4$",
                    options: [ "$x^4y^8z^{12}$", "$x^4y^6z^7$", "$4x^4y^8z^{12}$", "$x^5y^8z^{12}$" ],
                    answer: "$x^4y^8z^{12}$",
                    rationale: "指数法則 $\\left(abc\\right)^n = a^nb^nc^n$ と $\\left(a^m\\right)^n = a^{mn}$ を使い、() の中の各部分を4乗します。<br>$x$ の部分: $x^4$。<br>$y$ の部分: $\\left(y^2\\right)^4 = y^{2 \\times 4} = y^8$。<br>$z$ の部分: $\\left(z^3\\right)^4 = z^{3 \\times 4} = z^{12}$。<br>すべてを組み合わせて、$x^4y^8z^{12}$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 23
                {
                    question: "次の計算をせよ。<br>$\\left(-x^2y\\right)^3 \\div \\left(-xy\\right)$",
                    options: [ "$x^5y^2$", "$-x^5y^2$", "$x^4y^2$", "$-x^4y^2$" ],
                    answer: "$x^5y^2$",
                    rationale: "まず、累乗の部分 $\\left(-x^2y\\right)^3$ を計算します。<br>係数: $\\left(-1\\right)^3 = -1$。（奇数乗なので符号はマイナス）<br>$x$ の部分: $\\left(x^2\\right)^3 = x^{2 \\times 3} = x^6$。<br>$y$ の部分: $y^3$。<br>よって、累乗の部分は $-x^6y^3$ となります。<br>次に、これを $\\left(-xy\\right)$ で割ります: $\\left(-x^6y^3\\right) \\div \\left(-x^1y^1\\right)$。<br>係数: $\\left(-1\\right) \\div \\left(-1\\right) = 1$。<br>$x$ の部分: $x^6 \\div x^1 = x^{6-1} = x^5$。<br>$y$ の部分: $y^3 \\div y^1 = y^{3-1} = y^2$。<br>すべてを組み合わせて、$x^5y^2$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 24
                {
                    question: "次の計算をせよ。<br>$a^2 \\times a^3 \\div a^4$",
                    options: [ "$a$", "$a^9$", "$a^5$", "$a^{0}=1$" ],
                    answer: "$a$",
                    rationale: "左から順に計算します。<br>1. まず乗法: $a^2 \\times a^3 = a^{2+3} = a^5$。（指数法則 $a^m \\times a^n = a^{m+n}$）<br>2. 次に除法: $a^5 \\div a^4 = a^{5-4} = a^1 = a$。（指数法則 $a^m \\div a^n = a^{m-n}$）<br>よって、$a$ となります。<br>（別解: 指数だけで計算 $2 + 3 - 4 = 1$）<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 25
                {
                    question: "次の計算をせよ。<br>$\\left(2x\\right)^3 \\times x^2$",
                    options: [ "$8x^5$", "$6x^5$", "$8x^6$", "$2x^5$" ],
                    answer: "$8x^5$",
                    rationale: "まず、累乗の部分 $\\left(2x\\right)^3$ を計算します。<br>係数: $2^3 = 8$。<br>$x$ の部分: $x^3$。<br>よって、累乗の部分は $8x^3$ となります。<br>次に、これと $x^2$ を掛け合わせます: $8x^3 \\times x^2$。<br>係数: $8 \\times 1 = 8$。<br>$x$ の部分: $x^3 \\times x^2 = x^{3+2} = x^5$。<br>すべてを組み合わせて、$8x^5$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 26
                {
                    question: "次の計算をせよ。<br>$\\left(-a^2b^4c\\right)^3$",
                    options: [ "$-a^6b^{12}c^3$", "$a^6b^{12}c^3$", "$-a^5b^7c^3$", "$-3a^6b^{12}c^3$" ],
                    answer: "$-a^6b^{12}c^3$",
                    rationale: "指数法則 $\\left(abc\\right)^n = a^nb^nc^n$ と $\\left(a^m\\right)^n = a^{mn}$ を使い、() の中の各部分を3乗します。<br>係数: $\\left(-1\\right)^3 = -1$。（奇数乗なので符号はマイナス）<br>$a$ の部分: $\\left(a^2\\right)^3 = a^{2 \\times 3} = a^6$。<br>$b$ の部分: $\\left(b^4\\right)^3 = b^{4 \\times 3} = b^{12}$。<br>$c$ の部分: $c^3$。<br>すべてを組み合わせて、$-1 \\times a^6b^{12}c^3 = -a^6b^{12}c^3$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 27
                {
                    question: "次の計算をせよ。<br>$15x^7y^2 \\div 3x^5y$",
                    options: [ "$5x^2y$", "$-5x^2y$", "$12x^2y$", "$5x^{12}y^3$" ],
                    answer: "$5x^2y$",
                    rationale: "係数同士を計算します: $15 \\div 3 = 5$。<br>文字 $x$ について、指数法則 $a^m \\div a^n = a^{m-n}$ を使い、指数を引き算します: $x^7 \\div x^5 = x^{7-5} = x^2$。<br>文字 $y$ についても同様に指数を引き算します: $y^2 \\div y^1 = y^{2-1} = y^1 = y$。<br>すべてを組み合わせて、$5x^2y$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 28
                {
                    question: "次の計算をせよ。<br>$\\left(x^2y\\right)^3 \\times \\left(xy^3\\right)$",
                    options: [ "$x^7y^6$", "$x^6y^6$", "$x^7y^9$", "$x^5y^6$" ],
                    answer: "$x^7y^6$",
                    rationale: "まず、累乗の部分 $\\left(x^2y\\right)^3$ を計算します。<br>$x$ の部分: $\\left(x^2\\right)^3 = x^{2 \\times 3} = x^6$。<br>$y$ の部分: $y^3$。<br>よって、累乗の部分は $x^6y^3$ となります。<br>次に、これと $\\left(xy^3\\right)$ を掛け合わせます: $\\left(x^6y^3\\right) \\times \\left(x^1y^3\\right)$。<br>$x$ の部分: $x^6 \\times x^1 = x^{6+1} = x^7$。<br>$y$ の部分: $y^3 \\times y^3 = y^{3+3} = y^6$。<br>すべてを組み合わせて、$x^7y^6$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 29
                {
                    question: "次の計算をせよ。<br>$\\left(4a^3b^2\\right)^2 \\div \\left(-8a^5b^3\\right)$",
                    options: [ "$-2ab$", "$2ab$", "$-2a$", "$-2b$" ],
                    answer: "$-2ab$",
                    rationale: "まず、累乗の部分 $\\left(4a^3b^2\\right)^2$ を計算します。<br>係数: $4^2 = 16$。<br>$a$ の部分: $\\left(a^3\\right)^2 = a^{3 \\times 2} = a^6$。<br>$b$ の部分: $\\left(b^2\\right)^2 = b^{2 \\times 2} = b^4$。<br>よって、累乗の部分は $16a^6b^4$ となります。<br>次に、これを $\\left(-8a^5b^3\\right)$ で割ります: $\\left(16a^6b^4\\right) \\div \\left(-8a^5b^3\\right)$。<br>係数: $16 \\div \\left(-8\\right) = -2$。<br>$a$ の部分: $a^6 \\div a^5 = a^{6-5} = a^1 = a$。<br>$b$ の部分: $b^4 \\div b^3 = b^{4-3} = b^1 = b$。<br>すべてを組み合わせて、$-2ab$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 30
                {
                    question: "次の計算をせよ。<br>$\\left(-xy^2z\\right)^3 \\times 2xz^2 \\div \\left(-x^3yz^4\\right)$",
                    options: [ "$2xy^5z$", "$2x^2y^5z$", "$-2xy^5z$", "$2y^5z$" ],
                    answer: "$2xy^5z$",
                    rationale: "左から順に計算します。<br>1. まず累乗: $\\left(-xy^2z\\right)^3 = \\left(-1\\right)^3 \\left(x\\right)^3 \\left(y^2\\right)^3 \\left(z\\right)^3 = -x^3y^6z^3$。<br>2. 次に乗法: $\\left(-x^3y^6z^3\\right) \\times \\left(2xz^2\\right)$<br>   係数: $\\left(-1\\right) \\times 2 = -2$<br>   $x$ の指数: $x^3 \\times x^1 = x^{3+1} = x^4$<br>   $y$ の指数: $y^6$<br>   $z$ の指数: $z^3 \\times z^2 = z^{3+2} = z^5$<br>   ここまでで $-2x^4y^6z^5$ となります。<br>3. 最後に除法: $\\left(-2x^4y^6z^5\\right) \\div \\left(-x^3yz^4\\right)$<br>   係数: $\\left(-2\\right) \\div \\left(-1\\right) = 2$<br>   $x$ の指数: $x^4 \\div x^3 = x^{4-3} = x^1 = x$<br>   $y$ の指数: $y^6 \\div y^1 = y^{6-1} = y^5$<br>   $z$ の指数: $z^5 \\div z^4 = z^{5-4} = z^1 = z$<br>すべてを組み合わせて、$2xy^5z$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 31
                {
                    question: "次の計算をせよ。<br>$\\left(-4a^2b^3\\right) \\times \\left(-a^3b\\right)$",
                    options: [ "$4a^5b^4$", "$-4a^5b^4$", "$4a^6b^3$", "$4a^5b^3$" ],
                    answer: "$4a^5b^4$",
                    rationale: "係数同士を計算します: $\\left(-4\\right) \\times \\left(-1\\right) = 4$。<br>文字 $a$ について、指数法則 $a^m \\times a^n = a^{m+n}$ を使い、指数を足します: $a^2 \\times a^3 = a^{2+3} = a^5$。<br>文字 $b$ についても同様に指数を足します: $b^3 \\times b^1 = b^{3+1} = b^4$。<br>すべてを組み合わせて、$4a^5b^4$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 32
                {
                    question: "次の計算をせよ。<br>$\\left(-\\dfrac{1}{2}x^2y\\right)^3$",
                    options: [ "$-\\dfrac{1}{8}x^6y^3$", "$\\dfrac{1}{8}x^6y^3$", "$-\\dfrac{1}{6}x^6y^3$", "$-\\dfrac{1}{8}x^5y^3$" ],
                    answer: "$-\\dfrac{1}{8}x^6y^3$",
                    rationale: "指数法則 $\\left(abc\\right)^n = a^nb^nc^n$ と $\\left(a^m\\right)^n = a^{mn}$ を使い、() の中の各部分を3乗します。<br>係数: $\\left(-\\dfrac{1}{2}\\right)^3 = \\left(-\\dfrac{1}{2}\\right) \\times \\left(-\\dfrac{1}{2}\\right) \\times \\left(-\\dfrac{1}{2}\\right) = -\\dfrac{1}{8}$。<br>$x$ の部分: $\\left(x^2\\right)^3 = x^{2 \\times 3} = x^6$。<br>$y$ の部分: $y^3$。<br>すべてを組み合わせて、$-\\dfrac{1}{8}x^6y^3$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 33
                {
                    question: "次の計算をせよ。<br>$a^7b^3 \\div \\left(a^2b^3\\right)$",
                    options: [ "$a^5$", "$a^9b^6$", "$a^5b$", "$a^5b^6$" ],
                    answer: "$a^5$",
                    rationale: "係数はありません（1です）。<br>文字 $a$ について、指数法則 $a^m \\div a^n = a^{m-n}$ を使い、指数を引き算します: $a^7 \\div a^2 = a^{7-2} = a^5$。<br>文字 $b$ についても同様に指数を引き算します: $b^3 \\div b^3 = b^{3-3} = b^0$。<br>どんな数（0以外）の0乗も 1 になるため、$b^0 = 1$ です。<br>すべてを組み合わせて、$a^5 \\times 1 = a^5$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 34
                {
                    question: "次の計算をせよ。<br>$\\left(-x\\right)^5 \\times \\left(-x\\right)^2$",
                    options: [ "$-x^7$", "$x^7$", "$x^{10}$", "$-x^{10}$" ],
                    answer: "$-x^7$",
                    rationale: "まず、それぞれの累乗を計算します。<br>$\\left(-x\\right)^5 = -x^5$ （奇数乗なので符号はマイナス）。<br>$\\left(-x\\right)^2 = x^2$ （偶数乗なので符号はプラス）。<br>次に、これらを掛け合わせます: $\\left(-x^5\\right) \\times \\left(x^2\\right)$。<br>係数は $\\left(-1\\right) \\times 1 = -1$。<br>$x$ の指数は $x^5 \\times x^2 = x^{5+2} = x^7$。<br>すべてを組み合わせて、$-x^7$ となります。<br>（別解: 底が同じ $\\left(-x\\right)$ なので、指数を足して $\\left(-x\\right)^{5+2} = \\left(-x\\right)^7 = -x^7$ と計算もできます）<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 35
                {
                    question: "次の計算をせよ。<br>$8a^4 \\div \\left(-2a\\right)^3$",
                    options: [ "$-a$", "$a$", "$-4a$", "$4a$" ],
                    answer: "$-a$",
                    rationale: "まず、累乗の部分 $\\left(-2a\\right)^3$ を計算します。<br>係数: $\\left(-2\\right)^3 = -8$。<br>$a$ の部分: $a^3$。<br>よって、累乗の部分は $-8a^3$ となります。<br>次に、割り算を実行します: $8a^4 \\div \\left(-8a^3\\right)$。<br>係数: $8 \\div \\left(-8\\right) = -1$。<br>$a$ の部分: $a^4 \\div a^3 = a^{4-3} = a^1 = a$。<br>すべてを組み合わせて、$-1 \\times a = -a$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 36
                {
                    question: "次の計算をせよ。<br>$\\left(x^2y^3\\right)^2 \\times x \\div \\left(xy^2\\right)^3$",
                    options: [ "$x^2$", "$x^2y$", "$x^2y^3$", "$x^3y$" ],
                    answer: "$x^2$",
                    rationale: "まず、2つの累乗を計算します。<br>$\\left(x^2y^3\\right)^2 = \\left(x^2\\right)^2 \\left(y^3\\right)^2 = x^4y^6$。<br>$\\left(xy^2\\right)^3 = \\left(x\\right)^3 \\left(y^2\\right)^3 = x^3y^6$。<br>元の式に代入すると、$x^4y^6 \\times x \\div \\left(x^3y^6\\right)$ となります。<br>左から順に計算します。<br>1. 乗法: $x^4y^6 \\times x = x^{4+1}y^6 = x^5y^6$。<br>2. 除法: $x^5y^6 \\div \\left(x^3y^6\\right)$<br>   $x$ の指数: $x^5 \\div x^3 = x^{5-3} = x^2$<br>   $y$ の指数: $y^6 \\div y^6 = y^{6-6} = y^0 = 1$<br>すべてを組み合わせて、$x^2 \\times 1 = x^2$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 37
                {
                    question: "次の計算をせよ。<br>$\\left(-a\\right)^2 \\times \\left(-b\\right)^3$",
                    options: [ "$-a^2b^3$", "$a^2b^3$", "$a^2b^5$", "$-a^2b^6$" ],
                    answer: "$-a^2b^3$",
                    rationale: "まず、それぞれの累乗を計算します。<br>$\\left(-a\\right)^2 = a^2$ （偶数乗なので符号はプラス）。<br>$\\left(-b\\right)^3 = -b^3$ （奇数乗なので符号はマイナス）。<br>次に、これらを掛け合わせます: $a^2 \\times \\left(-b^3\\right) = -a^2b^3$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 38
                {
                    question: "次の計算をせよ。<br>$\\left(3x^3y\\right)^2$",
                    options: [ "$9x^6y^2$", "$6x^6y^2$", "$9x^5y^2$", "$9x^6y$" ],
                    answer: "$9x^6y^2$",
                    rationale: "指数法則 $\\left(abc\\right)^n = a^nb^nc^n$ と $\\left(a^m\\right)^n = a^{mn}$ を使い、() の中の各部分を2乗します。<br>係数: $3^2 = 9$。<br>$x$ の部分: $\\left(x^3\\right)^2 = x^{3 \\times 2} = x^6$。<br>$y$ の部分: $y^2$。<br>すべてを組み合わせて、$9x^6y^2$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 39
                {
                    question: "次の計算をせよ。<br>$\\left(-12a^4b^5c^6\\right) \\div \\left(4a^2b^3c^4\\right)$",
                    options: [ "$-3a^2b^2c^2$", "$3a^2b^2c^2$", "$-3a^6b^8c^{10}$", "$-8a^2b^2c^2$" ],
                    answer: "$-3a^2b^2c^2$",
                    rationale: "係数同士を計算します: $-12 \\div 4 = -3$。<br>文字 $a$ について、指数法則 $a^m \\div a^n = a^{m-n}$ を使い、指数を引き算します: $a^4 \\div a^2 = a^{4-2} = a^2$。<br>文字 $b$ についても同様に指数を引き算します: $b^5 \\div b^3 = b^{5-3} = b^2$。<br>文字 $c$ についても同様に指数を引き算します: $c^6 \\div c^4 = c^{6-4} = c^2$。<br>すべてを組み合わせて、$-3a^2b^2c^2$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 40
                {
                    question: "次の計算をせよ。<br>$5x^2y \\times \\left(-x^3y^2\\right)^3$",
                    options: [ "$-5x^{11}y^7$", "$5x^{11}y^7$", "$-5x^8y^7$", "$-125x^{11}y^7$" ],
                    answer: "$-5x^{11}y^7$",
                    rationale: "まず、累乗の部分 $\\left(-x^3y^2\\right)^3$ を計算します。<br>係数: $\\left(-1\\right)^3 = -1$。（奇数乗なので符号はマイナス）<br>$x$ の部分: $\\left(x^3\\right)^3 = x^{3 \\times 3} = x^9$。<br>$y$ の部分: $\\left(y^2\\right)^3 = y^{2 \\times 3} = y^6$。<br>よって、累乗の部分は $-x^9y^6$ となります。<br>次に、これと $5x^2y$ を掛け合わせます: $\\left(5x^2y\\right) \\times \\left(-x^9y^6\\right)$。<br>係数: $5 \\times \\left(-1\\right) = -5$。<br>$x$ の部分: $x^2 \\times x^9 = x^{2+9} = x^{11}$。<br>$y$ の部分: $y^1 \\times y^6 = y^{1+6} = y^7$。<br>すべてを組み合わせて、$-5x^{11}y^7$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 41
                {
                    question: "次の計算をせよ。<br>$a^6 \\div a^2 \\div a^3$",
                    options: [ "$a$", "$a^{11}$", "$a^7$", "$a^0=1$" ],
                    answer: "$a$",
                    rationale: "左から順に計算します。<br>1. 最初の除法: $a^6 \\div a^2 = a^{6-2} = a^4$。（指数法則 $a^m \\div a^n = a^{m-n}$）<br>2. 次の除法: $a^4 \\div a^3 = a^{4-3} = a^1 = a$。（指数法則 $a^m \\div a^n = a^{m-n}$）<br>よって、$a$ となります。<br>（別解: 指数だけで計算 $6 - 2 - 3 = 1$）<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 42
                {
                    question: "次の計算をせよ。<br>$\\left(-\\dfrac{2}{3}ab^2\\right)^2$",
                    options: [ "$\\dfrac{4}{9}a^2b^4$", "$-\\dfrac{4}{9}a^2b^4$", "$\\dfrac{4}{6}a^2b^4$", "$\\dfrac{4}{9}a^2b^2$" ],
                    answer: "$\\dfrac{4}{9}a^2b^4$",
                    rationale: "指数法則 $\\left(abc\\right)^n = a^nb^nc^n$ と $\\left(a^m\\right)^n = a^{mn}$ を使い、() の中の各部分を2乗します。<br>係数: $\\left(-\\dfrac{2}{3}\\right)^2 = \\left(-\\dfrac{2}{3}\\right) \\times \\left(-\\dfrac{2}{3}\\right) = +\\dfrac{4}{9}$。（偶数乗なので符号はプラス）<br>$a$ の部分: $a^2$。<br>$b$ の部分: $\\left(b^2\\right)^2 = b^{2 \\times 2} = b^4$。<br>すべてを組み合わせて、$\\dfrac{4}{9}a^2b^4$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 43
                {
                    question: "次の計算をせよ。<br>$x^4y^6 \\div \\left(xy^2\\right)^3$",
                    options: [ "$x$", "$xy^0$", "$x^7y^{12}$", "$y$" ],
                    answer: "$x$",
                    rationale: "まず、累乗の部分 $\\left(xy^2\\right)^3$ を計算します。<br>$x$ の部分: $x^3$。<br>$y$ の部分: $\\left(y^2\\right)^3 = y^{2 \\times 3} = y^6$。<br>よって、累乗の部分は $x^3y^6$ となります。<br>次に、割り算を実行します: $x^4y^6 \\div \\left(x^3y^6\\right)$。<br>$x$ の部分: $x^4 \\div x^3 = x^{4-3} = x^1 = x$。<br>$y$ の部分: $y^6 \\div y^6 = y^{6-6} = y^0 = 1$。<br>すべてを組み合わせて、$x \\times 1 = x$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 44
                {
                    question: "次の計算をせよ。<br>$\\left(-a\\right)^3 \\times b^2 \\times \\left(-a\\right)$",
                    options: [ "$a^4b^2$", "$-a^4b^2$", "$a^3b^2$", "$-a^3b^2$" ],
                    answer: "$a^4b^2$",
                    rationale: "まず、累乗の部分 $\\left(-a\\right)^3$ を計算します。<br>$\\left(-a\\right)^3 = -a^3$ （奇数乗なので符号はマイナス）。<br>式は $\\left(-a^3\\right) \\times b^2 \\times \\left(-a\\right)$ となります。<br>係数: $\\left(-1\\right) \\times 1 \\times \\left(-1\\right) = 1$。（マイナスが2つでプラス）<br>$a$ の部分: $a^3 \\times a^1 = a^{3+1} = a^4$。<br>$b$ の部分: $b^2$。<br>すべてを組み合わせて、$1 \\times a^4b^2 = a^4b^2$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 45
                {
                    question: "次の計算をせよ。<br>$\\left(9x^2y^4\\right) \\div \\left(-3xy^2\\right)^2$",
                    options: [ "$1$", "$y^0$", "$-1$", "$x^0y^0$" ],
                    answer: "$1$",
                    rationale: "まず、累乗の部分 $\\left(-3xy^2\\right)^2$ を計算します。<br>係数: $\\left(-3\\right)^2 = 9$。（偶数乗なので符号はプラス）<br>$x$ の部分: $x^2$。<br>$y$ の部分: $\\left(y^2\\right)^2 = y^{2 \\times 2} = y^4$。<br>よって、累乗の部分は $9x^2y^4$ となります。<br>次に、割り算を実行します: $\\left(9x^2y^4\\right) \\div \\left(9x^2y^4\\right)$。<br>まったく同じ式で割っているので、答えは 1 となります。<br>（係数 $9 \\div 9 = 1$、$x$ は $x^2 \\div x^2 = x^0 = 1$、$y$ は $y^4 \\div y^4 = y^0 = 1$。よって $1 \\times 1 \\times 1 = 1$）<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 46
                {
                    question: "次の計算をせよ。<br>$\\left(-2x^3y\\right)^2 \\times 3y^3 \\div \\left(6x^5y^4\\right)$",
                    options: [ "$2xy$", "$2x$", "$2y$", "$12xy$" ],
                    answer: "$2xy$",
                    rationale: "左から順に計算します。<br>1. まず累乗: $\\left(-2x^3y\\right)^2 = \\left(-2\\right)^2 \\left(x^3\\right)^2 \\left(y\\right)^2 = 4x^6y^2$。<br>2. 次に乗法: $\\left(4x^6y^2\\right) \\times \\left(3y^3\\right)$<br>   係数: $4 \\times 3 = 12$<br>   $x$ の指数: $x^6$<br>   $y$ の指数: $y^2 \\times y^3 = y^{2+3} = y^5$<br>   ここまでで $12x^6y^5$ となります。<br>3. 最後に除法: $\\left(12x^6y^5\\right) \\div \\left(6x^5y^4\\right)$<br>   係数: $12 \\div 6 = 2$<br>   $x$ の指数: $x^6 \\div x^5 = x^{6-5} = x^1 = x$<br>   $y$ の指数: $y^5 \\div y^4 = y^{5-4} = y^1 = y$<br>すべてを組み合わせて、$2xy$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 47
                {
                    question: "次の計算をせよ。<br>$a^m \\times a^n$",
                    options: [ "$a^{m+n}$", "$a^{mn}$", "$a^{m-n}$", "$\\left(2a\\right)^{m+n}$" ],
                    answer: "$a^{m+n}$",
                    rationale: "これは指数法則の基本的な公式の一つです。底（この場合は $a$）が同じである単項式同士の乗法（掛け算）では、指数（$m$ と $n$）を足し合わせます。したがって、$a^m \\times a^n = a^{m+n}$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 48
                {
                    question: "次の計算をせよ。<br>$\\left(a^m\\right)^n$",
                    options: [ "$a^{mn}$", "$a^{m+n}$", "$a^{m^n}$", "$na^m$" ],
                    answer: "$a^{mn}$",
                    rationale: "これは指数法則の基本的な公式の一つです。累乗の、さらに累乗を計算する場合、指数（$m$ と $n$）を掛け合わせます。したがって、$\\left(a^m\\right)^n = a^{m \\times n} = a^{mn}$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 49
                {
                    question: "次の計算をせよ。<br>$a^m \\div a^n \\quad \\left(m>n\\right)$",
                    options: [ "$a^{m-n}$", "$a^{m+n}$", "$a^{m/n}$", "$a^{m \\times n}$" ],
                    answer: "$a^{m-n}$",
                    rationale: "これは指数法則の基本的な公式の一つです。底（この場合は $a$）が同じである単項式同士の除法（割り算）では、指数（$m$ と $n$）を引き算します。したがって、$a^m \\div a^n = a^{m-n}$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                 // 問題 50
                {
                    question: "次の計算をせよ。<br>$\\left(ab\\right)^n$",
                    options: [ "$a^nb^n$", "$a^n+b^n$", "$ab^n$", "$a^nb$" ],
                    answer: "$a^nb^n$",
                    rationale: "これは指数法則の基本的な公式の一つです。複数の項（この場合は $a$ と $b$）の積をまとめて累乗する場合、それぞれの項を累乗したものの積と等しくなります。したがって、$\\left(ab\\right)^n = a^nb^n$ となります。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7707/63105' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                }
            ]; // ← allQuizData をここで閉じる
            // --- 元のクイズデータの終わり ---
