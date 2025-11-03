// Module 5 — Verben I (Bohairic): 1. Präsens (intransitiv), Negation, verschobenes Subjekt, Qualitativa im Präsens
// Quellen: 1. Präsens & abhängige Personalpräfixe (Younan pp.62–64) • Negation an / n…an (p.66–68) • Postponed subject `nje (p.65) • Qualitative im Präsens (pp.67–68)

import type { Module, Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  // L1 — 1. Präsens mit abhängigen Personalpräfixen (intransitive Verben)
  "m5-l1": {
    id: "m5-l1",
    order: 1,
    moduleId: "m5",
    title: {
      de: "1. Präsens (intransitiv)",
      en: "First Present (intransitive)",
      ar: "الحاضر الأول (لازم)",
    },
    prerequisites: ["m2-l6"],
    quizId: "m5-q1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Subjektpräfixe vor dem Infinitiv",
          en: "Subject prefixes before infinitive",
          ar: "سوابق الفاعل قبل المصدر",
        },
        rule: {
          de: "Infinitiv + abhängige Personalpräfixe: ]mosi „ich gehe“, `k/`,temosi „du (m/f) gehst“, `fmosi, `cmosi, ten-, teten-, ce-. Vilminor-Regel: bei vilminor-Anlaut (z. B. c-) nimm `, statt `k.",
          en: "Infinitive + dependent personal prefixes: ]mosi 'I am walking', `k/temosi 'you (m/f) are walking', `f-, `c-, ten-, teten-, ce-. Vilminor rule: with vilminor initial, use `, instead of `k.",
          ar: "المصدر + سوابق الضمائر: ]mosi «أنا أمشي»، `k/temosi «أنتَ/أنتِ تمشي»، `f-، `c-، ten-، teten-، ce-. قاعدة vilminor: مع الحروف الخاصة نستعمل `, بدل `k.",
        },
        examples: [
          {
            coptic: "]mosi",
            translit: "]-mosi",
            meaning: { de: "ich gehe", en: "I am walking", ar: "أنا أمشي" },
          },
          {
            coptic: "`kcaji",
            translit: "`k-caji",
            meaning: {
              de: "du (m) sprichst",
              en: "you (m) are speaking",
              ar: "أنتَ تتكلم",
            },
          },
          {
            coptic: "`ccaji",
            translit: "`c-caji",
            meaning: {
              de: "sie spricht",
              en: "she is speaking",
              ar: "هي تتكلم",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "pirwmi `fmosi",
          translit: "pi-rwmi `f-mosi",
          meaning: {
            de: "der Mann geht",
            en: "the man is walking",
            ar: "الرجل يمشي",
          },
        },
      },
    ],
  },

  // L2 — Negation im 1. Präsens: an / n…an
  "m5-l2": {
    id: "m5-l2",
    order: 2,
    moduleId: "m5",
    title: {
      de: "Negation im Präsens",
      en: "Negation in the Present",
      ar: "النفي في الحاضر",
    },
    prerequisites: ["m5-l1"],
    quizId: "m5-q2",
    slides: [
      {
        type: "grammar",
        title: { de: "Zwei Muster", en: "Two patterns", ar: "نمطان" },
        rule: {
          de: "1) Verb + an: `kcaji an „du sprichst nicht“. 2) n + Verb + an: `n`kcaji an – beide sind belegt; das zweite mit zusätzlichem n-Präfix.",
          en: "1) Verb + an: `kcaji an 'you are not speaking'. 2) n + verb + an: `n`kcaji an — both attested; the latter adds an n-prefix.",
          ar: "1) الفعل + an: `kcaji an «أنت لا تتكلم». 2) n + الفعل + an: `n`kcaji an — كلاهما وارد؛ الثاني بإضافة n-.",
        },
        examples: [
          {
            coptic: "`kcaji an",
            translit: "`k-caji an",
            meaning: {
              de: "du (m) sprichst nicht",
              en: "you (m) are not speaking",
              ar: "أنتَ لا تتكلم",
            },
          },
          {
            coptic: "cemosi an",
            translit: "ce-mosi an",
            meaning: {
              de: "sie gehen nicht",
              en: "they are not walking",
              ar: "هم لا يمشون",
            },
          },
        ],
      },
    ],
  },

  // L3 — Verschobenes Subjekt (`nje)
  "m5-l3": {
    id: "m5-l3",
    order: 3,
    moduleId: "m5",
    title: {
      de: "Verschobenes Subjekt",
      en: "Postponed Subject",
      ar: "المبتدأ المؤخر",
    },
    prerequisites: ["m5-l2"],
    quizId: "m5-q3",
    slides: [
      {
        type: "grammar",
        title: {
          de: "`nje nach dem Verb",
          en: "`nje after the verb",
          ar: "`nje بعد الفعل",
        },
        rule: {
          de: "`nje markiert, dass das Subjekt nachgestellt wird: `fhemci `nje pirwmi „es sitzt — der Mann“ = „der Mann sitzt“.",
          en: "`nje marks a postponed subject: `fhemci `nje pirwmi 'is sitting — the man' = 'the man is sitting'.",
          ar: "`nje يعلّم تأخير الفاعل: `fhemci `nje pirwmi «يجلس — الرجل» = «الرجل يجلس».",
        },
        examples: [
          {
            coptic: "`frimi `nje ]`chimi",
            translit: "`f-rimi `nje ti-chimi",
            meaning: {
              de: "die Frau weint",
              en: "the woman is crying",
              ar: "المرأة تبكي",
            },
          },
        ],
      },
    ],
  },

  // L4 — Qualitativa im Präsens (Zustand)
  "m5-l4": {
    id: "m5-l4",
    order: 4,
    moduleId: "m5",
    title: {
      de: "Qualitativa im Präsens",
      en: "Qualitatives in the Present",
      ar: "الأفعال الوصفية في الحاضر",
    },
    prerequisites: ["m5-l3"],
    quizId: "m5-q4",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Zustand nach vollzogener Handlung",
          en: "State after completed action",
          ar: "حالة ناتجة عن فعل",
        },
        rule: {
          de: "Qualitativ = Zustand: cemwout „sie sind tot“, `fobi „er ist durstig“. Bestimmte Verben nur als Qualitativ im Präsens.",
          en: "Qualitative = state: cemwout 'they are dead', `fobi 'he is thirsty'. Some verbs use qualitative only in present.",
          ar: "الوصفية = حالة: cemwout «هم أموات»، `fobi «هو عطشان». بعض الأفعال لا تستعمل إلا الوصفية في الحاضر.",
        },
        examples: [
          {
            coptic: "cemwout",
            translit: "ce-mwout",
            meaning: {
              de: "sie sind tot",
              en: "they are dead",
              ar: "هم أموات",
            },
          },
          {
            coptic: "`fobi",
            translit: "`f-obi",
            meaning: {
              de: "er ist عطشان",
              en: "he is thirsty",
              ar: "هو عطشان",
            },
          },
        ],
      },
    ],
  },

  // L5 — Subjekt als Nomen + (optionales) Präfix
  "m5-l5": {
    id: "m5-l5",
    order: 5,
    moduleId: "m5",
    title: {
      de: "Nomen + Verb (Präfix ggf.)",
      en: "Noun + Verb (prefix may remain)",
      ar: "اسم + فعل (قد يبقى السابق)",
    },
    prerequisites: ["m5-l4"],
    quizId: "m5-q5",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Mit/ohne Dependent-Präfix",
          en: "With/without dependent prefix",
          ar: "مع/بدون السابق",
        },
        rule: {
          de: "Vor dem Verb kann ein Nomen stehen; oft bleibt das Präfix: viwt `fmei „der Vater liebt“. Mitunter entfällt `f: `viwt mei (gleiche Bedeutung).",
          en: "A noun may precede the verb; the dependent prefix often stays: viwt `fmei 'the Father loves'. Sometimes it drops: `viwt mei (same meaning).",
          ar: "قد يسبق الاسمُ الفعلَ؛ غالبًا يبقى السابق: viwt `fmei «الآب يحب». وأحيانًا يسقط: `viwt mei (نفس المعنى).",
        },
        examples: [
          {
            coptic: "viwt `fmei",
            translit: "viwt `f-mei",
            meaning: {
              de: "der Vater liebt",
              en: "the Father loves",
              ar: "الآب يحب",
            },
          },
          {
            coptic: "`viwt mei",
            translit: "`viwt mei",
            meaning: {
              de: "der Vater liebt",
              en: "the Father loves",
              ar: "الآب يحب",
            },
          },
        ],
      },
    ],
  },

  // L6 — Praxislektion (Sprechen/Hören)
  "m5-l6": {
    id: "m5-l6",
    order: 6,
    moduleId: "m5",
    title: {
      de: "Alltag: Sagen, Gehen, Durst",
      en: "Everyday: Speak, Walk, Thirst",
      ar: "عملي: الكلام والمشي والعطش",
    },
    prerequisites: ["m5-l5"],
    quizId: "m5-q6",
    slides: [
      {
        type: "sentence",
        item: {
          text: "]caji an. ]mosi. `fobi.",
          translit: "]-caji an. ]-mosi. `f-obi.",
          meaning: {
            de: "Ich spreche nicht. Ich gehe. Er ist durstig.",
            en: "I’m not speaking. I walk. He is thirsty.",
            ar: "لا أتكلّم. أمشي. هو عطشان.",
          },
        },
      },
      {
        type: "sentence",
        item: {
          text: "`frimi `nje ]`chimi",
          translit: "`f-rimi `nje ti-chimi",
          meaning: {
            de: "Die Frau weint.",
            en: "The woman is crying.",
            ar: "المرأة تبكي.",
          },
        },
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  // pro Lektion 5 Items
  "m5-q1": {
    id: "m5-q1",
    moduleId: "m5",
    lessonId: "m5-l1",
    title: {
      de: "Mini-Quiz: 1. Präsens",
      en: "Mini-Quiz: 1st Present",
      ar: "اختبار صغير: الحاضر الأول",
    },
    passScore: 80,
    questions: [
      {
        id: "m5-q1-1",
        type: "multiple-choice",
        questionText: {
          de: "]mosi bedeutet …",
          en: "]mosi means …",
          ar: "]mosi تعني …",
        },
        options: [
          { de: "ich gehe", en: "I am walking", ar: "أنا أمشي" },
          { de: "du (m) gehst", en: "you (m) are walking", ar: "أنتَ تمشي" },
          { de: "er geht", en: "he is walking", ar: "هو يمشي" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m5-q1-2",
        type: "multiple-choice",
        questionText: {
          de: "`kcaji ist …",
          en: "`kcaji is …",
          ar: "`kcaji هي …",
        },
        options: [
          {
            de: "du (m) sprichst",
            en: "you (m) are speaking",
            ar: "أنتَ تتكلم",
          },
          { de: "sie spricht", en: "she is speaking", ar: "هي تتكلم" },
          {
            de: "ihr (pl) sprecht",
            en: "you (pl) are speaking",
            ar: "أنتم تتكلمون",
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m5-q1-3",
        type: "multiple-choice",
        questionText: {
          de: "Vilminor-Regel betrifft …",
          en: "Vilminor rule concerns …",
          ar: "قاعدة vilminor تخص …",
        },
        options: [
          {
            de: "Wahl `, vs `k",
            en: "choice `, vs `k",
            ar: "اختيار `, بدل `k",
          },
          { de: "Wahl pi vs ]", en: "choice pi vs ]", ar: "اختيار pi أم ]" },
          {
            de: "Wahl ni vs nen",
            en: "choice ni vs nen",
            ar: "اختيار ni أم nen",
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m5-q1-4",
        type: "multiple-choice",
        questionText: {
          de: "Form von „sie sprechen“:",
          en: "Form of 'they speak':",
          ar: "صيغة «هم يتكلمون»:",
        },
        options: [
          { de: "teten-caji", en: "teten-caji", ar: "teten-caji" },
          { de: "cecaji", en: "ce-caji", ar: "ce-caji" },
          { de: "cemosi", en: "ce-mosi", ar: "ce-mosi" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m5-q1-5",
        type: "multiple-choice",
        questionText: {
          de: "„der Mann geht“ korrekt:",
          en: "Correct 'the man is walking':",
          ar: "الصحيح «الرجل يمشي»:",
        },
        options: [
          { de: "pirwmi mosi", en: "pirwmi mosi", ar: "pirwmi mosi" },
          { de: "pirwmi `fmosi", en: "pirwmi `fmosi", ar: "pirwmi `fmosi" },
          {
            de: "`fmosi `nje pirwmi",
            en: "`fmosi `nje pirwmi",
            ar: "`fmosi `nje pirwmi",
          },
        ],
        correctAnswerIndex: 1,
      },
    ],
  },

  "m5-q2": {
    id: "m5-q2",
    moduleId: "m5",
    lessonId: "m5-l2",
    title: {
      de: "Mini-Quiz: Negation",
      en: "Mini-Quiz: Negation",
      ar: "اختبار صغير: النفي",
    },
    passScore: 80,
    questions: [
      {
        id: "m5-q2-1",
        type: "multiple-choice",
        questionText: {
          de: "Wähle die korrekte Verneinung: „du (m) sprichst nicht“",
          en: "Pick the correct negation: 'you (m) are not speaking'",
          ar: "اختر النفي الصحيح: «أنتَ لا تتكلم»",
        },
        options: [
          { de: "`kcaji an", en: "`kcaji an", ar: "`kcaji an" },
          { de: "`kcaji", en: "`kcaji", ar: "`kcaji" },
          { de: "an `kcaji", en: "an `kcaji", ar: "an `kcaji" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m5-q2-2",
        type: "multiple-choice",
        questionText: {
          de: "Alternative mit n-Präfix:",
          en: "Alternative with n-prefix:",
          ar: "البديل مع n-:",
        },
        options: [
          { de: "`n`kcaji an", en: "`n`kcaji an", ar: "`n`kcaji an" },
          { de: "`kcaji n an", en: "`kcaji n an", ar: "`kcaji n an" },
          { de: "`kan caji", en: "`kan caji", ar: "`kan caji" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m5-q2-3",
        type: "multiple-choice",
        questionText: {
          de: "„sie gehen nicht“:",
          en: "'they are not walking':",
          ar: "«هم لا يمشون»:",
        },
        options: [
          { de: "cemosi", en: "ce-mosi", ar: "ce-mosi" },
          { de: "cemosi an", en: "ce-mosi an", ar: "ce-mosi an" },
          { de: "`ncemosi", en: "`nce-mosi", ar: "`nce-mosi" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m5-q2-4",
        type: "multiple-choice",
        questionText: {
          de: "Welche Aussage trifft zu?",
          en: "Which statement is true?",
          ar: "أي عبارة صحيحة؟",
        },
        options: [
          {
            de: "an steht vor dem Verb",
            en: "an stands before the verb",
            ar: "an قبل الفعل",
          },
          {
            de: "an folgt dem Verb",
            en: "an follows the verb",
            ar: "an بعد الفعل",
          },
          {
            de: "an ersetzt das Präfix",
            en: "an replaces the prefix",
            ar: "an يستبدل السابقة",
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m5-q2-5",
        type: "multiple-choice",
        questionText: {
          de: "n…an + Verb ist …",
          en: "n…an + verb is …",
          ar: "n…an + الفعل هو …",
        },
        options: [
          { de: "ungrammatisch", en: "ungrammatical", ar: "غير صحيح" },
          {
            de: "belegt als Negation",
            en: "attested as negation",
            ar: "وارد كنفي",
          },
          {
            de: "nur in Vergangenheit",
            en: "only in past",
            ar: "فقط في الماضي",
          },
        ],
        correctAnswerIndex: 1,
      },
    ],
  },

  "m5-q3": {
    id: "m5-q3",
    moduleId: "m5",
    lessonId: "m5-l3",
    title: {
      de: "Mini-Quiz: `nje",
      en: "Mini-Quiz: `nje",
      ar: "اختبار صغير: `nje",
    },
    passScore: 80,
    questions: [
      {
        id: "m5-q3-1",
        type: "multiple-choice",
        questionText: {
          de: "Funktion von `nje:",
          en: "Function of `nje:",
          ar: "وظيفة `nje:",
        },
        options: [
          {
            de: "zeigt Besitz an",
            en: "marks possession",
            ar: "يدل على الملكية",
          },
          {
            de: "verschiebt Subjekt nach dem Verb",
            en: "postpones subject after verb",
            ar: "يؤخر الفاعل بعد الفعل",
          },
          { de: "Negation", en: "negation", ar: "نفي" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m5-q3-2",
        type: "multiple-choice",
        questionText: {
          de: "„die Frau weint“ mit `nje:",
          en: "“the woman is crying” with `nje:",
          ar: "«المرأة تبكي» مع `nje:",
        },
        options: [
          {
            de: "`frimi `nje ]`chimi",
            en: "`frimi `nje ]`chimi",
            ar: "`frimi `nje ]`chimi",
          },
          { de: "]`chimi `frimi", en: "]`chimi `frimi", ar: "]`chimi `frimi" },
          {
            de: "`frimi ]`chimi `nje",
            en: "`frimi ]`chimi `nje",
            ar: "`frimi ]`chimi `nje",
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m5-q3-3",
        type: "multiple-choice",
        questionText: {
          de: "„Der Mann sitzt“ (ohne `nje):",
          en: "'The man is sitting' (without `nje):",
          ar: "«الرجل يجلس» بدون `nje:",
        },
        options: [
          {
            de: "`fhemci `nje pirwmi",
            en: "`fhemci `nje pirwmi",
            ar: "`fhemci `nje pirwmi",
          },
          { de: "pirwmi `fhemci", en: "pirwmi `fhemci", ar: "pirwmi `fhemci" },
          { de: "`fhemci pirwmi", en: "`fhemci pirwmi", ar: "`fhemci pirwmi" },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "m5-q3-4",
        type: "multiple-choice",
        questionText: {
          de: "`nje wird typ. …",
          en: "`nje is typically …",
          ar: "`nje عادةً …",
        },
        options: [
          {
            de: "übersetzt als „wer/der“",
            en: "translated 'who/that'",
            ar: "تُترجم «الذي»",
          },
          { de: "nicht übersetzt", en: "left untranslated", ar: "غير مترجمة" },
          { de: "als „nicht“", en: "as 'not'", ar: "«ليس»" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m5-q3-5",
        type: "multiple-choice",
        questionText: {
          de: "Wähle eine richtige Aussage:",
          en: "Pick a true statement:",
          ar: "اختر عبارة صحيحة:",
        },
        options: [
          {
            de: "`nje steht vor dem Subjekt",
            en: "`nje stands before the subject",
            ar: "`nje قبل الفاعل",
          },
          {
            de: "`nje steht nach dem Verb",
            en: "`nje stands after the verb",
            ar: "`nje بعد الفعل",
          },
          {
            de: "`nje ersetzt das Präfix",
            en: "`nje replaces the prefix",
            ar: "`nje يستبدل السابقة",
          },
        ],
        correctAnswerIndex: 1,
      },
    ],
  },

  "m5-q4": {
    id: "m5-q4",
    moduleId: "m5",
    lessonId: "m5-l4",
    title: {
      de: "Mini-Quiz: Qualitativa",
      en: "Mini-Quiz: Qualitatives",
      ar: "اختبار صغير: الوصفية",
    },
    passScore: 80,
    questions: [
      {
        id: "m5-q4-1",
        type: "multiple-choice",
        questionText: {
          de: "cemwout bedeutet …",
          en: "cemwout means …",
          ar: "cemwout تعني …",
        },
        options: [
          { de: "sie sterben", en: "they die", ar: "يموتون" },
          { de: "sie sind tot", en: "they are dead", ar: "هم أموات" },
          { de: "sie gingen", en: "they went", ar: "ذهبوا" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m5-q4-2",
        type: "multiple-choice",
        questionText: { de: "`fobi ist …", en: "`fobi is …", ar: "`fobi هو …" },
        options: [
          { de: "Infinitiv", en: "infinitive", ar: "مصدر" },
          {
            de: "Qualitativ (Zustand)",
            en: "qualitative (state)",
            ar: "وصفية (حالة)",
          },
          { de: "Imperativ", en: "imperative", ar: "أمر" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m5-q4-3",
        type: "multiple-choice",
        questionText: {
          de: "Welche Aussage stimmt?",
          en: "Which is true?",
          ar: "أيها صحيح؟",
        },
        options: [
          {
            de: "Qualitativa stehen nicht im Präsens",
            en: "Qualitatives not used in present",
            ar: "الوصفية لا تأتي في الحاضر",
          },
          {
            de: "Einige Verben nutzen nur Qualitativ im Präsens",
            en: "Some verbs use only qualitative in present",
            ar: "بعض الأفعال لا تُستعمل إلا وصفية في الحاضر",
          },
          {
            de: "Qualitativa sind immer Vergangenheit",
            en: "Qualitatives are always past",
            ar: "الوصفية دائمًا ماضٍ",
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m5-q4-4",
        type: "multiple-choice",
        questionText: {
          de: "Übersetze: „er ist durstig“",
          en: "Translate: 'he is thirsty'",
          ar: "ترجم: «هو عطشان»",
        },
        options: [
          { de: "`fobi", en: "`fobi", ar: "`fobi" },
          { de: "afobi", en: "afobi", ar: "afobi" },
          { de: "obi", en: "obi", ar: "obi" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m5-q4-5",
        type: "multiple-choice",
        questionText: {
          de: "Wähle Qualitativ:",
          en: "Pick qualitative:",
          ar: "اختر الوصفية:",
        },
        options: [
          { de: "mosi", en: "mosi", ar: "mosi" },
          { de: "hiwout", en: "hiwout", ar: "hiwout" },
          { de: "caji", en: "caji", ar: "caji" },
        ],
        correctAnswerIndex: 1,
      },
    ],
  },

  "m5-q5": {
    id: "m5-q5",
    moduleId: "m5",
    lessonId: "m5-l5",
    title: {
      de: "Mini-Quiz: Nomen + Verb",
      en: "Mini-Quiz: Noun + Verb",
      ar: "اختبار صغير: اسم + فعل",
    },
    passScore: 80,
    questions: [
      {
        id: "m5-q5-1",
        type: "multiple-choice",
        questionText: {
          de: "Welche sind beide möglich?",
          en: "Which two are both possible?",
          ar: "أي الصيغتين كلتاهما ممكنة؟",
        },
        options: [
          {
            de: "viwt mei / viwt `fmei",
            en: "viwt mei / viwt `fmei",
            ar: "viwt mei / viwt `fmei",
          },
          {
            de: "viwt `nmei / viwt `fmei",
            en: "viwt `nmei / viwt `fmei",
            ar: "viwt `nmei / viwt `fmei",
          },
          {
            de: "`viwt an / `viwt `n",
            en: "`viwt an / `viwt `n",
            ar: "`viwt an / `viwt `n",
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m5-q5-2",
        type: "multiple-choice",
        questionText: {
          de: "„der Vater liebt“ ohne Präfix:",
          en: "'the Father loves' without prefix:",
          ar: "«الآب يحب» دون السابقة:",
        },
        options: [
          { de: "`viwt mei", en: "`viwt mei", ar: "`viwt mei" },
          { de: "viwt `fmei", en: "viwt `fmei", ar: "viwt `fmei" },
          { de: "`fmei viwt", en: "`fmei viwt", ar: "`fmei viwt" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m5-q5-3",
        type: "multiple-choice",
        questionText: {
          de: "Präfix `f markiert …",
          en: "`f- marks …",
          ar: "`f- يعلّم …",
        },
        options: [
          { de: "3. Sg. mask.", en: "3rd sg. masc.", ar: "مفرد مذكر" },
          { de: "3. Sg. fem.", en: "3rd sg. fem.", ar: "مفرد مؤنث" },
          { de: "1. Pl.", en: "1st pl.", ar: "جمع أول" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m5-q5-4",
        type: "multiple-choice",
        questionText: {
          de: "„die Frau weint“ (Standard-Reihenfolge):",
          en: "'the woman weeps' (standard order):",
          ar: "«المرأة تبكي» (الترتيب العادي):",
        },
        options: [
          {
            de: "]`chimi `frimi",
            en: "ti-chimi `f-rimi",
            ar: "ti-chimi `f-rimi",
          },
          {
            de: "`frimi `nje ]`chimi",
            en: "`f-rimi `nje ti-chimi",
            ar: "`f-rimi `nje ti-chimi",
          },
          {
            de: "`frimi ]`chimi",
            en: "`f-rimi ti-chimi",
            ar: "`f-rimi ti-chimi",
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m5-q5-5",
        type: "multiple-choice",
        questionText: {
          de: "Welche Aussage ist falsch?",
          en: "Which statement is false?",
          ar: "أي عبارة خاطئة؟",
        },
        options: [
          {
            de: "Nomen kann vor dem Verb stehen.",
            en: "Noun may precede the verb.",
            ar: "يمكن أن يتقدّم الاسم على الفعل.",
          },
          {
            de: "Präfix fällt nie weg.",
            en: "Prefix never drops.",
            ar: "السابقة لا تسقط مطلقًا.",
          },
          {
            de: "Präfix kann stehenbleiben.",
            en: "Prefix can remain.",
            ar: "يمكن أن تبقى السابقة.",
          },
        ],
        correctAnswerIndex: 1,
      },
    ],
  },

  // Modul-Endtest (25 Items)
  "m5-exam": {
    id: "m5-exam",
    moduleId: "m5",
    lessonId: "m5-l6",
    title: {
      de: "Modul-Endtest: Verben I",
      en: "Module Exam: Verbs I",
      ar: "اختبار الوحدة: الأفعال ١",
    },
    passScore: 80,
    questions: Array.from({ length: 25 }).map((_, i) => ({
      id: `m5-ex-${i + 1}`,
      type: "multiple-choice" as const,
      questionText: {
        de: "Wähle die korrekte Form (Präsens/Negation/`nje/Qualitativ).",
        en: "Choose the correct form (present/negation/`nje/qualitative).",
        ar: "اختر الصيغة الصحيحة (حاضر/نفي/`nje/وصفي).",
      },
      options: [
        {
          de: "]mosi / `kcaji an / `frimi `nje ]`chimi",
          en: "]mosi / `kcaji an / `frimi `nje ]`chimi",
          ar: "]mosi / `kcaji an / `frimi `nje ]`chimi",
        },
        {
          de: "`mosi] / `an `kcaji / `nje `frimi ]`chimi",
          en: "`mosi] / `an `kcaji / `nje `frimi ]`chimi",
          ar: "`mosi] / `an `kcaji / `nje `frimi ]`chimi",
        },
        {
          de: "mosi] / kcaji an / `frimi ]`chimi",
          en: "mosi] / kcaji an / `frimi ]`chimi",
          ar: "mosi] / kcaji an / `frimi ]`chimi",
        },
      ],
      correctAnswerIndex: 0,
    })),
  },
};

export const MODULE_M5: Module = {
  id: "m5",
  order: 5,
  title: {
    de: "Verben I: 1. Präsens, Negation, `nje",
    en: "Verbs I: 1st Present, Negation, `nje",
    ar: "الأفعال ١: الحاضر الأوّل، النفي، `nje",
  },
  lessons: Object.keys(LESSONS).filter((k) => k.startsWith("m5-")),
  quizIds: Object.keys(QUIZZES).filter((k) => k.startsWith("m5-")),
};
