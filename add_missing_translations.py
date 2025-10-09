#!/usr/bin/env python3
"""
Add missing en and ar translations to bibleVerse and bibleReference fields
"""

import re
import sys

# Read the file
file_path = r'c:\Users\mario\OneDrive - PolyDecypher\Desktop\Cloned_Repos\CopticLearn\constants\modules\module1.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Translation mappings
translations = {
    # Bible verses and references that need completion
    ('„Die Leuchte des Leibes ist das Auge."', 'Lk 11,34 (SCH2000)'): (
        '"The lamp of the body is the eye."',
        '"سِرَاجُ الْجَسَدِ هُوَ الْعَيْنُ."',
        'Luke 11:34',
        'لوقا ١١:٣٤'
    ),
    ('„Denn so sehr hat Gott die Welt geliebt…"', 'Joh 3,16 (SCH2000)'): (
        '"For God so loved the world…"',
        '"لأَنَّهُ هكَذَا أَحَبَّ اللهُ الْعَالَمَ…"',
        'John 3:16',
        'يوحنا ٣:١٦'
    ),
    ('„…ein Mann nach dem Herzen Gottes."', 'Apg 13,22 (SCH2000)'): (
        '"…a man after God\'s own heart."',
        '"…رَجُلاً حَسَبَ قَلْبِهِ."',
        'Acts 13:22',
        'أعمال ١٣:٢٢'
    ),
    ('„…damit sie Leben haben und es im Überfluss haben."', 'Joh 10,10 (SCH2000)'): (
        '"…that they may have life, and have it abundantly."',
        '"…لِتَكُونَ لَهُمْ حَيَاةٌ وَلِيَكُونَ لَهُمْ أَفْضَلُ."',
        'John 10:10',
        'يوحنا ١٠:١٠'
    ),
    ('„Sechs Tage sollst du arbeiten…"', '2Mo 20,9 (SCH2000)'): (
        '"Six days you shall labor…"',
        '"سِتَّةَ أَيَّامٍ تَشْتَغِلُ…"',
        'Exodus 20:9',
        'خروج ٢٠:٩'
    ),
    ('„Trachtet zuerst nach dem Reich Gottes…"', 'Mt 6,33 (SCH2000)'): (
        '"But seek first the kingdom of God…"',
        '"لكِنِ اطْلُبُوا أَوَّلاً مَلَكُوتَ اللهِ…"',
        'Matthew 6:33',
        'متى ٦:٣٣'
    ),
    ('„Ich aber und mein Haus, wir wollen dem HERRN dienen."', 'Jos 24,15 (SCH2000)'): (
        '"But as for me and my house, we will serve the LORD."',
        '"وَأَمَّا أَنَا وَبَيْتِي فَنَعْبُدُ الرَّبَّ."',
        'Joshua 24:15',
        'يشوع ٢٤:١٥'
    ),
    ('„Gott ist treu."', '1Kor 1,9 (SCH2000)'): (
        '"God is faithful."',
        '"أَمِينٌ هُوَ اللهُ."',
        '1 Corinthians 1:9',
        '١ كورنثوس ١:٩'
    ),
    ('„Im Anfang war das Wort…"', 'Joh 1,1 (SCH2000)'): (
        '"In the beginning was the Word…"',
        '"فِي الْبَدْءِ كَانَ الْكَلِمَةُ…"',
        'John 1:1',
        'يوحنا ١:١'
    ),
    ('„Die Erde ist des HERRN…"', 'Ps 24,1 (SCH2000)'): (
        '"The earth is the LORD\'s…"',
        '"لِلرَّبِّ الأَرْضُ…"',
        'Psalm 24:1',
        'مزمور ٢٤:١'
    ),
    ('„Die Zunge der Weisen bringt Heilung."', 'Spr 12,18 (SCH2000)'): (
        '"The tongue of the wise brings healing."',
        '"لِسَانُ الْحُكَمَاءِ شِفَاءٌ."',
        'Proverbs 12:18',
        'أمثال ١٢:١٨'
    ),
    ('„Ehre deinen Vater und deine Mutter!"', '2Mo 20,12 (SCH2000)'): (
        '"Honor your father and your mother!"',
        '"أَكْرِمْ أَبَاكَ وَأُمَّكَ!"',
        'Exodus 20:12',
        'خروج ٢٠:١٢'
    ),
    ('„Gott ist Licht…"', '1Joh 1,5 (SCH2000)'): (
        '"God is light…"',
        '"اَللهُ نُورٌ…"',
        '1 John 1:5',
        '١ يوحنا ١:٥'
    ),
    ('„Holz" & Kreuz als Lebensbaum (Motiv in Liturgie).', 'vgl. Gal 3,13; lit. Hymnen (SCH2000)'): (
        '"Wood" & Cross as Tree of Life (liturgical motif).',
        '"خشب" والصليب كشجرة الحياة (موضوع ليتورجي).',
        'cf. Galatians 3:13; liturgical hymns',
        'راجع غلاطية ٣:١٣؛ ترانيم ليتورجية'
    ),
    ('„…werdet erneuert im Geist eures Sinnes…"', 'Eph 4,23 (SCH2000)'): (
        '"…be renewed in the spirit of your mind…"',
        '"…تَتَجَدَّدُوا بِرُوحِ ذِهْنِكُمْ…"',
        'Ephesians 4:23',
        'أفسس ٤:٢٣'
    ),
    ('„Ich bin die Tür."', 'Joh 10,9 (SCH2000)'): (
        '"I am the door."',
        '"أَنَا هُوَ الْبَابُ."',
        'John 10:9',
        'يوحنا ١٠:٩'
    ),
    ('„Ein guter Name ist köstlicher…"', 'Spr 22,1 (SCH2000)'): (
        '"A good name is more desirable…"',
        '"اَلِاسْمُ الصَّالِحُ أَفْضَلُ…"',
        'Proverbs 22:1',
        'أمثال ٢٢:١'
    ),
    ('„Wer Ohren hat zu hören, der höre!"', 'Mk 4,9 (SCH2000)'): (
        '"He who has ears to hear, let him hear!"',
        '"مَنْ لَهُ أُذُنَانِ لِلسَّمْعِ، فَلْيَسْمَعْ!"',
        'Mark 4:9',
        'مرقس ٤:٩'
    ),
    ('„Er heilt, die zerbrochenen Herzens sind."', 'Ps 147,3 (SCH2000)'): (
        '"He heals the brokenhearted."',
        '"يَشْفِي الْمُنْكَسِرِي الْقُلُوبِ."',
        'Psalm 147:3',
        'مزمور ١٤٧:٣'
    ),
    ('„Seid heilig, denn ich bin heilig."', '1Petr 1,16 (SCH2000)'): (
        '"Be holy, for I am holy."',
        '"كُونُوا قِدِّيسِينَ لأَنِّي أَنَا قُدُّوسٌ."',
        '1 Peter 1:16',
        '١ بطرس ١:١٦'
    ),
    ('„Dein Wort ist meines Fußes Leuchte."', 'Ps 119,105 (SCH2000)'): (
        '"Your word is a lamp to my feet."',
        '"كَلِمَتُكَ سِرَاجٌ لِرِجْلِي."',
        'Psalm 119:105',
        'مزمور ١١٩:١٠٥'
    ),
    ('„Dies ist der Tag, den der HERR gemacht hat."', 'Ps 118,24 (SCH2000)'): (
        '"This is the day the LORD has made."',
        '"هذَا هُوَ الْيَوْمُ الَّذِي صَنَعَهُ الرَّبُّ."',
        'Psalm 118:24',
        'مزمور ١١٨:٢٤'
    ),
    ('„Singt dem HERRN ein neues Lied!"', 'Ps 96,1 (SCH2000)'): (
        '"Sing to the LORD a new song!"',
        '"رَنِّمُوا لِلرَّبِّ تَرْنِيمَةً جَدِيدَةً!"',
        'Psalm 96:1',
        'مزمور ٩٦:١'
    ),
    ('„Der Stein, den die Bauleute verworfen haben…"', 'Ps 118,22 (SCH2000)'): (
        '"The stone the builders rejected…"',
        '"الْحَجَرُ الَّذِي رَفَضَهُ الْبَنَّاؤُونَ…"',
        'Psalm 118:22',
        'مزمور ١١٨:٢٢'
    ),
    ('„Lasst die Kinder zu mir kommen."', 'Mk 10,14 (SCH2000)'): (
        '"Let the children come to me."',
        '"دَعُوا الأَوْلاَدَ يَأْتُونَ إِلَيَّ."',
        'Mark 10:14',
        'مرقس ١٠:١٤'
    ),
    ('„Nehmt mein Joch auf euch…"', 'Mt 11,29 (SCH2000)'): (
        '"Take my yoke upon you…"',
        '"اِحْمِلُوا نِيرِي عَلَيْكُمْ…"',
        'Matthew 11:29',
        'متى ١١:٢٩'
    ),
    ('„Das Reich Gottes ist inwendig in euch."', 'Lk 17,21 (SCH2000)'): (
        '"The kingdom of God is within you."',
        '"مَلَكُوتُ اللهِ دَاخِلَكُمْ."',
        'Luke 17:21',
        'لوقا ١٧:٢١'
    ),
    ('„Selig sind, die reinen Herzens sind…"', 'Mt 5,8 (SCH2000)'): (
        '"Blessed are the pure in heart…"',
        '"طُوبَى لِلأَنْقِيَاءِ الْقَلْبِ…"',
        'Matthew 5:8',
        'متى ٥:٨'
    ),
    ('„In deine Hände befehle ich meinen Geist."', 'Lk 23,46 (SCH2000)'): (
        '"Into your hands I commit my spirit."',
        '"فِي يَدَيْكَ أَسْتَوْدِعُ رُوحِي."',
        'Luke 23:46',
        'لوقا ٢٣:٤٦'
    ),
    ('„Das Wort vom Kreuz… Gottes Kraft."', '1Kor 1,18 (SCH2000)'): (
        '"The message of the cross… the power of God."',
        '"كَلِمَةُ الصَّلِيبِ… قُوَّةُ اللهِ."',
        '1 Corinthians 1:18',
        '١ كورنثوس ١:١٨'
    ),
    ('„Denn die Gabe Gottes ist das ewige Leben."', 'Röm 6,23 (SCH2000)'): (
        '"For the gift of God is eternal life."',
        '"لأَنَّ هِبَةَ اللهِ هِيَ حَيَاةٌ أَبَدِيَّةٌ."',
        'Romans 6:23',
        'رومية ٦:٢٣'
    ),
}

