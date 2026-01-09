import os
import re

FILE_PATH = r"h:\基本大全ウェブテスト\webtest_fortablet_sample\M1-1-4-11QD.js"

def check_syntax(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        print(f"File read successfully. Size: {len(content)} bytes.")
        
        # Simple brace check
        validate_braces_advanced(content)
        
    except Exception as e:
        print(f"Error reading file: {e}")

def validate_braces_advanced(code):
    stack = []
    lines = code.split('\n')
    in_template_string = False
    
    for i, line in enumerate(lines):
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
