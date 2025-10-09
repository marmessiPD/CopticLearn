#!/usr/bin/env python3
"""
Fix spiritual fields in module1.ts step by step
"""

import re
import sys

# Read the file
file_path = r'c:\Users\mario\OneDrive - PolyDecypher\Desktop\Cloned_Repos\CopticLearn\constants\modules\module1.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Pattern to find problematic spiritual sections
# Look for patterns like: source: '...',  followed by _refs: [...]
# And replace them appropriately

fixes_made = 0

i = 0
while i < len(lines):
    line = lines[i]

    # Check if we're at a line with 'source:'
    if 'source:' in line and 'filecite below' in line:
        # Extract the source value
        source_match = re.search(r"source: '([^']*)'", line)
        if source_match:
            source_text = source_match.group(1)

            # Convert source to fatherReference with all three languages
            # First, get the de text from fatherQuote (previous line or two)
            father_quote_de = ''
            for j in range(max(0, i-5), i):
                if 'fatherQuote:' in lines[j]:
                    # Find the de: line after fatherQuote
                    for k in range(j, min(j+3, len(lines))):
                        if "de: '" in lines[k] or 'de: "' in lines[k]:
                            father_quote_match = re.search(r"de: ['\"]([^'\"]*)['\"]", lines[k])
                            if father_quote_match:
                                father_quote_de = father_quote_match.group(1)
                            break
                    break

            # Now we need to:
            # 1. Add en and ar to fatherQuote
            # 2. Replace source: line with en and ar
            # 3. Add fatherReference block
            # 4. Remove _refs line

            # Look back to find the fatherQuote opening brace
            father_quote_start = None
            for j in range(max(0, i-10), i):
                if 'fatherQuote: {' in lines[j]:
                    father_quote_start = j
                    break

            if father_quote_start is not None:
                # Get indentation
                indent = ' ' * (len(lines[father_quote_start]) - len(lines[father_quote_start].lstrip()))

                # Determine what fix to apply based on the source text
                en_quote = ''
                ar_quote = ''
                en_ref = ''
                ar_ref = ''

                if 'Polykarp' in source_text and 'LOVE' in source_text:
                    en_quote = '"He who has love is far from all sin." — St. Polycarp.'
                    ar_quote = '"من له المحبة بعيد عن كل خطية." — القديس بوليكاربوس.'
                    en_ref = 'Polycarp, quoted in Bercot, *Early Christian Beliefs*, s.v. LOVE.'
                    ar_ref = 'بوليكاربوس، في Bercot، *Early Christian Beliefs*، s.v. LOVE.'
                elif 'Clement of Alexandria' in source_text and 'CHRIST, DIVINITY' in source_text:
                    en_quote = '"The Son… is… perfect paternal light; he is all eyes, seeing all things." — St. Clement of Alexandria.'
                    ar_quote = '"الابن… هو… نور أبوي كامل؛ هو كله عيون، يرى كل شيء." — القديس إكليمنضس الإسكندري.'
                    en_ref = 'Clement of Alexandria, in Bercot, s.v. CHRIST, DIVINITY OF.'
                    ar_ref = 'إكليمنضس الإسكندري، في Bercot، s.v. CHRIST, DIVINITY OF.'
                elif 'Clement of Alexandria' in source_text and 'SALVATION' in source_text:
                    # Check which quote this is
                    if 'Gottes Wille' in father_quote_de or 'Pflicht' in father_quote_de:
                        if 'Gottes Wille' in father_quote_de:
                            en_quote = '"God\'s will is that the obedient be saved." — St. Clement of Alexandria.'
                            ar_quote = '"إرادة الله أن يخلص المطيع." — القديس إكليمنضس الإسكندري.'
                        else:  # Pflicht
                            en_quote = '"Man\'s duty is obedience to God." — St. Clement of Alexandria.'
                            ar_quote = '"واجب الإنسان هو الطاعة لله." — القديس إكليمنضس الإسكندري.'
                        en_ref = 'Clement of Alexandria, in Bercot, s.v. SALVATION.'
                        ar_ref = 'إكليمنضس الإسكندري، في Bercot، s.v. SALVATION.'
                    elif 'Wort gehorchen' in father_quote_de:
                        en_quote = '"To obey the Word means: to believe it, to resist it in nothing." — St. Clement of Alexandria.'
                        ar_quote = '"طاعة الكلمة تعني: أن تؤمن بها، ألا تقاومها في شيء." — القديس إكليمنضس الإسكندري.'
                        en_ref = 'Clement of Alexandria, in Bercot, s.v. SALVATION/OBEDIENCE.'
                        ar_ref = 'إكليمنضس الإسكندري، في Bercot، s.v. SALVATION/OBEDIENCE.'
                elif 'Clement of Rome' in source_text and 'CHILDREN' in source_text:
                    en_quote = '"Let your children share in true Christian education." — St. Clement of Rome.'
                    ar_quote = '"دعوا أولادكم يشاركوا في التربية المسيحية الحقيقية." — القديس إكليمنضس الروماني.'
                    en_ref = 'Clement of Rome, in Bercot, s.v. CHILDREN.'
                    ar_ref = 'إكليمنضس الروماني، في Bercot، s.v. CHILDREN.'
                elif 'Tertullian' in source_text:
                    en_quote = '"Christ\'s name is believed and worshipped everywhere." — Tertullian.'
                    ar_quote = '"اسم المسيح مؤمن به ومعبود في كل مكان." — ترتليان.'
                    en_ref = 'Tertullian, in Bercot, s.v. CHRIST, DIVINITY OF.'
                    ar_ref = 'ترتليان، في Bercot، s.v. CHRIST, DIVINITY OF.'
                elif 'Irenaeus' in source_text:
                    en_quote = '"The Church is the seven-branched lampstand bearing the light of Christ…" — St. Irenaeus.'
                    ar_quote = '"الكنيسة هي المنارة السباعية التي تحمل نور المسيح…" — القديس إيريناوس.'
                    en_ref = 'Irenaeus, in Bercot, s.v. CHURCH.'
                    ar_ref = 'إيريناوس، في Bercot، s.v. CHURCH.'
                elif 'HYMNS' in source_text:
                    en_quote = '"Away with love songs; let our songs be hymns to God." — St. Clement of Alexandria.'
                    ar_quote = '"بعيدًا عن أغاني الحب؛ لتكن أغانينا تراتيل لله." — القديس إكليمنضس الإسكندري.'
                    en_ref = 'Clement of Alexandria, in Bercot, s.v. HYMNS.'
                    ar_ref = 'إكليمنضس الإسكندري، في Bercot، s.v. HYMNS.'

                if en_quote:  # We found a match
                    # Replace the source line with en and ar
                    lines[i] = f"{indent}            en: '{en_quote}',\n"
                    # Find and remove _refs line (should be next or one after)
                    for j in range(i+1, min(i+3, len(lines))):
                        if '_refs:' in lines[j]:
                            # Insert ar line before the _refs line
                            lines.insert(j, f"{indent}            ar: '{ar_quote}',\n")
                            # Close the fatherQuote and add fatherReference
                            lines[j+1] = f"{indent}          }},\n"
                            lines.insert(j+2, f"{indent}          fatherReference: {{\n")
                            lines.insert(j+3, f"{indent}            de: '{source_text}',\n")
                            lines.insert(j+4, f"{indent}            en: '{en_ref}',\n")
                            lines.insert(j+5, f"{indent}            ar: '{ar_ref}',\n")
                            lines.insert(j+6, f"{indent}          }},\n")
                            fixes_made += 1
                            sys.stdout.write(f"[OK] Fix {fixes_made} applied\n")
                            sys.stdout.flush()
                            break

    i += 1

# Write the file back
with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

sys.stdout.write(f"\n{fixes_made} fixes have been applied!\n")
sys.stdout.flush()
