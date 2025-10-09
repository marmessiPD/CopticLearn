#!/usr/bin/env python3
"""
Final comprehensive fix for all remaining spiritual field issues
"""

import re
import sys

# Read the file
file_path = r'c:\Users\mario\OneDrive - PolyDecypher\Desktop\Cloned_Repos\CopticLearn\constants\modules\module1.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# All Bible translations (verses)
verse_translations = {
    '„Die Leuchte des Leibes ist das Auge."': (
        '"The lamp of the body is the eye."',
        '"سِرَاجُ الْجَسَدِ هُوَ الْعَيْنُ."'
    ),
    '„Denn so sehr hat Gott die Welt geliebt…"': (
        '"For God so loved the world…"',
        '"لأَنَّهُ هكَذَا أَحَبَّ اللهُ الْعَالَمَ…"'
    ),
    '„…ein Mann nach dem Herzen Gottes."': (
        '"…a man after God\'s own heart."',
        '"…رَجُلاً حَسَبَ قَلْبِهِ."'
    ),
    '„…damit sie Leben haben und es im Überfluss haben."': (
        '"…that they may have life, and have it abundantly."',
        '"…لِتَكُونَ لَهُمْ حَيَاةٌ وَلِيَكُونَ لَهُمْ أَفْضَلُ."'
    ),
    '„Sechs Tage sollst du arbeiten…"': (
        '"Six days you shall labor…"',
        '"سِتَّةَ أَيَّامٍ تَشْتَغِلُ…"'
    ),
    '„Trachtet zuerst nach dem Reich Gottes…"': (
        '"But seek first the kingdom of God…"',
        '"لكِنِ اطْلُبُوا أَوَّلاً مَلَكُوتَ اللهِ…"'
    ),
    '„Ich aber und mein Haus, wir wollen dem HERRN dienen."': (
        '"But as for me and my house, we will serve the LORD."',
        '"وَأَمَّا أَنَا وَبَيْتِي فَنَعْبُدُ الرَّبَّ."'
    ),
    '„Gott ist treu."': (
        '"God is faithful."',
        '"أَمِينٌ هُوَ اللهُ."'
    ),
    '„Im Anfang war das Wort…"': (
        '"In the beginning was the Word…"',
        '"فِي الْبَدْءِ كَانَ الْكَلِمَةُ…"'
    ),
    '„Die Erde ist des HERRN…"': (
        '"The earth is the LORD\'s…"',
        '"لِلرَّبِّ الأَرْضُ…"'
    ),
    '„Die Zunge der Weisen bringt Heilung."': (
        '"The tongue of the wise brings healing."',
        '"لِسَانُ الْحُكَمَاءِ شِفَاءٌ."'
    ),
    '„Ehre deinen Vater und deine Mutter!"': (
        '"Honor your father and your mother!"',
        '"أَكْرِمْ أَبَاكَ وَأُمَّكَ!"'
    ),
    '„Gott ist Licht…"': (
        '"God is light…"',
        '"اَللهُ نُورٌ…"'
    ),
    '„Holz" & Kreuz als Lebensbaum (Motiv in Liturgie).': (
        '"Wood" & Cross as Tree of Life (liturgical motif).',
        '"خشب" والصليب كشجرة الحياة (موضوع ليتورجي).'
    ),
    '„…werdet erneuert im Geist eures Sinnes…"': (
        '"…be renewed in the spirit of your mind…"',
        '"…تَتَجَدَّدُوا بِرُوحِ ذِهْنِكُمْ…"'
    ),
    '„Ich bin die Tür."': (
        '"I am the door."',
        '"أَنَا هُوَ الْبَابُ."'
    ),
    '„Ein guter Name ist köstlicher…"': (
        '"A good name is more desirable…"',
        '"اَلِاسْمُ الصَّالِحُ أَفْضَلُ…"'
    ),
    '„Wer Ohren hat zu hören, der höre!"': (
        '"He who has ears to hear, let him hear!"',
        '"مَنْ لَهُ أُذُنَانِ لِلسَّمْعِ، فَلْيَسْمَعْ!"'
    ),
    '„Er heilt, die zerbrochenen Herzens sind."': (
        '"He heals the brokenhearted."',
        '"يَشْفِي الْمُنْكَسِرِي الْقُلُوبِ."'
    ),
    '„Seid heilig, denn ich bin heilig."': (
        '"Be holy, for I am holy."',
        '"كُونُوا قِدِّيسِينَ لأَنِّي أَنَا قُدُّوسٌ."'
    ),
    '„Dein Wort ist meines Fußes Leuchte."': (
        '"Your word is a lamp to my feet."',
        '"كَلِمَتُكَ سِرَاجٌ لِرِجْلِي."'
    ),
    '„Dies ist der Tag, den der HERR gemacht hat."': (
        '"This is the day the LORD has made."',
        '"هذَا هُوَ الْيَوْمُ الَّذِي صَنَعَهُ الرَّبُّ."'
    ),
    '„Singt dem HERRN ein neues Lied!"': (
        '"Sing to the LORD a new song!"',
        '"رَنِّمُوا لِلرَّبِّ تَرْنِيمَةً جَدِيدَةً!"'
    ),
    '„Der Stein, den die Bauleute verworfen haben…"': (
        '"The stone the builders rejected…"',
        '"الْحَجَرُ الَّذِي رَفَضَهُ الْبَنَّاؤُونَ…"'
    ),
    '„Lasst die Kinder zu mir kommen."': (
        '"Let the children come to me."',
        '"دَعُوا الأَوْلاَدَ يَأْتُونَ إِلَيَّ."'
    ),
    '„Nehmt mein Joch auf euch…"': (
        '"Take my yoke upon you…"',
        '"اِحْمِلُوا نِيرِي عَلَيْكُمْ…"'
    ),
    '„Das Reich Gottes ist inwendig in euch."': (
        '"The kingdom of God is within you."',
        '"مَلَكُوتُ اللهِ دَاخِلَكُمْ."'
    ),
    '„Selig sind, die reinen Herzens sind…"': (
        '"Blessed are the pure in heart…"',
        '"طُوبَى لِلأَنْقِيَاءِ الْقَلْبِ…"'
    ),
    '„In deine Hände befehle ich meinen Geist."': (
        '"Into your hands I commit my spirit."',
        '"فِي يَدَيْكَ أَسْتَوْدِعُ رُوحِي."'
    ),
    '„Das Wort vom Kreuz… Gottes Kraft."': (
        '"The message of the cross… the power of God."',
        '"كَلِمَةُ الصَّلِيبِ… قُوَّةُ اللهِ."'
    ),
    '„Denn die Gabe Gottes ist das ewige Leben."': (
        '"For the gift of God is eternal life."',
        '"لأَنَّ هِبَةَ اللهِ هِيَ حَيَاةٌ أَبَدِيَّةٌ."'
    ),
}

