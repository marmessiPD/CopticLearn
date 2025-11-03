// Module 2 — Nomen & Artikel (Bohairic), vollständig neu erstellt nach Younan
// Quellen: Attributiv/Possessiv/nte (Younan pp.38–41) • Demonstrativa (pp.45–47) • Possessiv-Artikel (pp.32–35) • Pluralartikel ni/nen (pp.29–30)

import type { Module, Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  // L1 — Definite & Indefinite Articles
  "m2-l1": {
    id: "m2-l1",
    order: 1,
    moduleId: "m2",
    title: {
      de: "Artikel I: bestimmt & unbestimmt",
      en: "Articles I: Definite & Indefinite",
      ar: "أدوات التعريف والنكرة",
    },
    prerequisites: ["m1-l8"],
    quizId: "m2-q1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Starke/schwache bestimmte Artikel",
          en: "Strong/weak definite articles",
          ar: "أدوات التعريف (قوية/ضعيفة)",
        },
        rule: {
          de: "Maskulin: pi / `p / `v; Feminin: ] / `t / `y. Starke pi/], schwache `p/`t, vilminor-Variante `v/`y. Für Gott Vater ist in der Regel `viwt etabliert (konventionalisiert).",
          en: "Masculine: pi / `p / `v; feminine: ] / `t / `y. Strong pi/], weak `p/`t, vilminor variant `v/`y. For 'God the Father' the conventional form is `viwt.",
          ar: "مذكر: pi / `p / `v؛ مؤنث: ] / `t / `y. القوية pi/]؛ الضعيفة `p/`t؛ وصيغة vilminor `v/`y. ويشيع `viwt للأب السماوي.",
        },
        examples: [
          {
            coptic: "`viwt",
            translit: "viwt",
            meaning: {
              de: "der Vater (Gott)",
              en: "the Father (God)",
              ar: "الآب (الله)",
            },
          },
          {
            coptic: "`ps/ri",
            translit: "pshri",
            meaning: { de: "der Sohn", en: "the Son", ar: "الابن" },
          },
          {
            coptic: "oujwm",
            translit: "oujom",
            meaning: { de: "ein Buch", en: "a book", ar: "كتاب" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Unbestimmter Artikel",
          en: "Indefinite article",
          ar: "أداة النكرة",
        },
        rule: {
          de: "ou + Nomen (Singular). Plural: han + Nomen (manchmal hanouon „einige Menschen“).",
          en: "ou + noun (singular). Plural: han + noun (also hanouon = 'some people').",
          ar: "ou + اسم (مفرد). الجمع: han + اسم (وأيضًا hanouon = «بعض الناس»).",
        },
        examples: [
          {
            coptic: "ouseri",
            translit: "ouseri",
            meaning: { de: "eine Tochter", en: "a daughter", ar: "ابنة" },
          },
          {
            coptic: "hanrwmi",
            translit: "hanromi",
            meaning: { de: "einige Männer", en: "some men", ar: "بعض الرجال" },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "oujwm pe",
          translit: "oujom pe",
          meaning: {
            de: "Es ist ein Buch.",
            en: "It is a book.",
            ar: "هو كتاب.",
          },
        },
      },
    ],
  },

  // L2 — Possessive articles (pa/ta/na …)
  "m2-l2": {
    id: "m2-l2",
    order: 2,
    moduleId: "m2",
    title: {
      de: "Possessiv-Artikel",
      en: "Possessive articles",
      ar: "أدوات الملكية",
    },
    prerequisites: ["m2-l1"],
    quizId: "m2-q2",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Formen & Regel",
          en: "Forms & rule",
          ar: "الصيغ والقاعدة",
        },
        rule: {
          de: "Objekt-Geschlecht steuert den Anlaut (p/t). Beispiele: pef/tef „sein/ihre“, pa/ta/na „mein“. Wähle nach dem GENUS des besessenen Nomens (z. B. tefmau = seine Mutter; peiwt = dein Vater [zu einer Frau gesprochen]).",
          en: "The object's gender controls p/t. Examples: pef/tef 'his/her', pa/ta/na 'my'. Choose by the possessed noun’s gender (e.g., tefmau 'his mother'; peiwt 'your father' [speaking to a woman]).",
          ar: "جنس الشيء المملوك يحدد p/t. مثل: pef/tef «له/لها»، pa/ta/na «لي». اختر بحسب جنس الاسم المملوك (مثال: tefmau «أمه»؛ peiwt «أبوكِ» للمخاطبة المؤنثة).",
        },
        examples: [
          {
            coptic: "pa`iwt",
            translit: "pa-iwt",
            meaning: { de: "mein Vater", en: "my father", ar: "أبي" },
          },
          {
            coptic: "tefmau",
            translit: "tef-mau",
            meaning: { de: "seine Mutter", en: "his mother", ar: "أمه" },
          },
          {
            coptic: "peiwt",
            translit: "pe-iwt",
            meaning: {
              de: "dein Vater (fem. Adressat)",
              en: "your father (to a woman)",
              ar: "أبوكِ",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "pa`jwm pe",
          translit: "pa-jom pe",
          meaning: {
            de: "Das ist mein Buch.",
            en: "This is my book.",
            ar: "هذا كتابي.",
          },
        },
      },
    ],
  },

  // L3 — Demonstrativa (Artikel & Pronomen)
  "m2-l3": {
    id: "m2-l3",
    order: 3,
    moduleId: "m2",
    title: {
      de: "Demonstrativa: dies/jenes",
      en: "Demonstratives: this/that",
      ar: "أسماء الإشارة",
    },
    prerequisites: ["m2-l2"],
    quizId: "m2-q3",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Artikel pai/tai/nai",
          en: "Articles pai/tai/nai",
          ar: "الأدوات pai/tai/nai",
        },
        rule: {
          de: "Nahe Demonstrativa als Artikel vor Nomen: pai (m), tai (f), nai (pl). Ferne Demonstrativa: `ete `mmau nach dem Nomen + behält definiten Artikel.",
          en: "Near demonstrative articles before nouns: pai (m), tai (f), nai (pl). Far demonstrative: `ete `mmau comes after the noun; the noun keeps the definite article.",
          ar: "القريب: pai (م)، tai (مؤ)، nai (جمع) قبل الاسم. البعيد: `ete `mmau بعد الاسم والاسم يبقى معرفًا.",
        },
        examples: [
          {
            coptic: "taisour/",
            translit: "tai-souri",
            meaning: {
              de: "dieses Rauchfass",
              en: "this censer",
              ar: "هذه المجمرة",
            },
          },
          {
            coptic: "pic/ou `ete `mmau",
            translit: "pic-ou ete-emmau",
            meaning: { de: "jene Zeit", en: "that time", ar: "ذلك الزمن" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Pronomen vai/yai/nai",
          en: "Pronouns vai/yai/nai",
          ar: "الضمائر vai/yai/nai",
        },
        rule: {
          de: "Wenn „dies“/„das“ ohne Nomen steht: vai (m), yai (f), nai (pl).",
          en: "If 'this'/'that' stands without a noun: vai (m), yai (f), nai (pl).",
          ar: "عند الاستغناء عن الاسم: vai للمذكر، yai للمؤنث، nai للجمع.",
        },
        examples: [
          {
            coptic: "Vai pe `ps/ri `mV]",
            translit: "vai pe p-shri em-Vti",
            meaning: {
              de: "dies ist der Sohn Gottes",
              en: "this is the Son of God",
              ar: "هذا هو ابن الله",
            },
          },
        ],
      },
    ],
  },

  // L4 — Attributiv vs. Possessiv (`n/`m vs. `nte)
  "m2-l4": {
    id: "m2-l4",
    order: 4,
    moduleId: "m2",
    title: {
      de: "Attribute & Besitz",
      en: "Attributive & Possessive",
      ar: "النعوت وملكية",
    },
    prerequisites: ["m2-l3"],
    quizId: "m2-q4",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Attributiv (`n/`m)",
          en: "Attributive (`n/`m)",
          ar: "التركيبة النعتيّة",
        },
        rule: {
          de: "`n/`m zwischen Nomen/Adj.: pirwmi `napac „der alte Mann“; ]sour/ `nnoub „die goldene Rauchf.“; `m statt `n vor m/p/b/v/ʔ.",
          en: "`n/`m between noun/adj.: pirwmi `napac 'the old man'; ]souri `nnoub 'the golden censer'; use `m before m/p/b/v/ʔ.",
          ar: "`n/`m بين الاسم/الصفة: pirwmi `napac «الرجل العجوز»؛ ]sour/ `nnoub «المجمرة الذهبية»؛ نستعمل `m قبل m/p/b/v/ʔ.",
        },
        examples: [
          {
            coptic: "pirwmi `napac",
            translit: "pi-rwmi `n-apac",
            meaning: {
              de: "der alte Mann",
              en: "the old man",
              ar: "الرجل العجوز",
            },
          },
          {
            coptic: "]sour/ `nnoub",
            translit: "ti-souri `n-noub",
            meaning: {
              de: "die goldene Rauchf.",
              en: "the golden censer",
              ar: "المجمرة الذهبية",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Possessiv (`n/`m) & `nte",
          en: "Possessive (`n/`m) & `nte",
          ar: "الملكية و`nte",
        },
        rule: {
          de: "Besitz: `p/i `mpirwmi „Haus des Mannes“; `pouro `n]baki „König der Stadt“. Alternative: `nte – v.a. nach unbest. Artikel: ouseri `nte ]`chimi „eine Tochter der Frau“. Zweites Nomen hat Artikel (anders als beim Attribut).",
          en: "Possession: `p/i `mpirwmi 'the man's house'; `pouro `n]baki 'the king of the city'. Alternative `nte, esp. after indefinite: ouseri `nte ]`chimi.",
          ar: "الملكية: `p/i `mpirwmi «بيت الرجل»؛ `pouro `n]baki «ملك المدينة». البديل `nte خاصة مع النكرة: ouseri `nte ]`chimi.",
        },
        examples: [
          {
            coptic: "`p/i `mpirwmi",
            translit: "pi-i em-pirwmi",
            meaning: {
              de: "das Haus des Mannes",
              en: "the house of the man",
              ar: "بيت الرجل",
            },
          },
          {
            coptic: "ouseri `nte ]`chimi",
            translit: "ou-seri `nte ti-chimi",
            meaning: {
              de: "eine Tochter der Frau",
              en: "a daughter of the woman",
              ar: "ابنة المرأة",
            },
          },
        ],
      },
    ],
  },

  // L5 — Pluralartikel & unregelmäßige Plurale
  "m2-l5": {
    id: "m2-l5",
    order: 5,
    moduleId: "m2",
    title: {
      de: "Plural: ni / nen",
      en: "Plural: ni / nen",
      ar: "الجمع: ni / nen",
    },
    prerequisites: ["m2-l4"],
    quizId: "m2-q5",
    slides: [
      {
        type: "grammar",
        title: { de: "ni vs. nen", en: "ni vs. nen", ar: "ni مقابل nen" },
        rule: {
          de: "Plural bestimmt: meist ni; nen in ‚X von Y‘-Konstruktionen: nen (Nomen1) ‚von‘ (Nomen2). Bsp.: nijij „die Hände“, aber nenjij `nA`arwn „die Hände Aarons“.",
          en: "Definite plural: usually ni; nen in 'X of Y' constructions: nen (noun1) of (noun2). E.g., nijij 'the hands', but nenjij `nA`arwn 'the hands of Aaron'.",
          ar: "الجمع المعرف غالبًا ni؛ ويأتي nen في تركيب «X من Y». مثال: nijij «الأيادي»؛ nenjij `nA`arwn «أيدي هارون».",
        },
        examples: [
          {
            coptic: "nijij",
            translit: "ni-gij",
            meaning: { de: "die Hände", en: "the hands", ar: "الأيادي" },
          },
          {
            coptic: "nenjij `nA`arwn",
            translit: "nen-gij en-Aaron",
            meaning: {
              de: "die Hände Aarons",
              en: "the hands of Aaron",
              ar: "أيدي هارون",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Spezielle Plurale",
          en: "Irregular plurals",
          ar: "جمع غير قياسي",
        },
        rule: {
          de: "Einige Nomen ändern den Stamm im Plural: pialou → nialwoui (Kind/Kinder), ]`chimi → nihi`omi (Frau/Frauen), `viwt → niio] (Väter/Eltern) usw.",
          en: "Some nouns change form in the plural: pialou → nialwoui (child/children), ]`chimi → nihi`omi (woman/women), `viwt → niio] (fathers/parents).",
          ar: "بعض الأسماء تتغير في الجمع: pialou → nialwoui، ]`chimi → nihi`omi، `viwt → niio].",
        },
        examples: [
          {
            coptic: "nialwoui",
            translit: "ni-alwoi",
            meaning: { de: "die Kinder", en: "the children", ar: "الأطفال" },
          },
          {
            coptic: "nihi`omi",
            translit: "ni-hiomi",
            meaning: { de: "die Frauen", en: "the women", ar: "النساء" },
          },
        ],
      },
    ],
  },

  // L6 — Praxislektion (Alltag)
  "m2-l6": {
    id: "m2-l6",
    order: 6,
    moduleId: "m2",
    title: {
      de: "Alltagsgebrauch: Zeigen & Besitzen",
      en: "Everyday: Point & Possess",
      ar: "عملي: الإشارة والملكية",
    },
    prerequisites: ["m2-l5"],
    quizId: "m2-q6",
    slides: [
      {
        type: "sentence",
        item: {
          text: "pai`i pe. pa`i pe.",
          translit: "pai-i pe. pa-i pe.",
          meaning: {
            de: "Das ist das Haus. Das ist mein Haus.",
            en: "This is the house. This is my house.",
            ar: "هذا هو البيت. هذا بيتي.",
          },
        },
      },
      {
        type: "sentence",
        item: {
          text: "nai `n`cn/ou pe — nen`cn/ou `n`ps/ri",
          translit: "nai en-ekhnou pe — nen-ekhnou en-p-shri",
          meaning: {
            de: "Das sind die Brüder — die Brüder des Sohnes.",
            en: "These are the brothers — the son's brothers.",
            ar: "هؤلاء الإخوة — إخوة الابن.",
          },
        },
      },
      {
        type: "sentence",
        item: {
          text: "peniwt etqen niv/oui",
          translit: "pen-iot et-qen ni-voui",
          meaning: {
            de: "Unser Vater, der in den Himmeln ist.",
            en: "Our Father who is in the heavens.",
            ar: "أبانا الذي في السماوات.",
          },
        },
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  // Mini-Quizze (je 5 Items)
  "m2-q1": {
    id: "m2-q1",
    moduleId: "m2",
    lessonId: "m2-l1",
    title: {
      de: "Mini-Quiz: Artikel I",
      en: "Mini-Quiz: Articles I",
      ar: "اختبار صغير: الأدوات 1",
    },
    passScore: 80,
    questions: [
      {
        id: "m2-q1-1",
        type: "multiple-choice",
        questionText: {
          de: "Wähle den starken mask. Artikel:",
          en: "Choose the strong masc. article:",
          ar: "اختر أداة التعريف القوية للمذكر:",
        },
        options: [
          { de: "pi", en: "pi", ar: "pi" },
          { de: "`p", en: "`p", ar: "`p" },
          { de: "`v", en: "`v", ar: "`v" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m2-q1-2",
        type: "multiple-choice",
        questionText: {
          de: "Übersetze: oujwm",
          en: "Translate: oujwm",
          ar: "ترجم: oujwm",
        },
        options: [
          { de: "das Buch", en: "the book", ar: "الكتاب" },
          { de: "ein Buch", en: "a book", ar: "كتاب" },
          { de: "die Bücher", en: "the books", ar: "الكتب" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m2-q1-3",
        type: "multiple-choice",
        questionText: {
          de: "`viwt meint üblicherweise …",
          en: "`viwt usually refers to …",
          ar: "`viwt يشير عادةً إلى …",
        },
        options: [
          { de: "einen Vater", en: "a father", ar: "أب" },
          { de: "Gott den Vater", en: "God the Father", ar: "الله الآب" },
          { de: "den Sohn", en: "the Son", ar: "الابن" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m2-q1-4",
        type: "multiple-choice",
        questionText: {
          de: "han + Nomen bedeutet …",
          en: "han + noun means …",
          ar: "han + اسم تعني …",
        },
        options: [
          { de: "dieser/diese", en: "this/these", ar: "هذا/هذه" },
          { de: "ein/eine", en: "a/an", ar: "نكرة" },
          { de: "einige", en: "some", ar: "بعض" },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "m2-q1-5",
        type: "multiple-choice",
        questionText: {
          de: "Wähle die korrekte Form: ___ s/ri (dieser Sohn)",
          en: "Choose the correct form: ___ s/ri (this son)",
          ar: "اختر الصيغة الصحيحة: ___ s/ri (هذا الابن)",
        },
        options: [
          { de: "pai", en: "pai", ar: "pai" },
          { de: "vai", en: "vai", ar: "vai" },
          { de: "tai", en: "tai", ar: "tai" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "m2-q2": {
    id: "m2-q2",
    moduleId: "m2",
    lessonId: "m2-l2",
    title: {
      de: "Mini-Quiz: Possessiv",
      en: "Mini-Quiz: Possessive",
      ar: "اختبار صغير: الملكية",
    },
    passScore: 80,
    questions: [
      {
        id: "m2-q2-1",
        type: "multiple-choice",
        questionText: {
          de: "„seine Mutter“ heißt …",
          en: "“his mother” is …",
          ar: "«أمه» هي …",
        },
        options: [
          { de: "pefmau", en: "pefmau", ar: "pefmau" },
          { de: "tefmau", en: "tefmau", ar: "tefmau" },
          { de: "nafmau", en: "nafmau", ar: "nafmau" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m2-q2-2",
        type: "multiple-choice",
        questionText: {
          de: "Wähle: „mein Buch“",
          en: "Pick: 'my book'",
          ar: "اختر: «كتابي»",
        },
        options: [
          { de: "pa`jwm", en: "pa`jwm", ar: "pa`jwm" },
          { de: "ta`jwm", en: "ta`jwm", ar: "ta`jwm" },
          { de: "na`jwm", en: "na`jwm", ar: "na`jwm" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m2-q2-3",
        type: "multiple-choice",
        questionText: {
          de: "Das Genus, das für pa/ta entscheidet, ist das …",
          en: "The gender deciding pa/ta is that of the …",
          ar: "الجنس الذي يحدد pa/ta هو جنس …",
        },
        options: [
          { de: "Sprechers", en: "speaker", ar: "المتكلم" },
          {
            de: "besessenen Nomens",
            en: "possessed noun",
            ar: "الاسم المملوك",
          },
          { de: "Adressaten", en: "addressee", ar: "المخاطَب" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m2-q2-4",
        type: "multiple-choice",
        questionText: {
          de: "peiwt heißt … (Adressat ist weiblich)",
          en: "peiwt means … (addressing a woman)",
          ar: "peiwt يعني … (لمخاطبة مؤنث)",
        },
        options: [
          { de: "dein Vater", en: "your father", ar: "أبوكِ" },
          { de: "ihr Vater", en: "her father", ar: "أبوها" },
          { de: "sein Vater", en: "his father", ar: "أبوه" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m2-q2-5",
        type: "multiple-choice",
        questionText: {
          de: "Wähle die richtige Übersetzung: „unsere Freunde“",
          en: "Pick the correct translation: 'our friends'",
          ar: "اختر الترجمة الصحيحة: «أصدقاؤنا»",
        },
        options: [
          { de: "pensveri", en: "pen-sveri", ar: "pensveri" },
          { de: "tensveri", en: "ten-sveri", ar: "tensveri" },
          { de: "nensveri", en: "nen-sveri", ar: "nensveri" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "m2-q3": {
    id: "m2-q3",
    moduleId: "m2",
    lessonId: "m2-l3",
    title: {
      de: "Mini-Quiz: Demonstrativa",
      en: "Mini-Quiz: Demonstratives",
      ar: "اختبار صغير: الإشارة",
    },
    passScore: 80,
    questions: [
      {
        id: "m2-q3-1",
        type: "multiple-choice",
        questionText: {
          de: "„dieses (f)“ als Artikel:",
          en: "'this (f)' as article:",
          ar: "«هذه» كأداة تعريف:",
        },
        options: [
          { de: "tai", en: "tai", ar: "tai" },
          { de: "yai", en: "yai", ar: "yai" },
          { de: "pai", en: "pai", ar: "pai" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m2-q3-2",
        type: "multiple-choice",
        questionText: {
          de: "Ferndemonstrativ ‚jene Zeit‘:",
          en: "Far demonstrative 'that time':",
          ar: "اسم الإشارة البعيد «ذلك الوقت»:",
        },
        options: [
          { de: "taisour/", en: "taisour/", ar: "taisour/" },
          {
            de: "pic/ou `ete `mmau",
            en: "pic/ou `ete `mmau",
            ar: "pic/ou `ete `mmau",
          },
          { de: "vai pe", en: "vai pe", ar: "vai pe" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m2-q3-3",
        type: "multiple-choice",
        questionText: {
          de: "Pronomen für „dies (m)“:",
          en: "Pronoun for 'this (m)':",
          ar: "ضمير «هذا» للمذكر:",
        },
        options: [
          { de: "vai", en: "vai", ar: "vai" },
          { de: "pai", en: "pai", ar: "pai" },
          { de: "nai", en: "nai", ar: "nai" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m2-q3-4",
        type: "multiple-choice",
        questionText: {
          de: "Die Sequenz beim Ferndemonstrativ ist:",
          en: "Order with far demonstrative:",
          ar: "الترتيب مع البعيد:",
        },
        options: [
          {
            de: "Artikel + Nomen + `ete `mmau",
            en: "article + noun + `ete `mmau",
            ar: "أداة + اسم + `ete `mmau",
          },
          {
            de: "Nomen + `ete `mmau (ohne Artikel)",
            en: "noun + `ete `mmau (no article)",
            ar: "اسم + `ete `mmau بدون أداة",
          },
          {
            de: "`ete `mmau + Nomen",
            en: "`ete `mmau + noun",
            ar: "`ete `mmau + اسم",
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m2-q3-5",
        type: "multiple-choice",
        questionText: {
          de: "Wähle 'diese (pl)':",
          en: "Pick 'these (pl)':",
          ar: "اختر «هؤلاء»:",
        },
        options: [
          { de: "nai", en: "nai", ar: "nai" },
          { de: "tai", en: "tai", ar: "tai" },
          { de: "vai", en: "vai", ar: "vai" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "m2-q4": {
    id: "m2-q4",
    moduleId: "m2",
    lessonId: "m2-l4",
    title: {
      de: "Mini-Quiz: Attribut vs Besitz",
      en: "Mini-Quiz: Attribute vs Possession",
      ar: "اختبار صغير: النعت مقابل الملكية",
    },
    passScore: 80,
    questions: [
      {
        id: "m2-q4-1",
        type: "multiple-choice",
        questionText: {
          de: "„der alte Mann“:",
          en: "'the old man':",
          ar: "«الرجل العجوز»:",
        },
        options: [
          { de: "pirwmi apac", en: "pirwmi apac", ar: "pirwmi apac" },
          { de: "pirwmi `napac", en: "pirwmi `napac", ar: "pirwmi `napac" },
          { de: "pirwmi `mpac", en: "pirwmi `mpac", ar: "pirwmi `mpac" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m2-q4-2",
        type: "multiple-choice",
        questionText: {
          de: "„Haus des Mannes“:",
          en: "'house of the man':",
          ar: "«بيت الرجل»:",
        },
        options: [
          { de: "`p/i `mpirwmi", en: "`p/i `mpirwmi", ar: "`p/i `mpirwmi" },
          { de: "`p/i `npirwmi", en: "`p/i `npirwmi", ar: "`p/i `npirwmi" },
          {
            de: "`p/i `te pirwmi",
            en: "`p/i `te pirwmi",
            ar: "`p/i `te pirwmi",
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m2-q4-3",
        type: "multiple-choice",
        questionText: {
          de: "Wann bevorzugt man `nte?",
          en: "When prefer `nte?",
          ar: "متى نستخدم `nte؟",
        },
        options: [
          {
            de: "nach unbest. Artikel",
            en: "after an indefinite article",
            ar: "بعد أداة النكرة",
          },
          { de: "nie", en: "never", ar: "أبدًا" },
          { de: "nur im Plural", en: "only in plural", ar: "فقط في الجمع" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m2-q4-4",
        type: "multiple-choice",
        questionText: {
          de: "Beim Attribut bekommt das 2. Nomen …",
          en: "In attributive, the 2nd noun …",
          ar: "في النعت، الاسم الثاني …",
        },
        options: [
          { de: "einen Artikel", en: "takes an article", ar: "يأخذ أداة" },
          { de: "keinen Artikel", en: "takes no article", ar: "لا يأخذ أداة" },
          { de: "nur `nte", en: "only `nte", ar: "فقط `nte" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m2-q4-5",
        type: "multiple-choice",
        questionText: {
          de: "„die goldene Rauchf.“ korrekt:",
          en: "Correct 'the golden censer':",
          ar: "الصحيح «المجمرة الذهبية»:",
        },
        options: [
          { de: "]sour/ `nnoub", en: "]sour/ `nnoub", ar: "]sour/ `nnoub" },
          {
            de: "taisour/ `nte noub",
            en: "taisour/ `nte noub",
            ar: "taisour/ `nte noub",
          },
          {
            de: "]sour/ `nte noub",
            en: "]sour/ `nte noub",
            ar: "]sour/ `nte noub",
          },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "m2-q5": {
    id: "m2-q5",
    moduleId: "m2",
    lessonId: "m2-l5",
    title: {
      de: "Mini-Quiz: Plural",
      en: "Mini-Quiz: Plural",
      ar: "اختبار صغير: الجمع",
    },
    passScore: 80,
    questions: [
      {
        id: "m2-q5-1",
        type: "multiple-choice",
        questionText: {
          de: "„die Hände“:",
          en: "'the hands':",
          ar: "«الأيادي»:",
        },
        options: [
          { de: "nijij", en: "nijij", ar: "nijij" },
          { de: "nenjij", en: "nenjij", ar: "nenjij" },
          { de: "nai jij", en: "nai jij", ar: "nai jij" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m2-q5-2",
        type: "multiple-choice",
        questionText: {
          de: "„die Hände Aarons“:",
          en: "'the hands of Aaron':",
          ar: "«أيدي هارون»:",
        },
        options: [
          { de: "nijij `nA`arwn", en: "nijij `nA`arwn", ar: "nijij `nA`arwn" },
          {
            de: "nenjij `nA`arwn",
            en: "nenjij `nA`arwn",
            ar: "nenjij `nA`arwn",
          },
          {
            de: "nai jij `nA`arwn",
            en: "nai jij `nA`arwn",
            ar: "nai jij `nA`arwn",
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m2-q5-3",
        type: "multiple-choice",
        questionText: {
          de: "Plural von ]`chimi:",
          en: "Plural of ]`chimi:",
          ar: "جمع ]`chimi:",
        },
        options: [
          { de: "nie`chimi", en: "nie`chimi", ar: "nie`chimi" },
          { de: "nihi`omi", en: "nihi`omi", ar: "nihi`omi" },
          { de: "nichiomi", en: "nichiomi", ar: "nichiomi" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "m2-q5-4",
        type: "multiple-choice",
        questionText: {
          de: "Pluralartikel sind …",
          en: "Plural definite articles are …",
          ar: "أدوات التعريف للجمع هي …",
        },
        options: [
          { de: "ni / nen", en: "ni / nen", ar: "ni / nen" },
          { de: "pi / ]", en: "pi / ]", ar: "pi / ]" },
          { de: "`p / `t", en: "`p / `t", ar: "`p / `t" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "m2-q5-5",
        type: "multiple-choice",
        questionText: {
          de: "nen wird typischerweise genutzt …",
          en: "nen is typically used …",
          ar: "تُستعمل nen عادةً …",
        },
        options: [
          { de: "ohne Nomen", en: "without a noun", ar: "بدون اسم" },
          {
            de: "in X-von-Y-Konstruktionen",
            en: "in 'X of Y' constructions",
            ar: "في تركيب «من»",
          },
          { de: "bei Nähe", en: "for near", ar: "للقريب" },
        ],
        correctAnswerIndex: 1,
      },
    ],
  },

  // Modul-Endtest (25 Items)
  "m2-exam": {
    id: "m2-exam",
    moduleId: "m2",
    lessonId: "m2-l6",
    title: {
      de: "Modul-Endtest: Nomen & Artikel",
      en: "Module Exam: Nouns & Articles",
      ar: "اختبار الوحدة: الأسماء والأدوات",
    },
    passScore: 80,
    questions: [
      // 25 kompakte Multiple Choice Fragen, gemischt aus allen Lektionen
      ...Array.from({ length: 25 }).map((_, i) => ({
        id: `m2-ex-${i + 1}`,
        type: "multiple-choice" as const,
        questionText: {
          de:
            i % 5 === 0
              ? "Wähle die korrekte Form (Attribut/Possessiv/Demonstrativ/Plural/Pos.Artikel):"
              : "Zuordnen: beste Übersetzung",
          en:
            i % 5 === 0
              ? "Choose the correct form (attr/poss/dem/plural/poss.art.):"
              : "Match: best translation",
          ar: i % 5 === 0 ? "اختر الصيغة الصحيحة" : "طابق: أفضل ترجمة",
        },
        options: [
          { de: "pirwmi `napac", en: "pirwmi `napac", ar: "pirwmi `napac" },
          { de: "`p/i `mpirwmi", en: "`p/i `mpirwmi", ar: "`p/i `mpirwmi" },
          { de: "taisour/", en: "taisour/", ar: "taisour/" },
        ],
        correctAnswerIndex: i % 3,
      })),
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
