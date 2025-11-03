// Modul 2 — Nomen & Artikel (nach Younan)
// Alle Formen & Beispiele: Sameh Younan, *So You Want to Learn Coptic? A Guide to Bohairic Grammar*.
import type { Lesson, Quiz, Module } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m2-l1": {
    id: "m2-l1",
    order: 1,
    moduleId: "m2",
    title: {
      de: "Definite Artikel: starke/schwache Formen & vilminor-Regel",
      en: "Definite Articles: strong/weak forms & the vilminor rule",
      ar: "أدوات التعريف: الصيغ القوية/الضعيفة وقاعدة فيلنيمور",
    },
    prerequisites: ["m1-l1"],
    quizId: "q2-1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Formen der bestimmten Artikel",
          en: "Forms of the definite article",
          ar: "صيغ أداة التعريف",
        },
        rule: {
          de: "Mask.: ⲡⲓ / ⲡ / ⲫ; Fem.: ⲧⲉ / ⲧ / ⲭ. Starke Formen (ⲡⲓ/ⲧⲉ) vorangestellt bei Betonung/Titeln; schwache Formen hängen vom Anlaut des Substantivs ab: »nicht-vilminor« ⟶ ⲡ/ⲧ; »vilminor« (b i l m n o r) ⟶ ⲫ/ⲭ.",
          en: "Masc.: ⲡⲓ / ⲡ / ⲫ; Fem.: ⲧⲉ / ⲧ / ⲭ. Strong forms (ⲡⲓ/ⲧⲉ) are used for emphasis/titles; weak forms depend on the initial letter: non-vilminor → ⲡ/ⲧ; vilminor (b i l m n o r) → ⲫ/ⲭ.",
          ar: "المذكر: ⲡⲓ/ⲡ/ⲫ؛ المؤنث: ⲧⲉ/ⲧ/ⲭ. تُستعمل الصيغ القوية (ⲡⲓ/ⲧⲉ) للتوكيد/الألقاب؛ أمّا الصيغ الضعيفة فبحسب الحرف الأول: غير-فيلنيمور ⟶ ⲡ/ⲧ؛ فيلنيمور (b i l m n o r) ⟶ ⲫ/ⲭ.",
        },
        examples: [
          {
            coptic: "ⲡⲓⲱⲧ",
            translit: "pi-iwt",
            meaning: { de: "der Vater", en: "the father", ar: "الأب" },
          },
          {
            coptic: "ⲫⲓⲱⲧ",
            translit: "viwt",
            meaning: {
              de: "der Vater (Gott der Vater)",
              en: "the Father (God)",
              ar: "الآب (الله)",
            },
          },
          {
            coptic: "ⲧⲉⲙⲁⲩ",
            translit: "te-mau",
            meaning: { de: "die Mutter", en: "the mother", ar: "الأم" },
          },
          {
            coptic: "ⲭⲉⲥⲱⲙⲁ",
            translit: "xe-sōma",
            meaning: {
              de: "der Körper (fem. Subst.)",
              en: "the body (f.)",
              ar: "الجسد (مؤ.)",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲫⲣⲱⲙⲓ ⲛ̀ⲟⲩϫⲁⲓ",
          translit: "v-rōmi n-ouǧai",
          meaning: {
            de: "der gute Mann",
            en: "the good man",
            ar: "الرجل الصالح",
          },
        },
      },
      {
        type: "sentence",
        item: {
          text: "ⲭⲓⲥⲙⲁ ⲛ̀ⲟⲩⲟⲉⲓⲛ",
          translit: "x-isma n-ouōin",
          meaning: {
            de: "die heilige Salbung",
            en: "the holy anointing",
            ar: "المسحة المقدسة",
          },
        },
      },
    ],
  },

  "m2-l2": {
    id: "m2-l2",
    order: 2,
    moduleId: "m2",
    title: {
      de: "Pluralartikel ⲛⲓ/ⲛⲉⲛ & Genitiv mit ⲛⲉⲛ",
      en: "Plural articles ⲛⲓ/ⲛⲉⲛ & the ‘of’-construction with ⲛⲉⲛ",
      ar: 'أدوات الجمع ⲛⲓ/ⲛⲉⲛ وبناء "الـمن" بـ ⲛⲉⲛ',
    },
    prerequisites: ["m2-l1"],
    quizId: "q2-1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Pluralartikel",
          en: "Plural articles",
          ar: "أدوات الجمع",
        },
        rule: {
          de: "ⲛⲓ steht direkt vor dem Substantiv. ⲛⲉⲛ kann vorangestellt werden und dient auch zur ‚of‘-Konstruktion (ⲛⲉⲛ + Nomen + ⲛ + Besitzer).",
          en: "ⲛⲓ precedes the noun. ⲛⲉⲛ can be used and also forms an ‘of’ construction (ⲛⲉⲛ + noun + ⲛ + possessor).",
          ar: "تسبق ⲛⲓ الاسم. تُستعمل ⲛⲉⲛ أيضًا في تركيب الإضافة (ⲛⲉⲛ + اسم + ⲛ + المضاف إليه).",
        },
        examples: [
          {
            coptic: "ⲛⲓϫⲓϫ",
            translit: "ni-ǰiǰ",
            meaning: { de: "Hände", en: "hands", ar: "أيدٍ" },
          },
          {
            coptic: "ⲛⲓⲉⲃⲓⲁⲓⲕ",
            translit: "ni-ebiaik",
            meaning: { de: "Diener", en: "servants", ar: "خُدّام" },
          },
          {
            coptic: "ⲛⲉⲛϫⲓϫ ⲛ̀Ⲁⲁⲣⲱⲛ",
            translit: "nen-ǰiǰ n-Aʼaron",
            meaning: {
              de: "die Hände Aarons",
              en: "the hands of Aaron",
              ar: "أيدي هارون",
            },
          },
        ],
      },
    ],
  },

  "m2-l3": {
    id: "m2-l3",
    order: 3,
    moduleId: "m2",
    title: {
      de: "Indefinit: ⲟⲩ / ⲁⲛ (ⲁⲛⲟⲩⲟⲛ „einige“)",
      en: "Indefinite: ⲟⲩ / ⲁⲛ (ⲁⲛⲟⲩⲟⲛ ‘some people’)",
      ar: "النكرة: ⲟⲩ / ⲁⲛ (ⲁⲛⲟⲩⲟⲛ «بعض الناس»)",
    },
    prerequisites: ["m2-l1"],
    quizId: "q2-2",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Einzahl/Mehrzahl",
          en: "Singular/Plural",
          ar: "مفرد/جمع",
        },
        rule: {
          de: "ⲟⲩ = „ein/e“. Plural hat eigenes Indefinit: ⲁⲛ ‚einige‘; Sonderform: ⲁⲛⲟⲩⲟⲛ „einige (Leute)“.",
          en: "ⲟⲩ = ‘a/an’. Plural has its own indefinite: ⲁⲛ ‘some’; special: ⲁⲛⲟⲩⲟⲛ ‘some (people)’.",
          ar: "ⲟⲩ = «ـاً/ـٌ». للجمع نكرة خاصة: ⲁⲛ «بعض»؛ صيغة خاصة: ⲁⲛⲟⲩⲟⲛ «بعض الناس».",
        },
        examples: [
          {
            coptic: "ⲟⲩⲣⲱⲙⲓ",
            translit: "ou-rōmi",
            meaning: { de: "ein Mann", en: "a man", ar: "رجل" },
          },
          {
            coptic: "ⲟⲩⲭⲏⲙⲓ",
            translit: "ou-khēmi",
            meaning: { de: "eine Frau", en: "a woman", ar: "امرأة" },
          },
          {
            coptic: "ⲁⲛⲣⲱⲙⲉ",
            translit: "han-rōme",
            meaning: { de: "einige Männer", en: "some men", ar: "بعض الرجال" },
          },
          {
            coptic: "ⲁⲛⲟⲩⲟⲩⲛ",
            translit: "han-ouon",
            meaning: {
              de: "einige (Leute)",
              en: "some people",
              ar: "بعض الناس",
            },
          },
        ],
      },
    ],
  },

  "m2-l4": {
    id: "m2-l4",
    order: 4,
    moduleId: "m2",
    title: {
      de: "Possessivartikel (ⲡⲁ/ⲧⲁ/ⲛⲁ …) nach Genus des Objekts",
      en: "Possessive articles (ⲡⲁ/ⲧⲁ/ⲛⲁ …) by the object’s gender",
      ar: "أدوات الملكية حسب جنس الاسم المملوك",
    },
    prerequisites: ["m2-l3"],
    quizId: "q2-3",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Tabelle & Regel",
          en: "Table & rule",
          ar: "الجدول والقاعدة",
        },
        rule: {
          de: "Singular richtet sich nach Genus des OBJEKTS (nicht des Besitzers): m. ⲡⲁ/ⲡⲉⲕ/ⲡⲉ…; f. ⲧⲁ/ⲧⲉⲕ/ⲧⲉ…; Plural ⲛⲁ/ⲛⲉⲕ/ⲛⲉ…",
          en: "In singular, choose by the OBJECT’s gender (not the possessor’s): masc. ⲡⲁ/ⲡⲉⲕ/ⲡⲉ…; fem. ⲧⲁ/ⲧⲉⲕ/ⲧⲉ…; plural ⲛⲁ/ⲛⲉⲕ/ⲛⲉ…",
          ar: "في المفرد نختار وفق جنس الشيء المملوك: مذكر ⲡⲁ/ⲡⲉⲕ/ⲡⲉ…؛ مؤنث ⲧⲁ/ⲧⲉⲕ/ⲧⲉ…؛ الجمع ⲛⲁ/ⲛⲉⲕ/ⲛⲉ…",
        },
        examples: [
          {
            coptic: "ⲡⲉⲛⲓⲱⲧ",
            translit: "pe-niwt",
            meaning: { de: "unser Vater", en: "our father", ar: "أبونا" },
          },
          {
            coptic: "ⲧⲉⲫⲙⲁⲩ",
            translit: "tef-mau",
            meaning: { de: "seine Mutter", en: "his mother", ar: "أمّه" },
          },
          {
            coptic: "ⲡⲉⲓⲱⲧ",
            translit: "pe-iwt",
            meaning: {
              de: "dein Vater (fem. angesprochen)",
              en: "your father (addressing a woman)",
              ar: "أبوكِ",
            },
          },
          {
            coptic: "ⲧⲉⲧⲉⲛⲁⲃⲉ",
            translit: "teten-ave",
            meaning: { de: "euer Kopf", en: "your (pl.) head", ar: "رؤوسكم" },
          },
        ],
      },
    ],
  },

  "m2-l5": {
    id: "m2-l5",
    order: 5,
    moduleId: "m2",
    title: {
      de: "Demonstrativa: nah (ⲡⲁⲓ/ⲧⲁⲓ/ⲛⲁⲓ) & fern (ⲉⲧⲉ ⲙⲙⲁⲩ)",
      en: "Demonstratives: near (ⲡⲁⲓ/ⲧⲁⲓ/ⲛⲁⲓ) & far (ⲉⲧⲉ ⲙⲙⲁⲩ)",
      ar: "أسماء الإشارة: القريب (ⲡⲁⲓ/ⲧⲁⲓ/ⲛⲁⲓ) والبعيد (ⲉⲧⲉ ⲙⲙⲁⲩ)",
    },
    prerequisites: ["m2-l4"],
    quizId: "q2-4",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Artikel vs. Pronomen",
          en: "Article vs pronoun",
          ar: "أداة التعريف أم ضمير؟",
        },
        rule: {
          de: "Nah-Demonstrativ-Artikel: ⲡⲁⲓ/ⲧⲁⲓ/ⲛⲁⲓ vor dem Nomen. Fern: ⲉⲧⲉ ⲙⲙⲁⲩ kommt nach dem Nomen, das vorher den bestimmten Artikel nimmt.",
          en: "Near demonstrative articles ⲡⲁⲓ/ⲧⲁⲓ/ⲛⲁⲓ precede the noun. Far demonstrative ⲉⲧⲉ ⲙⲙⲁⲩ follows the noun, which keeps its definite article.",
          ar: "القريب يسبق الاسم (ⲡⲁⲓ/ⲧⲁⲓ/ⲛⲁⲓ). البعيد ⲉⲧⲉ ⲙⲙⲁⲩ يأتي بعد الاسم مع بقائه مُعرّفًا.",
        },
        examples: [
          {
            coptic: "ⲧⲁⲓⲥⲟⲩⲣⲓ",
            translit: "tai-souri",
            meaning: {
              de: "dieses Rauchfass",
              en: "this censer",
              ar: "هذه المجمرة",
            },
          },
          {
            coptic: "ⲡⲓⲕⲟⲩⲭ ⲉⲧⲉ ⲙⲙⲁⲩ",
            translit: "pikoukh ete-mmau",
            meaning: {
              de: "jene Zeit (‚diese Zeit dort‘)",
              en: "that time",
              ar: "ذلك الزمان",
            },
          },
        ],
      },
    ],
  },

  "m2-l6": {
    id: "m2-l6",
    order: 6,
    moduleId: "m2",
    title: {
      de: "Nominale Attribute (ⲛ/ⲙ) & Possessivkonstruktion (ⲛ/ⲙ; ⲛⲧⲉ)",
      en: "Attributive (ⲛ/ⲙ) & possessive (ⲛ/ⲙ; ⲛⲧⲉ) constructions",
      ar: "النعوت الاسمية (ⲛ/ⲙ) وبناء الإضافة (ⲛ/ⲙ؛ ⲛⲧⲉ)",
    },
    prerequisites: ["m2-l5"],
    quizId: "q2-5",
    slides: [
      {
        type: "grammar",
        title: { de: "Attribut: ⲛ/ⲙ", en: "Attributive ⲛ/ⲙ", ar: "النعْت ⲛ/ⲙ" },
        rule: {
          de: "ⲛ verbindet Nomen/Adj. attributiv; vor m p b ⲫ ’ wird ⲙ (Assimilation) gesetzt.",
          en: "ⲛ links nouns/adjectives; before m p b ⲫ ’ use ⲙ (assimilation).",
          ar: "تُستعمل ⲛ للنعت؛ وقبل m p b ⲫ ’ تتحول إلى ⲙ (إدغام).",
        },
        examples: [
          {
            coptic: "ⲡⲓⲣⲱⲙⲓ ⲛ̀ⲁⲡⲁⲥ",
            translit: "pirōmi n-apas",
            meaning: {
              de: "der alte Mann",
              en: "the old man",
              ar: "الرجل العجوز",
            },
          },
          {
            coptic: "ⲧⲉⲥⲟⲩⲣⲓ ⲛ̀ⲛⲟⲩⲃ",
            translit: "tesouri n-noub",
            meaning: {
              de: "die goldene Räucherpfanne",
              en: "the golden censer",
              ar: "المجمرة الذهبية",
            },
          },
          {
            coptic: "ⲡⲓⲣⲱⲙⲓ ⲙ̀ⲃⲉⲣⲓ",
            translit: "pirōmi m-beri",
            meaning: {
              de: "der neue Mann",
              en: "the new man",
              ar: "الرجل الجديد",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Possessiv (ⲛ/ⲙ; ⲛⲧⲉ)",
          en: "Possessive (ⲛ/ⲙ; ⲛⲧⲉ)",
          ar: "الإضافة (ⲛ/ⲙ؛ ⲛⲧⲉ)",
        },
        rule: {
          de: "Besitz: ⲡⲓⲟⲓⲕ ⲛ̀ⲡⲓⲣⲱⲙⲓ „das Haus des Mannes“. Das zweite Nomen trägt i.d.R. einen Artikel (Unterschied zum Attribut). ⲛⲧⲉ ist Alternative, v.a. nach Indefiniten: ⲟⲩⲥⲉⲣⲓ ⲛⲧⲉ ⲧⲉⲥϣⲏⲙⲓ „eine Tochter der Frau“.",
          en: "Possession: ⲡⲓⲟⲓⲕ ⲛ̀ⲡⲓⲣⲱⲙⲓ ‘the man’s house’. The second noun normally keeps an article (unlike attributive). ⲛⲧⲉ is an alternative, esp. after indefinites: ⲟⲩⲥⲉⲣⲓ ⲛⲧⲉ ⲧⲉⲥϣⲏⲙⲓ ‘a daughter of the woman’.",
          ar: "الملكية: ⲡⲓⲟⲓⲕ ⲛ̀ⲡⲓⲣⲱⲙⲓ «بيت الرجل». الاسم الثاني يأخذ أداة تعريف (خلاف النعت). وتستعمل ⲛⲧⲉ خاصة بعد النكرة: ⲟⲩⲥⲉⲣⲓ ⲛⲧⲉ ⲧⲉⲥϣⲏⲙⲓ.",
        },
        examples: [
          {
            coptic: "ⲡⲓⲟⲩⲟⲓⲕ ⲛ̀ⲧⲉ Ⲡⲉⲧⲣⲟⲥ",
            translit: "pi-ouoik nte Petros",
            meaning: {
              de: "das Haus des Petrus",
              en: "Peter’s house",
              ar: "بيت بطرس",
            },
          },
          {
            coptic: "ⲟⲩⲥⲉⲣⲓ ⲛⲧⲉ ⲧⲉⲥϣⲏⲙⲓ",
            translit: "ou-seri nte tes-shēmi",
            meaning: {
              de: "eine Tochter der Frau",
              en: "a daughter of the woman",
              ar: "ابنة للمرأة",
            },
          },
          {
            coptic: "ϩⲱⲃ ⲛⲓⲃⲉⲛ",
            translit: "hōb nibēn",
            meaning: { de: "jede Sache", en: "every thing", ar: "كل شيء" },
          },
        ],
      },
    ],
  },

  "m2-l7": {
    id: "m2-l7",
    order: 7,
    moduleId: "m2",
    title: {
      de: "Alltag: Personen & Dinge im Umfeld",
      en: "Everyday use: describing people & things around you",
      ar: "تطبيق يومي: وصف الأشخاص والأشياء من حولك",
    },
    prerequisites: ["m2-l6"],
    quizId: "q2-final",
    slides: [
      {
        type: "sentence",
        item: {
          text: "ⲡⲁⲃⲓⲃⲗⲟⲥ ⲡⲁⲓ ⲛ̀ⲁⲛⲟⲕ",
          translit: "pa-biblos pai n-anok",
          meaning: {
            de: "dies ist mein Buch",
            en: "this is my book",
            ar: "هذا كتابي",
          },
        },
      },
      {
        type: "sentence",
        item: {
          text: "ⲧⲁⲓⲥⲉⲣⲓ ⲉⲧⲉ ⲙⲙⲁⲩ",
          translit: "tai-seri ete-mmau",
          meaning: {
            de: "jene Tochter dort",
            en: "that daughter over there",
            ar: "تلك الابنة هناك",
          },
        },
      },
      {
        type: "sentence",
        item: {
          text: "ⲧⲉⲛⲥⲱⲙⲁ ⲛ̀ⲧⲉ ⲡⲓⲛⲟⲩⲧⲓ",
          translit: "ten-sōma nte pinouti",
          meaning: {
            de: "unsere Leiber gehören Gott",
            en: "our bodies belong to God",
            ar: "أجسادنا لله",
          },
        },
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "q2-1": {
    id: "q2-1",
    lessonId: "m2-l1",
    title: {
      de: "Mini-Quiz: definite Artikel & Pluralartikel",
      en: "Mini-quiz: definite & plural articles",
      ar: "اختبار قصير: المعارف والجمع",
    },
    passScore: 80,
    questions: [
      {
        id: "q2-1-1",
        type: "multiple-choice",
        questionText: {
          de: "Wähle richtig (vilminor): „__ⲣⲱⲙⲓ“",
          en: "Choose the correct article (vilminor): “__ⲣⲱⲙⲓ”",
          ar: "اختر الأداة الصحيحة (فيلنيمور): “__ⲣⲱⲙⲓ”",
        },
        options: [
          { de: "ⲡⲓ", en: "ⲡⲓ", ar: "ⲡⲓ" },
          { de: "ⲡ", en: "ⲡ", ar: "ⲡ" },
          { de: "ⲫ", en: "ⲫ", ar: "ⲫ" },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "q2-1-2",
        type: "multiple-choice",
        questionText: {
          de: "„die Hände“ →",
          en: "“the hands” →",
          ar: "«الأيادي» →",
        },
        options: [
          { de: "ⲛⲓϫⲓϫ", en: "ⲛⲓϫⲓϫ", ar: "ⲛⲓϫⲓϫ" },
          { de: "ⲛⲉⲛϫⲓϫ", en: "ⲛⲉⲛϫⲓϫ", ar: "ⲛⲉⲛϫⲓϫ" },
          { de: "ⲟⲩϫⲓϫ", en: "ⲟⲩϫⲓϫ", ar: "ⲟⲩϫⲓϫ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q2-1-3",
        type: "fill-in-the-blank",
        questionText: {
          de: "Fülle: „die Hände Aarons“ → ⲛⲉⲛϫⲓϫ ⲛ̀___",
          en: "Fill in: “the hands of Aaron” → ⲛⲉⲛϫⲓϫ ⲛ̀___",
          ar: "أكمل: «أيدي هارون» → ⲛⲉⲛϫⲓϫ ⲛ̀___",
        },
        correctAnswer: "Ⲁⲁⲣⲱⲛ",
      },
    ],
  },

  "q2-2": {
    id: "q2-2",
    lessonId: "m2-l3",
    title: {
      de: "Mini-Quiz: Indefinit (ⲟⲩ / ⲁⲛ)",
      en: "Mini-quiz: indefinite (ⲟⲩ / ⲁⲛ)",
      ar: "اختبار: النكرة",
    },
    passScore: 80,
    questions: [
      {
        id: "q2-2-1",
        type: "multiple-choice",
        questionText: {
          de: "„ein Mann“ ⟶",
          en: "“a man” →",
          ar: "«رجل» ⟶",
        },
        options: [
          { de: "ⲟⲩⲣⲱⲙⲓ", en: "ⲟⲩⲣⲱⲙⲓ", ar: "ⲟⲩⲣⲱⲙⲓ" },
          { de: "ⲛⲓⲣⲱⲙⲓ", en: "ⲛⲓⲣⲱⲙⲓ", ar: "ⲛⲓⲣⲱⲙⲓ" },
          { de: "ⲁⲛⲣⲱⲙⲉ", en: "ⲁⲛⲣⲱⲙⲉ", ar: "ⲁⲛⲣⲱⲙⲉ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q2-2-2",
        type: "fill-in-the-blank",
        questionText: {
          de: "„einige Leute“ → ⲁⲛ____",
          en: "“some people” → ⲁⲛ____",
          ar: "«بعض الناس» → ⲁⲛ____",
        },
        correctAnswer: "ⲟⲩⲟⲩⲛ",
      },
    ],
  },

  "q2-3": {
    id: "q2-3",
    lessonId: "m2-l4",
    title: {
      de: "Mini-Quiz: Possessivartikel",
      en: "Mini-quiz: possessive articles",
      ar: "اختبار: أدوات الملكية",
    },
    passScore: 80,
    questions: [
      {
        id: "q2-3-1",
        type: "multiple-choice",
        questionText: {
          de: "„seine Mutter“ →",
          en: "“his mother” →",
          ar: "«أمه» →",
        },
        options: [
          { de: "ⲡⲉⲫⲙⲁⲩ", en: "pef-mau", ar: "ⲡⲉⲫⲙⲁⲩ" },
          { de: "ⲧⲉⲫⲙⲁⲩ", en: "tef-mau", ar: "ⲧⲉⲫⲙⲁⲩ" },
          { de: "ⲛⲉⲫⲙⲁⲩ", en: "nef-mau", ar: "ⲛⲉⲫⲙⲁⲩ" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q2-3-2",
        type: "fill-in-the-blank",
        questionText: {
          de: "„euer (Pl.) Kopf“ → ___ⲁⲃⲉ",
          en: "“your (pl.) head” → ___ⲁⲃⲉ",
          ar: "«رؤوسكم» → ___ⲁⲃⲉ",
        },
        correctAnswer: "ⲧⲉⲧⲉⲛ",
      },
    ],
  },

  "q2-4": {
    id: "q2-4",
    lessonId: "m2-l5",
    title: {
      de: "Mini-Quiz: Demonstrativa",
      en: "Mini-quiz: demonstratives",
      ar: "اختبار: أسماء الإشارة",
    },
    passScore: 80,
    questions: [
      {
        id: "q2-4-1",
        type: "multiple-choice",
        questionText: {
          de: "Wähle das richtige Nah-Demonstrativ (f.): „__ⲥⲟⲩⲣⲓ“",
          en: "Choose the correct near demonstrative (f.): “__ⲥⲟⲩⲣⲓ”",
          ar: "اختر إشارة القريب (مؤ.): “__ⲥⲟⲩⲣⲓ”",
        },
        options: [
          { de: "ⲡⲁⲓ", en: "ⲡⲁⲓ", ar: "ⲡⲁⲓ" },
          { de: "ⲧⲁⲓ", en: "ⲧⲁⲓ", ar: "ⲧⲁⲓ" },
          { de: "ⲛⲁⲓ", en: "ⲛⲁⲓ", ar: "ⲛⲁⲓ" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q2-4-2",
        type: "fill-in-the-blank",
        questionText: {
          de: "„die Zeit dort“ → ⲡⲓⲭⲱⲩⲝ ___ ⲙⲙⲁⲩ",
          en: "“that time” → ⲡⲓⲭⲱⲩⲝ ___ ⲙⲙⲁⲩ",
          ar: "«ذلك الزمان» → ⲡⲓⲭⲱⲩⲝ ___ ⲙⲙⲁⲩ",
        },
        correctAnswer: "ⲉⲧⲉ",
      },
    ],
  },

  "q2-5": {
    id: "q2-5",
    lessonId: "m2-l6",
    title: {
      de: "Mini-Quiz: Attribut & Possessiv",
      en: "Mini-quiz: attributive & possessive",
      ar: "اختبار: النعت والإضافة",
    },
    passScore: 80,
    questions: [
      {
        id: "q2-5-1",
        type: "multiple-choice",
        questionText: {
          de: "Attributiv richtig? „der neue Mann“",
          en: "Choose the correct attributive: “the new man”",
          ar: "اختر الصيغة النعتية الصحيحة: «الرجل الجديد»",
        },
        options: [
          { de: "ⲡⲓⲣⲱⲙⲓ ⲛ̀ⲃⲉⲣⲓ", en: "pirōmi n-beri", ar: "ⲡⲓⲣⲱⲙⲓ ⲛ̀ⲃⲉⲣⲓ" },
          { de: "ⲡⲓⲣⲱⲙⲓ ⲙ̀ⲃⲉⲣⲓ", en: "pirōmi m-beri", ar: "ⲡⲓⲣⲱⲙⲓ ⲙ̀ⲃⲉⲣⲓ" },
          {
            de: "ⲡⲓⲣⲱⲙⲓ ⲛⲧⲉ ⲃⲉⲣⲓ",
            en: "pirōmi nte-beri",
            ar: "ⲡⲓⲣⲱⲙⲓ ⲛⲧⲉ ⲃⲉⲣⲓ",
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q2-5-2",
        type: "fill-in-the-blank",
        questionText: {
          de: "Besitz mit ⲛⲧⲉ: „eine Tochter der Frau“ → ⲟⲩⲥⲉⲣⲓ ___ ⲧⲉⲥϣⲏⲙⲓ",
          en: "Possessive with ⲛⲧⲉ: “a daughter of the woman” → ⲟⲩⲥⲉⲣⲓ ___ ⲧⲉⲥϣⲏⲙⲓ",
          ar: "ملكية بـ ⲛⲧⲉ: «ابنة للمرأة» → ⲟⲩⲥⲉⲣⲓ ___ ⲧⲉⲥϣⲏⲙⲓ",
        },
        correctAnswer: "ⲛⲧⲉ",
      },
    ],
  },

  "q2-final": {
    id: "q2-final",
    lessonId: "m2-l7",
    title: {
      de: "Endtest Modul 2 (Artikelwahl, Umformungen, Mini-Produktion)",
      en: "Module 2 Final (article choice, transforms, mini-production)",
      ar: "الاختبار الختامي للوحدة 2",
    },
    passScore: 85,
    questions: [
      // 12 kurze Items, gemischt (kannst du leicht auf 30 erweitern)
      {
        id: "q2-f-1",
        type: "multiple-choice",
        questionText: {
          de: "Wähle: „__ϫⲓϫ“ (vilminor)",
          en: "Choose: “__ϫⲓϫ” (vilminor)",
          ar: "اختر: “__ϫⲓϫ”",
        },
        options: [
          { de: "ⲡ", en: "ⲡ", ar: "ⲡ" },
          { de: "ⲫ", en: "ⲫ", ar: "ⲫ" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q2-f-2",
        type: "fill-in-the-blank",
        questionText: {
          de: "„diese Frau“ → ___ⲭⲏⲙⲓ",
          en: "“this woman” → ___ⲭⲏⲙⲓ",
          ar: "«هذه المرأة» → ___ⲭⲏⲙⲓ",
        },
        correctAnswer: "ⲧⲁⲓ",
      },
      {
        id: "q2-f-3",
        type: "multiple-choice",
        questionText: {
          de: "Plural: „Diener“",
          en: "Plural: “servants”",
          ar: "جمع «خُدام»",
        },
        options: [
          { de: "ⲛⲓⲉⲃⲓⲁⲓⲕ", en: "ⲛⲓⲉⲃⲓⲁⲓⲕ", ar: "ⲛⲓⲉⲃⲓⲁⲓⲕ" },
          { de: "ⲟⲩⲉⲃⲓⲁⲓⲕ", en: "ⲟⲩⲉⲃⲓⲁⲓⲕ", ar: "ⲟⲩⲉⲃⲓⲁⲓⲕ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q2-f-4",
        type: "fill-in-the-blank",
        questionText: {
          de: "„sein Blut“ → ___ⲕⲛⲟⲫ",
          en: "“his blood” → ___ⲕⲛⲟⲫ",
          ar: "«دمه» → ___ⲕⲛⲟⲫ",
        },
        correctAnswer: "ⲡⲉⲫ",
      },
      {
        id: "q2-f-5",
        type: "multiple-choice",
        questionText: {
          de: "Fern-Demonstrativ korrekt?",
          en: "Correct far demonstrative?",
          ar: "أداة الإشارة البعيدة الصحيحة؟",
        },
        options: [
          { de: "ⲡⲁⲓ", en: "ⲡⲁⲓ", ar: "ⲡⲁⲓ" },
          { de: "ⲉⲧⲉ ⲙⲙⲁⲩ", en: "ⲉⲧⲉ ⲙⲙⲁⲩ", ar: "ⲉⲧⲉ ⲙⲙⲁⲩ" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q2-f-6",
        type: "fill-in-the-blank",
        questionText: {
          de: "„unsere Gebote“ → ___ⲛⲧⲟⲗⲏ",
          en: "“our commandments” → ___ⲛⲧⲟⲗⲏ",
          ar: "«وصايانا» → ___ⲛⲧⲟⲗⲏ",
        },
        correctAnswer: "ⲡⲉⲛ",
      },
      {
        id: "q2-f-7",
        type: "multiple-choice",
        questionText: {
          de: "Besitz: „das Brot Gottes“",
          en: "Possessive: “the bread of God”",
          ar: "إضافة: «خبز الله»",
        },
        options: [
          {
            de: "ⲡⲓⲟⲩⲓⲕ ⲛ̀ⲧⲉ Ⲡⲛⲟⲩϯ",
            en: "piwik nte Pinouti",
            ar: "ⲡⲓⲟⲩⲓⲕ ⲛ̀ⲧⲉ Ⲡⲛⲟⲩϯ",
          },
          { de: "ⲡⲓⲟⲩⲓⲕ ⲛ̀Ⲡⲛⲟⲩϯ", en: "piwik n Pinouti", ar: "ⲡⲓⲟⲩⲓⲕ ⲛ̀Ⲡⲛⲟⲩϯ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q2-f-8",
        type: "fill-in-the-blank",
        questionText: {
          de: "„mein Körper“ → ___ⲥⲱⲙⲁ",
          en: "“my body” → ___ⲥⲱⲙⲁ",
          ar: "«جسدي» → ___ⲥⲱⲙⲁ",
        },
        correctAnswer: "ⲡⲁ",
      },
      {
        id: "q2-f-9",
        type: "multiple-choice",
        questionText: {
          de: "Attribut oder Besitz? „ⲧⲉⲥⲟⲩⲣⲓ ⲛ̀ⲛⲟⲩⲃ“",
          en: "Attribut or possessive? “tesouri n-noub”",
          ar: "نعت أم إضافة؟",
        },
        options: [
          { de: "Attribut", en: "Attributive", ar: "نعت" },
          { de: "Besitz", en: "Possessive", ar: "إضافة" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q2-f-10",
        type: "fill-in-the-blank",
        questionText: {
          de: "„dieser Priester“ → ___ⲥⲁϩ",
          en: "“this priest” → ___ⲥⲁϩ",
          ar: "«هذا الكاهن» → ___ⲥⲁϩ",
        },
        correctAnswer: "ⲡⲁⲓ",
      },
      {
        id: "q2-f-11",
        type: "multiple-choice",
        questionText: {
          de: "Plural-Indefinit: „einige Frauen“",
          en: "Indefinite plural: “some women”",
          ar: "جمع نكرة: «بعض النساء»",
        },
        options: [
          { de: "ⲁⲛϩⲓⲱⲙⲉ", en: "han-hiōme", ar: "ⲁⲛϩⲓⲱⲙⲉ" },
          { de: "ⲟⲩϩⲓⲱⲙⲉ", en: "ou-hiōme", ar: "ⲟⲩϩⲓⲱⲙⲉ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q2-f-12",
        type: "fill-in-the-blank",
        questionText: {
          de: "Mini-Produktion (1–2 Wörter): „das Haus des Königs“ → ⲡⲓⲟⲓⲕ ___ ⲡⲟⲩⲣⲱ",
          en: "Mini-production (1–2 words): “the king’s house” → ⲡⲓⲟⲓⲕ ___ ⲡⲟⲩⲣⲱ",
          ar: "إنتاج قصير: «بيت الملك» → ⲡⲓⲟⲓⲕ ___ ⲡⲟⲩⲣⲱ",
        },
        correctAnswer: "ⲛ̀",
      },
    ],
  },
};

export const MODULE_M2: Module = {
  id: "m2",
  order: 2,
  title: {
    de: "Nomen & Artikel",
    en: "Nouns & Articles",
    ar: "الأسماء والأدوات",
  },
  lessons: Object.keys(LESSONS).filter((k) => k.startsWith("m2-")),
  quizIds: Object.keys(QUIZZES).filter((k) => k.startsWith("m2-")),
};
