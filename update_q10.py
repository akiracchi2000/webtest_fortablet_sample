import sys

target_q = 'question: "2次関数 $y=ax^2+bx+c$ ($a>0$) のグラフの頂点が第3象限にあるとき'

with open('M1-3-3-10QD.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find(target_q)
if idx == -1:
    print("Target not found!")
    sys.exit(1)

# Find end of question line
q_line_end = content.find('\n', idx)

# New question line
new_q = 'question: "下に凸の放物線で、頂点が第4象限にあり、$x$軸と異なる2点で交わり、その2点の座標がともに正であるとき、$c$ の符号は？<br><img src=\'M1-3-3-10_Q10.png\' style=\'max-width:300px; display:block; margin:10px auto;\'>",'
content = content[:idx] + new_q + content[q_line_end:]

# Next answer
a_idx = content.find('answer:', idx)
a_end = content.find('\n', a_idx)
new_a = 'answer: "正 ($c > 0$)",'
content = content[:a_idx] + new_a + content[a_end:]

# Next rationale
r_idx = content.find('rationale:', a_idx)
r_end = content.find('\n', r_idx)
# Note: we use raw string or escaped backslashes for \alpha
new_r = r'rationale: "<strong>解説: </strong><br>2つの正の解を持つということは、解と係数の関係より $\alpha\beta = c/a > 0$ です。<br>$a>0$ なので $c>0$ となります。<br>グラフを見ても、$y$ 軸との交点（$x=0$のとき）は正の位置にあることがわかります。" + VIDEO_LINK'
content = content[:r_idx] + new_r + content[r_end:]

with open('M1-3-3-10QD.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully updated Q10.")
