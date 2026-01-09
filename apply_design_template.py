import os
import re

template_file = r'e:\マイドライブ\UnderConstruction\M1-1-4-13.html'
target_dir = r'e:\マイドライブ\UnderConstruction'

# List of target files
target_files = []
# Section 5
target_files.extend([f'M1-1-5-{i}.html' for i in range(1, 7)])

def extract_metadata(content):
    title_match = re.search(r'<title>(.*?)</title>', content)
    h1_match = re.search(r'<h1>(.*?)</h1>', content)
    # Using specific regex to capture QD file. Assumes src="...QD.js"
    qd_match = re.search(r'src="([^"]+QD\.js)"', content)
    
    title = title_match.group(1) if title_match else None
    h1 = h1_match.group(1) if h1_match else None
    qd = qd_match.group(1) if qd_match else None
    
    return title, h1, qd

try:
    # Read Template
    with open(template_file, 'r', encoding='utf-8') as f:
        template_content = f.read()

    for filename in target_files:
        file_path = os.path.join(target_dir, filename)
        
        if not os.path.exists(file_path):
            print(f"Skipping {filename} (not found)")
            continue

        # Read Target File
        with open(file_path, 'r', encoding='utf-8') as f:
            target_content = f.read()

        # Extract Metadata
        title, h1, qd = extract_metadata(target_content)

        if not title or not h1 or not qd:
            print(f"Skipping {filename} (failed to extract metadata: Title={title}, H1={h1}, QD={qd})")
            continue

        # Prepare New Content
        new_content = template_content
        
        # Replace Title
        # Note: template uses <title>...M1-1-4-13...</title>
        new_content = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', new_content)
        
        # Replace H1
        new_content = re.sub(r'<h1>.*?</h1>', f'<h1>{h1}</h1>', new_content)
        
        # Replace QD Script
        # Note: template has src="M1-1-4-13QD.js"
        new_content = new_content.replace('src="M1-1-4-13QD.js"', f'src="{qd}"')

        # Write Back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Updated {filename} : Title='{title}', QD='{qd}'")

except Exception as e:
    print(f"Error: {e}")
