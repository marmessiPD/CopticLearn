// Module 9 — Vergangenheit: Perfekt & Relatives Perfekt (nach Younan)
// Alle Formen & Beispiele: Sameh Younan, *So You Want to Learn Coptic? A Guide to Bohairic Grammar*.
import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m9-l1": {
    id: "m9-l1",
    order: 1,
    moduleId: "m9",
    title: {
      de: "Perfekt (1. Vergangenheit): Formen & Gebrauch",
      en: "Perfect Past (First Past): Forms & Use",
      ar: "الماضي التام: الصيغ والاستخدام",
    },
    prerequisites: ["m7-l1", "m8-l2"],
    quizId: "q9-1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Formen des Perfekts",
          en: "Perfect Past Forms",
          ar: "صيغ الماضي التام",
        },
        rule: {
          de: "Das Perfekt (1. Vergangenheitsreihe) wird mit Präfixen vor dem Infinitiv gebildet: ai-, ak-, are-, af-, ac-, an-, areten-, au-. Die Vorsubjektform ist »a«. Negation mit »ⲙⲡⲉ-« vor dem Verb.",
          en: "The perfect (first past) uses prefixes before the infinitive: ai-, ak-, are-, af-, ac-, an-, areten-, au-. The pre‑subject form is 'a'. Negation is with 'ⲙⲡⲉ-' before the verb.",
          ar: "يُبنى الماضي التام ببادئات قبل المصدر: ai-, ak-, are-, af-, ac-, an-, areten-, au-. صيغة ما قبل الفاعل هي «a». النفي بـ «ⲙⲡⲉ-» قبل الفعل.",
        },
        examples: [
          {
            coptic: "ⲁⲓⲙⲟⲥⲓ",
            translit: "ai-mosi",
            meaning: {
              de: "ich ging/ging spazieren",
              en: "I walked",
              ar: "سِرتُ",
            },
          },
          {
            coptic: "ⲁⲫⲛⲁⲩ",
            translit: "af-nau",
            meaning: { de: "er sah", en: "he saw", ar: "هو رأى" },
          },
          {
            coptic: "ⲙⲡⲉⲣⲥⲱⲧⲙ",
            translit: "mpe-rsotm",
            meaning: {
              de: "du (m.) hörtest nicht",
              en: "you (m.) did not hear",
              ar: "لم تَسمع",
            },
          },
          {
            coptic: "ⲁ ⲡⲓⲣⲱⲙⲓ ⲛⲁⲩ ⲉⲡⲓⲥⲱⲛⲓ",
            translit: "a pirōmi nau episoni",
            meaning: {
              de: "der Mann sah den Jungen",
              en: "the man saw the boy",
              ar: "رأى الرجلُ الصبيَّ",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲁⲛⲉⲛⲥⲱⲧⲙ ⲉⲡⲓⲃⲉⲛⲓ",
          translit: "anen-sōtm e-piveni",
          meaning: {
            de: "wir hörten die Trompete",
            en: "we heard the trumpet",
            ar: "سَمِعْنَا البوق",
          },
        },
      },
      {
        type: "sentence",
        item: {
          text: "ⲙⲡⲁⲩⲙⲟⲩ ⲛⲁⲛ",
          translit: "mpau-mou nan",
          meaning: {
            de: "sie starben nicht vor uns",
            en: "they did not die before us",
            ar: "لم يموتوا أمامنا",
          },
        },
      },
    ],
  },

  "m9-l2": {
    id: "m9-l2",
    order: 2,
    moduleId: "m9",
    title: {
      de: "Relatives Perfekt & Vorsubjektform",
      en: "Relative Perfect & Pre‑subject Form",
      ar: "الماضي النسبي وصيغة ما قبل الفاعل",
    },
    prerequisites: ["m9-l1"],
    quizId: "q9-2",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Relativkonverter + Perfekt",
          en: "Relative Converter + Perfect",
          ar: "أداة الموصول + الماضي",
        },
        rule: {
          de: "Mit dem Relativkonverter ⲉⲧⲉ-/ⲉⲣⲉ- + Perfekt wird ein Relativsatz gebildet: etai-, etak-, etare-, etaf-, etac-, etan-, etareten-, etau-. Die Negation: ⲉⲧⲉ.ⲙⲡⲉ- + Verb.",
          en: "Relative converter ⲉⲧⲉ-/ⲉⲣⲉ- + perfect yields a relative clause: etai-, etak-, etare-, etaf-, etac-, etan-, etareten-, etau-. Negation: ⲉⲧⲉ.ⲙⲡⲉ- + verb.",
          ar: "تكوين جملة موصولة بـ ⲉⲧⲉ-/ⲉⲣⲉ- + الماضي: etai-, etak-, etare-, etaf-, etac-, etan-, etareten-, etau-. النفي: ⲉⲧⲉ.ⲙⲡⲉ- + الفعل.",
        },
        examples: [
          {
            coptic: "ⲡⲓⲣⲱⲙⲓ ⲉⲧⲁϥⲟⲩⲱⲛ ⲙⲡⲓⲧⲟⲧⲥ",
            translit: "pirōmi etaf-ouōn mpitots",
            meaning: {
              de: "der Mann, der die Tür öffnete",
              en: "the man who opened the door",
              ar: "الرجل الذي فتح الباب",
            },
          },
          {
            coptic: "ⲡⲓⲃⲏⲑⲉ ⲉⲧⲉ.ⲙⲡⲉⲥⲱⲧⲙ ⲛ̀ⲛⲓⲕⲁϩⲓ",
            translit: "pibēthe ete.mpe-sōtm nnikaḥi",
            meaning: {
              de: "das Haus, das die Dörfer nicht hörten (= in dem man nicht hörte)",
              en: "the house which the villages did not hear",
              ar: "البيت الذي لم تسمعه القرى",
            },
          },
          {
            coptic: "ⲁ ⲡⲓⲛⲟⲩϯ ⲛⲁⲩ ⲉⲧⲁⲟⲩⲱⲛ ⲙⲡⲓⲙⲁ",
            translit: "a pinouti nau etau-ouōn mpima",
            meaning: {
              de: "Gott sah, dass sie den Ort öffneten",
              en: "God saw that they opened the place",
              ar: "رأى الله أنهم فتحوا المكان",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Vorsubjekt‑Stellung",
          en: "Pre‑subject placement",
          ar: "الموقع قبل الفاعل",
        },
        rule: {
          de: "Die Vorsubjektform »ⲁ« (Neg.: »ⲙⲡⲉ«) steht vor dem Subjekt, z. B. in eingebetteten Sätzen oder nach bestimmten Einleitungen.",
          en: "The pre‑subject form 'ⲁ' (neg.: 'ⲙⲡⲉ') precedes the subject, e.g., in embedded clauses or after certain introducers.",
          ar: "صيغة «ⲁ» (النفي «ⲙⲡⲉ») تأتي قبل الفاعل، خصوصًا في الجمل المتضمنة.",
        },
        examples: [
          {
            coptic: "ⲁ ⲡⲓⲥⲁϩ ϫⲱ ⲛⲁⲛ",
            translit: "a pisah jw nan",
            meaning: {
              de: "der Priester sagte zu uns",
              en: "the priest said to us",
              ar: "قال الكاهن لنا",
            },
          },
          {
            coptic: "ⲙⲡⲉ ⲡⲓⲣⲱⲙⲓ ⲥⲱⲧⲙ",
            translit: "mpe pirōmi sōtm",
            meaning: {
              de: "der Mann hörte nicht",
              en: "the man did not hear",
              ar: "لم يسمع الرجل",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲡⲓⲃⲏⲑⲉ ⲉⲧⲁⲫⲛⲁⲩ ⲉⲡⲓⲭⲱⲣⲁ",
          translit: "pibēthe etaf-nau epi-khōra",
          meaning: {
            de: "das Haus, das er im Dorf sah",
            en: "the house he saw in the village",
            ar: "البيت الذي رآه في القرية",
          },
        },
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "q9-1": {
    id: "q9-1",
    lessonId: "m9-l1",
    title: {
      de: "Mini‑Quiz: Perfekt",
      en: "Mini‑quiz: Perfect Past",
      ar: "اختبار: الماضي التام",
    },
    passScore: 80,
    questions: [
      {
        id: "q9-1-1",
        type: "multiple-choice",
        questionText: {
          de: "Wähle die korrekte Perfektform: „er hörte“",
          en: "Choose the correct perfect: 'he heard'",
          ar: "اختر صيغة الماضي: «هو سمع»",
        },
        options: [
          { de: "ⲁⲛⲥⲱⲧⲙ", en: "anen‑sōtm", ar: "ⲁⲛⲥⲱⲧⲙ" },
          { de: "ⲁⲫⲥⲱⲧⲙ", en: "af‑sōtm", ar: "ⲁⲫⲥⲱⲧⲙ" },
          { de: "ⲙⲡⲁⲥⲱⲧⲙ", en: "mpa‑sōtm", ar: "ⲙⲡⲁⲥⲱⲧⲙ" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q9-1-2",
        type: "fill-in-the-blank",
        questionText: {
          de: 'Fülle die Lücke: „wir sahen" ⟶ ⲁ___ⲛⲁⲩ',
          en: "Fill in: 'we saw' → ⲁ___ⲛⲁⲩ",
          ar: "املأ الفراغ: «رأينا» → ⲁ___ⲛⲁⲩ",
        },
        correctAnswer: "ⲛ",
      },
      {
        id: "q9-1-3",
        type: "multiple-choice",
        questionText: {
          de: "Negation: „sie gingen nicht“",
          en: "Negation: 'they did not go'",
          ar: "النفي: «لم يذهبوا»",
        },
        options: [
          { de: "ⲙⲡⲁⲩⲃⲱⲕ", en: "mpau‑bwk", ar: "ⲙⲡⲁⲩⲃⲱⲕ" },
          { de: "ⲙⲡⲉⲩⲃⲱⲕ", en: "mpeu‑bwk", ar: "ⲙⲡⲉⲩⲃⲱⲕ" },
          { de: "ⲛⲁⲩⲃⲱⲕ", en: "nau‑bwk", ar: "ⲛⲁⲩⲃⲱⲕ" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q9-1-4",
        type: "fill-in-the-blank",
        questionText: {
          de: "Bilde: „ich öffnete die Tür“",
          en: "Produce: 'I opened the door'",
          ar: "كوِّن: «فتحتُ الباب»",
        },
        correctAnswer: "ⲁⲓⲟⲩⲱⲛ ⲙⲡⲓⲧⲟⲧⲥ",
      },
    ],
  },
  "q9-2": {
    id: "q9-2",
    lessonId: "m9-l2",
    title: {
      de: "Mini‑Quiz: Relatives Perfekt",
      en: "Mini‑quiz: Relative Perfect",
      ar: "اختبار: الماضي النسبي",
    },
    passScore: 80,
    questions: [
      {
        id: "q9-2-1",
        type: "multiple-choice",
        questionText: {
          de: "Welche Form markiert das relative Perfekt (3. Pers. m. Sg.)?",
          en: "Which marks the relative perfect (3rd m. sg.)?",
          ar: "أي صيغة تدل على الماضي النسبي (مذكر مفرد)؟",
        },
        options: [
          { de: "ⲉⲧⲁϥ‑", en: "etaf‑", ar: "ⲉⲧⲁϥ‑" },
          { de: "ⲁϥ‑", en: "af‑", ar: "ⲁϥ‑" },
          { de: "ⲛⲁϥ‑", en: "naf‑", ar: "ⲛⲁϥ‑" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q9-2-2",
        type: "fill-in-the-blank",
        questionText: {
          de: "Negiere: ⲉⲧⲁⲛⲛⲁⲩ → ⲉⲧⲉ.ⲙⲡⲉ___ⲛⲁⲩ",
          en: "Negate: ⲉⲧⲁⲛⲛⲁⲩ → ⲉⲧⲉ.ⲙⲡⲉ___ⲛⲁⲩ",
          ar: "حوِّل إلى النفي",
        },
        correctAnswer: "ⲛ",
      },
      {
        id: "q9-2-3",
        type: "multiple-choice",
        questionText: {
          de: "Wähle die richtige Vorsubjektform (rel. Perfekt):",
          en: "Choose the correct pre‑subject form (rel. perfect):",
          ar: "اختر صيغة ما قبل الفاعل الصحيحة",
        },
        options: [
          { de: "ⲁ", en: "a", ar: "ⲁ" },
          { de: "ⲉⲧⲁ", en: "eta", ar: "ⲉⲧⲁ" },
          { de: "ⲉⲣⲉ", en: "ere", ar: "ⲉⲣⲉ" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q9-2-4",
        type: "fill-in-the-blank",
        questionText: {
          de: "Übersetze: „das Brot, das du brachtest“",
          en: "Translate: 'the bread that you (m.) brought'",
          ar: "ترجم: «الخبز الذي جلبتَه»",
        },
        correctAnswer: {
          coptic: "ⲡⲓⲟⲩⲱⲓⲕ ⲉⲧⲁⲕⲓⲛⲓ",
          translit: "pi‑ouōik etak‑ini",
        },
      },
      {
        id: "q9-2-5",
        type: "multiple-choice",
        questionText: {
          de: "Welche Negation ist korrekt? „der Mann, der nicht kam“",
          en: "Choose the correct negation: 'the man who did not come'",
          ar: "اختر النفي الصحيح: «الرجل الذي لم يأتِ»",
        },
        options: [
          { de: "ⲡⲓⲣⲱⲙⲓ ⲉⲧⲁⲕⲓ", en: "pirōmi etak‑i", ar: "ⲡⲓⲣⲱⲙⲓ ⲉⲧⲁⲕⲓ" },
          {
            de: "ⲡⲓⲣⲱⲙⲓ ⲉⲧⲉ.ⲙⲡⲉⲕⲓ",
            en: "pirōmi ete.mpe‑k‑i",
            ar: "ⲡⲓⲣⲱⲙⲓ ⲉⲧⲉ.ⲙⲡⲉⲕⲓ",
          },
          { de: "ⲡⲓⲣⲱⲙⲓ ⲁⲕⲓ ⲁⲛ", en: "pirōmi ak‑i an", ar: "ⲡⲓⲣⲱⲙⲓ ⲁⲕⲓ ⲁⲛ" },
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
};
