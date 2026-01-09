import os

# Source parts
parts = [
    "M1-1-2-1_part1.tmp",
    "M1-1-2-1_part2a.tmp",
    "M1-1-2-1_part2b.tmp",
    "M1-1-2-1_part3.tmp"
]

# Read parts
content_parts = []
for p in parts:
    with open(p, 'r', encoding='utf-8') as f:
        content_parts.append(f.read())

part1, part2a, part2b, part3 = content_parts

# Config for targets
targets = [
    {
        "id": "M1-1-2-2",
        "title_tag": "<title>第2節-2 2乗の展開公式のテスト (ランダム10題)</title>",
        "h1_tag": "<h1>第2節-2 2乗の展開公式</h1>",
        "qd_script": '<script src="M1-1-2-2QD.js"></script>'
    },
    {
        "id": "M1-1-2-3",
        "title_tag": "<title>第2節-3 和と差の積の展開公式のテスト (ランダム10題)</title>",
        "h1_tag": "<h1>第2節-3 和と差の積の展開公式</h1>",
        "qd_script": '<script src="M1-1-2-3QD.js"></script>'
    },
    {
        "id": "M1-1-2-4",
        "title_tag": "<title>第2節-4 3項の2乗の展開公式のテスト (ランダム10題)</title>",
        "h1_tag": "<h1>第2節-4 3項の2乗の展開公式</h1>",
        "qd_script": '<script src="M1-1-2-4QD.js"></script>'
    }
]

# Source strings to replace in Part 1
src_title = "<title>第2節-1 (x+a)(x+b)の展開のテスト (ランダム10題)</title>"
src_h1 = "<h1>第2節-1 (x+a)(x+b)の展開</h1>"
src_qd = '<script src="M1-1-2-1QD.js"></script>'

src_progress_key = "quiz_progress_M1-1-2-1"

for t in targets:
    print(f"Generating {t['id']}.html ...")
    
    # Process Part 1
    new_part1 = part1.replace(src_title, t['title_tag'])
    new_part1 = new_part1.replace(src_h1, t['h1_tag'])
    new_part1 = new_part1.replace(src_qd, t['qd_script'])
    
    # Check if replacement worked (Part 1)
    if t['title_tag'] not in new_part1:
        print(f"WARNING: Title replacement failed for {t['id']}")
    if t['h1_tag'] not in new_part1:
        print(f"WARNING: H1 replacement failed for {t['id']}")
    if t['qd_script'] not in new_part1:
        print(f"WARNING: QD script replacement failed for {t['id']}")

    # Process Part 2a & 2b (Progress Key)
    target_progress_key = f"quiz_progress_{t['id']}"
    new_part2a = part2a.replace(src_progress_key, target_progress_key)
    new_part2b = part2b.replace(src_progress_key, target_progress_key)
    
    # Combine
    full_content = new_part1 + new_part2a + new_part2b + part3
    
    # Write
    filename = f"{t['id']}.html"
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(full_content)
    
    print(f"Written {filename} ({len(full_content)} chars)")

print("Done.")
