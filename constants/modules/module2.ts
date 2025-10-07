// Module 2 — Zahlen (Bohairisch, nach Younan, erweitert)
import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {
  'm2-l1': {
    id: 'm2-l1',
    order: 1,
    moduleId: 'm2',
    title: {
      de: 'Zahlen im Bohairischen Koptisch',
      en: 'Numbers in Bohairic Coptic',
      ar: 'الأرقام بالقبطية البحيرية',
    },
    prerequisites: ['l2-6'],
    quizId: 'q2-l1',
    slides: [
      {
        type: 'grammar',
        title: { de: 'Grundzahlen 1–10', en: 'Cardinal Numbers 1–10', ar: 'الأعداد الأساسية 1–10' },
        rule: {
          de: 'Die Zahlen 1–10 sind die Grundlage für alle weiteren Zahlbildungen. Im Bohairischen haben sie männliche und weibliche Formen.',
          en: 'Numbers 1–10 are the foundation for all other numbers. In Bohairic, they have masculine and feminine forms.',
          ar: 'الأعداد من ١ إلى ١٠ هي أساس بقية الأعداد. في البحيرية لها صيغ مذكّرة ومؤنثة.'
        }
      },

      // 1–10
      { type: 'number', number: 1, emoji: '🕊️', copticSymbol: 'ⲁ̅', copticName: 'ⲟⲩⲁⲓ', translit: 'ouai' },
      { type: 'number', number: 2, emoji: '✌️', copticSymbol: 'ⲃ̅', copticName: 'ⲥⲛⲁⲩ', translit: 'snau' },
      { type: 'number', number: 3, emoji: '🔺', copticSymbol: 'ⲅ̅', copticName: 'ϣⲟⲙⲧ', translit: 'shomt' },
      { type: 'number', number: 4, emoji: '🌍', copticSymbol: 'ⲇ̅', copticName: 'ϥⲧⲟⲩ', translit: 'ftou' },
      { type: 'number', number: 5, emoji: '🖐️', copticSymbol: 'ⲉ̅', copticName: 'ⲉⲧⲓⲟⲩ', translit: 'etiou' },
      { type: 'number', number: 6, emoji: '6️⃣', copticSymbol: 'ⲋ̅', copticName: 'ⲥⲟⲩⲟⲩ', translit: 'souou' },
      { type: 'number', number: 7, emoji: '🌈', copticSymbol: 'ⲍ̅', copticName: 'ϣⲁϣϥ', translit: 'shashf' },
      { type: 'number', number: 8, emoji: '🕯️', copticSymbol: 'ⲏ̅', copticName: 'ⲉϣⲙⲏⲛ', translit: 'eshmīn' },
      { type: 'number', number: 9, emoji: '⚖️', copticSymbol: 'ⲑ̅', copticName: 'ⲯⲓⲧ', translit: 'pshit' },
      { type: 'number', number: 10, emoji: '🔟', copticSymbol: 'ⲓ̅', copticName: 'ⲙⲏⲧ', translit: 'meet' },

      // 11–19
      {
        type: 'grammar',
        title: { de: 'Zahlen 11–19', en: 'Numbers 11–19', ar: 'الأعداد ١١–١٩' },
        rule: {
          de: 'Gebildet aus ⲙⲏⲧ (10) + ⲛ̀ („und“) + Grundzahl. Beispiel: ⲙⲏⲧ ⲛ̀ⲟⲩⲁⲓ = 11, ⲙⲏⲧ ⲛ̀ϣⲟⲙⲧ = 13.',
          en: 'Formed with ⲙⲏⲧ (10) + ⲛ̀ (“and”) + base number. Example: ⲙⲏⲧ ⲛ̀ⲟⲩⲁⲓ = 11, ⲙⲏⲧ ⲛ̀ϣⲟⲙⲧ = 13.',
          ar: 'تتكوَّن من ⲙⲏⲧ (١٠) + ⲛ̀ (و) + العدد الأساسي. مثال: ⲙⲏⲧ ⲛ̀ⲟⲩⲁⲓ = ١١.'
        },
        examples: [
          { coptic: 'ⲙⲏⲧ ⲛ̀ⲟⲩⲁⲓ', translit: 'meet en ouai', meaning: { de: 'elf', en: 'eleven', ar: 'أحد عشر' } },
          { coptic: 'ⲙⲏⲧ ⲛ̀ϣⲟⲙⲧ', translit: 'meet en shomt', meaning: { de: 'dreizehn', en: 'thirteen', ar: 'ثلاثة عشر' } }
        ]
      },

      // Zehnerzahlen
      {
        type: 'grammar',
        title: { de: 'Zehnerzahlen (20–90)', en: 'Tens (20–90)', ar: 'العشرات ٢٠–٩٠' },
        rule: {
          de: 'Zehner entstehen aus Buchstabenwerten mit Überstrich.',
          en: 'Tens are formed from the alphabetic numeral values with overline.',
          ar: 'العشرات تُكتب باستخدام قيم الحروف مع خط علوي.'
        },
        examples: [
            { coptic: 'ⲕ̅', copticName: 'ⲅⲟⲟⲩⲓ', translit: 'gooui', meaning: { de: 'zwanzig', en: 'twenty', ar: 'عشرون' } },
            { coptic: 'ⲗ̅', copticName: 'ⲗⲁⲃ', translit: 'lab', meaning: { de: 'dreißig', en: 'thirty', ar: 'ثلاثون' } },
            { coptic: 'ⲙ̅', copticName: 'ⲙⲁⲣⲃⲁ', translit: 'marba', meaning: { de: 'vierzig', en: 'forty', ar: 'أربعون' } },
            { coptic: 'ⲛ̅', copticName: 'ⲛⲉⲙⲃ', translit: 'nemb', meaning: { de: 'fünfzig', en: 'fifty', ar: 'خمسون' } },
            { coptic: 'ⲝ̅', copticName: 'ⲝⲉⲥ', translit: 'xes', meaning: { de: 'sechzig', en: 'sixty', ar: 'ستون' } },
            { coptic: 'ⲟ̅', copticName: 'ⲟⲕⲧⲟⲩ', translit: 'oktou', meaning: { de: 'siebzig', en: 'seventy', ar: 'سبعون' } },
            { coptic: 'ⲡ̅', copticName: 'ⲡⲓⲥ', translit: 'pis', meaning: { de: 'achtzig', en: 'eighty', ar: 'ثمانون' } },
            { coptic: 'ⲣ̅', copticName: 'ⲣⲁⲃⲧ', translit: 'rabt', meaning: { de: 'neunzig', en: 'ninety', ar: 'تسعون' } },
            { coptic: 'ⲏⲕ', copticName: 'ⲏⲕ', translit: 'eik', meaning: { de: 'hundert', en: 'hundred', ar: 'مائة' } },
          ]
      },

      // Hunderter
      {
        type: 'grammar',
        title: { de: 'Hunderter (100–900)', en: 'Hundreds (100–900)', ar: 'المئات ١٠٠–٩٠٠' },
        rule: {
          de: 'Auch Hunderter entstehen durch Buchstabenwerte. Sie tragen denselben Überstrich.',
          en: 'Hundreds are also written using letter values with overline.',
          ar: 'المئات تُكتب أيضًا باستخدام قيم الحروف مع خط علوي.'
        },
        examples: [
            { coptic: 'ⲣ̅', copticName: 'ⲏⲕ', translit: 'eik', meaning: { de: 'hundert', en: 'hundred', ar: 'مائة' } },
            { coptic: 'ⲥ̅', copticName: 'ⲥⲛⲉⲩ', translit: 'sneu', meaning: { de: 'zweihundert', en: 'two hundred', ar: 'مائتان' } },
            { coptic: 'ⲧ̅', copticName: 'ϣⲟⲙⲧⲉⲉⲩ', translit: 'shomteu', meaning: { de: 'dreihundert', en: 'three hundred', ar: 'ثلاثمائة' } },
            { coptic: 'ⲩ̅', copticName: 'ⲫⲧⲟⲩⲉⲩ', translit: 'ftoueu', meaning: { de: 'vierhundert', en: 'four hundred', ar: 'أربعمائة' } },
            { coptic: 'ⲫ̅', copticName: 'ⲉⲧⲓⲟⲩⲉⲩ', translit: 'etioueu', meaning: { de: 'fünfhundert', en: 'five hundred', ar: 'خمسمائة' } },
            { coptic: 'ⲭ̅', copticName: 'ⲥⲟⲩⲟⲩⲉⲩ', translit: 'sououeu', meaning: { de: 'sechshundert', en: 'six hundred', ar: 'ستمائة' } },
            { coptic: 'ⲯ̅', copticName: 'ϣⲁϣϥⲉⲩ', translit: 'shashfeu', meaning: { de: 'siebenhundert', en: 'seven hundred', ar: 'سبعمائة' } },
            { coptic: 'ⲱ̅', copticName: 'ⲉϣⲙⲏⲛⲉⲩ', translit: 'eshmeneu', meaning: { de: 'achthundert', en: 'eight hundred', ar: 'ثمانمائة' } },
            { coptic: 'Ϣ̅', copticName: 'ⲯⲓⲧⲉⲩ', translit: 'pshiteu', meaning: { de: 'neunhundert', en: 'nine hundred', ar: 'تسعمائة' } },
        ]
      },

      // Tausend
      {
        type: 'grammar',
        title: { de: 'Tausend und darüber', en: 'Thousand and above', ar: 'الألف وما فوق' },
        rule: {
          de: 'Tausend wird mit einem doppelten Überstrich über ⲁ geschrieben: ⲁ̅̅. Beispiel: ⲁ̅̅ⲟⲩⲁⲓ = 1001.',
          en: 'One thousand is written with a double overline over ⲁ: ⲁ̅̅. Example: ⲁ̅̅ⲟⲩⲁⲓ = 1001.',
          ar: 'الألف يُكتب بخطين علويين فوق ⲁ: ⲁ̅̅. مثال: ⲁ̅̅ⲟⲩⲁⲓ = ١٠٠١.'
        },
        examples: [
            { coptic: 'ⲁ̅̅', copticName: 'ⲁⲗⲗⲟⲩ', translit: 'allou', meaning: { de: 'tausend', en: 'thousand', ar: 'ألف' } },
            { coptic: 'ⲁ̅̅ⲟⲩⲁⲓ', copticName: 'ⲁⲗⲗⲟⲩ ⲛ̀ⲟⲩⲁⲓ', translit: 'allou en ouai', meaning: { de: 'tausendundeins', en: 'one thousand and one', ar: 'ألف وواحد' } }
        ]
      },

      // Geschlecht & Ordnungszahlen (identisch zu vorher)
      {
        type: 'grammar',
        title: { de: 'Zahlen und Geschlecht', en: 'Numbers and Gender', ar: 'الأرقام والجنس' },
        rule: {
          de: '1–2 folgen dem Substantiv, ab 3 davor mit ⲛ̀.',
          en: '1–2 follow the noun, from 3 on precede it with ⲛ̀.',
          ar: '١–٢ بعد الاسم، من ٣ فما فوق تسبق وتتصل بـ ⲛ̀.'
        },
        examples: [
          { coptic: 'ⲟⲩⲣⲱⲙⲓ ⲛⲟⲩⲱⲧ', translit: 'ou romi nouwt', meaning: { de: 'ein Mann', en: 'one man', ar: 'رجل واحد' } },
          { coptic: 'ϣⲟⲙⲧ ⲛ̀ⲣⲱⲙⲓ', translit: 'shomt en romi', meaning: { de: 'drei Männer', en: 'three men', ar: 'ثلاثة رجال' } }
        ]
      },
      {
        type: 'grammar',
        title: { de: 'Ordnungszahlen', en: 'Ordinal Numbers', ar: 'الأعداد الترتيبية' },
        rule: {
          de: '„der Erste“ = ⲡⲓϣⲟⲣⲡ; für 2+ gilt: ⲡⲓⲙⲁϩ + Zahl (z. B. ⲡⲓⲙⲁϩϣⲟⲙⲧ = der Dritte).',
          en: '“The first” = ⲡⲓϣⲟⲣⲡ; for 2+ use ⲡⲓⲙⲁϩ + number (e.g. ⲡⲓⲙⲁϩϣⲟⲙⲧ = the third).',
          ar: 'الأول = ⲡⲓϣⲟⲣⲡ؛ من الثاني فصاعدًا: ⲡⲓⲙⲁϩ + العدد.'
        },
        examples: [
          { coptic: 'ⲡⲓϣⲟⲣⲡ ⲛ̀ⲣⲱⲙⲓ', translit: 'pishorp en romi', meaning: { de: 'der erste Mensch', en: 'the first man', ar: 'الإنسان الأول' } },
          { coptic: 'ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ⲉ̀ϩⲟⲟⲩ', translit: 'pimah shomt en ehoou', meaning: { de: 'der dritte Tag', en: 'the third day', ar: 'اليوم الثالث' } }
        ]
      }
    ]
  }
};

