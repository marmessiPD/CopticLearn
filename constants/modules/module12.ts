// --- Module 12: Präpositionen I (Ort & Richtung) ---

import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {
  'm12-l1': {
    id: 'm12-l1',
    order: 1,
    moduleId: 'm12',
    title: { de: 'Präpositionen I: Ort & Richtung', en: 'Prepositions I: Place & Direction', ar: 'حروف الجر ١: المكان والاتجاه' },
    prerequisites: ['m11-l1'],
    quizId: 'q12-1',
    slides: [
      {
        type: 'grammar',
        title: { de: 'ⲙ̀ / ⲛ̀ = in, zu; Assimilation', en: 'ⲙ̀ / ⲛ̀ = in, to; assimilation', ar: 'ⲙ̀ / ⲛ̀ = في/إلى' },
        rule: {
          de: 'ⲛ̀ vor Nicht-Vilminor, ⲙ̀ vor Vilminor (ⲃ, ⲓ, ⲗ, ⲙ, ⲛ, ⲟ, ⲣ).',
          en: 'Use ⲛ̀ normally; use ⲙ̀ before Vilminor letters (ⲃ, ⲓ, ⲗ, ⲙ, ⲛ, ⲟ, ⲣ).',
          ar: 'ⲛ̀ عادةً، وⲙ̀ قبل حروف فيلمينور.'
        },
        examples: [
          { coptic: 'ϧⲉⲛ ⲡⲏⲓ', translit: 'khen pei', meaning: { de: 'im Haus', en: 'in the house', ar: 'في البيت' } },
          { coptic: 'ⲙ̀ⲡⲓⲣⲱⲙⲓ', translit: 'em-piromi', meaning: { de: 'zum Mann / beim Mann', en: 'to/at the man', ar: 'إلى/عند الرجل' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'ϧⲉⲛ = in (lokal)', en: 'ϧⲉⲛ = in (locative)', ar: 'ϧⲉⲛ = في' },
        rule: {
          de: 'ϧⲉⲛ kennzeichnet den Ort. Mit Artikeln kombinierbar.',
          en: 'ϧⲉⲛ marks location. Combines with articles.',
          ar: 'ϧⲉⲛ للدلالة على المكان. تُدمج مع الأدوات.'
        },
        examples: [
          { coptic: 'ϧⲉⲛ ⲡ̀ⲕⲏⲙⲉ', translit: 'khen ep-keme', meaning: { de: 'im Feld', en: 'in the field', ar: 'في الحقل' } },
          { coptic: 'ϧⲉⲛ ⲡ̀ⲛⲟⲩⲧⲓ', translit: 'khen ep-nouti', meaning: { de: 'in Gott (theol.)', en: 'in God (theol.)', ar: 'في الله' } }
        ]
      }
    ]
  },

  'm12-l2': {
    id: 'm12-l2',
    order: 2,
    moduleId: 'm12',
    title: { de: 'Präpositionen II: Zeit & Temporal', en: 'Prepositions II: Time & Temporal', ar: 'حروف الجر ٢: الزمان والزمني' },
    prerequisites: ['m12-l1'],
    quizId: 'q12-2',
    slides: [
      {
        type: 'grammar',
        title: { de: 'ⲛ̀ⲥⲁ = nach, hinter', en: 'ⲛ̀ⲥⲁ = after, behind', ar: 'ⲛ̀ⲥⲁ = بعد/خلف' },
        rule: {
          de: 'ⲛ̀ⲥⲁ drückt sowohl räumliche (hinter) als auch zeitliche (nach) Beziehungen aus.',
          en: 'ⲛ̀ⲥⲁ expresses both spatial (behind) and temporal (after) relationships.',
          ar: 'ⲛ̀ⲥⲁ تعبّر عن علاقات مكانية (خلف) وزمنية (بعد).'
        },
        examples: [
          { coptic: 'ⲛ̀ⲥⲁ ⲡⲓⲣⲱⲙⲓ', translit: 'ensa pi-romi', meaning: { de: 'nach dem Mann / hinter dem Mann', en: 'after/behind the man', ar: 'بعد/خلف الرجل' } },
          { coptic: 'ⲛ̀ⲥⲁ ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ', translit: 'ensa pi-sabbaton', meaning: { de: 'nach dem Sabbat', en: 'after the Sabbath', ar: 'بعد السبت' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'ⲙ̀ⲙⲟⲛ = vor (zeitlich)', en: 'ⲙ̀ⲙⲟⲛ = before (temporal)', ar: 'ⲙ̀ⲙⲟⲛ = قبل (زمني)' },
        rule: {
          de: 'ⲙ̀ⲙⲟⲛ kennzeichnet zeitliche Vorzeitigkeit: „vor“ im Sinne von „vorher“.',
          en: 'ⲙ̀ⲙⲟⲛ marks temporal precedence: "before" in the sense of "earlier".',
          ar: 'ⲙ̀ⲙⲟⲛ تدل على السبق الزمني: "قبل" بمعنى "سابقاً".'
        },
        examples: [
          { coptic: 'ⲙ̀ⲙⲟⲛ ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ', translit: 'emmon pi-sabbaton', meaning: { de: 'vor dem Sabbat', en: 'before the Sabbath', ar: 'قبل السبت' } },
          { coptic: 'ⲙ̀ⲙⲟⲛ ⲡⲓⲉⲡⲓⲫⲁⲛⲓⲁ', translit: 'emmon pi-epiphania', meaning: { de: 'vor der Erscheinung', en: 'before the Epiphany', ar: 'قبل الظهور' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'ϧⲉⲛ + Zeitausdrücke', en: 'ϧⲉⲛ + time expressions', ar: 'ϧⲉⲛ + تعابير الزمن' },
        rule: {
          de: 'ϧⲉⲛ kann auch mit Zeitausdrücken verwendet werden: „während, zur Zeit von“.',
          en: 'ϧⲉⲛ can also be used with time expressions: "during, at the time of".',
          ar: 'ϧⲉⲛ يمكن استخدامها مع تعابير الزمن: "خلال/في وقت".'
        },
        examples: [
          { coptic: 'ϧⲉⲛ ⲡⲓⲛⲟⲩⲧⲓ', translit: 'khen pi-nouti', meaning: { de: 'in der Nacht', en: 'at night', ar: 'في الليل' } },
          { coptic: 'ϧⲉⲛ ⲡⲓⲉⲓⲱⲧ', translit: 'khen pi-eiot', meaning: { de: 'am Morgen', en: 'in the morning', ar: 'في الصباح' } }
        ]
      },
      {
        type: 'sentence',
        item: {
          text: 'ⲛ̀ⲥⲁ ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ ⲁⲛⲟⲕ ⲉⲓⲛⲁⲩ ⲉ̀ⲡⲓⲥⲏⲟⲩ',
          translit: 'ensa pi-sabbaton anok einau e-pisheou',
          meaning: { de: 'Nach dem Sabbat sah ich das Licht.', en: 'After the Sabbath I saw the light.', ar: 'بعد السبت رأيت النور.' }
        }
      }
    ]
  },

  'm12-l3': {
    id: 'm12-l3',
    order: 3,
    moduleId: 'm12',
    title: { de: 'Präpositionen III: Art & Weise, Ursache', en: 'Prepositions III: Manner & Cause', ar: 'حروف الجر ٣: الكيفية والسبب' },
    prerequisites: ['m12-l2'],
    quizId: 'q12-3',
    slides: [
      {
        type: 'grammar',
        title: { de: 'ⲛ̀ⲥⲁ = wegen, um ... willen', en: 'ⲛ̀ⲥⲁ = because of, for the sake of', ar: 'ⲛ̀ⲥⲁ = بسبب/من أجل' },
        rule: {
          de: 'ⲛ̀ⲥⲁ kann auch kausal verwendet werden: „wegen, um ... willen“.',
          en: 'ⲛ̀ⲥⲁ can also be used causally: "because of, for the sake of".',
          ar: 'ⲛ̀ⲥⲁ يمكن استخدامها سببياً: "بسبب/من أجل".'
        },
        examples: [
          { coptic: 'ⲛ̀ⲥⲁ ⲡⲓⲙⲉⲩⲓⲱⲧ', translit: 'ensa pi-meuiiot', meaning: { de: 'wegen der Liebe', en: 'because of love', ar: 'بسبب المحبة' } },
          { coptic: 'ⲛ̀ⲥⲁ ⲡⲓⲟⲩⲱⲛⲓ', translit: 'ensa pi-ouoni', meaning: { de: 'um des Lichts willen', en: 'for the sake of the light', ar: 'من أجل النور' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'ⲉⲩⲃⲉ = um ... willen', en: 'ⲉⲩⲃⲉ = for the sake of', ar: 'ⲉⲩⲃⲉ = من أجل' },
        rule: {
          de: 'ⲉⲩⲃⲉ drückt einen Zweck oder Grund aus: „um ... willen, wegen“.',
          en: 'ⲉⲩⲃⲉ expresses purpose or reason: "for the sake of, because of".',
          ar: 'ⲉⲩⲃⲉ تعبّر عن الغرض أو السبب: "من أجل/بسبب".'
        },
        examples: [
          { coptic: 'ⲉⲩⲃⲉ ⲡⲓⲛⲟⲩⲧⲓ', translit: 'eube ep-nouti', meaning: { de: 'um Gottes willen', en: 'for God\'s sake', ar: 'من أجل الله' } },
          { coptic: 'ⲉⲩⲃⲉ ⲡⲓⲥⲁϫⲓ', translit: 'eube ep-saji', meaning: { de: 'um des Wortes willen', en: 'for the word\'s sake', ar: 'من أجل الكلمة' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'ⲙ̀ⲙⲟⲧ = mit, zusammen mit', en: 'ⲙ̀ⲙⲟⲧ = with, together with', ar: 'ⲙ̀ⲙⲟⲧ = مع/سويّة' },
        rule: {
          de: 'ⲙ̀ⲙⲟⲧ drückt Begleitung oder Mittel aus: „mit, zusammen mit, durch“.',
          en: 'ⲙ̀ⲙⲟⲧ expresses accompaniment or means: "with, together with, by means of".',
          ar: 'ⲙ̀ⲙⲟⲧ تعبّر عن المرافقة أو الوسيلة: "مع/سويّة/بواسطة".'
        },
        examples: [
          { coptic: 'ⲙ̀ⲙⲟⲧ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ', translit: 'emmot ni-angelos', meaning: { de: 'mit den Engeln', en: 'with the angels', ar: 'مع الملائكة' } },
          { coptic: 'ⲙ̀ⲙⲟⲧ ⲡⲓⲥⲁϫⲓ', translit: 'emmot ep-saji', meaning: { de: 'durch das Wort', en: 'by means of the word', ar: 'بواسطة الكلمة' } }
        ]
      },
      {
        type: 'sentence',
        item: {
          text: 'ⲉⲩⲃⲉ ⲡⲓⲙⲉⲩⲓⲱⲧ ⲁϥⲛⲁⲩ ⲉ̀ⲛⲓⲁⲅⲅⲉⲗⲟⲥ',
          translit: 'eube ep-meuiiot af-nau e-ni-angelos',
          meaning: { de: 'Um der Liebe willen sah er die Engel.', en: 'For the sake of love he saw the angels.', ar: 'من أجل المحبة رأى الملائكة.' }
        }
      }
    ]
  }
};

export const QUIZZES: Record<string, Quiz> = {
  'q12-1': {
    id: 'q12-1',
    lessonId: 'm12-l1',
    title: { de: 'Quiz: Präpositionen (Ort & Richtung)', en: 'Quiz: Prepositions (Place & Direction)', ar: 'اختبار: حروف الجر (المكان والاتجاه)' },
    passScore: 70,
    questions: [
      {
        id: 'q12-1-1',
        type: 'multiple-choice',
        questionText: { de: 'Wann wird ⲙ̀ statt ⲛ̀ verwendet?', en: 'When is ⲙ̀ used instead of ⲛ̀?', ar: 'متى تُستخدم ⲙ̀ بدلاً من ⲛ̀؟' },
        options: [
          { de: 'vor Vilminor-Buchstaben', en: 'before Vilminor letters', ar: 'قبل حروف فيلمينور' },
          { de: 'vor allen Buchstaben', en: 'before all letters', ar: 'قبل كل الحروف' },
          { de: 'nie', en: 'never', ar: 'أبداً' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q12-1-2',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ϧⲉⲛ?', en: 'What does ϧⲉⲛ mean?', ar: 'ماذا يعني ϧⲉⲛ؟' },
        options: [
          { de: 'in (lokal)', en: 'in (locative)', ar: 'في' },
          { de: 'zu', en: 'to', ar: 'إلى' },
          { de: 'mit', en: 'with', ar: 'مع' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q12-2': {
    id: 'q12-2',
    lessonId: 'm12-l2',
    title: { de: 'Quiz: Präpositionen (Zeit)', en: 'Quiz: Prepositions (Time)', ar: 'اختبار: حروف الجر (الزمان)' },
    passScore: 70,
    questions: [
      {
        id: 'q12-2-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲛ̀ⲥⲁ zeitlich?', en: 'What does ⲛ̀ⲥⲁ mean temporally?', ar: 'ماذا يعني ⲛ̀ⲥⲁ زمنياً؟' },
        options: [
          { de: 'nach, hinter', en: 'after, behind', ar: 'بعد/خلف' },
          { de: 'vor', en: 'before', ar: 'قبل' },
          { de: 'während', en: 'during', ar: 'خلال' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q12-2-2',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲙ̀ⲙⲟⲛ?', en: 'What does ⲙ̀ⲙⲟⲛ mean?', ar: 'ماذا يعني ⲙ̀ⲙⲟⲛ؟' },
        options: [
          { de: 'vor (zeitlich)', en: 'before (temporal)', ar: 'قبل (زمني)' },
          { de: 'nach', en: 'after', ar: 'بعد' },
          { de: 'mit', en: 'with', ar: 'مع' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q12-3': {
    id: 'q12-3',
    lessonId: 'm12-l3',
    title: { de: 'Quiz: Präpositionen (Art & Ursache)', en: 'Quiz: Prepositions (Manner & Cause)', ar: 'اختبار: حروف الجر (الكيفية والسبب)' },
    passScore: 70,
    questions: [
      {
        id: 'q12-3-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲉⲩⲃⲉ?', en: 'What does ⲉⲩⲃⲉ mean?', ar: 'ماذا يعني ⲉⲩⲃⲉ؟' },
        options: [
          { de: 'um ... willen, wegen', en: 'for the sake of, because of', ar: 'من أجل/بسبب' },
          { de: 'mit', en: 'with', ar: 'مع' },
          { de: 'nach', en: 'after', ar: 'بعد' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q12-3-2',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲙ̀ⲙⲟⲧ?', en: 'What does ⲙ̀ⲙⲟⲧ mean?', ar: 'ماذا يعني ⲙ̀ⲙⲟⲧ؟' },
        options: [
          { de: 'mit, zusammen mit', en: 'with, together with', ar: 'مع/سويّة' },
          { de: 'vor', en: 'before', ar: 'قبل' },
          { de: 'nach', en: 'after', ar: 'بعد' }
        ],
        correctAnswerIndex: 0
      }
    ]
  }
};
