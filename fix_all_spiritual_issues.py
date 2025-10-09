#!/usr/bin/env python3
"""
Fix all spiritual field issues in module1.ts:
1. Fix indentation problems from previous script
2. Add missing en/ar translations to bibleVerse and bibleReference
"""

import re
import sys

# Read the file
file_path = r'c:\Users\mario\OneDrive - PolyDecypher\Desktop\Cloned_Repos\CopticLearn\constants\modules\module1.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Fix indentation issues first
# Look for lines that start with too much indentation (ar: lines that are orphaned)
i = 0
indentation_fixes = 0
while i < len(lines):
    # Check for improperly indented ar: line (should be inside fatherQuote)
    if re.match(r'^\s{20,}ar:', lines[i]) and i > 0:
        # This ar: line is orphaned - it should be part of fatherQuote
        # Check if previous line is closing brace of fatherQuote
        if '},' in lines[i-1]:
            # Remove the closing brace from previous line and make it just a comma
            lines[i-1] = lines[i-1].replace('},', ',')
            # Fix indentation of ar line to match other fields in fatherQuote
            lines[i] = '            ' + lines[i].lstrip()
            # Now we need to add the closing brace after this ar line
            lines.insert(i+1, '          },\n')
            indentation_fixes += 1
            sys.stdout.write(f"[OK] Fixed indentation issue {indentation_fixes}\n")
            sys.stdout.flush()
    i += 1

