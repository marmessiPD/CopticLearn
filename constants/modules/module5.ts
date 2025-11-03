// --- Modul 5: Verben — neue Lektionen (Bohairisch, nach Younan) ---
// Quellen für Grammatik: Younan, *So you want to learn – A guide to Bohairic Grammar*.
// Kirchenväter: Bercot (ed.), *Dictionary of Early Christian Beliefs*; Papandrea, *Reading the Early Church Fathers*; Akin, *The Fathers Know Best*. Zitierte Stellen sind in den Feldern fatherReference notiert.

import type { Lesson, Quiz } from '../../types';

export const LESSONS: Record<string, Lesson> = {
  // m5 — Verben (weitere Formen)
  "l5-1": {
    id: "l5-1",
    order: 1,
    moduleId: "m5",
    title: {
      de: "Einführung: Verbformen",
      en: "Introduction: Verb Forms",
      ar: "مقدمة: أشكال الفعل",
    },
    prerequisites: ["m4-l3"],
    quizId: "q5-1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Überblick: Verben im Bohairischen",
          en: "Overview: Bohairic Verbs",
          ar: "نظرة عامة: الأفعال البحيرية",
        },
        rule: {
          de: "Bohairische Verben haben verschiedene Formen: Infinitiv, Qualitativ (Zustandsform), und konjugierte Formen. Jede Form drückt unterschiedliche Aspekte aus.",
          en: "Bohairic verbs have different forms: infinitive, qualitative (stative), and conjugated forms. Each expresses different aspects.",
          ar: "للأفعال البحيرية أشكال مختلفة: المصدر، الوصفي (الحالي)، والأشكال المصرّفة. كل شكل يعبّر عن جوانب مختلفة.",
        },
        examples: [
          {
            coptic: "ⲙⲟⲩ",
            translit: "mou",
            meaning: {
              de: "sterben (Infinitiv)",
              en: "to die (infinitive)",
              ar: "يموت (مصدر)",
            },
          },
          {
            coptic: "ⲙⲟⲩϯ",
            translit: "mouti",
            meaning: {
              de: "lebendig sein (Qualitativ)",
              en: "to be alive (qualitative)",
              ar: "يكون حيًا (وصفي)",
            },
          },
          {
            coptic: "ⲥⲱⲧⲡ",
            translit: "sōtp",
            meaning: {
              de: "wählen (Infinitiv)",
              en: "to choose (infinitive)",
              ar: "يختار (مصدر)",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Infinitiv als Nomen",
          en: "Infinitive as Noun",
          ar: "المصدر كاسم",
        },
        rule: {
          de: 'Der Infinitiv funktioniert als Verbalnomen und kann mit Artikeln stehen: ⲡⲓⲥⲱⲧⲉⲙ „das Hören".',
          en: 'The infinitive functions as verbal noun and can take articles: ⲡⲓⲥⲱⲧⲉⲙ "the hearing".',
          ar: "يعمل المصدر كاسم فعلي ويمكن أن يأخذ أدوات: ⲡⲓⲥⲱⲧⲉⲙ «السماع».",
        },
        examples: [
          {
            coptic: "ⲡⲓⲥⲱⲧⲉⲙ ⲛ̀ⲧⲉ ⲡⲓⲗⲟⲅⲟⲥ",
            translit: "pi-sōtem ente pi-logos",
            meaning: {
              de: "das Hören des Wortes",
              en: "the hearing of the Word",
              ar: "سماع الكلمة",
            },
          },
          {
            coptic: "ⲡⲓⲙⲟⲩϣⲓ",
            translit: "pi-moushi",
            meaning: { de: "das Gehen", en: "the walking", ar: "المشي" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Verben mit Präpositionen",
          en: "Verbs with Prepositions",
          ar: "الأفعال مع حروف الجر",
        },
        rule: {
          de: 'Viele Verben nehmen feste Präpositionen: ⲥⲱⲧⲉⲙ ⲉ „hören auf", ϫⲱⲥⲧ ⲛ̀ⲥⲁ „suchen nach".',
          en: 'Many verbs take fixed prepositions: ⲥⲱⲧⲉⲙ ⲉ "listen to", ϫⲱⲥⲧ ⲛ̀ⲥⲁ "seek after".',
          ar: "أفعال كثيرة تأخذ حروف جر ثابتة: ⲥⲱⲧⲉⲙ ⲉ «يستمع إلى»، ϫⲱⲥⲧ ⲛ̀ⲥⲁ «يبحث عن».",
        },
        examples: [
          {
            coptic: "ⲥⲱⲧⲉⲙ ⲉ ⲡⲓⲛⲟⲩϯ",
            translit: "sōtem e pi-nouti",
            meaning: {
              de: "auf Gott hören",
              en: "listen to God",
              ar: "استمع إلى الله",
            },
          },
          {
            coptic: "ϫⲱⲥⲧ ⲛ̀ⲥⲁ ϯⲙⲉⲑⲙⲏⲓ",
            translit: "jōst ensa ti-methmēi",
            meaning: {
              de: "die Wahrheit suchen",
              en: "seek the truth",
              ar: "ابحث عن الحق",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: { de: "Häufige Verben", en: "Common Verbs", ar: "أفعال شائعة" },
        rule: {
          de: "Grundlegende Verben für die Katechese: ⲥⲱⲧⲉⲙ (hören), ⲙⲟⲩϣⲓ (gehen), ϯ (geben), ϫⲓ (nehmen), ⲥⲁϫⲓ (sprechen).",
          en: "Basic verbs for catechesis: ⲥⲱⲧⲉⲙ (hear), ⲙⲟⲩϣⲓ (go), ϯ (give), ϫⲓ (take), ⲥⲁϫⲓ (speak).",
          ar: "أفعال أساسية للتعليم: ⲥⲱⲧⲉⲙ (يسمع)، ⲙⲟⲩϣⲓ (يذهب)، ϯ (يعطي)، ϫⲓ (يأخذ)، ⲥⲁϫⲓ (يتكلم).",
        },
        examples: [
          {
            coptic: "ϯ ⲙ̀ⲡⲓⲱⲓⲕ",
            translit: "ti em-pi-ōik",
            meaning: {
              de: "das Brot geben",
              en: "give the bread",
              ar: "يعطي الخبز",
            },
          },
          {
            coptic: "ϫⲓ ⲙ̀ⲡⲓⲁⲫⲉⲥ",
            translit: "ji em-pi-afes",
            meaning: {
              de: "die Vergebung empfangen",
              en: "receive forgiveness",
              ar: "يقبل المغفرة",
            },
          },
          {
            coptic: "ⲥⲁϫⲓ ⲛⲉⲙ ⲡⲓⲗⲁⲟⲥ",
            translit: "saji nem pi-laos",
            meaning: {
              de: "mit dem Volk sprechen",
              en: "speak with the people",
              ar: "يتكلم مع الشعب",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲙⲁⲣⲉⲛⲥⲱⲧⲉⲙ ⲉ ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲛⲟⲩϯ",
          translit: "maren-sōtem e pi-logos ente p-nouti",
          meaning: {
            de: "Lasst uns auf das Wort Gottes hören",
            en: "Let us listen to the Word of God",
            ar: "لنستمع إلى كلمة الله",
          },
        },
      },
    ],
  },

  "l5-2": {
    id: "l5-2",
    order: 2,
    moduleId: "m5",
    title: {
      de: "Qualitatives Präsens",
      en: "Qualitative Present",
      ar: "الحاضر الوصفي",
    },
    prerequisites: ["l5-1"],
    quizId: "q5-2",
    slides: [
      {
        type: "grammar",
        title: { de: "Funktion", en: "Function", ar: "الوظيفة" },
        rule: {
          de: "Das qualitative Präsens beschreibt einen dauerhaften Zustand oder eine Eigenart, oft mit adjektivischem Sinn. Bildung: Personalpräfix + Verbalstamm (ohne Objektmarker).",
          en: "The qualitative present describes a permanent state or quality, often adjectival. Formation: personal prefix + verbal stem (no object marker).",
          ar: "الحاضر الوصفي يصف حالة دائمة أو صفة. التكوين: بادئة شخصية + جذر الفعل دون علامة مفعول.",
        },
        examples: [
          {
            coptic: "ϯⲙⲟⲩϯ",
            translit: "ti-mouti",
            meaning: {
              de: "ich bin lebendig / lebe",
              en: "I am alive",
              ar: "أنا حيّ",
            },
          },
          {
            coptic: "ϥ̀ⲥⲟⲧⲏⲣ",
            translit: "ef-sotēr",
            meaning: {
              de: "er ist rettend/retterhaft",
              en: "he is saving",
              ar: "هو مُخلِّص",
            },
          },
          {
            coptic: "ⲧⲉⲛϣⲱⲡ",
            translit: "ten-shop",
            meaning: {
              de: "wir sind anwesend",
              en: "we are present",
              ar: "نحن حاضِرون",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Formenübersicht",
          en: "Personal Prefixes",
          ar: "البوادئ الشخصية",
        },
        rule: {
          de: "Bohairisch, Qualitativ: ϯ-/ⲧⲉ- (1sg/1pl ⲧⲉⲛ-), ⲕ̀-, ⲥ̀-, ϥ̀-, ⲥ̀-, ⲛ̀ⲧⲟⲧⲉⲛ- nicht verwendet; Fokus auf Einwort-Prädikat.",
          en: "Bohairic qualitative uses simple subject prefixes. Focus on single-word predicate.",
          ar: "البحيري يستخدم بادئات بسيطة مع خبر كلمة واحدة.",
        },
        examples: [
          {
            coptic: "ⲥ̀ⲛⲁϩ",
            translit: "es-nah",
            meaning: {
              de: "du (m.) bist weise",
              en: "you (m.) are wise",
              ar: "أنت حكيم",
            },
          },
          {
            coptic: "ⲥ̀ⲕⲁⲑⲁⲣⲟⲥ",
            translit: "es-katharos",
            meaning: {
              de: "du (f.) bist rein",
              en: "you (f.) are pure",
              ar: "أنتِ طاهرة",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: { de: "Negation", en: "Negation", ar: "النفي" },
        rule: {
          de: "Negation wie im Präsens: optional ⲛ̀- vor, ⲁⲛ nach dem Ausdruck: ⲛ̀-(Präfix+Stamm) ... ⲁⲛ.",
          en: "Negate with optional ⲛ̀- before and ⲁⲛ after the predicate.",
          ar: "النفي بـ ⲛ̀- قبل الخبر و ⲁⲛ بعده.",
        },
        examples: [
          {
            coptic: "ⲛ̀ϯⲙⲟⲩϯ ⲁⲛ",
            translit: "en-ti-mouti an",
            meaning: {
              de: "ich bin nicht lebendig",
              en: "I am not alive",
              ar: "لست حياً",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Gebrauch mit Artikeln",
          en: "With Articles",
          ar: "مع الأدوات",
        },
        rule: {
          de: 'Mit bestimmtem Artikel wird das Qualitativ substantivisch: ⲡ̀ⲥⲱⲧⲏⲣ „der Retter", ϯⲙⲟⲩϯ „das Leben" im Kontext.',
          en: 'With definite article, the qualitative can become nominal: ⲡ̀ⲥⲱⲧⲏⲣ "the Savior".',
          ar: "مع أداة التعريف يصبح اسمًا: ⲡ̀ⲥⲱⲧⲏⲣ «المخلّص».",
        },
        examples: [
          {
            coptic: "ⲡ̀ⲥⲱⲧⲏⲣ ⲡⲉ Ⲡ̀ⲭⲣⲓⲥⲧⲟⲥ",
            translit: "ep-sōtēr pe P-Christos",
            meaning: {
              de: "Christus ist der Retter",
              en: "Christ is the Savior",
              ar: "المسيح هو المخلّص",
            },
          },
          {
            coptic: "ϯⲙⲟⲩϯ ⲙ̀ⲫ̀ⲛⲟⲩϯ",
            translit: "ti-mouti em-Efnouti",
            meaning: {
              de: "das Leben in Gott",
              en: "life in God",
              ar: "الحياة في الله",
            },
          },
        ],
      },
    ],
  },

  "l5-3": {
    id: "l5-3",
    order: 3,
    moduleId: "m5",
    title: {
      de: "Relativ: ⲉⲧ- / ⲉ- mit Adjektiven",
      en: "Relative: ⲉⲧ- / ⲉ- with Adjectives",
      ar: "الأدوات النسبية مع الصفات",
    },
    prerequisites: ["l5-2"],
    quizId: "q5-3",
    slides: [
      {
        type: "grammar",
        title: {
          de: "ⲉⲧ- bildet Relativsatz",
          en: "ⲉⲧ- forms relative clause",
          ar: "ⲉⲧ- تُكوِّن جملة موصولة",
        },
        rule: {
          de: 'ⲉⲧ- + Qualitativ/Partizip: „der/die/das, der … ist". Nach Artikel und in Kongruenz.',
          en: 'ⲉⲧ- + qualitative/participle: "who/that is …" after the article.',
          ar: "ⲉⲧ- + الوصفي/اسم الفاعل: «الذي/التي هو …».",
        },
        examples: [
          {
            coptic: "ⲡ̀ⲣⲱⲙⲓ ⲉⲧ-ϥ̀ⲙⲉⲣⲓ",
            translit: "ep-romi et-f-meri",
            meaning: {
              de: "der Mann, der gütig ist",
              en: "the man who is kind",
              ar: "الرجل الذي هو لطيف",
            },
          },
          {
            coptic: "ϯⲥⲙⲏ ⲉⲧ-ⲥ̀ⲕⲁⲑⲁⲣⲁ",
            translit: "ti-sme et-s-kathara",
            meaning: {
              de: "die Stimme, die rein ist",
              en: "the voice that is pure",
              ar: "الصوت الطاهر",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "ⲉ- nach Präposition",
          en: "ⲉ- after prepositions",
          ar: "ⲉ- بعد حروف الجر",
        },
        rule: {
          de: 'Nach Präpositionen erscheint oft ⲉ- statt ⲉⲧ-: ⲙ̀ⲡⲉⲕⲛⲟⲩⲧⲉ ⲉ-ⲥ̀ⲕⲁⲑⲁⲣⲁ „in deinem Gott, der rein ist" (Lehrbeispiel).',
          en: "After prepositions, ⲉ- may replace ⲉⲧ-.",
          ar: "بعد حروف الجر قد تأتي ⲉ- بدل ⲉⲧ-.",
        },
        examples: [
          {
            coptic: "ϩⲓ-ⲡ̀ⲉⲕⲟⲓⲕ ⲉ-ϥ̀ⲙⲁⲣⲟⲩⲣ",
            translit: "hi-ep-ékoik e-f-marour",
            meaning: {
              de: "in deinem Haus, das bitter ist",
              en: "in your house that is bitter",
              ar: "في بيتك المرّ",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Negative Relativform",
          en: "Negative relative",
          ar: "النسبة النافية",
        },
        rule: {
          de: 'Negation im Relativsatz: ⲉⲧ- … ⲁⲛ. Beispiel: ⲡ̀ⲙⲁ ⲉⲧ-ϥ̀ⲕⲁⲑⲁⲣⲟⲥ ⲁⲛ „der Ort, der nicht rein ist".',
          en: "Negation: ⲉⲧ- … ⲁⲛ inside the clause.",
          ar: "النفي: ⲉⲧ- … ⲁⲛ داخل الجملة.",
        },
        examples: [
          {
            coptic: "ⲡ̀ⲗⲁⲟⲥ ⲉⲧ-ϥ̀ⲙⲉⲧⲁⲛⲟⲓⲁ ⲁⲛ",
            translit: "ep-laos et-f-metanoia an",
            meaning: {
              de: "das Volk, das keine Umkehr hat",
              en: "the people without repentance",
              ar: "الشعب بلا توبة",
            },
          },
        ],
      },
    ],
  },

  "l5-4": {
    id: "l5-4",
    order: 4,
    moduleId: "m5",
    title: {
      de: "Besondere Stämme & Lexik",
      en: "Special Stems & Lexicon",
      ar: "جذور خاصة ومعجم",
    },
    prerequisites: ["l5-3"],
    quizId: "q5-4",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Häufige qualitative Stämme",
          en: "Common qualitative stems",
          ar: "جذور وصفية شائعة",
        },
        rule: {
          de: 'Beispiele: ⲙⲉⲣⲓ „gut/gütig", ⲕⲁⲑⲁⲣⲟⲥ „rein", ⲙⲟⲩϯ „leben", ⲥⲱⲧⲉⲣ „rettend".',
          en: "Examples: ⲙⲉⲣⲓ good, ⲕⲁⲑⲁⲣⲟⲥ pure, ⲙⲟⲩϯ alive, ⲥⲱⲧⲉⲣ saving.",
          ar: "أمثلة: ⲙⲉⲣⲓ طيب، ⲕⲁⲑⲁⲣⲟⲥ طاهر، ⲙⲟⲩϯ حيّ، ⲥⲱⲧⲉⲣ مخلّص.",
        },
        examples: [
          {
            coptic: "ϥ̀ⲙⲉⲣⲓ",
            translit: "ef-meri",
            meaning: { de: "er ist gütig", en: "he is kind", ar: "هو طيب" },
          },
          {
            coptic: "ⲥ̀ⲕⲁⲑⲁⲣⲟⲥ",
            translit: "es-katharos",
            meaning: { de: "du bist rein", en: "you are pure", ar: "أنت طاهر" },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲡ̀ⲣⲱⲙⲓ ⲉⲧ-ϥ̀ⲙⲉⲣⲓ ⲡⲉ ⲡ̀ⲭⲣⲓⲥⲧⲟⲥ ⲙ̀ⲡⲉϥⲏⲓ",
          translit: "ep-romi et-f-meri pe p-Christos em-pefi",
          meaning: {
            de: "Der gütige Mann ist Christus in seinem Haus.",
            en: "The kind man is Christ in his house.",
            ar: "الرجل الطيب هو المسيح في بيته.",
          },
        },
      },
      {
        type: "grammar",
        title: {
          de: "Pastoraler Kontext",
          en: "Pastoral context",
          ar: "سياق رعوي",
        },
        rule: {
          de: "Frühe Kirche als Hauskirche; Lehre betont Tugend und Einheit. Nutze Relativkonstruktionen für katechetische Sätze.",
          en: "Early Church met in homes; catechesis stressed virtue and unity. Use relatives for catechetical lines.",
          ar: "الكنيسة الأولى اجتمعت في البيوت؛ التعليم ركّز على الفضيلة والوحدة.",
        },
        examples: [
          {
            coptic: "ⲛⲓⲕⲉⲕⲗⲏⲥⲓⲁ ⲉⲧ-ⲟⲩⲟⲩⲛⲟⲩϩ ⲛ̀ⲧⲉ ⲡⲓⲙⲏϣ",
            translit: "ni-keklēsia et-ou-ounouh ente pi-mēsh",
            meaning: {
              de: "die Kirchen, die in den Häusern sind",
              en: "the churches that are in the houses",
              ar: "الكنائس التي في البيوت",
            },
          },
        ],
      },
    ],
  },

  "l5-5": {
    id: "l5-5",
    order: 5,
    moduleId: "m5",
    title: {
      de: "Praktische Redewendungen: Tägliche Gebete",
      en: "Practical Phrases: Daily Prayers",
      ar: "عبارات عملية: الصلوات اليومية",
    },
    prerequisites: ["l5-4"],
    quizId: "q5-5",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Gebetseröffnungen",
          en: "Prayer Openings",
          ar: "افتتاحيات الصلاة",
        },
        rule: {
          de: "Diese Phrasen werden verwendet, um Gebete zu beginnen und Gott anzurufen.",
          en: "These phrases are used to begin prayers and call upon God.",
          ar: "تُستخدم هذه العبارات لبدء الصلوات ودعوة الله.",
        },
        examples: [
          {
            coptic: "ϧⲉⲛ ⲫ̀ⲣⲁⲛ",
            translit: "khen efran",
            meaning: { de: "Im Namen", en: "In the name", ar: "باسم" },
          },
          {
            coptic: "ⲫ̀ⲓⲱⲧ ⲛⲉⲙ ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ",
            translit: "ef-iot nem ep-shēri nem pi-epnevma ethowab",
            meaning: {
              de: "des Vaters und des Sohnes und des Heiligen Geistes",
              en: "of the Father and the Son and the Holy Spirit",
              ar: "الآب والابن والروح القدس",
            },
          },
          {
            coptic: "ⲫ̀ⲛⲟⲩϯ ⲛ̀ⲁⲅⲁⲑⲟⲥ",
            translit: "ep-nouti en-agathos",
            meaning: {
              de: "der gute Gott",
              en: "the good God",
              ar: "الله الصالح",
            },
          },
          {
            coptic: "ⲫ̀ⲛⲟⲩϯ ⲛⲁⲏⲧ",
            translit: "efnouti naēt",
            meaning: {
              de: "Gott, erbarme dich",
              en: "God, have mercy",
              ar: "الله ارحم",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀ⲫ̀ⲓⲱⲧ ⲛⲉⲙ ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ",
          translit: "khen efran em-ef-iot nem ep-shēri nem pi-epnevma ethowab",
          meaning: {
            de: "Im Namen des Vaters und des Sohnes und des Heiligen Geistes",
            en: "In the name of the Father and the Son and the Holy Spirit",
            ar: "باسم الآب والابن والروح القدس",
          },
        },
      },
      {
        type: "grammar",
        title: { de: "Gebetsverben", en: "Prayer Verbs", ar: "أفعال الصلاة" },
        rule: {
          de: "Diese Verben werden im Gebet verwendet, um Handlungen und Bitten auszudrücken.",
          en: "These verbs are used in prayer to express actions and requests.",
          ar: "تُستخدم هذه الأفعال في الصلاة للتعبير عن الأفعال والطلبات.",
        },
        examples: [
          {
            coptic: "ⲁⲣⲓⲃⲟⲏⲑⲓⲛ ⲉ̀ⲣⲟⲛ",
            translit: "aribohithin eron",
            meaning: { de: "hilf uns", en: "help us", ar: "أعنّا" },
          },
          {
            coptic: "ⲛⲁⲏⲧ ⲛⲁⲛ",
            translit: "naēt nan",
            meaning: {
              de: "erbarme dich unser",
              en: "have mercy on us",
              ar: "ارحمنا",
            },
          },
          {
            coptic: "ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ",
            translit: "sōtem eron",
            meaning: { de: "erhöre uns", en: "hear us", ar: "اسمعنا" },
          },
          {
            coptic: "ⲥⲱϯ ⲙ̀ⲙⲟⲛ",
            translit: "sōti emmon",
            meaning: { de: "rette uns", en: "save us", ar: "خلّصنا" },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲫ̀ⲛⲟⲩϯ ⲛⲁⲏⲧ ⲛⲁⲛ ⲟⲩⲟϩ ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ",
          translit: "efnouti naēt nan owoh sōtem eron",
          meaning: {
            de: "Gott, erbarme dich unser und erhöre uns",
            en: "God, have mercy on us and hear us",
            ar: "الله ارحمنا واسمعنا",
          },
        },
      },
      {
        type: "conversation",
        title: {
          de: "Gebetsdialog: Morgengebet",
          en: "Prayer Dialogue: Morning Prayer",
          ar: "حوار صلاة: صلاة الصباح",
        },
        participants: ["Person", "All"],
        lines: [
          {
            speaker: "Person",
            coptic: "ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀ⲫ̀ⲓⲱⲧ ⲛⲉⲙ ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ",
            translation: {
              de: "Im Namen des Vaters und des Sohnes und des Heiligen Geistes",
              en: "In the name of the Father and the Son and the Holy Spirit",
              ar: "باسم الآب والابن والروح القدس",
            },
          },
          {
            speaker: "All",
            coptic: "ⲁⲙⲏⲛ",
            translation: { de: "Amen", en: "Amen", ar: "آمين" },
          },
          {
            speaker: "Person",
            coptic: "ⲡ̀ⲛⲟⲩϯ ⲛ̀ⲁⲅⲁⲑⲟⲥ, ⲁⲣⲓⲃⲟⲏⲑⲓⲛ ⲉ̀ⲣⲟⲛ",
            translation: {
              de: "Der gute Gott, hilf uns",
              en: "The good God, help us",
              ar: "الله الصالح، أعنّا",
            },
          },
          {
            speaker: "All",
            coptic: "ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
            translation: {
              de: "Herr, erbarme dich",
              en: "Lord, have mercy",
              ar: "يا رب ارحم",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲥⲱϯ ⲙ̀ⲙⲟⲛ ⲟⲩⲟϩ ⲁⲣⲓⲃⲟⲏⲑⲓⲛ ⲉ̀ⲣⲟⲛ",
          translit: "sōti emmon owoh aribohithin eron",
          meaning: {
            de: "Rette uns und hilf uns",
            en: "Save us and help us",
            ar: "خلّصنا وأعنّا",
          },
        },
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  'q5-1': {
    id: 'q5-1',
    lessonId: 'l5-1',
    title: { de: 'Quiz: Einführung Verbformen', en: 'Quiz: Introduction to Verb Forms', ar: 'اختبار: مقدمة أشكال الفعل' },
    passScore: 70,
    questions: [
      {
        id: 'q5-1-1',
        type: 'multiple-choice',
        questionText: { de: 'Welche Verbformen gibt es im Bohairischen?', en: 'What verb forms exist in Bohairic?', ar: 'ما أشكال الأفعال الموجودة في البحيري؟' },
        options: [
          { de: 'nur Infinitiv', en: 'only infinitive', ar: 'المصدر فقط' },
          { de: 'Infinitiv, Qualitativ, konjugierte Formen', en: 'infinitive, qualitative, conjugated forms', ar: 'المصدر، الوصفي، الأشكال المصرّفة' },
          { de: 'nur konjugierte Formen', en: 'only conjugated forms', ar: 'الأشكال المصرّفة فقط' }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 'q5-1-2',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet "ⲡⲓⲥⲱⲧⲉⲙ"?', en: 'What does "ⲡⲓⲥⲱⲧⲉⲙ" mean?', ar: 'ماذا يعني "ⲡⲓⲥⲱⲧⲉⲙ"؟' },
        options: [
          { de: 'das Hören', en: 'the hearing', ar: 'السماع' },
          { de: 'das Gehen', en: 'the walking', ar: 'المشي' },
          { de: 'das Geben', en: 'the giving', ar: 'الإعطاء' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q5-1-3',
        type: 'multiple-choice',
        questionText: { de: 'Welche Präposition nimmt "ⲥⲱⲧⲉⲙ"?', en: 'Which preposition does "ⲥⲱⲧⲉⲙ" take?', ar: 'أي حرف جر يأخذ "ⲥⲱⲧⲉⲙ"؟' },
        options: [
          { de: 'ⲉ (auf/zu)', en: 'ⲉ (to)', ar: 'ⲉ (إلى)' },
          { de: 'ⲛ̀ⲥⲁ (nach)', en: 'ⲛ̀ⲥⲁ (after)', ar: 'ⲛ̀ⲥⲁ (بعد)' },
          { de: 'ϧⲉⲛ (in)', en: 'ϧⲉⲛ (in)', ar: 'ϧⲉⲛ (في)' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q5-2': {
    id: 'q5-2',
    lessonId: 'l5-2',
    title: { de: 'Quiz: Qualitatives Präsens', en: 'Quiz: Qualitative Present', ar: 'اختبار: الحاضر الوصفي' },
    passScore: 70,
    questions: [
      {
        id: 'q5-2-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet "ϯⲙⲟⲩϯ"?', en: 'What does "ϯⲙⲟⲩϯ" mean?', ar: 'ماذا يعني "ϯⲙⲟⲩϯ"؟' },
        options: [
          { de: 'ich bin lebendig', en: 'I am alive', ar: 'أنا حيّ' },
          { de: 'ich lebe', en: 'I live', ar: 'أنا أعيش' },
          { de: 'beide sind korrekt', en: 'both are correct', ar: 'كلاهما صحيح' }
        ],
        correctAnswerIndex: 2
      },
      {
        id: 'q5-2-2',
        type: 'multiple-choice',
        questionText: { de: 'Wie negiert man das qualitative Präsens?', en: 'How do you negate the qualitative present?', ar: 'كيف تنفي الحاضر الوصفي؟' },
        options: [
          { de: 'mit ⲛ̀- vor und ⲁⲛ nach dem Ausdruck', en: 'with ⲛ̀- before and ⲁⲛ after', ar: 'بـ ⲛ̀- قبل و ⲁⲛ بعد' },
          { de: 'mit ϯⲙ̀- vor dem Verb', en: 'with ϯⲙ̀- before the verb', ar: 'بـ ϯⲙ̀- قبل الفعل' },
          { de: 'mit ⲙ̀ⲙⲟⲛ', en: 'with ⲙ̀ⲙⲟⲛ', ar: 'بـ ⲙ̀ⲙⲟⲛ' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q5-2-3',
        type: 'multiple-choice',
        questionText: { de: 'Was ist die Funktion des qualitativen Präsens?', en: 'What is the function of the qualitative present?', ar: 'ما وظيفة الحاضر الوصفي؟' },
        options: [
          { de: 'beschreibt einen dauerhaften Zustand', en: 'describes a permanent state', ar: 'يصف حالة دائمة' },
          { de: 'beschreibt eine Handlung', en: 'describes an action', ar: 'يصف فعلاً' },
          { de: 'beschreibt die Zukunft', en: 'describes the future', ar: 'يصف المستقبل' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q5-3': {
    id: 'q5-3',
    lessonId: 'l5-3',
    title: { de: 'Quiz: Relativsätze', en: 'Quiz: Relative Clauses', ar: 'اختبار: جمل الوصل' },
    passScore: 70,
    questions: [
      {
        id: 'q5-3-1',
        type: 'multiple-choice',
        questionText: { de: 'Was macht ⲉⲧ- in einem Relativsatz?', en: 'What does ⲉⲧ- do in a relative clause?', ar: 'ما الذي يفعله ⲉⲧ- في جملة الوصل؟' },
        options: [
          { de: 'bildet einen Relativsatz', en: 'forms a relative clause', ar: 'يُكوّن جملة موصولة' },
          { de: 'negiert das Verb', en: 'negates the verb', ar: 'ينفي الفعل' },
          { de: 'zeigt die Zukunft an', en: 'indicates future', ar: 'يدل على المستقبل' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q5-3-2',
        type: 'multiple-choice',
        questionText: { de: 'Wann wird ⲉ- statt ⲉⲧ- verwendet?', en: 'When is ⲉ- used instead of ⲉⲧ-?', ar: 'متى تُستخدم ⲉ- بدلاً من ⲉⲧ-؟' },
        options: [
          { de: 'nach Präpositionen', en: 'after prepositions', ar: 'بعد حروف الجر' },
          { de: 'vor Nomen', en: 'before nouns', ar: 'قبل الأسماء' },
          { de: 'nie', en: 'never', ar: 'أبداً' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q5-4': {
    id: 'q5-4',
    lessonId: 'l5-4',
    title: { de: 'Quiz: Besondere Stämme', en: 'Quiz: Special Stems', ar: 'اختبار: جذور خاصة' },
    passScore: 70,
    questions: [
      {
        id: 'q5-4-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet "ϥ̀ⲙⲉⲣⲓ"?', en: 'What does "ϥ̀ⲙⲉⲣⲓ" mean?', ar: 'ماذا يعني "ϥ̀ⲙⲉⲣⲓ"؟' },
        options: [
          { de: 'er ist gütig', en: 'he is kind', ar: 'هو طيب' },
          { de: 'er ist rein', en: 'he is pure', ar: 'هو طاهر' },
          { de: 'er ist lebendig', en: 'he is alive', ar: 'هو حيّ' }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  'q5-5': {
    id: 'q5-5',
    lessonId: 'l5-5',
    title: { de: 'Quiz: Tägliche Gebete', en: 'Quiz: Daily Prayers', ar: 'اختبار: الصلوات اليومية' },
    passScore: 70,
    questions: [
      {
        id: 'q5-5-1',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet "ϧⲉⲛ ⲫ̀ⲣⲁⲛ"?', en: 'What does "ϧⲉⲛ ⲫ̀ⲣⲁⲛ" mean?', ar: 'ماذا يعني "ϧⲉⲛ ⲫ̀ⲣⲁⲛ"؟' },
        options: [
          { de: 'Im Namen', en: 'In the name', ar: 'باسم' },
          { de: 'Mit dem Vater', en: 'With the Father', ar: 'مع الآب' },
          { de: 'In der Kirche', en: 'In the church', ar: 'في الكنيسة' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q5-5-2',
        type: 'multiple-choice',
        questionText: { de: 'Was bedeutet "ⲁⲣⲓⲃⲟⲏⲑⲓⲛ ⲉ̀ⲣⲟⲛ"?', en: 'What does "ⲁⲣⲓⲃⲟⲏⲑⲓⲛ ⲉ̀ⲣⲟⲛ" mean?', ar: 'ماذا يعني "ⲁⲣⲓⲃⲟⲏⲑⲓⲛ ⲉ̀ⲣⲟⲛ"؟' },
        options: [
          { de: 'hilf uns', en: 'help us', ar: 'أعنّا' },
          { de: 'rette uns', en: 'save us', ar: 'خلّصنا' },
          { de: 'höre uns', en: 'hear us', ar: 'اسمعنا' }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 'q5-5-3',
        type: 'multiple-choice',
        questionText: { de: 'Welches Verb bedeutet "erhöre uns"?', en: 'Which verb means "hear us"?', ar: 'أي فعل يعني "اسمعنا"؟' },
        options: [
          { de: 'ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ', en: 'ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ', ar: 'ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ' },
          { de: 'ⲥⲱϯ ⲙ̀ⲙⲟⲛ', en: 'ⲥⲱϯ ⲙ̀ⲙⲟⲛ', ar: 'ⲥⲱϯ ⲙ̀ⲙⲟⲛ' },
          { de: 'ⲛⲁⲏⲧ ⲛⲁⲛ', en: 'ⲛⲁⲏⲧ ⲛⲁⲛ', ar: 'ⲛⲁⲏⲧ ⲛⲁⲛ' }
        ],
        correctAnswerIndex: 0
      }
    ]
  }
};
