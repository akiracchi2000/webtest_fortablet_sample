import os
import re
import tempfile

FILE_PATH = r"h:\基本大全ウェブテスト\webtest_fortablet_sample\M1-1-4-11.html"

def check_syntax(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the main script block (the one with initQuiz)
    scripts = re.findall(r'<script>(.*?)</script>', content, re.DOTALL)
    
    target_script = None
    for s in scripts:
        if "function initQuiz" in s:
            target_script = s
            break
            
    if not target_script:
        print("Main script block not found.")
        return

    validate_braces_advanced(target_script)

def validate_braces_advanced(code):
    stack = []
    lines = code.split('\n')
    in_template_string = False
    
    for i, line in enumerate(lines):
        # Very simple state machine to ignore braces in template strings
        # This is not perfect but better than nothing
        clean_line = ""
        j = 0
        while j < len(line):
            char = line[j]
            if char == '`':
                in_template_string = not in_template_string
            elif not in_template_string:
                clean_line += char
            j += 1
            
        for char in clean_line:
            if char == '{':
                stack.append(('}', i + 1))
            elif char == '}':
                if not stack:
                    print(f"Error: Unexpected '}}' at line {i + 1}")
                    return
                stack.pop()
    
    if stack:
        print(f"Error: Unclosed '{{' from line {stack[-1][1]}")
    else:
        print("Braces are balanced.")

if __name__ == "__main__":
    check_syntax(FILE_PATH)
