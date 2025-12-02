// --- クイズデータ(QD)はここに貼り付けてください ---
window.QUIZ_DATA = [
                 // --- タイプ1: $\sqrt{A+2\sqrt{B}}$ ---
    // 問題 1
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{4+2\\sqrt{3}}$",
        options: [ "$\\sqrt{3}+1$", "$\\sqrt{3}-1$", "$2+\\sqrt{3}$", "$3+\\sqrt{1}$" ],
        answer: "$\\sqrt{3}+1$",
        rationale: "公式 $\\sqrt{(a+b)+2\\sqrt{ab}} = \\sqrt{a}+\\sqrt{b}$ を利用します。<br>" +
                   "足して $4$、掛けて $3$ になる2数は $3$ と $1$ です。<br>" +
                   "式に当てはめると：<br>" +
                   "$\\sqrt{(3+1)+2\\sqrt{3 \\times 1}} = \\sqrt{3}+\\sqrt{1} = \\sqrt{3}+1$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 2
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{8+2\\sqrt{15}}$",
        options: [ "$\\sqrt{5}+\\sqrt{3}$", "$\\sqrt{5}-\\sqrt{3}$", "$5+\\sqrt{3}$", "$4+\\sqrt{15}$" ],
        answer: "$\\sqrt{5}+\\sqrt{3}$",
        rationale: "公式 $\\sqrt{(a+b)+2\\sqrt{ab}} = \\sqrt{a}+\\sqrt{b}$ を利用します。<br>" +
                   "足して $8$、掛けて $15$ になる2数は $5$ と $3$ です。<br>" +
                   "式に当てはめると：<br>" +
                   "$\\sqrt{(5+3)+2\\sqrt{5 \\times 3}} = \\sqrt{5}+\\sqrt{3}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 3
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{7+2\\sqrt{10}}$",
        options: [ "$\\sqrt{5}+\\sqrt{2}$", "$\\sqrt{5}-\\sqrt{2}$", "$5+\\sqrt{2}$", "$7+\\sqrt{10}$" ],
        answer: "$\\sqrt{5}+\\sqrt{2}$",
        rationale: "公式 $\\sqrt{(a+b)+2\\sqrt{ab}} = \\sqrt{a}+\\sqrt{b}$ を利用します。<br>" +
                   "足して $7$、掛けて $10$ になる2数は $5$ と $2$ です。<br>" +
                   "式に当てはめると：<br>" +
                   "$\\sqrt{(5+2)+2\\sqrt{5 \\times 2}} = \\sqrt{5}+\\sqrt{2}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 4
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{11+2\\sqrt{30}}$",
        options: [ "$\\sqrt{6}+\\sqrt{5}$", "$\\sqrt{6}-\\sqrt{5}$", "$6+\\sqrt{5}$", "$5+\\sqrt{6}$" ],
        answer: "$\\sqrt{6}+\\sqrt{5}$",
        rationale: "公式 $\\sqrt{(a+b)+2\\sqrt{ab}} = \\sqrt{a}+\\sqrt{b}$ を利用します。<br>" +
                   "足して $11$、掛けて $30$ になる2数は $6$ と $5$ です。<br>" +
                   "式に当てはめると：<br>" +
                   "$\\sqrt{(6+5)+2\\sqrt{6 \\times 5}} = \\sqrt{6}+\\sqrt{5}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 5
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{9+2\\sqrt{14}}$",
        options: [ "$\\sqrt{7}+\\sqrt{2}$", "$\\sqrt{7}-\\sqrt{2}$", "$7+\\sqrt{2}$", "$9+\\sqrt{14}$" ],
        answer: "$\\sqrt{7}+\\sqrt{2}$",
        rationale: "公式 $\\sqrt{(a+b)+2\\sqrt{ab}} = \\sqrt{a}+\\sqrt{b}$ を利用します。<br>" +
                   "足して $9$、掛けて $14$ になる2数は $7$ と $2$ です。<br>" +
                   "式に当てはめると：<br>" +
                   "$\\sqrt{(7+2)+2\\sqrt{7 \\times 2}} = \\sqrt{7}+\\sqrt{2}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // --- タイプ2: $\sqrt{A-2\sqrt{B}}$ ---
    // 問題 6
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{4-2\\sqrt{3}}$",
        options: [ "$\\sqrt{3}-1$", "$\\sqrt{3}+1$", "$1-\\sqrt{3}$", "$2-\\sqrt{3}$" ],
        answer: "$\\sqrt{3}-1$",
        rationale: "公式 $\\sqrt{(a+b)-2\\sqrt{ab}} = \\sqrt{a}-\\sqrt{b}$ ($a>b$) を利用します。<br>" +
                   "足して $4$、掛けて $3$ になる2数は $3$ と $1$ です。<br>" +
                   "大きい方から小さい方を引く形に当てはめると：<br>" +
                   "$\\sqrt{(3+1)-2\\sqrt{3 \\times 1}} = \\sqrt{3}-\\sqrt{1} = \\sqrt{3}-1$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 7
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{8-2\\sqrt{15}}$",
        options: [ "$\\sqrt{5}-\\sqrt{3}$", "$\\sqrt{5}+\\sqrt{3}$", "$5-\\sqrt{3}$", "$3-\\sqrt{5}$" ],
        answer: "$\\sqrt{5}-\\sqrt{3}$",
        rationale: "公式 $\\sqrt{(a+b)-2\\sqrt{ab}} = \\sqrt{a}-\\sqrt{b}$ ($a>b$) を利用します。<br>" +
                   "足して $8$、掛けて $15$ になる2数は $5$ と $3$ です。<br>" +
                   "大きい方から小さい方を引く形に当てはめると：<br>" +
                   "$\\sqrt{(5+3)-2\\sqrt{5 \\times 3}} = \\sqrt{5}-\\sqrt{3}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 8
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{7-2\\sqrt{10}}$",
        options: [ "$\\sqrt{5}-\\sqrt{2}$", "$\\sqrt{5}+\\sqrt{2}$", "$5-\\sqrt{2}$", "$2-\\sqrt{5}$" ],
        answer: "$\\sqrt{5}-\\sqrt{2}$",
        rationale: "公式 $\\sqrt{(a+b)-2\\sqrt{ab}} = \\sqrt{a}-\\sqrt{b}$ ($a>b$) を利用します。<br>" +
                   "足して $7$、掛けて $10$ になる2数は $5$ と $2$ です。<br>" +
                   "大きい方から小さい方を引く形に当てはめると：<br>" +
                   "$\\sqrt{(5+2)-2\\sqrt{5 \\times 2}} = \\sqrt{5}-\\sqrt{2}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 9
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{11-2\\sqrt{30}}$",
        options: [ "$\\sqrt{6}-\\sqrt{5}$", "$\\sqrt{6}+\\sqrt{5}$", "$6-\\sqrt{5}$", "$5-\\sqrt{6}$" ],
        answer: "$\\sqrt{6}-\\sqrt{5}$",
        rationale: "公式 $\\sqrt{(a+b)-2\\sqrt{ab}} = \\sqrt{a}-\\sqrt{b}$ ($a>b$) を利用します。<br>" +
                   "足して $11$、掛けて $30$ になる2数は $6$ と $5$ です。<br>" +
                   "大きい方から小さい方を引く形に当てはめると：<br>" +
                   "$\\sqrt{(6+5)-2\\sqrt{6 \\times 5}} = \\sqrt{6}-\\sqrt{5}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 10
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{9-2\\sqrt{14}}$",
        options: [ "$\\sqrt{7}-\\sqrt{2}$", "$\\sqrt{7}+\\sqrt{2}$", "$7-\\sqrt{2}$", "$2-\\sqrt{7}$" ],
        answer: "$\\sqrt{7}-\\sqrt{2}$",
        rationale: "公式 $\\sqrt{(a+b)-2\\sqrt{ab}} = \\sqrt{a}-\\sqrt{b}$ ($a>b$) を利用します。<br>" +
                   "足して $9$、掛けて $14$ になる2数は $7$ と $2$ です。<br>" +
                   "大きい方から小さい方を引く形に当てはめると：<br>" +
                   "$\\sqrt{(7+2)-2\\sqrt{7 \\times 2}} = \\sqrt{7}-\\sqrt{2}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // --- タイプ3: $\sqrt{A \pm B\sqrt{C}}$ (Bを2にする) ---
    // 問題 11
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{15-6\\sqrt{6}}$",
        options: [ "$3-\\sqrt{6}$", "$3+\\sqrt{6}$", "$\\sqrt{6}-3$", "$\\sqrt{9}-\\sqrt{6}$" ],
        answer: "$3-\\sqrt{6}$",
        rationale: "まず、根号の前を $2$ に変形して公式 $\\sqrt{A-2\\sqrt{B}}$ の形にします。<br>" +
                   "$6\\sqrt{6} = 2 \\times 3 \\times \\sqrt{6} = 2\\sqrt{9 \\times 6} = 2\\sqrt{54}$ なので、<br>" +
                   "与式 $= \\sqrt{15-2\\sqrt{54}}$ となります。<br>" +
                   "足して $15$、掛けて $54$ になる2数は $9$ と $6$ です。<br>" +
                   "よって $\\sqrt{(9+6)-2\\sqrt{9 \\times 6}} = \\sqrt{9}-\\sqrt{6} = 3-\\sqrt{6}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 12
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{7+4\\sqrt{3}}$",
        options: [ "$2+\\sqrt{3}$", "$2-\\sqrt{3}$", "$\\sqrt{4}+\\sqrt{3}$", "$4+\\sqrt{3}$" ],
        answer: "$2+\\sqrt{3}$",
        rationale: "まず、根号の前を $2$ に変形して公式 $\\sqrt{A+2\\sqrt{B}}$ の形にします。<br>" +
                   "$4\\sqrt{3} = 2 \\times 2 \\times \\sqrt{3} = 2\\sqrt{4 \\times 3} = 2\\sqrt{12}$ なので、<br>" +
                   "与式 $= \\sqrt{7+2\\sqrt{12}}$ となります。<br>" +
                   "足して $7$、掛けて $12$ になる2数は $4$ と $3$ です。<br>" +
                   "よって $\\sqrt{(4+3)+2\\sqrt{4 \\times 3}} = \\sqrt{4}+\\sqrt{3} = 2+\\sqrt{3}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 13
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{12-6\\sqrt{3}}$",
        options: [ "$3-\\sqrt{3}$", "$3+\\sqrt{3}$", "$\\sqrt{3}-3$", "$\\sqrt{9}-\\sqrt{3}$" ],
        answer: "$3-\\sqrt{3}$",
        rationale: "まず、根号の前を $2$ に変形して公式 $\\sqrt{A-2\\sqrt{B}}$ の形にします。<br>" +
                   "$6\\sqrt{3} = 2 \\times 3 \\times \\sqrt{3} = 2\\sqrt{9 \\times 3} = 2\\sqrt{27}$ なので、<br>" +
                   "与式 $= \\sqrt{12-2\\sqrt{27}}$ となります。<br>" +
                   "足して $12$、掛けて $27$ になる2数は $9$ と $3$ です。<br>" +
                   "よって $\\sqrt{(9+3)-2\\sqrt{9 \\times 3}} = \\sqrt{9}-\\sqrt{3} = 3-\\sqrt{3}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 14
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{11+4\\sqrt{6}}$",
        options: [ "$\\sqrt{8}+\\sqrt{3}$", "$2\\sqrt{2}+\\sqrt{3}$", "$8+\\sqrt{3}$", "$4+\\sqrt{6}$" ],
        answer: "$2\\sqrt{2}+\\sqrt{3}$",
        rationale: "まず、根号の前を $2$ に変形して公式 $\\sqrt{A+2\\sqrt{B}}$ の形にします。<br>" +
                   "$4\\sqrt{6} = 2 \\times 2 \\times \\sqrt{6} = 2\\sqrt{4 \\times 6} = 2\\sqrt{24}$ なので、<br>" +
                   "与式 $= \\sqrt{11+2\\sqrt{24}}$ となります。<br>" +
                   "足して $11$、掛けて $24$ になる2数は $8$ と $3$ です。<br>" +
                   "よって $\\sqrt{(8+3)+2\\sqrt{8 \\times 3}} = \\sqrt{8}+\\sqrt{3} = 2\\sqrt{2}+\\sqrt{3}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 15
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{3-2\\sqrt{2}}$",
        options: [ "$\\sqrt{2}-1$", "$\\sqrt{2}+1$", "$1-\\sqrt{2}$", "$2-\\sqrt{1}$" ],
        answer: "$\\sqrt{2}-1$",
        rationale: "これは既に公式 $\\sqrt{A-2\\sqrt{B}}$ の形になっています。<br>" +
                   "足して $3$、掛けて $2$ になる2数は $2$ と $1$ です。<br>" +
                   "よって $\\sqrt{(2+1)-2\\sqrt{2 \\times 1}} = \\sqrt{2}-\\sqrt{1} = \\sqrt{2}-1$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 16
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{16+6\\sqrt{7}}$",
        options: [ "$3+\\sqrt{7}$", "$3-\\sqrt{7}$", "$\\sqrt{9}+\\sqrt{7}$", "$9+\\sqrt{7}$" ],
        answer: "$3+\\sqrt{7}$",
        rationale: "まず、根号の前を $2$ に変形して公式 $\\sqrt{A+2\\sqrt{B}}$ の形にします。<br>" +
                   "$6\\sqrt{7} = 2 \\times 3 \\times \\sqrt{7} = 2\\sqrt{9 \\times 7} = 2\\sqrt{63}$ なので、<br>" +
                   "与式 $= \\sqrt{16+2\\sqrt{63}}$ となります。<br>" +
                   "足して $16$、掛けて $63$ になる2数は $9$ と $7$ です。<br>" +
                   "よって $\\sqrt{(9+7)+2\\sqrt{9 \\times 7}} = \\sqrt{9}+\\sqrt{7} = 3+\\sqrt{7}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 17
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{8-4\\sqrt{3}}$",
        options: [ "$\\sqrt{6}-\\sqrt{2}$", "$\\sqrt{6}+\\sqrt{2}$", "$2-\\sqrt{3}$", "$4-\\sqrt{3}$" ],
        answer: "$\\sqrt{6}-\\sqrt{2}$",
        rationale: "まず、根号の前を $2$ に変形して公式 $\\sqrt{A-2\\sqrt{B}}$ の形にします。<br>" +
                   "$4\\sqrt{3} = 2 \\times 2 \\times \\sqrt{3} = 2\\sqrt{4 \\times 3} = 2\\sqrt{12}$ なので、<br>" +
                   "与式 $= \\sqrt{8-2\\sqrt{12}}$ となります。<br>" +
                   "足して $8$、掛けて $12$ になる2数は $6$ と $2$ です。<br>" +
                   "よって $\\sqrt{(6+2)-2\\sqrt{6 \\times 2}} = \\sqrt{6}-\\sqrt{2}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 18
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{9+4\\sqrt{5}}$",
        options: [ "$\\sqrt{5}+2$", "$\\sqrt{5}-2$", "$5+2$", "$5+\\sqrt{4}$" ],
        answer: "$\\sqrt{5}+2$",
        rationale: "まず、根号の前を $2$ に変形して公式 $\\sqrt{A+2\\sqrt{B}}$ の形にします。<br>" +
                   "$4\\sqrt{5} = 2 \\times 2 \\times \\sqrt{5} = 2\\sqrt{4 \\times 5} = 2\\sqrt{20}$ なので、<br>" +
                   "与式 $= \\sqrt{9+2\\sqrt{20}}$ となります。<br>" +
                   "足して $9$、掛けて $20$ になる2数は $5$ と $4$ です。<br>" +
                   "よって $\\sqrt{(5+4)+2\\sqrt{5 \\times 4}} = \\sqrt{5}+\\sqrt{4} = \\sqrt{5}+2$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 19
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{13-4\\sqrt{10}}$",
        options: [ "$\\sqrt{8}-\\sqrt{5}$", "$2\\sqrt{2}-\\sqrt{5}$", "$\\sqrt{10}-\\sqrt{3}$", "$4-\\sqrt{10}$" ],
        answer: "$2\\sqrt{2}-\\sqrt{5}$",
        rationale: "まず、根号の前を $2$ に変形して公式 $\\sqrt{A-2\\sqrt{B}}$ の形にします。<br>" +
                   "$4\\sqrt{10} = 2 \\times 2 \\times \\sqrt{10} = 2\\sqrt{4 \\times 10} = 2\\sqrt{40}$ なので、<br>" +
                   "与式 $= \\sqrt{13-2\\sqrt{40}}$ となります。<br>" +
                   "足して $13$、掛けて $40$ になる2数は $8$ と $5$ です。<br>" +
                   "よって $\\sqrt{(8+5)-2\\sqrt{8 \\times 5}} = \\sqrt{8}-\\sqrt{5} = 2\\sqrt{2}-\\sqrt{5}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 20
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{5+2\\sqrt{6}}$",
        options: [ "$\\sqrt{3}+\\sqrt{2}$", "$\\sqrt{3}-\\sqrt{2}$", "$3+\\sqrt{2}$", "$5+\\sqrt{6}$" ],
        answer: "$\\sqrt{3}+\\sqrt{2}$",
        rationale: "これは既に公式 $\\sqrt{A+2\\sqrt{B}}$ の形になっています。<br>" +
                   "足して $5$、掛けて $6$ になる2数は $3$ と $2$ です。<br>" +
                   "よって $\\sqrt{(3+2)+2\\sqrt{3 \\times 2}} = \\sqrt{3}+\\sqrt{2}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 21
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{5-2\\sqrt{6}}$",
        options: [ "$\\sqrt{3}-\\sqrt{2}$", "$\\sqrt{3}+\\sqrt{2}$", "$3-\\sqrt{2}$", "$\\sqrt{2}-\\sqrt{3}$" ],
        answer: "$\\sqrt{3}-\\sqrt{2}$",
        rationale: "これは既に公式 $\\sqrt{A-2\\sqrt{B}}$ の形になっています。<br>" +
                   "足して $5$、掛けて $6$ になる2数は $3$ と $2$ です。<br>" +
                   "よって $\\sqrt{(3+2)-2\\sqrt{3 \\times 2}} = \\sqrt{3}-\\sqrt{2}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 22
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{6-4\\sqrt{2}}$",
        options: [ "$2-\\sqrt{2}$", "$2+\\sqrt{2}$", "$\\sqrt{2}-2$", "$\\sqrt{4}-\\sqrt{2}$" ],
        answer: "$2-\\sqrt{2}$",
        rationale: "まず、根号の前を $2$ に変形して公式 $\\sqrt{A-2\\sqrt{B}}$ の形にします。<br>" +
                   "$4\\sqrt{2} = 2 \\times 2 \\times \\sqrt{2} = 2\\sqrt{4 \\times 2} = 2\\sqrt{8}$ なので、<br>" +
                   "与式 $= \\sqrt{6-2\\sqrt{8}}$ となります。<br>" +
                   "足して $6$、掛けて $8$ になる2数は $4$ と $2$ です。<br>" +
                   "よって $\\sqrt{(4+2)-2\\sqrt{4 \\times 2}} = \\sqrt{4}-\\sqrt{2} = 2-\\sqrt{2}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 23
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{11-6\\sqrt{2}}$",
        options: [ "$3-\\sqrt{2}$", "$3+\\sqrt{2}$", "$\\sqrt{2}-3$", "$\\sqrt{9}-\\sqrt{2}$" ],
        answer: "$3-\\sqrt{2}$",
        rationale: "まず、根号の前を $2$ に変形して公式 $\\sqrt{A-2\\sqrt{B}}$ の形にします。<br>" +
                   "$6\\sqrt{2} = 2 \\times 3 \\times \\sqrt{2} = 2\\sqrt{9 \\times 2} = 2\\sqrt{18}$ なので、<br>" +
                   "与式 $= \\sqrt{11-2\\sqrt{18}}$ となります。<br>" +
                   "足して $11$、掛けて $18$ になる2数は $9$ と $2$ です。<br>" +
                   "よって $\\sqrt{(9+2)-2\\sqrt{9 \\times 2}} = \\sqrt{9}-\\sqrt{2} = 3-\\sqrt{2}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 24
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{7-4\\sqrt{3}}$",
        options: [ "$2-\\sqrt{3}$", "$2+\\sqrt{3}$", "$\\sqrt{3}-2$", "$\\sqrt{4}-\\sqrt{3}$" ],
        answer: "$2-\\sqrt{3}$",
        rationale: "まず、根号の前を $2$ に変形して公式 $\\sqrt{A-2\\sqrt{B}}$ の形にします。<br>" +
                   "$4\\sqrt{3} = 2\\sqrt{12}$ なので、<br>" +
                   "与式 $= \\sqrt{7-2\\sqrt{12}}$ となります。<br>" +
                   "足して $7$、掛けて $12$ になる2数は $4$ と $3$ です。<br>" +
                   "よって $\\sqrt{(4+3)-2\\sqrt{4 \\times 3}} = \\sqrt{4}-\\sqrt{3} = 2-\\sqrt{3}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 25
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{19+8\\sqrt{3}}$",
        options: [ "$4+\\sqrt{3}$", "$4-\\sqrt{3}$", "$\\sqrt{16}+\\sqrt{3}$", "$16+\\sqrt{3}$" ],
        answer: "$4+\\sqrt{3}$",
        rationale: "まず、根号の前を $2$ に変形して公式 $\\sqrt{A+2\\sqrt{B}}$ の形にします。<br>" +
                   "$8\\sqrt{3} = 2 \\times 4 \\times \\sqrt{3} = 2\\sqrt{16 \\times 3} = 2\\sqrt{48}$ なので、<br>" +
                   "与式 $= \\sqrt{19+2\\sqrt{48}}$ となります。<br>" +
                   "足して $19$、掛けて $48$ になる2数は $16$ と $3$ です。<br>" +
                   "よって $\\sqrt{(16+3)+2\\sqrt{16 \\times 3}} = \\sqrt{16}+\\sqrt{3} = 4+\\sqrt{3}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // --- タイプ4: $\sqrt{A \pm \sqrt{B}}$ (2倍して分数) ---
    // 問題 26
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{6+\\sqrt{20}}$",
        options: [ "$\\sqrt{5}+1$", "$\\sqrt{5}-1$", "$\\dfrac{\\sqrt{10}+\\sqrt{2}}{2}$", "$\\sqrt{3}+\\sqrt{2}$" ],
        answer: "$\\sqrt{5}+1$",
        rationale: "まず、根号の前を $2$ に変形します。<br>" +
                   "$\\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5}$ なので、与式は $\\sqrt{6+2\\sqrt{5}}$ となります。<br>" +
                   "これなら公式 $\\sqrt{(a+b)+2\\sqrt{ab}}$ がそのまま使えます。<br>" +
                   "足して $6$、掛けて $5$ になる2数は $5$ と $1$ です。<br>" +
                   "よって $\\sqrt{(5+1)+2\\sqrt{5 \\times 1}} = \\sqrt{5}+\\sqrt{1} = \\sqrt{5}+1$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 27
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{4-\\sqrt{15}}$",
        options: [ "$\\dfrac{\\sqrt{10}-\\sqrt{6}}{2}$", "$\\dfrac{\\sqrt{10}+\\sqrt{6}}{2}$", "$\\dfrac{\\sqrt{15}-1}{2}$", "$\\sqrt{5}-\\sqrt{3}$" ],
        answer: "$\\dfrac{\\sqrt{10}-\\sqrt{6}}{2}$",
        rationale: "根号の前を $2$ にするために、分母・分子に $2$ を掛けて無理やり $2\\sqrt{15}$ を作ります。<br>" +
                   "$\\sqrt{4-\\sqrt{15}} = \\sqrt{\\dfrac{8-2\\sqrt{15}}{2}} = \\dfrac{\\sqrt{8-2\\sqrt{15}}}{\\sqrt{2}}$<br>" +
                   "分子に注目すると、足して $8$、掛けて $15$ になる2数は $5$ と $3$ です。<br>" +
                   "よって分子は $\\sqrt{5}-\\sqrt{3}$ となり、<br>" +
                   "全体は $\\dfrac{\\sqrt{5}-\\sqrt{3}}{\\sqrt{2}} = \\dfrac{\\sqrt{10}-\\sqrt{6}}{2}$ となります。<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 28
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{2+\\sqrt{3}}$",
        options: [ "$\\dfrac{\\sqrt{6}+\\sqrt{2}}{2}$", "$\\dfrac{\\sqrt{6}-\\sqrt{2}}{2}$", "$\\sqrt{3}+1$", "$\\dfrac{\\sqrt{3}+1}{2}$" ],
        answer: "$\\dfrac{\\sqrt{6}+\\sqrt{2}}{2}$",
        rationale: "根号の前を $2$ にするために、式全体を分数に変形します。<br>" +
                   "$\\sqrt{2+\\sqrt{3}} = \\sqrt{\\dfrac{4+2\\sqrt{3}}{2}} = \\dfrac{\\sqrt{4+2\\sqrt{3}}}{\\sqrt{2}}$<br>" +
                   "分子について、足して $4$、掛けて $3$ になる2数は $3$ と $1$ です。<br>" +
                   "よって分子は $\\sqrt{3}+\\sqrt{1}$ となり、<br>" +
                   "全体は $\\dfrac{\\sqrt{3}+1}{\\sqrt{2}} = \\dfrac{\\sqrt{6}+\\sqrt{2}}{2}$ となります。<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 29
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{3-\\sqrt{8}}$",
        options: [ "$\\dfrac{\\sqrt{4}-\\sqrt{2}}{\\sqrt{2}}$", "$\\sqrt{2}-1$", "$\\dfrac{\\sqrt{6}-\\sqrt{2}}{2}$", "$1-\\sqrt{2}$" ],
        answer: "$\\sqrt{2}-1$",
        rationale: "まず、根号の前を $2$ に変形します。<br>" +
                   "$\\sqrt{8} = 2\\sqrt{2}$ なので、与式は $\\sqrt{3-2\\sqrt{2}}$ となります。<br>" +
                   "足して $3$、掛けて $2$ になる2数は $2$ と $1$ です。<br>" +
                   "よって $\\sqrt{(2+1)-2\\sqrt{2 \\times 1}} = \\sqrt{2}-\\sqrt{1} = \\sqrt{2}-1$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 30
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{5+\\sqrt{24}}$",
        options: [ "$\\sqrt{3}+\\sqrt{2}$", "$\\sqrt{3}-\\sqrt{2}$", "$3+\\sqrt{2}$", "$5+\\sqrt{6}$" ],
        answer: "$\\sqrt{3}+\\sqrt{2}$",
        rationale: "まず、根号の前を $2$ に変形します。<br>" +
                   "$\\sqrt{24} = 2\\sqrt{6}$ なので、与式は $\\sqrt{5+2\\sqrt{6}}$ となります。<br>" +
                   "足して $5$、掛けて $6$ になる2数は $3$ と $2$ です。<br>" +
                   "よって $\\sqrt{(3+2)+2\\sqrt{3 \\times 2}} = \\sqrt{3}+\\sqrt{2}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 31
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{5-\\sqrt{24}}$",
        options: [ "$\\sqrt{3}-\\sqrt{2}$", "$\\sqrt{3}+\\sqrt{2}$", "$3-\\sqrt{2}$", "$\\sqrt{2}-\\sqrt{3}$" ],
        answer: "$\\sqrt{3}-\\sqrt{2}$",
        rationale: "まず、根号の前を $2$ に変形します。<br>" +
                   "$\\sqrt{24} = 2\\sqrt{6}$ なので、与式は $\\sqrt{5-2\\sqrt{6}}$ となります。<br>" +
                   "足して $5$、掛けて $6$ になる2数は $3$ と $2$ です。<br>" +
                   "よって $\\sqrt{(3+2)-2\\sqrt{3 \\times 2}} = \\sqrt{3}-\\sqrt{2}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 32
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{7+\\sqrt{48}}$",
        options: [ "$2+\\sqrt{3}$", "$2-\\sqrt{3}$", "$\\sqrt{6}+1$", "$4+\\sqrt{3}$" ],
        answer: "$2+\\sqrt{3}$",
        rationale: "まず、根号の前を $2$ に変形します。<br>" +
                   "$\\sqrt{48} = \\sqrt{4 \\times 12} = 2\\sqrt{12}$ なので、与式は $\\sqrt{7+2\\sqrt{12}}$ となります。<br>" +
                   "足して $7$、掛けて $12$ になる2数は $4$ と $3$ です。<br>" +
                   "よって $\\sqrt{(4+3)+2\\sqrt{4 \\times 3}} = \\sqrt{4}+\\sqrt{3} = 2+\\sqrt{3}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 33
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{7-\\sqrt{48}}$",
        options: [ "$2-\\sqrt{3}$", "$2+\\sqrt{3}$", "$\\sqrt{3}-2$", "$\\sqrt{6}-1$" ],
        answer: "$2-\\sqrt{3}$",
        rationale: "まず、根号の前を $2$ に変形します。<br>" +
                   "$\\sqrt{48} = 2\\sqrt{12}$ なので、与式は $\\sqrt{7-2\\sqrt{12}}$ となります。<br>" +
                   "足して $7$、掛けて $12$ になる2数は $4$ と $3$ です。<br>" +
                   "よって $\\sqrt{(4+3)-2\\sqrt{4 \\times 3}} = \\sqrt{4}-\\sqrt{3} = 2-\\sqrt{3}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 34
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{11+\\sqrt{72}}$",
        options: [ "$3+\\sqrt{2}$", "$3-\\sqrt{2}$", "$\\sqrt{9}+\\sqrt{2}$", "$9+\\sqrt{2}$" ],
        answer: "$3+\\sqrt{2}$",
        rationale: "まず、根号の前を $2$ に変形します。<br>" +
                   "$\\sqrt{72} = \\sqrt{4 \\times 18} = 2\\sqrt{18}$ なので、与式は $\\sqrt{11+2\\sqrt{18}}$ となります。<br>" +
                   "足して $11$、掛けて $18$ になる2数は $9$ と $2$ です。<br>" +
                   "よって $\\sqrt{(9+2)+2\\sqrt{9 \\times 2}} = \\sqrt{9}+\\sqrt{2} = 3+\\sqrt{2}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 35
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{11-\\sqrt{72}}$",
        options: [ "$3-\\sqrt{2}$", "$3+\\sqrt{2}$", "$\\sqrt{2}-3$", "$\\sqrt{6}-\\sqrt{3}$" ],
        answer: "$3-\\sqrt{2}$",
        rationale: "まず、根号の前を $2$ に変形します。<br>" +
                   "$\\sqrt{72} = 2\\sqrt{18}$ なので、与式は $\\sqrt{11-2\\sqrt{18}}$ となります。<br>" +
                   "足して $11$、掛けて $18$ になる2数は $9$ と $2$ です。<br>" +
                   "よって $\\sqrt{(9+2)-2\\sqrt{9 \\times 2}} = \\sqrt{9}-\\sqrt{2} = 3-\\sqrt{2}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 36
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{4+\\sqrt{12}}$",
        options: [ "$\\sqrt{3}+1$", "$\\sqrt{3}-1$", "$2+\\sqrt{3}$", "$3+1$" ],
        answer: "$\\sqrt{3}+1$",
        rationale: "まず、根号の前を $2$ に変形します。<br>" +
                   "$\\sqrt{12} = 2\\sqrt{3}$ なので、与式は $\\sqrt{4+2\\sqrt{3}}$ となります。<br>" +
                   "足して $4$、掛けて $3$ になる2数は $3$ と $1$ です。<br>" +
                   "よって $\\sqrt{(3+1)+2\\sqrt{3 \\times 1}} = \\sqrt{3}+\\sqrt{1} = \\sqrt{3}+1$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 37
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{9-\\sqrt{80}}$",
        options: [ "$\\sqrt{5}-2$", "$\\sqrt{5}+2$", "$2-\\sqrt{5}$", "$5-\\sqrt{4}$" ],
        answer: "$\\sqrt{5}-2$",
        rationale: "まず、根号の前を $2$ に変形します。<br>" +
                   "$\\sqrt{80} = \\sqrt{4 \\times 20} = 2\\sqrt{20}$ なので、与式は $\\sqrt{9-2\\sqrt{20}}$ となります。<br>" +
                   "足して $9$、掛けて $20$ になる2数は $5$ と $4$ です。<br>" +
                   "よって $\\sqrt{(5+4)-2\\sqrt{5 \\times 4}} = \\sqrt{5}-\\sqrt{4} = \\sqrt{5}-2$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 38
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{3+\\sqrt{5}}$",
        options: [ "$\\dfrac{\\sqrt{10}+\\sqrt{2}}{2}$", "$\\dfrac{\\sqrt{10}-\\sqrt{2}}{2}$", "$\\dfrac{\\sqrt{6}+\\sqrt{2}}{2}$", "$\\dfrac{\\sqrt{5}+1}{2}$" ],
        answer: "$\\dfrac{\\sqrt{10}+\\sqrt{2}}{2}$",
        rationale: "根号の前を $2$ にするために、式全体を分数に変形します。<br>" +
                   "$\\sqrt{3+\\sqrt{5}} = \\sqrt{\\dfrac{6+2\\sqrt{5}}{2}} = \\dfrac{\\sqrt{6+2\\sqrt{5}}}{\\sqrt{2}}$<br>" +
                   "分子について、足して $6$、掛けて $5$ になる2数は $5$ と $1$ です。<br>" +
                   "よって分子は $\\sqrt{5}+\\sqrt{1}$ となり、<br>" +
                   "全体は $\\dfrac{\\sqrt{5}+1}{\\sqrt{2}} = \\dfrac{\\sqrt{10}+\\sqrt{2}}{2}$ となります。<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 39
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{5-\\sqrt{21}}$",
        options: [ "$\\dfrac{\\sqrt{14}-\\sqrt{6}}{2}$", "$\\dfrac{\\sqrt{14}+\\sqrt{6}}{2}$", "$\\dfrac{\\sqrt{7}-\\sqrt{3}}{2}$", "$\\dfrac{\\sqrt{21}-1}{2}$" ],
        answer: "$\\dfrac{\\sqrt{14}-\\sqrt{6}}{2}$",
        rationale: "根号の前を $2$ にするために、式全体を分数に変形します。<br>" +
                   "$\\sqrt{5-\\sqrt{21}} = \\sqrt{\\dfrac{10-2\\sqrt{21}}{2}} = \\dfrac{\\sqrt{10-2\\sqrt{21}}}{\\sqrt{2}}$<br>" +
                   "分子について、足して $10$、掛けて $21$ になる2数は $7$ と $3$ です。<br>" +
                   "よって分子は $\\sqrt{7}-\\sqrt{3}$ となり、<br>" +
                   "全体は $\\dfrac{\\sqrt{7}-\\sqrt{3}}{\\sqrt{2}} = \\dfrac{\\sqrt{14}-\\sqrt{6}}{2}$ となります。<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 40
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{6-\\sqrt{32}}$",
        options: [ "$2-\\sqrt{2}$", "$2+\\sqrt{2}$", "$\\sqrt{6}-\\sqrt{2}$", "$4-\\sqrt{2}$" ],
        answer: "$2-\\sqrt{2}$",
        rationale: "まず、根号の前を $2$ に変形します。<br>" +
                   "$\\sqrt{32} = \\sqrt{4 \\times 8} = 2\\sqrt{8}$ なので、与式は $\\sqrt{6-2\\sqrt{8}}$ となります。<br>" +
                   "足して $6$、掛けて $8$ になる2数は $4$ と $2$ です。<br>" +
                   "よって $\\sqrt{(4+2)-2\\sqrt{4 \\times 2}} = \\sqrt{4}-\\sqrt{2} = 2-\\sqrt{2}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 41
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{12+2\\sqrt{35}}$",
        options: [ "$\\sqrt{7}+\\sqrt{5}$", "$\\sqrt{7}-\\sqrt{5}$", "$7+\\sqrt{5}$", "$12+\\sqrt{35}$" ],
        answer: "$\\sqrt{7}+\\sqrt{5}$",
        rationale: "公式 $\\sqrt{(a+b)+2\\sqrt{ab}} = \\sqrt{a}+\\sqrt{b}$ を利用します。<br>" +
                   "足して $12$、掛けて $35$ になる2数は $7$ と $5$ です。<br>" +
                   "式に当てはめると：<br>" +
                   "$\\sqrt{(7+5)+2\\sqrt{7 \\times 5}} = \\sqrt{7}+\\sqrt{5}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 42
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{12-2\\sqrt{35}}$",
        options: [ "$\\sqrt{7}-\\sqrt{5}$", "$\\sqrt{7}+\\sqrt{5}$", "$7-\\sqrt{5}$", "$5-\\sqrt{7}$" ],
        answer: "$\\sqrt{7}-\\sqrt{5}$",
        rationale: "公式 $\\sqrt{(a+b)-2\\sqrt{ab}} = \\sqrt{a}-\\sqrt{b}$ ($a>b$) を利用します。<br>" +
                   "足して $12$、掛けて $35$ になる2数は $7$ と $5$ です。<br>" +
                   "式に当てはめると：<br>" +
                   "$\\sqrt{(7+5)-2\\sqrt{7 \\times 5}} = \\sqrt{7}-\\sqrt{5}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 43
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{10-4\\sqrt{6}}$",
        options: [ "$\\sqrt{6}-\\sqrt{4}$", "$2\\sqrt{2}-\\sqrt{2}$", "$\\sqrt{6}-2$", "$2-\\sqrt{6}$" ],
        answer: "$\\sqrt{6}-2$",
        rationale: "まず、根号の前を $2$ に変形します。<br>" +
                   "$4\\sqrt{6} = 2\\sqrt{24}$ なので、与式は $\\sqrt{10-2\\sqrt{24}}$ となります。<br>" +
                   "足して $10$、掛けて $24$ になる2数は $6$ と $4$ です。<br>" +
                   "よって $\\sqrt{(6+4)-2\\sqrt{6 \\times 4}} = \\sqrt{6}-\\sqrt{4} = \\sqrt{6}-2$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 44
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{13+2\\sqrt{42}}$",
        options: [ "$\\sqrt{7}+\\sqrt{6}$", "$\\sqrt{7}-\\sqrt{6}$", "$7+\\sqrt{6}$", "$6+\\sqrt{7}$" ],
        answer: "$\\sqrt{7}+\\sqrt{6}$",
        rationale: "公式 $\\sqrt{(a+b)+2\\sqrt{ab}} = \\sqrt{a}+\\sqrt{b}$ を利用します。<br>" +
                   "足して $13$、掛けて $42$ になる2数は $7$ と $6$ です。<br>" +
                   "式に当てはめると：<br>" +
                   "$\\sqrt{(7+6)+2\\sqrt{7 \\times 6}} = \\sqrt{7}+\\sqrt{6}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 45
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{10+2\\sqrt{21}}$",
        options: [ "$\\sqrt{7}+\\sqrt{3}$", "$\\sqrt{7}-\\sqrt{3}$", "$7+\\sqrt{3}$", "$3+\\sqrt{7}$" ],
        answer: "$\\sqrt{7}+\\sqrt{3}$",
        rationale: "公式 $\\sqrt{(a+b)+2\\sqrt{ab}} = \\sqrt{a}+\\sqrt{b}$ を利用します。<br>" +
                   "足して $10$、掛けて $21$ になる2数は $7$ と $3$ です。<br>" +
                   "式に当てはめると：<br>" +
                   "$\\sqrt{(7+3)+2\\sqrt{7 \\times 3}} = \\sqrt{7}+\\sqrt{3}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 46
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{10-2\\sqrt{21}}$",
        options: [ "$\\sqrt{7}-\\sqrt{3}$", "$\\sqrt{7}+\\sqrt{3}$", "$7-\\sqrt{3}$", "$3-\\sqrt{7}$" ],
        answer: "$\\sqrt{7}-\\sqrt{3}$",
        rationale: "公式 $\\sqrt{(a+b)-2\\sqrt{ab}} = \\sqrt{a}-\\sqrt{b}$ を利用します。<br>" +
                   "足して $10$、掛けて $21$ になる2数は $7$ と $3$ です。<br>" +
                   "式に当てはめると：<br>" +
                   "$\\sqrt{(7+3)-2\\sqrt{7 \\times 3}} = \\sqrt{7}-\\sqrt{3}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 47
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{14-6\\sqrt{5}}$",
        options: [ "$3-\\sqrt{5}$", "$3+\\sqrt{5}$", "$\\sqrt{5}-3$", "$\\sqrt{9}-\\sqrt{5}$" ],
        answer: "$3-\\sqrt{5}$",
        rationale: "まず、根号の前を $2$ に変形します。<br>" +
                   "$6\\sqrt{5} = 2\\sqrt{45}$ なので、与式は $\\sqrt{14-2\\sqrt{45}}$ となります。<br>" +
                   "足して $14$、掛けて $45$ になる2数は $9$ と $5$ です。<br>" +
                   "よって $\\sqrt{(9+5)-2\\sqrt{9 \\times 5}} = \\sqrt{9}-\\sqrt{5} = 3-\\sqrt{5}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 48
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{8+\\sqrt{60}}$",
        options: [ "$\\sqrt{5}+\\sqrt{3}$", "$\\sqrt{5}-\\sqrt{3}$", "$\\dfrac{\\sqrt{10}+\\sqrt{6}}{2}$", "$5+\\sqrt{3}$" ],
        answer: "$\\sqrt{5}+\\sqrt{3}$",
        rationale: "まず、根号の前を $2$ に変形します。<br>" +
                   "$\\sqrt{60} = 2\\sqrt{15}$ なので、与式は $\\sqrt{8+2\\sqrt{15}}$ となります。<br>" +
                   "足して $8$、掛けて $15$ になる2数は $5$ と $3$ です。<br>" +
                   "よって $\\sqrt{(5+3)+2\\sqrt{5 \\times 3}} = \\sqrt{5}+\\sqrt{3}$<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 49
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{6-\\sqrt{11}}$",
        options: [ "$\\dfrac{\\sqrt{22}-\\sqrt{2}}{2}$", "$\\dfrac{\\sqrt{22}+\\sqrt{2}}{2}$", "$\\dfrac{\\sqrt{11}-1}{2}$", "$\\dfrac{11-\\sqrt{2}}{2}$" ],
        answer: "$\\dfrac{\\sqrt{22}-\\sqrt{2}}{2}$",
        rationale: "根号の前を $2$ にするために、式全体を分数に変形します。<br>" +
                   "$\\sqrt{6-\\sqrt{11}} = \\sqrt{\\dfrac{12-2\\sqrt{11}}{2}} = \\dfrac{\\sqrt{12-2\\sqrt{11}}}{\\sqrt{2}}$<br>" +
                   "分子について、足して $12$、掛けて $11$ になる2数は $11$ と $1$ です。<br>" +
                   "よって分子は $\\sqrt{11}-1$ となり、<br>" +
                   "全体は $\\dfrac{\\sqrt{11}-1}{\\sqrt{2}} = \\dfrac{\\sqrt{22}-\\sqrt{2}}{2}$ となります。<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    },
    // 問題 50
    {
        question: "次の式の2重根号をはずして簡単にせよ。<br>$\\sqrt{2-\\sqrt{3}}$",
        options: [ "$\\dfrac{\\sqrt{6}-\\sqrt{2}}{2}$", "$\\dfrac{\\sqrt{6}+\\sqrt{2}}{2}$", "$\\dfrac{\\sqrt{3}-1}{2}$", "$\\sqrt{3}-1$" ],
        answer: "$\\dfrac{\\sqrt{6}-\\sqrt{2}}{2}$",
        rationale: "根号の前を $2$ にするために、式全体を分数に変形します。<br>" +
                   "$\\sqrt{2-\\sqrt{3}} = \\sqrt{\\dfrac{4-2\\sqrt{3}}{2}} = \\dfrac{\\sqrt{4-2\\sqrt{3}}}{\\sqrt{2}}$<br>" +
                   "分子について、足して $4$、掛けて $3$ になる2数は $3$ と $1$ です。<br>" +
                   "よって分子は $\\sqrt{3}-1$ となり、<br>" +
                   "全体は $\\dfrac{\\sqrt{3}-1}{\\sqrt{2}} = \\dfrac{\\sqrt{6}-\\sqrt{2}}{2}$ となります。<br>" +
                   " <strong>↓「学びエイド」の解説動画で確認</strong> <br>" +
                   "<a href='https://www.manabi-aid.jp/lesson/id/7710/63143' target='_blank'>解説動画を見る</a><br>" +
                   "<small>（※学びエイドのログインが必要です）</small>"
    }

            ]; // ← allQuizData をここで閉じる
            // --- 元のクイズデータの終わり ---