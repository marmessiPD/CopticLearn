// Module 10 — Zukunft & Gewohnheit (nach Younan)
import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m10-l1": {
    id: "m10-l1",
    order: 1,
    moduleId: "m10",
    title: {
      de: "Gewohnheit (Habitual) — bejaht & verneint",
      en: "Habitual — affirmative & negative",
      ar: "الاعتياد (المضارع العادي): مثبت ومنفي",
    },
    prerequisites: ["m5-l3", "m7-l1"],
    quizId: "q10-1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Affirmatives Habitual",
          en: "Affirmative habitual",
          ar: "الاعتياد المثبت",
        },
        rule: {
          de: "Das Habitual beschreibt Gewohnheiten („er läuft (gewöhnlich)“). Es wird mit sa- + Personenkennzeichen + Infinitiv gebildet (z. B. saf‑ⲥⲱⲧⲙ „er hört (gewöhnlich)“).",
          en: "The habitual expresses habits ('he walks/usually'). Formed with sa‑ + person + infinitive (e.g., saf‑sōtm 'he usually hears').",
          ar: "صيغة الاعتياد تعبّر عن العادات. تُبنى بـ sa- + علامة الشخص + المصدر (مثل saf‑sōtm «هو يسمع عادةً»).",
        },
        examples: [
          {
            coptic: "ⲥⲁϥⲙⲟⲥⲓ",
            translit: "saf‑mosi",
            meaning: {
              de: "er geht (gewöhnlich)",
              en: "he (usually) walks",
              ar: "هو يمشي عادةً",
            },
          },
          {
            coptic: "ⲥⲁⲛⲥⲱⲧⲙ",
            translit: "san‑sōtm",
            meaning: {
              de: "wir hören (gewöhnlich)",
              en: "we (usually) hear",
              ar: "نحن نسمع عادةً",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Negatives Habitual",
          en: "Negative habitual",
          ar: "الاعتياد المنفي",
        },
        rule: {
          de: "Die Negation verwendet »ⲙⲡⲁ‑« (präfigiert) + Infinitiv: ⲙⲡⲁⲓ‑, ⲙⲡⲁⲕ‑, ⲙⲡⲁⲣⲉ‑, ⲙⲡⲁϥ‑, ⲙⲡⲁⲥ‑, ⲙⲡⲁⲛ‑, ⲙⲡⲁⲣⲉⲧⲉⲛ‑, ⲙⲡⲁⲩ‑. Vorsubjektform: ⲙⲡⲁⲣⲉ‑.",
          en: "Negation uses 'ⲙⲡⲁ‑' + infinitive: mpai‑, mpak‑, mpare‑, mpaf‑, mpac‑, mpan‑, mpareten‑, mpau‑. Pre‑subject form: mpare‑.",
          ar: "يُستخدم «ⲙⲡⲁ‑» للنفي: mpai‑, mpak‑, mpare‑, mpaf‑, mpac‑, mpan‑, mpareten‑, mpau‑. وصيغة ما قبل الفاعل: mpare‑.",
        },
        examples: [
          {
            coptic: "ⲙⲡⲁϥⲙⲟⲥⲓ",
            translit: "mpaf‑mosi",
            meaning: {
              de: "هو لا يمشي عادةً",
              en: "he does not usually walk",
              ar: "هو لا يمشي عادةً",
            },
          },
          {
            coptic: "ⲙⲡⲁⲛⲥⲱⲧⲙ",
            translit: "mpan‑sōtm",
            meaning: {
              de: "نحن لا نسمع عادةً",
              en: "we do not usually hear",
              ar: "نحن لا نسمع عادةً",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲥⲁϥⲟⲩⲱⲛ ⲙⲡⲓⲧⲟⲧⲥ",
          translit: "saf‑ouōn mpitots",
          meaning: {
            de: "Er öffnet (normalerweise) die Tür.",
            en: "He usually opens the door.",
            ar: "يفتح الباب عادةً.",
          },
        },
      },
      {
        type: "sentence",
        item: {
          text: "ⲙⲡⲁⲩⲣⲓⲙⲓ ⲛ̀ⲧⲉⲛⲉⲩⲟⲛⲓ",
          translit: "mpau‑rimi nten‑euwoni",
          meaning: {
            de: "هم لا يبكون عادةً في الليل",
            en: "They do not usually cry at night.",
            ar: "هم لا يبكون عادةً في الليل",
          },
        },
      },
    ],
  },

  "m10-l2": {
    id: "m10-l2",
    order: 2,
    moduleId: "m10",
    title: {
      de: "Futuren: 1. Futur, emphatisch & unvollkommene Zukunft",
      en: "Futures: First, Emphatic & Imperfect",
      ar: "المستقبل: الأول والتوكيدي وغير التام",
    },
    prerequisites: ["m10-l1", "m5-l4"],
    quizId: "q10-2",
    slides: [
      {
        type: "grammar",
        title: {
          de: "1. Futur (na‑ + Infinitiv)",
          en: "First future (na‑ + infinitive)",
          ar: "المستقبل الأول (na- + المصدر)",
        },
        rule: {
          de: "na wird zwischen Subjekt und Infinitiv gesetzt: ⲉⲓⲛⲁ‑, ⲕⲛⲁ‑/ⲧⲉⲛⲁ‑, ⲫⲛⲁ‑, ⲥⲛⲁ‑, ⲛⲁⲛⲁ‑, ⲧⲉⲧⲉⲛⲛⲁ‑, ⲥⲉⲛⲁ‑.",
          en: "Insert na between subject and infinitive: ]na‑, ,na‑/tena‑, fna‑, cna‑, nanna‑, tetenna‑, cena‑.",
          ar: "تُدخل na بين الضمير والمصدر لصياغة المستقبل الأول.",
        },
        examples: [
          {
            coptic: "ⲉⲓⲛⲁⲓ",
            translit: "]na‑i",
            meaning: { de: "ich werde kommen", en: "I will come", ar: "سآتي" },
          },
          {
            coptic: "ⲫⲛⲁⲥⲱⲧⲙ",
            translit: "fna‑sōtm",
            meaning: { de: "er wird hören", en: "he will hear", ar: "سيسمع" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Emphatisches Futur",
          en: "Emphatic future",
          ar: "المستقبل التوكيدي",
        },
        rule: {
          de: "Emphatisches Futur (»es wird bestimmt …«): Formen wie ⲉⲛⲉ‑, ⲉⲣⲉⲧⲉⲛⲉ‑, ⲉⲩⲉ‑; Vorsubjekt: ⲉⲣⲉ. Wird oft in Bibel/ Liturgie gebraucht („Amen, es wird sein“).",
          en: "Emphatic future expresses insistence/certainty: forms like ⲉⲛⲉ‑ (we will), ⲉⲣⲉⲧⲉⲛⲉ‑ (you‑pl will), ⲉⲩⲉ‑ (they will); pre‑subject: ⲉⲣⲉ‑. Liturgical: “amēn ece‑swpi” ('Amen, it shall be').",
          ar: "المستقبل التوكيدي للتأكيد: صيغ مثل ⲉⲛⲉ‑، ⲉⲣⲉⲧⲉⲛⲉ‑، ⲉⲩⲉ‑؛ وصيغة ما قبل الفاعل: ⲉⲣⲉ‑.",
        },
        examples: [
          {
            coptic: "ⲉⲩⲉⲙⲟⲩⲧ ⲉⲣⲟϥ",
            translit: "eue‑mout ero‑f",
            meaning: {
              de: "sie werden ihn nennen",
              en: "they will call him",
              ar: "سيسمّونه",
            },
          },
          {
            coptic: "ⲉⲣⲉ ⲡⲉⲛⲥⲱⲙⲁ ⲉⲫⲉⲥⲱⲡⲓ ϩⲓ ⲛⲓⲥⲏⲑ",
            translit: "ere pen‑sōma efe‑sōpi hi nisēth",
            meaning: {
              de: "unser Leib wird in der Stadt sein",
              en: "our body will be in the city",
              ar: "سيكون جسدنا في المدينة",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Unvollkommene Zukunft",
          en: "Imperfect future",
          ar: "المستقبل غير التام",
        },
        rule: {
          de: "„War im Begriff zu…“: Imperfekt + na‑ … (ⲡⲉ). Beispiele: ⲛⲁⲓⲛⲁ‑, ⲛⲁϥⲛⲁ‑ … + fakultatives ⲡⲉ.",
          en: "‘Was about to…’: imperfect + na‑ … (pe). E.g., naina‑, nafna‑ … with optional pe.",
          ar: "«كان على وشك…»: الماضي الناقص + na‑ … (ⲡⲉ) اختياري.",
        },
        examples: [
          {
            coptic: "ⲛⲁⲥⲛⲁⲙⲟⲩ ⲡⲉ",
            translit: "nasna‑mou pe",
            meaning: {
              de: "كانت على وشك أن تموت",
              en: "she was about to die",
              ar: "كانت على وشك أن تموت",
            },
          },
        ],
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "q10-1": {
    id: "q10-1",
    lessonId: "m10-l1",
    title: {
      de: "Mini‑Quiz: Habitual",
      en: "Mini‑quiz: Habitual",
      ar: "اختبار: الاعتياد",
    },
    passScore: 80,
    questions: [
      {
        id: "q10-1-1",
        type: "multiple-choice",
        questionText: {
          de: "Wähle die Habitual‑Form: „er öffnet (gewöhnlich)“",
          en: "Choose the habitual: 'he usually opens'",
          ar: "اختر صيغة الاعتياد: «هو يفتح عادةً»",
        },
        options: [
          { de: "ⲥⲁϥⲟⲩⲱⲛ", en: "saf‑ouōn", ar: "ⲥⲁϥⲟⲩⲱⲛ" },
          { de: "ⲁϥⲟⲩⲱⲛ", en: "af‑ouōn", ar: "ⲁϥⲟⲩⲱⲛ" },
          { de: "ⲙⲡⲁϥⲟⲩⲱⲛ", en: "mpaf‑ouōn", ar: "ⲙⲡⲁϥⲟⲩⲱⲛ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q10-1-2",
        type: "multiple-choice",
        questionText: {
          de: "Negiere richtig: „wir hören (gewöhnlich) nicht“",
          en: "Negate: 'we do not usually hear'",
          ar: "حوِّل إلى النفي: «لا نسمع عادةً»",
        },
        options: [
          { de: "ⲙⲡⲁⲛⲥⲱⲧⲙ", en: "mpan‑sōtm", ar: "ⲙⲡⲁⲛⲥⲱⲧⲙ" },
          { de: "ⲛⲁⲛⲥⲱⲧⲙ", en: "nan‑sōtm", ar: "ⲛⲁⲛⲥⲱⲧⲙ" },
          { de: "ⲙⲡⲉⲛⲥⲱⲧⲙ", en: "mpen‑sōtm", ar: "ⲙⲡⲉⲛⲥⲱⲧⲙ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q10-1-3",
        type: "fill-in-the-blank",
        questionText: {
          de: 'Fülle: „ihr (Pl.) tut nicht (gewöhnlich)" → ⲙⲡⲁⲣⲉⲧⲉⲛ___',
          en: "Fill: 'you (pl.) do not usually do' → mpareten___",
          ar: "أكمل",
        },
        correctAnswer: "ⲓⲣⲓ",
      },
      {
        id: "q10-1-4",
        type: "production" as any,
        prompt: {
          de: "Schreibe auf Koptisch: „Sie لا يعملون عادةً يوم الأحد.“",
          en: "Write in Coptic: 'They do not usually work on Sunday.'",
          ar: "اكتب بالقبطية: «هم لا يعملون عادةً يوم الأحد».",
        },
        correctAnswer: {
          coptic: "ⲙⲡⲁⲩⲉⲣϩⲱⲃ ⲉⲃⲟⲗ ϩⲓ ⲡⲓⲕⲩⲣⲓⲁⲕⲏ",
          translit: "mpau‑erhōb ebol hi pikyriakē",
        },
      },
      {
        id: "q10-1-5",
        type: "matching" as any,
        pairs: [
          {
            left: "mpai‑",
            right: {
              de: "1. Pers. Sg. (neg.)",
              en: "1st sg. (neg.)",
              ar: "المفرد ١ (نفي)",
            },
          },
          {
            left: "mpaf‑",
            right: {
              de: "3. Pers. m. (neg.)",
              en: "3rd m. (neg.)",
              ar: "مذكر (نفي)",
            },
          },
          {
            left: "mpa‑re‑",
            right: { de: "Vorsubjekt", en: "pre‑subject", ar: "قبل الفاعل" },
          },
        ],
      },
    ],
  },

  "q10-2": {
    id: "q10-2",
    lessonId: "m10-l2",
    title: {
      de: "Mini‑Quiz: Futuren",
      en: "Mini‑quiz: Futures",
      ar: "اختبار: صيغ المستقبل",
    },
    passScore: 80,
    questions: [
      {
        id: "q10-2-1",
        type: "multiple-choice",
        questionText: {
          de: "Welche Form gehört zum emphatischen Futur?",
          en: "Which belongs to the emphatic future?",
          ar: "أي صيغة من المستقبل التوكيدي؟",
        },
        options: [
          { de: "ⲉⲩⲉ‑ⲥⲱⲧⲙ", en: "eue‑sōtm", ar: "ⲉⲩⲉ‑ⲥⲱⲧⲙ" },
          { de: "ⲁϥⲥⲱⲧⲙ", en: "af‑sōtm", ar: "ⲁϥⲥⲱⲧⲙ" },
          { de: "ⲛⲁⲩⲥⲱⲧⲙ", en: "nau‑sōtm", ar: "ⲛⲁⲩⲥⲱⲧⲙ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q10-2-2",
        type: "fill-in-the-blank",
        questionText: {
          de: '„wir werden hören" → ⲉⲛⲉ___',
          en: "'we will (certainly) hear' → ene___",
          ar: "«سنسمع (حتماً)» → ⲉⲛⲉ___",
        },
        correctAnswer: "ⲥⲱⲧⲙ",
      },
      {
        id: "q10-2-3",
        type: "multiple-choice",
        questionText: {
          de: "„sie waren im Begriff zu kommen“",
          en: "‘they were about to come’",
          ar: "«كانوا على وشك أن يأتوا»",
        },
        options: [
          { de: "ⲁⲩⲓ", en: "au‑i", ar: "ⲁⲩⲓ" },
          { de: "ⲁⲩⲛⲁⲓ ⲡⲉ", en: "auna‑i pe", ar: "ⲁⲩⲛⲁⲓ ⲡⲉ" },
          { de: "ⲙⲡⲁⲩⲓ", en: "mpau‑i", ar: "ⲙⲡⲁⲩⲓ" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q10-2-4",
        type: "production" as any,
        prompt: {
          de: "Übersetze: „Ich werde die Stadt sehen.“",
          en: "Translate: 'I will see the city.'",
          ar: "ترجم: «سأرى المدينة.»",
        },
        correctAnswer: {
          coptic: "ⲉⲓⲛⲁⲛⲁⲩ ⲉⲡⲓⲙⲏⲧⲓ",
          translit: "]na‑nau epi‑mēti",
        },
      },
      {
        id: "q10-2-5",
        type: "matching" as any,
        pairs: [
          {
            left: "na‑",
            right: { de: "1. Futur", en: "First future", ar: "المستقبل الأول" },
          },
          {
            left: "ere‑",
            right: {
              de: "Vorsubjekt (emph. Futur)",
              en: "pre‑subject (emph. fut.)",
              ar: "قبل الفاعل (توكيـدي)",
            },
          },
          {
            left: "…(ⲡⲉ)",
            right: {
              de: "Marker der unvollk. Zukunft",
              en: "imperfect future marker",
              ar: "علامة المستقبل غير التام",
            },
          },
        ],
      },
    ],
  },
};
