import re
import base64
import os

js_source_path = 'M1-1-4-11QD.js'
output_js_path = 'M1-1-4-11_images.js'

images = {}

with open(js_source_path, 'r', encoding='utf-8') as f:
    content = f.read()
    # Regex to find const definitions of png files
    # matches: const g_V_0_0 = "g_V_0_0.png";
    matches = re.findall(r'const\s+(\w+)\s*=\s*"([^"]+\.png)"', content)
    
    for var_name, filename in matches:
        if os.path.exists(filename):
            with open(filename, 'rb') as img_f:
                b64_data = base64.b64encode(img_f.read()).decode('utf-8')
                images[filename] = f"data:image/png;base64,{b64_data}"
        else:
            print(f"Warning: Image file {filename} not found.")

# Generate JS content
js_content = "window.ANSWER_IMAGES = {\n"
for filename, b64 in images.items():
    js_content += f'    "{filename}": "{b64}",\n'
js_content += "};\n"

with open(output_js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Generated {output_js_path} with {len(images)} images.")
