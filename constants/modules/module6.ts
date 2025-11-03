// Module 6 — Präpositionen (Bohairisch, nach Younan)
// Quellenhinweis: einfache Präpositionen & pronominale Formen; Verb + Objektmarker/Präp.; Bedeutungsverschiebungen; zusammengesetzte Präpositionen.
// (Siehe Belege in der Chat-Antwort unter „Quellnachweise“.)

import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m6-l1": {
    id: "m6-l1",
    order: 1,
    moduleId: "m6",
    title: {
      de: "Einfache Präpositionen I",
      en: "Simple Prepositions I",
      ar: "حروف الجر البسيطة I",
    },
    prerequisites: [],
    quizId: "q6-1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Grundidee & Stellung",
          en: "Core Idea & Placement",
          ar: "الفكرة والموقع",
        },
        rule: {
          de: "Einfache Präpositionen stehen vor dem Substantiv (Prenomen-Form). Beispiele: ⲉ ‘zu/auf … hin’, ⲛ ‘in/bei (ohne Bewegung)’, ϭⲉⲛ ‘in’, ⲛⲉⲙ ‘mit’, ϩⲓ ‘auf’, ϩⲁ ‘zu, nach’, ⲥⲁ ‘bis/zu’, ϫⲁ ‘unter/gegen’.",
          en: "Simple prepositions precede the noun (prenoun form). Examples: ⲉ ‘to/toward’, ⲛ ‘in/at (no motion)’, ϭⲉⲛ ‘in’, ⲛⲉⲙ ‘with’, ϩⲓ ‘on’, ϩⲁ ‘to/ toward’, ⲥⲁ ‘till/to’, ϫⲁ ‘under/against’.",
          ar: "تسبق حروف الجر الاسم: ⲉ إلى/نحو، ⲛ في/عند، ϭⲉⲛ في، ⲛⲉⲙ مع، ϩⲓ على، ϩⲁ إلى، ⲥⲁ حتى/إلى، ϫⲁ تحت/ضد.",
        },
        examples: [
          {
            coptic: "ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ ϭⲉⲛ ⲓ̅ⲗ̅ⲏ̅ⲙ̅",
            translit: "ni-apostolos qen Iērēlēm",
            meaning: {
              de: "die Apostel in Jerusalem",
              en: "the apostles in Jerusalem",
              ar: "الرسل في أورشليم",
            },
          },
          {
            coptic: "ⲥⲁ ⲧⲉⲕⲓ",
            translit: "sa tek-i",
            meaning: {
              de: "bis/solange du kommst",
              en: "till you come",
              ar: "حتى مجيئك",
            },
          },
          {
            coptic: "ϩⲓ ⲡⲓⲕⲟⲥⲙⲟⲥ",
            translit: "hi pikosmos",
            meaning: {
              de: "auf/über der Welt / im Kosmos (Kontext-abh.)",
              en: "on/in the world (by context)",
              ar: "على/في العالم (حسب السياق)",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Kontrast ⲉ vs. ⲛ",
          en: "Contrast ⲉ vs. ⲛ",
          ar: "تمييز ⲉ مقابل ⲛ",
        },
        rule: {
          de: "ⲉ drückt Bewegung/Ziel aus (‚hin zu‘). ⲛ steht typ. ohne Bewegungsrichtung (‚in/bei‘). ϭⲉⲛ ist ‚in (Innenlage)‘.",
          en: "ⲉ marks motion/goal (‘toward’). ⲛ typically without motion (‘in/at’). ϭⲉⲛ ‘inside/in’.",
          ar: "ⲉ للحركة نحو هدف؛ ⲛ للسكون في/عند؛ ϭⲉⲛ داخل/في.",
        },
        examples: [
          {
            coptic: "ⲓⲛⲁⲩ ⲉ ⲡⲓⲣⲱⲙⲓ",
            translit: "inau e pirōmi",
            meaning: {
              de: "ich sehe den Mann",
              en: "I see the man",
              ar: "أرى الرجل",
            },
          },
          {
            coptic: "ⲁⲛⲟⲕ ⲛⲁⲓ ϭⲉⲛ ⲓⲱⲡⲡⲏ",
            translit: "anok nai qen Iōppē",
            meaning: {
              de: "ich war in Joppe",
              en: "I was in Joppa",
              ar: "كنتُ في يافا",
            },
          },
        ],
      },
    ],
  },

  "m6-l2": {
    id: "m6-l2",
    order: 2,
    moduleId: "m6",
    title: {
      de: "Präpositionen: pronominale Formen",
      en: "Prepositional Pronominals",
      ar: "صيغ الضمائر لحروف الجر",
    },
    prerequisites: ["m6-l1"],
    quizId: "q6-2",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Anschluss der Endungen",
          en: "Attaching Endings",
          ar: "إلحاق اللواحق",
        },
        rule: {
          de: "Einfache Präpositionen besitzen pronominale Formen mittels derselben Personal-Suffixe wie Verben. Z. B. ⲉ ⟶ ⲉⲣⲟ= (zu/für jmd.), ϭⲉⲛ ⟶ ⲛϭⲟⲧ= (in uns …), ϫⲁ ⟶ ϫⲁⲣⲟ= (unter/wegen jmd.).",
          en: "Simple prepositions have pronominal forms with the same personal suffixes as verbs. E.g. ⲉ → ⲉⲣⲟ=, ϭⲉⲛ → ⲛϭⲟⲧ=, ϫⲁ → ϫⲁⲣⲟ=.",
          ar: "لها صيغ ضميرية تُكوَّن بلواحق شخصية كالأفعال: ⲉ ← ⲉⲣⲟ= ؛ ϭⲉⲛ ← ⲛϭⲟⲧ= ؛ ϫⲁ ← ϫⲁⲣⲟ=.",
        },
        examples: [
          {
            coptic: "ⲧⲉⲛⲛⲁⲩ ⲉⲣⲱⲟⲩ",
            translit: "tennau erōou",
            meaning: { de: "wir sehen sie", en: "we see them", ar: "نراهم" },
          },
          {
            coptic: "ⲧⲉⲛⲥⲱⲧⲙ ⲛⲥⲁ ⲛⲓⲉⲛⲧⲟⲗⲏ",
            translit: "tensōtm nca nientolē",
            meaning: {
              de: "wir gehorchen den Geboten",
              en: "we obey the commandments",
              ar: "نطيع الوصايا",
            },
          },
          {
            coptic: "ⲡⲉⲧⲣⲟⲥ ⲫⲓⲁⲗⲱⲧ ⲉⲡⲁⲓⲙⲁ",
            translit: "petros fialōt epaima",
            meaning: {
              de: "Petrus wohnt an diesem Ort",
              en: "Peter dwells in this place",
              ar: "بطرس مقيم في هذا الموضع",
            },
          },
        ],
      },
    ],
  },

  "m6-l3": {
    id: "m6-l3",
    order: 3,
    moduleId: "m6",
    title: {
      de: "Verb + Präposition: Bedeutungswechsel",
      en: "Verb + Preposition: Meaning Shifts",
      ar: "الفعل + الحرف: تغيّر المعنى",
    },
    prerequisites: ["m6-l2"],
    quizId: "q6-3",
    slides: [
      {
        type: "grammar",
        title: { de: "Wichtiges Muster", en: "Key Pattern", ar: "نمط رئيس" },
        rule: {
          de: "Bei vielen Verben hängt die Bedeutung vom verwendeten Objektmarker/der Präposition ab (z. B. ⲥⲱⲧⲙ ⲉ … ‘hören’ vs. ⲥⲱⲧⲙ ⲛⲥⲁ … ‘gehorchen’).",
          en: "For many verbs, the meaning depends on the object marker/preposition (e.g., ⲥⲱⲧⲙ ⲉ … ‘to hear’ vs. ⲥⲱⲧⲙ ⲛⲥⲁ … ‘to obey’).",
          ar: "تتغير دلالة أفعال كثيرة بحسب أداة المفعول/حرف الجر (مثال: ⲥⲱⲧⲙ ⲉ … ‘يسمع’ مقابل ⲥⲱⲧⲙ ⲛⲥⲁ … ‘يطيع’).",
        },
        examples: [
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
          {
            coptic: "ⲕⲁϫ ⲉ ⲡⲓⲙⲉⲓⲙⲉ",
            translit: "kaj e pimeime",
            meaning: {
              de: "verstehen (die Wahrheit)",
              en: "to understand (the truth)",
              ar: "يفهم (الحق)",
            },
          },
        ],
      },
    ],
  },

  "m6-l4": {
    id: "m6-l4",
    order: 4,
    moduleId: "m6",
    title: {
      de: "Zusammengesetzte Präpositionen",
      en: "Compound Prepositions",
      ar: "حروف جر مركبة",
    },
    prerequisites: ["m6-l3"],
    quizId: "q6-4",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Bildung mit Körperteilen",
          en: "Built with ‘body parts’",
          ar: "تتكوّن مع أسماء الأعضاء",
        },
        rule: {
          de: "Zusammensetzungen entstehen aus einfachen Präpositionen + sog. ‚besessenen‘ Körperteil-Nomen (z. B. ⲉ + ⲓⲟⲟⲩⲱ= ⟶ ⲉⲓⲉⲛ ‘auf/über, wtl. an den Kopf von’; ⲉ + ⲣⲱ= ⟶ ⲉⲣⲉⲛ ‘zum Mund/gegenüber’; ⲛ + ⲥⲁ= ⟶ ⲛⲥⲁ ‘hinter/nach’).",
          en: "Compounds combine simple prepositions with possessed body-part nouns (e.g., ⲉ + ⲓⲟⲟⲩⲱ= → ⲉⲓⲉⲛ ‘upon’; ⲉ + ⲣⲱ= → ⲉⲣⲉⲛ ‘toward the face/of’; ⲛ + ⲥⲁ= → ⲛⲥⲁ ‘behind/after’).",
          ar: "تُشتق من مزج حرف بسيط مع اسم عضو ملحوق: مثل ⲉ + ⲓⲟⲟⲩⲱ= ← ⲉⲓⲉⲛ ‘على/فوق’، وⲉ + ⲣⲱ= ← ⲉⲣⲉⲛ ‘إلى فم/أمام’، وⲛ + ⲥⲁ= ← ⲛⲥⲁ ‘خلف/بعد’.",
        },
        examples: [
          {
            coptic: "ⲥⲉⲟⲩⲟⲙ ⲉⲓⲱⲟⲩ ⲛⲛⲟⲩ[ⲁⲗⲁⲩϫ",
            translit: "se-ouōm ejwou enno[u]alauj",
            meaning: {
              de: "sie zerstoßen ‚auf‘ ihre Füße",
              en: "they crush upon them with their feet",
              ar: "يسحقون عليهم بأرجلهم",
            },
          },
          {
            coptic: "ⲧⲉⲛⲥⲱⲧⲙ ⲛⲥⲁ ⲛⲉⲕⲉⲛⲧⲟⲗⲏ",
            translit: "tensōtm nca nekentolē",
            meaning: {
              de: "wir gehorchen deinen Geboten",
              en: "we obey your commandments",
              ar: "نطيع وصاياك",
            },
          },
        ],
      },
    ],
  },

  "m6-l5": {
    id: "m6-l5",
    order: 5,
    moduleId: "m6",
    title: {
      de: "Alltagssprache mit Präpositionen",
      en: "Everyday Phrases with Prepositions",
      ar: "تعبيرات حياتية مع الحروف",
    },
    prerequisites: ["m6-l4"],
    quizId: "q6-5",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Mini-Phrasen bauen",
          en: "Build Mini Phrases",
          ar: "ركّب عبارات قصيرة",
        },
        rule: {
          de: "Produktiv anwenden: Weg-/Richtungsangaben (ⲉ/ⲥⲁ/ϩⲁ), Ort/Zustand (ⲛ/ϭⲉⲛ), Begleitung (ⲛⲉⲙ), Thema/‚über‘ (ⲉⲩⲃⲉ).",
          en: "Use productively: path/goal (ⲉ/ⲥⲁ/ϩⲁ), location/state (ⲛ/ϭⲉⲛ), comitative (ⲛⲉⲙ), ‘about’ (ⲉⲩⲃⲉ).",
          ar: "استعمال إنتاجي: الاتجاه/الغاية (ⲉ/ⲥⲁ/ϩⲁ)، المكان/الحالة (ⲛ/ϭⲉⲛ)، المصاحبة (ⲛⲉⲙ)، عن/بخصوص (ⲉⲩⲃⲉ).",
        },
        examples: [
          {
            coptic: "ⲁⲛⲟⲕ ⲡⲉ. ⲁⲛⲟⲕ ϭⲉⲛ ⲡⲓⲟⲓⲕ",
            translit: "anok pe. anok qen pioik",
            meaning: {
              de: "Ich bin’s. Ich bin zu Hause.",
              en: "It’s me. I’m at home.",
              ar: "أنا. أنا في البيت.",
            },
          },
          {
            coptic: "ⲥⲁⲧⲉⲕⲓ!",
            translit: "sa-tek-i!",
            meaning: {
              de: "Bis du kommst!",
              en: "Till you come!",
              ar: "حتى مجيئك!",
            },
          },
          {
            coptic: "ⲛⲉⲙ ⲡⲉⲕϩⲟⲣⲁⲥ",
            translit: "nem pek-horas",
            meaning: {
              de: "mit deiner Zeit/auf deine Zeit",
              en: "with your time",
              ar: "مع وقتك",
            },
          },
        ],
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "q6-1": {
    id: "q6-1",
    lessonId: "m6-l1",
    title: {
      de: "Quiz: Einfache Präpositionen I",
      en: "Quiz: Simple Prepositions I",
      ar: "اختبار: الحروف البسيطة I",
    },
    passScore: 70,
    questions: [
      {
        id: "q6-1-1",
        type: "multiple-choice",
        questionText: {
          de: "Welche Präposition markiert Bewegung/Ziel?",
          en: "Which marks motion/goal?",
          ar: "أي حرف يدل على الحركة/الغاية؟",
        },
        options: [
          { de: "ⲉ", en: "ⲉ", ar: "ⲉ" },
          { de: "ⲛ", en: "ⲛ", ar: "ⲛ" },
          { de: "ϭⲉⲛ", en: "ϭⲉⲛ", ar: "ϭⲉⲛ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q6-1-2",
        type: "multiple-choice",
        questionText: {
          de: "Übersetze: ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ ϭⲉⲛ ⲓ̅ⲗ̅ⲏ̅ⲙ̅",
          en: "Translate the phrase:",
          ar: "تَرجِم:",
        },
        options: [
          {
            de: "Apostel nach Jerusalem",
            en: "apostles to Jerusalem",
            ar: "رسل إلى أورشليم",
          },
          {
            de: "Apostel in Jerusalem",
            en: "apostles in Jerusalem",
            ar: "رسل في أورشليم",
          },
          {
            de: "Apostel über Jerusalem",
            en: "apostles over Jerusalem",
            ar: "رسل فوق أورشليم",
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q6-1-3",
        type: "multiple-choice",
        questionText: {
          de: "Welche ist komitativ (Begleitung)?",
          en: "Which is comitative (with)?",
          ar: "أيها للمصاحبة؟",
        },
        options: [
          { de: "ⲛⲉⲙ", en: "nem", ar: "ⲛⲉⲙ" },
          { de: "ϩⲁ", en: "ha", ar: "ϩⲁ" },
          { de: "ϩⲓ", en: "hi", ar: "ϩⲓ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q6-1-4",
        type: "multiple-choice",
        questionText: {
          de: "‘auf’ im Sinn von Lage auf etwas:",
          en: "‘on’ as location:",
          ar: "على (موضعًا)",
        },
        options: [
          { de: "ϩⲓ", en: "hi", ar: "ϩⲓ" },
          { de: "ϫⲁ", en: "qa", ar: "ϫⲁ" },
          { de: "ⲥⲁ", en: "sa", ar: "ⲥⲁ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q6-1-5",
        type: "multiple-choice",
        questionText: {
          de: "Welche bedeutet ‚bis/solange‘?",
          en: "Which means ‘till/until’?",
          ar: "أي تعني حتى؟",
        },
        options: [
          { de: "ⲥⲁ", en: "sa", ar: "ⲥⲁ" },
          { de: "ⲛ", en: "n", ar: "ⲛ" },
          { de: "ⲛⲉⲙ", en: "nem", ar: "ⲛⲉⲙ" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "q6-2": {
    id: "q6-2",
    lessonId: "m6-l2",
    title: {
      de: "Quiz: pronominale Formen",
      en: "Quiz: pronominal forms",
      ar: "اختبار: الصيغ الضميرية",
    },
    passScore: 70,
    questions: [
      {
        id: "q6-2-1",
        type: "multiple-choice",
        questionText: { de: "ⲉ ⟶ ?", en: "ⲉ → ?", ar: "ⲉ ← ؟" },
        options: [
          { de: "ⲉⲣⲟ=", en: "ero=", ar: "ⲉⲣⲟ=" },
          { de: "ⲛϭⲟⲧ=", en: "nq/t=", ar: "ⲛϭⲟⲧ=" },
          { de: "ϩⲓⲟⲟⲩ=", en: "hiw=", ar: "ϩⲓⲟⲟⲩ=" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q6-2-2",
        type: "multiple-choice",
        questionText: {
          de: "Übersetze: ⲧⲉⲛⲛⲁⲩ ⲉⲣⲱⲟⲩ",
          en: "Translate:",
          ar: "تَرجِم:",
        },
        options: [
          { de: "wir sehen sie", en: "we see them", ar: "نراهم" },
          {
            de: "wir sprechen über sie",
            en: "we speak about them",
            ar: "نتحدث عنهم",
          },
          { de: "wir sind bei ihnen", en: "we are at them", ar: "نحن عندهم" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q6-2-3",
        type: "multiple-choice",
        questionText: {
          de: "Welche ist ‘gegen/über’ (Thema)?",
          en: "Which means ‘about/concerning’?",
          ar: "أي تعني عن/بخصوص؟",
        },
        options: [
          { de: "ⲉⲩⲃⲉ", en: "eybe", ar: "ⲉⲩⲃⲉ" },
          { de: "ⲛⲥⲁ", en: "nca", ar: "ⲛⲥⲁ" },
          { de: "ϩⲁ", en: "ha", ar: "ϩⲁ" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "q6-3": {
    id: "q6-3",
    lessonId: "m6-l3",
    title: {
      de: "Quiz: Verb + Präposition",
      en: "Quiz: Verb + Preposition",
      ar: "اختبار: الفعل + الحرف",
    },
    passScore: 70,
    questions: [
      {
        id: "q6-3-1",
        type: "multiple-choice",
        questionText: {
          de: "ⲥⲱⲧⲙ ⲛⲥⲁ … bedeutet:",
          en: "ⲥⲱⲧⲙ nsa … means:",
          ar: "ⲥⲱⲧⲙ ⲛⲥⲁ … يعني:",
        },
        options: [
          { de: "hören", en: "to hear", ar: "يسمع" },
          { de: "gehorchen", en: "to obey", ar: "يطيع" },
          { de: "fragen", en: "to ask", ar: "يسأل" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q6-3-2",
        type: "multiple-choice",
        questionText: {
          de: "ⲕⲁϫ ⲉ … = ?",
          en: "kaj e … = ?",
          ar: "ⲕⲁϫ ⲉ … = ؟",
        },
        options: [
          { de: "verstehen", en: "understand", ar: "يفهم" },
          { de: "tragen", en: "carry", ar: "يحمل" },
          { de: "gehen", en: "go", ar: "يذهب" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "q6-4": {
    id: "q6-4",
    lessonId: "m6-l4",
    title: {
      de: "Quiz: zusammengesetzte Präpositionen",
      en: "Quiz: compound prepositions",
      ar: "اختبار: الحروف المركبة",
    },
    passScore: 70,
    questions: [
      {
        id: "q6-4-1",
        type: "multiple-choice",
        questionText: {
          de: "ⲉ + ⲓⲟⲟⲩⲱ= → ?",
          en: "ⲉ + jw= → ?",
          ar: "ⲉ + ⲓⲟⲟⲩⲱ= → ؟",
        },
        options: [
          { de: "ⲉⲓⲉⲛ", en: "ejen", ar: "ⲉⲓⲉⲛ" },
          { de: "ⲛⲥⲁ", en: "nca", ar: "ⲛⲥⲁ" },
          { de: "ⲉⲣⲉⲛ", en: "eren", ar: "ⲉⲣⲉⲛ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q6-4-2",
        type: "multiple-choice",
        questionText: {
          de: "Bedeutung von ⲉⲣⲉⲛ:",
          en: "Meaning of ⲉⲣⲉⲛ:",
          ar: "معنى ⲉⲣⲉⲛ:",
        },
        options: [
          { de: "hinter/nach", en: "behind/after", ar: "خلف/بعد" },
          {
            de: "gegenüber/vor",
            en: "toward the face/of",
            ar: "نحو الوجه/أمام",
          },
          { de: "oben/über", en: "upon/over", ar: "فوق" },
        ],
        correctAnswerIndex: 1,
      },
    ],
  },

  "q6-5": {
    id: "q6-5",
    lessonId: "m6-l5",
    title: {
      de: "Quiz: Alltagssprache",
      en: "Quiz: Everyday Phrases",
      ar: "اختبار: تعبيرات يومية",
    },
    passScore: 70,
    questions: [
      {
        id: "q6-5-1",
        type: "multiple-choice",
        questionText: {
          de: "Welche ist korrekt für ‘bis du kommst’?",
          en: "Which is ‘till you come’?",
          ar: "أي صحيحة: ‘حتى تأتي’؟",
        },
        options: [
          { de: "ⲥⲁⲧⲉⲕⲓ", en: "satek-i", ar: "ⲥⲁⲧⲉⲕⲓ" },
          { de: "ⲛⲉⲙⲧⲉⲕⲓ", en: "nem-tek-i", ar: "ⲛⲉⲙⲧⲉⲕⲓ" },
          { de: "ϭⲉⲛⲧⲉⲕⲓ", en: "qen-tek-i", ar: "ϭⲉⲛⲧⲉⲕⲓ" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },
};
