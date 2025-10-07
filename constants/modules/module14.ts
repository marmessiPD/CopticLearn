import type { Lesson } from '../../types';

// ===== Module 14: Imperativ & Aufforderung =====
export const LESSONS: Record<string, Lesson> = {
  'm14-l1': {
    id: 'm14-l1',
    order: 1,
    moduleId: 'm14',
    title: {
      de: 'Imperativ & Aufforderung',
      en: 'Imperative & Commands',
      ar: 'صيغة الأمر'
    },
    prerequisites: ['m13-l1'],
    quizId: 'q14-1',
    slides: [
      {
        type: 'grammar',
        title: { de: 'Unveränderte Imperative', en: 'Unchanged Imperatives', ar: 'أوامر غير متبدّلة' },
        rule: {
          de: 'Viele Verben nutzen im Imperativ den Infinitiv, die Konstrukt- oder Pronominalform. Keine Personenpräfixe.',
          en: 'Many verbs use infinitive, construct, or pronominal form as imperative. No subject prefixes.',
          ar: 'كثير من الأفعال تستخدم المصدر/المضاف/الضميري كأمر دون سوابق فاعل.'
        },
        examples: [
          { coptic: 'ⲙⲟⲥⲓ', translit: 'mosi', meaning: { de: 'geh!', en: 'walk!', ar: 'امشِ!' } },
          { coptic: 'ⲥⲱⲧⲉⲙ', translit: 'sotem', meaning: { de: 'höre/gehorsame!', en: 'listen/obey!', ar: 'اسمع/أطع!' } },
          { coptic: 'ⲧⲱⲛ=', translit: 'twn=', meaning: { de: 'steh auf!', en: 'arise!', ar: 'انهض!' } },
          { coptic: 'ⲙⲉⲛⲣⲉ-', translit: 'menre-', meaning: { de: 'liebe!', en: 'love!', ar: 'أَحِبَّ!' } }
        ],
        spiritual: {
          bibleVerse: { de: '„Freut euch allezeit.“', en: '"Rejoice always."', ar: '«افْرَحُوا فِي كُلِّ حِينٍ.»' },
          bibleReference: { de: '1Thess 5,16 (SCH2000)', en: '1 Thes 5:16', ar: '١ تسالونيكي ٥:١٦' },
          fatherQuote: {
            de: '„Durch die Kraft Gottes wurde die Botschaft allen Völkern verkündet.“',
            en: '“By the power of God they proclaimed to every race of men.”',
            ar: '«بقوة الله كرزوا لكل جنس من الناس.»'
          },
          fatherReference: {
            de: 'Justin, 1 Apologie, zitiert bei Bercot, Evangelism, 1.175',
            en: 'Justin Martyr, First Apology, cited in Bercot, Evangelism, 1.175',
            ar: 'يوستينوس، الدفاع الأول، كما في بيركوت، التبشير، 1.175'
          }
        }
      },
      {
        type: 'grammar',
        title: { de: 'Imperativ mit ⲁ-', en: 'Imperative with ⲁ-', ar: 'أمر مع ⲁ-' },
        rule: {
          de: 'Viele Verben bilden den Imperativ mit ⲁ- vor dem Stamm; einige ändern Form je nach Infinitiv/Pronominal/Konstrukt.',
          en: 'Many verbs form the imperative by prefix ⲁ-; some take special forms per pattern.',
          ar: 'كثير من الأفعال تُكوِّن الأمر ببادئة ⲁ-؛ وبعضها يتبدّل شكله حسب النوع.'
        },
        examples: [
          { coptic: 'ⲁⲛⲁⲩ', translit: 'anau', meaning: { de: 'sieh!', en: 'see!', ar: 'انظر!' } },
          { coptic: 'ⲁⲟⲩⲟⲩⲙ', translit: 'aouwm', meaning: { de: 'iss!', en: 'eat!', ar: 'كُل!' } },
          { coptic: 'ⲁⲟⲩⲱⲛ', translit: 'aouwn', meaning: { de: 'öffne!', en: 'open!', ar: 'افتح!' } },
          { coptic: 'ⲁⲣⲓⲟⲩⲓ / ⲁⲣⲓ- / ⲁⲣⲓⲧ=', translit: 'arioui / ari- / arit=', meaning: { de: 'mach!/tu!', en: 'make/do!', ar: 'اصنع!' } },
          { coptic: 'ⲁⲛⲓⲧ= / ⲁⲛⲓ-', translit: 'anit= / ani-', meaning: { de: 'bring!', en: 'bring!', ar: 'أْحضر!' } }
        ],
        spiritual: {
          bibleVerse: { de: '„Singt dem HERRN ein neues Lied.“', en: '"Sing to the LORD a new song."', ar: '«غَنُّوا لِلرَّبِّ تَرْنِيمَةً جَدِيدَةً.»' },
          bibleReference: { de: 'Ps 96,1 (SCH2000)', en: 'Ps 96:1', ar: 'مزمور ٩٦:١' },
          fatherQuote: {
            de: '„Wenn wir recht das Fest halten, werden wir der Freude des Himmels würdig.“',
            en: '“When we rightly keep the feast, we shall be counted worthy of the joy in heaven.”',
            ar: '«عندما نحفظ العيد بحق نُحسَب مستحقّين لفرح السماء.»'
          },
          fatherReference: {
            de: 'Athanasius, Festal Letters 2:7 (Akin, Fathers Know Best)',
            en: 'Athanasius, Festal Letters 2:7 (Akin)',
            ar: 'أثناسيوس، رسائل الأعياد ٢:٧ (آكين)'
          }
        }
      },
      {
        type: 'grammar',
        title: { de: 'Liturgische Belege', en: 'Liturgical attestations', ar: 'شواهد ليتورجية' },
        rule: {
          de: 'Imperative stehen oft in Hymnen und Gebeten.',
          en: 'Imperatives abound in hymns and prayers.',
          ar: 'تكثر صيغ الأمر في الترانيم والصلوات.'
        },
        examples: [
          { coptic: 'ⲛⲁϩⲙⲟⲩ ⲉⲃⲟⲗ ϩⲁ ⲡⲓⲡⲉⲑⲱⲟⲩ', translit: 'nahmēmou ebol ha pipethou', meaning: { de: 'rette uns vor dem Bösen', en: 'save us from the evil', ar: 'خلّصنا من الشر' } },
          { coptic: 'ⲧⲱⲛ= ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉ ⲡⲓⲟⲩⲱⲛⲓ', translit: 'twn= nisheri ente piouoni', meaning: { de: 'steht auf, Kinder des Lichts', en: 'arise, children of the light', ar: 'انهضوا يا أبناء النور' } }
        ]
      }
    ]
  }
};

// Optional: einfache Quiz-Gerüste
export const QUIZZES = {
  'q13-1': {
    id: 'q13-1',
    questions: [
      { type: 'mc', prompt: 'Welche Konjunktion bedeutet „weder/noch“?', options: ['ⲟⲩⲇⲉ', 'ⲁⲗⲗⲁ', 'ⲛⲉⲙ'], answer: 0 }
    ]
  },
  'q14-1': {
    id: 'q14-1',
    questions: [
      { type: 'mc', prompt: 'Welche Form ist ein Imperativ mit ⲁ-?', options: ['ⲙⲟⲥⲓ', 'ⲁⲛⲁⲩ', 'ⲥⲱⲧⲉⲙ'], answer: 1 }
    ]
  }
};