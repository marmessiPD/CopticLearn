// Module 8 — Relativ-Konverter & Derivate (Bohairisch, nach Younan)
// Belege in den Quellnachweisen.

import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m8-l1": {
    id: "m8-l1",
    order: 1,
    moduleId: "m8",
    title: {
      de: "Relativ (Präsens): ⲉⲧ / ⲉ- (ef/ec/eu)",
      en: "Present Relative: et / e-",
      ar: "أداة الصلة الحاضرة",
    },
    prerequisites: [],
    quizId: "q8-1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Definit vs. Indefinit",
          en: "Definite vs. Indefinite",
          ar: "معرّف/نكرة",
        },
        rule: {
          de: "Bei definiten Antezedenten steht ⲉⲧ (vor Vokal: ⲉⲩ/ⲉⲓ ⟶ ‘ⲉⲩ/ⲉⲓ’-Allomorph); bei indefiniten: ⲉ- mit ef-/ec-/eu-.",
          en: "Definite antecedent → ⲉⲧ (before certain vowels written as ⲉⲩ/ⲉⲓ). Indefinite → e- with ef-/ec-/eu-.",
          ar: "للمعرّف ⲉⲧ (وتتحول قبل بعض الحروف)، وللنكرة e- مع ef-/ec-/eu-.",
        },
        examples: [
          {
            coptic: "ⲡⲓⲙⲁ ⲉⲧⲁⲩ,ⲁⲃ ⲙⲙⲟⲫ",
            translit: "pima et-au ,ab ⲙⲙⲟⲫ",
            meaning: {
              de: "der Ort, wo sie ihn legten",
              en: "the place where they put him",
              ar: "المكان الذي وضعوه فيه",
            },
          },
          {
            coptic: "ⲟⲩⲣⲱⲙⲓ ⲉⲫⲟⲩⲁⲃ",
            translit: "ourōmi efouab",
            meaning: {
              de: "ein heiliger Mann",
              en: "a holy man",
              ar: "رجل قدّيس",
            },
          },
        ],
      },
    ],
  },

  "m8-l2": {
    id: "m8-l2",
    order: 2,
    moduleId: "m8",
    title: {
      de: "Negatives Relativ",
      en: "Negative Relative",
      ar: "أداة الصلة المنفية",
    },
    prerequisites: ["m8-l1"],
    quizId: "q8-2",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Formen (def./indef.)",
          en: "Forms (def./indef.)",
          ar: "الصيغ",
        },
        rule: {
          de: "Definit: ⲉⲧⲉ + ⲛ … ⲁⲛ; Indefinit: ⲉ + (Subjekt) + ⲛ … ⲁⲛ.",
          en: "Def.: ⲉⲧⲉ + ⲛ … ⲁⲛ; Indef.: ⲉ + (subject) + ⲛ … ⲁⲛ.",
          ar: "للمعرّف: ⲉⲧⲉ + ⲛ … ⲁⲛ؛ وللنكرة: ⲉ + الفاعل + ⲛ … ⲁⲛ.",
        },
        examples: [
          {
            coptic: "ⲟⲩϩⲱⲃ ⲛⲉⲙ ⲟⲩⲭⲏⲙⲓ … ⲉⲧⲉ ⲛⲥⲉⲟⲩⲁⲃ ⲁⲛ",
            translit: "ou-hōb nem ou-khēmi … ete n-se ouab an",
            meaning: {
              de: "ein Männliches und Weibliches … die nicht rein sind",
              en: "a male and a female … which are not pure",
              ar: "ذكر وأنثى ... غير طاهرين",
            },
          },
        ],
      },
    ],
  },

  "m8-l3": {
    id: "m8-l3",
    order: 3,
    moduleId: "m8",
    title: {
      de: "Relativ (Vergangenheit): ⲉⲧⲁⲫ- …",
      en: "Past Relative",
      ar: "أداة الصلة في الماضي",
    },
    prerequisites: ["m8-l1"],
    quizId: "q8-3",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Funktion & Resumptiv",
          en: "Function & Resumptive",
          ar: "الوظيفة والضمير العائد",
        },
        rule: {
          de: "Vergangenes Relativ kann ‘als/alsdann/wann’ bedeuten. Wenn Antezedens ≠ Subjekt, braucht es ein Resumptiv (z. B. pronominales Suffix oder ⲙⲙⲟⲫ).",
          en: "Past relative can mean ‘when’. If antecedent ≠ subject, use a resumptive morph (e.g., suffix or ⲙⲙⲟⲫ).",
          ar: "قد يفيد «عندما». وإذا كان المتقدِّم غير الفاعل يلزم ضمير عائد.",
        },
        examples: [
          {
            coptic: "ⲡⲓⲙⲁ ⲉⲧⲁⲩ,ⲁⲃ ⲙⲙⲟⲫ",
            translit: "pima et-au ,ab ⲙⲙⲟⲫ",
            meaning: {
              de: "Ort, wo sie ihn hinlegten",
              en: "the place where they put him",
              ar: "المكان الذي وضعوه فيه",
            },
          },
          {
            coptic: "ⲟⲩⲙⲁⲕⲁⲣⲓⲟⲥ ⲡⲉ ⲡⲓⲣⲱⲙⲓ ⲉⲧⲉ ⲙⲡⲉⲫⲥⲉ …",
            translit: "oumakarios pe pirōmi ete mpefse …",
            meaning: {
              de: "selig der Mann, der nicht …",
              en: "blessed is the man who did not …",
              ar: "طوبى للرجل الذي لم ...",
            },
          },
        ],
      },
    ],
  },

  "m8-l4": {
    id: "m8-l4",
    order: 4,
    moduleId: "m8",
    title: {
      de: "Relativ-Substantive & ⲡⲉⲧ",
      en: "Relative Substantives & ⲡⲉⲧ",
      ar: "أسماء الصلة وⲡⲉⲧ",
    },
    prerequisites: ["m8-l1"],
    quizId: "q8-4",
    slides: [
      {
        type: "grammar",
        title: {
          de: "ⲟⲩ/ⲛⲟⲩ/ⲃⲟⲩ + ⲉⲧ & ⲡⲉⲧ",
          en: "v-/n- + et; pet",
          ar: "ضمائر الإشارة البعيدة + ⲉⲧ؛ ⲡⲉⲧ",
        },
        rule: {
          de: "Weite Demonstrativa + Relativ → Substantiv (z. B. ⲃ/ⲉⲧⲟⲩⲁⲃ ‘der Heilige’; ⲛ/ⲉⲩⲙⲱⲟⲩⲧ ‘die Toten’). Alternative: ⲡⲉⲧ (‘der, welcher’).",
          en: "Far demonstratives + relative → nouns (e.g., v/ + e-youab = ‘the saint’). Alternative: ⲡⲉⲧ (‘the one who’).",
          ar: "ضمائر الإشارة البعيدة + أداة الصلة تعطي أسماء. وبديل: ⲡⲉⲧ.",
        },
        examples: [
          {
            coptic: "ⲃ/ⲉⲩⲟⲩⲁⲃ",
            translit: "v/ eyouab",
            meaning: { de: "der Heilige", en: "the Saint", ar: "القديس" },
          },
          {
            coptic: "ⲛ/ⲉⲩⲙⲱⲟⲩⲧ",
            translit: "n/ eymōout",
            meaning: { de: "die Toten", en: "the dead", ar: "الأموات" },
          },
          {
            coptic: "ⲡⲟⲓⲕ ⲡⲉⲧ ⲥⲟⲩⲛ",
            translit: "poik pet soun",
            meaning: {
              de: "das Haus ist der, der (es) weiß → ‘der Kenner’ (Beispielbildung)",
              en: "house … ‘the one who knows’ (illustrative)",
              ar: "البيت ... «الذي يعرف»",
            },
          },
        ],
      },
    ],
  },

  "m8-l5": {
    id: "m8-l5",
    order: 5,
    moduleId: "m8",
    title: {
      de: "Adjektive aus Qualitativa + Relativ",
      en: "Adjectives from Qualitative + Relative",
      ar: "الصفات من الصيغة الوصفية + الصلة",
    },
    prerequisites: ["m8-l1"],
    quizId: "q8-5",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Bildung & Gebrauch",
          en: "Formation & Use",
          ar: "التكوين والاستعمال",
        },
        rule: {
          de: "Qualitativ + Relativ liefert produktive Adjektive: ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉⲓⲟⲩⲁⲃ ‘der Heilige Geist’; bei Indef.: ef-/ec-/eu-.",
          en: "Qualitative + relative yields adjectives: ‘the Holy Spirit’; with indefinite: ef-/ec-/eu-.",
          ar: "الصيغة الوصفية + أداة الصلة تعطي صفات.",
        },
        examples: [
          {
            coptic: "ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉⲓⲟⲩⲁⲃ",
            translit: "pi-pneuma e-youab",
            meaning: {
              de: "der Heilige Geist",
              en: "the Holy Spirit",
              ar: "الروح القدس",
            },
          },
          {
            coptic: "ⲟⲩⲣⲱⲙⲓ ⲉϥⲟⲩⲁⲃ",
            translit: "ourōmi ef-ouab",
            meaning: {
              de: "ein heiliger Mann",
              en: "a holy man",
              ar: "رجل قديس",
            },
          },
        ],
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "q8-1": {
    id: "q8-1",
    lessonId: "m8-l1",
    title: {
      de: "Quiz: Relativ Präsens",
      en: "Quiz: Present Relative",
      ar: "اختبار: الصلة الحاضرة",
    },
    passScore: 70,
    questions: [
      {
        id: "q8-1-1",
        type: "multiple-choice",
        questionText: {
          de: "Definites Antezedens → ?",
          en: "Definite antecedent → ?",
          ar: "المعرّف ← ؟",
        },
        options: [
          { de: "ⲉⲧ", en: "et", ar: "ⲉⲧ" },
          { de: "ef-/ec-/eu-", en: "ef-/ec-/eu-", ar: "ef-/ec-/eu-" },
          { de: "ⲡⲉⲧ", en: "pet", ar: "ⲡⲉⲧ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q8-1-2",
        type: "multiple-choice",
        questionText: {
          de: "Indefinit (mask.) → ?",
          en: "Indefinite (masc.) → ?",
          ar: "نكرة (مذكر) ← ؟",
        },
        options: [
          { de: "ⲉⲧ", en: "et", ar: "ⲉⲧ" },
          { de: "ⲉϥ-", en: "ef-", ar: "ⲉϥ-" },
          { de: "ⲉⲩ-", en: "eu-", ar: "ⲉⲩ-" },
        ],
        correctAnswerIndex: 1,
      },
    ],
  },

  "q8-2": {
    id: "q8-2",
    lessonId: "m8-l2",
    title: {
      de: "Quiz: Negatives Relativ",
      en: "Quiz: Negative Relative",
      ar: "اختبار: الصلة المنفية",
    },
    passScore: 70,
    questions: [
      {
        id: "q8-2-1",
        type: "multiple-choice",
        questionText: {
          de: "Formel (def.)?",
          en: "Formula (def.)?",
          ar: "الصيغة (معرّف)؟",
        },
        options: [
          { de: "ⲉⲧⲉ + ⲛ … ⲁⲛ", en: "ete + n … an", ar: "ⲉⲧⲉ + ⲛ … ⲁⲛ" },
          { de: "ⲉ + ⲛ … ⲁⲛ", en: "e + n … an", ar: "ⲉ + ⲛ … ⲁⲛ" },
          { de: "ⲡⲉⲧ + ⲛ … ⲁⲛ", en: "pet + n … an", ar: "ⲡⲉⲧ + ⲛ … ⲁⲛ" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "q8-3": {
    id: "q8-3",
    lessonId: "m8-l3",
    title: {
      de: "Quiz: Vergangenes Relativ",
      en: "Quiz: Past Relative",
      ar: "اختبار: الصلة الماضية",
    },
    passScore: 70,
    questions: [
      {
        id: "q8-3-1",
        type: "multiple-choice",
        questionText: {
          de: "Resumptiv nötig wann?",
          en: "Resumptive needed when?",
          ar: "متى يلزم الضمير العائد؟",
        },
        options: [
          {
            de: "Antezedens ≠ Subjekt",
            en: "antecedent ≠ subject",
            ar: "المتقدّم غير الفاعل",
          },
          { de: "immer", en: "always", ar: "دائمًا" },
          { de: "nie", en: "never", ar: "أبدًا" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "q8-4": {
    id: "q8-4",
    lessonId: "m8-l4",
    title: {
      de: "Quiz: Relativ-Substantive",
      en: "Quiz: Relative Substantives",
      ar: "اختبار: الأسماء الصلية",
    },
    passScore: 70,
    questions: [
      {
        id: "q8-4-1",
        type: "multiple-choice",
        questionText: {
          de: "ⲃ/ + ⲉⲧ + ⲉⲓⲟⲩⲁⲃ →",
          en: "v/ + et + e-youab →",
          ar: "ⲃ/ + ⲉⲧ + ⲉⲓⲟⲩⲁⲃ →",
        },
        options: [
          { de: "„der Heilige“", en: "‘the saint’", ar: "«القديس»" },
          { de: "„die Heiligen“", en: "‘the saints’", ar: "«القديسون»" },
          { de: "„heilig sein“", en: "‘to be holy’", ar: "«يكون قديسًا»" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "q8-5": {
    id: "q8-5",
    lessonId: "m8-l5",
    title: {
      de: "Quiz: Adjektive (Qualitativ + Relativ)",
      en: "Quiz: Adjectives (Qualitative + Relative)",
      ar: "اختبار: الصفات",
    },
    passScore: 70,
    questions: [
      {
        id: "q8-5-1",
        type: "multiple-choice",
        questionText: {
          de: "„der Heilige Geist“ = ?",
          en: "‘the Holy Spirit’ = ?",
          ar: "«الروح القدس» = ؟",
        },
        options: [
          {
            de: "ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉⲓⲟⲩⲁⲃ",
            en: "pi-pneuma e-youab",
            ar: "ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉⲓⲟⲩⲁⲃ",
          },
          { de: "ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉⲛⲥⲁ", en: "pi-pneuma nsa", ar: "ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉⲛⲥⲁ" },
          { de: "ⲡⲓⲡⲛⲉⲩⲙⲁ ⲙⲙⲟⲩ", en: "pi-pneuma ⲙⲙⲟⲩ", ar: "ⲡⲓⲡⲛⲉⲩⲙⲁ ⲙⲙⲟⲩ" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },
};
