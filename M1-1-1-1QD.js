// --- クイズデータ(QD)はここに貼り付けてください ---
window.QUIZ_DATA = [
            // 問題 1
            {
                question: "単項式 $3x^2$ の係数を答えよ。",
                options: [ "$3$", "$2$", "$x$", "$3x$" ],
                answer: "$3$",
                rationale: "<strong>定義: </strong>係数（けいすう）とは、単項式において文字に掛けられている「数の部分」を指します。<br><strong>解説: </strong>この式 $3x^2$ は、$3 \\times x^2$ という意味です。したがって、文字 $x^2$ に掛けられている数は $3$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 2
            {
                question: "単項式 $-5a^2b$ の係数を答えよ。",
                options: [ "$-5$", "$5$", "$2$", "$3$" ],
                answer: "$-5$",
                rationale: "<strong>定義: </strong>係数とは、文字に掛けられている「数の部分」です。<br><strong>解説: </strong>この式 $-5a^2b$ は、$-5 \\times a^2 \\times b$ という意味です。したがって、文字 $a^2b$ に掛けられている数は $-5$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 3
            {
                question: "単項式 $x$ の係数を答えよ。",
                options: [ "$1$", "$0$", "$x$", "なし" ],
                answer: "$1$",
                rationale: "<strong>定義: </strong>係数とは、文字に掛けられている「数の部分」です。<br><strong>解説: </strong>$x$ という文字は、$1 \\times x$ のように $1$ が掛けられているとみなします。したがって、係数は $1$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 4
            {
                question: "単項式 $-y$ の係数を答えよ。",
                options: [ "$-1$", "$1$", "$0$", "$-y$" ],
                answer: "$-1$",
                rationale: "<strong>定義: </strong>係数とは、文字に掛けられている「数の部分」です。<br><strong>解説: </strong>$-y$ という文字は、$-1 \\times y$ のように $-1$ が掛けられているとみなします。したがって、係数は $-1$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 5
            {
                question: "単項式 $\\frac{2}{3}x^2y$ の係数を答えよ。",
                options: [ "$\\dfrac{2}{3}$", "$2$", "$3$", "$\\dfrac{3}{2}$" ],
                answer: "$\\dfrac{2}{3}$",
                rationale: "<strong>定義: </strong>係数とは、文字に掛けられている「数の部分」です。<br><strong>解説: </strong>この式は $\\dfrac{2}{3} \\times x^2 \\times y$ という意味です。文字 $x^2y$ に掛けられている数の部分は $\\dfrac{2}{3}$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 6
            {
                question: "単項式 $4x^3$ の次数を答えよ。",
                options: [ "$3$", "$4$", "$1$", "$7$" ],
                answer: "$3$",
                rationale: "<strong>定義: </strong>単項式の次数とは、掛け合わされている「文字の個数」です。<br><strong>解説: </strong>$x^3$ は $x$ を $3$ 回掛けたもの（$x \\times x \\times x$）なので、文字の個数は $3$ 個です。よって次数は $3$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 7
            {
                question: "単項式 $-2ab^2$ の次数を答えよ。",
                options: [ "$3$", "$2$", "$1$", "$-2$" ],
                answer: "$3$",
                rationale: "<strong>定義: </strong>単項式の次数とは、掛け合わされている「文字の個数」の合計です。<br><strong>解説: </strong>この式は $-2 \\times a \\times b \\times b$ という意味です。掛けられている文字は $a$ が1個、$b$ が2個なので、合計は $1+2=3$ 個です。したがって、次数は $3$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 8
            {
                question: "単項式 $5$ の次数を答えよ。",
                options: [ "$0$", "$1$", "$5$", "なし" ],
                answer: "$0$",
                rationale: "<strong>定義: </strong>次数とは、掛け合わされている「文字の個数」です。<br><strong>解説: </strong>$5$ は文字を一つも掛けていない（$5x^0$ のように $0$ 個の文字が掛かっている）と考えるため、次数は $0$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 9
            {
                question: "単項式 $3x^2y^3$ の次数を答えよ。",
                options: [ "$5$", "$2$", "$3$", "$6$" ],
                answer: "$5$",
                rationale: "<strong>定義: </strong>単項式の次数とは、掛け合わされている「文字の個数」の合計です。<br><strong>解説: </strong>掛けられている文字は $x$ が2個、$y$ が3個です。合計は $2+3=5$ 個なので、次数は $5$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 10
            {
                question: "単項式 $-abc$ の次数を答えよ。",
                options: [ "$3$", "$1$", "$-1$", "$0$" ],
                answer: "$3$",
                rationale: "<strong>定義: </strong>単項式の次数とは、掛け合わされている「文字の個数」の合計です。<br><strong>解説: </strong>掛けられている文字は $a$ が1個、$b$ が1個、$c$ が1個です。合計は $1+1+1=3$ 個なので、次数は $3$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 11
            {
                question: "単項式 $ax^2$ において、$x$ に着目したときの係数を答えよ。",
                options: [ "$a$", "$1$", "$2$", "$ax$" ],
                answer: "$a$",
                rationale: "<strong>定義: </strong>「$x$ に着目する」とは、$x$ だけを文字として扱い、それ以外の文字（この場合は $a$）は数（係数の一部）として扱う、という意味です。<br><strong>解説: </strong>$ax^2 = a \\times x^2$ なので、$x^2$ に掛けられている $a$ が係数です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 12
            {
                question: "単項式 $-3ay^2$ において、$y$ に着目したときの係数を答えよ。",
                options: [ "$-3a$", "$-3$", "$a$", "$2$" ],
                answer: "$-3a$",
                rationale: "<strong>定義: </strong>「$y$ に着目する」とは、$y$ だけを文字として扱い、それ以外の文字（この場合は $a$）は数（係数の一部）として扱う、という意味です。<br><strong>解説: </strong>$-3ay^2 = (-3a) \\times y^2$ なので、$y^2$ に掛けられている $-3a$ が係数です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 13
            {
                question: "単項式 $2a^2x^3$ において、$x$ に着目したときの次数を答えよ。",
                options: [ "$3$", "$2$", "$5$", "$6$" ],
                answer: "$3$",
                rationale: "<strong>定義: </strong>「$x$ に着目する」とは、$x$ だけを文字として数える、という意味です。<br><strong>解説: </strong>掛けられている $x$ の個数は $3$ 個なので、次数は $3$ です。（$a^2$ は係数の一部として扱います）<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 14
            {
                question: "単項式 $4x^2y^3$ において、$y$ に着目したときの次数を答えよ。",
                options: [ "$3$", "$2$", "$5$", "$4$" ],
                answer: "$3$",
                rationale: "<strong>定義: </strong>「$y$ に着目する」とは、$y$ だけを文字として数える、という意味です。<br><strong>解説: </strong>掛けられている $y$ の個数は $3$ 個なので、次数は $3$ です。（$4x^2$ は係数の一部として扱います）<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 15
            {
                question: "単項式 $-5abx^4$ において、$a$ と $b$ に着目したときの次数を答えよ。",
                options: [ "$2$", "$1$", "$4$", "$6$" ],
                answer: "$2$",
                rationale: "<strong>定義: </strong>「$a$ と $b$ に着目する」とは、$a$ と $b$ だけを文字として数える、という意味です。<br><strong>解説: </strong>掛けられている文字は $a$ が1個、$b$ が1個なので、合計 $1+1=2$ 個です。次数は $2$ です。（$-5x^4$ は係数の一部として扱います）<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // --- 多項式の項と次数、定数項 (15問) ---
            // 問題 16
            {
                question: "多項式 $2x^2 - 3x + 1$ の項をすべて答えよ。",
                options: [ "$2x^2, -3x, 1$", "$2x^2, 3x, 1$", "$2x^2, -3x$", "$2x^2, 1$" ],
                answer: "$2x^2, -3x, 1$",
                rationale: "<strong>定義: </strong>多項式の「項」とは、多項式を「+」で結ばれた単項式の集まりとして見たときの、各単項式のことです。<br><strong>解説: </strong>$2x^2 - 3x + 1$ は $2x^2 + (-3x) + 1$ と書き直せます。したがって、項は $2x^2$, $-3x$, $1$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 17
            {
                question: "多項式 $x^3 - 5x + 2$ の定数項を答えよ。",
                options: [ "$2$", "$-5$", "$1$", "$0$" ],
                answer: "$2$",
                rationale: "<strong>定義: </strong>多項式の項の中で、文字を含まない項（数だけの項）を「定数項」と呼びます。<br><strong>解説: </strong>この式の項は $x^3, -5x, 2$ です。このうち文字を含まない項は $2$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 18
            {
                question: "多項式 $3x^2 - 4x$ の定数項を答えよ。",
                options: [ "$0$", "$-4$", "$3$", "なし" ],
                answer: "$0$",
                rationale: "<strong>定義: </strong>定数項とは、文字を含まない項のことです。<br><strong>解説: </strong>この式の項は $3x^2$ と $-4x$ です。どちらも文字 $x$ を含んでいます。文字を含まない項（数だけの項）がないため、定数項は $0$ とみなします。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 19
            {
                question: "多項式 $x^2 - 2x + 5$ の次数を答えよ。",
                options: [ "$2$", "$1$", "$0$", "$3$" ],
                answer: "$2$",
                rationale: "<strong>定義: </strong>多項式の次数は、各項の次数のうち、最も高いものを採用します。<br><strong>解説: </strong><br>・$x^2$ の次数は $2$<br>・$-2x$ の次数は $1$<br>・$5$（定数項）の次数は $0$<br>最も高い次数は $2$ なので、この多項式は2次式です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 20
            {
                question: "多項式 $1 - 5x + 2x^3$ の次数を答えよ。",
                options: [ "$3$", "$1$", "$0$", "$2$" ],
                answer: "$3$",
                rationale: "<strong>定義: </strong>多項式の次数は、各項の次数のうち、最も高いものを採用します。<br><strong>解説: </strong><br>・$1$ の次数は $0$<br>・$-5x$ の次数は $1$<br>・$2x^3$ の次数は $3$<br>最も高い次数は $3$ なので、この多項式は3次式です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 21
            {
                question: "多項式 $x - 3 + x^4 - 2x^2$ を降べきの順に整理せよ。",
                options: [ "$x^4 - 2x^2 + x - 3$", "$-3 + x - 2x^2 + x^4$", "$x^4 + x - 2x^2 - 3$", "$x - 2x^2 + x^4 - 3$" ],
                answer: "$x^4 - 2x^2 + x - 3$",
                rationale: "<strong>定義: </strong>降べきの順（こうべきのじゅん）とは、ある文字に着目して、その次数が「高い」項から「低い」項の順に並べることです。<br><strong>解説: </strong>$x$ に着目すると、$x^4$（4次）、$-2x^2$（2次）、$x$（1次）、$-3$（0次）の順になります。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 22
            {
                question: "多項式 $ax^2 + bx + c$ （$a \\neq 0$） は何次式か。",
                options: [ "$2$次式", "$1$次式", "$3$次式", "定数" ],
                answer: "$2$次式",
                rationale: "<strong>定義: </strong>多項式の次数は、最も高い項の次数です。<br><strong>解説: </strong>$x$ に着目したとき、各項の次数は $ax^2 \\to 2$次、$bx \\to 1$次、$c \\to 0$次 です。$a \\neq 0$ なので、最も高い次数は $2$ です。よって2次式です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 23
            {
                question: "多項式 $x^2y + xy^2 - 3$ は $x$ について何次式か。",
                options: [ "$2$次式", "$1$次式", "$3$次式", "$0$次式" ],
                answer: "$2$次式",
                rationale: "<strong>定義: </strong>特定の文字に着目した場合、他の文字は係数（数）として扱います。<br><strong>解説: </strong>$x$ に着目すると、$y$ は数として扱います。<br>・$x^2y = (y)x^2 \\implies x$ について2次<br>・$xy^2 = (y^2)x \\implies x$ について1次<br>・$-3 \\implies x$ について0次<br>最も高い次数は $2$ なので、$x$ についての2次式です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 24
            {
                question: "多項式 $x^2y + xy^2 - 3$ は $y$ について何次式か。",
                options: [ "$2$次式", "$1$次式", "$3$次式", "$0$次式" ],
                answer: "$2$次式",
                rationale: "<strong>定義: </strong>特定の文字に着目した場合、他の文字は係数（数）として扱います。<br><strong>解説: </strong>$y$ に着目すると、$x$ は数として扱います。<br>・$x^2y = (x^2)y \\implies y$ について1次<br>・$xy^2 = (x)y^2 \\implies y$ について2次<br>・$-3 \\implies y$ について0次<br>最も高い次数は $2$ なので、$y$ についての2次式です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 25
            {
                question: "多項式 $x^2 + ax + a^2 - 1$ の $x$ についての定数項を答えよ。",
                options: [ "$a^2-1$", "$-1$", "$a^2$", "$a$" ],
                answer: "$a^2-1$",
                rationale: "<strong>定義: </strong>特定の文字に着目した場合、その文字を含まない項をすべて定数項といいます。<br><strong>解説: </strong>$x$ に着目した場合、$x$ を含まない項は $a^2$ と $-1$ です。よって、定数項は $a^2-1$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 26
            {
                question: "多項式 $ax^2+bx+c$ の $x^2$ の係数を答えよ。",
                options: [ "$a$", "$b$", "$c$", "$1$" ],
                answer: "$a$",
                rationale: "$x^2$ の項（$x^2$ が含まれる項）は $ax^2$ です。その係数（数の部分）は $a$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 27
            {
                question: "多項式 $3x^4 - 2x^2 + 5$ は何次式か。",
                options: [ "$4$次式", "$2$次式", "$3$次式", "$5$次式" ],
                answer: "$4$次式",
                rationale: "各項の次数は $3x^4$ が4次、$-2x^2$ が2次、$5$ が0次です。最も高い次数は $4$ なので、この多項式は4次式です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 28
            {
                question: "多項式 $x^3 + 2x^2y + y^3$ は $x$ と $y$ について何次式か。",
                options: [ "$3$次式", "$2$次式", "$4$次式", "$6$次式" ],
                answer: "$3$次式",
                rationale: "$x$ と $y$ の両方に着目する場合、各項の文字の個数の合計で次数を判断します。<br>・$x^3$ の次数は $3$<br>・$2x^2y$ の次数は $x$ が2個, $y$ が1個で合計 $3$<br>・$y^3$ の次数は $3$<br>最も高い次数は $3$ なので、この多項式は3次式です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 29
            {
                question: "多項式 $2x + 3y - 5$ の項をすべて答えよ。",
                options: [ "$2x, 3y, -5$", "$2x, 3y, 5$", "$2x, 3y$", "$2, 3, -5$" ],
                answer: "$2x, 3y, -5$",
                rationale: "項は $2x$, $3y$, $-5$ の3つです。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 30
            {
                question: "多項式 $-x^5 + 4x - 2$ の次数と定数項を答えよ。",
                options: [ "次数$5$, 定数項$-2$", "次数$5$, 定数項$2$", "次数$1$, 定数項$-2$", "次数$5$, 定数項なし" ],
                answer: "次数$5$, 定数項$-2$",
                rationale: "各項の次数は $-x^5$ が$5$次、$4x$ が$1$次、$-2$ が$0$次です。<br>最も高い次数は $5$ です。<br>文字を含まない定数項は $-2$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // --- 同類項 (20問) ---
            // 問題 31
            {
                question: "次の式 $3x, \\ 2y, \\ -5x, \\ x^2$ のうち、同類項の組を答えよ。",
                options: [ "$3x$ と $-5x$", "$3x$ と $2y$", "$3x$ と $x^2$", "$2y$ と $x^2$" ],
                answer: "$3x$ と $-5x$",
                rationale: "<strong>定義: </strong>同類項とは、文字の部分がまったく同じ項のことです。<br><strong>解説: </strong>$3x$ と $-5x$ は、どちらも文字の部分が $x$ だけであり共通しているため、同類項です。<br>$x^2$ は次数が異なるため同類項ではありません。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 32
            {
                question: "次の式 $2a^2, \\ 3ab, \\ -a^2, \\ 4b^2$ のうち、同類項の組を答えよ。",
                options: [ "$2a^2$ と $-a^2$", "$2a^2$ と $4b^2$", "$3ab$ と $4b^2$", "$2a^2$ と $3ab$" ],
                answer: "$2a^2$ と $-a^2$",
                rationale: "<strong>定義: </strong>同類項とは、文字の部分がまったく同じ項のことです。<br><strong>解説: </strong>$2a^2$ と $-a^2$ は、どちらも文字の部分が $a^2$ で共通しているため、同類項です。<br>$3ab$ や $4b^2$ は文字の部分が異なるため、同類項ではありません。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 33
            {
                question: "次の式の同類項をまとめよ。<br>$3x + 2x$",
                options: [ "$5x$", "$6x$", "$5x^2$", "$x$" ],
                answer: "$5x$",
                rationale: "<strong>定義: </strong>同類項は、係数を足し（引き）算してまとめることができます。<br><strong>解説: </strong>$3x$ と $2x$ は同類項です。係数 $3$ と $2$ を足して $5$ になります。<br>$3x + 2x = (3+2)x = 5x$<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 34
            {
                question: "次の式の同類項をまとめよ。<br>$4a - 7a$",
                options: [ "$-3a$", "$3a$", "$-11a$", "$-3a^2$" ],
                answer: "$-3a$",
                rationale: "<strong>定義: </strong>同類項は、係数を足し（引き）算してまとめることができます。<br><strong>解説: </strong>$4a$ と $-7a$ は同類項です。係数 $4$ と $-7$ を計算します。<br>$4a - 7a = (4-7)a = -3a$<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 35
            {
                question: "次の式の同類項をまとめよ。<br>$2x^2 + 3x - x^2 + 5x$",
                options: [ "$x^2 + 8x$", "$3x^2 + 8x$", "$x^2 - 2x$", "$2x^2 + 8x$" ],
                answer: "$x^2 + 8x$",
                rationale: "<strong>解説: </strong>$x^2$ の項（$2x^2$ と $-x^2$）と、$x$ の項（$3x$ と $5x$）をそれぞれまとめます。<br>・$x^2$ の項: $2x^2 - x^2 = (2-1)x^2 = 1x^2 = x^2$<br>・$x$ の項: $3x + 5x = (3+5)x = 8x$<br>合わせて $x^2 + 8x$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 36
            {
                question: "次の式の同類項をまとめよ。<br>$5a + 3b - 2a + 4b$",
                options: [ "$3a + 7b$", "$7a + 7b$", "$3a - b$", "$7a + b$" ],
                answer: "$3a + 7b$",
                rationale: "<strong>解説: </strong>$a$ の項（$5a$ と $-2a$）と、$b$ の項（$3b$ と $4b$）をそれぞれまとめます。<br>・$a$ の項: $5a - 2a = (5-2)a = 3a$<br>・$b$ の項: $3b + 4b = (3+4)b = 7b$<br>合わせて $3a + 7b$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 37
            {
                question: "次の式の同類項をまとめよ。<br>$x^2 - 3x + 4 + 2x^2 + x - 5$",
                options: [ "$3x^2 - 2x - 1$", "$3x^2 - 4x - 1$", "$x^2 - 2x - 1$", "$3x^2 + 2x + 9$" ],
                answer: "$3x^2 - 2x - 1$",
                rationale: "<strong>解説: </strong>$x^2$ の項、$x$ の項、定数項をそれぞれまとめます。<br>・$x^2$ の項: $x^2 + 2x^2 = (1+2)x^2 = 3x^2$<br>・$x$ の項: $-3x + x = (-3+1)x = -2x$<br>・定数項: $4 - 5 = -1$<br>合わせて $3x^2 - 2x - 1$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 38
            {
                question: "次の式の同類項をまとめよ。<br>$2ab - 3a + 4ab + a$",
                options: [ "$6ab - 2a$", "$6ab + 4a$", "$-ab - 2a$", "$6a^2b - 2a$" ],
                answer: "$6ab - 2a$",
                rationale: "<strong>解説: </strong>$ab$ の項（$2ab$ と $4ab$）と、$a$ の項（$-3a$ と $a$）をそれぞれまとめます。<br>・$ab$ の項: $2ab + 4ab = (2+4)ab = 6ab$<br>・$a$ の項: $-3a + a = (-3+1)a = -2a$<br>合わせて $6ab - 2a$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 39
            {
                question: "次の式の同類項をまとめよ。<br>$0.5x + 1.2y - 0.3x + 0.8y$",
                options: [ "$0.2x + 2.0y$", "$0.8x + 2.0y$", "$0.2x + 0.4y$", "$0.8x + 0.4y$" ],
                answer: "$0.2x + 2.0y$",
                rationale: "<strong>解説: </strong>$x$ の項と $y$ の項をそれぞれまとめます。<br>・$x$ の項: $0.5x - 0.3x = (0.5-0.3)x = 0.2x$<br>・$y$ の項: $1.2y + 0.8y = (1.2+0.8)y = 2.0y$<br>合わせて $0.2x + 2.0y$（または $0.2x+2y$）です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 40
            {
                question: "次の式の同類項をまとめよ。<br>$\\dfrac{1}{2}a + \\dfrac{1}{3}b + \\dfrac{1}{4}a - \\dfrac{1}{6}b$",
                options: [ "$\\dfrac{3}{4}a + \\dfrac{1}{6}b$", "$\\dfrac{3}{4}a + \\dfrac{1}{2}b$", "$\\dfrac{1}{4}a + \\dfrac{1}{6}b$", "$\\dfrac{2}{6}a + \\dfrac{1}{6}b$" ],
                answer: "$\\dfrac{3}{4}a + \\dfrac{1}{6}b$",
                rationale: "<strong>解説: </strong>$a$ の項と $b$ の項をそれぞれまとめます。<br>・$a$ の項: $\\dfrac{1}{2}a + \\dfrac{1}{4}a = \\dfrac{2}{4}a + \\dfrac{1}{4}a = \\left(\\dfrac{2+1}{4}\\right)a = \\dfrac{3}{4}a$<br>・$b$ の項: $\\dfrac{1}{3}b - \\dfrac{1}{6}b = \\dfrac{2}{6}b - \\dfrac{1}{6}b = \\left(\\dfrac{2-1}{6}\\right)b = \\dfrac{1}{6}b$<br>合わせて $\\dfrac{3}{4}a + \\dfrac{1}{6}b$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 41
            {
                question: "次の式を計算せよ。<br>$(2x^2+3x-1) + (x^2-5x+2)$",
                options: [ "$3x^2 - 2x + 1$", "$3x^2 + 8x + 1$", "$x^2 - 2x + 1$", "$3x^2 - 2x - 3$" ],
                answer: "$3x^2 - 2x + 1$",
                rationale: "<strong>解説: </strong>多項式の足し算は、同類項同士の係数を足します。<br>・$x^2$ の項: $2 + 1 = 3$<br>・$x$ の項: $3 + (-5) = -2$<br>・定数項: $-1 + 2 = 1$<br>よって $3x^2 - 2x + 1$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 42
            {
                question: "次の式を計算せよ。<br>$(3a^2-2a+5) - (a^2+4a-3)$",
                options: [ "$2a^2 - 6a + 8$", "$4a^2 + 2a + 2$", "$2a^2 + 2a + 8$", "$2a^2 - 6a + 2$" ],
                answer: "$2a^2 - 6a + 8$",
                rationale: "<strong>解説: </strong>多項式の引き算は、引く方の式の各項の符号を変えて足します。<br>$(3a^2-2a+5) + (-a^2-4a+3)$<br>・$a^2$ の項: $3 + (-1) = 2$<br>・$a$ の項: $-2 + (-4) = -6$<br>・定数項: $5 + 3 = 8$<br>よって $2a^2 - 6a + 8$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 43
            {
                question: "次の式を計算せよ。<br>$2(x+3y) + 3(2x-y)$",
                options: [ "$8x + 3y$", "$8x + 9y$", "$8x - 3y$", "$4x + 3y$" ],
                answer: "$8x + 3y$",
                rationale: "<strong>解説: </strong>まず分配法則でカッコを外します。<br>$2(x+3y) = 2x + 6y$<br>$3(2x-y) = 6x - 3y$<br>次に、同類項をまとめます。<br>$(2x + 6y) + (6x - 3y) = (2x+6x) + (6y-3y) = 8x + 3y$<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 44
            {
                question: "次の式を計算せよ。<br>$4(a^2-2a+1) - 2(2a^2-3a-2)$",
                options: [ "$-2a + 8$", "$-2a$", "$-14a+8$", "$8a^2-2a$" ],
                answer: "$-2a + 8$",
                rationale: "<strong>解説: </strong>まず分配法則でカッコを外します。特に後半は $-2$ を掛けることに注意します。<br>$(4a^2-8a+4) - (4a^2-6a-4)$<br>$= 4a^2-8a+4 - 4a^2+6a+4$<br>同類項をまとめます。<br>$(4a^2-4a^2) + (-8a+6a) + (4+4) = 0a^2 - 2a + 8 = -2a + 8$<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 45
            {
                question: " $A=x^2+x+1, B=2x^2-x-3$ のとき、$A+B$ を計算せよ。",
                options: [ "$3x^2 - 2$", "$3x^2 + 2x - 2$", "$3x^2 - 2x - 2$", "$-x^2 + 2x + 4$" ],
                answer: "$3x^2 - 2$",
                rationale: "<strong>解説: </strong>$A+B = (x^2+x+1) + (2x^2-x-3)$<br>同類項をまとめます。<br>・$x^2$ の項: $1 + 2 = 3$<br>・$x$ の項: $1 + (-1) = 0$<br>・定数項: $1 + (-3) = -2$<br>よって $3x^2 + 0x - 2 = 3x^2 - 2$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 46
            {
                question: " $A=x^2+x+1, B=2x^2-x-3$ のとき、$A-B$ を計算せよ。",
                options: [ "$-x^2 + 2x + 4$", "$3x^2 - 2$", "$-x^2 + 4$", "$x^2 - 2x - 4$" ],
                answer: "$-x^2 + 2x + 4$",
                rationale: "<strong>解説: </strong>$A-B = (x^2+x+1) - (2x^2-x-3)$<br>カッコを外すとき、Bの各項の符号が変わることに注意します。<br>$x^2+x+1 - 2x^2+x+3$<br>・$x^2$ の項: $1 - 2 = -1$<br>・$x$ の項: $1 + 1 = 2$<br>・定数項: $1 + 3 = 4$<br>よって $-x^2 + 2x + 4$ です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 47
            {
                question: " $A=x^2+x+1, B=2x^2-x-3$ のとき、$2A+B$ を計算せよ。",
                options: [ "$4x^2 + x - 1$", "$4x^2 + 3x - 1$", "$3x^2 + x - 2$", "$4x^2 - x + 5$" ],
                answer: "$4x^2 + x - 1$",
                rationale: "<strong>解説: </strong>$2A+B = 2(x^2+x+1) + (2x^2-x-3)$<br>まず $2A$ を計算（分配法則）します。<br>$(2x^2+2x+2) + (2x^2-x-3)$<br>同類項をまとめます。<br>$(2+2)x^2 + (2-1)x + (2-3) = 4x^2 + x - 1$<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 48
            {
                question: " $A=x^2+x+1, B=2x^2-x-3$ のとき、$A-3B$ を計算せよ。",
                options: [ "$-5x^2 + 4x + 10$", "$-5x^2 - 2x - 8$", "$7x^2 - 2x - 8$", "$-5x^2 + 4x - 8$" ],
                answer: "$-5x^2 + 4x + 10$",
                rationale: "<strong>解説: </strong>$A-3B = (x^2+x+1) - 3(2x^2-x-3)$<br>まず $-3B$ を計算（分配法則）します。<br>$(x^2+x+1) + (-6x^2+3x+9)$<br>同類項をまとめます。<br>$(1-6)x^2 + (1+3)x + (1+9) = -5x^2 + 4x + 10$<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 49
            {
                question: " $x^2y$ と同類項であるものを答えよ。(選択肢から解答を選んでください)",
                options: [ "$-3x^2y$", "$xy^2$", "$x^2$", "$2xy$" ],
                answer: "$-3x^2y$",
                rationale: "<strong>定義: </strong>同類項とは、文字の部分がまったく同じ項のことです。<br><strong>解説: </strong>$x$ が2個、 $y$ が1個掛けられている $x^2y$ と同じ文字の組み合わせは $-3x^2y$ だけです。<br>$xy^2$ は $y$ が2個なので異なります。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            },
            // 問題 50
            {
                question: " $-5$（定数）と同類項であるものを答えよ。（選択肢から解答を選んでください）",
                options: [ "$10$", "$x$", "$-5x$", "$x^2$" ],
                answer: "$10$",
                rationale: "<strong>定義: </strong>同類項とは、文字の部分がまったく同じ項のことです。<br><strong>解説: </strong>$-5$ は文字を含まない「定数項」です。<br>$10$ も文字を含まない「定数項」なので、同類項です。<button class='speak-button' onclick='speakRationale(this)'>🔊</button><br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7707/63099' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
            }
            ];
            // --- 問題データの終わり ---
