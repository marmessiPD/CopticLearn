// Module 6 – Präpositionen (Bohairisch) — baut auf deiner vorhandenen Struktur auf
// Nutzt reine Bohairisch-Regeln und -Beispiele. Bibel: Schlachter2000.
// Füge diese Einträge zu deinem LESSONS-Record hinzu.

import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {
    // Modul 6: Präpositionen I
    'm6-l1': {
      id: 'm6-l1',
      order: 1,
      moduleId: 'm6',
      title: {
        de: 'Präpositionen I: ϩⲛ̄ / ϩⲙ̄ = „in“',
        en: 'Prepositions I: ϩⲛ̄ / ϩⲙ̄ = "in"',
        ar: 'حروف الجر I: ϩⲛ̄ / ϩⲙ̄ = "في"'
      },
      prerequisites: [],
      quizId: 'q6-1',
      slides: [
        {
          type: 'grammar',
          title: {
            de: 'Regel: ϩⲛ̄ / ϩⲙ̄ (Ort „in“)',
            en: 'Rule: ϩⲛ̄ / ϩⲙ̄ ("in" + place)',
            ar: 'القاعدة: ϩⲛ̄ / ϩⲙ̄ ("في")'
          },
          rule: {
            de: 'Bohairisch: Vor nicht-labialen Anfangsbuchstaben steht ϩⲛ̄, vor Labialen ⲃ, ⲙ, ϥ, ⲫ steht ϩⲙ̄.',
            en: 'Bohairic: Use ϩⲛ̄ before non-labials; use ϩⲙ̄ before labials ⲃ, ⲙ, ϥ, ⲫ.',
            ar: 'البحيري: ϩⲛ̄ قبل غير الشفوية؛ ϩⲙ̄ قبل الشفوية ⲃ، ⲙ، ϥ، ⲫ.'
          },
          examples: [
            { coptic: 'ϩⲛ̄ ⲡ̀ⲏⲓ', translit: 'hen peei', meaning: { de: 'im Haus', en: 'in the house', ar: 'في البيت' } },
            { coptic: 'ϩⲙ̄ ⲡ̀ⲙⲁ', translit: 'hem pma', meaning: { de: 'am Ort / an der Stelle', en: 'at the place', ar: 'في المكان' } },
            { coptic: 'ϩⲙ̄ ⲡ̀ⲃⲟⲗ', translit: 'hem pebol', meaning: { de: 'im Außenbereich / draußen', en: 'in the outside', ar: 'في الخارج' } }
          ],
          spiritual: {
            bibleVerse: {
              de: '„Denn ein Tag in deinen Vorhöfen ist besser als tausend.“',
              en: '"For a day in Your courts is better than a thousand."',
              ar: '«لِأَنَّ يَوْمًا وَاحِدًا فِي دِيَارِكَ خَيْرٌ مِنْ أَلْفٍ».'
            },
            bibleReference: { de: 'Psalm 84,11', en: 'Psalm 84:10', ar: 'مزمور 84:10' }
          },
          emoji: '🏠'
        },
        {
          type: 'sentence',
          item: {
            text: 'ϩⲛ̄ ⲡ̀ⲙⲏⲓ ⲛ̀ⲧⲉ ⲡ̀ⲛⲟⲩⲧⲉ',
            translit: 'hen pmee ente pnoute',
            meaning: { de: 'im Haus Gottes', en: 'in the house of God', ar: 'في بيت الله' }
          }
        },
        {
          type: 'grammar',
          title: {
            de: 'Mit Artikel-Kongruenz',
            en: 'Article agreement',
            ar: 'توافق الأداة'
          },
          rule: {
            de: 'Der Ortsartikel bleibt erhalten: ϩⲛ̄ + ⲡ̀/ⲧ̀/ⲛⲓ + Nomen. Vor Labialen ϩⲙ̄.',
            en: 'Keep the noun’s article: ϩⲛ̄ + ⲡ̀/ⲧ̀/ⲛⲓ + noun. Use ϩⲙ̄ before labials.',
            ar: 'تُحافَظ الأداة: ϩⲛ̄ + ⲡ̀/ⲧ̀/ⲛⲓ + الاسم. ϩⲙ̄ قبل الشفوية.'
          },
          examples: [
            { coptic: 'ϩⲛ̄ ⲧ̀ⲕⲏⲙⲉ', translit: 'hen tkēme', meaning: { de: 'in Ägypten', en: 'in Egypt', ar: 'في مصر' } },
            { coptic: 'ϩⲙ̄ ⲡ̀ϥⲱⲓ', translit: 'hem pfōi', meaning: { de: 'im Herzen', en: 'in the heart', ar: 'في القلب' } }
          ],
          emoji: '🧭'
        }
      ]
    },
  
    'm6-l2': {
      id: 'm6-l2',
      order: 2,
      moduleId: 'm6',
      title: {
        de: 'Präpositionen II: ⲉ / ⲉϩⲣⲁⲓ / ⲉⲃⲟⲗ',
        en: 'Prepositions II: ⲉ / ⲉϩⲣⲁⲓ / ⲉⲃⲟⲗ',
        ar: 'حروف الجر II: ⲉ / ⲉϩⲣⲁⲓ / ⲉⲃⲟⲗ'
      },
      prerequisites: ['m6-l1'],
      quizId: 'q6-2',
      slides: [
        {
          type: 'grammar',
          title: { de: 'ⲉ = „zu, nach; bei“', en: 'ⲉ = "to; at"', ar: 'ⲉ = "إلى؛ عند"' },
          rule: {
            de: 'ⲉ markiert Ziel/Empfänger: Bewegung „zu“, Präsenz „bei“.',
            en: 'ⲉ marks goal/recipient: motion “to”, presence “at/with”.',
            ar: 'ⲉ تدل على الغاية أو المتلقي.'
          },
          examples: [
            { coptic: 'ⲙⲟϣⲓ ⲉ ⲡ̀ⲏⲓ', translit: 'moshi e peei', meaning: { de: 'zurück ins Haus gehen', en: 'go to the house', ar: 'اذهب إلى البيت' } },
            { coptic: 'ⲥⲱⲧⲉⲙ ⲉ ⲡ̀ⲗⲁⲟⲥ', translit: 'sōtem e plaos', meaning: { de: 'dem Volk zuhören', en: 'listen to the people', ar: 'استمع إلى الشعب' } }
          ],
          emoji: '➡️'
        },
        {
          type: 'grammar',
          title: { de: 'ⲉϩⲣⲁⲓ = „auf, über“ (Kontakt)', en: 'ⲉϩⲣⲁⲓ = "on, upon"', ar: 'ⲉϩⲣⲁⲓ = "على"' },
          rule: {
            de: 'Drückt Lage „auf“ mit Kontakt aus.',
            en: 'Expresses “on/upon” with contact.',
            ar: 'تفيد معنى "على" مع تماس.'
          },
          examples: [
            { coptic: 'ⲁⲛⲟⲕ ⲛⲁⲓ ⲉϩⲣⲁⲓ ⲡ̀ⲧⲣⲁⲡⲉⲍⲁ', translit: 'anok nai ehrai p-trapeza', meaning: { de: 'ich lege dies auf den Tisch', en: 'I put this on the table', ar: 'أضع هذا على المائدة' } }
          ],
          emoji: '📦'
        },
        {
          type: 'grammar',
          title: { de: 'ⲉⲃⲟⲗ = „hinaus/aus“', en: 'ⲉⲃⲟⲗ = "out (of)"', ar: 'ⲉⲃⲟⲗ = "إلى الخارج/من"' },
          rule: {
            de: 'Richtung „nach außen“ oder „aus … heraus“; oft mit ϩⲛ̄/ϩⲙ̄ kombiniert.',
            en: 'Motion outward or out of; often combines with ϩⲛ̄/ϩⲙ̄.',
            ar: 'حركة إلى الخارج أو من الداخل؛ غالبًا مع ϩⲛ̄/ϩⲙ̄.'
          },
          examples: [
            { coptic: 'ⲉⲃⲟⲗ ϩⲛ̄ ⲡ̀ⲏⲓ', translit: 'ebol hen peei', meaning: { de: 'aus dem Haus hinaus', en: 'out of the house', ar: 'إلى خارج البيت' } },
            { coptic: 'ⲡⲉⲕⲣⲁⲛ ⲉⲃⲟⲗ', translit: 'pekran ebol', meaning: { de: 'dein Name erschallt heraus', en: 'your name goes out', ar: 'اسمك يخرج' } }
          ],
          spiritual: {
            bibleVerse: {
              de: '„Ich bin der HERR, dein Gott, der dich herausgeführt hat aus dem Land Ägypten.“',
              en: '"I am the LORD your God who brought you out of the land of Egypt."',
              ar: '«أَنَا الرَّبُّ إِلَهُكَ الَّذِي أَخْرَجَكَ مِنْ أَرْضِ مِصْرَ».'
            },
            bibleReference: { de: '2. Mose 20,2', en: 'Exodus 20:2', ar: 'خروج 20:2' }
          },
          emoji: '🚪'
        }
      ]
    },
  
    'm6-l3': {
      id: 'm6-l3',
      order: 3,
      moduleId: 'm6',
      title: {
        de: 'Präpositionen III: ⲛ̀ⲥⲁ / ⲛ̀ϩⲏⲧ / ⲛ̀ⲥⲟⲩ',
        en: 'Prepositions III: ⲛ̀ⲥⲁ / ⲛ̀ϩⲏⲧ / ⲛ̀ⲥⲟⲩ',
        ar: 'حروف الجر III: ⲛ̀ⲥⲁ / ⲛ̀ϩⲏⲧ / ⲛ̀ⲥⲟⲩ'
      },
      prerequisites: ['m6-l2'],
      quizId: 'q6-3',
      slides: [
        {
          type: 'grammar',
          title: { de: 'ⲛ̀ⲥⲁ = „nach, hinter“', en: 'ⲛ̀ⲥⲁ = "after, behind"', ar: 'ⲛ̀ⲥⲁ = "بعد/خلف"' },
          rule: {
            de: 'Zeitlich „nach“, räumlich „hinter“; mit Nomen oder Person.',
            en: 'Temporal “after”, spatial “behind”; with nouns or persons.',
            ar: 'زمنيًا "بعد"، مكانيًا "خلف".'
          },
          examples: [
            { coptic: 'ⲛ̀ⲥⲁ ⲡ̀ⲥⲁϫⲓ', translit: 'ensa p-saji', meaning: { de: 'nach dem Wort', en: 'after the word', ar: 'بعد الكلمة' } },
            { coptic: 'ⲛ̀ⲥⲁ ⲡ̀ⲣⲱⲙⲓ', translit: 'ensa p-romi', meaning: { de: 'hinter dem Mann', en: 'behind the man', ar: 'خلف الرجل' } }
          ],
          spiritual: {
            bibleVerse: {
              de: '„Und er spricht zu ihnen: Folgt mir nach!“',
              en: '"And He said to them, Follow Me!"',
              ar: '«فَقَالَ لَهُمْ: اتْبَعُونِي!»'
            },
            bibleReference: { de: 'Markus 1,17', en: 'Mark 1:17', ar: 'مرقس 1:17' }
          },
          emoji: '👣'
        },
        {
          type: 'grammar',
          title: { de: 'ⲛ̀ϩⲏⲧ = „unter“', en: 'ⲛ̀ϩⲏⲧ = "under"', ar: 'ⲛ̀ϩⲏⲧ = "تحت"' },
          rule: {
            de: 'Lage „unter“; oft mit bestimmtem Artikel.',
            en: 'Location “under”; often with definite article.',
            ar: 'تفيد المكان "تحت".'
          },
          examples: [
            { coptic: 'ⲛ̀ϩⲏⲧ ⲡ̀ⲇⲏⲗⲟⲥ', translit: 'enhēt p-dēlos', meaning: { de: 'unter dem Baum', en: 'under the tree', ar: 'تحت الشجرة' } }
          ],
          emoji: '🌳'
        },
        {
          type: 'grammar',
          title: { de: 'ⲛ̀ⲥⲟⲩ = „ohne“', en: 'ⲛ̀ⲥⲟⲩ = "without"', ar: 'ⲛ̀ⲥⲟⲩ = "بدون"' },
          rule: {
            de: 'Verneinter Begleitstand: „ohne …“',
            en: 'Negative accompaniment: “without …”',
            ar: 'مرافقة منفية: "بدون ..."'
          },
          examples: [
            { coptic: 'ⲛ̀ⲥⲟⲩ ⲡ̀ⲥⲁϫⲓ', translit: 'ensou p-saji', meaning: { de: 'ohne das Wort', en: 'without the word', ar: 'بدون الكلمة' } },
            { coptic: 'ⲛ̀ⲥⲟⲩ ⲧ̀ⲙⲉⲧⲙⲁⲕϯ', translit: 'ensou t-metmakti', meaning: { de: 'ohne Demut', en: 'without humility', ar: 'بدون تواضع' } }
          ],
          emoji: '🚫'
        }
      ]
    }
  };
  
  // Optional: kleines Quiz-Snippet pro Lesson
  export const QUIZZES: Record<string, Quiz> = {
    'q6-1': {
      id: 'q6-1',
      questions: [
        {
          type: 'mc',
          prompt: 'Wähle die korrekte Form für „in“ vor ⲙ:',
          options: ['ϩⲛ̄', 'ϩⲙ̄', 'ⲉⲃⲟⲗ'],
          answerIndex: 1,
          explanation: 'Vor Labialen (z. B. ⲙ) steht ϩⲙ̄.'
        }
      ]
    },
    'q6-2': {
      id: 'q6-2',
      questions: [
        {
          type: 'mc',
          prompt: '„aus dem Haus“ ist korrekt als …',
          options: ['ⲉⲃⲟⲗ ϩⲛ̄ ⲡ̀ⲏⲓ', 'ϩⲛ̄ ⲡ̀ⲏⲓ ⲉ', 'ⲉϩⲣⲁⲓ ⲡ̀ⲏⲓ'],
          answerIndex: 0,
          explanation: 'ⲉⲃⲟⲗ ϩⲛ̄ … = „hinaus aus …“'
        }
      ]
    },
    'q6-3': {
      id: 'q6-3',
      questions: [
        {
          type: 'mc',
          prompt: 'Wähle die Übersetzung für „ohne das Wort“:',
          options: ['ⲛ̀ⲥⲟⲩ ⲡ̀ⲥⲁϫⲓ', 'ⲛ̀ϩⲏⲧ ⲡ̀ⲥⲁϫⲓ', 'ⲛ̀ⲥⲁ ⲡ̀ⲥⲁϫⲓ'],
          answerIndex: 0,
          explanation: 'ⲛ̀ⲥⲟⲩ = „ohne“.'
        }
      ]
    }
  };
  
  // Hinweis für dogmatische Infoboxen in der App:
  // Du kannst pro Slide eine kleine Info-Karte einblenden, z. B.:
  // { type: 'infobox', title: {de:'Orthodoxe Perspektive'}, content: {de:'„In Christus“ (ϩⲛ̄ Ⲡⲭ̅ⲥ̅) ist Grundsprache der Kirche – Leben aus den Sakramenten, Gebet, Askese.'}, emoji:'⛪️' }
  