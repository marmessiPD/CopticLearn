#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fix spiritual fields in module1.ts to match the correct TypeScript structure."""

import sys
import io

# Set UTF-8 encoding for stdout
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Read the file
file_path = r'C:\Users\mario\OneDrive - PolyDecypher\Desktop\Cloned_Repos\CopticLearn\constants\modules\module1.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Track changes
changes_made = 0

def fix_spiritual_block(lines, start_line, verse_de, verse_en, verse_ar, ref_de, ref_en, ref_ar,
                        quote_de, quote_en, quote_ar, father_ref_de, father_ref_en, father_ref_ar):
    """Fix a spiritual block by replacing lines."""
    global changes_made

    # Find the spiritual block
    i = start_line - 1  # Convert to 0-indexed
    if 'spiritual: {' in lines[i]:
        # Replace the entire spiritual block
        new_block = f'''        spiritual: {{
          bibleVerse: {{
            de: {verse_de},
            en: {verse_en},
            ar: {verse_ar},
          }},
          bibleReference: {{
            de: {ref_de},
            en: {ref_en},
            ar: {ref_ar},
          }},
          fatherQuote: {{
            de: {quote_de},
            en: {quote_en},
            ar: {quote_ar},
          }},
          fatherReference: {{
            de: {father_ref_de},
            en: {father_ref_en},
            ar: {father_ref_ar},
          }},
        }},
'''

        # Find the end of the spiritual block
        j = i + 1
        while j < len(lines) and '        },' not in lines[j]:
            j += 1
        j += 1  # Include the closing brace

        # Replace the block
        lines[i:j] = [new_block]
        changes_made += 1
        return True
    return False

# Fix line 400-411: Alpha
fix_spiritual_block(lines, 400,
    "'„Ich bin das Alpha und das Omega", spricht der Herr.'",
    '\'"I am the Alpha and the Omega," says the Lord.\'',
    '\'"أنا الألف والياء"، يقول الرب.\'',
    "'Offb 1,8 (SCH2000)'",
    "'Rev 1:8'",
    "'رؤيا ١:٨'",
    "'„Wer die Liebe hat, ist fern von jeder Sünde." — Hl. Polykarp.'",
    '\'"He who has love is far from all sin." — St. Polycarp.\'',
    '\'"من لديه المحبة بعيد عن كل خطيئة." — القديس بوليكاربوس.\'',
    "'Polykarp, zitiert bei Bercot, *Early Christian Beliefs*, s.v. LOVE.'",
    "'Polycarp, quoted in Bercot, *Early Christian Beliefs*, s.v. LOVE.'",
    "'بوليكاربوس، مقتبس في بيركوت، *Early Christian Beliefs*، انظر LOVE.'"
)

# Reload to get updated line numbers
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Fix line 422-430: Vita (Eye)
for i, line in enumerate(lines):
    if i > 410 and 'spiritual: {' in line and i < 430:
        if '„Die Leuchte des Leibes ist das Auge."' in ''.join(lines[i:i+10]):
            fix_spiritual_block(lines, i+1,
                "'„Die Leuchte des Leibes ist das Auge."'",
                '\'"The lamp of the body is the eye."\'',
                '\'"سراج الجسد هو العين."\'',
                "'Lk 11,34 (SCH2000)'",
                "'Lk 11:34'",
                "'لوقا ١١:٣٤'",
                "'„Der Sohn … ist … vollkommenes väterliches Licht; er ist ganz Augen, sieht alles." — Hl. Klemens v. Alexandrien.'",
                '\'"The Son … is … perfect paternal light; He is all eyes, seeing all." — St. Clement of Alexandria.\'',
                '\'"الابن ... هو ... النور الأبوي الكامل؛ هو كله عيون، يرى كل شيء." — القديس إكليمنضس الإسكندري.\'',
                "'Clement of Alexandria, bei Bercot, s.v. CHRIST, DIVINITY OF.'",
                "'Clement of Alexandria, in Bercot, s.v. CHRIST, DIVINITY OF.'",
                "'إكليمنضس الإسكندري، في بيركوت، انظر CHRIST, DIVINITY OF.'"
            )
            break

# Write the fixed content
with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print(f"Made {changes_made} changes to spiritual fields")
