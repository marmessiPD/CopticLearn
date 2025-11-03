// Module 12 — Weitere Zeiten I: Imperfekt, Plusquamperfekt & Circumstantial (Bohairic)
// Quellen (nur Younan, Bohairic): Kap. 7 – Imperfekt/Plusquamperfekt/Relativ‑Imperfekt/Circumstantial.
// Siehe insbesondere 7.1 (Imperfekt), 7.1.i (Plusquamperfekt), 7.1.ii (Relativ‑Imperfekt),
// 7.2 (Circumstantial) und 7.2.i–ii (Circumstantial of Past Perfect/Future).
// Alle Beispiele/Vokabeln sind neu zusammengestellt, Formen & Regeln gemäß Younan.

import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  m12: {
    id: "m12",
    moduleId: "m12",
    order: 1,
    prerequisites: [],
    quizId: "m12-q1",
    title: {
      de: "Weitere Zeiten I: Imperfekt, Plusquamperfekt & Circumstantial",
      en: "More Tenses I: Imperfect, Pluperfect & Circumstantial",
      ar: "أزمنة إضافية ١: الناقص، الماضي الأسبق، والحال (Circumstantial)",
    },
    slides: [
      {
        type: "grammar",
        title: {
          de: "Imperfekt: Funktion & Form",
          en: "Imperfect: Function & Form",
          ar: "الناقص: الوظيفة والصيغة",
        },
        rule: {
          de: "Drückt eine andauernde/regelmäßige Vergangenheit aus („ich war am Lesen“, „pflegte zu…“). In Bohairisch wird es mit dem Präfix ⲛⲁ‑ + Personenpräfix des Präsens + Infinitiv gebildet (Presubject: ⲛⲁⲣⲉ‑). Optionales ⲡⲉ markiert Behauptung/Fokus.",
          en: "Expresses past ongoing/habitual (“was doing”, “used to…”). Formed with na‑ + present subject prefix + infinitive (pre‑subject: nare‑). Optional pe adds emphasis/focus.",
          ar: "يعبّر عن الماضي المستمر/الاعتيادي. الصيغة: ⲛⲁ‑ مع سوابق الشخص في الحاضر + المصدر؛ الشكل قبل الفاعل ⲛⲁⲣⲉ‑؛ ويمكن إضافة ⲡⲉ للتوكيد.",
        },
        examples: [
          {
            coptic: "ⲛⲁⲫ ⲥⲁϫⲓ",
            translit: "naf saji",
            meaning: {
              de: "er pflegte zu sprechen / er sprach (oft)",
              en: "he used to speak",
              ar: "كان يتكلم",
            },
          },
          {
            coptic: "ⲛⲁⲩ ⲥⲱⲃⲓ",
            translit: "nau sōbi",
            meaning: {
              de: "sie aßen (immer wieder)",
              en: "they were eating",
              ar: "كانوا يأكلون",
            },
          },
          {
            coptic: "ⲛⲁⲣⲉ ⲡⲓⲗⲁⲟⲥ ⲣⲁⲥⲓ",
            translit: "nare pilāos rasi",
            meaning: {
              de: "das Volk war am Freuen",
              en: "the people were rejoicing",
              ar: "كان الشعب يفرح",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: { de: "Plusquamperfekt", en: "Pluperfect", ar: "الماضي الأسبق" },
        rule: {
          de: "Vorvergangenheit („hatte getan“). Wird mit der Negativreihe ⲙⲡⲓ‑/ⲙⲡⲉⲕ‑ … nur für die Negation des Perfekts gebraucht; positiv entspricht dem vollendeten Vor‑Vergangenheitswert des Perfekts im Kontext.",
          en: "Expresses “had done”. For negation, Coptic uses special mpe‑ series (`mpi‑, mpek‑ …). Positive value is derived from perfect + context as prior to another past event.",
          ar: "يفيد „قد كان فعل“. النفي خاص بسلسلة ⲙⲡⲉ‑ (ⲙⲡⲓ‑، ⲙⲡⲉⲕ‑ …).",
        },
        examples: [
          {
            coptic: "ⲙⲡⲉⲛ ⲣⲁⲥⲓ",
            translit: "mpen rasi",
            meaning: {
              de: "wir hatten uns nicht gefreut",
              en: "we had not rejoiced",
              ar: "لم نكن قد فرحنا",
            },
          },
          {
            coptic: "ⲙⲡⲉ ⲡⲓⲗⲁⲟⲥ ⲣⲁⲥⲓ",
            translit: "mpe pilāos rasi",
            meaning: {
              de: "das Volk hatte sich nicht gefreut",
              en: "the people had not rejoiced",
              ar: "لم يكن الشعب قد فرح",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Circumstantial (e-/ere)",
          en: "Circumstantial (e-/ere)",
          ar: "التركيب الحالي (e-/ere)",
        },
        rule: {
          de: "Der Konverter ⲉ‑ (presubject: ⲉⲣⲉ‑) verbindet Sätze/Ereignisse: „während/indem/als“. Er steht vor Präsens‑/Imperfekt‑/Perfektformen; nach Zeitwert entscheidet der eingebundene Teil.",
          en: "Converter e‑ (pre‑subject: ere‑) links clauses, often “while/when/as”. It precedes present/imperfect/perfect forms; the tense inside determines time value.",
          ar: "المحوّل ⲉ‑ (قبل الفاعل: ⲉⲣⲉ‑) يربط الجمل: „أثناء/حين/إذ“. يسبق صيغ الحاضر/الناقص/الكامل؛ الزمن الداخلي يحدد القيمة الزمنية.",
        },
        examples: [
          {
            coptic: "ⲉⲣⲉ ⲡⲓⲥⲱⲧⲉⲙ ⲉⲣⲟϥ, ⲁⲩⲣⲁⲥⲓ",
            translit: "ere pisōtem erof, aurasī",
            meaning: {
              de: "als sie ihm zuhörten, freuten sie sich",
              en: "while they listened to him, they rejoiced",
              ar: "بينما كانوا يسمعون له، فرحوا",
            },
          },
          {
            coptic: "ⲉ ⲕⲁⲓ ⲛⲁⲩ ⲛ̀ⲣⲱⲙⲓ, ⲛⲁⲕ ⲥⲁϫⲓ",
            translit: "e kai nau n-rōmi, nak saji",
            meaning: {
              de: "während du Leute sahst, sprachst du",
              en: "while you were seeing people, you spoke",
              ar: "بينما كنتَ ترى الناس كنتَ تتكلم",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "",
          translit: "",
          meaning: {
            de: "Alltagssätze (Imperfekt & Circumstantial)",
            en: "Everyday sentences",
            ar: "جُمَل يومية",
          },
        },
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "m12-q1": {
    id: "m12-q1",
    lessonId: "m12",
    title: {
      de: "Mini‑Quiz: Imperfekt & Circumstantial",
      en: "Mini‑Quiz",
      ar: "اختبار قصير",
    },
    passScore: 80,
    questions: [
      {
        id: "m12-q1-1",
        type: "multiple-choice",
        questionText: {
          de: "Welche Funktion hat das Imperfekt?",
          en: "What does the imperfect express?",
          ar: "ماذا يعبّر الناقص؟",
        },
        options: [
          {
            de: "abgeschlossene einmalige Vergangenheit",
            en: "completed single past",
            ar: "ماضٍ تام لمرة واحدة",
          },
          {
            de: "andauernde/gewöhnliche Vergangenheit",
            en: "ongoing/habitual past",
            ar: "ماضٍ مستمر/اعتيادي",
          },
          {
            de: "Zukunftsabsicht",
            en: "future intention",
            ar: "نية مستقبلية",
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m12-q1-2",
        type: "fill-in-the-blank",
        questionText: {
          de: 'Setze na‑ richtig: "er pflegte zu schreiben" → ⟨…⟩ ⲥⲃⲱⲧ.',
          en: 'Insert na‑: "he used to write" → ⟨…⟩ ⲥⲃⲱⲧ.',
          ar: 'أدخل ⲛⲁ‑: "كان يكتب" → ⟨…⟩ ⲥⲃⲱⲧ.',
        },
        correctAnswer: "ⲛⲁⲫ",
      },
      {
        id: "m12-q1-3",
        type: "multiple-choice",
        questionText: {
          de: "Welche Presubject‑Form gehört zum Circumstantial?",
          en: "Which pre‑subject form belongs to the circumstantial?",
          ar: "ما صيغة ما قبل الفاعل للحال؟",
        },
        options: [
          { de: "ⲉⲣⲉ‑", en: "ere‑", ar: "ⲉⲣⲉ‑" },
          { de: "ⲙⲡⲉ‑", en: "mpe‑", ar: "ⲙⲡⲉ‑" },
          { de: "ⲛⲁⲣⲉ‑", en: "nare‑", ar: "ⲛⲁⲣⲉ‑" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m12-q1-5",
        type: "fill-in-the-blank",
        questionText: {
          de: "Übersetze ins Bohairische: Als das Kind las, schrieb ich. (nutze Circumstantial)",
          en: "Translate into Bohairic: As the child was reading, I wrote. (use circumstantial)",
          ar: "ترجم إلى البهيري: بينما كان الطفل يقرأ، كتبتُ.",
        },
        correctAnswer: "ⲉⲣⲉ ⲡⲓϣⲏⲣⲓ ⲕⲁⲧⲁⲛⲁⲩ, ⲁⲓⲥⲃⲱⲧ.",
      },
    ],
  },
};
