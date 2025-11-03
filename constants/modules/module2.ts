// Modul 2 — Nomen & Artikel (nach Younan)
// Alle Formen & Beispiele: Sameh Younan, *So You Want to Learn Coptic? A Guide to Bohairic Grammar*.
// VOLLSTÄNDIG UND SYSTEMATISCH KORRIGIERT - Jedes Detail mit PDF abgeglichen
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
          de: "Mask.: ⲡⲓ / ⲡ / ⲫ; Fem.: ϯ / ⲧ / ϯ. Starke Formen (ⲡⲓ/ϯ) vorangestellt bei Betonung/Titeln; schwache Formen hängen vom Anlaut des Substantivs ab: »nicht-vilminor« ⟶ ⲡ/ⲧ; »vilminor« (b i l m n o r) ⟶ ⲫ/ϯ.",
          en: "Masc.: ⲡⲓ / ⲡ / ⲫ; Fem.: ϯ / ⲧ / ϯ. Strong forms (ⲡⲓ/ϯ) are used for emphasis/titles; weak forms depend on the initial letter: non-vilminor → ⲡ/ⲧ; vilminor (b i l m n o r) → ⲫ/ϯ.",
          ar: "المذكر: ⲡⲓ/ⲡ/ⲫ؛ المؤنث: ϯ/ⲧ/ϯ. تُستعمل الصيغ القوية (ⲡⲓ/ϯ) للتوكيد/الألقاب؛ أمّا الصيغ الضعيفة فبحسب الحرف الأول: غير-فيلنيمور ⟶ ⲡ/ⲧ؛ فيلنيمور (b i l m n o r) ⟶ ⲫ/ϯ.",
        },
        examples: [
          {
            coptic: "ⲡⲓⲓⲱⲧ",
            translit: "piyawt",
            meaning: {
              de: "der Vater (ein bestimmter)",
              en: "the father (a specific one)",
              ar: "الأب (محدد)",
            },
          },
          {
            coptic: "ⲫⲓⲱⲧ",
            translit: "viwt",
            meaning: {
              de: "der Vater (Gott der Vater)",
              en: "the Father (God the Father)",
              ar: "الآب (الله الآب)",
            },
          },
          {
            coptic: "ϯⲙⲁⲩ",
            translit: "timav",
            meaning: { de: "die Mutter", en: "the mother", ar: "الأم" },
          },
          {
            coptic: "ϯⲥⲱⲙⲁ",
            translit: "tisōma",
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
          translit: "vrōmi noujai",
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
          text: "ϯⲥⲙⲁ ⲛ̀ⲟⲩⲱⲓⲛⲓ",
          translit: "tisma nouwini",
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
      en: "Plural articles ⲛⲓ/ⲛⲉⲛ & the 'of'-construction with ⲛⲉⲛ",
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
          de: "ⲛⲓ steht direkt vor dem Substantiv. ⲛⲉⲛ kann vorangestellt werden und dient auch zur ‚of'-Konstruktion (ⲛⲉⲛ + Nomen + ⲛ̀ + Besitzer).",
          en: "ⲛⲓ precedes the noun. ⲛⲉⲛ can be used and also forms an 'of' construction (ⲛⲉⲛ + noun + ⲛ̀ + possessor).",
          ar: "تسبق ⲛⲓ الاسم. تُستعمل ⲛⲉⲛ أيضًا في تركيب الإضافة (ⲛⲉⲛ + اسم + ⲛ̀ + المضاف إليه).",
        },
        examples: [
          {
            coptic: "ⲛⲓϫⲓϫ",
            translit: "nijij",
            meaning: { de: "die Hände", en: "the hands", ar: "الأيادي" },
          },
          {
            coptic: "ⲛⲓⲉⲃⲓⲁⲓⲕ",
            translit: "niebiaik",
            meaning: { de: "die Diener", en: "the servants", ar: "الخُدّام" },
          },
          {
            coptic: "ⲛⲉⲛϫⲓϫ ⲛ̀Ⲁⲁⲣⲱⲛ",
            translit: "nenjij nAarōn",
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
      de: 'Indefinit: ⲟⲩ / ϩⲁⲛ (ϩⲁⲛⲟⲩⲟⲛ „einige")',
      en: "Indefinite: ⲟⲩ / ϩⲁⲛ (ϩⲁⲛⲟⲩⲟⲛ 'some people')",
      ar: "النكرة: ⲟⲩ / ϩⲁⲛ (ϩⲁⲛⲟⲩⲟⲛ «بعض الناس»)",
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
          de: 'ⲟⲩ = „ein/e". Plural hat eigenes Indefinit: ϩⲁⲛ ‚einige\'; Sonderform: ϩⲁⲛⲟⲩⲟⲛ „einige (Leute)".',
          en: "ⲟⲩ = 'a/an'. Plural has its own indefinite: ϩⲁⲛ 'some'; special: ϩⲁⲛⲟⲩⲟⲛ 'some (people)'.",
          ar: "ⲟⲩ = «ـاً/ـٌ». للجمع نكرة خاصة: ϩⲁⲛ «بعض»؛ صيغة خاصة: ϩⲁⲛⲟⲩⲟⲛ «بعض الناس».",
        },
        examples: [
          {
            coptic: "ⲟⲩⲣⲱⲙⲓ",
            translit: "ourōmi",
            meaning: { de: "ein Mann", en: "a man", ar: "رجل" },
          },
          {
            coptic: "ⲟⲩϩⲓⲙⲓ",
            translit: "ouhimi",
            meaning: { de: "eine Frau", en: "a woman", ar: "امرأة" },
          },
          {
            coptic: "ϩⲁⲛⲣⲱⲙⲓ",
            translit: "hanrōmi",
            meaning: { de: "einige Männer", en: "some men", ar: "بعض الرجال" },
          },
          {
            coptic: "ϩⲁⲛϩⲓⲟⲙⲓ",
            translit: "hanhiomi",
            meaning: {
              de: "einige Frauen",
              en: "some women",
              ar: "بعض النساء",
            },
          },
          {
            coptic: "ϩⲁⲛⲟⲩⲟⲛ",
            translit: "hanouon",
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
      en: "Possessive articles (ⲡⲁ/ⲧⲁ/ⲛⲁ …) by the object's gender",
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
          de: "Singular richtet sich nach Genus des OBJEKTS (nicht des Besitzers): m. ⲡⲁ/ⲡⲉⲕ/ⲡⲉ/ⲡⲉϥ…; f. ⲧⲁ/ⲧⲉⲕ/ⲧⲉ/ⲧⲉϥ…; Plural ⲛⲁ/ⲛⲉⲕ/ⲛⲉ/ⲛⲉϥ…",
          en: "In singular, choose by the OBJECT's gender (not the possessor's): masc. ⲡⲁ/ⲡⲉⲕ/ⲡⲉ/ⲡⲉϥ…; fem. ⲧⲁ/ⲧⲉⲕ/ⲧⲉ/ⲧⲉϥ…; plural ⲛⲁ/ⲛⲉⲕ/ⲛⲉ/ⲛⲉϥ…",
          ar: "في المفرد نختار وفق جنس الشيء المملوك: مذكر ⲡⲁ/ⲡⲉⲕ/ⲡⲉ/ⲡⲉϥ…؛ مؤنث ⲧⲁ/ⲧⲉⲕ/ⲧⲉ/ⲧⲉϥ…؛ الجمع ⲛⲁ/ⲛⲉⲕ/ⲛⲉ/ⲛⲉϥ…",
        },
        examples: [
          {
            coptic: "ⲡⲉⲛⲓⲱⲧ",
            translit: "peniwt",
            meaning: { de: "unser Vater", en: "our father", ar: "أبونا" },
          },
          {
            coptic: "ⲧⲉϥⲙⲁⲩ",
            translit: "tefmav",
            meaning: { de: "seine Mutter", en: "his mother", ar: "أمّه" },
          },
          {
            coptic: "ⲡⲉⲓⲱⲧ",
            translit: "peiwt",
            meaning: {
              de: "dein Vater (fem. angesprochen)",
              en: "your father (addressing a woman)",
              ar: "أبوكِ",
            },
          },
          {
            coptic: "ⲧⲉⲧⲉⲛⲁⲫⲉ",
            translit: "tetenave",
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
            translit: "taisouri",
            meaning: {
              de: "dieses Rauchfass",
              en: "this censer",
              ar: "هذه المجمرة",
            },
          },
          {
            coptic: "ⲡⲓⲥⲏⲟⲩ ⲉⲧⲉ ⲙⲙⲁⲩ",
            translit: "pisēou ete mmau",
            meaning: {
              de: "jene Zeit (‚diese Zeit dort')",
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
      de: "Nominale Attribute (ⲛ̀/ⲙ̀) & Possessivkonstruktion (ⲛ̀/ⲙ̀; ⲛ̀ⲧⲉ)",
      en: "Attributive (ⲛ̀/ⲙ̀) & possessive (ⲛ̀/ⲙ̀; ⲛ̀ⲧⲉ) constructions",
      ar: "النعوت الاسمية (ⲛ̀/ⲙ̀) وبناء الإضافة (ⲛ̀/ⲙ̀؛ ⲛ̀ⲧⲉ)",
    },
    prerequisites: ["m2-l5"],
    quizId: "q2-5",
    slides: [
      {
        type: "grammar",
        title: { de: "Attribut: ⲛ̀/ⲙ̀", en: "Attributive ⲛ̀/ⲙ̀", ar: "النعْت ⲛ̀/ⲙ̀" },
        rule: {
          de: "ⲛ̀ verbindet Nomen/Adj. attributiv; vor m p b ⲫ ' wird ⲙ̀ (Assimilation) gesetzt.",
          en: "ⲛ̀ links nouns/adjectives; before m p b ⲫ ' use ⲙ̀ (assimilation).",
          ar: "تُستعمل ⲛ̀ للنعت؛ وقبل m p b ⲫ ' تتحول إلى ⲙ̀ (إدغام).",
        },
        examples: [
          {
            coptic: "ⲡⲓⲣⲱⲙⲓ ⲛ̀ⲁⲡⲁⲥ",
            translit: "pirōmi napas",
            meaning: {
              de: "der alte Mann",
              en: "the old man",
              ar: "الرجل العجوز",
            },
          },
          {
            coptic: "ϯⲥⲟⲩⲣⲓ ⲛ̀ⲛⲟⲩⲃ",
            translit: "tisouri nnoub",
            meaning: {
              de: "die goldene Räucherpfanne",
              en: "the golden censer",
              ar: "المجمرة الذهبية",
            },
          },
          {
            coptic: "ⲡⲓⲣⲱⲙⲓ ⲙ̀ⲃⲉⲣⲓ",
            translit: "pirōmi mberi",
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
          de: "Possessiv (ⲛ̀/ⲙ̀; ⲛ̀ⲧⲉ)",
          en: "Possessive (ⲛ̀/ⲙ̀; ⲛ̀ⲧⲉ)",
          ar: "الإضافة (ⲛ̀/ⲙ̀؛ ⲛ̀ⲧⲉ)",
        },
        rule: {
          de: 'Besitz: ⲡⲓⲏⲓ ⲙ̀ⲡⲓⲣⲱⲙⲓ „das Haus des Mannes". Das zweite Nomen trägt i.d.R. einen Artikel (Unterschied zum Attribut). ⲛ̀ⲧⲉ ist Alternative, v.a. nach Indefiniten: ⲟⲩⲥⲉⲣⲓ ⲛ̀ⲧⲉ ϯϩⲓⲙⲓ „eine Tochter der Frau".',
          en: "Possession: ⲡⲓⲏⲓ ⲙ̀ⲡⲓⲣⲱⲙⲓ 'the man's house'. The second noun normally keeps an article (unlike attributive). ⲛ̀ⲧⲉ is an alternative, esp. after indefinites: ⲟⲩⲥⲉⲣⲓ ⲛ̀ⲧⲉ ϯϩⲓⲙⲓ 'a daughter of the woman'.",
          ar: "الملكية: ⲡⲓⲏⲓ ⲙ̀ⲡⲓⲣⲱⲙⲓ «بيت الرجل». الاسم الثاني يأخذ أداة تعريف (خلاف النعت). وتستعمل ⲛ̀ⲧⲉ خاصة بعد النكرة: ⲟⲩⲥⲉⲣⲓ ⲛ̀ⲧⲉ ϯϩⲓⲙⲓ.",
        },
        examples: [
          {
            coptic: "ⲡⲓⲏⲓ ⲛ̀ⲧⲉ Ⲡⲉⲧⲣⲟⲥ",
            translit: "piēi nte Petros",
            meaning: {
              de: "das Haus des Petrus",
              en: "Peter's house",
              ar: "بيت بطرس",
            },
          },
          {
            coptic: "ⲟⲩⲥⲉⲣⲓ ⲛ̀ⲧⲉ ϯϩⲓⲙⲓ",
            translit: "ouseri nte tihimi",
            meaning: {
              de: "eine Tochter der Frau",
              en: "a daughter of the woman",
              ar: "ابنة للمرأة",
            },
          },
          {
            coptic: "ϩⲱⲃ ⲛⲓⲃⲉⲛ",
            translit: "hōb niben",
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
          text: "ⲡⲁϫⲱⲙ ⲡⲁⲓ ⲁⲛⲟⲕ",
          translit: "pajōm pai anok",
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
          translit: "taiseri ete mmau",
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
          text: "ⲡⲉⲛⲥⲱⲙⲁ ⲛ̀ⲧⲉ Ⲫϯ",
          translit: "pensōma nte Vnouti",
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
          de: 'Wähle richtig (vilminor): „__ⲣⲱⲙⲓ"',
          en: 'Choose the correct article (vilminor): "__ⲣⲱⲙⲓ"',
          ar: 'اختر الأداة الصحيحة (فيلنيمور): "__ⲣⲱⲙⲓ"',
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
          de: '„die Hände" →',
          en: '"the hands" →',
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
          de: 'Fülle: „die Hände Aarons" → ⲛⲉⲛϫⲓϫ ⲛ̀___',
          en: 'Fill in: "the hands of Aaron" → ⲛⲉⲛϫⲓϫ ⲛ̀___',
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
      de: "Mini-Quiz: Indefinit (ⲟⲩ / ϩⲁⲛ)",
      en: "Mini-quiz: indefinite (ⲟⲩ / ϩⲁⲛ)",
      ar: "اختبار: النكرة",
    },
    passScore: 80,
    questions: [
      {
        id: "q2-2-1",
        type: "multiple-choice",
        questionText: {
          de: '„ein Mann" ⟶',
          en: '"a man" →',
          ar: "«رجل» ⟶",
        },
        options: [
          { de: "ⲟⲩⲣⲱⲙⲓ", en: "ⲟⲩⲣⲱⲙⲓ", ar: "ⲟⲩⲣⲱⲙⲓ" },
          { de: "ⲛⲓⲣⲱⲙⲓ", en: "ⲛⲓⲣⲱⲙⲓ", ar: "ⲛⲓⲣⲱⲙⲓ" },
          { de: "ϩⲁⲛⲣⲱⲙⲓ", en: "ϩⲁⲛⲣⲱⲙⲓ", ar: "ϩⲁⲛⲣⲱⲙⲓ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q2-2-2",
        type: "fill-in-the-blank",
        questionText: {
          de: '„einige Leute" → ϩⲁⲛ____',
          en: '"some people" → ϩⲁⲛ____',
          ar: "«بعض الناس» → ϩⲁⲛ____",
        },
        correctAnswer: "ⲟⲩⲟⲛ",
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
          de: '„seine Mutter" →',
          en: '"his mother" →',
          ar: "«أمه» →",
        },
        options: [
          { de: "ⲡⲉϥⲙⲁⲩ", en: "pefmav", ar: "ⲡⲉϥⲙⲁⲩ" },
          { de: "ⲧⲉϥⲙⲁⲩ", en: "tefmav", ar: "ⲧⲉϥⲙⲁⲩ" },
          { de: "ⲛⲉϥⲙⲁⲩ", en: "nefmav", ar: "ⲛⲉϥⲙⲁⲩ" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q2-3-2",
        type: "fill-in-the-blank",
        questionText: {
          de: '„euer (Pl.) Kopf" → ___ⲁⲫⲉ',
          en: '"your (pl.) head" → ___ⲁⲫⲉ',
          ar: "«رؤوسكم» → ___ⲁⲫⲉ",
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
          de: 'Wähle das richtige Nah-Demonstrativ (f.): „__ⲥⲟⲩⲣⲓ"',
          en: 'Choose the correct near demonstrative (f.): "__ⲥⲟⲩⲣⲓ"',
          ar: 'اختر إشارة القريب (مؤ.): "__ⲥⲟⲩⲣⲓ"',
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
          de: '„die Zeit dort" → ⲡⲓⲥⲏⲟⲩ ___ ⲙⲙⲁⲩ',
          en: '"that time" → ⲡⲓⲥⲏⲟⲩ ___ ⲙⲙⲁⲩ',
          ar: "«ذلك الزمان» → ⲡⲓⲥⲏⲟⲩ ___ ⲙⲙⲁⲩ",
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
          de: 'Attributiv richtig? „der neue Mann"',
          en: 'Choose the correct attributive: "the new man"',
          ar: "اختر الصيغة النعتية الصحيحة: «الرجل الجديد»",
        },
        options: [
          { de: "ⲡⲓⲣⲱⲙⲓ ⲛ̀ⲃⲉⲣⲓ", en: "pirōmi nberi", ar: "ⲡⲓⲣⲱⲙⲓ ⲛ̀ⲃⲉⲣⲓ" },
          { de: "ⲡⲓⲣⲱⲙⲓ ⲙ̀ⲃⲉⲣⲓ", en: "pirōmi mberi", ar: "ⲡⲓⲣⲱⲙⲓ ⲙ̀ⲃⲉⲣⲓ" },
          {
            de: "ⲡⲓⲣⲱⲙⲓ ⲛ̀ⲧⲉ ⲃⲉⲣⲓ",
            en: "pirōmi nte beri",
            ar: "ⲡⲓⲣⲱⲙⲓ ⲛ̀ⲧⲉ ⲃⲉⲣⲓ",
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q2-5-2",
        type: "fill-in-the-blank",
        questionText: {
          de: 'Besitz mit ⲛ̀ⲧⲉ: „eine Tochter der Frau" → ⲟⲩⲥⲉⲣⲓ ___ ϯϩⲓⲙⲓ',
          en: 'Possessive with ⲛ̀ⲧⲉ: "a daughter of the woman" → ⲟⲩⲥⲉⲣⲓ ___ ϯϩⲓⲙⲓ',
          ar: "ملكية بـ ⲛ̀ⲧⲉ: «ابنة للمرأة» → ⲟⲩⲥⲉⲣⲓ ___ ϯϩⲓⲙⲓ",
        },
        correctAnswer: "ⲛ̀ⲧⲉ",
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
      {
        id: "q2-f-1",
        type: "multiple-choice",
        questionText: {
          de: 'Wähle: „__ϫⲓϫ" (vilminor)',
          en: 'Choose: "__ϫⲓϫ" (vilminor)',
          ar: 'اختر: "__ϫⲓϫ"',
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
          de: '„diese Frau" → ___ϩⲓⲙⲓ',
          en: '"this woman" → ___ϩⲓⲙⲓ',
          ar: "«هذه المرأة» → ___ϩⲓⲙⲓ",
        },
        correctAnswer: "ⲧⲁⲓ",
      },
      {
        id: "q2-f-3",
        type: "multiple-choice",
        questionText: {
          de: 'Plural: „Diener"',
          en: 'Plural: "servants"',
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
          de: '„sein Blut" → ___ⲥⲛⲟϥ',
          en: '"his blood" → ___ⲥⲛⲟϥ',
          ar: "«دمه» → ___ⲥⲛⲟϥ",
        },
        correctAnswer: "ⲡⲉϥ",
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
          de: '„unsere Gebote" → ___ⲉⲛⲧⲟⲗⲏ',
          en: '"our commandments" → ___ⲉⲛⲧⲟⲗⲏ',
          ar: "«وصايانا» → ___ⲉⲛⲧⲟⲗⲏ",
        },
        correctAnswer: "ⲛⲉⲛ",
      },
      {
        id: "q2-f-7",
        type: "multiple-choice",
        questionText: {
          de: 'Besitz: „das Brot Gottes"',
          en: 'Possessive: "the bread of God"',
          ar: "إضافة: «خبز الله»",
        },
        options: [
          {
            de: "ⲡⲓⲱⲓⲕ ⲛ̀ⲧⲉ Ⲫϯ",
            en: "piwik nte Vnouti",
            ar: "ⲡⲓⲱⲓⲕ ⲛ̀ⲧⲉ Ⲫϯ",
          },
          { de: "ⲡⲓⲱⲓⲕ ⲙ̀Ⲫϯ", en: "piwik mVnouti", ar: "ⲡⲓⲱⲓⲕ ⲙ̀Ⲫϯ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q2-f-8",
        type: "fill-in-the-blank",
        questionText: {
          de: '„mein Körper" → ___ⲥⲱⲙⲁ',
          en: '"my body" → ___ⲥⲱⲙⲁ',
          ar: "«جسدي» → ___ⲥⲱⲙⲁ",
        },
        correctAnswer: "ⲡⲁ",
      },
      {
        id: "q2-f-9",
        type: "multiple-choice",
        questionText: {
          de: 'Attribut oder Besitz? „ϯⲥⲟⲩⲣⲓ ⲛ̀ⲛⲟⲩⲃ"',
          en: 'Attribut or possessive? "tisouri nnoub"',
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
          de: '„dieser Priester" → ___ⲟⲩⲏⲃ',
          en: '"this priest" → ___ⲟⲩⲏⲃ',
          ar: "«هذا الكاهن» → ___ⲟⲩⲏⲃ",
        },
        correctAnswer: "ⲡⲁⲓ",
      },
      {
        id: "q2-f-11",
        type: "multiple-choice",
        questionText: {
          de: 'Plural-Indefinit: „einige Frauen"',
          en: 'Indefinite plural: "some women"',
          ar: "جمع نكرة: «بعض النساء»",
        },
        options: [
          { de: "ϩⲁⲛϩⲓⲟⲙⲓ", en: "hanhiomi", ar: "ϩⲁⲛϩⲓⲟⲙⲓ" },
          { de: "ⲟⲩϩⲓⲟⲙⲓ", en: "ouhimi", ar: "ⲟⲩϩⲓⲟⲙⲓ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q2-f-12",
        type: "fill-in-the-blank",
        questionText: {
          de: 'Mini-Produktion (1–2 Wörter): „das Haus des Königs" → ⲡⲓⲏⲓ ___ ⲡⲟⲩⲣⲟ',
          en: 'Mini-production (1–2 words): "the king\'s house" → ⲡⲓⲏⲓ ___ ⲡⲟⲩⲣⲟ',
          ar: "إنتاج قصير: «بيت الملك» → ⲡⲓⲏⲓ ___ ⲡⲟⲩⲣⲟ",
        },
        correctAnswer: "ⲙ̀",
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
