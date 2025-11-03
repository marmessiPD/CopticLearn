// Module 7 — Transitive Verben & Objektmarker (Bohairisch, nach Younan)
// Belegt in den Chat-Quellnachweisen.

import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m7-l1": {
    id: "m7-l1",
    order: 1,
    moduleId: "m7",
    title: {
      de: "Transitive Verben & Objektmarker",
      en: "Transitives & Object Markers",
      ar: "الأفعال المتعدّية وعلامات المفعول",
    },
    prerequisites: [],
    quizId: "q7-1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "ⲛ / ⲙ als Objektmarker",
          en: "ⲛ/ⲙ as Object Markers",
          ar: "ⲛ/ⲙ علامات للمفعول",
        },
        rule: {
          de: "Transitive Verben verlangen Objektmarker. Häufig ⲛ (vor Konsonant) / ⲙ (vor bestimmten Anlauten). Wortlaut: „ich verstehe die Wahrheit“ ⟶ ⲓⲕⲁϫ ⲛ ⲡⲓⲙⲉⲓⲙⲉ.",
          en: "Transitives require an object marker. Often ⲛ (elsewhere) / ⲙ (before certain initial letters). Ex.: “I understand the truth” → ]ⲕⲁϫ ⲛ ⲡⲓⲙⲉⲓⲙⲉ.",
          ar: "الفعل المتعدّي يحتاج أداة مفعول: غالبًا ⲛ أو ⲙ قبل حروف معيّنة. مثال: «أفهم الحق» → ]ⲕⲁϫ ⲛ ⲡⲓⲙⲉⲓⲙⲉ.",
        },
        examples: [
          {
            coptic: "]ⲕⲁϫ ⲛ ⲡⲓⲙⲉⲓⲙⲉ",
            translit: "]kaj n pimeime",
            meaning: {
              de: "Ich verstehe die Wahrheit",
              en: "I understand the truth",
              ar: "أفهم الحق",
            },
          },
          {
            coptic: "]ⲕⲁϫ ⲙ ⲡⲓⲥⲁϫⲓ",
            translit: "]kaj m pisaji",
            meaning: {
              de: "Ich verstehe das Wort",
              en: "I understand the word",
              ar: "أفهم الكلمة",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Pronominalform von ⲙ/ⲛ",
          en: "Pronominal for ⲙ/ⲛ",
          ar: "الصيغ الضميرية لـⲙ/ⲛ",
        },
        rule: {
          de: "Bei pronominalem Objekt: ⲙⲙⲟⲓ/ⲙⲙⲟⲕ/…/ⲙⲙⲟⲩ (ich/mich … sie).",
          en: "With pronominal objects: ⲙⲙⲟⲓ, ⲙⲙⲟⲕ, …, ⲙⲙⲟⲩ.",
          ar: "للمفعول الضميري: ⲙⲙⲟⲓ، ⲙⲙⲟⲕ … ⲙⲙⲟⲩ.",
        },
        examples: [
          {
            coptic: "]ⲕⲁϫ ⲙⲙⲟⲫ",
            translit: "]kaj ⲙⲙⲟⲫ",
            meaning: {
              de: "ich verstehe ihn",
              en: "I understand him",
              ar: "أفهمه",
            },
          },
          {
            coptic: "ⲧⲉⲛⲥⲱⲧⲙ ⲙⲙⲟⲩ",
            translit: "tensōtm ⲙⲙⲟⲩ",
            meaning: { de: "wir hören sie", en: "we hear them", ar: "نسمعهم" },
          },
        ],
      },
    ],
  },

  "m7-l2": {
    id: "m7-l2",
    order: 2,
    moduleId: "m7",
    title: {
      de: "Objektmarker ⲉ (Wahrnehmung)",
      en: "Object Marker ⲉ (Perception)",
      ar: "ⲉ علامة المفعول (إدراكات)",
    },
    prerequisites: ["m7-l1"],
    quizId: "q7-2",
    slides: [
      {
        type: "grammar",
        title: { de: "ⲉ / ⲉⲣⲟ=", en: "ⲉ / ⲉⲣⲟ=", ar: "ⲉ / ⲉⲣⲟ=" },
        rule: {
          de: "Viele Wahrnehmungsverben nehmen ⲉ/ⲉⲣⲟ= (‚zu/gegenüber‘) als Objektmarker: ⲛⲁⲩ, ⲥⲱⲧⲙ, ϣⲱⲗⲉⲙ …",
          en: "Many perception verbs take ⲉ/ⲉⲣⲟ=: ⲛⲁⲩ ‘see’, ⲥⲱⲧⲙ ‘hear’, ϣⲱⲗⲉⲙ ‘smell’ …",
          ar: "أفعال الإدراك تأخذ ⲉ/ⲉⲣⲟ=: ⲛⲁⲩ يرى، ⲥⲱⲧⲙ يسمع …",
        },
        examples: [
          {
            coptic: "]ⲛⲁⲩ ⲉ ⲡⲓⲣⲱⲙⲓ",
            translit: "]nau e pirōmi",
            meaning: {
              de: "ich sehe den Mann",
              en: "I see the man",
              ar: "أرى الرجل",
            },
          },
          {
            coptic: "ⲧⲉⲛⲥⲱⲧⲙ ⲉ ⲧⲉⲫⲥⲉⲙⲏ",
            translit: "tensōtm e tefsemē",
            meaning: {
              de: "wir hören sein Wort",
              en: "we hear his word",
              ar: "نسمع كلمته",
            },
          },
          {
            coptic: "ⲧⲉⲛⲥⲱⲧⲙ ⲛⲥⲁ ⲧⲉⲫⲥⲉⲙⲏ",
            translit: "tensōtm nca tefsemē",
            meaning: {
              de: "wir gehorchen seinem Wort",
              en: "we obey his word",
              ar: "نطيع كلمته",
            },
          },
        ],
      },
    ],
  },

  "m7-l3": {
    id: "m7-l3",
    order: 3,
    moduleId: "m7",
    title: {
      de: "Verben + Präp.: Bedeutungswechsel",
      en: "Verb–Prep Meaning Shifts",
      ar: "تغيّر معنى الفعل بالحرف",
    },
    prerequisites: ["m7-l2"],
    quizId: "q7-3",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Tabelle & Beispiele",
          en: "Table & Examples",
          ar: "جدول وأمثلة",
        },
        rule: {
          de: "Bei einigen Verben ändert die Präposition die Bedeutung (z. B. ⲕⲱϣ ⲉ ‘umringen/besuchen’, ⲥⲁ ‘fliehen/zulaufen’; ⲙⲟⲥⲓ ⲥⲁ ‘zugehen’, ⲉ ‘(zu jmd.) rufen/lesen’).",
          en: "Some verbs shift meaning with different prepositions (e.g., ⲕⲱϣ ⲉ vs. ⲥⲁ; ⲙⲟⲥⲓ ⲥⲁ vs. ⲉ).",
          ar: "تتبدّل المعاني مع الحروف المختلفة.",
        },
        examples: [
          {
            coptic: "ⲕⲱϣ ⲉ ⲡⲓⲣⲱⲙⲓ",
            translit: "kōsh e pirōmi",
            meaning: {
              de: "besuchen/aufsuchen",
              en: "to visit/seek",
              ar: "يزور/يطلب",
            },
          },
          {
            coptic: "ⲙⲟⲥⲓ ⲥⲁ ⲡⲓⲛⲁⲩ",
            translit: "mosi sa pinau",
            meaning: { de: "zugehen", en: "to go toward", ar: "يتوجه" },
          },
          {
            coptic: "ⲙⲟⲥⲓ ⲉ ⲡⲓⲛⲁⲩ",
            translit: "mosi e pinau",
            meaning: {
              de: "rufen/bitten/lesen zu",
              en: "cry/appeal/read to",
              ar: "يصيح/يقرأ لِـ",
            },
          },
        ],
      },
    ],
  },

  "m7-l4": {
    id: "m7-l4",
    order: 4,
    moduleId: "m7",
    title: {
      de: "Präsens-Qualitativ + Objektmarker",
      en: "Qualitative + Object Marker",
      ar: "الصيغة الوصفية + أداة المفعول",
    },
    prerequisites: ["m7-l3"],
    quizId: "q7-4",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Qualitativa im Präsens",
          en: "Qualitative in Present",
          ar: "الوصفية في الحاضر",
        },
        rule: {
          de: "Die qualitative Form (Zustand) verwendet im Präsens häufig ⲉ/Präpositionen wie ϭⲉⲛ statt ⲙ/ⲛ: ⲫⲓⲁⲗⲱⲧ ⲉ ⲡⲁⲓⲙⲁ ‘wohnt in diesem Ort’; ⲥⲉⲥⲉⲓ ⲛϭⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ ‘sie sind in der Welt’.",
          en: "Qualitative often uses ⲉ or a preposition like ϭⲉⲛ in present: ‘dwells in this place’, ‘they are in the world’.",
          ar: "الوصفية بالحاضر تستعمل ⲉ أو ϭⲉⲛ.",
        },
        examples: [
          {
            coptic: "ⲡⲉⲧⲣⲟⲥ ⲫⲓⲁⲗⲱⲧ ⲉ ⲡⲁⲓⲙⲁ",
            translit: "petros fialōt e paima",
            meaning: {
              de: "Petrus wohnt hier",
              en: "Peter dwells here",
              ar: "بطرس يقيم هنا",
            },
          },
          {
            coptic: "ⲥⲉ,ⲟⲩ ϭⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ",
            translit: "se ,ōu qen pikosmos",
            meaning: {
              de: "sie sind in der Welt",
              en: "they are in the world",
              ar: "هم في العالم",
            },
          },
        ],
      },
    ],
  },

  "m7-l5": {
    id: "m7-l5",
    order: 5,
    moduleId: "m7",
    title: {
      de: "Alltag: Objekte & Bitten",
      en: "Everyday: Objects & Requests",
      ar: "حياة يومية: المفاعيل والطلبات",
    },
    prerequisites: ["m7-l4"],
    quizId: "q7-5",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Minidialoge mit ⲙ/ⲛ/ⲉ",
          en: "Mini Dialogs with ⲙ/ⲛ/ⲉ",
          ar: "حوارات صغيرة",
        },
        rule: {
          de: "Produktion: bitten, fragen, verstehen, hören.",
          en: "Production: ask, request, understand, hear.",
          ar: "إنتاج: يسأل، يطلب، يفهم، يسمع.",
        },
        examples: [
          {
            coptic: "ⲁⲛⲟⲕ ⲡⲉ. ⲥⲱⲧⲙ ⲉ ⲛⲁⲛ.",
            translit: "anok pe. sōtm e nan.",
            meaning: {
              de: "Ich bin’s. Höre uns.",
              en: "It’s me. Hear us.",
              ar: "أنا. اسمعنا.",
            },
          },
          {
            coptic: "ⲕⲁϫ ⲛ ⲧⲉⲛⲥⲉⲙⲏ.",
            translit: "kaj n tensēmē.",
            meaning: {
              de: "Verstehe unsere Rede.",
              en: "Understand our speech.",
              ar: "افهم كلامنا.",
            },
          },
        ],
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "q7-1": {
    id: "q7-1",
    lessonId: "m7-l1",
    title: { de: "Quiz: ⲛ/ⲙ", en: "Quiz: ⲛ/ⲙ", ar: "اختبار: ⲛ/ⲙ" },
    passScore: 70,
    questions: [
      {
        id: "q7-1-1",
        type: "multiple-choice",
        questionText: {
          de: "Objektmarker im Satz ]ⲕⲁϫ __ ⲡⲓⲙⲉⲓⲙⲉ ?",
          en: "Fill the object marker:",
          ar: "أكمل أداة المفعول:",
        },
        options: [
          { de: "ⲛ", en: "n", ar: "ⲛ" },
          { de: "ⲙ", en: "m", ar: "ⲙ" },
          { de: "ⲉ", en: "e", ar: "ⲉ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q7-1-2",
        type: "multiple-choice",
        questionText: {
          de: "Pronominal: ‘ich verstehe ihn’",
          en: "Pronominal: ‘I understand him’",
          ar: "ضميريًا: «أفهمه»",
        },
        options: [
          { de: "]ⲕⲁϫ ⲙⲙⲟⲩ", en: "]kaj ⲙⲙⲟⲩ", ar: "]ⲕⲁϫ ⲙⲙⲟⲩ" },
          { de: "]ⲕⲁϫ ⲙⲙⲟⲫ", en: "]kaj ⲙⲙⲟⲫ", ar: "]ⲕⲁϫ ⲙⲙⲟⲫ" },
          { de: "]ⲕⲁϫ ⲙⲙⲟⲕ", en: "]kaj ⲙⲙⲟⲕ", ar: "]ⲕⲁϫ ⲙⲙⲟⲕ" },
        ],
        correctAnswerIndex: 1,
      },
    ],
  },

  "q7-2": {
    id: "q7-2",
    lessonId: "m7-l2",
    title: { de: "Quiz: ⲉ/ⲉⲣⲟ=", en: "Quiz: ⲉ/ⲉⲣⲟ=", ar: "اختبار: ⲉ/ⲉⲣⲟ=" },
    passScore: 70,
    questions: [
      {
        id: "q7-2-1",
        type: "multiple-choice",
        questionText: {
          de: "ⲥⲱⲧⲙ ⲛⲥⲁ … bedeutet:",
          en: "ⲥⲱⲧⲙ nsa … means:",
          ar: "ⲥⲱⲧⲙ ⲛⲥⲁ … يعني:",
        },
        options: [
          { de: "gehorchen", en: "to obey", ar: "يطيع" },
          { de: "hören", en: "to hear", ar: "يسمع" },
          { de: "riechen", en: "to smell", ar: "يشم" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q7-2-2",
        type: "multiple-choice",
        questionText: {
          de: "‘wir sehen sie’ = ?",
          en: "‘we see them’ = ?",
          ar: "«نراهم» = ؟",
        },
        options: [
          { de: "ⲧⲉⲛⲛⲁⲩ ⲉⲣⲟⲟⲩ", en: "tennau erōou", ar: "ⲧⲉⲛⲛⲁⲩ ⲉⲣⲟⲟⲩ" },
          { de: "ⲧⲉⲛⲥⲱⲧⲙ ⲙⲙⲟⲟⲩ", en: "tensōtm ⲙⲙⲟⲟⲩ", ar: "ⲧⲉⲛⲥⲱⲧⲙ ⲙⲙⲟⲟⲩ" },
          { de: "ⲧⲉⲛⲛⲁⲩ ⲛⲥⲁ ⲟⲩ", en: "tennau nsa ou", ar: "ⲧⲉⲛⲛⲁⲩ ⲛⲥⲁ ⲟⲩ" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "q7-3": {
    id: "q7-3",
    lessonId: "m7-l3",
    title: {
      de: "Quiz: Bedeutungswechsel",
      en: "Quiz: Meaning Shifts",
      ar: "اختبار: تغيّر المعنى",
    },
    passScore: 70,
    questions: [
      {
        id: "q7-3-1",
        type: "multiple-choice",
        questionText: {
          de: "ⲕⲱϣ ⲉ … eher:",
          en: "ⲕⲱϣ e … is:",
          ar: "ⲕⲱϣ ⲉ … هو:",
        },
        options: [
          {
            de: "umringen/suchen/besuchen",
            en: "surround/seek/visit",
            ar: "يحيط/يبحث/يزور",
          },
          { de: "fliehen", en: "flee", ar: "يهرب" },
          { de: "trinken lassen", en: "give to drink", ar: "يسقي" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "q7-4": {
    id: "q7-4",
    lessonId: "m7-l4",
    title: {
      de: "Quiz: Qualitativa + OM",
      en: "Quiz: Qualitative + OM",
      ar: "اختبار: الوصفية + الأداة",
    },
    passScore: 70,
    questions: [
      {
        id: "q7-4-1",
        type: "multiple-choice",
        questionText: {
          de: "‘sie sind in der Welt’ = ?",
          en: "‘they are in the world’ = ?",
          ar: "«هم في العالم» = ؟",
        },
        options: [
          {
            de: "ⲥⲉ,ⲟⲩ ϭⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ",
            en: "se ,ou qen pikosmos",
            ar: "ⲥⲉ,ⲟⲩ ϭⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ",
          },
          {
            de: "ⲥⲉ,ⲟⲩ ⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ",
            en: "se ,ou n pikosmos",
            ar: "ⲥⲉ,ⲟⲩ ⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ",
          },
          {
            de: "ⲥⲉ,ⲟⲩ ⲉ ⲡⲓⲕⲟⲥⲙⲟⲥ",
            en: "se ,ou e pikosmos",
            ar: "ⲥⲉ,ⲟⲩ ⲉ ⲡⲓⲕⲟⲥⲙⲟⲥ",
          },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "q7-5": {
    id: "q7-5",
    lessonId: "m7-l5",
    title: { de: "Quiz: Alltag", en: "Quiz: Everyday", ar: "اختبار: يوميات" },
    passScore: 70,
    questions: [
      {
        id: "q7-5-1",
        type: "multiple-choice",
        questionText: {
          de: "‘Höre uns’ = ?",
          en: "‘Hear us’ = ?",
          ar: "«اسمعنا» = ؟",
        },
        options: [
          { de: "ⲥⲱⲧⲙ ⲙⲙⲟⲛ", en: "sōtm ⲙⲙⲟⲛ", ar: "ⲥⲱⲧⲙ ⲙⲙⲟⲛ" },
          { de: "ⲥⲱⲧⲙ ⲛⲁⲛ", en: "sōtm nan", ar: "ⲥⲱⲧⲙ ⲛⲁⲛ" },
          { de: "ⲥⲱⲧⲙ ⲉ ⲛⲁⲛ", en: "sōtm e nan", ar: "ⲥⲱⲧⲙ ⲉ ⲛⲁⲛ" },
        ],
        correctAnswerIndex: 2,
      },
    ],
  },
};