fixes_made = 0

# Process each translation
for (de_verse, de_ref), (en_verse, ar_verse, en_ref, ar_ref) in translations.items():
    # Pattern 1: Multiline format
    pattern1 = rf'''          bibleVerse: \{{ de: '{re.escape(de_verse)}' }},\n          bibleReference: \{{ de: '{re.escape(de_ref)}' }},'''
    replacement1 = f'''          bibleVerse: {{
            de: '{de_verse}',
            en: '{en_verse}',
            ar: '{ar_verse}',
          }},
          bibleReference: {{
            de: '{de_ref}',
            en: '{en_ref}',
            ar: '{ar_ref}',
          }},'''

    if pattern1.replace('\\', '') in content.replace('\\', ''):
        # Find the actual text without regex escaping for replacement
        old_text = f'''          bibleVerse: {{ de: '{de_verse}' }},
          bibleReference: {{ de: '{de_ref}' }},'''

        if old_text in content:
            content = content.replace(old_text, replacement1)
            fixes_made += 1
            sys.stdout.write(f"[OK] Fixed: {de_ref}\n")
            sys.stdout.flush()

    # Pattern 2: Inline format
    pattern2 = f'''spiritual: {{ bibleVerse: {{ de: '{de_verse}' }}, bibleReference: {{ de: '{de_ref}' }} }}'''
    replacement2 = f'''spiritual: {{
          bibleVerse: {{
            de: '{de_verse}',
            en: '{en_verse}',
            ar: '{ar_verse}',
          }},
          bibleReference: {{
            de: '{de_ref}',
            en: '{en_ref}',
            ar: '{ar_ref}',
          }},
        }}'''

    if pattern2 in content:
        content = content.replace(pattern2, replacement2)
        fixes_made += 1
        sys.stdout.write(f"[OK] Fixed (inline): {de_ref}\n")
        sys.stdout.flush()

# Write the file back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

sys.stdout.write(f"\n{fixes_made} translations have been added!\n")
sys.stdout.flush()
