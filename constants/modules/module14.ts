import type { Lesson, Quiz } from '../../types';

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

export const QUIZZES: Record<string, Quiz> = {
  'q14-1': {
    id: 'q14-1',
    lessonId: 'm14-l1',
    title: { de: 'Quiz: Imperativ & Aufforderung', en: 'Quiz: Imperative & Commands', ar: 'اختبار: صيغة الأمر' },
    passScore: 70,
    questions: [
      {
        id: 'q14-1-1',
        type: 'multiple-choice',
        questionText: { de: 'Welche Form ist ein Imperativ mit ⲁ-?', en: 'Which form is an imperative with ⲁ-?', ar: 'أيّ شكل هو أمر مع ⲁ-؟' },
        options: [
          { de: 'ⲙⲟⲥⲓ', en: 'ⲙⲟⲥⲓ', ar: 'ⲙⲟⲥⲓ' },
          { de: 'ⲁⲛⲁⲩ', en: 'ⲁⲛⲁⲩ', ar: 'ⲁⲛⲁⲩ' },
          { de: 'ⲥⲱⲧⲉⲙ', en: 'ⲥⲱⲧⲉⲙ', ar: 'ⲥⲱⲧⲉⲙ' }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'q14-1-2',
        type: 'multiple-choice',
        questionText: { de: 'Welche Form ist ein unveränderter Imperativ?', en: 'Which form is an unchanged imperative?', ar: 'أيّ شكل هو أمر غير متبدّل؟' },
        options: [
          { de: 'ⲁⲛⲁⲩ', en: 'ⲁⲛⲁⲩ', ar: 'ⲁⲛⲁⲩ' },
          { de: 'ⲙⲟⲥⲓ', en: 'ⲙⲟⲥⲓ', ar: 'ⲙⲟⲥⲓ' },
          { de: 'ⲁⲟⲩⲟⲩⲙ', en: 'ⲁⲟⲩⲟⲩⲙ', ar: 'ⲁⲟⲩⲟⲩⲙ' }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'q14-1-3',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲁⲟⲩⲟⲩⲙ?', en: 'What does ⲁⲟⲩⲟⲩⲙ mean?', ar: 'ماذا يعني ⲁⲟⲩⲟⲩⲙ؟' },
        options: [
          { de: 'sieh!', en: 'see!', ar: 'انظر!' },
          { de: 'iss!', en: 'eat!', ar: 'كُل!' },
          { de: 'geh!', en: 'walk!', ar: 'امشِ!' }
        ],
        correctAnswerIndex: 1
      }
    ]
  }
};