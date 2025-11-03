import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m17-l1": {
    id: "m17-l1",
    order: 1,
    moduleId: "m17",
    title: {
      de: "Zweite Tempusreihe (Präsens, Futur, Vergangenheit)",
      en: "Second tense series (present, future, past)",
      ar: "السلسلة الزمنية الثانية (حاضر/مستقبل/ماضٍ)",
    },
    prerequisites: ["m10-l2", "m12-l1"],
    quizId: "q17-1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Zweites Präsens (Form & Funktion)",
          en: "Second present (form & function)",
          ar: "الحاضر الثاني (الصيغة والوظيفة)",
        },
        rule: {
          de: "Form wie Perfekt (ⲁⲓ‑, ⲁⲕ‑, ⲁⲣⲉ‑, ⲁⲫ‑, ⲁⲥ‑, ⲁⲛ‑, ⲁⲣⲉⲧⲉⲛ‑, ⲁⲩ‑), Vorsubjektform ⲁⲣⲉ. Funktion: Fokus vom Verb weg (z. B. auf Ort/Zeit) und in Fragen mit Frageartikeln nach dem Verb (ⲩⲱⲛ, ⲛⲁⲩ…).",
          en: "Looks like the perfect (ai‑, ak‑, are‑, af‑, as‑, an‑, areten‑, au‑); pre‑subject form ⲁⲣⲉ. Shifts emphasis away from the verb and is used in questions where the interrogative follows the verb (yōn/ynau…).",
          ar: "يشبه الماضي التام في الشكل (ⲁⲓ‑، ⲁⲕ‑، ⲁⲣⲉ‑، ⲁⲫ‑، ⲁⲥ‑، ⲁⲛ‑، ⲁⲣⲉⲧⲉⲛ‑، ⲁⲩ‑)؛ وصيغته قبل الفاعل ⲁⲣⲉ. ينقل التركيز عن الفعل ويستعمل في الأسئلة حين يأتي أداة الاستفهام بعد الفعل.",
        },
        examples: [
          {
            coptic: "ⲡⲉⲥⲥⲁϫⲓ ⲁⲕⲥⲱⲡ ⲩⲱⲛ;",
            translit: "pes‑saji aksōp yōn?",
            meaning: {
              de: "Lehrer, wo wohnst du?",
              en: "Teacher, where do you dwell?",
              ar: "يا معلّم، أين تسكن؟",
            },
          },
          {
            coptic: "ⲁⲣⲉ ⲡⲓⲙⲁ ⲙ̀ⲛⲟⲩⲱⲥⲧ ⲙ̀ⲫⲓⲁⲗⲏⲙ",
            translit: "are pima mn‑ouōst m‑Fialēm",
            meaning: {
              de: "Der Fokus liegt auf „Ort: Jerusalem ist der Ort …“",
              en: "Emphasis shifted to ‘the place: Jerusalem is the place …’",
              ar: "انتقل التركيز إلى «المكان: أورشليم هو المكان…»",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Zweites Futur",
          en: "Second future",
          ar: "المستقبل الثاني",
        },
        rule: {
          de: "Eigenständige Endungen (ⲁⲓⲛⲁ‑, ⲁⲕⲛⲁ‑, ⲁⲣⲉⲛⲁ‑, ⲁⲫⲛⲁ‑, ⲁⲥⲛⲁ‑, ⲁⲛⲛⲁ‑, ⲁⲣⲉⲧⲉⲛⲛⲁ‑, ⲁⲩⲛⲁ‑), Vorsubjektform ⲁⲣⲉ. Bedeutung: Fokusverschiebung, auch in Fragen nach dem Verb.",
          en: "Distinct forms (aina‑, akna‑, arena‑, afna‑, acna‑, anna‑, aretenna‑, auna‑); pre‑subject form ⲁⲣⲉ. Used for emphasis shift and when interrogatives follow the verb.",
          ar: "صيغ مميزة (ⲁⲓⲛⲁ‑، ⲁⲕⲛⲁ‑، ⲁⲣⲉⲛⲁ‑، ⲁⲫⲛⲁ‑، ⲁⲥⲛⲁ‑، ⲁⲛⲛⲁ‑، ⲁⲣⲉⲧⲉⲛⲛⲁ‑، ⲁⲩⲛⲁ‑)؛ وصيغته قبل الفاعل ⲁⲣⲉ. للتركيز والسؤال بعد الفعل.",
        },
        examples: [
          {
            coptic: "ⲁⲫⲛⲁⲛⲟⲩⲛϯ ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲓⲛⲁϩϯ",
            translit: "af‑na‑nōnti ebol hiten pi‑nahti",
            meaning: {
              de: "„Der Gerechte wird durch Glauben leben.“",
              en: "“The righteous will live through faith.”",
              ar: "«ٱلبارّ سيحيا بالإيمان».",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Zweite Vergangenheit",
          en: "Second past",
          ar: "الماضي الثاني",
        },
        rule: {
          de: "Formen ⲉⲧⲁⲓ‑, ⲉⲧⲁⲕ‑, ⲉⲧⲁⲣⲉ‑, ⲉⲧⲁⲫ‑, ⲉⲧⲁⲥ‑, ⲉⲧⲁⲛ‑, ⲉⲧⲁⲣⲉⲧⲉⲛ‑, ⲉⲧⲁⲩ‑; Vorsubjektform ⲉⲧⲁ‑. Von der relativen Vergangenheit nur durch Kontext zu unterscheiden.",
          en: "Forms etai‑, etak‑, etare‑, etaf‑, etas‑, etan‑, ereten‑, etau‑; pre‑subject form ⲉⲧⲁ‑. Distinguished from the relative past by context.",
          ar: "الصيغ ⲉⲧⲁⲓ‑، ⲉⲧⲁⲕ‑، ⲉⲧⲁⲣⲉ‑، ⲉⲧⲁⲫ‑، ⲉⲧⲁⲥ‑، ⲉⲧⲁⲛ‑، ⲉⲧⲁⲣⲉⲧⲉⲛ‑، ⲉⲧⲁⲩ‑؛ وصيغته قبل الفاعل ⲉⲧⲁ‑. يُفرّق عنه من سياق الجملة بالنسبة للزمن النسبي.",
        },
        examples: [
          {
            coptic: "ⲧⲉⲛⲉⲙⲓ ϫⲉ ⲉⲧⲁⲕⲓ ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲡϭⲟⲓⲥ",
            translit: "ten‑emi je etak‑i ebol hiten P‑chois",
            meaning: {
              de: "„Wir wissen, dass du von Gott kamst.“",
              en: "“We know that you came from God.”",
              ar: "«نحن نعلم أنك أتيتَ من الله».",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Fragen & zweite Tempora",
          en: "Questions & second series",
          ar: "الأسئلة والسلسلة الثانية",
        },
        rule: {
          de: "Stehen Frageartikel wie ⲩⲱⲛ/ⲛⲁⲩ nach dem Verb, wird die 2. Tempusreihe verwendet (Präsens/Futur/Vergangenheit).",
          en: "When interrogative articles like ⲩⲱⲛ/ⲛⲁⲩ follow the verb, use the second series (present/future/past).",
          ar: "عند مجيء أدوات الاستفهام مثل ⲩⲱⲛ/ⲛⲁⲩ بعد الفعل تُستعمل السلسلة الثانية (حاضر/مستقبل/ماضٍ).",
        },
        examples: [
          {
            coptic: "ⲁⲩⲛⲁⲙⲉⲥ ⲡⲭⲣⲓⲥⲧⲟⲥ ⲩⲱⲛ;",
            translit: "aunames p‑Christos yōn?",
            meaning: {
              de: "Wo wird der Christus geboren?",
              en: "Where will the Christ be born?",
              ar: "أين سيولد المسيح؟",
            },
          },
          {
            coptic: "ⲣⲁⲃⲃⲓ ⲉⲧⲁⲕⲓ ⲉⲙⲛⲁⲓ ⲛ̀ⲛⲁⲩ;",
            translit: "rabbi etak‑i emnai n‑nau?",
            meaning: {
              de: "متى جئتَ إلى هنا؟",
              en: "When did you come here?",
              ar: "متى جئت إلى هنا؟",
            },
          },
        ],
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "q17-1": {
    id: "q17-1",
    title: {
      de: "Mini‑Quiz: Zweite Tempusreihe",
      en: "Mini‑quiz: Second tense series",
      ar: "اختبار: السلسلة الثانية من الأزمنة",
    },
    passScore: 80,
    questions: [
      {
        id: "q17-1-1",
        type: "multiple-choice",
        questionText: {
          de: "Welche Vorsubjektform gehört zum 2. Präsens?",
          en: "Which pre‑subject form belongs to the second present?",
          ar: "ما صيغة ما قبل الفاعل للحاضر الثاني؟",
        },
        options: [
          { de: "ⲁ", en: "a", ar: "ⲁ" },
          { de: "ⲁⲣⲉ", en: "are", ar: "ⲁⲣⲉ" },
          { de: "ⲙⲡⲉ", en: "mpe", ar: "ⲙⲡⲉ" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q17-1-2",
        type: "cloze",
        questionText: {
          de: "Ergänze die 2. Futurform: „er wird …“ ⲁⲫⲛⲁ‑ ___",
          en: "Complete the second future: “he will …” ⲁⲫⲛⲁ‑ ___",
          ar: "أكمل المستقبل الثاني: «سـ…» ⲁⲫⲛⲁ‑ ___",
        },
        answer: "ⲥⲱⲧⲙ",
      },
      {
        id: "q17-1-3",
        type: "multiple-choice",
        questionText: {
          de: "Welche Aussage zum 2. Präteritum stimmt?",
          en: "Which is true of the second past?",
          ar: "أي عبارة صحيحة عن الماضي الثاني؟",
        },
        options: [
          {
            de: "Identisch mit relativem Präteritum, nur Kontext entscheidet.",
            en: "Identical to the past relative; distinguished only by context.",
            ar: "مطابق للماضي النسبي ويُفرّق بالسياق.",
          },
          {
            de: "Hat eine eigene Partikel ⲉⲣⲉ‑.",
            en: "Has a special particle ⲁⲣⲉ‑.",
            ar: "له أداة خاصة ⲁⲣⲉ‑.",
          },
          {
            de: "Wird nur in verneinten Sätzen genutzt.",
            en: "Used only in negatives.",
            ar: "يستعمل في النفي فقط.",
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q17-1-4",
        type: "matching",
        pairs: [
          {
            left: "ⲁⲕⲥⲱⲡ ⲩⲱⲛ;",
            right: {
              de: "2. Präsens (Frage nach Verb)",
              en: "Second present (interrogative follows verb)",
              ar: "حاضر ثانٍ (أداة السؤال بعد الفعل)",
            },
          },
          {
            left: "ⲁⲣⲉ ⲡⲓⲙⲁ …",
            right: {
              de: "Fokus weg vom Verb",
              en: "Emphasis shift",
              ar: "تحويل التركيز",
            },
          },
          {
            left: "ⲁⲓⲛⲁ‑",
            right: {
              de: "2. Futur",
              en: "Second future",
              ar: "المستقبل الثاني",
            },
          },
        ],
      },
      {
        id: "q17-1-5",
        type: "production",
        prompt: {
          de: "Übersetze ins Koptische (2. Vergangenheit): „Wir wissen, dass du gekommen bist.“",
          en: "Translate to Coptic (second past): “We know that you came.”",
          ar: "ترجم إلى القبطية (الماضي الثاني): «نعلم أنك جئتَ».",
        },
        correctAnswer: {
          coptic: "ⲧⲉⲛⲉⲙⲓ ϫⲉ ⲉⲧⲁⲕⲓ",
          translit: "ten‑emi je etak‑i",
        },
      },
    ],
  },
};
