import os
import glob
import re

TARGET_DIR = r"h:\基本大全ウェブテスト\webtest_fortablet_sample"
FILES_PATTERN = os.path.join(TARGET_DIR, "M1-*.html")

def check_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find initCanvas function
    match = re.search(r"function initCanvas\(\)\s*\{([\s\S]*?)\}", content)
    
    if not match:
        return "Missing initCanvas"

    body = match.group(1)
    
    # Check for canvas assignment
    has_canvas = "canvas = document.getElementById" in body
    has_ctx = "ctx = canvas.getContext" in body
    
    if not has_canvas or not has_ctx:
        return "Missing Initialization"
        
    return "OK"

def main():
    files = glob.glob(FILES_PATTERN)
    broken_files = []
    
    print("Scanning files for initCanvas defects...")
    for file_path in files:
        status = check_file(file_path)
        if status != "OK":
            print(f"{os.path.basename(file_path)}: {status}")
            broken_files.append(file_path)
            
    print(f"\nTotal broken files: {len(broken_files)}")

if __name__ == "__main__":
    main()
