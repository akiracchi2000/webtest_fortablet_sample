const VIDEO_LINK = "<br> <strong>↓「学びエイド」の解説動画で確認</strong> <br><a href='https://www.manabi-aid.jp/lesson/id/7710/63159' target='_blank'>解説動画を見る</a><br><small>（※学びエイドのログインが必要です）</small>";
window.QUIZ_DATA = [
    // 問題 1
    {
        question: "$x+\\frac{1}{x}=3$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "7", "5", "9", "11" ],
        answer: "7",
        rationale: "<strong>解説: </strong>$(x+\\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2}$ なので、$x^2+\\frac{1}{x^2} = (x+\\frac{1}{x})^2 - 2$ です。<br>$3^2 - 2 = 7$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 2
    {
        question: "$x+\\frac{1}{x}=4$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "18", "16", "14", "12" ],
        answer: "14",
        rationale: "<strong>解説: </strong>$(x+\\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2}$ なので、$x^2+\\frac{1}{x^2} = (x+\\frac{1}{x})^2 - 2$ です。<br>$4^2 - 2 = 14$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 3
    {
        question: "$x+\\frac{1}{x}=5$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "25", "21", "23", "27" ],
        answer: "23",
        rationale: "<strong>解説: </strong>$(x+\\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2}$ なので、$x^2+\\frac{1}{x^2} = (x+\\frac{1}{x})^2 - 2$ です。<br>$5^2 - 2 = 23$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 4
    {
        question: "$x+\\frac{1}{x}=6$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "34", "38", "32", "36" ],
        answer: "34",
        rationale: "<strong>解説: </strong>$(x+\\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2}$ なので、$x^2+\\frac{1}{x^2} = (x+\\frac{1}{x})^2 - 2$ です。<br>$6^2 - 2 = 34$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 5
    {
        question: "$x+\\frac{1}{x}=7$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "49", "45", "51", "47" ],
        answer: "47",
        rationale: "<strong>解説: </strong>$(x+\\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2}$ なので、$x^2+\\frac{1}{x^2} = (x+\\frac{1}{x})^2 - 2$ です。<br>$7^2 - 2 = 47$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 6
    {
        question: "$x+\\frac{1}{x}=9$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "81", "83", "77", "79" ],
        answer: "79",
        rationale: "<strong>解説: </strong>$(x+\\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2}$ なので、$x^2+\\frac{1}{x^2} = (x+\\frac{1}{x})^2 - 2$ です。<br>$9^2 - 2 = 79$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 7
    {
        question: "$x+\\frac{1}{x}=10$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "100", "96", "98", "102" ],
        answer: "98",
        rationale: "<strong>解説: </strong>$(x+\\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2}$ なので、$x^2+\\frac{1}{x^2} = (x+\\frac{1}{x})^2 - 2$ です。<br>$10^2 - 2 = 98$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 8
    {
        question: "$x+\\frac{1}{x}=2$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "2", "6", "0", "4" ],
        answer: "2",
        rationale: "<strong>解説: </strong>$(x+\\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2}$ なので、$x^2+\\frac{1}{x^2} = (x+\\frac{1}{x})^2 - 2$ です。<br>$2^2 - 2 = 2$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 9
    {
        question: "$x+\\frac{1}{x}=\\sqrt{3}$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "2", "1", "5", "3" ],
        answer: "1",
        rationale: "<strong>解説: </strong>$x^2+\\frac{1}{x^2} = (\\sqrt{3})^2 - 2 = 3 - 2 = 1$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 10
    {
        question: "$x+\\frac{1}{x}=\\sqrt{5}$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "5", "7", "3", "2" ],
        answer: "3",
        rationale: "<strong>解説: </strong>$x^2+\\frac{1}{x^2} = (\\sqrt{5})^2 - 2 = 5 - 2 = 3$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 11
    {
        question: "$x+\\frac{1}{x}=\\sqrt{6}$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "2", "6", "8", "4" ],
        answer: "4",
        rationale: "<strong>解説: </strong>$x^2+\\frac{1}{x^2} = (\\sqrt{6})^2 - 2 = 6 - 2 = 4$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 12
    {
        question: "$x+\\frac{1}{x}=\\sqrt{7}$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "6", "7", "9", "5" ],
        answer: "5",
        rationale: "<strong>解説: </strong>$x^2+\\frac{1}{x^2} = (\\sqrt{7})^2 - 2 = 7 - 2 = 5$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 13
    {
        question: "$x+\\frac{1}{x}=2\\sqrt{2}$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "4", "10", "8", "6" ],
        answer: "6",
        rationale: "<strong>解説: </strong>$x^2+\\frac{1}{x^2} = (2\\sqrt{2})^2 - 2 = 8 - 2 = 6$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 14
    {
        question: "$x-\\frac{1}{x}=2$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "4", "8", "2", "6" ],
        answer: "6",
        rationale: "<strong>解説: </strong>$(x-\\frac{1}{x})^2 = x^2 - 2 + \\frac{1}{x^2}$ なので、$x^2+\\frac{1}{x^2} = (x-\\frac{1}{x})^2 + 2$ です。<br>$2^2 + 2 = 6$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 15
    {
        question: "$x-\\frac{1}{x}=3$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "7", "11", "13", "9" ],
        answer: "11",
        rationale: "<strong>解説: </strong>$(x-\\frac{1}{x})^2 = x^2 - 2 + \\frac{1}{x^2}$ なので、$x^2+\\frac{1}{x^2} = (x-\\frac{1}{x})^2 + 2$ です。<br>$3^2 + 2 = 11$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 16
    {
        question: "$x-\\frac{1}{x}=4$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "18", "16", "20", "14" ],
        answer: "18",
        rationale: "<strong>解説: </strong>$(x-\\frac{1}{x})^2 = x^2 - 2 + \\frac{1}{x^2}$ なので、$x^2+\\frac{1}{x^2} = (x-\\frac{1}{x})^2 + 2$ です。<br>$4^2 + 2 = 18$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 17
    {
        question: "$x-\\frac{1}{x}=5$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "27", "29", "23", "25" ],
        answer: "27",
        rationale: "<strong>解説: </strong>$(x-\\frac{1}{x})^2 = x^2 - 2 + \\frac{1}{x^2}$ なので、$x^2+\\frac{1}{x^2} = (x-\\frac{1}{x})^2 + 2$ です。<br>$5^2 + 2 = 27$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 18
    {
        question: "$x-\\frac{1}{x}=1$ のとき、$x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "-1", "3", "5", "1" ],
        answer: "3",
        rationale: "<strong>解説: </strong>$(x-\\frac{1}{x})^2 = x^2 - 2 + \\frac{1}{x^2}$ なので、$x^2+\\frac{1}{x^2} = (x-\\frac{1}{x})^2 + 2$ です。<br>$1^2 + 2 = 3$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 19
    {
        question: "$x+y=3, xy=1$ のとき、$x^2+y^2$ の値を求めよ。",
        options: [ "9", "7", "6", "5" ],
        answer: "7",
        rationale: "<strong>解説: </strong>$x^2+y^2 = (x+y)^2 - 2xy = (3)^2 - 2(1) = 7$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 20
    {
        question: "$x+y=4, xy=1$ のとき、$x^2+y^2$ の値を求めよ。",
        options: [ "12", "16", "10", "14" ],
        answer: "14",
        rationale: "<strong>解説: </strong>$x^2+y^2 = (x+y)^2 - 2xy = (4)^2 - 2(1) = 14$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 21
    {
        question: "$x+y=5, xy=1$ のとき、$x^2+y^2$ の値を求めよ。",
        options: [ "25", "23", "21", "24" ],
        answer: "23",
        rationale: "<strong>解説: </strong>$x^2+y^2 = (x+y)^2 - 2xy = (5)^2 - 2(1) = 23$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 22
    {
        question: "$x+y=2\\sqrt{3}, xy=1$ のとき、$x^2+y^2$ の値を求めよ。",
        options: [ "8", "10", "14", "12" ],
        answer: "10",
        rationale: "<strong>解説: </strong>$x^2+y^2 = (x+y)^2 - 2xy = (2\\sqrt{3})^2 - 2(1) = 10$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 23
    {
        question: "$x+\\frac{1}{x}=3$ のとき、$(x-\\frac{1}{x})^2$ の値を求めよ。",
        options: [ "5", "3", "7", "9" ],
        answer: "5",
        rationale: "<strong>解説: </strong>$(x-\\frac{1}{x})^2 = (x+\\frac{1}{x})^2 - 4$ という変形を利用します。<br>$3^2 - 4 = 5$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 24
    {
        question: "$x+\\frac{1}{x}=4$ のとき、$(x-\\frac{1}{x})^2$ の値を求めよ。",
        options: [ "16", "14", "10", "12" ],
        answer: "12",
        rationale: "<strong>解説: </strong>$(x-\\frac{1}{x})^2 = (x+\\frac{1}{x})^2 - 4$ という変形を利用します。<br>$4^2 - 4 = 12$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 25
    {
        question: "$x+\\frac{1}{x}=5$ のとき、$(x-\\frac{1}{x})^2$ の値を求めよ。",
        options: [ "19", "23", "21", "25" ],
        answer: "21",
        rationale: "<strong>解説: </strong>$(x-\\frac{1}{x})^2 = (x+\\frac{1}{x})^2 - 4$ という変形を利用します。<br>$5^2 - 4 = 21$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 26
    {
        question: "$x+\\frac{1}{x}=6$ のとき、$(x-\\frac{1}{x})^2$ の値を求めよ。",
        options: [ "32", "30", "36", "34" ],
        answer: "32",
        rationale: "<strong>解説: </strong>$(x-\\frac{1}{x})^2 = (x+\\frac{1}{x})^2 - 4$ という変形を利用します。<br>$6^2 - 4 = 32$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 27
    {
        question: "$x+\\frac{1}{x}=2\\sqrt{2}$ のとき、$(x-\\frac{1}{x})^2$ の値を求めよ。",
        options: [ "4", "2", "8", "6" ],
        answer: "4",
        rationale: "<strong>解説: </strong>$(x-\\frac{1}{x})^2 = (x+\\frac{1}{x})^2 - 4 = (2\\sqrt{2})^2 - 4 = 8 - 4 = 4$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 28
    {
        question: "$x+\\frac{1}{x}=2$ のとき、$x^3+\\frac{1}{x^3}$ の値を求めよ。",
        options: [ "4", "8", "6", "2" ],
        answer: "2",
        rationale: "<strong>解説: </strong>$x^3+\\frac{1}{x^3} = (x+\\frac{1}{x})^3 - 3(x+\\frac{1}{x})$ です。<br>値を代入して計算します。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 29
    {
        question: "$x+\\frac{1}{x}=3$ のとき、$x^3+\\frac{1}{x^3}$ の値を求めよ。",
        options: [ "27", "18", "9", "24" ],
        answer: "18",
        rationale: "<strong>解説: </strong>$x^3+\\frac{1}{x^3} = (x+\\frac{1}{x})^3 - 3(x+\\frac{1}{x})$ です。<br>値を代入して計算します。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 30
    {
        question: "$x+\\frac{1}{x}=4$ のとき、$x^3+\\frac{1}{x^3}$ の値を求めよ。",
        options: [ "61", "64", "52", "56" ],
        answer: "52",
        rationale: "<strong>解説: </strong>$x^3+\\frac{1}{x^3} = (x+\\frac{1}{x})^3 - 3(x+\\frac{1}{x})$ です。<br>値を代入して計算します。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 31
    {
        question: "$x+\\frac{1}{x}=5$ のとき、$x^3+\\frac{1}{x^3}$ の値を求めよ。",
        options: [ "120", "110", "115", "125" ],
        answer: "110",
        rationale: "<strong>解説: </strong>$x^3+\\frac{1}{x^3} = (x+\\frac{1}{x})^3 - 3(x+\\frac{1}{x})$ です。<br>値を代入して計算します。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 32
    {
        question: "$x+\\frac{1}{x}=\\sqrt{3}$ のとき、$x^3+\\frac{1}{x^3}$ の値を求めよ。",
        options: [ "9\\sqrt{3}", "3\\sqrt{3}", "6\\sqrt{3}", "0" ],
        answer: "0",
        rationale: "<strong>解説: </strong>$x^3+\\frac{1}{x^3} = (x+\\frac{1}{x})^3 - 3(x+\\frac{1}{x})$ です。<br>値を代入して計算します。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 33
    {
        question: "$x-\\frac{1}{x}=2$ のとき、$x^3-\\frac{1}{x^3}$ の値を求めよ。",
        options: [ "12", "14", "8", "6" ],
        answer: "14",
        rationale: "<strong>解説: </strong>$x^3-\\frac{1}{x^3} = (x-\\frac{1}{x})^3 + 3(x-\\frac{1}{x})$ です。<br>$2^3 + 3(2) = 14$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 34
    {
        question: "$x-\\frac{1}{x}=3$ のとき、$x^3-\\frac{1}{x^3}$ の値を求めよ。",
        options: [ "24", "27", "36", "18" ],
        answer: "36",
        rationale: "<strong>解説: </strong>$x^3-\\frac{1}{x^3} = (x-\\frac{1}{x})^3 + 3(x-\\frac{1}{x})$ です。<br>$3^3 + 3(3) = 36$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 35
    {
        question: "$x-\\frac{1}{x}=1$ のとき、$x^3-\\frac{1}{x^3}$ の値を求めよ。",
        options: [ "3", "1", "2", "4" ],
        answer: "4",
        rationale: "<strong>解説: </strong>$x^3-\\frac{1}{x^3} = (x-\\frac{1}{x})^3 + 3(x-\\frac{1}{x})$ です。<br>$1^3 + 3(1) = 4$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 36
    {
        question: "$x-\\frac{1}{x}=4$ のとき、$x^3-\\frac{1}{x^3}$ の値を求めよ。",
        options: [ "52", "64", "68", "76" ],
        answer: "76",
        rationale: "<strong>解説: </strong>$x^3-\\frac{1}{x^3} = (x-\\frac{1}{x})^3 + 3(x-\\frac{1}{x})$ です。<br>$4^3 + 3(4) = 76$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 37
    {
        question: "$x+\\frac{2}{x}=3$ のとき、$x^2+\\frac{4}{x^2}$ の値を求めよ。",
        options: [ "9", "5", "13", "1" ],
        answer: "5",
        rationale: "<strong>解説: </strong>$(x+\\frac{2}{x})^2 = x^2 + 2(x)(\\frac{2}{x}) + \\frac{4}{x^2} = x^2 + 4 + \\frac{4}{x^2}$ です。<br>よって、$3^2 - 4 = 5$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 38
    {
        question: "$x+\\frac{2}{x}=4$ のとき、$x^2+\\frac{4}{x^2}$ の値を求めよ。",
        options: [ "14", "12", "16", "8" ],
        answer: "12",
        rationale: "<strong>解説: </strong>$(x+\\frac{2}{x})^2 = x^2 + 2(x)(\\frac{2}{x}) + \\frac{4}{x^2} = x^2 + 4 + \\frac{4}{x^2}$ です。<br>よって、$4^2 - 4 = 12$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 39
    {
        question: "$x+\\frac{2}{x}=5$ のとき、$x^2+\\frac{4}{x^2}$ の値を求めよ。",
        options: [ "23", "17", "21", "25" ],
        answer: "21",
        rationale: "<strong>解説: </strong>$(x+\\frac{2}{x})^2 = x^2 + 2(x)(\\frac{2}{x}) + \\frac{4}{x^2} = x^2 + 4 + \\frac{4}{x^2}$ です。<br>よって、$5^2 - 4 = 21$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 40
    {
        question: "$x+\\frac{3}{x}=4$ のとき、$x^2+\\frac{9}{x^2}$ の値を求めよ。",
        options: [ "13", "16", "7", "10" ],
        answer: "10",
        rationale: "<strong>解説: </strong>$(x+\\frac{3}{x})^2 = x^2 + 2(x)(\\frac{3}{x}) + \\frac{9}{x^2} = x^2 + 6 + \\frac{9}{x^2}$ です。<br>よって、$4^2 - 6 = 10$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 41
    {
        question: "$x+\\frac{3}{x}=5$ のとき、$x^2+\\frac{9}{x^2}$ の値を求めよ。",
        options: [ "25", "19", "16", "22" ],
        answer: "19",
        rationale: "<strong>解説: </strong>$(x+\\frac{3}{x})^2 = x^2 + 2(x)(\\frac{3}{x}) + \\frac{9}{x^2} = x^2 + 6 + \\frac{9}{x^2}$ です。<br>よって、$5^2 - 6 = 19$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 42
    {
        question: "$x+\\frac{3}{x}=6$ のとき、$x^2+\\frac{9}{x^2}$ の値を求めよ。",
        options: [ "33", "27", "36", "30" ],
        answer: "30",
        rationale: "<strong>解説: </strong>$(x+\\frac{3}{x})^2 = x^2 + 2(x)(\\frac{3}{x}) + \\frac{9}{x^2} = x^2 + 6 + \\frac{9}{x^2}$ です。<br>よって、$6^2 - 6 = 30$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 43
    {
        question: "$x+\\frac{4}{x}=5$ のとき、$x^2+\\frac{16}{x^2}$ の値を求めよ。",
        options: [ "25", "9", "17", "21" ],
        answer: "17",
        rationale: "<strong>解説: </strong>$(x+\\frac{4}{x})^2 = x^2 + 2(x)(\\frac{4}{x}) + \\frac{16}{x^2} = x^2 + 8 + \\frac{16}{x^2}$ です。<br>よって、$5^2 - 8 = 17$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 44
    {
        question: "$x-\\frac{2}{x}=3$ のとき、$x^2+\\frac{4}{x^2}$ の値を求めよ。",
        options: [ "13", "11", "9", "5" ],
        answer: "13",
        rationale: "<strong>解説: </strong>$(x-\\frac{2}{x})^2 = x^2 - 2(x)(\\frac{2}{x}) + \\frac{4}{x^2} = x^2 - 4 + \\frac{4}{x^2}$ です。<br>よって、$3^2 + 4 = 13$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 45
    {
        question: "$x-\\frac{3}{x}=2$ のとき、$x^2+\\frac{9}{x^2}$ の値を求めよ。",
        options: [ "1", "4", "10", "7" ],
        answer: "10",
        rationale: "<strong>解説: </strong>$(x-\\frac{3}{x})^2 = x^2 - 2(x)(\\frac{3}{x}) + \\frac{9}{x^2} = x^2 - 6 + \\frac{9}{x^2}$ です。<br>よって、$2^2 + 6 = 10$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 46
    {
        question: "$x-\\frac{5}{x}=4$ のとき、$x^2+\\frac{25}{x^2}$ の値を求めよ。",
        options: [ "21", "6", "26", "16" ],
        answer: "26",
        rationale: "<strong>解説: </strong>$(x-\\frac{5}{x})^2 = x^2 - 2(x)(\\frac{5}{x}) + \\frac{25}{x^2} = x^2 - 10 + \\frac{25}{x^2}$ です。<br>よって、$4^2 + 10 = 26$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 47
    {
        question: "$x+\\frac{1}{x}=3$ のとき、$x^4+\\frac{1}{x^4}$ の値を求めよ。",
        options: [ "45", "51", "47", "49" ],
        answer: "47",
        rationale: "<strong>解説: </strong>まず $x^2+\\frac{1}{x^2}$ を求めると $7$ です。<br>さらにこれを2乗して2を引くと、$7^2 - 2 = 47$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 48
    {
        question: "$x+\\frac{1}{x}=2\\sqrt{2}$ のとき、$x^4+\\frac{1}{x^4}$ の値を求めよ。",
        options: [ "32", "30", "34", "36" ],
        answer: "34",
        rationale: "<strong>解説: </strong>まず $x^2+\\frac{1}{x^2}$ を求めると $6$ です。<br>さらにこれを2乗して2を引くと、$6^2 - 2 = 34$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 49
    {
        question: "$x+\\frac{1}{x}=\\sqrt{5}$ のとき、$x^4+\\frac{1}{x^4}$ の値を求めよ。",
        options: [ "11", "9", "7", "5" ],
        answer: "7",
        rationale: "<strong>解説: </strong>まず $x^2+\\frac{1}{x^2}$ を求めると $3$ です。<br>さらにこれを2乗して2を引くと、$3^2 - 2 = 7$ となります。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    },
    // 問題 50
    {
        question: "$2x+\\frac{1}{x}=3$ のとき、$4x^2+\\frac{1}{x^2}$ の値を求めよ。",
        options: [ "7", "9", "5", "1" ],
        answer: "5",
        rationale: "<strong>解説: </strong>$(2x+\\frac{1}{x})^2 = 4x^2 + 2(2) + \\frac{1}{x^2}$ です。<br>よって $3^2 - 4 = 5$ です。" + "<button class='speak-button' onclick='speakRationale(this)'>🔊</button>" + VIDEO_LINK
    }
];