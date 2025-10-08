// Module 2 — Zahlen (Bohairisch, nach Younan)
import type { Lesson, Quiz } from "../../types";

export const LESSONS: Record<string, Lesson> = {
  "m2-l1": {
    id: "m2-l1",
    order: 1,
    moduleId: "m2",
    title: {
      de: "Grundzahlen 1–10",
      en: "Basic Numbers 1–10",
      ar: "الأعداد الأساسية ١–١٠",
    },
    prerequisites: ["m1-l8"],
    quizId: "q2-1",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Einführung in die koptischen Zahlen",
          en: "Introduction to Coptic Numbers",
          ar: "مقدمة للأرقام القبطية",
        },
        rule: {
          de: "Die Zahlen 1–10 sind die Grundlage für alle weiteren Zahlbildungen. Im Bohairischen haben sie männliche und weibliche Formen. Jede Zahl hat auch einen Buchstabenwert.",
          en: "Numbers 1–10 are the foundation for all other numbers. In Bohairic, they have masculine and feminine forms. Each number also has a letter value.",
          ar: "الأعداد من ١ إلى ١٠ هي أساس بقية الأعداد. في البحيرية لها صيغ مذكّرة ومؤنثة. كل عدد له أيضاً قيمة حرفية.",
        },
        examples: [
          {
            coptic: "ⲁ̅ = 1",
            translit: "a = 1",
            meaning: { de: "Alpha = eins", en: "Alpha = one", ar: "ألفا = واحد" },
          },
          {
            coptic: "ⲓ̅ = 10",
            translit: "i = 10",
            meaning: { de: "Jota = zehn", en: "Iota = ten", ar: "يوتا = عشرة" },
          },
        ],
      },
      {
        type: "number",
        number: 1,
        emoji: "🕊️",
        copticSymbol: "ⲁ̅",
        copticName: "ⲟⲩⲁⲓ",
        translit: "ouai",
      },
      {
        type: "number",
        number: 2,
        emoji: "✌️",
        copticSymbol: "ⲃ̅",
        copticName: "ⲥⲛⲁⲩ",
        translit: "snau",
      },
      {
        type: "number",
        number: 3,
        emoji: "🔺",
        copticSymbol: "ⲅ̅",
        copticName: "ϣⲟⲙⲧ",
        translit: "shomt",
      },
      {
        type: "number",
        number: 4,
        emoji: "🌍",
        copticSymbol: "ⲇ̅",
        copticName: "ϥⲧⲟⲩ",
        translit: "ftou",
      },
      {
        type: "number",
        number: 5,
        emoji: "🖐️",
        copticSymbol: "ⲉ̅",
        copticName: "ⲉⲧⲓⲟⲩ",
        translit: "etiou",
      },
      {
        type: "number",
        number: 6,
        emoji: "6️⃣",
        copticSymbol: "ⲋ̅",
        copticName: "ⲥⲟⲩⲟⲩ",
        translit: "souou",
      },
      {
        type: "number",
        number: 7,
        emoji: "🌈",
        copticSymbol: "ⲍ̅",
        copticName: "ϣⲁϣϥ",
        translit: "shashf",
      },
      {
        type: "number",
        number: 8,
        emoji: "🕯️",
        copticSymbol: "ⲏ̅",
        copticName: "ⲉϣⲙⲏⲛ",
        translit: "eshmīn",
      },
      {
        type: "number",
        number: 9,
        emoji: "⚖️",
        copticSymbol: "ⲑ̅",
        copticName: "ⲯⲓⲧ",
        translit: "pshit",
      },
      {
        type: "number",
        number: 10,
        emoji: "🔟",
        copticSymbol: "ⲓ̅",
        copticName: "ⲙⲏⲧ",
        translit: "meet",
      },
      {
        type: "sentence",
        item: {
          text: "ⲟⲩⲁⲓ ⲡⲉ ⲡⲓⲛⲟⲩϯ",
          translit: "ouai pe pi-nouti",
          meaning: {
            de: "Einer ist Gott",
            en: "One is God",
            ar: "واحد هو الله",
          },
        },
        spiritual: {
          bibleVerse: {
            de: "„Höre, Israel: Der HERR, unser Gott, ist ein einziger HERR!"",
            en: '"Hear, O Israel: The LORD our God, the LORD is one!"',
            ar: "«اسمع يا إسرائيل: الرب إلهنا رب واحد!»",
          },
          bibleReference: {
            de: "5. Mose 6:4",
            en: "Deuteronomy 6:4",
            ar: "تثنية ٦:٤",
          },
          fatherQuote: {
            de: "„Ein Gott, ein Glaube, eine Taufe – dies ist das Fundament der Kirche."",
            en: '"One God, one faith, one baptism—this is the foundation of the Church."',
            ar: "إله واحد، إيمان واحد، معمودية واحدة—هذا هو أساس الكنيسة.",
          },
          fatherReference: {
            de: "Hl. Cyprian von Karthago, Über die Einheit der Kirche",
            en: "St. Cyprian of Carthage, On the Unity of the Church",
            ar: "القديس كبريانوس القرطاجي، عن وحدة الكنيسة",
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
      de: "Zahlen 11–99",
      en: "Numbers 11–99",
      ar: "الأعداد ١١–٩٩",
    },
    prerequisites: ["m2-l1"],
    quizId: "q2-2",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Zahlen 11–19",
          en: "Numbers 11–19",
          ar: "الأعداد ١١–١٩"
        },
        rule: {
          de: "Die Zahlen 11-19 werden aus ⲙⲏⲧ (10) + ⲛ̀ ('und') + Grundzahl gebildet.",
          en: "Numbers 11-19 are formed with ⲙⲏⲧ (10) + ⲛ̀ ('and') + base number.",
          ar: "الأعداد ١١-١٩ تتكوّن من ⲙⲏⲧ (١٠) + ⲛ̀ ('و') + العدد الأساسي.",
        },
        examples: [
          {
            coptic: "ⲙⲏⲧ ⲛ̀ⲟⲩⲁⲓ",
            translit: "meet en ouai",
            meaning: { de: "elf (10 + 1)", en: "eleven (10 + 1)", ar: "أحد عشر (١٠ + ١)" },
          },
          {
            coptic: "ⲙⲏⲧ ⲛ̀ⲥⲛⲁⲩ",
            translit: "meet en snau",
            meaning: { de: "zwölf (10 + 2)", en: "twelve (10 + 2)", ar: "اثنا عشر (١٠ + ٢)" },
          },
          {
            coptic: "ⲙⲏⲧ ⲛ̀ϣⲟⲙⲧ",
            translit: "meet en shomt",
            meaning: { de: "dreizehn (10 + 3)", en: "thirteen (10 + 3)", ar: "ثلاثة عشر (١٠ + ٣)" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Zehnerzahlen (20–90)",
          en: "Tens (20–90)",
          ar: "العشرات ٢٠–٩٠",
        },
        rule: {
          de: "Die Zehner entstehen aus griechischen Buchstabenwerten mit Überstrich. Jeder Buchstabe hat einen festen Zahlenwert.",
          en: "Tens are formed from Greek alphabetic numeral values with overline. Each letter has a fixed numerical value.",
          ar: "العشرات تُكتب باستخدام قيم الحروف اليونانية مع خط علوي. لكل حرف قيمة رقمية ثابتة.",
        },
        examples: [
          {
            coptic: "ⲕ̅",
            copticName: "ⲅⲟⲟⲩⲓ",
            translit: "gooui",
            meaning: { de: "zwanzig (20)", en: "twenty (20)", ar: "عشرون (٢٠)" },
          },
          {
            coptic: "ⲗ̅",
            copticName: "ⲗⲁⲃ",
            translit: "lab",
            meaning: { de: "dreißig (30)", en: "thirty (30)", ar: "ثلاثون (٣٠)" },
          },
          {
            coptic: "ⲙ̅",
            copticName: "ⲙⲁⲣⲃⲁ",
            translit: "marba",
            meaning: { de: "vierzig (40)", en: "forty (40)", ar: "أربعون (٤٠)" },
          },
          {
            coptic: "ⲛ̅",
            copticName: "ⲛⲉⲙⲃ",
            translit: "nemb",
            meaning: { de: "fünfzig (50)", en: "fifty (50)", ar: "خمسون (٥٠)" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Weitere Zehnerzahlen",
          en: "More Tens",
          ar: "المزيد من العشرات",
        },
        rule: {
          de: "Die höheren Zehnerzahlen folgen demselben Muster.",
          en: "The higher tens follow the same pattern.",
          ar: "العشرات الأعلى تتبع نفس النمط.",
        },
        examples: [
          {
            coptic: "ⲝ̅",
            copticName: "ⲝⲉⲥ",
            translit: "xes",
            meaning: { de: "sechzig (60)", en: "sixty (60)", ar: "ستون (٦٠)" },
          },
          {
            coptic: "ⲟ̅",
            copticName: "ⲟⲕⲧⲟⲩ",
            translit: "oktou",
            meaning: { de: "siebzig (70)", en: "seventy (70)", ar: "سبعون (٧٠)" },
          },
          {
            coptic: "ⲡ̅",
            copticName: "ⲡⲓⲥ",
            translit: "pis",
            meaning: { de: "achtzig (80)", en: "eighty (80)", ar: "ثمانون (٨٠)" },
          },
          {
            coptic: "ⲣ̅",
            copticName: "ⲣⲁⲃⲧ",
            translit: "rabt",
            meaning: { de: "neunzig (90)", en: "ninety (90)", ar: "تسعون (٩٠)" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Zusammengesetzte Zahlen",
          en: "Compound Numbers",
          ar: "الأعداد المركبة",
        },
        rule: {
          de: "Zahlen wie 23, 45, 67 werden durch Kombination von Zehnern und Einern gebildet.",
          en: "Numbers like 23, 45, 67 are formed by combining tens and ones.",
          ar: "الأعداد مثل ٢٣، ٤٥، ٦٧ تتكون من دمج العشرات والآحاد.",
        },
        examples: [
          {
            coptic: "ⲕ̅ⲅ̅",
            translit: "gooui shomt",
            meaning: { de: "dreiundzwanzig (20 + 3)", en: "twenty-three (20 + 3)", ar: "ثلاثة وعشرون (٢٠ + ٣)" },
          },
          {
            coptic: "ⲙ̅ⲉ̅",
            translit: "marba etiou",
            meaning: { de: "fünfundvierzig (40 + 5)", en: "forty-five (40 + 5)", ar: "خمسة وأربعون (٤٠ + ٥)" },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲙⲏⲧ ⲛ̀ⲥⲛⲁⲩ ⲡⲉ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ",
          translit: "meet en snau pe pi-apostolos",
          meaning: {
            de: "Zwölf sind die Apostel",
            en: "Twelve are the apostles",
            ar: "اثنا عشر هم الرسل",
          },
        },
        spiritual: {
          bibleVerse: {
            de: "„Und er setzte zwölf ein, damit sie bei ihm seien und damit er sie aussende."",
            en: '"And he appointed twelve so that they might be with him and he might send them out."',
            ar: "«وأقام اثني عشر ليكونوا معه وليرسلهم.»",
          },
          bibleReference: {
            de: "Markus 3:14",
            en: "Mark 3:14",
            ar: "مرقس ٣:١٤",
          },
          fatherQuote: {
            de: "„Die Zwölf sind das Fundament der Kirche, ausgewählt von Christus selbst."",
            en: '"The Twelve are the foundation of the Church, chosen by Christ himself."',
            ar: "الاثنا عشر هم أساس الكنيسة، اختارهم المسيح نفسه.",
          },
          fatherReference: {
            de: "Hl. Irenäus, Gegen die Häresien III.12.5",
            en: "St. Irenaeus, Against Heresies III.12.5",
            ar: "القديس إيريناوس، ضد الهرطقات ٣:١٢:٥",
          },
        },
      },
    ],
  },

  "m2-l3": {
    id: "m2-l3",
    order: 3,
    moduleId: "m2",
    title: {
      de: "Große Zahlen und Ordnungszahlen",
      en: "Large Numbers and Ordinals",
      ar: "الأعداد الكبيرة والترتيبية",
    },
    prerequisites: ["m2-l2"],
    quizId: "q2-3",
    slides: [
      {
        type: "grammar",
        title: {
          de: "Hundert (100)",
          en: "Hundred (100)",
          ar: "المائة (١٠٠)",
        },
        rule: {
          de: "Hundert wird mit ⲏⲕ (eik) geschrieben. Hunderter folgen dem Buchstabenwert-System.",
          en: "Hundred is written as ⲏⲕ (eik). Hundreds follow the letter-value system.",
          ar: "المائة تُكتب ⲏⲕ (eik). المئات تتبع نظام قيم الحروف.",
        },
        examples: [
          {
            coptic: "ⲏⲕ",
            copticName: "ⲏⲕ",
            translit: "eik",
            meaning: { de: "hundert", en: "hundred", ar: "مائة" },
          },
          {
            coptic: "ⲥ̅",
            copticName: "ⲥⲛⲉⲩ",
            translit: "sneu",
            meaning: { de: "zweihundert (200)", en: "two hundred (200)", ar: "مائتان (٢٠٠)" },
          },
          {
            coptic: "ⲧ̅",
            copticName: "ϣⲟⲙⲧⲉⲉⲩ",
            translit: "shomteu",
            meaning: { de: "dreihundert (300)", en: "three hundred (300)", ar: "ثلاثمائة (٣٠٠)" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Hunderter 400–900",
          en: "Hundreds 400–900",
          ar: "المئات ٤٠٠–٩٠٠",
        },
        rule: {
          de: "Die höheren Hunderter verwenden weiterhin griechische Buchstabenwerte mit Überstrich.",
          en: "Higher hundreds continue using Greek letter values with overline.",
          ar: "المئات الأعلى تستمر باستخدام قيم الحروف اليونانية مع خط علوي.",
        },
        examples: [
          {
            coptic: "ⲩ̅",
            copticName: "ⲫⲧⲟⲩⲉⲩ",
            translit: "ftoueu",
            meaning: { de: "vierhundert (400)", en: "four hundred (400)", ar: "أربعمائة (٤٠٠)" },
          },
          {
            coptic: "ⲫ̅",
            copticName: "ⲉⲧⲓⲟⲩⲉⲩ",
            translit: "etioueu",
            meaning: { de: "fünfhundert (500)", en: "five hundred (500)", ar: "خمسمائة (٥٠٠)" },
          },
          {
            coptic: "ⲱ̅",
            copticName: "ⲉϣⲙⲏⲛⲉⲩ",
            translit: "eshmeneu",
            meaning: { de: "achthundert (800)", en: "eight hundred (800)", ar: "ثمانمائة (٨٠٠)" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Tausend und darüber",
          en: "Thousand and Above",
          ar: "الألف وما فوق",
        },
        rule: {
          de: "Tausend wird mit einem doppelten Überstrich über ⲁ geschrieben: ⲁ̅̅. Dies bedeutet, dass der Wert mit 1000 multipliziert wird.",
          en: "One thousand is written with a double overline over ⲁ: ⲁ̅̅. This means the value is multiplied by 1000.",
          ar: "الألف يُكتب بخطين علويين فوق ⲁ: ⲁ̅̅. هذا يعني أن القيمة مضروبة في ١٠٠٠.",
        },
        examples: [
          {
            coptic: "ⲁ̅̅",
            copticName: "ⲁⲗⲗⲟⲩ",
            translit: "allou",
            meaning: { de: "tausend (1000)", en: "thousand (1000)", ar: "ألف (١٠٠٠)" },
          },
          {
            coptic: "ⲁ̅̅ⲟⲩⲁⲓ",
            copticName: "ⲁⲗⲗⲟⲩ ⲛ̀ⲟⲩⲁⲓ",
            translit: "allou en ouai",
            meaning: {
              de: "tausendundeins (1001)",
              en: "one thousand and one (1001)",
              ar: "ألف وواحد (١٠٠١)",
            },
          },
          {
            coptic: "ⲃ̅̅",
            copticName: "ⲁⲗⲗⲟⲩ ⲛ̀ⲥⲛⲁⲩ",
            translit: "allou en snau",
            meaning: {
              de: "zweitausend (2000)",
              en: "two thousand (2000)",
              ar: "ألفان (٢٠٠٠)",
            },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Zahlen mit Substantiven",
          en: "Numbers with Nouns",
          ar: "الأرقام مع الأسماء",
        },
        rule: {
          de: "1–2 folgen dem Substantiv, ab 3 stehen sie davor mit ⲛ̀ als Verbindung.",
          en: "1–2 follow the noun, from 3 onwards they precede it with ⲛ̀ as connector.",
          ar: "١–٢ بعد الاسم، من ٣ فصاعداً تسبقه مع ⲛ̀ كرابط.",
        },
        examples: [
          {
            coptic: "ⲟⲩⲣⲱⲙⲓ ⲛⲟⲩⲱⲧ",
            translit: "ou romi nouwt",
            meaning: { de: "ein Mann (wörtl: ein Mann einer)", en: "one man (lit: a man one)", ar: "رجل واحد" },
          },
          {
            coptic: "ⲣⲱⲙⲓ ⲥⲛⲁⲩ",
            translit: "romi snau",
            meaning: { de: "zwei Männer", en: "two men", ar: "رجلان" },
          },
          {
            coptic: "ϣⲟⲙⲧ ⲛ̀ⲣⲱⲙⲓ",
            translit: "shomt en romi",
            meaning: { de: "drei Männer", en: "three men", ar: "ثلاثة رجال" },
          },
        ],
      },
      {
        type: "grammar",
        title: {
          de: "Ordnungszahlen",
          en: "Ordinal Numbers",
          ar: "الأعداد الترتيبية",
        },
        rule: {
          de: "„Der Erste" = ⲡⲓϣⲟⲣⲡ; für 2 und höher: ⲡⲓⲙⲁϩ + Zahl. Beispiel: ⲡⲓⲙⲁϩϣⲟⲙⲧ = der Dritte.",
          en: ""The first" = ⲡⲓϣⲟⲣⲡ; for 2+: ⲡⲓⲙⲁϩ + number. Example: ⲡⲓⲙⲁϩϣⲟⲙⲧ = the third.",
          ar: "الأول = ⲡⲓϣⲟⲣⲡ؛ من الثاني فصاعداً: ⲡⲓⲙⲁϩ + العدد. مثال: ⲡⲓⲙⲁϩϣⲟⲙⲧ = الثالث.",
        },
        examples: [
          {
            coptic: "ⲡⲓϣⲟⲣⲡ ⲛ̀ⲣⲱⲙⲓ",
            translit: "pishorp en romi",
            meaning: {
              de: "der erste Mensch",
              en: "the first man",
              ar: "الإنسان الأول",
            },
          },
          {
            coptic: "ⲡⲓⲙⲁϩⲥⲛⲁⲩ ⲛ̀ⲉ̀ϩⲟⲟⲩ",
            translit: "pimah snau en ehoou",
            meaning: {
              de: "der zweite Tag",
              en: "the second day",
              ar: "اليوم الثاني",
            },
          },
          {
            coptic: "ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ⲉ̀ϩⲟⲟⲩ",
            translit: "pimah shomt en ehoou",
            meaning: {
              de: "der dritte Tag",
              en: "the third day",
              ar: "اليوم الثالث",
            },
          },
        ],
      },
      {
        type: "sentence",
        item: {
          text: "ⲁϥⲧⲱⲛϥ ϧⲉⲛ ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ⲉ̀ϩⲟⲟⲩ",
          translit: "af-tonf khen pimah shomt en ehoou",
          meaning: {
            de: "Er stand auf am dritten Tag",
            en: "He arose on the third day",
            ar: "قام في اليوم الثالث",
          },
        },
        spiritual: {
          bibleVerse: {
            de: "„Er wurde begraben und ist auferweckt worden am dritten Tag nach den Schriften."",
            en: '"He was buried, and he was raised on the third day in accordance with the Scriptures."',
            ar: "«دُفِن وقام في اليوم الثالث حسب الكتب.»",
          },
          bibleReference: {
            de: "1. Korinther 15:4",
            en: "1 Corinthians 15:4",
            ar: "١ كورنثوس ١٥:٤",
          },
          fatherQuote: {
            de: "„Die Auferstehung am dritten Tag ist der Triumph über den Tod und das Zeichen unserer Hoffnung."",
            en: '"The resurrection on the third day is the triumph over death and the sign of our hope."',
            ar: "القيامة في اليوم الثالث هي الانتصار على الموت وعلامة رجائنا.",
          },
          fatherReference: {
            de: "Hl. Johannes Chrysostomus, Homilien über 1. Korinther",
            en: "St. John Chrysostom, Homilies on 1 Corinthians",
            ar: "القديس يوحنا الذهبي الفم، عظات على ١ كورنثوس",
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
      de: "Quiz: Grundzahlen 1–10",
      en: "Quiz: Basic Numbers 1–10",
      ar: "اختبار: الأعداد الأساسية ١–١٠",
    },
    passScore: 70,
    questions: [
      {
        id: "q2-1-1",
        type: "multiple-choice",
        questionText: {
          de: "Wie heißt die Zahl 1 auf Koptisch?",
          en: "What is the number 1 in Coptic?",
          ar: "ما هو العدد 1 بالقبطية؟",
        },
        options: [
          { de: "ⲟⲩⲁⲓ", en: "ⲟⲩⲁⲓ", ar: "ⲟⲩⲁⲓ" },
          { de: "ⲥⲛⲁⲩ", en: "ⲥⲛⲁⲩ", ar: "ⲥⲛⲁⲩ" },
          { de: "ϣⲟⲙⲧ", en: "ϣⲟⲙⲧ", ar: "ϣⲟⲙⲧ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q2-1-2",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet "ⲥⲛⲁⲩ"?',
          en: 'What does "ⲥⲛⲁⲩ" mean?',
          ar: 'ماذا يعني "ⲥⲛⲁⲩ"؟',
        },
        options: [
          { de: "eins", en: "one", ar: "واحد" },
          { de: "zwei", en: "two", ar: "اثنان" },
          { de: "drei", en: "three", ar: "ثلاثة" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q2-1-3",
        type: "multiple-choice",
        questionText: {
          de: 'Welche Zahl ist "ϣⲟⲙⲧ"?',
          en: 'Which number is "ϣⲟⲙⲧ"?',
          ar: 'ما هو الرقم "ϣⲟⲙⲧ"؟',
        },
        options: [
          { de: "2", en: "2", ar: "٢" },
          { de: "3", en: "3", ar: "٣" },
          { de: "4", en: "4", ar: "٤" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q2-1-4",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird die Zahl 10 geschrieben?",
          en: "How is the number 10 written?",
          ar: "كيف يُكتب الرقم 10؟",
        },
        options: [
          { de: "ⲙⲏⲧ", en: "ⲙⲏⲧ", ar: "ⲙⲏⲧ" },
          { de: "ⲯⲓⲧ", en: "ⲯⲓⲧ", ar: "ⲯⲓⲧ" },
          { de: "ⲉⲧⲓⲟⲩ", en: "ⲉⲧⲓⲟⲩ", ar: "ⲉⲧⲓⲟⲩ" },
        ],
        correctAnswerIndex: 0,
      },
    ],
  },

  "q2-2": {
    id: "q2-2",
    lessonId: "m2-l2",
    title: {
      de: "Quiz: Zahlen 11–99",
      en: "Quiz: Numbers 11–99",
      ar: "اختبار: الأعداد ١١–٩٩",
    },
    passScore: 70,
    questions: [
      {
        id: "q2-2-1",
        type: "multiple-choice",
        questionText: {
          de: "Wie bildet man die Zahl 11?",
          en: "How do you form the number 11?",
          ar: "كيف تُكوّن العدد 11؟",
        },
        options: [
          { de: "ⲙⲏⲧ ⲛ̀ⲟⲩⲁⲓ", en: "ⲙⲏⲧ ⲛ̀ⲟⲩⲁⲓ", ar: "ⲙⲏⲧ ⲛ̀ⲟⲩⲁⲓ" },
          { de: "ⲟⲩⲁⲓ ⲛ̀ⲙⲏⲧ", en: "ⲟⲩⲁⲓ ⲛ̀ⲙⲏⲧ", ar: "ⲟⲩⲁⲓ ⲛ̀ⲙⲏⲧ" },
          { de: "ⲙⲏⲧ ϣⲟⲙⲧ", en: "ⲙⲏⲧ ϣⲟⲙⲧ", ar: "ⲙⲏⲧ ϣⲟⲙⲧ" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q2-2-2",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet "ⲗ̅" (Lola mit Überstrich)?',
          en: 'What does "ⲗ̅" (Lola with overline) mean?',
          ar: 'ماذا يعني "ⲗ̅" (لاولا مع خط علوي)؟',
        },
        options: [
          { de: "zwanzig", en: "twenty", ar: "عشرون" },
          { de: "dreißig", en: "thirty", ar: "ثلاثون" },
          { de: "vierzig", en: "forty", ar: "أربعون" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q2-2-3",
        type: "multiple-choice",
        questionText: {
          de: "Welche Zahl ist fünfzig?",
          en: "Which number is fifty?",
          ar: "ما هو العدد خمسون؟",
        },
        options: [
          { de: "ⲙ̅", en: "ⲙ̅", ar: "ⲙ̅" },
          { de: "ⲛ̅", en: "ⲛ̅", ar: "ⲛ̅" },
          { de: "ⲝ̅", en: "ⲝ̅", ar: "ⲝ̅" },
        ],
        correctAnswerIndex: 1,
      },
    ],
  },

  "q2-3": {
    id: "q2-3",
    lessonId: "m2-l3",
    title: {
      de: "Quiz: Große Zahlen und Ordnungszahlen",
      en: "Quiz: Large Numbers and Ordinals",
      ar: "اختبار: الأعداد الكبيرة والترتيبية",
    },
    passScore: 70,
    questions: [
      {
        id: "q2-3-1",
        type: "multiple-choice",
        questionText: {
          de: "Wie wird 'tausend' geschrieben?",
          en: "How is 'thousand' written?",
          ar: "كيف تُكتب 'ألف'؟",
        },
        options: [
          { de: "ⲁ̅", en: "ⲁ̅", ar: "ⲁ̅" },
          { de: "ⲁ̅̅", en: "ⲁ̅̅", ar: "ⲁ̅̅" },
          { de: "ⲏⲕ", en: "ⲏⲕ", ar: "ⲏⲕ" },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "q2-3-2",
        type: "multiple-choice",
        questionText: {
          de: 'Was bedeutet "ⲡⲓϣⲟⲣⲡ"?',
          en: 'What does "ⲡⲓϣⲟⲣⲡ" mean?',
          ar: 'ماذا يعني "ⲡⲓϣⲟⲣⲡ"؟',
        },
        options: [
          { de: "der Erste", en: "the first", ar: "الأول" },
          { de: "der Zweite", en: "the second", ar: "الثاني" },
          { de: "der Dritte", en: "the third", ar: "الثالث" },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "q2-3-3",
        type: "multiple-choice",
        questionText: {
          de: "Wo stehen die Zahlen 1–2 im Verhältnis zum Substantiv?",
          en: "Where do numbers 1–2 stand in relation to the noun?",
          ar: "أين تقع الأعداد 1–2 بالنسبة للاسم؟",
        },
        options: [
          { de: "vor dem Substantiv", en: "before the noun", ar: "قبل الاسم" },
          { de: "nach dem Substantiv", en: "after the noun", ar: "بعد الاسم" },
          { de: "vor oder nach", en: "before or after", ar: "قبل أو بعد" },
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
};
