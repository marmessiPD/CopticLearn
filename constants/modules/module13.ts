import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {
  // ===== Module 13: Konjunktionen & Nebensätze =====
  'm13-l1': {
    id: 'm13-l1',
    order: 1,
    moduleId: 'm13',
    title: {
      de: 'Konjunktionen & Nebensätze',
      en: 'Conjunctions & Clauses',
      ar: 'حروف العطف والجمل'
    },
    prerequisites: ['l5-1'],
    quizId: 'q13-1',
    slides: [
      {
        type: 'grammar',
        title: { de: 'Erststellige Konjunktionen', en: 'First-position Conjunctions', ar: 'حروف في أوّل الجملة' },
        rule: {
          de: 'Konjunktionen am Satzanfang verbinden Hauptsätze. Häufig: ⲁⲗⲗⲁ „aber“, ⲛⲉⲙ „und/mit (für Nominalverknüpfung)“, ⲉⲡⲓⲇⲏ „weil/da/nachdem“, ⲟⲩⲇⲉ „weder/noch“, ⲉⲩⲃⲉ „um ... willen/wegen“.',
          en: 'Sentence-initial conjunctions link main clauses: ⲁⲗⲗⲁ “but”, ⲛⲉⲙ “and/with (nouns)”, ⲉⲡⲓⲇⲏ “since/after/because”, ⲟⲩⲇⲉ “nor”, ⲉⲩⲃⲉ “for the sake of”.',
          ar: 'حروف في بداية الجملة لربط الجمل: ⲁⲗⲗⲁ (لكن)، ⲛⲉⲙ (و/مع للأسماء)، ⲉⲡⲓⲇⲏ (لأن/بعد أن)، ⲟⲩⲇⲉ (ولا)، ⲉⲩⲃⲉ (من أجل).'
        },
        examples: [
          { coptic: 'ⲁⲗⲗⲁ ⲁ̀ⲛⲟⲕ ⲥ̀ⲙⲟⲩ', translit: 'alla anok es-mou', meaning: { de: 'aber ich preise', en: 'but I praise', ar: 'لكنّي أسبّح' } },
          { coptic: 'ⲣⲱⲙⲓ ⲛⲉⲙ ⲥⲟϭⲛⲓ', translit: 'romi nem sochni', meaning: { de: 'Mann und Freund', en: 'man and friend', ar: 'رجل وصديق' } },
          { coptic: 'ⲉⲡⲓⲇⲏ ⲁϥⲛⲁⲩ ⲉⲡⲓⲥⲁϩⲓ', translit: 'epide af-nau e-pisahi', meaning: { de: 'weil er das Zeichen sah', en: 'since he saw the sign', ar: 'لأنه رأى العلامة' } }
        ],
      },
      {
        type: 'grammar',
        title: { de: 'Enklitische Konjunktionen', en: 'Enclitic Conjunctions', ar: 'حروف عطف ملحَقة' },
        rule: {
          de: 'Nicht erststellige Konjunktionen stehen nach dem ersten Wort der Klausel. Bedeutung bleibt verbindend; Stellung ist syntaktisch fest.',
          en: 'Non-initial conjunctions follow the first word of the clause. They still link, but have fixed second position.',
          ar: 'تأتي بعد الكلمة الأولى في الجملة، وتبقى وظيفتها الربط مع موضع ثابت.'
        },
        examples: [
          { coptic: 'ⲁϥⲛⲁⲩ ⲇⲉ ⲉⲡⲓⲥⲏⲟⲩ', translit: 'af-nau de e-pisheou', meaning: { de: 'er aber sah das Licht', en: 'but he saw the light', ar: 'أمّا هو فرأى النور' } }
        ],
      },
      {
        type: 'grammar',
        title: { de: 'Relativsatz mit ⲉ̀ⲧ-/ⲉ̀ⲧⲉ', en: 'Relative Clauses with ⲉ̀ⲧ-/ⲉ̀ⲧⲉ', ar: 'جمل موصولة ⲉ̀ⲧ-/ⲉ̀ⲧⲉ' },
        rule: {
          de: 'ⲉ̀ⲧ- bildet den Relativsatz vorangestellt zum Nomen; ⲉ̀ⲧⲉ nachgestellt mit Artikel. Kongruenz mit Bezugswort beachten.',
          en: 'ⲉ̀ⲧ- forms preposed relatives; ⲉ̀ⲧⲉ follows the noun with its article. Observe agreement.',
          ar: 'ⲉ̀ⲧ- قبل الاسم وⲉ̀ⲧⲉ بعد الاسم مع أداته. راعِ المطابقة.'
        },
        examples: [
          { coptic: 'ⲡ̀ⲣⲱⲙⲓ ⲉ̀ⲧ ⲥ̀ⲥⲱⲧⲉⲙ', translit: 'ep-romi et es-sotem', meaning: { de: 'der Mann, der hört', en: 'the man who listens', ar: 'الرجل الذي يسمع' } },
          { coptic: 'ⲡ̀ϣⲏⲣⲓ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ', translit: 'ep-sheri ete em-mau', meaning: { de: 'jener Sohn dort', en: 'that son there', ar: 'ذاك الابن هناك' } }
        ]
      }
    ]
  },

  'm13-l2': {
    id: 'm13-l2',
    order: 2,
    moduleId: 'm13',
    title: {
      de: 'Bedingungssätze & Konditionale',
      en: 'Conditional Clauses',
      ar: 'الجمل الشرطية'
    },
    prerequisites: ['m13-l1'],
    quizId: 'q13-2',
    slides: [
      {
        type: 'grammar',
        title: { de: 'ⲉⲓϣⲁⲛ = wenn', en: 'ⲉⲓϣⲁⲛ = if', ar: 'ⲉⲓϣⲁⲛ = إذا' },
        rule: {
          de: 'ⲉⲓϣⲁⲛ leitet Bedingungssätze ein: „wenn ... dann ...". Die Hauptsatzhandlung steht im Futur oder Imperativ.',
          en: 'ⲉⲓϣⲁⲛ introduces conditional clauses: "if ... then ...". The main clause uses future or imperative.',
          ar: 'ⲉⲓϣⲁⲛ تُدخل الجمل الشرطية: "إذا... فـ...". الجملة الرئيسية تستخدم المستقبل أو الأمر.'
        },
        examples: [
          { coptic: 'ⲉⲓϣⲁⲛ ⲁⲕⲥⲱⲧⲉⲙ ⲛ̀ⲡⲓⲥⲁϫⲓ ⲉⲕⲛⲁⲥⲟⲩⲧⲱⲛ', translit: 'eishan ak-sotem en-ep-saji ek-na-souton', meaning: { de: 'Wenn du das Wort hörst, wirst du verstehen.', en: 'If you hear the word, you will understand.', ar: 'إذا سمعت الكلمة ستفهم.' } },
          { coptic: 'ⲉⲓϣⲁⲛ ⲁⲕⲙⲉⲩⲓⲱⲧ ⲉⲁⲕⲙⲉⲩⲓⲱⲧ', translit: 'eishan ak-meuiiot eak-meuiiot', meaning: { de: 'Wenn du liebst, wirst du geliebt.', en: 'If you love, you will be loved.', ar: 'إذا أحببت ستحب.' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'ⲉⲓϣⲁⲛ ... ⲟⲩⲇⲉ = wenn nicht', en: 'ⲉⲓϣⲁⲛ ... ⲟⲩⲇⲉ = if not', ar: 'ⲉⲓϣⲁⲛ ... ⲟⲩⲇⲉ = إذا لم' },
        rule: {
          de: 'Negierte Bedingung: ⲉⲓϣⲁⲛ ... ⲟⲩⲇⲉ = „wenn nicht, dann nicht".',
          en: 'Negative condition: ⲉⲓϣⲁⲛ ... ⲟⲩⲇⲉ = "if not, then not".',
          ar: 'الشرط المنفي: ⲉⲓϣⲁⲛ ... ⲟⲩⲇⲉ = "إذا لم... فلم".'
        },
        examples: [
          { coptic: 'ⲉⲓϣⲁⲛ ⲁⲕⲥⲱⲧⲉⲙ ⲟⲩⲇⲉ ⲉⲕⲛⲁⲥⲟⲩⲧⲱⲛ', translit: 'eishan ak-sotem oude ek-na-souton', meaning: { de: 'Wenn du nicht hörst, wirst du nicht verstehen.', en: 'If you do not hear, you will not understand.', ar: 'إذا لم تسمع لن تفهم.' } }
        ]
      },
      {
        type: 'sentence',
        item: {
          text: 'ⲉⲓϣⲁⲛ ⲁⲕⲙⲉⲩⲓⲱⲧ ⲙ̀Ⲫϯ ⲉⲕⲛⲁⲛⲁⲩ ⲉ̀ⲡⲓⲥⲏⲟⲩ',
          translit: 'eishan ak-meuiiot em-Efnouti ek-na-nau e-pisheou',
          meaning: { de: 'Wenn du Gott liebst, wirst du das Licht sehen.', en: 'If you love God, you will see the light.', ar: 'إذا أحببت الله سترى النور.' }
        }
      }
    ]
  },

  'm13-l3': {
    id: 'm13-l3',
    order: 3,
    moduleId: 'm13',
    title: {
      de: 'Temporalsätze & Zeitangaben',
      en: 'Temporal Clauses',
      ar: 'الجمل الزمنية'
    },
    prerequisites: ['m13-l2'],
    quizId: 'q13-3',
    slides: [
      {
        type: 'grammar',
        title: { de: 'ⲉⲡⲓⲇⲏ = nachdem, da', en: 'ⲉⲡⲓⲇⲏ = after, since', ar: 'ⲉⲡⲓⲇⲏ = بعد أن/بما أن' },
        rule: {
          de: 'ⲉⲡⲓⲇⲏ leitet Temporalsätze ein: „nachdem, da, weil". Die Zeitfolge ist wichtig.',
          en: 'ⲉⲡⲓⲇⲏ introduces temporal clauses: "after, since, because". Time sequence matters.',
          ar: 'ⲉⲡⲓⲇⲏ تُدخل الجمل الزمنية: "بعد أن/بما أن/لأن". التسلسل الزمني مهم.'
        },
        examples: [
          { coptic: 'ⲉⲡⲓⲇⲏ ⲁϥⲛⲁⲩ ⲉⲡⲓⲥⲏⲟⲩ ⲁϥⲙⲟϣⲓ', translit: 'epide af-nau e-pisheou af-moshi', meaning: { de: 'Nachdem er das Licht sah, ging er.', en: 'After he saw the light, he went.', ar: 'بعد أن رأى النور ذهب.' } },
          { coptic: 'ⲉⲡⲓⲇⲏ ⲁϥⲥⲱⲧⲉⲙ ⲛ̀ⲡⲓⲥⲁϫⲓ ⲁϥⲥⲟⲩⲧⲱⲛ', translit: 'epide af-sotem en-ep-saji af-souton', meaning: { de: 'Da er das Wort hörte, verstand er.', en: 'Since he heard the word, he understood.', ar: 'بما أنه سمع الكلمة فهم.' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'ⲙ̀ⲙⲟⲛ ⲉϥ = bevor', en: 'ⲙ̀ⲙⲟⲛ ⲉϥ = before', ar: 'ⲙ̀ⲙⲟⲛ ⲉϥ = قبل أن' },
        rule: {
          de: 'ⲙ̀ⲙⲟⲛ ⲉϥ leitet Vorzeitigkeit ein: „bevor ... geschah".',
          en: 'ⲙ̀ⲙⲟⲛ ⲉϥ introduces precedence: "before ... happened".',
          ar: 'ⲙ̀ⲙⲟⲛ ⲉϥ تُدخل السبق: "قبل أن... حدث".'
        },
        examples: [
          { coptic: 'ⲙ̀ⲙⲟⲛ ⲉϥⲛⲁⲩ ⲉⲡⲓⲥⲏⲟⲩ ⲁϥⲥⲱⲧⲉⲙ', translit: 'emmon ef-nau e-pisheou af-sotem', meaning: { de: 'Bevor er das Licht sah, hörte er.', en: 'Before he saw the light, he heard.', ar: 'قبل أن يرى النور سمع.' } }
        ]
      },
      {
        type: 'sentence',
        item: {
          text: 'ⲉⲡⲓⲇⲏ ⲁⲛⲟⲕ ⲥⲱⲧⲉⲙ ⲛ̀ⲡⲓⲥⲁϫⲓ ⲁⲛⲟⲕ ⲉⲓⲥⲟⲩⲧⲱⲛ',
          translit: 'epide anok sotem en-ep-saji anok ei-souton',
          meaning: { de: 'Nachdem ich das Wort hörte, verstand ich.', en: 'After I heard the word, I understood.', ar: 'بعد أن سمعت الكلمة فهمت.' }
        }
      }
    ]
  }
};

export const QUIZZES: Record<string, Quiz> = {
  'q13-1': {
    id: 'q13-1',
    lessonId: 'm13-l1',
    title: { de: 'Quiz: Konjunktionen & Nebensätze', en: 'Quiz: Conjunctions & Clauses', ar: 'اختبار: حروف العطف والجمل' },
    passScore: 70,
    questions: [
      {
        id: 'q13-1-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲁⲗⲗⲁ?', en: 'What does ⲁⲗⲗⲁ mean?', ar: 'ماذا يعني ⲁⲗⲗⲁ؟' },
        options: [
          { de: 'aber', en: 'but', ar: 'لكن' },
          { de: 'und', en: 'and', ar: 'و' },
          { de: 'weil', en: 'because', ar: 'لأن' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q13-1-2',
        type: 'multiple-choice',
        questionText: { de: 'Was macht ⲉ̀ⲧ-/ⲉ̀ⲧⲉ?', en: 'What does ⲉ̀ⲧ-/ⲉ̀ⲧⲉ do?', ar: 'ما الذي يفعله ⲉ̀ⲧ-/ⲉ̀ⲧⲉ؟' },
        options: [
          { de: 'bildet Relativsätze', en: 'forms relative clauses', ar: 'يُكوّن جمل موصولة' },
          { de: 'verbindet Hauptsätze', en: 'links main clauses', ar: 'يربط جملاً رئيسية' },
          { de: 'zeigt Negation an', en: 'shows negation', ar: 'يدل على النفي' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q13-1-3',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲉⲡⲓⲇⲏ?', en: 'What does ⲉⲡⲓⲇⲏ mean?', ar: 'ماذا يعني ⲉⲡⲓⲇⲏ؟' },
        options: [
          { de: 'weil/da/nachdem', en: 'since/after/because', ar: 'لأن/بعد أن' },
          { de: 'aber', en: 'but', ar: 'لكن' },
          { de: 'und', en: 'and', ar: 'و' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q13-2': {
    id: 'q13-2',
    lessonId: 'm13-l2',
    title: { de: 'Quiz: Bedingungssätze', en: 'Quiz: Conditional Clauses', ar: 'اختبار: الجمل الشرطية' },
    passScore: 70,
    questions: [
      {
        id: 'q13-2-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲉⲓϣⲁⲛ?', en: 'What does ⲉⲓϣⲁⲛ mean?', ar: 'ماذا يعني ⲉⲓϣⲁⲛ؟' },
        options: [
          { de: 'wenn', en: 'if', ar: 'إذا' },
          { de: 'nachdem', en: 'after', ar: 'بعد' },
          { de: 'weil', en: 'because', ar: 'لأن' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q13-2-2',
        type: 'multiple-choice',
        questionText: { de: 'Wie negiert man eine Bedingung?', en: 'How do you negate a condition?', ar: 'كيف تنفي الشرط؟' },
        options: [
          { de: 'ⲉⲓϣⲁⲛ ... ⲟⲩⲇⲉ', en: 'ⲉⲓϣⲁⲛ ... ⲟⲩⲇⲉ', ar: 'ⲉⲓϣⲁⲛ ... ⲟⲩⲇⲉ' },
          { de: 'ⲉⲓϣⲁⲛ ... ⲁⲛ', en: 'ⲉⲓϣⲁⲛ ... ⲁⲛ', ar: 'ⲉⲓϣⲁⲛ ... ⲁⲛ' },
          { de: 'ⲙ̀ⲙⲟⲛ ⲉϥ', en: 'ⲙ̀ⲙⲟⲛ ⲉϥ', ar: 'ⲙ̀ⲙⲟⲛ ⲉϥ' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q13-3': {
    id: 'q13-3',
    lessonId: 'm13-l3',
    title: { de: 'Quiz: Temporalsätze', en: 'Quiz: Temporal Clauses', ar: 'اختبار: الجمل الزمنية' },
    passScore: 70,
    questions: [
      {
        id: 'q13-3-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲉⲡⲓⲇⲏ temporally?', en: 'What does ⲉⲡⲓⲇⲏ mean temporally?', ar: 'ماذا يعني ⲉⲡⲓⲇⲏ زمنياً؟' },
        options: [
          { de: 'nachdem, da', en: 'after, since', ar: 'بعد أن/بما أن' },
          { de: 'wenn', en: 'if', ar: 'إذا' },
          { de: 'bevor', en: 'before', ar: 'قبل' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q13-3-2',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet ⲙ̀ⲙⲟⲛ ⲉϥ?', en: 'What does ⲙ̀ⲙⲟⲛ ⲉϥ mean?', ar: 'ماذا يعني ⲙ̀ⲙⲟⲛ ⲉϥ؟' },
        options: [
          { de: 'bevor', en: 'before', ar: 'قبل أن' },
          { de: 'nachdem', en: 'after', ar: 'بعد' },
          { de: 'wenn', en: 'if', ar: 'إذا' }
        ],
        correctAnswerIndex: 0
      }
    ]
  }
};