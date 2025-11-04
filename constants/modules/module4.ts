// Module 4 – Verben I: Erstes Präsens (Bohairisch)
import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m4-l1": {
    id: "m4-l1",
    order: 1,
    moduleId: "m4",
    title: {
      de: "Präsens (Gegenwart)",
      en: "Present Tense",
      ar: "زمن المضارع الأول",
    },
    prerequisites: ["l3-4"],
    quizId: "q4-1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Bildung des Präsens",
          en: "Formation of the Present",
          ar: "تكوين زمن المضارع الأول",
        },
        rule: {
          de: "Das Präsens beschreibt eine andauernde Handlung oder einen allgemeinen Zustand. Es wird durch Personalpräfixe vor dem Infinitiv des Verbs gebildet.",
          en: "The first present describes an ongoing action or general state. It is formed by adding personal prefixes to the verb stem.",
          ar: "يصف المضارع الأول فعلاً مستمراً أو حالة عامة. يتكون من إضافة بادئات شخصية إلى جذر الفعل.",
        },
        examples: [
          {
            coptic: "ϯⲙⲟϣⲓ",
            translit: "ti-moshi",
            meaning: { de: "ich gehe", en: "I walk", ar: "أنا أمشي" },
          },
          {
            coptic: "ⲕ̀ⲙⲟϣⲓ",
            translit: "ek-moshi",
            meaning: { de: "du gehst", en: "you walk", ar: "أنت تمشي" },
          },
          {
            coptic: "ϥ̀ⲙⲟϣⲓ",
            translit: "ef-moshi",
            meaning: { de: "er geht", en: "he walks", ar: "هو يمشي" },
          },
          {
            coptic: "ⲧⲉⲛⲙⲟϣⲓ",
            translit: "ten-moshi",
            meaning: { de: "wir gehen", en: "we walk", ar: "نحن نمشي" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Negation im Präsens",
          en: "Negation in the Present",
          ar: "النفي في المضارع",
        },
        rule: {
          de: "Um eine Aussage zu verneinen, folgt auf das Verb die Partikel ⲁⲛ (an). Vor dem Verb kann zur Betonung ⲛ̀– (en–) gesetzt werden.",
          en: "To negate a statement, add ⲁⲛ (an) after the verb. Optionally, place ⲛ̀– (en–) before the verb for emphasis.",
          ar: 'للنفي، تُضاف "ⲁⲛ" بعد الفعل. يمكن وضع "ⲛ̀" قبله للتأكيد.',
        },
        examples: [
          {
            coptic: "ⲕ̀ⲥⲁϫⲓ ⲁⲛ",
            translit: "ek-saji an",
            meaning: {
              de: "du sprichst nicht",
              en: "you do not speak",
              ar: "أنت لا تتكلم",
            },
          },
          {
            coptic: "ⲛ̀ϯⲥⲱⲧⲉⲙ ⲁⲛ",
            translit: "en-ti-sotem an",
            meaning: {
              de: "ich höre nicht",
              en: "I do not hear",
              ar: "أنا لا أسمع",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Der verschobene Subjektindikator",
          en: "The Postponed Subject Indicator",
          ar: "أداة تأخير الفاعل",
        },
        rule: {
          de: "Mit ⲛ̀ϫⲉ (enje) kann das Subjekt hinter dem Verb stehen. Diese Form wird häufig in griechisch beeinflussten Texten verwendet.",
          en: "With ⲛ̀ϫⲉ (enje), the subject can follow the verb, often to mirror Greek syntax.",
          ar: 'باستخدام "ⲛ̀ϫⲉ" يمكن أن يأتي الفاعل بعد الفعل، وغالبًا لتقليد تركيب اليونانية.',
        },
        examples: [
          {
            coptic: "ⲥ̀ⲥⲱⲧⲉⲙ ⲛ̀ϫⲉ ⲡⲓⲣⲱⲙⲓ",
            translit: "es-sotem enje pi-romi",
            meaning: {
              de: "der Mann hört",
              en: "the man listens",
              ar: "الرجل يستمع",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Objektmarker",
          en: "Object Markers",
          ar: "علامات المفعول به",
        },
        rule: {
          de: "Das direkte Objekt wird mit ⲛ̀ oder ⲙ̀ markiert (ⲙ̀ vor Vilminor-Buchstaben). Wenn das Objekt ein Pronomen ist, werden Suffixe angehängt.",
          en: "The direct object is marked with ⲛ̀ or ⲙ̀ (ⲙ̀ before Vilminor letters). If the object is a pronoun, pronominal suffixes are attached.",
          ar: 'يُميز المفعول به المباشر بـ "ⲛ̀" أو "ⲙ̀" (قبل حروف الفيلمينور). إذا كان ضميراً، تُضاف لاحقة ضميرية.',
        },
        examples: [
          {
            coptic: "ϯⲥⲱⲧⲉⲙ ⲉ̀ⲡⲉⲕⲥⲁϫⲓ",
            translit: "ti-sotem e-pek-saji",
            meaning: {
              de: "ich höre dein Wort",
              en: "I hear your word",
              ar: "أسمع كلمتك",
            },
          },
          {
            coptic: "ϥ̀ⲙⲟϣⲓ ⲛ̀ⲧⲉ ⲡⲓⲕⲉⲙⲉ",
            translit: "ef-moshi ente pi-keme",
            meaning: {
              de: "er geht durch das Land",
              en: "he walks through the land",
              ar: "هو يسير في الأرض",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ϯⲙⲟϣⲓ ⲛ̀ϫⲉ ⲡⲓⲣⲱⲙⲓ",
          translit: "ti-moshi enje pi-romi",
          meaning: {
            de: "Ich gehe, sagt der Mann",
            en: "I walk, says the man",
            ar: "أنا أمشي، قال الرجل",
          },
        }
      },
      {
        type: "sentence",
        item: {
          text: "ⲕ̀ⲥⲁϫⲓ ⲁⲛ ⲛ̀ϫⲉ ⲡⲓⲥⲁϫⲓ",
          translit: "ek-saji an enje pi-saji",
          meaning: {
            de: "Der Sprecher schweigt.",
            en: "The speaker is silent.",
            ar: "المتحدث صامت.",
          },
        }
      },
      {
        type: "sentence",
        item: {
          text: "ϥ̀ⲙⲟϣⲓ ⲛ̀ⲧⲉ ⲡⲓⲙⲁ ⲙ̀ⲡⲓⲉ̀ⲕⲕⲗⲏⲥⲓⲁ",
          translit: "ef-moshi ente pi-ma em-piekklesia",
          meaning: {
            de: "Er geht zum Ort der Kirche.",
            en: "He goes to the place of the Church.",
            ar: "هو يذهب إلى مكان الكنيسة.",
          },
        }
      },
    ],
  },

  // Lektion 2 – Vergangenheit
  "m4-l2": {
    id: "m4-l2",
    order: 2,
    moduleId: "m4",
    title: {
      de: "Das Perfekt (Vergangenheit)",
      en: "The Perfect (Past Tense)",
      ar: "زمن الماضي",
    },
    prerequisites: ["m4-l1"],
    quizId: "q4-2",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Bildung der Vergangenheit",
          en: "Formation of the Past",
          ar: "تكوين زمن الماضي",
        },
        rule: {
          de: "Die Vergangenheit wird mit der Partikel ⲁ vor das Verb gebildet. Danach folgt das Personalpräfix. Beispiel: ⲁϥϫⲱ = \"er sprach\".",
          en: "The past is formed with the particle ⲁ before the verb, followed by the personal prefix. Example: ⲁϥϫⲱ = \"he spoke\".",
          ar: "يُصاغ الماضي بوضع الأداة ⲁ قبل الفعل، تليها البادئة الشخصية. مثال: ⲁϥϫⲱ = «هو تكلّم».",
        },
        examples: [
          {
            coptic: "ⲁⲓϫⲱ",
            translit: "ai-jo",
            meaning: { de: "ich sprach", en: "I spoke", ar: "تكلّمتُ" },
          },
          {
            coptic: "ⲁϥϫⲱ",
            translit: "af-jo",
            meaning: { de: "er sprach", en: "he spoke", ar: "هو تكلّم" },
          },
          {
            coptic: "ⲁⲛⲟⲕ ⲁⲓⲉⲣⲉ ϩⲱⲃ",
            translit: "anok ai-ere hob",
            meaning: {
              de: "ich tat Gutes",
              en: "I did good",
              ar: "عملت خيراً",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Personalpräfixe im Perfekt",
          en: "Personal Prefixes in the Perfect",
          ar: "البوادئ الشخصية في الماضي",
        },
        rule: {
          de: "Die vollständige Konjugation: ⲁⲓ- (ich), ⲁⲕ- (du m.), ⲁⲣⲉ- (du f.), ⲁϥ- (er), ⲁⲥ- (sie), ⲁⲛ- (wir), ⲁⲣⲉⲧⲉⲛ- (ihr), ⲁⲩ- (sie pl.).",
          en: "Full conjugation: ⲁⲓ- (I), ⲁⲕ- (you m.), ⲁⲣⲉ- (you f.), ⲁϥ- (he), ⲁⲥ- (she), ⲁⲛ- (we), ⲁⲣⲉⲧⲉⲛ- (you pl.), ⲁⲩ- (they).",
          ar: "التصريف الكامل: ⲁⲓ- (أنا)، ⲁⲕ- (أنت م)، ⲁⲣⲉ- (أنتِ)، ⲁϥ- (هو)، ⲁⲥ- (هي)، ⲁⲛ- (نحن)، ⲁⲣⲉⲧⲉⲛ- (أنتم)، ⲁⲩ- (هم).",
        },
        examples: [
          {
            coptic: "ⲁⲛⲙⲟϣⲓ",
            translit: "an-moshi",
            meaning: { de: "wir gingen", en: "we went", ar: "ذهبنا" },
          },
          {
            coptic: "ⲁⲩⲥⲱⲧⲉⲙ",
            translit: "au-sotem",
            meaning: { de: "sie hörten", en: "they heard", ar: "سمعوا" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Negation der Vergangenheit",
          en: "Negation of the Past",
          ar: "نفي الماضي",
        },
        rule: {
          de: "Die Verneinung erfolgt mit ⲙ̀ⲡⲉ ... ⲁⲛ. Beispiel: ⲙ̀ⲡⲁϥϫⲱ ⲁⲛ = \"er sprach nicht\".",
          en: "Negation uses ⲙ̀ⲡⲉ ... ⲁⲛ. Example: ⲙ̀ⲡⲁϥϫⲱ ⲁⲛ = \"he did not speak\".",
          ar: "يُنفى الماضي باستخدام ⲙ̀ⲡⲉ ... ⲁⲛ. مثال: ⲙ̀ⲡⲁϥϫⲱ ⲁⲛ = «هو لم يتكلم».",
        },
        examples: [
          {
            coptic: "ⲙ̀ⲡⲁϥϫⲱ ⲁⲛ",
            translit: "empa-f-jo an",
            meaning: {
              de: "er sprach nicht",
              en: "he did not speak",
              ar: "لم يتكلّم",
            },
          },
          {
            coptic: "ⲙ̀ⲡⲁⲓⲙⲟϣⲓ ⲁⲛ",
            translit: "empa-i-moshi an",
            meaning: {
              de: "ich ging nicht",
              en: "I did not go",
              ar: "لم أذهب",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Perfekt mit Objekten",
          en: "Perfect with Objects",
          ar: "الماضي مع المفاعيل",
        },
        rule: {
          de: "Im Perfekt können direkte Objekte mit ⲛ̀/ⲙ̀ markiert werden, genau wie im Präsens.",
          en: "In the perfect, direct objects are marked with ⲛ̀/ⲙ̀ just as in the present.",
          ar: "في الماضي، يُميز المفعول به بـ ⲛ̀/ⲙ̀ كما في المضارع.",
        },
        examples: [
          {
            coptic: "ⲁⲓⲥⲱⲧⲉⲙ ⲉ̀ⲡⲓⲥⲁϫⲓ",
            translit: "ai-sotem e-pi-saji",
            meaning: {
              de: "ich hörte das Wort",
              en: "I heard the word",
              ar: "سمعت الكلمة",
            },
          },
          {
            coptic: "ⲁϥⲛⲁⲩ ⲉ̀ⲡⲓⲛⲟⲩϯ",
            translit: "af-nau e-pi-nouti",
            meaning: {
              de: "er sah Gott",
              en: "he saw God",
              ar: "رأى الله",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲁϥϫⲱ ⲛ̀ϫⲉ ⲡⲓⲛⲟⲩⲧⲉ",
          translit: "af-jo enje pi-noute",
          meaning: { de: "Gott sprach", en: "God spoke", ar: "تكلّم الله" },
        }
      },
      {
        type: "sentence",
        item: {
          text: "ⲁⲛⲙⲟϣⲓ ⲉ̀ⲡⲓⲏⲓ",
          translit: "an-moshi e-pi-eei",
          meaning: { de: "wir gingen zum Haus", en: "we went to the house", ar: "ذهبنا إلى البيت" },
        }
      },
    ],
  },

  // Lektion 3 – Zukunft
  "m4-l3": {
    id: "m4-l3",
    order: 3,
    moduleId: "m4",
    title: {
      de: "Die Zukunft (ⲙⲁⲣⲉ-Form)",
      en: "The Future (ⲙⲁⲣⲉ Form)",
      ar: "زمن المستقبل",
    },
    prerequisites: ["m4-l2"],
    quizId: "q4-3",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Bildung der Zukunft",
          en: "Formation of the Future",
          ar: "تكوين زمن المستقبل",
        },
        rule: {
          de: "Die Zukunft wird mit ⲙⲁⲣⲉ vor dem Verb gebildet. Danach folgt das Personalpräfix. Beispiel: ⲙⲁⲣⲉϥϫⲱ = \"er wird sprechen\".",
          en: "Future tense is formed with ⲙⲁⲣⲉ before the verb and the personal prefix. Example: ⲙⲁⲣⲉϥϫⲱ = \"he will speak\".",
          ar: "يتكوّن المستقبل بوضع ⲙⲁⲣⲉ قبل الفعل مع البادئة الشخصية. مثال: ⲙⲁⲣⲉϥϫⲱ = «سيتكلم».",
        },
        examples: [
          {
            coptic: "ⲙⲁⲣⲉϯⲙⲟϣⲓ",
            translit: "mare-ti-moshi",
            meaning: { de: "ich werde gehen", en: "I will go", ar: "سأذهب" },
          },
          {
            coptic: "ⲙⲁⲣⲉϥϫⲱ",
            translit: "mare-f-jo",
            meaning: {
              de: "er wird sprechen",
              en: "he will speak",
              ar: "سيتكلّم",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Personalpräfixe in der Zukunft",
          en: "Personal Prefixes in Future",
          ar: "البوادئ الشخصية في المستقبل",
        },
        rule: {
          de: "Die Zukunft verwendet dieselben Personalpräfixe wie das Präsens: ⲙⲁⲣⲉ + Präfix + Verb.",
          en: "The future uses the same personal prefixes as the present: ⲙⲁⲣⲉ + prefix + verb.",
          ar: "المستقبل يستخدم نفس البوادئ الشخصية كالمضارع: ⲙⲁⲣⲉ + بادئة + فعل.",
        },
        examples: [
          {
            coptic: "ⲙⲁⲣⲉⲛⲙⲟϣⲓ",
            translit: "mare-n-moshi",
            meaning: { de: "wir werden gehen", en: "we will go", ar: "سنذهب" },
          },
          {
            coptic: "ⲙⲁⲣⲟⲩⲥⲱⲧⲉⲙ",
            translit: "mare-u-sotem",
            meaning: { de: "sie werden hören", en: "they will hear", ar: "سيسمعون" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Negation der Zukunft",
          en: "Negation of the Future",
          ar: "نفي المستقبل",
        },
        rule: {
          de: "Für die Verneinung wird ⲙ̀ⲙⲁⲣⲉ ... ⲁⲛ verwendet: ⲙ̀ⲙⲁⲣⲉϥϫⲱ ⲁⲛ = \"er wird nicht sprechen\".",
          en: "Negation uses ⲙ̀ⲙⲁⲣⲉ ... ⲁⲛ: ⲙ̀ⲙⲁⲣⲉϥϫⲱ ⲁⲛ = \"he will not speak\".",
          ar: "يُنفى المستقبل باستخدام ⲙ̀ⲙⲁⲣⲉ ... ⲁⲛ: ⲙ̀ⲙⲁⲣⲉϥϫⲱ ⲁⲛ = «لن يتكلم».",
        },
        examples: [
          {
            coptic: "ⲙ̀ⲙⲁⲣⲉϥϫⲱ ⲁⲛ",
            translit: "emmare-f-jo an",
            meaning: {
              de: "er wird nicht sprechen",
              en: "he will not speak",
              ar: "لن يتكلم",
            },
          },
          {
            coptic: "ⲙ̀ⲙⲁⲣⲉⲛⲉⲓⲣⲉ ⲁⲛ",
            translit: "emmare-ne-ere an",
            meaning: {
              de: "wir werden es nicht tun",
              en: "we will not do it",
              ar: "لن نفعل ذلك",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Hortativ (Lasst uns...)",
          en: "Hortative (Let us...)",
          ar: "صيغة التحضيض",
        },
        rule: {
          de: "ⲙⲁⲣⲉⲛ- wird oft als Hortativ verwendet: \"lasst uns...\" - eine Aufforderung an die erste Person Plural.",
          en: "ⲙⲁⲣⲉⲛ- is often used as hortative: \"let us...\" - an exhortation in first person plural.",
          ar: "ⲙⲁⲣⲉⲛ- تُستخدم كصيغة تحضيض: «لنَ...» - حث في صيغة الجمع المتكلم.",
        },
        examples: [
          {
            coptic: "ⲙⲁⲣⲉⲛϣⲗⲏⲗ",
            translit: "maren-shleel",
            meaning: { de: "lasst uns beten", en: "let us pray", ar: "لنصلّ" },
          },
          {
            coptic: "ⲙⲁⲣⲉⲛⲙⲟϣⲓ",
            translit: "maren-moshi",
            meaning: { de: "lasst uns gehen", en: "let us go", ar: "لنذهب" },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲙⲁⲣⲉϥϫⲱ ⲛ̀ϫⲉ ⲡⲓⲛⲟⲩⲧⲉ",
          translit: "maref-jo enje pi-noute",
          meaning: {
            de: "Gott wird sprechen",
            en: "God will speak",
            ar: "سيتكلّم الله",
          },
        }
      },
      {
        type: "sentence",
        item: {
          text: "ⲙⲁⲣⲉⲛⲥⲱⲧⲉⲙ ⲉ̀ⲡⲓⲗⲟⲅⲟⲥ",
          translit: "maren-sotem e-pi-logos",
          meaning: {
            de: "Lasst uns auf das Wort hören",
            en: "Let us listen to the Word",
            ar: "لنستمع إلى الكلمة",
          },
        }
      },
    ],
  },

  "m4-l4": {
    id: "m4-l4",
    order: 4,
    moduleId: "m4",
    title: {
      de: "Praktische Redewendungen: Einfache liturgische Antworten",
      en: "Practical Phrases: Simple Liturgical Responses",
      ar: "عبارات عملية: ردود طقسية بسيطة",
    },
    prerequisites: ["m4-l3"],
    quizId: "q4-4",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Liturgische Grundantworten",
          en: "Basic Liturgical Responses",
          ar: "ردود طقسية أساسية",
        },
        rule: {
          de: "Diese Antworten sind grundlegend für die Teilnahme an der Liturgie.",
          en: "These responses are fundamental for participating in the liturgy.",
          ar: "هذه الردود أساسية للمشاركة في الطقس.",
        },
        examples: [
          {
            coptic: "ⲁⲙⲏⲛ",
            translit: "amēn",
            meaning: { de: "Amen", en: "Amen", ar: "آمين" },
          },
          {
            coptic: "ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
            translit: "kyrie eleēson",
            meaning: { de: "Herr, erbarme dich", en: "Lord, have mercy", ar: "يا رب ارحم" },
          },
          {
            coptic: "ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ ⲑⲉⲟⲥ",
            translit: "doxa si o theos",
            meaning: { de: "Ehre sei Gott", en: "Glory to God", ar: "المجد لله" },
          },
          {
            coptic: "ⲡⲓⲱⲟⲩ ⲫⲁ ⲡⲓⲓⲱⲧ",
            translit: "pi-ou fa pi-iot",
            meaning: { de: "Ehre dem Vater", en: "Glory to the Father", ar: "المجد للآب" },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲛⲟⲩϯ",
          translit: "maren-ousht em-pi-nouti",
          meaning: { de: "Lasst uns Gott anbeten", en: "Let us worship God", ar: "لنسجد لله" },
        }
      },
      {
        type: "grammar",
        title: {
          de: "Gebetsverben",
          en: "Prayer Verbs",
          ar: "أفعال الصلاة",
        },
        rule: {
          de: "Wichtige Verben für Gebet und Anbetung in der Liturgie.",
          en: "Important verbs for prayer and worship in the liturgy.",
          ar: "أفعال مهمة للصلاة والعبادة في الطقس.",
        },
        examples: [
          {
            coptic: "ϣⲗⲏⲗ",
            translit: "shlēl",
            meaning: { de: "beten", en: "pray", ar: "يصلي" },
          },
          {
            coptic: "ⲟⲩⲱϣⲧ",
            translit: "ousht",
            meaning: { de: "anbeten", en: "worship", ar: "يسجد" },
          },
          {
            coptic: "ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ",
            translit: "esmou erof",
            meaning: { de: "ihn segnen/preisen", en: "bless him/praise", ar: "يبارك / يسبّح" },
          },
          {
            coptic: "ϯⲱⲟⲩ",
            translit: "ti-ou",
            meaning: { de: "verherrlichen", en: "glorify", ar: "يمجّد" },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ϯⲛⲁϣⲗⲏⲗ ⲙ̀ⲫ̀ⲣⲏϯ",
          translit: "ti-na-shlēl em-frēti",
          meaning: { de: "Ich werde in der Art beten", en: "I will pray in the manner", ar: "سأصلي بالطريقة" },
        }
      },
      {
        type: "conversation",
        title: {
          de: "Gebetsdialog",
          en: "Prayer Dialogue",
          ar: "حوار صلاة",
        },
        participants: ["Priest", "People"],
        lines: [
          {
            speaker: "Priest",
            coptic: "ⲙⲁⲣⲉⲛϣⲗⲏⲗ",
            translation: { de: "Lasst uns beten", en: "Let us pray", ar: "لنصلِّ" },
          },
          {
            speaker: "People",
            coptic: "ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
            translation: { de: "Herr, erbarme dich", en: "Lord, have mercy", ar: "يا رب ارحم" },
          },
          {
            speaker: "Priest",
            coptic: "ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ",
            translation: { de: "Friede sei mit allen", en: "Peace be with all", ar: "السلام لجميعكم" },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲬⲣⲓⲥⲧⲟⲥ ⲡⲉⲛⲛⲟⲩϯ",
          translit: "maren-ousht em-pi-Christos pen-nouti",
          meaning: { de: "Lasst uns Christus, unseren Gott, anbeten", en: "Let us worship Christ our God", ar: "لنسجد للمسيح إلهنا" },
        }
      },
    ],
  },
};

export const QUIZZES: Record<string, Quiz> = {
  "q4-1": {
    id: "q4-1",
    lessonId: "m4-l1",
    title: {
      de: "Quiz: Das erste Präsens",
      en: "Quiz: The First Present Tense",
      ar: "اختبار: زمن المضارع الأول",
    },
    passScore: 70,
    questions: [
      {
        id: "q4-1-1",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet "ϥ̀ⲙⲟϣⲓ"?',
          en: 'What does "ϥ̀ⲙⲟϣⲓ" mean?',
          ar: 'ماذا يعني "ϥ̀ⲙⲟϣⲓ"؟',
        },
        options: [
          { de: "ich gehe", en: "I walk", ar: "أنا أمشي" },
          { de: "du gehst", en: "you walk", ar: "أنت تمشي" },
          { de: "er geht", en: "he walks", ar: "هو يمشي" },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "q4-1-2",
        type: "multiple-choice",
        questionText: {
          de: 'Wie negiert man "ϯⲥⲱⲧⲉⲙ"?',
          en: 'How do you negate "ϯⲥⲱⲧⲉⲙ"?',
          ar: 'كيف تنفي "ϯⲥⲱⲧⲉⲙ"؟',
        },
        options: [
          { de: "ⲛ̀ϯⲥⲱⲧⲉⲙ ⲁⲛ", en: "ⲛ̀ϯⲥⲱⲧⲉⲙ ⲁⲛ", ar: "ⲛ̀ϯⲥⲱⲧⲉⲙ ⲁⲛ" },
          { de: "ϯⲙ̀ⲥⲱⲧⲉⲙ", en: "ϯⲙ̀ⲥⲱⲧⲉⲙ", ar: "ϯⲙ̀ⲥⲱⲧⲉⲙ" },
          { de: "ⲙ̀ⲙⲟⲛ ϯⲥⲱⲧⲉⲙ", en: "ⲙ̀ⲙⲟⲛ ϯⲥⲱⲧⲉⲙ", ar: "ⲙ̀ⲙⲟⲛ ϯⲥⲱⲧⲉⲙ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q4-1-3",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet "ⲥ̀ⲥⲱⲧⲉⲙ ⲛ̀ϫⲉ ⲡⲓⲣⲱⲙⲓ"?',
          en: 'What does "ⲥ̀ⲥⲱⲧⲉⲙ ⲛ̀ϫⲉ ⲡⲓⲣⲱⲙⲓ" mean?',
          ar: 'ماذا يعني "ⲥ̀ⲥⲱⲧⲉⲙ ⲛ̀ϫⲉ ⲡⲓⲣⲱⲙⲓ"؟',
        },
        options: [
          { de: "der Mann hört", en: "the man listens", ar: "الرجل يستمع" },
          { de: "der Mann geht", en: "the man walks", ar: "الرجل يمشي" },
          { de: "der Mann spricht", en: "the man speaks", ar: "الرجل يتكلم" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q4-1-4",
        type: "multiple-choice",
        questionText: {
          de: 'Welches Objektmarker steht vor "ⲡⲓⲕⲉⲙⲉ"?',
          en: 'Which object marker comes before "ⲡⲓⲕⲉⲙⲉ"?',
          ar: 'أي علامة مفعول به تأتي قبل "ⲡⲓⲕⲉⲙⲉ"؟',
        },
        options: [
          {
            de: "ⲛ̀ (weil ⲕ kein Vilminor ist)",
            en: "ⲛ̀ (because ⲕ is not Vilminor)",
            ar: "ⲛ̀ (لأن ⲕ ليس فيلمينور)",
          },
          {
            de: "ⲙ̀ (weil es vor einem Wort steht)",
            en: "ⲙ̀ (because it's before a word)",
            ar: "ⲙ̀ (لأنه قبل كلمة)",
          },
          { de: "ⲉ̀", en: "ⲉ̀", ar: "ⲉ̀" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q4-1-5",
        type: "multiple-choice",
        questionText: {
          de: "Was ist das erste Präsens?",
          en: "What is the first present tense?",
          ar: "ما هو زمن المضارع الأول؟",
        },
        options: [
          {
            de: "eine vergangene Handlung",
            en: "a past action",
            ar: "فعل ماضي",
          },
          {
            de: "eine andauernde oder allgemeine Handlung",
            en: "an ongoing or general action",
            ar: "فعل مستمر أو عام",
          },
          {
            de: "eine zukünftige Handlung",
            en: "a future action",
            ar: "فعل مستقبلي",
          },
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
  "q4-2": {
    id: "q4-2",
    lessonId: "m4-l2",
    title: {
      de: "Quiz: Vergangenheit",
      en: "Quiz: Past Tense",
      ar: "اختبار: زمن الماضي",
    },
    passScore: 70,
    questions: [
      {
        id: "q4-2-1",
        type: "multiple-choice",
        questionText: {
          de: "Welche Partikel bildet die Vergangenheit?",
          en: "Which particle forms the past?",
          ar: "ما الأداة التي تكوّن الماضي؟",
        },
        options: [
          { de: "ⲁ", en: "ⲁ", ar: "ⲁ" },
          { de: "ⲙⲁⲣⲉ", en: "ⲙⲁⲣⲉ", ar: "ⲙⲁⲣⲉ" },
          { de: "ⲛ̀", en: "ⲛ̀", ar: "ⲛ̀" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q4-2-2",
        type: "multiple-choice",
        questionText: {
          de: "Wie sagt man \"er sprach nicht\"?",
          en: "How do you say \"he did not speak\"?",
          ar: "كيف تقول «لم يتكلم»؟",
        },
        options: [
          { de: "ⲙ̀ⲡⲁϥϫⲱ ⲁⲛ", en: "ⲙ̀ⲡⲁϥϫⲱ ⲁⲛ", ar: "ⲙ̀ⲡⲁϥϫⲱ ⲁⲛ" },
          { de: "ⲙ̀ⲙⲁⲣⲉϥϫⲱ ⲁⲛ", en: "ⲙ̀ⲙⲁⲣⲉϥϫⲱ ⲁⲛ", ar: "ⲙ̀ⲙⲁⲣⲉϥϫⲱ ⲁⲛ" },
          { de: "ⲁϥϫⲱ ⲁⲛ", en: "ⲁϥϫⲱ ⲁⲛ", ar: "ⲁϥϫⲱ ⲁⲛ" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "q4-3": {
    id: "q4-3",
    lessonId: "m4-l3",
    title: {
      de: "Quiz: Zukunft",
      en: "Quiz: Future Tense",
      ar: "اختبار: زمن المستقبل",
    },
    passScore: 70,
    questions: [
      {
        id: "q4-3-1",
        type: "multiple-choice",
        questionText: {
          de: "Mit welcher Partikel bildet man die Zukunft?",
          en: "Which particle forms the future?",
          ar: "ما الأداة التي تُكوّن المستقبل؟",
        },
        options: [
          { de: "ⲙⲁⲣⲉ", en: "ⲙⲁⲣⲉ", ar: "ⲙⲁⲣⲉ" },
          { de: "ⲁ", en: "ⲁ", ar: "ⲁ" },
          { de: "ⲙ̀ⲡⲉ", en: "ⲙ̀ⲡⲉ", ar: "ⲙ̀ⲡⲉ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q4-3-2",
        type: "multiple-choice",
        questionText: {
          de: "Wie negiert man die Zukunft?",
          en: "How is the future negated?",
          ar: "كيف يُنفى زمن المستقبل؟",
        },
        options: [
          { de: "ⲙ̀ⲙⲁⲣⲉ ... ⲁⲛ", en: "ⲙ̀ⲙⲁⲣⲉ ... ⲁⲛ", ar: "ⲙ̀ⲙⲁⲣⲉ ... ⲁⲛ" },
          { de: "ⲙ̀ⲡⲉ ... ⲁⲛ", en: "ⲙ̀ⲡⲉ ... ⲁⲛ", ar: "ⲙ̀ⲡⲉ ... ⲁⲛ" },
          { de: "ⲛ̀ ... ⲁⲛ", en: "ⲛ̀ ... ⲁⲛ", ar: "ⲛ̀ ... ⲁⲛ" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },
  "q4-4": {
    id: "q4-4",
    lessonId: "m4-l4",
    title: {
      de: "Quiz: Liturgische Antworten",
      en: "Quiz: Liturgical Responses",
      ar: "اختبار: ردود طقسية",
    },
    passScore: 70,
    questions: [
      {
        id: "q4-4-1",
        type: "multiple-choice",
        questionText: {
          de: "Was bedeutet \"ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ\"?",
          en: "What does \"ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ\" mean?",
          ar: "ماذا يعني \"ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ\"؟",
        },
        options: [
          { de: "Herr, erbarme dich", en: "Lord, have mercy", ar: "يا رب ارحم" },
          { de: "Amen", en: "Amen", ar: "آمين" },
          { de: "Lasst uns beten", en: "Let us pray", ar: "لنصلّ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q4-4-2",
        type: "multiple-choice",
        questionText: {
          de: "Wie sagt man \"beten\" auf Koptisch?",
          en: "How do you say \"pray\" in Coptic?",
          ar: "كيف تقول \"يصلي\" بالقبطية؟",
        },
        options: [
          { de: "ϣⲗⲏⲗ", en: "ϣⲗⲏⲗ", ar: "ϣⲗⲏⲗ" },
          { de: "ⲟⲩⲱϣⲧ", en: "ⲟⲩⲱϣⲧ", ar: "ⲟⲩⲱϣⲧ" },
          { de: "ϯⲱⲟⲩ", en: "ϯⲱⲟⲩ", ar: "ϯⲱⲟⲩ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q4-4-3",
        type: "multiple-choice",
        questionText: {
          de: "Was bedeutet \"ⲙⲁⲣⲉⲛϣⲗⲏⲗ\"?",
          en: "What does \"ⲙⲁⲣⲉⲛϣⲗⲏⲗ\" mean?",
          ar: "ماذا يعني \"ⲙⲁⲣⲉⲛϣⲗⲏⲗ\"؟",
        },
        options: [
          { de: "Lasst uns beten", en: "Let us pray", ar: "لنصلِّ" },
          { de: "Herr, erbarme dich", en: "Lord, have mercy", ar: "يا رب ارحم" },
          { de: "Friede sei mit allen", en: "Peace be with all", ar: "السلام لجميعكم" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },
};