# All Bible references
ref_translations = {
    'Lk 11,34 (SCH2000)': ('Luke 11:34', 'لوقا ١١:٣٤'),
    'Joh 3,16 (SCH2000)': ('John 3:16', 'يوحنا ٣:١٦'),
    'Apg 13,22 (SCH2000)': ('Acts 13:22', 'أعمال ١٣:٢٢'),
    'Joh 10,10 (SCH2000)': ('John 10:10', 'يوحنا ١٠:١٠'),
    '2Mo 20,9 (SCH2000)': ('Exodus 20:9', 'خروج ٢٠:٩'),
    'Mt 6,33 (SCH2000)': ('Matthew 6:33', 'متى ٦:٣٣'),
    'Jos 24,15 (SCH2000)': ('Joshua 24:15', 'يشوع ٢٤:١٥'),
    '1Kor 1,9 (SCH2000)': ('1 Corinthians 1:9', '١ كورنثوس ١:٩'),
    'Joh 1,1 (SCH2000)': ('John 1:1', 'يوحنا ١:١'),
    'Ps 24,1 (SCH2000)': ('Psalm 24:1', 'مزمور ٢٤:١'),
    'Spr 12,18 (SCH2000)': ('Proverbs 12:18', 'أمثال ١٢:١٨'),
    '2Mo 20,12 (SCH2000)': ('Exodus 20:12', 'خروج ٢٠:١٢'),
    '1Joh 1,5 (SCH2000)': ('1 John 1:5', '١ يوحنا ١:٥'),
    'vgl. Gal 3,13; lit. Hymnen (SCH2000)': (
        'cf. Galatians 3:13; liturgical hymns',
        'راجع غلاطية ٣:١٣؛ ترانيم ليتورجية'
    ),
    'Eph 4,23 (SCH2000)': ('Ephesians 4:23', 'أفسس ٤:٢٣'),
    'Joh 10,9 (SCH2000)': ('John 10:9', 'يوحنا ١٠:٩'),
    'Spr 22,1 (SCH2000)': ('Proverbs 22:1', 'أمثال ٢٢:١'),
    'Mk 4,9 (SCH2000)': ('Mark 4:9', 'مرقس ٤:٩'),
    'Ps 147,3 (SCH2000)': ('Psalm 147:3', 'مزمور ١٤٧:٣'),
    '1Petr 1,16 (SCH2000)': ('1 Peter 1:16', '١ بطرس ١:١٦'),
    'Ps 119,105 (SCH2000)': ('Psalm 119:105', 'مزمور ١١٩:١٠٥'),
    'Ps 118,24 (SCH2000)': ('Psalm 118:24', 'مزمور ١١٨:٢٤'),
    'Ps 96,1 (SCH2000)': ('Psalm 96:1', 'مزمور ٩٦:١'),
    'Ps 118,22 (SCH2000)': ('Psalm 118:22', 'مزمور ١١٨:٢٢'),
    'Mk 10,14 (SCH2000)': ('Mark 10:14', 'مرقس ١٠:١٤'),
    'Mt 11,29 (SCH2000)': ('Matthew 11:29', 'متى ١١:٢٩'),
    'Lk 17,21 (SCH2000)': ('Luke 17:21', 'لوقا ١٧:٢١'),
    'Mt 5,8 (SCH2000)': ('Matthew 5:8', 'متى ٥:٨'),
    'Lk 23,46 (SCH2000)': ('Luke 23:46', 'لوقا ٢٣:٤٦'),
    '1Kor 1,18 (SCH2000)': ('1 Corinthians 1:18', '١ كورنثوس ١:١٨'),
    'Röm 6,23 (SCH2000)': ('Romans 6:23', 'رومية ٦:٢٣'),
}

