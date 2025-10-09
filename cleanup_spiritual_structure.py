#!/usr/bin/env python3
"""
Clean up malformed spiritual structures from previous scripts
"""

import re
import sys

# Read the file
file_path = r'c:\Users\mario\OneDrive - PolyDecypher\Desktop\Cloned_Repos\CopticLearn\constants\modules\module1.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to fix: lines like "          ," (comma on its own line with wrong indentation)
# These are caused by the previous indentation fix script
content = re.sub(r'\n\s+,\n', ',\n', content)

# Pattern to fix: duplicate closing braces with wrong indentation like:
#           },
#                     },
# Should be just:
#           },
content = re.sub(r'(\s+}\,)\n\s{20,}},', r'\1', content)

# Write the file back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

sys.stdout.write("Cleaned up malformed structures\n")
sys.stdout.flush()