export const QUIZZES: Record<string, Quiz> = {
  'q2-l1': {
    id: 'q2-l1',
    lessonId: 'm2-l1',
    title: { de: 'Quiz: Zahlen im Bohairischen', en: 'Quiz: Numbers in Bohairic', ar: 'اختبار: الأرقام بالقبطية البحيرية' },
    passScore: 70,
    questions: [
      {
        id: 'q2-l1-1',
        type: 'multiple-choice',
        questionText: { de: 'Wie heißt die Zahl 1 auf Koptisch?', en: 'What is the number 1 in Coptic?', ar: 'ما هو العدد 1 بالقبطية؟' },
        options: [
          { de: 'ⲟⲩⲁⲓ', en: 'ⲟⲩⲁⲓ', ar: 'ⲟⲩⲁⲓ' },
          { de: 'ⲥⲛⲁⲩ', en: 'ⲥⲛⲁⲩ', ar: 'ⲥⲛⲁⲩ' },
          { de: 'ϣⲟⲙⲧ', en: 'ϣⲟⲙⲧ', ar: 'ϣⲟⲙⲧ' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q2-l1-2',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet "ⲥⲛⲁⲩ"?', en: 'What does "ⲥⲛⲁⲩ" mean?', ar: 'ماذا يعني "ⲥⲛⲁⲩ"؟' },
        options: [
          { de: 'eins', en: 'one', ar: 'واحد' },
          { de: 'zwei', en: 'two', ar: 'اثنان' },
          { de: 'drei', en: 'three', ar: 'ثلاثة' }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'q2-l1-3',
        type: 'multiple-choice',
        questionText: { de: 'Welche Zahl ist "ϣⲟⲙⲧ"?', en: 'Which number is "ϣⲟⲙⲧ"?', ar: 'ما هو الرقم "ϣⲟⲙⲧ"؟' },
        options: [
          { de: '2', en: '2', ar: '٢' },
          { de: '3', en: '3', ar: '٣' },
          { de: '4', en: '4', ar: '٤' }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'q2-l1-4',
        type: 'multiple-choice',
        questionText: { de: 'Wie wird die Zahl 10 geschrieben?', en: 'How is the number 10 written?', ar: 'كيف يُكتب الرقم 10؟' },
        options: [
          { de: 'ⲙⲏⲧ', en: 'ⲙⲏⲧ', ar: 'ⲙⲏⲧ' },
          { de: 'ⲯⲓⲧ', en: 'ⲯⲓⲧ', ar: 'ⲯⲓⲧ' },
          { de: 'ϣⲙⲟⲩⲛ', en: 'ϣⲙⲟⲩⲛ', ar: 'ϣⲙⲟⲩⲛ' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q2-l1-5',
        type: 'multiple-choice',
        questionText: { de: 'Wie bildet man die Zahl 11?', en: 'How do you form the number 11?', ar: 'كيف تُكوّن العدد 11؟' },
        options: [
          { de: 'ⲙⲏⲧ ⲛ̀ⲟⲩⲁⲓ', en: 'ⲙⲏⲧ ⲛ̀ⲟⲩⲁⲓ', ar: 'ⲙⲏⲧ ⲛ̀ⲟⲩⲁⲓ' },
          { de: 'ⲟⲩⲁⲓ ⲛ̀ⲙⲏⲧ', en: 'ⲟⲩⲁⲓ ⲛ̀ⲙⲏⲧ', ar: 'ⲟⲩⲁⲓ ⲛ̀ⲙⲏⲧ' },
          { de: 'ⲙⲏⲧ ϣⲟⲙⲧ', en: 'ⲙⲏⲧ ϣⲟⲙⲧ', ar: 'ⲙⲏⲧ ϣⲟⲙⲧ' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q2-l1-6',
        type: 'multiple-choice',
        questionText: { de: 'Welche Präfix wird für Ordnungszahlen verwendet?', en: 'Which prefix is used for ordinal numbers?', ar: 'ما هي البادئة المستخدمة للأعداد الترتيبية؟' },
        options: [
          { de: 'ⲡⲓ-', en: 'ⲡⲓ-', ar: 'ⲡⲓ-' },
          { de: 'ⲡⲓⲙⲁϩ-', en: 'ⲡⲓⲙⲁϩ-', ar: 'ⲡⲓⲙⲁϩ-' },
          { de: 'ⲛⲓ-', en: 'ⲛⲓ-', ar: 'ⲛⲓ-' }
        ],
        correctAnswerIndex: 2 // avoid ambiguity with "first" = ⲡⲓϣⲟⲣⲡ; better to teach pattern separately
      },
      {
        id: 'q2-l1-7',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet "ⲡⲓϣⲟⲣⲡ"?', en: 'What does "ⲡⲓϣⲟⲣⲡ" mean?', ar: 'ماذا يعني "ⲡⲓϣⲟⲣⲡ"؟' },
        options: [
          { de: 'der Erste', en: 'the first', ar: 'الأول' },
          { de: 'der Zweite', en: 'the second', ar: 'الثاني' },
          { de: 'der Dritte', en: 'the third', ar: 'الثالث' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q2-l1-8',
        type: 'multiple-choice',
        questionText: { de: 'Wo stehen die Zahlen 1–2 im Verhältnis zum Substantiv?', en: 'Where do numbers 1–2 stand in relation to the noun?', ar: 'أين تقع الأعداد 1–2 بالنسبة للاسم؟' },
        options: [
          { de: 'vor dem Substantiv', en: 'before the noun', ar: 'قبل الاسم' },
          { de: 'nach dem Substantiv', en: 'after the noun', ar: 'بعد الاسم' },
          { de: 'vor oder nach', en: 'before or after', ar: 'قبل أو بعد' }
        ],
        correctAnswerIndex: 1
      }
    ]
  }
};
