#!/usr/bin/env python3
"""
Comprehensive fix for all spiritual field issues in module1.ts
This script will:
1. Fix fatherQuote entries that have 'source' and '_refs' fields
2. Add missing en/ar translations to bibleVerse and bibleReference

Uses string replacement with very specific patterns to avoid malformation.
"""

import sys

# Read the file
file_path = r'c:\Users\mario\OneDrive - PolyDecypher\Desktop\Cloned_Repos\CopticLearn\constants\modules\module1.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

fixes_made = 0

# Define all the specific fixes we need to make
# Each fix is a tuple of (old_text, new_text)
fixes = [
    # Alpha (note: bibleVerse in backup has extra comment line)
    ('''          bibleVerse: {
            de: '„Ich bin das Alpha und das Omega", spricht der Herr.',
            // Schlachter2000 (Ref.):
          },
          bibleReference: { de: 'Offb 1,8 (SCH2000)' },
          fatherQuote: {
            de: '„Wer die Liebe hat, ist fern von jeder Sünde." — Hl. Polykarp.',
            source: 'Polykarp, zitiert bei Bercot, *Early Christian Beliefs*, s.v. LOVE.', // filecite below
          },
          _refs: [':contentReference[oaicite:5]{index=5}'],''',
     '''          bibleVerse: {
            de: '„Ich bin das Alpha und das Omega", spricht der Herr.',
            en: '"I am the Alpha and the Omega," says the Lord.',
            ar: '"أنا الألف والياء"، يقول الرب.',
          },
          bibleReference: {
            de: 'Offb 1,8 (SCH2000)',
            en: 'Rev 1:8',
            ar: 'رؤيا ١:٨',
          },
          fatherQuote: {
            de: '„Wer die Liebe hat, ist fern von jeder Sünde." — Hl. Polykarp.',
            en: '"He who has love is far from all sin." — St. Polycarp.',
            ar: '"من له المحبة بعيد عن كل خطية." — القديس بوليكاربوس.',
          },
          fatherReference: {
            de: 'Polykarp, zitiert bei Bercot, *Early Christian Beliefs*, s.v. LOVE.',
            en: 'Polycarp, quoted in Bercot, *Early Christian Beliefs*, s.v. LOVE.',
            ar: 'بوليكاربوس، في Bercot، *Early Christian Beliefs*، s.v. LOVE.',
          },'''),

    # Beta - also expand bibleVerse
    ('''          bibleVerse: { de: '„Die Leuchte des Leibes ist das Auge."' },
          bibleReference: { de: 'Lk 11,34 (SCH2000)' },
          fatherQuote: {
            de: '„Der Sohn … ist … vollkommenes väterliches Licht; er ist ganz Augen, sieht alles." — Hl. Klemens v. Alexandrien.',
            source: 'Clement of Alexandria, bei Bercot, s.v. CHRIST, DIVINITY OF.', // filecite below
          },
          _refs: [':contentReference[oaicite:9]{index=9}'],''',
     '''          bibleVerse: {
            de: '„Die Leuchte des Leibes ist das Auge."',
            en: '"The lamp of the body is the eye."',
            ar: '"سِرَاجُ الْجَسَدِ هُوَ الْعَيْنُ."',
          },
          bibleReference: {
            de: 'Lk 11,34 (SCH2000)',
            en: 'Luke 11:34',
            ar: 'لوقا ١١:٣٤',
          },
          fatherQuote: {
            de: '„Der Sohn … ist … vollkommenes väterliches Licht; er ist ganz Augen, sieht alles." — Hl. Klemens v. Alexandrien.',
            en: '"The Son… is… perfect paternal light; he is all eyes, seeing all things." — St. Clement of Alexandria.',
            ar: '"الابن… هو… نور أبوي كامل؛ هو كله عيون، يرى كل شيء." — القديس إكليمنضس الإسكندري.',
          },
          fatherReference: {
            de: 'Clement of Alexandria, bei Bercot, s.v. CHRIST, DIVINITY OF.',
            en: 'Clement of Alexandria, in Bercot, s.v. CHRIST, DIVINITY OF.',
            ar: 'إكليمنضس الإسكندري، في Bercot، s.v. CHRIST, DIVINITY OF.',
          },'''),

    # Gamma - also expand bibleVerse
    ('''          bibleVerse: { de: '„Denn so sehr hat Gott die Welt geliebt…"' },
          bibleReference: { de: 'Joh 3,16 (SCH2000)' },
          fatherQuote: {
            de: '„Gottes Wille ist, dass der Gehorsame gerettet werde." — Hl. Klemens v. Alexandrien.',
            source: 'Clement of Alexandria, bei Bercot, s.v. SALVATION.', // filecite below
          },
          _refs: [':contentReference[oaicite:13]{index=13}'],''',
     '''          bibleVerse: {
            de: '„Denn so sehr hat Gott die Welt geliebt…"',
            en: '"For God so loved the world…"',
            ar: '"لأَنَّهُ هكَذَا أَحَبَّ اللهُ الْعَالَمَ…"',
          },
          bibleReference: {
            de: 'Joh 3,16 (SCH2000)',
            en: 'John 3:16',
            ar: 'يوحنا ٣:١٦',
          },
          fatherQuote: {
            de: '„Gottes Wille ist, dass der Gehorsame gerettet werde." — Hl. Klemens v. Alexandrien.',
            en: '"God\'s will is that the obedient be saved." — St. Clement of Alexandria.',
            ar: '"إرادة الله أن يخلص المطيع." — القديس إكليمنضس الإسكندري.',
          },
          fatherReference: {
            de: 'Clement of Alexandria, bei Bercot, s.v. SALVATION.',
            en: 'Clement of Alexandria, in Bercot, s.v. SALVATION.',
            ar: 'إكليمنضس الإسكندري، في Bercot، s.v. SALVATION.',
          },'''),

    # Delta - also expand bibleVerse
    ('''          bibleVerse: { de: '„…ein Mann nach dem Herzen Gottes."' },
          bibleReference: { de: 'Apg 13,22 (SCH2000)' },
          fatherQuote: {
            de: '„Mans Pflicht ist der Gehorsam gegen Gott." — Hl. Klemens v. Alexandrien.',
            source: 'Clement of Alexandria, bei Bercot, s.v. SALVATION.', // filecite below
          },
          _refs: [':contentReference[oaicite:17]{index=17}'],''',
     '''          bibleVerse: {
            de: '„…ein Mann nach dem Herzen Gottes."',
            en: '"…a man after God\'s own heart."',
            ar: '"…رَجُلاً حَسَبَ قَلْبِهِ."',
          },
          bibleReference: {
            de: 'Apg 13,22 (SCH2000)',
            en: 'Acts 13:22',
            ar: 'أعمال ١٣:٢٢',
          },
          fatherQuote: {
            de: '„Mans Pflicht ist der Gehorsam gegen Gott." — Hl. Klemens v. Alexandrien.',
            en: '"Man\'s duty is obedience to God." — St. Clement of Alexandria.',
            ar: '"واجب الإنسان هو الطاعة لله." — القديس إكليمنضس الإسكندري.',
          },
          fatherReference: {
            de: 'Clement of Alexandria, bei Bercot, s.v. SALVATION.',
            en: 'Clement of Alexandria, in Bercot, s.v. SALVATION.',
            ar: 'إكليمنضس الإسكندري، في Bercot، s.v. SALVATION.',
          },'''),

    # Mi
    ('''          bibleVerse: { de: '„Ehre deinen Vater und deine Mutter!"' },
          bibleReference: { de: '2Mo 20,12 (SCH2000)' },
          fatherQuote: {
            de: '„Lasst eure Kinder Anteil an wahrer christlicher Erziehung haben." — Hl. Klemens von Rom.',
            source: 'Clement of Rome, bei Bercot, s.v. CHILDREN.', // filecite below
          },
          _refs: [':contentReference[oaicite:21]{index=21}'],''',
     '''          bibleVerse: {
            de: '„Ehre deinen Vater und deine Mutter!"',
            en: '"Honor your father and your mother!"',
            ar: '"أَكْرِمْ أَبَاكَ وَأُمَّكَ!"',
          },
          bibleReference: {
            de: '2Mo 20,12 (SCH2000)',
            en: 'Exodus 20:12',
            ar: 'خروج ٢٠:١٢',
          },
          fatherQuote: {
            de: '„Lasst eure Kinder Anteil an wahrer christlicher Erziehung haben." — Hl. Klemens von Rom.',
            en: '"Let your children share in true Christian education." — St. Clement of Rome.',
            ar: '"دعوا أولادكم يشاركوا في التربية المسيحية الحقيقية." — القديس إكليمنضس الروماني.',
          },
          fatherReference: {
            de: 'Clement of Rome, bei Bercot, s.v. CHILDREN.',
            en: 'Clement of Rome, in Bercot, s.v. CHILDREN.',
            ar: 'إكليمنضس الروماني، في Bercot، s.v. CHILDREN.',
          },'''),

    # Ro
    ('''          bibleVerse: { de: '„Ein guter Name ist köstlicher…"' },
          bibleReference: { de: 'Spr 22,1 (SCH2000)' },
          fatherQuote: {
            de: '„Christi Name wird überall geglaubt und verehrt." — Tertullian.',
            source: 'Tertullian, bei Bercot, s.v. CHRIST, DIVINITY OF.', // filecite below
          },
          _refs: [':contentReference[oaicite:22]{index=22}'],''',
     '''          bibleVerse: {
            de: '„Ein guter Name ist köstlicher…"',
            en: '"A good name is more desirable…"',
            ar: '"اَلِاسْمُ الصَّالِحُ أَفْضَلُ…"',
          },
          bibleReference: {
            de: 'Spr 22,1 (SCH2000)',
            en: 'Proverbs 22:1',
            ar: 'أمثال ٢٢:١',
          },
          fatherQuote: {
            de: '„Christi Name wird überall geglaubt und verehrt." — Tertullian.',
            en: '"Christ\'s name is believed and worshipped everywhere." — Tertullian.',
            ar: '"اسم المسيح مؤمن به ومعبود في كل مكان." — ترتليان.',
          },
          fatherReference: {
            de: 'Tertullian, bei Bercot, s.v. CHRIST, DIVINITY OF.',
            en: 'Tertullian, in Bercot, s.v. CHRIST, DIVINITY OF.',
            ar: 'ترتليان، في Bercot، s.v. CHRIST, DIVINITY OF.',
          },'''),

    # Sima
    ('''          bibleVerse: { de: '„Wer Ohren hat zu hören, der höre!"' },
          bibleReference: { de: 'Mk 4,9 (SCH2000)' },
          fatherQuote: {
            de: '„Dem Wort gehorchen heißt: ihm glauben, ihm in nichts widerstehen." — Hl. Klemens v. Alexandrien.',
            source: 'Clement of Alexandria, bei Bercot, s.v. SALVATION/OBEDIENCE.', // filecite below
          },
          _refs: [':contentReference[oaicite:23]{index=23}'],''',
     '''          bibleVerse: {
            de: '„Wer Ohren hat zu hören, der höre!"',
            en: '"He who has ears to hear, let him hear!"',
            ar: '"مَنْ لَهُ أُذُنَانِ لِلسَّمْعِ، فَلْيَسْمَعْ!"',
          },
          bibleReference: {
            de: 'Mk 4,9 (SCH2000)',
            en: 'Mark 4:9',
            ar: 'مرقس ٤:٩',
          },
          fatherQuote: {
            de: '„Dem Wort gehorchen heißt: ihm glauben, ihm in nichts widerstehen." — Hl. Klemens v. Alexandrien.',
            en: '"To obey the Word means: to believe it, to resist it in nothing." — St. Clement of Alexandria.',
            ar: '"طاعة الكلمة تعني: أن تؤمن بها، ألا تقاومها في شيء." — القديس إكليمنضس الإسكندري.',
          },
          fatherReference: {
            de: 'Clement of Alexandria, bei Bercot, s.v. SALVATION/OBEDIENCE.',
            en: 'Clement of Alexandria, in Bercot, s.v. SALVATION/OBEDIENCE.',
            ar: 'إكليمنضس الإسكندري، في Bercot، s.v. SALVATION/OBEDIENCE.',
          },'''),

    # Phi
    ('''          bibleVerse: { de: '„Dein Wort ist meines Fußes Leuchte."' },
          bibleReference: { de: 'Ps 119,105 (SCH2000)' },
          fatherQuote: {
            de: '„Die Kirche ist der siebenarmige Leuchter, der das Licht Christi trägt…" — Hl. Irenäus.',
            source: 'Irenaeus, bei Bercot, s.v. CHURCH.', // filecite below
          },
          _refs: [':contentReference[oaicite:27]{index=27}'],''',
     '''          bibleVerse: {
            de: '„Dein Wort ist meines Fußes Leuchte."',
            en: '"Your word is a lamp to my feet."',
            ar: '"كَلِمَتُكَ سِرَاجٌ لِرِجْلِي."',
          },
          bibleReference: {
            de: 'Ps 119,105 (SCH2000)',
            en: 'Psalm 119:105',
            ar: 'مزمور ١١٩:١٠٥',
          },
          fatherQuote: {
            de: '„Die Kirche ist der siebenarmige Leuchter, der das Licht Christi trägt…" — Hl. Irenäus.',
            en: '"The Church is the seven-branched lampstand bearing the light of Christ…" — St. Irenaeus.',
            ar: '"الكنيسة هي المنارة السباعية التي تحمل نور المسيح…" — القديس إيريناوس.',
          },
          fatherReference: {
            de: 'Irenaeus, bei Bercot, s.v. CHURCH.',
            en: 'Irenaeus, in Bercot, s.v. CHURCH.',
            ar: 'إيريناوس، في Bercot، s.v. CHURCH.',
          },'''),

    # Epsi/Psi
    ('''          bibleVerse: { de: '„Singt dem HERRN ein neues Lied!"' },
          bibleReference: { de: 'Ps 96,1 (SCH2000)' },
          fatherQuote: {
            de: '„Fort mit Liebesliedern; unsere Lieder seien Hymnen für Gott." — Hl. Klemens v. Alexandrien.',
            source: 'Clement of Alexandria, bei Bercot, s.v. HYMNS.', // filecite below
          },
          _refs: [':contentReference[oaicite:31]{index=31}'],''',
     '''          bibleVerse: {
            de: '„Singt dem HERRN ein neues Lied!"',
            en: '"Sing to the LORD a new song!"',
            ar: '"رَنِّمُوا لِلرَّبِّ تَرْنِيمَةً جَدِيدَةً!"',
          },
          bibleReference: {
            de: 'Ps 96,1 (SCH2000)',
            en: 'Psalm 96:1',
            ar: 'مزمور ٩٦:١',
          },
          fatherQuote: {
            de: '„Fort mit Liebesliedern; unsere Lieder seien Hymnen für Gott." — Hl. Klemens v. Alexandrien.',
            en: '"Away with love songs; let our songs be hymns to God." — St. Clement of Alexandria.',
            ar: '"بعيدًا عن أغاني الحب؛ لتكن أغانينا تراتيل لله." — القديس إكليمنضس الإسكندري.',
          },
          fatherReference: {
            de: 'Clement of Alexandria, bei Bercot, s.v. HYMNS.',
            en: 'Clement of Alexandria, in Bercot, s.v. HYMNS.',
            ar: 'إكليمنضس الإسكندري، في Bercot، s.v. HYMNS.',
          },'''),

    # Shai
    ('''          bibleVerse: { de: '„Lasst die Kinder zu mir kommen."' },
          bibleReference: { de: 'Mk 10,14 (SCH2000)' },
          fatherQuote: {
            de: '„Lasst eure Kinder an wahrer christlicher Erziehung teilhaben." — Hl. Klemens von Rom.',
            source: 'Clement of Rome, bei Bercot, s.v. CHILDREN.', // filecite below
          },
          _refs: [':contentReference[oaicite:32]{index=32}'],''',
     '''          bibleVerse: {
            de: '„Lasst die Kinder zu mir kommen."',
            en: '"Let the children come to me."',
            ar: '"دَعُوا الأَوْلاَدَ يَأْتُونَ إِلَيَّ."',
          },
          bibleReference: {
            de: 'Mk 10,14 (SCH2000)',
            en: 'Mark 10:14',
            ar: 'مرقس ١٠:١٤',
          },
          fatherQuote: {
            de: '„Lasst eure Kinder an wahrer christlicher Erziehung teilhaben." — Hl. Klemens von Rom.',
            en: '"Let your children share in true Christian education." — St. Clement of Rome.',
            ar: '"دعوا أولادكم يشاركوا في التربية المسيحية الحقيقية." — القديس إكليمنضس الروماني.',
          },
          fatherReference: {
            de: 'Clement of Rome, bei Bercot, s.v. CHILDREN.',
            en: 'Clement of Rome, in Bercot, s.v. CHILDREN.',
            ar: 'إكليمنضس الروماني، في Bercot، s.v. CHILDREN.',
          },'''),
]

# Apply all fixes
for old_text, new_text in fixes:
    if old_text in content:
        content = content.replace(old_text, new_text)
        fixes_made += 1
        sys.stdout.write(f"[OK] Applied fix {fixes_made}\n")
        sys.stdout.flush()
    else:
        sys.stdout.write(f"[SKIP] Could not find pattern for fix {len(fixes) - fixes_made + 1}\n")
        sys.stdout.flush()

# Write the file back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

sys.stdout.write(f"\nTotal {fixes_made} out of {len(fixes)} fixes applied!\n")
sys.stdout.flush()
