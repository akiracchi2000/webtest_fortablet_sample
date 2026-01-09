
import glob
import os
import re

TARGET_DIR = r"h:\基本大全ウェブテスト\webtest_fortablet_sample"
FILES_PATTERN = os.path.join(TARGET_DIR, "M1-*.html")

NEW_RULE_SECTION = """【最重要ルール】
0. 【最重要】画像にユーザーの手書きが全く見当たらない（白紙）場合は、絶対に「不正解」と判定し、isCorrect: false を返してください。「回答が見当たりません」と指摘してください。
1. 画像に何も書かれていない，または白紙に近い場合は必ず不正解とする。
   - その場合は以下のJSONのみを出力して終了する：
   {"isCorrect": false, "hasProcessError": false, "recognizedAnswer": "", "feedback": "メモ帳に記述がない場合は分析ができないので，解答はメモ帳に書いてくださいね！"}"""

def main():
    files = glob.glob(FILES_PATTERN)
    print(f"Found {len(files)} files.")
    
    count = 0
    for file_path in files:
        if "M1-3-1-6.html" in file_path:
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
            continue

        if "const prompt =" not in content:
            continue
            
        # Check if already updated
        if "0. 【最重要】画像にユーザーの手書きが全く見当たらない" in content:
            print(f"Skipping {os.path.basename(file_path)} - already updated")
            continue

        # Regex to match the start of the rule block up to the start of Rule 2 or 3, or just replace the header + Rule 1 lines.
        # Original M1-1-1-1 style:
        # 【最重要ルール】
        # 1. 画像に何も書かれていない，または白紙に近い場合は必ず不正解とする。
        # 2. その場合は...
        
        # We want to replace everything from "【最重要ルール】" down to before "2. 最終答案が" (which is usually Rule 3 in old numbering or Rule 2 in some files).
        # Actually in M1-1-1-1 lines 2098-2101 covers Rule 1 and 2 (where Rule 2 is the JSON spec).
        # And Rule 3 is "最終答案が..."
        
        # So we want to replace from "【最重要ルール】" until "3. 最終答案が" (or whatever the next rule is).
        # But wait, our NEW block includes Rule 1 as well.
        # The key is to insert Rule 0 and Keep Rule 1 (modified).
        
        # Let's simple check for "【最重要ルール】" and replace lines until we see a digit like "2." or "3." that we DON'T want to touch?
        # No, replacing a known chunk is safer.
        
        # Pattern:
        # 【最重要ルール】
        # 1. 画像に何も書かれていない... (upto newline)
        # 2. その場合は... (upto newline)
        #    ... (json lines)
        
        # We will replace this whole chunk with NEW_RULE_SECTION.
        
        # Regex:
        # matches: 【最重要ルール】\s*1\..+?2\..+?\}\s*(?=3\.)
        # This is risky if formatting differs.
        
        # Safer approach:
        # Just Find "【最重要ルール】"
        # and replace it with NEW_RULE_SECTION 
        # BUT we must remove the OLD Rule 1 and 2 to avoid duplication if we pasted the whole thing.
        # Or, prompts might be consistent.
        
        # Let's rely on the fact that these files were likely generated from a template.
        # We can look for the specific string of Rule 1 and replace it?
        
        # Old Rule 1 start: "1. 画像に何も書かれていない"
        
        if "【最重要ルール】" in content:
             # Let's try to identify the block. 
             # We effectively want to PREPEND Rule 0. 
             # So we replace "【最重要ルール】" with "【最重要ルール】\n0. 【最重要】... (newline)"
             pass
        else:
            continue
            
        # Construct injection string
        injection = "0. 【最重要】画像にユーザーの手書きが全く見当たらない（白紙）場合は、絶対に「不正解」と判定し、isCorrect: false を返してください。「回答が見当たりません」と指摘してください。\n"
        
        # Simply replace header with header + rule 0
        new_content = content.replace("【最重要ルール】", "【最重要ルール】\n            " + injection.strip())
        
        # Check if replacement really happened (indentation might be tricky but .replace matches exact string)
        if new_content == content:
             # Try matching indent
             # Usually it's indented.
             new_content = re.sub(r"([ \t]*)【最重要ルール】", r"\1【最重要ルール】\n\1" + injection.strip(), content, 1)

        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {os.path.basename(file_path)}")
            count += 1
            
    print(f"Total updated: {count}")

if __name__ == "__main__":
    main()
