// --- Module 10: Weitere Zeiten (Gewohnheit & Verneinung) ---
import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {
  'm10-l1': {
    id: 'm10-l1',
    order: 1,
    moduleId: 'm10',
    title: { de: 'Gewohnheitsform (Habitual)', en: 'Habitual', ar: 'صيغة الاعتياد' },
    prerequisites: ['l5-1'],
    quizId: 'q10-1',
    slides: [
      {
        type: 'grammar',
        title: { de: 'Form & Gebrauch', en: 'Form & Use', ar: 'الصيغة والاستخدام' },
        rule: {
          de: 'Die Gewohnheitsform bezeichnet regelmäßige, übliche Handlungen. Bildung nach Younan: Partikel und Personalpräfixe vor dem Infinitiv; Zeitwert: „pflegt zu … / tut gewöhnlich …“',
          en: 'Habitual marks customary actions. Built with particles and personal prefixes before the infinitive; sense “usually/used to …”.',
          ar: 'تدل على الأفعال المعتادة؛ تُبنى بجزيئات وضمائر بادئة قبل المصدر؛ المعنى: «يعتاد أن…».'
        },
        examples: [
          { coptic: 'ϯⲥⲱⲧⲉⲙ ⲉ̀ⲛⲓⲥⲁϫⲓ ⲛ̀ⲥⲟⲩⲧⲱⲛ', translit: 'ti-sotem e-nisaji n-souton', meaning: { de: 'ich höre gewöhnlich die Lehren', en: 'I usually listen to the teachings', ar: 'أعتادُ سماع التعاليم' } },
          { coptic: 'ⲥⲉⲡⲣⲟⲥⲉⲩⲭⲉ ⲙ̀ⲙⲏⲧ ⲛ̀ⲑⲟⲟⲩ', translit: 'se-proseuche em-meet enthoou', meaning: { de: 'sie beten jeden Tag', en: 'they pray every day', ar: 'يصلّون كل يوم' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'Negativ-Gewohnheit', en: 'Negative Habitual', ar: 'النفي الاعتيادي' },
        rule: {
          de: 'Negation mit ⲁⲛ nach dem Verb (und ggf. vorangestelltem ⲛ̀-). Bedeutung: „pflegt nicht zu …“.',
          en: 'Negate with ⲁⲛ after the verb (optionally ⲛ̀- before). Meaning: “does not usually …”.',
          ar: 'النفي بـ ⲁⲛ بعد الفعل (وممكن ⲛ̀- قبلَه). المعنى: «لا يعتاد أن…».'
        },
        examples: [
          { coptic: 'ⲛ̀ⲧⲟⲟⲩ ⲥⲱⲧⲉⲙ ⲁⲛ ⲉ̀ⲡⲉⲕⲥⲁϫⲓ', translit: 'entou soutem an e-peksaji', meaning: { de: 'sie hören dein Wort gewöhnlich nicht', en: 'they do not usually listen to your word', ar: 'لا يعتادون سماع كلمتك' } }
        ]
      },
      {
        type: 'sentence',
        item: {
          text: 'ⲛⲁⲓ ⲡⲉ ⲛⲓⲣⲱⲙⲓ ⲉⲧⲉ ⲥⲉⲡⲣⲟⲥⲉⲩⲭⲉ ⲙ̀ⲙⲏⲧ',
          translit: 'nai pe ni-romi ete se-proseuche em-meet',
          meaning: { de: 'Dies sind die Menschen, die täglich beten.', en: 'These are the people who pray daily.', ar: 'هؤلاء هم الناس الذين يصلّون يوميًا.' }
        },
      }
    ]
  },

  'm10-l2': {
    id: 'm10-l2',
    order: 2,
    moduleId: 'm10',
    title: { de: 'Optativ / Wunschform & Gebetssprache', en: 'Optative & Prayer', ar: 'صيغة التمني والصلاة' },
    prerequisites: ['m10-l1'],
    quizId: 'q10-2',
    slides: [
      {
        type: 'grammar',
        title: { de: 'Wunsch / Bitte', en: 'Wish / Petition', ar: 'التمني / الطلب' },
        rule: {
          de: 'Wunschkonstruktionen verwenden häufig Partikeln mit Infinitiv oder Imperativformen in liturgischer Sprache. Sinn: „möge …“.',
          en: 'Optative often uses particles with infinitive or imperative in liturgical style. Sense: “may …”.',
          ar: 'تستخدم جزيئات مع المصدر أو الأمر في الأسلوب الليتورجي. المعنى: «ليكن…».'
        },
        examples: [
          { coptic: 'ⲉⲣⲉ ⲡ̀ϭⲟⲓⲥ ⲥⲉⲛⲁⲩ ⲉ̀ⲣⲟⲛ', translit: 'ere ep-chois senau eron', meaning: { de: 'Möge der Herr auf uns blicken', en: 'May the Lord look upon us', ar: 'ليت الرب ينظر إلينا' } },
          { coptic: 'ⲙⲁⲣⲉ ⲡⲉⲛⲟⲩϯ ⲧⲟⲧⲉ ⲛⲁⲛ ⲙ̀ⲡⲉⲛⲭⲁⲣⲓⲥ', translit: 'mare penouti tote nan em-pencharis', meaning: { de: 'Gott gebe uns seine Gnade', en: 'May God give us his grace', ar: 'ليعطنا الله نعمته' } }
        ]
      },
      {
        type: 'sentence',
        item: {
          text: 'ⲙⲁⲣⲉ ⲡⲉⲛⲟⲩϯ ⲧⲁⲓⲙⲁⲥⲧⲓⲥ ⲙ̀ⲡⲉⲛⲗⲁⲟⲥ',
          translit: 'mare penouti taimasteis em-penlaos',
          meaning: { de: 'Gott erbarme sich unseres Volkes.', en: 'May God have mercy on our people.', ar: 'ليترأف الله بشعبنا.' }
        },
      }
    ]
  }
};

export const QUIZZES: Record<string, Quiz> = {
  'q10-1': {
    id: 'q10-1',
    lessonId: 'm10-l1',
    title: { de: 'Quiz: Gewohnheitsform', en: 'Quiz: Habitual', ar: 'اختبار: صيغة الاعتياد' },
    passScore: 70,
    questions: [
      {
        id: 'q10-1-1',
        type: 'multiple-choice',
        questionText: { de: 'Was drückt die Gewohnheitsform aus?', en: 'What does the habitual express?', ar: 'ماذا تعبّر صيغة الاعتياد؟' },
        options: [
          { de: 'regelmäßige, übliche Handlungen', en: 'customary, usual actions', ar: 'أفعال معتادة ومنتظمة' },
          { de: 'einmalige Handlungen', en: 'one-time actions', ar: 'أفعال لمرة واحدة' },
          { de: 'zukünftige Handlungen', en: 'future actions', ar: 'أفعال مستقبلية' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q10-1-2',
        type: 'multiple-choice',
        questionText: { de: 'Wie negiert man die Gewohnheitsform?', en: 'How do you negate the habitual?', ar: 'كيف تنفي صيغة الاعتياد؟' },
        options: [
          { de: 'mit ⲁⲛ nach dem Verb', en: 'with ⲁⲛ after the verb', ar: 'بـ ⲁⲛ بعد الفعل' },
          { de: 'mit ϯⲙ̀- vor dem Verb', en: 'with ϯⲙ̀- before the verb', ar: 'بـ ϯⲙ̀- قبل الفعل' },
          { de: 'mit ⲙ̀ⲙⲟⲛ', en: 'with ⲙ̀ⲙⲟⲛ', ar: 'بـ ⲙ̀ⲙⲟⲛ' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q10-2': {
    id: 'q10-2',
    lessonId: 'm10-l2',
    title: { de: 'Quiz: Optativ/Wunschform', en: 'Quiz: Optative', ar: 'اختبار: صيغة التمني' },
    passScore: 70,
    questions: [
      {
        id: 'q10-2-1',
        type: 'multiple-choice',
        questionText: { de: 'Was drückt der Optativ aus?', en: 'What does the optative express?', ar: 'ماذا يعبّر الأسلوب التمنّي؟' },
        options: [
          { de: 'Wunsch oder Bitte ("möge...")', en: 'wish or petition ("may...")', ar: 'التمني أو الطلب ("ليت...")' },
          { de: 'Befehl', en: 'command', ar: 'أمر' },
          { de: 'Vergangenheit', en: 'past', ar: 'ماضي' }
        ],
        correctAnswerIndex: 0
      }
    ]
  }
};