// Module 11 — Satzverknüpfung & Konjunktiv (nach Younan)
import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m11-l1": {
    id: "m11-l1",
    order: 1,
    moduleId: "m11",
    title: {
      de: "Konjunktionen (1. Position & enklitisch)",
      en: "Conjunctions (first‑position & enclitic)",
      ar: "أدوات الربط: أولية وملحقة",
    },
    prerequisites: ["m4-l2", "m6-l1"],
    quizId: "q11-1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Erste‑Positions‑Konjunktionen",
          en: "First‑position conjunctions",
          ar: "الأدوات في أول الجملة",
        },
        rule: {
          de: "Häufig: ⲟⲩⲟϩ „und“, ⲁⲗⲗⲁ „aber“, ⲧⲟⲧⲉ „dann“, ⲓⲉ „oder“, ἵνα/ⲏⲛⲁ „damit/so dass“, ⲙⲡⲟⲧⲉ „damit nicht“.",
          en: "Common: ouoh 'and', alla 'but', tote 'then', ie 'or', hina 'so that', m/pote 'lest/perhaps'.",
          ar: "أشيعها: ouoh «و»، alla «لكن»، tote «ثم»، ie «أو»، hina «لكي»، m/pote «لئلا/ربما».",
        },
        examples: [
          {
            coptic: "ⲟⲩⲟϩ ⲁϥⲛⲁⲩ ⲟⲩⲟϩ ⲁϥⲥⲱⲧⲙ",
            translit: "ouoh af‑nau, ouoh af‑sōtm",
            meaning: {
              de: "und er sah, und er hörte",
              en: "and he saw, and he heard",
              ar: "وَرَأَى وَسَمِعَ",
            },
          },
          {
            coptic: "ⲁⲗⲗⲁ ⲙⲡⲉϥⲥⲱⲧⲙ",
            translit: "alla mpef‑sōtm",
            meaning: {
              de: "aber er hörte nicht",
              en: "but he did not hear",
              ar: "لكنّه لم يسمع",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Der Konjunktiv (ⲛⲧⲉ‑…)",
          en: "The subjunctive (ⲛⲧⲉ‑…)",
          ar: "صيغة التابع (ⲛⲧⲉ‑…)",
        },
        rule: {
          de: "Der Konjunktiv verbindet zwei Verben: »damit/um zu« oder schlicht »und«. Endungen nach Person: ⲛⲧⲁ‑, ⲛⲧⲉⲕ‑/ⲛⲧⲉ‑, ⲛⲧⲉϥ‑/ⲛⲧⲉⲥ‑, ⲛⲧⲉⲛ‑, ⲛⲧⲉⲧⲉⲛ‑, ⲛⲧⲟⲩ/ⲛⲥⲉ‑. Vor Nomen: ⲛⲧⲉ.",
          en: "Subjunctive links two verbs: 'so that/in order to' or simply 'and'. Person endings: nta‑, ntek‑/nte‑, ntef‑/ntec‑, nten‑, nteten‑, ntou/nce‑. Before a noun: nte.",
          ar: "يربط التابع فعلين: «لكي/حتى» أو «و». صيغ الأشخاص: nta‑, ntek/nte‑, ntef/ntec‑, nten‑, nteten‑, ntou/nce‑. قبل الاسم: nte.",
        },
        examples: [
          {
            coptic: "ⲙⲟⲓ ⲛⲧⲁⲥⲱⲃⲓ",
            translit: "moi nta‑sōbi",
            meaning: {
              de: "gib, damit ich trinke",
              en: "give me so that I drink",
              ar: "أعطني لكي أشرب",
            },
          },
          {
            coptic: "ⲟⲩⲟϩ ⲛⲧⲉϥⲟⲩⲱⲛ",
            translit: "ouoh ntef‑ouōn",
            meaning: {
              de: "und er öffne …",
              en: "and he (should) open …",
              ar: "وأن يفتح...",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Negativer Konjunktiv",
          en: "Negative subjunctive",
          ar: "التابع المنفي",
        },
        rule: {
          de: "Negation durch Einschub von ⲥⲧⲉⲙ zwischen ⲛⲧⲉ‑Form und Verb: ⲛⲧⲉϥⲥⲧⲉⲙⲓ = „dass er nicht kommt“.",
          en: "Negate by inserting ⲥⲧⲉⲙ between the subjunctive and the verb: ntef‑stem‑i = 'that he will not come'.",
          ar: "النفي بإدخال ⲥⲧⲉⲙ بين صيغة التابع والفعل: ntef‑stem‑i «أنه لن يأتي».",
        },
        examples: [
          {
            coptic: "ⲛⲧⲉⲕⲥⲧⲉⲙⲓ",
            translit: "ntek‑stem‑i",
            meaning: {
              de: "أن لا تأتي (مخاطب م.)",
              en: "that you (m.) should not come",
              ar: "ألاّ تأتي",
            },
          },
        ],
      },
    ],
  },

  "m11-l2": {
    id: "m11-l2",
    order: 2,
    moduleId: "m11",
    title: {
      de: "Limitativ (ⲥⲁ + Konjunktiv) & Praxis",
      en: "Limitative (ⲥⲁ + subjunctive) & practice",
      ar: "البنائي المحدِّد (ⲥⲁ + التابع) والتطبيق",
    },
    prerequisites: ["m11-l1"],
    quizId: "q11-2",
    slides: [
      {
        type: "grammar",
        title: { de: "„bis/ solange bis“", en: "‘till / until’", ar: "«حتى»" },
        rule: {
          de: "ⲥⲁ + Konjunktiv = „bis/solange bis“ (kombinierte + verkürzte Form): ⲥⲁⲛⲧⲉⲕ‑ / ⲥⲁⲧⲉⲕ‑, ⲥⲁⲣⲉ‑, ⲥⲁⲛⲧⲉϥ‑ …; Vorsubjekt: ⲥⲁⲛⲧⲉ / ⲥⲁⲧⲉ.",
          en: "sa + subjunctive = 'till/until' (combined & shortened): santek‑ / satek‑, sare‑, santef‑ …; pre‑subject: sante / sate.",
          ar: "ⲥⲁ + التابع = «حتى» (صيغة مركبة ومختصرة): santek-/satek-, sare-, santef-…؛ قبل الفاعل: sante/sate.",
        },
        examples: [
          {
            coptic: "ⲟⲩⲟϩ ⲙⲡⲉϥⲥⲟⲟⲩⲛ ⲥⲁⲧⲉⲥⲙⲓⲥⲓ ⲛ̀ⲡⲓϣⲏⲣⲓ",
            translit: "ouoh mpef‑soun sates‑mīsi n‑pi‑šēri",
            meaning: {
              de: "und er kannte sie nicht, bis sie den Sohn gebar",
              en: "and he did not know her till she gave birth to the son",
              ar: "ولم يعرفها حتى ولدت الابن",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲥⲁⲛⲧⲉⲛⲥⲱⲧⲙ ⲉⲡⲓⲣⲁⲛ ⲛ̀ⲧⲉ ⲡⲓⲛⲟⲩϯ",
          translit: "santen‑sōtm e‑piran nte pinouti",
          meaning: {
            de: "bis wir den Namen Gottes hören",
            en: "till we hear the name of God",
            ar: "حتى نسمع اسم الله",
          },
        },
      },
      {
        type: "sentence",
        item: {
          text: "ⲛⲧⲁⲕⲥⲱⲃⲓ ⲛ̀ⲧⲉⲣⲟⲕ ⲛⲧⲉⲙⲉⲓⲛⲓ",
          translit: "nta‑sōbi nterok nte‑meini",
          meaning: {
            de: "أعطني لكي تبقى",
            en: "Give (so that) you stay",
            ar: "أعطني لكي تبقى",
          },
        },
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "q11-1": {
    id: "q11-1",
    lessonId: "m11-l1",
    title: {
      de: "Mini‑Quiz: Konjunktionen & Konjunktiv",
      en: "Mini‑quiz: Conjunctions & Subjunctive",
      ar: "اختبار: الروابط والتابع",
    },
    passScore: 80,
    questions: [
      {
        id: "q11-1-1",
        type: "multiple-choice",
        questionText: {
          de: "Welche Partikel bedeutet „so dass / damit“?",
          en: "Which particle means ‘so that’?",
          ar: "أي أداة تعني «لكي/حتى»؟",
        },
        options: [
          { de: "ⲟⲩⲟϩ", en: "ouoh", ar: "ⲟⲩⲟϩ" },
          { de: "ⲏⲛⲁ / ἵνα", en: "hina", ar: "ⲏⲛⲁ" },
          { de: "ⲧⲟⲧⲉ", en: "tote", ar: "ⲧⲟⲧⲉ" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q11-1-2",
        type: "fill-in-the-blank",
        questionText: {
          de: 'Fülle: „damit er nicht kommt" → ⲛⲧⲉϥⲥⲧⲉⲙ___',
          en: "Fill: 'that he not come' → ntef‑stem‑___",
          ar: "أكمل: «لكي لا يأتي»",
        },
        correctAnswer: "ⲓ",
      },
      {
        id: "q11-1-4",
        type: "fill-in-the-blank",
        questionText: {
          de: "Forme: „Er sagte, dass er kommen wird“ (Konjunktiv).",
          en: "Produce: 'He said that he will come' (subjunctive).",
          ar: "كوِّن: «قال إنه سيأتي» بصيغة التابع.",
        },
        correctAnswer: "ⲁϥϫⲱ ⲛ̄ⲛⲁⲛ ⲛⲧⲉϥⲓ",
      },
      {
        id: "q11-1-5",
        type: "multiple-choice",
        questionText: {
          de: "Vor Nomen steht …",
          en: "Before a noun, the form is …",
          ar: "قبل الاسم تكون الصيغة …",
        },
        options: [
          { de: "ⲛⲧⲉ", en: "nte", ar: "ⲛⲧⲉ" },
          { de: "ⲛⲧⲁ", en: "nta", ar: "ⲛⲧⲁ" },
          { de: "ⲉⲣⲉ", en: "ere", ar: "ⲉⲣⲉ" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "q11-2": {
    id: "q11-2",
    lessonId: "m11-l2",
    title: {
      de: "Mini‑Quiz: Limitativ",
      en: "Mini‑quiz: Limitative",
      ar: "اختبار: صيغة «حتى»",
    },
    passScore: 80,
    questions: [
      {
        id: "q11-2-1",
        type: "multiple-choice",
        questionText: {
          de: "Welche Kurzform ist korrekt? „bis du kommst“",
          en: "Which short form is correct? 'till you (m.) come'",
          ar: "أي صيغة مختصرة صحيحة: «حتى تأتي»؟",
        },
        options: [
          { de: "ⲥⲁⲧⲉⲕⲓ", en: "satek‑i", ar: "ⲥⲁⲧⲉⲕⲓ" },
          { de: "ⲥⲁⲧⲁⲓ", en: "satai", ar: "ⲥⲁⲧⲁⲓ" },
          { de: "ⲥⲁⲛⲧⲁⲕⲓ", en: "santak‑i", ar: "ⲥⲁⲛⲧⲁⲕⲓ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q11-2-2",
        type: "fill-in-the-blank",
        questionText: {
          de: '„bis wir hören" → ⲥⲁⲛⲧⲉⲛ___',
          en: "'till we hear' → santen___",
          ar: "«حتى نسمع»",
        },
        correctAnswer: "ⲥⲱⲧⲙ",
      },
      {
        id: "q11-2-4",
        type: "fill-in-the-blank",
        questionText: {
          de: "Übersetze: „Warte, bis er spricht.“",
          en: "Translate: 'Wait till he speaks.'",
          ar: "ترجم: «انتظر حتى يتكلم.»",
        },
        correctAnswer: "ⲥⲁⲛⲧⲉϥϫⲱ",
      },
      {
        id: "q11-2-5",
        type: "multiple-choice",
        questionText: {
          de: "Welche Partikel ist KEIN Konjunktor der 1. Position?",
          en: "Which is NOT a first‑position conjunction?",
          ar: "أي أداة ليست من أدوات أول الجملة؟",
        },
        options: [
          { de: "ⲟⲩⲟϩ", en: "ouoh", ar: "ⲟⲩⲟϩ" },
          { de: "ⲁⲗⲗⲁ", en: "alla", ar: "ⲁⲗⲗⲁ" },
          { de: "ⲛⲧⲁ‑", en: "nta‑ (subj.)", ar: "ⲛⲧⲁ‑ (تابع)" },
        ],
        correctAnswerIndex: 2,
      },
    ],
  },
};
