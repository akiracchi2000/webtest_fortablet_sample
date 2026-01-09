import os
import glob

TARGET_DIR = r"h:\基本大全ウェブテスト\webtest_fortablet_sample"
FILES_PATTERN = os.path.join(TARGET_DIR, "M1-*.html")

def check_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    for i, line in enumerate(lines):
        if "const data = await response.json();" in line:
            # Check if it's indented (inside a function) or not
            # In the broken file, it was at the top level (indentation might match 
            # checkAnswerWithAI but it was stranded).
            # Actually, simply finding this line doesn't mean it's broken 
            # if it's inside an async function.
            # But in the garbage block, it was surrounded by closing braces } and then nothing.
            
            # Let's check if the previous non-empty line was a closing brace '}' 
            # and the line before that was NOT an open brace.
            pass
            
    # Better check: Count the number of "const data = await response.json();" occurrences.
    # In a valid file, it should appear once or twice (in checkAnswerWithAI and analyzeError).
    # In the broken file, it appeared an extra time.
    content = "".join(lines)
    count = content.count("const data = await response.json();")
    
    # Also check for orphaned "catch (error) {"
    catch_count = content.count("} catch (error) {")
    
    if count > 2:
        return f"Suspicious: 'await response.json()' appears {count} times."
    
    return "OK"

def main():
    files = glob.glob(FILES_PATTERN)
    suspicious_files = []
    
    print("Scanning files for garbage code defects...")
    for file_path in files:
        status = check_file(file_path)
        if status != "OK":
            print(f"{os.path.basename(file_path)}: {status}")
            suspicious_files.append(file_path)
            
    print(f"\nTotal suspicious files: {len(suspicious_files)}")

if __name__ == "__main__":
    main()