fixes_made = 0

# Fix incomplete bibleVerse entries (single line format like: { de: '...' })
for de_verse, (en_verse, ar_verse) in verse_translations.items():
    # Handle both inline and indented versions
    patterns = [
        f"bibleVerse: {{ de: '{de_verse}' }}",
        f"          bibleVerse: {{ de: '{de_verse}' }}",
    ]

    for pattern in patterns:
        if pattern in content:
            # Get base indentation from pattern
            indent = ' ' * (len(pattern) - len(pattern.lstrip()))
            replacement = f"""{indent}bibleVerse: {{
{indent}  de: '{de_verse}',
{indent}  en: '{en_verse}',
{indent}  ar: '{ar_verse}',
{indent}}}"""
            content = content.replace(pattern, replacement)
            fixes_made += 1
            sys.stdout.write(f"[OK] Fixed bibleVerse: {de_verse[:40]}...\n")
            sys.stdout.flush()
            break

# Fix incomplete bibleReference entries
for de_ref, (en_ref, ar_ref) in ref_translations.items():
    # Handle both inline and indented versions
    patterns = [
        f"bibleReference: {{ de: '{de_ref}' }}",
        f"          bibleReference: {{ de: '{de_ref}' }}",
    ]

    for pattern in patterns:
        if pattern in content:
            # Get base indentation from pattern
            indent = ' ' * (len(pattern) - len(pattern.lstrip()))
            replacement = f"""{indent}bibleReference: {{
{indent}  de: '{de_ref}',
{indent}  en: '{en_ref}',
{indent}  ar: '{ar_ref}',
{indent}}}"""
            content = content.replace(pattern, replacement)
            fixes_made += 1
            sys.stdout.write(f"[OK] Fixed bibleReference: {de_ref}\n")
            sys.stdout.flush()
            break

# Write the file back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

sys.stdout.write(f"\nTotal fixes: {fixes_made}\n")
sys.stdout.flush()
