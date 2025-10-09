#!/usr/bin/env python3
"""
Simple line-by-line fix using sed to replace specific sections
"""
import subprocess
import sys

file_path = r'c:\Users\mario\OneDrive - PolyDecypher\Desktop\Cloned_Repos\CopticLearn\constants\modules\module1.ts'

# Read entire file
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Just remove the problem comment and expand the bibleVerses  that are inline
# Find and remove lines with just "// Schlachter2000 (Ref.):"
new_lines = []
skip_next = False
for i, line in enumerate(lines):
    if '// Schlachter2000 (Ref.):' in line and line.strip() == '// Schlachter2000 (Ref.):':
        # Skip this line
        continue
    new_lines.append(line)

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

sys.stdout.write("Cleaned up comment lines\n")
sys.stdout.flush()

# Now run the comprehensive fix script
subprocess.run([sys.executable, r'c:\Users\mario\OneDrive - PolyDecypher\Desktop\Cloned_Repos\CopticLearn\comprehensive_fix.py'])