# Now add missing translations to bibleVerse and bibleReference
bible_translations = {
    '„Die Leuchte des Leibes ist das Auge."': (
        '"The lamp of the body is the eye."',
        '"سِرَاجُ الْجَسَدِ هُوَ الْعَيْنُ."'
    ),
    'Lk 11,34 (SCH2000)': ('Luke 11:34', 'لوقا ١١:٣٤'),

    '„…damit sie Leben haben und es im Überfluss haben."': (
        '"…that they may have life, and have it abundantly."',
        '"…لِتَكُونَ لَهُمْ حَيَاةٌ وَلِيَكُونَ لَهُمْ أَفْضَلُ."'
    ),
    'Joh 10,10 (SCH2000)': ('John 10:10', 'يوحنا ١٠:١٠'),

    '„Sechs Tage sollst du arbeiten…"': (
        '"Six days you shall labor…"',
        '"سِتَّةَ أَيَّامٍ تَشْتَغِلُ…"'
    ),
    '2Mo 20,9 (SCH2000)': ('Exodus 20:9', 'خروج ٢٠:٩'),

    '„Trachtet zuerst nach dem Reich Gottes…"': (
        '"But seek first the kingdom of God…"',
        '"لكِنِ اطْلُبُوا أَوَّلاً مَلَكُوتَ اللهِ…"'
    ),
    'Mt 6,33 (SCH2000)': ('Matthew 6:33', 'متى ٦:٣٣'),

    '„Ich aber und mein Haus, wir wollen dem HERRN dienen."': (
        '"But as for me and my house, we will serve the LORD."',
        '"وَأَمَّا أَنَا وَبَيْتِي فَنَعْبُدُ الرَّبَّ."'
    ),
    'Jos 24,15 (SCH2000)': ('Joshua 24:15', 'يشوع ٢٤:١٥'),

    '„Gott ist treu."': (
        '"God is faithful."',
        '"أَمِينٌ هُوَ اللهُ."'
    ),
    '1Kor 1,9 (SCH2000)': ('1 Corinthians 1:9', '١ كورنثوس ١:٩'),

    '„Im Anfang war das Wort…"': (
        '"In the beginning was the Word…"',
        '"فِي الْبَدْءِ كَانَ الْكَلِمَةُ…"'
    ),
    'Joh 1,1 (SCH2000)': ('John 1:1', 'يوحنا ١:١'),

    '„Die Erde ist des HERRN…"': (
        '"The earth is the LORD\'s…"',
        '"لِلرَّبِّ الأَرْضُ…"'
    ),
    'Ps 24,1 (SCH2000)': ('Psalm 24:1', 'مزمور ٢٤:١'),

    '„Die Zunge der Weisen bringt Heilung."': (
        '"The tongue of the wise brings healing."',
        '"لِسَانُ الْحُكَمَاءِ شِفَاءٌ."'
    ),
    'Spr 12,18 (SCH2000)': ('Proverbs 12:18', 'أمثال ١٢:١٨'),

    '„Gott ist Licht…"': (
        '"God is light…"',
        '"اَللهُ نُورٌ…"'
    ),
    '1Joh 1,5 (SCH2000)': ('1 John 1:5', '١ يوحنا ١:٥'),

    '„Holz" & Kreuz als Lebensbaum (Motiv in Liturgie).': (
        '"Wood" & Cross as Tree of Life (liturgical motif).',
        '"خشب" والصليب كشجرة الحياة (موضوع ليتورجي).'
    ),
    'vgl. Gal 3,13; lit. Hymnen (SCH2000)': (
        'cf. Galatians 3:13; liturgical hymns',
        'راجع غلاطية ٣:١٣؛ ترانيم ليتورجية'
    ),

    '„…werdet erneuert im Geist eures Sinnes…"': (
        '"…be renewed in the spirit of your mind…"',
        '"…تَتَجَدَّدُوا بِرُوحِ ذِهْنِكُمْ…"'
    ),
    'Eph 4,23 (SCH2000)': ('Ephesians 4:23', 'أفسس ٤:٢٣'),

    '„Ich bin die Tür."': (
        '"I am the door."',
        '"أَنَا هُوَ الْبَابُ."'
    ),
    'Joh 10,9 (SCH2000)': ('John 10:9', 'يوحنا ١٠:٩'),

    '„Er heilt, die zerbrochenen Herzens sind."': (
        '"He heals the brokenhearted."',
        '"يَشْفِي الْمُنْكَسِرِي الْقُلُوبِ."'
    ),
    'Ps 147,3 (SCH2000)': ('Psalm 147:3', 'مزمور ١٤٧:٣'),

    '„Seid heilig, denn ich bin heilig."': (
        '"Be holy, for I am holy."',
        '"كُونُوا قِدِّيسِينَ لأَنِّي أَنَا قُدُّوسٌ."'
    ),
    '1Petr 1,16 (SCH2000)': ('1 Peter 1:16', '١ بطرس ١:١٦'),

    '„Dies ist der Tag, den der HERR gemacht hat."': (
        '"This is the day the LORD has made."',
        '"هذَا هُوَ الْيَوْمُ الَّذِي صَنَعَهُ الرَّبُّ."'
    ),
    'Ps 118,24 (SCH2000)': ('Psalm 118:24', 'مزمور ١١٨:٢٤'),

    '„Der Stein, den die Bauleute verworfen haben…"': (
        '"The stone the builders rejected…"',
        '"الْحَجَرُ الَّذِي رَفَضَهُ الْبَنَّاؤُونَ…"'
    ),
    'Ps 118,22 (SCH2000)': ('Psalm 118:22', 'مزمور ١١٨:٢٢'),

    '„Nehmt mein Joch auf euch…"': (
        '"Take my yoke upon you…"',
        '"اِحْمِلُوا نِيرِي عَلَيْكُمْ…"'
    ),
    'Mt 11,29 (SCH2000)': ('Matthew 11:29', 'متى ١١:٢٩'),

    '„Das Reich Gottes ist inwendig in euch."': (
        '"The kingdom of God is within you."',
        '"مَلَكُوتُ اللهِ دَاخِلَكُمْ."'
    ),
    'Lk 17,21 (SCH2000)': ('Luke 17:21', 'لوقا ١٧:٢١'),

    '„Selig sind, die reinen Herzens sind…"': (
        '"Blessed are the pure in heart…"',
        '"طُوبَى لِلأَنْقِيَاءِ الْقَلْبِ…"'
    ),
    'Mt 5,8 (SCH2000)': ('Matthew 5:8', 'متى ٥:٨'),

    '„In deine Hände befehle ich meinen Geist."': (
        '"Into your hands I commit my spirit."',
        '"فِي يَدَيْكَ أَسْتَوْدِعُ رُوحِي."'
    ),
    'Lk 23,46 (SCH2000)': ('Luke 23:46', 'لوقا ٢٣:٤٦'),

    '„Das Wort vom Kreuz… Gottes Kraft."': (
        '"The message of the cross… the power of God."',
        '"كَلِمَةُ الصَّلِيبِ… قُوَّةُ اللهِ."'
    ),
    '1Kor 1,18 (SCH2000)': ('1 Corinthians 1:18', '١ كورنثوس ١:١٨'),

    '„Denn die Gabe Gottes ist das ewige Leben."': (
        '"For the gift of God is eternal life."',
        '"لأَنَّ هِبَةَ اللهِ هِيَ حَيَاةٌ أَبَدِيَّةٌ."'
    ),
    'Röm 6,23 (SCH2000)': ('Romans 6:23', 'رومية ٦:٢٣'),
}

# Expand incomplete bible verse/reference lines
translation_fixes = 0
i = 0
while i < len(lines):
    line = lines[i]

    # Check for incomplete bibleVerse lines
    match = re.search(r"(bibleVerse|bibleReference): \{ de: '([^']+)' \}", line)
    if match:
        field_name = match.group(1)
        de_text = match.group(2)

        if de_text in bible_translations:
            en_text, ar_text = bible_translations[de_text]
            # Get indentation
            indent = ' ' * (len(line) - len(line.lstrip()))

            # Replace the line with expanded version
            lines[i] = f'''{indent}{field_name}: {{
{indent}  de: '{de_text}',
{indent}  en: '{en_text}',
{indent}  ar: '{ar_text}',
{indent}}},\n'''
            translation_fixes += 1
            sys.stdout.write(f"[OK] Added translations for: {de_text[:50]}...\n")
            sys.stdout.flush()

    i += 1

# Write the file back
with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

sys.stdout.write(f"\nIndentation fixes: {indentation_fixes}\n")
sys.stdout.write(f"Translation fixes: {translation_fixes}\n")
sys.stdout.write("All fixes complete!\n")
sys.stdout.flush()
