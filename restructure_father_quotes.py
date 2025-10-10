#!/usr/bin/env python3
"""
Script to restructure fatherQuote objects in module1.ts
Moves the 'source' field to a separate 'fatherReference' object with translations
"""

import re

# Read the file
file_path = r"c:\Users\mario\OneDrive - PolyDecypher\Desktop\Cloned_Repos\CopticLearn\constants\modules\module1.ts"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the transformations for each source reference
transformations = [
    {
        'source_de': 'Polykarp, zitiert bei Bercot, *Early Christian Beliefs*, s.v. LOVE.',
        'source_en': 'Polycarp, cited in Bercot, *Early Christian Beliefs*, s.v. LOVE.',
        'source_ar': 'بوليكاربوس، مُقتبس في بيركوت، *Early Christian Beliefs*، s.v. LOVE.',
    },
    {
        'source_de': 'Clement of Alexandria, bei Bercot, s.v. CHRIST, DIVINITY OF.',
        'source_en': 'Clement of Alexandria, cited in Bercot, s.v. CHRIST, DIVINITY OF.',
        'source_ar': 'إكليمنضس الإسكندري، مُقتبس في بيركوت، s.v. CHRIST, DIVINITY OF.',
    },
    {
        'source_de': 'Clement of Alexandria, bei Bercot, s.v. SALVATION.',
        'source_en': 'Clement of Alexandria, cited in Bercot, s.v. SALVATION.',
        'source_ar': 'إكليمنضس الإسكندري، مُقتبس في بيركوت، s.v. SALVATION.',
    },
    {
        'source_de': 'Clement of Rome, bei Bercot, s.v. CHILDREN.',
        'source_en': 'Clement of Rome, cited in Bercot, s.v. CHILDREN.',
        'source_ar': 'إكليمنضس الرُّومانِيّ، مُقتبس في بيركوت، s.v. CHILDREN.',
    },
    {
        'source_de': 'Tertullian, bei Bercot, s.v. CHRIST, DIVINITY OF.',
        'source_en': 'Tertullian, cited in Bercot, s.v. CHRIST, DIVINITY OF.',
        'source_ar': 'ترتليانوس، مُقتبس في بيركوت، s.v. CHRIST, DIVINITY OF.',
    },
    {
        'source_de': 'Clement of Alexandria, bei Bercot, s.v. SALVATION/OBEDIENCE.',
        'source_en': 'Clement of Alexandria, cited in Bercot, s.v. SALVATION/OBEDIENCE.',
        'source_ar': 'إكليمنضس الإسكندري، مُقتبس في بيركوت، s.v. SALVATION/OBEDIENCE.',
    },
    {
        'source_de': 'Irenaeus, bei Bercot, s.v. CHURCH.',
        'source_en': 'Irenaeus, cited in Bercot, s.v. CHURCH.',
        'source_ar': 'إيرينيئوس، مُقتبس في بيركوت، s.v. CHURCH.',
    },
    {
        'source_de': 'Clement of Alexandria, bei Bercot, s.v. HYMNS.',
        'source_en': 'Clement of Alexandria, cited in Bercot, s.v. HYMNS.',
        'source_ar': 'إكليمنضس الإسكندري، مُقتبس في بيركوت، s.v. HYMNS.',
    },
]

# Find and replace each fatherQuote with source field
# Pattern to match fatherQuote objects with source field
pattern = r"(fatherQuote:\s*\{[^}]*?)(source:\s*'([^']+)',\s*//[^\n]*\n\s*\},)"

matches = list(re.finditer(pattern, content, re.DOTALL))
print(f"Found {len(matches)} fatherQuote objects with source field")

# Process each match
offset = 0
for match in matches:
    source_value = match.group(3)
    print(f"\nProcessing source: {source_value}")

    # Find the matching transformation
    transform = None
    for t in transformations:
        if t['source_de'] == source_value:
            transform = t
            break

    if not transform:
        print(f"  WARNING: No transformation found for: {source_value}")
        continue

    # Build the replacement
    # Remove the source line and add fatherReference after fatherQuote
    start = match.start() + offset
    end = match.end() + offset

    # Get the part before source
    before_source = match.group(1)

    # Build the replacement
    replacement = before_source + "\n          },\n          fatherReference: {\n"
    replacement += f"            de: '{transform['source_de']}',\n"
    replacement += f"            en: '{transform['source_en']}',\n"
    replacement += f"            ar: '{transform['source_ar']}',\n"
    replacement += "          },"

    # Replace in content
    content = content[:start] + replacement + content[end:]

    # Update offset
    offset += len(replacement) - (end - start)
    print(f"  OK Replaced")

# Write the modified content back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\nOK Successfully restructured all fatherQuote objects")
print(f"OK File written to: {file_path}")
