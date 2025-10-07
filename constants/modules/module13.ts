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
        spiritual: {
          bibleVerse: { de: '„Alle Dinge aber sollen anständig und in Ordnung geschehen.“', en: '"Let all things be done decently and in order."', ar: '«لِيَكُنْ كُلُّ شَيْءٍ بِلِيَاقَةٍ وَبِحَسَبِ التَّرْتِيبِ.»' },
          bibleReference: { de: '1Kor 14,40 (SCH2000)', en: '1 Cor 14:40', ar: '١ كورنثوس ١٤:٤٠' },
          fatherQuote: {
            de: '„Die Kirche, obgleich über die ganze Welt zerstreut, bewahrt die eine Verkündigung.“',
            en: '“The Church, though dispersed throughout the world, carefully preserves the one preaching.”',
            ar: '«الكنيسة رغم انتشارها في العالم تحفظ الكرازة الواحدة.»'
          },
          fatherReference: {
            de: 'Irenäus, Adv. haer. zitiert bei Bercot, Evangelism, 1.330–331',
            en: 'Irenaeus, Against Heresies, cited in Bercot, Evangelism, 1.330–331',
            ar: 'إيريناوس، ضد الهرطقات، كما في بيركوت، التبشير، 1.330–331'
          }
        }
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
        spiritual: {
          bibleVerse: { de: '„Selig sind die Friedfertigen.“', en: '"Blessed are the peacemakers."', ar: '«طُوبَى لِصانِعِي السَّلامِ.»' },
          bibleReference: { de: 'Mt 5,9 (SCH2000)', en: 'Mt 5:9', ar: 'متى ٥:٩' }
        }
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
  }
};