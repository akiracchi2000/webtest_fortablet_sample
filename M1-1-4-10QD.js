// --- クイズデータ(QD)はここに貼り付けてください ---
const allQuizData = [
                // --- タイプ1: $\sqrt{x \pm 4a}$ $x=a^2+4$ ---
                // 問題 1 (例題類似)
                {
                    question: "$x=a^2+4$ のとき，$\\sqrt{x+4a}$ を簡単にせよ。",
                    options: [ "$|a+2|$", "$a+2$", "$a-2$", "$|a-2|$" ],
                    answer: "$|a+2|$",
                    rationale: "$\\sqrt{x+4a} = \\sqrt{\\left(a^2+4\\right)+4a} = \\sqrt{a^2+4a+4}$<br>$= \\sqrt{\\left(a+2\\right)^2} = |a+2|$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 2 (例題類似)
                {
                    question: "$x=a^2+4$ のとき，$\\sqrt{x-4a}$ を簡単にせよ。",
                    options: [ "$|a-2|$", "$a-2$", "$a+2$", "$|a+2|$" ],
                    answer: "$|a-2|$",
                    rationale: "$\\sqrt{x-4a} = \\sqrt{\\left(a^2+4\\right)-4a} = \\sqrt{a^2-4a+4}$<br>$= \\sqrt{\\left(a-2\\right)^2} = |a-2|$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 3
                {
                    question: "$x=a^2+4$, $a>2$ のとき，$\\sqrt{x+4a}+\\sqrt{x-4a}$ の値を求めよ。",
                    options: [ "$2a$", "$4$", "$-4$", "$-2a$" ],
                    answer: "$2a$",
                    rationale: "$\\sqrt{x+4a} = |a+2|$, $\\sqrt{x-4a} = |a-2|$ です。<br>$a>2$ のとき、$a+2 > 0$, $a-2 > 0$ です。<br>よって $\\left(a+2\\right) + \\left(a-2\\right) = 2a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 4
                {
                    question: "$x=a^2+4$, $a>2$ のとき，$\\sqrt{x+4a}-\\sqrt{x-4a}$ の値を求めよ。",
                    options: [ "$4$", "$2a$", "$-2a$", "$-4$" ],
                    answer: "$4$",
                    rationale: "$\\sqrt{x+4a} = |a+2|$, $\\sqrt{x-4a} = |a-2|$ です。<br>$a>2$ のとき、$a+2 > 0$, $a-2 > 0$ です。<br>よって $\\left(a+2\\right) - \\left(a-2\\right) = a+2-a+2 = 4$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 5
                {
                    question: "$x=a^2+4$, $-2 < a < 2$ のとき，$\\sqrt{x+4a}+\\sqrt{x-4a}$ の値を求めよ。",
                    options: [ "$4$", "$2a$", "$-2a$", "$-4$" ],
                    answer: "$4$",
                    rationale: "$\\sqrt{x+4a} = |a+2|$, $\\sqrt{x-4a} = |a-2|$ です。<br>$-2 < a < 2$ のとき、$a+2 > 0$, $a-2 < 0$ です。<br>よって $|a+2| = a+2$<br>$|a-2| = -\\left(a-2\\right) = -a+2$<br>与式 $= \\left(a+2\\right) + \\left(-a+2\\right) = 4$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 6
                {
                    question: "$x=a^2+4$, $-2 < a < 2$ のとき，$\\sqrt{x+4a}-\\sqrt{x-4a}$ の値を求めよ。",
                    options: [ "$2a$", "$4$", "$-4$", "$-2a$" ],
                    answer: "$2a$",
                    rationale: "$\\sqrt{x+4a} = |a+2|$, $\\sqrt{x-4a} = |a-2|$ です。<br>$-2 < a < 2$ のとき、$a+2 > 0$, $a-2 < 0$ です。<br>よって $|a+2| = a+2$<br>$|a-2| = -\\left(a-2\\right) = -a+2$<br>与式 $= \\left(a+2\\right) - \\left(-a+2\\right) = a+2+a-2 = 2a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 7
                {
                    question: "$x=a^2+4$, $a < -2$ のとき，$\\sqrt{x+4a}+\\sqrt{x-4a}$ の値を求めよ。",
                    options: [ "$-2a$", "$4$", "$-4$", "$2a$" ],
                    answer: "$-2a$",
                    rationale: "$\\sqrt{x+4a} = |a+2|$, $\\sqrt{x-4a} = |a-2|$ です。<br>$a < -2$ のとき、$a+2 < 0$, $a-2 < 0$ です。<br>よって $|a+2| = -\\left(a+2\\right) = -a-2$<br>$|a-2| = -\\left(a-2\\right) = -a+2$<br>与式 $= \\left(-a-2\\right) + \\left(-a+2\\right) = -2a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 8
                {
                    question: "$x=a^2+4$, $a < -2$ のとき，$\\sqrt{x+4a}-\\sqrt{x-4a}$ の値を求めよ。",
                    options: [ "$-4$", "$2a$", "$-2a$", "$4$" ],
                    answer: "$-4$",
                    rationale: "$\\sqrt{x+4a} = |a+2|$, $\\sqrt{x-4a} = |a-2|$ です。<br>$a < -2$ のとき、$a+2 < 0$, $a-2 < 0$ です。<br>よって $|a+2| = -\\left(a+2\\right) = -a-2$<br>$|a-2| = -\\left(a-2\\right) = -a+2$<br>与式 $= \\left(-a-2\\right) - \\left(-a+2\\right) = -a-2+a-2 = -4$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // --- タイプ2: $\sqrt{x \pm 2a}$ $x=a^2+1$ ---
                // 問題 9
                {
                    question: "$x=a^2+1$ のとき，$\\sqrt{x+2a}$ を簡単にせよ。",
                    options: [ "$|a+1|$", "$a+1$", "$a-1$", "$|a-1|$" ],
                    answer: "$|a+1|$",
                    rationale: "$\\sqrt{x+2a} = \\sqrt{\\left(a^2+1\\right)+2a} = \\sqrt{a^2+2a+1}$<br>$= \\sqrt{\\left(a+1\\right)^2} = |a+1|$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 10
                {
                    question: "$x=a^2+1$ のとき，$\\sqrt{x-2a}$ を簡単にせよ。",
                    options: [ "$|a-1|$", "$a-1$", "$a+1$", "$|a+1|$" ],
                    answer: "$|a-1|$",
                    rationale: "$\\sqrt{x-2a} = \\sqrt{\\left(a^2+1\\right)-2a} = \\sqrt{a^2-2a+1}$<br>$= \\sqrt{\\left(a-1\\right)^2} = |a-1|$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 11
                {
                    question: "$x=a^2+1$, $a>1$ のとき，$\\sqrt{x+2a}+\\sqrt{x-2a}$ の値を求めよ。",
                    options: [ "$2a$", "$2$", "$-2$", "$-2a$" ],
                    answer: "$2a$",
                    rationale: "$\\sqrt{x+2a} = \\sqrt{\\left(a^2+1\\right)+2a} = \\sqrt{a^2+2a+1} = \\sqrt{\\left(a+1\\right)^2} = |a+1|$<br>$\\sqrt{x-2a} = \\sqrt{\\left(a^2+1\\right)-2a} = \\sqrt{a^2-2a+1} = \\sqrt{\\left(a-1\\right)^2} = |a-1|$<br>ここで、$a>1$ のとき、$a+1 > 0$, $a-1 > 0$ です。<br>よって $\\left(a+1\\right) + \\left(a-1\\right) = 2a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 12
                {
                    question: "$x=a^2+1$, $a>1$ のとき，$\\sqrt{x+2a}-\\sqrt{x-2a}$ の値を求めよ。",
                    options: [ "$2$", "$2a$", "$-2a$", "$-2$" ],
                    answer: "$2$",
                    rationale: "$\\sqrt{x+2a} = \\sqrt{\\left(a^2+1\\right)+2a} = \\sqrt{a^2+2a+1} = \\sqrt{\\left(a+1\\right)^2} = |a+1|$<br>$\\sqrt{x-2a} = \\sqrt{\\left(a^2+1\\right)-2a} = \\sqrt{a^2-2a+1} = \\sqrt{\\left(a-1\\right)^2} = |a-1|$<br>ここで、$a>1$ のとき、$a+1 > 0$, $a-1 > 0$ です。<br>よって $\\left(a+1\\right) - \\left(a-1\\right) = a+1-a+1 = 2$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 13
                {
                    question: "$x=a^2+1$, $-1 < a < 1$ のとき，$\\sqrt{x+2a}+\\sqrt{x-2a}$ の値を求めよ。",
                    options: [ "$2$", "$2a$", "$-2a$", "$-2$" ],
                    answer: "$2$",
                    rationale: "$\\sqrt{x+2a} = \\sqrt{\\left(a^2+1\\right)+2a} = \\sqrt{a^2+2a+1} = \\sqrt{\\left(a+1\\right)^2} = |a+1|$<br>$\\sqrt{x-2a} = \\sqrt{\\left(a^2+1\\right)-2a} = \\sqrt{a^2-2a+1} = \\sqrt{\\left(a-1\\right)^2} = |a-1|$<br>ここで、$-1 < a < 1$ のとき、$a+1 > 0$, $a-1 < 0$ です。<br>よって $|a+1| = a+1$<br>$|a-1| = -\\left(a-1\\right) = -a+1$<br>与式 $= \\left(a+1\\right) + \\left(-a+1\\right) = 2$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 14
                {
                    question: "$x=a^2+1$, $-1 < a < 1$ のとき，$\\sqrt{x+2a}-\\sqrt{x-2a}$ の値を求めよ。",
                    options: [ "$2a$", "$2$", "$-2$", "$-2a$" ],
                    answer: "$2a$",
                    rationale: "$\\sqrt{x+2a} = \\sqrt{\\left(a^2+1\\right)+2a} = \\sqrt{a^2+2a+1} = \\sqrt{\\left(a+1\\right)^2} = |a+1|$<br>$\\sqrt{x-2a} = \\sqrt{\\left(a^2+1\\right)-2a} = \\sqrt{a^2-2a+1} = \\sqrt{\\left(a-1\\right)^2} = |a-1|$<br>ここで、$-1 < a < 1$ のとき、$a+1 > 0$, $a-1 < 0$ です。<br>よって $|a+1| = a+1$<br>$|a-1| = -\\left(a-1\\right) = -a+1$<br>与式 $= \\left(a+1\\right) - \\left(-a+1\\right) = a+1+a-1 = 2a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 15
                {
                    question: "$x=a^2+1$, $a < -1$ のとき，$\\sqrt{x+2a}+\\sqrt{x-2a}$ の値を求めよ。",
                    options: [ "$-2a$", "$2a$", "$2$", "$-2$" ],
                    answer: "$-2a$",
                    rationale: "$\\sqrt{x+2a} = \\sqrt{\\left(a^2+1\\right)+2a} = \\sqrt{a^2+2a+1} = \\sqrt{\\left(a+1\\right)^2} = |a+1|$<br>$\\sqrt{x-2a} = \\sqrt{\\left(a^2+1\\right)-2a} = \\sqrt{a^2-2a+1} = \\sqrt{\\left(a-1\\right)^2} = |a-1|$<br>ここで、$a < -1$ のとき、$a+1 < 0$, $a-1 < 0$ です。<br>よって $|a+1| = -\\left(a+1\\right) = -a-1$<br>$|a-1| = -\\left(a-1\\right) = -a+1$<br>与式 $= \\left(-a-1\\right) + \\left(-a+1\\right) = -2a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 16
                {
                    question: "$x=a^2+1$, $a < -1$ のとき，$\\sqrt{x+2a}-\\sqrt{x-2a}$ の値を求めよ。",
                    options: [ "$-2$", "$2a$", "$-2a$", "$2$" ],
                    answer: "$-2$",
                    rationale: "$\\sqrt{x+2a} = \\sqrt{\\left(a^2+1\\right)+2a} = \\sqrt{a^2+2a+1} = \\sqrt{\\left(a+1\\right)^2} = |a+1|$<br>$\\sqrt{x-2a} = \\sqrt{\\left(a^2+1\\right)-2a} = \\sqrt{a^2-2a+1} = \\sqrt{\\left(a-1\\right)^2} = |a-1|$<br>ここで、$a < -1$ のとき、$a+1 < 0$, $a-1 < 0$ です。<br>よって $|a+1| = -\\left(a+1\\right) = -a-1$<br>$|a-1| = -\\left(a-1\\right) = -a+1$<br>与式 $= \\left(-a-1\\right) - \\left(-a+1\\right) = -a-1+a-1 = -2$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // --- タイプ3: $\sqrt{x \pm 6a}$ $x=a^2+9$ ---
                // 問題 17
                {
                    question: "$x=a^2+9$ のとき，$\\sqrt{x-6a}$ を簡単にせよ。",
                    options: [ "$|a-3|$", "$a-3$", "$a+3$", "$|a+3|$" ],
                    answer: "$|a-3|$",
                    rationale: "$\\sqrt{x-6a} = \\sqrt{\\left(a^2+9\\right)-6a} = \\sqrt{a^2-6a+9}$<br>$= \\sqrt{\\left(a-3\\right)^2} = |a-3|$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 18
                {
                    question: "$x=a^2+9$ のとき，$\\sqrt{x+6a}$ を簡単にせよ。",
                    options: [ "$|a+3|$", "$a+3$", "$a-3$", "$|a-3|$" ],
                    answer: "$|a+3|$",
                    rationale: "$\\sqrt{x+6a} = \\sqrt{\\left(a^2+9\\right)+6a} = \\sqrt{a^2+6a+9}$<br>$= \\sqrt{\\left(a+3\\right)^2} = |a+3|$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 19
                {
                    question: "$x=a^2+9$, $a>3$ のとき，$\\sqrt{x+6a}-\\sqrt{x-6a}$ の値を求めよ。",
                    options: [ "$6$", "$2a$", "$-2a$", "$-6$" ],
                    answer: "$6$",
                    rationale: "$\\sqrt{x+6a} = \\sqrt{\\left(a^2+9\\right)+6a} = \\sqrt{a^2+6a+9} = \\sqrt{\\left(a+3\\right)^2} = |a+3|$<br>$\\sqrt{x-6a} = \\sqrt{\\left(a^2+9\\right)-6a} = \\sqrt{a^2-6a+9} = \\sqrt{\\left(a-3\\right)^2} = |a-3|$<br>ここで、$a>3$ のとき、$a+3 > 0$, $a-3 > 0$ です。<br>よって $\\left(a+3\\right) - \\left(a-3\\right) = a+3-a+3 = 6$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 20
                {
                    question: "$x=a^2+9$, $0 < a < 3$ のとき，$\\sqrt{x+6a}+\\sqrt{x-6a}$ の値を求めよ。",
                    options: [ "$6$", "$2a$", "$-2a$", "$-6$" ],
                    answer: "$6$",
                    rationale: "$\\sqrt{x+6a} = \\sqrt{\\left(a^2+9\\right)+6a} = \\sqrt{a^2+6a+9} = \\sqrt{\\left(a+3\\right)^2} = |a+3|$<br>$\\sqrt{x-6a} = \\sqrt{\\left(a^2+9\\right)-6a} = \\sqrt{a^2-6a+9} = \\sqrt{\\left(a-3\\right)^2} = |a-3|$<br>ここで、$0 < a < 3$ のとき、$a+3 > 0$, $a-3 < 0$ です。<br>よって $|a+3| = a+3$<br>$|a-3| = -\\left(a-3\\right) = -a+3$<br>与式 $= \\left(a+3\\right) + \\left(-a+3\\right) = 6$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 21
                {
                    question: "$x=a^2+9$, $-3 < a < 0$ のとき，$\\sqrt{x+6a}-\\sqrt{x-6a}$ の値を求めよ。",
                    options: [ "$2a$", "$6$", "$-6$", "$-2a$" ],
                    answer: "$2a$",
                    rationale: "$\\sqrt{x+6a} = \\sqrt{\\left(a^2+9\\right)+6a} = \\sqrt{a^2+6a+9} = \\sqrt{\\left(a+3\\right)^2} = |a+3|$<br>$\\sqrt{x-6a} = \\sqrt{\\left(a^2+9\\right)-6a} = \\sqrt{a^2-6a+9} = \\sqrt{\\left(a-3\\right)^2} = |a-3|$<br>ここで、$-3 < a < 0$ のとき、$a+3 > 0$, $a-3 < 0$ です。<br>よって $|a+3| = a+3$<br>$|a-3| = -\\left(a-3\\right) = -a+3$<br>与式 $= \\left(a+3\\right) - \\left(-a+3\\right) = a+3+a-3 = 2a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 22
                {
                    question: "$x=a^2+9$, $a < -3$ のとき，$\\sqrt{x+6a}+\\sqrt{x-6a}$ の値を求めよ。",
                    options: [ "$-2a$", "$6$", "$-6$", "$2a$" ],
                    answer: "$-2a$",
                    rationale: "$\\sqrt{x+6a} = \\sqrt{\\left(a^2+9\\right)+6a} = \\sqrt{a^2+6a+9} = \\sqrt{\\left(a+3\\right)^2} = |a+3|$<br>$\\sqrt{x-6a} = \\sqrt{\\left(a^2+9\\right)-6a} = \\sqrt{a^2-6a+9} = \\sqrt{\\left(a-3\\right)^2} = |a-3|$<br>ここで、$a < -3$ のとき、$a+3 < 0$, $a-3 < 0$ です。<br>よって $|a+3| = -\\left(a+3\\right) = -a-3$<br>$|a-3| = -\\left(a-3\\right) = -a+3$<br>与式 $= \\left(-a-3\\right) + \\left(-a+3\\right) = -2a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // --- タイプ4: $\sqrt{a^2-x}$ (x=1次式) ---
                // 問題 23
                {
                    question: "$x=2a-1$ のとき，$\\sqrt{a^2-x}$ を簡単にせよ。",
                    options: [ "$|a-1|$", "$a-1$", "$|a+1|$", "$a+1$" ],
                    answer: "$|a-1|$",
                    rationale: "$\\sqrt{a^2-\\left(2a-1\\right)} = \\sqrt{a^2-2a+1} = \\sqrt{\\left(a-1\\right)^2} = |a-1|$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 24
                {
                    question: "$x=2a-1$, $a>1$ のとき，$\\sqrt{a^2-x}$ の値を求めよ。",
                    options: [ "$a-1$", "$1-a$", "$a+1$", "$-a-1$" ],
                    answer: "$a-1$",
                    rationale: "$\\sqrt{a^2-x} = \\sqrt{a^2-\\left(2a-1\\right)} = \\sqrt{a^2-2a+1} = \\sqrt{\\left(a-1\\right)^2} = |a-1|$<br>$a>1$ のとき、$a-1 > 0$ です。<br>よって $|a-1| = a-1$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 25
                {
                    question: "$x=2a-1$, $a<1$ のとき，$\\sqrt{a^2-x}$ の値を求めよ。",
                    options: [ "$1-a$", "$a-1$", "$a+1$", "$-a-1$" ],
                    answer: "$1-a$",
                    rationale: "$\\sqrt{a^2-x} = \\sqrt{a^2-\\left(2a-1\\right)} = \\sqrt{a^2-2a+1} = \\sqrt{\\left(a-1\\right)^2} = |a-1|$<br>$a<1$ のとき、$a-1 < 0$ です。<br>よって $|a-1| = -\\left(a-1\\right) = 1-a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 26
                {
                    question: "$x=4a-4$ のとき，$\\sqrt{a^2-x}$ を簡単にせよ。",
                    options: [ "$|a-2|$", "$a-2$", "$|a+2|$", "$a+2$" ],
                    answer: "$|a-2|$",
                    rationale: "$\\sqrt{a^2-\\left(4a-4\\right)} = \\sqrt{a^2-4a+4} = \\sqrt{\\left(a-2\\right)^2} = |a-2|$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 27
                {
                    question: "$x=4a-4$, $a>2$ のとき，$\\sqrt{a^2-x}$ の値を求めよ。",
                    options: [ "$a-2$", "$2-a$", "$a+2$", "$-a-2$" ],
                    answer: "$a-2$",
                    rationale: "$\\sqrt{a^2-x} = \\sqrt{a^2-\\left(4a-4\\right)} = \\sqrt{a^2-4a+4} = \\sqrt{\\left(a-2\\right)^2} = |a-2|$<br>$a>2$ のとき、$a-2 > 0$ です。<br>よって $|a-2| = a-2$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 28
                {
                    question: "$x=4a-4$, $a<2$ のとき，$\\sqrt{a^2-x}$ の値を求めよ。",
                    options: [ "$2-a$", "$a-2$", "$a+2$", "$-a-2$" ],
                    answer: "$2-a$",
                    rationale: "$\\sqrt{a^2-x} = \\sqrt{a^2-\\left(4a-4\\right)} = \\sqrt{a^2-4a+4} = \\sqrt{\\left(a-2\\right)^2} = |a-2|$<br>$a<2$ のとき、$a-2 < 0$ です。<br>よって $|a-2| = -\\left(a-2\\right) = 2-a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 29
                {
                    question: "$x=6a-9$ のとき，$\\sqrt{a^2-x}$ を簡単にせよ。",
                    options: [ "$|a-3|$", "$a-3$", "$|a+3|$", "$a+3$" ],
                    answer: "$|a-3|$",
                    rationale: "$\\sqrt{a^2-\\left(6a-9\\right)} = \\sqrt{a^2-6a+9} = \\sqrt{\\left(a-3\\right)^2} = |a-3|$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 30
                {
                    question: "$x=6a-9$, $a<3$ のとき，$\\sqrt{a^2-x}$ の値を求めよ。",
                    options: [ "$3-a$", "$a-3$", "$a+3$", "$-a-3$" ],
                    answer: "$3-a$",
                    rationale: "$\\sqrt{a^2-x} = \\sqrt{a^2-\\left(6a-9\\right)} = \\sqrt{a^2-6a+9} = \\sqrt{\\left(a-3\\right)^2} = |a-3|$<br>$a<3$ のとき、$a-3 < 0$ です。<br>よって $|a-3| = -\\left(a-3\\right) = 3-a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // --- タイプ5: $\sqrt{x \pm 2ab}$ $x=a^2+b^2$ (bは定数) ---
                // 問題 31
                {
                    question: "$x=a^2+b^2$ のとき，$\\sqrt{x+2ab}$ を簡単にせよ。",
                    options: [ "$|a+b|$", "$a+b$", "$a-b$", "$|a-b|$" ],
                    answer: "$|a+b|$",
                    rationale: "$\\sqrt{x+2ab} = \\sqrt{\\left(a^2+b^2\\right)+2ab} = \\sqrt{a^2+2ab+b^2}$<br>$= \\sqrt{\\left(a+b\\right)^2} = |a+b|$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 32
                {
                    question: "$x=a^2+b^2$ のとき，$\\sqrt{x-2ab}$ を簡単にせよ。",
                    options: [ "$|a-b|$", "$a-b$", "$a+b$", "$|a+b|$" ],
                    answer: "$|a-b|$",
                    rationale: "$\\sqrt{x-2ab} = \\sqrt{\\left(a^2+b^2\\right)-2ab} = \\sqrt{a^2-2ab+b^2}$<br>$= \\sqrt{\\left(a-b\\right)^2} = |a-b|$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 33
                {
                    question: "$x=a^2+9b^2$, $a>3b>0$ のとき，$\\sqrt{x-6ab}$ の値を求めよ。",
                    options: [ "$a-3b$", "$3b-a$", "$a+3b$", "$-a-3b$" ],
                    answer: "$a-3b$",
                    rationale: "$\\sqrt{x-6ab} = \\sqrt{a^2+9b^2-6ab} = \\sqrt{a^2-6ab+\\left(3b\\right)^2}$<br>$= \\sqrt{\\left(a-3b\\right)^2} = |a-3b|$<br>$a>3b$ より $a-3b > 0$ なので、絶対値はそのまま外せます。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 34
                {
                    question: "$x=a^2+9b^2$, $0< a<3b$ のとき，$\\sqrt{x-6ab}$ の値を求めよ。",
                    options: [ "$3b-a$", "$a-3b$", "$a+3b$", "$-a-3b$" ],
                    answer: "$3b-a$",
                    rationale: "$\\sqrt{x-6ab} = \\sqrt{\\left(a^2+9b^2\\right)-6ab} = \\sqrt{a^2-6ab+9b^2} = \\sqrt{\\left(a-3b\\right)^2} = |a-3b|$<br>$0< a<3b$ より $a-3b < 0$ なので、絶対値はマイナスを付けて外します。<br>$|a-3b| = -\\left(a-3b\\right) = 3b-a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 35
                {
                    question: "$x=a^2+9b^2$, $a>0, b>0$ のとき，$\\sqrt{x+6ab}$ の値を求めよ。",
                    options: [ "$a+3b$", "$|a+3b|$", "$a-3b$", "$3b-a$" ],
                    answer: "$a+3b$",
                    rationale: "$\\sqrt{x+6ab} = \\sqrt{a^2+9b^2+6ab} = \\sqrt{a^2+6ab+\\left(3b\\right)^2}$<br>$= \\sqrt{\\left(a+3b\\right)^2} = |a+3b|$<br>$a>0, b>0$ より $a+3b > 0$ なので、絶対値はそのまま外せます。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 36
                {
                    question: "$x=4a^2+b^2$, $2a>b>0$ のとき，$\\sqrt{x-4ab}$ の値を求めよ。",
                    options: [ "$2a-b$", "$b-2a$", "$2a+b$", "$-2a-b$" ],
                    answer: "$2a-b$",
                    rationale: "$\\sqrt{x-4ab} = \\sqrt{4a^2+b^2-4ab} = \\sqrt{\\left(2a-b\\right)^2} = |2a-b|$<br>$2a>b$ より $2a-b > 0$ なので、絶対値はそのまま外せます。<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 37
                {
                    question: "$x=4a^2+b^2$, $0\\lt 2a\\lt b$ のとき，$\\sqrt{x-4ab}$ の値を求めよ。",
                    options: [ "$b-2a$", "$2a-b$", "$2a+b$", "$-2a-b$" ],
                    answer: "$b-2a$",
                    rationale: "$\\sqrt{x-4ab} = \\sqrt{\\left(4a^2+b^2\\right)-4ab} = \\sqrt{4a^2-4ab+b^2} = \\sqrt{\\left(2a-b\\right)^2} = |2a-b|$<br>$0\\lt 2a\\lt b$ より $2a-b\\lt 0$ なので、絶対値はマイナスを付けて外します。<br>$|2a-b| = -\\left(2a-b\\right) = b-2a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 38
                {
                    question: "$x=4a^2+b^2$, $a<0, b<0$ のとき，$\\sqrt{x+4ab}$ の値を求めよ。",
                    options: [ "$-2a-b$", "$2a+b$", "$2a-b$", "$b-2a$" ],
                    answer: "$-2a-b$",
                    rationale: "$\\sqrt{x+4ab} = \\sqrt{4a^2+b^2+4ab} = \\sqrt{\\left(2a+b\\right)^2} = |2a+b|$<br>$a<0, b<0$ より $2a<0$ かつ $b<0$ なので $2a+b < 0$ です。<br>よって $|2a+b| = -\\left(2a+b\\right) = -2a-b$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 39
                {
                    question: "$x=a^2+16$ のとき，$\\sqrt{x-8a}$ を簡単にせよ。",
                    options: [ "$|a-4|$", "$a-4$", "$|a+4|$", "$a+4$" ],
                    answer: "$|a-4|$",
                    rationale: "$\\sqrt{x-8a} = \\sqrt{\\left(a^2+16\\right)-8a} = \\sqrt{a^2-8a+16}$<br>$= \\sqrt{\\left(a-4\\right)^2} = |a-4|$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 40
                {
                    question: "$x=a^2+16$, $a>4$ のとき，$\\sqrt{x-8a}$ の値を求めよ。",
                    options: [ "$a-4$", "$4-a$", "$a+4$", "$-a-4$" ],
                    answer: "$a-4$",
                    rationale: "$\\sqrt{x-8a} = \\sqrt{\\left(a^2+16\\right)-8a} = \\sqrt{a^2-8a+16} = \\sqrt{\\left(a-4\\right)^2} = |a-4|$<br>$a>4$ のとき、$a-4 > 0$ です。<br>よって $|a-4| = a-4$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // --- 混合 (10題) ---
                // 問題 41
                {
                    question: "$x=a^2+4$, $a=1$ のとき，$\\sqrt{x+4a}+\\sqrt{x-4a}$ の値を求めよ。",
                    options: [ "$4$", "$2$", "$2a$", "$2\\sqrt{5}$" ],
                    answer: "$4$",
                    rationale: "$\\sqrt{x+4a} = \\sqrt{\\left(a^2+4\\right)+4a} = \\sqrt{a^2+4a+4} = \\sqrt{\\left(a+2\\right)^2} = |a+2|$<br>$\\sqrt{x-4a} = \\sqrt{\\left(a^2+4\\right)-4a} = \\sqrt{a^2-4a+4} = \\sqrt{\\left(a-2\\right)^2} = |a-2|$<br>ここで、$a=1$ は $-2 < a < 2$ の範囲に含まれます。<br>$a+2 > 0$, $a-2 < 0$ です。<br>よって $|a+2| = a+2$<br>$|a-2| = -\\left(a-2\\right) = -a+2$<br>与式 $= \\left(a+2\\right) + \\left(-a+2\\right) = 4$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 42
                {
                    question: "$x=a^2+1$, $a=0$ のとき，$\\sqrt{x+2a}+\\sqrt{x-2a}$ の値を求めよ。",
                    options: [ "$2$", "$0$", "$2a$", "$-2$" ],
                    answer: "$2$",
                    rationale: "$\\sqrt{x+2a} = \\sqrt{\\left(a^2+1\\right)+2a} = \\sqrt{a^2+2a+1} = \\sqrt{\\left(a+1\\right)^2} = |a+1|$<br>$\\sqrt{x-2a} = \\sqrt{\\left(a^2+1\\right)-2a} = \\sqrt{a^2-2a+1} = \\sqrt{\\left(a-1\\right)^2} = |a-1|$<br>ここで、$a=0$ は $-1 < a < 1$ の範囲に含まれます。<br>$a+1 > 0$, $a-1 < 0$ です。<br>よって $|a+1| = a+1$<br>$|a-1| = -\\left(a-1\\right) = -a+1$<br>与式 $= \\left(a+1\\right) + \\left(-a+1\\right) = 2$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 43
                {
                    question: "$x=a^2+4a$ のとき，$\\sqrt{x+4}$ を簡単にせよ。",
                    options: [ "$|a+2|$", "$a+2$", "$|a-2|$", "$a-2$" ],
                    answer: "$|a+2|$",
                    rationale: "$\\sqrt{x+4} = \\sqrt{\\left(a^2+4a\\right)+4} = \\sqrt{a^2+4a+4}$<br>$= \\sqrt{\\left(a+2\\right)^2} = |a+2|$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 44
                {
                    question: "$x=a^2-6a$ のとき，$\\sqrt{x+9}$ を簡単にせよ。",
                    options: [ "$|a-3|$", "$a-3$", "$|a+3|$", "$a+3$" ],
                    answer: "$|a-3|$",
                    rationale: "$\\sqrt{x+9} = \\sqrt{\\left(a^2-6a\\right)+9} = \\sqrt{a^2-6a+9}$<br>$= \\sqrt{\\left(a-3\\right)^2} = |a-3|$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 45
                {
                    question: "$x=a^2+1$, $-1 < a < 1$ のとき，$\\sqrt{x+2a}-\\sqrt{x-2a}$ の値を求めよ。",
                    options: [ "$2a$", "$2$", "$-2$", "$-2a$" ],
                    answer: "$2a$",
                    rationale: "$\\sqrt{x+2a} = \\sqrt{\\left(a^2+1\\right)+2a} = \\sqrt{a^2+2a+1} = \\sqrt{\\left(a+1\\right)^2} = |a+1|$<br>$\\sqrt{x-2a} = \\sqrt{\\left(a^2+1\\right)-2a} = \\sqrt{a^2-2a+1} = \\sqrt{\\left(a-1\\right)^2} = |a-1|$<br>ここで、$-1 < a < 1$ のとき、$a+1 > 0$, $a-1 < 0$ です。<br>よって $|a+1| = a+1$<br>$|a-1| = -\\left(a-1\\right) = -a+1$<br>与式 $= \\left(a+1\\right) - \\left(-a+1\\right) = a+1+a-1 = 2a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 46
                {
                    question: "$x=a^2+25$, $0< a<5$ のとき，$\\sqrt{x+10a}+\\sqrt{x-10a}$ の値を求めよ。",
                    options: [ "$10$", "$2a$", "$-10$", "$-2a$" ],
                    answer: "$10$",
                    rationale: "$\\sqrt{x+10a} = \\sqrt{\\left(a^2+25\\right)+10a} = \\sqrt{a^2+10a+25} = \\sqrt{\\left(a+5\\right)^2} = |a+5|$<br>$\\sqrt{x-10a} = \\sqrt{\\left(a^2+25\\right)-10a} = \\sqrt{a^2-10a+25} = \\sqrt{\\left(a-5\\right)^2} = |a-5|$<br>ここで、$0< a<5$ のとき、$a+5 > 0$, $a-5 < 0$ です。<br>よって $|a+5| = a+5$<br>$|a-5| = -\\left(a-5\\right) = -a+5$<br>与式 $= \\left(a+5\\right) + \\left(-a+5\\right) = 10$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 47
                {
                    question: "$x=a^2+25$, $a>5$ のとき，$\\sqrt{x+10a}-\\sqrt{x-10a}$ の値を求めよ。",
                    options: [ "$10$", "$2a$", "$-2a$", "$-10$" ],
                    answer: "$10$",
                    rationale: "$\\sqrt{x+10a} = \\sqrt{\\left(a^2+25\\right)+10a} = \\sqrt{a^2+10a+25} = \\sqrt{\\left(a+5\\right)^2} = |a+5|$<br>$\\sqrt{x-10a} = \\sqrt{\\left(a^2+25\\right)-10a} = \\sqrt{a^2-10a+25} = \\sqrt{\\left(a-5\\right)^2} = |a-5|$<br>ここで、$a>5$ のとき、$a+5 > 0$, $a-5 > 0$ です。<br>よって $\\left(a+5\\right) - \\left(a-5\\right) = a+5-a+5 = 10$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 48
                {
                    question: "$x=a^2+25$, $a<-5$ のとき，$\\sqrt{x+10a}+\\sqrt{x-10a}$ の値を求めよ。",
                    options: [ "$-2a$", "$10$", "$-10$", "$2a$" ],
                    answer: "$-2a$",
                    rationale: "$\\sqrt{x+10a} = \\sqrt{\\left(a^2+25\\right)+10a} = \\sqrt{a^2+10a+25} = \\sqrt{\\left(a+5\\right)^2} = |a+5|$<br>$\\sqrt{x-10a} = \\sqrt{\\left(a^2+25\\right)-10a} = \\sqrt{a^2-10a+25} = \\sqrt{\\left(a-5\\right)^2} = |a-5|$<br>ここで、$a<-5$ のとき、$a+5 < 0$, $a-5 < 0$ です。<br>よって $|a+5| = -\\left(a+5\\right) = -a-5$<br>$|a-5| = -\\left(a-5\\right) = -a+5$<br>与式 $= \\left(-a-5\\right) + \\left(-a+5\\right) = -2a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 49
                {
                    question: "$x=a^2+\\dfrac{1}{4}$ のとき，$\\sqrt{x+a}$ を簡単にせよ。",
                    options: [ "$|a+\\dfrac{1}{2}|$", "$a+\\dfrac{1}{2}$", "$|a-\\dfrac{1}{2}|$", "$a-\\dfrac{1}{2}$" ],
                    answer: "$|a+\\dfrac{1}{2}|$",
                    rationale: "$\\sqrt{x+a} = \\sqrt{a^2+\\dfrac{1}{4}+a} = \\sqrt{a^2+a+\\dfrac{1}{4}}$<br>$= \\sqrt{\\left(a+\\dfrac{1}{2}\\right)^2} = |a+\\dfrac{1}{2}|$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                },
                // 問題 50
                {
                    question: "$x=a^2+\\dfrac{1}{4}$, $a < \\dfrac{1}{2}$ のとき，$\\sqrt{x-a}$ の値を求めよ。",
                    options: [ "$\\dfrac{1}{2}-a$", "$a-\\dfrac{1}{2}$", "$a+\\dfrac{1}{2}$", "$-a-\\dfrac{1}{2}$" ],
                    answer: "$\\dfrac{1}{2}-a$",
                    rationale: "$\\sqrt{x-a} = \\sqrt{a^2+\\dfrac{1}{4}-a} = \\sqrt{a^2-a+\\dfrac{1}{4}}$<br>$= \\sqrt{\\left(a-\\dfrac{1}{2}\\right)^2} = |a-\\dfrac{1}{2}|$<br>$a < \\dfrac{1}{2}$ より $a-\\dfrac{1}{2} < 0$ なので、絶対値はマイナスを付けて外します。<br>$|a-\\dfrac{1}{2}| = -\\left(a-\\dfrac{1}{2}\\right) = \\dfrac{1}{2}-a$<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br>" + "<a href='https://www.manabi-aid.jp/lesson/id/7710/63155' target='_blank'>" + "解説動画を見る" + "</a><br>" + "<small>（※学びエイドのログインが必要です）</small>"
                }
            ];

// --- ★★★ 50題データここまで ★★★

// チェックアプリ用にグローバルへ公開
window.QUIZ_DATA = allQuizData;
