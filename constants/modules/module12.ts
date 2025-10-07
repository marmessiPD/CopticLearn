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
  }
};
